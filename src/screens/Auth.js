import React, { Component } from 'react'
import { 
    ImageBackground, 
    Text, 
    StyleSheet, 
    View, 
    TextInput, 
    TouchableOpacity
} from 'react-native'


import backgroundImage from '../../assets/imgs/login.jpg'
import commonStyles from '../commonStyles'

export default class Auth extends Component{

    state = {
        email: '',
        password: ''
    }

    render(){
        return(
            <ImageBackground source={backgroundImage}
                    style={styles.background}>
                <Text style={styles.title}>Tasks</Text>
                <View style={styles.formContainer}>
                    <TextInput placeholder='E-mail' value={this.state.email} styles={styles.input} 
                    onChangeText={email => this.setState({ email})}/>
                    <TextInput placeholder='Senha' value={this.state.password} styles={styles.input} 
                    onChangeText={password => this.setState({ password})}/>

                </View>
            </ImageBackground>
        )
            
        
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.secondary,
        fontSize: 70,
        marginBottom: 10

    },
    formContainer:{
        backgroundColor: 'rgba(0,0,0, 0.8)',
        background: '#FFF',
        padding: 20,
        width: '90%'
    },
    input:{
        marginTop: 10,
        backgroundColor: '#FFF',
    },

})