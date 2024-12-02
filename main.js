treeMenu = [
    {title : "HTML", content : ["h 태그", "a 태그", "div 태그"]},
    {title : "CSS", content : ["width 속성", "height 속성", "position 속성", "display 속성"]},
    {title : "JS(JavaScript)", content : ["Number", "String", "배열", "함수", "객체"]},
    {title: "JAVA", content : []},
    {title : "SQL", content : []}
];
// treeMenu = {title : "HTML", content : ["h 태그", "a 태그", "div 태그"]}

makeTreeMenu();

function makeTreeMenu() {
    let html = ``;
    for(let index = 0; index < treeMenu.length; index++) {
        let temp = treeMenu[index];
        let count = temp.content.length;
        console.log(temp);
        html += `<li>
            <input type = "checkbox"/>
            <a href = "#">${temp.title}</a>
            <ul>`;
        for(let j = 0; j < count; j++) {
            html += `<li style = "list-style : none;">${temp.content[j]}</li>`;
        }
        html += "</ul></li>";
        console.log(html);
    }
    console.log(html);
    document.querySelector("#tree_menu > ul").innerHTML = html;
}