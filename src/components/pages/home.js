import React from "react";
import { Box, Container, Typography, Button, Grid } from "@mui/material";
import { motion } from "framer-motion";
import { scroller } from "react-scroll";
import Img from "../../assets/myphoto.JPG";

const Home = () => {
  const ScrollToElement = (element) => {
    scroller.scrollTo(element, {
      duration: 800,
      delay: 100,
      smooth: true,
      offset: -80,
    });
  };

  return (
    <Box className="min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography
                variant="h2"
                className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent"
              >
                Hey, I'm Prabhjot Kaur
              </Typography>
              
              <Typography
                variant="h5"
                className="text-gray-600 dark:text-gray-300 mb-8"
              >
                I'm a React.js developer passionate about building beautiful and
                functional web applications
              </Typography>

              <div className="flex flex-wrap gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="contained"
                    onClick={() => ScrollToElement("about")}
                    className="btn-primary"
                  >
                    About Me
                  </Button>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="outlined"
                    href="https://drive.google.com/file/d/1dlUCWadG5y2b9HOO1AI4Q3sKlvFH6rJT/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-primary-600 text-primary-600 hover:bg-primary-50 dark:text-primary-400 dark:border-primary-400 dark:hover:bg-gray-800"
                  >
                    View Resume
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative z-10">
                <img
                  src={Img}
                  alt="Profile"
                  className="w-full h-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-600 rounded-2xl opacity-20 blur-2xl -z-10" />
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
