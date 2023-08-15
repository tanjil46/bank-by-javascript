

const inputEmail=document.getElementById("input-email");



const inputPassword= document.getElementById("input-pass")


document.getElementById("btn-submit").addEventListener("click",function(){

       const email=inputEmail.value;
     const passWord=inputPassword.value;

  if(email.endsWith("@gmail.com")==true && passWord==='12345678'){
   window.location.href='bank.html';
  }else{
    alert("unvalid user");
  }







});











            