

document.querySelector("form").addEventListener("submit", function(e){
  e.preventDefault();

  // console.log("submit");

    let phone = document.querySelector("#phone").value;
  console.log(phone);
  // sendOTP(phone);



  if(phone.length === 10){
    window.location.href = "otp.html";
  }
  else if( phone.length === 13 && phone[0]=='+' && phone[1]== '9' && phone[2]== '1' ){
    window.location.href = "otp.html";
  }
  else{
    alert("Enter your phone number");
    document.querySelector("#phone").value = "";
  }

});
