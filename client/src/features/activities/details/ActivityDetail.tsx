import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"
import { Link, useNavigate, useParams } from "react-router";
import { useActivities } from "../../../lib/hooks/useActivities";

export default function ActivityDetail() {
    const navigate=useNavigate();
    const {id}=useParams();
    const {activity,isLoadingActivity}=useActivities(id);

    if(isLoadingActivity) return <Typography>Loading...</Typography>

    if(!activity) return <Typography>Activity Not Fount</Typography>

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
          component={Link}
          to={`/manage/${activity.id}`}
          color="primary"
        >
          Edit
        </Button>

        <Button
          onClick={()=>navigate('/activities')}
          color="inherit"
        >
          Cancel
        </Button>
      </CardActions>
    </Card>

  )
}
