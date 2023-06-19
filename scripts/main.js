document.addEventListener("DOMContentLoaded", function(event) {
    const buttonHeaderSearch = document.querySelector('.loopa')
    const searchHeader = document.querySelector('#headerSearch')
    const menuHeader = document.querySelector('#menuFull')
    const headerInfoBlock = document.querySelector('.header_info')
    const shadowBlock = document.querySelector('.shadowBlock')
    const searchHelper = document.querySelector('.searchHelper')
    const searchCross = document.querySelector('#searchCross--input')
    const searchInput = document.querySelector('#searchInput--input')

    buttonHeaderSearch.addEventListener('click', (e) => {
        if (menuHeader.style.display !== 'none'){
            menuHeader.style.display = 'none'
            headerInfoBlock.style.width = '100%'
            searchHeader.style.width = '100%'
            searchHeader.classList.add('active')
            searchHeader.classList.remove('hidden')
            shadowBlock.style.display = 'block'
            searchHelper.classList.add('active')
            searchHelper.classList.remove('hidden')
            searchInput.focus()

        } else {
            // menuHeader.style.display = 'flex'
            // headerInfoBlock.style.width = ''
            // searchHeader.classList.add('hidden')
            // searchHeader.classList.remove('active')
            shadowBlock.style.display = 'none'
            searchHelper.classList.remove('active')
            searchHelper.classList.add('hidden')
            buttonHeaderSearch.style.display = 'block'

        }
    })
    shadowBlock.addEventListener('click', ()=> {
        shadowBlock.style.display = 'none'
        searchHelper.classList.remove('active')
        searchHelper.classList.add('hidden')
        headerInfoBlock.style.width = ''
        menuHeader.style.display = 'flex'
        searchHeader.classList.add('hidden')
        searchHeader.classList.remove('active')
        buttonHeaderSearch.style.display = 'block'

    })
    searchCross.addEventListener('click', function (e) {
        if (searchInput.value == ' ' || searchInput.value == ''){
            shadowBlock.style.display = 'none'
            searchHelper.classList.remove('active')
            searchHelper.classList.add('hidden')
            headerInfoBlock.style.width = ''
            menuHeader.style.display = 'flex'
            searchHeader.classList.add('hidden')
            searchHeader.classList.remove('active')
            buttonHeaderSearch.style.display = 'block'
        } else {
            searchInput.value = ' '
            searchInput.focus()
        }
    })
    searchInput.addEventListener('input', function (e){
        if (this.value != ' ' || this.value != ''){
        }
    })
})
