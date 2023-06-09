document.addEventListener("DOMContentLoaded", function(event) {

    function PaintSomething (elemSvg, color) {
        for (let i = 0; i < elemSvg.children.length; i++) {
            elemSvg.children[i].setAttribute('stroke',color)
        }
    }


    // --------------------------------------- search ----------------------------------------
    const buttonHeaderSearch = document.querySelector('.loopa')
    const searchHeader = document.querySelector('#headerSearch')
    const menuHeader = document.querySelector('#menuFull')
    const headerInfoBlock = document.querySelector('.header_info')
    const shadowBlock = document.querySelector('.shadowBlock')
    const searchHelper = document.querySelector('.searchHelper')
    const searchCross = document.querySelector('#searchCross--input')
    const searchInput = document.querySelector('#searchInput--input')
    const numHeader = document.querySelector('.number--header')

    buttonHeaderSearch.addEventListener('click', (e) => {
        if (menuHeader.style.display !== 'none'){
            menuHeader.style.display = 'none'
            headerInfoBlock.style.width = '100%'
            searchHeader.classList.add('active')
            searchHeader.classList.remove('hidden')
            shadowBlock.style.display = 'block'
            searchHelper.classList.add('active')
            searchHelper.classList.remove('hidden')
            searchInput.focus()
            numHeader.style.display = 'none'
            buttonHeaderSearch.style.marginTop = '-3px'

            PaintSomething(buttonHeaderSearch, '#1E63CA')

        } else {
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
        numHeader.style.display = 'block'
        buttonHeaderSearch.style.marginTop = '-1px'

        PaintSomething(buttonHeaderSearch, '#0B121C')

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
            numHeader.style.display = 'block'
            buttonHeaderSearch.style.marginTop = '-1px'
            PaintSomething(buttonHeaderSearch, '#0B121C')


        } else {
            searchInput.value = ' '
            searchInput.focus()
        }
    })
    searchInput.addEventListener('input', function (e){
        if (this.value != ' ' || this.value != ''){
            shadowBlock.style.display = 'block'
            searchHelper.classList.add('active')
            searchHelper.classList.remove('hidden')
        }
    })

    // --------------------------------------- end search ------------------------------------









    // --------------------------------------- header ----------------------------------------

    let lastScrollPosition = 0
    const header = document.querySelector('header')
    document.addEventListener('scroll', (event)=>{
        ShowHideHeader( lastScrollPosition, window.scrollY)
    })

    function ShowHideHeader(lastPos, newPos) {
        if (newPos <= 40) {
            //showHeader
            header.classList.remove('headhide')
            header.classList.add('headshow')
            console.log('showHeader')
        } else {
            let deltaPos = newPos - lastPos
            if (deltaPos > 5){
                //hideHeader
                header.classList.remove('headshow')
                header.classList.add('headhide')
                console.log('!showHeader')
                searchHelper.classList.remove('active')
                searchHelper.classList.add('hidden')
                shadowBlock.style.display = 'none'

            } else if (deltaPos < -15) {
                //showHeader
                header.classList.remove('headhide')
                header.classList.add('headshow')
                console.log('showHeader')

            }
        }
        lastScrollPosition = newPos
    }

    // --------------------------------------- end header ------------------------------------


})
