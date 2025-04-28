import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import ProjectCard from "./ProjectCard";

import netflix_img from "../../../assets/netflix_bg.png";
import amazon_img from "../../../assets/amazon_bg.png";
import weather_img from "../../../assets/weather_bg.png";
import friendship_img from "../../../assets/friendship_bg.png";
import reactCrashCourse_img from "../../../assets/reactCrashCourse.png";
import shopping_img from "../../../assets/shopping.png";

const projects = [
  {
    image: shopping_img,
    title: "Shopping App",
    description: "A simple shopping app with integrated features like, filter products, add to cart, authentication etc.",
    technologies: ["ReactJs", "Javascript", "CSS", "HTML", "Redux", "Firebase"],
    link: "https://shopping-appp.netlify.app/",
  },
  {
    image: reactCrashCourse_img,
    title: "React Crash Course",
    description: "A simple web app for ReactJs crash course. It's a quick guide to learn ReactJs",
    technologies: ["ReactJs", "Javascript", "Node", "CSS", "HTML"],
    link: "https://reactcrashcourse.netlify.app/",
  },
  {
    image: netflix_img,
    title: "Netflix Clone",
    description: "It's a demo Netflix web app. Netflix's original web series trailer can be played as well.",
    technologies: ["ReactJs", "Javascript", "CSS", "HTML"],
    link: "https://prabhjotk770-net-flix.netlify.app/",
  },
  {
    image: weather_img,
    title: "Weather Forecast App",
    description: "It provides accurate weather conditions of different places in the world.",
    technologies: ["ReactJs", "Javascript", "CSS", "HTML"],
    link: "https://prabhjotweatherapp.netlify.app/",
  },
  {
    image: amazon_img,
    title: "Amazon Clone",
    description: "It's a demo Amazon web app. User authorization and add to cart features integrated.",
    technologies: ["ReactJs", "Javascript", "Firebase", "React Context API", "CSS", "HTML"],
    link: "https://prabhjotkaur-ecommerce-clone.netlify.app/",
  },
  {
    image: friendship_img,
    title: "Friendship Quiz",
    description: "It's a fun application you can use to know how well your friends really know you.",
    technologies: ["ReactJs", "Javascript", "MongoDB", "NodeJs", "CSS", "HTML"],
    link: "https://friendshipquiz.netlify.app/quiz",
  },
];

function Project1() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <Box
      ref={ref}
      className="py-20 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Typography
            variant="h2"
            className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent"
          >
            My Projects
          </Typography>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-primary-400 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <Grid container spacing={4}>
            {projects.map((project, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <ProjectCard project={project} index={index} />
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
}

export default Project1;
