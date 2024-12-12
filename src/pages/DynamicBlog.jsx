import React from 'react'
import Mainlayout from '../layouts/Mainlayout'
import { useLocation, useParams } from 'react-router-dom'
import useHelpers from '../utils/useHelpers'
export default function DynamicBlog() {
    const {blogId,blogComment} = useParams();
    console.log(blogId ,blogComment);
  const qparams =useHelpers()
    
  return (
    <Mainlayout>DynamicBlog</Mainlayout>
  )
}
