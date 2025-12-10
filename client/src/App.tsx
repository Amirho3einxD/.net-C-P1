import { List, ListItem, ListItemText, Typography } from "@mui/material";
import axios from "axios";
import { Activity, useEffect, useState } from "react"

function App() {
const [activities,setActivities]=useState<Activity[]>([]);

  useEffect(()=> {
   axios.get<Activity[]>('https://localhost:8585/api/activities')
    .then(response=> setActivities(response.data))
  },[])

  return (
    <>
      <Typography variant='h3'>Data db</Typography>
      <List>
        {activities.map((activity)=>(
          <ListItem key={activity.id}>
            <ListItemText>{activity.city}</ListItemText>
          </ListItem>
        ))}
      </List>
    </>
  )
}

export default App
