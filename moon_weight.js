const form = document.getElementById("weight-form");
const earthWeight = document.getElementById("earth-weight");
const result = document.getElementById("weight-result");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    result.textContent = `You would weigh about ${(Number(earthWeight.value) * 0.165).toFixed(1)} lbs on the Moon.`;
});
