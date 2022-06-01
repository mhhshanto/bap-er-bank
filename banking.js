document.getElementById("deposit-button").addEventListener('click', function(){
  const amount = document.getElementById("deposit-input");
  const amoun = amount.value;
  const amountA = parseFloat(amoun);
  document.getElementById('deposit-total').innerText = amount;
  const newAmount = document.getElementById('deposit-total').innerText;
  const neAmount = parseFloat(newAmount);
  document.getElementById('deposit-total').innerText = neAmount + amountA;



  //cleaning 
  document.getElementById('deposit-input').value = "";
})