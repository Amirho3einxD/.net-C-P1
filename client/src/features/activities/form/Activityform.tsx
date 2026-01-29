import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import type { FormEvent } from "react";
import { useActivities } from "../../../lib/hooks/useActivities";
import { useNavigate, useParams } from "react-router";
import type { Activity } from "../../../lib/type";

export default function Activityform() {
  const {id}=useParams();
  const { updateActivity, createActivity, activity,isLoadingActivity } = useActivities(id);
  const navigate = useNavigate();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formDate = new FormData(event.currentTarget);

    const data: { [key: string]: FormDataEntryValue } = {};

    formDate.forEach((value, key) => {
      data[key] = value;
    });

    if (activity) {
      data.id =activity.id;
      await updateActivity.mutateAsync(data as unknown as Activity);
      navigate(`/activities/${activity.id}`);
    }else{
      createActivity.mutate(data as unknown as Activity,{
      onSuccess :(id)=>{
        navigate(`activities/${id}`);
      }
      });
    }

  }
  if(isLoadingActivity) return <Typography>Loading activity ...</Typography>
  return (
    <Paper sx={{ borderRadius: 3, padding: 3 }}>
      <Typography variant="h5" gutterBottom color="primary">
        {activity?'Edit activity':'Create activity'}
      </Typography>
      <Box component='form' onSubmit={handleSubmit} display='flex' flexDirection='column' gap={3}>
        <TextField
          name='Title'
          label='Title'
          defaultValue={activity?.title}
        />

        <TextField
          name='Description'
          label='Description'
          defaultValue={activity?.description}
          multiline
          rows={3}
        />

        <TextField
          name='Country'
          label='Country'
          defaultValue={activity?.country}
        />

        <TextField
          name='Address'
          label='Address'
          defaultValue={activity?.address}
        />

        <TextField
          name='Date'
          label='Date'
          type='date'
          defaultValue={activity?.date ? new Date(activity.date).toISOString().slice(0, 10) : ''}
        />

        <TextField
          name='CreatedBy'
          label='Created By'
          defaultValue={activity?.createdBy}
        />

        <Box display='flex' justifyContent='end' gap={3}>
          <Button color='inherit'>Cancel</Button>
          <Button
            type='submit'
            color='success'
            variant="contained"
            disabled={updateActivity.isPending||createActivity.isPending}
          >Submit</Button>
        </Box>
      </Box>

    </Paper>
  )
}
