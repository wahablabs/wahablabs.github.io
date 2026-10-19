(function(){
  var root=document.documentElement;
  var tb=document.querySelector('.theme-btn');
  tb&&tb.addEventListener('click',function(){
    var dark=root.dataset.theme?root.dataset.theme==='dark':matchMedia('(prefers-color-scheme: dark)').matches;
    root.dataset.theme=dark?'light':'dark';
    try{localStorage.setItem('theme',root.dataset.theme);}catch(e){}
  });
  var mb=document.querySelector('.menu-btn'),menu=document.getElementById('menu');
  mb&&mb.addEventListener('click',function(){
    var o=menu.classList.toggle('open');mb.setAttribute('aria-expanded',o);
  });
  menu&&menu.addEventListener('click',function(e){if(e.target.tagName==='A'){menu.classList.remove('open');mb.setAttribute('aria-expanded','false');}});
  var lb=document.querySelector('.lightbox');
  if(lb&&lb.showModal){
    var img=lb.querySelector('img');
    document.querySelectorAll('.zoom').forEach(function(b){
      b.addEventListener('click',function(){var i=b.querySelector('img');img.src=b.dataset.src;img.alt=i.alt;lb.showModal();});
    });
    lb.querySelector('.lb-close').addEventListener('click',function(){lb.close();});
    lb.addEventListener('click',function(e){if(e.target===lb)lb.close();});
  }
})();
