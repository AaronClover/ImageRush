upImage = new Image();
upImage.src = "imgs/playhover.jpg";
downImage = new Image();
downImage.src = "imgs/playclick.jpg"
normalImage = new Image();
normalImage.src = "imgs/playnone.png";
 
function changeImage()
{
  document.images["jsbutton"].src= upImage.src;
  return true;
}
function changeImageBack()
{
   document.images["jsbutton"].src = normalImage.src;
   return true;
}
function handleMDown()
{
 document.images["jsbutton"].src = downImage.src;
 return true;
}