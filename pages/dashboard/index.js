import React, { useState } from "react";
import NavigationScreenshot from "../../public/images/nav-menu.png";
import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";
import styles from "../../styles/pages/Dashboard.module.scss";

const Dashboard = () => {
  const [showInstructions, setShowInstructions] = useState(true);

  return (
    // This <> is called a "React Fragment", React components have to return on root parent element, so we use <> to return multiple elements
    <>
      <div className={styles.NavWrapper}>
        {/* This is where you put your code */}
      </div>

      {/* Dont worry about this. Just introducing you to a little bit of React I dont expect you to fully get this. 
          This is just to show/hide the instructions. Click ScreenShot to show instructions again */}
      {showInstructions && (
        <div className={styles.Modal}>
          <div className={styles.ModalContent}>
            <AiOutlineClose
              className={styles.ModalClose}
              onClick={() => setShowInstructions(false)}
            />
            <p className={styles.TempTextStyle}>
              Add to the left side of page the navigation menu (spanning from
              top to bottom) that you see on the right. See if you can look up
              how to use React Icons for the Icons (Ive installed into project
              and have an example of usage in the as an Icon to close this
              current Modal). Let me know if you have any questions. Dont worry
              about the icons if it causes too much trouble. Just the names of
              menu and then use the vercel logo Inside of the public/images
              folder in the project for the logo. Check my import of the
              screenshot for reference of how to import an image. Try to add
              some hover states to the menu elements to let you know that they
              are selectable (Background-color light, text dark on hover, cursor
              turns to pointer, etc).
            </p>
          </div>
        </div>
      )}
      <div
        className={styles.ScreenShotWrapper}
        onClick={() => setShowInstructions(true)}
      >
        <Image src={NavigationScreenshot} alt="Navigation Screenshot" />
      </div>
    </>
  );
};

export default Dashboard;
