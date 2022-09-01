import React, { Component } from "react";
import TeacherUploadModuleMenu from "components/partials/TeacherUploadModuleMenu";
import BackgroundPhoto from "images/backgroundphoto.jpg";
import { withStyles } from "@material-ui/styles";
import { connect } from "react-redux";
import { compose } from "redux";
import styled from "styled-components";
import TeacherCenteredTabs from "components/partials/SignedInLinks";
import Footer from "components/partials/Footer";
import Grid from "@material-ui/core/Grid";
import { createModule } from "components/store/actions/moduleActions";

const styles = () => ({
  root: {
    height: "auto",
    width: "auto",
    backgroundImage: `url(${BackgroundPhoto})`,
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
  width: 90vw;
`;

class UploadMaterialsPage extends Component {
  state = {
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
  handleSaveModule = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.createModule(this.state);
    this.props.history.push("/teachermodules");
  };
  render() {
    const { classes } = this.props;
    return (
      <div>
        <MainContainer className={classes.root}>
          <TeacherCenteredTabs tabNumber={1} />

          <SubContainer>
            <Grid container direction="row" spacing={2}>
              <Grid
                item
                xs
                container
                direction="column"
                md={8}
                spacing={2}
                style={{
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                <TeacherUploadModuleMenu
                  data={this.state}
                  handleChange={this.handleChange}
                  handleSaveModule={this.handleSaveModule}
                  handleAddEasyQuestion={this.handleAddEasyQuestion}
                  handleAddMediumQuestion={this.handleAddMediumQuestion}
                  handleAddHardQuestion={this.handleAddHardQuestion}
                  handleAddEvaluateQuestion={this.handleAddEvaluateQuestion}
                  handleDeleteEasyQuestion={this.handleDeleteEasyQuestion}
                  handleDeleteMediumQuestion={this.handleDeleteMediumQuestion}
                  handleDeleteHardQuestion={this.handleDeleteHardQuestion}
                  handleDeleteEvaluateQuestion={
                    this.handleDeleteEvaluateQuestion
                  }
                  handleAddAssessPreviousQuestion={
                    this.handleAddAssessPreviousQuestion
                  }
                  handleDeleteAssessPreviousQuestion={
                    this.handleDeleteAssessPreviousQuestion
                  }
                />
                <Grid item></Grid>
              </Grid>
            </Grid>
          </SubContainer>
          <Footer />
        </MainContainer>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createModule: (module) => dispatch(createModule(module)),
  };
};

export default compose(
  connect(null, mapDispatchToProps),
  withStyles(styles)
)(UploadMaterialsPage);
