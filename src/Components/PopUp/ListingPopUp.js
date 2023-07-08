import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Dialog, DialogContent } from "@mui/material";
import { closePopUp } from "../../Redux/features/listingPopUp/listingPopUpSlice";

const ListingPopUp = () => {
  const isOpen = useSelector((state) => state.listingPopUp.isOpen);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(closePopUp());
  };

  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      fullWidth={true}
      maxWidth="lg"
      scroll="paper"
    >
      <DialogContent>
        <Container disableGutters={true}>No Pop Up</Container>
      </DialogContent>
    </Dialog>
  );
};

export default ListingPopUp;
