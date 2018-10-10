import React from 'react';
import {Text, View, Image} from 'react-native';

export default class Judul extends React.Component{
	render(){
		return(
			<View>
		<Text>Telkom Student</Text>
		<Image source={require('./tatandut.png')} style={{width:200, height:200}} />
		 <Text>Nama : Intan Alrisa</Text>
		    <Text>No : 17</Text>
		    <Text>Kelas : XI RPL 4</Text>
		    
		    	</View>
		);
	}
}

const liat= {
	judul: {
		color: '#f00',
		fontSize: 36,
	}
}