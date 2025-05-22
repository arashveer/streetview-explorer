"use client";

import { APIProvider, Map } from "@vis.gl/react-google-maps";
import { useState } from "react";

export default function Home() {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
    const [coords, setCoords] = useState<{ lat: number; lng: number }>({
        lat: 49.2827,
        lng: -123.1207,
    });
    const [zoom, setZoom] = useState<number>(12);
    if (!apiKey) {
        throw new Error("NEXT_PUBLIC_GOOGLE_MAPS_API_KEY is not defined.");
    }
    return (
        <div>
            <h1>Hello World!</h1>
            <APIProvider apiKey={apiKey}>
                <div style={{ height: "80vh", width: "100vw" }}>
                    <Map defaultCenter={coords} defaultZoom={zoom}></Map>
                </div>
            </APIProvider>
        </div>
    );
}
