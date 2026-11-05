const form = document.getElementById("saturn-form");
const earthYears = document.getElementById("saturn-earth-years");
const result = document.getElementById("saturn-result");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    const saturnYears = Number(earthYears.value) / 29.5;
    result.textContent = `You would be about ${saturnYears.toFixed(2)} Saturn years old.`;
});
