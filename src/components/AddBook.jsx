import { For, Show, createResource, createSignal } from "solid-js";
import { feachBooks } from "../utilities/searchBooks";

const emptyBook = {title: "", author: ""}

const AddBook = (props) => {
    const [input, setInput] = createSignal("");
    const [query, setQuery] = createSignal("");

    const [data] = createResource(query, feachBooks);

    return (
        <div class="border border-neutral-200 p-5 rounded-xl shadow-xl">
            <form class="flex flex-col items-center justify-center space-y-3 ">
                <div class="space-x-3">
                    <label for="title">Search Books</label>
                    <input id="title" class="bg-transparent border border-sky-2000 rounded-md" value={input()} onInput={(e)=>{
                        setInput(e.currentTarget.value)
                    }}/>
                </div>
                <button type="submit" class="bg-neutral-800 px-5 py-2 text-neutral-200 rounded-2xl shadow-xl" 
                    onClick={(e)=>{
                        e.preventDefault();
                        setQuery(input());
                    }} >
                    Search
                </button>
            </form>

            <Show when={!data.loading} fallback={<>Searching...</>}>
                <ul>
                    <For each={data()}>
                        {(book)=>(
                            <li>
                                {book.title} by <span class="italic text-neutral-400">{book.author}</span> {" "}
                                <button class="px-3 py-1 rounded-xl shadow-xl border border-neutral-300" onclick={(e)=>{
                                    e.preventDefault();
                                    props.setBooks((books)=>[...books, book])
                                }}>
                                    Add
                                </button>
                            </li>
                        )}
                    </For>
                </ul>
            </Show>
        </div>
    ) 
}

export default AddBook;