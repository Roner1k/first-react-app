import React from "react";
import './app-header.css'
// import styled from 'styled-components'

// const Header = styled.div`
//  display:flex;
//  align-items:flex-end;
//  justify-content:space-between;
//   h1{
//  font-size:26px;
//  color: ${props => props.colored ? 'red' : 'black'};
//   :hover{
//   color:blue;
//   }
//  }
// `
const AppHeader = ({liked,allPosts}) => {
    return (
        <div className='app-header d-flex' >
            <h1>Nikolay Prosto</h1>
            <h2>{allPosts} записей, и {liked} понравилось</h2>
        </div>
    )
}
export default AppHeader;