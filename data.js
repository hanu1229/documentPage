let treeMenu = [menu1, menu2, menu3];
let menu1 = [
    {title : "a 태그", content : "", }
];
let menu2 = [];
let menu3 = [];

treeMenu = [
    {title : "HTML", content : ["h 태그", "a 태그", "div 태그"], state : true, image : "./img/DownArrowIcon.svg"},
    {title : "CSS", content : ["width 속성", "height 속성", "position 속성", "display 속성"], state : true, image : "./img/DownArrowIcon.svg"},
    {title : "JS(JavaScript)", content : ["Number", "String", "배열", "함수", "객체"], state : true, image : "./img/DownArrowIcon.svg"},
    {title: "JAVA", content : [], state : true, image : "./img/DownArrowIcon.svg"},
    {title : "SQL", content : [], state : true, image : "./img/DownArrowIcon.svg"}
];

// 로컬스토리지에 값 저장하기
function getLocalStorage(key) {
    let list = localStorage.getItem(key);
    if(list == null) {
        list = [];
    } else {
        list = JSON.parse(list);
    }
    return list;
}

// 로컬스토리지에서 값 가져오기
function setLocalStorage(key, value) {
    value = JSON.stringify(value);
    localStorage.setItem(key, value);
}
