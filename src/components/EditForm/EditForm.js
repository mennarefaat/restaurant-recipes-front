import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { Button, Input } from "@mui/material";
import { TextField } from "@mui/material";
import { Box } from "@mui/system";

export const EditForm = ({ ingrediants }) => {
    const [newIngred, setNewIngred]=useState(ingrediants)
  const formik = useFormik({
    initialValues: {
      title: "mmm",
      recipe: "",
      ingrediants: ingrediants,
    },
    onSubmit: (values) => {
      console.log(values);
      alert(JSON.stringify(values, null, 2));
    },
  });
  const handleChange = (e, index) => {
    formik.values.ingrediants.splice(index, 1, e);
    const ingg=[...newIngred]
    ingg.splice(index,1, e)
    setNewIngred(ingg)
    console.log(formik.values.ingrediants);
  };

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="title"
          name="title"
          label="Title"
          value={formik.values.title}
          onChange={formik.handleChange}
          error={formik.touched.title && Boolean(formik.errors.title)}
          helperText={formik.touched.title && formik.errors.title}
        />
        <TextField
          fullWidth
          id="recipe"
          name="recipe"
          label="recipe"
          value={formik.values.recipe}
          onChange={formik.handleChange}
          error={formik.touched.recipe && Boolean(formik.errors.recipe)}
          helperText={formik.touched.recipe && formik.errors.recipe}
        />
        <Box>
          {newIngred?.map((ingred, index) => {
            return (
              <TextField
                id={ingred}
                name={ingred}
                key={index}
                fullWidth
                type="text"
                value={formik.values.ingrediants[index]}
                onChange={(event) => {
                  handleChange(event.target.value, index);
                }}
                error={
                  formik.touched.ingrediants &&
                  Boolean(formik.errors.ingrediants)
                }
                helperText={
                  formik.touched.ingrediants && formik.errors.ingrediants
                }
              />
            );
          })}
        </Box>
        <Input type="file" />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};
