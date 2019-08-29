import React from 'react'
import ReactDOM from 'react-dom'
import Button from './components/Button'
import FancyButton from './components/FancyButton'

const MyComponent = () => (
  <div>
    <h2>React App</h2>
    Hello from the react app <Button />
    <br />
    Here is a tsx component : <FancyButton title="Much fancy" />
  </div>
)

ReactDOM.render(<MyComponent />, document.getElementById('app'))
