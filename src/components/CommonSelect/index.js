import React, { PureComponent } from 'react'
import { View, Text, StyleSheet, } from 'react-native'
import RNPickerSelect from 'react-native-picker-select'

import styles from './styles'


class CommonSelect extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            data: '',
            default: '',
            isVisible: false,
            search: '',
        }
    }

    componentDidUpdate = async (prevProps, prevState) => {
        if (prevProps.default !== this.props.default) {
            await this.setState({ default: this.props.default })
        }
        if (prevProps.data !== this.props.data) {
            await this.setState({ data: this.props.data })
        }
    }

    pickerStyle = (props) => {
        return StyleSheet.create({
            inputAndroid: {
                color: '#212121',
                paddingHorizontal: 16,
                backgroundColor: this.props.error ? '#ffebee' : '#f4f4f4',
                borderRadius: 8,
                minHeight: 48,
            },
            underline: { borderTopWidth: 0 },
            placeholder: {
                color: this.props.error ? "#e53935" : this.props.value === '' ? "#c1bccc" : '#212121',
                fontSize: 14,
            },
        })
    }

    handleChange = (data) => {
        this.props.value(data)
        this.setState({ isVisible: false, search: '' })
    }

    toggleInput = async (isVisible) => {
        await this.setState({ isVisible })
    }

    render() {
        return (
            <View style={styles.component}>
                <RNPickerSelect
                    {...this.props}
                    style={this.pickerStyle(this.props)}
                    useNativeAndroidPickerStyle={false}
                    doneText={'Feito'}
                    onOpen={async () => await this.toggleInput(true)}
                    onClose={async () => await this.toggleInput(false)}
                    items={this.props.data} />
            </View>
        )
    }
}

export default CommonSelect
