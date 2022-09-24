import "./style.css";
import loadDomElem from './dom.js'
import about from "./about.js";
import menus from './menu.js';
import home from './home.js';


const container=document.getElementById('container')


loadDomElem()
const showCase=document.querySelector('.showcase')

document.getElementById('home').addEventListener('click',()=>{
     showCase.innerHTML=home()
     
})

document.getElementById('menu').addEventListener('click',()=>{
   console.log(showCase)
     showCase.innerHTML=menus()
     
  });
  
  document.getElementById('about').addEventListener('click',()=>{
     showCase.innerHTML=about()
  });