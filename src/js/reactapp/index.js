import React from 'react'
import ReactDOM from 'react-dom'
import Button from './react-components/Button'
import FancyButton from './react-components/FancyButton'

const MyComponent = () => (
  <div>
    Hello from the react app <Button />
    Here is a tsx component : <FancyButton title="Much fancy" />
  </div>
)

ReactDOM.render(<MyComponent />, document.getElementById('app'))
