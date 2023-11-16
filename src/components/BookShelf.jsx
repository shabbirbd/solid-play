import { createSignal } from "solid-js";
import AddBook from "./AddBook";
import BookList from "./BookList";

const initialBooks = [
    { title: "Code Complete", author: "Steve McConnell" },
    { title: "The Hobbit", author: "J.R.R. Tolkien" },
    { title: "Living a Feminist Life", author: "Sarah Ahmed" },
  ];

const BookShelf = () => {
    
    

    const [books, setBooks] = createSignal(initialBooks);


    return (
        <div class="flex flex-col items-center justify-center max-w-6xl w-full space-y-5 " >
            <h2 class="font-semibold text-3xl ">BookShelf</h2>
            <BookList books={books()}/>
            <AddBook setBooks={setBooks}/>
        </div>
    )
}

export default BookShelf;