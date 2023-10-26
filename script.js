let apiKey = "2119511f80c94c4da3e33937232510";

let displayBox = document.querySelector(".displaybox");
let inputBar = document.querySelector("#input");
let searchButton = document.querySelector("#button");

searchButton.addEventListener("click",function(){
    let query = inputBar.value;

    if(query==""){
        alert("Please enter the city ");
    }else{
        fetchApi(query);
    }
    inputBar.value="";
})

async function fetchApi(query = "gwalior") {
    let apidata = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${query}&aqi=no`);

    let obj = await apidata.json();

    screenUpdate(obj);
}

fetchApi();

function screenUpdate(obj) {
    console.log(obj);
    let weather = obj.current.condition.text;
    let icon = obj.current.condition.icon;
    let temp = obj.current.temp_c;
    let location = obj.location.name;
    let humidity = obj.current.humidity;
    let time = obj.current.last_updated;


    //  console.log(weather , icon , temp , location , humidity , time)

    displayBox.innerHTML=` 
     <div class="box" id="box1">
        <p>${location}</p>
        <p>${time}</p>
   </div>
    <div class="box" id="box2">
        <img src=${icon} width="60%">
        <p>${temp}</p>
    </div>
    <div class="box" id="box3">
        <p>${weather}</p>
        <p> Humidity - ${humidity} % </p>
    </div>`
}
