import React, { Component } from "react";
import "./ExpenseItem.css";
import { VscEdit } from "react-icons/vsc";
import { VscChromeClose } from "react-icons/vsc";

const ExpenseItem = (props) => {
  return (
    <li className="item">
      <div className="info">
        <span className="expense">{props.expense.charge}</span>
        <span className="amount">{props.expense.amount}</span>
      </div>
      <div>
        <button className="edit-btn">
          <VscEdit />
        </button>
        <button
          onClick={() => props.handleDelete(props.expense.id)}
          className="clear-btn"
        >
          <VscChromeClose />
        </button>
      </div>
    </li>
  );
};

export default ExpenseItem;
