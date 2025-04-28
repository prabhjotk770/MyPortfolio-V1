import React, { useState } from "react";
import { scroller } from "react-scroll";
import { 
  AppBar, 
  Toolbar, 
  IconButton, 
  Drawer, 
  List, 
  ListItem, 
  ListItemText,
  useMediaQuery, 
  useTheme,
  Box,
  Button,
  Typography
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { motion } from "framer-motion";
import { ThemeContext } from "../../context/ThemeContext";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const { isDarkMode, toggleTheme } = React.useContext(ThemeContext);

  const ScrollToElement = (element) => {
    scroller.scrollTo(element, {
      duration: 800,
      delay: 100,
      smooth: true,
      offset: -80,
    });
    setMobileOpen(false);
  };

  const navItems = [
    { name: "Home", element: "home" },
    { name: "About", element: "about" },
    { name: "Certificates", element: "certificates" },
    { name: "Projects", element: "projects" },
    { name: "Contact", element: "contact" },
  ];

  const drawer = (
    <Box className="bg-white dark:bg-gray-800 h-full">
      <List>
        {navItems.map((item) => (
          <ListItem
            button
            key={item.name}
            onClick={() => ScrollToElement(item.element)}
            className="hover:bg-primary-50 dark:hover:bg-gray-700 transition-colors duration-200"
          >
            <ListItemText
              primary={
                <Typography className="text-gray-800 dark:text-white font-medium">
                  {item.name}
                </Typography>
              }
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar 
      position="fixed" 
      className="bg-gray-800 dark:bg-gray-800 shadow-md"
      elevation={0}
    >
      <Toolbar className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-grow"
        >
          <Typography
            variant="h6"
            component="div"
            className="text-2xl font-righteous bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent hover:from-gray-200 hover:via-white hover:to-gray-200 transition-all duration-300"
          >
            Prabhjot Kaur
          </Typography>
        </motion.div>

        {!isMobile && (
          <Box className="flex items-center space-x-4">
            {navItems.map((item) => (
              <Button
                key={item.name}
                onClick={() => ScrollToElement(item.element)}
                sx={{
                  color: 'white',
                  '&:hover': {
                    color: '#93c5fd',
                    backgroundColor: 'transparent'
                  }
                }}
                className="font-medium relative group px-4 py-2"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-200 dark:bg-primary-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </Button>
            ))}
            <IconButton
              onClick={toggleTheme}
              className="bg-gray-700 dark:bg-gray-700 text-white dark:text-gray-300 hover:bg-gray-600 dark:hover:bg-gray-600 transition-colors duration-200 rounded-full p-2"
            >
              {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Box>
        )}

        {isMobile && (
          <>
            <IconButton
              onClick={toggleTheme}
              className="bg-gray-700 dark:bg-gray-700 text-white dark:text-gray-300 hover:bg-gray-600 dark:hover:bg-gray-600 transition-colors duration-200 rounded-full p-2 mr-2"
            >
              {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
            <IconButton
              edge="end"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="bg-gray-700 dark:bg-gray-700 text-white dark:text-gray-300 hover:bg-gray-600 dark:hover:bg-gray-600 transition-colors duration-200 rounded-full p-2"
            >
              <MenuIcon />
            </IconButton>
          </>
        )}
      </Toolbar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        className="dark:bg-gray-800"
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
