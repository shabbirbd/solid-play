import { createSignal } from "solid-js";

const emptyBook = {title: "", author: ""}

const AddBook = (props) => {
    const [newBook, setNewBook] = createSignal(emptyBook)

    const addBook = (event)=>{
        event.preventDefault();
        props.setBooks((books)=>[...books, newBook()]);
        setNewBook(emptyBook);
    }


    return (
        <form class="flex flex-col items-center justify-center space-y-3 border border-neutral-200 p-5 rounded-xl shadow-xl">
            <div class="space-x-3">
                <label for="title">Book name:</label>
                <input id="title" class="bg-transparent border border-sky-2000 rounded-md" onInput={(e)=>{
                    setNewBook({...newBook(), title: e.currentTarget.value})
                }}/>
            </div>
            <div class="space-x-3">
                <label for="author">Author:</label>
                <input id="author" class="bg-transparent border border-sky-2000 rounded-md" onInput={(e)=>{
                    setNewBook({...newBook(), author: e.currentTarget.value})
                }}/>
            </div>
            <button type="submit" onClick={addBook} class="bg-neutral-800 px-5 py-2 text-neutral-200 rounded-2xl shadow-xl">Add book</button>
        </form>
    ) 
}

export default AddBook;