


const BookList = (props) => {

    return (
        <ul class="border border-neutral-200 rounded-xl p-5 space-y-3 divide-y divide-neutral-200 shadow-xl">
            
            <For each={props.books}>
                {
                 (book)=>{
                    return (
                        <li class=" p-2 text-neutral-600">
                            {book.title}
                            <span class="text-sm font-base italic text-neutral-400">{` (${book.author})`}</span>
                        </li>
                    )
                 }
                }
            </For>
        </ul>
    )
}

export default BookList;