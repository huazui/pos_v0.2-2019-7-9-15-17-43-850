'use strict';

function sumInputItem(inputs){
  let longInput=inputs.length;
  let sumInput=[{name:inputs[0],count:1}];
  for (let i=1;i<longInput;i++){
    let long=sumInput.length;
    for(let j=0;j<long;j++){
      if(inputs[i]==(sumInput[j].name)){
        (sumInput[j]).count=(sumInput[j]).count+1;
        break;
      }
      if(j==long-1){
        sumInput.push({name:inputs[i],count:1});
      }
    }
  }
  return sumInput;
}
function jsonReceipt(inputs) {
  let inputsItem = sumInputItem(inputs);
  let allItem = loadAllItems();
  let jReceipt = [];
  let itemLength = allItem.length;
  let inputLength = inputsItem.length;
  for (let i = 0; i < inputLength; i++)
    for (let j = 0; j < itemLength; j++) {
      if ((inputsItem[i]).name == (allItem[j]).barcode) {
        jReceipt.push({
          "name": (allItem[j]).name,
          "counts": (inputsItem[i]).count,
          "price": ((allItem[j]).price).toFixed(2),
          "theSum":  ((allItem[j]).price * (inputsItem[i].count)).toFixed(2),
          "unit": allItem[j].unit
        });

      }
    }
  return jReceipt;
}
function printReceipt(inputs) {
  let resultReceipt = "***<没钱赚商店>收据***";
  let sum = 0;
  resultReceipt = resultReceipt + '\n';
  let inputsItem = jsonReceipt(inputs);
  let inputsLength = inputsItem.length;
  for (let i = 0; i < inputsLength; i++) {
    resultReceipt = resultReceipt + "名称：" + inputsItem[i].name + "，数量：" + inputsItem[i].counts + inputsItem[i].unit+"，单价：" + inputsItem[i].price + "(元)，小计：" + inputsItem[i].theSum + "(元)" + '\n';
    sum = sum + parseInt(inputsItem[i].theSum);
  }
  sum = sum.toFixed(2);
  resultReceipt = resultReceipt + "----------------------" + '\n';
  resultReceipt = resultReceipt + "总计：" + sum + "(元)"+'\n'+"**********************";

  console.log( resultReceipt);

}
