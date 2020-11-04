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
import burger from "../../assets/burger.png";
import weather from "../../assets/weather.png";
import tictac from "../../assets/tictac.jpg";
import story from "../../assets/story.png";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  props: {
    // Name of the component ⚛️
    MuiButtonBase: {
      // The default props to change
      disableRipple: true, // No more ripple, on the whole application 💣!
    },
  },
});

const Projects = () => {
  return (
    <div className="projects">
      <h1 className="projects__heading">Projects</h1>
      <Grid container spacing={2} className="projects__cards">
        <Grid item xs={4}>
          <ThemeProvider theme={theme}>
            <Card className="cards__shadow">
              <CardActionArea disableRipple="true">
                <CardMedia
                  component="img"
                  alt="Covid-19 Tracker and Info app"
                  height="350"
                  image={covid}
                  title="Fight Covid app"
                />
                <CardContent className="contentarea">
                  <Typography gutterBottom variant="h5" component="h2">
                    Fight Covid
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    className="projects__cards-desc"
                  >
                    Web Application that raises awareness about the current
                    global pandemic. It records number of deaths, infected and
                    recovered people around the world. It has google maps
                    functionality.
                  </Typography>
                  <div className="projects__cards-tools">
                    <span>React.Js</span>
                    <span className="extra">Materialize CSS</span>
                    <span>Github</span>
                  </div>
                </CardContent>
              </CardActionArea>
              <CardActions className="projects__btn">
                <Button
                  size="small"
                  color="primary"
                  href="https://github.com/robina-bajracharya/fight-covid"
                  target="_blank"
                >
                  <span className="txt">Source Code</span>
                  <span className="keys">&lt; &gt;</span>
                </Button>
                <Button
                  size="small"
                  color="primary"
                  href="https://fightcovid-91c55.web.app/"
                  target="_blank"
                >
                  <span className="txt">Live Demo</span>
                  <span className="keys">&#8599;</span>
                </Button>
              </CardActions>
            </Card>
          </ThemeProvider>
        </Grid>

        <Grid item xs={4}>
          <ThemeProvider theme={theme}>
            <Card className="cards__shadow">
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Build your own burger app"
                  height="350"
                  image={burger}
                  title="Burger Builder app"
                />
                <CardContent className="contentarea">
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
                    remove ingredients as you like to make your burger tasty. It
                    has User-friendly UI. Finally, place an order for your
                    burger.
                  </Typography>
                  <div className="projects__cards-tools">
                    <span>React.Js</span>
                    <span className="extra">Firebase</span>
                    <span>Github</span>
                  </div>
                </CardContent>
              </CardActionArea>
              <CardActions className="projects__btn">
                <Button
                  size="small"
                  color="primary"
                  href="https://github.com/Avas77/example"
                  target="_blank"
                >
                  <span className="txt">Source Code</span>
                  <span className="keys">&lt; &gt;</span>
                </Button>
                <Button
                  size="small"
                  color="primary"
                  href="https://burger-builder-32682.web.app/"
                  target="_blank"
                >
                  <span className="txt">Live Demo</span>
                  <span className="keys">&#8599;</span>
                </Button>
              </CardActions>
            </Card>
          </ThemeProvider>
        </Grid>

        <Grid item xs={4}>
          <ThemeProvider theme={theme}>
            <Card className="cards__shadow">
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="See weather data"
                  height="350"
                  image={weather}
                  title="Weather Finder app"
                />
                <CardContent className="contentarea">
                  <Typography gutterBottom variant="h5" component="h2">
                    Weather Finder
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    className="projects__cards-desc"
                  >
                    Simple web app thats shows the weather realted data of
                    different cities around the world. It has dynamic background
                    wallpaper i.e, It changes according to the weather of the
                    city.
                  </Typography>
                  <div className="projects__cards-tools">
                    <span>React.Js</span>
                    <span className="extra">Firebase</span>
                    <span>Github</span>
                  </div>
                </CardContent>
              </CardActionArea>
              <CardActions className="projects__btn">
                <Button
                  size="small"
                  color="primary"
                  href="https://github.com/Avas77/weatherfinder"
                  target="_blank"
                >
                  <span className="txt">Source Code</span>
                  <span className="keys">&lt; &gt;</span>
                </Button>
                <Button
                  size="small"
                  color="primary"
                  href="https://weatherfinder-73a44.web.app/"
                  target="_blank"
                >
                  <span className="txt">Live Demo</span>
                  <span className="keys">&#8599;</span>
                </Button>
              </CardActions>
            </Card>
          </ThemeProvider>
        </Grid>

        <Grid item xs={4} className="cards__shadow">
          <ThemeProvider theme={theme}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="350"
                  image={covid}
                  title="Contemplative Reptile"
                />
                <CardContent className="contentarea">
                  <Typography gutterBottom variant="h5" component="h2">
                    Fight Covid
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    className="projects__cards-desc"
                  >
                    Web Application that raises awareness about the current
                    global pandemic. It records number of deaths, infected and
                    recovered people around the world. It has google maps
                    functionality.
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
          </ThemeProvider>
        </Grid>

        <Grid item xs={4} className="cards__shadow">
          <ThemeProvider theme={theme}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Tic Tac Toe game redefined"
                  height="350"
                  image={tictac}
                  title="Tic Tac Toe app"
                />
                <CardContent className="contentarea">
                  <Typography gutterBottom variant="h5" component="h2">
                    Tic Tac Toe
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    className="projects__cards-desc"
                  >
                    Simple Tic Tac Toe game app to play with your friends or
                    family. It is a two player game with attractive UI. It is
                    hosted online using netlify
                  </Typography>
                  <div className="projects__cards-tools">
                    <span>React.Js</span>
                    <span className="extra">Firebase</span>
                    <span>Github</span>
                  </div>
                </CardContent>
              </CardActionArea>
              <CardActions className="projects__btn">
                <Button
                  size="small"
                  color="primary"
                  href="https://github.com/Avas77/Tic-Tac-Toe"
                  target="_blank"
                >
                  <span className="txt">Source Code</span>
                  <span className="keys">&lt; &gt;</span>
                </Button>
                <Button size="small" color="primary">
                  <span className="txt">Live Demo</span>
                  <span className="keys">&#8599;</span>
                </Button>
              </CardActions>
            </Card>
          </ThemeProvider>
        </Grid>

        <Grid item xs={4}>
          <ThemeProvider theme={theme}>
            <Card className="cards__shadow">
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Write short stories impress others"
                  height="350"
                  image={story}
                  title="Short Stories Blog"
                />
                <CardContent className="contentarea">
                  <Typography gutterBottom variant="h5" component="h2">
                    Short Stories Blog
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    className="projects__cards-desc"
                  >
                    This web app allows users to write short stories and share
                    them with others. It has login and signup features. It also
                    provides exciting challenges for writing short stories.
                  </Typography>
                  <div className="projects__cards-tools">
                    <span>Python</span>
                    <span className="extra">Django</span>
                    <span>Postgresql</span>
                  </div>
                </CardContent>
              </CardActionArea>
              <CardActions className="projects__btn">
                <Button
                  size="small"
                  color="primary"
                  href="https://github.com/Avas77/Short-Stories-Blog"
                  target="_blank"
                >
                  <span className="txt">Source Code</span>
                  <span className="keys">&lt; &gt;</span>
                </Button>
                <Button size="small" color="primary">
                  <span className="txt">Live Demo</span>
                  <span className="keys">&#8599;</span>
                </Button>
              </CardActions>
            </Card>
          </ThemeProvider>
        </Grid>
      </Grid>
    </div>
  );
};

export default Projects;
