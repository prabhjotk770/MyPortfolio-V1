import React from "react";
import { motion } from "framer-motion";
import { Paper, Typography, Chip, Button } from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";

const ProjectCard = ({ project, index }) => {
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
      },
    },
  };

  return (
    <motion.div variants={itemVariants}>
      <Paper
        elevation={3}
        className="h-[400px] bg-white dark:bg-gray-800 rounded-2xl overflow-hidden group hover:shadow-xl transition-shadow duration-300 flex flex-col"
      >
        <div className="relative overflow-hidden h-40">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        <div className="p-4 flex flex-col h-[calc(400px-10rem)]">
          <Typography
            variant="h5"
            className="text-xl font-bold mb-1 text-gray-800 dark:text-white line-clamp-1"
          >
            {project.title}
          </Typography>

          <Typography
            variant="body2"
            className="text-gray-600 dark:text-gray-300 mb-1 line-clamp-2 flex-grow"
          >
            {project.description}
          </Typography>

          <div className="flex flex-wrap gap-1 mb-2 min-h-[32px]">
            {project.technologies.map((tech, i) => (
              <Chip
                key={i}
                label={tech}
                size="small"
                className="bg-primary-100 text-primary-600 dark:bg-primary-900 dark:text-primary-300"
              />
            ))}
          </div>

          <Button
            variant="contained"
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full mt-auto"
            endIcon={<LaunchIcon />}
          >
            View Project
          </Button>
        </div>
      </Paper>
    </motion.div>
  );
};

export default ProjectCard; 