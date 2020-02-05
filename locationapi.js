
var x=document.getElementById("demo");

function getLocation(){
	if(navigator.geolocation)
	{
		navigator.geolocation.getCurrentPosition(showPosition);
	}
	else{
	x.innerHTML="Goelocation is not supported";
	
	}	
}
function showPosition(position){
	x.innerHTML="Latitude:" + " " +position.coords.latitude +
	"<br/>Longitude:" + " " + position.coords.longitude;

}