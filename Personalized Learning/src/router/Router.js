import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { HomeRoute } from "./HomeRoute";
import LandingPage from "components/LandingPage";
import StudentsViewModulesPage from "components/students/StudentsViewModulesPage";
import TeachersViewModulesPage from "components/teachers/TeachersViewModulesPage";
import StudentsViewTestModulesPage from "components/students/StudentsViewTestModulesPage";
import ViewTestDifficultyPage from "components/students/ViewTestDifficultyPage";
import UploadMaterialsPage from "components/teachers/UploadMaterialsPage";
import StudentsViewModuleInfoPage from "components/students/StudentsViewModuleInfoPage";
import ViewEditModulePage from "components/teachers/ViewEditModulePage";
import ViewEasyTestPage from "components/students/ViewEasyTestPage";
import ViewMediumTestPage from "components/students/ViewMediumTestPage";
import ViewHardTestPage from "components/students/ViewHardTestPage";
import ViewEvaluationTestPage from "components/students/ViewEvaluationTestPage";
import EasyTestInfoPage from "components/students/EasyTestInfoPage";
import MediumTestInfoPage from "components/students/MediumTestInfoPage";
import HardTestInfoPage from "components/students/HardTestInfoPage";
import EvaluationTestInfoPage from "components/students/EvaluationTestInfoPage";
import FaqPage from "components/FaqPage";
import SignInPage from "components/auth/SignIn";
import SignUpPage from "components/auth/SignUp";
import verifyEmail from "components/auth/verifyEmail";
import Que from "components/students/Ques";

const Routes = () => (
  <Router>
    <div>
      <Switch>
        <HomeRoute exact path="/" />

        <Route exact path="/landing" component={LandingPage} />

        <Route exact path="/faq" component={FaqPage} />

        <Route exact path="/signin" component={SignInPage} />

        <Route exact path="/signup" component={SignUpPage} />

        <Route exact path="/verifyEmail" component={verifyEmail} />

        <Route exact path="/que/:moduleId" component={Que} />

        <Route
          exact
          path="/studentmodules"
          component={StudentsViewModulesPage}
        />

        <Route
          exact
          path="/teachermodules"
          component={TeachersViewModulesPage}
        />

        <Route
          exact
          path="/assessmentmodules"
          component={StudentsViewTestModulesPage}
        />

        <Route
          exact
          path="/viewtestdifficulty/:moduleId"
          component={ViewTestDifficultyPage}
        />

        <Route exact path="/uploadmaterials" component={UploadMaterialsPage} />

        <Route
          exact
          path="/viewmoduleinfo/:moduleId"
          component={StudentsViewModuleInfoPage}
        />

        <Route
          exact
          path="/editmodule/:moduleId"
          component={ViewEditModulePage}
        />

        <Route
          exact
          path="/vieweasytest/:moduleId"
          component={ViewEasyTestPage}
        />

        <Route
          exact
          path="/viewmediumtest/:moduleId"
          component={ViewMediumTestPage}
        />

        <Route
          exact
          path="/viewhardtest/:moduleId"
          component={ViewHardTestPage}
        />

        <Route
          exact
          path="/viewevaluationtest/:moduleId"
          component={ViewEvaluationTestPage}
        />

        <Route
          exact
          path="/easytestinfo/:moduleId"
          component={EasyTestInfoPage}
        />

        <Route
          exact
          path="/mediumtestinfo/:moduleId"
          component={MediumTestInfoPage}
        />

        <Route
          exact
          path="/hardtestinfo/:moduleId"
          component={HardTestInfoPage}
        />

        <Route
          exact
          path="/evaluationtestinfo/:moduleId"
          component={EvaluationTestInfoPage}
        />
      </Switch>
    </div>
  </Router>
);

export default Routes;
