import React, { useContext, useEffect, useState } from "react";
import {
  DirectionsRenderer,
  GoogleMap,
  MarkerClusterer,
  MarkerF,
  OverlayView,
  OverlayViewF,
  Polyline,
  useJsApiLoader,
} from "@react-google-maps/api";
import { PickupContext } from "@context/PickupContext";
import { DropContext } from "@context/DropContext";
import { CiMapPin } from "react-icons/ci";
import { color } from "framer-motion";

const Mapsection = () => {
  const containerStyle = {
    display: "flex",
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "400px",
    borderRadius: "10px",
    border: "1px solid #ccc",
    overflow: "hidden",
    marginBottom: "20px",
    marginTop: "20px",
  };

  const { pickup, setPickup } = useContext(PickupContext);
  const { destination, setDestination } = useContext(DropContext);
  const [directionsRoutesPoints, setDirectionsRoutesPoints] = useState([]);

  const DirectionsRoutes = () => {
    const getDirection = new google.maps.DirectionsService();

    getDirection.route(
      {
        origin: new google.maps.LatLng(pickup.lat, pickup.lng),
        destination: new google.maps.LatLng(destination.lat, destination.lng),
        travelMode: google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === "OK") {
          setDirectionsRoutesPoints(result);
        } else {
          console.error("Error fetching directions");
        }
      }
    );
  };

  const [center, setCenter] = useState({
    lat: 28.6139,
    lng: 77.2090,
  });
  // const { isLoaded } = useJsApiLoader({
  //   id: "google-map-script",
  //   googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
  // });

  const [map, setMap] = React.useState(null);

  useEffect(() => {
    if (pickup?.length != [] && map) {
      map.panTo({
        lat: pickup.lat,
        lng: pickup.lng,
      });
      setCenter({
        lat: pickup.lat,
        lng: pickup.lng,
      });
    }
    if (pickup.length != [] && destination.length != []) {
      DirectionsRoutes();
    }
  }, [pickup]);

  useEffect(() => {
    if (destination?.length != [] && map) {
      setCenter({
        lat: destination.lat,
        lng: destination.lng,
      });
    }
    if (pickup.length != [] && destination.length != []) {
      DirectionsRoutes();
    }
  }, [destination]);

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={6}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={{ mapId: "14db600f422a1c3d" }}
    >
      {pickup.length != [] ? (
        <>
          <OverlayView
            position={{ lat: pickup.lat, lng: pickup.lng }}
            mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
          >
            <div
              style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {/* Label positioned below the icon */}
              <div
                style={{
                  marginTop: "4px", // Adjust to place label below the icon
                  fontSize: "14px",
                  whiteSpace: "nowrap",
                  fontWeight: "bold",
                  color: "white",
                  backgroundColor: "black",
                  padding: "5px 10px",
                  borderRadius: "5px",
                  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
                  cursor: "pointer",
                }}
              >
                {`${pickup.label}`}
              </div>
            </div>
          </OverlayView>
          <MarkerF
            position={{ lat: pickup.lat, lng: pickup.lng }}
            icon={{ url: "/pickup.svg", scaledSize: { width: 40, height: 40 } }}
          />
        </>
      ) : null}

      {destination.length != [] ? (
        <>
          <OverlayView
            position={{ lat: destination.lat, lng: destination.lng }}
            mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
          >
            <div
              style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {/* Label positioned below the icon */}
              <div
                style={{
                  marginTop: "4px", // Adjust to place label below the icon
                  fontSize: "14px",
                  fontWeight: "bold",
                  whiteSpace: "nowrap",
                  color: "white",
                  backgroundColor: "black",
                  padding: "5px 10px",
                  borderRadius: "5px",
                  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
                  cursor: "pointer",
                }}
              >
                {`${destination.label}`}
              </div>
            </div>
          </OverlayView>
          <MarkerF
            position={{ lat: destination.lat, lng: destination.lng }}
            icon={{ url: "/drop.svg", scaledSize: { width: 40, height: 40 } }}
          />
        </>
      ) : null}
      <DirectionsRenderer
        directions={directionsRoutesPoints}
        options={{
          suppressMarkers: true,
          polylineOptions: {
            strokeColor: "#000000",
            strokeWeight: 5, // Set the width of the line
            strokeOpacity: 0.8,
          },
        }}
      ></DirectionsRenderer>
    </GoogleMap>
  );
};
export default Mapsection;
