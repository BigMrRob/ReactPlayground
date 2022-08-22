import React from "react";
import NavigationScreenshot from "../../public/images/nav-menu.png";
import Image from "next/image";
import styles from "../../styles/pages/Dashboard.module.scss";

const items = ["Dashboard", "Overview", "Comments", "Projects", "Analytics"];

// Dont worry about the icons for now.
const Dashboard = () => {
  return (
    <div>
      <div className={styles.NavWrapper}>
        {/* This is where you put your code */}

        {/* The following three divs represent the 3 sections */}
        {/* 1. Search bar and Logo area */}
        <div className={styles.NavSection1}></div>

        {/* 2. Nav items list */}
        <div className={styles.NavSection2}>
          <ul className={styles.NavList}>
            {/* This is a shorthand way to represent an array of items and 
                show it on the page. We map over each item and return each item
                instead of having to manually type things over and over
              */}
            {items.map((item) => {
              return (
                <li key={item} className={styles.NavListItem}>
                  {item}
                </li>
              );
            })}
          </ul>
        </div>

        {/* Bottom section with starred and settings */}
        <div className={styles.NavSection3}></div>
      </div>

      <div
        className={styles.ScreenShotWrapper}
        onClick={() => setShowInstructions(true)}
      >
        <Image src={NavigationScreenshot} alt="Navigation Screenshot" />
      </div>
    </div>
  );
};

export default Dashboard;
