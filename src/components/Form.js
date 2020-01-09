import React, { Component } from 'react';
import './Form.css';


class Form extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="container_form">
                {
                    this.props.inputs == null || this.props.inputs == "" ? 
                    <span> Cargando... </span>
                    :
                    this.props.inputs.map((item, key) => (
                        <div className="container_inputs" key={key} > 
                            <input className="inputs" type={item.type} name={item.name} placeholder={item.title} onChange={ (e) => this.sendToState(e.target.name, e.target.value) } />
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default Form