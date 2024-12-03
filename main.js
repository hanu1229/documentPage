treeMenu = [
    {title : "HTML", content : ["h 태그", "a 태그", "div 태그"], state : true},
    {title : "CSS", content : ["width 속성", "height 속성", "position 속성", "display 속성"], state : true},
    {title : "JS(JavaScript)", content : ["Number", "String", "배열", "함수", "객체"], state : true},
    {title: "JAVA", content : [], state : true},
    {title : "SQL", content : [], state : true}
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
        let icon = temp.state ? "./img/DownArrowIcon.svg" : "./img/UpArrowIcon.svg";
        // console.log(temp);
        html += `<li>
            <div style = "display : flex;">
                <img src = "${icon}" style = "width : 24px; height : 24px; cursor : pointer;" onclick = "stateChange(${index})"/>
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

function stateChange(index) {
    let info = treeMenu[index];
    if(info.state == true) {
        info.state = false;
    } else {
        info.state = true;
    }
    makeTreeMenu();
}
function sidebarClose() {
    let sidebar = sidebarString == `` ? document.querySelector("#sidebar") : document.querySelector("#sidebar_close");
    if(sidebarString == ``) {
        // console.log(sidebar.id);
        sidebarString = sidebar.innerHTML;
        // console.log(sidebarString);
        sidebar.id = "sidebar_close";
        // console.log(sidebar.id);
        sidebar.innerHTML = "<div style = 'cursor : pointer;' onclick = 'sidebarClose()'><img src = './img/MenuIcon.svg'/></div>";
    } else {
        sidebar.id = "sidebar";
        sidebar.innerHTML = sidebarString;
        sidebarString = "";
    }
}