window.onload = function() {
    const pastData = JSON.parse(localStorage.getItem('pastData'));
    const pastLevelsContainer = document.getElementById('past-levels');

    if (pastData && pastData.length > 0) {
        pastData.forEach(data => {
            const pastLevelDiv = document.createElement('div');
            pastLevelDiv.classList.add('past-level');
            
            if (data.waterLevel <= 20) {
                pastLevelDiv.classList.add('low');
            } else if (data.waterLevel <= 45) {
                pastLevelDiv.classList.add('medium');
            } else {
                pastLevelDiv.classList.add('high');
            }

            pastLevelDiv.innerText = `${data.waterLevel}% - ${data.time}`;
            pastLevelsContainer.appendChild(pastLevelDiv);
        });
    } else {
        const noDataMessage = document.createElement('div');
        noDataMessage.innerText = 'No past water level data available.';
        noDataMessage.style.fontSize = '18px';
        noDataMessage.style.color = '#555';
        noDataMessage.style.marginTop = '20px';
        pastLevelsContainer.appendChild(noDataMessage);
    }
};

// Function to go back to the Dashboard
function goBack() {
    window.location.href = 'dashboard.html';
}

