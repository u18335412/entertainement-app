import RegularThumbnail from "/src/components/shared/regular-thumbnail";

import data from "/data.json";
const Recommended = () => {
  return (
    <div className="mt-10">
      <h2 className=" text-lg font-light">Recommended for you</h2>
      <div className="flex flex-wrap mt-8 gap-x-[2.5em] justify-between gap-y-8">
        {data.map((item) => { 
          if (!item.isTrending)
            return <RegularThumbnail {...item} key={item.title} />;
        })}
      </div>
    </div>
  );
};

export default Recommended;
