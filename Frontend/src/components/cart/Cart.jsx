import { Box, Button, Divider, Grid, Modal, TextField, Typography } from '@mui/material'
import React from 'react'
import CartItem from './CartItem'
import AddressCard from './AddressCard'
import { Field, Form, Formik } from 'formik';
import * as Yup from "yup";


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const initialValues = {
  street: "",
  state: "",
  pincode: '',
  city: ""
}

// const validationSchema = Yup.object({
//   street: Yup.string().required("Street address is required"),
//   state: Yup.string().required("State address is required"),
//   pincode: Yup.required("Pincode address is required"),
//   city: Yup.string().required("City address is required")
// })

const Cart = () => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const createOrderUsingSelectedAddress = () => {

  }

  const handleSubmit = (values) => {
    console.log(values);

  }
  return (
    <>
      <main className='lg:flex justify-between px-5 lg:px-20'>
        <section className='lg:w-[30%] space-y-6 lg:min-h-screen pt-10'>
          <div className='space-y-2'>
            {
              [1, 1, 2].map((item) => (
                <CartItem />
              ))
            }
          </div>

          <Divider />

          <div className='pt-5 px-3'>
            <p className='pb-5 font-extralight'>Bill Details</p>

            <div className='space-y-3 '>
              <div className='flex justify-between items-center text-gray-400'>
                <p>Item Total</p>
                <p>₹49999</p>
              </div>
              <div className='flex justify-between items-center text-gray-400'>
                <p>Deliver Fee</p>
                <p>₹49</p>
              </div>
              <div className='flex justify-between items-center text-gray-400'>
                <p>Plateform Fee</p>
                <p>₹9</p>
              </div>
              <div className='flex justify-between items-center text-gray-400'>
                <p>GSt and Restaurant Charges</p>
                <p>₹12</p>
              </div>

              <Divider />

              <div className='flex py-3 justify-between items-center text-gray-400'>
                <p>Total Pay</p>
                <p>₹1452</p>
              </div>
            </div>
          </div>
        </section>

        <Divider orientation='vertical' flexItem />

        <section className='lg:w-[70%] space-y-6 lg:min-h-screen pt-10 pb-10 lg:pb-0 flex  justify-center'>
          <div>
            <div className='flex justify-between items-center pb-6'>
              <h1 className='font-semibold text-2xl'>Choose Delivery Address</h1>

              <div>
                <Button onClick={handleOpen} variant='contained'>
                  Add New Address
                </Button>
              </div>
            </div>

            <div className='flex gap-5 flex-wrap justify-center items-center'>
              {
                [1, 2, 2].map((item) => (
                  <AddressCard item={item} showButton={true} handleSelectAddress={createOrderUsingSelectedAddress} />
                ))
              }
            </div>
          </div>
        </section>

      </main>


      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" className='pb-4' variant="h6" component="h2">
            Add New Address
          </Typography>

          <Formik
            initialValues={initialValues}
            // validationSchema={validationSchema}
            onSubmit={handleSubmit}>
            <Form>
              <Grid container spacing={2}>
                <Grid size={12}>
                  <Field
                    as={TextField}
                    name="street"
                    label="Street Address"
                    fullWidth
                    variant="outlined"
                  />
                </Grid>
                <Grid size={6}>
                  <Field
                    as={TextField}
                    name="city"
                    label="City"
                    fullWidth
                    variant="outlined"
                  />
                </Grid>
                <Grid size={6}>
                  <Field
                    as={TextField}
                    name="pincode"
                    label="Pincode"
                    fullWidth
                    variant="outlined"
                  />
                </Grid>
                <Grid size={12}>
                  <Field
                    as={TextField}
                    name="state"
                    label="State"
                    fullWidth
                    variant="outlined"
                  />
                </Grid>

                <Grid size={12}>
                  <Button fullWidth variant='contained' type='submit' color='primary'>Deliver here</Button>
                </Grid>
              </Grid>
            </Form>
          </Formik>
        </Box>
      </Modal>
    </>
  )
}

export default Cart
