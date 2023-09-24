const button1= document.querySelector("#button1");
const button2= document.querySelector(" #button2 ");
const button3= document.querySelector("#button3");
const buttonH= document.querySelector("#button4");

const button4= document.querySelector("#PCOD1");
const button5= document.querySelector("#PCOD2");
const button6= document.querySelector("#PCOD3");
const button7= document.querySelector("#PCOD4");
const button8=document.querySelector("#rem01");
const button9=document.querySelector("#rem02");

const text= document.querySelector("text");
const buttonA= document.querySelector("#PCOS1");
const buttonB= document.querySelector("#PCOS2");
const buttonC= document.querySelector("#PCOS3");
const buttonD= document.querySelector("#PCOS4");
const buttonE=document.querySelector("#rem03");
const buttonF=document.querySelector("#rem04");
buttonH.onclick=helpdesk;
button1.onclick= pcod;
button2.onclick= pcos;
button3.onclick= faqs;
button4.onclick= symp;
button5.onclick= cure;
button6.onclick= cause;
button7.onclick= back;
button8.onclick= diet;
button9.onclick= exer;
buttonA.onclick=f1;
buttonB.onclick= f2;
buttonC.onclick= f3;
buttonD.onclick= back;
buttonE.onclick= f4;
buttonF.onclick= f5;
function pcod()
{
    document.querySelector("#pd").style.display ='flex';
}
function faqs()
{
    document.querySelector("#ques").style.display='flex';
}
function symp()
{
    document.querySelector("#pb").style.display ='flex';
}
function cure()
{
    document.querySelector("#rem").style.display ='flex';
}
function back()
{
    document.querySelector("#pd").style.display ='none';
    document.querySelector("#pb").style.display ='none';
    document.querySelector("#rem").style.display ='none';
    document.querySelector("#sympos").style.display ='none';
    document.querySelector("#os").style.display ='none';
    document.querySelector("#rem2").style.display ='none';
    document.querySelector("#cure01").style.display ='none';
    document.querySelector("#cure02").style.display ='none';
    document.querySelector("#cure03").style.display ='none';
    document.querySelector("#cure04").style.display ='none';
    document.querySelector("#cause").style.display ='none';
    document.querySelector("#cause2").style.display ='none';
    document.querySelector("#ngos").style.display ='none';
}
function pcos()
{
    document.querySelector("#os").style.display ='flex';
}
function cause()
{
    document.querySelector("#cause").style.display ='flex';
}
function diet()
{
    document.querySelector("#cure01").style.display ='flex';
}
function exer()
{
    document.querySelector("#cure02").style.display ='flex';
}
function f1()
{
    document.querySelector("#sympos").style.display ='flex';
}
function f2()
{
    document.querySelector("#rem2").style.display ='flex';
}
function f4()
{
    document.querySelector("#cure03").style.display ='flex';
}
function f5()
{
    document.querySelector("#cure04").style.display ='flex';
}
function f3()
{
    document.querySelector("#cause2").style.display ='flex';
}
function helpdesk()
{
    document.querySelector("#ngos").style.display ='flex';
}
