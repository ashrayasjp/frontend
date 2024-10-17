async function fetchScores() {
    try {
        const response = await fetch('/api/scores');
        const data = await response.json();

        const scoresDiv = document.getElementById('scores');
        scoresDiv.innerHTML = ''; // Clear previous scores

        data.matches.forEach(match => {
            const scoreDiv = document.createElement('div');
            scoreDiv.className = 'score';
            scoreDiv.innerText = `${match.homeTeam.name} ${match.score.fullTime.homeTeam} - ${match.score.fullTime.awayTeam} ${match.awayTeam.name}`;
            scoresDiv.appendChild(scoreDiv);
        });
    } catch (error) {
        console.error('Error fetching scores:', error);
    }
}

// Fetch scores every 30 seconds
setInterval(fetchScores, 30000);
fetchScores();
