import styled from 'styled-components';

export const Main = styled.main`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    margin-left: 5rem;
`

export const ContentsBox = styled.div`
    background-color: aliceblue;
    border-radius: 1rem;
    height: 80vh;

    display: flex;
    justify-content: space-around;
    align-items: center;

    margin: auto 3rem;
    padding: 1rem;
`

export const ItemList = styled.div`
    background-color: white;
    border-radius: 1rem;
    padding: 1rem;

    width: 50%;
    height: 80%;
`

export const MonsterProfile = styled.div`
    background-color: white;
    width: 40%;
    height: 80%;
    border-radius: 1rem;
    padding: 1rem;
    margin-left: 1rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const MonsterImage = styled.div`
    width: 15rem;
    height: 15rem;
    background-color: #85A6FC;
    border-radius: 50%;
    margin-bottom: 1.5rem;
`

export const MonsterStatus = styled.div`
    background-color: #85A6FC;
    width: 15rem;
    height: 10rem;
    border-radius: 1rem;
    padding: 1rem;
`

