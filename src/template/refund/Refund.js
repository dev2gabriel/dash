import './Refund.css'
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Refund(){
    return(
        <div className='accordion-container'>
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <Typography>Reembolsos</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    <ul>
                        <li>tal 1</li>
                        <li>tal 1</li>
                        <li>tal 1</li>
                        <li>tal 1</li>
                    </ul>
                </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default Refund