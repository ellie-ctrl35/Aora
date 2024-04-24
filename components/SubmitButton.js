import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const SubmitButton = ({text,width,height,onPress}) => {
  return (
   <TouchableOpacity onPress={onPress} style={[styles.btn,{width:width,height:height}]}>
     <Text style={styles.txt}>
        {text}
     </Text>
   </TouchableOpacity> 
)
}

export default SubmitButton

const styles = StyleSheet.create({
    btn:{
        backgroundColor:"#FF8C00",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:7,
        alignSelf:"center",
        marginTop:"10%"
    },
    txt:{
        color:"#000",
        fontSize:17,
        fontWeight:700
    }
})