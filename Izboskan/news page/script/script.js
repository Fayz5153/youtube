
// hamburger script 
const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;

let asosiymenu1 = document.querySelector('.asosiy-menu-1')
let asosiymenu2 = document.querySelector('.asosiy-menu-2')
let asosiymenu3 = document.querySelector('.asosiy-menu-3')
let asosiymenu4 = document.querySelector('.asosiy-menu-4')
let asosiymenu5 = document.querySelector('.asosiy-menu-5')

let asosiymenu1_2 = document.querySelector('.asosiy-menu2-1')
let asosiymenu2_2 = document.querySelector('.asosiy-menu2-2')
let asosiymenu3_2 = document.querySelector('.asosiy-menu2-3')
let asosiymenu4_2 = document.querySelector('.asosiy-menu2-4')
let asosiymenu5_2 = document.querySelector('.asosiy-menu2-5')

let submenu1 = document.querySelector('.submenu1')
let submenu2 = document.querySelector('.submenu2')
let submenu3 = document.querySelector('.submenu3')
let submenu4 = document.querySelector('.submenu4')
let submenu5 = document.querySelector('.submenu5')

let ressubmenu1 = document.querySelector('.ressubmenu1')
let ressubmenu2 = document.querySelector('.ressubmenu2')
let ressubmenu3 = document.querySelector('.ressubmenu3')
let ressubmenu4 = document.querySelector('.ressubmenu4')
let ressubmenu5 = document.querySelector('.ressubmenu5')

let subopen1 = false;
let subopen2 = false;
let subopen3 = false;
let subopen4 = false;
let subopen5 = false;

let ressubopen1 = false;
let ressubopen2 = false;
let ressubopen3 = false;
let ressubopen4 = false;
let ressubopen5 = false;

let mainNavbar = document.querySelector('.main-navbar')
let menu= document.querySelector('.menu')



menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
      menuBtn.classList.add('open');
      menuOpen = true;
      mainNavbar.setAttribute('style','display:none')
      menu.setAttribute('style','display:flex')

      setTimeout(() => {
      menu.classList.add('menuback');
          
      }, 10);
      
 
  
    } 
    
    else {
      menuOpen = false;
      menuBtn.classList.remove('open');
      menu.classList.remove('menuback');
      asosiymenu1.setAttribute('style','color:#ffffff')
      asosiymenu2.setAttribute('style','color:#ffffff')
      asosiymenu3.setAttribute('style','color:#ffffff')
      asosiymenu4.setAttribute('style','color:#ffffff')
      asosiymenu5.setAttribute('style','color:#ffffff')
      submenu1.classList.remove('submenu1open');
      submenu2.classList.remove('submenu2open');
      submenu3.classList.remove('submenu3open');
      submenu4.classList.remove('submenu4open');
      submenu5.classList.remove('submenu5open');
      setTimeout(() => {
      menu.setAttribute('style','display:none')
      mainNavbar.setAttribute('style','display:flex')
          
      }, 300);
      
  
 
    }
  });
// hamburger script end 
// sub menu 1 start 
asosiymenu1.addEventListener('click',()=>{
    if (!subopen1) {
  
       asosiymenu1.setAttribute('style','color:#b7a57a')

      asosiymenu2.setAttribute('style','color:#ffffff')
      asosiymenu3.setAttribute('style','color:#ffffff')
      asosiymenu4.setAttribute('style','color:#ffffff')
      asosiymenu5.setAttribute('style','color:#ffffff')
  
      subopen1 = true
      submenu1.classList.add('submenu1open');
    
      subopen2 = false
      subopen3 = false
      subopen4 = false
      subopen5 = false
  
  
      submenu2.classList.remove('submenu2open');
      submenu3.classList.remove('submenu3open');
      submenu4.classList.remove('submenu4open');
      submenu5.classList.remove('submenu5open');
    }
  
    else{
      subopen1 = false
      submenu1.classList.remove('submenu1open');
  
  
    }
  })
