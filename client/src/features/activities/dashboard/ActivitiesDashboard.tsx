import { Grid } from "@mui/material";
import ActivityList from "./ActivityList";
import ActivityDetail from "../details/ActivityDetail";
import Activityform from "../form/Activityform";
import type { Activity } from "../../../lib/type";

type Props = {
  activities: Activity[]
  selectActivity: (id: string) => void;
  cancelSelectedActivity: () => void;
  selectedActivity?: Activity;
  openForm:(id:string)=>void;
  closeForm:()=>void;
  editMode:boolean;
}

export default function ActivitiesDashboard({ editMode,closeForm,openForm,activities, selectActivity, cancelSelectedActivity, selectedActivity }: Props) {
  return (
    <Grid container spacing={3}>
      <Grid size={7}>
        <ActivityList
          activities={activities}
          selectActivity={selectActivity}
        />
      </Grid>
      <Grid size={5}>
        {selectedActivity && !editMode &&
          <ActivityDetail
            selectedActivity={selectedActivity}
            cancelSelectedActivity={cancelSelectedActivity}
            openForm={openForm}
          />
        }
        {editMode && 
        <Activityform 
         closeForm={closeForm} 
         activity={selectedActivity} 
        />}
      </Grid>
    </Grid>
  )
}
