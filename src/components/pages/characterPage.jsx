import React, { Component } from 'react';
import ItemList from '../itemList';
import ErrorMessage from '../errorMessage';
import RowBlock from '../rowBlock';
import GotService from '../../services/gotSevice';
import ItemDetails, { Field } from '../ItemDetails';



export default class CharacterPage extends Component {
    gotService = new GotService();

    state = {
        selectedChar: null,
        error: false
    }


    onItemSelected = (id) => {
        this.setState({
            selectedChar: id
        })
    }

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    render() {
        if (this.state.error) {
            return <ErrorMessage />
        }

        const itemList = (
            <ItemList
                onItemSelected={this.onItemSelected}
                getData={this.gotService.getAllCharacters}
                renderItem={({ name, gender }) => `${name} (${gender})`} />
        )

        const itemDetails = (
            <ItemDetails
                itemId={this.state.selectedChar}
                getData={this.gotService.getCharacterById} >
                <Field field='gender' label='Gender' />
                <Field field='born' label='Born' />
                <Field field='died' label='Died' />
                <Field field='culture' label='Culture' />
            </ItemDetails>
        )

        return (
            <RowBlock left={itemList} right={itemDetails} />
        )
    }
}