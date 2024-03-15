import React from 'react'

import '../Dashboard/index.css'

const Dashboard=props=>{
    const {totalProducts,totalOrders}=props
    return(
    <div className='cardContainer'>
        <h1 className="heading">Dashboard</h1>
        <div>
            <div className='container1'>
                <p>TotalProducts</p>
                <h1>{totalProducts}</h1>
            </div>
            <div className='container1'>
                <p>Total Orders</p>
                <h1>{totalOrders}</h1>
            </div>
        </div>
    </div>
    )
}

export default Dashboard