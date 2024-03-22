import React from "react";
import { Box, Heading, Text, Stack, Flex, Button, Image, SimpleGrid, List, ListItem, ListIcon } from "@chakra-ui/react";
import { FaTools, FaHardHat, FaBuilding, FaPhone } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box bg="gray.100" py={20}>
        <Box maxW="6xl" mx="auto" px={4}>
          <Flex align="center" justify="space-between" wrap="wrap">
            <Box flex={1}>
              <Heading as="h1" size="2xl" mb={4}>
                ABC Construction
              </Heading>
              <Text fontSize="xl" mb={8}>
                Building your dreams, one brick at a time.
              </Text>
              <Button colorScheme="blue" size="lg">
                Get a Quote
              </Button>
            </Box>
            <Image src="https://images.unsplash.com/photo-1535732759880-bbd5c7265e3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBzaXRlfGVufDB8fHx8MTcxMTA3NTE0NXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Construction Site" maxW="500px" ml={8} />
          </Flex>
        </Box>
      </Box>

      {/* Services Section */}
      <Box py={20}>
        <Box maxW="6xl" mx="auto" px={4}>
          <Heading as="h2" size="xl" mb={8} textAlign="center">
            Our Services
          </Heading>
          <SimpleGrid columns={[1, 2, 3]} spacing={8}>
            <Box bg="white" p={6} shadow="md" rounded="md">
              <FaTools size={48} color="blue.500" />
              <Heading as="h3" size="lg" mt={4} mb={2}>
                Construction
              </Heading>
              <Text>We offer comprehensive construction services for residential and commercial projects.</Text>
            </Box>
            <Box bg="white" p={6} shadow="md" rounded="md">
              <FaHardHat size={48} color="blue.500" />
              <Heading as="h3" size="lg" mt={4} mb={2}>
                Renovation
              </Heading>
              <Text>Our skilled team can transform your existing space into your dream property.</Text>
            </Box>
            <Box bg="white" p={6} shadow="md" rounded="md">
              <FaBuilding size={48} color="blue.500" />
              <Heading as="h3" size="lg" mt={4} mb={2}>
                Project Management
              </Heading>
              <Text>We efficiently manage projects from planning to completion, ensuring quality and timely delivery.</Text>
            </Box>
          </SimpleGrid>
        </Box>
      </Box>

      {/* About Section */}
      <Box bg="gray.100" py={20}>
        <Box maxW="6xl" mx="auto" px={4}>
          <Flex align="center" justify="space-between" wrap="wrap">
            <Image src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjB0ZWFtfGVufDB8fHx8MTcxMTA3NTE0Nnww&ixlib=rb-4.0.3&q=80&w=1080" alt="Construction Team" maxW="500px" mr={8} />
            <Box flex={1}>
              <Heading as="h2" size="xl" mb={4}>
                About Us
              </Heading>
              <Text fontSize="lg" mb={8}>
                ABC Construction is a leading construction company with over 20 years of experience. We are committed to delivering high-quality projects and exceptional customer service.
              </Text>
              <List spacing={3}>
                <ListItem>
                  <ListIcon as={FaTools} color="blue.500" />
                  Experienced Professionals
                </ListItem>
                <ListItem>
                  <ListIcon as={FaHardHat} color="blue.500" />
                  Quality Craftsmanship
                </ListItem>
                <ListItem>
                  <ListIcon as={FaBuilding} color="blue.500" />
                  Timely Project Delivery
                </ListItem>
              </List>
            </Box>
          </Flex>
        </Box>
      </Box>

      {/* Contact Section */}
      <Box py={20}>
        <Box maxW="6xl" mx="auto" px={4}>
          <Heading as="h2" size="xl" mb={8} textAlign="center">
            Contact Us
          </Heading>
          <Flex align="center" justify="center">
            <Button leftIcon={<FaPhone />} colorScheme="blue" size="lg" px={8} py={6}>
              (123) 456-7890
            </Button>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default Index;
