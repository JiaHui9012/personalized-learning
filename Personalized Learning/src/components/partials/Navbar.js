import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const CenteredTabs = (props) => {
  const [value, setValue] = React.useState(props.tabNumber);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      indicatorColor="secondary"
      textColor="secondary"
      centered
    >
      <Tab label="Home" href="/" style={{ fontWeight: "bold" }} />
      <Tab
        label="Contact Us"
        href="mailto:hcysm1@nottingham.edu.my"
        style={{ fontWeight: "bold" }}
      />
      <Tab label="FAQ" href="/faq" style={{ fontWeight: "bold" }} />
      <Tab label="Sign In" href="/signin" style={{ fontWeight: "bold" }} />
    </Tabs>
  );
};

export default CenteredTabs;
