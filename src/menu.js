
import steak6 from './img/steak6.jpg';
import steak1 from './img/steak1.jpg';
import steak2 from './img/steak2.jpg';
import steak3 from './img/steak3.jpg';
import steak4 from './img/steak4.jpg';
import steak5 from './img/steak5.jpg';

const menus=()=>{

      
    

   let menuOutput=`
   
                        <div class="steak-menu-log">
                        <h1>STEAK MENU</h1> 
                        <P>Come get the steak experience.......</P>
                        <div class="underline"></div>
                        </div>

                    <div class="steak-table">
                       
                            <div class="lg">
                                  <div class="sml">
                                       <img class="steak" src=${steak1}  alt="steak">
                                       <div class="steak-name">
                                             <p>Dish Name: Lorem ipsum dolor sit.</p>
                                             <p>Price:$12</p>
                                             <div class="underline"></div>
                                       </div>
                                  </div>
                                  <div class="sml">
                                       <img class="steak"  src=${steak2}  alt="steak">
                                       <div class="steak-name">
                                             <p>Dish Name: Lorem ipsum dolor sit.</p>
                                             <p>Price:$12</p>
                                             <div class="underline"></div>
                                       </div>
                                  </div>
                                  <div class="sml">
                                       <img class="steak"  src=${steak3}  alt="steak">
                                       <div class="steak-name">
                                             <p>Dish Name: Lorem ipsum dolor sit.</p>
                                             <p>Price:$12</p>
                                             <div class="underline"></div>
                                       </div>
                                  </div>
                                  <div class="sml">
                                       <img class="steak"  src=${steak4}  alt="steak">
                                       <div class="steak-name">
                                             <p>Dish Name: Lorem ipsum dolor sit.</p>
                                             <p>Price:$12</p>
                                             <div class="underline"></div>
                                       </div>
                                  </div>
                                  <div class="sml">
                                       <img class="steak"  src=${steak5}  alt="steak">
                                       <div class="steak-name">
                                             <p>Dish Name: Lorem ipsum dolor sit.</p>
                                             <p>Price:$12</p>
                                             <div class="underline"></div>
                                       </div>
                                  </div>
                                  <div class="sml">
                                       <img class="steak"  src=${steak6}  alt="steak">
                                       <div class="steak-name">
                                             <p>Dish Name: Lorem ipsum dolor sit.</p>
                                             <p>Price:$12</p>
                                             <div class="underline"></div>
                                       </div>
                                  </div>

                            </div> 
                            
                    </div>
                </div>
          
    `
    return  menuOutput;
}


export default menus