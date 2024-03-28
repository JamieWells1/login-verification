usernames = [
  // some test usernames
];

passwords = [
  // some test passwords
];

let access = false;

function verifyLogin(event) {
  event.preventDefault();
  username = document.getElementById("username").value;
  password = document.getElementById("password").value;

  for (let i = 0; i < usernames.length; i++) {
    if (username === usernames[i] && password === passwords[i]) {
      access = true;
      window.location.href = "logged-in.html";
      sessionStorage.setItem("access", access);
    } else {
      console.log(access);
    }
  }
  if (access === false || access === null) {
    document.getElementById("error-message").style.display = "block";
  }
}
