import * as React from "react"
import { Box, FormControl, Grid, Typography, TextField } from '@mui/material'
import Cookies from "js-cookie";

export default function QR({ setIslogin }) {

    const [password, setPassword] = React.useState(null);

    const handlecheck = (e) => {
        setPassword(e);
        if (e?.length < 5) {
            return
        }
        if (e === '11122') {
            // console.log('success')
            setIslogin(true)
            Cookies.set("islogin", "true")
        }

    }

    return (
        <Box>
            <Grid container spacing={5}>
                <Grid item xs={12}>
                    <Typography variant='h4'>
                        <b>PASSWORD</b>
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Box>
                        <FormControl>
                            <TextField
                                onKeyPress={(ev) => { handlecheck(ev.target.value) }}
                                inputProps={{
                                    maxLength: 6,
                                    style: { textAlign: 'center', fontSize: 40, padding: 0, width: 200 }
                                }}
                                floatingLabelText="Password"
                                type="password"
                                sx={{
                                    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                                        borderColor: "blue",
                                        borderRadius: 10,
                                    },
                                }}
                            >
                            </TextField>
                        </FormControl>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}
