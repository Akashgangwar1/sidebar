import React from 'react'


const sidebar = () => {
    return (
        <>
            <div className="bg-blue-950 text-white h-screen w-64 fixed top-0 left-0 overflow-y-auto">
                <div className="p-4">
                    <h2 className="text-2xl font-semibold">Dashboard</h2>
                </div>
                <ul>
                    <li className="p-4 hover:bg-blue-900 cursor-pointer">Dashboard</li>
                    <li className="p-4 hover:bg-blue-900 cursor-pointer">Product</li>
                    <li className="p-4 hover:bg-blue-900 cursor-pointer">Customer</li>
                    <li className="p-4 hover:bg-blue-900 cursor-pointer">Income</li>
                    <li className="p-4 hover:bg-blue-900 cursor-pointer">Promote</li>
                    <li className="p-4 hover:bg-blue-900 cursor-pointer">Help</li>
                </ul>
            </div>
        </>
    )
}

export default sidebar
