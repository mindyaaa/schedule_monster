import React from 'react';
import styled from 'styled-components';
import { Main, MonsterProfile, MonsterImage, ContentsBox, MonsterStatus, ItemList} from '../components/Style';





export default function Items() {
    return (
        <ContentsBox>
            <ItemList>
                상점 아이템
            </ItemList>

            <MonsterProfile>
                <MonsterImage>
                    <img style={{width:'15rem', height:"15rem"}} src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/132.png" />
                </MonsterImage>

                <MonsterStatus>
                    <ul>
                        <li>이름 : 메타몽</li>
                        <li>애정도 : ❤️ 200  </li>
                    </ul>
                </MonsterStatus>
            </MonsterProfile>
        </ContentsBox>
    );
}

