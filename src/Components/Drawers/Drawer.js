import React, { useRef, useEffect, useState, memo } from "react";
import Drawer from "@mui/material/Drawer";
import { Popover } from "@mui/material";

export const TemporaryDrawer = memo(
  ({ open, container, handleClose, children }) => {
    return (
      <Drawer
        open={open}
        onClose={handleClose}
        container={container}
        PaperProps={{ style: { position: "absolute" } }}
        BackdropProps={{ style: { position: "absolute" } }}
        ModalProps={{ style: { position: "absolute" } }}
        variant="temporary"
      >
        {children}
      </Drawer>
    );
  }
);
