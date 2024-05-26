import React from 'react'
import { useState } from 'react'

function Search({search}) {

    const [searchTerm, setSearchTerm] = useState('');

    const handleKeyDown = (e) => {
        if(e.key === 'Enter') {
            search(searchTerm);
        }
    }

    return (
        <div className='flex items-center justify-center mt-4 me-8'>
            <input type="search"
                placeholder="Search for favourite waifu..."
                className="text-lg font-mono font-black rounded-lg bg-gray-200 border-cyan-400 caret-zinc-400 px-4 py-1 w-96"
                onKeyDown={handleKeyDown}
                onChange={(e) => {
                    setSearchTerm(e.target.value);  
                }}
            />
        </div>
    )
}

export default Search