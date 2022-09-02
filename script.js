// DATA

const numbers = document.querySelectorAll(".numbers");
const hours = document.querySelectorAll(".hours");
// BUTTONS

const dailyBtn = document.getElementById("daily");
const weeklyBtn = document.getElementById("weekly");
const monthlyBtn = document.getElementById("monthly");

const btn = document.querySelectorAll(".btn");

jsonFile();

async function jsonFile() {

    const url = ("./data.json");
    const config = {
        cache: "no-cache",
    }

    const res = await fetch(url, config);
    const data = await res.json();

    console.log(res);
    console.log(data);

    // BUTTON (ACTIVE - ADD/REMOVE)
    btn.forEach(btnEach => {
        btnEach.addEventListener("click", () => {
            btn.forEach(item => {
                for(let i = 0; i < btn.length; i++) {
                    if(item !== btnEach) {
                        item.classList.remove("active");
                    }
                }
                btnEach.classList.add("active");
            });
        });
    });

    // DAILY SECTION
    dailyBtn.addEventListener("click", () => {
        for(let i = 0; i < numbers.length; i++) {
            numbers[i].innerHTML = data[i].timeframes.daily.current + "hrs";
            hours[i].innerHTML = data[i].timeframes.daily.previous + "hrs";
        };
    });

    // WEEKLY SECTION
    weeklyBtn.addEventListener("click", () => {
        for(let i = 0; i < numbers.length; i++) {
            numbers[i].innerHTML = data[i].timeframes.weekly.current + "hrs";
            hours[i].innerHTML = data[i].timeframes.weekly.previous + "hrs";
        };
    });

    // MONTHLY SECTION
    monthlyBtn.addEventListener("click", () => {
        for(let i = 0; i < numbers.length; i++) {
            numbers[i].innerHTML = data[i].timeframes.monthly.current + "hrs";
            hours[i].innerHTML = data[i].timeframes.monthly.previous + "hrs";
        };
    });

};
