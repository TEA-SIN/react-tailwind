import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function SignUp() {
  const validationSchma = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .max(15, "Password must be at most 15 characters.")
      .required("Required"),
    ConfirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password must much!")
      .required("Required"),
  });

  return (
    <div className="flex flex-col item-center justify-between items-center">
      <h1 className="text-2xl font-semibold text-center text-red-600">
        Sign Up
      </h1>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          ConfirmPassword: "",
        }}
        validationSchema={validationSchma}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
        }}
      >
        {({ isSubmitting }) => {
          console.log(isSubmitting);

          // JS handle Button
          return (
            <Form className=" w-1/2">
              <div className="m-4 p-4">
                <label
                  className=" block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  htmlFor="name"
                >
                  Username
                </label>
                <Field
                  className=" text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="text"
                  name="name"
                  id="name"
                />
                <ErrorMessage name="name">
                  {(msg) => <div className="text-red-500"> {msg} </div>}
                </ErrorMessage>
              </div>
              <div className="  m-4 p-4">
                <label
                  className=" block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  htmlFor="email"
                >
                  Email
                </label>
                <Field
                  className=" text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="email"
                  name="email"
                  id="email"
                />
                <ErrorMessage name="email">
                  {(msg) => <div className="text-red-500">{msg}</div>}
                </ErrorMessage>
              </div>
              <div className="  m-4 p-4">
                <label
                  className=" block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  htmlFor="password"
                >
                  Password
                </label>
                <Field
                  className=" text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="password"
                  name="password"
                  id="password"
                />
                <ErrorMessage name="password">
                  {(msg) => <div className="text-red-500">{msg}</div>}
                </ErrorMessage>
              </div>
              <div className="  m-4 p-4">
                <label
                  className=" block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  htmlFor="ConfirmPassword"
                >
                  Confirm password
                </label>
                <Field
                  className=" text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="password"
                  name="ConfirmPassword"
                  id="ConfirmPassword"
                />
                <ErrorMessage name="ConfirmPassword">
                  {(msg) => <div className="text-red-500"> {msg} </div>}
                </ErrorMessage>
              </div>
              {isSubmitting && (
                <button
                  type="button"
                  className="text-white bg-blue-400 dark:bg-blue-500 cursor-not-allowed font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  disabled
                >
                  Submitted
                </button>
              )}
              {!isSubmitting && (
                <button
                  disabled={isSubmitting}
                  type="submit"
                  class="w-[100px] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Submit
                </button>
              )}
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
