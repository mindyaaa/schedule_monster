import React from 'react';
import styled, {css} from 'styled-components';
import axios from 'axios';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Items from './pages/Items';
import MyItems from './pages/MyItems';
import CharactersList from './pages/CharactersList';
import Root from './pages/Root';

const router = createBrowserRouter([
  {
    path:'/',
    element: <h1>메인페ㅇㅣ지</h1>
},
  {
    path:'/store',
    element: <Root />,
    errorElement : <p>페이지를 찾을 수 없습니다😭</p>,
    children: [
      {index : true, element : <Items></Items>},
      {path : '/store/characters', element:<CharactersList></CharactersList>},
      {path : '/store/myitems', element:<MyItems></MyItems>}
    ]
  }

])


export default function Monster() {
  return (
    <>
      <RouterProvider router={router}>
      </RouterProvider>
    </>
  );
}
