import './App.css';
import Parallax from './components/Parallax/Parallax';
import Header from './components/Header/Header';
import HeaderLinks from './components/Header/HeaderLinks';
import { container, title } from "./materialKit/material-kit-react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "./components/Grid/GridContainer";
import GridItem from "./components/Grid/GridItem";
import profile from "./images/christian.jpg";
import Button from "./components/CustomButtons/Button";
import NavPills from './components/NavPills/NavPills';
import Camera from "@material-ui/icons/Camera";
import Footer from "./components/Footer/Footer"


import studio1 from "./images/examples/studio-1.jpg";
import studio2 from "./images/examples/studio-2.jpg";
import studio3 from "./images/examples/studio-3.jpg";
import studio4 from "./images/examples/studio-4.jpg";
import studio5 from "./images/examples/studio-5.jpg";
import work1 from "./images/examples/olu-eletu.jpg";
import work2 from "./images/examples/clem-onojeghuo.jpg";
import work3 from "./images/examples/cynthia-del-rio.jpg";
import work4 from "./images/examples/mariya-georgieva.jpg";
import work5 from "./images/examples/clem-onojegaw.jpg";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";




const imagesStyle = {
  imgFluid: {
    maxWidth: "100%",
    height: "auto",
  },
  imgRounded: {
    borderRadius: "6px !important",
  },
  imgRoundedCircle: {
    borderRadius: "50% !important",
  },
  imgRaised: {
    boxShadow:
      "0 5px 15px -8px rgba(0, 0, 0, 0.24), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
  },
  imgGallery: {
    width: "100%",
    marginBottom: "2.142rem",
  },
  imgCardTop: {
    width: "100%",
    borderTopLeftRadius: "calc(.25rem - 1px)",
    borderTopRightRadius: "calc(.25rem - 1px)",
  },
  imgCardBottom: {
    width: "100%",
    borderBottomLeftRadius: "calc(.25rem - 1px)",
    borderBottomRightRadius: "calc(.25rem - 1px)",
  },
  imgCard: {
    width: "100%",
    borderRadius: "calc(.25rem - 1px)",
  },
  imgCardOverlay: {
    position: "absolute",
    top: "0",
    right: "0",
    bottom: "0",
    left: "0",
    padding: "1.25rem",
  },
};

const styles = {
  container,
  profile: {
    textAlign: "center",
    "& img": {
      maxWidth: "160px",
      width: "100%",
      margin: "0 auto",
      transform: "translate3d(0, -50%, 0)",
    },
  },
  description: {
    margin: "1.071rem auto 0",
    maxWidth: "600px",
    color: "#999",
    textAlign: "center !important",
  },
  name: {
    marginTop: "-80px",
  },
  ...imagesStyle,
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3",
  },
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
  },
  title: {
    ...title,
    display: "inline-block",
    position: "relative",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
  },
  socials: {
    marginTop: "0",
    width: "100%",
    transform: "none",
    left: "0",
    top: "0",
    height: "100%",
    lineHeight: "41px",
    fontSize: "20px",
    color: "#999",
  },
  navWrapper: {
    margin: "20px auto 50px auto",
    textAlign: "center",
  },
};

const useStyles = makeStyles(styles);

function App() {
  const classes = useStyles();

  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );

  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);

  return (
    <div>
    <Header
      color="transparent"
      brand="Material Kit React"
      rightLinks={<HeaderLinks />}
      fixed
      changeColorOnScroll={{
        height: 200,
        color: "white",
      }}
    />
    <Parallax
      small
      filter
      image={require("./images/profile-bg.jpg").default}
    />
    <div className={classNames(classes.main, classes.mainRaised)}>
      <div>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
              <div className={classes.profile}>
                <div>
                  <img src={profile} alt="..." className={imageClasses} />
                </div>
                <div className={classes.name}>
                  <h3 className={classes.title}>Christian Louboutin</h3>
                  <h6>DESIGNER</h6>
                  <Button justIcon link className={classes.margin5}>
                    <i className={"fab fa-twitter"} />
                  </Button>
                  <Button justIcon link className={classes.margin5}>
                    <i className={"fab fa-instagram"} />
                  </Button>
                  <Button justIcon link className={classes.margin5}>
                    <i className={"fab fa-facebook"} />
                  </Button>
                </div>
              </div>
            </GridItem>
          </GridContainer>
          <div className={classes.description}>
            <p>
              An artist of considerable range, Chet Faker — the name taken by
              Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs
              and records all of his own music, giving it a warm, intimate
              feel with a solid groove structure.{" "}
            </p>
          </div>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
              <NavPills
                alignCenter
                color="primary"
                tabs={[
                  {
                    tabButton: "Studio",
                    tabIcon: Camera,
                    tabContent: (
                      <GridContainer justify="center">
                        <GridItem xs={12} sm={12} md={4}>
                          <img
                            alt="..."
                            src={studio1}
                            className={navImageClasses}
                          />
                          <img
                            alt="..."
                            src={studio2}
                            className={navImageClasses}
                          />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={4}>
                          <img
                            alt="..."
                            src={studio5}
                            className={navImageClasses}
                          />
                          <img
                            alt="..."
                            src={studio4}
                            className={navImageClasses}
                          />
                        </GridItem>
                      </GridContainer>
                    ),
                  },
                  {
                    tabButton: "Work",
                    tabIcon: Palette,
                    tabContent: (
                      <GridContainer justify="center">
                        <GridItem xs={12} sm={12} md={4}>
                          <img
                            alt="..."
                            src={work1}
                            className={navImageClasses}
                          />
                          <img
                            alt="..."
                            src={work2}
                            className={navImageClasses}
                          />
                          <img
                            alt="..."
                            src={work3}
                            className={navImageClasses}
                          />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={4}>
                          <img
                            alt="..."
                            src={work4}
                            className={navImageClasses}
                          />
                          <img
                            alt="..."
                            src={work5}
                            className={navImageClasses}
                          />
                        </GridItem>
                      </GridContainer>
                    ),
                  },
                  {
                    tabButton: "Favorite",
                    tabIcon: Favorite,
                    tabContent: (
                      <GridContainer justify="center">
                        <GridItem xs={12} sm={12} md={4}>
                          <img
                            alt="..."
                            src={work4}
                            className={navImageClasses}
                          />
                          <img
                            alt="..."
                            src={studio3}
                            className={navImageClasses}
                          />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={4}>
                          <img
                            alt="..."
                            src={work2}
                            className={navImageClasses}
                          />
                          <img
                            alt="..."
                            src={work1}
                            className={navImageClasses}
                          />
                          <img
                            alt="..."
                            src={studio1}
                            className={navImageClasses}
                          />
                        </GridItem>
                      </GridContainer>
                    ),
                  },
                ]}
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
    <Footer />
  </div>
  );
}

export default App;
