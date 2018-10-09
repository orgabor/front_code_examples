
    var translate=[
     ['Sort Option', 'Keresési feltételek'],
     ['Per Page ',  'Oldalanként'],
     ['Bedroom(s)',  'Hálószoba'],
     ['Bathroom(s)',  'Fürdőszoba'],
     ['Picture(s)',  'Kép'],
     ['Pictures',  'Képek'],
     ['Contact Agent',  'Küldjön üzenetet!'],
     ['Results returned',  'Találat'],
     ['More Details',  'Részletek'],
     

     ]
     
     window.onload = clear; 
     function clear() { 

          document.body.innerHTML= document.body.innerHTML.replaceAll(translate[i][0], translate[i][1]);
         //for (var i = 0; i < translate.length; i++) {
             
   //  document.body.innerHTML= document.body.innerHTML.+=replaceAll(translate[i][0],translate[i][1]);
     console.log(translate[i][0]+','+translate[i][1]);
 // }
     ;} 

       jQuery(window).load(function() {
          var visszahivmenu=jQuery("span.menu-text.fusion-button.button-default.button-small:contains('VISSZAHÍVÁST')");
         var visszahivgomb=jQuery('<a class="fusion-button button-flat button-round button-large button-default button-1" target="_self" title="visszahivas" href="#" data-toggle="modal" data-target=".fusion-modal.visszahivas" id="visszahiv"><span class="fusion-button-text">VISSZAHÍVÁST KÉREK<'+'/span><'+'/a>');
          var newvisszahivogomb=jQuery('<a  href="#" data-toggle="modal" data-target=".fusion-modal.visszahivas" id="visszahiv"><span class="menu-text fusion-button button-default button-small"><span class="fusion-button-text">VISSZAHÍVÁST KÉREK</span></a>');
     
     visszahivmenu.hide().append(newvisszahivogomb);
     });
     
    
         var translate=[
     ['Sort Option', 'Keresési feltételek'],
     ['Per Page ',  'Oldalanként'],
     ['Bedroom(s)',  'Hálószoba'],
     ['Bathroom(s)',  'Fürdőszoba'],
     ['Picture(s)',  'Kép'],
     ['Pictures',  'Képek'],
     ['Contact Agent',  'Küldjön üzenetet!'],
     ['Results returned',  'Találat'],
     ['More Details',  'Részletek'],
     ['<a  href="http://localhost/magaspart/visszahivas">','<a class="fusion-button button-flat button-round button-large button-default button-1" target="_self" title="visszahivas" href="#" data-toggle="modal" data-target=".fusion-modal.visszahivas" id="visszahiv">']

     ]
  
     
     
     window.onload = clear; 
     function clear() { 

       
         for (var i = 0; i < translate.length; i++) {
             
   document.body.innerHTML= document.body.innerHTML.replaceAll(translate[i][0],translate[i][1]);
     
  }
     ;} 
     
  
     jQuery(window).load(function() {
          var visszahivmenu=jQuery("a:contains('!?')");
          var uzenetgomb=jQuery("a:contains(',')");
         
          var newvisszahivogomb= jQuery('<a  href="#" data-toggle="modal" data-target=".fusion-modal.visszahivas" id="visszahiv"><span class="menu-text fusion-button button-default button-small"><span class="fusion-button-text">VISSZAHÍVÁST KÉREK</span></a>');
          var newuzenetgomb = jQuery('<a target="_self" title="uzenet" href="#" data-toggle="modal" data-target=".fusion-modal.uzenet""><span class="menu-text fusion-button button-default button-small">ÜZENETET ÍROK</span></a>');
     visszahivmenu.hide().append(newvisszahivogomb);
     uzenetgomb.hide().append(newuzenetgomb);
     });
    
    
/*
     window.onload = clear; 
     function clear() { 
     document.body.innerHTML = document.body.innerHTML.replaceAll('Sort Option', 'Keresési feltételek')
                                                                    .replaceAll('Per Page ',  'Oldalanként')
                                                                    .replaceAll('Bedroom(s)',  'Hálószoba')
                                                                    .replaceAll('Bathroom(s)',  'Fürdőszoba')
                                                                    .replaceAll('Picture(s)',  'Kép')
                                                                    .replaceAll('Pictures',  'Képek')
                                                                    .replaceAll('Contact Agent',  'Küldjön üzenetet!')
                                                                    .replaceAll('Results returned',  'Találat')
                                                                    .replaceAll('More Details',  'Részletek')
     
                                                               ;} 
    +*/
    <a href="http://localhost/magaspart/visszahivas"></a>