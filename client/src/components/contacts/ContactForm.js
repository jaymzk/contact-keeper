import React, { useState, useContext, useEffect } from "react";
import ContactContext from "../../context/contact/contactContext";
import DateTimePicker from "react-datetime-picker";

const ContactForm = () => {
  const contactContext = useContext(ContactContext);
  const { addContact, clearCurrent, updateContact, current } = contactContext;

  useEffect(() => {
    if (current !== null) {
      setContact(current);
    } else {
      setContact({
        name: "",
        start_time: new Date(Date.now()),
        end_time: new Date(Date.now() + 1800000),
        email: "",
        phone: "",
        type: "consultation",
      });
    }
  }, [contactContext, current]);

  const [contact, setContact] = useState({
    name: "",
    start_time: null,
    end_time: null,
    email: "",
    phone: "",
    type: "consultation",
  });

  const { name, email, phone, type, start_time, end_time } = contact;

  const onChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const onStartTimeChange = (time) => {
    setContact({ ...contact, start_time: time });
  };

  const onEndTimeChange = (time) => {
    setContact({ ...contact, end_time: time });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (start_time > end_time) {
      return;
    } else if (current === null) {
      addContact(contact);
    } else {
      updateContact(contact);
    }
    clearAll();
  };

  const clearAll = () => {
    clearCurrent();
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className='text-primary'>
        {current ? "Edit Appointment" : "Add Appointment"}
      </h2>
      <input
        type='text'
        placeholder='Name: Required'
        name='name'
        value={name}
        onChange={onChange}
      />
      <div className='flex-column'>
        <label for='start-time'>Start Time</label>
        <DateTimePicker
          name='start_time'
          value={start_time}
          onChange={onStartTimeChange}
        />
        <label for='end-time'>End Time</label>
        <DateTimePicker
          name='end_time'
          value={end_time}
          onChange={onEndTimeChange}
        />
      </div>
      {/*}
      <input
        type='text'
        placeholder='Start Time'
        name='start_time'
        value={start_time}
        onChange={onChange}
      />
      
      <input
        type='text'
        placeholder='End Time'
        name='end_time'
        value={end_time}
        onChange={onChange}
      />
      */}
      <input
        type='email'
        placeholder='Email'
        name='email'
        value={email}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='Phone'
        name='phone'
        value={phone}
        onChange={onChange}
      />
      <h5>Contact Type</h5>
      <input
        type='radio'
        name='type'
        value='consultation'
        checked={type === "consultation"}
        onChange={onChange}
      />
      {"  "}
      Consultation{" "}
      <input
        type='radio'
        name='type'
        value='admin'
        checked={type === "admin"}
        onChange={onChange}
      />{" "}
      Admin
      {"  "}
      <div>
        <input
          type='submit'
          value={current ? "Update Appointment" : "Add Appointment"}
          className='btn btn-primary btn-block'
        />
      </div>
      {current && (
        <div>
          <button className='btn btn-light btn-block' onClick={clearAll}>
            Clear
          </button>
        </div>
      )}
    </form>
  );
};

export default ContactForm;
