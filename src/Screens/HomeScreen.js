import { Button, Content, List, ListItem, Spinner, Text, Toast, View } from 'native-base'
import React, { useEffect, useState, version } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { FlatList, StyleSheet } from 'react-native'
import { Colors } from '../Styles/AppStyles';
import { Card } from 'react-native-paper';
import { MaterialCommunityIcons,AntDesign,Foundation,Feather } from '@expo/vector-icons';
import { useSelector } from 'react-redux';
import { UserDataSelector } from '../Redux/Selector';

const Data =[
    {
      "id":1,
      "name":"test1",
      "age" : "11",
      "gender":"male",
      "email" : "test1@gmail.com",
      "phoneNo" : "9415346313"
      },
      {
      "id" : 2,
      "name":"test2",
      "age" : "12",
      "gender":"male",
      "email" : "test2@gmail.com",
      "phoneNo" : "9415346314"
      },
      {
      "id":3,
      "name":"test3",
      "age" : "13",
      "gender":"male",
      "email" : "test3@gmail.com",
      "phoneNo" : "9415346315"
      },
      {
      "id":4,
      "name":"test4",
      "age" : "14",
      "gender":"male",
      "email" : "test4@gmail.com",
      "phoneNo" : "9415346316"
      },
      {
      "id":5,
      "name":"test5",
      "age" : "15",
      "gender":"male",
      "email" : "test5@gmail.com",
      "phoneNo" : "9415346317"
      },
      {
      "id":6,
      "name":"test6",
      "age" : "16",
      "gender":"male",
      "email" : "test6@gmail.com",
      "phoneNo" : "9415346318"
      }
  ]
  

function Item({item}){

    return(
        <>
        <Card style={styles.container4} >
        <Content>  
        <Text style={styles.textStyle2} >Info</Text>
        <View style={styles.container5} >
            <View style={styles.container4} >
            <AntDesign name="user" size={20} color="black" />
            <Text style={styles.textStyle5} >Name</Text>
            <Text style={styles.textStyle6}>{item.name}</Text>
            </View>
            <View style={styles.container4} >
            <MaterialCommunityIcons name="human" size={20} color="black" />
            <Text style={styles.textStyle5} >Age</Text>
            <Text style={styles.textStyle6}>{item.age}</Text>
            </View>
            <View style={styles.container4} >
            <Foundation name="male-symbol" size={20} color="black" />
            <Text style={styles.textStyle5} >Gender</Text>
            <Text style={styles.textStyle6}>{item.gender}</Text>
            </View>
            <View style={styles.container4} >
            <Feather name="mail" size={20} color="black" />
            <Text style={styles.textStyle5} >Email</Text>
            <Text style={styles.textStyle6}>{item.email}</Text>
            </View>
            <View style={styles.container4} >
            <Feather name="phone" size={20} color="black" />
            <Text style={styles.textStyle5} >Phone Number</Text>
            <Text style={styles.textStyle6}>{item.phoneNo}</Text>
            </View>
        </View>
        </Content>
        </Card>
        </>
    )
}

export default function HomeScreen({navigation}){
    const [loading,setLoading] = useState(false);
    const {userDetails} = useSelector(UserDataSelector);
    console.log(userDetails);
  const renderItem = ({item}) =>{
    return(
      <Item
      item={item} />
    )
  }

  useEffect(()=>{
    
  },[setLoading])

  const handelLogout = () =>{
    Toast.show({
      text: "Successfully logged out...",
      position: "bottom",
      type: "success",
    });
    navigation.navigate('LoginScreen')
  }
  if(loading)return<Spinner />
  return(
    <>
  <View style={styles.container3} >
  <MaterialCommunityIcons name="logout" size={30} color="black" onPress={handelLogout} />
          </View>
    <FlatList
    data={userDetails}
    renderItem={renderItem}
    keyExtractor={(item)=>item.id.toString()}
     />
     </>
  )
}


const styles = StyleSheet.create({
    container1:{
        flexDirection:"row",
        alignItems:"center",
        marginTop:"20%",
    },
    container2:{
        flexDirection:"column",
        padding:20
    },
    container4:{
        flexDirection:"row",
        margin:"3%" 
    },
    container3:{
        justifyContent:"flex-end",
        flexDirection:"row",
        marginTop:"10%",
        marginRight:"3%"
    },
    container5:{
        height:"20%",
        flexDirection:"column"
    },
    container6:{
        padding:20
    },
    backButtonContainer:{
        width:"15%",
        marginLeft:"10%"
    },
    textStyle1:{
        marginLeft:"20%",
        fontSize:20,
        fontWeight:"bold"
    },
    textStyle2:{
        color: Colors.activeStudiesBlueText.blue,
        fontWeight: "bold",
        // marginLeft:"5%",
        // width:"40%",
        textAlign:"center"
    },
    textStyle3:{
        width:"40%",
        color:Colors.infoScreenColors.headerColor,
        fontWeight:"bold"
    },
    textStyle4:{
        width:"60%",
        color:Colors.infoScreenColors.discription,
       fontFamily:"Avenir-Heavy",
       marginTop:"2%"
    },
    textStyle5:{
        width:"50%",
        color:Colors.primaryColor.black,
        fontWeight:"bold"
    },
    textStyle7:{
        width:"50%",
        color:Colors.infoScreenColors.discription,
       fontFamily:"Avenir-Heavy"
    },
    textStyle6:{
        width:"50%",
        color:Colors.infoScreenColors.headerColor,
        fontWeight:"bold"
    },
    textStyle8:{
        color:Colors.infoScreenColors.headerColor,
        fontWeight:"bold"
    },
    textStyle9:{
        marginTop:"5%",
        color:Colors.infoScreenColors.discription,
       fontFamily:"Avenir-Heavy"
    },
    buttonContainer:{
        marginTop:"5%",
        backgroundColor:"red",
    }
})
