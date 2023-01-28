import React from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import "./index.scss"

const ServiceSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(500, 'Too Long!')
      .required('Required'),
    imgUrl: Yup.string()
      .min(2, 'Too Short!')
      .max(500, 'Too Long!')
      .required('Required'),
    description: Yup.string()
      .min(2, 'Too Short!')
      .max(5000, 'Too Long!')
      .required('Required'),
    price: Yup.number()
      .min(2, 'Too Short!')
      .max(50000, 'Too Long!')
      .required('Required'),
  });

const AddService = () => {
  return (
    <div id='form'>

     <Formik
       initialValues={{
         name: '',
         imgUrl: '',
         description: '',
         price: 0,
       }}
       validationSchema={ServiceSchema}
       onSubmit={values => {
        axios.post("http://localhost:8081/services", values)
         console.log(values);
       }}
     >
       {({ errors, touched }) => (
         <Form>
            <h1>Add Service</h1>

           <Field name="name" />
           {errors.name && touched.name ? (
             <div>{errors.name}</div>
           ) : null}
           <Field name="imgUrl" />
           {errors.imgUrl && touched.imgUrl ? (
             <div>{errors.imgUrl}</div>
           ) : null}
           <Field name="description" />
           {errors.description && touched.description ? (
             <div>{errors.description}</div>
           ) : null}
           <Field name="price" />
           {errors.price && touched.price ? (
             <div>{errors.price}</div>
           ) : null}
           
           <button type="submit">Submit</button>
         </Form>
       )}
     </Formik>

    </div>
  )
}

export default AddService