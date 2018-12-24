$(document).ready(function(e) {
    $('.bootpopup').click(function(){
  var frametarget = $(this).attr('href');
  targetmodal = '#myModal'; 
        $('#modeliframe').attr("src", frametarget );   
});
});