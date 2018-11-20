import React, {Component} from 'react';
import NavButton from './nav_button'
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux'
import {addToDoItem} from '../actions'


class AddItem extends Component{
    renderInput(props){
        // keyword called arguments that gives you an array that shows you everything being passed
        // into the function
        // arguments cant work with a fat arrow function
        // meta information goes over the information of the input
        // const {size, input, label, meta: {touched, dirty, error} } = props;
        // return(
        //     <div className ={`input-field col ${props.size}`}>
        //         <input {...input} type="text" autoComplete ="off" />
        //         <label>{label}</label>
        //         <p className="red-text">{(touched || dirty) && error}</p>
        //     </div>
        // );

        console.log("render input", props);
        
        return(
            <div className ={`input-field col ${props.size}`}>
                <input {...props.input} type="text" autoComplete ="off" />
                <label>{props.label}</label>
                <p className="red-text">{props.meta.touched && props.meta.error}</p>
            </div>
        );
    }
    handleAddItem = async (values) => {
        console.log('Form', values)
        await this.props.addToDoItem(values);
        // how to programmatically redirect a page
        this.props.history.push('/');

    }
    render(){
        console.log("add item:", this.props)
        const {handleSubmit, reset} = this.props;
        return(
            <div>
                <h1 className="center">Add Item</h1>
                <NavButton to="/" text="Home" color="blue"/>
                <form onSubmit ={handleSubmit(this.handleAddItem.bind(this))}>
                <div className="row">
                    <Field size="s12" name="title" label ="title" component ={this.renderInput}></Field>
                </div>
                <div className="row">
                    <Field size ="s12" name="details" label="details" component={this.renderInput}></Field>
                </div>
                <div className="col s12 right-align">
                    <button className="btn blue">Add Item</button>
                    <button type="button" onClick={reset} className="btn red">Cancel</button>
                </div>
                </form>
            </div>
        )
    }
}

// when it function validate gets called it will have 2 property names in it
function validate(formValues){
    const error ={};
    // if there isn't anything in form values then the input is not valid
    if(!formValues.title){
        error.title = 'Please enter a title for your to do list';
    }
    // if(formValues.details && formValues.title.length > 10){
    //     error.title = 'The title is too long';
    // }
    if(!formValues.details){
        error.details = 'Please give your to do item some details';
    }
    return error;
}

AddItem =  reduxForm(
    // this is where you give the form a name
    {form: 'add-item',
      validate: validate}
)(AddItem);

export default connect (null, {
    addToDoItem: addToDoItem
})(AddItem);