import React from 'react';
import axios from 'axios'
import { ContentsBox, CharacterContainer, CharacterBox } from '../components/StoreStyle';
import CharactersCard from '../components/CharactersCard';

export default function CharactersList() {
    return (
        <ContentsBox>
            <CharacterContainer>
                <CharacterBox></CharacterBox>
                <CharacterBox></CharacterBox>
                <CharacterBox></CharacterBox>
                <CharacterBox></CharacterBox>
                <CharacterBox></CharacterBox>
                <CharacterBox></CharacterBox>
                <CharacterBox></CharacterBox>
                <CharacterBox></CharacterBox>
                <CharacterBox></CharacterBox>
                <CharacterBox></CharacterBox>
                <CharacterBox></CharacterBox>
                <CharacterBox></CharacterBox>
                <CharacterBox></CharacterBox>
                <CharacterBox></CharacterBox>
            </CharacterContainer>
        </ContentsBox>
    );
}

