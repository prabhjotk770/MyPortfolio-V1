import React from "react";
import { Box, Container, Typography, IconButton } from "@mui/material";
import { motion } from "framer-motion";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    { icon: <GitHubIcon />, url: "https://github.com/prabhjotkaur" },
    { icon: <LinkedInIcon />, url: "https://linkedin.com/in/prabhjotkaur" },
    { icon: <TwitterIcon />, url: "https://twitter.com/prabhjotkaur" },
    { icon: <EmailIcon />, url: "mailto:prabhjotkaur@example.com" },
  ];

  return (
    <Box
      component="footer"
      className="bg-gray-900 text-white py-8 mt-16"
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center space-y-4"
        >
          <div className="flex space-x-4">
            {socialLinks.map((link, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <IconButton
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-primary-400 transition-colors duration-200"
                >
                  {link.icon}
                </IconButton>
              </motion.div>
            ))}
          </div>
          
          <Typography
            variant="body2"
            className="text-gray-400"
          >
            © {currentYear} Prabhjot Kaur. All rights reserved.
          </Typography>
          
          <Typography
            variant="body2"
            className="text-gray-400"
          >
            Built with ❤️ using React and Material-UI
          </Typography>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Footer;
