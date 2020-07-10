import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { BookContext } from '../contexts/BookContext';

const BookList = () => {

  const { books } = useContext(BookContext);
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  return (
    <div className='book-list' style={{ color: theme.syntax, background: theme.bg }}>
      <ul>
        { books.map(book => {
          return (
            <li key={ book.id } style={{ background: theme.ui }}>{ book.title }</li>
          )
        })}
      </ul>
    </div>
  );
}

export default BookList;

/*
class BookList extends Component {
    static contextType = ThemeContext; // consumes contextType
    render() { 
        const { isLightTheme, light, dark } = this.context;
        const theme = isLightTheme ? light : dark;
        return ( 
            <div className='book-list' style={{ background: theme.bg, color: theme.syntax}}>
                <ul>
                    <li style={{ background: theme.ui }}>the way of the kings</li>
                    <li style={{ background: theme.ui }}>the name of the wind</li>
                    <li style={{ background: theme.ui }}>the final empire</li>
                </ul>
            </div>
         );
    }
}

export default BookList;
 */

