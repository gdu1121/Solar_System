const form = document.getElementById("neptune-form");
const earthYears = document.getElementById("neptune-earth-years");
const result = document.getElementById("neptune-result");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    const neptuneYears = Number(earthYears.value) / 165;
    result.textContent = `You would be about ${neptuneYears.toFixed(2)} Neptune years old.`;
});
