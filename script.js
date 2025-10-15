
document.addEventListener('DOMContentLoaded', function(){
document.querySelectorAll('a[href^="#"]').forEach(function(a){
a.addEventListener('click', function(e){
e.preventDefault();
var id = a.getAttribute('href').slice(1);
var el = document.getElementById(id);
if(el) el.scrollIntoView({behavior:'smooth'});
});
});
});
