const form = document.getElementById("venus-form");
const earthYears = document.getElementById("venus-earth-years");
const result = document.getElementById("venus-result");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    const venusDays = Number(earthYears.value) * 365.25 / 243;
    result.textContent = `${earthYears.value} Earth years is about ${venusDays.toFixed(1)} Venus days.`;
});
