import React, { PureComponent } from 'react'
import { 
    View,
    Text,
} from 'react-native'

import styles from './styles'


class Header extends PureComponent {
    navigateToStartScreen() {
        this.props.navigation.navigate('StartScreen')
    }

    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.title}>
                    {this.props.title}
                </Text>
            </View>
        )
    }
}
export default Header