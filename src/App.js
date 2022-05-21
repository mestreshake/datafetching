import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { Pie } from "./components/Charts/Pie";

import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

export default function App() {
  return (
    <Flex direction="column" h="100vh" bgColor={"gray.900"} color={"gray.50"}>
      <Header />
      <Flex w="100%" my="6" maxWidth={1400} mx="auto" px="6">
        <Sidebar />
        <SimpleGrid flex={"1"} gap="4" minChildWidth={"320px"} align="center">
          <Box p="8" pb="4" bg={"gray.800"} borderRadius={8}>
            <Text>Gráfico de Pizza</Text>
            <Pie />
          </Box>
          <Box p="8" pb="4" bg={"gray.800"} borderRadius={8}>
            <Text>Gráfico de Pizza</Text>
            <Pie />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
