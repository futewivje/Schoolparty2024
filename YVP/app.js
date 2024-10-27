let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let smallpics = document.querySelectorAll('.smallpic .item');

let countItem = items.length;
let itemActive = 0;

next.onclick = function() {
    itemActive = itemActive + 1;
    if (itemActive >= countItem) {
        itemActive = 0; // Corrected variable reassignment
    }
    showSlider();
}

prev.onclick = function() {
    itemActive = itemActive - 1;
    if (itemActive < 0) {
        itemActive = countItem - 1;
    }
    showSlider();
}

function showSlider() {
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    let smallpicActiveOld = document.querySelector('.smallpic .item.active');
    itemActiveOld.classList.remove('active');
    smallpicActiveOld.classList.remove('active');

    items[itemActive].classList.add('active');
    smallpics[itemActive].classList.add('active');
}

// Fix for missing function call
smallpics.forEach((smallpic, index) => {
    smallpic.addEventListener('click', () => {
        itemActive = index;
        showSlider(); // Corrected function call
    });
});
