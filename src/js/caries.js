if(document.querySelector('.appointment__tabs')) {
    document.querySelectorAll('.appointment__tab').forEach((tab) => {
        tab.addEventListener('click', () => {
            document.querySelector('.appointment__tab.active').classList.remove('active')
            tab.classList.add('active')

            document.querySelector('.appointment__content.active').classList.remove('active')
            document.querySelector('.js-' + tab.dataset.tab).classList.add('active')
        })
    })
}
