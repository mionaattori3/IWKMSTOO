const countdown = 1;
let launch = true;
let timers = [];
const rg = document.getElementById("rocket");
const count = document.getElementById("Count");
const button = document.getElementById("cryaboutit")

const s1 = document.getElementById("state1")
const s2 = document.getElementById("state2")
const s3 = document.getElementById("state3")

s3.style.display = "none"
s2.style.display = "none"
function start() {
    let RN = Math.floor(Math.random() * 3 + 1)
    s2.style.display = "block"
    s1.style.display = "none"
    launch = true;
    timers = []; 
    for (let i = countdown; i >= 0; i--) {
        const t = setTimeout(() => {
            if (!launch) return; 
            count.textContent = i;
        }, (countdown - i) * 1000);

        timers.push(t);
    }

    const launchTimer = setTimeout(() => {
        if (launch) {
            if (RN === 1 || RN === 2){
                rg.classList.add("flying");
                count.textContent = "Lift off"
                setTimeout(() => {
                    s3.style.display = "block"
                    s2.style.display = "none"
                }, 1000);
            }
            else {
                count.textContent = "oh noo..."
                button.style.display = "none"
                abort(true)
            }
            console.log(RN)
        }
    }, countdown * 1000);

    timers.push(launchTimer);
}

function abort(failed = false) {
    if (!failed){
        launch = false;
        count.textContent = "aborded"
    }
    for (const t of timers) {
        clearTimeout(t);
    }
    
    timers = [];
    setTimeout(() => {
        button.style.display = "inline"
        s3.style.display = "none"
        s2.style.display = "none"
        s1.style.display = "block"
    },2000)
}
function again(){
    s1.style.display = "block"
    s2.style.display = "none"
    s3.style.display = "none"
    rg.classList.remove("flying")
}