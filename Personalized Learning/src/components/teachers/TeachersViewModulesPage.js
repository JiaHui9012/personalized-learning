import React, { Component } from "react";
import BackgroundPhoto from "images/backgroundphoto.jpg";
import { withStyles } from "@material-ui/styles";
import styled from "styled-components";
import TeacherCenteredTabs from "components/partials/SignedInLinks";
import Footer from "components/partials/Footer";
import TeachersEditModulesNestedGrid from "components/teachers/EditModulesNestedGrid";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { connect } from "react-redux";
import Spinner from "components/partials/Spinner";

const styles = (theme) => ({
  root: {
    height: "auto",
    width: "auto",
    backgroundImage: `url(${BackgroundPhoto})`,
    // backgroundImage:
    //"url(https://3.bp.blogspot.com/-bLABszcUFmg/VwDDOge9RMI/AAAAAAAAD6s/PrcJiEBMW6UKYoBTATlqwj-NicvbnJW9g/s1600/Trent%2BBuilding.jpg)",
    backgroundRepeat: "repeat",
    backgroundSize: "fit",
  },
});

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  height: 95vh;
  overflow: auto;
`;
const SubContainer = styled.div`
  display: flex;
  flex-basis: 100%;
  margin: auto;
  padding: 10px;
  width: 60vw;
  margin-left: 24%;
`;

class TeachersViewModulesPage extends Component {
  render() {
    const { classes, modules } = this.props;
    if (modules != undefined) {
      console.log(modules);
      return (
        <div>
          <MainContainer className={classes.root}>
            <TeacherCenteredTabs tabNumber = {0} />
            <SubContainer>
              <TeachersEditModulesNestedGrid modules={modules} />
            </SubContainer>
          </MainContainer>
          <Footer />
        </div>
      );
    } else {
      return <Spinner />;
    }
  }
}

const mapStateToProps = (state) => {
  return {
    modules: state.firestore.ordered.modules,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "modules" }]),
  withStyles(styles)
)(TeachersViewModulesPage);
