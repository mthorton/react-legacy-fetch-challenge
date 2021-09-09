import React, { Component, useState } from 'react';

class GetWeather extends React.Component {

    getLocation = () => {

        // const [lat, setLat] = useState(null);
        // const [lng, setLng] = useState(null);
        // const [status, setStatus] = useState(null);

        if (!navigator.geolocation) {
        console.log('Geolocation is not supported by your browser');
        } else {
        console.log('Locating...');
        navigator.geolocation.getCurrentPosition((position) => {
            //setStatus(null);
            let latCoord = (position.coords.latitude);
            let lonCoord = (position.coords.longitude);

            // These are the lat and lng to be stored in variable. // Testing 
            console.log(position.coords.latitude + "," + position.coords.longitude) // Testing
            let location = position.coords.latitude + "," + position.coords.longitude;
            //reqData(location);
            if (!location) {
                console.log('Unable to get weather');
            } else {
                //lat: 39.9474282
                //lon: -86.1242782
                fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${latCoord}&lon=${lonCoord}&appid=4854c5f2d4c5c9951de939a84246540b`)
                .then(res => res.json())
                .then(resData => {
                    console.log(resData)
                })
            }
        }, () => {
            console.log('Unable to retrieve your location');
        });
        }
    }

    render(){
        return(
            <div>
                <button onClick={this.getLocation}>Get Weather</button>
            </div>
        )
    }
    
}

export default GetWeather;