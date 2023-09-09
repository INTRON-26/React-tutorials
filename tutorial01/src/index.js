import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const BookList = () => {
  return <section>
    <Book/>
    <Book/>
    <Book/>
    <Book/>
    <Book/>
  </section>
}

const Book = () =>{
  return <article>
    <Image/>
    <Title/>
    <Author/>
  </article>
}

const Image = () => <img src="https://m.media-amazon.com/images/I/71wI-F8nkiS._AC_UY218_.jpg" alt="There is nothing to show here."></img>
const Title = () => <h1>Title</h1>
const Author = () => {
  return <h4>Author</h4>
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList/>);