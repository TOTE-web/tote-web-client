import React from 'react'

const page = ({ params }: { params: any }) => {
  return (
    <div>
      hello from {params.id}
    </div>
  )
}

export default page
