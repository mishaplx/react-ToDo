import React, { Component } from "react";
import style from "./App.module.css";
import TodoList from "./componets/todoList";
import todoArr from "./state/state";
export default class App extends Component {
  
  
  constructor(props) {
    super(props);
    this.todoArr = todoArr
    this.onToggle = this.onToggleToDO.bind(this)

  }
  onToggleToDO(todoA) {
    console.log('lol')
  }
  render() {
  
    return (
      <div className={style.wrapper}>
        <h1>ToDoList</h1>
        
        <TodoList title={this.todoArr} onToggle={this.onToggle }/>
      </div>
    );
  }
}


