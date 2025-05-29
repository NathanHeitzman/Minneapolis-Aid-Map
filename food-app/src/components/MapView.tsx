import { MapContainer, TileLayer, Marker as LeafletMarker, Popup } from "react-leaflet";
import BackupRestaurants from "../data/BackupRestaurants.json"
import BackupShelters from "../data/BackupShelters.json"
import 'leaflet/dist/leaflet.css';

interface MapViewProps {
    mode: string,
};

const Minneapolis: [number, number] = [44.9778,-93.2650]; //tuple of [Latitude,Longitude]
function MapView({ mode }: MapViewProps) {
    return (
        <MapContainer 
        center ={Minneapolis} 
        zoom={13} 
        scrollWheelZoom={true} //allows for user scrolling with mouse
        className="leaflet-map"
        style={{ height: '100%', width: '100%' }} //map will take up all of the container its in
        >
        
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {mode === "restaurants"
            ? //if mode is set to restaurants, return restaurant PopUps
            BackupRestaurants.map(restaurant => ( //map all positions of reaturants in the map
                <LeafletMarker position={restaurant.position as [number,number]} key = {restaurant.id}>
                    <Popup>
                        <strong><u>{restaurant.name + ":"}</u></strong>
                        <br></br>
                        {restaurant.description}
                        <br></br>
                        <a href = {restaurant.website} className='website-text'>Website</a>
                    </Popup>
                </LeafletMarker>))
            : //if mode is not set to restaurants, return shelter PopUps
            BackupShelters.map(shelter => (
                <LeafletMarker position={shelter.position as [number,number]} key = {shelter.id}>
                    <Popup>
                        <strong><u>{shelter.name}</u></strong>
                        <br></br>
                        {shelter.description}
                        <br></br>
                        <a href = {shelter.website} className="website-text">Website</a>
                    </Popup>
                </LeafletMarker>
            ))
        }

        {}
        </MapContainer>
    )
}
export default MapView;