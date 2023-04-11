import Input from "../../Input";
import { useLocation, useHistory } from "react-router-dom";
import { Wrapper } from "./styled";
import searchQueryParamName from "../searchQueryParamName";

const Search = () => {

    const location = useLocation();
    const query = (new URLSearchParams(location.search).get(searchQueryParamName))
    const history = useHistory();

    const onInputChange = ({ target }) => {
        const searchParams = new URLSearchParams(location.search);

        if (target.value.trim() === "") {
            searchParams.delete(searchQueryParamName);
        } else {
            searchParams.set(searchQueryParamName, target.value);
        }
        history.push(`${location.pathname}?${searchParams.toString()}`);
    };

    return (
        <Wrapper>
            <Input
                placeholder="Filtruj zadania"
                value={query || ""}
                onChange={onInputChange}
            >
            </Input>
        </Wrapper>


    )
}
export default Search;