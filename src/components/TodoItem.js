import React, { Component } from 'react';
import PropTypes from 'prop-types';
class TodoItem extends Component {
  getStyle=()=>{
    return{
      background:'#e1eec3',
      padding:'2px',
      borderBottom:'1px #ccc solid',
      textDecoration:this.props.todo.completed?'line=through':'none'
    }
  }
  markComplete=(e)=>{
    console.log(this.props)
  }
  render() {
    const {id,title}=this.props.todo;
    return(
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" onChange={this.props.markComplete.bind(this,id)}/>
          {' '}
          {title}
          <button onClick={this.props.delTodo.bind(this,id)} style={btnStyle}>x</button>
        </p>
      </div>
    );
  }
}
//PropTypes
TodoItem.propTypes={
    todos:PropTypes.object.isRequired,
    markComplete:PropTypes.func.isRequired,
    delTodo:PropTypes.func.isRequired,
}
const btnStyle={
  background:'black',
  color:'white',
  border:'none',
  padding:'5px 10px',
  borderRadius:'50%',
  cursor:'pointer',
  float:'right'
}
export default TodoItem;
