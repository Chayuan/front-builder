import React from 'react'
import ReactDOM from 'react-dom'
import Button from './react-components/Button'

const MyComponent = () => (
  <div>
    Hello from the react app <Button />
  </div>
)

ReactDOM.render(<MyComponent />, document.getElementById('app'))
