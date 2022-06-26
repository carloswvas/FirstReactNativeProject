import { StatusBar, SafeAreaView } from 'react-native';

import { 
  useFonts, 
  Montserrat_400Regular, 
  Montserrat_700Bold 
} from '@expo-google-fonts/montserrat';

// Importação de componente
import Cesta from './src/telas/Cesta';

//Tudo que tem dentro do Mock vai para o componente cesta
// Com isso eu posso utilizar todos os dados nos componentes cesta
import mock from './src/mocks/cesta'

/**Colocando splashScreen em quando tiver carregando - Para aplicação
 * 1º Terminal: expo install expo-app-loading
 * 2º Importar o apploading: import AppLoading from 'expo-app-loading';
 * 3º Retornar no lugar da view <AppLoading />
 */

 import AppLoading from 'expo-app-loading';

export default function App() {

  const [fontCarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold 
  })

  if(!fontCarregada){
    return <AppLoading />
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar />
      <Cesta {...mock}/>
    </SafeAreaView>
  );
}

/**
 * Para importar uma font
 * 1º instalar a font via terminal no meu projeto
 * expo install expo-font @expo-google-fonts/montserrat
 * 2º Importar a font e os tipos de fonts que vão ser usadas
 * import { useFonts, fontes1, font2 } from '@expo-google-fonts/montserrat';
 * Dentro do component APP() passar as seguintes instruções em uma constante
 * const [fontCarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratRBold": Montserrat_700Bold 
  })
 * 3º Validar se a font foi carregada - Dentro do APP()
  if(!fontCarregada){
    return <View /> 
  }
 */