import React from 'react';

const ContactForm = () => {
  return (
    <form
      className="flex flex-col border-2 border-black p-5"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <label>Name:</label>
      <input type="text" name="name" />
      <label>Email:</label>
      <input type="text" name="email" />
      <label>Phone Number:</label>
      <input type="number" name="phone" />
      <label>Message:</label>
      <textarea name="message" />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default ContactForm;
