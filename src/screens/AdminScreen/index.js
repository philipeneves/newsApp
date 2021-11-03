import React, { PureComponent } from 'react'
import { 
    View,
} from 'react-native'

import Header from '../../components/Header'
import NewsList from '../../components/NewsList'
import FAB from '../../components/FAB'
import Modal from '../../components/Modal'
import TextInput from '../../components/TextInput'
import Button from '../../components/Button'
import CommonSelect from '../../components/CommonSelect'
import { authors } from '../../data'
import { isFieldEmpty } from '../../common/validations'

import styles from './styles'

class AdminScreen extends PureComponent {

    constructor(props) {
        super(props)
        this.modalizeRef = React.createRef(null)
        this.listRef = React.createRef(null)
        this.state = {
            id: '',
            title: '',
            author: '',
            text: '',
            isEditionMode: false,
            titleError: false,
            authorError: false,
            textError: false,
        }
    }

    cleanForm() {
        this.setState({
            id: '',
            title: '',
            author: '',
            text: '',
            titleError: false,
            authorError: false,
            textError: false,
        })
    }

    createEdition = async(item) => {
        await this.setState({
            id: item.id,
            title: item.title,
            author: item.author,
            text: item.text,
            isEditionMode: true,
        })
    }

    onPressModal = () => {
        this.modalizeRef.current.openModal()
    }

    saveNews() {
        if (isFieldEmpty(this.state.title)) {
            this.setState({ titleError: true })
        }
        else if (isFieldEmpty(this.state.author)) {
            this.setState({ authorError: true })
        }
        else if (isFieldEmpty(this.state.text)) {
            this.setState({ textError: true })
        }
        else {
            if (this.state.isEditionMode) {
                this.listRef.current.saveEditedItem({
                    id: this.state.id,
                    title: this.state.title,
                    author: this.state.author,
                    text: this.state.text,
                })
                this.setState({ isEditionMode: false })
            }
            else {
                this.listRef.current.addItem({
                    id: Math.random() * (100000000 - 0) + 0,
                    title: this.state.title,
                    author: this.state.author,
                    text: this.state.text,
                })
            }
            this.listRef.current.refreshList()
            this.modalizeRef.current.closeModal()
            this.cleanForm()
        }
    }

    render() {
        return(
            <View style={styles.container}>
                <Header
                    navigation={this.props.navigation}
                    title={'NOTÍCIAS'} />
                <NewsList 
                    ref={this.listRef}
                    editItem={this.createEdition}
                    openModal={() => this.onPressModal()}/>
                <FAB onPress={() => this.onPressModal()} />
                <Modal
                    ref={this.modalizeRef}
                    cleanForm={() => this.cleanForm()}>
                    <TextInput
                        error={this.state.titleError && this.state.title === ''}
                        value={this.state.title}
                        onChangeText={title => this.setState({ title })}
                        placeholder={this.state.titleError ? "Este campo é obrigatório" : "Título"} />
                    <CommonSelect
                        error={this.state.authorError && this.state.author === ''}
                        value={this.state.author}
                        data={authors()}
                        enabled={true}
                        placeholder={{
                            label: this.state.authorError && this.state.author === '' ? "Este campo é obrigatório" : this.state.author === '' ? "Autor" : authors()[this.state.author].label,
                            value: this.state.author,
                            color: 'white',
                        }}
                        onValueChange={(author) => {
                            this.setState({ author })}} />
                    <TextInput
                        error={this.state.textError && this.state.text === ''}
                        value={this.state.text}
                        onChangeText={text => this.setState({ text })}
                        placeholder={this.state.textError && this.state.text === '' ? "Este campo é obrigatório" : "Texto"} />
                    <Button
                        title={'SALVAR'}
                        customStyle={styles.saveButton}
                        onPress={() => this.saveNews()} />
                    <View style={{height: 32}} />
                </Modal>
            </View>
        )
    }
}
export default AdminScreen