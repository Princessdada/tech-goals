window.onload = function () {
  document.getElementById("slack-name").textContent = "Princess Dada";
  document.getElementById("slack-email").textContent =
    "princessdada321@gmail.com";
  document.getElementById("profile-picture").src = "/IMG_3336 2.jpg";
};
//Current time in utc
function updateTime() {
  const now = new Date();

  const utcString = now.toUTCString();
  const time = utcString.split(" ")[4];
  console.log(time);
  document.getElementById("utc-time").innerHTML = time;
  // current day
  const nowDay = now.getDay();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const day = days[nowDay];
  document.getElementById("current-day").innerHTML = day.toLocaleString();
}

setInterval(updateTime, 1000);
