// home page typing

let typed = new Typed(".auto-type", {
    strings: ["Coding expert", "Coder", "Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
})


// run counter number 
// (1)
let counts = setInterval(updateed);
let upto = 0;
function updateed() {
    var count = document.getElementById("purecounter");
    count.innerHTML = ++upto;
    if (upto === 232) {
        clearInterval(counts);
    }
};

//    (2)     
let countss = setInterval(updated);
let uppto = 300;
function updated() {
    var countt = document.getElementById("purecounterr");
    countt.innerHTML = ++uppto;
    if (uppto === 521) {
        clearInterval(countss);
    }
}


// (3)



let countts = setInterval(updatted);
let uptto = 1200;
function updatted() {
    var counnt = document.getElementById("purecountter");
    counnt.innerHTML = ++uptto;
    if (uptto === 1453) {
        clearInterval(countts);
    }
}


// (4)

let counnts = setInterval(updaated);
let uptoo = 0;
function updaated() {
    var counnt = document.getElementById("purecounnter");
    counnt.innerHTML = ++uptoo;

    if (uptoo === 32) {
        clearInterval(counnts);
    }
}

