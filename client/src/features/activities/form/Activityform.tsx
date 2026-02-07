import { Box, Button, Paper, Typography } from "@mui/material";
import { useActivities } from "../../../lib/hooks/useActivities";
import { useNavigate, useParams } from "react-router";
import { useForm } from 'react-hook-form';
import { useEffect } from "react";
import { activitySchema, type ActivitySchema } from "../../../lib/schemas/activitySchema";
import { zodResolver } from '@hookform/resolvers/zod';
import TextInput from "../../../app/shared/component/TextInput";
import SelectInput from "../../../app/shared/component/SelectInput";
import { statusOptions } from "./statusOptions";
import DateTimeInput from "../../../app/shared/component/DateTimeInput";
import LocationInput from "../../../app/shared/component/LocationInput";
import NumberInput from "../../../app/shared/component/NumberInput";
import { categoryOptions } from "./categoryOptions";

export default function Activityform() {


  const { control, handleSubmit, reset } = useForm<ActivitySchema>({
    mode: "onTouched",
    resolver: zodResolver(activitySchema)
  });
  const navigate = useNavigate();
  const { id } = useParams();
  const { activity, isLoadingActivity, createActivity, updateActivity } = useActivities(id);

  useEffect(() => {
    if (activity) reset({
      ...activity,
      location: {
        country: activity.country,
        address: activity.address,
        latitude: activity.latitude,
        longitude: activity.longitude
      }
    });
  }, [activity, reset]);

  const onSubmit = async (data: ActivitySchema) => {
    const { location, ...rest } = data;
    const flattenedData  = { ...rest, ...location }
    try {
      if (activity) {
        updateActivity.mutate({ ...activity, ...flattenedData }, {
          onSuccess: () => navigate(`/activities/${activity?.id}`)
        })
      }else{
        createActivity.mutate(flattenedData,{
          onSuccess:(id)=>navigate(`/activities/${id}`)
        })
      }

    } catch (error) {
      console.log(error);
    }
  };

  if (isLoadingActivity) return <Typography>Loading activity ...</Typography>;
  return (
    <Paper sx={{ borderRadius: 3, padding: 3 }}>
      <Typography variant="h5" gutterBottom color="primary">
        {activity ? 'Edit activity' : 'Create activity'}
      </Typography>
      <Box component='form' onSubmit={handleSubmit(onSubmit)} display='flex' flexDirection='column' gap={3}>
        <TextInput label='Title' control={control} name='title' />
        <TextInput label='Description' control={control} name='description' multiline rows={3} />
        <Box display='flex' gap={3}>
          <DateTimeInput label='Date' control={control} name='date' />
          <SelectInput items={statusOptions} label='Status' name='status' control={control}></SelectInput>
          <SelectInput items={categoryOptions} label='Category' name='category' control={control}></SelectInput>
        </Box>
        <Box display='flex' gap={3}>
          <NumberInput label='Price' control={control} name="price" />
          <NumberInput label='Capacity' control={control} name="capacity" />
        </Box>
        <LocationInput control={control} label="Enter the location" name="location" />

        <Box display='flex' justifyContent='end' gap={3}>
          <Button color='inherit'>Cancel</Button>
          <Button
            type='submit'
            color='success'
            variant="contained"
            disabled={updateActivity.isPending || createActivity.isPending}
          >Submit</Button>
        </Box>
      </Box>

    </Paper>
  )
}
