const fragment = document.createDocumentFragment();
const navUL = document.querySelector('#navList');
const sections = document.querySelectorAll('section');
sections.forEach(function(section){//loop to create list,anchor and text node
    let text = section.getAttribute('id');
    let listItem = document.createElement('li');
    let linkItem = document.createElement('a');
    let textItem = document.createTextNode(text);
    linkItem.appendChild(textItem);//text node inside anchor
    listItem.appendChild(linkItem);//anchor inside list
    fragment.appendChild(listItem);//all inside fragment
    listItem.addEventListener('click',function(){section.scrollIntoView({behavior:'smooth',block: "start",
  inline: "nearest"})})//listens to mouse click to scroll th the desired section with smooth scrolling

    document.addEventListener('scroll',function(){//giving the desired section and it's navigation anchor a style to be more visible
    let secBlock= section.getBoundingClientRect();
            if (secBlock.top >= 0 && (secBlock.bottom < (window.innerHeight+200))){
                section.classList.add('secActive')
                linkItem.classList.add('secSelect')
            }
                else{
                    section.classList.remove('secActive');
                    linkItem.classList.remove('secSelect')
                }
        })

})
navUL.appendChild(fragment);//fragment inside the unordered list


let prePos = window.pageXOffset;//trying to make the header disappear but still
window.onscroll = function(){
    let curPos = window.pageYOffset;
    if (prePos > curPos) {
        document.getElementById('header').style.top = '0';
    }else{
        document.getElementById('header').style.top = '-50px';

    }
    prePos = curPos;
}


let button = document.getElementById('btn');//back to top button
window.onscroll = function(){scrollFunction()};
function scrollFunction(){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        button.style.display = 'block';
    } else {
        button.style.display = 'none';
    }
}
function topFunc() {
    document.documentElement.scrollTop = 0;
}