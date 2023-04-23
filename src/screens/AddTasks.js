import React,{ Component} from "react"
import { 
    Modal, 
    View,
    Text,
    TouchableOpacity,
    TextInput, 
    StyleSheet,
    TouchableNativeFeedback,
    Platform
 } from "react-native"
import commonStyles from "../commonStyles"
import  DateTimePickerResult from "@react-native-community/datetimepicker"
import moment from "moment"

const initialState = { desc: '', date: new Date(), showDatePicker: false}

 export default class AddTasks extends Component{

    state = {
        ...initialState
    }

    getDateTimePicker = () => {
                //o _ para que função não reclame por não está sendo usada
                // como o segundo paramêtro da função é  date e nome do atributo no state é date, pode-se chamar o setState dessa forma
        let datePicker =  <DateTimePickerResult 
                value={this.state.date}
                onChange={(_,date) => this.setState({ date, showDatePicker: false })}
                mode='date' />
        
                const dateString = moment(this.state.date).format('dddd, D [de] MMMM [de] YYYY')

        if(Platform.OS ==='android'){
            datePicker = (
                <View>
                    <TouchableOpacity onPress={()=> this.setState({showDatePicker: true})}>
                        <Text style={styles.date}>
                            {dateString}
                        </Text>
                    </TouchableOpacity>
                    {this.state.showDatePicker && datePicker}
                </View>
            )
        }


        return datePicker
    }

    render(){
        return (
            <Modal transparent={true} visible={this.props.isVisible}
                onRequestClose={this.props.onCancel}
                animationType="slide">
                <TouchableNativeFeedback 
                    onPress={this.props.onCancel}>
                    <View style={styles.background}></View>
                </TouchableNativeFeedback>
                <View style={styles.container}>
                    <Text style={styles.header}>Nova Tarefa</Text>
                    <TextInput style={styles.input}
                        placeholder="Informe a Descrição..."
                        //não foi preciso colocar desc:desc, visto que o parametro é o mesmo nome da chave do estado 
                        onChangeText={desc => this.setState({desc})}
                        value={this.state.desc}/>
                        {this.getDateTimePicker()}
                    <View style={styles.buttons}>
                        <TouchableOpacity onPress={this.props.onCancel}>
                            <Text style={styles.button}>Cancelar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.button}>Salvar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableNativeFeedback 
                    onPress={this.props.onCancel}>
                    <View style={styles.background}></View>
                </TouchableNativeFeedback>
            </Modal>
        )
    }
 }

 const styles = StyleSheet.create({
    background:{
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.7)'
    },
    container:{
        // flex:1,
        backgroundColor: '#FFF'
    },
    header:{
        fontFamily: commonStyles.fontFamily,
        backgroundColor: commonStyles.colors.today,
        color: commonStyles.colors.secondary,
        textAlign: 'center',
        padding: 15,
        fontSize: 18,
    },
    input:{
        fontFamily: commonStyles.fontFamily,
        width: '90%',
        height: 40,
        marginTop: 10,
        marginLeft:10,
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#E3E3E3',
        borderRadius: 6
    }, 
    buttons:{
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    
    button:{
        margin: 20,
        marginRight: 30,
        color:commonStyles.colors.today
    },
    date: {
        fontFamily: commonStyles.fontFamily,
        fontSize: 20,
        marginLeft: 15
    }
 })