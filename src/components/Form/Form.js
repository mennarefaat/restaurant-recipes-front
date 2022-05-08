import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useFormik } from "formik";
// import * as yup from 'yup';
import { Button, Input } from "@mui/material";
import { TextField } from "@mui/material";
import { validationSchema } from "./validation";
import CheckIcon from "@mui/icons-material/Check";
import { Box } from "@mui/system";

export const WithMaterialUI = ({addRecipe}) => {
  const [file, setFile]=useState("")
  const formik = useFormik({
    initialValues: {
      title: "",
      recipe: "",
      ingrediant: "",
      ingrediants: [],
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const addGrediant = () => {
    console.log(formik.values.ingrediants, formik.values.ingrediant);
    if (formik.values.ingrediant)
      formik.values.ingrediants.push(formik.values.ingrediant);
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
          type="recipe"
          value={formik.values.recipe}
          onChange={formik.handleChange}
          error={formik.touched.recipe && Boolean(formik.errors.recipe)}
          helperText={formik.touched.recipe && formik.errors.recipe}
        />
        <ol>
          {formik.values?.ingrediants?.map((ingred, index) => {
            return <li key={index}>{ingred}</li>;
          })}
        </ol>
        <TextField
          fullWidth
          id="ingrediant"
          name="ingrediant"
          label="ingrediant"
          type="ingrediant"
          value={formik.values.ingrediant}
          onChange={formik.handleChange}
          error={formik.touched.ingrediant && Boolean(formik.errors.ingrediant)}
          helperText={formik.touched.ingrediant && formik.errors.ingrediant}
        />
        <Box>
          <CheckIcon onClick={addGrediant} style={{ cursor: "pointer" }} />
        </Box>
        <Input type="file"
              onChange={(e)=>{setFile(e?.target?.files[0])}}
        />
        <Button color="primary" variant="contained" fullWidth type="submit" onClick={()=>{addRecipe({...formik.values,file})}}>
          Add
        </Button>
      </form>
    </div>
  );
};
