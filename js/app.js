const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

//Fecha objetivo
const newYears = '9 Jan 2023';

let countdown = () => {
    //Establece la fecha objetivo
    const newYearsDate = new Date(newYears);
    //Establece la fecha actual
    const currentDate = new Date();

    //Devuelve el total de segundos restantes
    const totalSeconds = (newYearsDate - currentDate) / 1000;

    //Formulas para obtener dias, horas, minutos y segundos
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    //Insertar los datos al DOM
    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minutesEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);
};

//Agrega un cero cuando el tiempo sea menor a 10
let formatTime = time => {
    return time < 10 ? `0${time}` : time;
};

//Funcion de inicio
countdown();

setInterval(() => {
    countdown();
}, 1000);
