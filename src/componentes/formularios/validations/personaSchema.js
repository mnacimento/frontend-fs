import * as Yup from "yup";

const personaSchema = Yup.object().shape({
    name: Yup.string().min(2, "Debe tener al menos 2 caracteres").required("El nombre es obligatorio"),
    email: Yup.string().email("Formato de correo invalido").required("El correo es obligatorio"),
    password: Yup.string().min(6, "Debe contener al menos 6 caracteres").matches(/\d/, "Debe contener al menos un numero").required("La contrasena es obligatoria"),
    confirmPassword: Yup.string().oneOf([Yup.ref("password")], "Las contrasena deben coincidir").required("Confirmar contrasena es un campo requerido"),
    birthDate: Yup.date().typeError("La fecha no es valida").required("La fecha es obligatoria"),
    country: Yup.string().oneOf(["Argentina", "Uruguay", "Brasil"], "Seleccione una opcion").required("El pais es obligatorio"),
    department: Yup.string().when("country", {
        is: "Uruguay",
        then: (s) => s.required("El departamento es requerido"),
        otherwise: (s) => s.notRequired()
    }),
    terms: Yup.bool().oneOf([true], "Debes aceptar los terminos y condiciones")
});

export default personaSchema;