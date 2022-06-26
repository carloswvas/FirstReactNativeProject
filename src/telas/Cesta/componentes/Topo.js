import {Image, StyleSheet, Dimensions} from 'react-native'

// Importando Font
import Texto from '../../../componentes/Texto'

//Importando a imagem do topo
import topo from '../../../../assets/topo.png'
const width = Dimensions.get('screen').width;

export default function Topo({titulo}){
  return<>
    <Image source={topo} style={estilos.topo}/>
    <Texto style={estilos.titulo}> {titulo} </Texto>
  </>
}

const estilos = StyleSheet.create({
  topo: {
    width: "100%",
    height: 578 / 768 * width,
  },
  titulo:{
    width: "100%",
    position: "absolute",
    textAlign: "center",
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 16,
    lineHeight: 26,
    padding: 16
  },
});

/* Dimensionar uma imagem automaticamente para a tela
*  Importar o Dimensions em React - native e pegar propriedade da Imagem H/W
*  const width = Dimensions.get('screen').width;
*  Dentro da constante estilo na propriedade height
*  height: 578 / 768 * width (A constante)
*/