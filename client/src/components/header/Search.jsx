import { InputBase,Box,styled } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';


const SearchContainer = styled(Box)`
    background: white;
    width: 38%;
    border-radius: 2px;
    margin-left: 10px;
    display: flex;
    `;
const InputSearchBase = styled(InputBase)`
    width: 100%;
    padding-left: 20px;
    font-size:unset;`
;
const SearchIconWrapper = styled(Box)`
    color: blue;
    padding: 5px;
    display: flex;
    align-items: center;
    pointer: cursor;    
    background: #fff;
`;
    



const Search = () => {
    return (
        <SearchContainer>
            <InputBase
            placeholder="Search for Products,brands and more"
            />
            <SearchIconWrapper>
                <SearchIcon/>
            </SearchIconWrapper>
        </SearchContainer>
        
    )
}
export default Search;