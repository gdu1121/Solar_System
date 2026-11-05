const sun = document.getElementById("simulation-sun");
const simulationStatus = document.getElementById("simulation-status");
const sunButton = document.getElementById("sun-button");
const resetButton = document.getElementById("reset-button");
const space = document.querySelector(".space");

const orbitSpeedFactor = 0.5625;
const ejectionSpeedFactor = 0.75;

const planets = [
    {
        element: document.getElementById("mercury"),
        radius: 80,
        speed: 0.04 * orbitSpeedFactor,
        angle: 0,
        x: 0,
        y: 0,
        vx: 0,
        vy: 0
    },
    {
        element: document.getElementById("venus"),
        radius: 120,
        speed: 0.03 * orbitSpeedFactor,
        angle: 1,
        x: 0,
        y: 0,
        vx: 0,
        vy: 0
    },
    {
        element: document.getElementById("earth"),
        radius: 165,
        speed: 0.025 * orbitSpeedFactor,
        angle: 2,
        x: 0,
        y: 0,
        vx: 0,
        vy: 0
    },
    {
        element: document.getElementById("mars"),
        radius: 210,
        speed: 0.02 * orbitSpeedFactor,
        angle: 3,
        x: 0,
        y: 0,
        vx: 0,
        vy: 0
    },
    {
        element: document.getElementById("jupiter"),
        radius: 270,
        speed: 0.012 * orbitSpeedFactor,
        angle: 4,
        x: 0,
        y: 0,
        vx: 0,
        vy: 0
    },
    {
        element: document.getElementById("saturn"),
        radius: 330,
        speed: 0.009 * orbitSpeedFactor,
        angle: 5,
        x: 0,
        y: 0,
        vx: 0,
        vy: 0
    },
    {
        element: document.getElementById("uranus"),
        radius: 390,
        speed: 0.006 * orbitSpeedFactor,
        angle: 6,
        x: 0,
        y: 0,
        vx: 0,
        vy: 0
    },
    {
        element: document.getElementById("neptune"),
        radius: 440,
        speed: 0.004 * orbitSpeedFactor,
        angle: 7,
        x: 0,
        y: 0,
        vx: 0,
        vy: 0
    }
];

let sunDisappeared = false;

function setPlanetPosition(planet, x, y) {
    planet.element.style.left = `${x}px`;
    planet.element.style.top = `${y}px`;
    planet.element.style.transform = "translate(-50%, -50%)";
}

function resetSimulation() {
    const centerX = space.clientWidth / 2;
    const centerY = space.clientHeight / 2;

    sunDisappeared = false;
    sun.style.opacity = "1";
    sun.style.transform = "translate(-50%, -50%) scale(1)";
    sunButton.disabled = false;
    simulationStatus.textContent = "The planets are orbiting normally.";

    planets.forEach((planet, index) => {
        planet.angle = index + 0.5;
        planet.x = centerX + Math.cos(planet.angle) * planet.radius;
        planet.y = centerY + Math.sin(planet.angle) * planet.radius;
        planet.vx = 0;
        planet.vy = 0;
        setPlanetPosition(planet, planet.x, planet.y);
    });
}

function updatePlanets() {
    const centerX = space.clientWidth / 2;
    const centerY = space.clientHeight / 2;

    planets.forEach((planet) => {
        if (!sunDisappeared) {
            planet.angle += planet.speed;

            const x = centerX + Math.cos(planet.angle) * planet.radius;
            const y = centerY + Math.sin(planet.angle) * planet.radius;

            setPlanetPosition(planet, x, y);
        } else {
            planet.x += planet.vx;
            planet.y += planet.vy;

            setPlanetPosition(planet, planet.x, planet.y);
        }
    });

    requestAnimationFrame(updatePlanets);
}

sunButton.addEventListener("click", function () {
    if (sunDisappeared) {
        return;
    }

    sunDisappeared = true;
    sun.style.opacity = "0";
    sun.style.transform = "translate(-50%, -50%) scale(0)";
    sunButton.disabled = true;
    simulationStatus.textContent =
        "The Sun has disappeared. The planets are now moving in straight lines.";

    const centerX = space.clientWidth / 2;
    const centerY = space.clientHeight / 2;

    planets.forEach((planet) => {
        const x = centerX + Math.cos(planet.angle) * planet.radius;
        const y = centerY + Math.sin(planet.angle) * planet.radius;

        planet.x = x;
        planet.y = y;

        planet.vx = -Math.sin(planet.angle) * planet.speed * planet.radius * 12 * ejectionSpeedFactor;
        planet.vy = Math.cos(planet.angle) * planet.speed * planet.radius * 12 * ejectionSpeedFactor;
    });
});

resetButton.addEventListener("click", function () {
    resetSimulation();
});

planets.forEach((planet) => {
    planet.element.style.position = "absolute";
    planet.element.style.transform = "translate(-50%, -50%)";
});

resetSimulation();
requestAnimationFrame(updatePlanets);