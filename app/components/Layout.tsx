import { url } from "node:inspector";
import * as React from "react";
type LayoutProps = {};

const Layout: React.FunctionComponent<LayoutProps> = (props) => (
  <>
    <div className="sidebar">
      <div className="sidebar-inner-wrap">
        <a href="#" className="logo-image common-btn-style">
          <img src={'images/Logo.png'} alt="logo" loading="lazy" />
        </a>
        <ul className="sidebar-links-ul">
          <li>
            <a href="#" className="common-btn-style">
              <span className="empty-circle"></span>
            </a>
          </li>
          <li>
            <a href="#" className="common-btn-style">
              <span className="empty-circle"></span>
            </a>
          </li>
          <li>
            <a href="#" className="common-btn-style">
              <span className="empty-circle"></span>
            </a>
          </li>
          <li>
            <a href="#" className="common-btn-style">
              <span className="empty-circle"></span>
            </a>
          </li>
          <li>
            <a href="#" className="common-btn-style">
              <span className="empty-circle"></span>
            </a>
          </li>
          <li>
            <a href="#" className="common-btn-style">
              <span className="empty-circle active"></span>
            </a>
          </li>
          <li>
            <a href="#)" className="common-btn-style">
              <span className="empty-circle"></span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="main-wrapper">
      <div className="total-ammount-header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-2 col-sm-6 col-12  custom-padding-top-bottom">
              <h6>Balance</h6>
              <h5>213 920 $</h5>
            </div>
            <div className="col-lg-2 col-sm-6 col-1s custom-padding-top-bottom">
              <h6>Payout</h6>
              <h5>213 920 $</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="services-section">
        <div className="container-fluid">{props.children}</div>
      </div>
    </div>
  </>
);

export default Layout;
