import { useEffect, useState } from "react"
import RestaurantCard from "./RestaurantCard"
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

function filterData(searchText, listOfRestaurant) {
  const filteredData = listOfRestaurant.filter((res) => 
  res.info.name.toLowerCase().includes(searchText.toLowerCase())
  )
  return filteredData;
} 

const Body = () => {

  const [searchText, setSearchText] = useState("");
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [fileteredRestaurant, setFilteredRestaurant] = useState([]);


  console.log(listOfRestaurant);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.3410364&lng=77.7171642&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    const json_data = await data.json();

    setListOfRestaurant(json_data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
      ?.restaurants);
      setFilteredRestaurant(json_data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants);
  };

  const onlineStatus = useOnlineStatus();

  if(onlineStatus === false){
    return(
      <h1>
        Looks like you're offline!! Please check your internet connection
      </h1>
    )
  }

  if (listOfRestaurant.length === 0) {
    return <Shimmer />
  };
  

  return (
    <div className='body'>
      
      <div className="search-bar items-center justify-center mt-7">
        <input className="search-input w-[40vw] bg-zinc-100 h-[3vw] ml-[30%] px-52 mr-6 rounded-sm" type="text" 
        value={searchText} 
        placeholder="Search a restaurant" 
        onChange={(e) => setSearchText(e.target.value)} />

        <button className="search-btn1 px-6 py-2 rounded-sm bg-green-400" onClick={() => {
          const data = filterData(searchText, listOfRestaurant)

          setFilteredRestaurant(data);
        }}>
          Search</button>
      </div>
      <div className="top-res w-[15vw] h-[5vh] ml-[6%] mt-8 bg-yellow-300 px-7 py-2 rounded-lg">
        <button className="search-btn" onClick={()=> {
          const filteredList = listOfRestaurant.filter((res) => res.info.avgRating > 4.4);
          setFilteredRestaurant(filteredList);
        }} >
          Top Rated Restaurants
          </button>
      </div>
      
      <div className="res-container flex items-center justify-center flex-wrap gap-16 mt-16">
      {fileteredRestaurant.map((restaurant, index) => {
        return (
          <Link style={{ textDecoration: 'none' }}><RestaurantCard {...restaurant.info} key={index }/></Link>
        )
      })}
    </div>
    </div>
  )
}

export default Body