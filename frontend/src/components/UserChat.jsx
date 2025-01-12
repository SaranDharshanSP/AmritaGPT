import React from 'react'

const UserChat = ({message}) => {
  return (
    <>
    <div className='bg-white py-3 px-6 rounded-2xl max-w-[65%] w-fit ml-auto my-2 text-sm '>
      {message}
    </div>
    </>
  )
}

export default UserChat
