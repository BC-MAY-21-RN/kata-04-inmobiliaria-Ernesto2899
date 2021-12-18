import React from 'react';
import {Container, Photo, Box, Box2, Imgback, Nombre, Icons, Direccion} from "./src/styled.js";
import List from "./src/list.json";
import { View, Text, FlatList} from "react-native";


const Card = ({name, address, rooms, bathrooms, feets, price, ratings, img  }) => {
  return (
  <Box>
    <Imgback source={{uri:img}}>
      <Photo source={require("./src/images/star.png")} />
      <Text>{ratings}</Text>
    </Imgback>
    <Box2>
      <Nombre>{name}</Nombre>
      <Direccion>{address}</Direccion>
      <Icons>
        <Text>{rooms}</Text>
        <Text>{bathrooms}</Text>
        <Text>{feets}</Text>
      </Icons>
      <Text>{price}</Text>
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