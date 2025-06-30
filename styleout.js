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
        alert("Sign-up successful! Proceed to Login.");
        window.location.href = "login.htm";
    }

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
