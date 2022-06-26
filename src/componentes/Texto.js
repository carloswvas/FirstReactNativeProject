import { Text, StyleSheet } from "react-native";

/**
 * 
 * @param {children} Todo conteúdo que vem no componente
 * @param {style} Estilos existentes nesse elemento 
 * @returns [style, estilos.texto]
 */
export default function Texto({children, style}){
  let estilo = estilos.texto;

  if(style?.fontWeight === 'bold'){
    estilo = estilos.textoNegrito;
  }

  return <Text style={[style, estilo]}>{children}</Text>
}

const estilos = StyleSheet.create({
  texto:{
    fontFamily: "MontserratRegular",
    fontWeight:"normal",
  },
  textoNegrito:{
    fontFamily: "MontserratBold",
    fontWeight:"normal",
  }
})