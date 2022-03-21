import React from 'react'
import "./heading.css"

interface IProps {
    type: String,
    text: String
}

const Heading: React.FC<IProps> = (props) => {
    const {type, text} = props;
    return (
    <p className={`heading-${type}`}> {text} </p>
  )
}

export default Heading