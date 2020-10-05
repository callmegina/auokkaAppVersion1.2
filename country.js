import React, { Component } from 'react';


import PhoneInput from 'react-native-phone-input'


export default class CountryScreen extends Component {
    render() {
        return (
            <PhoneInput ref='phone' />
        )
    }
}