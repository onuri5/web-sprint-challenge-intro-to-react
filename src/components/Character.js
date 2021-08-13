// Write your Character component here
import React from 'react';
import styled from 'styled-components'

const ContainerDiv = styled.div `
    background-color: ${pr => pr.theme.white};
    padding: 10px;
    width: 30%;
    border-radius: 90px;
    display: flex;
    justify-content: center;
    align-content: flex-start;
    margin: 0 auto;
    color: ${pr => pr.theme.primaryColor};
    background: url('https://mcdn.wallpapersafari.com/medium/81/95/Z7D2q6.jpg');
`

const CharacterDiv = styled.div `
    margin: 20px;
    text-shadow: 0px 1px yellow;
`

const DetailsButton = styled.button `
   color: ${pr => pr.theme.primaryColor};
   background-color: black;
`

const Character = props => {
    return (
        <ContainerDiv>

        <div>{
            props.characters !== null ? 
                props.characters.map((item, index) => {
                return <div>
                            <CharacterDiv key={index}>{item.name}</CharacterDiv>
                            <DetailsButton>Details</DetailsButton>
                        </div>})  
            :   
                ''}
        </div>


        </ContainerDiv>
    )
}

export default Character;