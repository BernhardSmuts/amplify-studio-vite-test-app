/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HeaderAppBatOverridesProps = {
    HeaderAppBat?: PrimitiveOverrideProps<FlexProps>;
    Option1?: PrimitiveOverrideProps<TextProps>;
    Option2?: PrimitiveOverrideProps<TextProps>;
    Option3?: PrimitiveOverrideProps<TextProps>;
    Option4?: PrimitiveOverrideProps<TextProps>;
    "\uD83E\uDD86 icon \"Bars\""?: PrimitiveOverrideProps<FlexProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    "Company Name"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type HeaderAppBatProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: HeaderAppBatOverridesProps | undefined | null;
}>;
export default function HeaderAppBat(props: HeaderAppBatProps): React.ReactElement;
