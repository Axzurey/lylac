import { Box, Button } from "@chakra-ui/react";
import { Sidebar } from "../components/Sidebar";
import { colors } from "../shared/theme";

export function MainInterface() {
    return (
    <Box minW='100vw' minH='100vh' bg={colors.weaksuper}>
        <Sidebar items={
            [
                {
                    text: 'Test!',
                    view: (<Button>heeece</Button>)
                },
                {
                    text: 'NOOOOGET!!',
                    view: (<Button>heecee</Button>)
                }
            ]
        }/>
    </Box>
    )
}