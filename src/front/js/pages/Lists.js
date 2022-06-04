// import "./styles.css";
import { TabPanel, useTabs } from "react-headless-tabs";
import * as React from "react";

export default function Lists() {
  const items = ["5 A Day", "company", "team", "billing"];
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
        {selectedTab === "company" ? <div>I am Company</div> : null}
        {selectedTab === "account" ? <div>I </div> : null}
        {selectedTab === "team" ? <div>I am </div> : null}
      </div>
    </div>
  );
}
