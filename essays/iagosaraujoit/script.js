// Create a cookie: name, value and how many days it lasts
function setCookie(name, value, days) {
  const d = new Date();
  d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = name + "=" + encodeURIComponent(value) +
    ";expires=" + d.toUTCString() + ";path=/";
}

// Read a cookie: returns its value, or "" if it does not exist
function getCookie(name) {
  const parts = document.cookie.split("; ");
  for (let i = 0; i < parts.length; i++) {
    const pair = parts[i].split("=");
    if (pair[0] === name) {
      return decodeURIComponent(pair[1]);
    }
  }
  return "";
}

// Delete a cookie by making it expire in the past
function deleteCookie(name) {
  document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/";
}

// Show the greeting box
function showGreeting() {
  const box = document.getElementById("saudacao");
  const name = getCookie("username");
  const interest = getCookie("interest");

  box.textContent = "";

  if (name === "") {
    return;
  }

  let text = "Welcome back, " + name + "!";
  if (interest !== "") {
    text = text + " Still interested in " + interest + "?";
  }
  box.textContent = text + " ";

  const link = document.createElement("a");
  link.href = "https://com.cdl.unimi.it/en";
  link.target = "_blank";
  link.textContent = "Find out how to enrol";
  box.appendChild(link);
}

// Runs every time the page loads
function checkCookie() {
  let user = getCookie("username");
  console.log("Cookie username: " + user);

  if (user === "") {
    user = prompt("Thanks for visiting! Please enter your name:", "");
    console.log("User has entered " + user);

    if (user !== "" && user !== null) {
      setCookie("username", user, 30);
    }
  }

  showGreeting();
}

// Interest buttons
const botoes = document.querySelectorAll(".botao-interesse");
for (let i = 0; i < botoes.length; i++) {
  botoes[i].addEventListener("click", function () {
    const choice = botoes[i].dataset.interesse;
    setCookie("interest", choice, 30);
    console.log("Interest saved: " + choice);
    showGreeting();
  });
}

// Forget me button
document.getElementById("esquecer").addEventListener("click", function () {
  deleteCookie("username");
  deleteCookie("interest");
  showGreeting();
  console.log("Cookies deleted");
});