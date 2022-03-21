import React from 'react'
import "./square.css"

interface IProps {
    val: String
}

const Square: React.FC<IProps> = (props) => {
    const {val} = props;
  return (
    <div className="square">
        {val}
    </div>
  )
}

export default Square