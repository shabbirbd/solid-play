import { plays } from "../utilities/plays";

const Home = () => {
    return (
        <div>
            <div class='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 border-2 border-red-300'>
              <For each={plays}>
                {
                  (play)=>(
                    <div class='relative border-2 border-green-500 shadow hover:shadow-xl duration-300 p-10 rounded-xl bg-violet-300 text-center'>
                        <h2 class="text-2xl font-semibold mb-6 text-slate-800" >{play.title}</h2>
                        <a href={play.link} class="px-6 border border-slate-500 shadow-xl rounded-xl hover:bg-slate-600 duration-300 hover:text-white py-2 hover:-top-2">View</a>
                    </div>
                  )
                }
              </For>
            </div>
        </div>
    );
};

export default Home;