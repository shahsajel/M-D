var $menu         = $('.menu');
var $menuUl       = $('.menu ul');
var $menuTitle    = $('.menuTitle');
var count         = 0;

$menu.click(function(){
  
  count++;
  
  if (count%2 == 1) {
    
    var tl = new TimelineLite();
    
    tl.to($menu, 0.5, {css:{
                width: 750,
                background: "transparent",
                borderRadius: 0,
                borderTop: "1px solid #D8D8D8"
    }, ease:Expo.easeInOut})
    tl.to($menuTitle, 0.25, {x:0, y:-130, color:"#fff"});
    
    setTimeout(function(){
      $menuUl.fadeIn(250);
    }, 200);
    
  } else {
    
    $(this).css({borderRadius: "100%"})
  
    TweenMax.set($menu, {clearProps:"all"});
    TweenMax.set($menuTitle, {clearProps:"all"});
    
    $menuUl.hide();
  };
  
})