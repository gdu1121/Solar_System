const form = document.getElementById("earth-form");
const hours = document.getElementById("rotation-hours");
const result = document.getElementById("earth-result");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    const elapsedHours = Number(hours.value);
    const miles = elapsedHours * 1037;
    const hourLabel = elapsedHours === 1 ? "hour" : "hours";
    result.textContent = `At the equator, Earth turns about ${miles.toFixed(0)} miles in ${hours.value} ${hourLabel}.`;
});
