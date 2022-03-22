import React from 'react'

const Book = (props) => {
  const handleClick=()=>{
    alert("Thanks for Clicking me")
  }
  return (
  <article className='book' onClick={handleClick}> 
    <img src={props.img} />
    <h1> {props.title} </h1> 
    <h4>{props.author}</h4>
    {props.children}
    {/* <p>{props.job}</p>
    <p>{props.address}</p>
    <p>{props.number}</p> */}
  </article>
  )  
};

export default Book
