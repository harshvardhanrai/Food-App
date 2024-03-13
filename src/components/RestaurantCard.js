import {CDN_URL} from "../utils/constants";

const RestaurantCard = ({name, area, cuisines,costForTwoString, lastMileTravelString, cloudinaryImageId, avgRating}) => {

  return (
    <div className='card w-[18vw] bg-zinc-50 shadow-lg hover:scale-105 px-1 '>

    <img src= {CDN_URL  + cloudinaryImageId} />
    <h3 className="mt-4 font-semibold text-lg">{name}</h3><br />
    <h5 className="h-10">{cuisines.join(", ")}</h5>
    <span className="flex items-start">
        <h4 className="py-2 font-semibold"
          
            {...avgRating < 4.2 ? "text-red" : ""}
          
        >

          {avgRating}
        </h4>
        <h4 className="text-black font-semibold">{costForTwoString}</h4>
      </span>
    </div>
  )
}

export default RestaurantCard