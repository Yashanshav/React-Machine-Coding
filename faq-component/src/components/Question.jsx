import React, { useState } from 'react'

function Question({item}) {
    const [expand, setExpand] = useState(false);
  return (
    <div className='border-black border-2 mb-2 ps-2'>
        <button className={expand ? "rotate-90" : ""} onClick={() => setExpand(!expand)} >{">"}</button>
        {" "}
        {item.question}
        {
            expand ? 
            <div className='ms-3'>{item.answer}</div>
            : null
        }
    </div>
  )
}

export default Question