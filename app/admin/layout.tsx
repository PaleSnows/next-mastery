import React, { ReactNode } from 'react'

interface Props {
    children:ReactNode
}

const AdminLayout = ({children}:Props) => {
  return (
    <div className='flex '>
        <aside className='bg-slate-700 p-5 mr-5'>Admin Sidebar</aside>
        <div className="">{children}</div>
    </div>
  )
}

export default AdminLayout