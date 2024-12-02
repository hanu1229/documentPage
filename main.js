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
        console.log(temp);
        html += `<li>
            <input type = "checkbox"/>${temp.title}
            <ul>
                <li style = "list-style : none;">${temp.content}</li>
            </ul>
        </li>`;
        console.log(html);
    }
    console.log(html);
    document.querySelector("#tree_menu > ul").innerHTML = html;
}