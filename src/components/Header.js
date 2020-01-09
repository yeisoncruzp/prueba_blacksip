import React, { Component } from 'react';
import Logo from '../assets/logo.png'
import Menu from '../assets/menu.svg'
import './Header.css'


class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
    }
    componentDidMount = () => {
        console.log(this.props);
    }

    showLog = (title) => {
        console.log(`Se hizo clic al menú ${title}`);
    }
    render(){
        return(
            <div className="container_header">
                <div className="header_content_first">

                    <div className="space">
                        <img src={Menu} className="visible_in_mobile" alt="menu" /> 
                    </div>

                    <div className="cont_logo">
                        <img src={Logo} alt="Logo" className="App-logo"/>
                    </div>

                    <div className="icons_header_right">
                        {   
                            this.props.icons == null ?
                            <span> Cargando... </span>
                            :
                            this.props.icons.map((item, key) => (
                                <div key={key} className="items_icons">
                                    <img src={item.icon} alt={item.name} className="icons" />
                                    <p className="text_icons"> { item.name }  </p> 
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div className="header_content_second">
                    <div className="container_items_second">
                        {
                            this.props.items_menu == null ?
                            <span> Cargando... </span>
                            :
                            this.props.items_menu.map((item, key) => (
                                <div className="items_menu" key={key} onClick={ () => this.showLog(item.title) }>
                                    <p className="text_items"> {item.title} </p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Header