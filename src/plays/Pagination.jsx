import { For, createEffect, createSignal } from "solid-js";
import NameCard from "../components/NameCard";
import { data } from "../utilities/data";

const Pagination = () => {
    const dataSet = data;
    const [paginated, setPaginated] = createSignal([])
    const [users, setUsers] = createSignal([]);
    const [page, setPage] = createSignal(1);

    const paginate = (data = [], perPage = 8)=>{
        const page = Math.ceil(data.length / perPage);
        
        const newData = Array.from({ length: page }, (_, index) => {
            const start = index * perPage;
            return data.slice(start, start + perPage);
          });
        return newData;
    }

    createEffect(()=>{
        setPaginated(paginate(dataSet, 8))
        setUsers(paginated()[page()])
    }, [paginated, page])

    const handleNext = ()=>{
        let nextPage = page() + 1;
        if(nextPage > paginated().length - 1){
            nextPage = 0
        }
        setPage(nextPage) 
    }

    const handlePrev = ()=>{
        let prevPage = page() - 1;
        if(prevPage < 0 ){
            prevPage = paginated().length - 1
        }
        setPage(prevPage)
    }

   
    
    return (
        <div class=" w-11/12 p-10 flex flex-col items-center">
            <h2 class="font-semibold text-3xl ">Pagination</h2>
            <div class="grid gap-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 my-10">
                <For each={users()}>
                    {
                        (data)=>{
                            return(
                                <NameCard data={data}/>
                            )
                        }
                    }
                </For>
            </div>

            <div class=" flex flex-row items-center justify-center w-full space-x-5">
                <button class="bg-neutral-300 px-3 rounded-md shadow-xl" onclick={handlePrev}>Prev</button>
                <div class="flex flex-row space-x-3">
                    <For each={paginated()}>
                        {
                            (item, index)=>{
                                return(
                                    <button class={`px-5 rounded-md shadow-xl ${index() === page() ? "bg-red-500" : "bg-sky-200" }`} onClick={()=>setPage(index)}>{index() + 1}</button>
                                )
                            }
                        }
                    </For>
                </div>
                <button class="bg-neutral-300 px-3 rounded-md shadow-xl" onClick={handleNext}>Next</button>
            </div>
        </div>
    );
};

export default Pagination;