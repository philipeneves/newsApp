import { Button, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gray',
        justifyContent: 'center',
        padding: 40
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    button: {
        height: 46,
        backgroundColor: 'blue',
        justifyContent: 'center',
        paddingHorizontal: 24,
        borderRadius: 8,
    },
    buttonText: {
        fontSize: 16,
        color: 'white',
        textAlign: 'center'
    }
})

export default styles