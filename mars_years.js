const form = document.getElementById("mars-form");
const earthYears = document.getElementById("mars-earth-years");
const result = document.getElementById("mars-result");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    const marsYears = Number(earthYears.value) / 1.88;
    result.textContent = `You would be about ${marsYears.toFixed(1)} Mars years old.`;
});
