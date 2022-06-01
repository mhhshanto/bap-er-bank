document.getElementById("deposit-button").addEventListener('click', function(){
  const amount = document.getElementById("deposit-input").value;
  const amountA = parseFloat(amount);
  const newAmount = document.getElementById('deposit-total').innerText;
  const neAmount = parseFloat(newAmount);
  document.getElementById('deposit-total').innerText = neAmount + amountA;


  //cleaning 
  document.getElementById('deposit-input').value = "";
})