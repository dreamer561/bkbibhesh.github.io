var tablinks=document.getElementsByClassName('tablinks');
var tabcontents=document.getElementsByClassName('tab-contents');

var sidemenu=document.getElementById('sidemenu');
const msg=document.getElementById('msg');


  const scriptURL = 'https://script.google.com/macros/s/AKfycbz8Xz5pRXAAkDmddIRhEb6hUw5XwkmZvYvcjqorvAV7o7o6BuGBZkN6IYZJeSqx__zf/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {msg.innerHTML="Sucessfully Submitted"
    setTimeout(function(){
        msg.innerHTML=''
    },2000)
    form.reset()
})
      .catch(error => console.error('Error!', error.message))
  })

function opntab(tabname) {
    for(tablink of tablinks){
        tablink.classList.remove('activelink')
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove('active-tab')
    }
    event.currentTarget.classList.add("activelink")
    document.getElementById(tabname).classList.add("active-tab")
    
}
function openmenu(){
    sidemenu.style.right="0";
}
function closemenu(){
    sidemenu.style.right="-200px";
}