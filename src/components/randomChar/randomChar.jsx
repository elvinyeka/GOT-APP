import React, { Component } from 'react';
import GotServise from '../../services/gotSevice';
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';
import PropTypes from 'prop-types';

import './randomChar.css';



export default class RandomChar extends Component {

    gotServise = new GotServise();

    state = {
        char: {},
        loading: true,
        error: false
    }


    static defaultProps = {
        interval: 4500
    }

    static propTypes = {
        interval: PropTypes.number
    }

    componentDidMount() {
        this.updateChar();
        this.timerId = setInterval(this.updateChar, this.props.interval);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    onCharLoaded = (char) => {
        this.setState({
            char,
            loading: false
        })
    }
    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        })
    }

    updateChar = () => {
        const id = Math.floor(Math.random() * 200 + 25);
        this.gotServise.getCharacterById(id)
            .then(this.onCharLoaded)
            .catch(this.onError);
    }

    render() {
        console.log('render');
        const { char, loading, error } = this.state;

        const errorMessage = error ? <ErrorMessage /> : null;
        const spinner = loading ? <Spinner /> : null;

        const content = !(loading || error) ? <View char={char} /> : null;

        return (
            <div className="random-block rounded">
                {errorMessage}
                {spinner}
                {content}
            </div>
        )
    }
}




const View = ({ char }) => {

    const { name, gender, born, died, culture } = char;
    return (
        <div>
            <h4>Random Character: <span className="person-name">{name}</span></h4>
            <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Gender</span>
                    <span>{gender}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Born</span>
                    <span>{born}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Died</span>
                    <span>{died}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Culture</span>
                    <span>{culture}</span>
                </li>

            </ul>
        </div>
    )
}
