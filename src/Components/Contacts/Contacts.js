import React from "react";
import "./Contacts.css";
import { IoIosArrowBack } from "react-icons/io";
import { FaPlus } from "react-icons/fa";

class ContactBookComponent extends React.Component {
  render() {
    return (
      <div className="Container">
        <div className="BackButton_Section">
          <IoIosArrowBack onclick="" />
        </div>
        <div className="Title">
          <p>Address Book</p>
        </div>

        <div className="Contacts">
          <div className="New_Contact">
            <FaPlus onclick="" />
          </div>
          <div className="New_Contact_text">
            <p>New Contact</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactBookComponent;
