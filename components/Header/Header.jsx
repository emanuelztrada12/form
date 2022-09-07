import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useQuery, gql, useApolloClient } from "@apollo/client";

import styles from "../../styles/Account.module.css";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import AppBar from "@mui/material/AppBar";

const GET_USERS = gql`
  query getUser {
    getUser {
      id
      nombre
      apellido
      email
      rols
    }
  }
`;

export default function Header({ children }) {
  const { data, loading, error } = useQuery(GET_USERS, {
    fetchPolicy: "no-cache"
  });

  const router = useRouter();
  const [anchorElUser, setAnchorElUser] = useState(null);

  if (loading) return null;

  const { nombre, apellido, rols, email } = data.getUser || {};

  function stringAvatar(name) {
    return {
      children: `${nombre?.split(" ")[0][0].toUpperCase()}${apellido
        ?.split(" ")[0][0]
        .toUpperCase()}`,
    };
  }

  const cerrarSesion = async () => {
    await localStorage.clear()
    router.push("/LoginPage");
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Golden
          </Typography>
          <p className={styles.userName}>
            {nombre} {apellido} {rols}
          </p>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Opciones">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar {...stringAvatar()} sx={{ bgcolor: "green" }}></Avatar>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleCloseUserMenu}>
                <Button onClick={cerrarSesion}>Cerrar Sesion</Button>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}