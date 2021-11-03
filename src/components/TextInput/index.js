import React, { PureComponent } from 'react'
import {
    TextInput,
} from 'react-native'

import styles from './styles'


class StartScreen extends PureComponent {

    render() {
        return(
            <TextInput
                {...this.props}
                style={[styles.input, this.props.error ? {backgroundColor: '#ffebee'} : null]}
                placeholderTextColor={this.props.error ? "#e53935" : "#c1bccc"} />
        )
    }
}
export default StartScreen