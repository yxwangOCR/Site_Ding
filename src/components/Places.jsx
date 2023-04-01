import React, { useMemo, useState } from 'react';
import { GoogleMap, LoadScript, Marker, useLoadScript } from "@react-google-maps/api";
import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete';

const containerStyle = {
    width: '14rem',
    height: '14rem',
};

const Places = () => {

    const Maps = () => {
        const [selected, setSelected] = useState(null);
        const center = useMemo(() => ({
            lat: 45.508888,
            lng: -73.561668
        }), []);
        return (
            <>

                <div>
                    <PlacesAutocomplete setSelected={setSelected} />
                </div>
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={10}
                >
                    {selected && <Marker position={selected} />}
                </GoogleMap>
            </>

        )
    }


    const PlacesAutocomplete = ({ setSelected }) => {
        const { ready, value, setValue, suggestions: { status, data }, clearSuggestions } = usePlacesAutocomplete();

        return <input type="text" value={value} onChange={(e) => setValue(e.target.value)} disabled={!ready} />
    }




    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyBkXNywynZmbY-KTuVhpF1LzqyGic0CRqI",
        libraries: ["places"],
    });
    if (!isLoaded) return <div>Loading...</div>;
    return <Maps />
}



export default Places