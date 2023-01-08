import React from 'react'
import styles from '../DropDown.module.css'
import { BsFillCaretDownFill } from "react-icons/bs";

const ActionDropDown = () => {
  const preventDefault = (e) => e.preventDefault();
  return (
    <ul className={styles.Dropdown + " " + styles.Actions}>
      <li><a  onClick={preventDefault}>Actions <BsFillCaretDownFill /></a>
          <ul>
              <li><a className={styles.Button_Border} href=''>Mark As Paid</a></li>
              <li><a className={styles.Button_Border} href=''>Reject</a></li>
              <li><a href=''>Send Payouts</a></li>
          </ul>
      </li>
  </ul>
  )
}

export default ActionDropDown