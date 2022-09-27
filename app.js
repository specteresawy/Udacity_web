
window.onload = function() {
  dynamicPage();
  
};

window.onscroll = function(){
  scroll_function();
};  

let btn = document.createElement("button");
btn.setAttribute("id","myBtn");

function dynamicPage() {
  let inputs = document.getElementsByTagName('section');
  for (let i = 1; i <=inputs.length; i++)
  {
    let section_number = document.getElementById('section'+i);
    section_number = section_number.id;

    let sections = document.getElementById("section"+i);
    let node = document.createElement('a');
    let textnod = document.createTextNode(".");
    node.title = ".";
    node.href = "#section"+i;
    sections.appendChild(node);
    document.body.appendChild(sections);

    let ul = document.getElementById('navbar__list');
    let li = document.createElement("li");

    li.appendChild(document.createTextNode(section_number));
    li.className = "listClass"
    li.id = 'section_number'+i;
    ul.appendChild(li);
    let href_loc = document.querySelectorAll('a');
    const listItem = document.getElementById(li.id);
    if(listItem){
      listItem.addEventListener('click', function()
      {
        console.log('list item '+ `${i}`+ ' clicked');
        let loc = href_loc[i-1].href;
        console.log(loc);
        window.location.assign(loc);
      });
    }
  }
}

function scroll_function(){
      
    document.body.appendChild(btn);
    btn.innerHTML = "Top";
    btn.style.display = "block";

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)
     {
      btn.onclick = function topFunction() {
      document.body.scrollTop = 0; 
      document.documentElement.scrollTop = 0; 
      }
    } else {
      btn.style.display = "none";
    }
 
}
