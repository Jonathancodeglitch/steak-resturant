const loadDomElem=()=>{
    const container=document.getElementById('container');
    //nav bar
    const nav=createElem('nav');
    nav.setAttribute('id','nav')
    const logo=createElem('div')
    logo.setAttribute('class','logo');
    logo.textContent=`STEAkHOUSE`;
    const navBar=createElem('div')
    navBar.setAttribute('class','navbar');
    const ul=createElem('ul');
    const home=createElem('li')
    const menu=createElem('li')
    const about=createElem('li')
    home.setAttribute('id','home');
    menu.setAttribute('id','menu');
    about.setAttribute('id','about');
    home.textContent='Home'
    menu.textContent='Menu'
    about.textContent='About'
    ul.append(home,menu,about);
    navBar.append(ul)
    nav.append(logo,navBar);
    //showcase
    const showcase=createElem('div');
    showcase.setAttribute('class','showcase')
    showcase.innerHTML=`
    <p class="intro"> Premium  And Authentic <br> Steakhose</p> 
    `
   return container.append(nav,showcase)
   
};

const createElem=(elem)=>{
return document.createElement(elem)
}

export default loadDomElem