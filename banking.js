// deposit update
document.getElementById('deposit-button').addEventListener('click', function(){
  const inputAmount = parseFloat(document.getElementById('deposit-input').value);

  const depositAmount =parseFloat(document.getElementById('deposit-total').innerText)
  document.getElementById('deposit-total').innerText =inputAmount + depositAmount ;
  // balance update 
  const balanceAmount = parseFloat(document.getElementById('balance-total').innerText);
  document.getElementById('balance-total').innerText = balanceAmount + inputAmount;
  // cleaning
  document.getElementById('deposit-input').value = '';
})
// withdraw update
document.getElementById('withdraw-button').addEventListener('click', function(){
  const withdrawInputAmount = parseFloat(document.getElementById('withdraw-input').value);
  const withdrawAmount = parseFloat(document.getElementById('withdraw-total').innerText);
  const balanceeAmount = parseFloat(document.getElementById('balance-total').innerText);
  document.getElementById('withdraw-total').innerText = withdrawInputAmount + withdrawAmount;
  document.getElementById('balance-total').innerText = balanceeAmount - withdrawInputAmount;

  document.getElementById('withdraw-input').value = "";
})