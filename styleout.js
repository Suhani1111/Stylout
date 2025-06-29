function sendOTP() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const emailPattern = /^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com|outlook\.com|hotmail\.com)$/;
  
    if (!name || !email || !password) {
      alert("Please fill all fields.");
      return;
    }

     if (!emailPattern.test(email)) {
      alert("Please enter a valid email address ending in @gmail.com, @yahoo.com, etc.");
      return;
    }
    if (password.length < 6 || password.includes(" ")) {
      alert("Password must be 6+ characters with no spaces.");
      return;
    }
    else{
        localStorage.setItem("signupName", name);
        localStorage.setItem("signupEmail", email);
        localStorage.setItem("signupPassword", password);
        localStorage.setItem("isVerified", "false");
        alert("Sign-up successful! Proceed to OTP verification.");
        window.location.href = "otp.htm";
    }

  }

function verifyOTP() {
  const otp1 = document.getElementById("otp1").value.trim();
  const otp2 = document.getElementById("otp2").value.trim();
  const otp3 = document.getElementById("otp3").value.trim();
  const otp4 = document.getElementById("otp4").value.trim();

  const enteredOTP = otp1 + otp2 + otp3 + otp4;


  if (enteredOTP === "1234") {
    alert("OTP verified.Account created successfully!");
    localStorage.setItem("isVerified", "true");
    window.location.href = "styleout.htm";
  } else {
    alert("Invalid OTP. Try 1234 as dummy.")}
}
  
  function login() {
    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value.trim();
    const storedEmail = localStorage.getItem("signupEmail");
    const storedPass = localStorage.getItem("signupPassword");
  
    if (email === storedEmail && password === storedPass) {
      alert("Login successful! Redirecting to HomePage.");
      localStorage.setItem("isVerified", "true");
      window.location.href = "styleout.htm";
    } else {
      alert("Wrong email or password.");
    }
  }
  const otpInputs = document.querySelectorAll(".optin input");

  if (otpInputs.length > 0) {
    otpInputs.forEach((input, index) => {
      input.addEventListener("input", () => {
        if (input.value.length === 1 && index < otpInputs.length - 1) {
          otpInputs[index + 1].focus();
        }
      });
    });
  }
  