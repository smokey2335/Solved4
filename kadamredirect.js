document.addEventListener("DOMContentLoaded", function() {
    // Function to generate a unique token
    function generateToken() {
        return Math.random().toString(36).substr(2);
    }

    // Function to set a cookie
    function setCookie(name, value, minutes) {
        const d = new Date();
        d.setTime(d.getTime() + (minutes * 60 * 1000));
        const expires = "expires=" + d.toUTCString();
        document.cookie = name + "=" + value + ";" + expires + ";path=/";
    }

    // Function to get a cookie
    function getCookie(name) {
        const nameEQ = name + "=";
        const ca = document.cookie.split(';');
        for(let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    // Check if the token exists
    let token = getCookie("js_challenge_token");
    if (!token) {
        // If no token, generate and set a new one
        token = generateToken();
        setCookie("js_challenge_token", token, 1); // Token expires in 1 minute
    }

    // Redirect function
    function redirectTo(targetUrl) {
        if (getCookie("js_challenge_token")) {
            window.location.href = targetUrl;
        } else {
            alert("Redirection failed. JavaScript challenge not passed.");
        }
    }

    // Set a delay before redirection to simulate user behavior
    setTimeout(function() {
        redirectTo("https://bit.ly/smashwatchkada");
    }, 1); // 5 seconds delay for demonstration
});
