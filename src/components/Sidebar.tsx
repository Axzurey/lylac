import { Box, Button, Center, HStack, Spacer, VStack } from "@chakra-ui/react";
import React, { ReactElement, useState } from "react";
import { colors } from "../shared/theme";

interface sidebarItem {
    view: ReactElement,
    text: string,
}

interface sidebarProps {
    items: sidebarItem[],
}

export function Sidebar(props: sidebarProps) {
    const [currentSidebarIndex, setCurrentsidebarIndex] = useState(0);

    return (
        <HStack spacing='0rem'>
            <VStack w='15vw' h='100vh' bg={colors.super} align='stretch' spacing='1rem'>
                {
                    props.items.map((v, i) => {
                        return (
                            <>
                                <SidebarItem 
                                    onclick={() => {
                                        setCurrentsidebarIndex(i);
                                    }}
                                    text={v.text}
                                    active={currentSidebarIndex === i}
                                />
                            </>
                        )
                    })
                }
            </VStack>
            <Box h='100vh' w='85vw' bg='red.500'>
                {props.items[currentSidebarIndex] && props.items[currentSidebarIndex].view}
            </Box>
        </HStack>
    )
}

interface sidebarItemProps extends React.PropsWithChildren {
    onclick: () => void,
    text: string,
    active: boolean
}

export function SidebarItem(props: sidebarItemProps) {
    return (
        <Center pt='1rem' w='100%' h='2.5rem'>
            <Button 
                w='80%' 
                h='100%' 
                bg={props.active ? colors.primary : 'transparent'}
                _hover={{bg: props.active ? colors.hover : colors.weakhover}}
                onClick={props.onclick}>
            
                {props.text}
            </Button>
        </Center>
    )
}