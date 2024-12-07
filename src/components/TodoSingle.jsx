import React from 'react'
import { Checkbox } from '@mantine/core'

export default function TodoSingle({title,status,setStatus}) {
    // console.log(title);
    
  return (<div className='flex'>
<Checkbox checked={status} onChange={()=>setStatus(status==true?false:true)}/>
    <div onClick={()=>setStatus(status==true?false:true)} className={status===true?`bg-red-500 w-[500px]`:`bg-yellow-600 w-[500px]`}> {title}</div>
  </div>
  )
}
