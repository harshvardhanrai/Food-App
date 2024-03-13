import Shimmer from "./Shimmer";
import {MENU_API} from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {

const resInfo = useRestaurantMenu();



if(resInfo === null) return <Shimmer />;

const {name, cuisines, avgRating, costForTwo} = resInfo?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants[1]?.info ;



  return (
    <div className="menu w-80 px-10 py-6 items-center justify-center bg-amber-200 ml-[50%] mt-[25%] rounded-sm -translate-x-[50%] -translate-y-[50%] ">
      <br />
      <h1 className="font-semibold text-lg">{name}</h1><br />
      <h3>{cuisines.join(", ")}</h3><br />
      <h4>{costForTwo}</h4>
      <p>{avgRating} Stars</p>
    </div>
  )
}

export default RestaurantMenu