/*==============================
AOS
==============================*/

AOS.init({

    duration:1000,

    once:true,

    offset:100

});


/*==============================
TYPING EFFECT
==============================*/

new Typed("#typing",{

strings:[

"Azure Cloud Engineer",

"Terraform Expert",

"CI/CD Automation",

"Kubernetes",

"DevSecOps",

"Azure DevOps"

],

typeSpeed:60,

backSpeed:40,

backDelay:1500,

loop:true

});


/*==============================
STICKY NAVBAR
==============================*/

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

header.classList.toggle("scrolled",window.scrollY>80);

});


/*==============================
ACTIVE MENU
==============================*/

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll("header nav a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-120;

const sectionHeight=section.clientHeight;

if(pageYOffset>=sectionTop){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});
/*==============================
BACK TO TOP
==============================*/

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};
/*==============================
SMOOTH SCROLL
==============================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

});

});

});

/*==============================
COUNTER
==============================*/

const counters=document.querySelectorAll(".card h1");

const speed=200;

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter=entry.target;

const target=counter.innerText;

if(isNaN(target)) return;

let count=0;

const update=()=>{

const inc=target/speed;

if(count<target){

count+=inc;

counter.innerText=Math.ceil(count);

requestAnimationFrame(update);

}else{

counter.innerText=target+"+";

}

};

update();

observer.unobserve(counter);

}

});

});

counters.forEach(counter=>{

observer.observe(counter);

});

/*==============================
CARD ANIMATION
==============================*/

const cards=document.querySelectorAll(

".skill-card,.project-card,.certificate-card,.achievement-card,.card"

);

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-12px) scale(1.03)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0) scale(1)";

});

});
/*==============================
PRELOADER
==============================*/

window.addEventListener("load",()=>{

const loader=document.querySelector(".loader");

if(loader){

loader.classList.add("loader-hidden");

}

});
/*==============================
PARALLAX EFFECT
==============================*/

window.addEventListener("mousemove",(e)=>{

const x=(window.innerWidth-e.pageX)/80;

const y=(window.innerHeight-e.pageY)/80;

document.querySelector(".hero-right").style.transform=

`translate(${x}px,${y}px)`;

});
/*==============================
CONSOLE MESSAGE
==============================*/

console.log(

"%c🚀 Amit Kumar Portfolio Loaded",

"color:#38bdf8;font-size:20px;font-weight:bold"

);

const themeBtn=document.querySelector(".theme-toggle");

themeBtn.onclick=()=>{

document.body.classList.toggle("light");

themeBtn.innerHTML=document.body.classList.contains("light")

?'<i class="fas fa-sun"></i>'

:'<i class="fas fa-moon"></i>';

};

const menuBtn=document.querySelector(".menu-btn");

const nav=document.querySelector("nav");

menuBtn.onclick=()=>{

nav.classList.toggle("active");

};

window.addEventListener("scroll",()=>{

const total=

document.documentElement.scrollHeight-

document.documentElement.clientHeight;

const progress=

(window.scrollY/total)*100;

document.getElementById("progress-bar").style.width=

progress+"%";

});

const cursor=document.querySelector(".cursor");

document.addEventListener("mousemove",(e)=>{

cursor.style.left=e.clientX+"px";

cursor.style.top=e.clientY+"px";

});