import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  button: {
    marginTop: 10,
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
    paddingVertical: 12,
    backgroundColor: 'black',
    paddingHorizontal: 32,
    borderRadius: 3,
    elevation: 3 // para adicionar um efeito de elevação em relação a tela, um efeito "botão" mesmo
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#e5bf3c'
  }
});