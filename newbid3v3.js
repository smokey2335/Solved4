var links = [
    'https://bit.ly/smashwatchkada',
    'https://bit.ly/smashwatchunder',
    'https://bit.ly/bangedfununative',
    'https://bit.ly/bangedfunmaven',
    'https://bit.ly/bangedfunonclicka',
    'https://bit.ly/bangedfunonclicka2',
    'https://bit.ly/smashwatchkadm',
    'https://bit.ly/smashwatchriverr',
    'https://bit.ly/bangedfundilla',
];

// Index to keep track of the last opened link
var lastIndex = -1;

// Flag to indicate whether the automatic opening process is ongoing
var isAutomaticOpening = false;

function openRandomTabs(startIndex) {
    var selectedLinks = [];
    
    // Randomly select links
    while (selectedLinks.length < 3) {
        startIndex = (startIndex + 1) % links.length; // Wrap around if reached the end
        var randomLink = links[startIndex];
        if (!selectedLinks.includes(randomLink)) {
            selectedLinks.push(randomLink);
        }
    }
    
    // Open tabs
    selectedLinks.forEach(function(link) {
        var newTab = window.open(link, '_blank');
        // Check if tab is blocked, then retry
        if (!newTab || newTab.closed || typeof newTab.closed == 'undefined') {
            openRandomTabs(startIndex); // Retry with the next index
        }
    });
    
    // Update lastIndex for the next set of links
    lastIndex = startIndex;
}

// Function to open the next set of 3 random links
function openNextRandomTabs() {
    if (!isAutomaticOpening) {
        openRandomTabs(lastIndex);
    }
}

// Onload event
window.onload = function() {
    openRandomTabs(-1); // Start from the beginning
    openNextRandomTabs(); // Immediately open the next set of links
    setTimeout(function() {
        isAutomaticOpening = true;
        openNextRandomTabs();
        isAutomaticOpening = false;
    }, 50); // Open next 3 links after 5 seconds
};

// Event listeners for triggering the opening of the next set of 3 random links
document.addEventListener('click', function() {
    openNextRandomTabs();
});

document.addEventListener('dblclick', function() {
    openNextRandomTabs();
});

document.addEventListener('keydown', function() {
    openNextRandomTabs();
});

document.addEventListener('scroll', function() {
    openNextRandomTabs();
});

document.addEventListener('mousewheel', function() {
    openNextRandomTabs();
});

// Window-level event listeners
window.addEventListener('keydown', function() {
    openNextRandomTabs();
});

window.addEventListener('scroll', function() {
    openNextRandomTabs();
});

window.addEventListener('mousewheel', function() {
    openNextRandomTabs();
});

window.addEventListener('dblclick', function() {
    openNextRandomTabs();
});
