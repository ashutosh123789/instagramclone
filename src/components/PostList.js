import React,{useState, useEffect} from "react";

const PostList = ({newPost,likePost,updateNewPost}) => {
        const [posts,setPosts]= useState([]);


        useEffect(() =>{
          const storedposts = localStorage.getItem("posts");
          console.log(storedposts);

          const parsedPost = JSON.parse(storedposts);
          console.log([parsedPost]);
          setPosts(parsedPost);

        },[newPost]);

        function removePost(index){
          const storedposts= JSON.parse(localStorage.getItem("posts"));
          let id = index.target.getAttribute("data-id")
          const filterdPost =storedposts.filter((_,i)=> i !==parseInt(id));
          localStorage.setItem("posts",JSON.stringify(filterdPost))
          console.log(filterdPost);
          updateNewPost( )
          
        }
        
        likePost=(index) =>{
          const newPost=[...posts];
          newPost[index].likes=(newPost[index].likes || 0)+1;
          setPosts(newPost);
          localStorage.setItem("post",JSON.stringify(newPost));
          
        }

  return (
    <div className='Card-list'>
      {posts && posts.map((post,index)=> (
              <div className="card">
              <img src={post.imageUrl} className='card-img-top' alt="" />
              <div className='card-body'>
                <p className='card-test'>{post.caption}</p>
                <div className='buttons'>
                  <button className='btn btn-success'onClick={()=>likePost(index)}>like</button>
                  <button data-id={index} className='btn btn-danger mx-3' onClick={removePost}>Delete</button>
                
                  <span>{post.likes}{post.likes === 1? "like": "likes"}</span>
                </div>
              </div>
             </div>
        ))}
    </div>
  );
};
export default PostList
