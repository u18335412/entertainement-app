/* eslint-disable @next/next/no-img-element */
const ShowDetails = ({ year, title, category, rating }) => {
  return (
    <div className="absolute z-50 flex left-[1.5rem] bottom-[1.5rem] flex-col">
      <p className="text-sm text-white/[.75] font-light flex gap-x-2 items-center">
        <span>{year}</span>
        <span className="w-[3px] rounded-full h-[3px] bg-white/[.75]"></span>
        <span className="flex items-center gap-x-[6px]">
          {category === "Movie" ? (
            <img
              src="/assets/icon-category-movie.svg"
              className="w-3 h-3"
              alt="movie icon"
            />
          ) : (
            <img
              src="/assets/icon-category-tv.svg"
              className="w-3 h-3"
              alt="tv icon"
            />
          )}
          {category}
        </span>
        <span className="w-[3px] rounded-full h-[3px] bg-white/[.75]"></span>
        <span>{rating}</span>
      </p>
      <p className=" text-[1.5rem]">{title}</p>
    </div>
  );
};

const Thumbnail = ({
  isTrending,
  thumbnail: {
    trending: { large },
  },
  title,
  year,
  rating,
  category,
}) => {
  return (
    <>
      <div
        className={`${
          !isTrending
            ? "w-[15.938rem] h-[10.875rem]"
            : "min-w-[29.375rem] min-h-[14.375rem]"
        } justify-center items-center flex group relative overflow-hidden  rounded-lg cursor-pointer `}
      >
        <img
          className="object-cover w-full h-full transition-opacity group-hover:opacity-50"
          src={large}
          alt={title}
        />
        <button className="flex absolute gap-x-[1.2rem] w-[7.313rem] opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 items-center transition-all rounded-[28.5px] h-fit bg-white/[.25] p-[.57rem] text-base z-50">
          <img src="/assets/icon-play.svg" alt="play icon" />
          <span>Play</span>
        </button>
        <button className="absolute group top-4 right-4 bg-Dark-Blue/50 p-[.63rem] rounded-full overflow-hidden hover:bg-white transition-colors">
          <span
            aria-hidden="true"
            className="absolute inset-0 z-50 w-full h-full peer"
          ></span>
          <img
            src="/assets/icon-bookmark-empty.svg"
            alt="bookmark icon"
            className="top-0 right-0 peer-hover:invert"
          />
        </button>
        {isTrending && (
          <ShowDetails
            year={year}
            title={title}
            category={category}
            rating={rating}
          />
        )}
      </div>
      
    </>
  );
};

export default Thumbnail;
