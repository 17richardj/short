/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
  import React, { Component } from 'react';
 import { StyleSheet, ActivityIndicator, ListView, Text, View, Alert } from 'react-native';

 export default class Project extends Component {

   constructor(props) {

     super(props);

     this.state = {

       isLoading: true,

     }

   }

 GetItem (username) {

   Alert.alert(username);

 }

 componentDidMount(){

   return fetch('http://ipaddress/shortApp/FlowersList.php')
   .then((response) => response.json())
   .then((responseJson) => {
     let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
     this.setState({
       isLoading: false,
       dataSource: ds.cloneWithRows(responseJson),
     }, function() {
       // In this block you can do something with new state.
     });
   })
   .catch((error) => {
     console.error(error);
   });

 }

   ListViewItemSeparator = () => {
     return (
       <View
         style={{
           height: 2,
           width: "100%",
           backgroundColor: "#000",
         }}
       />
     );
   }

   render() {
     if (this.state.isLoading) {
       return (
         <View style={{flex: 1, paddingTop: 20}}>
           <ActivityIndicator />
         </View>
       );
     }

     return (

       <View style={styles.MainContainer}>

         <ListView

           dataSource={this.state.dataSource}

           renderSeparator= {this.ListViewItemSeparator}

           enableEmptySections = {true}

           renderRow={(rowData) => <Text style={styles.rowViewContainer}
           onPress={this.GetItem.bind(this, rowData.username)} >{rowData.username}</Text>}

         />

       </View>
     );
   }
 }

 const styles = StyleSheet.create({

 MainContainer :{
 justifyContent: 'center',
 flex:1,
 margin: 10

 },

 rowViewContainer: {
   fontSize: 20,
   paddingRight: 10,
   paddingTop: 10,
   paddingBottom: 10,
 }

 });

/*
 import React, { Component } from 'react';

 import { StyleSheet, ActivityIndicator, ListView, Text, View, Platform, Alert } from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
*/
