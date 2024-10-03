function hideBtn() {
    let button = document.getElementById("skillsHide");
    if (button.style.display === "none") {
        button.style.display = "block";
    }
    else {
        button.style.display = "none";
    }
};
let hideButton = document.getElementById("hB");
hideButton.onclick = () => {
    let button = document.getElementById("skillsHide");
    if (button.style.display === "none") {
        button.style.display = "block";
    }
    else {
        button.style.display = "none";
    }
};
