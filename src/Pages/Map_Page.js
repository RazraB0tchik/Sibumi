import React from 'react';
import {MapContainer, TileLayer, Marker, Popup} from "react-leaflet";
import * as L from "leaflet";
import "../MainPage/css/StartPage.css"

const MapPage = ({page_status}) => {

    const position_IzBrasserie = [43.120744, 131.880876]
    const position_Kanditoria = [43.121327, 131.880786]
    const position_Sibumi = [43.119848, 131.880410]

    const SibumiIcon = L.icon({
        iconUrl: require("../picture_izBrazzerie/scooter.webp"),
        iconSize: [50, 50],
    })

    return (
        <div className={page_status==="main_page" ? "map_element" : "map_element_standart"}>
        <MapContainer center={position_IzBrasserie} zoom={17} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
            <TileLayer
                attribution='&copy; <a href="https://stamen-tiles">OpenStreetMap</a> contributors'
                url= 'https://stamen-tiles.a.ssl.fastly.net/toner-labels/{z}/{x}/{y}.png'
            />
            <Marker position={position_IzBrasserie}>
                <Popup>
                    Iz Brasserie
                </Popup>
            </Marker>
            <Marker position={position_Kanditoria} color={"red"}>
                <Popup>
                    Kanditoria
                </Popup>
            </Marker>
            <Marker position={position_Sibumi} icon={SibumiIcon}>
                <Popup>
                    Sibumi
                </Popup>
            </Marker>
        </MapContainer>
        </div>
    );
};

export default MapPage;
