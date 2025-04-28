import React, { useState } from "react";
import { Box, Container, Typography, Grid, Paper, Button, Modal, IconButton } from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import certificate1 from "../../assets/c2.png";
import certificate2 from "../../assets/c1.jpg";
import certificate3 from "../../assets/image0.jpeg";
import certificate4 from "../../assets/image2.jpeg";
import certificate5 from "../../assets/image1.jpeg";
import CloseIcon from '@mui/icons-material/Close';

const Certificates = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [open, setOpen] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const handleOpen = (certificate) => {
    setSelectedCertificate(certificate);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setSelectedCertificate(null);
  };

  const certificates = [
    // Add your certificates here in this format:
    {
      image: certificate1,
      title: "Star Performer 2021",
      issuer: "Locobuzz",
      date: "2021", 
    },
    {
      image: certificate2,
      title: "Star Performer 2022",
      issuer: "Locobuzz",
      date: "2022", 
    },
    {
      image: certificate3,
      title: "Product Innovation Award",
      issuer: "DTICI",
      date: "2023", 
    },
    {
      image: certificate4,
      title: "Internal Paper Publication",
      issuer: "DTICI",
      date: "2024", 
    },
    {
      image: certificate5,
      title: "Accomplishment Award",
      issuer: "DTICI",
      date: "2024", 
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
            Certificates
          </Typography>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-primary-400 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <Grid container spacing={4}>
            {certificates.map((certificate, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <motion.div variants={itemVariants}>
                  <Paper
                    elevation={4}
                    className="flex flex-col items-center justify-between p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-shadow duration-300 h-full cursor-pointer"
                    onClick={() => handleOpen(certificate)}
                  >
                    <div className="w-full flex justify-center mb-4">
                      <img
                        src={certificate.image}
                        alt={certificate.title}
                        className="w-auto h-44 max-h-48 object-contain rounded-xl border border-gray-300 dark:border-gray-700 shadow-md bg-white dark:bg-gray-900"
                      />
                    </div>
                    <Typography
                      variant="h6"
                      className="text-xl font-bold mb-2 text-center text-gray-800 dark:text-white"
                    >
                      {certificate.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      className="text-sm text-gray-500 dark:text-gray-400 text-center mb-1"
                    >
                      {certificate.issuer}
                    </Typography>
                    <Typography
                      variant="body2"
                      className="text-xs text-gray-400 dark:text-gray-500 text-center mb-2"
                    >
                      {certificate.date}
                    </Typography>
                    {certificate.link && (
                      <Button
                        variant="outlined"
                        href={certificate.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full mt-2"
                        size="small"
                        onClick={e => e.stopPropagation()}
                      >
                        View Certificate
                      </Button>
                    )}
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
        {/* Modal for enlarged certificate */}
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="certificate-modal-title"
          aria-describedby="certificate-modal-description"
          closeAfterTransition
          sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1500 }}
        >
          <Box
            sx={{
              position: 'relative',
              outline: 'none',
              bgcolor: 'background.paper',
              borderRadius: 3,
              boxShadow: 24,
              p: 2,
              maxWidth: '90vw',
              maxHeight: '90vh',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <IconButton
              onClick={handleClose}
              sx={{ position: 'absolute', top: 8, right: 8, color: 'grey.700', zIndex: 10 }}
              aria-label="close"
            >
              <CloseIcon fontSize="large" />
            </IconButton>
            {selectedCertificate && (
              <>
                <img
                  src={selectedCertificate.image}
                  alt={selectedCertificate.title}
                  style={{
                    maxWidth: '80vw',
                    maxHeight: '70vh',
                    borderRadius: '16px',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
                    marginBottom: 16,
                  }}
                />
                <Typography
                  variant="h5"
                  sx={{ fontWeight: 'bold', mb: 1, textAlign: 'center' }}
                >
                  {selectedCertificate.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: 'text.secondary', mb: 0.5, textAlign: 'center' }}
                >
                  {selectedCertificate.issuer}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: 'text.disabled', textAlign: 'center' }}
                >
                  {selectedCertificate.date}
                </Typography>
              </>
            )}
          </Box>
        </Modal>
      </Container>
    </Box>
  );
};

export default Certificates; 