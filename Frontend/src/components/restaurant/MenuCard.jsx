import { Accordion, AccordionDetails, AccordionSummary, Button, Checkbox, FormControlLabel, FormGroup } from '@mui/material'
import React from 'react'
import Typography from '@mui/material/Typography';
import { ExpandMore } from '@mui/icons-material';

const ingredients = [
  {
    category: "Vegetables",
    ingredient: ["Onion", "Tomato", "Capsicum", "Spinach", "Potato"]
  },
  {
    category: "Meat",
    ingredient: ["Chicken", "Beef", "Mutton", "Fish", "Prawns"]
  },
  {
    category: "Dairy",
    ingredient: ["Milk", "Cheese", "Butter", "Paneer"]
  },
  {
    category: "Grains & Bread",
    ingredient: ["Rice", "Wheat Flour", "Bread", "Pasta", "Noodles"]
  },
  {
    category: "Spices",
    ingredient: ["Salt", "Black Pepper", "Turmeric", "Cumin", "Chili Powder"]
  },
  {
    category: "Fruits",
    ingredient: ["Apple", "Banana", "Mango", "Orange", "Strawberry"]
  }
];



const MenuCard = () => {


  const handleCheckBoxChange=(value)=>{
      console.log(value);
      
  }

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
        <form action="">
          <div className='flex gap-6 flex-wrap'>
            {
              ingredients.map((item) => (
                <div>
                  <p>{item.category}</p>
                  <FormGroup>
                    {
                      item.ingredient.map((list) =>
                      <FormControlLabel control={<Checkbox onChange={()=>handleCheckBoxChange(list)} />} label={list} />
                      )
                    }
                  </FormGroup>
                </div>
              ))
            }
          </div>

          <div className='pt-5'>
            <Button variant='contained' type='submit' disabled={false}>{true ? "Add to cart" : "Out of stock"}</Button>
          </div>
        </form>
      </AccordionDetails>
    </Accordion>
  )
}

export default MenuCard
