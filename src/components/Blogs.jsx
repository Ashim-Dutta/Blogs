
import React, { useContext } from 'react'
import {AppContext} from "../context/AppContext"
import Spinner from "./Spinner";
import "./Blogs.css"
const Blogs = () => {

  const{posts,loading} = useContext(AppContext);
  return (
    <div>

    {
      loading ? (<Spinner />) :(
        posts.length ===0 ? (<div>
          <p>No posts Found</p>
        </div>) : (posts.map((post)=>(
          
          <div key={post.id}>

            <p className='title'>{post.title}</p>

            <p>
              By <span>{post.author} on <span>{post.category}</span></span>
            </p>

          <p>
            Posted on <span>{post.date}</span>
          </p>

          <p>{post.content}</p>

          <div>
            {post.tags.map((tag,index)=>{

              return <span key={index}>{`#${tag}`}</span>

            })}
          </div>

          </div>
        )))
      )
    }


    </div>
  )
}
export default Blogs;