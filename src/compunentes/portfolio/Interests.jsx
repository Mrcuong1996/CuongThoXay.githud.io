import React from 'react'
import {
  CheckCircleFilled,
} from "@ant-design/icons";

const Interests = () => {
  return (
    <div className="interests">
          <h3>Interests</h3>
          <div className="div__code">
         <p>
         <CheckCircleFilled className='div__code-icon'/>
          Code
         </p>
         <p>
         <CheckCircleFilled className='div__code-icon'/>
          Liên Minh Huyền Thoại
         </p>
         <p>
         <CheckCircleFilled className='div__code-icon'/>
          Troll
         </p>
          </div>
        </div>
  )
}

export default Interests