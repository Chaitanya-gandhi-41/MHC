
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function SimpleAccordion() {
  return (
    <div>   {/* We currently offer tests for depression, anxiety, and personality.
    Depression Tests
    Beck Depression Test
    PHQ-9
    Anxiety Tests
    GAD-7
    Personality Tests
    Big 5 Personality  */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>  Beck Depression Test</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          The Beck Depression Inventory (BDI) is a self-report questionnaire used to 
          measure the severity of depression. It was developed by Dr. Aaron T. Beck, a 
          psychiatrist, and released in 1961 1. The BDI includes 21 items, each of which corresponds to a symptom of depression 1. The BDI is widely used to screen for depression and to measure behavioral manifestations and severity of depression 2. It can be used for ages 13 to 80 2. 
          The inventory takes approximately 10 minutes to complete 2.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>PHQ-9</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          The Patient Health Questionnaire-9 (PHQ-9) is a self-reported depression scale that’s 
          used to screen patients for major depressive disorder 1. The test is made up of nine 
          questions that ask about the frequency of symptoms over the past two weeks 1. The PHQ-9 
          incorporates DSM-IV depression diagnostic criteria with other leading major depressive symptoms 
          into a brief self-report tool 2. The tool rates the frequency of the symptoms which factors into the scoring severity index 2. It has been validated for use in primary care 3. It is not a screening tool for depression but it is used to monitor 
          the severity of depression and response to treatment 3.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>GAD-7</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          The Generalized Anxiety Disorder 7 (GAD-7) is a self-administered patient
          questionnaire that is used as a screening tool and severity measure for
          generalized anxiety disorder (GAD) 1. The test is made up of seven questions 
          that ask about the frequency of symptoms over the past two weeks 1. The GAD-7 is a 
         sensitive  self-administrated test to assess generalized anxiety disorder, 
          normally used in outpatient and primary care settings for referral to a psychiatrist pending outcome 2.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
      <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography> Big 5 Personality</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
         


         
          </Typography>
        </AccordionDetails>
      </Accordion>
      
    </div>
  );
}