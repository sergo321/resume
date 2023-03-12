const about=document.querySelector("#about-me");
const education=document.querySelector("#education");
const personal=document.querySelector("#personal-info");
const mathbtn=document.querySelector("#mathbtn");
const tictactoe=document.querySelector("#tic-tac-toe");


const hide1=document.querySelector(".close1");
const hide2=document.querySelector(".close2");
const hide3=document.querySelector(".close3");
const closeequalition=document.querySelector(".closeequalition");
const closetictac=document.querySelector(".closetic-tac");

const aboutsec=document.querySelector(".about-me");
const educationsec=document.querySelector(".education");
const personalsec=document.querySelector(".personal");
const math=document.querySelector(".math");
const tictac=document.querySelector(".tic-tac");




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
mathbtn.addEventListener("click", ()=>{
    math.style.display="block"
    })
closeequalition.addEventListener("click",()=>{
    math.style.display="none"
})
tictactoe.addEventListener("click", ()=>{
    tictac.style.display="block"
    })
closetictac.addEventListener("click",()=>{
    tictac.style.display="none"
})
/*Quadratic Equation */
let a2=document.querySelector("#inp1");
let b2=document.querySelector("#inp2");
let c2=document.querySelector("#inp3");
let x1=document.querySelector("#answer1");
let x2=document.querySelector("#answer2");
let d1=document.querySelector("#answerd");

const solvebtn=document.querySelector("#solve");

solvebtn.addEventListener("click", function solve(a,b,c){
 a=a2.value;
 b=b2.value;
 c=c2.value;
 d=Math.sqrt(Math.pow(b,2) - (4*a*c));
 d=Math.round(d)
 d1.innerHTML=d;
 if (d<0 || isNaN(d)){
    alert("ამონახსნი არ გააჩნია")
    a2.value="";
    b2.value="";
    c2.value="";
 }else if(a===""||b===""||c===""){
    alert("შეავსეთ ყველა ველი")
 }
 else if (d==0){
    let result=((-1*b)/(2*a));

    x1.innerHTML=result;
    x2.innerHTML="განტოლება მხოლოდ ერთი ამონახსნი აქვს";
    a2.value="";
    b2.value="";
    c2.value="";
 }
else {
    let result = ((-1*b) +d )/(2*a);
    let result2 = ((-1*b) -d)/(2*a);
    x1.innerHTML=result;
    x2.innerHTML=result2;
    a2.value="";
    b2.value="";
    c2.value="";
 }
    
})

/* tic tac*/




