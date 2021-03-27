import * as BooksAPI from '../../API/BooksAPI.js'
import  React, {useEffect, useState} from 'react';
import BookShelf from '../../shared/bookshelf/Bookshelf'
import { Link } from 'react-router-dom';


import './Home.css'

const Home = () =>
{
  
  const [books, setBooks] = useState([]);    

  useEffect(()=> {
    BooksAPI.getAll().then(books => setBooks(books));     
  }, []);


  function handelShelfChange(changedBook, shelf) {
    
    BooksAPI.update(changedBook, shelf).then(response => {

      console.log(response);

        var changedBooks = books.filter(book => book.id !== changedBook.id).concat(changedBook);

        setBooks(changedBooks);
    });
  }

  const shelfTypes = [
    { type: 'currentlyReading', title: 'Currently Reading' },
    { type: 'wantToRead', title: 'Want to Read' },
    { type: 'read', title: 'Read' }
  ];
  
    return (      
      <div className="list-books-content">
        <div>
        {books.length > 0 && shelfTypes.map((shelf, index) => {          
            const shelfBooks = books.filter(book => book.shelf === shelf.type);
            return <BookShelf   title={shelf.title} key={index} books={shelfBooks} shelfChange={handelShelfChange}/>
        })}         
        </div>
        <div className="open-search">
            <Link to="/search">Add a book</Link>
        </div>
      </div>
    );  
}

export default Home;
