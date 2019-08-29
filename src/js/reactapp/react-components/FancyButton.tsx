import * as React from 'react'

type Props = {
  title: string
}

const FancyButton = ({ title }: Props) => <button>{title}</button>

export default FancyButton
