import React, { Component } from "react";
import style from './todoItems.module.css'
export default class TodoItem extends Component {
  render(props) {
    
    return (
      <li >
            <span>
          <input type='checkbox' onChange={this.props.onChange}/>
            </span>
            <span> <strong> {this.props.number}</strong>  {this.props.todo} </span>
        <button className={ style.rm}>&times;</button>
      </li>
    );
  }
}
