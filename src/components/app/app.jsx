import React, { Component } from 'react'
import { Col, Container, Row } from 'reactstrap';
import { CharacterPage, BooksPage, HousesPage, BooksItem } from '../pages';
import ErrorMessage from '../errorMessage';
import Header from '../header';
import RandomChar from '../randomChar';
import GotService from '../../services/gotSevice';
import { BrowserRouter as Router, Route } from 'react-router-dom';



import './app.css';

export default class App extends Component {

    gotServise = new GotService();

    state = {
        showRandomChar: true,
        error: false,
        selectedHouse: 20
    }

    componentDidCatch() {
        console.log('error');
        this.setState({
            error: true
        })
    }

    toggleRandomChar = () => {
        this.setState((state) => {
            return {
                showRandomChar: !state.showRandomChar
            }
        })
    }

    render() {

        const caharacter = this.state.showRandomChar ? <RandomChar interval={4500} /> : null;

        if (this.state.error) {
            return <ErrorMessage />
        }

        return (
            <Router>
                <div className="app">
                    <Container>
                        <Header />
                    </Container>
                    <Container>
                        <Row>
                            <Col lg={{ size: 12, offset: 0 }}>
                                <div className="character-box">
                                    <button className="toggle-btn"
                                        onClick={this.toggleRandomChar}>Toggle Random Character
                                    </button>
                                </div>
                                {caharacter}
                            </Col>
                        </Row>
                        <Route path='/' component={() => <h1 className="text-center pb">Welcome to Game Of Thrones  Info</h1>} exact />
                        <Route path='/characters' component={CharacterPage} />
                        <Route path='/books' component={BooksPage} exact />
                        <Route path='/books/:id' render={({ match }) => {
                            const { id } = match.params;
                            return <BooksItem bookId={id} />
                        }} />
                        <Route path='/houses' component={HousesPage} />

                    </Container>
                </div >
            </Router>
        )
    }
}



