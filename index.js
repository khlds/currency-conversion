const cad2ngn = document.getElementById("cad2ngn");
const ngn2cad = document.getElementById("ngn2cad");
const currency1 = document.getElementById("currency1");
const currency2 = document.getElementById("currency2")
const result = document.getElementById("result")
const submit = document.getElementById("submit")
const result0 = document.getElementById("result0")
const result1 = document.getElementById("result1")
let amount;

submit.onclick = function(){
  if(cad2ngn.checked){
    amount = Number(currency1.value)
    amount = amount * 807
    result0.textContent = amount
    
  }
  else if(ngn2cad.checked){
      amount = Number(currency2.value)
      amount = amount / 807
      result1.textContent = amount
  }
  else{
    result.textContent = `Select a conversion above`
  }
  event.preventDefault()
