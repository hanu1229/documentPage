// 메뉴 항목 클릭 시 서브 메뉴 토글
document.querySelectorAll('.toggle').forEach(function(toggle) {
    toggle.addEventListener('click', function(event) {
        let parentLi = event.target.closest('li');
        parentLi.classList.toggle('open');
    });
});
