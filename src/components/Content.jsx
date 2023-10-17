import React from 'react'
import Sidebar from './Sidebar'

const content = () => {
  return (
    <>
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-4">
        {/* Your dashboard content goes here */}
        <h1 className=' bg-black-200'>hello ima aksh</h1>
      </main>
    </div>
    
    </>
  )
}

export default content
