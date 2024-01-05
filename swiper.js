//Date Translation
function formatDate(inputDate) {
  const monthAbbreviations = [
    "Jan",
    "Feb",
    "Mär",
    "Apr",
    "Mai",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Okt",
    "Nov",
    "Dez",
  ];

  const daysOfWeek = ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"];

  const dateObject = new Date(inputDate);

  const dayOfWeek = daysOfWeek[dateObject.getDay()];
  const day = dateObject.getDate();
  const monthAbbreviation = monthAbbreviations[dateObject.getMonth()];
  const year = dateObject.getFullYear().toString().slice(-2);

  return `${dayOfWeek}. ${day}.${monthAbbreviation} ${year}`;
}
// Durchlaufe alle Elemente mit der Klasse "dateclass"
const elements = document.querySelectorAll(".dateclass");

// Aktualisiere den Text jedes Elements
elements.forEach((element) => {
  const originalDate = element.textContent;
  const formattedDate = formatDate(originalDate);
  element.textContent = formattedDate;
});

//MS Signup Date
document.addEventListener("DOMContentLoaded", function () {
  var observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      if (mutation.type === "childList" && mutation.addedNodes.length > 0) {
        updateDate();
      }
    });
  });

  var targetNode = document;
  var config = { childList: true, subtree: true };

  observer.observe(targetNode, config);

  function updateDate() {
    var signupDateElement = document.querySelector(".signup-date");

    if (signupDateElement) {
      var originalDateText = signupDateElement.innerText;
      var dateObject = new Date(originalDateText);

      if (!isNaN(dateObject.getTime())) {
        var germanDateFormat =
          dateObject.getDate() +
          ". " +
          (dateObject.getMonth() + 1) +
          ". " +
          dateObject.getFullYear();
        signupDateElement.innerText = germanDateFormat;
      }
    }
  }
});
