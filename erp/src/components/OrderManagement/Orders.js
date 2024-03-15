import React, { useState } from 'react';
import { Typography, Grid, Paper } from '@mui/material';
import OrderForm from './OrderForm';
import OrdersCalendar from '../OrdersCalendar';
import '../OrderManagement/Order.css'; // Import the CSS file

function Orders({ ordersData, setOrdersData, totalOrders }) {
  const [selectedDate, setSelectedDate] = useState(null);

  const addOrder = (order) => {
    setOrdersData([...ordersData, { ...order, id: ordersData.length + 1 }]);
    if (order.status === 'Pending') {
      setSelectedDate(new Date(order.expectedDeliveryDate));
    }
  };


  return (
    <div className="orders-container">
      <Typography variant="h4" gutterBottom>
        Order Management
      </Typography>
      <Typography variant="h6" gutterBottom>
        Total Orders: {totalOrders}
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <Paper elevation={12} className="order-form">
            <Typography variant="h5" gutterBottom>
              Add New Order
            </Typography>
            <div style={{ padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '5px' }}>
              <OrderForm onSubmit={addOrder} />
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} md={12}>
          <Paper elevation={12} className="order-calendar">
            <Typography variant="h5" gutterBottom>
              Order Calendar
            </Typography>
            <OrdersCalendar ordersData={ordersData} selectedDate={selectedDate} />
          </Paper>
        </Grid>
      </Grid>

    </div>
  );
}

export default Orders;
