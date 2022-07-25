const x = 10 + 11;
console.log(x);

const form = document.getElementById("form");

form.addEventListener("submit", e => {
    e.preventDefault();
    checkInput();
})

function checkInput() {
    const username = document.getElementById("username").value;
    const checkname = document.getElementById("check").value;

    if (username === "" || checkname === "") {
        return alert("Username cannot be blank");
    }

    if (username && checkname) {
        const splitted = username.split("")
        const filtered = splitted.filter((obj) => obj === checkname);
        console.log("You have found ", filtered.length + " matches");
    }
}
