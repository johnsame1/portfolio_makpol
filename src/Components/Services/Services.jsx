import React from 'react';
import { MdManageSearch } from "react-icons/md";
import { TbDeviceDesktopBolt } from "react-icons/tb";
import { RiVerifiedBadgeLine } from "react-icons/ri";
import { PiHandDepositDuotone } from "react-icons/pi";
import { FaPaintBrush } from "react-icons/fa";

function Services() {
  return (
    <div className="services">
      <div className="servicesContainer">
        <div className="rightContainer">
          <div className="content">
            <MdManageSearch/>
            <div className="titleContent"></div>
          </div>
        </div>
        <div className="leftContainer"></div>
      </div>
    </div>
  );
}

export default Services;
