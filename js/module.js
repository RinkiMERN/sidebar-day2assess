let btn=document.querySelector("button");
console.log(btn);
let section=document.querySelector("#module")
console.log(section);
btn.onclick=function()
{
    let cl=section.classList.toggle("module1");
    // console.log(cl);
    if(cl)
    {
        section.style.visibility="hidden";
        article.style.opacity=0;
        btn.textContent="hide";
    }
    else{
        section.style.visibility="visible";
        article.style.opacity=1;
        btn.textContent="show";
    }
}