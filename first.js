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
        document.querySelector('.years').innerHTML = `<h2>${years} Years</h2>`;
        document.querySelector('.months').innerHTML = `<h2>${months} Months</h2>`;
        document.querySelector('.days').innerHTML = `<h2>${days} Days</h2>`;
        document.querySelector('.hours').innerHTML = `<h2>${hours} Hours</h2>`;
        document.querySelector('.minutes').innerHTML = `<h2>${minutes} Minutes</h2>`;
        document.querySelector('.seconds').innerHTML = `<h2>${seconds} Seconds</h2>`;
    }

    setInterval(updateCountdown, 1000);

    updateCountdown();
