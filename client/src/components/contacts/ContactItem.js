import React, { useContext } from "react";
import Moment from "react-moment";
import "moment-timezone";
import PropTypes from "prop-types";
import ContactContext from "../../context/contact/contactContext";

const ContactItem = ({ contact }) => {
  const contactContext = useContext(ContactContext);
  const { deleteContact, setCurrent, clearCurrent } = contactContext;

  const { _id, name, start_time, end_time, type } = contact;

  const onDelete = () => {
    deleteContact(_id);
    clearCurrent();
  };

  return (
    <div className='card bg-light'>
      <h3 className='text-primary text-left'>
        {name}{" "}
        <span
          style={{ float: "right" }}
          className={
            "badge " +
            (type === "consultation" ? "badge-success" : "badge-primary")
          }
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
      </h3>
      <ul className='list'>
        {/* {start_time && (
          <li>
            <i className='fas fa-envelope-open'></i> {start_time}
          </li>
        )} */}
        {start_time && (
          <li>
            <i className='fa fa-clock-o'></i>
            Start Time: <Moment locale='uk' format='LLLL' date={start_time} />
          </li>
        )}
        {/* {end_time && (
          <li>
            <i className='fas fa-phone'></i> {end_time}
          </li>
        )} */}
        {end_time && (
          <li>
            <i className='fa fa-clock-o'></i>
            End Time: <Moment locale='uk' format='LLLL' date={end_time} />
          </li>
        )}
      </ul>
      <p>
        <button
          className='btn btn-dark btn-small'
          onClick={() => setCurrent(contact)}
        >
          Edit
        </button>
        <button className='btn btn-danger btn-small' onClick={onDelete}>
          Delete
        </button>
      </p>
    </div>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default ContactItem;
