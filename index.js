// true : 사이드바 열려있음 / false : 사이드바 닫힘 / 기본값 : true
let menuIconState = true;
document.querySelector("#menu_icon").addEventListener("click", changeSideBar);

function changeSideBar() {
    let sideBar = document.querySelector("#sidebar");
    let searchIcon = document.querySelector("#search_icon");
    let title = document.querySelector("#title");
    sideBar.classList.toggle("close_Sidebar");

    // setTimeout(함수이름, 지연시간); --> 딜레이 함수
    if(menuIconState) {
        searchIcon.classList.toggle("search_icon_off");
        title.classList.toggle("title_off");
        menuIconState = false;
    } else {
        setTimeout(function() {
            searchIcon.classList.toggle("search_icon_off");
            title.classList.toggle("title_off");
        }, 1000);
        menuIconState = true;
    }
}