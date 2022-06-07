import * as React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, TextInput, Image, FlatList} from 'react-native';
import {colors} from '../../utils';
import homeStyles from './styles';

const Home = () => {

	const [matriz, setMatriz] = React.useState([]);
	const [campo, setCampo] = React.useState({
		produccion: '',
		sucursal: '',
		costo_uni: '',
	});

	const [demanda, setDemanda] = React.useState('');
	const [oferta, setOferta] = React.useState('');

	const sucursalExits = () => {
		if (matriz.length > 0) {
			let incluso = matriz[0].sucursales.some(suc => suc.sucursal === campo.sucursal);
			console.log("  >>: Sucursal: ", incluso);
			return incluso ? false : true;
		} else {
			return true;
		}
	};

	const productionExits = () => {
		let index = matriz.findIndex(mat => mat.produccion === campo.produccion);
		if (index >= 0) return false
		else return true
	};

	const handlerMatriz = () => {
		if (matriz.length > 0) {
			console.log("  >>: Matriz no vacia");
			console.log(`  >>: Verificando si existe ${campo.produccion} en mi matriz`);
			console.log("Matriz: ", matriz);
			let incluso = matriz.some(mat => mat.produccion === campo.produccion);
			console.log("  >>: Incluso: ", incluso);
			if (incluso) {
				console.log("  >>: Ya existe este elemento.produccion");
				console.log(`  >>: Verificando si exite ${campo.sucursal} en las sucursales`);
				for (let i = 0; i < matriz.length; i++) {
					console.log("  >>: Produccion: ", matriz[i].produccion);
					let incluso = matriz[i].sucursales.some(suc => suc.sucursal === campo.sucursal);
					console.log("  >>: Incluso: ", incluso);
					if (incluso) {
						console.log("Ya existe");

					} else {
						console.log("  >>: Aun hay campo para un nuevo elemento.sucursales.sucursal");
						let obj = {id: Math.floor(Math.random() * (1000000 - 1)), sucursal: campo.sucursal, costo_uni: campo.costo_uni, oferta: oferta}
						console.log("  >>: Nuevo elemento: ", obj);
						matriz[i].sucursales.push(obj);
					}
				}
			} else {
				console.log("  >>: Aun hay campo para un nuevo elemento.produccion");
				let obj = {produccion: campo.produccion, id: Math.floor(Math.random() * (1000000 - 1)), demanda: demanda, sucursales: [{sucursal: campo.sucursal, costo_uni: campo.costo_uni, id: Math.floor(Math.random() * (1000000 - 1))}]}
				setMatriz([...matriz, obj]);
				console.log('  >>: Nuevo elemento: ', obj);
			}
		} else {
			console.log("  >>: Matriz virgen")
			console.log("  >>: Insertando elemento");

			let obj = {produccion: campo.produccion, id: Math.floor(Math.random() * (1000000 - 1)), demanda: demanda, sucursales: [{oferta: oferta, sucursal: campo.sucursal, costo_uni: campo.costo_uni, id: Math.floor(Math.random() * (1000000 - 1))}]};
			setMatriz([...matriz, obj]);
			console.log("  >>: Nuevo elemento: ", obj);
		}

		setCampo({
			produccion: '',
			sucursal: '',
			costo_uni: '',
		})

		setDemanda('');
		setOferta('');
	};

	return (
		<View style={styles.root_container}>
			<View style={styles.top_container}>
				<View style={{width: '100%', flexDirection: 'row', alignItems: 'center', paddingBottom: 10}}>
					<TouchableOpacity
						style={styles.btn_add}
						onPress={() => handlerMatriz()}
					>
						<Text style={{fontFamily: 'JosefinSans-SemiBold', color: colors.primary_text}}>{'+'}</Text>
					</TouchableOpacity>
					<Image
						source={require('../../../assets/icons/transporte.png')}
						style={{marginLeft: 10}}
					/>
				</View>
				<View style={{flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', marginBottom: 10, paddingVertical: 5}}>
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
				<View style={{flexDirection: 'row', justifyContent: 'flex-end', width: '100%', alignItems: 'center'}}>
					{productionExits() === true && (
						<TextInput
							style={[styles.input, {width: 90}]}
							placeholder={'Demanda'}
							value={demanda}
							onChangeText={(value) => setDemanda(value)}
						/>
					)}
					{sucursalExits() === true && (
						<TextInput
							style={[styles.input, {width: 90}]}
							placeholder={`Oferta`}
							value={oferta}
							onChangeText={(value) => setOferta(value)}
						/>
					)}
				</View>
				<View style={{height: '50%', width: '100%', flexDirection: 'row'}}>
					<View style={{width: '80%'}}>
						<Text style={styles.txt_title}>{'Logistica'}</Text>
						<View style={{justifyContent: 'flex-start', height: '100%'}}>
							<View style={{flexDirection: 'row', width: '100%', paddingHorizontal: '20%', paddingVertical: 10, justifyContent: 'space-between'}}>
								{matriz[0]?.sucursales.map(suc => {
									return <Text key={String(suc.id)} style={{fontFamily: 'JosefinSans-SemiBold', fontSize: 12}}>{suc.sucursal}</Text>
								})}
							</View>
							<View style={{flexDirection: 'column', width: '15%', alignItems: 'center', paddingVertical: 10}}>
								{matriz.map(mat => {
									return <Text key={String(mat.id)} style={{fontFamily: 'JosefinSans-SemiBold', fontSize: 12, paddingVertical: 10}}>{mat.produccion}</Text>
								})}
							</View>
							<View style={{width: '85%', position: 'absolute', top: '22%', left: '15%'}}>
								{matriz.map(column => {
									return (
										<View key={String(column.id)} style={{flexDirection: 'row', justifyContent: 'space-between'}}>
											{column.sucursales.map(fila => {
												return (
													<View key={String(fila.id)} style={{flexDirection: 'row', width: '30%', alignItems: 'flex-end', justifyContent: 'flex-end', height: 45}}>
														{/*}<Text style={{fontFamily: 'JosefinSans-Regular', fontSize: 24, marginRight: 5}}>12</Text>*/}
														<View style={{borderWidth: 1, paddingVertical: 2, paddingHorizontal: 5}}>
															<Text style={{fontFamily: 'JosefinSans-SemiBold', fontSize: 8}}>{fila.costo_uni}</Text>
														</View>
													</View>
												)
											})}
										</View>
									)
								})}
							</View>
						</View>
					</View>
					<View style={{paddingVertical: '20%', marginLeft: 10}}>
						{matriz.map(mat => {
							return (
								<Text key={String(mat.id)} style={{fontFamily: 'JosefinSans-SemiBold', fontSize: 12, padding: 10, color: colors.primary_text}}>{`${mat.demanda}`}</Text>
							);
						})}
					</View>
				</View>
				{matriz.length > 0 && (
					<View style={{width: '73%', paddingVertical: 20, marginLeft: '11%', justifyContent: 'space-around', flexDirection: 'row'}}>
						{matriz[0].sucursales.map(suc => {
							console.log("Suc: ", suc.oferta)
							return (
								<Text key={String(suc.id)} style={{fontFamily: 'JosefinSans-SemiBold', fontSize: 12, color: colors.primary_text}}>{suc.oferta}</Text>
							);
						})}
					</View>
				)}
			</View>
		</View >
	);

};

export default Home;

const styles = StyleSheet.create(homeStyles)
