import React from 'react';
import { StyleSheet, Text, View , Button, Alert, TextInput} from 'react-native';

import FetchAge from './components/FetchAge';

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      firstAge: 0,
      secondAge: 0,
    };
  
  }

_getKepler() {
  var firstAgeParsed = parseInt(this.state.firstAge);
  var secondAgeParsed = parseInt(this.state.secondAge);
  var final = (secondAgeParsed - firstAgeParsed) * 0.37;
  var kepler = firstAgeParsed + final;
  Alert.alert(kepler);
}

  render() {
    return (
    <View style={styles.mainContainer}>
      <View style={styles.toolbarContainer}>
        <Text style={styles.toolbarTitle}>Kepler Dating</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.messageBox}>
          <View>
            <Text style={styles.messageBoxBodyText}>
              Enter the age you started dating:
            </Text>
          </View>
        </View>
        <View style={styles.messageBox}>
          <View>
            <TextInput 
              style={styles.inputBoxText} 
              placeholder="Age" 
              onChangeText={(firstAgeInput) => this.setState({firstAge : firstAgeInput})}
            />
          </View>
        </View>
        <View style={styles.messageBox}>
          <View>
            <Text style={styles.messageBoxBodyText}>
              Enter the age you would like to be married:
            </Text>
          </View>
        </View>
        <View style={styles.messageBox}>
        <View>
            <TextInput 
              style={styles.inputBoxText} 
              placeholder="Married By Age"

              onChangeText={(secondAgeInput) => this.setState({secondAge : secondAgeInput})}
            />
          </View>
        </View>
        <View style ={styles.buttonBox}>
          <Button 
                style={styles.buttonBoxText}
                title="Submit"
                onPress={this._getKepler.bind(this)}
          />
        </View>
      </View>
    </View>
/** 
      <View style={styles.topContainer}>
      <FetchAge onFetchAge={this.getUserAgeHandler}/>
      </View>
      **/
    );
  }
}

const styles = StyleSheet.create({

  toolbarContainer: {
    backgroundColor:'blue',
    paddingTop:50,
    paddingBottom:10,
    flexDirection:'row'  
  },

  toolbarTitle:{
    color:'#fff',
    fontSize: 40,
    textAlign:'center',
    fontWeight:'bold',
    flex:1              
  },

  mainContainer: {
    flex:1,
  },

  content:{
    backgroundColor:'red',
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  messageBox:{
    backgroundColor:'white',
    width:300,
    paddingTop:10,
    paddingBottom:20,
    paddingLeft:20,
    paddingRight:20, 
    borderRadius:10,
    marginTop: 20
},

messageBoxBodyText:{
  color:'black',
  fontSize:16,
  textAlign: 'center'
},

buttonBox:{
  backgroundColor:'white',
  width:300,
  paddingTop:10,
  paddingBottom:20,
  paddingLeft:20,
  paddingRight:20, 
  borderRadius:10,
  marginTop: 20
},

buttonBoxText:{
  fontSize: 20,
  textAlign: 'center'
},

inputBoxText: {
    textAlign:'center',
},

});


  /**<View style={styles.middleContainer}>
      <FetchAge onFetchAge={this.getUserAgeHandler}/>
    </View>
    **/


  /**container:
  {
    alignItems: 'center'
  marginTop: 100,
  alignItems: 'center',
  fontSize: 150,
  fontWeight: '500'
},
**/



