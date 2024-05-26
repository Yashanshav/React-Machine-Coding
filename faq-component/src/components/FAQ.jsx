import React from 'react'
import Question from './Question'

function FAQ({data}) {
  return (
    <div className='border-black border-2 mx-4 my-4 px-2 py-2 flex-col justify-between '>
        <h1 className='flex items-center justify-center'>Frequently Asked Questions</h1>
        {
            data.map((item) => (
                <Question item= {item}/>
            ))
        }
    </div>
  )
}

export default FAQ