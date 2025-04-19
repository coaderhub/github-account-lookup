import React, { useRef } from "react";
import { CiSearch } from "react-icons/ci";
import styles from "./InputForm.module.css";

const InputForm = (props) => {
  const choice = useRef("");

  const searchUserHandler = (e) => {
    e.preventDefault();
    props.changeUser(choice.current.value);
    choice.current.value = "";
  };

  return (
    <form className={styles.form} onSubmit={searchUserHandler}>
      <CiSearch className={styles.searchIcon} />
      <input type="text" ref={choice} placeholder="Enter Github username..." />
      <div>
        <p className="error">{props.error}</p>
        <button type="submit" >Search</button>
      </div>
    </form>
  );
};

export default InputForm;
