import { Box, Container, CssBaseline, Typography } from "@mui/material";
import { useState } from "react"
import NavBar from "./Navbar";
import ActivitiesDashboard from "../../features/activities/dashboard/ActivitiesDashboard";
import {useActivities} from "../../lib/hooks/useActivities";
import type { Activity } from "../../lib/type";

function App() {
  const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined);
  const [editMode, setEditModel] = useState(false);
  const {activities,isLoading}= useActivities();
  const handleSelectedActivity = (id: string) => {
    setSelectedActivity(activities!.find(x => x.id === id));
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

  return (
    <Box sx={{ bgcolor: '#eeeeee', minHeight: '100vh' }}>
      <CssBaseline />
      <NavBar openForm={handleOpenForm} />
      <Container maxWidth='xl' sx={{ mt: 3 }}>
        {!activities || isLoading ? (
          <Typography></Typography>
        ) : (
          <ActivitiesDashboard
            activities={activities}
            selectActivity={handleSelectedActivity}
            cancelSelectedActivity={handleCancelSelectedActivity}
            selectedActivity={selectedActivity}
            editMode={editMode}
            openForm={handleOpenForm}
            closeForm={handleFormClose}
          />
        )}

      </Container>
    </Box>
  )
}

export default App
