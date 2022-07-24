import axios from "axios";
import React, { useEffect, useState } from "react";
import useProtectedPage from "../../Hooks/useProtectedPage";
import { BASE_URL } from "../../Constants/url";
import {
  BoxInputSearch,
  CardRestaurant,
  ContainerFeed,
  InputSearch,
  Menu,
  MenuItem,
} from "./styled";
import CardRestaurants from "../../Components/CardRestaurants/CardRestaurants";
import CardHeader from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Order from "../../Order/Order";

const Feed = () => {
  useProtectedPage();
  const [restaurants, setRestaurants] = useState([]);
  const [categoryRestaurant, setCategoryRestaurant] = useState([]);
  const [valueCategory, setValueCategory] = useState("");

  const [inputText, setInputText] = useState("");

  const getRestaurants = () => {
    axios
      .get(`${BASE_URL}/restaurants`, {
        headers: {
          auth: localStorage.getItem("token"),
        },
      })
      .then((res) => {
      
        setRestaurants(res.data.restaurants);
        filterCategory(res.data.restaurants);
      })
      .catch((err) => {
        console.log(err.data);
      });
  };
  const filterCategory = (restaurants) => {
    const arrayAux = [];
    restaurants &&
      restaurants.map((res) => {
        arrayAux.push(res.category);
      });

    const takeOutRepeat = [...new Set(arrayAux)];
    const changeObjectArray = []
    takeOutRepeat.map((category)=>{
      const insertObj = {category,select:false}
      changeObjectArray.push(insertObj)
    })
    setCategoryRestaurant(changeObjectArray);
  };

  useEffect(() => {
    getRestaurants();
  }, []);

  const filterRestaurant = restaurants
    .filter((restaurant) =>
      inputText
        ? restaurant.name.toLowerCase().includes(inputText.toLowerCase())
        : true
    )
    .filter((restaurant) =>
      valueCategory
        ? restaurant.category
            .toLowerCase()
            .includes(valueCategory.toLocaleLowerCase())
        : true
    )
    .map((restaurant) => {
      return <CardRestaurants restaurant={restaurant} />;
    });

    const changeCategory = (category)=>{
      setValueCategory(category)

      const result = categoryRestaurant.map((cat)=>{
        if(cat.category === category){
          return {
            ...cat,
            select:true
          }
        

        }else{
          return{
            ...cat,
            select:false
          }
        }
       

      })
      setCategoryRestaurant(result)

    }

    

  return (
    <ContainerFeed>

      <CardHeader title={"IFuture"} />
      <CardRestaurant>
        <BoxInputSearch>
          <InputSearch
            value={inputText}
            onChange={(event) => setInputText(event.target.value)}
          />
        </BoxInputSearch>

        <Menu>
          <MenuItem select={false} onClick={() => setValueCategory("")}>
            Todos
          </MenuItem>
          {categoryRestaurant.map((category) => {
            
            return (
              <MenuItem
                select={category.select}
                onClick={() => changeCategory(category.category)}
              >
                {category.category}
              </MenuItem>
            );
          })}
        </Menu>

        {filterRestaurant}
      </CardRestaurant>
      <Footer/>
      
    </ContainerFeed>
  );
};

export default Feed;
