import { useEffect, useMemo, useState } from "react";
import { useController, type UseControllerProps, type FieldValues } from "react-hook-form"
import { type LocationIQSuggestion } from "../../../lib/type";
import { Box, debounce, List, ListItemButton, TextField, Typography } from "@mui/material";
import axios from "axios";

type Props<T extends FieldValues> = {
    label: string
} & UseControllerProps<T>
export default function LocationInput<T extends FieldValues>(props: Props<T>) {
    const { field, fieldState } = useController({ ...props });

    const [loading, setLoading] = useState(false);
    const [suggestions, setSuggestions] = useState<LocationIQSuggestion[]>([]);
    const [inputValue,SelectInputValue]=useState(field.value || '');

    useEffect(()=>{
        if(field.value&&typeof field.value==='object'){
            SelectInputValue(field.value.address||'');

        }else{
            SelectInputValue(field.value||'');
        }
    },[field.value])

    const locationIQToken = 'pk.464684305149b57d2711505f6b0a3414';
    const locationUrl = `https://api.locationiq.com/v1/autocomplete?key=${locationIQToken}&limit=5&dedupe=1&`;

    const fetchSuggestions = useMemo(

        () => debounce(async (query: string) => {
            if (!query || query.length < 3) {
                setSuggestions([]);
                return;
            }
            setLoading(true);
            try{
                const res = await axios.get<LocationIQSuggestion[]>(`${locationUrl}q=${query}`);
                setSuggestions(res.data)
            }
            catch(error)
            {
                console.log(error);
            }
            finally{
                setLoading(false);
            }
        }, 500),[locationUrl]
    );

    const handleChange=async(value:string)=>{
        field.onChange(value);
        await fetchSuggestions(value);
    }

    const handleSelect=(location:LocationIQSuggestion)=>{
       const country=location.address.country;
       const address=location.display_name;
       const longitude=location.lon;
       const latitude=location.lat;

       SelectInputValue(address);
       field.onChange({country,address,latitude,longitude});
       setSuggestions([]);
    }

    return (
        <Box>
            <TextField
                {...props}
                value={inputValue}
                onChange={e=>handleChange(e.target.value)}
                fullWidth
                variant="outlined"
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
            />
            {loading && <Typography>Loading...</Typography>}
            {suggestions.length > 0 && (
                <List sx={{ border: 1 }}>
                    {suggestions.map(suggestion => (
                        <ListItemButton
                            divider
                            key={suggestion.place_id}
                            onClick={() => {handleSelect(suggestion)}}
                        >
                            {suggestion.display_name}
                        </ListItemButton>
                    ))}
                </List>
            )}
        </Box>
    )
}