//   sub menu 1 end 
//   sub menu 2 start 
asosiymenu2.addEventListener('click',()=>{
    if (!subopen2) {
  
       asosiymenu2.setAttribute('style','color:#b7a57a')

      asosiymenu1.setAttribute('style','color:#ffffff')
      asosiymenu3.setAttribute('style','color:#ffffff')
      asosiymenu4.setAttribute('style','color:#ffffff')
      asosiymenu5.setAttribute('style','color:#ffffff')
  
      subopen2 = true
      submenu2.classList.add('submenu2open');
    
      subopen1 = false
      subopen3 = false
      subopen4 = false
      subopen5 = false
  
  
      submenu1.classList.remove('submenu1open');
      submenu3.classList.remove('submenu3open');
      submenu4.classList.remove('submenu4open');
      submenu5.classList.remove('submenu5open');
    }
  
    else{
      subopen2 = false
      submenu2.classList.remove('submenu2open');
  
  
    }
  })
//   sub menu 2 end 

//   sub menu 3 start 
asosiymenu3.addEventListener('click',()=>{
    if (!subopen3) {
  
       asosiymenu3.setAttribute('style','color:#b7a57a')

      asosiymenu1.setAttribute('style','color:#ffffff')
      asosiymenu2.setAttribute('style','color:#ffffff')
      asosiymenu4.setAttribute('style','color:#ffffff')
      asosiymenu5.setAttribute('style','color:#ffffff')
  
      subopen3 = true
      submenu3.classList.add('submenu3open');
    
      subopen1 = false
      subopen2 = false
      subopen4 = false
      subopen5 = false
  
  
      submenu1.classList.remove('submenu1open');
      submenu2.classList.remove('submenu2open');
      submenu4.classList.remove('submenu4open');
      submenu5.classList.remove('submenu5open');
    }
  
    else{
      subopen3 = false
      submenu3.classList.remove('submenu3open');
  
  
    }
  })
//   sub menu 3 end 

//   sub menu 4 start 
asosiymenu4.addEventListener('click',()=>{
    if (!subopen4) {
  
       asosiymenu4.setAttribute('style','color:#b7a57a')

      asosiymenu1.setAttribute('style','color:#ffffff')
      asosiymenu2.setAttribute('style','color:#ffffff')
      asosiymenu3.setAttribute('style','color:#ffffff')
      asosiymenu5.setAttribute('style','color:#ffffff')
  
      subopen4 = true
      submenu4.classList.add('submenu4open');
    
      subopen1 = false
      subopen2 = false
      subopen3 = false
      subopen5 = false
  
  
      submenu1.classList.remove('submenu1open');
      submenu2.classList.remove('submenu2open');
      submenu3.classList.remove('submenu3open');
      submenu5.classList.remove('submenu5open');
    }
  
    else{
      subopen4 = false
      submenu4.classList.remove('submenu4open');
  
  
    }
  })
//   sub menu 4 end 

//   sub menu 5 start 
asosiymenu5.addEventListener('click',()=>{
    if (!subopen5) {
  
       asosiymenu5.setAttribute('style','color:#b7a57a')

      asosiymenu1.setAttribute('style','color:#ffffff')
      asosiymenu2.setAttribute('style','color:#ffffff')
      asosiymenu3.setAttribute('style','color:#ffffff')
      asosiymenu4.setAttribute('style','color:#ffffff')
  
      subopen5 = true
      submenu5.classList.add('submenu5open');
    
      subopen1 = false
      subopen2 = false
      subopen3 = false
      subopen4 = false
  
  
      submenu1.classList.remove('submenu1open');
      submenu2.classList.remove('submenu2open');
      submenu3.classList.remove('submenu3open');
      submenu4.classList.remove('submenu4open');
    }
  
    else{
      subopen5 = false
      submenu5.classList.remove('submenu5open');
  
  
    }
  })
//   sub menu 5 end 





// responsive hamburger menu 


