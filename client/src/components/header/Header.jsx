import { AppBar, Toolbar, styled, Typography, Box } from "@mui/material";


const StyledHeader = styled(AppBar)`
    background: #2874f0;
    height: 55px;
`;

const Component = styled(Box)`
    margin-left: 12%;
    line-height: 0;
`;

const subHeading = styled(Typography)`
    font-size: 10px;
    font-style: italic;   
`;

const Header = () => {
    const logoURL= "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";
    return (
        <StyledHeader>
            <Toolbar>
                <Component>
                    <img 
                        src={logoURL}
                        alt="logo" 
                        style={{ width: 75 }} 
                    />
                    <Box>
                        <subHeading>Explore 
                            <Box component="span" style={{ color: '#ffe500' }}>Plus</Box>
                        </subHeading>
                    </Box>
                </Component>
            </Toolbar>
        </StyledHeader>
    );
}

export default Header;