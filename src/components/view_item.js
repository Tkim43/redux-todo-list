import React, {Component} from 'react';
import {connect} from 'react-redux'
import {getSingleItem} from '../actions'
import NavButton from './nav_button'

class ViewItem extends Component{
    componentDidMount(){
        console.log('View Item Props:', this.props.match.params.item_id);
        this.props.getSingleItem(this.props.match.params.item_id)
    }
    render(){
        console.log('Item:', this.props.item);
        const {details ='Loading Details', title} = this.props.item;

        // if(!title){
        //     return <Spinner/>
        // }

        return(
            <div>
                <h1 className="center">View Item</h1>
                <NavButton to="/" text="Back to List"/>
                <p><b>Title: </b>{title}</p>
                <p><b>Details: </b>{details}</p>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        item: state.list.single
    }
}

// make sure to call connection and then pass in ViewItem into the function
// then set getSinlgeItem to the function we just imported
export default connect(mapStateToProps, {
    getSingleItem: getSingleItem
})(ViewItem);