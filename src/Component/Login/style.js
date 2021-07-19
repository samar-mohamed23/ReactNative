import { StyleSheet } from 'react-native';
const stls = StyleSheet.create({
    emailAndPasswordInput: {
        width: '88%',
        height: 50,
        margin: 10,
        marginLeft: '8%',
        borderWidth: 1,
        borderColor: '#191919',
        borderRadius: 15,
        color: 'white',
        paddingLeft: 10,
        backgroundColor: '#161616',
        flex: 1

    },
    ic: {
        marginTop: 26,
        marginLeft: '90%',
        position: 'absolute'

    },
    // bt: {

    //     padding: 10,
    //     borderRadius: 15,
    //     width: '85%',
    //     alignItems: 'center',
    //     marginLeft: '9%',
    //     height: '6%',
    //     marginTop: '10%',
    // },
    bc1: {
        backgroundColor: '#ca25a7',
        padding: 10,
        borderRadius: 15,
        width: '85%',
        alignItems: 'center',
        marginLeft: '9%',
        height: '6%',
        marginTop: '10%',

    },
    bc2: {
        backgroundColor: 'green',
        padding: 10,
        borderRadius: 15,
        width: '85%',
        alignItems: 'center',
        marginLeft: '9%',
        height: '6%',
        marginTop: '10%',

    }
});

export { stls };

