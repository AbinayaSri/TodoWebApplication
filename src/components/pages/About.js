import React from 'react'
function About(){
  return(
    <React.Fragment>
      <h1>About</h1>
      <p>This is the ToDo list app</p>
      <p>The list of ToDos has been retrieved from the blow url</p>
      <p><a href="https://jsonplaceholder.typicode.com/todos">json placeholder</a></p>
    </React.Fragment>
  )
}
export default About;
