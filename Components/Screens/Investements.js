import { View, Text, StyleSheet, TextInput, Image, ScrollView,TouchableOpacity } from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Investements = () => {
  return (
    <View>
      <View style={styles.appBar}>
        <FontAwesome name="arrow-left" size={10} color="white" style={{ margin:5}}/>
          <Text style={styles.barText}>Investements</Text>
      </View>
      <View style={{marginTop:10, marginLeft:20}}>
          <Text style={{color:'green'}}> Check out our fixed return projects</Text>
      </View>
      <TextInput
      placeholder='Search Service providers'
      style={{borderWidth:1, padding:10, width:'90%', alignSelf:'center', borderRadius:5,marginTop:10}}
      />
      <ScrollView style={{margin:10}}
      horizontal={true}
      >
          <TouchableOpacity>
          <Image source={require('../assets/0_Mason-Greenwood.jpg')} style={{height:80, width:150, borderRadius:7, margin:10}}/>
          </TouchableOpacity>
          <TouchableOpacity>
          <Image source={require('../assets/0_Mason-Greenwood.jpg')} style={{height:80, width:150, borderRadius:7, margin:10}}/>
          </TouchableOpacity>
          <Image source={require('../assets/0_Mason-Greenwood.jpg')} style={{height:80, width:150, borderRadius:7, margin:10}}/>
          <Image source={require('../assets/0_Mason-Greenwood.jpg')} style={{height:80, width:150, borderRadius:7, margin:10}}/>
          <Image source={require('../assets/0_Mason-Greenwood.jpg')} style={{height:80, width:150, borderRadius:7, margin:10}}/>
      </ScrollView>
      <View>
          <Text style={{color:'green', marginLeft:20}}>
              Investement options
          </Text>
      </View>
      <View style={{flexDirection:'row', justifyContent:'center'}}>
          <Text style={{marginRight:30,color:'green'}}>
              High returns
          </Text>
          <Text style={{ marginRight:30,color:'green'}}>
              Best Trial
          </Text>
          <Text style={{ marginRight:30,color:'green'}}>Long run</Text>
          <Text style={{ marginRight:30,color:'green'}}>
              Short run
          </Text>
      </View>
      <View style={{borderTopColor:'green', borderTopWidth:2, width:'80%', alignItems:'center'}}></View>
    <ScrollView 
    horizontal={true}
    >

        <View style={{height:150, width:90,backgroundColor:'orange', borderRadius:5, margin:20, padding:5, justifyContent:'flex-end'}}>
            <Text style={{color:'white'}}>
            Lorem Ipsum is simply dummy text of 
            </Text>
        </View>
        <View style={{height:150, width:90,backgroundColor:'orange', borderRadius:5, margin:20, padding:5, justifyContent:'flex-end'}}>
            <Text style={{color:'white'}}>
            Lorem Ipsum is simply dummy text of 
            </Text>
        </View>
        <View style={{height:150, width:90,backgroundColor:'orange', borderRadius:5, margin:20, padding:5, justifyContent:'flex-end'}}>
            <Text style={{color:'white'}}>
            Lorem Ipsum is simply dummy text of 
            </Text>
        </View>
        <View style={{height:150, width:90,backgroundColor:'orange', borderRadius:5, margin:20, padding:5, justifyContent:'flex-end'}}>
            <Text style={{color:'white'}}>
            Lorem Ipsum is simply dummy text of 
            </Text>
        </View>
        <View style={{height:150, width:90,backgroundColor:'orange', borderRadius:5, margin:20, padding:5, justifyContent:'flex-end'}}>
            <Text style={{color:'white'}}>
            Lorem Ipsum is simply dummy text of 
            </Text>
        </View>
        <View style={{height:150, width:90,backgroundColor:'orange', borderRadius:5, margin:20, padding:5, justifyContent:'flex-end'}}>
            <Text style={{color:'white'}}>
            Lorem Ipsum is simply dummy text of 
            </Text>
        </View>
    </ScrollView>
    <View>
        <Text style={{color:'green', marginLeft:20}}>
            Investement history
        </Text>
    </View>
    <TouchableOpacity>
    <View style={styles.boxCard}>
        <Text style={{color:'green', fontSize:10}}>Mweya Rice Investement Plan</Text>
        <Text style={{color:'green', fontSize:12}}>ROI: USD 890</Text>
    </View>
    </TouchableOpacity>
    <View>
        <Text style={{color:'green', marginLeft:20}}>
            Current Investement Plans
        </Text>
        <Text style={{color:'green', fontSize:10}}>
            Mweya Rice Scheme
        </Text>
    </View>

    </View>
  )
}

export default Investements;

const styles = StyleSheet.create({
    appBar: {
        height:60,
        width: '100%',
        backgroundColor: 'green',
        alignItems: 'center',
        flexDirection:'row',
        
    },
    barText:{
        color: 'white',
        fontWeight:'bold',
        marginTop:10,
        marginLeft:50
    },
    boxCard:{
        elevation: 5,
        width:"80%",
        height:100,
        borderWidth:0.01,
        marginLeft:20

    }

});