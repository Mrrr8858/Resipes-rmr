import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Chip from '@mui/material/Chip';
import { Link } from 'react-router-dom';
import { GetTimeCooking } from './Details';

class FoodCard extends React.Component {
    render() {
        return (
            <Link to={this.props.id.toString()} className="text-decoration-none text-reset">
                <Card className='m-3'>
                    <CardActionArea sx={{ maxWidth: 348, maxHeight: 384, minHeight: 384, minWidth: 348 }} className="d-flex align-items-start">
                        <div>
                            <div className="cardImg" >
                                <CardMedia
                                    component="img"
                                    height="196"
                                    image={this.props.img}
                                    alt={this.props.name}
                                    sx={{ maxWidth: 348, maxHeight: 196, minHeight: 196, minWidth: 348 }}
                                />
                                <div className="chips">
                                    <Chip label={GetTimeCooking(this.props.time)} size="small" className="chip" />
                                    <Chip label={this.props.caloricity.toString() + "  kCal"} size="small" className="chip" />
                                    <Chip label={this.props.cuisine} size="small" className="chip" />
                                </div>
                            </div>
                            <CardContent>
                                <Typography variant="h5" className='fontGilory'>
                                    {this.props.name}
                                </Typography>
                                <Typography variant="body2">
                                    {this.props.description}
                                </Typography>
                            </CardContent>
                        </div>
                    </CardActionArea>
                </Card>
            </Link>
        );
    }

}

export default FoodCard;