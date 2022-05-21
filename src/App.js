import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import Charts from "react-apexcharts";

export default function App() {
  const options = {
    chart: {
      toolbar: { show: false },
      zoom: { enabled: false },
      forecolor: theme.colors.gray[500],
    },
    grid: { show: false },
    dataLabels: {
      enabled: false,
    },
    tooltip: { enabled: false },
    xaxis: {
      type: "datetime",
      axisBorder: {
        color: theme.colors.gray[600],
      },
      axisTicks: {
        color: theme.colors.gray[600],
      },
      categories: [
        "2021-03-18T00:00:000Z",
        "2021-03-19T00:00:000Z",
        "2021-03-21T00:00:000Z",
        "2021-03-22T00:00:000Z",
        "2021-03-23T00:00:000Z",
        "2021-03-24T00:00:000Z",
      ],
    },
    fill: {
      opacity: 0.3,
      type: "gradient",
      gradient: {
        shade: "dark",
        opacityFrom: 0.7,
        opacityTo: 0.3,
      },
    },
  };
  const series = [{ name: "series1", data: [31, 120, 10, 20, 60, 5] }];

  return (
    <Flex direction="column" h="100vh" bgColor={"gray.900"} color={"gray.50"}>
      <Header />
      <Flex w="100%" my="6" maxWidth={1400} mx="auto" px="6">
        <Sidebar />
        <SimpleGrid flex={"1"} gap="4" minChildWidth={"620px"} align="flex-start">
          <Box p="8" pb="4" bg={"gray.800"} borderRadius={8}>
            <Text>Listagem</Text>
            {/* <Charts options={options} series={series} type="area" height={160} /> */}
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
