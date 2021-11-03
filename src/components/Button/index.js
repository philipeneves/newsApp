import React, { PureComponent } from 'react'
import { 
    View,
    TouchableOpacity,
    Text
} from 'react-native'

import styles from './styles'


class StartScreen extends PureComponent {
    navigateToNewsScreen() {
        this.props.navigation.navigate('NewsScreen')
    }

    navigateToAdminScreen() {
        this.props.navigation.navigate('AdminScreen')
    }

    render() {
        return(
            <TouchableOpacity {...this.props}>
                <View style={[styles.button, this.props.customStyle]}>
                    <Text style={styles.buttonText}>
                        {this.props.title}
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }
}
export default StartScreen