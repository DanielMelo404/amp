/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Badge, Flex, Image, Rating, Text } from "@aws-amplify/ui-react";
export default function ProductCard(props) {
  const { person, areaPerson, area, overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="row"
      width="800px"
      height="307px"
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
        gap="7px"
        direction="column"
        width="480px"
        height="307px"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="18px 32px 32px 32px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Card Area")}
      >
        <Text
          fontFamily="Inter"
          fontSize="18px"
          fontWeight="700"
          color="rgba(13,26,38,1)"
          lineHeight="25px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="439px"
          height="24px"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={person?.username}
          {...getOverrideProps(overrides, "Classic Long Sleeve T-Shirt")}
        ></Text>
        <Flex
          gap="10.245615005493164px"
          direction="row"
          width="146px"
          height="26.25px"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Ratings")}
        >
          <Rating
            gap="5.122807502746582px"
            width="135.75px"
            shrink="0"
            size="large"
            {...getOverrideProps(overrides, "Rating")}
          ></Rating>
        </Flex>
        <Flex
          gap="14.967741966247559px"
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
            gap="9.354838371276855px"
            borderRadius="29.935483932495117px"
            padding="5.612903118133545px 7.483870983123779px 5.612903118133545px 7.483870983123779px"
            shrink="0"
            size="small"
            variation="default"
            children="Maths"
            {...getOverrideProps(overrides, "Badge29766804")}
          ></Badge>
          <Badge
            gap="9.354838371276855px"
            borderRadius="29.935483932495117px"
            padding="5.612903118133545px 7.483870983123779px 5.612903118133545px 7.483870983123779px"
            shrink="0"
            size="small"
            variation="default"
            children="Physics"
            {...getOverrideProps(overrides, "Badge29766805")}
          ></Badge>
          <Badge
            gap="9.354838371276855px"
            borderRadius="29.935483932495117px"
            padding="5.612903118133545px 7.483870983123779px 5.612903118133545px 7.483870983123779px"
            shrink="0"
            size="small"
            variation="default"
            children="Statistics"
            {...getOverrideProps(overrides, "Badge29766806")}
          ></Badge>
        </Flex>
        <Text
          fontFamily="Inter"
          fontSize="14px"
          fontWeight="700"
          color="rgba(13,26,38,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0px"
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
          fontSize="13px"
          fontWeight="400"
          color="rgba(13,26,38,1)"
          lineHeight="16px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0px"
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
            padding="5px 10px 5px 10px"
            backgroundColor="rgba(43,216,50,1)"
            {...getOverrideProps(overrides, "Frame 419")}
          >
            <Text
              fontFamily="Inter"
              fontSize="13px"
              fontWeight="700"
              color="rgba(255,255,255,1)"
              lineHeight="24px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              letterSpacing="0px"
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
        </Flex>
      </Flex>
    </Flex>
  );
}
