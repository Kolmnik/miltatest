document.addEventListener("DOMContentLoaded", function(event) {
//    slider

    const leftButtonNews = document.querySelector('#news_leftButton')
    const rightButtonNews = document.querySelector('#news_rightButton')
    const newsSlider = document.querySelector('#newsSlider')
    const elementNewsSlider = document.querySelector('.newsItem')
    let marginLeftNewsSlider = 0
    let countSlides = 1
    let endSlider = false

    leftButtonNews.addEventListener('click', (e) => {
        marginLeftNewsSlider = SlideMe(newsSlider, elementNewsSlider, 'left', marginLeftNewsSlider)
        HideAndShowButton(rightButtonNews, leftButtonNews, marginLeftNewsSlider)
    })
    rightButtonNews.addEventListener('click', (e) => {
        marginLeftNewsSlider = SlideMe(newsSlider, elementNewsSlider, 'right', marginLeftNewsSlider)
        HideAndShowButton(rightButtonNews, leftButtonNews, marginLeftNewsSlider)
    })

    function SlideMe (slider, element, button, margin) {
        let widthOf = Math.floor(document.querySelector('.newsBlock').offsetWidth / element.offsetWidth)
        let gap = (slider.scrollWidth - slider.children.length * element.offsetWidth)/(slider.children.length - 1)
        let lengthSlider = slider.children.length - widthOf * countSlides

        let lastElementWidth = document.querySelector('.newsBlock').offsetWidth - element.offsetWidth * widthOf - gap * (widthOf-1)

        if (button === 'left') {
            if (endSlider) {
                margin = margin + (element.offsetWidth + gap) * lengthSlider - lastElementWidth
                slider.style.marginLeft = `${margin}px`
                endSlider = false
            } else {
                margin = margin + (element.offsetWidth + gap) * widthOf
                slider.style.marginLeft = `${margin}px`
                countSlides--
            }
        } else {
            if (lengthSlider < widthOf) {
                margin = margin - (element.offsetWidth + gap) * lengthSlider + lastElementWidth
                slider.style.marginLeft = `${margin}px`
                endSlider = true
            } else  {
                margin = margin - (element.offsetWidth + gap) * widthOf
                slider.style.marginLeft = `${margin}px`
                countSlides++
            }
        }
        return margin
    }
    const HideAndShowButton = (rightButton, leftButton, margin) => {
        if (margin === 0) {
            leftButton.style.display = 'none'
        } else {
            leftButton.style.display = 'flex'
        }
        if (endSlider) {
            rightButton.style.display = 'none'
        } else {
            rightButton.style.display = 'flex'
        }
    }



});
