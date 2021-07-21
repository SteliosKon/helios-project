import React from 'react'
import Image from 'next/image'

const index = () => {
  return (
    <>
      <div style={{ margin: '10px', position: 'absolute' }}>
        <Image src='/logo.jpg' alt='Logo' width={50} height={50} />
      </div>

      <div
        style={{
          textAlign: 'center',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          flexDirection: 'column',
          background: 'lightyellow',
        }}
      >
        <h1>Coming Soon</h1>
        <h3>Site Under Construction</h3>
        <Image src='/logo.jpg' alt='Logo' width={50} height={50} />
      </div>
    </>
  )
}

export default index
