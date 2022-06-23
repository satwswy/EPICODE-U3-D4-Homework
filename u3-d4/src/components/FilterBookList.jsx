import BookList from "./BookList"
import SingleBook from "./SingleBook"

const FilterBookList = ({books, query}) => {
    return (
        <div>{books.filter((book) => {return book.title.toLowerCase().includes(query.toLowerCase())}).map((book)=>(<SingleBook book={book}/>))}</div>
    )
}
export default FilterBookList