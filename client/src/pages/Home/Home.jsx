import { Search } from "../../components/Search";
import { useGetVideosQuery } from "../../redux/features/api/apiSlice";
import Video from "./Video";

const Home = () => {
  const {data:videos,isLoading,isError}= useGetVideosQuery();
 
  return (
    <section className="pt-6 pb-20 min-h-[calc(100vh-175px)] max-w-7xl mx-auto">
      {/* category button and search */}
      <div className="flex flex-col sm:flex-row justify-between items-center mt-2 mb-5 gap-4">
        {/* category  */}
        <div className="flex gap-2">

          <button className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer">All</button>
          <button className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer">javaScript</button>
          <button className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer">React</button>
          <button className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer">Next js</button>
          <button className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer">Tailwind css</button>
        </div>
        <Search />
      </div>

      {/* video grid  */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-5 lg:px-0 min-h-[300px]">
      {videos?.length > 0 ? (videos.map((video) => <Video key={video.id} video={video} />)) : (<div>No videos found</div>)}
å
      </div>
    </section>
  )
}

export default Home