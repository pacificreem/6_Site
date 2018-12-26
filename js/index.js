$(document).ready(function(e) {
    $('.bootpopup').click(function(){
  var frametarget = $(this).attr('href');
  targetmodal = '#myModal'; 
        $('#modeliframe').attr("src", frametarget );   
});
});

$("#myModal").on("show", function () {
  $("body").addClass("modal-open");
}).on("hidden", function () {
  $("body").removeClass("modal-open")
});