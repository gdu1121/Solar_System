const form = document.getElementById("mercury-form");
const earthYears = document.getElementById("earth-years");
const result = document.getElementById("mercury-result");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    const mercuryYears = Number(earthYears.value) * 365.25 / 88;
    result.textContent = `You would be about ${mercuryYears.toFixed(1)} Mercury years old.`;
});
