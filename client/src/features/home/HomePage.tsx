import { Group } from '@mui/icons-material'
import { Box, Button, Paper, Typography } from '@mui/material'


export default function HomePage() {
  return (
    <Paper
      sx={{
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        gap: 6,
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundImage: "linear-gradient(135deg, #6366F1 0%, #60A5FA 69%, #38BDF8 89%)",
      }}
    >
      <Box sx={{
        display: 'flex', color: 'white',
        gap: 3,
        alignItems: 'center',
        alignContent: 'center',
      }}
      >
        <Group sx={{ height: 110, width: 100 }} />
        <Typography variant="h1">
          My .Net/React
        </Typography>
      </Box>
        <Typography variant="h2">
          Welcome to my Project
        </Typography>
        
        <Button
          href="/activities"
          size="large"
          variant="contained"
          sx={{ height: 80, borderRadius: 4, fontSize: '1.5rem' }}
        >Start!
        </Button>
    </Paper>
  )
}
