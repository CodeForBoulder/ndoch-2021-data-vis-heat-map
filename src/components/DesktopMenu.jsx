import React, { useCallback } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Check from "@mui/icons-material/Check";

import useDataSets from "../hooks/useDataSets";

const Desktop = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [{ data: dataSets, isLoading, error }, updateDataSets] = useDataSets();
  const numActiveDataSets = Object.values(dataSets).reduce((acc, dataSet) => {
    if (dataSet.isActive) {
      return acc + 1;
    }
    return acc;
  }, 0);

  const handleToggleDataSet = useCallback(
    (name) => {
      updateDataSets(name, {
        isActive: !dataSets[name].isActive,
      });
    },
    [dataSets, updateDataSets]
  );

  return (
    <Box width="100%">
      <Button
        id="basic-button"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Data Sets ({numActiveDataSets})
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {isLoading && <MenuItem>...loading...</MenuItem>}
        {error && <MenuItem>...error...</MenuItem>}
        {dataSets &&
          Object.entries(dataSets).map(([key, dataSet]) => (
            <MenuItem key={key} onClick={() => handleToggleDataSet(key)}>
              {dataSet.isActive && (
                <ListItemIcon>
                  <Check />
                </ListItemIcon>
              )}
              {dataSet.name}
            </MenuItem>
          ))}
      </Menu>
    </Box>
  );
};

export default Desktop;
