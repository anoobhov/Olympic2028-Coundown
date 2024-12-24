const olympicDate = new Date("July 14, 2028 00:00:00").getTime();

    // Function to update the countdown
function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = olympicDate - now;

        
    const years = Math.floor(timeLeft / (1000 * 60 * 60 * 24 * 365.25));
    const months = Math.floor((timeLeft % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30));
    const days = Math.floor((timeLeft % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        // Update the countdown elements
        document.querySelector('.years').innerHTML = `<h2>${years}</h2><p>Years</p>`;
        document.querySelector('.months').innerHTML = `<h2>${months}</h2><p>Months</p>`;
        document.querySelector('.days').innerHTML = `<h2>${days}</h2><p>Days</p>`;
        document.querySelector('.hours').innerHTML = `<h2>${hours}</h2><p>Hours</p>`;
        document.querySelector('.minutes').innerHTML = `<h2>${minutes}</h2><p>Minutes</p>`;
        document.querySelector('.seconds').innerHTML = `<h2>${seconds}</h2><p>Seconds</p>`;
    }

    setInterval(updateCountdown, 1000);

    updateCountdown();
