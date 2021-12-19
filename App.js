import React from 'react';
import {Container, Photo, Vista, Box, Down, Box2, Imgback, Nombre, Place, Small, Icons, Direccion, Money, Rango, Iconimg} from "./src/styled.js";
import List from "./src/list.json";
import { View, Text, FlatList} from "react-native";


const Card = ({name, address, rooms, bathrooms, feets, price, ratings, img  }) => {
  return (
  <Box>
    <Imgback source={{uri:img}}>
      <Vista>
        <Rango> 
          <Photo source={require("./src/images/star.png")} /> {ratings}
        </Rango>
      </Vista>
    </Imgback>
    <Box2>
      <Nombre>{name}</Nombre>
      <Direccion><Place source={require("./src/images/placeholder.png")} />{address}</Direccion>
      <Icons>
        <Iconimg source={require("./src/images/bed.png")} />
        <Small>{rooms} </Small>
        <Iconimg source={require("./src/images/bath.png")} />
        <Small>{bathrooms}</Small>
        <Iconimg source={require("./src/images/length.png")} />
        <Small>{feets}</Small>
      </Icons>
      <Down>
      <Money>{price}</Money>
      <Photo source={require("./src/images/heart2.png")} />
      </Down>
    </Box2>
    
    
    
    
    
  </Box>
  ) 
}


const App = () => {

  const renderItem = ({item}) => {
    return (<Card {...item}/>
    )}

  return(
    <Container> 
     <FlatList
        data={List}
        renderItem={renderItem}
        keyExtractor={item => item.id}
     />
  
    </Container>
   
  );
};

export default App;