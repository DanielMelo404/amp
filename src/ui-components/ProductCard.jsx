/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Badge, Flex, Image, Rating, Text } from "@aws-amplify/ui-react";
import MyIcon from "./MyIcon";
export default function ProductCard(props) {
  const { person, areaPerson, area, overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="row"
      width="960px"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "ProductCard")}
      {...rest}
    >
      <Image
        width="320px"
        height="unset"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src="https://media.licdn.com/dms/image/D4E35AQFIxP6rJpIcxg/profile-framedphoto-shrink_400_400/0/1668207372030?e=1676775600&v=beta&t=HoAy-C45X9YZctWKdHeiWL9Gm-GzEnIFO0hg02kCl9g"
        {...getOverrideProps(overrides, "image")}
      ></Image>
      <Flex
        gap="24px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        grow="1"
        shrink="1"
        basis="0"
        position="relative"
        padding="32px 32px 32px 32px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Card Area")}
      >
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="700"
          color="rgba(13,26,38,1)"
          lineHeight="25px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={person?.username}
          {...getOverrideProps(overrides, "Classic Long Sleeve T-Shirt")}
        ></Text>
        <Flex
          gap="16px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Ratings")}
        >
          <Rating
            shrink="0"
            size="large"
            {...getOverrideProps(overrides, "Rating")}
          ></Rating>
        </Flex>
        <Flex
          gap="16px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Tags")}
        >
          <Badge
            shrink="0"
            size="small"
            variation="default"
            children="Maths"
            {...getOverrideProps(overrides, "Badge29766804")}
          ></Badge>
          <Badge
            shrink="0"
            size="small"
            variation="default"
            children="Physics"
            {...getOverrideProps(overrides, "Badge29766805")}
          ></Badge>
          <Badge
            shrink="0"
            size="small"
            variation="default"
            children="Statistics"
            {...getOverrideProps(overrides, "Badge29766806")}
          ></Badge>
        </Flex>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="700"
          color="rgba(13,26,38,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.01px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="15 mins: 3$       30 mins: 6$      1h: 10$"
          {...getOverrideProps(overrides, "15 mins: 3$ 30 mins: 6$ 1h: 10$")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(13,26,38,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.01px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Mechatronics engineering student at national university of Colombia. I have 2 years of experience on reinforcement classes at IB schools. The following are some of the areas i can help you with:&#xA;ML-AI, Stochastic processes, Multivariate calculus, Differential calculus, Robotics, digital-analog electronics, mechanical design, and many other subjects."
          {...getOverrideProps(
            overrides,
            "Mechatronics engineering student at national university of Colombia. I have 2 years of experience on reinforcement classes at IB schools. The following are some of the areas i can help you with: ML-AI, Stochastic processes, Multivariate calculus, Differential calculus, Robotics, digital-analog electronics, mechanical design, and many other subjects."
          )}
        ></Text>
        <Flex
          gap="16px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Quote")}
        >
          <Flex
            gap="10px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            borderRadius="10px"
            padding="10px 10px 10px 10px"
            backgroundColor="rgba(43,216,50,1)"
            {...getOverrideProps(overrides, "Frame 419")}
          >
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="700"
              color="rgba(255,255,255,1)"
              lineHeight="24px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              letterSpacing="0.01px"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Whatsapp number"
              {...getOverrideProps(overrides, "Whatsapp number")}
            ></Text>
          </Flex>
          <MyIcon
            width="24px"
            height="24px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            type="chat"
            {...getOverrideProps(overrides, "MyIcon")}
          ></MyIcon>
        </Flex>
      </Flex>
    </Flex>
  );
}
