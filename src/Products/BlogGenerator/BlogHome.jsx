import React from 'react'
import { BlogForm } from './BlogForm'
import { Outlines } from './Outlines'

export const BlogHome = () => {
  return (
    <main className="container mx-auto py-4">
      <div className="flex flex-col lg:flex-row my-[50px] gap-10">
        <div className="lg:w-[800px] p-4">
          <BlogForm />
        </div>
        <div className="lg:w-1/3 p-4 overflow-y-auto" style={{ maxHeight: '750px' }}>
          <Outlines />
        </div>
      </div>
    </main>
  )
}
