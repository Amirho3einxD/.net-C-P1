import { Box, Container, CssBaseline } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react"
import NavBar from "./Navbar";
import ActivitiesDashboard from "../../features/activities/dashboard/ActivitiesDashboard";

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined);
  const [editMode, setEditModel] = useState(false);
  useEffect(() => {
    axios.get<Activity[]>('https://localhost:8585/api/activities')
      .then(response => setActivities(response.data))
  }, [])

  const handleSelectedActivity = (id: string) => {
    setSelectedActivity(activities.find(x => x.id === id));
  }
  const handleCancelSelectedActivity = () => {
    setSelectedActivity(undefined);
  }

  const handleOpenForm = (id?: string) => {
    if (id) handleSelectedActivity(id);
    else handleCancelSelectedActivity();
    setEditModel(true);
  }
  const handleFormClose = () => {
    setEditModel(false);
  }

  const handleSubmitForm=(activity:Activity)=>{
    if(activity.id){
      setActivities(activities.map(x=> x.id===activity.id ? activity:x))
    }else{
      const newActivity={...activity,id:activities.length.toString()}
      setSelectedActivity(newActivity);
      setActivities([...activities,newActivity])
    }
    setEditModel(false);
  }

  const handleDelete =(id:string)=>{
    setActivities(activities.filter(x=>x.id!==id))
  }

  return (
    <Box sx={{ bgcolor: '#eeeeee' }}>
      <CssBaseline />
      <NavBar openForm={handleOpenForm}/>
      <Container maxWidth='xl' sx={{ mt: 3 }}>
        <ActivitiesDashboard activities={activities}
          selectActivity={handleSelectedActivity}
          cancelSelectedActivity={handleCancelSelectedActivity}
          selectedActivity={selectedActivity}
          editMode={editMode}
          openForm={handleOpenForm}
          closeForm={handleFormClose}
          submitForm={handleSubmitForm}
          deleteActivity={handleDelete}
        />
      </Container>
    </Box>
  )
}

export default App
