import React, { PureComponent } from 'react'
import { 
    View,
    TouchableOpacity,
    Text,
} from 'react-native'

import Header from '../../components/Header'
import NewsList from '../../components/NewsList'

import styles from './styles'


class FAB extends PureComponent {
    render() {
        return(
            <TouchableOpacity
                activeOpacity={0.9}
                {...this.props}
                style={styles.container}>
                    
                    <Text style={styles.title}>
                        +
                    </Text>

            </TouchableOpacity>
        )
    }
}
export default FAB