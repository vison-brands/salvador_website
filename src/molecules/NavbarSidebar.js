
// Imports
import React from 'react';
import {NavLink} from 'react-router-dom';
import styled  from 'styled-components'


const StyledNavLink  = styled(NavLink)`
    color: black;
    font-family: 'Oswald', sans-serif;
    font-weight: normal;
    font-size: 1.1rem;
    text-decoration: none;
    :hover{
        color:rgb(255, 0, 12);
    }
    `;

const StyledUl = styled.ul`
    list-style: none;
`
const StyledLi  = styled.li`
text-decoration: none;
    .active {
    color:rgb(255, 0, 12);
    }
`;

// Body
export default function Navbar () {
    return (
        <div>
            <StyledUl>
                <StyledLi>
                    <StyledNavLink className= {({ isActive }) => (isActive ? 'active' : "")} to='/'>
                        HOME
                    </StyledNavLink>
                </StyledLi>
                <StyledLi>
                    <StyledNavLink to='/Bio'>
                        BIO
                    </StyledNavLink>
                </StyledLi>
                <StyledLi>
                    <StyledNavLink className= {({ isActive }) => (isActive ? 'active' : "")} to='/Music'>
                        MUSIC
                    </StyledNavLink>
                </StyledLi>
                <StyledLi>
                    <StyledNavLink className= {({ isActive }) => (isActive ? 'active' : "")} to='/Dates'>
                        DATES
                    </StyledNavLink>
                </StyledLi>
                <StyledLi>
                    <StyledNavLink className= {({ isActive }) => (isActive ? 'active' : "")} to='/Shop'>
                        SHOP
                    </StyledNavLink>
                </StyledLi>
                <StyledLi>
                    <StyledNavLink className= {({ isActive }) => (isActive ? 'active' : "")} to='/Newsletter'>
                        NEWSLETTER
                    </StyledNavLink>
                </StyledLi>

            </StyledUl>
        </div>
    )
}