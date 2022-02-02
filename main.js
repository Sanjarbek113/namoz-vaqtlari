window.navigator.geolocation.getCurrentPosition(async (mintaqa) =>{
    console.log(mintaqa);

    const latitude = mintaqa.coords.latitude;
    const lontitude = mintaqa.coords.longitude;

    console.log(latitude, lontitude);

    const response = await fetch(`http://api.aladhan.com/v1/calendar?latitude=${latitude}&longitude=${lontitude}&method=3school=1&month=${ new Date().getMonth}&year=${new Date().getFullYear}`);
    const namoz = await response.json();
   
    const SubMit = document.querySelector("#submit");
    SubMit.addEventListener("click", () =>{
        const dataOfnamoz = document.querySelector("#kun");
        let i = parseInt(dataOfnamoz.value ) + 1;
        if(i < 0){
            alert("kichik son kititdingiz")
        } 
        if( i > 31){
            alert("katta son kiritdingiz")
        }
        else{

     const fajr = namoz.data[i].timings.Fajr;
     const asr = namoz.data[i].timings.Asr;
     const Dhuhr = namoz.data[i].timings.Dhuhr;
     const Imsak = namoz.data[i].timings.Imsak;
     const Isha = namoz.data[i].timings.Isha;
     const Maghrib = namoz.data[i].timings.Maghrib;
     const Midnight = namoz.data[i].timings.Midnight;
     const Sunrise = namoz.data[i].timings.Sunrise;
     const Sunset = namoz.data[i].timings.Sunset;
          
        const elements = document.querySelectorAll(".p-text");
        elements[0].textContent = "Imsak :" + Imsak;
        elements[1].textContent = " Fajr :" + fajr;
        elements[2].textContent = "Sunrise :" + Sunrise;
        elements[3].textContent = "Dhuhr :" + Dhuhr;
        elements[4].textContent = "Asr :" + asr;
        elements[5].textContent = "Maghrib :" + Maghrib;
        elements[6].textContent = "Sunset :" + Sunset;
        elements[7].textContent = "Isha : " + Isha;
        elements[8].textContent = "Midnight :" + Midnight;
        elements[9].textContent = (new Date().getMonth() + 1) + "- oyning " + (i-1) +"- kuni";  
        } 
    });
})