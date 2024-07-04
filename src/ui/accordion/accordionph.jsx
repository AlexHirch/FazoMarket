import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function AccordionUsage({body, title}) {
 return (
    <div>
      <Accordion style={{border: "none", boxShadow: "none"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={title}
          id={title}
        >
          {title}
        </AccordionSummary>
        <AccordionDetails>{body}</AccordionDetails>
      </Accordion>
    </div>
  );
}
