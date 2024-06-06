import { Container, VStack, Heading, Text, Button, HStack, IconButton, Image } from "@chakra-ui/react";
import { FaRocket, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.xl" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" p={4}>
      <VStack spacing={8} textAlign="center">
        <Heading as="h1" size="2xl">
          Welcome to TechStartup
        </Heading>
        <Text fontSize="lg">Innovative solutions for modern businesses. Transforming the way you work with cutting-edge technology.</Text>
        <Image src="https://images.unsplash.com/photo-1556761175-b413da4baf72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNoJTIwc3RhcnR1cHxlbnwwfHx8fDE3MTc2Njg3NDJ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Tech Startup" borderRadius="md" boxShadow="lg" />
        <HStack spacing={4}>
          <Button colorScheme="teal" size="lg">
            Get Started
          </Button>
          <Button variant="outline" colorScheme="teal" size="lg">
            Learn More
          </Button>
        </HStack>
        <HStack spacing={4}>
          <IconButton aria-label="Facebook" icon={<FaFacebook />} size="lg" />
          <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" />
          <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} size="lg" />
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;
