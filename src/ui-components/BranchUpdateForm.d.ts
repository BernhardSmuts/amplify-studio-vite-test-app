/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Branch } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type BranchUpdateFormInputValues = {
    LocationName?: string;
    City?: string;
    contactNumber?: string;
};
export declare type BranchUpdateFormValidationValues = {
    LocationName?: ValidationFunction<string>;
    City?: ValidationFunction<string>;
    contactNumber?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BranchUpdateFormOverridesProps = {
    BranchUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    LocationName?: PrimitiveOverrideProps<TextFieldProps>;
    City?: PrimitiveOverrideProps<TextFieldProps>;
    contactNumber?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BranchUpdateFormProps = React.PropsWithChildren<{
    overrides?: BranchUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    branch?: Branch;
    onSubmit?: (fields: BranchUpdateFormInputValues) => BranchUpdateFormInputValues;
    onSuccess?: (fields: BranchUpdateFormInputValues) => void;
    onError?: (fields: BranchUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BranchUpdateFormInputValues) => BranchUpdateFormInputValues;
    onValidate?: BranchUpdateFormValidationValues;
} & React.CSSProperties>;
export default function BranchUpdateForm(props: BranchUpdateFormProps): React.ReactElement;
