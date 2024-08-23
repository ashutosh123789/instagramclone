import { Button } from "bootstrap";
import React,{useState} from "react";

export default function PostForm({addPost,updateNewPost}) {
        const [imageUrl ,setImagrUrl]= useState("")
        const [caption ,setCaption]=useState("")

        function submitHandler(e){
            e.preventDefault()
            addPost({caption,imageUrl})
            setCaption("")
            setImagrUrl("")
            updateNewPost()
        }

return ( 
<div> 
    <form className="form-container" onSubmit={submitHandler}> 
        <div className="form-group"> 
            < label htmlFor="imageUrl"> Image Url</label> 
            <input id="imageUrl" value={imageUrl} onChange={(e)=>{setImagrUrl(e.target.value)}} type="text" className="form-control" /> 
        </div> 
        <div className="form-group"> 
            <label htmlFor="caption"> Caption</label> 
            <input id="caption"  value={caption} onChange={(e)=>{setCaption(e.target.value)}}  type="text" className="form-control" /> 
            <br></br>
            <button className="btn btn-primary" type="submit">Upload Post</button>
            </div> 
        </form> 
    </div> 
 );
}