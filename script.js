function play()
{
    var p1 = Math.random()*6;
var p2 = Math.random()*6;
p1= Math.floor(p1) + 1 ;
p2= Math.floor(p2) + 1;
var img1 = "dice"+p1+".png";
var img2 ="dice"+p2+".png";
console.log(img1)
document.querySelector("#player1").setAttribute("src",img1);
document.querySelector("#player2").setAttribute("src",img2);
if(p1===p2)
{
    document.querySelector(".heading").textContent="Oh! Its Draw..";
}
else if(p1 > p2){
    document.querySelector(".heading").textContent="Player 1 Wins !!";
}
else{
    document.querySelector(".heading").textContent="Player 2 Wins !!";
}
}
function refresh(){
    window.location.reload();
}
document.querySelector("button").addEventListener("click", play);
setTimeout(refresh,10000);
