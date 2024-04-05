import React, { useState } from 'react';
import axios from 'axios';

const AddFoodForm = () => {
  const [foodId, setFoodId] = useState('');
  const [foodName, setFoodName] = useState('');
  const [foodPrice, setFoodPrice] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        await axios.post('http://localhost:3000/api/foods', { food_id: foodId, food_name: foodName, food_price: foodPrice });
        // Optionally, you can reset the form fields after successful submission
      setFoodId('');
      setFoodName('');
      setFoodPrice('');
      alert('Food item added successfully!');
    } catch (error) {
      console.error('Error adding food item:', error);
      alert('Failed to add food item. Please try again later.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Food ID:
        <input
          type="number"
          value={foodId}
          onChange={(event) => setFoodId(event.target.value)}
          required
        />
      </label>
      <label>
        Food Name:
        <input
          type="text"
          value={foodName}
          onChange={(event) => setFoodName(event.target.value)}
          required
        />
      </label>
      <label>
        Price:
        <input
          type="number"
          value={foodPrice}
          onChange={(event) => setFoodPrice(event.target.value)}
          required
        />
      </label>
      <button type="submit">Add Food</button>
    </form>
  );
};

export default AddFoodForm;

