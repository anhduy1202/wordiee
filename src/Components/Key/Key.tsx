import React from 'react'
import "./key.css";
interface IProps{
    letter: String
}

const Key: React.FC<IProps> = (props) => {
    const {letter} = props;
    const chooseLetter = () => {
      
    }
  return (
    <div className='letter' onClick={chooseLetter}>{letter}</div>
  )
}

export default Key