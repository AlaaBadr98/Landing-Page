/*                     build menu                 */
// scrolled smoothy
document.querySelector('html').style.scrollBehavior="smooth";
//document.querySelector('ul').style.width="2000px"
// creat li menu

for(let i=1;i<=4;i++){
//creat li
let menu=document.createElement('li');
// rename the li 
menu.innerHTML="section "+i;
// append each li into its place 
document.getElementById("navbar__list").appendChild(menu);
}
/*           scrolled on click           */
// collect bottoms in one varieble to easy for access 
let click=document.querySelectorAll("li");
for (let i=0;i<4;i++){
  click[i].onclick=function(){
    var id= "section"+(i+1);
    var moveto = document.getElementById(id);
    moveto.scrollIntoView();
    getidsection(moveto);
  }
};

/*   add active class by scrolling  */

 const sections=document.querySelectorAll("section"); // select all sections
onscroll = function () {  
    var scrollonsection = document.documentElement.scrollTop; // get the top by scrolling
    sections.forEach((section) => {
      if (  // check of the position 
        scrollonsection>= section.offsetTop - section.offsetHeight * 0.2 &&
        scrollonsection <
          section.offsetTop + section.offsetHeight - section.offsetHeight * 0.2
      ) {
        var currentsectionID = section.attributes.id.value; // get current section to add style
        getidsection(currentsectionID);
      }
    });
  };
/*           function to set active style          */
// function for current section 
function getidsection(id){
  if(id=="section1"){
    style(0);
  }
  else if(id=="section2"){
    style(1);
  }
  else if(id=="section3"){
    style(2);
  }
  else if(id=="section4"){
    style(3);
  };
}
function style(i){
    for(let j=0;j<4;j++){
    removeStyleActive(j);
    }
     styleActive(i);
}
function styleActive(i){
    click[i].style.backgroundColor="gray" ;
}
// function for not current section 
function removeStyleActive(j){
    click[j].style.backgroundColor="white";
    click[j].style.color="#0e2047";


}