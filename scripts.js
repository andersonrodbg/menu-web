class MobileNavbar {
  constructor(mobileMenu, navList, navLinks) {
    this.MobileMenu = document.querySelector(mobileMenu);
    this.NavList = document.querySelector(navList);
    this.NavLinks = document.querySelector(navLinks);
    this.activeClass = "active";

    this.Handleclick = this.Handleclick.bind();
  }  
  
Handleclick() {
    console.log(this);
    this.navList.classList.toggle(this.activeClass); }


addClickEvent() {
    this.MobileMenu.addEventListener("click",this.Handleclick);
} 

init() {
    if(this.mobileMenu) {
    this.addClickEvent();
    }
    return this;
  }
} 

const MobileNavbar = new MobileNavbar(".mobile-menu",
".nav-list",
".nav-list li",);  


MobileNavbar.init();



