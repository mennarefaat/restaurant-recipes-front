import * as yup from 'yup';


export const validationSchema = yup.object({
    title: yup
      .string('Enter Recipe Title')
      .required('Title is required'),
    recipe: yup
      .string('Enter The Recipe')
      .min(8, 'Password should be of minimum 8 characters length')
      .required('Recipe is required'),
    
    ingrediants: yup
        .array()
        .required('Title is required'),
    ingrediant: yup
        .string('Enter Recipe Title')
        .required('Title is required'),
  });