/**
 * @format
 */
import ErrorMessages from "@/constants/errorMessages/auth";
import { ILoginRequest } from "@/interfaces/auth.types";
import { FormikHelpers, useFormik } from "formik";
import * as Yup from "yup";

const defaultValues: ILoginRequest = {
    email: "",
    password: "",
};

const schema = Yup.object().shape({
    email: Yup.string().required(ErrorMessages.login.email),
    password: Yup.string().required(ErrorMessages.login.password),
});

const useLoginForm = (
    onSubmit: (
        values: ILoginRequest,
        formikHelpers: FormikHelpers<ILoginRequest>,
    ) => void | Promise<unknown>,
    initialValues: ILoginRequest = defaultValues,
) => {
    return useFormik<ILoginRequest>({
        initialValues,
        enableReinitialize: true,
        validationSchema: schema,
        validateOnChange: true,
        validateOnBlur: true,
        validateOnMount: true,
        onSubmit,
    });
};

export default useLoginForm;
