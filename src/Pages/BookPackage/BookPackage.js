import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
const BookPackage = () => {
    const {user} = useAuth()
    const { register, handleSubmit,reset, watch, setValue, formState: { errors } } = useForm();
    const [tourPackage, setTourPackage] = useState({});
    const {id} = useParams()
    useEffect(()=>{
        fetch(`https://salty-waters-70938.herokuapp.com/package/${id}`)
        .then(res => res.json())
        .then(data => setTourPackage(data)
        )
    },[id])
    
    useEffect(()=>{
        setValue("packageName", tourPackage.name)
        setValue("price", tourPackage.price)
    },[tourPackage])
const onSubmit = data =>{
    const orderInfo = {...data, status:"pending"}
        axios.post(`https://salty-waters-70938.herokuapp.com/confirmOrder`,{
            body: orderInfo
        })
        .then(res => {
            if(res.data.insertedId){
                alert("Order submitted successfully.")
                reset()
            }else{
                alert("something wrong! please try again lader")
            }
        }
        )
        
    }
    
    return (
        <div className='center'>
            <h3 className='gap-bottom'>Confirm Your Booking</h3>
            <form className='flex-section' onSubmit={handleSubmit(onSubmit)}>
                <input id='name' defaultValue={user?.displayName} {...register("name")} />
                <input defaultValue={user?.email} {...register("email")} />
                <input placeholder='Your Phone Number' {...register("phone", { required: true })} />
                <input {...register("packageName")} />
                <input {...register("price")} />
                <textarea placeholder='If any Special request' {...register("request")} />
                <div className='submit-btn-div'>
                <input className='submit-btn' type="submit" />
                </div>
            </form>
        </div>
    );
};

export default BookPackage;