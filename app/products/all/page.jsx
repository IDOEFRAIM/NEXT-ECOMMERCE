import {Text,Box} from '@mantine/core'
import Card from './'

export default function page(){
    return (
        <Box>
            <Text>
                All categories
            </Text>
            <Box>
            <Card w='300px' h='300px' />
            <Card w='300px' h='300px' />
            <Card w='300px' h='300px' />
            <Card w='300px' h='300px' />
           </Box>
        </Box>
    )
}