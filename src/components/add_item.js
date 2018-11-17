import React, {Component} from 'react';
import NavButton from './nav_button'
import {Field, reduxForm} from 'redux-form';


class AddItem extends Component{
    render(){
        return(
            <div>
                <h1 className="center">Add Item</h1>
                <NavButton to="/" text="Home" color="blue"/>
            </div>
        )
    }
}

export default AddItem;