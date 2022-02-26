const clickBtn = document.querySelector(".click-btn");
const btnFirst = document.querySelector(".first");
const btnSecond= document.querySelector(".second");
const btnThird= document.querySelector(".third");
const scrollIntoFirst = document.querySelector(".part-1");
const scrollIntoSecond = document.querySelector(".part-2");
const scrollIntoThird = document.querySelector(".part-3");


btnFirst.addEventListener('click',function(){
    scrollIntoFirst.scrollIntoView({behavior : 'smooth'});
});
btnSecond.addEventListener('click',function(){
    scrollIntoSecond.scrollIntoView({behavior : 'smooth'});
});
btnThird.addEventListener('click',function(){
    scrollIntoThird.scrollIntoView({behavior : 'smooth'});
});