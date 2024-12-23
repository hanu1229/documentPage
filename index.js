
document.querySelector("#toggleButton").addEventListener("click", changeSideBar);

function changeSideBar() {
    let sideBar =document.querySelector("#sideBar");
    sideBar.classList.toggle("closeSideBar");
}