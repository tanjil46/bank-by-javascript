

const depositAmount=document.getElementById("deposit-amount");
const withdrawAmount=document.getElementById("withdraw-amount");
const yourBalance=document.getElementById("balance");
const depositInput=document.getElementById("deposit-input");
const withdrawInput=document.getElementById("withdraw-input");
const depositBtn=document.getElementById("deposit-btn");












depositBtn.addEventListener("click",function(){

    const newdepositValuestring=depositInput.value;
    const newdepositValue=parseFloat(newdepositValuestring);

       






    depositInput.value='';
   
   

    const previdepositTotalShowstring=depositAmount.innerText;

    const previdepositTotalShow=parseFloat(previdepositTotalShowstring)
    
    
    const presentDepositAmount=previdepositTotalShow+newdepositValue;

  
      depositAmount.innerText=presentDepositAmount;
  


    const totalBalancestring=yourBalance.innerText;

    const totalBalance=parseFloat(totalBalancestring);

    const banlanceWithDeposit=totalBalance+newdepositValue;

    yourBalance.innerText=banlanceWithDeposit;

    

});





                            //    WITHDRAW 

    

                           
     document.getElementById("withdraw-btn").addEventListener("click",function(){

          const withdrawAmountValueSring=withdrawInput.value;
              const newWithdrawAmount=parseFloat(withdrawAmountValueSring);
          


              const previousewithdrawAmountString=withdrawAmount.innerText;

              const preWithdrawAmount=parseFloat(previousewithdrawAmountString);


              





              const presentWithdrawAmount=preWithdrawAmount+newWithdrawAmount;

              withdrawAmount.innerText=presentWithdrawAmount;

       
             

               




              const totalBalancestring=yourBalance.innerText;

              const totalBalance=parseFloat(totalBalancestring);



            
              
              if(newWithdrawAmount>totalBalance){
              alert('insufficent Balance')
                return;
            
               }
                    






          
              const banlanceWithWithdraw=totalBalance-newWithdrawAmount;
          
              yourBalance.innerText=banlanceWithWithdraw;

                      






              withdrawInput.value='';




     });                   
