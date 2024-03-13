import { useEffect, useState } from "react";
import {MENU_API} from "../utils/constants";
import {useParams} from "react-router-dom";

const useRestaurantMenu = () => {

  const {id} = useParams();

  const [resInfo, setResInfo] = useState(null)

  useEffect(() => {
  fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_API + id);

    const json = await data.json();
    setResInfo(json.data);
  };

  return resInfo;

}

export default useRestaurantMenu;
