import { ethers, utils } from "ethers";
import Contract from "@contracts/artifacts/contracts/YOURCONTRACT.sol/YOURCONTRACT.json";
import fs from "fs";
import path from "path";

const extractContractData = async (contract, ...args) => {
  try {
    const o = await Promise.all(
      args.map(async (k) => [k, await contract[k]()])
    );
    return Object.fromEntries(o);
  } catch (e) {
    return null;
  }
};

const getContractData = async (values) => {
  const contract = new ethers.Contract(
    process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
    Contract.abi,
    new ethers.providers.JsonRpcProvider()
  );

  const data = await extractContractData(contract, ...values.split(","));
  return data;
};

export default async function handler(req, res) {
  const { values } = req.query;
  const hash = utils.solidityPack(
    ["string", "string"],
    [process.env.NEXT_PUBLIC_CONTRACT_ADDRESS, values]
  );

  const CACHE_PATH = path.resolve(`.contract-data-${hash.replace("0x", "")}`);

  let cachedData;
  try {
    cachedData = JSON.parse(fs.readFileSync(CACHE_PATH, "utf8"));
  } catch (error) {}

  if (!cachedData) {
    const data = await getContractData(values);
    try {
      fs.writeFileSync(CACHE_PATH, JSON.stringify(data), "utf8");
    } catch (error) {
      console.log(error);
    }
    cachedData = data;
  }

  // Cache for the max, 31 days
  //res.setHeader("Cache-Control", `public, max-age=2678400`);
  res.status(200).json(cachedData);
}