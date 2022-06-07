import {useFonts} from 'expo-font';

export const Fonts = ({children}) => {
  let [fontsLoaded] = useFonts({
    'JosefinSans-ExtraLight': require('../../../assets/fonts/static/JosefinSans-ExtraLight.ttf'),
    'JosefinSans-Regular': require('../../../assets/fonts/static/JosefinSans-Regular.ttf'),
    'JosefinSans-SemiBold': require('../../../assets/fonts/static/JosefinSans-SemiBold.ttf'),
    'JosefinSans-Bold': require('../../../assets/fonts/static/JosefinSans-Bold.ttf'),
  })

  if (!fontsLoaded) return null;

  return <>{children}</>
}
