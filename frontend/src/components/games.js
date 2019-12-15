
import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import './games.css';


const Games = ({ games }) => {
  return (
    <div className="card">
    <center><h1>Games list</h1></center>
    {games.map((game) => (
    <Card  style={{ backgroundColor: "lightsteelblue"}}>
      <CardActionArea>
        <CardContent>
        </CardContent>
        <CardActions>
            <CardMedia
              className="media"
              image={game.boxart}
              title= {game.name}  
            />
            <CardContent>
            <Typography variant="h3" component="h1">
              {game.name}   
            </Typography>
            <Typography variant="h6" component="h6" style={{ marginTop: 10 }}>
		            Platform: {game.platform}
            </Typography>
            <Typography variant="h6" component="h6">
                Genre: {game.genre}
            </Typography>
            <Typography variant="h6" component="h6">
                Publisher: {game.publisher}
            </Typography>
            <Typography variant="h6" component="h6">
                N. Players: {game.players}
            </Typography>
            <Typography variant="h6" component="h6">
                Release Date: {game.releaseDate}
            </Typography>
            </CardContent>
        </CardActions>
      </CardActionArea>
    </Card>
    ))}
    </div>
  );
}

export default Games
