document.addEventListener("DOMContentLoaded", function(event) {
    const buttonHeaderSearch = document.querySelector('.loopa')
    const searchHeader = document.querySelector('#headerSearch')
    const menuHeader = document.querySelector('#menuFull')
    const headerInfoBlock = document.querySelector('.header_info')
    const shadowBlock = document.querySelector('.shadowBlock')

    buttonHeaderSearch.addEventListener('click', (e) => {
        if (menuHeader.style.display !== 'none'){
            menuHeader.style.display = 'none'
            headerInfoBlock.style.width = '100%'
            searchHeader.style.width = '100%'
            searchHeader.classList.add('active')
            searchHeader.classList.remove('hidden')
            shadowBlock.style.display = 'block'
        } else {
            menuHeader.style.display = 'flex'
            headerInfoBlock.style.width = ''
            searchHeader.classList.add('hidden')
            searchHeader.classList.remove('active')
            shadowBlock.style.display = 'none'
        }
    })
    shadowBlock.addEventListener('click', ()=> {
        shadowBlock.style.display = 'none'
    })
})
