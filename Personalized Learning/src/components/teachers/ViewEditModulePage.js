import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import TeacherCenteredTabs from "components/partials/SignedInLinks";
import Footer from "components/partials/Footer";
import { Paper, Button } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import FirstPartFormPropsTextFields from "components/teachers/FirstPartUploadQuestions";
import SecondPartFormPropsTextFields from "components/teachers/SecondPartUploadQuestions";
import styled from "styled-components";
import BackgroundPhoto from "images/backgroundphoto.jpg";
import Box from "@material-ui/core/Box";
import TestTimeTextFields from "components/teachers/TestTime";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import Spinner from "components/partials/Spinner";
import QuestionTemplate from "components/teachers/QuestionTemplate";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/AddBoxSharp";
import { updateModule } from "components/store/actions/moduleActions";

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
  height: 100vh;
  overflow: auto;
`;
const SubContainer = styled.div`
  display: flex;
  flex-basis: 100%;
  margin: auto;

  padding: 10px;
  width: 60vw;
`;

class ViewEditModulePage extends Component {
  state = {
    moduleId: "",
    moduleName: "",
    numberOfHours: 0,
    numberOfLessons: 0,
    moduleInfo: "",
    audioLink: "",
    videoLink: "",
    slideLink: "",
    documentLink: "",
    easyQ1Q: "",
    easyQ1F1: "",
    easyQ1F2: "",
    easyQ1F3: "",
    easyQ1F4: "",
    easyQ1A: "",
    easyQ1U: true,
    easyQ2Q: "",
    easyQ2F1: "",
    easyQ2F2: "",
    easyQ2F3: "",
    easyQ2F4: "",
    easyQ2A: "",
    easyQ2U: false,
    easyQ3Q: "",
    easyQ3F1: "",
    easyQ3F2: "",
    easyQ3F3: "",
    easyQ3F4: "",
    easyQ3A: "",
    easyQ3U: false,
    easyQ4Q: "",
    easyQ4F1: "",
    easyQ4F2: "",
    easyQ4F3: "",
    easyQ4F4: "",
    easyQ4A: "",
    easyQ4U: false,
    easyQ5Q: "",
    easyQ5F1: "",
    easyQ5F2: "",
    easyQ5F3: "",
    easyQ5F4: "",
    easyQ5A: "",
    easyQ5U: false,
    easyQ6Q: "",
    easyQ6F1: "",
    easyQ6F2: "",
    easyQ6F3: "",
    easyQ6F4: "",
    easyQ6A: "",
    easyQ6U: false,
    easyQ7Q: "",
    easyQ7F1: "",
    easyQ7F2: "",
    easyQ7F3: "",
    easyQ7F4: "",
    easyQ7A: "",
    easyQ7U: false,
    easyQ8Q: "",
    easyQ8F1: "",
    easyQ8F2: "",
    easyQ8F3: "",
    easyQ8F4: "",
    easyQ8A: "",
    easyQ8U: false,
    easyQ9Q: "",
    easyQ9F1: "",
    easyQ9F2: "",
    easyQ9F3: "",
    easyQ9F4: "",
    easyQ9A: "",
    easyQ9U: false,
    easyQ10Q: "",
    easyQ10F1: "",
    easyQ10F2: "",
    easyQ10F3: "",
    easyQ10F4: "",
    easyQ10A: "",
    easyQ10U: false,
    easyQ11Q: "",
    easyQ11F1: "",
    easyQ11F2: "",
    easyQ11F3: "",
    easyQ11F4: "",
    easyQ11A: "",
    easyQ11U: false,
    easyQ12Q: "",
    easyQ12F1: "",
    easyQ12F2: "",
    easyQ12F3: "",
    easyQ12F4: "",
    easyQ12A: "",
    easyQ12U: false,
    easyQ13Q: "",
    easyQ13F1: "",
    easyQ13F2: "",
    easyQ13F3: "",
    easyQ13F4: "",
    easyQ13A: "",
    easyQ13U: false,
    easyQ14Q: "",
    easyQ14F1: "",
    easyQ14F2: "",
    easyQ14F3: "",
    easyQ14F4: "",
    easyQ14A: "",
    easyQ14U: false,
    easyQ15Q: "",
    easyQ15F1: "",
    easyQ15F2: "",
    easyQ15F3: "",
    easyQ15F4: "",
    easyQ15A: "",
    easyQ15U: false,
    easyQ16Q: "",
    easyQ16F1: "",
    easyQ16F2: "",
    easyQ16F3: "",
    easyQ16F4: "",
    easyQ16A: "",
    easyQ16U: false,
    easyQ17Q: "",
    easyQ17F1: "",
    easyQ17F2: "",
    easyQ17F3: "",
    easyQ17F4: "",
    easyQ17A: "",
    easyQ17U: false,
    easyQ18Q: "",
    easyQ18F1: "",
    easyQ18F2: "",
    easyQ18F3: "",
    easyQ18F4: "",
    easyQ18A: "",
    easyQ18U: false,
    easyQ19Q: "",
    easyQ19F1: "",
    easyQ19F2: "",
    easyQ19F3: "",
    easyQ19F4: "",
    easyQ19A: "",
    easyQ19U: false,
    easyQ20Q: "",
    easyQ20F1: "",
    easyQ20F2: "",
    easyQ20F3: "",
    easyQ20F4: "",
    easyQ20A: "",
    easyQ20U: false,
    easyQ21Q: "",
    easyQ21F1: "",
    easyQ21F2: "",
    easyQ21F3: "",
    easyQ21F4: "",
    easyQ21A: "",
    easyQ21U: false,
    easyQ22Q: "",
    easyQ22F1: "",
    easyQ22F2: "",
    easyQ22F3: "",
    easyQ22F4: "",
    easyQ22A: "",
    easyQ22U: false,
    easyQ23Q: "",
    easyQ23F1: "",
    easyQ23F2: "",
    easyQ23F3: "",
    easyQ23F4: "",
    easyQ23A: "",
    easyQ23U: false,
    easyQ24Q: "",
    easyQ24F1: "",
    easyQ24F2: "",
    easyQ24F3: "",
    easyQ24F4: "",
    easyQ24A: "",
    easyQ24U: false,
    easyQ25Q: "",
    easyQ25F1: "",
    easyQ25F2: "",
    easyQ25F3: "",
    easyQ25F4: "",
    easyQ25A: "",
    easyQ25U: false,
    easyQ26Q: "",
    easyQ26F1: "",
    easyQ26F2: "",
    easyQ26F3: "",
    easyQ26F4: "",
    easyQ26A: "",
    easyQ26U: false,
    easyQ27Q: "",
    easyQ27F1: "",
    easyQ27F2: "",
    easyQ27F3: "",
    easyQ27F4: "",
    easyQ27A: "",
    easyQ27U: false,
    easyQ28Q: "",
    easyQ28F1: "",
    easyQ28F2: "",
    easyQ28F3: "",
    easyQ28F4: "",
    easyQ28A: "",
    easyQ28U: false,
    easyQ29Q: "",
    easyQ29F1: "",
    easyQ29F2: "",
    easyQ29F3: "",
    easyQ29F4: "",
    easyQ29A: "",
    easyQ29U: false,
    easyQ30Q: "",
    easyQ30F1: "",
    easyQ30F2: "",
    easyQ30F3: "",
    easyQ30F4: "",
    easyQ30A: "",
    easyQ30U: false,
    easyTime: 0,
    mediumQ1Q: "",
    mediumQ1F1: "",
    mediumQ1F2: "",
    mediumQ1F3: "",
    mediumQ1F4: "",
    mediumQ1A: "",
    mediumQ1U: true,
    mediumQ2Q: "",
    mediumQ2F1: "",
    mediumQ2F2: "",
    mediumQ2F3: "",
    mediumQ2F4: "",
    mediumQ2A: "",
    mediumQ2U: false,
    mediumQ3Q: "",
    mediumQ3F1: "",
    mediumQ3F2: "",
    mediumQ3F3: "",
    mediumQ3F4: "",
    mediumQ3A: "",
    mediumQ3U: false,
    mediumQ4Q: "",
    mediumQ4F1: "",
    mediumQ4F2: "",
    mediumQ4F3: "",
    mediumQ4F4: "",
    mediumQ4A: "",
    mediumQ4U: false,
    mediumQ5Q: "",
    mediumQ5F1: "",
    mediumQ5F2: "",
    mediumQ5F3: "",
    mediumQ5F4: "",
    mediumQ5A: "",
    mediumQ5U: false,
    mediumQ6Q: "",
    mediumQ6F1: "",
    mediumQ6F2: "",
    mediumQ6F3: "",
    mediumQ6F4: "",
    mediumQ6A: "",
    mediumQ6U: false,
    mediumQ7Q: "",
    mediumQ7F1: "",
    mediumQ7F2: "",
    mediumQ7F3: "",
    mediumQ7F4: "",
    mediumQ7A: "",
    mediumQ7U: false,
    mediumQ8Q: "",
    mediumQ8F1: "",
    mediumQ8F2: "",
    mediumQ8F3: "",
    mediumQ8F4: "",
    mediumQ8A: "",
    mediumQ8U: false,
    mediumQ9Q: "",
    mediumQ9F1: "",
    mediumQ9F2: "",
    mediumQ9F3: "",
    mediumQ9F4: "",
    mediumQ9A: "",
    mediumQ9U: false,
    mediumQ10Q: "",
    mediumQ10F1: "",
    mediumQ10F2: "",
    mediumQ10F3: "",
    mediumQ10F4: "",
    mediumQ10A: "",
    mediumQ10U: false,
    mediumQ11Q: "",
    mediumQ11F1: "",
    mediumQ11F2: "",
    mediumQ11F3: "",
    mediumQ11F4: "",
    mediumQ11A: "",
    mediumQ11U: false,
    mediumQ12Q: "",
    mediumQ12F1: "",
    mediumQ12F2: "",
    mediumQ12F3: "",
    mediumQ12F4: "",
    mediumQ12A: "",
    mediumQ12U: false,
    mediumQ13Q: "",
    mediumQ13F1: "",
    mediumQ13F2: "",
    mediumQ13F3: "",
    mediumQ13F4: "",
    mediumQ13A: "",
    mediumQ13U: false,
    mediumQ14Q: "",
    mediumQ14F1: "",
    mediumQ14F2: "",
    mediumQ14F3: "",
    mediumQ14F4: "",
    mediumQ14A: "",
    mediumQ14U: false,
    mediumQ15Q: "",
    mediumQ15F1: "",
    mediumQ15F2: "",
    mediumQ15F3: "",
    mediumQ15F4: "",
    mediumQ15A: "",
    mediumQ15U: false,
    mediumQ16Q: "",
    mediumQ16F1: "",
    mediumQ16F2: "",
    mediumQ16F3: "",
    mediumQ16F4: "",
    mediumQ16A: "",
    mediumQ16U: false,
    mediumQ17Q: "",
    mediumQ17F1: "",
    mediumQ17F2: "",
    mediumQ17F3: "",
    mediumQ17F4: "",
    mediumQ17A: "",
    mediumQ17U: false,
    mediumQ18Q: "",
    mediumQ18F1: "",
    mediumQ18F2: "",
    mediumQ18F3: "",
    mediumQ18F4: "",
    mediumQ18A: "",
    mediumQ18U: false,
    mediumQ19Q: "",
    mediumQ19F1: "",
    mediumQ19F2: "",
    mediumQ19F3: "",
    mediumQ19F4: "",
    mediumQ19A: "",
    mediumQ19U: false,
    mediumQ20Q: "",
    mediumQ20F1: "",
    mediumQ20F2: "",
    mediumQ20F3: "",
    mediumQ20F4: "",
    mediumQ20A: "",
    mediumQ20U: false,
    mediumQ21Q: "",
    mediumQ21F1: "",
    mediumQ21F2: "",
    mediumQ21F3: "",
    mediumQ21F4: "",
    mediumQ21A: "",
    mediumQ21U: false,
    mediumQ22Q: "",
    mediumQ22F1: "",
    mediumQ22F2: "",
    mediumQ22F3: "",
    mediumQ22F4: "",
    mediumQ22A: "",
    mediumQ22U: false,
    mediumQ23Q: "",
    mediumQ23F1: "",
    mediumQ23F2: "",
    mediumQ23F3: "",
    mediumQ23F4: "",
    mediumQ23A: "",
    mediumQ23U: false,
    mediumQ24Q: "",
    mediumQ24F1: "",
    mediumQ24F2: "",
    mediumQ24F3: "",
    mediumQ24F4: "",
    mediumQ24A: "",
    mediumQ24U: false,
    mediumQ25Q: "",
    mediumQ25F1: "",
    mediumQ25F2: "",
    mediumQ25F3: "",
    mediumQ25F4: "",
    mediumQ25A: "",
    mediumQ25U: false,
    mediumQ26Q: "",
    mediumQ26F1: "",
    mediumQ26F2: "",
    mediumQ26F3: "",
    mediumQ26F4: "",
    mediumQ26A: "",
    mediumQ26U: false,
    mediumQ27Q: "",
    mediumQ27F1: "",
    mediumQ27F2: "",
    mediumQ27F3: "",
    mediumQ27F4: "",
    mediumQ27A: "",
    mediumQ27U: false,
    mediumQ28Q: "",
    mediumQ28F1: "",
    mediumQ28F2: "",
    mediumQ28F3: "",
    mediumQ28F4: "",
    mediumQ28A: "",
    mediumQ28U: false,
    mediumQ29Q: "",
    mediumQ29F1: "",
    mediumQ29F2: "",
    mediumQ29F3: "",
    mediumQ29F4: "",
    mediumQ29A: "",
    mediumQ29U: false,
    mediumQ30Q: "",
    mediumQ30F1: "",
    mediumQ30F2: "",
    mediumQ30F3: "",
    mediumQ30F4: "",
    mediumQ30A: "",
    mediumQ30U: false,
    mediumTime: 0,
    hardQ1Q: "",
    hardQ1F1: "",
    hardQ1F2: "",
    hardQ1F3: "",
    hardQ1F4: "",
    hardQ1A: "",
    hardQ1U: true,
    hardQ2Q: "",
    hardQ2F1: "",
    hardQ2F2: "",
    hardQ2F3: "",
    hardQ2F4: "",
    hardQ2A: "",
    hardQ2U: false,
    hardQ3Q: "",
    hardQ3F1: "",
    hardQ3F2: "",
    hardQ3F3: "",
    hardQ3F4: "",
    hardQ3A: "",
    hardQ3U: false,
    hardQ4Q: "",
    hardQ4F1: "",
    hardQ4F2: "",
    hardQ4F3: "",
    hardQ4F4: "",
    hardQ4A: "",
    hardQ4U: false,
    hardQ5Q: "",
    hardQ5F1: "",
    hardQ5F2: "",
    hardQ5F3: "",
    hardQ5F4: "",
    hardQ5A: "",
    hardQ5U: false,
    hardQ6Q: "",
    hardQ6F1: "",
    hardQ6F2: "",
    hardQ6F3: "",
    hardQ6F4: "",
    hardQ6A: "",
    hardQ6U: false,
    hardQ7Q: "",
    hardQ7F1: "",
    hardQ7F2: "",
    hardQ7F3: "",
    hardQ7F4: "",
    hardQ7A: "",
    hardQ7U: false,
    hardQ8Q: "",
    hardQ8F1: "",
    hardQ8F2: "",
    hardQ8F3: "",
    hardQ8F4: "",
    hardQ8A: "",
    hardQ8U: false,
    hardQ9Q: "",
    hardQ9F1: "",
    hardQ9F2: "",
    hardQ9F3: "",
    hardQ9F4: "",
    hardQ9A: "",
    hardQ9U: false,
    hardQ10Q: "",
    hardQ10F1: "",
    hardQ10F2: "",
    hardQ10F3: "",
    hardQ10F4: "",
    hardQ10A: "",
    hardQ10U: false,
    hardQ11Q: "",
    hardQ11F1: "",
    hardQ11F2: "",
    hardQ11F3: "",
    hardQ11F4: "",
    hardQ11A: "",
    hardQ11U: false,
    hardQ12Q: "",
    hardQ12F1: "",
    hardQ12F2: "",
    hardQ12F3: "",
    hardQ12F4: "",
    hardQ12A: "",
    hardQ12U: false,
    hardQ13Q: "",
    hardQ13F1: "",
    hardQ13F2: "",
    hardQ13F3: "",
    hardQ13F4: "",
    hardQ13A: "",
    hardQ13U: false,
    hardQ14Q: "",
    hardQ14F1: "",
    hardQ14F2: "",
    hardQ14F3: "",
    hardQ14F4: "",
    hardQ14A: "",
    hardQ14U: false,
    hardQ15Q: "",
    hardQ15F1: "",
    hardQ15F2: "",
    hardQ15F3: "",
    hardQ15F4: "",
    hardQ15A: "",
    hardQ15U: false,
    hardQ16Q: "",
    hardQ16F1: "",
    hardQ16F2: "",
    hardQ16F3: "",
    hardQ16F4: "",
    hardQ16A: "",
    hardQ16U: false,
    hardQ17Q: "",
    hardQ17F1: "",
    hardQ17F2: "",
    hardQ17F3: "",
    hardQ17F4: "",
    hardQ17A: "",
    hardQ17U: false,
    hardQ18Q: "",
    hardQ18F1: "",
    hardQ18F2: "",
    hardQ18F3: "",
    hardQ18F4: "",
    hardQ18A: "",
    hardQ18U: false,
    hardQ19Q: "",
    hardQ19F1: "",
    hardQ19F2: "",
    hardQ19F3: "",
    hardQ19F4: "",
    hardQ19A: "",
    hardQ19U: false,
    hardQ20Q: "",
    hardQ20F1: "",
    hardQ20F2: "",
    hardQ20F3: "",
    hardQ20F4: "",
    hardQ20A: "",
    hardQ20U: false,
    hardQ21Q: "",
    hardQ21F1: "",
    hardQ21F2: "",
    hardQ21F3: "",
    hardQ21F4: "",
    hardQ21A: "",
    hardQ21U: false,
    hardQ22Q: "",
    hardQ22F1: "",
    hardQ22F2: "",
    hardQ22F3: "",
    hardQ22F4: "",
    hardQ22A: "",
    hardQ22U: false,
    hardQ23Q: "",
    hardQ23F1: "",
    hardQ23F2: "",
    hardQ23F3: "",
    hardQ23F4: "",
    hardQ23A: "",
    hardQ23U: false,
    hardQ24Q: "",
    hardQ24F1: "",
    hardQ24F2: "",
    hardQ24F3: "",
    hardQ24F4: "",
    hardQ24A: "",
    hardQ24U: false,
    hardQ25Q: "",
    hardQ25F1: "",
    hardQ25F2: "",
    hardQ25F3: "",
    hardQ25F4: "",
    hardQ25A: "",
    hardQ25U: false,
    hardQ26Q: "",
    hardQ26F1: "",
    hardQ26F2: "",
    hardQ26F3: "",
    hardQ26F4: "",
    hardQ26A: "",
    hardQ26U: false,
    hardQ27Q: "",
    hardQ27F1: "",
    hardQ27F2: "",
    hardQ27F3: "",
    hardQ27F4: "",
    hardQ27A: "",
    hardQ27U: false,
    hardQ28Q: "",
    hardQ28F1: "",
    hardQ28F2: "",
    hardQ28F3: "",
    hardQ28F4: "",
    hardQ28A: "",
    hardQ28U: false,
    hardQ29Q: "",
    hardQ29F1: "",
    hardQ29F2: "",
    hardQ29F3: "",
    hardQ29F4: "",
    hardQ29A: "",
    hardQ29U: false,
    hardQ30Q: "",
    hardQ30F1: "",
    hardQ30F2: "",
    hardQ30F3: "",
    hardQ30F4: "",
    hardQ30A: "",
    hardQ30U: false,
    hardTime: 0,
    evaluateQ1Q: "",
    evaluateQ1F1: "",
    evaluateQ1F2: "",
    evaluateQ1F3: "",
    evaluateQ1F4: "",
    evaluateQ1A: "",
    evaluateQ1U: true,
    evaluateQ2Q: "",
    evaluateQ2F1: "",
    evaluateQ2F2: "",
    evaluateQ2F3: "",
    evaluateQ2F4: "",
    evaluateQ2A: "",
    evaluateQ2U: false,
    evaluateQ3Q: "",
    evaluateQ3F1: "",
    evaluateQ3F2: "",
    evaluateQ3F3: "",
    evaluateQ3F4: "",
    evaluateQ3A: "",
    evaluateQ3U: false,
    evaluateQ4Q: "",
    evaluateQ4F1: "",
    evaluateQ4F2: "",
    evaluateQ4F3: "",
    evaluateQ4F4: "",
    evaluateQ4A: "",
    evaluateQ4U: false,
    evaluateQ5Q: "",
    evaluateQ5F1: "",
    evaluateQ5F2: "",
    evaluateQ5F3: "",
    evaluateQ5F4: "",
    evaluateQ5A: "",
    evaluateQ5U: false,
    evaluateQ6Q: "",
    evaluateQ6F1: "",
    evaluateQ6F2: "",
    evaluateQ6F3: "",
    evaluateQ6F4: "",
    evaluateQ6A: "",
    evaluateQ6U: false,
    evaluateQ7Q: "",
    evaluateQ7F1: "",
    evaluateQ7F2: "",
    evaluateQ7F3: "",
    evaluateQ7F4: "",
    evaluateQ7A: "",
    evaluateQ7U: false,
    evaluateQ8Q: "",
    evaluateQ8F1: "",
    evaluateQ8F2: "",
    evaluateQ8F3: "",
    evaluateQ8F4: "",
    evaluateQ8A: "",
    evaluateQ8U: false,
    evaluateQ9Q: "",
    evaluateQ9F1: "",
    evaluateQ9F2: "",
    evaluateQ9F3: "",
    evaluateQ9F4: "",
    evaluateQ9A: "",
    evaluateQ9U: false,
    evaluateQ10Q: "",
    evaluateQ10F1: "",
    evaluateQ10F2: "",
    evaluateQ10F3: "",
    evaluateQ10F4: "",
    evaluateQ10A: "",
    evaluateQ10U: false,
    evaluateQ11Q: "",
    evaluateQ11F1: "",
    evaluateQ11F2: "",
    evaluateQ11F3: "",
    evaluateQ11F4: "",
    evaluateQ11A: "",
    evaluateQ11U: false,
    evaluateQ12Q: "",
    evaluateQ12F1: "",
    evaluateQ12F2: "",
    evaluateQ12F3: "",
    evaluateQ12F4: "",
    evaluateQ12A: "",
    evaluateQ12U: false,
    evaluateQ13Q: "",
    evaluateQ13F1: "",
    evaluateQ13F2: "",
    evaluateQ13F3: "",
    evaluateQ13F4: "",
    evaluateQ13A: "",
    evaluateQ13U: false,
    evaluateQ14Q: "",
    evaluateQ14F1: "",
    evaluateQ14F2: "",
    evaluateQ14F3: "",
    evaluateQ14F4: "",
    evaluateQ14A: "",
    evaluateQ14U: false,
    evaluateQ15Q: "",
    evaluateQ15F1: "",
    evaluateQ15F2: "",
    evaluateQ15F3: "",
    evaluateQ15F4: "",
    evaluateQ15A: "",
    evaluateQ15U: false,
    evaluateQ16Q: "",
    evaluateQ16F1: "",
    evaluateQ16F2: "",
    evaluateQ16F3: "",
    evaluateQ16F4: "",
    evaluateQ16A: "",
    evaluateQ16U: false,
    evaluateQ17Q: "",
    evaluateQ17F1: "",
    evaluateQ17F2: "",
    evaluateQ17F3: "",
    evaluateQ17F4: "",
    evaluateQ17A: "",
    evaluateQ17U: false,
    evaluateQ18Q: "",
    evaluateQ18F1: "",
    evaluateQ18F2: "",
    evaluateQ18F3: "",
    evaluateQ18F4: "",
    evaluateQ18A: "",
    evaluateQ18U: false,
    evaluateQ19Q: "",
    evaluateQ19F1: "",
    evaluateQ19F2: "",
    evaluateQ19F3: "",
    evaluateQ19F4: "",
    evaluateQ19A: "",
    evaluateQ19U: false,
    evaluateQ20Q: "",
    evaluateQ20F1: "",
    evaluateQ20F2: "",
    evaluateQ20F3: "",
    evaluateQ20F4: "",
    evaluateQ20A: "",
    evaluateQ20U: false,
    evaluateQ21Q: "",
    evaluateQ21F1: "",
    evaluateQ21F2: "",
    evaluateQ21F3: "",
    evaluateQ21F4: "",
    evaluateQ21A: "",
    evaluateQ21U: false,
    evaluateQ22Q: "",
    evaluateQ22F1: "",
    evaluateQ22F2: "",
    evaluateQ22F3: "",
    evaluateQ22F4: "",
    evaluateQ22A: "",
    evaluateQ22U: false,
    evaluateQ23Q: "",
    evaluateQ23F1: "",
    evaluateQ23F2: "",
    evaluateQ23F3: "",
    evaluateQ23F4: "",
    evaluateQ23A: "",
    evaluateQ23U: false,
    evaluateQ24Q: "",
    evaluateQ24F1: "",
    evaluateQ24F2: "",
    evaluateQ24F3: "",
    evaluateQ24F4: "",
    evaluateQ24A: "",
    evaluateQ24U: false,
    evaluateQ25Q: "",
    evaluateQ25F1: "",
    evaluateQ25F2: "",
    evaluateQ25F3: "",
    evaluateQ25F4: "",
    evaluateQ25A: "",
    evaluateQ25U: false,
    evaluateQ26Q: "",
    evaluateQ26F1: "",
    evaluateQ26F2: "",
    evaluateQ26F3: "",
    evaluateQ26F4: "",
    evaluateQ26A: "",
    evaluateQ26U: false,
    evaluateQ27Q: "",
    evaluateQ27F1: "",
    evaluateQ27F2: "",
    evaluateQ27F3: "",
    evaluateQ27F4: "",
    evaluateQ27A: "",
    evaluateQ27U: false,
    evaluateQ28Q: "",
    evaluateQ28F1: "",
    evaluateQ28F2: "",
    evaluateQ28F3: "",
    evaluateQ28F4: "",
    evaluateQ28A: "",
    evaluateQ28U: false,
    evaluateQ29Q: "",
    evaluateQ29F1: "",
    evaluateQ29F2: "",
    evaluateQ29F3: "",
    evaluateQ29F4: "",
    evaluateQ29A: "",
    evaluateQ29U: false,
    evaluateQ30Q: "",
    evaluateQ30F1: "",
    evaluateQ30F2: "",
    evaluateQ30F3: "",
    evaluateQ30F4: "",
    evaluateQ30A: "",
    evaluateQ30U: false,
    evaluateTime: 0,
    apQ1Q: "",
    apQ1F1: "",
    apQ1F2: "",
    apQ1F3: "",
    apQ1F4: "",
    apQ1A: "",
    apQ1U: true,
    apQ2Q: "",
    apQ2F1: "",
    apQ2F2: "",
    apQ2F3: "",
    apQ2F4: "",
    apQ2A: "",
    apQ2U: false,
    apQ3Q: "",
    apQ3F1: "",
    apQ3F2: "",
    apQ3F3: "",
    apQ3F4: "",
    apQ3A: "",
    apQ3U: false,
    apQ4Q: "",
    apQ4F1: "",
    apQ4F2: "",
    apQ4F3: "",
    apQ4F4: "",
    apQ4A: "",
    apQ4U: false,
    apQ5Q: "",
    apQ5F1: "",
    apQ5F2: "",
    apQ5F3: "",
    apQ5F4: "",
    apQ5A: "",
    apQ5U: false,
    apQ6Q: "",
    apQ6F1: "",
    apQ6F2: "",
    apQ6F3: "",
    apQ6F4: "",
    apQ6A: "",
    apQ6U: false,
    apQ7Q: "",
    apQ7F1: "",
    apQ7F2: "",
    apQ7F3: "",
    apQ7F4: "",
    apQ7A: "",
    apQ7U: false,
    apQ8Q: "",
    apQ8F1: "",
    apQ8F2: "",
    apQ8F3: "",
    apQ8F4: "",
    apQ8A: "",
    apQ8U: false,
    apQ9Q: "",
    apQ9F1: "",
    apQ9F2: "",
    apQ9F3: "",
    apQ9F4: "",
    apQ9A: "",
    apQ9U: false,
    apQ10Q: "",
    apQ10F1: "",
    apQ10F2: "",
    apQ10F3: "",
    apQ10F4: "",
    apQ10A: "",
    apQ10U: false,
    apQ11Q: "",
    apQ11F1: "",
    apQ11F2: "",
    apQ11F3: "",
    apQ11F4: "",
    apQ11A: "",
    apQ11U: false,
    apQ12Q: "",
    apQ12F1: "",
    apQ12F2: "",
    apQ12F3: "",
    apQ12F4: "",
    apQ12A: "",
    apQ12U: false,
    apQ13Q: "",
    apQ13F1: "",
    apQ13F2: "",
    apQ13F3: "",
    apQ13F4: "",
    apQ13A: "",
    apQ13U: false,
    apQ14Q: "",
    apQ14F1: "",
    apQ14F2: "",
    apQ14F3: "",
    apQ14F4: "",
    apQ14A: "",
    apQ14U: false,
    apQ15Q: "",
    apQ15F1: "",
    apQ15F2: "",
    apQ15F3: "",
    apQ15F4: "",
    apQ15A: "",
    apQ15U: false,
    apQ16Q: "",
    apQ16F1: "",
    apQ16F2: "",
    apQ16F3: "",
    apQ16F4: "",
    apQ16A: "",
    apQ16U: false,
    apQ17Q: "",
    apQ17F1: "",
    apQ17F2: "",
    apQ17F3: "",
    apQ17F4: "",
    apQ17A: "",
    apQ17U: false,
    apQ18Q: "",
    apQ18F1: "",
    apQ18F2: "",
    apQ18F3: "",
    apQ18F4: "",
    apQ18A: "",
    apQ18U: false,
    apQ19Q: "",
    apQ19F1: "",
    apQ19F2: "",
    apQ19F3: "",
    apQ19F4: "",
    apQ19A: "",
    apQ19U: false,
    apQ20Q: "",
    apQ20F1: "",
    apQ20F2: "",
    apQ20F3: "",
    apQ20F4: "",
    apQ20A: "",
    apQ20U: false,
    apQ21Q: "",
    apQ21F1: "",
    apQ21F2: "",
    apQ21F3: "",
    apQ21F4: "",
    apQ21A: "",
    apQ21U: false,
    apQ22Q: "",
    apQ22F1: "",
    apQ22F2: "",
    apQ22F3: "",
    apQ22F4: "",
    apQ22A: "",
    apQ22U: false,
    apQ23Q: "",
    apQ23F1: "",
    apQ23F2: "",
    apQ23F3: "",
    apQ23F4: "",
    apQ23A: "",
    apQ23U: false,
    apQ24Q: "",
    apQ24F1: "",
    apQ24F2: "",
    apQ24F3: "",
    apQ24F4: "",
    apQ24A: "",
    apQ24U: false,
    apQ25Q: "",
    apQ25F1: "",
    apQ25F2: "",
    apQ25F3: "",
    apQ25F4: "",
    apQ25A: "",
    apQ25U: false,
    apQ26Q: "",
    apQ26F1: "",
    apQ26F2: "",
    apQ26F3: "",
    apQ26F4: "",
    apQ26A: "",
    apQ26U: false,
    apQ27Q: "",
    apQ27F1: "",
    apQ27F2: "",
    apQ27F3: "",
    apQ27F4: "",
    apQ27A: "",
    apQ27U: false,
    apQ28Q: "",
    apQ28F1: "",
    apQ28F2: "",
    apQ28F3: "",
    apQ28F4: "",
    apQ28A: "",
    apQ28U: false,
    apQ29Q: "",
    apQ29F1: "",
    apQ29F2: "",
    apQ29F3: "",
    apQ29F4: "",
    apQ29A: "",
    apQ29U: false,
    apQ30Q: "",
    apQ30F1: "",
    apQ30F2: "",
    apQ30F3: "",
    apQ30F4: "",
    apQ30A: "",
    apQ30U: false,
    apTime: 0,
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleAddEasyQuestion = () => {
    console.log("Executed");
    let questions = [
      this.state.easyQ1U,
      this.state.easyQ2U,
      this.state.easyQ3U,
      this.state.easyQ4U,
      this.state.easyQ5U,
      this.state.easyQ6U,
      this.state.easyQ7U,
      this.state.easyQ8U,
      this.state.easyQ9U,
      this.state.easyQ10U,
      this.state.easyQ11U,
      this.state.easyQ12U,
      this.state.easyQ13U,
      this.state.easyQ14U,
      this.state.easyQ15U,
      this.state.easyQ16U,
      this.state.easyQ17U,
      this.state.easyQ18U,
      this.state.easyQ19U,
      this.state.easyQ20U,
      this.state.easyQ21U,
      this.state.easyQ22U,
      this.state.easyQ23U,
      this.state.easyQ24U,
      this.state.easyQ25U,
      this.state.easyQ26U,
      this.state.easyQ27U,
      this.state.easyQ28U,
      this.state.easyQ29U,
      this.state.easyQ30U,
    ];

    let done = false;

    for (let i = 0; i < questions.length; i++) {
      if (questions[i] == false && !done) {
        switch (i) {
          case 0:
            this.setState({
              easyQ1U: true,
            });
            console.log(i);
            done = true;
            break;
          case 1:
            this.setState({
              easyQ2U: true,
            });
            console.log(i);
            done = true;
            break;
          case 2:
            this.setState({
              easyQ3U: true,
            });
            console.log(i);
            done = true;
            break;
          case 3:
            this.setState({
              easyQ4U: true,
            });
            console.log(i);
            done = true;
            break;
          case 4:
            this.setState({
              easyQ5U: true,
            });
            console.log(i);
            done = true;
            break;
          case 5:
            this.setState({
              easyQ6U: true,
            });
            console.log(i);
            done = true;
            break;
          case 6:
            this.setState({
              easyQ7U: true,
            });
            console.log(i);
            done = true;
            break;
          case 7:
            this.setState({
              easyQ8U: true,
            });
            console.log(i);
            done = true;
            break;
          case 8:
            this.setState({
              easyQ9U: true,
            });
            console.log(i);
            done = true;
            break;
          case 9:
            this.setState({
              easyQ10U: true,
            });
            console.log(i);
            done = true;
            break;
          case 10:
            this.setState({
              easyQ11U: true,
            });
            console.log(i);
            done = true;
            break;
          case 11:
            this.setState({
              easyQ12U: true,
            });
            console.log(i);
            done = true;
            break;
          case 12:
            this.setState({
              easyQ13U: true,
            });
            console.log(i);
            done = true;
            break;
          case 13:
            this.setState({
              easyQ14U: true,
            });
            console.log(i);
            done = true;
            break;
          case 14:
            this.setState({
              easyQ15U: true,
            });
            console.log(i);
            done = true;
            break;
          case 15:
            this.setState({
              easyQ16U: true,
            });
            console.log(i);
            done = true;
            break;
          case 16:
            this.setState({
              easyQ17U: true,
            });
            console.log(i);
            done = true;
            break;
          case 17:
            this.setState({
              easyQ18U: true,
            });
            console.log(i);
            done = true;
            break;
          case 18:
            this.setState({
              easyQ19U: true,
            });
            console.log(i);
            done = true;
            break;
          case 19:
            this.setState({
              easyQ20U: true,
            });
            console.log(i);
            done = true;
            break;
          case 20:
            this.setState({
              easyQ21U: true,
            });
            console.log(i);
            done = true;
            break;
          case 21:
            this.setState({
              easyQ22U: true,
            });
            console.log(i);
            done = true;
            break;
          case 22:
            this.setState({
              easyQ23U: true,
            });
            console.log(i);
            done = true;
            break;
          case 23:
            this.setState({
              easyQ24U: true,
            });
            console.log(i);
            done = true;
            break;
          case 24:
            this.setState({
              easyQ25U: true,
            });
            console.log(i);
            done = true;
            break;
          case 25:
            this.setState({
              easyQ26U: true,
            });
            console.log(i);
            done = true;
            break;
          case 26:
            this.setState({
              easyQ27U: true,
            });
            console.log(i);
            done = true;
            break;
          case 27:
            this.setState({
              easyQ28U: true,
            });
            console.log(i);
            done = true;
            break;
          case 28:
            this.setState({
              easyQ29U: true,
            });
            console.log(i);
            done = true;
            break;
          case 29:
            this.setState({
              easyQ30U: true,
            });
            console.log(i);
            done = true;
            break;
          default:
            console.log(i);
            break;
        }
      }
    }
  };

  handleAddMediumQuestion = () => {
    console.log("Executed");
    let questions = [
      this.state.mediumQ1U,
      this.state.mediumQ2U,
      this.state.mediumQ3U,
      this.state.mediumQ4U,
      this.state.mediumQ5U,
      this.state.mediumQ6U,
      this.state.mediumQ7U,
      this.state.mediumQ8U,
      this.state.mediumQ9U,
      this.state.mediumQ10U,
      this.state.mediumQ11U,
      this.state.mediumQ12U,
      this.state.mediumQ13U,
      this.state.mediumQ14U,
      this.state.mediumQ15U,
      this.state.mediumQ16U,
      this.state.mediumQ17U,
      this.state.mediumQ18U,
      this.state.mediumQ19U,
      this.state.mediumQ20U,
      this.state.mediumQ21U,
      this.state.mediumQ22U,
      this.state.mediumQ23U,
      this.state.mediumQ24U,
      this.state.mediumQ25U,
      this.state.mediumQ26U,
      this.state.mediumQ27U,
      this.state.mediumQ28U,
      this.state.mediumQ29U,
      this.state.mediumQ30U,
    ];

    let done = false;

    for (let i = 0; i < questions.length; i++) {
      if (questions[i] == false && !done) {
        switch (i) {
          case 0:
            this.setState({
              mediumQ1U: true,
            });
            console.log(i);
            done = true;
            break;
          case 1:
            this.setState({
              mediumQ2U: true,
            });
            console.log(i);
            done = true;
            break;
          case 2:
            this.setState({
              mediumQ3U: true,
            });
            console.log(i);
            done = true;
            break;
          case 3:
            this.setState({
              mediumQ4U: true,
            });
            console.log(i);
            done = true;
            break;
          case 4:
            this.setState({
              mediumQ5U: true,
            });
            console.log(i);
            done = true;
            break;
          case 5:
            this.setState({
              mediumQ6U: true,
            });
            console.log(i);
            done = true;
            break;
          case 6:
            this.setState({
              mediumQ7U: true,
            });
            console.log(i);
            done = true;
            break;
          case 7:
            this.setState({
              mediumQ8U: true,
            });
            console.log(i);
            done = true;
            break;
          case 8:
            this.setState({
              mediumQ9U: true,
            });
            console.log(i);
            done = true;
            break;
          case 9:
            this.setState({
              mediumQ10U: true,
            });
            console.log(i);
            done = true;
            break;
          case 10:
            this.setState({
              mediumQ11U: true,
            });
            console.log(i);
            done = true;
            break;
          case 11:
            this.setState({
              mediumQ12U: true,
            });
            console.log(i);
            done = true;
            break;
          case 12:
            this.setState({
              mediumQ13U: true,
            });
            console.log(i);
            done = true;
            break;
          case 13:
            this.setState({
              mediumQ14U: true,
            });
            console.log(i);
            done = true;
            break;
          case 14:
            this.setState({
              mediumQ15U: true,
            });
            console.log(i);
            done = true;
            break;
          case 15:
            this.setState({
              mediumQ16U: true,
            });
            console.log(i);
            done = true;
            break;
          case 16:
            this.setState({
              mediumQ17U: true,
            });
            console.log(i);
            done = true;
            break;
          case 17:
            this.setState({
              mediumQ18U: true,
            });
            console.log(i);
            done = true;
            break;
          case 18:
            this.setState({
              mediumQ19U: true,
            });
            console.log(i);
            done = true;
            break;
          case 19:
            this.setState({
              mediumQ20U: true,
            });
            console.log(i);
            done = true;
            break;
          case 20:
            this.setState({
              mediumQ21U: true,
            });
            console.log(i);
            done = true;
            break;
          case 21:
            this.setState({
              mediumQ22U: true,
            });
            console.log(i);
            done = true;
            break;
          case 22:
            this.setState({
              mediumQ23U: true,
            });
            console.log(i);
            done = true;
            break;
          case 23:
            this.setState({
              mediumQ24U: true,
            });
            console.log(i);
            done = true;
            break;
          case 24:
            this.setState({
              mediumQ25U: true,
            });
            console.log(i);
            done = true;
            break;
          case 25:
            this.setState({
              mediumQ26U: true,
            });
            console.log(i);
            done = true;
            break;
          case 26:
            this.setState({
              mediumQ27U: true,
            });
            console.log(i);
            done = true;
            break;
          case 27:
            this.setState({
              mediumQ28U: true,
            });
            console.log(i);
            done = true;
            break;
          case 28:
            this.setState({
              mediumQ29U: true,
            });
            console.log(i);
            done = true;
            break;
          case 29:
            this.setState({
              mediumQ30U: true,
            });
            console.log(i);
            done = true;
            break;
          default:
            console.log(i);
            break;
        }
      }
    }
  };

  handleAddHardQuestion = () => {
    console.log("Executed");
    let questions = [
      this.state.hardQ1U,
      this.state.hardQ2U,
      this.state.hardQ3U,
      this.state.hardQ4U,
      this.state.hardQ5U,
      this.state.hardQ6U,
      this.state.hardQ7U,
      this.state.hardQ8U,
      this.state.hardQ9U,
      this.state.hardQ10U,
      this.state.hardQ11U,
      this.state.hardQ12U,
      this.state.hardQ13U,
      this.state.hardQ14U,
      this.state.hardQ15U,
      this.state.hardQ16U,
      this.state.hardQ17U,
      this.state.hardQ18U,
      this.state.hardQ19U,
      this.state.hardQ20U,
      this.state.hardQ21U,
      this.state.hardQ22U,
      this.state.hardQ23U,
      this.state.hardQ24U,
      this.state.hardQ25U,
      this.state.hardQ26U,
      this.state.hardQ27U,
      this.state.hardQ28U,
      this.state.hardQ29U,
      this.state.hardQ30U,
    ];

    let done = false;

    for (let i = 0; i < questions.length; i++) {
      if (questions[i] == false && !done) {
        switch (i) {
          case 0:
            this.setState({
              hardQ1U: true,
            });
            console.log(i);
            done = true;
            break;
          case 1:
            this.setState({
              hardQ2U: true,
            });
            console.log(i);
            done = true;
            break;
          case 2:
            this.setState({
              hardQ3U: true,
            });
            console.log(i);
            done = true;
            break;
          case 3:
            this.setState({
              hardQ4U: true,
            });
            console.log(i);
            done = true;
            break;
          case 4:
            this.setState({
              hardQ5U: true,
            });
            console.log(i);
            done = true;
            break;
          case 5:
            this.setState({
              hardQ6U: true,
            });
            console.log(i);
            done = true;
            break;
          case 6:
            this.setState({
              hardQ7U: true,
            });
            console.log(i);
            done = true;
            break;
          case 7:
            this.setState({
              hardQ8U: true,
            });
            console.log(i);
            done = true;
            break;
          case 8:
            this.setState({
              hardQ9U: true,
            });
            console.log(i);
            done = true;
            break;
          case 9:
            this.setState({
              hardQ10U: true,
            });
            console.log(i);
            done = true;
            break;
          case 10:
            this.setState({
              hardQ11U: true,
            });
            console.log(i);
            done = true;
            break;
          case 11:
            this.setState({
              hardQ12U: true,
            });
            console.log(i);
            done = true;
            break;
          case 12:
            this.setState({
              hardQ13U: true,
            });
            console.log(i);
            done = true;
            break;
          case 13:
            this.setState({
              hardQ14U: true,
            });
            console.log(i);
            done = true;
            break;
          case 14:
            this.setState({
              hardQ15U: true,
            });
            console.log(i);
            done = true;
            break;
          case 15:
            this.setState({
              hardQ16U: true,
            });
            console.log(i);
            done = true;
            break;
          case 16:
            this.setState({
              hardQ17U: true,
            });
            console.log(i);
            done = true;
            break;
          case 17:
            this.setState({
              hardQ18U: true,
            });
            console.log(i);
            done = true;
            break;
          case 18:
            this.setState({
              hardQ19U: true,
            });
            console.log(i);
            done = true;
            break;
          case 19:
            this.setState({
              hardQ20U: true,
            });
            console.log(i);
            done = true;
            break;
          case 20:
            this.setState({
              hardQ21U: true,
            });
            console.log(i);
            done = true;
            break;
          case 21:
            this.setState({
              hardQ22U: true,
            });
            console.log(i);
            done = true;
            break;
          case 22:
            this.setState({
              hardQ23U: true,
            });
            console.log(i);
            done = true;
            break;
          case 23:
            this.setState({
              hardQ24U: true,
            });
            console.log(i);
            done = true;
            break;
          case 24:
            this.setState({
              hardQ25U: true,
            });
            console.log(i);
            done = true;
            break;
          case 25:
            this.setState({
              hardQ26U: true,
            });
            console.log(i);
            done = true;
            break;
          case 26:
            this.setState({
              hardQ27U: true,
            });
            console.log(i);
            done = true;
            break;
          case 27:
            this.setState({
              hardQ28U: true,
            });
            console.log(i);
            done = true;
            break;
          case 28:
            this.setState({
              hardQ29U: true,
            });
            console.log(i);
            done = true;
            break;
          case 29:
            this.setState({
              hardQ30U: true,
            });
            console.log(i);
            done = true;
            break;
          default:
            console.log(i);
            break;
        }
      }
    }
  };

  handleAddEvaluateQuestion = () => {
    console.log("Executed");
    let questions = [
      this.state.evaluateQ1U,
      this.state.evaluateQ2U,
      this.state.evaluateQ3U,
      this.state.evaluateQ4U,
      this.state.evaluateQ5U,
      this.state.evaluateQ6U,
      this.state.evaluateQ7U,
      this.state.evaluateQ8U,
      this.state.evaluateQ9U,
      this.state.evaluateQ10U,
      this.state.evaluateQ11U,
      this.state.evaluateQ12U,
      this.state.evaluateQ13U,
      this.state.evaluateQ14U,
      this.state.evaluateQ15U,
      this.state.evaluateQ16U,
      this.state.evaluateQ17U,
      this.state.evaluateQ18U,
      this.state.evaluateQ19U,
      this.state.evaluateQ20U,
      this.state.evaluateQ21U,
      this.state.evaluateQ22U,
      this.state.evaluateQ23U,
      this.state.evaluateQ24U,
      this.state.evaluateQ25U,
      this.state.evaluateQ26U,
      this.state.evaluateQ27U,
      this.state.evaluateQ28U,
      this.state.evaluateQ29U,
      this.state.evaluateQ30U,
    ];

    let done = false;

    for (let i = 0; i < questions.length; i++) {
      if (questions[i] == false && !done) {
        switch (i) {
          case 0:
            this.setState({
              evaluateQ1U: true,
            });
            console.log(i);
            done = true;
            break;
          case 1:
            this.setState({
              evaluateQ2U: true,
            });
            console.log(i);
            done = true;
            break;
          case 2:
            this.setState({
              evaluateQ3U: true,
            });
            console.log(i);
            done = true;
            break;
          case 3:
            this.setState({
              evaluateQ4U: true,
            });
            console.log(i);
            done = true;
            break;
          case 4:
            this.setState({
              evaluateQ5U: true,
            });
            console.log(i);
            done = true;
            break;
          case 5:
            this.setState({
              evaluateQ6U: true,
            });
            console.log(i);
            done = true;
            break;
          case 6:
            this.setState({
              evaluateQ7U: true,
            });
            console.log(i);
            done = true;
            break;
          case 7:
            this.setState({
              evaluateQ8U: true,
            });
            console.log(i);
            done = true;
            break;
          case 8:
            this.setState({
              evaluateQ9U: true,
            });
            console.log(i);
            done = true;
            break;
          case 9:
            this.setState({
              evaluateQ10U: true,
            });
            console.log(i);
            done = true;
            break;
          case 10:
            this.setState({
              evaluateQ11U: true,
            });
            console.log(i);
            done = true;
            break;
          case 11:
            this.setState({
              evaluateQ12U: true,
            });
            console.log(i);
            done = true;
            break;
          case 12:
            this.setState({
              evaluateQ13U: true,
            });
            console.log(i);
            done = true;
            break;
          case 13:
            this.setState({
              evaluateQ14U: true,
            });
            console.log(i);
            done = true;
            break;
          case 14:
            this.setState({
              evaluateQ15U: true,
            });
            console.log(i);
            done = true;
            break;
          case 15:
            this.setState({
              evaluateQ16U: true,
            });
            console.log(i);
            done = true;
            break;
          case 16:
            this.setState({
              evaluateQ17U: true,
            });
            console.log(i);
            done = true;
            break;
          case 17:
            this.setState({
              evaluateQ18U: true,
            });
            console.log(i);
            done = true;
            break;
          case 18:
            this.setState({
              evaluateQ19U: true,
            });
            console.log(i);
            done = true;
            break;
          case 19:
            this.setState({
              evaluateQ20U: true,
            });
            console.log(i);
            done = true;
            break;
          case 20:
            this.setState({
              evaluateQ21U: true,
            });
            console.log(i);
            done = true;
            break;
          case 21:
            this.setState({
              evaluateQ22U: true,
            });
            console.log(i);
            done = true;
            break;
          case 22:
            this.setState({
              evaluateQ23U: true,
            });
            console.log(i);
            done = true;
            break;
          case 23:
            this.setState({
              evaluateQ24U: true,
            });
            console.log(i);
            done = true;
            break;
          case 24:
            this.setState({
              evaluateQ25U: true,
            });
            console.log(i);
            done = true;
            break;
          case 25:
            this.setState({
              evaluateQ26U: true,
            });
            console.log(i);
            done = true;
            break;
          case 26:
            this.setState({
              evaluateQ27U: true,
            });
            console.log(i);
            done = true;
            break;
          case 27:
            this.setState({
              evaluateQ28U: true,
            });
            console.log(i);
            done = true;
            break;
          case 28:
            this.setState({
              evaluateQ29U: true,
            });
            console.log(i);
            done = true;
            break;
          case 29:
            this.setState({
              evaluateQ30U: true,
            });
            console.log(i);
            done = true;
            break;
          default:
            console.log(i);
            break;
        }
      }
    }
  };
  handleAddAssessPreviousQuestion = () => {
    console.log("Executed");
    let questions = [
      this.state.apQ1U,
      this.state.apQ2U,
      this.state.apQ3U,
      this.state.apQ4U,
      this.state.apQ5U,
      this.state.apQ6U,
      this.state.apQ7U,
      this.state.apQ8U,
      this.state.apQ9U,
      this.state.apQ10U,
      this.state.apQ11U,
      this.state.apQ12U,
      this.state.apQ13U,
      this.state.apQ14U,
      this.state.apQ15U,
      this.state.apQ16U,
      this.state.apQ17U,
      this.state.apQ18U,
      this.state.apQ19U,
      this.state.apQ20U,
      this.state.apQ21U,
      this.state.apQ22U,
      this.state.apQ23U,
      this.state.apQ24U,
      this.state.apQ25U,
      this.state.apQ26U,
      this.state.apQ27U,
      this.state.apQ28U,
      this.state.apQ29U,
      this.state.apQ30U,
    ];

    let done = false;

    for (let i = 0; i < questions.length; i++) {
      if (questions[i] == false && !done) {
        switch (i) {
          case 0:
            this.setState({
              apQ1U: true,
            });
            console.log(i);
            done = true;
            break;
          case 1:
            this.setState({
              apQ2U: true,
            });
            console.log(i);
            done = true;
            break;
          case 2:
            this.setState({
              apQ3U: true,
            });
            console.log(i);
            done = true;
            break;
          case 3:
            this.setState({
              apQ4U: true,
            });
            console.log(i);
            done = true;
            break;
          case 4:
            this.setState({
              apQ5U: true,
            });
            console.log(i);
            done = true;
            break;
          case 5:
            this.setState({
              apQ6U: true,
            });
            console.log(i);
            done = true;
            break;
          case 6:
            this.setState({
              apQ7U: true,
            });
            console.log(i);
            done = true;
            break;
          case 7:
            this.setState({
              apQ8U: true,
            });
            console.log(i);
            done = true;
            break;
          case 8:
            this.setState({
              apQ9U: true,
            });
            console.log(i);
            done = true;
            break;
          case 9:
            this.setState({
              apQ10U: true,
            });
            console.log(i);
            done = true;
            break;
          case 10:
            this.setState({
              apQ11U: true,
            });
            console.log(i);
            done = true;
            break;
          case 11:
            this.setState({
              apQ12U: true,
            });
            console.log(i);
            done = true;
            break;
          case 12:
            this.setState({
              apQ13U: true,
            });
            console.log(i);
            done = true;
            break;
          case 13:
            this.setState({
              apQ14U: true,
            });
            console.log(i);
            done = true;
            break;
          case 14:
            this.setState({
              apQ15U: true,
            });
            console.log(i);
            done = true;
            break;
          case 15:
            this.setState({
              apQ16U: true,
            });
            console.log(i);
            done = true;
            break;
          case 16:
            this.setState({
              apQ17U: true,
            });
            console.log(i);
            done = true;
            break;
          case 17:
            this.setState({
              apQ18U: true,
            });
            console.log(i);
            done = true;
            break;
          case 18:
            this.setState({
              apQ19U: true,
            });
            console.log(i);
            done = true;
            break;
          case 19:
            this.setState({
              apQ20U: true,
            });
            console.log(i);
            done = true;
            break;
          case 20:
            this.setState({
              apQ21U: true,
            });
            console.log(i);
            done = true;
            break;
          case 21:
            this.setState({
              apQ22U: true,
            });
            console.log(i);
            done = true;
            break;
          case 22:
            this.setState({
              apQ23U: true,
            });
            console.log(i);
            done = true;
            break;
          case 23:
            this.setState({
              apQ24U: true,
            });
            console.log(i);
            done = true;
            break;
          case 24:
            this.setState({
              apQ25U: true,
            });
            console.log(i);
            done = true;
            break;
          case 25:
            this.setState({
              apQ26U: true,
            });
            console.log(i);
            done = true;
            break;
          case 26:
            this.setState({
              apQ27U: true,
            });
            console.log(i);
            done = true;
            break;
          case 27:
            this.setState({
              apQ28U: true,
            });
            console.log(i);
            done = true;
            break;
          case 28:
            this.setState({
              apQ29U: true,
            });
            console.log(i);
            done = true;
            break;
          case 29:
            this.setState({
              apQ30U: true,
            });
            console.log(i);
            done = true;
            break;
          default:
            console.log(i);
            break;
        }
      }
    }
  };

  handleDeleteEasyQuestion = (questionNumber) => {
    console.log(questionNumber);
    switch (questionNumber) {
      case "easyQ2Q":
        this.setState({
          easyQ2Q: "",
          easyQ2F1: "",
          easyQ2F2: "",
          easyQ2F3: "",
          easyQ2F4: "",
          easyQ2A: "",
          easyQ2U: false,
        });
        break;
      case "easyQ3Q":
        this.setState({
          easyQ3Q: "",
          easyQ3F1: "",
          easyQ3F2: "",
          easyQ3F3: "",
          easyQ3F4: "",
          easyQ3A: "",
          easyQ3U: false,
        });
        break;
      case "easyQ4Q":
        this.setState({
          easyQ4Q: "",
          easyQ4F1: "",
          easyQ4F2: "",
          easyQ4F3: "",
          easyQ4F4: "",
          easyQ4A: "",
          easyQ4U: false,
        });
        break;
      case "easyQ5Q":
        this.setState({
          easyQ5Q: "",
          easyQ5F1: "",
          easyQ5F2: "",
          easyQ5F3: "",
          easyQ5F4: "",
          easyQ5A: "",
          easyQ5U: false,
        });
        break;
      case "easyQ6Q":
        this.setState({
          easyQ6Q: "",
          easyQ6F1: "",
          easyQ6F2: "",
          easyQ6F3: "",
          easyQ6F4: "",
          easyQ6A: "",
          easyQ6U: false,
        });
        break;
      case "easyQ7Q":
        this.setState({
          easyQ7Q: "",
          easyQ7F1: "",
          easyQ7F2: "",
          easyQ7F3: "",
          easyQ7F4: "",
          easyQ7A: "",
          easyQ7U: false,
        });
        break;
      case "easyQ8Q":
        this.setState({
          easyQ8Q: "",
          easyQ8F1: "",
          easyQ8F2: "",
          easyQ8F3: "",
          easyQ8F4: "",
          easyQ8A: "",
          easyQ8U: false,
        });
        break;
      case "easyQ9Q":
        this.setState({
          easyQ9Q: "",
          easyQ9F1: "",
          easyQ9F2: "",
          easyQ9F3: "",
          easyQ9F4: "",
          easyQ9A: "",
          easyQ9U: false,
        });
        break;
      case "easyQ10Q":
        this.setState({
          easyQ10Q: "",
          easyQ10F1: "",
          easyQ10F2: "",
          easyQ10F3: "",
          easyQ10F4: "",
          easyQ10A: "",
          easyQ10U: false,
        });
        break;
      case "easyQ11Q":
        this.setState({
          easyQ11Q: "",
          easyQ11F1: "",
          easyQ11F2: "",
          easyQ11F3: "",
          easyQ11F4: "",
          easyQ11A: "",
          easyQ11U: false,
        });
        break;
      case "easyQ12Q":
        this.setState({
          easyQ12Q: "",
          easyQ12F1: "",
          easyQ12F2: "",
          easyQ12F3: "",
          easyQ12F4: "",
          easyQ12A: "",
          easyQ12U: false,
        });
        break;
      case "easyQ13Q":
        this.setState({
          easyQ13Q: "",
          easyQ13F1: "",
          easyQ13F2: "",
          easyQ13F3: "",
          easyQ13F4: "",
          easyQ13A: "",
          easyQ13U: false,
        });
        break;
      case "easyQ14Q":
        this.setState({
          easyQ14Q: "",
          easyQ14F1: "",
          easyQ14F2: "",
          easyQ14F3: "",
          easyQ14F4: "",
          easyQ14A: "",
          easyQ14U: false,
        });
        break;
      case "easyQ15Q":
        this.setState({
          easyQ15Q: "",
          easyQ15F1: "",
          easyQ15F2: "",
          easyQ15F3: "",
          easyQ15F4: "",
          easyQ15A: "",
          easyQ15U: false,
        });
        break;
      case "easyQ16Q":
        this.setState({
          easyQ16Q: "",
          easyQ16F1: "",
          easyQ16F2: "",
          easyQ16F3: "",
          easyQ16F4: "",
          easyQ16A: "",
          easyQ16U: false,
        });
        break;
      case "easyQ17Q":
        this.setState({
          easyQ17Q: "",
          easyQ17F1: "",
          easyQ17F2: "",
          easyQ17F3: "",
          easyQ17F4: "",
          easyQ17A: "",
          easyQ17U: false,
        });
        break;
      case "easyQ18Q":
        this.setState({
          easyQ18Q: "",
          easyQ18F1: "",
          easyQ18F2: "",
          easyQ18F3: "",
          easyQ18F4: "",
          easyQ18A: "",
          easyQ18U: false,
        });
        break;
      case "easyQ19Q":
        this.setState({
          easyQ19Q: "",
          easyQ19F1: "",
          easyQ19F2: "",
          easyQ19F3: "",
          easyQ19F4: "",
          easyQ19A: "",
          easyQ19U: false,
        });

        break;
      case "easyQ20Q":
        this.setState({
          easyQ20Q: "",
          easyQ20F1: "",
          easyQ20F2: "",
          easyQ20F3: "",
          easyQ20F4: "",
          easyQ20A: "",
          easyQ20U: false,
        });
        break;
      case "easyQ21Q":
        this.setState({
          easyQ21Q: "",
          easyQ21F1: "",
          easyQ21F2: "",
          easyQ21F3: "",
          easyQ21F4: "",
          easyQ21A: "",
          easyQ21U: false,
        });
        break;
      case "easyQ22Q":
        this.setState({
          easyQ22Q: "",
          easyQ22F1: "",
          easyQ22F2: "",
          easyQ22F3: "",
          easyQ22F4: "",
          easyQ22A: "",
          easyQ22U: false,
        });
        break;
      case "easyQ23Q":
        this.setState({
          easyQ23Q: "",
          easyQ23F1: "",
          easyQ23F2: "",
          easyQ23F3: "",
          easyQ23F4: "",
          easyQ23A: "",
          easyQ23U: false,
        });
        break;
      case "easyQ24Q":
        this.setState({
          easyQ24Q: "",
          easyQ24F1: "",
          easyQ24F2: "",
          easyQ24F3: "",
          easyQ24F4: "",
          easyQ24A: "",
          easyQ24U: false,
        });
        break;
      case "easyQ25Q":
        this.setState({
          easyQ25Q: "",
          easyQ25F1: "",
          easyQ25F2: "",
          easyQ25F3: "",
          easyQ25F4: "",
          easyQ25A: "",
          easyQ25U: false,
        });
        break;
      case "easyQ26Q":
        this.setState({
          easyQ26Q: "",
          easyQ26F1: "",
          easyQ26F2: "",
          easyQ26F3: "",
          easyQ26F4: "",
          easyQ26A: "",
          easyQ26U: false,
        });
        break;
      case "easyQ27Q":
        this.setState({
          easyQ27Q: "",
          easyQ27F1: "",
          easyQ27F2: "",
          easyQ27F3: "",
          easyQ27F4: "",
          easyQ27A: "",
          easyQ27U: false,
        });
        break;
      case "easyQ28Q":
        this.setState({
          easyQ28Q: "",
          easyQ28F1: "",
          easyQ28F2: "",
          easyQ28F3: "",
          easyQ28F4: "",
          easyQ28A: "",
          easyQ28U: false,
        });
        break;
      case "easyQ29Q":
        this.setState({
          easyQ29Q: "",
          easyQ29F1: "",
          easyQ29F2: "",
          easyQ29F3: "",
          easyQ29F4: "",
          easyQ29A: "",
          easyQ29U: false,
        });
        break;
      case "easyQ30Q":
        this.setState({
          easyQ30Q: "",
          easyQ30F1: "",
          easyQ30F2: "",
          easyQ30F3: "",
          easyQ30F4: "",
          easyQ30A: "",
          easyQ30U: false,
        });
        break;
      default:
        console.log(questionNumber);
        break;
    }
  };

  handleDeleteMediumQuestion = (questionNumber) => {
    console.log(questionNumber);
    switch (questionNumber) {
      case "mediumQ2Q":
        this.setState({
          mediumQ2Q: "",
          mediumQ2F1: "",
          mediumQ2F2: "",
          mediumQ2F3: "",
          mediumQ2F4: "",
          mediumQ2A: "",
          mediumQ2U: false,
        });
        break;
      case "mediumQ3Q":
        this.setState({
          mediumQ3Q: "",
          mediumQ3F1: "",
          mediumQ3F2: "",
          mediumQ3F3: "",
          mediumQ3F4: "",
          mediumQ3A: "",
          mediumQ3U: false,
        });
        break;
      case "mediumQ4Q":
        this.setState({
          mediumQ4Q: "",
          mediumQ4F1: "",
          mediumQ4F2: "",
          mediumQ4F3: "",
          mediumQ4F4: "",
          mediumQ4A: "",
          mediumQ4U: false,
        });
        break;
      case "mediumQ5Q":
        this.setState({
          mediumQ5Q: "",
          mediumQ5F1: "",
          mediumQ5F2: "",
          mediumQ5F3: "",
          mediumQ5F4: "",
          mediumQ5A: "",
          mediumQ5U: false,
        });
        break;
      case "mediumQ6Q":
        this.setState({
          mediumQ6Q: "",
          mediumQ6F1: "",
          mediumQ6F2: "",
          mediumQ6F3: "",
          mediumQ6F4: "",
          mediumQ6A: "",
          mediumQ6U: false,
        });
        break;
      case "mediumQ7Q":
        this.setState({
          mediumQ7Q: "",
          mediumQ7F1: "",
          mediumQ7F2: "",
          mediumQ7F3: "",
          mediumQ7F4: "",
          mediumQ7A: "",
          mediumQ7U: false,
        });
        break;
      case "mediumQ8Q":
        this.setState({
          mediumQ8Q: "",
          mediumQ8F1: "",
          mediumQ8F2: "",
          mediumQ8F3: "",
          mediumQ8F4: "",
          mediumQ8A: "",
          mediumQ8U: false,
        });
        break;
      case "mediumQ9Q":
        this.setState({
          mediumQ9Q: "",
          mediumQ9F1: "",
          mediumQ9F2: "",
          mediumQ9F3: "",
          mediumQ9F4: "",
          mediumQ9A: "",
          mediumQ9U: false,
        });
        break;
      case "mediumQ10Q":
        this.setState({
          mediumQ10Q: "",
          mediumQ10F1: "",
          mediumQ10F2: "",
          mediumQ10F3: "",
          mediumQ10F4: "",
          mediumQ10A: "",
          mediumQ10U: false,
        });
        break;
      case "mediumQ11Q":
        this.setState({
          mediumQ11Q: "",
          mediumQ11F1: "",
          mediumQ11F2: "",
          mediumQ11F3: "",
          mediumQ11F4: "",
          mediumQ11A: "",
          mediumQ11U: false,
        });
        break;
      case "mediumQ12Q":
        this.setState({
          mediumQ12Q: "",
          mediumQ12F1: "",
          mediumQ12F2: "",
          mediumQ12F3: "",
          mediumQ12F4: "",
          mediumQ12A: "",
          mediumQ12U: false,
        });
        break;
      case "mediumQ13Q":
        this.setState({
          mediumQ13Q: "",
          mediumQ13F1: "",
          mediumQ13F2: "",
          mediumQ13F3: "",
          mediumQ13F4: "",
          mediumQ13A: "",
          mediumQ13U: false,
        });
        break;
      case "mediumQ14Q":
        this.setState({
          mediumQ14Q: "",
          mediumQ14F1: "",
          mediumQ14F2: "",
          mediumQ14F3: "",
          mediumQ14F4: "",
          mediumQ14A: "",
          mediumQ14U: false,
        });
        break;
      case "mediumQ15Q":
        this.setState({
          mediumQ15Q: "",
          mediumQ15F1: "",
          mediumQ15F2: "",
          mediumQ15F3: "",
          mediumQ15F4: "",
          mediumQ15A: "",
          mediumQ15U: false,
        });
        break;
      case "mediumQ16Q":
        this.setState({
          mediumQ16Q: "",
          mediumQ16F1: "",
          mediumQ16F2: "",
          mediumQ16F3: "",
          mediumQ16F4: "",
          mediumQ16A: "",
          mediumQ16U: false,
        });
        break;
      case "mediumQ17Q":
        this.setState({
          mediumQ17Q: "",
          mediumQ17F1: "",
          mediumQ17F2: "",
          mediumQ17F3: "",
          mediumQ17F4: "",
          mediumQ17A: "",
          mediumQ17U: false,
        });
        break;
      case "mediumQ18Q":
        this.setState({
          mediumQ18Q: "",
          mediumQ18F1: "",
          mediumQ18F2: "",
          mediumQ18F3: "",
          mediumQ18F4: "",
          mediumQ18A: "",
          mediumQ18U: false,
        });
        break;
      case "mediumQ19Q":
        this.setState({
          mediumQ19Q: "",
          mediumQ19F1: "",
          mediumQ19F2: "",
          mediumQ19F3: "",
          mediumQ19F4: "",
          mediumQ19A: "",
          mediumQ19U: false,
        });

        break;
      case "mediumQ20Q":
        this.setState({
          mediumQ20Q: "",
          mediumQ20F1: "",
          mediumQ20F2: "",
          mediumQ20F3: "",
          mediumQ20F4: "",
          mediumQ20A: "",
          mediumQ20U: false,
        });
        break;
      case "mediumQ21Q":
        this.setState({
          mediumQ21Q: "",
          mediumQ21F1: "",
          mediumQ21F2: "",
          mediumQ21F3: "",
          mediumQ21F4: "",
          mediumQ21A: "",
          mediumQ21U: false,
        });
        break;
      case "mediumQ22Q":
        this.setState({
          mediumQ22Q: "",
          mediumQ22F1: "",
          mediumQ22F2: "",
          mediumQ22F3: "",
          mediumQ22F4: "",
          mediumQ22A: "",
          mediumQ22U: false,
        });
        break;
      case "mediumQ23Q":
        this.setState({
          mediumQ23Q: "",
          mediumQ23F1: "",
          mediumQ23F2: "",
          mediumQ23F3: "",
          mediumQ23F4: "",
          mediumQ23A: "",
          mediumQ23U: false,
        });
        break;
      case "mediumQ24Q":
        this.setState({
          mediumQ24Q: "",
          mediumQ24F1: "",
          mediumQ24F2: "",
          mediumQ24F3: "",
          mediumQ24F4: "",
          mediumQ24A: "",
          mediumQ24U: false,
        });
        break;
      case "mediumQ25Q":
        this.setState({
          mediumQ25Q: "",
          mediumQ25F1: "",
          mediumQ25F2: "",
          mediumQ25F3: "",
          mediumQ25F4: "",
          mediumQ25A: "",
          mediumQ25U: false,
        });
        break;
      case "mediumQ26Q":
        this.setState({
          mediumQ26Q: "",
          mediumQ26F1: "",
          mediumQ26F2: "",
          mediumQ26F3: "",
          mediumQ26F4: "",
          mediumQ26A: "",
          mediumQ26U: false,
        });
        break;
      case "mediumQ27Q":
        this.setState({
          mediumQ27Q: "",
          mediumQ27F1: "",
          mediumQ27F2: "",
          mediumQ27F3: "",
          mediumQ27F4: "",
          mediumQ27A: "",
          mediumQ27U: false,
        });
        break;
      case "mediumQ28Q":
        this.setState({
          mediumQ28Q: "",
          mediumQ28F1: "",
          mediumQ28F2: "",
          mediumQ28F3: "",
          mediumQ28F4: "",
          mediumQ28A: "",
          mediumQ28U: false,
        });
        break;
      case "mediumQ29Q":
        this.setState({
          mediumQ29Q: "",
          mediumQ29F1: "",
          mediumQ29F2: "",
          mediumQ29F3: "",
          mediumQ29F4: "",
          mediumQ29A: "",
          mediumQ29U: false,
        });
        break;
      case "mediumQ30Q":
        this.setState({
          mediumQ30Q: "",
          mediumQ30F1: "",
          mediumQ30F2: "",
          mediumQ30F3: "",
          mediumQ30F4: "",
          mediumQ30A: "",
          mediumQ30U: false,
        });
        break;
      default:
        console.log(questionNumber);
        break;
    }
  };

  handleDeleteHardQuestion = (questionNumber) => {
    console.log(questionNumber);
    switch (questionNumber) {
      case "hardQ2Q":
        this.setState({
          hardQ2Q: "",
          hardQ2F1: "",
          hardQ2F2: "",
          hardQ2F3: "",
          hardQ2F4: "",
          hardQ2A: "",
          hardQ2U: false,
        });
        break;
      case "hardQ3Q":
        this.setState({
          hardQ3Q: "",
          hardQ3F1: "",
          hardQ3F2: "",
          hardQ3F3: "",
          hardQ3F4: "",
          hardQ3A: "",
          hardQ3U: false,
        });
        break;
      case "hardQ4Q":
        this.setState({
          hardQ4Q: "",
          hardQ4F1: "",
          hardQ4F2: "",
          hardQ4F3: "",
          hardQ4F4: "",
          hardQ4A: "",
          hardQ4U: false,
        });
        break;
      case "hardQ5Q":
        this.setState({
          hardQ5Q: "",
          hardQ5F1: "",
          hardQ5F2: "",
          hardQ5F3: "",
          hardQ5F4: "",
          hardQ5A: "",
          hardQ5U: false,
        });
        break;
      case "hardQ6Q":
        this.setState({
          hardQ6Q: "",
          hardQ6F1: "",
          hardQ6F2: "",
          hardQ6F3: "",
          hardQ6F4: "",
          hardQ6A: "",
          hardQ6U: false,
        });
        break;
      case "hardQ7Q":
        this.setState({
          hardQ7Q: "",
          hardQ7F1: "",
          hardQ7F2: "",
          hardQ7F3: "",
          hardQ7F4: "",
          hardQ7A: "",
          hardQ7U: false,
        });
        break;
      case "hardQ8Q":
        this.setState({
          hardQ8Q: "",
          hardQ8F1: "",
          hardQ8F2: "",
          hardQ8F3: "",
          hardQ8F4: "",
          hardQ8A: "",
          hardQ8U: false,
        });
        break;
      case "hardQ9Q":
        this.setState({
          hardQ9Q: "",
          hardQ9F1: "",
          hardQ9F2: "",
          hardQ9F3: "",
          hardQ9F4: "",
          hardQ9A: "",
          hardQ9U: false,
        });
        break;
      case "hardQ10Q":
        this.setState({
          hardQ10Q: "",
          hardQ10F1: "",
          hardQ10F2: "",
          hardQ10F3: "",
          hardQ10F4: "",
          hardQ10A: "",
          hardQ10U: false,
        });
        break;
      case "hardQ11Q":
        this.setState({
          hardQ11Q: "",
          hardQ11F1: "",
          hardQ11F2: "",
          hardQ11F3: "",
          hardQ11F4: "",
          hardQ11A: "",
          hardQ11U: false,
        });
        break;
      case "hardQ12Q":
        this.setState({
          hardQ12Q: "",
          hardQ12F1: "",
          hardQ12F2: "",
          hardQ12F3: "",
          hardQ12F4: "",
          hardQ12A: "",
          hardQ12U: false,
        });
        break;
      case "hardQ13Q":
        this.setState({
          hardQ13Q: "",
          hardQ13F1: "",
          hardQ13F2: "",
          hardQ13F3: "",
          hardQ13F4: "",
          hardQ13A: "",
          hardQ13U: false,
        });
        break;
      case "hardQ14Q":
        this.setState({
          hardQ14Q: "",
          hardQ14F1: "",
          hardQ14F2: "",
          hardQ14F3: "",
          hardQ14F4: "",
          hardQ14A: "",
          hardQ14U: false,
        });
        break;
      case "hardQ15Q":
        this.setState({
          hardQ15Q: "",
          hardQ15F1: "",
          hardQ15F2: "",
          hardQ15F3: "",
          hardQ15F4: "",
          hardQ15A: "",
          hardQ15U: false,
        });
        break;
      case "hardQ16Q":
        this.setState({
          hardQ16Q: "",
          hardQ16F1: "",
          hardQ16F2: "",
          hardQ16F3: "",
          hardQ16F4: "",
          hardQ16A: "",
          hardQ16U: false,
        });
        break;
      case "hardQ17Q":
        this.setState({
          hardQ17Q: "",
          hardQ17F1: "",
          hardQ17F2: "",
          hardQ17F3: "",
          hardQ17F4: "",
          hardQ17A: "",
          hardQ17U: false,
        });
        break;
      case "hardQ18Q":
        this.setState({
          hardQ18Q: "",
          hardQ18F1: "",
          hardQ18F2: "",
          hardQ18F3: "",
          hardQ18F4: "",
          hardQ18A: "",
          hardQ18U: false,
        });
        break;
      case "hardQ19Q":
        this.setState({
          hardQ19Q: "",
          hardQ19F1: "",
          hardQ19F2: "",
          hardQ19F3: "",
          hardQ19F4: "",
          hardQ19A: "",
          hardQ19U: false,
        });

        break;
      case "hardQ20Q":
        this.setState({
          hardQ20Q: "",
          hardQ20F1: "",
          hardQ20F2: "",
          hardQ20F3: "",
          hardQ20F4: "",
          hardQ20A: "",
          hardQ20U: false,
        });
        break;
      case "hardQ21Q":
        this.setState({
          hardQ21Q: "",
          hardQ21F1: "",
          hardQ21F2: "",
          hardQ21F3: "",
          hardQ21F4: "",
          hardQ21A: "",
          hardQ21U: false,
        });
        break;
      case "hardQ22Q":
        this.setState({
          hardQ22Q: "",
          hardQ22F1: "",
          hardQ22F2: "",
          hardQ22F3: "",
          hardQ22F4: "",
          hardQ22A: "",
          hardQ22U: false,
        });
        break;
      case "hardQ23Q":
        this.setState({
          hardQ23Q: "",
          hardQ23F1: "",
          hardQ23F2: "",
          hardQ23F3: "",
          hardQ23F4: "",
          hardQ23A: "",
          hardQ23U: false,
        });
        break;
      case "hardQ24Q":
        this.setState({
          hardQ24Q: "",
          hardQ24F1: "",
          hardQ24F2: "",
          hardQ24F3: "",
          hardQ24F4: "",
          hardQ24A: "",
          hardQ24U: false,
        });
        break;
      case "hardQ25Q":
        this.setState({
          hardQ25Q: "",
          hardQ25F1: "",
          hardQ25F2: "",
          hardQ25F3: "",
          hardQ25F4: "",
          hardQ25A: "",
          hardQ25U: false,
        });
        break;
      case "hardQ26Q":
        this.setState({
          hardQ26Q: "",
          hardQ26F1: "",
          hardQ26F2: "",
          hardQ26F3: "",
          hardQ26F4: "",
          hardQ26A: "",
          hardQ26U: false,
        });
        break;
      case "hardQ27Q":
        this.setState({
          hardQ27Q: "",
          hardQ27F1: "",
          hardQ27F2: "",
          hardQ27F3: "",
          hardQ27F4: "",
          hardQ27A: "",
          hardQ27U: false,
        });
        break;
      case "hardQ28Q":
        this.setState({
          hardQ28Q: "",
          hardQ28F1: "",
          hardQ28F2: "",
          hardQ28F3: "",
          hardQ28F4: "",
          hardQ28A: "",
          hardQ28U: false,
        });
        break;
      case "hardQ29Q":
        this.setState({
          hardQ29Q: "",
          hardQ29F1: "",
          hardQ29F2: "",
          hardQ29F3: "",
          hardQ29F4: "",
          hardQ29A: "",
          hardQ29U: false,
        });
        break;
      case "hardQ30Q":
        this.setState({
          hardQ30Q: "",
          hardQ30F1: "",
          hardQ30F2: "",
          hardQ30F3: "",
          hardQ30F4: "",
          hardQ30A: "",
          hardQ30U: false,
        });
        break;
      default:
        console.log(questionNumber);
        break;
    }
  };

  handleDeleteEvaluateQuestion = (questionNumber) => {
    console.log(questionNumber);
    switch (questionNumber) {
      case "evaluateQ2Q":
        this.setState({
          evaluateQ2Q: "",
          evaluateQ2F1: "",
          evaluateQ2F2: "",
          evaluateQ2F3: "",
          evaluateQ2F4: "",
          evaluateQ2A: "",
          evaluateQ2U: false,
        });
        break;
      case "evaluateQ3Q":
        this.setState({
          evaluateQ3Q: "",
          evaluateQ3F1: "",
          evaluateQ3F2: "",
          evaluateQ3F3: "",
          evaluateQ3F4: "",
          evaluateQ3A: "",
          evaluateQ3U: false,
        });
        break;
      case "evaluateQ4Q":
        this.setState({
          evaluateQ4Q: "",
          evaluateQ4F1: "",
          evaluateQ4F2: "",
          evaluateQ4F3: "",
          evaluateQ4F4: "",
          evaluateQ4A: "",
          evaluateQ4U: false,
        });
        break;
      case "evaluateQ5Q":
        this.setState({
          evaluateQ5Q: "",
          evaluateQ5F1: "",
          evaluateQ5F2: "",
          evaluateQ5F3: "",
          evaluateQ5F4: "",
          evaluateQ5A: "",
          evaluateQ5U: false,
        });
        break;
      case "evaluateQ6Q":
        this.setState({
          evaluateQ6Q: "",
          evaluateQ6F1: "",
          evaluateQ6F2: "",
          evaluateQ6F3: "",
          evaluateQ6F4: "",
          evaluateQ6A: "",
          evaluateQ6U: false,
        });
        break;
      case "evaluateQ7Q":
        this.setState({
          evaluateQ7Q: "",
          evaluateQ7F1: "",
          evaluateQ7F2: "",
          evaluateQ7F3: "",
          evaluateQ7F4: "",
          evaluateQ7A: "",
          evaluateQ7U: false,
        });
        break;
      case "evaluateQ8Q":
        this.setState({
          evaluateQ8Q: "",
          evaluateQ8F1: "",
          evaluateQ8F2: "",
          evaluateQ8F3: "",
          evaluateQ8F4: "",
          evaluateQ8A: "",
          evaluateQ8U: false,
        });
        break;
      case "evaluateQ9Q":
        this.setState({
          evaluateQ9Q: "",
          evaluateQ9F1: "",
          evaluateQ9F2: "",
          evaluateQ9F3: "",
          evaluateQ9F4: "",
          evaluateQ9A: "",
          evaluateQ9U: false,
        });
        break;
      case "evaluateQ10Q":
        this.setState({
          evaluateQ10Q: "",
          evaluateQ10F1: "",
          evaluateQ10F2: "",
          evaluateQ10F3: "",
          evaluateQ10F4: "",
          evaluateQ10A: "",
          evaluateQ10U: false,
        });
        break;
      case "evaluateQ11Q":
        this.setState({
          evaluateQ11Q: "",
          evaluateQ11F1: "",
          evaluateQ11F2: "",
          evaluateQ11F3: "",
          evaluateQ11F4: "",
          evaluateQ11A: "",
          evaluateQ11U: false,
        });
        break;
      case "evaluateQ12Q":
        this.setState({
          evaluateQ12Q: "",
          evaluateQ12F1: "",
          evaluateQ12F2: "",
          evaluateQ12F3: "",
          evaluateQ12F4: "",
          evaluateQ12A: "",
          evaluateQ12U: false,
        });
        break;
      case "evaluateQ13Q":
        this.setState({
          evaluateQ13Q: "",
          evaluateQ13F1: "",
          evaluateQ13F2: "",
          evaluateQ13F3: "",
          evaluateQ13F4: "",
          evaluateQ13A: "",
          evaluateQ13U: false,
        });
        break;
      case "evaluateQ14Q":
        this.setState({
          evaluateQ14Q: "",
          evaluateQ14F1: "",
          evaluateQ14F2: "",
          evaluateQ14F3: "",
          evaluateQ14F4: "",
          evaluateQ14A: "",
          evaluateQ14U: false,
        });
        break;
      case "evaluateQ15Q":
        this.setState({
          evaluateQ15Q: "",
          evaluateQ15F1: "",
          evaluateQ15F2: "",
          evaluateQ15F3: "",
          evaluateQ15F4: "",
          evaluateQ15A: "",
          evaluateQ15U: false,
        });
        break;
      case "evaluateQ16Q":
        this.setState({
          evaluateQ16Q: "",
          evaluateQ16F1: "",
          evaluateQ16F2: "",
          evaluateQ16F3: "",
          evaluateQ16F4: "",
          evaluateQ16A: "",
          evaluateQ16U: false,
        });
        break;
      case "evaluateQ17Q":
        this.setState({
          evaluateQ17Q: "",
          evaluateQ17F1: "",
          evaluateQ17F2: "",
          evaluateQ17F3: "",
          evaluateQ17F4: "",
          evaluateQ17A: "",
          evaluateQ17U: false,
        });
        break;
      case "evaluateQ18Q":
        this.setState({
          evaluateQ18Q: "",
          evaluateQ18F1: "",
          evaluateQ18F2: "",
          evaluateQ18F3: "",
          evaluateQ18F4: "",
          evaluateQ18A: "",
          evaluateQ18U: false,
        });
        break;
      case "evaluateQ19Q":
        this.setState({
          evaluateQ19Q: "",
          evaluateQ19F1: "",
          evaluateQ19F2: "",
          evaluateQ19F3: "",
          evaluateQ19F4: "",
          evaluateQ19A: "",
          evaluateQ19U: false,
        });

        break;
      case "evaluateQ20Q":
        this.setState({
          evaluateQ20Q: "",
          evaluateQ20F1: "",
          evaluateQ20F2: "",
          evaluateQ20F3: "",
          evaluateQ20F4: "",
          evaluateQ20A: "",
          evaluateQ20U: false,
        });
        break;
      case "evaluateQ21Q":
        this.setState({
          evaluateQ21Q: "",
          evaluateQ21F1: "",
          evaluateQ21F2: "",
          evaluateQ21F3: "",
          evaluateQ21F4: "",
          evaluateQ21A: "",
          evaluateQ21U: false,
        });
        break;
      case "evaluateQ22Q":
        this.setState({
          evaluateQ22Q: "",
          evaluateQ22F1: "",
          evaluateQ22F2: "",
          evaluateQ22F3: "",
          evaluateQ22F4: "",
          evaluateQ22A: "",
          evaluateQ22U: false,
        });
        break;
      case "evaluateQ23Q":
        this.setState({
          evaluateQ23Q: "",
          evaluateQ23F1: "",
          evaluateQ23F2: "",
          evaluateQ23F3: "",
          evaluateQ23F4: "",
          evaluateQ23A: "",
          evaluateQ23U: false,
        });
        break;
      case "evaluateQ24Q":
        this.setState({
          evaluateQ24Q: "",
          evaluateQ24F1: "",
          evaluateQ24F2: "",
          evaluateQ24F3: "",
          evaluateQ24F4: "",
          evaluateQ24A: "",
          evaluateQ24U: false,
        });
        break;
      case "evaluateQ25Q":
        this.setState({
          evaluateQ25Q: "",
          evaluateQ25F1: "",
          evaluateQ25F2: "",
          evaluateQ25F3: "",
          evaluateQ25F4: "",
          evaluateQ25A: "",
          evaluateQ25U: false,
        });
        break;
      case "evaluateQ26Q":
        this.setState({
          evaluateQ26Q: "",
          evaluateQ26F1: "",
          evaluateQ26F2: "",
          evaluateQ26F3: "",
          evaluateQ26F4: "",
          evaluateQ26A: "",
          evaluateQ26U: false,
        });
        break;
      case "evaluateQ27Q":
        this.setState({
          evaluateQ27Q: "",
          evaluateQ27F1: "",
          evaluateQ27F2: "",
          evaluateQ27F3: "",
          evaluateQ27F4: "",
          evaluateQ27A: "",
          evaluateQ27U: false,
        });
        break;
      case "evaluateQ28Q":
        this.setState({
          evaluateQ28Q: "",
          evaluateQ28F1: "",
          evaluateQ28F2: "",
          evaluateQ28F3: "",
          evaluateQ28F4: "",
          evaluateQ28A: "",
          evaluateQ28U: false,
        });
        break;
      case "evaluateQ29Q":
        this.setState({
          evaluateQ29Q: "",
          evaluateQ29F1: "",
          evaluateQ29F2: "",
          evaluateQ29F3: "",
          evaluateQ29F4: "",
          evaluateQ29A: "",
          evaluateQ29U: false,
        });
        break;
      case "evaluateQ30Q":
        this.setState({
          evaluateQ30Q: "",
          evaluateQ30F1: "",
          evaluateQ30F2: "",
          evaluateQ30F3: "",
          evaluateQ30F4: "",
          evaluateQ30A: "",
          evaluateQ30U: false,
        });
        break;
      default:
        console.log(questionNumber);
        break;
    }
  };
  handleDeleteAssessPreviousQuestion = (questionNumber) => {
    console.log(questionNumber);
    switch (questionNumber) {
      case "apQ2Q":
        this.setState({
          apQ2Q: "",
          apQ2F1: "",
          apQ2F2: "",
          apQ2F3: "",
          apQ2F4: "",
          apQ2A: "",
          apQ2U: false,
        });
        break;
      case "apQ3Q":
        this.setState({
          apQ3Q: "",
          apQ3F1: "",
          apQ3F2: "",
          apQ3F3: "",
          apQ3F4: "",
          apQ3A: "",
          apQ3U: false,
        });
        break;
      case "apQ4Q":
        this.setState({
          apQ4Q: "",
          apQ4F1: "",
          apQ4F2: "",
          apQ4F3: "",
          apQ4F4: "",
          apQ4A: "",
          apQ4U: false,
        });
        break;
      case "apQ5Q":
        this.setState({
          apQ5Q: "",
          apQ5F1: "",
          apQ5F2: "",
          apQ5F3: "",
          apQ5F4: "",
          apQ5A: "",
          apQ5U: false,
        });
        break;
      case "apQ6Q":
        this.setState({
          apQ6Q: "",
          apQ6F1: "",
          apQ6F2: "",
          apQ6F3: "",
          apQ6F4: "",
          apQ6A: "",
          apQ6U: false,
        });
        break;
      case "evaluateQ7Q":
        this.setState({
          apQ7Q: "",
          apQ7F1: "",
          apQ7F2: "",
          apQ7F3: "",
          apQ7F4: "",
          apQ7A: "",
          apQ7U: false,
        });
        break;
      case "apQ8Q":
        this.setState({
          apQ8Q: "",
          apQ8F1: "",
          apQ8F2: "",
          apQ8F3: "",
          apQ8F4: "",
          apQ8A: "",
          apQ8U: false,
        });
        break;
      case "apQ9Q":
        this.setState({
          apQ9Q: "",
          apQ9F1: "",
          apQ9F2: "",
          apQ9F3: "",
          apQ9F4: "",
          apQ9A: "",
          apQ9U: false,
        });
        break;
      case "apQ10Q":
        this.setState({
          apQ10Q: "",
          apQ10F1: "",
          apQ10F2: "",
          apQ10F3: "",
          apQ10F4: "",
          apQ10A: "",
          apQ10U: false,
        });
        break;
      case "apQ11Q":
        this.setState({
          apQ11Q: "",
          apQ11F1: "",
          apQ11F2: "",
          apQ11F3: "",
          apQ11F4: "",
          apQ11A: "",
          apQ11U: false,
        });
        break;
      case "apQ12Q":
        this.setState({
          apQ12Q: "",
          apQ12F1: "",
          apQ12F2: "",
          apQ12F3: "",
          apQ12F4: "",
          apQ12A: "",
          apQ12U: false,
        });
        break;
      case "apQ13Q":
        this.setState({
          apQ13Q: "",
          apQ13F1: "",
          apQ13F2: "",
          apQ13F3: "",
          apQ13F4: "",
          apQ13A: "",
          apQ13U: false,
        });
        break;
      case "apQ14Q":
        this.setState({
          apQ14Q: "",
          apQ14F1: "",
          apQ14F2: "",
          apQ14F3: "",
          apQ14F4: "",
          apQ14A: "",
          apQ14U: false,
        });
        break;
      case "apQ15Q":
        this.setState({
          apQ15Q: "",
          apQ15F1: "",
          apQ15F2: "",
          apQ15F3: "",
          apQ15F4: "",
          apQ15A: "",
          apQ15U: false,
        });
        break;
      case "apQ16Q":
        this.setState({
          apQ16Q: "",
          apQ16F1: "",
          apQ16F2: "",
          apQ16F3: "",
          apQ16F4: "",
          apQ16A: "",
          apQ16U: false,
        });
        break;
      case "apQ17Q":
        this.setState({
          apQ17Q: "",
          apQ17F1: "",
          apQ17F2: "",
          apQ17F3: "",
          apQ17F4: "",
          apQ17A: "",
          apQ17U: false,
        });
        break;
      case "apQ18Q":
        this.setState({
          apQ18Q: "",
          apQ18F1: "",
          apQ18F2: "",
          apQ18F3: "",
          apQ18F4: "",
          apQ18A: "",
          apQ18U: false,
        });
        break;
      case "apQ19Q":
        this.setState({
          apQ19Q: "",
          apQ19F1: "",
          apQ19F2: "",
          apQ19F3: "",
          apQ19F4: "",
          apQ19A: "",
          apQ19U: false,
        });

        break;
      case "apQ20Q":
        this.setState({
          apQ20Q: "",
          apQ20F1: "",
          apQ20F2: "",
          apQ20F3: "",
          apQ20F4: "",
          apQ20A: "",
          apQ20U: false,
        });
        break;
      case "apQ21Q":
        this.setState({
          apQ21Q: "",
          apQ21F1: "",
          apQ21F2: "",
          apQ21F3: "",
          apQ21F4: "",
          apQ21A: "",
          apQ21U: false,
        });
        break;
      case "apQ22Q":
        this.setState({
          apQ22Q: "",
          apQ22F1: "",
          apQ22F2: "",
          apQ22F3: "",
          apQ22F4: "",
          apQ22A: "",
          apQ22U: false,
        });
        break;
      case "apQ23Q":
        this.setState({
          apQ23Q: "",
          apQ23F1: "",
          apQ23F2: "",
          apQ23F3: "",
          apQ23F4: "",
          apQ23A: "",
          apQ23U: false,
        });
        break;
      case "apQ24Q":
        this.setState({
          apQ24Q: "",
          apQ24F1: "",
          apQ24F2: "",
          apQ24F3: "",
          apQ24F4: "",
          apQ24A: "",
          apQ24U: false,
        });
        break;
      case "apQ25Q":
        this.setState({
          apQ25Q: "",
          apQ25F1: "",
          apQ25F2: "",
          apQ25F3: "",
          apQ25F4: "",
          apQ25A: "",
          apQ25U: false,
        });
        break;
      case "apQ26Q":
        this.setState({
          apQ26Q: "",
          apQ26F1: "",
          apQ26F2: "",
          apQ26F3: "",
          apQ26F4: "",
          apQ26A: "",
          apQ26U: false,
        });
        break;
      case "apQ27Q":
        this.setState({
          apQ27Q: "",
          apQ27F1: "",
          apQ27F2: "",
          apQ27F3: "",
          apQ27F4: "",
          apQ27A: "",
          apQ27U: false,
        });
        break;
      case "apQ28Q":
        this.setState({
          apQ28Q: "",
          apQ28F1: "",
          apQ28F2: "",
          apQ28F3: "",
          apQ28F4: "",
          apQ28A: "",
          apQ28U: false,
        });
        break;
      case "apQ29Q":
        this.setState({
          apQ29Q: "",
          apQ29F1: "",
          apQ29F2: "",
          apQ29F3: "",
          apQ29F4: "",
          apQ29A: "",
          apQ29U: false,
        });
        break;
      case "apQ30Q":
        this.setState({
          apQ30Q: "",
          apQ30F1: "",
          apQ30F2: "",
          apQ30F3: "",
          apQ30F4: "",
          apQ30A: "",
          apQ30U: false,
        });
        break;
      default:
        console.log(questionNumber);
        break;
    }
  };
  componentDidUpdate(prevProps) {
    console.log(this.props.module);
    if (this.props.module != prevProps.module) {
      console.log(this.props.module);
      this.setState({
        moduleId: this.props.module[0].id,
        moduleName: this.props.module[0].moduleName,
        numberOfHours: this.props.module[0].numberOfHours,
        numberOfLessons: this.props.module[0].numberOfLessons,
        moduleInfo: this.props.module[0].moduleInfo,
        audioLink: this.props.module[0].teachingMaterials.audioLink,
        videoLink: this.props.module[0].teachingMaterials.videoLink,
        slideLink: this.props.module[0].teachingMaterials.slideLink,
        documentLink: this.props.module[0].teachingMaterials.documentLink,
        easyQ1Q: this.props.module[0].tests.easy.questionOne.question,
        easyQ1F1: this.props.module[0].tests.easy.questionOne.firstOption,
        easyQ1F2: this.props.module[0].tests.easy.questionOne.secondOption,
        easyQ1F3: this.props.module[0].tests.easy.questionOne.thirdOption,
        easyQ1F4: this.props.module[0].tests.easy.questionOne.fourthOption,
        easyQ1A: this.props.module[0].tests.easy.questionOne.answer,
        easyQ1U: this.props.module[0].tests.easy.questionOne.used,
        easyQ2Q: this.props.module[0].tests.easy.questionTwo.question,
        easyQ2F1: this.props.module[0].tests.easy.questionTwo.firstOption,
        easyQ2F2: this.props.module[0].tests.easy.questionTwo.secondOption,
        easyQ2F3: this.props.module[0].tests.easy.questionTwo.thirdOption,
        easyQ2F4: this.props.module[0].tests.easy.questionTwo.fourthOption,
        easyQ2A: this.props.module[0].tests.easy.questionTwo.answer,
        easyQ2U: this.props.module[0].tests.easy.questionTwo.used,
        easyQ3Q: this.props.module[0].tests.easy.questionThree.question,
        easyQ3F1: this.props.module[0].tests.easy.questionThree.firstOption,
        easyQ3F2: this.props.module[0].tests.easy.questionThree.secondOption,
        easyQ3F3: this.props.module[0].tests.easy.questionThree.thirdOption,
        easyQ3F4: this.props.module[0].tests.easy.questionThree.fourthOption,
        easyQ3A: this.props.module[0].tests.easy.questionThree.answer,
        easyQ3U: this.props.module[0].tests.easy.questionThree.used,
        easyQ4Q: this.props.module[0].tests.easy.questionFour.question,
        easyQ4F1: this.props.module[0].tests.easy.questionFour.firstOption,
        easyQ4F2: this.props.module[0].tests.easy.questionFour.secondOption,
        easyQ4F3: this.props.module[0].tests.easy.questionFour.thirdOption,
        easyQ4F4: this.props.module[0].tests.easy.questionFour.fourthOption,
        easyQ4A: this.props.module[0].tests.easy.questionFour.answer,
        easyQ4U: this.props.module[0].tests.easy.questionFour.used,
        easyQ5Q: this.props.module[0].tests.easy.questionFive.question,
        easyQ5F1: this.props.module[0].tests.easy.questionFive.firstOption,
        easyQ5F2: this.props.module[0].tests.easy.questionFive.secondOption,
        easyQ5F3: this.props.module[0].tests.easy.questionFive.thirdOption,
        easyQ5F4: this.props.module[0].tests.easy.questionFive.fourthOption,
        easyQ5A: this.props.module[0].tests.easy.questionFive.answer,
        easyQ5U: this.props.module[0].tests.easy.questionFive.used,
        easyQ6Q: this.props.module[0].tests.easy.questionSix.question,
        easyQ6F1: this.props.module[0].tests.easy.questionSix.firstOption,
        easyQ6F2: this.props.module[0].tests.easy.questionSix.secondOption,
        easyQ6F3: this.props.module[0].tests.easy.questionSix.thirdOption,
        easyQ6F4: this.props.module[0].tests.easy.questionSix.fourthOption,
        easyQ6A: this.props.module[0].tests.easy.questionSix.answer,
        easyQ6U: this.props.module[0].tests.easy.questionSix.used,
        easyQ7Q: this.props.module[0].tests.easy.questionSeven.question,
        easyQ7F1: this.props.module[0].tests.easy.questionSeven.firstOption,
        easyQ7F2: this.props.module[0].tests.easy.questionSeven.secondOption,
        easyQ7F3: this.props.module[0].tests.easy.questionSeven.thirdOption,
        easyQ7F4: this.props.module[0].tests.easy.questionSeven.fourthOption,
        easyQ7A: this.props.module[0].tests.easy.questionSeven.answer,
        easyQ7U: this.props.module[0].tests.easy.questionSeven.used,
        easyQ8Q: this.props.module[0].tests.easy.questionEight.question,
        easyQ8F1: this.props.module[0].tests.easy.questionEight.firstOption,
        easyQ8F2: this.props.module[0].tests.easy.questionEight.secondOption,
        easyQ8F3: this.props.module[0].tests.easy.questionEight.thirdOption,
        easyQ8F4: this.props.module[0].tests.easy.questionEight.fourthOption,
        easyQ8A: this.props.module[0].tests.easy.questionEight.answer,
        easyQ8U: this.props.module[0].tests.easy.questionEight.used,
        easyQ9Q: this.props.module[0].tests.easy.questionNine.question,
        easyQ9F1: this.props.module[0].tests.easy.questionNine.firstOption,
        easyQ9F2: this.props.module[0].tests.easy.questionNine.secondOption,
        easyQ9F3: this.props.module[0].tests.easy.questionNine.thirdOption,
        easyQ9F4: this.props.module[0].tests.easy.questionNine.fourthOption,
        easyQ9A: this.props.module[0].tests.easy.questionNine.answer,
        easyQ9U: this.props.module[0].tests.easy.questionNine.used,
        easyQ10Q: this.props.module[0].tests.easy.questionTen.question,
        easyQ10F1: this.props.module[0].tests.easy.questionTen.firstOption,
        easyQ10F2: this.props.module[0].tests.easy.questionTen.secondOption,
        easyQ10F3: this.props.module[0].tests.easy.questionTen.thirdOption,
        easyQ10F4: this.props.module[0].tests.easy.questionTen.fourthOption,
        easyQ10A: this.props.module[0].tests.easy.questionTen.answer,
        easyQ10U: this.props.module[0].tests.easy.questionTen.used,
        easyQ11Q: this.props.module[0].tests.easy.questionEleven.question,
        easyQ11F1: this.props.module[0].tests.easy.questionEleven.firstOption,
        easyQ11F2: this.props.module[0].tests.easy.questionEleven.secondOption,
        easyQ11F3: this.props.module[0].tests.easy.questionEleven.thirdOption,
        easyQ11F4: this.props.module[0].tests.easy.questionEleven.fourthOption,
        easyQ11A: this.props.module[0].tests.easy.questionEleven.answer,
        easyQ11U: this.props.module[0].tests.easy.questionEleven.used,
        easyQ12Q: this.props.module[0].tests.easy.questionTwelve.question,
        easyQ12F1: this.props.module[0].tests.easy.questionTwelve.firstOption,
        easyQ12F2: this.props.module[0].tests.easy.questionTwelve.secondOption,
        easyQ12F3: this.props.module[0].tests.easy.questionTwelve.thirdOption,
        easyQ12F4: this.props.module[0].tests.easy.questionTwelve.fourthOption,
        easyQ12A: this.props.module[0].tests.easy.questionTwelve.answer,
        easyQ12U: this.props.module[0].tests.easy.questionTwelve.used,
        easyQ13Q: this.props.module[0].tests.easy.questionThirteen.question,
        easyQ13F1: this.props.module[0].tests.easy.questionThirteen.firstOption,
        easyQ13F2: this.props.module[0].tests.easy.questionThirteen
          .secondOption,
        easyQ13F3: this.props.module[0].tests.easy.questionThirteen.thirdOption,
        easyQ13F4: this.props.module[0].tests.easy.questionThirteen
          .fourthOption,
        easyQ13A: this.props.module[0].tests.easy.questionThirteen.answer,
        easyQ13U: this.props.module[0].tests.easy.questionThirteen.used,
        easyQ14Q: this.props.module[0].tests.easy.questionFourteen.question,
        easyQ14F1: this.props.module[0].tests.easy.questionFourteen.firstOption,
        easyQ14F2: this.props.module[0].tests.easy.questionFourteen
          .secondOption,
        easyQ14F3: this.props.module[0].tests.easy.questionFourteen.thirdOption,
        easyQ14F4: this.props.module[0].tests.easy.questionFourteen
          .fourthOption,
        easyQ14A: this.props.module[0].tests.easy.questionFourteen.answer,
        easyQ14U: this.props.module[0].tests.easy.questionFourteen.used,
        easyQ15Q: this.props.module[0].tests.easy.questionFifteen.question,
        easyQ15F1: this.props.module[0].tests.easy.questionFifteen.firstOption,
        easyQ15F2: this.props.module[0].tests.easy.questionFifteen.secondOption,
        easyQ15F3: this.props.module[0].tests.easy.questionFifteen.thirdOption,
        easyQ15F4: this.props.module[0].tests.easy.questionFifteen.fourthOption,
        easyQ15A: this.props.module[0].tests.easy.questionFifteen.answer,
        easyQ15U: this.props.module[0].tests.easy.questionFifteen.used,
        easyQ16Q: this.props.module[0].tests.easy.questionSixteen.question,
        easyQ16F1: this.props.module[0].tests.easy.questionSixteen.firstOption,
        easyQ16F2: this.props.module[0].tests.easy.questionSixteen.secondOption,
        easyQ16F3: this.props.module[0].tests.easy.questionSixteen.thirdOption,
        easyQ16F4: this.props.module[0].tests.easy.questionSixteen.fourthOption,
        easyQ16A: this.props.module[0].tests.easy.questionSixteen.answer,
        easyQ16U: this.props.module[0].tests.easy.questionSixteen.used,
        easyQ17Q: this.props.module[0].tests.easy.questionSeventeen.question,
        easyQ17F1: this.props.module[0].tests.easy.questionSeventeen
          .firstOption,
        easyQ17F2: this.props.module[0].tests.easy.questionSeventeen
          .secondOption,
        easyQ17F3: this.props.module[0].tests.easy.questionSeventeen
          .thirdOption,
        easyQ17F4: this.props.module[0].tests.easy.questionSeventeen
          .fourthOption,
        easyQ17A: this.props.module[0].tests.easy.questionSeventeen.answer,
        easyQ17U: this.props.module[0].tests.easy.questionSeventeen.used,
        easyQ18Q: this.props.module[0].tests.easy.questionEighteen.question,
        easyQ18F1: this.props.module[0].tests.easy.questionEighteen.firstOption,
        easyQ18F2: this.props.module[0].tests.easy.questionEighteen
          .secondOption,
        easyQ18F3: this.props.module[0].tests.easy.questionEighteen.thirdOption,
        easyQ18F4: this.props.module[0].tests.easy.questionEighteen
          .fourthOption,
        easyQ18A: this.props.module[0].tests.easy.questionEighteen.answer,
        easyQ18U: this.props.module[0].tests.easy.questionEighteen.used,
        easyQ19Q: this.props.module[0].tests.easy.questionNineteen.question,
        easyQ19F1: this.props.module[0].tests.easy.questionNineteen.firstOption,
        easyQ19F2: this.props.module[0].tests.easy.questionNineteen
          .secondOption,
        easyQ19F3: this.props.module[0].tests.easy.questionNineteen.thirdOption,
        easyQ19F4: this.props.module[0].tests.easy.questionNineteen
          .fourthOption,
        easyQ19A: this.props.module[0].tests.easy.questionNineteen.answer,
        easyQ19U: this.props.module[0].tests.easy.questionNineteen.used,
        easyQ20Q: this.props.module[0].tests.easy.questionTwenty.question,
        easyQ20F1: this.props.module[0].tests.easy.questionTwenty.firstOption,
        easyQ20F2: this.props.module[0].tests.easy.questionTwenty.secondOption,
        easyQ20F3: this.props.module[0].tests.easy.questionTwenty.thirdOption,
        easyQ20F4: this.props.module[0].tests.easy.questionTwenty.fourthOption,
        easyQ20A: this.props.module[0].tests.easy.questionTwenty.answer,
        easyQ20U: this.props.module[0].tests.easy.questionTwenty.used,
        easyQ21Q: this.props.module[0].tests.easy.questionTwentyOne.question,
        easyQ21F1: this.props.module[0].tests.easy.questionTwentyOne
          .firstOption,
        easyQ21F2: this.props.module[0].tests.easy.questionTwentyOne
          .secondOption,
        easyQ21F3: this.props.module[0].tests.easy.questionTwentyOne
          .thirdOption,
        easyQ21F4: this.props.module[0].tests.easy.questionTwentyOne
          .fourthOption,
        easyQ21A: this.props.module[0].tests.easy.questionTwentyOne.answer,
        easyQ21U: this.props.module[0].tests.easy.questionTwentyOne.used,
        easyQ22Q: this.props.module[0].tests.easy.questionTwentyTwo.question,
        easyQ22F1: this.props.module[0].tests.easy.questionTwentyTwo
          .firstOption,
        easyQ22F2: this.props.module[0].tests.easy.questionTwentyTwo
          .secondOption,
        easyQ22F3: this.props.module[0].tests.easy.questionTwentyTwo
          .thirdOption,
        easyQ22F4: this.props.module[0].tests.easy.questionTwentyTwo
          .fourthOption,
        easyQ22A: this.props.module[0].tests.easy.questionTwentyTwo.answer,
        easyQ22U: this.props.module[0].tests.easy.questionTwentyTwo.used,
        easyQ23Q: this.props.module[0].tests.easy.questionTwentyThree.question,
        easyQ23F1: this.props.module[0].tests.easy.questionTwentyThree
          .firstOption,
        easyQ23F2: this.props.module[0].tests.easy.questionTwentyThree
          .secondOption,
        easyQ23F3: this.props.module[0].tests.easy.questionTwentyThree
          .thirdOption,
        easyQ23F4: this.props.module[0].tests.easy.questionTwentyThree
          .fourthOption,
        easyQ23A: this.props.module[0].tests.easy.questionTwentyThree.answer,
        easyQ23U: this.props.module[0].tests.easy.questionTwentyThree.used,
        easyQ24Q: this.props.module[0].tests.easy.questionTwentyFour.question,
        easyQ24F1: this.props.module[0].tests.easy.questionTwentyFour
          .firstOption,
        easyQ24F2: this.props.module[0].tests.easy.questionTwentyFour
          .secondOption,
        easyQ24F3: this.props.module[0].tests.easy.questionTwentyFour
          .thirdOption,
        easyQ24F4: this.props.module[0].tests.easy.questionTwentyFour
          .fourthOption,
        easyQ24A: this.props.module[0].tests.easy.questionTwentyFour.answer,
        easyQ24U: this.props.module[0].tests.easy.questionTwentyFour.used,
        easyQ25Q: this.props.module[0].tests.easy.questionTwentyFive.question,
        easyQ25F1: this.props.module[0].tests.easy.questionTwentyFive
          .firstOption,
        easyQ25F2: this.props.module[0].tests.easy.questionTwentyFive
          .secondOption,
        easyQ25F3: this.props.module[0].tests.easy.questionTwentyFive
          .thirdOption,
        easyQ25F4: this.props.module[0].tests.easy.questionTwentyFive
          .fourthOption,
        easyQ25A: this.props.module[0].tests.easy.questionTwentyFive.answer,
        easyQ25U: this.props.module[0].tests.easy.questionTwentyFive.used,
        easyQ26Q: this.props.module[0].tests.easy.questionTwentySix.question,
        easyQ26F1: this.props.module[0].tests.easy.questionTwentySix
          .firstOption,
        easyQ26F2: this.props.module[0].tests.easy.questionTwentySix
          .secondOption,
        easyQ26F3: this.props.module[0].tests.easy.questionTwentySix
          .thirdOption,
        easyQ26F4: this.props.module[0].tests.easy.questionTwentySix
          .fourthOption,
        easyQ26A: this.props.module[0].tests.easy.questionTwentySix.answer,
        easyQ26U: this.props.module[0].tests.easy.questionTwentySix.used,
        easyQ27Q: this.props.module[0].tests.easy.questionTwentySeven.question,
        easyQ27F1: this.props.module[0].tests.easy.questionTwentySeven
          .firstOption,
        easyQ27F2: this.props.module[0].tests.easy.questionTwentySeven
          .secondOption,
        easyQ27F3: this.props.module[0].tests.easy.questionTwentySeven
          .thirdOption,
        easyQ27F4: this.props.module[0].tests.easy.questionTwentySeven
          .fourthOption,
        easyQ27A: this.props.module[0].tests.easy.questionTwentySeven.answer,
        easyQ27U: this.props.module[0].tests.easy.questionTwentySeven.used,
        easyQ28Q: this.props.module[0].tests.easy.questionTwentyEight.question,
        easyQ28F1: this.props.module[0].tests.easy.questionTwentyEight
          .firstOption,
        easyQ28F2: this.props.module[0].tests.easy.questionTwentyEight
          .secondOption,
        easyQ28F3: this.props.module[0].tests.easy.questionTwentyEight
          .thirdOption,
        easyQ28F4: this.props.module[0].tests.easy.questionTwentyEight
          .fourthOption,
        easyQ28A: this.props.module[0].tests.easy.questionTwentyEight.answer,
        easyQ28U: this.props.module[0].tests.easy.questionTwentyEight.used,
        easyQ29Q: this.props.module[0].tests.easy.questionTwentyNine.question,
        easyQ29F1: this.props.module[0].tests.easy.questionTwentyNine
          .firstOption,
        easyQ29F2: this.props.module[0].tests.easy.questionTwentyNine
          .secondOption,
        easyQ29F3: this.props.module[0].tests.easy.questionTwentyNine
          .thirdOption,
        easyQ29F4: this.props.module[0].tests.easy.questionTwentyNine
          .fourthOption,
        easyQ29A: this.props.module[0].tests.easy.questionTwentyNine.answer,
        easyQ29U: this.props.module[0].tests.easy.questionTwentyNine.used,
        easyQ30Q: this.props.module[0].tests.easy.questionThirteen.question,
        easyQ30F1: this.props.module[0].tests.easy.questionThirteen.firstOption,
        easyQ30F2: this.props.module[0].tests.easy.questionThirteen
          .secondOption,
        easyQ30F3: this.props.module[0].tests.easy.questionThirteen.thirdOption,
        easyQ30F4: this.props.module[0].tests.easy.questionThirteen
          .fourthOption,
        easyQ30A: this.props.module[0].tests.easy.questionThirteen.answer,
        easyQ30U: this.props.module[0].tests.easy.questionThirteen.used,
        easyTime: this.props.module[0].tests.easy.time,
        mediumQ1Q: this.props.module[0].tests.medium.questionOne.question,
        mediumQ1F1: this.props.module[0].tests.medium.questionOne.firstOption,
        mediumQ1F2: this.props.module[0].tests.medium.questionOne.secondOption,
        mediumQ1F3: this.props.module[0].tests.medium.questionOne.thirdOption,
        mediumQ1F4: this.props.module[0].tests.medium.questionOne.fourthOption,
        mediumQ1A: this.props.module[0].tests.medium.questionOne.answer,
        mediumQ1U: this.props.module[0].tests.medium.questionOne.used,
        mediumQ2Q: this.props.module[0].tests.medium.questionTwo.question,
        mediumQ2F1: this.props.module[0].tests.medium.questionTwo.firstOption,
        mediumQ2F2: this.props.module[0].tests.medium.questionTwo.secondOption,
        mediumQ2F3: this.props.module[0].tests.medium.questionTwo.thirdOption,
        mediumQ2F4: this.props.module[0].tests.medium.questionTwo.fourthOption,
        mediumQ2A: this.props.module[0].tests.medium.questionTwo.answer,
        mediumQ2U: this.props.module[0].tests.medium.questionTwo.used,
        mediumQ3Q: this.props.module[0].tests.medium.questionThree.question,
        mediumQ3F1: this.props.module[0].tests.medium.questionThree.firstOption,
        mediumQ3F2: this.props.module[0].tests.medium.questionThree
          .secondOption,
        mediumQ3F3: this.props.module[0].tests.medium.questionThree.thirdOption,
        mediumQ3F4: this.props.module[0].tests.medium.questionThree
          .fourthOption,
        mediumQ3A: this.props.module[0].tests.medium.questionThree.answer,
        mediumQ3U: this.props.module[0].tests.medium.questionThree.used,
        mediumQ4Q: this.props.module[0].tests.medium.questionFour.question,
        mediumQ4F1: this.props.module[0].tests.medium.questionFour.firstOption,
        mediumQ4F2: this.props.module[0].tests.medium.questionFour.secondOption,
        mediumQ4F3: this.props.module[0].tests.medium.questionFour.thirdOption,
        mediumQ4F4: this.props.module[0].tests.medium.questionFour.fourthOption,
        mediumQ4A: this.props.module[0].tests.medium.questionFour.answer,
        mediumQ4U: this.props.module[0].tests.medium.questionFour.used,
        mediumQ5Q: this.props.module[0].tests.medium.questionFive.question,
        mediumQ5F1: this.props.module[0].tests.medium.questionFive.firstOption,
        mediumQ5F2: this.props.module[0].tests.medium.questionFive.secondOption,
        mediumQ5F3: this.props.module[0].tests.medium.questionFive.thirdOption,
        mediumQ5F4: this.props.module[0].tests.medium.questionFive.fourthOption,
        mediumQ5A: this.props.module[0].tests.medium.questionFive.answer,
        mediumQ5U: this.props.module[0].tests.medium.questionFive.used,
        mediumQ6Q: this.props.module[0].tests.medium.questionSix.question,
        mediumQ6F1: this.props.module[0].tests.medium.questionSix.firstOption,
        mediumQ6F2: this.props.module[0].tests.medium.questionSix.secondOption,
        mediumQ6F3: this.props.module[0].tests.medium.questionSix.thirdOption,
        mediumQ6F4: this.props.module[0].tests.medium.questionSix.fourthOption,
        mediumQ6A: this.props.module[0].tests.medium.questionSix.answer,
        mediumQ6U: this.props.module[0].tests.medium.questionSix.used,
        mediumQ7Q: this.props.module[0].tests.medium.questionSeven.question,
        mediumQ7F1: this.props.module[0].tests.medium.questionSeven.firstOption,
        mediumQ7F2: this.props.module[0].tests.medium.questionSeven
          .secondOption,
        mediumQ7F3: this.props.module[0].tests.medium.questionSeven.thirdOption,
        mediumQ7F4: this.props.module[0].tests.medium.questionSeven
          .fourthOption,
        mediumQ7A: this.props.module[0].tests.medium.questionSeven.answer,
        mediumQ7U: this.props.module[0].tests.medium.questionSeven.used,
        mediumQ8Q: this.props.module[0].tests.medium.questionEight.question,
        mediumQ8F1: this.props.module[0].tests.medium.questionEight.firstOption,
        mediumQ8F2: this.props.module[0].tests.medium.questionEight
          .secondOption,
        mediumQ8F3: this.props.module[0].tests.medium.questionEight.thirdOption,
        mediumQ8F4: this.props.module[0].tests.medium.questionEight
          .fourthOption,
        mediumQ8A: this.props.module[0].tests.medium.questionEight.answer,
        mediumQ8U: this.props.module[0].tests.medium.questionEight.used,
        mediumQ9Q: this.props.module[0].tests.medium.questionNine.question,
        mediumQ9F1: this.props.module[0].tests.medium.questionNine.firstOption,
        mediumQ9F2: this.props.module[0].tests.medium.questionNine.secondOption,
        mediumQ9F3: this.props.module[0].tests.medium.questionNine.thirdOption,
        mediumQ9F4: this.props.module[0].tests.medium.questionNine.fourthOption,
        mediumQ9A: this.props.module[0].tests.medium.questionNine.answer,
        mediumQ9U: this.props.module[0].tests.medium.questionNine.used,
        mediumQ10Q: this.props.module[0].tests.medium.questionTen.question,
        mediumQ10F1: this.props.module[0].tests.medium.questionTen.firstOption,
        mediumQ10F2: this.props.module[0].tests.medium.questionTen.secondOption,
        mediumQ10F3: this.props.module[0].tests.medium.questionTen.thirdOption,
        mediumQ10F4: this.props.module[0].tests.medium.questionTen.fourthOption,
        mediumQ10A: this.props.module[0].tests.medium.questionTen.answer,
        mediumQ10U: this.props.module[0].tests.medium.questionTen.used,
        mediumQ11Q: this.props.module[0].tests.medium.questionEleven.question,
        mediumQ11F1: this.props.module[0].tests.medium.questionEleven
          .firstOption,
        mediumQ11F2: this.props.module[0].tests.medium.questionEleven
          .secondOption,
        mediumQ11F3: this.props.module[0].tests.medium.questionEleven
          .thirdOption,
        mediumQ11F4: this.props.module[0].tests.medium.questionEleven
          .fourthOption,
        mediumQ11A: this.props.module[0].tests.medium.questionEleven.answer,
        mediumQ11U: this.props.module[0].tests.medium.questionEleven.used,
        mediumQ12Q: this.props.module[0].tests.medium.questionTwelve.question,
        mediumQ12F1: this.props.module[0].tests.medium.questionTwelve
          .firstOption,
        mediumQ12F2: this.props.module[0].tests.medium.questionTwelve
          .secondOption,
        mediumQ12F3: this.props.module[0].tests.medium.questionTwelve
          .thirdOption,
        mediumQ12F4: this.props.module[0].tests.medium.questionTwelve
          .fourthOption,
        mediumQ12A: this.props.module[0].tests.medium.questionTwelve.answer,
        mediumQ12U: this.props.module[0].tests.medium.questionTwelve.used,
        mediumQ13Q: this.props.module[0].tests.medium.questionThirteen.question,
        mediumQ13F1: this.props.module[0].tests.medium.questionThirteen
          .firstOption,
        mediumQ13F2: this.props.module[0].tests.medium.questionThirteen
          .secondOption,
        mediumQ13F3: this.props.module[0].tests.medium.questionThirteen
          .thirdOption,
        mediumQ13F4: this.props.module[0].tests.medium.questionThirteen
          .fourthOption,
        mediumQ13A: this.props.module[0].tests.medium.questionThirteen.answer,
        mediumQ13U: this.props.module[0].tests.medium.questionThirteen.used,
        mediumQ14Q: this.props.module[0].tests.medium.questionFourteen.question,
        mediumQ14F1: this.props.module[0].tests.medium.questionFourteen
          .firstOption,
        mediumQ14F2: this.props.module[0].tests.medium.questionFourteen
          .secondOption,
        mediumQ14F3: this.props.module[0].tests.medium.questionFourteen
          .thirdOption,
        mediumQ14F4: this.props.module[0].tests.medium.questionFourteen
          .fourthOption,
        mediumQ14A: this.props.module[0].tests.medium.questionFourteen.answer,
        mediumQ14U: this.props.module[0].tests.medium.questionFourteen.used,
        mediumQ15Q: this.props.module[0].tests.medium.questionFifteen.question,
        mediumQ15F1: this.props.module[0].tests.medium.questionFifteen
          .firstOption,
        mediumQ15F2: this.props.module[0].tests.medium.questionFifteen
          .secondOption,
        mediumQ15F3: this.props.module[0].tests.medium.questionFifteen
          .thirdOption,
        mediumQ15F4: this.props.module[0].tests.medium.questionFifteen
          .fourthOption,
        mediumQ15A: this.props.module[0].tests.medium.questionFifteen.answer,
        mediumQ15U: this.props.module[0].tests.medium.questionFifteen.used,
        mediumQ16Q: this.props.module[0].tests.medium.questionSixteen.question,
        mediumQ16F1: this.props.module[0].tests.medium.questionSixteen
          .firstOption,
        mediumQ16F2: this.props.module[0].tests.medium.questionSixteen
          .secondOption,
        mediumQ16F3: this.props.module[0].tests.medium.questionSixteen
          .thirdOption,
        mediumQ16F4: this.props.module[0].tests.medium.questionSixteen
          .fourthOption,
        mediumQ16A: this.props.module[0].tests.medium.questionSixteen.answer,
        mediumQ16U: this.props.module[0].tests.medium.questionSixteen.used,
        mediumQ17Q: this.props.module[0].tests.medium.questionSeventeen
          .question,
        mediumQ17F1: this.props.module[0].tests.medium.questionSeventeen
          .firstOption,
        mediumQ17F2: this.props.module[0].tests.medium.questionSeventeen
          .secondOption,
        mediumQ17F3: this.props.module[0].tests.medium.questionSeventeen
          .thirdOption,
        mediumQ17F4: this.props.module[0].tests.medium.questionSeventeen
          .fourthOption,
        mediumQ17A: this.props.module[0].tests.medium.questionSeventeen.answer,
        mediumQ17U: this.props.module[0].tests.medium.questionSeventeen.used,
        mediumQ18Q: this.props.module[0].tests.medium.questionEighteen.question,
        mediumQ18F1: this.props.module[0].tests.medium.questionEighteen
          .firstOption,
        mediumQ18F2: this.props.module[0].tests.medium.questionEighteen
          .secondOption,
        mediumQ18F3: this.props.module[0].tests.medium.questionEighteen
          .thirdOption,
        mediumQ18F4: this.props.module[0].tests.medium.questionEighteen
          .fourthOption,
        mediumQ18A: this.props.module[0].tests.medium.questionEighteen.answer,
        mediumQ18U: this.props.module[0].tests.medium.questionEighteen.used,
        mediumQ19Q: this.props.module[0].tests.medium.questionNineteen.question,
        mediumQ19F1: this.props.module[0].tests.medium.questionNineteen
          .firstOption,
        mediumQ19F2: this.props.module[0].tests.medium.questionNineteen
          .secondOption,
        mediumQ19F3: this.props.module[0].tests.medium.questionNineteen
          .thirdOption,
        mediumQ19F4: this.props.module[0].tests.medium.questionNineteen
          .fourthOption,
        mediumQ19A: this.props.module[0].tests.medium.questionNineteen.answer,
        mediumQ19U: this.props.module[0].tests.medium.questionNineteen.used,
        mediumQ20Q: this.props.module[0].tests.medium.questionTwenty.question,
        mediumQ20F1: this.props.module[0].tests.medium.questionTwenty
          .firstOption,
        mediumQ20F2: this.props.module[0].tests.medium.questionTwenty
          .secondOption,
        mediumQ20F3: this.props.module[0].tests.medium.questionTwenty
          .thirdOption,
        mediumQ20F4: this.props.module[0].tests.medium.questionTwenty
          .fourthOption,
        mediumQ20A: this.props.module[0].tests.medium.questionTwenty.answer,
        mediumQ20U: this.props.module[0].tests.medium.questionTwenty.used,
        mediumQ21Q: this.props.module[0].tests.medium.questionTwentyOne
          .question,
        mediumQ21F1: this.props.module[0].tests.medium.questionTwentyOne
          .firstOption,
        mediumQ21F2: this.props.module[0].tests.medium.questionTwentyOne
          .secondOption,
        mediumQ21F3: this.props.module[0].tests.medium.questionTwentyOne
          .thirdOption,
        mediumQ21F4: this.props.module[0].tests.medium.questionTwentyOne
          .fourthOption,
        mediumQ21A: this.props.module[0].tests.medium.questionTwentyOne.answer,
        mediumQ21U: this.props.module[0].tests.medium.questionTwentyOne.used,
        mediumQ22Q: this.props.module[0].tests.medium.questionTwentyTwo
          .question,
        mediumQ22F1: this.props.module[0].tests.medium.questionTwentyTwo
          .firstOption,
        mediumQ22F2: this.props.module[0].tests.medium.questionTwentyTwo
          .secondOption,
        mediumQ22F3: this.props.module[0].tests.medium.questionTwentyTwo
          .thirdOption,
        mediumQ22F4: this.props.module[0].tests.medium.questionTwentyTwo
          .fourthOption,
        mediumQ22A: this.props.module[0].tests.medium.questionTwentyTwo.answer,
        mediumQ22U: this.props.module[0].tests.medium.questionTwentyTwo.used,
        mediumQ23Q: this.props.module[0].tests.medium.questionTwentyThree
          .question,
        mediumQ23F1: this.props.module[0].tests.medium.questionTwentyThree
          .firstOption,
        mediumQ23F2: this.props.module[0].tests.medium.questionTwentyThree
          .secondOption,
        mediumQ23F3: this.props.module[0].tests.medium.questionTwentyThree
          .thirdOption,
        mediumQ23F4: this.props.module[0].tests.medium.questionTwentyThree
          .fourthOption,
        mediumQ23A: this.props.module[0].tests.medium.questionTwentyThree
          .answer,
        mediumQ23U: this.props.module[0].tests.medium.questionTwentyThree.used,
        mediumQ24Q: this.props.module[0].tests.medium.questionTwentyFour
          .question,
        mediumQ24F1: this.props.module[0].tests.medium.questionTwentyFour
          .firstOption,
        mediumQ24F2: this.props.module[0].tests.medium.questionTwentyFour
          .secondOption,
        mediumQ24F3: this.props.module[0].tests.medium.questionTwentyFour
          .thirdOption,
        mediumQ24F4: this.props.module[0].tests.medium.questionTwentyFour
          .fourthOption,
        mediumQ24A: this.props.module[0].tests.medium.questionTwentyFour.answer,
        mediumQ24U: this.props.module[0].tests.medium.questionTwentyFour.used,
        mediumQ25Q: this.props.module[0].tests.medium.questionTwentyFive
          .question,
        mediumQ25F1: this.props.module[0].tests.medium.questionTwentyFive
          .firstOption,
        mediumQ25F2: this.props.module[0].tests.medium.questionTwentyFive
          .secondOption,
        mediumQ25F3: this.props.module[0].tests.medium.questionTwentyFive
          .thirdOption,
        mediumQ25F4: this.props.module[0].tests.medium.questionTwentyFive
          .fourthOption,
        mediumQ25A: this.props.module[0].tests.medium.questionTwentyFive.answer,
        mediumQ25U: this.props.module[0].tests.medium.questionTwentyFive.used,
        mediumQ26Q: this.props.module[0].tests.medium.questionTwentySix
          .question,
        mediumQ26F1: this.props.module[0].tests.medium.questionTwentySix
          .firstOption,
        mediumQ26F2: this.props.module[0].tests.medium.questionTwentySix
          .secondOption,
        mediumQ26F3: this.props.module[0].tests.medium.questionTwentySix
          .thirdOption,
        mediumQ26F4: this.props.module[0].tests.medium.questionTwentySix
          .fourthOption,
        mediumQ26A: this.props.module[0].tests.medium.questionTwentySix.answer,
        mediumQ26U: this.props.module[0].tests.medium.questionTwentySix.used,
        mediumQ27Q: this.props.module[0].tests.medium.questionTwentySeven
          .question,
        mediumQ27F1: this.props.module[0].tests.medium.questionTwentySeven
          .firstOption,
        mediumQ27F2: this.props.module[0].tests.medium.questionTwentySeven
          .secondOption,
        mediumQ27F3: this.props.module[0].tests.medium.questionTwentySeven
          .thirdOption,
        mediumQ27F4: this.props.module[0].tests.medium.questionTwentySeven
          .fourthOption,
        mediumQ27A: this.props.module[0].tests.medium.questionTwentySeven
          .answer,
        mediumQ27U: this.props.module[0].tests.medium.questionTwentySeven.used,
        mediumQ28Q: this.props.module[0].tests.medium.questionTwentyEight
          .question,
        mediumQ28F1: this.props.module[0].tests.medium.questionTwentyEight
          .firstOption,
        mediumQ28F2: this.props.module[0].tests.medium.questionTwentyEight
          .secondOption,
        mediumQ28F3: this.props.module[0].tests.medium.questionTwentyEight
          .thirdOption,
        mediumQ28F4: this.props.module[0].tests.medium.questionTwentyEight
          .fourthOption,
        mediumQ28A: this.props.module[0].tests.medium.questionTwentyEight
          .answer,
        mediumQ28U: this.props.module[0].tests.medium.questionTwentyEight.used,
        mediumQ29Q: this.props.module[0].tests.medium.questionTwentyNine
          .question,
        mediumQ29F1: this.props.module[0].tests.medium.questionTwentyNine
          .firstOption,
        mediumQ29F2: this.props.module[0].tests.medium.questionTwentyNine
          .secondOption,
        mediumQ29F3: this.props.module[0].tests.medium.questionTwentyNine
          .thirdOption,
        mediumQ29F4: this.props.module[0].tests.medium.questionTwentyNine
          .fourthOption,
        mediumQ29A: this.props.module[0].tests.medium.questionTwentyNine.answer,
        mediumQ29U: this.props.module[0].tests.medium.questionTwentyNine.used,
        mediumQ30Q: this.props.module[0].tests.medium.questionThirteen.question,
        mediumQ30F1: this.props.module[0].tests.medium.questionThirteen
          .firstOption,
        mediumQ30F2: this.props.module[0].tests.medium.questionThirteen
          .secondOption,
        mediumQ30F3: this.props.module[0].tests.medium.questionThirteen
          .thirdOption,
        mediumQ30F4: this.props.module[0].tests.medium.questionThirteen
          .fourthOption,
        mediumQ30A: this.props.module[0].tests.medium.questionThirteen.answer,
        mediumQ30U: this.props.module[0].tests.medium.questionThirteen.used,
        mediumTime: this.props.module[0].tests.medium.time,
        hardQ1Q: this.props.module[0].tests.hard.questionOne.question,
        hardQ1F1: this.props.module[0].tests.hard.questionOne.firstOption,
        hardQ1F2: this.props.module[0].tests.hard.questionOne.secondOption,
        hardQ1F3: this.props.module[0].tests.hard.questionOne.thirdOption,
        hardQ1F4: this.props.module[0].tests.hard.questionOne.fourthOption,
        hardQ1A: this.props.module[0].tests.hard.questionOne.answer,
        hardQ1U: this.props.module[0].tests.hard.questionOne.used,
        hardQ2Q: this.props.module[0].tests.hard.questionTwo.question,
        hardQ2F1: this.props.module[0].tests.hard.questionTwo.firstOption,
        hardQ2F2: this.props.module[0].tests.hard.questionTwo.secondOption,
        hardQ2F3: this.props.module[0].tests.hard.questionTwo.thirdOption,
        hardQ2F4: this.props.module[0].tests.hard.questionTwo.fourthOption,
        hardQ2A: this.props.module[0].tests.hard.questionTwo.answer,
        hardQ2U: this.props.module[0].tests.hard.questionTwo.used,
        hardQ3Q: this.props.module[0].tests.hard.questionThree.question,
        hardQ3F1: this.props.module[0].tests.hard.questionThree.firstOption,
        hardQ3F2: this.props.module[0].tests.hard.questionThree.secondOption,
        hardQ3F3: this.props.module[0].tests.hard.questionThree.thirdOption,
        hardQ3F4: this.props.module[0].tests.hard.questionThree.fourthOption,
        hardQ3A: this.props.module[0].tests.hard.questionThree.answer,
        hardQ3U: this.props.module[0].tests.hard.questionThree.used,
        hardQ4Q: this.props.module[0].tests.hard.questionFour.question,
        hardQ4F1: this.props.module[0].tests.hard.questionFour.firstOption,
        hardQ4F2: this.props.module[0].tests.hard.questionFour.secondOption,
        hardQ4F3: this.props.module[0].tests.hard.questionFour.thirdOption,
        hardQ4F4: this.props.module[0].tests.hard.questionFour.fourthOption,
        hardQ4A: this.props.module[0].tests.hard.questionFour.answer,
        hardQ4U: this.props.module[0].tests.hard.questionFour.used,
        hardQ5Q: this.props.module[0].tests.hard.questionFive.question,
        hardQ5F1: this.props.module[0].tests.hard.questionFive.firstOption,
        hardQ5F2: this.props.module[0].tests.hard.questionFive.secondOption,
        hardQ5F3: this.props.module[0].tests.hard.questionFive.thirdOption,
        hardQ5F4: this.props.module[0].tests.hard.questionFive.fourthOption,
        hardQ5A: this.props.module[0].tests.hard.questionFive.answer,
        hardQ5U: this.props.module[0].tests.hard.questionFive.used,
        hardQ6Q: this.props.module[0].tests.hard.questionSix.question,
        hardQ6F1: this.props.module[0].tests.hard.questionSix.firstOption,
        hardQ6F2: this.props.module[0].tests.hard.questionSix.secondOption,
        hardQ6F3: this.props.module[0].tests.hard.questionSix.thirdOption,
        hardQ6F4: this.props.module[0].tests.hard.questionSix.fourthOption,
        hardQ6A: this.props.module[0].tests.hard.questionSix.answer,
        hardQ6U: this.props.module[0].tests.hard.questionSix.used,
        hardQ7Q: this.props.module[0].tests.hard.questionSeven.question,
        hardQ7F1: this.props.module[0].tests.hard.questionSeven.firstOption,
        hardQ7F2: this.props.module[0].tests.hard.questionSeven.secondOption,
        hardQ7F3: this.props.module[0].tests.hard.questionSeven.thirdOption,
        hardQ7F4: this.props.module[0].tests.hard.questionSeven.fourthOption,
        hardQ7A: this.props.module[0].tests.hard.questionSeven.answer,
        hardQ7U: this.props.module[0].tests.hard.questionSeven.used,
        hardQ8Q: this.props.module[0].tests.hard.questionEight.question,
        hardQ8F1: this.props.module[0].tests.hard.questionEight.firstOption,
        hardQ8F2: this.props.module[0].tests.hard.questionEight.secondOption,
        hardQ8F3: this.props.module[0].tests.hard.questionEight.thirdOption,
        hardQ8F4: this.props.module[0].tests.hard.questionEight.fourthOption,
        hardQ8A: this.props.module[0].tests.hard.questionEight.answer,
        hardQ8U: this.props.module[0].tests.hard.questionEight.used,
        hardQ9Q: this.props.module[0].tests.hard.questionNine.question,
        hardQ9F1: this.props.module[0].tests.hard.questionNine.firstOption,
        hardQ9F2: this.props.module[0].tests.hard.questionNine.secondOption,
        hardQ9F3: this.props.module[0].tests.hard.questionNine.thirdOption,
        hardQ9F4: this.props.module[0].tests.hard.questionNine.fourthOption,
        hardQ9A: this.props.module[0].tests.hard.questionNine.answer,
        hardQ9U: this.props.module[0].tests.hard.questionNine.used,
        hardQ10Q: this.props.module[0].tests.hard.questionTen.question,
        hardQ10F1: this.props.module[0].tests.hard.questionTen.firstOption,
        hardQ10F2: this.props.module[0].tests.hard.questionTen.secondOption,
        hardQ10F3: this.props.module[0].tests.hard.questionTen.thirdOption,
        hardQ10F4: this.props.module[0].tests.hard.questionTen.fourthOption,
        hardQ10A: this.props.module[0].tests.hard.questionTen.answer,
        hardQ10U: this.props.module[0].tests.hard.questionTen.used,
        hardQ11Q: this.props.module[0].tests.hard.questionEleven.question,
        hardQ11F1: this.props.module[0].tests.hard.questionEleven.firstOption,
        hardQ11F2: this.props.module[0].tests.hard.questionEleven.secondOption,
        hardQ11F3: this.props.module[0].tests.hard.questionEleven.thirdOption,
        hardQ11F4: this.props.module[0].tests.hard.questionEleven.fourthOption,
        hardQ11A: this.props.module[0].tests.hard.questionEleven.answer,
        hardQ11U: this.props.module[0].tests.hard.questionEleven.used,
        hardQ12Q: this.props.module[0].tests.hard.questionTwelve.question,
        hardQ12F1: this.props.module[0].tests.hard.questionTwelve.firstOption,
        hardQ12F2: this.props.module[0].tests.hard.questionTwelve.secondOption,
        hardQ12F3: this.props.module[0].tests.hard.questionTwelve.thirdOption,
        hardQ12F4: this.props.module[0].tests.hard.questionTwelve.fourthOption,
        hardQ12A: this.props.module[0].tests.hard.questionTwelve.answer,
        hardQ12U: this.props.module[0].tests.hard.questionTwelve.used,
        hardQ13Q: this.props.module[0].tests.hard.questionThirteen.question,
        hardQ13F1: this.props.module[0].tests.hard.questionThirteen.firstOption,
        hardQ13F2: this.props.module[0].tests.hard.questionThirteen
          .secondOption,
        hardQ13F3: this.props.module[0].tests.hard.questionThirteen.thirdOption,
        hardQ13F4: this.props.module[0].tests.hard.questionThirteen
          .fourthOption,
        hardQ13A: this.props.module[0].tests.hard.questionThirteen.answer,
        hardQ13U: this.props.module[0].tests.hard.questionThirteen.used,
        hardQ14Q: this.props.module[0].tests.hard.questionFourteen.question,
        hardQ14F1: this.props.module[0].tests.hard.questionFourteen.firstOption,
        hardQ14F2: this.props.module[0].tests.hard.questionFourteen
          .secondOption,
        hardQ14F3: this.props.module[0].tests.hard.questionFourteen.thirdOption,
        hardQ14F4: this.props.module[0].tests.hard.questionFourteen
          .fourthOption,
        hardQ14A: this.props.module[0].tests.hard.questionFourteen.answer,
        hardQ14U: this.props.module[0].tests.hard.questionFourteen.used,
        hardQ15Q: this.props.module[0].tests.hard.questionFifteen.question,
        hardQ15F1: this.props.module[0].tests.hard.questionFifteen.firstOption,
        hardQ15F2: this.props.module[0].tests.hard.questionFifteen.secondOption,
        hardQ15F3: this.props.module[0].tests.hard.questionFifteen.thirdOption,
        hardQ15F4: this.props.module[0].tests.hard.questionFifteen.fourthOption,
        hardQ15A: this.props.module[0].tests.hard.questionFifteen.answer,
        hardQ15U: this.props.module[0].tests.hard.questionFifteen.used,
        hardQ16Q: this.props.module[0].tests.hard.questionSixteen.question,
        hardQ16F1: this.props.module[0].tests.hard.questionSixteen.firstOption,
        hardQ16F2: this.props.module[0].tests.hard.questionSixteen.secondOption,
        hardQ16F3: this.props.module[0].tests.hard.questionSixteen.thirdOption,
        hardQ16F4: this.props.module[0].tests.hard.questionSixteen.fourthOption,
        hardQ16A: this.props.module[0].tests.hard.questionSixteen.answer,
        hardQ16U: this.props.module[0].tests.hard.questionSixteen.used,
        hardQ17Q: this.props.module[0].tests.hard.questionSeventeen.question,
        hardQ17F1: this.props.module[0].tests.hard.questionSeventeen
          .firstOption,
        hardQ17F2: this.props.module[0].tests.hard.questionSeventeen
          .secondOption,
        hardQ17F3: this.props.module[0].tests.hard.questionSeventeen
          .thirdOption,
        hardQ17F4: this.props.module[0].tests.hard.questionSeventeen
          .fourthOption,
        hardQ17A: this.props.module[0].tests.hard.questionSeventeen.answer,
        hardQ17U: this.props.module[0].tests.hard.questionSeventeen.used,
        hardQ18Q: this.props.module[0].tests.hard.questionEighteen.question,
        hardQ18F1: this.props.module[0].tests.hard.questionEighteen.firstOption,
        hardQ18F2: this.props.module[0].tests.hard.questionEighteen
          .secondOption,
        hardQ18F3: this.props.module[0].tests.hard.questionEighteen.thirdOption,
        hardQ18F4: this.props.module[0].tests.hard.questionEighteen
          .fourthOption,
        hardQ18A: this.props.module[0].tests.hard.questionEighteen.answer,
        hardQ18U: this.props.module[0].tests.hard.questionEighteen.used,
        hardQ19Q: this.props.module[0].tests.hard.questionNineteen.question,
        hardQ19F1: this.props.module[0].tests.hard.questionNineteen.firstOption,
        hardQ19F2: this.props.module[0].tests.hard.questionNineteen
          .secondOption,
        hardQ19F3: this.props.module[0].tests.hard.questionNineteen.thirdOption,
        hardQ19F4: this.props.module[0].tests.hard.questionNineteen
          .fourthOption,
        hardQ19A: this.props.module[0].tests.hard.questionNineteen.answer,
        hardQ19U: this.props.module[0].tests.hard.questionNineteen.used,
        hardQ20Q: this.props.module[0].tests.hard.questionTwenty.question,
        hardQ20F1: this.props.module[0].tests.hard.questionTwenty.firstOption,
        hardQ20F2: this.props.module[0].tests.hard.questionTwenty.secondOption,
        hardQ20F3: this.props.module[0].tests.hard.questionTwenty.thirdOption,
        hardQ20F4: this.props.module[0].tests.hard.questionTwenty.fourthOption,
        hardQ20A: this.props.module[0].tests.hard.questionTwenty.answer,
        hardQ20U: this.props.module[0].tests.hard.questionTwenty.used,
        hardQ21Q: this.props.module[0].tests.hard.questionTwentyOne.question,
        hardQ21F1: this.props.module[0].tests.hard.questionTwentyOne
          .firstOption,
        hardQ21F2: this.props.module[0].tests.hard.questionTwentyOne
          .secondOption,
        hardQ21F3: this.props.module[0].tests.hard.questionTwentyOne
          .thirdOption,
        hardQ21F4: this.props.module[0].tests.hard.questionTwentyOne
          .fourthOption,
        hardQ21A: this.props.module[0].tests.hard.questionTwentyOne.answer,
        hardQ21U: this.props.module[0].tests.hard.questionTwentyOne.used,
        hardQ22Q: this.props.module[0].tests.hard.questionTwentyTwo.question,
        hardQ22F1: this.props.module[0].tests.hard.questionTwentyTwo
          .firstOption,
        hardQ22F2: this.props.module[0].tests.hard.questionTwentyTwo
          .secondOption,
        hardQ22F3: this.props.module[0].tests.hard.questionTwentyTwo
          .thirdOption,
        hardQ22F4: this.props.module[0].tests.hard.questionTwentyTwo
          .fourthOption,
        hardQ22A: this.props.module[0].tests.hard.questionTwentyTwo.answer,
        hardQ22U: this.props.module[0].tests.hard.questionTwentyTwo.used,
        hardQ23Q: this.props.module[0].tests.hard.questionTwentyThree.question,
        hardQ23F1: this.props.module[0].tests.hard.questionTwentyThree
          .firstOption,
        hardQ23F2: this.props.module[0].tests.hard.questionTwentyThree
          .secondOption,
        hardQ23F3: this.props.module[0].tests.hard.questionTwentyThree
          .thirdOption,
        hardQ23F4: this.props.module[0].tests.hard.questionTwentyThree
          .fourthOption,
        hardQ23A: this.props.module[0].tests.hard.questionTwentyThree.answer,
        hardQ23U: this.props.module[0].tests.hard.questionTwentyThree.used,
        hardQ24Q: this.props.module[0].tests.hard.questionTwentyFour.question,
        hardQ24F1: this.props.module[0].tests.hard.questionTwentyFour
          .firstOption,
        hardQ24F2: this.props.module[0].tests.hard.questionTwentyFour
          .secondOption,
        hardQ24F3: this.props.module[0].tests.hard.questionTwentyFour
          .thirdOption,
        hardQ24F4: this.props.module[0].tests.hard.questionTwentyFour
          .fourthOption,
        hardQ24A: this.props.module[0].tests.hard.questionTwentyFour.answer,
        hardQ24U: this.props.module[0].tests.hard.questionTwentyFour.used,
        hardQ25Q: this.props.module[0].tests.hard.questionTwentyFive.question,
        hardQ25F1: this.props.module[0].tests.hard.questionTwentyFive
          .firstOption,
        hardQ25F2: this.props.module[0].tests.hard.questionTwentyFive
          .secondOption,
        hardQ25F3: this.props.module[0].tests.hard.questionTwentyFive
          .thirdOption,
        hardQ25F4: this.props.module[0].tests.hard.questionTwentyFive
          .fourthOption,
        hardQ25A: this.props.module[0].tests.hard.questionTwentyFive.answer,
        hardQ25U: this.props.module[0].tests.hard.questionTwentyFive.used,
        hardQ26Q: this.props.module[0].tests.hard.questionTwentySix.question,
        hardQ26F1: this.props.module[0].tests.hard.questionTwentySix
          .firstOption,
        hardQ26F2: this.props.module[0].tests.hard.questionTwentySix
          .secondOption,
        hardQ26F3: this.props.module[0].tests.hard.questionTwentySix
          .thirdOption,
        hardQ26F4: this.props.module[0].tests.hard.questionTwentySix
          .fourthOption,
        hardQ26A: this.props.module[0].tests.hard.questionTwentySix.answer,
        hardQ26U: this.props.module[0].tests.hard.questionTwentySix.used,
        hardQ27Q: this.props.module[0].tests.hard.questionTwentySeven.question,
        hardQ27F1: this.props.module[0].tests.hard.questionTwentySeven
          .firstOption,
        hardQ27F2: this.props.module[0].tests.hard.questionTwentySeven
          .secondOption,
        hardQ27F3: this.props.module[0].tests.hard.questionTwentySeven
          .thirdOption,
        hardQ27F4: this.props.module[0].tests.hard.questionTwentySeven
          .fourthOption,
        hardQ27A: this.props.module[0].tests.hard.questionTwentySeven.answer,
        hardQ27U: this.props.module[0].tests.hard.questionTwentySeven.used,
        hardQ28Q: this.props.module[0].tests.hard.questionTwentyEight.question,
        hardQ28F1: this.props.module[0].tests.hard.questionTwentyEight
          .firstOption,
        hardQ28F2: this.props.module[0].tests.hard.questionTwentyEight
          .secondOption,
        hardQ28F3: this.props.module[0].tests.hard.questionTwentyEight
          .thirdOption,
        hardQ28F4: this.props.module[0].tests.hard.questionTwentyEight
          .fourthOption,
        hardQ28A: this.props.module[0].tests.hard.questionTwentyEight.answer,
        hardQ28U: this.props.module[0].tests.hard.questionTwentyEight.used,
        hardQ29Q: this.props.module[0].tests.hard.questionTwentyNine.question,
        hardQ29F1: this.props.module[0].tests.hard.questionTwentyNine
          .firstOption,
        hardQ29F2: this.props.module[0].tests.hard.questionTwentyNine
          .secondOption,
        hardQ29F3: this.props.module[0].tests.hard.questionTwentyNine
          .thirdOption,
        hardQ29F4: this.props.module[0].tests.hard.questionTwentyNine
          .fourthOption,
        hardQ29A: this.props.module[0].tests.hard.questionTwentyNine.answer,
        hardQ29U: this.props.module[0].tests.hard.questionTwentyNine.used,
        hardQ30Q: this.props.module[0].tests.hard.questionThirteen.question,
        hardQ30F1: this.props.module[0].tests.hard.questionThirteen.firstOption,
        hardQ30F2: this.props.module[0].tests.hard.questionThirteen
          .secondOption,
        hardQ30F3: this.props.module[0].tests.hard.questionThirteen.thirdOption,
        hardQ30F4: this.props.module[0].tests.hard.questionThirteen
          .fourthOption,
        hardQ30A: this.props.module[0].tests.hard.questionThirteen.answer,
        hardQ30U: this.props.module[0].tests.hard.questionThirteen.used,
        hardTime: this.props.module[0].tests.hard.time,
        evaluateQ1Q: this.props.module[0].tests.evaluation.questionOne.question,
        evaluateQ1F1: this.props.module[0].tests.evaluation.questionOne
          .firstOption,
        evaluateQ1F2: this.props.module[0].tests.evaluation.questionOne
          .secondOption,
        evaluateQ1F3: this.props.module[0].tests.evaluation.questionOne
          .thirdOption,
        evaluateQ1F4: this.props.module[0].tests.evaluation.questionOne
          .fourthOption,
        evaluateQ1A: this.props.module[0].tests.evaluation.questionOne.answer,
        evaluateQ1U: this.props.module[0].tests.evaluation.questionOne.used,
        evaluateQ2Q: this.props.module[0].tests.evaluation.questionTwo.question,
        evaluateQ2F1: this.props.module[0].tests.evaluation.questionTwo
          .firstOption,
        evaluateQ2F2: this.props.module[0].tests.evaluation.questionTwo
          .secondOption,
        evaluateQ2F3: this.props.module[0].tests.evaluation.questionTwo
          .thirdOption,
        evaluateQ2F4: this.props.module[0].tests.evaluation.questionTwo
          .fourthOption,
        evaluateQ2A: this.props.module[0].tests.evaluation.questionTwo.answer,
        evaluateQ2U: this.props.module[0].tests.evaluation.questionTwo.used,
        evaluateQ3Q: this.props.module[0].tests.evaluation.questionThree
          .question,
        evaluateQ3F1: this.props.module[0].tests.evaluation.questionThree
          .firstOption,
        evaluateQ3F2: this.props.module[0].tests.evaluation.questionThree
          .secondOption,
        evaluateQ3F3: this.props.module[0].tests.evaluation.questionThree
          .thirdOption,
        evaluateQ3F4: this.props.module[0].tests.evaluation.questionThree
          .fourthOption,
        evaluateQ3A: this.props.module[0].tests.evaluation.questionThree.answer,
        evaluateQ3U: this.props.module[0].tests.evaluation.questionThree.used,
        evaluateQ4Q: this.props.module[0].tests.evaluation.questionFour
          .question,
        evaluateQ4F1: this.props.module[0].tests.evaluation.questionFour
          .firstOption,
        evaluateQ4F2: this.props.module[0].tests.evaluation.questionFour
          .secondOption,
        evaluateQ4F3: this.props.module[0].tests.evaluation.questionFour
          .thirdOption,
        evaluateQ4F4: this.props.module[0].tests.evaluation.questionFour
          .fourthOption,
        evaluateQ4A: this.props.module[0].tests.evaluation.questionFour.answer,
        evaluateQ4U: this.props.module[0].tests.evaluation.questionFour.used,
        evaluateQ5Q: this.props.module[0].tests.evaluation.questionFive
          .question,
        evaluateQ5F1: this.props.module[0].tests.evaluation.questionFive
          .firstOption,
        evaluateQ5F2: this.props.module[0].tests.evaluation.questionFive
          .secondOption,
        evaluateQ5F3: this.props.module[0].tests.evaluation.questionFive
          .thirdOption,
        evaluateQ5F4: this.props.module[0].tests.evaluation.questionFive
          .fourthOption,
        evaluateQ5A: this.props.module[0].tests.evaluation.questionFive.answer,
        evaluateQ5U: this.props.module[0].tests.evaluation.questionFive.used,
        evaluateQ6Q: this.props.module[0].tests.evaluation.questionSix.question,
        evaluateQ6F1: this.props.module[0].tests.evaluation.questionSix
          .firstOption,
        evaluateQ6F2: this.props.module[0].tests.evaluation.questionSix
          .secondOption,
        evaluateQ6F3: this.props.module[0].tests.evaluation.questionSix
          .thirdOption,
        evaluateQ6F4: this.props.module[0].tests.evaluation.questionSix
          .fourthOption,
        evaluateQ6A: this.props.module[0].tests.evaluation.questionSix.answer,
        evaluateQ6U: this.props.module[0].tests.evaluation.questionSix.used,
        evaluateQ7Q: this.props.module[0].tests.evaluation.questionSeven
          .question,
        evaluateQ7F1: this.props.module[0].tests.evaluation.questionSeven
          .firstOption,
        evaluateQ7F2: this.props.module[0].tests.evaluation.questionSeven
          .secondOption,
        evaluateQ7F3: this.props.module[0].tests.evaluation.questionSeven
          .thirdOption,
        evaluateQ7F4: this.props.module[0].tests.evaluation.questionSeven
          .fourthOption,
        evaluateQ7A: this.props.module[0].tests.evaluation.questionSeven.answer,
        evaluateQ7U: this.props.module[0].tests.evaluation.questionSeven.used,
        evaluateQ8Q: this.props.module[0].tests.evaluation.questionEight
          .question,
        evaluateQ8F1: this.props.module[0].tests.evaluation.questionEight
          .firstOption,
        evaluateQ8F2: this.props.module[0].tests.evaluation.questionEight
          .secondOption,
        evaluateQ8F3: this.props.module[0].tests.evaluation.questionEight
          .thirdOption,
        evaluateQ8F4: this.props.module[0].tests.evaluation.questionEight
          .fourthOption,
        evaluateQ8A: this.props.module[0].tests.evaluation.questionEight.answer,
        evaluateQ8U: this.props.module[0].tests.evaluation.questionEight.used,
        evaluateQ9Q: this.props.module[0].tests.evaluation.questionNine
          .question,
        evaluateQ9F1: this.props.module[0].tests.evaluation.questionNine
          .firstOption,
        evaluateQ9F2: this.props.module[0].tests.evaluation.questionNine
          .secondOption,
        evaluateQ9F3: this.props.module[0].tests.evaluation.questionNine
          .thirdOption,
        evaluateQ9F4: this.props.module[0].tests.evaluation.questionNine
          .fourthOption,
        evaluateQ9A: this.props.module[0].tests.evaluation.questionNine.answer,
        evaluateQ9U: this.props.module[0].tests.evaluation.questionNine.used,
        evaluateQ10Q: this.props.module[0].tests.evaluation.questionTen
          .question,
        evaluateQ10F1: this.props.module[0].tests.evaluation.questionTen
          .firstOption,
        evaluateQ10F2: this.props.module[0].tests.evaluation.questionTen
          .secondOption,
        evaluateQ10F3: this.props.module[0].tests.evaluation.questionTen
          .thirdOption,
        evaluateQ10F4: this.props.module[0].tests.evaluation.questionTen
          .fourthOption,
        evaluateQ10A: this.props.module[0].tests.evaluation.questionTen.answer,
        evaluateQ10U: this.props.module[0].tests.evaluation.questionTen.used,
        evaluateQ11Q: this.props.module[0].tests.evaluation.questionEleven
          .question,
        evaluateQ11F1: this.props.module[0].tests.evaluation.questionEleven
          .firstOption,
        evaluateQ11F2: this.props.module[0].tests.evaluation.questionEleven
          .secondOption,
        evaluateQ11F3: this.props.module[0].tests.evaluation.questionEleven
          .thirdOption,
        evaluateQ11F4: this.props.module[0].tests.evaluation.questionEleven
          .fourthOption,
        evaluateQ11A: this.props.module[0].tests.evaluation.questionEleven
          .answer,
        evaluateQ11U: this.props.module[0].tests.evaluation.questionEleven.used,
        evaluateQ12Q: this.props.module[0].tests.evaluation.questionTwelve
          .question,
        evaluateQ12F1: this.props.module[0].tests.evaluation.questionTwelve
          .firstOption,
        evaluateQ12F2: this.props.module[0].tests.evaluation.questionTwelve
          .secondOption,
        evaluateQ12F3: this.props.module[0].tests.evaluation.questionTwelve
          .thirdOption,
        evaluateQ12F4: this.props.module[0].tests.evaluation.questionTwelve
          .fourthOption,
        evaluateQ12A: this.props.module[0].tests.evaluation.questionTwelve
          .answer,
        evaluateQ12U: this.props.module[0].tests.evaluation.questionTwelve.used,
        evaluateQ13Q: this.props.module[0].tests.evaluation.questionThirteen
          .question,
        evaluateQ13F1: this.props.module[0].tests.evaluation.questionThirteen
          .firstOption,
        evaluateQ13F2: this.props.module[0].tests.evaluation.questionThirteen
          .secondOption,
        evaluateQ13F3: this.props.module[0].tests.evaluation.questionThirteen
          .thirdOption,
        evaluateQ13F4: this.props.module[0].tests.evaluation.questionThirteen
          .fourthOption,
        evaluateQ13A: this.props.module[0].tests.evaluation.questionThirteen
          .answer,
        evaluateQ13U: this.props.module[0].tests.evaluation.questionThirteen
          .used,
        evaluateQ14Q: this.props.module[0].tests.evaluation.questionFourteen
          .question,
        evaluateQ14F1: this.props.module[0].tests.evaluation.questionFourteen
          .firstOption,
        evaluateQ14F2: this.props.module[0].tests.evaluation.questionFourteen
          .secondOption,
        evaluateQ14F3: this.props.module[0].tests.evaluation.questionFourteen
          .thirdOption,
        evaluateQ14F4: this.props.module[0].tests.evaluation.questionFourteen
          .fourthOption,
        evaluateQ14A: this.props.module[0].tests.evaluation.questionFourteen
          .answer,
        evaluateQ14U: this.props.module[0].tests.evaluation.questionFourteen
          .used,
        evaluateQ15Q: this.props.module[0].tests.evaluation.questionFifteen
          .question,
        evaluateQ15F1: this.props.module[0].tests.evaluation.questionFifteen
          .firstOption,
        evaluateQ15F2: this.props.module[0].tests.evaluation.questionFifteen
          .secondOption,
        evaluateQ15F3: this.props.module[0].tests.evaluation.questionFifteen
          .thirdOption,
        evaluateQ15F4: this.props.module[0].tests.evaluation.questionFifteen
          .fourthOption,
        evaluateQ15A: this.props.module[0].tests.evaluation.questionFifteen
          .answer,
        evaluateQ15U: this.props.module[0].tests.evaluation.questionFifteen
          .used,
        evaluateQ16Q: this.props.module[0].tests.evaluation.questionSixteen
          .question,
        evaluateQ16F1: this.props.module[0].tests.evaluation.questionSixteen
          .firstOption,
        evaluateQ16F2: this.props.module[0].tests.evaluation.questionSixteen
          .secondOption,
        evaluateQ16F3: this.props.module[0].tests.evaluation.questionSixteen
          .thirdOption,
        evaluateQ16F4: this.props.module[0].tests.evaluation.questionSixteen
          .fourthOption,
        evaluateQ16A: this.props.module[0].tests.evaluation.questionSixteen
          .answer,
        evaluateQ16U: this.props.module[0].tests.evaluation.questionSixteen
          .used,
        evaluateQ17Q: this.props.module[0].tests.evaluation.questionSeventeen
          .question,
        evaluateQ17F1: this.props.module[0].tests.evaluation.questionSeventeen
          .firstOption,
        evaluateQ17F2: this.props.module[0].tests.evaluation.questionSeventeen
          .secondOption,
        evaluateQ17F3: this.props.module[0].tests.evaluation.questionSeventeen
          .thirdOption,
        evaluateQ17F4: this.props.module[0].tests.evaluation.questionSeventeen
          .fourthOption,
        evaluateQ17A: this.props.module[0].tests.evaluation.questionSeventeen
          .answer,
        evaluateQ17U: this.props.module[0].tests.evaluation.questionSeventeen
          .used,
        evaluateQ18Q: this.props.module[0].tests.evaluation.questionEighteen
          .question,
        evaluateQ18F1: this.props.module[0].tests.evaluation.questionEighteen
          .firstOption,
        evaluateQ18F2: this.props.module[0].tests.evaluation.questionEighteen
          .secondOption,
        evaluateQ18F3: this.props.module[0].tests.evaluation.questionEighteen
          .thirdOption,
        evaluateQ18F4: this.props.module[0].tests.evaluation.questionEighteen
          .fourthOption,
        evaluateQ18A: this.props.module[0].tests.evaluation.questionEighteen
          .answer,
        evaluateQ18U: this.props.module[0].tests.evaluation.questionEighteen
          .used,
        evaluateQ19Q: this.props.module[0].tests.evaluation.questionNineteen
          .question,
        evaluateQ19F1: this.props.module[0].tests.evaluation.questionNineteen
          .firstOption,
        evaluateQ19F2: this.props.module[0].tests.evaluation.questionNineteen
          .secondOption,
        evaluateQ19F3: this.props.module[0].tests.evaluation.questionNineteen
          .thirdOption,
        evaluateQ19F4: this.props.module[0].tests.evaluation.questionNineteen
          .fourthOption,
        evaluateQ19A: this.props.module[0].tests.evaluation.questionNineteen
          .answer,
        evaluateQ19U: this.props.module[0].tests.evaluation.questionNineteen
          .used,
        evaluateQ20Q: this.props.module[0].tests.evaluation.questionTwenty
          .question,
        evaluateQ20F1: this.props.module[0].tests.evaluation.questionTwenty
          .firstOption,
        evaluateQ20F2: this.props.module[0].tests.evaluation.questionTwenty
          .secondOption,
        evaluateQ20F3: this.props.module[0].tests.evaluation.questionTwenty
          .thirdOption,
        evaluateQ20F4: this.props.module[0].tests.evaluation.questionTwenty
          .fourthOption,
        evaluateQ20A: this.props.module[0].tests.evaluation.questionTwenty
          .answer,
        evaluateQ20U: this.props.module[0].tests.evaluation.questionTwenty.used,
        evaluateQ21Q: this.props.module[0].tests.evaluation.questionTwentyOne
          .question,
        evaluateQ21F1: this.props.module[0].tests.evaluation.questionTwentyOne
          .firstOption,
        evaluateQ21F2: this.props.module[0].tests.evaluation.questionTwentyOne
          .secondOption,
        evaluateQ21F3: this.props.module[0].tests.evaluation.questionTwentyOne
          .thirdOption,
        evaluateQ21F4: this.props.module[0].tests.evaluation.questionTwentyOne
          .fourthOption,
        evaluateQ21A: this.props.module[0].tests.evaluation.questionTwentyOne
          .answer,
        evaluateQ21U: this.props.module[0].tests.evaluation.questionTwentyOne
          .used,
        evaluateQ22Q: this.props.module[0].tests.evaluation.questionTwentyTwo
          .question,
        evaluateQ22F1: this.props.module[0].tests.evaluation.questionTwentyTwo
          .firstOption,
        evaluateQ22F2: this.props.module[0].tests.evaluation.questionTwentyTwo
          .secondOption,
        evaluateQ22F3: this.props.module[0].tests.evaluation.questionTwentyTwo
          .thirdOption,
        evaluateQ22F4: this.props.module[0].tests.evaluation.questionTwentyTwo
          .fourthOption,
        evaluateQ22A: this.props.module[0].tests.evaluation.questionTwentyTwo
          .answer,
        evaluateQ22U: this.props.module[0].tests.evaluation.questionTwentyTwo
          .used,
        evaluateQ23Q: this.props.module[0].tests.evaluation.questionTwentyThree
          .question,
        evaluateQ23F1: this.props.module[0].tests.evaluation.questionTwentyThree
          .firstOption,
        evaluateQ23F2: this.props.module[0].tests.evaluation.questionTwentyThree
          .secondOption,
        evaluateQ23F3: this.props.module[0].tests.evaluation.questionTwentyThree
          .thirdOption,
        evaluateQ23F4: this.props.module[0].tests.evaluation.questionTwentyThree
          .fourthOption,
        evaluateQ23A: this.props.module[0].tests.evaluation.questionTwentyThree
          .answer,
        evaluateQ23U: this.props.module[0].tests.evaluation.questionTwentyThree
          .used,
        evaluateQ24Q: this.props.module[0].tests.evaluation.questionTwentyFour
          .question,
        evaluateQ24F1: this.props.module[0].tests.evaluation.questionTwentyFour
          .firstOption,
        evaluateQ24F2: this.props.module[0].tests.evaluation.questionTwentyFour
          .secondOption,
        evaluateQ24F3: this.props.module[0].tests.evaluation.questionTwentyFour
          .thirdOption,
        evaluateQ24F4: this.props.module[0].tests.evaluation.questionTwentyFour
          .fourthOption,
        evaluateQ24A: this.props.module[0].tests.evaluation.questionTwentyFour
          .answer,
        evaluateQ24U: this.props.module[0].tests.evaluation.questionTwentyFour
          .used,
        evaluateQ25Q: this.props.module[0].tests.evaluation.questionTwentyFive
          .question,
        evaluateQ25F1: this.props.module[0].tests.evaluation.questionTwentyFive
          .firstOption,
        evaluateQ25F2: this.props.module[0].tests.evaluation.questionTwentyFive
          .secondOption,
        evaluateQ25F3: this.props.module[0].tests.evaluation.questionTwentyFive
          .thirdOption,
        evaluateQ25F4: this.props.module[0].tests.evaluation.questionTwentyFive
          .fourthOption,
        evaluateQ25A: this.props.module[0].tests.evaluation.questionTwentyFive
          .answer,
        evaluateQ25U: this.props.module[0].tests.evaluation.questionTwentyFive
          .used,
        evaluateQ26Q: this.props.module[0].tests.evaluation.questionTwentySix
          .question,
        evaluateQ26F1: this.props.module[0].tests.evaluation.questionTwentySix
          .firstOption,
        evaluateQ26F2: this.props.module[0].tests.evaluation.questionTwentySix
          .secondOption,
        evaluateQ26F3: this.props.module[0].tests.evaluation.questionTwentySix
          .thirdOption,
        evaluateQ26F4: this.props.module[0].tests.evaluation.questionTwentySix
          .fourthOption,
        evaluateQ26A: this.props.module[0].tests.evaluation.questionTwentySix
          .answer,
        evaluateQ26U: this.props.module[0].tests.evaluation.questionTwentySix
          .used,
        evaluateQ27Q: this.props.module[0].tests.evaluation.questionTwentySeven
          .question,
        evaluateQ27F1: this.props.module[0].tests.evaluation.questionTwentySeven
          .firstOption,
        evaluateQ27F2: this.props.module[0].tests.evaluation.questionTwentySeven
          .secondOption,
        evaluateQ27F3: this.props.module[0].tests.evaluation.questionTwentySeven
          .thirdOption,
        evaluateQ27F4: this.props.module[0].tests.evaluation.questionTwentySeven
          .fourthOption,
        evaluateQ27A: this.props.module[0].tests.evaluation.questionTwentySeven
          .answer,
        evaluateQ27U: this.props.module[0].tests.evaluation.questionTwentySeven
          .used,
        evaluateQ28Q: this.props.module[0].tests.evaluation.questionTwentyEight
          .question,
        evaluateQ28F1: this.props.module[0].tests.evaluation.questionTwentyEight
          .firstOption,
        evaluateQ28F2: this.props.module[0].tests.evaluation.questionTwentyEight
          .secondOption,
        evaluateQ28F3: this.props.module[0].tests.evaluation.questionTwentyEight
          .thirdOption,
        evaluateQ28F4: this.props.module[0].tests.evaluation.questionTwentyEight
          .fourthOption,
        evaluateQ28A: this.props.module[0].tests.evaluation.questionTwentyEight
          .answer,
        evaluateQ28U: this.props.module[0].tests.evaluation.questionTwentyEight
          .used,
        evaluateQ29Q: this.props.module[0].tests.evaluation.questionTwentyNine
          .question,
        evaluateQ29F1: this.props.module[0].tests.evaluation.questionTwentyNine
          .firstOption,
        evaluateQ29F2: this.props.module[0].tests.evaluation.questionTwentyNine
          .secondOption,
        evaluateQ29F3: this.props.module[0].tests.evaluation.questionTwentyNine
          .thirdOption,
        evaluateQ29F4: this.props.module[0].tests.evaluation.questionTwentyNine
          .fourthOption,
        evaluateQ29A: this.props.module[0].tests.evaluation.questionTwentyNine
          .answer,
        evaluateQ29U: this.props.module[0].tests.evaluation.questionTwentyNine
          .used,
        evaluateQ30Q: this.props.module[0].tests.evaluation.questionThirteen
          .question,
        evaluateQ30F1: this.props.module[0].tests.evaluation.questionThirteen
          .firstOption,
        evaluateQ30F2: this.props.module[0].tests.evaluation.questionThirteen
          .secondOption,
        evaluateQ30F3: this.props.module[0].tests.evaluation.questionThirteen
          .thirdOption,
        evaluateQ30F4: this.props.module[0].tests.evaluation.questionThirteen
          .fourthOption,
        evaluateQ30A: this.props.module[0].tests.evaluation.questionThirteen
          .answer,
        evaluateQ30U: this.props.module[0].tests.evaluation.questionThirteen
          .used,
        evaluateTime: this.props.module[0].tests.evaluation.time,
        apQ1Q: this.props.module[0].tests.assessprevious.questionOne.question,
        apQ1F1: this.props.module[0].tests.assessprevious.questionOne
          .firstOption,
        apQ1F2: this.props.module[0].tests.assessprevious.questionOne
          .secondOption,
        apQ1F3: this.props.module[0].tests.assessprevious.questionOne
          .thirdOption,
        apQ1F4: this.props.module[0].tests.assessprevious.questionOne
          .fourthOption,
        apQ1A: this.props.module[0].tests.assessprevious.questionOne.answer,
        apQ1U: this.props.module[0].tests.assessprevious.questionOne.used,
        apQ2Q: this.props.module[0].tests.assessprevious.questionTwo.question,
        apQ2F1: this.props.module[0].tests.assessprevious.questionTwo
          .firstOption,
        apQ2F2: this.props.module[0].tests.assessprevious.questionTwo
          .secondOption,
        apQ2F3: this.props.module[0].tests.assessprevious.questionTwo
          .thirdOption,
        apQ2F4: this.props.module[0].tests.assessprevious.questionTwo
          .fourthOption,
        apQ2A: this.props.module[0].tests.assessprevious.questionTwo.answer,
        apQ2U: this.props.module[0].tests.assessprevious.questionTwo.used,
        apQ3Q: this.props.module[0].tests.assessprevious.questionThree.question,
        apQ3F1: this.props.module[0].tests.assessprevious.questionThree
          .firstOption,
        apQ3F2: this.props.module[0].tests.assessprevious.questionThree
          .secondOption,
        apQ3F3: this.props.module[0].tests.assessprevious.questionThree
          .thirdOption,
        apQ3F4: this.props.module[0].tests.assessprevious.questionThree
          .fourthOption,
        apQ3A: this.props.module[0].tests.assessprevious.questionThree.answer,
        apQ3U: this.props.module[0].tests.assessprevious.questionThree.used,
        apQ4Q: this.props.module[0].tests.assessprevious.questionFour.question,
        apQ4F1: this.props.module[0].tests.assessprevious.questionFour
          .firstOption,
        apQ4F2: this.props.module[0].tests.assessprevious.questionFour
          .secondOption,
        apQ4F3: this.props.module[0].tests.assessprevious.questionFour
          .thirdOption,
        apQ4F4: this.props.module[0].tests.assessprevious.questionFour
          .fourthOption,
        apQ4A: this.props.module[0].tests.assessprevious.questionFour.answer,
        apQ4U: this.props.module[0].tests.assessprevious.questionFour.used,
        apQ5Q: this.props.module[0].tests.assessprevious.questionFive.question,
        apQ5F1: this.props.module[0].tests.assessprevious.questionFive
          .firstOption,
        apQ5F2: this.props.module[0].tests.assessprevious.questionFive
          .secondOption,
        apQ5F3: this.props.module[0].tests.assessprevious.questionFive
          .thirdOption,
        apQ5F4: this.props.module[0].tests.assessprevious.questionFive
          .fourthOption,
        apQ5A: this.props.module[0].tests.assessprevious.questionFive.answer,
        apQ5U: this.props.module[0].tests.assessprevious.questionFive.used,
        apQ6Q: this.props.module[0].tests.assessprevious.questionSix.question,
        apQ6F1: this.props.module[0].tests.assessprevious.questionSix
          .firstOption,
        apQ6F2: this.props.module[0].tests.assessprevious.questionSix
          .secondOption,
        apQ6F3: this.props.module[0].tests.assessprevious.questionSix
          .thirdOption,
        apQ6F4: this.props.module[0].tests.assessprevious.questionSix
          .fourthOption,
        apQ6A: this.props.module[0].tests.assessprevious.questionSix.answer,
        apQ6U: this.props.module[0].tests.assessprevious.questionSix.used,
        apQ7Q: this.props.module[0].tests.assessprevious.questionSeven.question,
        apQ7F1: this.props.module[0].tests.assessprevious.questionSeven
          .firstOption,
        apQ7F2: this.props.module[0].tests.assessprevious.questionSeven
          .secondOption,
        apQ7F3: this.props.module[0].tests.assessprevious.questionSeven
          .thirdOption,
        apQ7F4: this.props.module[0].tests.assessprevious.questionSeven
          .fourthOption,
        apQ7A: this.props.module[0].tests.assessprevious.questionSeven.answer,
        apQ7U: this.props.module[0].tests.assessprevious.questionSeven.used,
        apQ8Q: this.props.module[0].tests.assessprevious.questionEight.question,
        apQ8F1: this.props.module[0].tests.assessprevious.questionEight
          .firstOption,
        apQ8F2: this.props.module[0].tests.assessprevious.questionEight
          .secondOption,
        apQ8F3: this.props.module[0].tests.assessprevious.questionEight
          .thirdOption,
        apQ8F4: this.props.module[0].tests.assessprevious.questionEight
          .fourthOption,
        apQ8A: this.props.module[0].tests.assessprevious.questionEight.answer,
        apQ8U: this.props.module[0].tests.assessprevious.questionEight.used,
        apQ9Q: this.props.module[0].tests.assessprevious.questionNine.question,
        apQ9F1: this.props.module[0].tests.assessprevious.questionNine
          .firstOption,
        apQ9F2: this.props.module[0].tests.assessprevious.questionNine
          .secondOption,
        apQ9F3: this.props.module[0].tests.assessprevious.questionNine
          .thirdOption,
        apQ9F4: this.props.module[0].tests.assessprevious.questionNine
          .fourthOption,
        apQ9A: this.props.module[0].tests.assessprevious.questionNine.answer,
        apQ9U: this.props.module[0].tests.assessprevious.questionNine.used,
        apQ10Q: this.props.module[0].tests.assessprevious.questionTen.question,
        apQ10F1: this.props.module[0].tests.assessprevious.questionTen
          .firstOption,
        apQ10F2: this.props.module[0].tests.assessprevious.questionTen
          .secondOption,
        apeQ10F3: this.props.module[0].tests.assessprevious.questionTen
          .thirdOption,
        apQ10F4: this.props.module[0].tests.assessprevious.questionTen
          .fourthOption,
        apQ10A: this.props.module[0].tests.assessprevious.questionTen.answer,
        apQ10U: this.props.module[0].tests.assessprevious.questionTen.used,
        apQ11Q: this.props.module[0].tests.assessprevious.questionEleven
          .question,
        apQ11F1: this.props.module[0].tests.assessprevious.questionEleven
          .firstOption,
        apQ11F2: this.props.module[0].tests.assessprevious.questionEleven
          .secondOption,
        apQ11F3: this.props.module[0].tests.assessprevious.questionEleven
          .thirdOption,
        apQ11F4: this.props.module[0].tests.assessprevious.questionEleven
          .fourthOption,
        apQ11A: this.props.module[0].tests.assessprevious.questionEleven.answer,
        apQ11U: this.props.module[0].tests.assessprevious.questionEleven.used,
        apQ12Q: this.props.module[0].tests.assessprevious.questionTwelve
          .question,
        apQ12F1: this.props.module[0].tests.assessprevious.questionTwelve
          .firstOption,
        apQ12F2: this.props.module[0].tests.assessprevious.questionTwelve
          .secondOption,
        apQ12F3: this.props.module[0].tests.assessprevious.questionTwelve
          .thirdOption,
        apQ12F4: this.props.module[0].tests.assessprevious.questionTwelve
          .fourthOption,
        apQ12A: this.props.module[0].tests.assessprevious.questionTwelve.answer,
        apQ12U: this.props.module[0].tests.assessprevious.questionTwelve.used,
        apQ13Q: this.props.module[0].tests.assessprevious.questionThirteen
          .question,
        apQ13F1: this.props.module[0].tests.assessprevious.questionThirteen
          .firstOption,
        apQ13F2: this.props.module[0].tests.assessprevious.questionThirteen
          .secondOption,
        apQ13F3: this.props.module[0].tests.assessprevious.questionThirteen
          .thirdOption,
        apQ13F4: this.props.module[0].tests.assessprevious.questionThirteen
          .fourthOption,
        apQ13A: this.props.module[0].tests.assessprevious.questionThirteen
          .answer,
        apQ13U: this.props.module[0].tests.assessprevious.questionThirteen.used,
        apQ14Q: this.props.module[0].tests.assessprevious.questionFourteen
          .question,
        apQ14F1: this.props.module[0].tests.assessprevious.questionFourteen
          .firstOption,
        apQ14F2: this.props.module[0].tests.assessprevious.questionFourteen
          .secondOption,
        apQ14F3: this.props.module[0].tests.assessprevious.questionFourteen
          .thirdOption,
        apQ14F4: this.props.module[0].tests.assessprevious.questionFourteen
          .fourthOption,
        apQ14A: this.props.module[0].tests.assessprevious.questionFourteen
          .answer,
        apQ14U: this.props.module[0].tests.assessprevious.questionFourteen.used,
        apQ15Q: this.props.module[0].tests.assessprevious.questionFifteen
          .question,
        apQ15F1: this.props.module[0].tests.assessprevious.questionFifteen
          .firstOption,
        apQ15F2: this.props.module[0].tests.assessprevious.questionFifteen
          .secondOption,
        apQ15F3: this.props.module[0].tests.assessprevious.questionFifteen
          .thirdOption,
        apQ15F4: this.props.module[0].tests.assessprevious.questionFifteen
          .fourthOption,
        apQ15A: this.props.module[0].tests.assessprevious.questionFifteen
          .answer,
        apQ15U: this.props.module[0].tests.assessprevious.questionFifteen.used,
        apQ16Q: this.props.module[0].tests.assessprevious.questionSixteen
          .question,
        apQ16F1: this.props.module[0].tests.assessprevious.questionSixteen
          .firstOption,
        apQ16F2: this.props.module[0].tests.assessprevious.questionSixteen
          .secondOption,
        apQ16F3: this.props.module[0].tests.assessprevious.questionSixteen
          .thirdOption,
        apQ16F4: this.props.module[0].tests.assessprevious.questionSixteen
          .fourthOption,
        apQ16A: this.props.module[0].tests.assessprevious.questionSixteen
          .answer,
        apQ16U: this.props.module[0].tests.assessprevious.questionSixteen.used,
        apQ17Q: this.props.module[0].tests.assessprevious.questionSeventeen
          .question,
        apQ17F1: this.props.module[0].tests.assessprevious.questionSeventeen
          .firstOption,
        apQ17F2: this.props.module[0].tests.assessprevious.questionSeventeen
          .secondOption,
        apQ17F3: this.props.module[0].tests.assessprevious.questionSeventeen
          .thirdOption,
        apQ17F4: this.props.module[0].tests.assessprevious.questionSeventeen
          .fourthOption,
        apQ17A: this.props.module[0].tests.assessprevious.questionSeventeen
          .answer,
        apQ17U: this.props.module[0].tests.assessprevious.questionSeventeen
          .used,
        apQ18Q: this.props.module[0].tests.assessprevious.questionEighteen
          .question,
        apQ18F1: this.props.module[0].tests.assessprevious.questionEighteen
          .firstOption,
        apQ18F2: this.props.module[0].tests.assessprevious.questionEighteen
          .secondOption,
        apQ18F3: this.props.module[0].tests.assessprevious.questionEighteen
          .thirdOption,
        apQ18F4: this.props.module[0].tests.assessprevious.questionEighteen
          .fourthOption,
        apQ18A: this.props.module[0].tests.assessprevious.questionEighteen
          .answer,
        apQ18U: this.props.module[0].tests.assessprevious.questionEighteen.used,
        apQ19Q: this.props.module[0].tests.assessprevious.questionNineteen
          .question,
        apQ19F1: this.props.module[0].tests.assessprevious.questionNineteen
          .firstOption,
        apQ19F2: this.props.module[0].tests.assessprevious.questionNineteen
          .secondOption,
        apQ19F3: this.props.module[0].tests.assessprevious.questionNineteen
          .thirdOption,
        apQ19F4: this.props.module[0].tests.assessprevious.questionNineteen
          .fourthOption,
        apQ19A: this.props.module[0].tests.assessprevious.questionNineteen
          .answer,
        apQ19U: this.props.module[0].tests.assessprevious.questionNineteen.used,
        apQ20Q: this.props.module[0].tests.assessprevious.questionTwenty
          .question,
        apQ20F1: this.props.module[0].tests.assessprevious.questionTwenty
          .firstOption,
        apQ20F2: this.props.module[0].tests.assessprevious.questionTwenty
          .secondOption,
        apQ20F3: this.props.module[0].tests.assessprevious.questionTwenty
          .thirdOption,
        apQ20F4: this.props.module[0].tests.assessprevious.questionTwenty
          .fourthOption,
        apQ20A: this.props.module[0].tests.assessprevious.questionTwenty.answer,
        apQ20U: this.props.module[0].tests.assessprevious.questionTwenty.used,
        apQ21Q: this.props.module[0].tests.assessprevious.questionTwentyOne
          .question,
        apQ21F1: this.props.module[0].tests.assessprevious.questionTwentyOne
          .firstOption,
        apQ21F2: this.props.module[0].tests.assessprevious.questionTwentyOne
          .secondOption,
        apQ21F3: this.props.module[0].tests.assessprevious.questionTwentyOne
          .thirdOption,
        apQ21F4: this.props.module[0].tests.assessprevious.questionTwentyOne
          .fourthOption,
        apQ21A: this.props.module[0].tests.assessprevious.questionTwentyOne
          .answer,
        apQ21U: this.props.module[0].tests.assessprevious.questionTwentyOne
          .used,
        apQ22Q: this.props.module[0].tests.assessprevious.questionTwentyTwo
          .question,
        apQ22F1: this.props.module[0].tests.assessprevious.questionTwentyTwo
          .firstOption,
        apQ22F2: this.props.module[0].tests.assessprevious.questionTwentyTwo
          .secondOption,
        apQ22F3: this.props.module[0].tests.assessprevious.questionTwentyTwo
          .thirdOption,
        apQ22F4: this.props.module[0].tests.assessprevious.questionTwentyTwo
          .fourthOption,
        apQ22A: this.props.module[0].tests.assessprevious.questionTwentyTwo
          .answer,
        apQ22U: this.props.module[0].tests.assessprevious.questionTwentyTwo
          .used,
        apQ23Q: this.props.module[0].tests.assessprevious.questionTwentyThree
          .question,
        apQ23F1: this.props.module[0].tests.assessprevious.questionTwentyThree
          .firstOption,
        apQ23F2: this.props.module[0].tests.assessprevious.questionTwentyThree
          .secondOption,
        apQ23F3: this.props.module[0].tests.assessprevious.questionTwentyThree
          .thirdOption,
        apQ23F4: this.props.module[0].tests.assessprevious.questionTwentyThree
          .fourthOption,
        apQ23A: this.props.module[0].tests.assessprevious.questionTwentyThree
          .answer,
        apQ23U: this.props.module[0].tests.assessprevious.questionTwentyThree
          .used,
        apQ24Q: this.props.module[0].tests.assessprevious.questionTwentyFour
          .question,
        apQ24F1: this.props.module[0].tests.assessprevious.questionTwentyFour
          .firstOption,
        apQ24F2: this.props.module[0].tests.assessprevious.questionTwentyFour
          .secondOption,
        apQ24F3: this.props.module[0].tests.assessprevious.questionTwentyFour
          .thirdOption,
        apQ24F4: this.props.module[0].tests.assessprevious.questionTwentyFour
          .fourthOption,
        apQ24A: this.props.module[0].tests.assessprevious.questionTwentyFour
          .answer,
        apQ24U: this.props.module[0].tests.assessprevious.questionTwentyFour
          .used,
        apQ25Q: this.props.module[0].tests.assessprevious.questionTwentyFive
          .question,
        apQ25F1: this.props.module[0].tests.assessprevious.questionTwentyFive
          .firstOption,
        apQ25F2: this.props.module[0].tests.assessprevious.questionTwentyFive
          .secondOption,
        apQ25F3: this.props.module[0].tests.assessprevious.questionTwentyFive
          .thirdOption,
        apQ25F4: this.props.module[0].tests.assessprevious.questionTwentyFive
          .fourthOption,
        apQ25A: this.props.module[0].tests.assessprevious.questionTwentyFive
          .answer,
        apQ25U: this.props.module[0].tests.assessprevious.questionTwentyFive
          .used,
        apQ26Q: this.props.module[0].tests.assessprevious.questionTwentySix
          .question,
        apQ26F1: this.props.module[0].tests.assessprevious.questionTwentySix
          .firstOption,
        apQ26F2: this.props.module[0].tests.assessprevious.questionTwentySix
          .secondOption,
        apQ26F3: this.props.module[0].tests.assessprevious.questionTwentySix
          .thirdOption,
        apQ26F4: this.props.module[0].tests.assessprevious.questionTwentySix
          .fourthOption,
        apQ26A: this.props.module[0].tests.assessprevious.questionTwentySix
          .answer,
        apQ26U: this.props.module[0].tests.assessprevious.questionTwentySix
          .used,
        apQ27Q: this.props.module[0].tests.assessprevious.questionTwentySeven
          .question,
        apQ27F1: this.props.module[0].tests.assessprevious.questionTwentySeven
          .firstOption,
        apQ27F2: this.props.module[0].tests.assessprevious.questionTwentySeven
          .secondOption,
        apQ27F3: this.props.module[0].tests.assessprevious.questionTwentySeven
          .thirdOption,
        apQ27F4: this.props.module[0].tests.assessprevious.questionTwentySeven
          .fourthOption,
        apQ27A: this.props.module[0].tests.assessprevious.questionTwentySeven
          .answer,
        apQ27U: this.props.module[0].tests.assessprevious.questionTwentySeven
          .used,
        apQ28Q: this.props.module[0].tests.assessprevious.questionTwentyEight
          .question,
        apQ28F1: this.props.module[0].tests.assessprevious.questionTwentyEight
          .firstOption,
        apQ28F2: this.props.module[0].tests.assessprevious.questionTwentyEight
          .secondOption,
        apQ28F3: this.props.module[0].tests.assessprevious.questionTwentyEight
          .thirdOption,
        apQ28F4: this.props.module[0].tests.assessprevious.questionTwentyEight
          .fourthOption,
        apQ28A: this.props.module[0].tests.assessprevious.questionTwentyEight
          .answer,
        apQ28U: this.props.module[0].tests.assessprevious.questionTwentyEight
          .used,
        apQ29Q: this.props.module[0].tests.assessprevious.questionTwentyNine
          .question,
        apQ29F1: this.props.module[0].tests.assessprevious.questionTwentyNine
          .firstOption,
        apQ29F2: this.props.module[0].tests.assessprevious.questionTwentyNine
          .secondOption,
        apQ29F3: this.props.module[0].tests.assessprevious.questionTwentyNine
          .thirdOption,
        apQ29F4: this.props.module[0].tests.assessprevious.questionTwentyNine
          .fourthOption,
        apQ29A: this.props.module[0].tests.assessprevious.questionTwentyNine
          .answer,
        apQ29U: this.props.module[0].tests.assessprevious.questionTwentyNine
          .used,
        apQ30Q: this.props.module[0].tests.assessprevious.questionThirteen
          .question,
        apQ30F1: this.props.module[0].tests.assessprevious.questionThirteen
          .firstOption,
        apQ30F2: this.props.module[0].tests.assessprevious.questionThirteen
          .secondOption,
        apQ30F3: this.props.module[0].tests.assessprevious.questionThirteen
          .thirdOption,
        apQ30F4: this.props.module[0].tests.assessprevious.questionThirteen
          .fourthOption,
        apQ30A: this.props.module[0].tests.assessprevious.questionThirteen
          .answer,
        apQ30U: this.props.module[0].tests.assessprevious.questionThirteen.used,
        apTime: this.props.module[0].tests.assessprevious.time,
      });
    }
  }

  handleUpdateModule = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.updateModule(this.state);
    this.props.history.push("/teachermodules");
  };

  render() {
    const { classes, module } = this.props;
    if (module != null && this.state.moduleName != undefined) {
      console.log(this.state);
      return (
        <div>
          <MainContainer className={classes.root}>
            <TeacherCenteredTabs tabNumber={0} />
            <SubContainer>
              <Paper>
                <div style={{ margin: "auto", padding: "40px" }}>
                  <Typography color="secondary" style={{ marginLeft: "8px" }}>
                    {" "}
                    <Box fontWeight="medium" fontSize="20px">
                      {" "}
                      General Info
                    </Box>
                  </Typography>
                  <FirstPartFormPropsTextFields
                    moduleName={this.state.moduleName}
                    numberOfHours={this.state.numberOfHours}
                    numberOfLessons={this.state.numberOfLessons}
                    moduleInfo={this.state.moduleInfo}
                    handleChange={this.handleChange}
                  />
                </div>

                <div style={{ margin: "auto", padding: "40px" }}>
                  <Typography color="secondary" style={{ marginLeft: "8px" }}>
                    <Box fontWeight="medium" fontSize="20px">
                      {" "}
                      Lesson Links
                    </Box>
                  </Typography>
                  <SecondPartFormPropsTextFields
                    slideLink={this.state.slideLink}
                    audioLink={this.state.audioLink}
                    videoLink={this.state.videoLink}
                    documentLink={this.state.documentLink}
                    handleChange={this.handleChange}
                  />
                </div>

                <div style={{ margin: "auto", padding: "40px" }}>
                  <Typography color="secondary" style={{ marginLeft: "8px" }}>
                    <Box fontWeight="medium" fontSize="20px">
                      MCQ Questions for Easy Level
                    </Box>
                  </Typography>
                  <QuestionTemplate
                    questionNumber={"easyQ1Q"}
                    firstOptionNumber={"easyQ1F1"}
                    secondOptionNumber={"easyQ1F2"}
                    thirdOptionNumber={"easyQ1F3"}
                    fourthOptionNumber={"easyQ1F4"}
                    answerNumber={"easyQ1A"}
                    question={this.state.easyQ1Q}
                    firstOption={this.state.easyQ1F1}
                    secondOption={this.state.easyQ1F2}
                    thirdOption={this.state.easyQ1F3}
                    fourthOption={this.state.easyQ1F4}
                    answer={this.state.easyQ1A}
                    used={this.state.easyQ1U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteEasyQuestion}
                  />

                  <QuestionTemplate
                    questionNumber={"easyQ2Q"}
                    firstOptionNumber={"easyQ2F1"}
                    secondOptionNumber={"easyQ2F2"}
                    thirdOptionNumber={"easyQ2F3"}
                    fourthOptionNumber={"easyQ2F4"}
                    answerNumber={"easyQ2A"}
                    question={this.state.easyQ2Q}
                    firstOption={this.state.easyQ2F1}
                    secondOption={this.state.easyQ2F2}
                    thirdOption={this.state.easyQ2F3}
                    fourthOption={this.state.easyQ2F4}
                    answer={this.state.easyQ2A}
                    used={this.state.easyQ2U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteEasyQuestion}
                  />

                  <QuestionTemplate
                    questionNumber={"easyQ3Q"}
                    firstOptionNumber={"easyQ3F1"}
                    secondOptionNumber={"easyQ3F2"}
                    thirdOptionNumber={"easyQ3F3"}
                    fourthOptionNumber={"easyQ3F4"}
                    answerNumber={"easyQ3A"}
                    question={this.state.easyQ3Q}
                    firstOption={this.state.easyQ3F1}
                    secondOption={this.state.easyQ3F2}
                    thirdOption={this.state.easyQ3F3}
                    fourthOption={this.state.easyQ3F4}
                    answer={this.state.easyQ3A}
                    used={this.state.easyQ3U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteEasyQuestion}
                  />
                  <QuestionTemplate
                    questionNumber={"easyQ4Q"}
                    firstOptionNumber={"easyQ4F1"}
                    secondOptionNumber={"easyQ4F2"}
                    thirdOptionNumber={"easyQ4F3"}
                    fourthOptionNumber={"easyQ4F4"}
                    answerNumber={"easyQ4A"}
                    question={this.state.easyQ4Q}
                    firstOption={this.state.easyQ4F1}
                    secondOption={this.state.easyQ4F2}
                    thirdOption={this.state.easyQ4F3}
                    fourthOption={this.state.easyQ4F4}
                    answer={this.state.easyQ4A}
                    used={this.state.easyQ4U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteEasyQuestion}
                  />
                  <QuestionTemplate
                    questionNumber={"easyQ5Q"}
                    firstOptionNumber={"easyQ5F1"}
                    secondOptionNumber={"easyQ5F2"}
                    thirdOptionNumber={"easyQ5F3"}
                    fourthOptionNumber={"easyQ5F4"}
                    answerNumber={"easyQ5A"}
                    question={this.state.easyQ5Q}
                    firstOption={this.state.easyQ5F1}
                    secondOption={this.state.easyQ5F2}
                    thirdOption={this.state.easyQ5F3}
                    fourthOption={this.state.easyQ5F4}
                    answer={this.state.easyQ5A}
                    used={this.state.easyQ5U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteEasyQuestion}
                  />
                  <QuestionTemplate
                    questionNumber={"easyQ6Q"}
                    firstOptionNumber={"easyQ6F1"}
                    secondOptionNumber={"easyQ6F2"}
                    thirdOptionNumber={"easyQ6F3"}
                    fourthOptionNumber={"easyQ6F4"}
                    answerNumber={"easyQ6A"}
                    question={this.state.easyQ6Q}
                    firstOption={this.state.easyQ6F1}
                    secondOption={this.state.easyQ6F2}
                    thirdOption={this.state.easyQ6F3}
                    fourthOption={this.state.easyQ6F4}
                    answer={this.state.easyQ6A}
                    used={this.state.easyQ6U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteEasyQuestion}
                  />
                  <QuestionTemplate
                    questionNumber={"easyQ7Q"}
                    firstOptionNumber={"easyQ7F1"}
                    secondOptionNumber={"easyQ7F2"}
                    thirdOptionNumber={"easyQ7F3"}
                    fourthOptionNumber={"easyQ7F4"}
                    answerNumber={"easyQ7A"}
                    question={this.state.easyQ7Q}
                    firstOption={this.state.easyQ7F1}
                    secondOption={this.state.easyQ7F2}
                    thirdOption={this.state.easyQ7F3}
                    fourthOption={this.state.easyQ7F4}
                    answer={this.state.easyQ7A}
                    used={this.state.easyQ7U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteEasyQuestion}
                  />
                  <QuestionTemplate
                    questionNumber={"easyQ8Q"}
                    firstOptionNumber={"easyQ8F1"}
                    secondOptionNumber={"easyQ8F2"}
                    thirdOptionNumber={"easyQ8F3"}
                    fourthOptionNumber={"easyQ8F4"}
                    answerNumber={"easyQ8A"}
                    question={this.state.easyQ8Q}
                    firstOption={this.state.easyQ8F1}
                    secondOption={this.state.easyQ8F2}
                    thirdOption={this.state.easyQ8F3}
                    fourthOption={this.state.easyQ8F4}
                    answer={this.state.easyQ8A}
                    used={this.state.easyQ8U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteEasyQuestion}
                  />
                  <QuestionTemplate
                    questionNumber={"easyQ9Q"}
                    firstOptionNumber={"easyQ9F1"}
                    secondOptionNumber={"easyQ9F2"}
                    thirdOptionNumber={"easyQ9F3"}
                    fourthOptionNumber={"easyQ9F4"}
                    answerNumber={"easyQ9A"}
                    question={this.state.easyQ9Q}
                    firstOption={this.state.easyQ9F1}
                    secondOption={this.state.easyQ9F2}
                    thirdOption={this.state.easyQ9F3}
                    fourthOption={this.state.easyQ9F4}
                    answer={this.state.easyQ9A}
                    used={this.state.easyQ9U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteEasyQuestion}
                  />
                  <QuestionTemplate
                    questionNumber={"easyQ10Q"}
                    firstOptionNumber={"easyQ10F1"}
                    secondOptionNumber={"easyQ10F2"}
                    thirdOptionNumber={"easyQ10F3"}
                    fourthOptionNumber={"easyQ10F4"}
                    answerNumber={"easyQ10A"}
                    question={this.state.easyQ10Q}
                    firstOption={this.state.easyQ10F1}
                    secondOption={this.state.easyQ0F2}
                    thirdOption={this.state.easyQ10F3}
                    fourthOption={this.state.easyQ10F4}
                    answer={this.state.easyQ10A}
                    used={this.state.easyQ10U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteEasyQuestion}
                  />
                  <QuestionTemplate
                    questionNumber={"easyQ11Q"}
                    firstOptionNumber={"easyQ11F1"}
                    secondOptionNumber={"easyQ11F2"}
                    thirdOptionNumber={"easyQ11F3"}
                    fourthOptionNumber={"easyQ11F4"}
                    answerNumber={"easyQ11A"}
                    question={this.state.easyQ11Q}
                    firstOption={this.state.easyQ11F1}
                    secondOption={this.state.easyQ11F2}
                    thirdOption={this.state.easyQ11F3}
                    fourthOption={this.state.easyQ11F4}
                    answer={this.state.easyQ11A}
                    used={this.state.easyQ11U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteEasyQuestion}
                  />
                  <QuestionTemplate
                    questionNumber={"easyQ12Q"}
                    firstOptionNumber={"easyQ12F1"}
                    secondOptionNumber={"easyQ12F2"}
                    thirdOptionNumber={"easyQ12F3"}
                    fourthOptionNumber={"easyQ12F4"}
                    answerNumber={"easyQ12A"}
                    question={this.state.easyQ12Q}
                    firstOption={this.state.easyQ12F1}
                    secondOption={this.state.easyQ12F2}
                    thirdOption={this.state.easyQ12F3}
                    fourthOption={this.state.easyQ12F4}
                    answer={this.state.easyQ12A}
                    used={this.state.easyQ12U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteEasyQuestion}
                  />
                  <QuestionTemplate
                    questionNumber={"easyQ13Q"}
                    firstOptionNumber={"easyQ13F1"}
                    secondOptionNumber={"easyQ13F2"}
                    thirdOptionNumber={"easyQ13F3"}
                    fourthOptionNumber={"easyQ13F4"}
                    answerNumber={"easyQ13A"}
                    question={this.state.easyQ13Q}
                    firstOption={this.state.easyQ13F1}
                    secondOption={this.state.easyQ13F2}
                    thirdOption={this.state.easyQ13F3}
                    fourthOption={this.state.easyQ13F4}
                    answer={this.state.easyQ13A}
                    used={this.state.easyQ13U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteEasyQuestion}
                  />
                  <QuestionTemplate
                    questionNumber={"easyQ14Q"}
                    firstOptionNumber={"easyQ14F1"}
                    secondOptionNumber={"easyQ14F2"}
                    thirdOptionNumber={"easyQ14F3"}
                    fourthOptionNumber={"easyQ14F4"}
                    answerNumber={"easyQ14A"}
                    question={this.state.easyQ14Q}
                    firstOption={this.state.easyQ14F1}
                    secondOption={this.state.easyQ14F2}
                    thirdOption={this.state.easyQ14F3}
                    fourthOption={this.state.easyQ14F4}
                    answer={this.state.easyQ14A}
                    used={this.state.easyQ14U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteEasyQuestion}
                  />
                  <QuestionTemplate
                    questionNumber={"easyQ15Q"}
                    firstOptionNumber={"easyQ15F1"}
                    secondOptionNumber={"easyQ15F2"}
                    thirdOptionNumber={"easyQ15F3"}
                    fourthOptionNumber={"easyQ15F4"}
                    answerNumber={"easyQ15A"}
                    question={this.state.easyQ15Q}
                    firstOption={this.state.easyQ15F1}
                    secondOption={this.state.easy15F2}
                    thirdOption={this.state.easyQ15F3}
                    fourthOption={this.state.easyQ15F4}
                    answer={this.state.easyQ15A}
                    used={this.state.easyQ15U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteEasyQuestion}
                  />
                  <QuestionTemplate
                    questionNumber={"easyQ16Q"}
                    firstOptionNumber={"easyQ16F1"}
                    secondOptionNumber={"easyQ16F2"}
                    thirdOptionNumber={"easyQ16F3"}
                    fourthOptionNumber={"easyQ16F4"}
                    answerNumber={"easyQ16A"}
                    question={this.state.easyQ16Q}
                    firstOption={this.state.easyQ16F1}
                    secondOption={this.state.easyQ16F2}
                    thirdOption={this.state.easyQ16F3}
                    fourthOption={this.state.easyQ16F4}
                    answer={this.state.easyQ16A}
                    used={this.state.easyQ16U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteEasyQuestion}
                  />
                  <QuestionTemplate
                    questionNumber={"easyQ17Q"}
                    firstOptionNumber={"easyQ17F1"}
                    secondOptionNumber={"easyQ17F2"}
                    thirdOptionNumber={"easyQ17F3"}
                    fourthOptionNumber={"easyQ17F4"}
                    answerNumber={"easyQ17A"}
                    question={this.state.easyQ17Q}
                    firstOption={this.state.easyQ17F1}
                    secondOption={this.state.easyQ17F2}
                    thirdOption={this.state.easyQ17F3}
                    fourthOption={this.state.easyQ17F4}
                    answer={this.state.easyQ17A}
                    used={this.state.easyQ17U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteEasyQuestion}
                  />
                  <QuestionTemplate
                    questionNumber={"easyQ18Q"}
                    firstOptionNumber={"easyQ18F1"}
                    secondOptionNumber={"easyQ18F2"}
                    thirdOptionNumber={"easyQ18F3"}
                    fourthOptionNumber={"easyQ18F4"}
                    answerNumber={"easyQ18A"}
                    question={this.state.easyQ18Q}
                    firstOption={this.state.easyQ18F1}
                    secondOption={this.state.easyQ18F2}
                    thirdOption={this.state.easyQ18F3}
                    fourthOption={this.state.easyQ18F4}
                    answer={this.state.easyQ18A}
                    used={this.state.easyQ18U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteEasyQuestion}
                  />
                  <QuestionTemplate
                    questionNumber={"easyQ19Q"}
                    firstOptionNumber={"easyQ19F1"}
                    secondOptionNumber={"easyQ19F2"}
                    thirdOptionNumber={"easyQ19F3"}
                    fourthOptionNumber={"easyQ19F4"}
                    answerNumber={"easyQ19A"}
                    question={this.state.easyQ19Q}
                    firstOption={this.state.easyQ19F1}
                    secondOption={this.state.easyQ19F2}
                    thirdOption={this.state.easyQ19F3}
                    fourthOption={this.state.easyQ19F4}
                    answer={this.state.easyQ19A}
                    used={this.state.easyQ19U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteEasyQuestion}
                  />
                  <QuestionTemplate
                    questionNumber={"easyQ20Q"}
                    firstOptionNumber={"easyQ20F1"}
                    secondOptionNumber={"easyQ20F2"}
                    thirdOptionNumber={"easyQ20F3"}
                    fourthOptionNumber={"easyQ20F4"}
                    answerNumber={"easyQ20A"}
                    question={this.state.easyQ20Q}
                    firstOption={this.state.easyQ20F1}
                    secondOption={this.state.easyQ20F2}
                    thirdOption={this.state.easyQ20F3}
                    fourthOption={this.state.easyQ20F4}
                    answer={this.state.easyQ20A}
                    used={this.state.easyQ20U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteEasyQuestion}
                  />
                  <QuestionTemplate
                    questionNumber={"easyQ21Q"}
                    firstOptionNumber={"easyQ21F1"}
                    secondOptionNumber={"easyQ21F2"}
                    thirdOptionNumber={"easyQ21F3"}
                    fourthOptionNumber={"easyQ21F4"}
                    answerNumber={"easyQ21A"}
                    question={this.state.easyQ21Q}
                    firstOption={this.state.easyQ21F1}
                    secondOption={this.state.easyQ21F2}
                    thirdOption={this.state.easyQ21F3}
                    fourthOption={this.state.easyQ21F4}
                    answer={this.state.easyQ21A}
                    used={this.state.easyQ21U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteEasyQuestion}
                  />
                  <QuestionTemplate
                    questionNumber={"easyQ22Q"}
                    firstOptionNumber={"easyQ22F1"}
                    secondOptionNumber={"easyQ22F2"}
                    thirdOptionNumber={"easyQ22F3"}
                    fourthOptionNumber={"easyQ22F4"}
                    answerNumber={"easyQ22A"}
                    question={this.state.easyQ22Q}
                    firstOption={this.state.easyQ22F1}
                    secondOption={this.state.easyQ22F2}
                    thirdOption={this.state.easyQ22F3}
                    fourthOption={this.state.easyQ22F4}
                    answer={this.state.easyQ22A}
                    used={this.state.easyQ22U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteEasyQuestion}
                  />
                  <QuestionTemplate
                    questionNumber={"easyQ23Q"}
                    firstOptionNumber={"easyQ23F1"}
                    secondOptionNumber={"easyQ23F2"}
                    thirdOptionNumber={"easyQ23F3"}
                    fourthOptionNumber={"easyQ23F4"}
                    answerNumber={"easyQ23A"}
                    question={this.state.easyQ23Q}
                    firstOption={this.state.easyQ23F1}
                    secondOption={this.state.easyQ23F2}
                    thirdOption={this.state.easyQ23F3}
                    fourthOption={this.state.easyQ23F4}
                    answer={this.state.easyQ23A}
                    used={this.state.easyQ23U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteEasyQuestion}
                  />
                  <QuestionTemplate
                    questionNumber={"easyQ24Q"}
                    firstOptionNumber={"easyQ24F1"}
                    secondOptionNumber={"easyQ24F2"}
                    thirdOptionNumber={"easyQ24F3"}
                    fourthOptionNumber={"easyQ24F4"}
                    answerNumber={"easyQ24A"}
                    question={this.state.easyQ24Q}
                    firstOption={this.state.easyQ24F1}
                    secondOption={this.state.easyQ24F2}
                    thirdOption={this.state.easyQ24F3}
                    fourthOption={this.state.easyQ24F4}
                    answer={this.state.easyQ24A}
                    used={this.state.easyQ24U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteEasyQuestion}
                  />
                  <QuestionTemplate
                    questionNumber={"easyQ25Q"}
                    firstOptionNumber={"easyQ25F1"}
                    secondOptionNumber={"easyQ25F2"}
                    thirdOptionNumber={"easyQ25F3"}
                    fourthOptionNumber={"easyQ25F4"}
                    answerNumber={"easyQ25A"}
                    question={this.state.easyQ25Q}
                    firstOption={this.state.easyQ25F1}
                    secondOption={this.state.easyQ25F2}
                    thirdOption={this.state.easyQ25F3}
                    fourthOption={this.state.easyQ25F4}
                    answer={this.state.easyQ25A}
                    used={this.state.easyQ25U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteEasyQuestion}
                  />
                  <QuestionTemplate
                    questionNumber={"easyQ26Q"}
                    firstOptionNumber={"easyQ26F1"}
                    secondOptionNumber={"easyQ26F2"}
                    thirdOptionNumber={"easyQ26F3"}
                    fourthOptionNumber={"easyQ26F4"}
                    answerNumber={"easyQ26A"}
                    question={this.state.easyQ26Q}
                    firstOption={this.state.easyQ26F1}
                    secondOption={this.state.easyQ26F2}
                    thirdOption={this.state.easyQ26F3}
                    fourthOption={this.state.easyQ26F4}
                    answer={this.state.easyQ26A}
                    used={this.state.easyQ26U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteEasyQuestion}
                  />
                  <QuestionTemplate
                    questionNumber={"easyQ27Q"}
                    firstOptionNumber={"easyQ27F1"}
                    secondOptionNumber={"easyQ27F2"}
                    thirdOptionNumber={"easyQ27F3"}
                    fourthOptionNumber={"easyQ27F4"}
                    answerNumber={"easyQ27A"}
                    question={this.state.easyQ27Q}
                    firstOption={this.state.easyQ27F1}
                    secondOption={this.state.easyQ27F2}
                    thirdOption={this.state.easyQ27F3}
                    fourthOption={this.state.easyQ27F4}
                    answer={this.state.easyQ27A}
                    used={this.state.easyQ27U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteEasyQuestion}
                  />
                  <QuestionTemplate
                    questionNumber={"easyQ28Q"}
                    firstOptionNumber={"easyQ28F1"}
                    secondOptionNumber={"easyQ28F2"}
                    thirdOptionNumber={"easyQ28F3"}
                    fourthOptionNumber={"easyQ28F4"}
                    answerNumber={"easyQ28A"}
                    question={this.state.easyQ28Q}
                    firstOption={this.state.easyQ28F1}
                    secondOption={this.state.easyQ28F2}
                    thirdOption={this.state.easyQ28F3}
                    fourthOption={this.state.easyQ28F4}
                    answer={this.state.easyQ28A}
                    used={this.state.easyQ28U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteEasyQuestion}
                  />
                  <QuestionTemplate
                    questionNumber={"easyQ29Q"}
                    firstOptionNumber={"easyQ29F1"}
                    secondOptionNumber={"easyQ29F2"}
                    thirdOptionNumber={"easyQ29F3"}
                    fourthOptionNumber={"easyQ29F4"}
                    answerNumber={"easyQ29A"}
                    question={this.state.easyQ29Q}
                    firstOption={this.state.easyQ29F1}
                    secondOption={this.state.easyQ29F2}
                    thirdOption={this.state.easyQ29F3}
                    fourthOption={this.state.easyQ29F4}
                    answer={this.state.easyQ29A}
                    used={this.state.easyQ29U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteEasyQuestion}
                  />
                  <QuestionTemplate
                    questionNumber={"easyQ30Q"}
                    firstOptionNumber={"easyQ30F1"}
                    secondOptionNumber={"easyQ30F2"}
                    thirdOptionNumber={"easyQ30F3"}
                    fourthOptionNumber={"easyQ30F4"}
                    answerNumber={"easyQ30A"}
                    question={this.state.easyQ30Q}
                    firstOption={this.state.easyQ30F1}
                    secondOption={this.state.easyQ30F2}
                    thirdOption={this.state.easyQ30F3}
                    fourthOption={this.state.easyQ30F4}
                    answer={this.state.easyQ30A}
                    used={this.state.easyQ30U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteEasyQuestion}
                  />

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      marginLeft: "6px",
                    }}
                  >
                    <Typography>
                      {" "}
                      Click to add another question
                      <IconButton
                        aria-label="add"
                        className={classes.margin}
                        onClick={this.handleAddEasyQuestion}
                      >
                        <AddIcon />
                      </IconButton>
                    </Typography>
                  </div>
                </div>

                <div style={{ margin: "auto", padding: "40px" }}>
                  <Typography color="secondary" style={{ marginLeft: "8px" }}>
                    <Box fontWeight="medium" fontSize="20px">
                      Time for Easy Level Test
                    </Box>
                  </Typography>
                  <TestTimeTextFields
                    time={this.state.easyTime}
                    timeType={"easyTime"}
                    handleChange={this.handleChange}
                  />
                </div>

                <div style={{ margin: "auto", padding: "40px" }}>
                  <Typography color="secondary" style={{ marginLeft: "8px" }}>
                    {" "}
                    <Box fontWeight="medium" fontSize="20px">
                      MCQ Questions for Medium Level
                    </Box>
                  </Typography>
                  <QuestionTemplate
                    questionNumber={"mediumQ1Q"}
                    firstOptionNumber={"mediumQ1F1"}
                    secondOptionNumber={"mediumQ1F2"}
                    thirdOptionNumber={"mediumQ1F3"}
                    fourthOptionNumber={"mediumQ1F4"}
                    answerNumber={"mediumQ1A"}
                    question={this.state.mediumQ1Q}
                    firstOption={this.state.mediumQ1F1}
                    secondOption={this.state.mediumQ1F2}
                    thirdOption={this.state.mediumQ1F3}
                    fourthOption={this.state.mediumQ1F4}
                    answer={this.state.mediumQ1A}
                    used={this.state.mediumQ1U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteMediumQuestion}
                  />

                  <QuestionTemplate
                    questionNumber={"mediumQ2Q"}
                    firstOptionNumber={"mediumQ2F1"}
                    secondOptionNumber={"mediumQ2F2"}
                    thirdOptionNumber={"mediumQ2F3"}
                    fourthOptionNumber={"mediumQ2F4"}
                    answerNumber={"mediumQ2A"}
                    question={this.state.mediumQ2Q}
                    firstOption={this.state.mediumQ2F1}
                    secondOption={this.state.mediumQ2F2}
                    thirdOption={this.state.mediumQ2F3}
                    fourthOption={this.state.mediumQ2F4}
                    answer={this.state.mediumQ2A}
                    used={this.state.mediumQ2U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteMediumQuestion}
                  />

                  <QuestionTemplate
                    questionNumber={"mediumQ3Q"}
                    firstOptionNumber={"mediumQ3F1"}
                    secondOptionNumber={"mediumQ3F2"}
                    thirdOptionNumber={"mediumQ3F3"}
                    fourthOptionNumber={"mediumQ3F4"}
                    answerNumber={"mediumQ3A"}
                    question={this.state.mediumQ3Q}
                    firstOption={this.state.mediumQ3F1}
                    secondOption={this.state.mediumQ3F2}
                    thirdOption={this.state.mediumQ3F3}
                    fourthOption={this.state.mediumQ3F4}
                    answer={this.state.mediumQ3A}
                    used={this.state.mediumQ3U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteMediumQuestion}
                  />
                  <QuestionTemplate
                    questionNumber={"mediumQ4Q"}
                    firstOptionNumber={"mediumQ4F1"}
                    secondOptionNumber={"mediumQ4F2"}
                    thirdOptionNumber={"mediumQ4F3"}
                    fourthOptionNumber={"mediumQ4F4"}
                    answerNumber={"mediumQ4A"}
                    question={this.state.mediumQ4Q}
                    firstOption={this.state.mediumQ4F1}
                    secondOption={this.state.mediumQ4F2}
                    thirdOption={this.state.mediumQ4F3}
                    fourthOption={this.state.mediumQ4F4}
                    answer={this.state.mediumQ4A}
                    used={this.state.mediumQ4U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteMediumQuestion}
                  />
                  <QuestionTemplate
                    questionNumber={"mediumQ5Q"}
                    firstOptionNumber={"mediumQ5F1"}
                    secondOptionNumber={"mediumQ5F2"}
                    thirdOptionNumber={"mediumQ5F3"}
                    fourthOptionNumber={"mediumQ5F4"}
                    answerNumber={"mediumQ5A"}
                    question={this.state.mediumQ5Q}
                    firstOption={this.state.mediumQ5F1}
                    secondOption={this.state.mediumQ5F2}
                    thirdOption={this.state.mediumQ5F3}
                    fourthOption={this.state.mediumQ5F4}
                    answer={this.state.mediumQ5A}
                    used={this.state.mediumQ5U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteMediumQuestion}
                  />
                  <QuestionTemplate
                    questionNumber={"mediumQ6Q"}
                    firstOptionNumber={"mediumQ6F1"}
                    secondOptionNumber={"mediumQ6F2"}
                    thirdOptionNumber={"mediumQ6F3"}
                    fourthOptionNumber={"mediumQ6F4"}
                    answerNumber={"mediumQ6A"}
                    question={this.state.mediumQ6Q}
                    firstOption={this.state.mediumQ6F1}
                    secondOption={this.state.mediumQ6F2}
                    thirdOption={this.state.mediumQ6F3}
                    fourthOption={this.state.mediumQ6F4}
                    answer={this.state.mediumQ6A}
                    used={this.state.mediumQ6U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteMediumQuestion}
                  />
                  <QuestionTemplate
                    questionNumber={"mediumQ7Q"}
                    firstOptionNumber={"mediumQ7F1"}
                    secondOptionNumber={"mediumQ7F2"}
                    thirdOptionNumber={"mediumQ7F3"}
                    fourthOptionNumber={"mediumQ7F4"}
                    answerNumber={"mediumQ7A"}
                    question={this.state.mediumQ7Q}
                    firstOption={this.state.mediumQ7F1}
                    secondOption={this.state.mediumQ7F2}
                    thirdOption={this.state.mediumQ7F3}
                    fourthOption={this.state.mediumQ7F4}
                    answer={this.state.mediumQ7A}
                    used={this.state.mediumQ7U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteMediumQuestion}
                  />
                  <QuestionTemplate
                    questionNumber={"mediumQ8Q"}
                    firstOptionNumber={"mediumQ8F1"}
                    secondOptionNumber={"mediumQ8F2"}
                    thirdOptionNumber={"mediumQ8F3"}
                    fourthOptionNumber={"mediumQ8F4"}
                    answerNumber={"mediumQ8A"}
                    question={this.state.mediumQ8Q}
                    firstOption={this.state.mediumQ8F1}
                    secondOption={this.state.mediumQ8F2}
                    thirdOption={this.state.mediumQ8F3}
                    fourthOption={this.state.mediumQ8F4}
                    answer={this.state.mediumQ8A}
                    used={this.state.mediumQ8U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteMediumQuestion}
                  />
                  <QuestionTemplate
                    questionNumber={"mediumQ9Q"}
                    firstOptionNumber={"mediumQ9F1"}
                    secondOptionNumber={"mediumQ9F2"}
                    thirdOptionNumber={"mediumQ9F3"}
                    fourthOptionNumber={"mediumQ9F4"}
                    answerNumber={"mediumQ9A"}
                    question={this.state.mediumQ9Q}
                    firstOption={this.state.mediumQ9F1}
                    secondOption={this.state.mediumQ9F2}
                    thirdOption={this.state.mediumQ9F3}
                    fourthOption={this.state.mediumQ9F4}
                    answer={this.state.mediumQ9A}
                    used={this.state.mediumQ9U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteMediumQuestion}
                  />
                  <QuestionTemplate
                    questionNumber={"mediumQ10Q"}
                    firstOptionNumber={"mediumQ10F1"}
                    secondOptionNumber={"mediumQ10F2"}
                    thirdOptionNumber={"mediumQ10F3"}
                    fourthOptionNumber={"mediumQ10F4"}
                    answerNumber={"mediumQ10A"}
                    question={this.state.mediumQ10Q}
                    firstOption={this.state.mediumQ10F1}
                    secondOption={this.state.mediumQ0F2}
                    thirdOption={this.state.mediumQ10F3}
                    fourthOption={this.state.mediumQ10F4}
                    answer={this.state.mediumQ10A}
                    used={this.state.mediumQ10U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteMediumQuestion}
                  />
                  <QuestionTemplate
                    questionNumber={"mediumQ11Q"}
                    firstOptionNumber={"mediumQ11F1"}
                    secondOptionNumber={"mediumQ11F2"}
                    thirdOptionNumber={"mediumQ11F3"}
                    fourthOptionNumber={"mediumQ11F4"}
                    answerNumber={"mediumQ11A"}
                    question={this.state.mediumQ11Q}
                    firstOption={this.state.mediumQ11F1}
                    secondOption={this.state.mediumQ11F2}
                    thirdOption={this.state.mediumQ11F3}
                    fourthOption={this.state.mediumQ11F4}
                    answer={this.state.mediumQ11A}
                    used={this.state.mediumQ11U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteMediumQuestion}
                  />
                  <QuestionTemplate
                    questionNumber={"mediumQ12Q"}
                    firstOptionNumber={"mediumQ12F1"}
                    secondOptionNumber={"mediumQ12F2"}
                    thirdOptionNumber={"mediumQ12F3"}
                    fourthOptionNumber={"mediumQ12F4"}
                    answerNumber={"mediumQ12A"}
                    question={this.state.mediumQ12Q}
                    firstOption={this.state.mediumQ12F1}
                    secondOption={this.state.mediumQ12F2}
                    thirdOption={this.state.mediumQ12F3}
                    fourthOption={this.state.mediumQ12F4}
                    answer={this.state.mediumQ12A}
                    used={this.state.mediumQ12U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteMediumQuestion}
                  />
                  <QuestionTemplate
                    questionNumber={"mediumQ13Q"}
                    firstOptionNumber={"mediumQ13F1"}
                    secondOptionNumber={"mediumQ13F2"}
                    thirdOptionNumber={"mediumQ13F3"}
                    fourthOptionNumber={"mediumQ13F4"}
                    answerNumber={"mediumQ13A"}
                    question={this.state.mediumQ13Q}
                    firstOption={this.state.mediumQ13F1}
                    secondOption={this.state.mediumQ13F2}
                    thirdOption={this.state.mediumQ13F3}
                    fourthOption={this.state.mediumQ13F4}
                    answer={this.state.mediumQ13A}
                    used={this.state.mediumQ13U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteMediumQuestion}
                  />
                  <QuestionTemplate
                    questionNumber={"mediumQ14Q"}
                    firstOptionNumber={"mediumQ14F1"}
                    secondOptionNumber={"mediumQ14F2"}
                    thirdOptionNumber={"mediumQ14F3"}
                    fourthOptionNumber={"mediumQ14F4"}
                    answerNumber={"mediumQ14A"}
                    question={this.state.mediumQ14Q}
                    firstOption={this.state.mediumQ14F1}
                    secondOption={this.state.mediumQ14F2}
                    thirdOption={this.state.mediumQ14F3}
                    fourthOption={this.state.mediumQ14F4}
                    answer={this.state.mediumQ14A}
                    used={this.state.mediumQ14U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteMediumQuestion}
                  />
                  <QuestionTemplate
                    questionNumber={"mediumQ15Q"}
                    firstOptionNumber={"mediumQ15F1"}
                    secondOptionNumber={"mediumQ15F2"}
                    thirdOptionNumber={"mediumQ15F3"}
                    fourthOptionNumber={"mediumQ15F4"}
                    answerNumber={"mediumQ15A"}
                    question={this.state.mediumQ15Q}
                    firstOption={this.state.mediumQ15F1}
                    secondOption={this.state.medium15F2}
                    thirdOption={this.state.mediumQ15F3}
                    fourthOption={this.state.mediumQ15F4}
                    answer={this.state.mediumQ15A}
                    used={this.state.mediumQ15U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteMediumQuestion}
                  />
                  <QuestionTemplate
                    questionNumber={"mediumQ16Q"}
                    firstOptionNumber={"mediumQ16F1"}
                    secondOptionNumber={"mediumQ16F2"}
                    thirdOptionNumber={"mediumQ16F3"}
                    fourthOptionNumber={"mediumQ16F4"}
                    answerNumber={"mediumQ16A"}
                    question={this.state.mediumQ16Q}
                    firstOption={this.state.mediumQ16F1}
                    secondOption={this.state.mediumQ16F2}
                    thirdOption={this.state.mediumQ16F3}
                    fourthOption={this.state.mediumQ16F4}
                    answer={this.state.mediumQ16A}
                    used={this.state.mediumQ16U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteMediumQuestion}
                  />
                  <QuestionTemplate
                    questionNumber={"mediumQ17Q"}
                    firstOptionNumber={"mediumQ17F1"}
                    secondOptionNumber={"mediumQ17F2"}
                    thirdOptionNumber={"mediumQ17F3"}
                    fourthOptionNumber={"mediumQ17F4"}
                    answerNumber={"mediumQ17A"}
                    question={this.state.mediumQ17Q}
                    firstOption={this.state.mediumQ17F1}
                    secondOption={this.state.mediumQ17F2}
                    thirdOption={this.state.mediumQ17F3}
                    fourthOption={this.state.mediumQ17F4}
                    answer={this.state.mediumQ17A}
                    used={this.state.mediumQ17U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteMediumQuestion}
                  />
                  <QuestionTemplate
                    questionNumber={"mediumQ18Q"}
                    firstOptionNumber={"mediumQ18F1"}
                    secondOptionNumber={"mediumQ18F2"}
                    thirdOptionNumber={"mediumQ18F3"}
                    fourthOptionNumber={"mediumQ18F4"}
                    answerNumber={"mediumQ18A"}
                    question={this.state.mediumQ18Q}
                    firstOption={this.state.mediumQ18F1}
                    secondOption={this.state.mediumQ18F2}
                    thirdOption={this.state.mediumQ18F3}
                    fourthOption={this.state.mediumQ18F4}
                    answer={this.state.mediumQ18A}
                    used={this.state.mediumQ18U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteMediumQuestion}
                  />
                  <QuestionTemplate
                    questionNumber={"mediumQ19Q"}
                    firstOptionNumber={"mediumQ19F1"}
                    secondOptionNumber={"mediumQ19F2"}
                    thirdOptionNumber={"mediumQ19F3"}
                    fourthOptionNumber={"mediumQ19F4"}
                    answerNumber={"mediumQ19A"}
                    question={this.state.mediumQ19Q}
                    firstOption={this.state.mediumQ19F1}
                    secondOption={this.state.mediumQ19F2}
                    thirdOption={this.state.mediumQ19F3}
                    fourthOption={this.state.mediumQ19F4}
                    answer={this.state.mediumQ19A}
                    used={this.state.mediumQ19U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteMediumQuestion}
                  />
                  <QuestionTemplate
                    questionNumber={"mediumQ20Q"}
                    firstOptionNumber={"mediumQ20F1"}
                    secondOptionNumber={"mediumQ20F2"}
                    thirdOptionNumber={"mediumQ20F3"}
                    fourthOptionNumber={"mediumQ20F4"}
                    answerNumber={"mediumQ20A"}
                    question={this.state.mediumQ20Q}
                    firstOption={this.state.mediumQ20F1}
                    secondOption={this.state.mediumQ20F2}
                    thirdOption={this.state.mediumQ20F3}
                    fourthOption={this.state.mediumQ20F4}
                    answer={this.state.mediumQ20A}
                    used={this.state.mediumQ20U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteMediumQuestion}
                  />
                  <QuestionTemplate
                    questionNumber={"mediumQ21Q"}
                    firstOptionNumber={"mediumQ21F1"}
                    secondOptionNumber={"mediumQ21F2"}
                    thirdOptionNumber={"mediumQ21F3"}
                    fourthOptionNumber={"mediumQ21F4"}
                    answerNumber={"mediumQ21A"}
                    question={this.state.mediumQ21Q}
                    firstOption={this.state.mediumQ21F1}
                    secondOption={this.state.mediumQ21F2}
                    thirdOption={this.state.mediumQ21F3}
                    fourthOption={this.state.mediumQ21F4}
                    answer={this.state.mediumQ21A}
                    used={this.state.mediumQ21U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteMediumQuestion}
                  />
                  <QuestionTemplate
                    questionNumber={"mediumQ22Q"}
                    firstOptionNumber={"mediumQ22F1"}
                    secondOptionNumber={"mediumQ22F2"}
                    thirdOptionNumber={"mediumQ22F3"}
                    fourthOptionNumber={"mediumQ22F4"}
                    answerNumber={"mediumQ22A"}
                    question={this.state.mediumQ22Q}
                    firstOption={this.state.mediumQ22F1}
                    secondOption={this.state.mediumQ22F2}
                    thirdOption={this.state.mediumQ22F3}
                    fourthOption={this.state.mediumQ22F4}
                    answer={this.state.mediumQ22A}
                    used={this.state.mediumQ22U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteMediumQuestion}
                  />
                  <QuestionTemplate
                    questionNumber={"mediumQ23Q"}
                    firstOptionNumber={"mediumQ23F1"}
                    secondOptionNumber={"mediumQ23F2"}
                    thirdOptionNumber={"mediumQ23F3"}
                    fourthOptionNumber={"mediumQ23F4"}
                    answerNumber={"mediumQ23A"}
                    question={this.state.mediumQ23Q}
                    firstOption={this.state.mediumQ23F1}
                    secondOption={this.state.mediumQ23F2}
                    thirdOption={this.state.mediumQ23F3}
                    fourthOption={this.state.mediumQ23F4}
                    answer={this.state.mediumQ23A}
                    used={this.state.mediumQ23U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteMediumQuestion}
                  />
                  <QuestionTemplate
                    questionNumber={"mediumQ24Q"}
                    firstOptionNumber={"mediumQ24F1"}
                    secondOptionNumber={"mediumQ24F2"}
                    thirdOptionNumber={"mediumQ24F3"}
                    fourthOptionNumber={"mediumQ24F4"}
                    answerNumber={"mediumQ24A"}
                    question={this.state.mediumQ24Q}
                    firstOption={this.state.mediumQ24F1}
                    secondOption={this.state.mediumQ24F2}
                    thirdOption={this.state.mediumQ24F3}
                    fourthOption={this.state.mediumQ24F4}
                    answer={this.state.mediumQ24A}
                    used={this.state.mediumQ24U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteMediumQuestion}
                  />
                  <QuestionTemplate
                    questionNumber={"mediumQ25Q"}
                    firstOptionNumber={"mediumQ25F1"}
                    secondOptionNumber={"mediumQ25F2"}
                    thirdOptionNumber={"mediumQ25F3"}
                    fourthOptionNumber={"mediumQ25F4"}
                    answerNumber={"mediumQ25A"}
                    question={this.state.mediumQ25Q}
                    firstOption={this.state.mediumQ25F1}
                    secondOption={this.state.mediumQ25F2}
                    thirdOption={this.state.mediumQ25F3}
                    fourthOption={this.state.mediumQ25F4}
                    answer={this.state.mediumQ25A}
                    used={this.state.mediumQ25U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteMediumQuestion}
                  />
                  <QuestionTemplate
                    questionNumber={"mediumQ26Q"}
                    firstOptionNumber={"mediumQ26F1"}
                    secondOptionNumber={"mediumQ26F2"}
                    thirdOptionNumber={"mediumQ26F3"}
                    fourthOptionNumber={"mediumQ26F4"}
                    answerNumber={"mediumQ26A"}
                    question={this.state.mediumQ26Q}
                    firstOption={this.state.mediumQ26F1}
                    secondOption={this.state.mediumQ26F2}
                    thirdOption={this.state.mediumQ26F3}
                    fourthOption={this.state.mediumQ26F4}
                    answer={this.state.mediumQ26A}
                    used={this.state.mediumQ26U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteMediumQuestion}
                  />
                  <QuestionTemplate
                    questionNumber={"mediumQ27Q"}
                    firstOptionNumber={"mediumQ27F1"}
                    secondOptionNumber={"mediumQ27F2"}
                    thirdOptionNumber={"mediumQ27F3"}
                    fourthOptionNumber={"mediumQ27F4"}
                    answerNumber={"mediumQ27A"}
                    question={this.state.mediumQ27Q}
                    firstOption={this.state.mediumQ27F1}
                    secondOption={this.state.mediumQ27F2}
                    thirdOption={this.state.mediumQ27F3}
                    fourthOption={this.state.mediumQ27F4}
                    answer={this.state.mediumQ27A}
                    used={this.state.mediumQ27U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteMediumQuestion}
                  />
                  <QuestionTemplate
                    questionNumber={"mediumQ28Q"}
                    firstOptionNumber={"mediumQ28F1"}
                    secondOptionNumber={"mediumQ28F2"}
                    thirdOptionNumber={"mediumQ28F3"}
                    fourthOptionNumber={"mediumQ28F4"}
                    answerNumber={"mediumQ28A"}
                    question={this.state.mediumQ28Q}
                    firstOption={this.state.mediumQ28F1}
                    secondOption={this.state.mediumQ28F2}
                    thirdOption={this.state.mediumQ28F3}
                    fourthOption={this.state.mediumQ28F4}
                    answer={this.state.mediumQ28A}
                    used={this.state.mediumQ28U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteMediumQuestion}
                  />
                  <QuestionTemplate
                    questionNumber={"mediumQ29Q"}
                    firstOptionNumber={"mediumQ29F1"}
                    secondOptionNumber={"mediumQ29F2"}
                    thirdOptionNumber={"mediumQ29F3"}
                    fourthOptionNumber={"mediumQ29F4"}
                    answerNumber={"mediumQ29A"}
                    question={this.state.mediumQ29Q}
                    firstOption={this.state.mediumQ29F1}
                    secondOption={this.state.mediumQ29F2}
                    thirdOption={this.state.mediumQ29F3}
                    fourthOption={this.state.mediumQ29F4}
                    answer={this.state.mediumQ29A}
                    used={this.state.mediumQ29U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteMediumQuestion}
                  />
                  <QuestionTemplate
                    questionNumber={"mediumQ30Q"}
                    firstOptionNumber={"mediumQ30F1"}
                    secondOptionNumber={"mediumQ30F2"}
                    thirdOptionNumber={"mediumQ30F3"}
                    fourthOptionNumber={"mediumQ30F4"}
                    answerNumber={"mediumQ30A"}
                    question={this.state.mediumQ30Q}
                    firstOption={this.state.mediumQ30F1}
                    secondOption={this.state.mediumQ30F2}
                    thirdOption={this.state.mediumQ30F3}
                    fourthOption={this.state.mediumQ30F4}
                    answer={this.state.mediumQ30A}
                    used={this.state.mediumQ30U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteMediumQuestion}
                  />

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      marginLeft: "6px",
                    }}
                  >
                    <Typography>
                      {" "}
                      Click to add another question
                      <IconButton
                        aria-label="add"
                        className={classes.margin}
                        onClick={this.handleAddMediumQuestion}
                      >
                        <AddIcon />
                      </IconButton>
                    </Typography>
                  </div>
                </div>
                <div style={{ margin: "auto", padding: "40px" }}>
                  <Typography color="secondary" style={{ marginLeft: "8px" }}>
                    <Box fontWeight="medium" fontSize="20px">
                      Time for Medium Level Test
                    </Box>
                  </Typography>
                  <TestTimeTextFields
                    time={this.state.mediumTime}
                    timeType={"mediumTime"}
                    handleChange={this.handleChange}
                  />
                </div>

                <div style={{ margin: "auto", padding: "40px" }}>
                  <Typography color="secondary" style={{ marginLeft: "8px" }}>
                    {" "}
                    <Box fontWeight="medium" fontSize="20px">
                      MCQ Questions for Hard Level
                    </Box>
                  </Typography>
                  <QuestionTemplate
                    questionNumber={"hardQ1Q"}
                    firstOptionNumber={"hardQ1F1"}
                    secondOptionNumber={"hardQ1F2"}
                    thirdOptionNumber={"hardQ1F3"}
                    fourthOptionNumber={"hardQ1F4"}
                    answerNumber={"hardQ1A"}
                    question={this.state.hardQ1Q}
                    firstOption={this.state.hardQ1F1}
                    secondOption={this.state.hardQ1F2}
                    thirdOption={this.state.hardQ1F3}
                    fourthOption={this.state.hardQ1F4}
                    answer={this.state.hardQ1A}
                    used={this.state.hardQ1U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteHardQuestion}
                  />

                  <QuestionTemplate
                    questionNumber={"hardQ2Q"}
                    firstOptionNumber={"hardQ2F1"}
                    secondOptionNumber={"hardQ2F2"}
                    thirdOptionNumber={"hardQ2F3"}
                    fourthOptionNumber={"hardQ2F4"}
                    answerNumber={"hardQ2A"}
                    question={this.state.hardQ2Q}
                    firstOption={this.state.hardQ2F1}
                    secondOption={this.state.hardQ2F2}
                    thirdOption={this.state.hardQ2F3}
                    fourthOption={this.state.hardQ2F4}
                    answer={this.state.hardQ2A}
                    used={this.state.hardQ2U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteHardQuestion}
                  />

                  <QuestionTemplate
                    questionNumber={"hardQ3Q"}
                    firstOptionNumber={"hardQ3F1"}
                    secondOptionNumber={"hardQ3F2"}
                    thirdOptionNumber={"hardQ3F3"}
                    fourthOptionNumber={"hardQ3F4"}
                    answerNumber={"hardQ3A"}
                    question={this.state.hardQ3Q}
                    firstOption={this.state.hardQ3F1}
                    secondOption={this.state.hardQ3F2}
                    thirdOption={this.state.hardQ3F3}
                    fourthOption={this.state.hardQ3F4}
                    answer={this.state.hardQ3A}
                    used={this.state.hardQ3U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteHardQuestion}
                  />
                  <QuestionTemplate
                    questionNumber={"hardQ4Q"}
                    firstOptionNumber={"hardQ4F1"}
                    secondOptionNumber={"hardQ4F2"}
                    thirdOptionNumber={"hardQ4F3"}
                    fourthOptionNumber={"hardQ4F4"}
                    answerNumber={"hardQ4A"}
                    question={this.state.hardQ4Q}
                    firstOption={this.state.hardQ4F1}
                    secondOption={this.state.hardQ4F2}
                    thirdOption={this.state.hardQ4F3}
                    fourthOption={this.state.hardQ4F4}
                    answer={this.state.hardQ4A}
                    used={this.state.hardQ4U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteHardQuestion}
                  />
                  <QuestionTemplate
                    questionNumber={"hardQ5Q"}
                    firstOptionNumber={"hardQ5F1"}
                    secondOptionNumber={"hardQ5F2"}
                    thirdOptionNumber={"hardQ5F3"}
                    fourthOptionNumber={"hardQ5F4"}
                    answerNumber={"hardQ5A"}
                    question={this.state.hardQ5Q}
                    firstOption={this.state.hardQ5F1}
                    secondOption={this.state.hardQ5F2}
                    thirdOption={this.state.hardQ5F3}
                    fourthOption={this.state.hardQ5F4}
                    answer={this.state.hardQ5A}
                    used={this.state.hardQ5U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteHardQuestion}
                  />
                  <QuestionTemplate
                    questionNumber={"hardQ6Q"}
                    firstOptionNumber={"hardQ6F1"}
                    secondOptionNumber={"hardQ6F2"}
                    thirdOptionNumber={"hardQ6F3"}
                    fourthOptionNumber={"hardQ6F4"}
                    answerNumber={"hardQ6A"}
                    question={this.state.hardQ6Q}
                    firstOption={this.state.hardQ6F1}
                    secondOption={this.state.hardQ6F2}
                    thirdOption={this.state.hardQ6F3}
                    fourthOption={this.state.hardQ6F4}
                    answer={this.state.hardQ6A}
                    used={this.state.hardQ6U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteHardQuestion}
                  />
                  <QuestionTemplate
                    questionNumber={"hardQ7Q"}
                    firstOptionNumber={"hardQ7F1"}
                    secondOptionNumber={"hardQ7F2"}
                    thirdOptionNumber={"hardQ7F3"}
                    fourthOptionNumber={"hardQ7F4"}
                    answerNumber={"hardQ7A"}
                    question={this.state.hardQ7Q}
                    firstOption={this.state.hardQ7F1}
                    secondOption={this.state.hardQ7F2}
                    thirdOption={this.state.hardQ7F3}
                    fourthOption={this.state.hardQ7F4}
                    answer={this.state.hardQ7A}
                    used={this.state.hardQ7U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteHardQuestion}
                  />
                  <QuestionTemplate
                    questionNumber={"hardQ8Q"}
                    firstOptionNumber={"hardQ8F1"}
                    secondOptionNumber={"hardQ8F2"}
                    thirdOptionNumber={"hardQ8F3"}
                    fourthOptionNumber={"hardQ8F4"}
                    answerNumber={"hardQ8A"}
                    question={this.state.hardQ8Q}
                    firstOption={this.state.hardQ8F1}
                    secondOption={this.state.hardQ8F2}
                    thirdOption={this.state.hardQ8F3}
                    fourthOption={this.state.hardQ8F4}
                    answer={this.state.hardQ8A}
                    used={this.state.hardQ8U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteHardQuestion}
                  />
                  <QuestionTemplate
                    questionNumber={"hardQ9Q"}
                    firstOptionNumber={"hardQ9F1"}
                    secondOptionNumber={"hardQ9F2"}
                    thirdOptionNumber={"hardQ9F3"}
                    fourthOptionNumber={"hardQ9F4"}
                    answerNumber={"hardQ9A"}
                    question={this.state.hardQ9Q}
                    firstOption={this.state.hardQ9F1}
                    secondOption={this.state.hardQ9F2}
                    thirdOption={this.state.hardQ9F3}
                    fourthOption={this.state.hardQ9F4}
                    answer={this.state.hardQ9A}
                    used={this.state.hardQ9U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteHardQuestion}
                  />
                  <QuestionTemplate
                    questionNumber={"hardQ10Q"}
                    firstOptionNumber={"hardQ10F1"}
                    secondOptionNumber={"hardQ10F2"}
                    thirdOptionNumber={"hardQ10F3"}
                    fourthOptionNumber={"hardQ10F4"}
                    answerNumber={"hardQ10A"}
                    question={this.state.hardQ10Q}
                    firstOption={this.state.hardQ10F1}
                    secondOption={this.state.hardQ0F2}
                    thirdOption={this.state.hardQ10F3}
                    fourthOption={this.state.hardQ10F4}
                    answer={this.state.hardQ10A}
                    used={this.state.hardQ10U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteHardQuestion}
                  />
                  <QuestionTemplate
                    questionNumber={"hardQ11Q"}
                    firstOptionNumber={"hardQ11F1"}
                    secondOptionNumber={"hardQ11F2"}
                    thirdOptionNumber={"hardQ11F3"}
                    fourthOptionNumber={"hardQ11F4"}
                    answerNumber={"hardQ11A"}
                    question={this.state.hardQ11Q}
                    firstOption={this.state.hardQ11F1}
                    secondOption={this.state.hardQ11F2}
                    thirdOption={this.state.hardQ11F3}
                    fourthOption={this.state.hardQ11F4}
                    answer={this.state.hardQ11A}
                    used={this.state.hardQ11U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteHardQuestion}
                  />
                  <QuestionTemplate
                    questionNumber={"hardQ12Q"}
                    firstOptionNumber={"hardQ12F1"}
                    secondOptionNumber={"hardQ12F2"}
                    thirdOptionNumber={"hardQ12F3"}
                    fourthOptionNumber={"hardQ12F4"}
                    answerNumber={"hardQ12A"}
                    question={this.state.hardQ12Q}
                    firstOption={this.state.hardQ12F1}
                    secondOption={this.state.hardQ12F2}
                    thirdOption={this.state.hardQ12F3}
                    fourthOption={this.state.hardQ12F4}
                    answer={this.state.hardQ12A}
                    used={this.state.hardQ12U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteHardQuestion}
                  />
                  <QuestionTemplate
                    questionNumber={"hardQ13Q"}
                    firstOptionNumber={"hardQ13F1"}
                    secondOptionNumber={"hardQ13F2"}
                    thirdOptionNumber={"hardQ13F3"}
                    fourthOptionNumber={"hardQ13F4"}
                    answerNumber={"hardQ13A"}
                    question={this.state.hardQ13Q}
                    firstOption={this.state.hardQ13F1}
                    secondOption={this.state.hardQ13F2}
                    thirdOption={this.state.hardQ13F3}
                    fourthOption={this.state.hardQ13F4}
                    answer={this.state.hardQ13A}
                    used={this.state.hardQ13U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteHardQuestion}
                  />
                  <QuestionTemplate
                    questionNumber={"hardQ14Q"}
                    firstOptionNumber={"hardQ14F1"}
                    secondOptionNumber={"hardQ14F2"}
                    thirdOptionNumber={"hardQ14F3"}
                    fourthOptionNumber={"hardQ14F4"}
                    answerNumber={"hardQ14A"}
                    question={this.state.hardQ14Q}
                    firstOption={this.state.hardQ14F1}
                    secondOption={this.state.hardQ14F2}
                    thirdOption={this.state.hardQ14F3}
                    fourthOption={this.state.hardQ14F4}
                    answer={this.state.hardQ14A}
                    used={this.state.hardQ14U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteHardQuestion}
                  />
                  <QuestionTemplate
                    questionNumber={"hardQ15Q"}
                    firstOptionNumber={"hardQ15F1"}
                    secondOptionNumber={"hardQ15F2"}
                    thirdOptionNumber={"hardQ15F3"}
                    fourthOptionNumber={"hardQ15F4"}
                    answerNumber={"hardQ15A"}
                    question={this.state.hardQ15Q}
                    firstOption={this.state.hardQ15F1}
                    secondOption={this.state.hard15F2}
                    thirdOption={this.state.hardQ15F3}
                    fourthOption={this.state.hardQ15F4}
                    answer={this.state.hardQ15A}
                    used={this.state.hardQ15U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteHardQuestion}
                  />
                  <QuestionTemplate
                    questionNumber={"hardQ16Q"}
                    firstOptionNumber={"hardQ16F1"}
                    secondOptionNumber={"hardQ16F2"}
                    thirdOptionNumber={"hardQ16F3"}
                    fourthOptionNumber={"hardQ16F4"}
                    answerNumber={"hardQ16A"}
                    question={this.state.hardQ16Q}
                    firstOption={this.state.hardQ16F1}
                    secondOption={this.state.hardQ16F2}
                    thirdOption={this.state.hardQ16F3}
                    fourthOption={this.state.hardQ16F4}
                    answer={this.state.hardQ16A}
                    used={this.state.hardQ16U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteHardQuestion}
                  />
                  <QuestionTemplate
                    questionNumber={"hardQ17Q"}
                    firstOptionNumber={"hardQ17F1"}
                    secondOptionNumber={"hardQ17F2"}
                    thirdOptionNumber={"hardQ17F3"}
                    fourthOptionNumber={"hardQ17F4"}
                    answerNumber={"hardQ17A"}
                    question={this.state.hardQ17Q}
                    firstOption={this.state.hardQ17F1}
                    secondOption={this.state.hardQ17F2}
                    thirdOption={this.state.hardQ17F3}
                    fourthOption={this.state.hardQ17F4}
                    answer={this.state.hardQ17A}
                    used={this.state.hardQ17U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteHardQuestion}
                  />
                  <QuestionTemplate
                    questionNumber={"hardQ18Q"}
                    firstOptionNumber={"hardQ18F1"}
                    secondOptionNumber={"hardQ18F2"}
                    thirdOptionNumber={"hardQ18F3"}
                    fourthOptionNumber={"hardQ18F4"}
                    answerNumber={"hardQ18A"}
                    question={this.state.hardQ18Q}
                    firstOption={this.state.hardQ18F1}
                    secondOption={this.state.hardQ18F2}
                    thirdOption={this.state.hardQ18F3}
                    fourthOption={this.state.hardQ18F4}
                    answer={this.state.hardQ18A}
                    used={this.state.hardQ18U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteHardQuestion}
                  />
                  <QuestionTemplate
                    questionNumber={"hardQ19Q"}
                    firstOptionNumber={"hardQ19F1"}
                    secondOptionNumber={"hardQ19F2"}
                    thirdOptionNumber={"hardQ19F3"}
                    fourthOptionNumber={"hardQ19F4"}
                    answerNumber={"hardQ19A"}
                    question={this.state.hardQ19Q}
                    firstOption={this.state.hardQ19F1}
                    secondOption={this.state.hardQ19F2}
                    thirdOption={this.state.hardQ19F3}
                    fourthOption={this.state.hardQ19F4}
                    answer={this.state.hardQ19A}
                    used={this.state.hardQ19U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteHardQuestion}
                  />
                  <QuestionTemplate
                    questionNumber={"hardQ20Q"}
                    firstOptionNumber={"hardQ20F1"}
                    secondOptionNumber={"hardQ20F2"}
                    thirdOptionNumber={"hardQ20F3"}
                    fourthOptionNumber={"hardQ20F4"}
                    answerNumber={"hardQ20A"}
                    question={this.state.hardQ20Q}
                    firstOption={this.state.hardQ20F1}
                    secondOption={this.state.hardQ20F2}
                    thirdOption={this.state.hardQ20F3}
                    fourthOption={this.state.hardQ20F4}
                    answer={this.state.hardQ20A}
                    used={this.state.hardQ20U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteHardQuestion}
                  />
                  <QuestionTemplate
                    questionNumber={"hardQ21Q"}
                    firstOptionNumber={"hardQ21F1"}
                    secondOptionNumber={"hardQ21F2"}
                    thirdOptionNumber={"hardQ21F3"}
                    fourthOptionNumber={"hardQ21F4"}
                    answerNumber={"hardQ21A"}
                    question={this.state.hardQ21Q}
                    firstOption={this.state.hardQ21F1}
                    secondOption={this.state.hardQ21F2}
                    thirdOption={this.state.hardQ21F3}
                    fourthOption={this.state.hardQ21F4}
                    answer={this.state.hardQ21A}
                    used={this.state.hardQ21U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteHardQuestion}
                  />
                  <QuestionTemplate
                    questionNumber={"hardQ22Q"}
                    firstOptionNumber={"hardQ22F1"}
                    secondOptionNumber={"hardQ22F2"}
                    thirdOptionNumber={"hardQ22F3"}
                    fourthOptionNumber={"hardQ22F4"}
                    answerNumber={"hardQ22A"}
                    question={this.state.hardQ22Q}
                    firstOption={this.state.hardQ22F1}
                    secondOption={this.state.hardQ22F2}
                    thirdOption={this.state.hardQ22F3}
                    fourthOption={this.state.hardQ22F4}
                    answer={this.state.hardQ22A}
                    used={this.state.hardQ22U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteHardQuestion}
                  />
                  <QuestionTemplate
                    questionNumber={"hardQ23Q"}
                    firstOptionNumber={"hardQ23F1"}
                    secondOptionNumber={"hardQ23F2"}
                    thirdOptionNumber={"hardQ23F3"}
                    fourthOptionNumber={"hardQ23F4"}
                    answerNumber={"hardQ23A"}
                    question={this.state.hardQ23Q}
                    firstOption={this.state.hardQ23F1}
                    secondOption={this.state.hardQ23F2}
                    thirdOption={this.state.hardQ23F3}
                    fourthOption={this.state.hardQ23F4}
                    answer={this.state.hardQ23A}
                    used={this.state.hardQ23U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteHardQuestion}
                  />
                  <QuestionTemplate
                    questionNumber={"hardQ24Q"}
                    firstOptionNumber={"hardQ24F1"}
                    secondOptionNumber={"hardQ24F2"}
                    thirdOptionNumber={"hardQ24F3"}
                    fourthOptionNumber={"hardQ24F4"}
                    answerNumber={"hardQ24A"}
                    question={this.state.hardQ24Q}
                    firstOption={this.state.hardQ24F1}
                    secondOption={this.state.hardQ24F2}
                    thirdOption={this.state.hardQ24F3}
                    fourthOption={this.state.hardQ24F4}
                    answer={this.state.hardQ24A}
                    used={this.state.hardQ24U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteHardQuestion}
                  />
                  <QuestionTemplate
                    questionNumber={"hardQ25Q"}
                    firstOptionNumber={"hardQ25F1"}
                    secondOptionNumber={"hardQ25F2"}
                    thirdOptionNumber={"hardQ25F3"}
                    fourthOptionNumber={"hardQ25F4"}
                    answerNumber={"hardQ25A"}
                    question={this.state.hardQ25Q}
                    firstOption={this.state.hardQ25F1}
                    secondOption={this.state.hardQ25F2}
                    thirdOption={this.state.hardQ25F3}
                    fourthOption={this.state.hardQ25F4}
                    answer={this.state.hardQ25A}
                    used={this.state.hardQ25U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteHardQuestion}
                  />
                  <QuestionTemplate
                    questionNumber={"hardQ26Q"}
                    firstOptionNumber={"hardQ26F1"}
                    secondOptionNumber={"hardQ26F2"}
                    thirdOptionNumber={"hardQ26F3"}
                    fourthOptionNumber={"hardQ26F4"}
                    answerNumber={"hardQ26A"}
                    question={this.state.hardQ26Q}
                    firstOption={this.state.hardQ26F1}
                    secondOption={this.state.hardQ26F2}
                    thirdOption={this.state.hardQ26F3}
                    fourthOption={this.state.hardQ26F4}
                    answer={this.state.hardQ26A}
                    used={this.state.hardQ26U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteHardQuestion}
                  />
                  <QuestionTemplate
                    questionNumber={"hardQ27Q"}
                    firstOptionNumber={"hardQ27F1"}
                    secondOptionNumber={"hardQ27F2"}
                    thirdOptionNumber={"hardQ27F3"}
                    fourthOptionNumber={"hardQ27F4"}
                    answerNumber={"hardQ27A"}
                    question={this.state.hardQ27Q}
                    firstOption={this.state.hardQ27F1}
                    secondOption={this.state.hardQ27F2}
                    thirdOption={this.state.hardQ27F3}
                    fourthOption={this.state.hardQ27F4}
                    answer={this.state.hardQ27A}
                    used={this.state.hardQ27U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteHardQuestion}
                  />
                  <QuestionTemplate
                    questionNumber={"hardQ28Q"}
                    firstOptionNumber={"hardQ28F1"}
                    secondOptionNumber={"hardQ28F2"}
                    thirdOptionNumber={"hardQ28F3"}
                    fourthOptionNumber={"hardQ28F4"}
                    answerNumber={"hardQ28A"}
                    question={this.state.hardQ28Q}
                    firstOption={this.state.hardQ28F1}
                    secondOption={this.state.hardQ28F2}
                    thirdOption={this.state.hardQ28F3}
                    fourthOption={this.state.hardQ28F4}
                    answer={this.state.hardQ28A}
                    used={this.state.hardQ28U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteHardQuestion}
                  />
                  <QuestionTemplate
                    questionNumber={"hardQ29Q"}
                    firstOptionNumber={"hardQ29F1"}
                    secondOptionNumber={"hardQ29F2"}
                    thirdOptionNumber={"hardQ29F3"}
                    fourthOptionNumber={"hardQ29F4"}
                    answerNumber={"hardQ29A"}
                    question={this.state.hardQ29Q}
                    firstOption={this.state.hardQ29F1}
                    secondOption={this.state.hardQ29F2}
                    thirdOption={this.state.hardQ29F3}
                    fourthOption={this.state.hardQ29F4}
                    answer={this.state.hardQ29A}
                    used={this.state.hardQ29U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteHardQuestion}
                  />
                  <QuestionTemplate
                    questionNumber={"hardQ30Q"}
                    firstOptionNumber={"hardQ30F1"}
                    secondOptionNumber={"hardQ30F2"}
                    thirdOptionNumber={"hardQ30F3"}
                    fourthOptionNumber={"hardQ30F4"}
                    answerNumber={"hardQ30A"}
                    question={this.state.hardQ30Q}
                    firstOption={this.state.hardQ30F1}
                    secondOption={this.state.hardQ30F2}
                    thirdOption={this.state.hardQ30F3}
                    fourthOption={this.state.hardQ30F4}
                    answer={this.state.hardQ30A}
                    used={this.state.hardQ30U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteHardQuestion}
                  />

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      marginLeft: "6px",
                    }}
                  >
                    <Typography>
                      {" "}
                      Click to add another question
                      <IconButton
                        aria-label="add"
                        className={classes.margin}
                        onClick={this.handleAddHardQuestion}
                      >
                        <AddIcon />
                      </IconButton>
                    </Typography>
                  </div>
                </div>
                <div style={{ margin: "auto", padding: "40px" }}>
                  <Typography color="secondary" style={{ marginLeft: "8px" }}>
                    <Box fontWeight="medium" fontSize="20px">
                      Time for Hard Level Test
                    </Box>
                  </Typography>
                  <TestTimeTextFields
                    time={this.state.hardTime}
                    timeType={"hardTime"}
                    handleChange={this.handleChange}
                  />
                </div>

                <div style={{ margin: "auto", padding: "40px" }}>
                  <Typography color="secondary" style={{ marginLeft: "8px" }}>
                    {" "}
                    <Box fontWeight="medium" fontSize="20px">
                      MCQ Questions for Evaluation Level
                    </Box>
                  </Typography>
                  <QuestionTemplate
                    questionNumber={"evaluateQ1Q"}
                    firstOptionNumber={"evaluateQ1F1"}
                    secondOptionNumber={"evaluateQ1F2"}
                    thirdOptionNumber={"evaluateQ1F3"}
                    fourthOptionNumber={"evaluateQ1F4"}
                    answerNumber={"evaluateQ1A"}
                    question={this.state.evaluateQ1Q}
                    firstOption={this.state.evaluateQ1F1}
                    secondOption={this.state.evaluateQ1F2}
                    thirdOption={this.state.evaluateQ1F3}
                    fourthOption={this.state.evaluateQ1F4}
                    answer={this.state.evaluateQ1A}
                    used={this.state.evaluateQ1U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteEvaluateQuestion}
                  />

                  <QuestionTemplate
                    questionNumber={"evaluateQ2Q"}
                    firstOptionNumber={"evaluateQ2F1"}
                    secondOptionNumber={"evaluateQ2F2"}
                    thirdOptionNumber={"evaluateQ2F3"}
                    fourthOptionNumber={"evaluateQ2F4"}
                    answerNumber={"evaluateQ2A"}
                    question={this.state.evaluateQ2Q}
                    firstOption={this.state.evaluateQ2F1}
                    secondOption={this.state.evaluateQ2F2}
                    thirdOption={this.state.evaluateQ2F3}
                    fourthOption={this.state.evaluateQ2F4}
                    answer={this.state.evaluateQ2A}
                    used={this.state.evaluateQ2U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteEvaluateQuestion}
                  />

                  <QuestionTemplate
                    questionNumber={"evaluateQ3Q"}
                    firstOptionNumber={"evaluateQ3F1"}
                    secondOptionNumber={"evaluateQ3F2"}
                    thirdOptionNumber={"evaluateQ3F3"}
                    fourthOptionNumber={"evaluateQ3F4"}
                    answerNumber={"evaluateQ3A"}
                    question={this.state.evaluateQ3Q}
                    firstOption={this.state.evaluateQ3F1}
                    secondOption={this.state.evaluateQ3F2}
                    thirdOption={this.state.evaluateQ3F3}
                    fourthOption={this.state.evaluateQ3F4}
                    answer={this.state.evaluateQ3A}
                    used={this.state.evaluateQ3U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteEvaluateQuestion}
                  />
                  <QuestionTemplate
                    questionNumber={"evaluateQ4Q"}
                    firstOptionNumber={"evaluateQ4F1"}
                    secondOptionNumber={"evaluateQ4F2"}
                    thirdOptionNumber={"evaluateQ4F3"}
                    fourthOptionNumber={"evaluateQ4F4"}
                    answerNumber={"evaluateQ4A"}
                    question={this.state.evaluateQ4Q}
                    firstOption={this.state.evaluateQ4F1}
                    secondOption={this.state.evaluateQ4F2}
                    thirdOption={this.state.evaluateQ4F3}
                    fourthOption={this.state.evaluateQ4F4}
                    answer={this.state.evaluateQ4A}
                    used={this.state.evaluateQ4U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteEvaluateQuestion}
                  />
                  <QuestionTemplate
                    questionNumber={"evaluateQ5Q"}
                    firstOptionNumber={"evaluateQ5F1"}
                    secondOptionNumber={"evaluateQ5F2"}
                    thirdOptionNumber={"evaluateQ5F3"}
                    fourthOptionNumber={"evaluateQ5F4"}
                    answerNumber={"evaluateQ5A"}
                    question={this.state.evaluateQ5Q}
                    firstOption={this.state.evaluateQ5F1}
                    secondOption={this.state.evaluateQ5F2}
                    thirdOption={this.state.evaluateQ5F3}
                    fourthOption={this.state.evaluateQ5F4}
                    answer={this.state.evaluateQ5A}
                    used={this.state.evaluateQ5U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteEvaluateQuestion}
                  />
                  <QuestionTemplate
                    questionNumber={"evaluateQ6Q"}
                    firstOptionNumber={"evaluateQ6F1"}
                    secondOptionNumber={"evaluateQ6F2"}
                    thirdOptionNumber={"evaluateQ6F3"}
                    fourthOptionNumber={"evaluateQ6F4"}
                    answerNumber={"evaluateQ6A"}
                    question={this.state.evaluateQ6Q}
                    firstOption={this.state.evaluateQ6F1}
                    secondOption={this.state.evaluateQ6F2}
                    thirdOption={this.state.evaluateQ6F3}
                    fourthOption={this.state.evaluateQ6F4}
                    answer={this.state.evaluateQ6A}
                    used={this.state.evaluateQ6U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteEvaluateQuestion}
                  />
                  <QuestionTemplate
                    questionNumber={"evaluateQ7Q"}
                    firstOptionNumber={"evaluateQ7F1"}
                    secondOptionNumber={"evaluateQ7F2"}
                    thirdOptionNumber={"evaluateQ7F3"}
                    fourthOptionNumber={"evaluateQ7F4"}
                    answerNumber={"evaluateQ7A"}
                    question={this.state.evaluateQ7Q}
                    firstOption={this.state.evaluateQ7F1}
                    secondOption={this.state.evaluateQ7F2}
                    thirdOption={this.state.evaluateQ7F3}
                    fourthOption={this.state.evaluateQ7F4}
                    answer={this.state.evaluateQ7A}
                    used={this.state.evaluateQ7U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteEvaluateQuestion}
                  />
                  <QuestionTemplate
                    questionNumber={"evaluateQ8Q"}
                    firstOptionNumber={"evaluateQ8F1"}
                    secondOptionNumber={"evaluateQ8F2"}
                    thirdOptionNumber={"evaluateQ8F3"}
                    fourthOptionNumber={"evaluateQ8F4"}
                    answerNumber={"evaluateQ8A"}
                    question={this.state.evaluateQ8Q}
                    firstOption={this.state.evaluateQ8F1}
                    secondOption={this.state.evaluateQ8F2}
                    thirdOption={this.state.evaluateQ8F3}
                    fourthOption={this.state.evaluateQ8F4}
                    answer={this.state.evaluateQ8A}
                    used={this.state.evaluateQ8U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteEvaluateQuestion}
                  />
                  <QuestionTemplate
                    questionNumber={"evaluateQ9Q"}
                    firstOptionNumber={"evaluateQ9F1"}
                    secondOptionNumber={"evaluateQ9F2"}
                    thirdOptionNumber={"evaluateQ9F3"}
                    fourthOptionNumber={"evaluateQ9F4"}
                    answerNumber={"evaluateQ9A"}
                    question={this.state.evaluateQ9Q}
                    firstOption={this.state.evaluateQ9F1}
                    secondOption={this.state.evaluateQ9F2}
                    thirdOption={this.state.evaluateQ9F3}
                    fourthOption={this.state.evaluateQ9F4}
                    answer={this.state.evaluateQ9A}
                    used={this.state.evaluateQ9U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteEvaluateQuestion}
                  />
                  <QuestionTemplate
                    questionNumber={"evaluateQ10Q"}
                    firstOptionNumber={"evaluateQ10F1"}
                    secondOptionNumber={"evaluateQ10F2"}
                    thirdOptionNumber={"evaluateQ10F3"}
                    fourthOptionNumber={"evaluateQ10F4"}
                    answerNumber={"evaluateQ10A"}
                    question={this.state.evaluateQ10Q}
                    firstOption={this.state.evaluateQ10F1}
                    secondOption={this.state.evaluateQ0F2}
                    thirdOption={this.state.evaluateQ10F3}
                    fourthOption={this.state.evaluateQ10F4}
                    answer={this.state.evaluateQ10A}
                    used={this.state.evaluateQ10U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteEvaluateQuestion}
                  />
                  <QuestionTemplate
                    questionNumber={"evaluateQ11Q"}
                    firstOptionNumber={"evaluateQ11F1"}
                    secondOptionNumber={"evaluateQ11F2"}
                    thirdOptionNumber={"evaluateQ11F3"}
                    fourthOptionNumber={"evaluateQ11F4"}
                    answerNumber={"evaluateQ11A"}
                    question={this.state.evaluateQ11Q}
                    firstOption={this.state.evaluateQ11F1}
                    secondOption={this.state.evaluateQ11F2}
                    thirdOption={this.state.evaluateQ11F3}
                    fourthOption={this.state.evaluateQ11F4}
                    answer={this.state.evaluateQ11A}
                    used={this.state.evaluateQ11U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteEvaluateQuestion}
                  />
                  <QuestionTemplate
                    questionNumber={"evaluateQ12Q"}
                    firstOptionNumber={"evaluateQ12F1"}
                    secondOptionNumber={"evaluateQ12F2"}
                    thirdOptionNumber={"evaluateQ12F3"}
                    fourthOptionNumber={"evaluateQ12F4"}
                    answerNumber={"evaluateQ12A"}
                    question={this.state.evaluateQ12Q}
                    firstOption={this.state.evaluateQ12F1}
                    secondOption={this.state.evaluateQ12F2}
                    thirdOption={this.state.evaluateQ12F3}
                    fourthOption={this.state.evaluateQ12F4}
                    answer={this.state.evaluateQ12A}
                    used={this.state.evaluateQ12U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteEvaluateQuestion}
                  />
                  <QuestionTemplate
                    questionNumber={"evaluateQ13Q"}
                    firstOptionNumber={"evaluateQ13F1"}
                    secondOptionNumber={"evaluateQ13F2"}
                    thirdOptionNumber={"evaluateQ13F3"}
                    fourthOptionNumber={"evaluateQ13F4"}
                    answerNumber={"evaluateQ13A"}
                    question={this.state.evaluateQ13Q}
                    firstOption={this.state.evaluateQ13F1}
                    secondOption={this.state.evaluateQ13F2}
                    thirdOption={this.state.evaluateQ13F3}
                    fourthOption={this.state.evaluateQ13F4}
                    answer={this.state.evaluateQ13A}
                    used={this.state.evaluateQ13U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteEvaluateQuestion}
                  />
                  <QuestionTemplate
                    questionNumber={"evaluateQ14Q"}
                    firstOptionNumber={"evaluateQ14F1"}
                    secondOptionNumber={"evaluateQ14F2"}
                    thirdOptionNumber={"evaluateQ14F3"}
                    fourthOptionNumber={"evaluateQ14F4"}
                    answerNumber={"evaluateQ14A"}
                    question={this.state.evaluateQ14Q}
                    firstOption={this.state.evaluateQ14F1}
                    secondOption={this.state.evaluateQ14F2}
                    thirdOption={this.state.evaluateQ14F3}
                    fourthOption={this.state.evaluateQ14F4}
                    answer={this.state.evaluateQ14A}
                    used={this.state.evaluateQ14U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteEvaluateQuestion}
                  />
                  <QuestionTemplate
                    questionNumber={"evaluateQ15Q"}
                    firstOptionNumber={"evaluateQ15F1"}
                    secondOptionNumber={"evaluateQ15F2"}
                    thirdOptionNumber={"evaluateQ15F3"}
                    fourthOptionNumber={"evaluateQ15F4"}
                    answerNumber={"evaluateQ15A"}
                    question={this.state.evaluateQ15Q}
                    firstOption={this.state.evaluateQ15F1}
                    secondOption={this.state.evaluate15F2}
                    thirdOption={this.state.evaluateQ15F3}
                    fourthOption={this.state.evaluateQ15F4}
                    answer={this.state.evaluateQ15A}
                    used={this.state.evaluateQ15U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteEvaluateQuestion}
                  />
                  <QuestionTemplate
                    questionNumber={"evaluateQ16Q"}
                    firstOptionNumber={"evaluateQ16F1"}
                    secondOptionNumber={"evaluateQ16F2"}
                    thirdOptionNumber={"evaluateQ16F3"}
                    fourthOptionNumber={"evaluateQ16F4"}
                    answerNumber={"evaluateQ16A"}
                    question={this.state.evaluateQ16Q}
                    firstOption={this.state.evaluateQ16F1}
                    secondOption={this.state.evaluateQ16F2}
                    thirdOption={this.state.evaluateQ16F3}
                    fourthOption={this.state.evaluateQ16F4}
                    answer={this.state.evaluateQ16A}
                    used={this.state.evaluateQ16U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteEvaluateQuestion}
                  />
                  <QuestionTemplate
                    questionNumber={"evaluateQ17Q"}
                    firstOptionNumber={"evaluateQ17F1"}
                    secondOptionNumber={"evaluateQ17F2"}
                    thirdOptionNumber={"evaluateQ17F3"}
                    fourthOptionNumber={"evaluateQ17F4"}
                    answerNumber={"evaluateQ17A"}
                    question={this.state.evaluateQ17Q}
                    firstOption={this.state.evaluateQ17F1}
                    secondOption={this.state.evaluateQ17F2}
                    thirdOption={this.state.evaluateQ17F3}
                    fourthOption={this.state.evaluateQ17F4}
                    answer={this.state.evaluateQ17A}
                    used={this.state.evaluateQ17U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteEvaluateQuestion}
                  />
                  <QuestionTemplate
                    questionNumber={"evaluateQ18Q"}
                    firstOptionNumber={"evaluateQ18F1"}
                    secondOptionNumber={"evaluateQ18F2"}
                    thirdOptionNumber={"evaluateQ18F3"}
                    fourthOptionNumber={"evaluateQ18F4"}
                    answerNumber={"evaluateQ18A"}
                    question={this.state.evaluateQ18Q}
                    firstOption={this.state.evaluateQ18F1}
                    secondOption={this.state.evaluateQ18F2}
                    thirdOption={this.state.evaluateQ18F3}
                    fourthOption={this.state.evaluateQ18F4}
                    answer={this.state.evaluateQ18A}
                    used={this.state.evaluateQ18U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteEvaluateQuestion}
                  />
                  <QuestionTemplate
                    questionNumber={"evaluateQ19Q"}
                    firstOptionNumber={"evaluateQ19F1"}
                    secondOptionNumber={"evaluateQ19F2"}
                    thirdOptionNumber={"evaluateQ19F3"}
                    fourthOptionNumber={"evaluateQ19F4"}
                    answerNumber={"evaluateQ19A"}
                    question={this.state.evaluateQ19Q}
                    firstOption={this.state.evaluateQ19F1}
                    secondOption={this.state.evaluateQ19F2}
                    thirdOption={this.state.evaluateQ19F3}
                    fourthOption={this.state.evaluateQ19F4}
                    answer={this.state.evaluateQ19A}
                    used={this.state.evaluateQ19U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteEvaluateQuestion}
                  />
                  <QuestionTemplate
                    questionNumber={"evaluateQ20Q"}
                    firstOptionNumber={"evaluateQ20F1"}
                    secondOptionNumber={"evaluateQ20F2"}
                    thirdOptionNumber={"evaluateQ20F3"}
                    fourthOptionNumber={"evaluateQ20F4"}
                    answerNumber={"evaluateQ20A"}
                    question={this.state.evaluateQ20Q}
                    firstOption={this.state.evaluateQ20F1}
                    secondOption={this.state.evaluateQ20F2}
                    thirdOption={this.state.evaluateQ20F3}
                    fourthOption={this.state.evaluateQ20F4}
                    answer={this.state.evaluateQ20A}
                    used={this.state.evaluateQ20U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteEvaluateQuestion}
                  />
                  <QuestionTemplate
                    questionNumber={"evaluateQ21Q"}
                    firstOptionNumber={"evaluateQ21F1"}
                    secondOptionNumber={"evaluateQ21F2"}
                    thirdOptionNumber={"evaluateQ21F3"}
                    fourthOptionNumber={"evaluateQ21F4"}
                    answerNumber={"evaluateQ21A"}
                    question={this.state.evaluateQ21Q}
                    firstOption={this.state.evaluateQ21F1}
                    secondOption={this.state.evaluateQ21F2}
                    thirdOption={this.state.evaluateQ21F3}
                    fourthOption={this.state.evaluateQ21F4}
                    answer={this.state.evaluateQ21A}
                    used={this.state.evaluateQ21U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteEvaluateQuestion}
                  />
                  <QuestionTemplate
                    questionNumber={"evaluateQ22Q"}
                    firstOptionNumber={"evaluateQ22F1"}
                    secondOptionNumber={"evaluateQ22F2"}
                    thirdOptionNumber={"evaluateQ22F3"}
                    fourthOptionNumber={"evaluateQ22F4"}
                    answerNumber={"evaluateQ22A"}
                    question={this.state.evaluateQ22Q}
                    firstOption={this.state.evaluateQ22F1}
                    secondOption={this.state.evaluateQ22F2}
                    thirdOption={this.state.evaluateQ22F3}
                    fourthOption={this.state.evaluateQ22F4}
                    answer={this.state.evaluateQ22A}
                    used={this.state.evaluateQ22U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteEvaluateQuestion}
                  />
                  <QuestionTemplate
                    questionNumber={"evaluateQ23Q"}
                    firstOptionNumber={"evaluateQ23F1"}
                    secondOptionNumber={"evaluateQ23F2"}
                    thirdOptionNumber={"evaluateQ23F3"}
                    fourthOptionNumber={"evaluateQ23F4"}
                    answerNumber={"evaluateQ23A"}
                    question={this.state.evaluateQ23Q}
                    firstOption={this.state.evaluateQ23F1}
                    secondOption={this.state.evaluateQ23F2}
                    thirdOption={this.state.evaluateQ23F3}
                    fourthOption={this.state.evaluateQ23F4}
                    answer={this.state.evaluateQ23A}
                    used={this.state.evaluateQ23U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteEvaluateQuestion}
                  />
                  <QuestionTemplate
                    questionNumber={"evaluateQ24Q"}
                    firstOptionNumber={"evaluateQ24F1"}
                    secondOptionNumber={"evaluateQ24F2"}
                    thirdOptionNumber={"evaluateQ24F3"}
                    fourthOptionNumber={"evaluateQ24F4"}
                    answerNumber={"evaluateQ24A"}
                    question={this.state.evaluateQ24Q}
                    firstOption={this.state.evaluateQ24F1}
                    secondOption={this.state.evaluateQ24F2}
                    thirdOption={this.state.evaluateQ24F3}
                    fourthOption={this.state.evaluateQ24F4}
                    answer={this.state.evaluateQ24A}
                    used={this.state.evaluateQ24U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteEvaluateQuestion}
                  />
                  <QuestionTemplate
                    questionNumber={"evaluateQ25Q"}
                    firstOptionNumber={"evaluateQ25F1"}
                    secondOptionNumber={"evaluateQ25F2"}
                    thirdOptionNumber={"evaluateQ25F3"}
                    fourthOptionNumber={"evaluateQ25F4"}
                    answerNumber={"evaluateQ25A"}
                    question={this.state.evaluateQ25Q}
                    firstOption={this.state.evaluateQ25F1}
                    secondOption={this.state.evaluateQ25F2}
                    thirdOption={this.state.evaluateQ25F3}
                    fourthOption={this.state.evaluateQ25F4}
                    answer={this.state.evaluateQ25A}
                    used={this.state.evaluateQ25U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteEvaluateQuestion}
                  />
                  <QuestionTemplate
                    questionNumber={"evaluateQ26Q"}
                    firstOptionNumber={"evaluateQ26F1"}
                    secondOptionNumber={"evaluateQ26F2"}
                    thirdOptionNumber={"evaluateQ26F3"}
                    fourthOptionNumber={"evaluateQ26F4"}
                    answerNumber={"evaluateQ26A"}
                    question={this.state.evaluateQ26Q}
                    firstOption={this.state.evaluateQ26F1}
                    secondOption={this.state.evaluateQ26F2}
                    thirdOption={this.state.evaluateQ26F3}
                    fourthOption={this.state.evaluateQ26F4}
                    answer={this.state.evaluateQ26A}
                    used={this.state.evaluateQ26U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteEvaluateQuestion}
                  />
                  <QuestionTemplate
                    questionNumber={"evaluateQ27Q"}
                    firstOptionNumber={"evaluateQ27F1"}
                    secondOptionNumber={"evaluateQ27F2"}
                    thirdOptionNumber={"evaluateQ27F3"}
                    fourthOptionNumber={"evaluateQ27F4"}
                    answerNumber={"evaluateQ27A"}
                    question={this.state.evaluateQ27Q}
                    firstOption={this.state.evaluateQ27F1}
                    secondOption={this.state.evaluateQ27F2}
                    thirdOption={this.state.evaluateQ27F3}
                    fourthOption={this.state.evaluateQ27F4}
                    answer={this.state.evaluateQ27A}
                    used={this.state.evaluateQ27U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteEvaluateQuestion}
                  />
                  <QuestionTemplate
                    questionNumber={"evaluateQ28Q"}
                    firstOptionNumber={"evaluateQ28F1"}
                    secondOptionNumber={"evaluateQ28F2"}
                    thirdOptionNumber={"evaluateQ28F3"}
                    fourthOptionNumber={"evaluateQ28F4"}
                    answerNumber={"evaluateQ28A"}
                    question={this.state.evaluateQ28Q}
                    firstOption={this.state.evaluateQ28F1}
                    secondOption={this.state.evaluateQ28F2}
                    thirdOption={this.state.evaluateQ28F3}
                    fourthOption={this.state.evaluateQ28F4}
                    answer={this.state.evaluateQ28A}
                    used={this.state.evaluateQ28U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteEvaluateQuestion}
                  />
                  <QuestionTemplate
                    questionNumber={"evaluateQ29Q"}
                    firstOptionNumber={"evaluateQ29F1"}
                    secondOptionNumber={"evaluateQ29F2"}
                    thirdOptionNumber={"evaluateQ29F3"}
                    fourthOptionNumber={"evaluateQ29F4"}
                    answerNumber={"evaluateQ29A"}
                    question={this.state.evaluateQ29Q}
                    firstOption={this.state.evaluateQ29F1}
                    secondOption={this.state.evaluateQ29F2}
                    thirdOption={this.state.evaluateQ29F3}
                    fourthOption={this.state.evaluateQ29F4}
                    answer={this.state.evaluateQ29A}
                    used={this.state.evaluateQ29U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteEvaluateQuestion}
                  />
                  <QuestionTemplate
                    questionNumber={"evaluateQ30Q"}
                    firstOptionNumber={"evaluateQ30F1"}
                    secondOptionNumber={"evaluateQ30F2"}
                    thirdOptionNumber={"evaluateQ30F3"}
                    fourthOptionNumber={"evaluateQ30F4"}
                    answerNumber={"evaluateQ30A"}
                    question={this.state.evaluateQ30Q}
                    firstOption={this.state.evaluateQ30F1}
                    secondOption={this.state.evaluateQ30F2}
                    thirdOption={this.state.evaluateQ30F3}
                    fourthOption={this.state.evaluateQ30F4}
                    answer={this.state.evaluateQ30A}
                    used={this.state.evaluateQ30U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteEvaluateQuestion}
                  />

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      marginLeft: "6px",
                    }}
                  >
                    <Typography>
                      {" "}
                      Click to add another question
                      <IconButton
                        aria-label="add"
                        className={classes.margin}
                        onClick={this.handleAddEvaluateQuestion}
                      >
                        <AddIcon />
                      </IconButton>
                    </Typography>
                  </div>
                </div>
                <div style={{ margin: "auto", padding: "40px" }}>
                  <Typography color="secondary" style={{ marginLeft: "8px" }}>
                    <Box fontWeight="medium" fontSize="20px">
                      Time for Evaluation Test
                    </Box>
                  </Typography>
                  <TestTimeTextFields
                    time={this.state.evaluateTime}
                    timeType={"evaluateTime"}
                    handleChange={this.handleChange}
                  />
                </div>

                <div style={{ margin: "auto", padding: "40px" }}>
                  <Typography color="secondary" style={{ marginLeft: "8px" }}>
                    {" "}
                    <Box fontWeight="medium" fontSize="20px">
                      Assess your previous knowledge
                    </Box>
                  </Typography>
                  <QuestionTemplate
                    questionNumber={"apQ1Q"}
                    firstOptionNumber={"apQ1F1"}
                    secondOptionNumber={"apQ1F2"}
                    thirdOptionNumber={"apQ1F3"}
                    fourthOptionNumber={"apQ1F4"}
                    answerNumber={"apQ1A"}
                    question={this.state.apQ1Q}
                    firstOption={this.state.apQ1F1}
                    secondOption={this.state.apQ1F2}
                    thirdOption={this.state.apQ1F3}
                    fourthOption={this.state.apQ1F4}
                    answer={this.state.apQ1A}
                    used={this.state.apQ1U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteAssessPreviousQuestion}
                  />

                  <QuestionTemplate
                    questionNumber={"apQ2Q"}
                    firstOptionNumber={"apQ2F1"}
                    secondOptionNumber={"apQ2F2"}
                    thirdOptionNumber={"apQ2F3"}
                    fourthOptionNumber={"apQ2F4"}
                    answerNumber={"apQ2A"}
                    question={this.state.apQ2Q}
                    firstOption={this.state.apQ2F1}
                    secondOption={this.state.apQ2F2}
                    thirdOption={this.state.apQ2F3}
                    fourthOption={this.state.apQ2F4}
                    answer={this.state.apQ2A}
                    used={this.state.apQ2U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteAssessPreviousQuestion}
                  />

                  <QuestionTemplate
                    questionNumber={"apQ3Q"}
                    firstOptionNumber={"apQ3F1"}
                    secondOptionNumber={"apQ3F2"}
                    thirdOptionNumber={"apQ3F3"}
                    fourthOptionNumber={"apQ3F4"}
                    answerNumber={"apQ3A"}
                    question={this.state.apQ3Q}
                    firstOption={this.state.apQ3F1}
                    secondOption={this.state.apQ3F2}
                    thirdOption={this.state.apQ3F3}
                    fourthOption={this.state.apQ3F4}
                    answer={this.state.apQ3A}
                    used={this.state.apQ3U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteAssessPreviousQuestion}
                  />
                  <QuestionTemplate
                    questionNumber={"apQ4Q"}
                    firstOptionNumber={"apQ4F1"}
                    secondOptionNumber={"apQ4F2"}
                    thirdOptionNumber={"apQ4F3"}
                    fourthOptionNumber={"apQ4F4"}
                    answerNumber={"apQ4A"}
                    question={this.state.apQ4Q}
                    firstOption={this.state.apQ4F1}
                    secondOption={this.state.apQ4F2}
                    thirdOption={this.state.apQ4F3}
                    fourthOption={this.state.apQ4F4}
                    answer={this.state.apQ4A}
                    used={this.state.apQ4U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteAssessPreviousQuestion}
                  />
                  <QuestionTemplate
                    questionNumber={"apQ5Q"}
                    firstOptionNumber={"apQ5F1"}
                    secondOptionNumber={"apQ5F2"}
                    thirdOptionNumber={"apQ5F3"}
                    fourthOptionNumber={"apQ5F4"}
                    answerNumber={"apQ5A"}
                    question={this.state.apQ5Q}
                    firstOption={this.state.apQ5F1}
                    secondOption={this.state.apQ5F2}
                    thirdOption={this.state.apQ5F3}
                    fourthOption={this.state.apQ5F4}
                    answer={this.state.apQ5A}
                    used={this.state.apQ5U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteAssessPreviousQuestion}
                  />
                  <QuestionTemplate
                    questionNumber={"apQ6Q"}
                    firstOptionNumber={"apQ6F1"}
                    secondOptionNumber={"apQ6F2"}
                    thirdOptionNumber={"apQ6F3"}
                    fourthOptionNumber={"apQ6F4"}
                    answerNumber={"apQ6A"}
                    question={this.state.apQ6Q}
                    firstOption={this.state.apQ6F1}
                    secondOption={this.state.apQ6F2}
                    thirdOption={this.state.apQ6F3}
                    fourthOption={this.state.apQ6F4}
                    answer={this.state.apQ6A}
                    used={this.state.apQ6U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteAssessPreviousQuestion}
                  />
                  <QuestionTemplate
                    questionNumber={"apQ7Q"}
                    firstOptionNumber={"apQ7F1"}
                    secondOptionNumber={"apQ7F2"}
                    thirdOptionNumber={"apQ7F3"}
                    fourthOptionNumber={"apQ7F4"}
                    answerNumber={"apQ7A"}
                    question={this.state.apQ7Q}
                    firstOption={this.state.apQ7F1}
                    secondOption={this.state.apQ7F2}
                    thirdOption={this.state.apQ7F3}
                    fourthOption={this.state.apQ7F4}
                    answer={this.state.apQ7A}
                    used={this.state.apQ7U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteAssessPreviousQuestion}
                  />
                  <QuestionTemplate
                    questionNumber={"apQ8Q"}
                    firstOptionNumber={"apQ8F1"}
                    secondOptionNumber={"apQ8F2"}
                    thirdOptionNumber={"apQ8F3"}
                    fourthOptionNumber={"apQ8F4"}
                    answerNumber={"apQ8A"}
                    question={this.state.apQ8Q}
                    firstOption={this.state.apQ8F1}
                    secondOption={this.state.apQ8F2}
                    thirdOption={this.state.apQ8F3}
                    fourthOption={this.state.apQ8F4}
                    answer={this.state.apQ8A}
                    used={this.state.apQ8U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteAssessPreviousQuestion}
                  />
                  <QuestionTemplate
                    questionNumber={"apQ9Q"}
                    firstOptionNumber={"apQ9F1"}
                    secondOptionNumber={"apQ9F2"}
                    thirdOptionNumber={"apQ9F3"}
                    fourthOptionNumber={"apQ9F4"}
                    answerNumber={"apQ9A"}
                    question={this.state.apQ9Q}
                    firstOption={this.state.apQ9F1}
                    secondOption={this.state.apQ9F2}
                    thirdOption={this.state.apQ9F3}
                    fourthOption={this.state.apQ9F4}
                    answer={this.state.apQ9A}
                    used={this.state.apQ9U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteAssessPreviousQuestion}
                  />
                  <QuestionTemplate
                    questionNumber={"apQ10Q"}
                    firstOptionNumber={"apQ10F1"}
                    secondOptionNumber={"apQ10F2"}
                    thirdOptionNumber={"apQ10F3"}
                    fourthOptionNumber={"apQ10F4"}
                    answerNumber={"apQ10A"}
                    question={this.state.apQ10Q}
                    firstOption={this.state.apQ10F1}
                    secondOption={this.state.apQ0F2}
                    thirdOption={this.state.apQ10F3}
                    fourthOption={this.state.apQ10F4}
                    answer={this.state.apQ10A}
                    used={this.state.apQ10U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteAssessPreviousQuestion}
                  />
                  <QuestionTemplate
                    questionNumber={"apQ11Q"}
                    firstOptionNumber={"apQ11F1"}
                    secondOptionNumber={"apQ11F2"}
                    thirdOptionNumber={"apQ11F3"}
                    fourthOptionNumber={"apQ11F4"}
                    answerNumber={"apQ11A"}
                    question={this.state.apQ11Q}
                    firstOption={this.state.apQ11F1}
                    secondOption={this.state.apQ11F2}
                    thirdOption={this.state.apQ11F3}
                    fourthOption={this.state.apQ11F4}
                    answer={this.state.apQ11A}
                    used={this.state.apQ11U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteAssessPreviousQuestion}
                  />
                  <QuestionTemplate
                    questionNumber={"apQ12Q"}
                    firstOptionNumber={"apQ12F1"}
                    secondOptionNumber={"apQ12F2"}
                    thirdOptionNumber={"apQ12F3"}
                    fourthOptionNumber={"apQ12F4"}
                    answerNumber={"apQ12A"}
                    question={this.state.apQ12Q}
                    firstOption={this.state.apQ12F1}
                    secondOption={this.state.apQ12F2}
                    thirdOption={this.state.apQ12F3}
                    fourthOption={this.state.apQ12F4}
                    answer={this.state.apQ12A}
                    used={this.state.apQ12U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteAssessPreviousQuestion}
                  />
                  <QuestionTemplate
                    questionNumber={"apQ13Q"}
                    firstOptionNumber={"apQ13F1"}
                    secondOptionNumber={"apQ13F2"}
                    thirdOptionNumber={"apQ13F3"}
                    fourthOptionNumber={"apQ13F4"}
                    answerNumber={"apQ13A"}
                    question={this.state.apQ13Q}
                    firstOption={this.state.apQ13F1}
                    secondOption={this.state.apQ13F2}
                    thirdOption={this.state.apQ13F3}
                    fourthOption={this.state.apQ13F4}
                    answer={this.state.apQ13A}
                    used={this.state.apQ13U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteAssessPreviousQuestion}
                  />
                  <QuestionTemplate
                    questionNumber={"apQ14Q"}
                    firstOptionNumber={"apQ14F1"}
                    secondOptionNumber={"apQ14F2"}
                    thirdOptionNumber={"apQ14F3"}
                    fourthOptionNumber={"apQ14F4"}
                    answerNumber={"apQ14A"}
                    question={this.state.apQ14Q}
                    firstOption={this.state.apQ14F1}
                    secondOption={this.state.apQ14F2}
                    thirdOption={this.state.apQ14F3}
                    fourthOption={this.state.apQ14F4}
                    answer={this.state.apQ14A}
                    used={this.state.apQ14U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteAssessPreviousQuestion}
                  />
                  <QuestionTemplate
                    questionNumber={"apQ15Q"}
                    firstOptionNumber={"apQ15F1"}
                    secondOptionNumber={"apQ15F2"}
                    thirdOptionNumber={"apQ15F3"}
                    fourthOptionNumber={"apQ15F4"}
                    answerNumber={"apQ15A"}
                    question={this.state.apQ15Q}
                    firstOption={this.state.apQ15F1}
                    secondOption={this.state.ap15F2}
                    thirdOption={this.state.apQ15F3}
                    fourthOption={this.state.apQ15F4}
                    answer={this.state.apQ15A}
                    used={this.state.apQ15U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteAssessPreviousQuestion}
                  />
                  <QuestionTemplate
                    questionNumber={"apQ16Q"}
                    firstOptionNumber={"apQ16F1"}
                    secondOptionNumber={"apQ16F2"}
                    thirdOptionNumber={"apQ16F3"}
                    fourthOptionNumber={"apQ16F4"}
                    answerNumber={"apQ16A"}
                    question={this.state.apQ16Q}
                    firstOption={this.state.apQ16F1}
                    secondOption={this.state.apQ16F2}
                    thirdOption={this.state.apQ16F3}
                    fourthOption={this.state.apQ16F4}
                    answer={this.state.apQ16A}
                    used={this.state.apQ16U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteAssessPreviousQuestion}
                  />
                  <QuestionTemplate
                    questionNumber={"apQ17Q"}
                    firstOptionNumber={"apQ17F1"}
                    secondOptionNumber={"apQ17F2"}
                    thirdOptionNumber={"apQ17F3"}
                    fourthOptionNumber={"apQ17F4"}
                    answerNumber={"apQ17A"}
                    question={this.state.apQ17Q}
                    firstOption={this.state.apQ17F1}
                    secondOption={this.state.apQ17F2}
                    thirdOption={this.state.apQ17F3}
                    fourthOption={this.state.apQ17F4}
                    answer={this.state.apQ17A}
                    used={this.state.apQ17U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteAssessPreviousQuestion}
                  />
                  <QuestionTemplate
                    questionNumber={"apQ18Q"}
                    firstOptionNumber={"apQ18F1"}
                    secondOptionNumber={"apQ18F2"}
                    thirdOptionNumber={"apQ18F3"}
                    fourthOptionNumber={"apQ18F4"}
                    answerNumber={"apQ18A"}
                    question={this.state.apQ18Q}
                    firstOption={this.state.apQ18F1}
                    secondOption={this.state.apQ18F2}
                    thirdOption={this.state.apQ18F3}
                    fourthOption={this.state.apQ18F4}
                    answer={this.state.apQ18A}
                    used={this.state.apQ18U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteAssessPreviousQuestion}
                  />
                  <QuestionTemplate
                    questionNumber={"apQ19Q"}
                    firstOptionNumber={"apQ19F1"}
                    secondOptionNumber={"apQ19F2"}
                    thirdOptionNumber={"apQ19F3"}
                    fourthOptionNumber={"apQ19F4"}
                    answerNumber={"apQ19A"}
                    question={this.state.apQ19Q}
                    firstOption={this.state.apQ19F1}
                    secondOption={this.state.apQ19F2}
                    thirdOption={this.state.apQ19F3}
                    fourthOption={this.state.apQ19F4}
                    answer={this.state.apQ19A}
                    used={this.state.apQ19U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteAssessPreviousQuestion}
                  />
                  <QuestionTemplate
                    questionNumber={"apQ20Q"}
                    firstOptionNumber={"apQ20F1"}
                    secondOptionNumber={"apQ20F2"}
                    thirdOptionNumber={"apQ20F3"}
                    fourthOptionNumber={"apQ20F4"}
                    answerNumber={"apQ20A"}
                    question={this.state.apQ20Q}
                    firstOption={this.state.apQ20F1}
                    secondOption={this.state.apQ20F2}
                    thirdOption={this.state.apQ20F3}
                    fourthOption={this.state.apQ20F4}
                    answer={this.state.apQ20A}
                    used={this.state.apQ20U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteAssessPreviousQuestion}
                  />
                  <QuestionTemplate
                    questionNumber={"apQ21Q"}
                    firstOptionNumber={"apQ21F1"}
                    secondOptionNumber={"apQ21F2"}
                    thirdOptionNumber={"apQ21F3"}
                    fourthOptionNumber={"apQ21F4"}
                    answerNumber={"apQ21A"}
                    question={this.state.apQ21Q}
                    firstOption={this.state.apQ21F1}
                    secondOption={this.state.apQ21F2}
                    thirdOption={this.state.apQ21F3}
                    fourthOption={this.state.apQ21F4}
                    answer={this.state.apQ21A}
                    used={this.state.apQ21U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteAssessPreviousQuestion}
                  />
                  <QuestionTemplate
                    questionNumber={"apQ22Q"}
                    firstOptionNumber={"apQ22F1"}
                    secondOptionNumber={"apQ22F2"}
                    thirdOptionNumber={"apQ22F3"}
                    fourthOptionNumber={"apQ22F4"}
                    answerNumber={"apQ22A"}
                    question={this.state.apQ22Q}
                    firstOption={this.state.apQ22F1}
                    secondOption={this.state.apQ22F2}
                    thirdOption={this.state.apQ22F3}
                    fourthOption={this.state.apQ22F4}
                    answer={this.state.apQ22A}
                    used={this.state.apQ22U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteAssessPreviousQuestion}
                  />
                  <QuestionTemplate
                    questionNumber={"apQ23Q"}
                    firstOptionNumber={"apQ23F1"}
                    secondOptionNumber={"apQ23F2"}
                    thirdOptionNumber={"apQ23F3"}
                    fourthOptionNumber={"apQ23F4"}
                    answerNumber={"apQ23A"}
                    question={this.state.apQ23Q}
                    firstOption={this.state.apQ23F1}
                    secondOption={this.state.apQ23F2}
                    thirdOption={this.state.apQ23F3}
                    fourthOption={this.state.apQ23F4}
                    answer={this.state.apQ23A}
                    used={this.state.apQ23U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteAssessPreviousQuestion}
                  />
                  <QuestionTemplate
                    questionNumber={"apQ24Q"}
                    firstOptionNumber={"apQ24F1"}
                    secondOptionNumber={"apQ24F2"}
                    thirdOptionNumber={"apQ24F3"}
                    fourthOptionNumber={"apQ24F4"}
                    answerNumber={"apQ24A"}
                    question={this.state.apQ24Q}
                    firstOption={this.state.apQ24F1}
                    secondOption={this.state.apQ24F2}
                    thirdOption={this.state.apQ24F3}
                    fourthOption={this.state.apQ24F4}
                    answer={this.state.apQ24A}
                    used={this.state.apQ24U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteAssessPreviousQuestion}
                  />
                  <QuestionTemplate
                    questionNumber={"apQ25Q"}
                    firstOptionNumber={"apQ25F1"}
                    secondOptionNumber={"apQ25F2"}
                    thirdOptionNumber={"apQ25F3"}
                    fourthOptionNumber={"apQ25F4"}
                    answerNumber={"apQ25A"}
                    question={this.state.apQ25Q}
                    firstOption={this.state.apQ25F1}
                    secondOption={this.state.apQ25F2}
                    thirdOption={this.state.apQ25F3}
                    fourthOption={this.state.apQ25F4}
                    answer={this.state.apQ25A}
                    used={this.state.apQ25U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteAssessPreviousQuestion}
                  />
                  <QuestionTemplate
                    questionNumber={"apQ26Q"}
                    firstOptionNumber={"apQ26F1"}
                    secondOptionNumber={"apQ26F2"}
                    thirdOptionNumber={"apQ26F3"}
                    fourthOptionNumber={"apQ26F4"}
                    answerNumber={"apQ26A"}
                    question={this.state.apQ26Q}
                    firstOption={this.state.apQ26F1}
                    secondOption={this.state.apQ26F2}
                    thirdOption={this.state.apQ26F3}
                    fourthOption={this.state.apQ26F4}
                    answer={this.state.apQ26A}
                    used={this.state.apQ26U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteAssessPreviousQuestion}
                  />
                  <QuestionTemplate
                    questionNumber={"apQ27Q"}
                    firstOptionNumber={"apQ27F1"}
                    secondOptionNumber={"apQ27F2"}
                    thirdOptionNumber={"apQ27F3"}
                    fourthOptionNumber={"apQ27F4"}
                    answerNumber={"apQ27A"}
                    question={this.state.apQ27Q}
                    firstOption={this.state.apQ27F1}
                    secondOption={this.state.apQ27F2}
                    thirdOption={this.state.apQ27F3}
                    fourthOption={this.state.apQ27F4}
                    answer={this.state.apQ27A}
                    used={this.state.apQ27U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteAssessPreviousQuestion}
                  />
                  <QuestionTemplate
                    questionNumber={"apQ28Q"}
                    firstOptionNumber={"apQ28F1"}
                    secondOptionNumber={"apQ28F2"}
                    thirdOptionNumber={"apQ28F3"}
                    fourthOptionNumber={"apQ28F4"}
                    answerNumber={"apQ28A"}
                    question={this.state.apQ28Q}
                    firstOption={this.state.apQ28F1}
                    secondOption={this.state.apQ28F2}
                    thirdOption={this.state.apQ28F3}
                    fourthOption={this.state.apQ28F4}
                    answer={this.state.apQ28A}
                    used={this.state.apQ28U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteAssessPreviousQuestion}
                  />
                  <QuestionTemplate
                    questionNumber={"apQ29Q"}
                    firstOptionNumber={"apQ29F1"}
                    secondOptionNumber={"apQ29F2"}
                    thirdOptionNumber={"apQ29F3"}
                    fourthOptionNumber={"apQ29F4"}
                    answerNumber={"apQ29A"}
                    question={this.state.apQ29Q}
                    firstOption={this.state.apQ29F1}
                    secondOption={this.state.apQ29F2}
                    thirdOption={this.state.apQ29F3}
                    fourthOption={this.state.apQ29F4}
                    answer={this.state.apQ29A}
                    used={this.state.apQ29U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteAssessPreviousQuestion}
                  />
                  <QuestionTemplate
                    questionNumber={"apQ30Q"}
                    firstOptionNumber={"apQ30F1"}
                    secondOptionNumber={"apQ30F2"}
                    thirdOptionNumber={"apQ30F3"}
                    fourthOptionNumber={"apQ30F4"}
                    answerNumber={"apQ30A"}
                    question={this.state.apQ30Q}
                    firstOption={this.state.apQ30F1}
                    secondOption={this.state.apQ30F2}
                    thirdOption={this.state.apQ30F3}
                    fourthOption={this.state.apQ30F4}
                    answer={this.state.apQ30A}
                    used={this.state.apQ30U}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDeleteAssessPreviousQuestion}
                  />

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      marginLeft: "6px",
                    }}
                  >
                    <Typography>
                      {" "}
                      Click to add another question
                      <IconButton
                        aria-label="add"
                        className={classes.margin}
                        onClick={this.handleAddAssessPreviousQuestion}
                      >
                        <AddIcon />
                      </IconButton>
                    </Typography>
                  </div>
                </div>
                <div style={{ margin: "auto", padding: "40px" }}>
                  <Typography color="secondary" style={{ marginLeft: "8px" }}>
                    <Box fontWeight="medium" fontSize="20px">
                      Time for previous knowledge assessment
                    </Box>
                  </Typography>
                  <TestTimeTextFields
                    time={this.state.apTime}
                    timeType={"apTime"}
                    handleChange={this.handleChange}
                  />
                </div>

                <div style={{ margin: "auto", padding: "40px" }}>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={this.handleUpdateModule}
                    className={classes.button}
                  >
                    Update
                  </Button>
                </div>
              </Paper>
            </SubContainer>
          <Footer />
          </MainContainer> 
        </div>
      );
    } else {
      return <Spinner />;
    }
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    module: state.firestore.ordered.modules,
    profile: state.firebase.profile,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateModule: (updatedModule) => dispatch(updateModule(updatedModule)),
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect((props) => {
    console.log(props.match.params.moduleId);
    return [
      {
        collection: "modules",
        doc: props.match.params.moduleId,
      },
    ];
  }),
  withStyles(styles)
)(ViewEditModulePage);
