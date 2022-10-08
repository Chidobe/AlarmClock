const setHour = document.querySelector('select');





function setTime() {
    const date = new Date();
    const hours = date.getHours();
    const mins = date.getMinutes();
    const secs = date.getSeconds();
    const currentTime = `${hours}:${mins}:${secs}`;
    const time = document.getElementById('time');
    time.innerText = currentTime;
};

const interval = setInterval(() => setTime(), 1000);

