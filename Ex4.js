const listBilling = [
  {
    name: "SP",
    value: 67836.43
  },
  {
    name: "RJ",
    value: 36678.66
  },
  {
    name: "MG",
    value: 29229.88
  },
  {
    name: "ES",
    value: 27165.48
  },
  {
    name: "Outros",
    value: 19849.53
  },
  
]

let amount = 0;
const percentual = (v) => v * 100 / amount;

for(let i = 0; i < listBilling.length; i++){
  amount += listBilling[i].value;
}

for(let i = 0; i< listBilling.length; i++){
  console.log(`${listBilling[i].name} foi responsável por ${(percentual(listBilling[i].value)).toFixed(3)} % do faturamento \n`);
}