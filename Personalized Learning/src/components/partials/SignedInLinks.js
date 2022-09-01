import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { connect } from "react-redux";
import { signOut } from "components/store/actions/authActions";

const SignedInCenteredTabs = (props) => {
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
      <Tab
        label="Edit Modules"
        href="/teachermodules"
        style={{ fontWeight: "bold" }}
      />

      <Tab
        label="Upload Module"
        href="/uploadmaterials"
        style={{ fontWeight: "bold" }}
      />
      <Tab
        label="Sign Out"
        onClick={props.signOut}
        href="/"
        style={{ fontWeight: "bold" }}
      />
    </Tabs>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(null, mapDispatchToProps)(SignedInCenteredTabs);
