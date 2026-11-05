import * as Yup from "yup";

// Los mensajes son claves de i18n; el componente los traduce con t()
const personaSchema = Yup.object().shape({
    name: Yup.string().min(2, "validation.min").required("validation.required"),
    email: Yup.string().email("validation.email").required("validation.required"),
    password: Yup.string().min(6, "validation.min").matches(/\d/, "validation.number").required("validation.required"),
    confirmPassword: Yup.string().oneOf([Yup.ref("password")], "validation.match").required("validation.required"),
    birthDate: Yup.date().typeError("validation.required").required("validation.required"),
    country: Yup.string().oneOf(["Argentina", "Uruguay", "Brasil"], "validation.selectCountry").required("validation.required"),
    department: Yup.string().when("country", {
        is: "Uruguay",
        then: (s) => s.required("validation.required"),
        otherwise: (s) => s.notRequired()
    }),
    terms: Yup.bool().oneOf([true], "validation.required")
});

export default personaSchema;
