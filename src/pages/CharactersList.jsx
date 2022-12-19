import React, { useState } from 'react';
import axios from 'axios'
import { ContentsBox, CharacterContainer, CharacterBox } from '../components/StoreStyle';
import { useQuery } from '@tanstack/react-query';

export default function CharactersList() {

    const {isLoading, error, data} = useQuery(
        ['pokemon'], async () => {
            return axios.get('/pokemons/pokemon.json')
            .then((pokemon) => console.log(pokemon.data))
        }
    )
    
    return (
        <ContentsBox>
            <CharacterContainer>
                {isLoading &&
                <h1 style={{textAlign:'center', alignSelf:'center', margin: '0 auto'}}>Loading,,,</h1> }
                {error && <h1 style={{textAlign:'center', alignSelf:'center', margin: '0 auto'}}>Error 발생🤕</h1>}
                {data && <CharacterBox></CharacterBox>}
            </CharacterContainer>
        </ContentsBox>
    );
}

