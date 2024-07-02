document.addEventListener('DOMContentLoaded', () => {
    // time in utc function
    const getTimeInUtc = () => {
        const utcString = new Date().toISOString();
        return utcString.slice(11, 19);
    }

    // Current Day of the week
    const getCurrentDay = () => {
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const currentDay = new Date().getDay();
        return daysOfWeek[currentDay];
    }


    // DOM Manipulation
    const currentDayOfWeekSpan = document.querySelector('#dayOfWeek');

    currentDayOfWeekSpan.innerText = getCurrentDay();

    const timeElement = document.getElementById('utcTime');
    let intervalId;

    // Function to update the time on the webpage
    const updateTime = () => {
        timeElement.textContent = getTimeInUtc();
    };

    const startInterval = () => {
        if (intervalId) {
            clearInterval(intervalId);
        }
        intervalId = setInterval(updateTime, 1000);
    };

    updateTime();
    startInterval();
});
