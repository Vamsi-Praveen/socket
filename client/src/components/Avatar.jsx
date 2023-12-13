import React from 'react'

const Avatar = ({ username }) => {
    return (
        <div className='w-[40px] h-[40px] bg-violet-500 rounded-full text-black flex justify-center items-center uppercase text-[20px] font-semibold cursor-pointer'>
            {username[0]}
        </div>
    )
}

export default Avatar
