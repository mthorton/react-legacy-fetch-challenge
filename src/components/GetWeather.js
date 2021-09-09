import React, { Component, useState } from 'react';
import DisplayWeather from './DisplayWeather';

class GetWeather extends React.Component {
    constructor(){
        super()
        this.state = {
          data: {},
          loc: "",
          display: false
        }
      }

    getLocation = () => {

        if (!navigator.geolocation) {
        console.log('Geolocation is not supported by your browser');
        } else {
        console.log('Locating...');
        navigator.geolocation.getCurrentPosition((position) => {
            let latCoord = (position.coords.latitude);
            let lonCoord = (position.coords.longitude);

            console.log(position.coords.latitude + "," + position.coords.longitude)
            let location = position.coords.latitude + "," + position.coords.longitude;
            
            if (!location) {
                console.log('Unable to get weather');
            } else {
                //lat: 39.9474282
                //lon: -86.1242782
                fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${latCoord}&lon=${lonCoord}&appid=4854c5f2d4c5c9951de939a84246540b`)
                .then(res => res.json())
                .then(resData => {
                    //console.log(resData)
                    this.setState({
                        data: resData,
                        display: true
                      })
                    //console.log(this.state.data)
                })
            }
        }, () => {
            console.log('Unable to retrieve your location');
        });
        }
    }

    render(){

        if(this.state.display === false){
            return(
                <div>
                    <button onClick={this.getLocation}>Get Weather</button>
                </div>
            )
        }

        return(
            <div>
                {/* <button onClick={this.getLocation}>Get Weather</button> */}
                <DisplayWeather data={this.state.data} />
                {/* <h1>{this.state.data.name}</h1> */}
            </div>
        )
    }
    
}

export default GetWeather;