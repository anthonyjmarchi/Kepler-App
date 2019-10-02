import React, { Component } from 'react';
 
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
 
export default class App extends Component<{}> {

    fetchAge(firstAge, secondAge){
        var age = secondAge - firstAge;
        var kepler = age * 0.37;
        return kepler
    }




}