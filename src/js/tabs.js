const tabsContainer = document.querySelector('.catalog__tabs');
const tabsContent = document.querySelectorAll('.catalog__content');
const tabs = document.querySelectorAll('.catalog__tab');

tabsContainer.addEventListener('click', e => {
    if (e.target && e.target.matches('li.catalog__tab')) {
        console.log('sd');
    }
});



showTab(1);


function hideTabs() {
    tabsContent.forEach(item => {
        item.style.display = 'none';
    });
}

function showTab(i = 0) {
    hideTabs();
    tabsContent[i].style.display = 'block';
    tabs[i].classList.add('catalog__tab_active');
}




