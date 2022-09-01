import React from "react";
import Tabs from "@material-ui/core/Tabs";
import { connect } from "react-redux";
import SignedInCenterTabs from "components/partials/SignedInCenterTabs";
import CenteredTabs from "components/partials/Navbar";

const StudentCenteredTabs = (props) => {
  const { auth } = props;
  const links = auth.uid ? <SignedInCenterTabs /> : <CenteredTabs />;

  return (
    <Tabs
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

export default connect(mapStateToProps)(StudentCenteredTabs);
