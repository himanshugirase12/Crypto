import { Box, HStack, Heading, Icon, Stack, Text } from "@chakra-ui/react";
import { RxDashboard } from "react-icons/rx";
import { BsArrowDownUp } from "react-icons/bs";
function Sidenav() {

    const navLinks = [
        {
          icon: RxDashboard,
          text: "Dashboard",
          link: "/",
        },
        {
          icon: BsArrowDownUp,
          text: "Transactions",
          link: "/transactions",
        },
      ];

// .hstack{
//     display:flex,
//     alignItems:center;
// }
  return (
    <Stack boxShadow="sm" maxW="16rem" h="100vh" bg="red">
        <Heading textAlign="center" fontSize="20px" as="h1" pt="56px">@CyptoFinance</Heading>

        <Box mt="6" mx="3">
        {navLinks.map((nav)=>(
            <HStack mx="12px" key={nav.text} px="4" py="3">
                 <Icon as={nav.icon} />
                <Text fontSize="14px">{nav.text}</Text>
            </HStack>
        ))}
        </Box>

    </Stack>
        

    
  )
}

export default Sidenav