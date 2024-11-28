function SendOtp(){
const email = document.getElementById("email");
const otpverify =document.getElementsByClassName("email verify")[0];

let opt_code = Math.floor(Math.random() * 10000)
let emailbody =`<h1>Your OTP is</h1> ${opt_code}` ;

Email.send({
    SecureToken : "4b49b332-2083-4ef6-b990-b878eacedb03",
    To : email.value,
    From : "amarjitshende74@gmail.com",
    Subject : "Email OPT using javascript",
    Body :emailbody,
}).then(
  message =>{
    if(message === "OK"){
        alert("OTP send to your email" +" " + email.value);
        otpverify.style.display ='flex'
        let otp_inp = document.getElementById('otp-input');
        let otp_btn = document.getElementById('btn-verify-otp');
        
        otp_btn.addEventListener('click', ()=>{
            if( otp_inp.value == opt_code){
                alert("Email adress verifyed.....")
                otpverify.style.display="none";
                email.value ="";
                otp_inp = "";
            }
            else{
                alert("Invalid OTP...")
            }
        })
    }
  }
);

}