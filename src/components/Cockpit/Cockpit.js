import React from "react";
import classes from "./Cockpit.css";

const cockpit = props => {
  const assingedClasses = [];
  let btnClass = classes.Button;

  if (props.showPersons) {
    btnClass = [classes.Button, classes.Red].join(" ");
  }

  if (props.persons.length <= 2) {
    assingedClasses.push(classes.red);
  }
  if (props.persons.length <= 1) {
    assingedClasses.push(classes.bold);
  }

  return (
    <>
      <h1>{props.appTitle}</h1>
      <p className={assingedClasses.join(" ")}>This is really working</p>
      <button className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
      <button onClick={props.login}>Log In</button>
    </>
  );
};
export default React.memo(cockpit);
