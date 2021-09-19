import React, { useCallback, useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import CloseIcon from "@mui/icons-material/Close";
import Collapse from "@mui/material/Collapse";
import Drawer from "@mui/material/Drawer";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Fab from "@mui/material/Fab";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import SourceIcon from "@mui/icons-material/Source";

import useDataSets from "../hooks/useDataSets";

// WIP of mobile menu
const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSourcesExpanded, setIsSourcesExpanded] = useState(true);
  const [{ data: dataSets, isLoading, error }, updateDataSets] = useDataSets();

  const handleToggleDataSet = useCallback(
    (name) => {
      updateDataSets(name, {
        isActive: !dataSets[name].isActive,
      });
    },
    [dataSets, updateDataSets]
  );

  return (
    <>
      <Fab
        color="primary"
        aria-label={isMenuOpen ? "close menu" : "open menu"}
        onClick={() => setIsMenuOpen((o) => !o)}
      >
        {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
      </Fab>
      <Drawer open={isMenuOpen}>
        <List
          sx={{ width: 360, maxWidth: "100%" }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          <ListItemButton onClick={() => setIsSourcesExpanded((e) => !e)}>
            <ListItemIcon>
              <SourceIcon />
            </ListItemIcon>
            <ListItemText primary="Data Sources" />
            {isSourcesExpanded ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={isSourcesExpanded} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {isLoading && "...loading..."}
              {error && "...error..."}
              {dataSets &&
                Object.entries(dataSets).map(([key, dataSet]) => (
                  <ListItemButton
                    key={key}
                    role={undefined}
                    sx={{ pl: 4 }}
                    onClick={() => handleToggleDataSet(key)}
                  >
                    <ListItemIcon>
                      <Checkbox
                        edge="start"
                        checked={dataSet.isActive}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{
                          "aria-labelledby": `View ${dataSet}`,
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText primary={dataSet.name} />
                  </ListItemButton>
                ))}
            </List>
          </Collapse>
        </List>
      </Drawer>
    </>
  );
};

export default Menu;
