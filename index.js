

function getweather()
{
    let cityinputRef=document.querySelector("#cityname");
    let city= cityinputRef.value;

    let resultDivRef=document.querySelector("#result")

   let  res=axios.get(`https://p2pclouds.up.railway.app/v1/learn/weather?city=${city}`);



    res 
        .then((data)=>
        {
            console.log(data.data.current);
            resultDivRef.innerHTML=`
            <div>Temp: ${data.data.current.temp_c} </div>
            <div>Wind: ${data.data.current.wind_kph} </div>
            <div>Dew: ${data.data.current.dewpoint_c} </div>
            
            
            `
            
            ;
        })
        .catch((error)=>{
            console.log(error);
        });



}








