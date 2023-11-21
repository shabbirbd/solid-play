import { For, createSignal } from "solid-js";
import NameCard from "../components/NameCard";
import { data } from "../utilities/data";

const Pagination = () => {
    const [pages, setPages] = createSignal([1,2,3,4,5]) 

    const dataSet = data;
    
    return (
        <div class="border-2 border-red-300 w-11/12 p-10 flex flex-col items-center">
            <For each={dataSet}>
                {
                    (data)=>{
                        return(
                            <NameCard data={data}/>
                        )
                    }
                }
            </For>

            <div class="border-2 border-green-300 flex flex-row items-center justify-center w-full space-x-5">
                <button class="bg-neutral-300 px-3 rounded-md shadow-xl">Prev</button>
                <div class="flex flex-row space-x-3">
                    <For each={pages()}>
                        {
                            (page)=>{
                                return(
                                    <button class="bg-sky-200 px-5 rounded-md shadow-xl">{page}</button>
                                )
                            }
                        }
                    </For>
                </div>
                <button class="bg-neutral-300 px-3 rounded-md shadow-xl">Next</button>
            </div>
        </div>
    );
};

export default Pagination;