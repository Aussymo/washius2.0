// import "./styles.css";
import { TabPanel, useTabs } from "react-headless-tabs";
import * as React from "react";
import { GhostCar } from "../component/List/GhostCar";
import { Opening } from "../component/List/Opening";
import { Closing } from "../component/List/Closing";
import { Five } from "../component/List/Five";
import { Switch } from "../component/List/Switch";
import { Appbar } from "../component/Appbar/Appbar";

export default function Lists() {
  const items = ["Ghost Car", "Opening", "Shift Switch", "Closing", "5 A Day"];
  const [selectedTab, setSelectedTab] = useTabs(items);
  const changeTab = (e) => {
    // e.preventDefault();
    const target = e;
    console.log(target);
    if (typeof target !== "string") {
      return;
    }
    setSelectedTab(target);
  };
  const getSelectedTabIndex = () =>
    items.findIndex((item) => item === selectedTab);
  return (
    <div>
      <Appbar />
      <div className="App">
        <nav
          style={{
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: `calc((100% / ${items.length}) * ${getSelectedTabIndex()})`,
              height: "2px",
              width: `calc(100% / ${items.length})`,
              background: "red",
              transition: "all ease 0.2s",
            }}
          />
          <div
            style={{
              display: "flex",
            }}
          >
            {items.map((item) => {
              return (
                <a
                  href="#tab"
                  key={item}
                  style={{
                    flexGrow: 1,
                    display: "block",
                    padding: "1rem",
                    textDecoration: "none",
                    color: selectedTab === item ? "red" : "black",
                    background: selectedTab === item ? "#fcfcfc" : "#fff",
                  }}
                  onClick={() => {
                    changeTab(item);
                  }}
                  data-tab={item}
                >
                  {item}
                </a>
              );
            })}
          </div>
        </nav>
        <div
          style={{
            padding: "2rem",
            background: "#ececec",
          }}
        >
          {/* {items.map((item) => {
          return (
            <TabPanel key={item} hidden={selectedTab !== item}>
              {item}
            </TabPanel>
          );
        })} */}
          {selectedTab === "Ghost Car" ? (
            <div>
              <GhostCar />
            </div>
          ) : null}
          {selectedTab === "5 A Day" ? (
            <div>
              <Five />
            </div>
          ) : null}
          {selectedTab === "Opening" ? (
            <div>
              <Opening />
            </div>
          ) : null}

          {selectedTab === "Shift Switch" ? (
            <div>
              <Switch />
            </div>
          ) : null}

          {selectedTab === "Closing" ? (
            <div>
              <Closing />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
