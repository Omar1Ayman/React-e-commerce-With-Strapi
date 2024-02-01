import React, { useState } from "react";
import MainHeader from "./MainHeader";
import Product from "./Product";
import { Box, Grid, Stack } from "@mui/material";
import { useGetproductByNameQuery } from "../../redux/product";

const Products = () => {
  const allProductsAPI = "products?populate=*";
  const allWomenProductsAPI =
    "products?populate=*&filters[category][$eq]=women";
  const allMenProductsAPI = "products?populate=*&filters[category][$eq]=men";
  const [myData, setMyData] = useState(allProductsAPI);

  const { data, error, isLoading } = useGetproductByNameQuery(myData);

  if (data) {
    return (
      <Box px={3} pb={10}>
        <MainHeader
          allProductsAPI={allProductsAPI}
          allMenProductsAPI={allMenProductsAPI}
          allWomenProductsAPI={allWomenProductsAPI}
          setMyData={setMyData}
        />
        <Grid container gap={2}>
          {data.data.map((item) => {
            return (
              <Product
                key={item.id}
                title={item.attributes.title}
                details={item.attributes.description}
                price={item.attributes.price}
                ratings={item.attributes.ratings}
                img={item.attributes.images.data[0].attributes["url"]}
              />
            );
          })}
        </Grid>
      </Box>
    );
  }
};

export default Products;
