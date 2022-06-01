
               // login process 
document.getElementById("btn").addEventListener('click', function(){
  const pass = document.getElementById('pass').value;
  const mail = document.getElementById('mail').value;
  if(mail == "h" & pass == "h"){
    window.location.href = "http://127.0.0.1:5500/banking.html";
  }
  else{
    window.location.href = "http://google.com";
  }
})

// deposit button handle 
