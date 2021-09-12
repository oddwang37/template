const contentItems = document.querySelectorAll('.catalog__content__item');
const contentItemFooters = document.querySelectorAll('.catalog-item__footer');
const contentItemLinks = document.querySelectorAll('.catalog-item__link');
const contentItemLines = document.querySelectorAll('hr');
const contentItemDetails = document.querySelectorAll('.catalog-item__details');
const contentItemLinksBack = document.querySelectorAll('.catalog-item__link_back');



for (let i = 0; i < contentItemLinks.length; i++) {
    contentItemLinks[i].addEventListener('click', () => {
        for (let j = 0; j < contentItems[0].children.length; j++) {
        contentItems[i].children[j].style.display = 'none';
        contentItemLines[i].style.display = 'block';
        contentItemFooters[i].style.display = 'block';
        contentItemDetails[i].style.display = 'block';
        }
    });
}

for (let i = 0; i < contentItemLinksBack.length; i++) {
    contentItemLinksBack[i].addEventListener('click', () => {
        for (let j = 0; j < contentItems[0].children.length; j++) {
            contentItems[i].children[j].style.display = 'block';
            contentItemDetails[i].style.display = 'none';
        }
    });
}
