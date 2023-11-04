function countdown() {
    const lastDate = new Date("December 25, 2024 00:00:00").getTime();
    const currentDate = Date.now(); 
    const gap = lastDate - currentDate;

    // Time define

    const seconds = 1000;
    const minutes = seconds * 60;
    const hours = minutes * 60;
    const days = hours * 24;

    // Math

    const textDays = Math.floor(gap / days);
    const textHours = Math.floor((gap % days) / hours);
    const textMinutes = Math.floor((gap % hours) / minutes); 
    const textSeconds = Math.floor((gap % minutes) / seconds);

    // Append

    document.querySelector("#days").innerText = textDays;
    document.querySelector("#hours").innerText = textHours;
    document.querySelector("#minutes").innerText = textMinutes; 
    document.querySelector("#seconds").innerText = textSeconds;
}

countdown();
