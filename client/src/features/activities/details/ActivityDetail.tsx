import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"
import type { Activity } from "../../../lib/type"
import { useActivities } from "../../../lib/hooks/useActivities"

type Props = {
  selectedActivity: Activity
  cancelSelectedActivity: () => void
  openForm: (id: string) => void
}
export default function ActivityDetail({ openForm, selectedActivity, cancelSelectedActivity }: Props) {
    const{activities}=useActivities();
    const activity=activities?.find(x=>x.id==selectedActivity.id);
    if(!activity) return <Typography>Loading...</Typography>

  return (

    <Card sx={{ borderRadius: 3 }}>
      <CardMedia
        component="img"
        height="200"
        image={`/images/categoryImages/${activity.status}.jpg`}
        alt={activity.title}
      />

      <CardContent>
        <Typography variant="h5">
          {activity.title}
        </Typography>

        <Typography variant="subtitle1" fontWeight="light">
          {activity.country} - {activity.address}
        </Typography>

        <Typography variant="body1" sx={{ mt: 2 }}>
          {activity.description}
        </Typography>

        <Typography variant="body2" sx={{ mt: 2, color: 'text.secondary' }}>
          Date: {new Date(activity.date).toLocaleDateString()}
        </Typography>

        <Typography variant="body2">
          Capacity: {activity.reservedCount} / {activity.capacity}
        </Typography>

        <Typography variant="body2">
          Price: ${activity.price}
        </Typography>
      </CardContent>

      <CardActions>
        <Button
          onClick={() => openForm(activity.id)}
          color="primary"
        >
          Edit
        </Button>

        <Button
          onClick={cancelSelectedActivity}
          color="inherit"
        >
          Cancel
        </Button>
      </CardActions>
    </Card>

  )
}
