import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        width:'100%',
        backgroundColor: '#1f1E25',
        flexDirection: 'row',
        borderRadius: 5,
        alignItems: "center",
        marginBottom: 10
    },
    name:{
        color: '#fff',
        flex: 1,
        marginLeft: 16,
        marginBottom: 10,
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
        backgroundColor: "#E23C44",
        alignItems: "center",
        justifyContent: "center"

      },
})