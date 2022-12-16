import React, { useState } from "react";
import { MoreVert } from "@mui/icons-material";
import { styled, Menu, MenuItem } from "@mui/material";

const MenuStyle = {
  background: "#233138",
};

const MenuOption = styled(MenuItem)`
  font-size: 14px;
  padding: 15px 60px 5px 24px;
  color: #d1d7db;

  &:hover {
    background: #111b21;
  }
`;

export default function HeaderMenu({ setOpenDrawer }) {
  const [openMenu, setOpenMenu] = useState(null);
  const open = Boolean(openMenu);
  
  const handleClose = () => {
    setOpenMenu(null);
  };

  const handleClick = (e) => {
    setOpenMenu(e.currentTarget);
  };

  return (
    <>
      <MoreVert onClick={handleClick} />

      <Menu
        anchorEl={openMenu}
        keepMounted
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        PaperProps={{ sx: MenuStyle }}
      >
        <MenuOption
          onClick={() => {
            handleClose();
            setOpenDrawer(true);
          }}
        >
          Profile
        </MenuOption>
      </Menu>
    </>
  );
}
