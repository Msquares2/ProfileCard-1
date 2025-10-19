function updateTimeAndDay() {
    const now = new Date();

    // 1. Get the current Day of the Week
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDay = days[now.getUTCDay()];
    document.getElementById('currentDay').textContent = currentDay;

    // 2. Get the Current UTC Time
    // Format the hours, minutes, and seconds to always have two digits (e.g., 09:05:01)
    const utcHours = now.getUTCHours().toString().padStart(2, '0');
    const utcMinutes = now.getUTCMinutes().toString().padStart(2, '0');
    const utcSeconds = now.getUTCSeconds().toString().padStart(2, '0');
    const currentTimeUTC = `${utcHours}:${utcMinutes}:${utcSeconds}`;

    document.getElementById('currentTimeUTC').textContent = currentTimeUTC;
}

// Update immediately and then every 1 second (1000 milliseconds)
updateTimeAndDay();
setInterval(updateTimeAndDay, 1000);