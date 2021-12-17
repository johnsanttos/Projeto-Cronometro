import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00aeef',

        alignItems: 'center',
        justifyContent: 'center',

    },

    timer: {
        marginTop: - 160,
        color: '#fff',
        fontSize: 65,
        fontWeight: 'bold'


    },

    btnArea: {
        flexDirection: 'row',
        marginTop: 70,
        height: 40

    },

    btn: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        margin: 17,
        height: 40

    },

    btnText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#00aeef'


    },
    areaUltimo: {
        marginTop: 40,
    },

    textTempo: {
        fontSize: 25,
        fontStyle: 'italic',
        color: '#fff'
    }



})