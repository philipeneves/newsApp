import React, { PureComponent } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    Image,
} from 'react-native'

import Trash from '../../assets/images/trash.png'
import Pencil from '../../assets/images/pencil.png'

import styles from './styles'


class NewsCard extends PureComponent {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.headerItems}>
                        <Text style={styles.titulo}>
                            {this.props.titulo}
                        </Text>
                        <Text style={styles.subject}>
                            Por: {this.props.autor}
                        </Text>
                    </View>
                </View>
    
                <Text style={styles.NewsText}>
                    {this.props.texto}
                </Text>
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity
                        onPress={() => this.props.editItem()}
                        style={[styles.button, {marginRight: 16}]}>
                        
                        <Image source={Pencil} style={styles.icon} />

                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => this.props.deleteItem()}
                        style={styles.button}>

                        <Image source={Trash} style={styles.icon} />

                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default NewsCard