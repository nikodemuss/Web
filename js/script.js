document.getElementById("im").innerHTML = "Nikodemus Stanley";
changeText();

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function changeText() {

    while (true) {
        // let i = 1;
        setTimeout(() => {
            document.getElementById("hello").innerHTML = "Hello I'm";
            document.getElementById("im").innerHTML = "Nikodemus Stanley";
            console.log("Nikodemus Stanley");
        }
            , 2000);
        await sleep(2000);

        setTimeout(() => {
            document.getElementById("im").innerHTML = "Computer Science Student";
            document.getElementById("hello").innerHTML = "Hello I'm a";
            console.log("Computer Science Student");
        }
            , 4000);
        await sleep(2000);

        setTimeout(() => {
            document.getElementById("im").innerHTML = "Software Engineer";
            document.getElementById("hello").innerHTML = "Hello I'm a";
            console.log("Software Engineer");
        }
            , 6000);
        await sleep(2000);
    }
}