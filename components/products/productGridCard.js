import { Grid } from '@mantine/core'

export default ({children}) => {
    return (
        <Grid justify="center" align="center">
            <Grid.Col
                span={{ base: 12, md: 6, lg: 3 }} >
                    {children}
            </Grid.Col>
        </Grid>
    )
}