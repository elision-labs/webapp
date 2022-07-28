import {
  chakra,
  Box,
  Button,
  Flex,
  HStack
} from "@chakra-ui/react";

export default function Hero() {
  return (
    <Flex
      px={4}
      py={32}
      maxW={1200}
      mx={"auto"}
      bg="brand.400"
      w={"full"}
    >
      <Box
        w={{
          lg: 8 / 12,
          xl: 5 / 11,
        }}
      >
        <chakra.h1
          mb={3}
          fontSize={{
            base: "3xl",
            md: "4xl",
          }}
          fontWeight={'thin'}
          lineHeight={"taller"}
          color="brand.100"
        >
          Options trading made easy
        </chakra.h1>
        <chakra.p
          mb={5}
          color="gray.500"
          fontSize={{
            md: "lg",
          }}
        >
          Earn more by trading digital assets with easy-to-use financial strategies
        </chakra.p>
        <HStack>
          <Button
            as="a"
            w={{
              base: "full",
              sm: "auto",
            }}
            variant="outline"
            size="lg"
            mb={{
              base: 2,
              sm: 0,
            }}
            cursor="pointer"
          >
            Learn More
          </Button>
          <Button
            as="a"
            w={{
              base: "full",
              sm: "auto",
            }}
            mb={{
              base: 2,
              sm: 0,
            }}
            size="lg"
            cursor="pointer"
            variant="solid"
            colorScheme="teal"
          >
            Start Trading
          </Button>
        </HStack>
      </Box>
    </Flex>
  )
}