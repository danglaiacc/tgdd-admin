import React, { useEffect, useState } from "react";
import Sidebar from "react-sidebar"; 
import PhoneSidebar from './PhoneSidebar';
import PhoneContent from "./PhoneContent";
import Breacrumbs from "../../../../components/@vuexy/breadCrumbs/BreadCrumb";

import "../../../../assets/scss/pages/app-ecommerce-shop.scss";

const mql = window.matchMedia(`(min-width: 992px)`);

export default function Phones() {
  const [sidebarDocked, setSidebarDocked] = useState(mql.matches);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const onSetSidebarOpen = (open) => {
    setSidebarOpen(open);
  };

  const mediaQueryChanged = () => {
    setSidebarDocked(mql.matches);
    setSidebarOpen(false);
  };
  useEffect(() => { 
    mediaQueryChanged()
  }, []);
  return (
    <React.Fragment>
      <Breacrumbs
        breadCrumbTitle="Điện thoại"
        breadCrumbParent="Sản phẩm"
        breadCrumbActive="Điện thoại"
      />
      <div className="ecommerce-application">
        <div
          className={`shop-content-overlay ${sidebarOpen ? "show" : ""}`}
          onClick={() => onSetSidebarOpen(false)}
        ></div>
        <div className="sidebar-section">
          <Sidebar
            sidebar={<PhoneSidebar />}
            docked={sidebarDocked}
            open={sidebarOpen}
            sidebarClassName="sidebar-shop"
            touch={true}
            contentClassName="sidebar-children d-none"
          >
          </Sidebar>
        </div>
        <PhoneContent
          mainSidebar={() => onSetSidebarOpen()}
          sidebar={sidebarOpen}
        />
      </div>
    </React.Fragment>
  );
}
