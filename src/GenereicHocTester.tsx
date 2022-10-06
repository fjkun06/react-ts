import React from 'react'
import { ParentProps } from './GenericHOC';

type GenProps = ParentProps & {
  name: string;
  age: number;
  city: string;
  // count: number;
}


const GenereicHocTester: React.FC<GenProps> = ({name,city,age,count,onIncrement}) => {
  return (
    <div>
      <br/>
      The GenHocCount is {count}
      <br/>

      <button type='button' onClick={onIncrement}>Add</button>
      <br/>

      Hello there, my name is <em>{name}</em>. I am {age} years old and live in {city}. 
    </div>
  )
}

export default GenereicHocTester
