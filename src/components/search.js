/* eslint-disable @next/next/no-img-element */
const SearchComponent = () => {
  return (
    <div className="flex mt-16 px-1 w-fit gap-x-[1.5rem] items-center ">
      <img
        src="/assets/icon-search.svg"
        className="object-cover pb-[0.875em] w-[1.5rem] min-h-[1.5rem]"
        alt="search icon"
      />
      <input
        type="text"
        className=" bg-transparent font-light text-[1.5rem] border-b caret-Red transition-opacity focus:border-opacity-100 border-opacity-0 border-Greyish-Blue  focus:outline-none pb-[0.875em] w-[34.375rem] "
        placeholder="Search for movies or TV series"
      />
    </div>
  );
};

export default SearchComponent;
