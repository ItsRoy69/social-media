import React, { useEffect } from 'react'
import './Posts.css'
import Post from '../post/Post'
import { useSelector, useDispatch } from "react-redux";
import { getTimelinePosts } from '../../actions/PostAction';



const Posts = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer.authData);
  const { posts, loading } = useSelector((state) => state.postReducer);
  useEffect(() => {
    dispatch(getTimelinePosts(user._id));
  }, []);

  return (
    <div className="Posts">
        {loading
          ? "Fetching posts...."
          :posts.map((post, id)=>{
            return <Post data={post} id={id}/>
        })}
    </div>
  )
}

export default Posts