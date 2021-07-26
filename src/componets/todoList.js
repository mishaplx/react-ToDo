import React, { Component } from "react";
import TodoItem from "./todoItems/todoItem";
import style from './todoList.module.css'
class TodoList extends Component {
    
    render() {
     
      return (
          <ul className={style.list}>
          {this.props.title.map((el, index) => <TodoItem todo={el.title} key={el.id} number={index = index + 1} onChange={this.props.onToggle()} /> )}
        </ul>   
    )
  }
}

export default TodoList;
