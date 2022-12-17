import React from 'react';
import { Link } from 'react-router-dom';
import styled, {css} from 'styled-components';
import { Main } from './Style';

const NavMenu = styled.li`
    color: dodgerblue;
    margin-left: 1rem;
    text-decoration: none;
    text-decoration-line: none;
    list-style: none;
`

export default function Navbar() {
    return (
        <div>
            <Main>

            <Link style={{ textDecoration: 'none' }} to="/store">
                <NavMenu>Item</NavMenu>
            </Link> 

            <Link style={{ textDecoration: 'none' }} to="/store/characters">
                <NavMenu>Characters</NavMenu>
            </Link> 

            <Link style={{ textDecoration: 'none' }} to="/store/myitems">
                <NavMenu>MyItems</NavMenu>
            </Link> 

            </Main>

        </div>
    );
}

