import React from 'react'
import Book from "./Book";


function Home() {
  return (
    <>
     <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        <Book
          title="Math"
          price={200}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM5feGAGEJ3DMLSCLG-xhp1Ku3AFU25b2zxg&s"
        />
        <Book
          title="Physics"
          price={250}
          image="https://m.media-amazon.com/images/I/51HnT14a1sL._SX342_SY445_FMwebp_.jpg"
        />
        <Book
          title="Chemistry"
          price={300}
          image="https://m.media-amazon.com/images/I/41x2hYMObeL._SX342_SY445_FMwebp_.jpg"
        />
      </div></>
  )
}

export default Home