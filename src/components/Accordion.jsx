import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

import ChevronDown from '../components/iconos/ChevronDown';

const dataFaqs = [
  {
    id: 1,
    question: 'What is Bookmark?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.',
  },
  {
    id: 2,
    question: 'How can I request a new browser?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
  },
  {
    id: 3,
    question: 'Is there a mobile app',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
  },
  {
    id: 4,
    question: 'What about other Chromium browsers?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
  },
];

export default function SimpleAccordion() {
  return (
    <div className="w-1/2 max-sm:w-full max-sm:px-4 max-lg:w-3/4">
      {dataFaqs.map((e) => (
        <Accordion key={e.id}>
          <AccordionSummary
            expandIcon={<ChevronDown fill='#6366F1'/>}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography sx={{ fontWeight: 'bold' }}>{e.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{color:'#94a3b8'}}>{e.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
