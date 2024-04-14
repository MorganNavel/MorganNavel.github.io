

const meeting_date = document.getElementById('meeting_date');
const couple_date = document.getElementById('couple_date');
const first_met_date = document.getElementById('first_met_date');
const  내새꾸 = document.getElementById('단비_생일');
const userLanguage = navigator.language || navigator.userLanguage;

function get_time_together(){
    const now = new Date().getTime();
    let count_down_date = 'April 7,'+(new Date().getFullYear());
    if(now > new Date(count_down_date).getTime()){
        count_down_date = 'April 7,'+(new Date().getFullYear()+1);
    }
    count_down_date = new Date(count_down_date).getTime();
    const time_remaining = now - count_down_date;
    time_together.innerHTML = process_date(time_remaining);
}


function get_time_meeting(){
    const now = new Date().getTime();
    let count_down_date = 'December 26, 2023';
    count_down_date = new Date(count_down_date).getTime();
    const time_remaining = now - count_down_date;
    meeting_date.innerHTML = process_date(time_remaining);
}
function get_time_couple(){
    const now = new Date().getTime();
    let count_down_date = 'April 7, 2023';
    count_down_date = new Date(count_down_date).getTime();
    const time_remaining = now - count_down_date;
    couple_date.innerHTML = process_date(time_remaining);
}
function get_time_first_met(){
    const now = new Date().getTime();
    let count_down_date = 'Mars 5, 2023';
    count_down_date = new Date(count_down_date).getTime();
    const time_remaining = now - count_down_date ;
    first_met_date.innerHTML = process_date(time_remaining);
}
function get_anniversary(){
    const now = new Date().getTime();
    let anniversary = 'November 19,'+(new Date().getFullYear());
    if(now > new Date(anniversary).getTime()){
        anniversary = 'November 19,'+(new Date().getFullYear()+1);
    }
    const count_down_date = new Date(anniversary).getTime();
    const time_remaining = count_down_date - now;
    내새꾸.innerHTML = process_date(time_remaining);
}

function process_date(date){
    const days = Math.floor(date / (1000 * 60 * 60 * 24));
    const hours = Math.floor((date % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((date % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((date % (1000 * 60)) / 1000);
    if(userLanguage === 'ko-KR'){
        return `${days}일 ${hours}시간 ${minutes}분 ${seconds}초`;
    }

    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

function get_times(){
    get_time_meeting();
    get_time_couple();
    get_time_first_met();
    get_anniversary();
}
const count_down_interval = setInterval(() => {
    get_times();
},1000);



const chronos = document.querySelectorAll(".chrono");

document.addEventListener("click", (event) => {
    const isButtonClick = event.target.classList.contains("toggleButton");
    const isChronoContent = event.target.classList.contains("chronoContent");

    if (!isButtonClick && !isChronoContent) {
        chronos.forEach(chrono => {
            chrono.classList.remove("active");
        });
    }
});

chronos.forEach(chrono => {
    const toggleButton = chrono.querySelector(".toggleButton");
    toggleButton.addEventListener("click", () => {
        chronos.forEach(otherChrono => {
            if (otherChrono !== chrono) {
                otherChrono.classList.remove("active");
            }
        });

        chrono.classList.toggle("active");
    });
});
