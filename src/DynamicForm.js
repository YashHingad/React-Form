// src/DynamicForm.js
import React, { useState } from 'react';
import useForm from './useForm';
import validate from './validate';

const DynamicForm = () => {
  const {
    values,
    errors,
    handleChange,
    handleSubmit,
    isSubmitting
  } = useForm(submit, validate);
  const [submittedData, setSubmittedData] = useState(null);

  function submit() {
    setSubmittedData(values);
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={values.name || ''}
            onChange={handleChange}
          />
          {errors.name && <p>{errors.name}</p>}
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={values.email || ''}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div>
          <label>Age</label>
          <input
            type="number"
            name="age"
            value={values.age || ''}
            onChange={handleChange}
          />
          {errors.age && <p>{errors.age}</p>}
        </div>
        <div>
          <label>Are you attending with a guest?</label>
          <select
            name="attendingWithGuest"
            value={values.attendingWithGuest || ''}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          {errors.attendingWithGuest && <p>{errors.attendingWithGuest}</p>}
        </div>
        {values.attendingWithGuest === 'yes' && (
          <div>
            <label>Guest Name</label>
            <input
              type="text"
              name="guestName"
              value={values.guestName || ''}
              onChange={handleChange}
            />
            {errors.guestName && <p>{errors.guestName}</p>}
          </div>
        )}
        <button type="submit">Submit</button>
      </form>

      {isSubmitting && submittedData && (
        <div className="summary">
          <h2>Submitted Data</h2>
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
          <p><strong>Age:</strong> {submittedData.age}</p>
          <p><strong>Attending with Guest:</strong> {submittedData.attendingWithGuest}</p>
          {submittedData.attendingWithGuest === 'yes' && (
            <p><strong>Guest Name:</strong> {submittedData.guestName}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default DynamicForm;
