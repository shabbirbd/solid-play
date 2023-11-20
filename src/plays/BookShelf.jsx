import { Show, createSignal } from "solid-js";
import AddBook from "../components/AddBook";
import BookList from "../components/BookList";

const initialBooks = [
    { title: "Code Complete", author: "Steve McConnell" },
    { title: "The Hobbit", author: "J.R.R. Tolkien" },
    { title: "Living a Feminist Life", author: "Sarah Ahmed" },
  ];

  

const BookShelf = () => {
    const [books, setBooks] = createSignal(initialBooks);
    const [showForm, setShowForm] = createSignal(false);

    const toggleForm = ()=> setShowForm(!showForm());

    return (
        <div class="flex flex-col items-center justify-center max-w-6xl w-full h-fulls space-y-5 border-2 border-red-300 py-6" >
            <h2 class="font-semibold text-3xl ">BookShelf</h2>
            <BookList books={books()}/>
            <Show when={showForm()} fallback={<button class="bg-neutral-800 px-5 py-2 text-neutral-200 rounded-2xl shadow-xl" onclick={toggleForm}>Add Books</button>} >
                <AddBook setBooks={setBooks}/>
                <button  class="bg-neutral-800 px-5 py-2 text-neutral-200 rounded-2xl shadow-xl" onclick={toggleForm}>Finish adding books</button>
            </Show>
        </div>
    )
}

export default BookShelf;