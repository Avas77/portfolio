import React from "react";
import "./Projects.scss";
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
import trillo from "../../assets/trillo.png";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import buddha from "../../assets/buddha1.png";
import expense from "../../assets/expense.png";

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
    <div className="projects" id="projects">
      <h1 className="projects__heading">Projects</h1>
      <Container maxWidth="lg">
        <Grid container spacing={2} className="projects__cards">
          <Grid item xs={12} sm={6} md={4}>
            <ThemeProvider theme={theme}>
              <Card className="cards__shadow">
                <CardActionArea disableRipple="true">
                  <CardMedia
                    component="img"
                    alt="Covid-19 Tracker and Info app"
                    height="350"
                    image={expense}
                    title="Fight Covid app"
                  />
                  <CardContent className="contentarea">
                    <Typography gutterBottom variant="h5" component="h2">
                      Voice Powered Expense Tracker
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                      className="projects__cards-desc"
                    >
                      Web Application that helps you keep track of your income
                      and expenses to make sure you dont overspend your budget.
                      It has the added functionality of adding incomes and
                      expense data with your voice so you dont have to type
                      every word.
                    </Typography>
                    <div className="projects__cards-tools">
                      <span>React.Js</span>
                      <span className="extra">Chakra UI</span>
                      <span>Speechly</span>
                    </div>
                  </CardContent>
                </CardActionArea>
                <CardActions className="projects__btn">
                  <Button
                    size="small"
                    color="primary"
                    href="https://github.com/Avas77/expense-tracker"
                    target="_blank"
                  >
                    <span className="txt">Source Code</span>
                    <span className="keys">&lt; &gt;</span>
                  </Button>
                  <Button
                    size="small"
                    color="primary"
                    href="https://avas-expense-tracker-2022.netlify.app/"
                    target="_blank"
                  >
                    <span className="txt">Live Demo</span>
                    <span className="keys">&#8599;</span>
                  </Button>
                </CardActions>
              </Card>
            </ThemeProvider>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
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
                      <span className="extra">Material UI</span>
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

          <Grid item xs={12} sm={6} md={4}>
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
                      Build your own type of burger using your own recipe. Add
                      or remove ingredients as you like to make your burger
                      tasty. It has User-friendly UI. Finally, place an order
                      for your burger.
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
                    href="https://github.com/Avas77/BurgerBuilder"
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

          <Grid item xs={12} sm={6} md={4}>
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
                      different cities around the world. It has dynamic
                      background wallpaper i.e, It changes according to the
                      weather of the city.
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

          <Grid item xs={12} sm={6} md={4}>
            <ThemeProvider theme={theme}>
              <Card className="cards__shadow">
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Hotel Info Website"
                    height="350"
                    image={trillo}
                    title="Hotel Info site"
                  />
                  <CardContent className="contentarea">
                    <Typography gutterBottom variant="h5" component="h2">
                      Hotel Info Design
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                      className="projects__cards-desc"
                    >
                      This is a simple design page which displays information
                      about a certain hotel. This project can be seen as a
                      practice project for my Flexbox and Sass CSS skills.
                    </Typography>
                    <div className="projects__cards-tools">
                      <span>React.Js</span>
                      <span className="extra">Sass</span>
                      <span>Github</span>
                    </div>
                  </CardContent>
                </CardActionArea>
                <CardActions className="projects__btn">
                  <Button
                    size="small"
                    color="primary"
                    href="https://github.com/Avas77/Trillo"
                    target="_blank"
                  >
                    <span className="txt">Source Code</span>
                    <span className="keys">&lt; &gt;</span>
                  </Button>
                  <Button
                    className="not-allowed"
                    size="small"
                    color="primary"
                    href=""
                    target="_blank"
                    disabled
                  >
                    <span className="txt">Live Demo</span>
                    <span className="keys">&#8599;</span>
                  </Button>
                </CardActions>
              </Card>
            </ThemeProvider>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <ThemeProvider theme={theme}>
              <Card className="cards__shadow">
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
                  <Button size="small" color="primary" disabled>
                    <span className="txt">Live Demo</span>
                    <span className="keys">&#8599;</span>
                  </Button>
                </CardActions>
              </Card>
            </ThemeProvider>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
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
                      them with others. It has login and signup features. It
                      also provides exciting challenges for writing short
                      stories.
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
                  <Button
                    className="not-allowed"
                    size="small"
                    color="primary"
                    disabled
                  >
                    <span className="txt">Live Demo</span>
                    <span className="keys">&#8599;</span>
                  </Button>
                </CardActions>
              </Card>
            </ThemeProvider>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <ThemeProvider theme={theme}>
              <Card className="cards__shadow">
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Write short stories impress others"
                    height="350"
                    image={buddha}
                    title="Short Stories Blog"
                  />
                  <CardContent className="contentarea">
                    <Typography gutterBottom variant="h5" component="h2">
                      Travels and Tours website design
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                      className="projects__cards-desc"
                    >
                      This is a simple UI design of a travel and tours website
                      using Figma. In this design, I have used attractive ways
                      to show different packages and overall design of the
                      website.
                    </Typography>
                    <div className="projects__cards-tools">
                      <span>FontAwesome</span>
                      <span className="extra">Figma</span>
                      <span>Photoshop</span>
                    </div>
                  </CardContent>
                </CardActionArea>
                <CardActions className="projects__btn">
                  <Button size="small" color="primary" target="_blank" disabled>
                    <span className="txt">Source Code</span>
                    <span className="keys">&lt; &gt;</span>
                  </Button>
                  <Button
                    className="not-allowed"
                    size="small"
                    color="primary"
                    target="_blank"
                    href="https://www.figma.com/proto/JRWeTwwBDyvEG0P18Ib2VG/Untitled?node-id=5%3A0&scaling=min-zoom"
                  >
                    <span className="txt">Live Demo</span>
                    <span className="keys">&#8599;</span>
                  </Button>
                </CardActions>
              </Card>
            </ThemeProvider>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Projects;
