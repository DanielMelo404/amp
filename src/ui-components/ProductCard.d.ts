/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Person, AreaPerson, Area } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { BadgeProps, FlexProps, ImageProps, RatingProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProductCardOverridesProps = {
    ProductCard?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    "Card Area"?: PrimitiveOverrideProps<FlexProps>;
    "Classic Long Sleeve T-Shirt"?: PrimitiveOverrideProps<TextProps>;
    Ratings?: PrimitiveOverrideProps<FlexProps>;
    Rating?: PrimitiveOverrideProps<RatingProps>;
    Tags?: PrimitiveOverrideProps<FlexProps>;
    Badge29766804?: PrimitiveOverrideProps<BadgeProps>;
    Badge29766805?: PrimitiveOverrideProps<BadgeProps>;
    Badge29766806?: PrimitiveOverrideProps<BadgeProps>;
    "15 mins: 3$ 30 mins: 6$ 1h: 10$"?: PrimitiveOverrideProps<TextProps>;
    "Mechatronics engineering student at national university of Colombia. I have 2 years of experience on reinforcement classes at IB schools. The following are some of the areas i can help you with: ML-AI, Stochastic processes, Multivariate calculus, Differential calculus, Robotics, digital-analog electronics, mechanical design, and many other subjects."?: PrimitiveOverrideProps<TextProps>;
    Quote?: PrimitiveOverrideProps<FlexProps>;
    "Frame 419"?: PrimitiveOverrideProps<FlexProps>;
    "Whatsapp number"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type ProductCardProps = React.PropsWithChildren<Partial<FlexProps> & {
    person?: Person;
    areaPerson?: AreaPerson;
    area?: Area;
} & {
    overrides?: ProductCardOverridesProps | undefined | null;
}>;
export default function ProductCard(props: ProductCardProps): React.ReactElement;
