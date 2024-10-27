let items = document.querySelectorAll('.slider .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let smallpics = document.querySelectorAll('.smallpic .item');

let countItem = items.length;
let itemActive = 0;
next.onclick = function(){
    itemActive = itemActive + 1;
    if(itemActive >= countItem){
        let itemActive = 0;
    }
    showSlider();

}
function showSlider(){
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    let smallpicActiveOld = document.querySelector('.smallpic .item.active');
    itemActiveOld.classList.remove('active');
}