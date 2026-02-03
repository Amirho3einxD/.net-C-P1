import { MapContainer, Marker, Popup, TileLayer } from'react-leaflet';
import 'leaflet/dist/leaflet.css';

type Props ={
    position:[number,number];
    address:string
}

export default function MapComponent({position,address}:Props) {
    return (
        <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{height:'100%'}}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
                <Popup>
                    {address}
                </Popup>
            </Marker>
        </MapContainer>
  )
}
