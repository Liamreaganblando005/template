window.onload = function() {
    const waterLevel = getWaterLevel(); // Placeholder function for fetching the water level.
    const waterLevelElement = document.querySelector('.circle-foreground');
    const waterLevelValue = document.getElementById('water-level-value');
    const statusText = document.getElementById('status-text');
    const progressBarFill = document.createElement('div');
    progressBarFill.classList.add('progress-bar-fill');
    document.getElementById('progress-bar').appendChild(progressBarFill);
    const warningElement = document.getElementById('warning');

    // Update water level display based on the value
    updateWaterLevelDisplay(waterLevel);

    // Display warning if the water level is too high
    if (waterLevel >= 70) {
        warningElement.textContent = "Warning: Evacuate as soon as possible!";
    } else {
        warningElement.textContent = "";
    }

    // Function to simulate fetching water level (for example purposes)
    function getWaterLevel() {
        return Math.floor(Math.random() * 100) + 1; // Simulate a water level between 1 and 100%
    }

    // Function to update water level display
    function updateWaterLevelDisplay(level) {
        const circleCircumference = 314; // Circumference of the circle (2 * π * radius)
        const offset = circleCircumference - (circleCircumference * level / 100);

        // Update Circle Progress
        waterLevelElement.style.strokeDashoffset = offset;

        // Update Text Value
        waterLevelValue.textContent = `${level}%`;

        // Update Status Text
        if (level <= 20) {
            statusText.textContent = "Low";
            waterLevelElement.style.stroke = "#66bb6a"; // Green for Low
            progressBarFill.style.backgroundColor = "#66bb6a";
        } else if (level <= 45) {
            statusText.textContent = "Medium";
            waterLevelElement.style.stroke = "#ffeb3b"; // Yellow for Medium
            progressBarFill.style.backgroundColor = "#ffeb3b";
        } else {
            statusText.textContent = "High";
            waterLevelElement.style.stroke = "#e53935"; // Red for High
            progressBarFill.style.backgroundColor = "#e53935";
        }

        // Update Progress Bar
        progressBarFill.style.width = `${level}%`;
    }

    // Function to handle "Monitor Again"
    document.getElementById('monitor-again').onclick = function() {
        const newLevel = getWaterLevel();
        updateWaterLevelDisplay(newLevel);
    };

    // Function to handle "Log Out"
    document.getElementById('logout-btn').onclick = function() {
        window.location.href = 'login.html'; // Redirect to login page
    };

    // Function to go to the past data page
    document.getElementById('view-past-data').onclick = function() {
        window.location.href = 'past_data.html'; // Redirect to past data page
    };
};









































