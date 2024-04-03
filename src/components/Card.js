import { Box, Heading, HStack, Image, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <Box borderRadius="md" overflow="hidden" boxShadow="md" bg="white">
      <Image src={imageSrc} alt={title} />
      <Box p={4}>
        <Heading  color="black" as="h2" size="md" mb={2}>
          {title}
        </Heading>
        <Text color="gray.500" mb={4}>{description}</Text>
        <HStack justify="start" alignItems="center">
          <Text color="black">See More</Text>
          <FontAwesomeIcon color="black" icon={faArrowRight} size="1x" />
        </HStack>
      </Box>
    </Box>
  );
};

export default Card;

