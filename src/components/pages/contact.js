import React, { useState, useContext } from "react";
import { Box, Container, Typography, Grid, TextField, Button, Avatar, Paper, Snackbar, Alert } from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { ThemeContext } from "../../context/ThemeContext";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Simulate form submission
      console.log(formData);
      setSnackbar({
        open: true,
        message: "Message sent successfully!",
        severity: "success",
      });
      setFormData({ name: "", email: "", message: "" });
    }
  };

  const socialLinks = [
    {
      icon: <TwitterIcon />,
      url: "https://twitter.com/PrabhKaur770",
      label: "Twitter",
    },
    {
      icon: <EmailIcon />,
      url: "mailto:prabhjotk770@gmail.com",
      label: "Email",
    },
    {
      icon: <LinkedInIcon />,
      url: "https://www.linkedin.com/in/prabhjotk770",
      label: "LinkedIn",
    },
    {
      icon: <GitHubIcon />,
      url: "https://github.com/prabhjotk770",
      label: "GitHub",
    },
  ];

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
            Get in Touch
          </Typography>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-primary-400 mx-auto rounded-full" />
        </motion.div>

        <Grid container spacing={8}>
          <Grid item xs={12} md={7}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <Paper
                elevation={3}
                className="p-8 rounded-2xl bg-white dark:bg-gray-800"
              >
                <Typography
                  variant="h5"
                  className="text-2xl font-bold mb-4 text-gray-800 dark:text-white"
                >
                  Any Queries or Suggestions?
                </Typography>
                <Typography
                  variant="body1"
                  className="text-gray-600 dark:text-gray-300 mb-6"
                >
                  I'd <FavoriteIcon className="text-red-500" /> to respond!
                </Typography>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <TextField
                    fullWidth
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    variant="outlined"
                    error={!!errors.name}
                    helperText={errors.name}
                    className="bg-white dark:bg-gray-700"
                  />

                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    variant="outlined"
                    error={!!errors.email}
                    helperText={errors.email}
                    className="bg-white dark:bg-gray-700"
                  />

                  <TextField
                    fullWidth
                    label="Message"
                    name="message"
                    multiline
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    variant="outlined"
                    error={!!errors.message}
                    helperText={errors.message}
                    className="bg-white dark:bg-gray-700"
                  />

                  <Button
                    type="submit"
                    variant="contained"
                    className="btn-primary w-full"
                  >
                    Send Message
                  </Button>
                </form>
              </Paper>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={5}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <Paper
                elevation={3}
                className="p-8 rounded-2xl bg-white dark:bg-gray-800 h-full"
              >
                <div className="flex justify-between items-center mb-6">
                  <Typography
                    variant="h5"
                    className="text-2xl font-bold text-gray-800 dark:text-white"
                  >
                    Connect with Me
                  </Typography>
                  <Button
                    onClick={toggleTheme}
                    variant="outlined"
                    className="text-gray-600 dark:text-gray-300"
                  >
                    {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
                  </Button>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-3 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                    >
                      <Avatar className="bg-primary-600 dark:bg-primary-400">
                        {link.icon}
                      </Avatar>
                      <Typography
                        variant="body1"
                        className="text-gray-600 dark:text-gray-300"
                      >
                        {link.label}
                      </Typography>
                    </motion.a>
                  ))}
                </div>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
      >
        <Alert
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          severity={snackbar.severity}
          className="w-full"
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;
