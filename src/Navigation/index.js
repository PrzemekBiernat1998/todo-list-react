import { toAuthor, toTasks } from "../routes";
import { StyledLi, StyledNav, StyledNavLink } from "./styled";


const Navigation = () => (
    <StyledNav>
            <ul>
                <StyledLi>
                    <StyledNavLink to={toTasks()}>Zadania</StyledNavLink>
                </StyledLi>
                <StyledLi>
                    <StyledNavLink to={toAuthor()}>O Autorze</StyledNavLink>
                </StyledLi>
            </ul>
        </StyledNav>
);
export default Navigation;