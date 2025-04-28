import React from "react";
import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import aboutImage from "../../assets/about.png";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const skills = [
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      name: "React",
    },
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      name: "Javascript",
    },
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      name: "HTML5",
    },
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      name: "CSS",
    },
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
      name: "Redux",
    },
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      name: "NodeJS",
    },
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
      name: "C++",
    },
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
      name: "Kotlin",
    },
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg",
      name: "Android",
    },
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      name: "Docker",
    },
    {
      url: "https://raw.githubusercontent.com/microsoft/PowerBI-Icons/main/SVG/Power-BI.svg",
      name: "Power BI",
    },
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      name: "TypeScript",
    }
  ];

  const tools = [
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
      name: "VScode",
    },
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      name: "Github",
    },
    { 
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg", 
      name: "NPM" 
    },
    { 
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", 
      name: "Bootstrap" 
    },
    { 
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg", 
      name: "Material UI" 
    },
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
      name: "Firebase",
    },
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      name: "MongoDB",
    },
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      name: "Express",
    },
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
      name: "Postman",
    },
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      name: "Figma",
    },
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg",
      name: "Jira",
    },
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      name: "Tailwind CSS",
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <Box
      ref={ref}
      className="py-20 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
    >
      <Container maxWidth="lg">
        <Grid container spacing={8} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <Typography
                variant="h2"
                className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent"
              >
                About Me
              </Typography>
              
              <Typography
                variant="body1"
                className="text-gray-600 dark:text-gray-300 mb-8 text-lg leading-relaxed"
              >
                I am a web and mobile application developer from India. I design and
                code beautifully simple things, and I love new technologies. I have
                a passion for creating intuitive and dynamic user interfaces. I
                believe in continuous learning and challenging myself to grow
                professionally.
              </Typography>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative z-10">
                <img
                  src={aboutImage}
                  alt="About me illustration"
                  className="w-full h-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-600 rounded-2xl opacity-20 blur-2xl -z-10" />
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <Paper
                elevation={3}
                className="p-6 rounded-2xl bg-white dark:bg-gray-800"
              >
                <Typography
                  variant="h4"
                  className="text-2xl font-bold mb-6 text-center text-primary-600 dark:text-primary-400"
                >
                  Skills
                </Typography>
                <Grid container spacing={2}>
                  {skills.map((skill, index) => (
                    <Grid item xs={6} sm={3} key={index}>
                      <motion.div
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                        className="flex flex-col items-center p-4 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200"
                      >
                        <img
                          src={skill.url}
                          alt={skill.name}
                          className={skill.className || "w-16 h-16 object-contain mb-2"}
                        />
                        <Typography
                          variant="body2"
                          className="text-gray-600 dark:text-gray-300"
                        >
                          {skill.name}
                        </Typography>
                      </motion.div>
                    </Grid>
                  ))}
                </Grid>
              </Paper>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <Paper
                elevation={3}
                className="p-6 rounded-2xl bg-white dark:bg-gray-800"
              >
                <Typography
                  variant="h4"
                  className="text-2xl font-bold mb-6 text-center text-primary-600 dark:text-primary-400"
                >
                  Tools
                </Typography>
                <Grid container spacing={2}>
                  {tools.map((tool, index) => (
                    <Grid item xs={6} sm={3} key={index}>
                      <motion.div
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                        className="flex flex-col items-center p-4 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200"
                      >
                        <img
                          src={tool.url}
                          alt={tool.name}
                          className="w-16 h-16 object-contain mb-2"
                        />
                        <Typography
                          variant="body2"
                          className="text-gray-600 dark:text-gray-300"
                        >
                          {tool.name}
                        </Typography>
                      </motion.div>
                    </Grid>
                  ))}
                </Grid>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;

