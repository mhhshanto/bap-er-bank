document.getElementById("deposit-button").addEventListener('click', function(){
 
  const amountA = parseFloat(document.getElementById("deposit-input").value);
  
  const neAmount = parseFloat(document.getElementById('deposit-total').innerText);
  document.getElementById('deposit-total').innerText = neAmount + amountA;


  //cleaning 
  document.getElementById('deposit-input').value = "";
})