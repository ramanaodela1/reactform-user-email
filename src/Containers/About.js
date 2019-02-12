import React, { Component } from 'react';
import '../App.css';
import ApiEndPoints from '../helpers/ApiEndPoints';
import ApiClient from '../helpers/ApiClient';
import  Customer from '../Components/Customer'

export default class About extends Component {
  state = {
    
    rows: []
    };
    componentDidMount() {
  		if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          let currentParams = { 
            latitude: position.coords.latitude,
           longitude: position.coords.longitude, 
           sessionId:'f42e5cae-7db0-9196-c163-5e5ef0d5b491'
           };
          ApiClient.apiPost(ApiEndPoints.DevicesBySessionId, currentParams).then((res) => {
           this.setState({rows: res.data.data});
          });
        }, (error) => {
          
        });
      }else{
        
      }
  	}
  render() {
    return (
      <div>
          <p>
            Home
          </p>
          <Customer userList={this.state.rows}
          />
      </div>
    );
  }
}