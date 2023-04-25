import styled from "styled-components";
import { NavLink } from "react-router-dom"

const activeClassName = "active";

export const StyledNav = styled.nav`
    display: flex;
    flex-direction: column;
    text-align: center;   
    background-color: teal;
    color: white;
    width: 100%;
    height: 50px;
`;

export const StyledLi = styled.li`
    display: inline;
`;

export const StyledNavLink = styled(NavLink)`
&.${activeClassName}{
    color: white;
    font-weight: bold;
    text-decoration: none !important;
}
    background: #008080;
	color: ${({ theme }) => theme.color.white};
    text-decoration: none !important;
	height: 45px;
	padding-left: 18px;
	border-radius: 10px;
    `;