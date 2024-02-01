import styled from "@emotion/styled";
import {
  Box,
  Button,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const MyButton = styled(ToggleButton)(({ theme }) => ({
  borderRadius: "5px !important",
  border: "1px solid #888 !important",
  textTransform: "capitalize",
  padding: "8px 10px",
  fontSize: "16px",
  color: theme.palette.text.primary,
  "&.Mui-selected": {
    border: "1px solid rgba(233,69,96,.5) !important",
    color: "#e94560",
    backgroundColor: "initial",
  },
}));

const MainHeader = ({
  allProductsAPI,
  allMenProductsAPI,
  allWomenProductsAPI,
  setMyData,
}) => {
  const [alignment, setAlignment] = useState(allProductsAPI);

  const handleChange = (event, newValue) => {
    setAlignment(newValue);
    setMyData(newValue);
  };
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      flexWrap={"wrap"}
      rowGap={2}
      my={3}
    >
      <Box>
        <Typography variant="h6">Selected Products</Typography>
        <Typography variant="body2" color={"gray"}>
          All Our New Arriives in a exclusve brand selection
        </Typography>
      </Box>

      <Stack direction={"row"} spacing={2}>
        <ToggleButtonGroup
          color="error"
          value={alignment}
          exclusive
          onChange={handleChange}
          aria-label="Platform"
        >
          <MyButton value={allProductsAPI}>All categories</MyButton>
          <MyButton sx={{ mx: "16px !important" }} value={allMenProductsAPI}>
            Men Category
          </MyButton>
          <MyButton value={allWomenProductsAPI}>Women Category</MyButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
};

export default MainHeader;
