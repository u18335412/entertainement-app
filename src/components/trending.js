import Thumbnail from "./shared/thumbnail";
import data from "/data.json";
import ScrollContainer from "react-indiana-drag-scroll";

const TrendingComponent = () => {
  return (
    <div className="w-full mt-[2.13rem]">
      <h2 className="text-lg font-light">Trending</h2>
      <ScrollContainer className="mt-[1.57rem] flex flex-row flex-nowrap gap-x-[2.5rem] w-full h-full">
        {data.map((item) => {
          {
            if (item.isTrending)
              return <Thumbnail key={item.title} {...item} />;
          }
        })}
      </ScrollContainer>
    </div>
  );
};
export default TrendingComponent;
