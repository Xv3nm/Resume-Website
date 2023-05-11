/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*===== ACTIVE AND REMOVE MENU =====*/

const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
  /*Remove menu mobile*/
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));


/*===== VISIBILITY FUNTION =====*/

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

/*===== IS about__text VISIBLE? =====*/
function findElementInView() {
    const aboutTextElement = document.querySelector('.about__text');

    if (!aboutTextElement) {
        // If element not found, loop again in 200ms.
        setTimeout(findElementInView, 200);
    } else if (isInViewport(aboutTextElement)) {
        // If element is in viewport, do something
        console.log('about__text is in viewport');
        var typed = new Typed('typed-desc', {
            strings: [""," I've always been interested in coding, devlopment, websites, and Information Technology." +
            " I have experience in System Administration, Network Configuration/Management, Development, Programming, and much more."],
            typeSpeed: 16,
            onComplete: function(self) {
                $(self.el).append('<a href="assets/resume.pdf"> [My Resume] </a>');
            }
        });
    } else {
        // If element found, but not in viewport, loop again in 200ms.
        setTimeout(findElementInView, 200);
    }
}

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: false
});

/*SCROLL HOME*/
sr.reveal('.home__title',{}); 
sr.reveal('.button',{delay: 200}); 
sr.reveal('.home__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 

/*SCROLL ABOUT*/
sr.reveal('.about__img',{}); 
sr.reveal('.about__subtitle',{delay: 400}); 
sr.reveal('.about__text',{delay: 400}); 

/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle',{}); 
sr.reveal('.skills__text',{}); 
sr.reveal('.skills__data',{interval: 200}); 
sr.reveal('.skills__img',{delay: 600});

/*SCROLL WORK*/
sr.reveal('.work__img',{interval: 200}); 

/*SCROLL CONTACT*/
sr.reveal('.contact__input',{interval: 200}); 

window.onload = findElementInView;