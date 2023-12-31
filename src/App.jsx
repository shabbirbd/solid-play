
import { Route, Router, Routes } from '@solidjs/router';
import Playout from './components/Playout';
import Home from './pages/Home';
import BookShelf from './plays/BookShelf';
import Pagination from './plays/Pagination';

function App() {
  return (
    <>
      <div class="w-11/12 min-h-screen mx-auto  flex flex-col items-center  space-y-10 bg-neutral-100 border-2 border-green-400">
          <h2 class="text-4xl w-full text-center font-semibold text-neutral-700 border-b border-neutral-200 py-5 ">Solid Playground</h2>
            <Router>
              <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/bookshelf" element={<Playout play={<BookShelf/>}/>}/>
                <Route path="/pagination" element={<Playout play={<Pagination/>}/>}/>
              </Routes>
            </Router>
      </div>
    </>
  );
}

export default App;
