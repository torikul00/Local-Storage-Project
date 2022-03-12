const fontSize = document.getElementById('fontSize');
const bgColor = document.getElementById('selectColor');
const resetButton = document.getElementById('reset-button')
const mainElement = document.querySelector('main')


const changeFontSize = (even) => {
    let getFontSize = even.target.value;
    mainElement.style.fontSize = getFontSize;
    localStorage.setItem('fontSize' , getFontSize)
}

const changebackgroundColor = (even) => {
    let getbackgroundColor = even.target.value;
    mainElement.style.backgroundColor = getbackgroundColor;
    localStorage.setItem('bgColor' , getbackgroundColor)
}

const initialLoad = () => {
    const fontSize = localStorage.getItem('fontSize')
    const bgColor = localStorage.getItem('bgColor')
    console.log(fontSize)

    if (fontSize && bgColor) {
     
        mainElement.style.fontSize = fontSize;
        mainElement.style.backgroundColor = bgColor;
    }
    
    else if (fontSize && !bgColor) {
        mainElement.style.fontSize = fontSize;
        mainElement.style.backgroundColor ='yellow';
    }
    else if (!fontSize && bgColor) {
        mainElement.style.fontSize = '18px';
        mainElement.style.backgroundColor =  bgColor;
    }
    else {
        mainElement.style.fontSize = '18px';
        mainElement.style.backgroundColor =  'yellow'
    }
}

const resetAll = () => {
    localStorage.removeItem('fontSize')
    localStorage.removeItem('bgColor')
    fontSize.value = '18px'
    bgColor.value = 'yellow'
    initialLoad()
  
}

// add even listeners 

fontSize.addEventListener('change', changeFontSize);
bgColor.addEventListener('change' , changebackgroundColor)
resetButton.addEventListener('click' , resetAll)

initialLoad()