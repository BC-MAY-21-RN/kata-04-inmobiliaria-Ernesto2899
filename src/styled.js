import styled from 'styled-components/native';
import {View, Image, ImageBackground, Text} from 'react-native';

export const Container = styled.View `
    padding: 15px;
`;

export const Photo = styled.Image `
        width: 15px;
        height: 15px;

`;

export const Box = styled.View`
        flex-direction: row;
        flex: 1;
        padding: 15px;
        background-color: #E5F9FE;
        margin-bottom: 20px;
        border-radius: 30px;
`;

export const Box2 = styled.View`
        flex-direction: column;
        flex: 1;
`;


export const Imgback = styled.ImageBackground`
        flex: 1;
        border-radius: 20px;
        overflow: hidden;
        margin-right: 10px;
        justify-content: flex-end;
        alignItems: center;
`;

export const Nombre = styled.Text`
        font-size: 20px;
        fontWeight: 400;
        color: black;
        
`;

export const Icons = styled.View`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
`;

export const Direccion = styled.Text`
        font-size: 15px;
        color: gray;
        fontWeight: 400;
`;

export const Money = styled.Text`
        fontWeight: bold;
        color: black;
        font-size: 16px;  
`;

export const Small = styled.Text`
        font-size: 14px;
        color: black;
        fontWeight: 900;
`;

export const Rango = styled.Text`
        fontWeight: bold;
        padding: 3px;
        borderRadius: 12px;
        backgroundColor: #F9E9AD; 
`;

export const Iconimg = styled.Image`
        justify-content: space-between;
        width: 22px;
        height: 22px;
`;

export const Vista = styled.View`
        margin-bottom: 10px;
        flex-wrap: wrap;
`;

export const Place = styled.Image`
        width: 18px;
        height: 18px;
`;

export const Down = styled.View`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        alignItems: center;
`;

