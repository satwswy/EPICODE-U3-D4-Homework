import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import WarningSign from './components/WarningSign';
import MyBadge from './components/MyBadge';
import SingleBook from './components/SingleBook';
import bookArray from './data/scifi.json';
import BookList from './components/BookList';

function App() {
  return (
    <div>
      <WarningSign msg="hello"/>
      <MyBadge text="hello world" textColor="blue" />
      {/* <SingleBook book={bookArray[0]}/> */}
       <BookList books = {bookArray}/> 
    </div>
  );
}

export default App;
