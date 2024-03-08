import React from 'react'

const UserChat = ({message}) => {
  return (
    <div className='bg-white py-3 px-6 rounded-2xl max-w-[50%] w-fit ml-auto my-2 mx-6'>
      {message}
    </div>
  )
}

export default UserChat
