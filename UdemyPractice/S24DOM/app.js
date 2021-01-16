///////////////////////////////////////////////////////////////////////////////////////////////
//Document Object Model DOM
///////////////////////////////////////////////////////////////////////////////////////////////
// HTML + CSS = JS Objects
console.dir(document)

// There's more on laptop

window.getComputedStyle(h1)
window.getComputedStyle(h1).fontSize
///////////////////////////////////////////////////////////////////////////////////////////////
//ClassList
///////////////////////////////////////////////////////////////////////////////////////////////
const h2 = document.querySelector('h2');
h2.getAttribute('class')
h2.setAttribute('class', 'purple')
h2.classList.add('purple')
h2.classList.remove('border')
h2.classList.toggle('border')
h2.classList.contains('border')
///////////////////////////////////////////////////////////////////////////////////////////////
//Parent/Child/Sibling
///////////////////////////////////////////////////////////////////////////////////////////////
const firstH1 = document.querySelector('h1');
const paragraph = firstH1.parentElement // Traverses up one parent tag
paragraph.childElementCount
paragraph.children

const squareImg = document.querySelector('.square')
squareImg.previousElementSibling
squareImg.nextElementSibling
///////////////////////////////////////////////////////////////////////////////////////////////
//Append & Append Child
///////////////////////////////////////////////////////////////////////////////////////////////
const newImg = document.createElement('img')
newImg.src = 'imagesrc,faklsdjflkn'
document.body.appendChild(newImg)

const newH3 = document.createElement('h3')
newH3.innerText = 'I am new!'
document.body.appendChild(newH3)

const p = document.querySelector('p')
p.append('i am new text', 'mee toooo')

const p = document.querySelector('p')
p.prepend('i am new text', 'mee toooo')
