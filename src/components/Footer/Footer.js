import React from 'react';
import {Flex, Box, Text} from '@chakra-ui/core';
import {FaPhone, FaEnvelope, FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaWhatsapp, FaTerminal} from 'react-icons/fa';

const Footer = () => {

  return (
    <Flex direction={{xs: 'column', md: 'row'}} aling="center" justify="space-around" bg="imuko.orange" p={5} color="#fff">
      <Box textAlign="center" mb={5}>
        <Text fontSize="lg" mb={3}>Contáctenos</Text>
        <span className="icon-container">
          <FaPhone />
          <p>+57 304-466-56-63</p>
        </span>
        <span className="icon-container">
          <FaEnvelope />
          <a href="mailto:tatiana@imuko.co">TATIANA@IMUKO.CO</a>
        </span>
      </Box>
      <Box textAlign="center" mb={5}>
        <Text fontSize="lg" mb={3}>Síguenos</Text>
        <Box className="social-container">
          <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/imuko.co/"><FaFacebookF /></a>
          <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/imuko_co"><FaTwitter /></a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/imuko/"><FaLinkedinIn /></a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCRf-GROXeMsvlFWpTTeq1_w/videos?view_as=subscriber"><FaYoutube /></a>
          <a href="#"><FaWhatsapp /></a>
        </Box>
      </Box>
      <Box textAlign="center" mb={5}>
        <span className="icon-container" style={{marginBottom: '0.75rem'}}>
          <FaTerminal fontSize="2rem" />
          <Text fontSize="lg">Desarrollado por</Text>
        </span>
        <p>Imuko © Todos los derechos reservados</p>
      </Box>
    </Flex>
  )
}

export default Footer
