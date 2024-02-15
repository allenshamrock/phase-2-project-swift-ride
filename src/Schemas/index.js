import * as Yup from "yup";

//Assertains that the password has a min of 7 characters ,1 uppercase letter,4 lowercase letters & 2 numeric digits
const passwordRules = /^(?=.*[A-Z])(?=.*[a-z]{4})(?=.*\d{2}).{7}$/;

 export const signinValidationSchema = Yup.object().shape({
   name: Yup.string()
     .label("Please enter your user name")
     .required("required"),
   password: Yup.string()
     .min(6)
     .matches(passwordRules, { mesaage: "Please create a stronger password" })
     .required("required"),
 });

export const signupValidationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(70, "Too Long!")
    .required("required"),
  lastName: Yup.string().required("required"),
  password: Yup.string()
    .min(7)
    .matches(passwordRules, { message: "Please create a stronger password" })
    .required("required"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
});


 export const paymentValidationSchema = Yup.object().shape({
   firstName: Yup.string()
     .min(2, "Too Short!")
     .max(70, "Too Long!")
     .required("required"),
   lastName: Yup.string().required("required"),
   amount: Yup.number()
     .positive("Amount must be a positive number")
     .required("Required"),
 });