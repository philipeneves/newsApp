import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff', 
        borderWidth: 1, 
        borderColor: '#e6e6f0',
        borderRadius: 14, 
        marginBottom: 16, 
        overflow: 'hidden',
    }, 
    header: { 
        flexDirection: 'row', 
        alignItems: 'center',
    },
    headerItems: {
        width: '100%',
        backgroundColor: '#fbe9e7',
        padding: 16,
    },
    titulo: {
        color: '#212121',
        fontSize: 20,
    },
    subject: {
        color: '#212121',
        fontSize: 12,
    },
    NewsText: {
        color: '#212121',
        fontSize: 16,
        lineHeight: 22,
        marginBottom: 24,
        padding: 16,
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingRight: 16,
        paddingBottom: 16,
    },
    button: {  
        height: 38,
        width: 38,
        borderRadius: 8, 
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        width: 24,
        height: 24
    }
})

export default styles