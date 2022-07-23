


document.querySelector("form").addEventListener("submit", function(e){

  e.preventDefault();

  let otp = document.querySelector("form").otp.value;

  if(otp == '123456'){
    alert("Login successful!");
    window.location.href = "index.html";
  }
  else{
    alert("Wrong OTP!");
    document.querySelector("#otp").value = "";
  }
})