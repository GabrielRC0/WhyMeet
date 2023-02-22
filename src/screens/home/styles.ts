import { StyleSheet } from "react-native-web"

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#131016",
      padding: 24,
    },
    eveName: {
      color: '#FDFCFE',
      fontSize: 24,
      fontWeight: "bold",
      marginTop: 47
    },
    eveDate: {
      color: '#6B6B6B', 
      fontSize: 16, 
      fontWeight: "bold",
    },
    input: {
    flex: 1,
    backgroundColor: "#1f1e25",
    height: 56,
    borderRadius: 5,
    color: '#FFF',
    padding: 16,
    marginRight: 12,
    },
    buttontext:{
      color: '#FFF',
      fontSize: 15
    },
    button:{
      width:56,
      height:56,
      borderRadius: 5,
      backgroundColor: "#31CF67",
      alignItems: "center",
      justifyContent: "center"
    },
    form:{
      width: '100%',
      flexDirection: 'row',
      marginTop: 36,
      marginBottom:43
    },
    listEmptyText:{
      color: '#FFF',
      fontSize: 14, 
      textAlign: 'center'
    }
  })