const { getContract } = require("./utils");
const data = require("./data");
const fs = require("fs");

async function addKeyValuePair(contract, contractMethodString, key, value) {
  const result = await contract.account.functionCall(
    contract.contractId,
    contractMethodString,
    { treeName: { key, value } },
    "300000000000000"
  );
  return result;
}

async function calculateGas(contract, contractMethod, dataObj) {
  let resultArr = [];
  const result = await addKeyValuePair(
    contract,
    contractMethod,
    dataObj.key,
    dataObj.value
  );
  resultArr.push(result.transaction_outcome.outcome.gas_burnt);
  for (let i = 0; i < result.receipts_outcome.length; i++) {
    resultArr.push(result.receipts_outcome[i].outcome.gas_burnt);
  }
  return resultArr.reduce((acc, curr) => acc + curr, 0);
}

async function writeResults(contract, contractMethod, dataArr) {
  let resultArr = [];
  for (let i = 0; i < dataArr.length; i++) {
    const timeBeforeCall = (Date.now());
    const result = await calculateGas(contract, contractMethod, dataArr[i]);
    const timeAfterCall = (Date.now());
    resultArr.push({ key: dataArr[i].key, value:result });
    console.log(result, ((timeAfterCall - timeBeforeCall)/1000 + " sec."));
    fs.writeFileSync("result.json", JSON.stringify(resultArr));
  }
}

async function main() {
  const contract = await getContract();
  // writeResults(contract, 'add_lookup_map', data);
  // writeResults(contract, 'setMapValue', data);
   writeResults(contract, "addAvlValue", data);
}

main();
