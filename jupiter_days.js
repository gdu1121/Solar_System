const form = document.getElementById("jupiter-form");
const jupiterDays = document.getElementById("jupiter-days");
const result = document.getElementById("jupiter-result");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    const earthHours = Number(jupiterDays.value) * 9.9;
    result.textContent = `${jupiterDays.value} Jupiter days is about ${earthHours.toFixed(1)} Earth hours.`;
});
