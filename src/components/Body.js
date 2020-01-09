import React, { Component } from 'react';
import Form from './Form'
import ImageLeft from './ImageLeft'
import './Body.css'

class Body extends Component {

    constructor(props){
        super(props);
        this.state = {}
    }

    componentDidMount = () => {
        let form = [
            { name: 'email', type:'email' , title: 'Email'},
            { name: 'phone', type:'number' , title: 'Celular'},
            { name: 'city', type:'text' , title: 'Ciudad'}
        ]
        this.setState({form});
    }

    render(){
        return(
            <div className="container_body">
                <Form inputs={this.state.form} />
                <ImageLeft />
            </div>
        )
    }
}

export default Body