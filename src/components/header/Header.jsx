import React from 'react';
import { NavLink } from 'react-router-dom';

import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import { HeaderBar } from './HeaderStyle';

function Header() {
  return (
    <HeaderBar>
      <TextField
        id="input-with-icon-textfield"
        label="Search"
        variant="outlined"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
      <div>
        <NavLink to="/">Home</NavLink>|<NavLink to="/about">About</NavLink>
      </div>
      <div>
        <AccountCircleIcon />
        <ShoppingCartIcon />
      </div>
    </HeaderBar>
  );
}

export default Header;
