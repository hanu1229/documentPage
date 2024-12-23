// true : 사이드바 열려있음 / false : 사이드바 닫힘 / 기본값 : true
let menuIconState = true;
document.querySelector("#menu_icon").addEventListener("click", changeSideBar);

// 사이드바 축소/확대 애니메이션
function changeSideBar() {
    let sideBar = document.querySelector("#sidebar");
    let searchIcon = document.querySelector("#search_icon");
    let title = document.querySelector("#title");
    let sidebarContent = document.querySelector("#sidebar_content");
    sideBar.classList.toggle("close_Sidebar");

    // setTimeout(함수이름, 지연시간); --> 딜레이 함수
    if(menuIconState) {
        searchIcon.classList.toggle("search_icon_off");
        title.classList.toggle("title_off");
        sidebarContent.classList.toggle("sidebar_content_off");
        menuIconState = false;
    } else {
        setTimeout(function() {
            searchIcon.classList.toggle("search_icon_off");
            title.classList.toggle("title_off");
            sidebarContent.classList.toggle("sidebar_content_off");
        }, 1000);
        menuIconState = true;
    }
}

function makeMenu() {
    let getTreeMenu = getLocalStorage("treeMenu");
    let sidebarContent = document.querySelector("#sidebar_content");
    let html = ``;
    
    for(let index = 0; index < getTreeMenu.length; index++) {

    }
}