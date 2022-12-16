import React from 'react';
import styled, {css} from 'styled-components';
import axios from 'axios';
import {createBrowserRouter} from 'react-router-dom';

const router = createBrowserRouter()


const Main = styled.main`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

const Store = styled.div`
  display: flex;
  justify-content: space-around;
    width: 90%;
    height: 80%;
    background-color: #A2BCFE;
`
const Menubar = styled.div`
  text-decoration: no;
`

const MonsterProfile = styled.div`
    background-color: #85A6FC ;
`

const MonsterImage = styled.img`
      width: 15rem;
    height: 15rem;
`


export default function Monster() {
  return (
    <>
    <button onClick={async () => {
              axios
              .get('https://pokeapi.co/api/v2/pokemon/ditto')
              .then((res) => console.log(res))
            }}>
      dd
    </button>
    <Main>
      <Store>
        <Menubar>
          <li>상점</li>
          <li>도감</li>
          <li>내 아이템</li>
          <div>리스트

          </div>
        </Menubar>

        <MonsterProfile>
          <MonsterImage src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/132.png">
          </MonsterImage>
        </MonsterProfile>

                    
      </Store>
    </Main>



    </>
  );
}
