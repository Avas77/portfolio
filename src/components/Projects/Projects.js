import React from "react";
import "./Projects.scss";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import covid from "../../assets/covid.png";
import burger from '../../assets/burger.png';
import weather from '../../assets/weather.png';

const Projects = () => {
  return (
    <div className="projects">
      <h1 className="projects__heading">Projects</h1>
      <Grid container spacing={2} className="projects__cards">
        <Grid item xs={4}>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Covid-19 Tracker and Info app"
                height="350"
                image={covid}
                title="Fight Covid app"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Fight Covid
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  className="projects__cards-desc"
                >
                  Web Application that raises awareness about the current global
                  pandemic. It records number of deaths, infected and recovered
                  people around the world. It has google maps functionality.
                </Typography>
                <div className="projects__cards-tools">
                  <span>React.Js</span>
                  <span className="extra">Materialize CSS</span>
                  <span>Github</span>
                </div>
              </CardContent>
            </CardActionArea>
            <CardActions className="projects__btn">
              <Button size="small" color="primary">
                <span className="txt">Source Code</span>
                <span className="keys">&lt; &gt;</span>
              </Button>
              <Button size="small" color="primary">
                <span className="txt">Live Demo</span>
                <span className="keys">&#8599;</span>
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={4}>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Build your own burger app"
                height="350"
                image={burger}
                title="Burger Builder app"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Burger Builder
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  className="projects__cards-desc"
                >
                 Build your own type of burger using your own recipe. Add or 
                 remove ingredients as you like to make your burger tasty. 
                 It has User-friendly UI. Finally, place an order for your burger.
                </Typography>
                <div className="projects__cards-tools">
                  <span>React.Js</span>
                  <span className="extra">Firebase</span>
                  <span>Github</span>
                </div>
              </CardContent>
            </CardActionArea>
            <CardActions className="projects__btn">
              <Button size="small" color="primary">
                <span className="txt">Source Code</span>
                <span className="keys">&lt; &gt;</span>
              </Button>
              <Button size="small" color="primary">
                <span className="txt">Live Demo</span>
                <span className="keys">&#8599;</span>
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={4}>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="See weather data"
                height="350"
                image={weather}
                title="Weather Finder app"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Weather Finder
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  className="projects__cards-desc"
                >
                  Web Application that raises awareness about the current global
                  pandemic. It records number of deaths, infected and recovered
                  people around the world. It has google maps functionality.
                </Typography>
                <div className="projects__cards-tools">
                  <span>React.Js</span>
                  <span className="extra">Materialize CSS</span>
                  <span>Github</span>
                </div>
              </CardContent>
            </CardActionArea>
            <CardActions className="projects__btn">
              <Button size="small" color="primary">
                <span className="txt">Source Code</span>
                <span className="keys">&lt; &gt;</span>
              </Button>
              <Button size="small" color="primary">
                <span className="txt">Live Demo</span>
                <span className="keys">&#8599;</span>
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={4}>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="350"
                image={covid}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Fight Covid
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  className="projects__cards-desc"
                >
                  Web Application that raises awareness about the current global
                  pandemic. It records number of deaths, infected and recovered
                  people around the world. It has google maps functionality.
                </Typography>
                <div className="projects__cards-tools">
                  <span>React.Js</span>
                  <span className="extra">Materialize CSS</span>
                  <span>Github</span>
                </div>
              </CardContent>
            </CardActionArea>
            <CardActions className="projects__btn">
              <Button size="small" color="primary">
                <span className="txt">Source Code</span>
                <span className="keys">&lt; &gt;</span>
              </Button>
              <Button size="small" color="primary">
                <span className="txt">Live Demo</span>
                <span className="keys">&#8599;</span>
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={4}>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="350"
                image={covid}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Fight Covid
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  className="projects__cards-desc"
                >
                  Web Application that raises awareness about the current global
                  pandemic. It records number of deaths, infected and recovered
                  people around the world. It has google maps functionality.
                </Typography>
                <div className="projects__cards-tools">
                  <span>React.Js</span>
                  <span className="extra">Materialize CSS</span>
                  <span>Github</span>
                </div>
              </CardContent>
            </CardActionArea>
            <CardActions className="projects__btn">
              <Button size="small" color="primary">
                <span className="txt">Source Code</span>
                <span className="keys">&lt; &gt;</span>
              </Button>
              <Button size="small" color="primary">
                <span className="txt">Live Demo</span>
                <span className="keys">&#8599;</span>
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={4}>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="350"
                image={covid}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Fight Covid
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  className="projects__cards-desc"
                >
                  Web Application that raises awareness about the current global
                  pandemic. It records number of deaths, infected and recovered
                  people around the world. It has google maps functionality.
                </Typography>
                <div className="projects__cards-tools">
                  <span>React.Js</span>
                  <span className="extra">Materialize CSS</span>
                  <span>Github</span>
                </div>
              </CardContent>
            </CardActionArea>
            <CardActions className="projects__btn">
              <Button size="small" color="primary">
                <span className="txt">Source Code</span>
                <span className="keys">&lt; &gt;</span>
              </Button>
              <Button size="small" color="primary">
                <span className="txt">Live Demo</span>
                <span className="keys">&#8599;</span>
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Projects;
