import { Box, Paper, Grid, TextField, Button, Typography } from '@mui/material'
import { styled } from '@mui/styles'
import React from 'react'
import { useRef } from 'react'


const Item = styled(Paper)(() => ({
    width: 320,
    height: 420,
    borderRadius: 20,
    textAlign: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    display: 'flex',
    border: '1px solid blue',
}))

export default function Start() {

    let myTextField = useRef(null);

    return (
        <Box sx={{ w: '100%', justifyContent: 'center', display: 'flex' }}>
            <Item>
                <Box>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sx={{ w: '100%', justifyContent: 'center', display: 'flex' }}>
                            <img src='coperatlogo-02.png' width={100} />
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant='h5' fontWeight={'bold'}>
                                QR Code
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                inputRef={myTextField}
                                floatingLabelText="Password"
                                type="text"
                                inputProps={{
                                    readOnly: true,
                                }}
                                sx={{
                                    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                                        borderColor: "blue",
                                        borderRadius: 10,
                                    },
                                }}
                            >
                            </TextField>
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                onClick={() => {
                                    myTextField.current.focus()
                                }}
                                variant='outlined'
                                sx={{
                                    border: '1px solid blue',
                                    borderRadius: 10,
                                    width: "210px",
                                    height: '55px',
                                }}
                            >
                                START
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Item>
        </Box >
    )
}
