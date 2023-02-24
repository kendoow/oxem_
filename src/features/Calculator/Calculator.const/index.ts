import { useFormik } from "formik";
import * as Yup from "yup";

export const startPrice = 2300000;
export const startTimeMonth = 7;

export const validationSchema = Yup.object({
    price: Yup.number().min(1000000, " ").max(6000000, "").required(""),
    initialPayment: Yup.number()
        .min(10, " ")
        .max(60, "")
        .required(""),
    duration: Yup.number()
        .min(1, " ")
        .max(60, "")
        .required(""),
})