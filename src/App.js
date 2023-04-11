import {Switch, Route, HashRouter, Redirect } from "react-router-dom"
import Author from "./features/author/Author";
import TasksPage from "./features/tasks/index";
import TaskPage from "./features/tasks/TaskPage";
import {StyledLi, StyledNav, StyledNavLink } from "./features/styled";


const App = () => (
    <HashRouter>
        <StyledNav>
            <ul>
                <StyledLi>
                    <StyledNavLink to="/zadania">Zadania</StyledNavLink>
                </StyledLi>
                <StyledLi>
                    <StyledNavLink to="/author">O Autorze</StyledNavLink>
                </StyledLi>
            </ul>
            <Switch>
                <Route path="/zadania/:id">
                    <TaskPage />
                </Route>
                <Route path="/zadania">
                    <TasksPage />
                </Route>
                <Route path="/author">
                    <Author />
                </Route>
                <Route path="/">
                    <Redirect to="/zadania" />
                </Route>
            </Switch>
        </StyledNav>
    </HashRouter>
);

export default App;