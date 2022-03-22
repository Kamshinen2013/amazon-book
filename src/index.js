
import { Children } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { books } from './books';
import  Book  from './Book';

function BookList() {
  return (
    <section className='booklist'> 
      {books.map((book)=>{
        const {img, title, author } = book; 
        //you can destructure it this way or leave it and use {book.img} {book.title}
        return (
          <div key={book.id}>
            <Book img = {img} title={title} author={author}/>
          </div>
        )
      })}
      {/* <Book img={firstBook.img} title= {firstBook.title.toUpperCase()} author={firstBook.author}>
        <p>
        Atlas of the Heart draws on this research, 
        as well as on Brown’s singular skills as a storyteller, 
        to show us how accurately naming 
        an experience doesn’t give the experience more power—
        it gives us the power of understanding, meaning, and choice.
 
           </p>
      </Book>
      <Book img={secondBook.img} title= {secondBook.title.toUpperCase()} author={secondBook.author}/>
      <Book number={2+6}/>
      <Book /> */}
    </section>
  )
}


ReactDOM.render(<BookList />, document.getElementById('root'));
