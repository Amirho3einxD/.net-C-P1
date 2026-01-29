import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import type { FormEvent } from "react";
import { useActivities } from "../../../lib/hooks/useActivities";
import type { Activity } from "../../../lib/type";

type Props = {
  activity?: Activity
  closeForm: () => void
}
export default function Activityform({ activity, closeForm }: Props) {
  const { updateActivity,createActivity } = useActivities();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formDate = new FormData(event.currentTarget);

    const data: { [key: string]: FormDataEntryValue } = {};

    formDate.forEach((value, key) => {
      data[key] = value;
    });

    if (activity) {
      data.id = activity.id;
      await updateActivity.mutateAsync(data as unknown as Activity);
      closeForm();
    }else{
      await createActivity.mutateAsync(data as unknown as Activity);
      closeForm();
    }

  }
  return (
    <Paper sx={{ borderRadius: 3, padding: 3 }}>
      <Typography variant="h5" gutterBottom color="primary">
        Create activity
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
          <Button onClick={closeForm} color='inherit'>Cancel</Button>
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
