import React, { PureComponent } from 'react'
import { 
    View,
    FlatList
} from 'react-native'

import NewsCard from '../NewsCard'
import { authors } from '../../data'
import TextInput from '../TextInput'

import styles from './styles'


class NewsList extends PureComponent {
    constructor(props) {
        super(props)
        this.listRef = React.createRef(null)
        this.state = {
            refresh: false,
            list: [],
            initialList: [],
            search: '',
        }
    }

    componentDidMount() {
        this.setState({ list: this.DATA() })
    }

    componentDidUpdate = async (prevProps, prevState) => {
        if (prevState.search !== this.state.search) {
            this.filterList(prevState.search.length, this.state.search.length, this.state.search)
        }
    }

    renderItem = ({ item }) => {
        return (
            <NewsCard
                deleteItem={() => this.deleteItem(item)}
                editItem={() => this.editItem(item)}
                titulo={item.title}
                autor={authors()[item.author].label}
                texto={item.text} />
        )
    }

    addItem = (item) => {
        let list = this.state.list
        list.push({
            id: Math.random() * (1000000 - 0) + 0 ,
            title: item.title,
            author: item.author,
            text: item.text,
        })
        this.setState({ list: list })
        this.refreshList()
    }

    editItem = (item) => {
        this.props.openModal()
        console.log(item)
        this.props.editItem(item)
    }

    saveEditedItem = (item) => {
        let lista = this.state.list
        let index = lista.findIndex((obj) => obj.id === item.id)
        lista[index].title = item.title
        lista[index].author = item.author
        lista[index].text = item.text
        this.setState({ list: lista })
        this.refreshList()
    }

    deleteItem = (item) => {
        this.setState( { list: this.state.list.filter((l) => l.id !== item.id) })
        this.refreshList()
    }

    refreshList() {
        this.setState({ refresh: !this.state.refresh })
    }

    filterList = async(beforeLength, currentLength, string) => {
        if (beforeLength === 0)
            this.setState({ initialList: this.state.list })
        if (beforeLength > currentLength) {
            await this.setState({ list: this.state.initialList })
        }
        let filteredList = this.state.list.filter((listItem) => listItem.title.toLowerCase().includes(string.toLowerCase()))
        if (currentLength === 0) {
            this.setState({ list: this.state.initialList })
        }
        else  {
            this.setState({ list: filteredList })
        }
    }

    DATA = () => [
        {
            id: 0,
            title: 'Ibis reclama de número de convocados por Tite',
            author: 0,
            text: 'Técnico do clube reprovou a convocação de 7 atletas do clube, segundo ele seus planos de atingir a classificação para a copa Libertadores poderão vir a falhar por conta disso.',
        },
        {
            id: 1,
            title: 'Morador de Feira de Santana fotografa galáxia desconhecida do seu quintal',
            author: 1,
            text: 'Um morador da cidade de Feira de Santana, Bahia, na noite de ontem conseguiu fotografar uma galáxia até então desconhecida, usando um aparelho celular.',
        },
        {
            id: 2,
            title: 'Gasolina chega a R$1,00 e população faz protesto',
            author: 2,
            text: 'Após o anúncio feito pelo presidente Luiz Inácio Bolsonaro, revelando a diminuição do preço dos combustíveis, a população ficou revoltada, pois já estava acostumada com os preços exorbitantes anteriormente cobrados',
        },
    ]

    render() {
        return(
            <View style={styles.container}>
                <FlatList
                    data={this.state.list}
                    ListHeaderComponent={
                        <TextInput
                            value={this.state.search}
                            onChangeText={search => this.setState({ search })}
                            placeholder="Buscar uma notícia"
                        />
                    }
                    extraData={this.state.refresh}
                    ref={this.listRef}
                    style={{marginTop: 16}}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    showsVerticalScrollIndicator
                    renderItem={this.renderItem}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={styles.extraArea}
                />
            </View>
        )
    }
}
export default NewsList