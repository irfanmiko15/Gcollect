import { StatusBar } from 'expo-status-bar';
import React , { useState }from 'react';
import { SafeAreaView,StyleSheet, Text, View,TextInput ,Button,Image,
  TouchableOpacity,} from 'react-native';
import {SizedBox} from 'sizedbox';
import { Icon } from 'react-native-elements';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      <View >
        <Text style={styles.title}>Gringgo Collect</Text> 
        <SizedBox vertical={5} />
        <Text style={styles.desc}>0.0.13</Text> 
        <SizedBox vertical={20} />
        <Text style={styles.desc}>Aplikasi untuk mengumpulkan data sesuai kebutuhan</Text> 
        <SizedBox vertical={20} />
      </View>
      <View style={styles.inputView}>
        <Icon style={styles.InputIcon} name='email' size={20} color="#fff"/>
        <TextInput
          style={styles.TextInput}
          selectionColor={'white'}
          placeholder="Email"
          placeholderTextColor="#fff"
          focusable true
          onChangeText={(email) => setEmail(email)}
        />
      </View>
      <View style={styles.inputView}>
        <Icon style={styles.InputIcon} name='lock' size={20} color="#fff"/>
        <TextInput
          style={styles.TextInput}
          selectionColor={'white'}
          secureTextEntry={true}
          placeholder="Password"
          placeholderTextColor="#fff"
          focusable true
          onChangeText={(email) => setEmail(email)}
        />
      </View>
      
      <View>
        <TouchableOpacity style={styles.loginBtn} onPress="">
          <Text style={styles.loginText}>Masuk</Text>
        </TouchableOpacity>
      </View>
      <View>
      <Text style={styles.loginText}>Atau</Text>
      </View>
      <View>
        <TouchableOpacity style={styles.loginGoogle} onPress="">
          <Image source={require('./assets/google.png')}style = {{ width: 30, height: 30 }}/>
          <SizedBox horizontal={5} ></SizedBox>
          <Text style={styles.loginGoogleText}>Login dengan google</Text>
        </TouchableOpacity>
      </View>
      <SizedBox vertical={5}/>
      <View style={{flexDirection:"row",justifyContent:"space-between"}}>
        <TouchableOpacity>
          <Text style={styles.loginText}>Register</Text>
        </TouchableOpacity>
       
        <TouchableOpacity>
          <Text style={styles.loginText}>Forgot Password</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#31bfa7',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    textAlign:'center'
  },
  title:{
    color:'#fff',
    textAlign:'center',
    fontSize:25,
    fontFamily : 'Rubik',
    fontWeight:'bold'
    
  },
  InputIcon: {
    textAlignVertical:'center',
    paddingTop: 15,
    paddingLeft:15,
    paddingRight:0,
    paddingBottom:15,
},
  paragraph:{
    fontSize:18,
    fontFamily : 'Rubik',
    fontWeight:'bold'
  },
  desc:{
    color:'#fff',
    textAlign:'center',
    fontSize:14
  },
  inputView: {
    flexDirection: 'row',
    backgroundColor: "#31bfa7",
    borderRadius: 10,
    borderColor: "#fff",
    borderWidth:2,
    color: "#fff",
    height: 50,
    fontSize:16,
    marginBottom: 20, 
  },
  TextInput: {
    height: 50,
    flex: 1,
    marginLeft: 20,
    color:'#fff'
  },
 
 
  loginBtn: {
    elevation: 2,
    minWidth:"100%",
    
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginBottom:10,
    backgroundColor: "#f44336",
  },
  loginGoogle: {
    elevation: 2,
    flexDirection:"row",
    minWidth:"100%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop:10,
    backgroundColor: "#fff",
  },
  loginText:{
    color:"#fff",
    fontWeight:"bold",
    fontSize:15,
  },
  loginGoogleText:{
    color:"#000",
    fontWeight:"bold",
    fontSize:15,
  }
});

export default Login;

