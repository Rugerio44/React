import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from "yup";
import '../styles/form.css'; 

const FormValidation = Yup.object().shape({
  nombre: Yup.string().min(5, "Nombre corto").max(40, "Nombre muy largo").required("Campo Obligatorio"),
  apellido: Yup.string().min(5, "Nombre corto").max(40, "Muy largo").required("Campo Obligatorio"),
  email: Yup.string().required("Campo Obligatorio").email("Email Invalido")
});

export const Miformulario = () => {

  const [formData, setFormData] = useState(0);

  const formik = useFormik({
    initialValues: {
      nombre: "Gianni",
      apellido: "Rugerio",
      email: "gianni.rugerio@hotmail.com"
    },
    validationSchema: FormValidation,
    onSubmit: values => {
      console.log(values);
      setFormData(values);
    }
  });

  return (
    <div className="login-root">
      <div className="box-root flex-flex flex-direction--column" style={{ minHeight: '100vh', flexGrow: 1 }}>
        <div className="loginbackground box-background--white padding-top--64">
          <div className="loginbackground-gridContainer">
            <div className="box-root flex-flex" style={{ gridArea: 'top / start / 8 / end' }}>
              <div className="box-root" style={{ backgroundImage: 'linear-gradient(white 0%, rgb(247, 250, 252) 33%)', flexGrow: 1 }}>
              </div>
            </div>
            <div className="box-root flex-flex" style={{ gridArea: '4 / 2 / auto / 5' }}>
              <div className="box-root box-divider--light-all-2 animationLeftRight tans3s" style={{ flexGrow: 1 }}></div>
            </div>
            <div className="box-root flex-flex" style={{ gridArea: '6 / start / auto / 2' }}>
              <div className="box-root box-background--blue800" style={{ flexGrow: 1 }}></div>
            </div>
            <div className="box-root flex-flex" style={{ gridArea: '7 / start / auto / 4' }}>
              <div className="box-root box-background--blue animationLeftRight" style={{ flexGrow: 1 }}></div>
            </div>
            <div className="box-root flex-flex" style={{ gridArea: '8 / 4 / auto / 6' }}>
              <div className="box-root box-background--gray100 animationLeftRight tans3s" style={{ flexGrow: 1 }}></div>
            </div>
            <div className="box-root flex-flex" style={{ gridArea: '2 / 15 / auto / end' }}>
              <div className="box-root box-background--cyan200 animationRightLeft tans4s" style={{ flexGrow: 1 }}></div>
            </div>
            <div className="box-root flex-flex" style={{ gridArea: '3 / 14 / auto / end' }}>
              <div className="box-root box-background--blue animationRightLeft" style={{ flexGrow: 1 }}></div>
            </div>
            <div className="box-root flex-flex" style={{ gridArea: '4 / 17 / auto / 20' }}>
              <div className="box-root box-background--gray100 animationRightLeft tans4s" style={{ flexGrow: 1 }}></div>
            </div>
            <div className="box-root flex-flex" style={{ gridArea: '5 / 14 / auto / 17' }}>
              <div className="box-root box-divider--light-all-2 animationRightLeft tans3s" style={{ flexGrow: 1 }}></div>
            </div>
          </div>
        </div>
        <div className="box-root padding-top--24 flex-flex flex-direction--column" style={{ flexGrow: 1, zIndex: 9 }}>
          <div className="box-root padding-top--48 padding-bottom--24 flex-flex flex-justifyContent--center">
            <h1><a href="/" rel="dofollow">Mi formulario con Formik</a></h1>
          </div>
          <div className="formbg-outer">
            <div className="formbg">
              <div className="formbg-inner padding-horizontal--48">
                <span className="padding-bottom--15">Registro</span>
                <form id="stripe-login" onSubmit={formik.handleSubmit}>
                  <div className="field padding-bottom--24">
                    <label htmlFor="nombre">Nombre</label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      onChange={formik.handleChange}
                      value={formik.values.nombre}
                    />
                    {formik.errors.nombre && formik.touched.nombre ? (
                      <div className="form__error">{formik.errors.nombre}</div>
                    ) : null}
                  </div>
                  <div className="field padding-bottom--24">
                    <label htmlFor="apellido">Apellido</label>
                    <input
                      type="text"
                      id="apellido"
                      name="apellido"
                      onChange={formik.handleChange}
                      value={formik.values.apellido}
                    />
                    {formik.errors.apellido && formik.touched.apellido ? (
                      <div className="form__error">{formik.errors.apellido}</div>
                    ) : null}
                  </div>
                  <div className="field padding-bottom--24">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                    />
                    {formik.errors.email && formik.touched.email ? (
                      <div className="form__error">{formik.errors.email}</div>
                    ) : null}
                  </div>
                  <div className="field padding-bottom--24">
                    <button type="submit">Enviar</button>
                  </div>
                  <div className="submitted-data">
                    <p className="submitted-title">Dato enviado:</p>
                    <p><strong>Nombre:</strong> {formData.nombre}</p>
                    <p><strong>Apellido:</strong> {formData.apellido}</p>
                    <p><strong>Email:</strong> {formData.email}</p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};