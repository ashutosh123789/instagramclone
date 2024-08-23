import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import SignUP from './components/SignUp';
import SignIn from './components/SignIn';
import HomePage from './components/HomePage';
import { BrowserRouter,Routes,Route, Navigate } from 'react-router-dom';
import {useEffect,useState}from 'react';
import Modal from './components/Modal';
import { Link } from 'react-router-dom';
// import logo from './logo.svg'




function App() {
  //   const [newPost, setNewPost]=useState(true)
  //   function updateNewPost(){
  //     setNewPost((prev)=>!prev)
  //   }

  // const[post, setPost] =useState([]);
  // const addPost=(data)=>{
  //   let storedposts= JSON.parse(localStorage.getItem("posts")) || [];
  //   const newpostArray =[...storedposts,data]
  //   console.log(newpostArray)
  //   console.log(data);

  //   localStorage.setItem("posts",JSON.stringify(newpostArray))

  // } 

  const[isLogin,setisLogin]=useState(!!localStorage.getItem("token"))

  

  return (
    <div className="App">
      {/* <Modal><button>i am modal</button> </Modal> */}

      {/* <div>
        <SignIn/>
        <PostForm addPost={addPost} updateNewPost={updateNewPost}/>
        <br/>
        <PostList newPost={newPost} updateNewPost={updateNewPost}/>
      </div> */}

      <BrowserRouter>
      <Routes>
      <Route path="/login" element={isLogin?<Navigate to={"/"}></Navigate>: <SignIn setisLogin={setisLogin} />}></Route> 
      <Route path="/register" element={<SignUP />}></Route>   
      <Route path='/' element={isLogin ? <HomePage></HomePage> : <Navigate to={"/login"}></Navigate>}></Route>


      </Routes>
       </BrowserRouter>

       {/* <HomePage></HomePage> */}
    </div>
  );
}

export default App;
