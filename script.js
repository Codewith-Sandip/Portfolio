// navbar section
const menuicon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

menuicon.onclick = ()=>{
    navbar.classList.toggle('nav-active');
}
// qualification tabs

const tabs = document.querySelectorAll('[data-target]');
const tabContents = document.querySelectorAll('[data-content]');

tabs.forEach(tab =>{
    tab.addEventListener('click',()=>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('qualification-active')
        })
        target.classList.add('qualification-active')

        tab.forEach(tab =>{
            tab.classList.remove('qualification-active')
        })
        tab.classList.add('qualification-active')
    })
})
