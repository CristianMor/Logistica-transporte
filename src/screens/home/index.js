import * as React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, TextInput, Image, FlatList} from 'react-native';
import {colors} from '../../utils';
import homeStyles from './styles';

const Home = () => {

	const [matriz, setMatriz] = React.useState([]);
	const [campo, setCampo] = React.useState({
		produccion: 'X',
		sucursal: 'X',
		costo_uni: '4',
	})

	const handlerMatriz = () => {

		if (matriz.length > 0) {
			matriz.forEach((item, index) => {
				if (item.produccion === campo.produccion) {
					console.log('Esta produccion ya existe');
					let i = item.sucursales.findIndex(sucursal => String(sucursal.sucursal) === String(campo.sucursal))
					console.log("Existe: ", i);
					if (i < 0) {
						console.log('Meter a sucursales un push');
						item.sucursales.push({id: Math.floor(Math.random() * (10000000 - 1)), costo_uni: campo.costo_uni, sucursal: campo.sucursal})
						console.log('itemSuc: ', item.sucursales)
					} else {

					}
					console.log('Sucursales: ', item.sucursales);
				} else {
					setMatriz([...matriz, {produccion: campo.produccion, id: Math.floor(Math.random() * (1000000 - 1)), sucursales: [{sucursal: campo.sucursal, costo_uni: campo.costo_uni, id: Math.floor(Math.random() * (1000000 - 1))}]}]);
				}
			})
		} else {
			console.log('Esta produccion no existe');
			setMatriz([...matriz, {produccion: campo.produccion, id: Math.floor(Math.random() * (1000000 - 1)), sucursales: [{sucursal: campo.sucursal, costo_uni: campo.costo_uni, id: Math.floor(Math.random() * (1000000 - 1))}]}]);
		}

		setCampo({
			produccion: '',
			sucursal: '',
			costo_uni: ''
		})
	};

	return (
		<View style={styles.root_container}>
			<View style={styles.top_container}>
				<View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
					<TouchableOpacity
						style={styles.btn_add}
						onPress={() => handlerMatriz()}
					>
						<Text style={{fontFamily: 'JosefinSans-Regular', color: colors.primary_text}}>+</Text>
					</TouchableOpacity>
					<View style={{flexDirection: 'row', alignItems: 'center'}}>
						<Image
							source={require('../../../assets/icons/transporte.png')}
							style={{tintColor: colors.primary_text, marginRight: 5}}
						/>
						<TextInput
							style={styles.input}
							value={campo.produccion}
							placeholder={'Produccion'}
							onChangeText={(value) => setCampo({...campo, produccion: value})}
						/>
						<TextInput
							style={styles.input}
							value={campo.sucursal}
							placeholder={'Sucursal'}
							onChangeText={(value) => setCampo({...campo, sucursal: value})}
						/>
						<TextInput
							style={styles.input}
							value={campo.costo_uni}
							placeholder={'$ uni'}
							onChangeText={(value) => setCampo({...campo, costo_uni: value})}
						/>
					</View>
				</View>
				<View style={{height: '100%'}}>
					<Text style={styles.txt_title}>{'Nombre empresa'}</Text>
					<View style={{justifyContent: 'flex-start', backgroundColor: colors.primary, height: '100%'}}>
						<View style={{flexDirection: 'row', backgroundColor: colors.terteary, width: '100%', paddingHorizontal: '20%', paddingVertical: 10, justifyContent: 'space-between'}}>
							{matriz[0]?.sucursales.map(suc => {
								return <Text key={String(suc.id)} style={{}}>{suc.sucursal}</Text>
							})}
						</View>
						<View style={{flexDirection: 'column', backgroundColor: colors.cuartery, width: '15%', alignItems: 'center', paddingVertical: 5}}>
							{matriz.map(mat => {
								return <Text key={String(mat.id)} style={{paddingVertical: 10}}>{mat.produccion}</Text>
							})}
						</View>
						<View style={{backgroundColor: colors.white, width: '85%', position: 'absolute', top: '11%', left: '15%'}}>
							{matriz.map(column => {
								return (
									<View key={String(column.id)} style={{backgroundColor: colors.background_primary, flexDirection: 'row', justifyContent: 'space-between'}}>
										{column.sucursales.map(fila => {
											return (
												<View key={String(fila.id)} style={{borderWidth: 2, width: '20%', alignItems: 'center', paddingVertical: 10}}>
													<Text >{fila.costo_uni}</Text>
												</View>
											)
											//console.log('Fila: ', fila.costo_uni)
										})}
									</View>
								)
							})}
						</View>
						<View style={{flexDirection: 'row'}}>
						</View>
					</View>
				</View>
			</View>
			<View>
			</View>
		</View >
	);

};

export default Home;

const styles = StyleSheet.create(homeStyles)
