const screen = document.querySelector(".screen");
const scrcalc = document.querySelector(".calculation");
screen.textContent = null;
scrcalc.textContent = null;

const btnzero = document.querySelector(".btn-zero");
const btnone = document.querySelector(".btn-one");
const btntwo = document.querySelector(".btn-two");
const btnthree = document.querySelector(".btn-three");
const btnfour = document.querySelector(".btn-four");
const btnfive = document.querySelector(".btn-five");
const btnsix = document.querySelector(".btn-six");
const btnseven = document.querySelector(".btn-seven");
const btneight = document.querySelector(".btn-eight");
const btnnine = document.querySelector(".btn-nine");
const btnplus = document.querySelector(".btn-plus");
const btnminus = document.querySelector(".btn-minus");
const btntimes = document.querySelector(".btn-times");
const btnequals = document.querySelector(".btn-equals");
const btndecimal = document.querySelector(".btn-decimal");
let numbers =[];


    

btnzero.addEventListener('click', ()=> {
    if(screen.textContent != 0) {
            if(screen.textContent.length >= 8) {
                return;
            } else {
            screen.textContent += 0;
        };
    } else {
    screen.textContent = 0;
    }
});
btnone.addEventListener('click', ()=> {
    if(screen.textContent != 0) {
        if(screen.textContent.length >= 8) {
            return;
        } else {
        screen.textContent += 1;
        };
    } else {
    screen.textContent = 1;
    }
});
btntwo.addEventListener('click', ()=> {
    if(screen.textContent != 0) {
        if(screen.textContent.length >= 8) {
            return;
        } else {
        screen.textContent += 2;
        };
    } else {
    screen.textContent = 2;
    }
});
btnthree.addEventListener('click', ()=> {
    if(screen.textContent != 0) {
        if(screen.textContent.length >= 8) {
            return;
        } else {
        screen.textContent += 3;
        };
    } else {
    screen.textContent = 3;
    }
});
btnfour.addEventListener('click', ()=> {
    if(screen.textContent != 0) {
        if(screen.textContent.length >= 8) {
            return;
        } else {
        screen.textContent += 4;
        };
    } else {
    screen.textContent = 4;
    }
});
btnfive.addEventListener('click', ()=> {
    if(screen.textContent != 0) {
        if(screen.textContent.length >= 8) {
            return;
        } else {
        screen.textContent += 5;
        };
    } else {
    screen.textContent = 5;
    }
});
btnsix.addEventListener('click', ()=> {
    if(screen.textContent != 0) {
        if(screen.textContent.length >= 8) {
            return;
        } else {
        screen.textContent += 6;
        };
    } else {
    screen.textContent = 6;
    }
});
btnseven.addEventListener('click', ()=> {
    if(screen.textContent != 0) {
        if(screen.textContent.length >= 8) {
            return;
        } else {
        screen.textContent += 7;
        };
    } else {
    screen.textContent = 7;
    }
});
btneight.addEventListener('click', ()=> {
    if(screen.textContent != 0) {
        if(screen.textContent.length >= 8) {
            return;
        } else {
        screen.textContent += 8;
        };
    } else {
    screen.textContent = 8;
    }
});
btnnine.addEventListener('click', ()=> {
    if(screen.textContent != 0) {
        if(screen.textContent.length >= 8) {
            return;
        } else {
        screen.textContent += 9;
        };
    } else {
    screen.textContent = 9;
    }
});
btnplus.addEventListener('click', ()=> {
    if (screen.textContent>0) {
    numbers.push(screen.textContent);
    numbers.push("+");
    screen.textContent = null;
    scrcalc.textContent = numbers.join("");
    } else {
        return;
    }
});
btnminus.addEventListener('click', ()=> {
    if (screen.textContent>0) {
    numbers.push(screen.textContent);
    numbers.push("-");
    screen.textContent = null;
    scrcalc.textContent = numbers.join("");
    } else {
        return;
    }
});
btntimes.addEventListener('click', ()=> {
    if (screen.textContent>0) {
    numbers.push(screen.textContent);
    numbers.push("*");
    screen.textContent = null;
    scrcalc.textContent = numbers.join("");
    } else {
        return;
    }
});
btnequals.addEventListener('click', ()=> {
    numbers.push(screen.textContent);
    numbers.push('=');
    scrcalc.textContent = numbers.join("");
    if(numbers[1] === "+") {
        let result = parseInt(numbers[0])+parseInt(numbers[2]);
        screen.textContent = result;
    }
    if(numbers[1] === "-") {
        let result = parseInt(numbers[0])-parseInt(numbers[2]);
        screen.textContent = result;
    }
    if(numbers[1] === "*") {
        let result = parseInt(numbers[0])*parseInt(numbers[2]);
        screen.textContent = result;
    }
    if(numbers[1] === "/") {
        let result = parseInt(numbers[0])/parseInt(numbers[2]);
        screen.textContent = result;
    }
    numbers = [];
});
