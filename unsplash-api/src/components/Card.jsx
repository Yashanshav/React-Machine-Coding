import React from 'react'

function Card({ images }) {

    function handleOnClick() {
        console.log('on click');    
    }
    return (
        <div className='flex flex-wrap items-center justify-center'>

            {
                images.map((img) => (
                    
                        <div key={img.image_id} className='w-48 ms-4 mt-4 rounded-lg'>
                            <div className="w-full h-48 rounded-lg">
                                <button className="hover:transition hover:ease-in-out w-full h-full hover:-translate-x-1"onClick={handleOnClick}>
                                  <img src={img.url} className='w-full h-full' />
                                </button>
                            </div>
                            <span className=''> Artish Name: {img.artist?.name ?? "Not Available"}</span>
                        </div>
                


                ))
            }

        </div>
    )
}

export default Card