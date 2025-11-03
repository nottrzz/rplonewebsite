// import { useParams } from "react-router-dom";
// import Navbar from "./Navbar";
// import { albumsData, assets, songsData } from "../assets/assets";
// import { useContext } from "react";
// import { PlayerContext } from "../context/PlayerContext";

// const DisplayAlbum = () => {
//   const { id } = useParams();
//   const albumData = albumsData[id]
//   const {playWithId} = useContext(PlayerContext)
//   return (
//     <div>
//       <Navbar />
//       <div className="mt-10 flex gap-8 flex-col md:flex-row md:items-end ">
//         <img className="w-48 rounded sm:items-center" src={albumData.image} alt="" />
//         <div className="flex flex-col">
//           <p>Playlist</p>
//           <h2 className="text-5xl font-bold mb-4 md:text-7xl">{albumData.name}</h2>
//           <h4>{albumData.desc}</h4>
//           <p className="mt-1">
//             <img className="inline-block w-5" src={assets.spotify_logo} alt="" />
//             <b> Spotify </b>
//             <b>• 1,232,123 saves </b>
//             • <b>30 songs,</b>
//             <span className="text-[#a7a7a7]"> about 2hr 30 min</span>   
//           </p>
//         </div>
//       </div>
//       <div className="grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]">
//         <p><b className="mr-4">#</b>Title</p>
//         <p>Album</p>
//         <p className="hidden sm:block">Date Added</p>
//         <img className="m-auto w-4" src={assets.clock_icon} alt="" />
//       </div>
//       <hr />
//       {songsData.map((item, index) => (
//         <div onClick={() => playWithId(item.id)} key={item.id} className="grid grid-cols-3 sm:grid-cols-4 sm:p-0 gap-2 p-0 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer">
//           <div className="text-white text-sm md:text-[15px]">
//             <b className="mr-4 text-[#a7a7a7]">{index + 1}</b>
//             <img className="inline w-14 mb-5 mr-0 lg:mr-5" width={"250px"} src={item.image} alt={item.name} />
//             <div className="inline-block ">
//               <div>{item.name.slice(0, 20)}</div>
//               <div className="text-[#a7a7a7]">{item.desc.slice(0, 20)}</div>
//             </div>
//           </div>

//           {/* <div className="flex flex-wrap">
//             <div>{item.name.slice(0, 20)}</div>
//             <div className="text-[#a7a7a7]">{item.desc.slice(0, 20)}</div>
//           </div> */}

//           <p className="text-[15px]">{albumData.name}</p>
//           <p className="text-[15px] hidden sm:block">5 days ago</p>
//           <p className="text-[15px] text-center">{item.duration}</p>
//         </div>
//       ))}
//     </div>

//   );
// };

// export default DisplayAlbum;

// src/components/DisplayAlbum.jsx
import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import { albumsData, assets, songsData } from "../assets/assets";
import { useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";

const DisplayAlbum = () => {
  const { id } = useParams();
  const albumData = albumsData[id] || {
    name: "Unknown",
    desc: "",
    image: assets.placeholder_cover,
  };
  const { playWithId } = useContext(PlayerContext);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f2738] via-[#182d3f] to-[#0b0b0b] text-white">
      <Navbar />

      <div className="container mx-auto px-0 md:px-8 py-8">
        <div className="flex flex-col items-center text-center md:flex-row md:items-end md:justify-start md:text-left gap-6">
          <img
            src={albumData.image}
            alt={albumData.name}
            className="w-52 h-52 rounded-md object-cover shadow-lg mb-2 md:mb-0"
          />

          <div className="flex flex-col max-w-xl">
            <p className="text-sm text-[#9aa0a6] mb-1">Playlist</p>

            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              {albumData.name}
            </h1>

            <p className="text-[#9aa0a6] mt-2">
              {albumData.desc}
            </p>

            <div className="flex items-center justify-center md:justify-start gap-3 mt-4 text-sm text-[#cfd6da] flex-wrap">
              <img className="w-5 h-5" src={assets.spotify_logo} alt="spotify" />
              <span className="font-semibold">Spotify</span>
              <span>• 1,232,123 saves</span>
              <span>• 30 songs</span>
              <span className="text-[#9aa0a6]">• about 2hr 30 min</span>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <div className="container w-full mx-auto px-0 md:px-2">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 items-center text-[#a7a7a7] px-2 py-2">
              <div className="flex items-center gap-3">
                <b className="w-6">#</b>
                <span className="font-medium">Title</span>
              </div>

              <div className="hidden md:block">Album</div>
              <div className="hidden md:block">Date Added</div>

              <div className="flex justify-center md:justify-end">
                <img className="w-4" src={assets.clock_icon} alt="duration" />
              </div>
            </div>

            <hr className="border-t border-[#263238] mb-2" />

            <div className="space-y-1">
              {songsData.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => playWithId(item.id)}
                  className="w-full text-left grid grid-cols-2 md:grid-cols-4 gap-2 items-center px-2 py-3 rounded hover:bg-white/10 transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-2 min-w-0">
                    <div className="w-6 text-[#a7a7a7]">{index + 1}</div>

                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-14 h-14 rounded object-cover flex-shrink-0"
                    />

                    <div className="flex flex-col min-w-0">
                      <p className="text-white text-sm md:text-[15px] whitespace-normal break-words md:truncate">
                        {item.name}
                      </p>
                      <p className="text-[#a7a7a7] text-xs md:text-sm whitespace-normal break-words md:truncate">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  <div className="hidden md:block text-[#d0d7da]">
                    {albumData.name}
                  </div>

                  <div className="hidden md:block text-[#a7a7a7]">
                    5 days ago
                  </div>

                  <div className="flex justify-center md:justify-end text-[#d0d7da]">
                    {item.duration}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="h-28" />
    </div>
  );
};

export default DisplayAlbum;