const menuBtn2 = document.querySelector('.menu-btn2');
let menuOpen2 = false;
let menu2 = document.querySelector('.menu2')
menuBtn2.addEventListener('click', () => {
  if(!menuOpen2) {
    menuOpen2 = true;
    menuBtn2.classList.add('open2');
    menu2.classList.add('menuopen');



    


  } 
  
  else {
    menuOpen2 = false;
    menuBtn2.classList.remove('open2');
    menu2.classList.remove('menuopen');


    


  }
});

// res sub menu 1 start 
asosiymenu1_2.addEventListener('click',()=>{
  if (!ressubopen1) {



    ressubopen1 = true
    ressubmenu1.classList.add('ressubmenuopen');
  
    ressubopen2 = false
    ressubopen3 = false
    ressubopen4 = false
    ressubopen5 = false


    ressubmenu2.classList.remove('ressubmenuopen');
    ressubmenu3.classList.remove('ressubmenuopen');
    ressubmenu4.classList.remove('ressubmenuopen');
    ressubmenu5.classList.remove('ressubmenuopen');
  }

  else{
    ressubopen1 = false
    ressubmenu1.classList.remove('ressubmenuopen');


  }
})
//  res  sub menu 1 end 

// res sub menu 2 start 
asosiymenu2_2.addEventListener('click',()=>{
  if (!ressubopen2) {



    ressubopen2 = true
    ressubmenu2.classList.add('ressubmenuopen');
  
    ressubopen1 = false
    ressubopen3 = false
    ressubopen4 = false
    ressubopen5 = false


    ressubmenu1.classList.remove('ressubmenuopen');
    ressubmenu3.classList.remove('ressubmenuopen');
    ressubmenu4.classList.remove('ressubmenuopen');
    ressubmenu5.classList.remove('ressubmenuopen');
  }

  else{
    ressubopen2 = false
    ressubmenu2.classList.remove('ressubmenuopen');


  }
})
//  res  sub menu 2 end 

// res sub menu 3 start 
asosiymenu3_2.addEventListener('click',()=>{
  if (!ressubopen3) {



    ressubopen3 = true
    ressubmenu3.classList.add('ressubmenuopen');
  
    ressubopen1 = false
    ressubopen2 = false
    ressubopen4 = false
    ressubopen5 = false


    ressubmenu1.classList.remove('ressubmenuopen');
    ressubmenu2.classList.remove('ressubmenuopen');
    ressubmenu4.classList.remove('ressubmenuopen');
    ressubmenu5.classList.remove('ressubmenuopen');
  }

  else{
    ressubopen3 = false
    ressubmenu3.classList.remove('ressubmenuopen');


  }
})
//  res  sub menu 3 end 

// res sub menu 4 start 
asosiymenu4_2.addEventListener('click',()=>{
  if (!ressubopen4) {



    ressubopen4 = true
    ressubmenu4.classList.add('ressubmenuopen');
  
    ressubopen1 = false
    ressubopen2 = false
    ressubopen3 = false
    ressubopen5 = false


    ressubmenu1.classList.remove('ressubmenuopen');
    ressubmenu2.classList.remove('ressubmenuopen');
    ressubmenu3.classList.remove('ressubmenuopen');
    ressubmenu5.classList.remove('ressubmenuopen');
  }

  else{
    ressubopen4 = false
    ressubmenu4.classList.remove('ressubmenuopen');


  }
})
//  res  sub menu 4 end 

// res sub menu 4 start 
asosiymenu5_2.addEventListener('click',()=>{
  if (!ressubopen5) {



    ressubopen5 = true
    ressubmenu5.classList.add('ressubmenuopen');
  
    ressubopen1 = false
    ressubopen2 = false
    ressubopen3 = false
    ressubopen4 = false


    ressubmenu1.classList.remove('ressubmenuopen');
    ressubmenu2.classList.remove('ressubmenuopen');
    ressubmenu3.classList.remove('ressubmenuopen');
    ressubmenu4.classList.remove('ressubmenuopen');
  }

  else{
    ressubopen5 = false
    ressubmenu5.classList.remove('ressubmenuopen');


  }
})
//  res  sub menu 5 end 