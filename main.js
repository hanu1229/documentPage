treeMenu = [
    {title : "HTML", content : ["h 태그", "a 태그", "div 태그"], state : true, image : "./img/DownArrowIcon.svg"},
    {title : "CSS", content : ["width 속성", "height 속성", "position 속성", "display 속성"], state : true, image : "./img/DownArrowIcon.svg"},
    {title : "JS(JavaScript)", content : ["Number", "String", "배열", "함수", "객체"], state : true, image : "./img/DownArrowIcon.svg"},
    {title: "JAVA", content : [], state : true, image : "./img/DownArrowIcon.svg"},
    {title : "SQL", content : [], state : true, image : "./img/DownArrowIcon.svg"}
];
// treeMenu = {title : "HTML", content : ["h 태그", "a 태그", "div 태그"]}
// true : 펼침
let imageChange = true;
let sidebarString = ``;
makeTreeMenu();

function makeTreeMenu() {
    
    let html = ``;
    for(let index = 0; index < treeMenu.length; index++) {
        let temp = treeMenu[index];
        let count = temp.content.length;
        // let icon = temp.state ? "./img/DownArrowIcon.svg" : "./img/UpArrowIcon.svg";
        let icon = temp.state ? "down_arrow_icon" : "up_arrow_icon";
        // console.log(temp);
        html += `<li>
            <div style = "display : flex;">
                <img id = "img${index}" class = "${icon}" src = "./img/DownArrowIcon.svg" style = "width : 24px; height : 24px; cursor : pointer;" onclick = "stateChange(${index})"/>
                <label>${temp.title}</label>
            </div>
            <ul class = "${temp.state ? 'branch_open' : 'branch_close'}" style = "padding-left : 40px;">`;
        for(let j = 0; j < count; j++) {
            html += `<li style = "list-style : none;">${temp.content[j]}</li>`;
        }
        html += "</ul></li>";
        // console.log(html);
    }
    // console.log(html);
    document.querySelector("#tree_menu > ul").innerHTML = html;
}

// 트리메뉴 숨김/나타나기 함수
function stateChange(index) {
    let info = treeMenu[index];
    let test = document.querySelector(`#tree_menu > ul > li > div > #img${index}`);
    if(info.state == true) {
        info.state = false;
        test.style.transform = "rotate(180deg)";
        test.style.transitionDuration = "0.5s";
        console.log(info.state);
    } else {
        info.state = true;
        test.style.transform = "rotate(-10deg)";
        test.style.transitionDuration = "0.5s";
        console.log(info.state);
    }
    setTimeout(makeTreeMenu, 400);
    // makeTreeMenu();
}
// 사이드바 닫기
function sidebarClose() {
    let sidebar = sidebarString == `` ? document.querySelector("#sidebar") : document.querySelector("#sidebar_close");
    if(sidebarString == ``) {
        // console.log(sidebar.id);
        sidebarString = sidebar.innerHTML;
        // console.log(sidebarString);
        sidebar.id = "sidebar_close";
        // console.log(sidebar.id);
        sidebar.innerHTML = `<div>
            <div id = "three_Line_image"></div>
            <div id = "menu_icon"><img src = "./img/MenuIcon.svg" title = "MenuIcon" onclick = "sidebarClose()"/></div>
        </div>`;
    } else {
        sidebar.id = "sidebar";
        sidebar.innerHTML = sidebarString;
        sidebarString = "";
    }
}