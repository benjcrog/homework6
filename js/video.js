var video;
var volume;

function getVid(){
	video = document.querySelector("#myVideo"); 

}

function playVid() { 

	console.log("Play Video");
	// document.images["play"].src="../images/play.jpeg";
	// video = document.querySelector("#myVideo");
	video.play();
	console.log(volume);
	volume = document.querySelector("#volume")
	console.log(volume);
	volume.innerHTML = video.volume * 100 + "%";

} 

function pauseVid() { 

	console.log("Pause Video");
	video.pause();

} 

function decreaseSpeed() { 

	video.playbackRate *=.8
  	console.log("Speed is "+ video.playbackRate);
  	
} 

function increaseSpeed() {
	video.playbackRate *=1.25
	console.log("Speed is "+ video.playbackRate);
	
} 

function skipAhead() {
	video.currentTime +=60;
	console.log("Current location is "+ video.currentTime);
	if (video.currentTime > video.duration){

		video.currentTime= 0;
		video.playbackRate = 1;
		video.play();
	}

} 

function mute() { 
  	console.log(video.muted);
  	if (video.muted ==true){

  		video.muted =false;
  		  	var button = document.querySelector('#mute');
  			button.innerHTML="Unmuted"
  		
  		console.log("Unmuted");
  		
  	}
  	else{
  		video.muted = true;
      	console.log("Muted");
      	 var button = document.querySelector('#mute');
  		button.innerHTML="Muted"
  	}

  	// console.log(document.querySelector(#mute))
}

function changeVolume() {
	let slider = document.querySelector("#volumeSlider")
	console.log(slider.value)
	video.volume = slider.value/100;
	console.log("Volume is "+ video.volume);
	volume.innerHTML = video.volume * 100 + "%";
}
       

function gray() { 

	// if (video)
	
	video.classList.add("grayscale");
	// video.style.filter="grayscale(100%)";
	console.log("In grayscale")

	// document.getElementbyId("myVideo") = video.grayscale;

	
}

function color() {
	video.classList.remove("grayscale");
	// video.style.filter="grayscale(0%)";
	console.log("In color") 
}
