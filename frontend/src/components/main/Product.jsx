import { ShoppingCart, Close } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Rating,
  Stack,
  Typography,
  DialogTitle,
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  Box,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import React, { useState } from "react";
import ProductDetails from "./ProductDetails";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));
const Product = ({ title, price, img, ratings, details }) => {
  const [clickedProduct, setclickedProduct] = useState({});
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Card
        sx={{
          width: 333,
          flexGrow: 1,
          ":hover": { cursor: "pointer" },
          ":hover .MuiCardMedia-root": {
            cursor: "pointer",
            transform: "scale(1.05) rotate(1deg)",
            transition: "all .5s ease-in-out",
          },
        }}
      >
        <CardMedia
          sx={{
            objectFit: "cover",
          }}
          component="img"
          alt="green iguana"
          height={277}
          image={img}
        />
        <CardContent>
          <Stack direction={"row"} justifyContent={"space-between"}>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography gutterBottom variant="subtitle1" component="p">
              ${price}
            </Typography>
          </Stack>
          <Typography variant="body2" color="text.secondary">
            {details}
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Button
            sx={{ textTransform: "capitalize" }}
            variant="outlined"
            startIcon={<ShoppingCart />}
            size="small"
            onClick={handleClickOpen}
          >
            Buy Now
          </Button>
          <Rating
            name="read-only"
            defaultValue={ratings}
            precision={0.5}
            readOnly
          />
        </CardActions>
      </Card>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          {title}
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <Close />
        </IconButton>
        <Dialog
          sx={{ ".MuiPaper-root": { minWidth: { xs: "100%", md: 800 } } }}
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <IconButton
            sx={{
              ":hover": { color: "red", rotate: "180deg", transition: "0.3s" },
              position: "absolute",
              top: 0,
              right: 10,
            }}
            onClick={handleClose}
          >
            <Close />
          </IconButton>

          <ProductDetails clickedProduct={clickedProduct} />
        </Dialog>
      </BootstrapDialog>
    </>
  );
};

export default Product;
