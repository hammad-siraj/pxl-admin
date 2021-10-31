import React from "react";
import Container from "@material-ui/core/Container";
import Drawer from "@material-ui/core/Drawer";
import PropTypes from "prop-types";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";

import arrowDown from "../../assets/images/arrowDown.svg";
import menuIcon from "../../assets/images/MenuIcon.svg";
import avatar from "../../assets/images/avatar.svg";
import pxl from "../../assets/images/pxl.svg";

import SideBar from "../../components/SideBar/index";

import * as S from "./styled";

function PageLayout({ children, gridy, rightHeader, title }) {
  const [open, setOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  return (
    <S.Wrapper>
      <div className="body-grid">
        <>
          <Drawer
            className="desktop MuiDrawer-paper-desktop"
            open={!open}
            variant="persistent"
            ModalProps={{
              keepMounted: true,
            }}
          >
            <SideBar />
          </Drawer>
          {/* <Drawer
            anchor="left"
            className="mobile"
            open={open}
            variant="persistent"
          >
            <SideBar />
            <div></div>
          </Drawer> */}
        </>
        <main>
          <AppBar className="app-bar-border">
            <Toolbar className={` navbar flex j-btw `}>
              <div className="logo-container">
                <div className="logo">
                  <div className="logo-circle">
                    <img src={pxl} />
                  </div>
                </div>
              </div>
              <div>
                <div className="dropdown">
                  <button className="trigger flex j-btw fade-btn" type="button">
                    <p className="dp-name">Jhon</p>
                    <img alt="avatar" src={avatar} />
                  </button>
                </div>
              </div>
            </Toolbar>
          </AppBar>
          <Container maxWidth="lg" className="mleft">
            <div className={`${gridy} flex j-btw dash-head`}>
              <p className="title">{title}</p>
              {rightHeader}
            </div>
            <div className="mleft">{children}</div>
          </Container>
        </main>
      </div>
    </S.Wrapper>
  );
}
PageLayout.propTypes = {
  children: PropTypes.func,
  gridy: PropTypes.string,
  rightHeader: PropTypes.func,
  title: PropTypes.string,
};

export default React.memo(PageLayout);
