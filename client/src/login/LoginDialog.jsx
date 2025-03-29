
import {Dialog,TextField,Box,Typography,Button,styled} from '@mui/material';


const Component=styled(Box)`
    height: 70vh;
    width: 90vh;
`;

const Image=styled(Box)`
    background: #2874f0;
    height: 100%;
    width: 40%;`;

const LoginDialog = ({open, setOpen}) => {
    const handleClose=()=>{
        setOpen(false);
    }
    return(
        <Dialog open={open} onClose={handleClose}>
            <Component>
                <Box style={{display:'flex'}}>
                    <Image>hello</Image>
                    <Box>
                        <TextField variant="standard" label="Enter Email/Mobile number" fullWidth/>
                        <TextField variant="standard" label="Enter Password" fullWidth/>
                        <Typography>By continuing, You Agree to Flipkart's terms of use and Privacy and Policy</Typography>
                        <Button>Login</Button>
                        <Typography>OR</Typography>
                        <Button>Request OTP</Button>
                        <Typography>New to Flipkart? Create an account</Typography>
                        <Typography>Use mobile number to login</Typography>

                    </Box>
                </Box>
            </Component>
        </Dialog>
    )
}
export default LoginDialog;