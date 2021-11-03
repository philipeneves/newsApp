import React, { PureComponent } from 'react'
import { Modalize } from 'react-native-modalize'

import styles from './styles'

class Modal extends PureComponent {
    constructor(props) {
        super(props)
        this.modalizeRef = React.createRef(null)
    }
    navigateToStartScreen() {
        this.props.navigation.navigate('StartScreen')
    }

    openModal() {
        this.modalizeRef.current?.open()
    }

    closeModal() {
        this.modalizeRef.current?.close()
        this.props.cleanForm()
    }

    render() {
        return(
            <Modalize 
                {...this.props}
                onClose={() => this.props.cleanForm()}
                modalStyle={styles.container}
                adjustToContentHeight
                ref={this.modalizeRef} >
                {this.props.children}
            </Modalize>
        )
    }
}
export default Modal