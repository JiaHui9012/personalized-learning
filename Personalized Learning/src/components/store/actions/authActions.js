export const signIn = (credentials) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        dispatch({ type: "LOGIN_SUCCESS" });
      })
      .catch((err) => {
        dispatch({ type: "LOGIN_ERROR", err });
      });
  };
};

export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: "SIGNOUT_SUCCESS" });
      });
  };
};

export const signUp = (newUser) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    firebase
      .auth()
      .fetchSignInMethodsForEmail(newUser.email)
      .then((result) => {
        if(result.length===0){
          firebase
            .auth()
            .createUserWithEmailAndPassword(newUser.email, newUser.password)
            .then((resp) => {
              resp.user.sendEmailVerification();
              return firestore
                .collection("users")
                .doc(resp.user.uid)
                .set({
                  firstName: newUser.firstName,
                  lastName: newUser.lastName,
                  isTeacher: newUser.isTeacher,
                  initials: newUser.firstName[0] + newUser.lastName[0],
                });
            })
            .then(() => {
              dispatch({ type: "SIGNUP_SUCCESS" });
            })
            .catch((err) => {
              dispatch({ type: "SIGNUP_ERROR", err });
            });
        }
        else{
          dispatch({ type: "EMAIL_EXIST" });
        }
      })
      .catch((err) => {
        dispatch({ type: "SIGNUP_ERROR", err });
      });
  };
};

export const verifyEmailAction = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    try{
      firebase
        .auth()
        .currentUser
        .sendEmailVerification();
        dispatch({ type: "VERIFY_SUCCESS" });
    }
     catch(err) {
        dispatch({ type: "VERIFY_ERROR", err });
      }
  };
};