function runfunct() {

  const win1 = document.querySelector("#win1")
  const win2 = document.querySelector("#win2")
  const win3 = document.querySelector("#win3")
  const win4 = document.querySelector("#win4")
  const win5 = document.querySelector("#win5")
  const win6 = document.querySelector("#win6")
  const win7 = document.querySelector("#win7")
  const win8 = document.querySelector("#win8")
  const win9 = document.querySelector("#win9")

  const click = document.querySelectorAll(".click")
  let logic = true
  click.forEach(element => {
  
    element.addEventListener("click", () => {
      if (element.textContent == "") {
        if (logic) {
          element.textContent = "x"
  
        } else {
          element.textContent = "0"
        }
        logic = !logic
      
      if (win1.textContent == "x" && win2.textContent == "x" && win3.textContent == "x") {
        win1.style.background="red";
        win1.style.fontSize="50px";
        win2.style.background="red";
        win2.style.fontSize="50px";
        win3.style.background="red";
        win3.style.fontSize="50px";
      } else if (
        win1.textContent == "x" && win4.textContent == "x" && win7.textContent == "x"
      ) {
        win1.style.background="red";
        win1.style.fontSize="50px";
        win4.style.background="red";
        win4.style.fontSize="50px";
        win7.style.background="red";
        win7.style.fontSize="50px";
      } else if (
        win1.textContent == "x" && win5.textContent == "x" && win9.textContent == "x"
      ) {
        win1.style.background="red";
        win1.style.fontSize="50px";
        win5.style.background="red";
        win5.style.fontSize="50px";
        win9.style.background="red";
        win9.style.fontSize="50px";
      } else if (
        win2.textContent == "x" && win5.textContent == "x" && win8.textContent == "x"
      ) {
        win2.style.background="red";
        win2.style.fontSize="50px";
        win5.style.background="red";
        win5.style.fontSize="50px";
        win8.style.background="red";
        win8.style.fontSize="50px";
      } else if (
        win3.textContent == "x" && win6.textContent == "x" && win9.textContent == "x"
      ) {
        win3.style.background="red";
        win3.style.fontSize="50px";
        win6.style.background="red";
        win6.style.fontSize="50px";
        win9.style.background="red";
        win9.style.fontSize="50px";
      } else if (
        win3.textContent == "x" && win5.textContent == "x" && win7.textContent == "x"
      ) {
        win3.style.background="red";
        win3.style.fontSize="50px";
        win5.style.background="red";
        win5.style.fontSize="50px";
        win7.style.background="red";
        win7.style.fontSize="50px";
      } else if (
        win4.textContent == "x" && win5.textContent == "x" && win6.textContent == "x"
      ) {
        win4.style.background="red";
        win4.style.fontSize="50px";
        win5.style.background="red";
        win5.style.fontSize="50px";
        win6.style.background="red";
        win6.style.fontSize="50px";
      } else if (
        win7.textContent == "x" && win8.textContent == "x" && win9.textContent == "x"
      ) {
        win7.style.background="red";
        win7.style.fontSize="50px";
        win8.style.background="red";
        win8.style.fontSize="50px";
        win9.style.background="red";
        win9.style.fontSize="50px";
      }
    
    
    
    
      //if value == 0
    
      else if (win1.textContent == "0" && win2.textContent == "0" && win3.textContent == "0") {
        win1.style.background="red";
        win1.style.fontSize="50px";
        win2.style.background="red";
        win2.style.fontSize="50px";
        win3.style.background="red";
        win3.style.fontSize="50px";
      } else if (
        win1.textContent == "0" && win4.textContent == "0" && win7.textContent == "0"
      ) {
        win1.style.background="red";
        win1.style.fontSize="50px";
        win4.style.background="red";
        win4.style.fontSize="50px";
        win7.style.background="red";
        win7.style.fontSize="50px";
      } else if (
        win1.textContent == "0" && win5.textContent == "0" && win9.textContent == "0"
      ) {
        win1.style.background="red";
        win1.style.fontSize="50px";
        win5.style.background="red";
        win5.style.fontSize="50px";
        win9.style.background="red";
        win9.style.fontSize="50px";
      } else if (
        win2.textContent == "0" && win5.textContent == "0" && win8.textContent == "0"
      ) {
        win2.style.background="red";
        win2.style.fontSize="50px";
        win5.style.background="red";
        win5.style.fontSize="50px";
        win8.style.background="red";
        win8.style.fontSize="50px";
      } else if (
        win3.textContent == "0" && win6.textContent == "0" && win9.textContent == "0"
      ) {
        win3.style.background="red";
        win3.style.fontSize="50px";
        win6.style.background="red";
        win6.style.fontSize="50px";
        win9.style.background="red";
        win9.style.fontSize="50px";
      } else if (
        win3.textContent == "0" && win5.textContent == "0" && win7.textContent == "0"
      ) {
        win3.style.background="red";
        win3.style.fontSize="50px";
        win5.style.background="red";
        win5.style.fontSize="50px";
        win7.style.background="red";
        win7.style.fontSize="50px";
      } else if (
        win4.textContent == "0" && win5.textContent == "0" && win6.textContent == "0"
      ) {
        win4.style.background="red";
        win4.style.fontSize="50px";
        win5.style.background="red";
        win5.style.fontSize="50px";
        win6.style.background="red";
        win6.style.fontSize="50px";
      } else if (
        win7.textContent == "0" && win8.textContent == "0" && win9.textContent == "0"
      ) {
        win7.style.background="red";
        win7.style.fontSize="50px";
        win8.style.background="red";
        win8.style.fontSize="50px";
        win9.style.background="red";
        win9.style.fontSize="50px";
      }
      }
      const reset = document.querySelector("#reset").addEventListener("click",()=>{
        win1.innerHTML="";
        win1.style.background="rgb(86, 88, 88)";
        win1.style.fontSize="30px";
        win2.innerHTML="";7
        win2.style.background="rgb(86, 88, 88)";
        win2.style.fontSize="30px";
        win3.innerHTML="";
        win3.style.background="rgb(86, 88, 88)";
        win3.style.fontSize="30px";
        win4.innerHTML="";
        win4.style.background="rgb(86, 88, 88)";
        win4.style.fontSize="30px";
        win5.innerHTML="";
        win5.style.background="rgb(86, 88, 88)";
        win5.style.fontSize="30px";
        win6.innerHTML="";
        win6.style.background="rgb(86, 88, 88)";
        win6.style.fontSize="30px";
        win7.innerHTML="";
        win7.style.background="rgb(86, 88, 88)";
        win7.style.fontSize="30px";
        win8.innerHTML="";
        win8.style.background="rgb(86, 88, 88)";
        win8.style.fontSize="30px";
        win9.innerHTML="";
        win9.style.background="rgb(86, 88, 88)";
        win9.style.fontSize="30px";
        logic = true
      })
    })
  })
}


