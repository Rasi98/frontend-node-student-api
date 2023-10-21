import React, { useState } from "react";
import TextField from "@mui/material/TextField/TextField";
import ButtonSolid from "./ButtonSolid";
import Grid from "@mui/material/Grid";

type SearchBarProps = {
  onSearch: (value: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState<string>("");

  const handleOnClick = () => {
    onSearch(searchValue);
  };

  return (
    <>
      <Grid
        container
        justifyContent={"center"}
        alignItems={"center"}
        spacing={2}
        marginBottom={"2rem"}
      >
        <Grid item xs={10} sm={5} md={4}>
          <TextField
            id="outlined-basic"
            label="Search student"
            value={searchValue}
            variant="outlined"
            fullWidth
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </Grid>
        <Grid item xs={5} sm={2} md={1}>
          <ButtonSolid text="Search" onClick={handleOnClick} />
        </Grid>
      </Grid>
    </>
  );
};

export default SearchBar;
