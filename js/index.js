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

//music room

var playlist = new Array("Isaac Hayes - Theme from Shaft - 1971",
	"Edgar Froese - Blue Panther (Kamikaze 1989) - 1989",
	"John Carpenter - Theme from Assault on Precinct 13 - 1976",
	"Goblin - Main Theme from Profondo Rosso (Deep Red) - 1975",
	"So Jong Gon - Pulgasari Main Theme - 1985",
	"Gino Marinuzzi Jr. - Main Title from Planet of the Vampires - 1965",
	"Claudio Simonetti - Nuke is Over (Warriors of the Wasteland) - 1983",
	"ADVERTISEMENT --- Night of the Living Dead - Radio Spot 1 - 1970",
	"Franco Micalizzi - Main Theme from The Visitor - 1979",
	"The Carrie Nations - In the Long Run (Beyond the Valley of the Dolls) - 1970",
	"Riz Ortolani - Cannibal Holocaust Main Theme - 1980",
	"Piero Umiliani - Luna d'Agosto - 1971",
	"Asei Kobayashi - Cherries Were Made for Eating (Hausu) - 1977",
	"Edgar Froese - Police Therapy Center (Kamikaze 1989) - 1989", 
	"ADVERTISEMENT --- I Drink Your Blood - 1971 Trailer Spoof",
	"Claudio Simonetti - Theme from Cut and Run - 1985", 
	"Meiko Kaji - Urami Bushi (Grudge Song) - 1973",
	"Piero Umiliani - Nel villagio (Continente nero) - 1975",
	"Melvin Van Peebles - Sweetback's Theme - 1971",
	"Manfred Hubler & Siegfried Schwabs - Droge CX9 (Vampyros Lesbos) - 1971",
	"Roy Ayers - Coffy Is the Color - 1973",
	"ADVERTISEMENT --- Run! Bitch Run! 2009 Trailer",
	"Piero Umiliani - Isola tuttofare (Le Isole Dell'amore) - 1970",
	"Jose Bartel - Preche (Spermula) - 1976",
	"Pool-Pah - Sour Soul - 1973",
	"Kitra Williams & Tommy Wiseau - You're My Rose (The Room) - 2003",
	"Stelvio Cipriani - Mary's Theme - 1969",
	"Piero Umiliani - Le Isole Dell'amore - 1970",
	"Asei Kobayashi - A Letter in the Past (Hausu) - 1977",
	"ADVERTISEMENT --- Spermula - Bande annonce France - 1976");
var currentSong = 0;
var isplaying = false;
var tracklist = new Array ('1', '2', '3', '4', '5', '6', '7', '8');

window.onload=function(){
	var player = document.getElementById("player");
	var background = document.getElementById("mediaback");
	var button = document.getElementById("mediabutton");
	var audio = document.getElementById("audio");
	var marquee = document.getElementById("mediamarquee");
	var minus = document.getElementById("minus");
	var plus = document.getElementById("plus");
	var next = document.getElementById("next");
	var back = document.getElementById("back");
	audio.src = 'media/'+playlist[currentSong]+'.mp3';

	button.addEventListener("click", function(){
	  if(audio.paused){
	    audio.play();
	    button.style.opacity = '1';
	    isplaying = true;
	    marquee.innerHTML = playlist[currentSong];

	  } else {
	    audio.pause();
	   	button.style.opacity = '0';
	   //marquee.innerHTML = 'Windows Media Player';
	   	isplaying = false;
	  }

	});



	minus.addEventListener("click", function(){
	  if(player.src = "media/player.png"){
	    player.src = "media/player2.png";
	   	minus.src = 'media/minus2.png' ;
	   	minus.style.cursor = "auto";
	    plus.src = 'media/plus.png' ;
	    plus.style.cursor = "pointer";
	    background.src = '';
	    background.style.opacity = '0';
	    marquee.style.fontSize = '7.5px';
	    marquee.style.width = '95px';
	    marquee.style.top = '447.4px';
	    marquee.style.marginLeft = '-64px';
	  }
	});


	plus.addEventListener("click", function(){
	  if(player.src = "media/player2.png"){
	    player.src = "media/player.png";
	    plus.src = 'media/plus2.png' ;
	    plus.style.cursor = "auto";
	    minus.src = 'media/minus.png' ;
	    minus.style.cursor = "pointer";
	    background.src = "media/back1.gif";
	    background.style.opacity = '1';
	    marquee.style.fontSize = '12px';
	    marquee.style.width = '160px';
	    marquee.style.top = '423px';
	    marquee.style.marginLeft = '-85px';
	  }
});

	next.addEventListener('click', function () {
	    currentSong ++;
	   	if(currentSong >= playlist.length){
	    	currentSong = 0;
	    }
	   	if(currentSong < playlist.length){
		    console.log(currentSong);
		    audio.src = 'media/'+playlist[currentSong]+'.mp3';
			marquee.innerHTML = playlist[currentSong];
			var track = tracklist[Math.floor(Math.random()*tracklist.length)]; //à voir
	    	background.src = 'media/back'+track+'.gif'; //à voir
		    if(isplaying){
			    audio.play();
			}
			
		}
	});

	back.addEventListener('click', function () {
	    currentSong --;
	    if(currentSong < 0){
	    	currentSong = playlist.length-1;
	    }
	   	if(currentSong < playlist.length){
		    console.log(currentSong);
		    audio.src = 'media/'+playlist[currentSong]+'.mp3';
			marquee.innerHTML = playlist[currentSong];
			var track = tracklist[Math.floor(Math.random()*tracklist.length)]; //à voir
	    	background.src = 'media/back'+track+'.gif'; //à voir
		    if(isplaying){
			    audio.play();
			}

			
		}
	});

	audio.addEventListener('ended', function () {
	    currentSong ++;
	    if(currentSong >= playlist.length){
	    	currentSong = 0;
	    }
	   	if(currentSong < playlist.length){
		    console.log(currentSong);
		    audio.src = 'media/'+playlist[currentSong]+'.mp3';
			marquee.innerHTML = playlist[currentSong];
		    if(isplaying){
			    audio.play();
			}
			
		}
	});

}
