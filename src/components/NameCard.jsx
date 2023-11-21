
const NameCard = ({data}) => {
    return (
        <div class="border border-neutral-300 w-[250px] flex flex-col items-center space-y-5 p-5 rounded-xl hover:scale-105 duration-300 shadow-xl transition-shadow">
            <img src={data.image} alt="shabbir" class="h-20 w-20 rounded-full" />
            <h1>{data.name}</h1>
            <a href={data.github} target="__blnck" class="block border border-sky-300 px-3 rounded-2xl shadow-xl">Github</a>
        </div>
    );
};

export default NameCard;