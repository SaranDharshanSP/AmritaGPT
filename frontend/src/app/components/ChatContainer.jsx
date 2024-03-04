import React from 'react'

const ChatContainer = () => {
  return (
    <div className='md:w-[80%] mx-auto bg-[#DAD9D9] h-[80vh] rounded-2xl mt-1 p-10'>
      <div className='w-full flex justify-center  bottom-0 relative'>
        <input type='text' className='w-[80%] p-3 rounded-lg focus:ring-0' placeholder='Ask me anything about Amrita Vishwa Vidyapeetham!'/>
      </div>
      
    </div>
  )
}

export default ChatContainer
