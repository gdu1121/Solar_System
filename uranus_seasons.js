const form = document.getElementById("uranus-form");
const earthYears = document.getElementById("uranus-earth-years");
const result = document.getElementById("uranus-result");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    const seasons = Number(earthYears.value) / 21;
    result.textContent = `${earthYears.value} Earth years is about ${seasons.toFixed(1)} Uranus seasons.`;
});
