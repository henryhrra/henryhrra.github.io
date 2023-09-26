/* let a = document.getElementById("navResume");
a.addEventListener("click",()=>{
    window.scroll(0,100,"smooth",);
}); */
document.getElementById("navResume").addEventListener("click",()=>{
    //window.scroll(0,100,"smooth",);
    let txt = document.getElementById("navResume").offsetTop;
    console.log(txt);
});