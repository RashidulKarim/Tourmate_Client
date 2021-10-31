import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import Table from '../../Table/Table';
const AllOrders = () => {
    const [orders , setOrders] = useState([])

    useEffect(()=>{
        fetch("https://salty-waters-70938.herokuapp.com/allOrder")
        .then(res => res.json())
        .then(data => setOrders(data)
        )
    },[])

    const handleDelete = (id) => {
        const confirmation = window.confirm("Are you want to delete")
        if(confirmation){
            fetch(`https://salty-waters-70938.herokuapp.com/delete/${id}`,{
            method:"DELETE"
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount>0){
                const rest = orders.filter(order => order._id !== id)
                alert("Order deleted Successfully")
                setOrders(rest)
            }
        }
        )
        } 
    } 
    const updateStatus = (id) =>{
         fetch(`https://salty-waters-70938.herokuapp.com/order/${id}`,{
           method: "PUT"
         })
         .then(res => res.json())
         .then(data => {             
           if(data.modifiedCount>0){
             alert('Successfully Updated')
             const rest = orders.filter(pd => pd._id !== id)
             const match = orders.filter(pd => pd._id === id)
             const order = match[0]
             order['status'] = "approved";
             setOrders([...rest, order])
           }else{
             alert("Something wrong, please try again later")
           }})
        }     

    const ordersFound = orders?.map((order,i) =>{
        return{
            col1: (i+1),
            col2: order.email,
            col3: <span className='fw-bold'>{order.packageName}</span>,
            col4:  <span>${order.price}</span>,
            col5: <span className={order.status === "approved"? "done": "pending"}>{order.status }</span>,
            col6: <button className='book-btn text-white' onClick={()=>{updateStatus(order._id)}}>Update</button>,
            col7: <button className='delete' onClick={()=>handleDelete(order._id)}><FontAwesomeIcon icon={faTrashAlt} /></button>
        }
    } )
    let data =[]
    if(ordersFound.length){
        data = (ordersFound)
    }
    const columns = React.useMemo(
        () => [
          {
            Header: 'Sl No:',
            accessor: 'col1'
          },
          {
            Header: 'Booking Email',
            accessor: 'col2'
          },
          {
            Header: 'Booking Package',
            accessor: 'col3', 
          },
          {
            Header: 'Booking Price',
            accessor: 'col4', 
          },
          {
            Header: 'Status',
            accessor: 'col5' 
          },
          {
            Header: 'Update Status',
            accessor: 'col6' 
          },
          {
            Header: 'Delete',
            accessor: 'col7' 
          },
        ],
        []
      )
    return (
        <div className='overflow-set'>
        <h2 className='mt-5 mb-2 text-center'>All Orders</h2>
       {
           orders.length === 0 ? <h4 className='text-danger mt-3 text-center'>No order found.</h4>: <div className='d-flex justify-content-md-center justify-content-start'><Table data ={data} columns={columns}></Table></div>
       }
    </div>
    );
};

export default AllOrders;