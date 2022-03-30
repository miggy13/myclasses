function toggleView(e) {
    console.log(e.target);
    if (e.target.classList.contains('list-layout')) {
        console.log('list layout');
        document.querySelector('.toggle-btns').children[0].classList.add('active');
        document.querySelector('.toggle-btns').children[1].classList.remove('active');

        document.querySelector('.class-container').classList.add('list');
        document.querySelector('.class-container').classList.remove('grid');

    } else if (e.target.classList.contains('grid-layout')) {
        console.log('grid layout');
        document.querySelector('.toggle-btns').children[0].classList.remove('active');
        document.querySelector('.toggle-btns').children[1].classList.add('active');

        document.querySelector('.class-container').classList.remove('list');
        document.querySelector('.class-container').classList.add('grid');

    }
}