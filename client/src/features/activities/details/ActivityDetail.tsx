import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"

type Props={
    activity:Activity
    cancelSelectedActivity:()=>void
    openForm:(id:string)=>void

}
export default function ActivityDetail({openForm,activity,cancelSelectedActivity}:Props) {
  return (
    <Card sx={{borderRadius:3}}>
        <CardMedia
        component='img'
        src={`/images/categoryImages/${activity.city}`}
        
        />
      <CardContent>
        <Typography variant="h5">${activity.city}</Typography>
        <Typography variant="subtitle1" fontWeight='light'>${activity.city}</Typography>
        <Typography variant="body1">${activity.city}</Typography>
      </CardContent>
      <CardActions>
        <Button onClick={()=>openForm(activity.id)} color="primary">Edit</Button>
        <Button onClick={cancelSelectedActivity} color="inherit">Canel</Button>
      </CardActions>
    </Card>
  )
}
