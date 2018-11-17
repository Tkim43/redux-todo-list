import React, {Component} from 'react'
import logo from "../assets/images/cute.gif";
import {connect} from 'react-redux'
import {getListData} from '../actions'
import NavButton from './nav_button'




class List extends Component{
    componentDidMount(){
        this.props.getListData();
    }
    render(){
        console.log("list props:", this.props);
        const listElements = this.props.todos.map(item =>{
            return (
                <li className=" collection-item" key={item._id}>{item.title}</li>
            )
        });
        return(
            <div>
                <img src={logo} className="logo rotate"/>
                <h1 className="center blue white-text">Pikachu To do List</h1>
                <p className="center grey-text">now with Redux</p>
                <NavButton to='/add-item' text="Add Item" color ="dark blue"/>
                <ul className="collection">
                    {listElements}
                </ul>
            </div>
        )
    }
}

// connect takes 2 arguments a function and a action creator
export default connect(mapStateToProps, {
    getListData: getListData
})(List);

// List is the component that you're trying to connect to redux

// anytime you are pulling from the redux state you are mapping state to props
function mapStateToProps(state){
    return{
        todos: state.list.all
    }
}