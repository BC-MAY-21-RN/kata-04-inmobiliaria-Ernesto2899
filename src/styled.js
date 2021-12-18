import styled from 'styled-components/native';
import {View, Image, ImageBackground, Text} from 'react-native';

export const Container = styled.View `
    padding: 20px;
`;

export const Photo = styled.Image `
        width: 40px;
        height: 40px;
        alignItems: center;
`;

export const Box = styled.View`
    flex-direction: row;
    flex: 1;
    padding: 15px;
    background-color: #E5F9FE;
    margin-bottom: 20px;
    border-radius: 35px;
`;

export const Box2 = styled.View`
    flex-direction: column;
    flex: 1;
`;


export const Imgback = styled.ImageBackground`
        flex: 1;
        border-radius: 25px;
        overflow: hidden;
        margin-right: 10px;
`;

export const Nombre = styled.Text`
        font-size: 20px;
        color: black;
        fontWeight: bold;
`;

export const Icons = styled.View`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
`;

export const Direccion = styled.Text`
        font-size: 15px;
        color: gray;
`;