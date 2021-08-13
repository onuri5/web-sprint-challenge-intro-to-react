// Write your Character component here
import React from 'react';
import styled from 'styled-components'


const ContainerDiv = styled.div `
    display: flex;
    justify-content: center;
    align-content: flex-start;
    background: url('https://mcdn.wallpapersafari.com/medium/81/95/Z7D2q6.jpg');
    width: 30%;
    padding: 10px;
    margin: 0 auto;
    border-radius: 90px;
`

const CharacterDiv = styled.div `
    margin: 20px;
    color: ${pr => pr.theme.primaryColor};
    text-shadow: 0px 1px yellow;
`

const CharacterInfo = styled.div `
    background-color: ${pr => pr.theme.white};
    font-size: ${pr => pr.theme.fontSize};
    padding: 10px;
    margin: 5px;
    border-radius: 40px;
    text-align: left;

`

const Character = props => {
    
    return (
        <ContainerDiv>
            <div>{
                props.characters !== null ? 
                    props.characters.map((item, index) => {
                    return <div>
                                <CharacterDiv key={index}><h1>{item.name}</h1></CharacterDiv>
                                    <CharacterInfo>
                                        <p>name: {item.name}</p> 
                                        <p>height: {item.height} centimeters</p> 
                                        <p>weight: {item.mass} kilos</p>
                                        <p>hair color: {item.hair_color}</p>
                                        <p>skin color: {item.skin_color}</p>
                                        <p>birth year: {item.birth_year}</p>
                                        <p>gender: {item.gender}</p>
                                    </CharacterInfo>
                            </div>})     
                    :  
                ''}
            </div>
        </ContainerDiv>
    )
}

export default Character;