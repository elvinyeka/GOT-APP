import React, { Component } from 'react';
import GotService from '../../services/gotSevice';
import ItemDetails, { Field } from '../ItemDetails';

export default class BooksItem extends Component {
    gotService = new GotService();

    render() {
        return (
            <ItemDetails
                itemId={this.props.bookId}
                getData={this.gotService.getBooksById} >
                <Field field='numberOfPages' label='Number of pages' />
                <Field field='publisher' label='Publisher' />
                <Field field='released' label='Released' />
            </ItemDetails>
        )
    }
}

