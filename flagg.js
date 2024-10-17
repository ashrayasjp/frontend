
    const flags = ["ger.png", "france.png", "flag3.jpg"]; // Update with correct filenames
    let currentIndex = 0;
    const flagContainer = document.getElementById('flag-container');
    const prevButton = document.getElementById('prev-btn');
    const nextButton = document.getElementById('next-btn');

    function changeFlag(direction) {
        currentIndex += direction;
        if (currentIndex < 0) {
            currentIndex = flags.length - 1;
        } else if (currentIndex >= flags.length) {
            currentIndex = 0;
        }
        flagContainer.style.backgroundImage = `url('${flags[currentIndex]}')`;
    }

    // Initial flag display
    flagContainer.style.backgroundImage = `url('${flags[currentIndex]}')`;

    // Event listeners for buttons
    prevButton.addEventListener('click', () => changeFlag(-1));
    nextButton.addEventListener('click', () => changeFlag(1));

