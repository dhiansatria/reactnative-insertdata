import React, { Component } from 'react' ;
import { StyleSheet, View, Alert, TextInput, Text, Platform, TouchableOpacity,} from 'react-native';

export default class MainActivity extends Component {
    static navigationOptions = {
        title: 'Data Pegawai'
    };

    constructor(props) {
        super(props);
        this.state = {
            TextInput_Nama: '',
            TextInput_Gaji: ''
        };
    }


//membuat function insert data
insertDataPegawai = () => {
    fetch('http://17.17.17.104/my-react-crud/InsertDataPegawai.php',
    {
        method: 'POST',
        headers: {
            Accept : 'application/json',
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            pegawai_nama: this.state.TextInput_Nama,
            pegawai_gaji: this.state.TextInput_Gaji,
        })
    })
    .then(response => response.json())
    .then(responseJson => {
        Alert.alert(responseJson);
    })
    .catch(error => {
        console.error(error);
    });
};

//function lihat data
lihatDataPegawai = () => {
    this.props.navigation.navigate('PegawaiRead');
}

render() {
    return( //selalu dimulai dengan view
        <View>              
            <Text style={{ fontSize: 20, textAlign: 'center', marginBottom: 8}}>
                {''}
                Mengisi Data Pegawai {''}
            </Text>

            <TextInput 
            placeholder='Isikan Nama Pegawai'
            onChangeText= {TextInputValue => this.setState({ TextInput_Nama: TextInputValue })}
            underlineColorAndroid='transparent'
            />

            <TextInput 
            placeholder='Isikan Nama Gaji'
            onChangeText= {TextInputValue => this.setState({ TextInput_Gaji: TextInputValue })}
            underlineColorAndroid='transparent'
            />

            <TouchableOpacity 
                activeOpacity={0.4} onPress={this.insertDataPegawai}
            >    
            <Text>
                {''}
                Simpan Data Pegawai {''}
            </Text>
            </TouchableOpacity>

            <TouchableOpacity 
                activeOpacity={0.4} onPress={this.lihatDataPegawai}
            >    
            <Text>
                {''} 
                Lihat Data Pegawai {''}
            </Text>
            </TouchableOpacity>            

        </View>
    );
}

}