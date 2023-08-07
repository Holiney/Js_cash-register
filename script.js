// This is a cash register function checkCashRegister() that takes the purchase price as the first argument (price), 
  // the payment as the second argument (cash), and the amount of cash in the register as the third argument (cid).
function checkCashRegister(price, cash, cid) {
  let change = []
  let casa = 0
  for(let b in cid){
    casa+=cid[b][1]
    console.log('--',cid[b][1])
  }
  console.log(casa)
  let amount = cash - price
  amount = amount.toFixed(2)
  cid.reverse()
  console.log(cid)
  console.log('Здача =', amount)
  let k = 0
  const nom ={
    "ONE HUNDRED": 100,
    'TWENTY': 20,
    'TEN': 10,
    'FIVE': 5,
    'ONE': 1,
    'QUARTER': 0.25,
    'DIME' : 0.1,
    'NICKEL':0.05,
    'PENNY': 0.01,
 }
 if(casa == amount){
        return { status: "CLOSED", change: cid.reverse() };

  }
 for(let i in nom){
   if(amount >= nom[i] && cid[k][1] > 0){
     const count = Math.floor(amount / nom[i]);
      const total = Math.min(count * nom[i], cid[k][1]);
      amount -= total;
      amount = amount.toFixed(2);
      cid[k][1] -= total;
      change.push([i, total ]);
      casa-=total
   }
   k+=1
 }
 console.log('-------casa------',casa)
 console.log(cid)
  if (amount > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  } else if (cid.every((item) => item[1] === 0)) {
    return { status: "CLOSED", change: change };
  } else {
    return { status: "OPEN", change: change };
  }
}

// checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))
