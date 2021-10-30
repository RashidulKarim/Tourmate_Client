import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Table from '../../Table/Table';
const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const {user} = useAuth();
    const userEmail = user?.email
    console.log(userEmail)
    
    useEffect(()=>{
        if(user){
        fetch(`http://localhost:5000/orders/${userEmail}`)
        .then(res => res.json())
        .then(data => {
            setOrders(data)
            console.log(data)
            
        })
        }
    },[userEmail])


    const ordersFound = orders?.map((order,i) =>{
        return{
            col1: (i+1),
            col2: order.email,
            col3: <span className='fw-bold'>{order.packageName}</span>,
            col4: <span>${order.price}</span>,
            col5: <span className={order.status === "approved"? "done": "pending"}>{order.status }</span>,
            col6: <button className='delete' onClick={()=>handleDelete(order._id)}><FontAwesomeIcon icon={faTrashAlt} /></button>
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
            Header: 'Delete Order',
            accessor: 'col6' 
          },
        ],
        []
      )

      const handleDelete = (id) => {
        const confirmation = window.confirm("Are you want to delete")
        if(confirmation){
            fetch(`http://localhost:5000/delete/${id}`,{
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
    return (
        <div className='overflow-set'>
            <h2 className='mt-5 mb-2 text-center'>My Orders</h2>
           
           {
               orders.length === 0 ? <h4 className='text-danger mt-3'>You dont have any order.</h4>: <div className='d-flex justify-content-md-center justify-content-start'><Table data ={data} columns={columns}></Table></div>
           }
        </div>
    );
};

export default MyOrders;