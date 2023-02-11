/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PersonCreateFormInputValues = {
    username?: string;
    languages?: string;
    description?: string;
    numberOfServices?: number;
    whatsappNumber?: string;
    rating?: number;
    education?: string;
    verifiedEducation?: boolean;
    experience?: string;
};
export declare type PersonCreateFormValidationValues = {
    username?: ValidationFunction<string>;
    languages?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    numberOfServices?: ValidationFunction<number>;
    whatsappNumber?: ValidationFunction<string>;
    rating?: ValidationFunction<number>;
    education?: ValidationFunction<string>;
    verifiedEducation?: ValidationFunction<boolean>;
    experience?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PersonCreateFormOverridesProps = {
    PersonCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    username?: PrimitiveOverrideProps<TextFieldProps>;
    languages?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    numberOfServices?: PrimitiveOverrideProps<TextFieldProps>;
    whatsappNumber?: PrimitiveOverrideProps<TextFieldProps>;
    rating?: PrimitiveOverrideProps<TextFieldProps>;
    education?: PrimitiveOverrideProps<TextFieldProps>;
    verifiedEducation?: PrimitiveOverrideProps<SwitchFieldProps>;
    experience?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PersonCreateFormProps = React.PropsWithChildren<{
    overrides?: PersonCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PersonCreateFormInputValues) => PersonCreateFormInputValues;
    onSuccess?: (fields: PersonCreateFormInputValues) => void;
    onError?: (fields: PersonCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PersonCreateFormInputValues) => PersonCreateFormInputValues;
    onValidate?: PersonCreateFormValidationValues;
} & React.CSSProperties>;
export default function PersonCreateForm(props: PersonCreateFormProps): React.ReactElement;
