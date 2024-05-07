import React from 'react';
import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Chip,
} from '@material-ui/core';
import { LocationOn, Phone } from '@material-ui/icons';
import { Rating } from '@material-ui/lab';
import useStyles from './styles';

const PlaceDetails = ({ place, selected, refProp }) => {
  console.log(place);
  const noInfo = 'No Information Available';
  const hotelimg =
    'https://images.unsplash.com/photo-1517840901100-8179e982acb7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWx8ZW58MHx8MHx8&w=1000&q=80';
  const classes = useStyles();

  if (selected)
    refProp?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  return (
    <Card elevation={6}>
      <CardMedia
        style={{ height: 350 }}
        image={place.photo ? place.photo.images.large.url : hotelimg}
        title={place.name}
      />
      <CardContent>
        <Typography gutterBottom variant='h4'>
          {place.name}
        </Typography>
        <Box display='flex' justifyContent='space-between'>
          <Rating value={Number(place.rating)} readOnly />
          <Typography gutterBottom variant='subtitle1'>
            out of {place.num_reviews} reviews
          </Typography>
        </Box>
        <Box display='flex' justifyContent='space-between'>
          <Typography variant='subtitle1'>Price</Typography>
          <Typography gutterBottom variant='subtitle1'>
            {place.price ? place.price : noInfo}
          </Typography>
        </Box>
        <Box display='flex' justifyContent='space-between'>
          <Typography variant='subtitle1'>Ranking</Typography>
          <Typography gutterBottom variant='subtitle1'>
            {place.ranking}
          </Typography>
        </Box>
        {place.address && (
          <Typography
            gutterBottom
            variant='body2'
            color='textSecondary'
            className={classes.subtitle}
          >
            <LocationOn />
            {place.address}
          </Typography>
        )}
        {place.phone && (
          <Typography
            variant='body2'
            color='textSecondary'
            className={classes.spacing}
          >
            <Phone /> {place.phone}
          </Typography>
        )}
      </CardContent>
      <CardActions>
        <Button size='small' color='primary'>
          Book
        </Button>
      </CardActions>
    </Card>
  );
};

export default PlaceDetails;
