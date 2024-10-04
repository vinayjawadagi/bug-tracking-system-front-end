import { Box, Typography, useTheme } from "@mui/material";
import Header from "../../components/header";
import Accordion from "@mui/material/Accordion";
import AccordianSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />
      <Accordion defaultExpanded>
        <AccordianSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} varirant="h5">
            Q1 question onChange
          </Typography>
        </AccordianSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
            eu lorem et ultricies
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordianSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} varirant="h5">
            Q2 question onChange
          </Typography>
        </AccordianSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
            eu lorem et ultricies
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordianSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} varirant="h5">
            Q3 question onChange
          </Typography>
        </AccordianSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
            eu lorem et ultricies
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordianSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} varirant="h5">
            Q4 question onChange
          </Typography>
        </AccordianSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
            eu lorem et ultricies
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
