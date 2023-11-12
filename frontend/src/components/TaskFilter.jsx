/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { taskApi } from '../api/api';

const TaskFilter = ({ onChange }) => {
  const [filter, setFilter] = useState('');

  const handleFilterChange = async (event) => {
     const newFilter = event.target.value
     setFilter(newFilter);
     onChange(newFilter)
  };

  return (
    <div>
      <select value={filter} onChange={handleFilterChange}>
        <option value="">All Tasks</option>
        <option value="completed">Completed Tasks</option>
        <option value="not completed">Not Completed Tasks</option>
      </select>
    </div>
  );
};

export default TaskFilter;
