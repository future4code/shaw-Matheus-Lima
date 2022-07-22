import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../Constants/url";
import { useParams } from "react-router-dom";
import { CardRestaurant, Category, ContainerRestaurant } from "./styled";
import {
  ContainerCardRestaurantes,
  ContainerRestaurantCard,
} from "../../Components/CardRestaurantDetail/styled";
import CardRestaurantsDetail from "../../Components/CardRestaurantDetail/CardRestaurantsDetail";
import CardProduct from "../../Components/CardProduct/CardProduct";
import { CardHeader } from "@mui/material";

const Restaurante = () => {
  const { restauranteId } = useParams();
  const [restaurant, setRestaurant] = useState({});
  const [categories, setCategories] = useState([]);
  console.log(restauranteId);
  const getRestaurant = () => {
    axios
      .get(`${BASE_URL}/restaurants/${restauranteId}`, {
        headers: {
          auth: window.localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res.data);
        setRestaurant(res.data.restaurant);
      })
      .catch((err) => {
        console.log(err.data);
      });
  };
  useEffect(() => {
    getRestaurant();
  }, []);

  useEffect(() => {
    if (restaurant.products) {
      const newCategories = [];
      for (const product of restaurant.products) {
        if (!newCategories.includes(product.categories)) {
          newCategories.push(product.category);
        }
      }
      setCategories(newCategories);
    }
  }, [restaurant]);
  return (
    <>
      <ContainerRestaurant>
        <CardHeader title={"Restaurante"}  />
        <CardRestaurant>
          <CardRestaurantsDetail restaurant={restaurant} />
          {restaurant.products &&
            categories.map((category) => {
              return (
                <div>
                  <Category>{category}</Category>
                  {restaurant.products
                    .filter((product) => {
                      return product.category === category;
                    })
                    .map((product) => {
                      return <CardProduct product={product} key={product.id} />;
                    })}
                </div>
              );
            })}
        </CardRestaurant>
      </ContainerRestaurant>
    </>
  );
};

export default Restaurante;
