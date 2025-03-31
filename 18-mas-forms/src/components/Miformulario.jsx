import React from 'react'
import { useFormik } from 'formik'
import * as Yup from "yup";

const FormValidation = Yup.object().shape({
    nombre: Yup.string().min(5,"Nombre corto").max(40,"Nombre muy largo").required("Campo Obligatorio"),
    apellido: Yup.string().min(5,"Nombre corto").max(40,"Muy largo").required("Campo Obligatorio"),
    email: Yup.string().required("Campo Obligatorio").email("Email Invalido")
});

export const Miformulario = () => {

    const formik = useFormik({
        initialValues: {
            nombre:"Gianni",
            apellido:"Rugerio",
            email:"gianni.rugerio@hotmail.com"
        },
        validationSchema: FormValidation,
        onSubmit: values => {
            console.log(values);
        }
    });

  return (
    <div>
      <h1>Mi formulario de Formik</h1>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="nombre">Nombre</label>
          <input
            id="nombre"
            name="nombre"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.nombre}
          />
        </div>
        <div>
            {formik.errors.nombre && formik.touched.nombre ? formik.errors.nombre : ""}
        </div>
        <div>
          <label htmlFor="apellido">Apellido</label>
          <input
            id="apellido"
            name="apellido"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.apellido}
          />
        </div>
        <div>
            {formik.errors.apellido && formik.touched.apellido ? formik.errors.apellido : ""}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </div>
        <div>
            {formik.errors.email && formik.touched.email ? formik.errors.email : ""}
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
