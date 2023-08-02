import React, { useState } from 'react';
import {Accordion,AccordionSummary,AccordionDetails,Typography} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

export default function MuiAccordian() {
    const [expanded,setExpanded] = useState<string | false>(false)
    const handleChange = (isExpanded:boolean, panel: string) =>{
        setExpanded(isExpanded ? panel:false)
    }
  return (
    <div>
        <Accordion expanded={expanded === 'panel1'} onChange={(e,isExpanded)=> handleChange(isExpanded,'panel1')}>
            <AccordionSummary id='panel1-header' aria-controls='panel1-content' expandIcon={<ExpandMoreIcon/>}>
               <Typography>Accordian 1</Typography> 
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quo repellat nob.Loew is the busy are the bacjheeoun usuaudhfg the fusmkd.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion  expanded={expanded === 'panel2'} onChange={(e,isExpanded)=> handleChange(isExpanded,'panel2')}>
            <AccordionSummary id='panel2-header' aria-controls='panel2-content' expandIcon={<ExpandMoreIcon/>}>
               <Typography>Accordian 2</Typography> 
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quo repellat nob.Loew is the busy are the bacjheeoun usuaudhfg the fusmkd.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion  expanded={expanded === 'panel3'} onChange={(e,isExpanded)=> handleChange(isExpanded,'panel3')}>
            <AccordionSummary id='panel3-header' aria-controls='panel3-content' expandIcon={<ExpandMoreIcon/>}>
               <Typography>Accordian 3</Typography> 
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quo repellat nob.Loew is the busy are the bacjheeoun usuaudhfg the fusmkd.
                </Typography>
            </AccordionDetails>
        </Accordion>
    </div>
  )
}
