/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type BranchCreateFormInputValues = {
    LocationName?: string;
    City?: string;
    contactNumber?: string;
};
export declare type BranchCreateFormValidationValues = {
    LocationName?: ValidationFunction<string>;
    City?: ValidationFunction<string>;
    contactNumber?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BranchCreateFormOverridesProps = {
    BranchCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    LocationName?: PrimitiveOverrideProps<TextFieldProps>;
    City?: PrimitiveOverrideProps<TextFieldProps>;
    contactNumber?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BranchCreateFormProps = React.PropsWithChildren<{
    overrides?: BranchCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: BranchCreateFormInputValues) => BranchCreateFormInputValues;
    onSuccess?: (fields: BranchCreateFormInputValues) => void;
    onError?: (fields: BranchCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BranchCreateFormInputValues) => BranchCreateFormInputValues;
    onValidate?: BranchCreateFormValidationValues;
} & React.CSSProperties>;
export default function BranchCreateForm(props: BranchCreateFormProps): React.ReactElement;
