import React, { Component } from "react";
import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = (props) => {
  return (
    <div>
      <ul className="list">
        {props.initialExpenses.map((expense) => {
          return (
            <ExpenseItem
              key={expense.id}
              expense={expense}
              handleDelete={props.handleDelete}
            />
          );
        })}
      </ul>
      <button className="btn">delete</button>
    </div>
  );
};

export default ExpenseList;
