/* eslint-disable @next/next/no-img-element */
const Thumbnail = () => {
  return (
    <div className="w-[15.938rem] justify-center items-center flex group relative overflow-hidden h-[10.875rem] rounded-lg cursor-pointer">
      <img
        className="w-full transition-opacity group-hover:opacity-50 object-cover h-full"
        src="/assets/thumbnails/beyond-earth/regular/medium.jpg"
        alt="movie thumbnail"
      />
      <button className="flex absolute gap-x-[1.2rem] w-[7.313rem] opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 items-center transition-all rounded-[28.5px] h-fit bg-white/[.25] p-[.57rem] text-base z-50">
        <img src="/assets/icon-play.svg" alt="play icon" />
        <span>Play</span>
      </button>
      <buton
        onClick={() => {
          console.log("Hello world");
        }}
        className="absolute group top-4 right-4 bg-Dark-Blue/50 p-[.63rem] rounded-full overflow-hidden hover:bg-white transition-colors"
      >
        <span
          aria-hidden="true"
          className="w-full peer h-full z-50 absolute inset-0"
        ></span>
        <img
          src="/assets/icon-bookmark-empty.svg"
          alt="bookmark icon"
          className="top-0 right-0 peer-hover:invert"
        />
      </buton>
    </div>
  );
};

export default Thumbnail;
