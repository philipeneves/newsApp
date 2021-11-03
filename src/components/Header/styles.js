import { Button, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        padding: 36,
        backgroundColor: '#1976D2',
        justifyContent: 'center',
        marginBottom: 16,
    },
    title: {
        color: '#fff',
        fontSize: 24,
        lineHeight: 32,
        maxWidth: 360,
        marginTop: 20,
        textAlign: 'center'
    },
    topBar: {
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
})

export default styles