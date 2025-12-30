import { Box, Button, Card, CardActions, CardContent, Chip, Typography } from "@mui/material"

type Props={
    activity:Activity
    selectActivity:(id:string)=> void;
    deleteActivity:(id:string)=>void;
}

export default function ActivityCard({deleteActivity,activity,selectActivity}:Props) {
  return (
    <Card sx={{borderRadius:3}}>
      <CardContent>
        <Typography variant="h5">{activity.city}</Typography>
        <Typography sx={{color:'text.secondary',mb:1}}>{activity.date}</Typography>
        <Typography variant="body2">{activity.latitude}</Typography>
      </CardContent>
      <CardActions sx={{display:'flex',justifyContent:'space-between',pb:2}}>
        <Chip label={activity.cancelled} variant="outlined"/>
        <Box sx={{display:'flex', gap:2}}>
<Button onClick={()=>selectActivity(activity.id)} size="medium"variant="contained">View</Button>
<Button onClick={()=>deleteActivity(activity.id)} size="medium"variant="contained" color="error">Delete</Button>
        </Box> 
      </CardActions>
    </Card>
  )
}
