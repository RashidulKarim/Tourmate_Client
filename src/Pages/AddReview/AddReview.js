import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
const AddReview = () => {
    const { register, handleSubmit,reset, watch, formState: { errors } } = useForm();
    const [imgUrl, setImgUrl] = useState('')
    const [uploadStatus, setUploadStatus] = useState('')
  
    const onSubmit = data => {
        if(imgUrl){
            const packageInfo = {...data, imgUrl}            
            axios.post("http://localhost:5000/addReview",{
        body: packageInfo
         })
    .then(res => {
        if(res.data.insertedId){
            alert("Package added Successfully")
            reset()
            setImgUrl('')
        }
    })
        }else{
            alert("Image isn't uploaded yet.")
        }
    
  }

  const selectedFile = e => {
    setUploadStatus("Image is uploading please wait.")
    const file = new FormData();
    file.append("image",(e.target.files[0]),(e.target.files[0])?.name );
    axios.post(`https://api.imgbb.com/1/upload?key=571f6ef43e53c793167ddb2a958d51aa`, file)
    .then(res => {
        if(res.data.data.url){
            setImgUrl(res.data.data.url)
            setUploadStatus('')
            alert("Image uploaded successfully")
        }
        

    })}

      
    return (
        <div className='center'>
            <h3 className='gap-bottom'>Add A Review</h3>
            <form className='flex-section' onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='Your Name' {...register("name", { required: true })} />
                {errors.name && <span className='error'>This field is required</span>}
                <textarea placeholder='Your Comment' {...register("comment", { required: true })} />
                <input type="file" onChange={selectedFile}  required />
                {uploadStatus&& <span className='error'>{uploadStatus}</span>}
                <div className='submit-btn-div'>
                <input className='submit-btn' type="submit" />
                </div>
            </form>
        </div>
    );
};

export default AddReview;