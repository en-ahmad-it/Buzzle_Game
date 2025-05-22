let images1=document.querySelectorAll(".image");
let array=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];
let arr1=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];

    function RandomNum( min,  max) {
        let R = parseInt(Math.random() * (max - min + 1) + min);
        return R;

    }
for(let i=0;i<array.length;i++)
{
                let t = RandomNum(0, array.length - 1);
            while (array[t] === -1) {
                t = RandomNum(0, array.length - 1);
            }

            arr1[i] = array[t];
            array[t] = -1;
        
}

let images=images1;
let gameBord=document.querySelector(".gameBord div");

gameBord.innerHTML="";
for(let i=0;i<images1.length;i++)
{
       images[i]=images1[arr1[i]];
            gameBord.appendChild(images1[arr1[i]]);

}    



setTimeout(()=>{


let divs=document.querySelectorAll("div");
let spantries=document.querySelector(".tries span");
let spanname=document.querySelector(".name span");
let degree=document.querySelector(".degree span");
let c=0;
let wrong=0;
let arr=[];
let win=0;

 let name1=prompt("Entre Your Name");
 spanname.innerHTML=name1;
let imagesdiv=document.querySelectorAll(".image .front");
imagesdiv.forEach((img)=>{
img.classList.add("show");
});
setTimeout(()=>{
 imagesdiv.forEach((img)=>{

img.classList.remove("show");
 })
},4000)

setTimeout(()=>{


images.forEach((img,i)=>{
    if(!images[i].classList.contains("true")){

    
img.addEventListener("click",()=>{
    if(!img.classList.contains("click"))
    {
  img.classList.add("click");
    img.classList.add("rotate");
    c++;
    arr.push(i);
    if(c===2)
    {c=0;
let e1=images[arr[0]].querySelector(".front img").getAttribute("src");
let e2=images[arr[1]].querySelector(".front img").getAttribute("src");
if(e1===e2)
{
win++;
images[arr[0]].classList.add("true");
images[arr[1]].classList.add("true");
degree.innerHTML=win;
if(win==10){
alert("You Win ! press OK to play again");

window.location.reload();
}
arr.pop();
arr.pop();
}else{
    images[arr[0]].classList.remove("click");
    images[arr[1]].classList.remove("click");
wrong++;
spantries.innerHTML=wrong;

 
images[arr[0]].classList.remove("rotate");
images[arr[1]].classList.remove("rotate");
arr.pop();
arr.pop();
}


    }
  
    }
})
    }
});
let btn=document.querySelector("button");
btn.onclick=function(){
    window.location.reload();
}

},4000);

},);
