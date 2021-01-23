import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import TextInput from '../../Components/TextInput/textinput'
import PrimaryButton from '../../Components/Button/PrimaryButton/primaryButton'
import { useState } from 'react'
import {VerifyCodee} from './../../../Service/VerifyCodeApi'
import {useNavigation} from '@react-navigation/native'
const VerifyCode= (props) => {
    const [verifyCode,setVerifyCode]=useState('')
    const [error,setError]=useState('')
    const onChangeVerifyCode=(e)=>{
        setError('')
        setVerifyCode(e)
    }
const navigation=useNavigation()
    const verify=()=>{
        if(verifyCode)
        VerifyCodee(verifyCode).then((result)=>{
            if(result.success){
        navigation.navigate('setPassword',{token:result.token})
            }
        }).catch((err)=>{
        });

        else
        setError('Please enter Verify Code')
    }
    return (
        <View style={styles.main}>
        <View style={styles.container}>
        <Text style={styles.text}>Please enter the verification code sent to your email id</Text>
            <TextInput
        placeholder="********"
        onChangeText={onChangeVerifyCode}
        // error={verifyCode}
        title='Verification code'
        container={{width:"90%",alignSelf:"center"}}
      />
      {error ? <Text style={styles.error}>{error}</Text>:null}
       </View>
      <View style={styles.button}>
      <PrimaryButton text='Verify' onPress={verify}></PrimaryButton>
      </View>
      </View>

       
    )
}

export default VerifyCode

const styles = StyleSheet.create({
    main:{
        flex:1,
        backgroundColor:"white"
    },
    container:{
            flex:1,
            justifyContent: "center",

        },
        button:{
            marginBottom:"10%"
        },
        text:{
            fontSize:10,
            marginLeft:20
            },
            error:{
                color:"red",
                margin:20
            }
})