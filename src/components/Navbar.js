import React from 'react'
import "./Navbar.css"
import { AppBar, Button, Tab, Tabs, Toolbar, Typography} from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

function Navbar() {

    const menuarr = ['categories', 'Brand', 'nyka fashion', 'beauty advice']
    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.black, 0.15),
        '&:hover': {
          backgroundColor: alpha(theme.palette.common.black, 0.25),
        },
        marginLeft: 'auto',
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(1),
          width: 'auto',
        },
      }));
      
      const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }));
      
      const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
          padding: theme.spacing(1, 1, 1, 0),
          // vertical padding + font size from searchIcon
          paddingLeft: `calc(1em + ${theme.spacing(4)})`,
          transition: theme.transitions.create('width'),
          width: '100%',
          [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
              width: '20ch',
            },
          },
        },
      }));
      

    return (
        <div>
            <AppBar sx={{ backgroundColor: 'white' }}>
                <Toolbar>
                    <Typography sx={{ color: '#e80071' }}>
                        NYKAA By Ritesh Singh
                    </Typography>
                    <Tabs>
                        {menuarr.map((menu, i) => {
                            return <Tab key={i} label={menu} />

                        })}
                    </Tabs>
                    <Search sx={{marginLeft:'auto !important'}}>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                    <Button variant='contained' sx={{ backgroundColor: '#e80071',marginLeft:'2%' }} >Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar