import * as React from 'react';
import {StyleSheet, View, Text, Image, Modal, Pressable, TouchableOpacity, ActivityIndicator} from 'react-native';
import {StatusBar} from 'expo-status-bar';
import {colors} from '../../utils';
import verifyStyles from './styles';


const Verify = ({navigation}) => {

  const [isLoading, setIsLoading] = React.useState(true);
  const [auxText, setAuxText] = React.useState('Cargando...');

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
      setAuxText('Iniciar');
    }, 3000);
  }, [])

  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.txt_container}>
        <Image
          source={require('../../../assets/videos/Building-a-Logistics-App.gif')}
          style={{width: 200, height: 200, borderRadius: 100, resizeMode: 'contain'}}
        />

      </View>
      <View style={styles.img_container}>
        <View style={{alignItems: 'center'}}>
          <Text style={{fontSize: 32, color: colors.primary, fontFamily: 'JosefinSans-Bold'}}>{`¡Bienvenido 👋!`}</Text>
          <Text style={styles.txt}>{`Logistica de transporte, aplicando el metodo de la esquina noroeste.`}</Text>
          <TouchableOpacity
            style={styles.btn_iniciar}
            onPress={() => navigation.navigate({name: 'Home'})}
          >
            {isLoading && (<ActivityIndicator size="small" color={colors.primary} />)}
            <Text style={{fontFamily: 'JosefinSans-Bold', color: colors.primary}}>{auxText}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.social_container}>
          <View style={{flexDirection: 'row'}}>
            <Pressable>
              <Text style={{fontFamily: 'JosefinSans-Regular', color: colors.secondary}}>YOUTUBE</Text>
            </Pressable>
            <Pressable>
              <Text style={{fontFamily: 'JosefinSans-Regular', color: colors.secondary}}>- INSTAGRAM </Text>
            </Pressable>
            <Pressable>
              <Text style={{fontFamily: 'JosefinSans-Regular', color: colors.secondary}}>- FB</Text>
            </Pressable>
          </View>
          <Text style={{fontFamily: 'JosefinSans-ExtraLight', color: colors.primary}}>Created with ❤️ by Sn0wb1rd-teams</Text>
        </View>
      </View>
    </>
  );
};

export default Verify;

const styles = StyleSheet.create(verifyStyles);
