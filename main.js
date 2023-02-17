const about=document.querySelector("#about-me");
const education=document.querySelector("#education");
const personal=document.querySelector("#personal-info");
const hide1=document.querySelector(".close1");
const hide2=document.querySelector(".close2");
const hide3=document.querySelector(".close3");

const aboutsec=document.querySelector(".about-me")
const educationsec=document.querySelector(".education")
const personalsec=document.querySelector(".personal")




let i = 0;
let txt = 'Hi, I am Sergo, I started learning programming a year ago and today I haveve already studied: HTML, CSS, JS, Angular, Github, Bootstrap, SQL,QA Testing and Postman. I am motivated by deepening existing knowledgeand acquiring new skills.'
let speed = 70;
function typeWriter() {
  if (i < txt.length) {
    document.querySelector("#typing").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

about.addEventListener("click", ()=>{
aboutsec.style.display="block"

})
hide1.addEventListener("click",()=>{
    aboutsec.style.display="none"
    document.querySelector("#typing").innerHTML=""
    i=0
})

education.addEventListener("click", ()=>{
    educationsec.style.display="block"
    })
hide2.addEventListener("click",()=>{
    educationsec.style.display="none"
})
personal.addEventListener("click", ()=>{
    personalsec.style.display="block"
    })
hide3.addEventListener("click",()=>{
    personalsec.style.display="none"
})



