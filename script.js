(function(){
  'use strict';
  var y=document.getElementById('year'); if(y)y.textContent=new Date().getFullYear();

  var t=document.getElementById('navToggle'),m=document.getElementById('navMenu');
  if(t&&m){
    t.addEventListener('click',function(){var o=m.classList.toggle('open');t.setAttribute('aria-expanded',o)});
    m.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){m.classList.remove('open')})});
  }

  var secs=document.querySelectorAll('section[id],header[id]'),links=document.querySelectorAll('.menu a[href^="#"]'),tick=false;
  function mark(){
    var p=window.scrollY+130,c='';
    secs.forEach(function(s){if(s.offsetTop<=p)c=s.id});
    links.forEach(function(a){a.classList.toggle('active',a.getAttribute('href')==='#'+c)});
  }
  window.addEventListener('scroll',function(){if(!tick){requestAnimationFrame(function(){mark();tick=false});tick=true}},{passive:true});
  mark();

  document.querySelectorAll('.acc-btn').forEach(function(b){
    b.addEventListener('click',function(){
      var p=document.getElementById(b.getAttribute('aria-controls')),open=b.getAttribute('aria-expanded')==='true';
      b.setAttribute('aria-expanded',!open);p.hidden=open;
    });
  });
})();
