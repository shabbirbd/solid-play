
const Playout = ({play}) => {
    return (
        <div class='border-2 border-yellow-600 container mx-auto flex items-center space-y-10 justify-center relative'>
            <a href="/" class="absolute top-2 px-3 py-1 rounded-2xl shadow-md  border  border-slate-500 z-10">Back To Home</a>
            {play}
        </div>
    );
};

export default Playout;