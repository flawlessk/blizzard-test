import React, { useState } from "react";
import "./Header.css";
import { Dialog, Button } from "@material-ui/core";

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="page-navigation">
      <div className="overlay-content">
        <nav className="navbar">
          <div className="left-navbar">
            <a href="/">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/2/23/Blizzard_Entertainment_Logo_2015.svg"
                alt="logo"
                style={{ width: "50px" }}
              />
            </a>
            <Button
              variant="outlined"
              color="primary"
              onClick={handleClickOpen}
            >
              GAMES
            </Button>
            <Button
              variant="text"
              color="primary"
              href="https://eu.shop.battle.net/en-us"
            >
              SHOP
            </Button>
            <Button
              variant="text"
              color="primary"
              href="https://news.blizzard.com/en-us"
            >
              NEWS
            </Button>
            <Button variant="outlined" color="primary">
              ESPORT
            </Button>
            <Dialog
              style={{
                width: "100%",
                height: "350px",
                backgroundColor: "rgb(26,33,44)",
                marginTop: "60px",
                background:
                  "radial-gradient(ellipse farthest-side at center top, #283244 0%, rgba(21,26,35,0.95) 100%);",
              }}
              onClose={handleClose}
              open={open}
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
            >
              <div className="dialog-style">
                <div className="gamelogos">
                  <div className="gamelogos-box">
                    <a
                      href="https://diablo2.blizzard.com/"
                      class="Navbar-gameLogo animation-delay-1"
                    >
                      <img
                        src="https://blznav.akamaized.net/img/games/logo-d2r-00245205614e6d52.png"
                        alt="Diablo II Resurrected"
                        class="gamelogo-diablo"
                      ></img>
                    </a>
                    <div className="gamelogos-box--diablo">
                      Diablo
                      <span>®</span> II: Resurrected™
                    </div>
                    <a
                      href="https://blizzcon.playoverwatch.com/"
                      class="Navbar-gameLogo animation-delay-1"
                    >
                      <img
                        src="https://blznav.akamaized.net/img/games/logo-ow2-703ebd8d46d3d783.png"
                        alt="Diablo II Resurrected"
                        class="gamelogo-overwatch"
                      ></img>
                    </a>
                    <div className="gamelogos-box--overwatch">
                      Overwatch
                      <span>®</span>2
                    </div>
                    <a
                      href="https://playoverwatch.com/"
                      class="Navbar-gameLogo animation-delay-1"
                    >
                      <img
                        src="https://blznav.akamaized.net/img/games/logo-ow-4be5755bc0a4cbaf.png"
                        alt="Diablo II Resurrected"
                        class="gamelogo-overwatch2"
                      ></img>
                    </a>
                    <div className="gamelogos-box--overwatch2">
                      Overwatch
                      <span>®</span>
                    </div>
                  </div>
                </div>
              </div>
            </Dialog>
          </div>
          <div className="right-navbar">
            <Button variant="outlined" color="primary" className="support-btn">
              Support
            </Button>
            <Button variant="outlined" color="primary" className="support-btn">
              My Account
            </Button>
          </div>
        </nav>
      </div>
    </div>
  );
};
export default Header;
