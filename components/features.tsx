import { Box, chakra, Flex, Link, SimpleGrid, Text } from "@chakra-ui/react";

interface IFeature {
  heading: string;
  content: string;
  icon: React.ReactNode;
}

const features: IFeature[] = [
  {
    heading: "Rewards",
    content:
      "Liquidity providers will earn rewards by providing the underlying assets to write option contracts.",
    icon: (
      <svg
        width={36}
        height={36}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
        ></path>
      </svg>
    ),
  },
  {
    heading: "Strategies",
    content:
      "Options trading strategies are simplified so that users are ready to start utilizing simple and advanced trading tactics.",
    icon: (
      <svg
        width={36}
        height={36}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
        ></path>
      </svg>
    ),
  },
  {
    heading: "Staking",
    content:
      "Contribute to the Elision ecosystem by staking $ELX token and receive share of settlement fees.",
    icon: (
      <svg
        width={36}
        height={36}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        ></path>
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <Box
      px={12}
      p={{ base: 5, md: 10 }}
      py={32}
      mx={"auto"}
      w={"full"}
      height={"85vh"}
    >
      <chakra.h3 fontSize="4xl" fontWeight="bold" mb={20} textAlign="center">
        Everything your app needs and more
      </chakra.h3>
      <SimpleGrid
        columns={{ base: 1, md: 3 }}
        placeItems="center"
        spacing={10}
        mb={4}
      >
        {features.map((feature: IFeature, index: number) => (
          <Box
            key={index}
            bg="elision.600"
            p={6}
            rounded="lg"
            textAlign="center"
            pos="relative"
          >
            <Flex
              p={2}
              w="max-content"
              color="elision.50"
              bg="elision.250"
              rounded="md"
              marginInline="auto"
              pos="absolute"
              left={0}
              right={0}
              top="-1.5rem"
              boxShadow="lg"
            >
              {feature.icon}
            </Flex>
            <chakra.h3 fontWeight="semibold" fontSize="2xl" mt={6}>
              {feature.heading}
            </chakra.h3>
            <Text fontSize="md" mt={4}>
              {feature.content}
            </Text>
            <Link href="#" mt={4} fontSize="sm" color="elision.100">
              Learn more →
            </Link>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}
