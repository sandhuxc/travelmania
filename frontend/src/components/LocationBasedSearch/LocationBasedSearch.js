import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CssBaseline, Grid } from '@material-ui/core';
import Header from './Header/Header';
import List from './List/List';
import Map from './Map/Map';
import { getPlacesData } from '../../api';
import { Navigate } from 'react-router-dom';

function LocationBasedSearch() {
  let navigate = useNavigate();

  const [childClicked, setChildClicked] = useState(null);
  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [type, setType] = useState('hotels');
  const [rating, setRating] = useState('');
  const [filteredPlaces, setFilteredPlaces] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  useEffect(() => {
    const filteredPlaces = places.filter((place) => place.rating > rating);
    setFilteredPlaces(filteredPlaces);
  }, [rating]);

  useEffect(() => {
    if (bounds.sw && bounds.ne) {
      setIsLoading(true);
      getPlacesData(type, bounds.sw, bounds.ne).then((data) => {
        setPlaces(data?.filter((place) => place.name));
        setFilteredPlaces([]);
        setIsLoading(false);
      });
    }
  }, [type, bounds]);
  return (
    <>
      {/* {setTimeout(() => {
        if (
          window.confirm(
            'Your Free 5 minutes trial has been expired. Do you wish to continue?'
          ) == true
        ) {
          navigate('/login');
          clearTimeout();
        } else {
          navigate('/');
          clearTimeout();
        }
      }, 5000)} */}
      <CssBaseline />
      <Header setCoordinates={setCoordinates} />
      <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={12} md={4}>
          <List
            places={filteredPlaces.length ? filteredPlaces : places}
            childClicked={childClicked}
            isLoading={isLoading}
            type={type}
            setType={setType}
            rating={rating}
            setRating={setRating}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
            places={filteredPlaces.length ? filteredPlaces : places}
            setChildClicked={setChildClicked}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default LocationBasedSearch;
