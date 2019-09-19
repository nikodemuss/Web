document.getElementById("im").innerHTML = "0";
changeText();

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function changeText() {

    while (true) {
        // let i = 1;
        setTimeout(() => { document.getElementById("im").innerHTML = "1"; console.log("1");}, 2000);
        await sleep(2000);
        setTimeout(() => { document.getElementById("im").innerHTML = "2"; console.log("2"); }, 4000);
        await sleep(2000);
        setTimeout(() => { document.getElementById("im").innerHTML = "3"; console.log("3"); }, 6000);
        await sleep(2000);
    }
}