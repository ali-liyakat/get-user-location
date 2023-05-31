const button=document.getElementById("btn");
const place=document.getElementById("place");

async function getdata(lat,long) {
    const promise=await fetch(`http://api.weatherapi.com/v1/current.json?key=e8c99ebb2df748bba2892745232805&q=${lat},${long}&aqi=yes`);
    return await promise.json();
}

async function gotLocation(pos){
    const result=await getdata(
        pos.coords.latitude,
        pos.coords.longitude
    );
    place.innerText=`${result.location.name}, ${result.location.region}`;
}

function failed(){
    console.log("error");
}

button.addEventListener('click', async ()=>{
    navigator.geolocation.getCurrentPosition(gotLocation, failed);

});