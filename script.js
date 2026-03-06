document.getElementById("login-btn").addEventListener("click", function () {
  const userNume = document.getElementById("input-user");
  const contactName = userNume.value;
  console.log(contactName);

  const userPin = document.getElementById("input-pin");
  const pin = userPin.value;
  console.log(pin);

  if (contactName == "admin" && pin == "admin123") {
    alert("login Successful");


    window.location.replace("./home.html");
  } else {
    alert("login Failed");
    return;
  }


});