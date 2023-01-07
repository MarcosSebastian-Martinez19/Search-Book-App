import React from 'react';
import { ImSpinner9 } from "react-icons/im"
import "./Loader.css"

const Loader = () => {
  return (
    <div className="loader flex flex-c">
      <ImSpinner9 className='loader-icon' />
    </div>
  )
}

export default Loader