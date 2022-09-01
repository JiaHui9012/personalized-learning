import React from "react";
import Tabs from "@material-ui/core/Tabs";
import { connect } from "react-redux";
import SignedInCenteredTabs from "components/partials/SignedInLinks";
import CenteredTabs from "components/partials/Navbar";

const TeacherCenteredTabs = (props) => {
  const { auth } = props;
  const links = auth.uid ? <SignedInCenteredTabs /> : <CenteredTabs />;
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
      style={{ paddingBottom: "25px", paddingTop: "10px" }}
    >
      {links}
    </Tabs>
  );
};
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps)(TeacherCenteredTabs);
