import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material'
import React from 'react'
import Typography from '@mui/material/Typography';
import { ExpandMore } from '@mui/icons-material';


const MenuCard = () => {
  return (
     <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <div className='lg:flex items-center gap-5'>
                <img className='w-[7rem] h-[7rem] object-cover' src="https://images.pexels.com/photos/12737816/pexels-photo-12737816.jpeg" alt="" />

                <div className='space-y-1 lg:space-y-5 lg:max-w-2xl'>
                    <h1 className='text-xl font-semibold'>Pizza</h1>
                    <p>₹200</p>
                    <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, fugit! </p>
                </div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
  )
}

export default MenuCard
