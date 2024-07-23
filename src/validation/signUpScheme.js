import { object, string, ref } from "yup";

export const signupSchema = object().shape({
  email: string().required("Email obligatorio").email("Email no válido"),
  password: string()
    .required("Una contraseña es obligatoria")
    .min(6, "La contraseña debe tener al menos 6 caracteres"),
  confirmPassword: string()
    .oneOf([ref("password"), null], "No coinciden las contraseñas")
    .required(),
});