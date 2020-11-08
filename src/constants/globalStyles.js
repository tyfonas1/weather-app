import colors from './colors';
import device from './device';

// utility styles
// /////////////////////////////////////////////////////////////////////////////
export default {
  activeOpacity: 0.7,

  // containers
  // ///////////////////////////////////////////////////////////////////////////
  container: {
    dark: {
      backgroundColor: colors.darkHighlightColor,
      flex: 1,
    },
    light: {
      backgroundColor: colors.white,
      flex: 1,
    },
  },

  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    // paddingTop: 32,
  },
  contentRowWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  contentRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 20,
  },
  contentRowCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  loginContainer: {
    alignItems: 'center',
    paddingTop: 32,
    flex: 1,

    // justifyContent: 'space-around',
  },
  loginView: {
    dark: {
      width: 15,
      height: 15,
      borderRadius: 35,
      opacity: 0.3,
      backgroundColor: colors.white,
    },
    light: {
      width: 15,
      height: 15,
      borderRadius: 35,
      opacity: 0.3,
      backgroundColor: colors.darkBlue,
    },
  },
  loginMaskedView: {
    dark: {
      width: 15,
      height: 15,
      borderRadius: 35,

      backgroundColor: colors.white,
    },
    light: {
      width: 15,
      height: 15,
      borderRadius: 35,

      backgroundColor: colors.darkBlue,
    },
  },

  // navigation styles
  // ///////////////////////////////////////////////////////////////////////////
  headerTitleStyle: {
    color: colors.placeholder,
    alignSelf: 'center',
  },
  headerStyle: {
    backgroundColor: colors.darkBlue,
  },

  // input
  /////////////////////////////////////////////////////////////////////////////
  inputContainer: {
    dark: {
      borderStyle: 'solid',
      borderRadius: 3,
      borderWidth: 0.8,
      borderColor: colors.white20,
      height: 80,
      marginVertical: 5,
      marginHorizontal: 5,
    },
    light: {
      borderStyle: 'solid',
      borderRadius: 3,
      borderWidth: 0.8,
      borderColor: colors.darkColor,
      height: 80,
      marginVertical: 5,
      marginHorizontal: 5,
    },
  },
  textInput: {
    width: device.width - 40,
    marginVertical: 5,
    backgroundColor: colors.surface,
    borderBottomColor: 'red',
  },

  titleStyles: {
    position: 'absolute',
    left: 3,
  },
  loginPageInput: {
    justifyContent: 'center',
    height: 50,
    borderRadius: 60,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: colors.primary,
    marginBottom: 10,
  },
  registerPageInput: {
    justifyContent: 'center',

    height: 50,
    borderRadius: 60,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: colors.primary,
    marginBottom: 10,
  },
  // button
  // ///////////////////////////////////////////////////////////////////////////
  btn: {
    alignItems: 'center',
    backgroundColor: colors.lightBlue,
    borderColor: colors.lightBlue,
    paddingBottom: 10,
    borderWidth: 1,
    borderRadius: 50,
    height: 48,
    justifyContent: 'center',
    marginVertical: 16,
    paddingHorizontal: 40,
    paddingVertical: 8,

    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: {height: 3, width: 1}, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS

    elevation: 5, // Android

    flexDirection: 'row',
  },
  iconBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.darkBlue,
    borderColor: colors.darkBlue,
    borderWidth: 1,
    borderRadius: 4,
    height: 48,
    minWidth: 100,
    justifyContent: 'space-between',
    marginVertical: 16,
    paddingHorizontal: 5,
    paddingVertical: 8,
  },
  iconStyle: {
    marginRight: 30,
  },

  btnPtt: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    position: 'absolute',
    bottom: 60,
    right: device.width / 2 - 40,
    height: 70,
    backgroundColor: 'red',
    borderRadius: 100,
  },
  groupBtn: {
    alignItems: 'center',
    backgroundColor: colors.darkColor,
    borderColor: colors.darkColor,
    borderWidth: 1,
    borderRadius: 4,
    height: 48,
    justifyContent: 'center',
    // marginBottom: 16,
    paddingHorizontal: 24,
    // paddingVertical: 8,
  },
  btnText: {
    color: colors.white,
    fontSize: 18,
    textAlign: 'center',
    marginHorizontal: 20,
  },
  btnPrimary: {
    marginBottom: 10,

    borderRadius: 50,
  },
  // context menu
  //////////////////////////////////////////////////////////////////////////////
  menuContainer: {
    dark: {
      paddingTop: 5,
      backgroundColor: colors.darkHighlightColor,
      borderRadius: 5,
      flex: 1,
    },
    light: {
      paddingTop: 5,
      backgroundColor: colors.white,
      borderRadius: 5,
      flex: 1,
    },
  },
  optionText: {
    dark: {
      color: colors.white,
      alignSelf: 'center',
    },
    light: {
      color: colors.darkColor,
      textAlign: 'center',
    },
  },
  // text
  // ///////////////////////////////////////////////////////////////////////////
  text: {
    dark: {
      color: colors.white,
    },
    light: {
      color: colors.darkColor,
    },
  },
  // Privacy header texts
  ///////////////////////////////////////////////////////////////////////////////
  privacyHeaders: {
    fontWeight: 'bold',
    fontSize: 17,
  },
  // Images
  ///////////////////////////////////////////////////////////////////////////////
  logoImage: {
    width: 170,
    height: 136,
  },

  // spacers
  // ///////////////////////////////////////////////////////////////////////////
  spacer16: {
    height: 16,
    width: '100%',
  },
  spacer64: {
    height: 64,
    width: '100%',
  },
  headLineStyle: {alignSelf: 'center'},
  // Separator with text
  // ///////////////////////////////////////////////////////////////////////////
  separatorWithText: {
    fontWeight: 'bold',
  },
  // Drop Down Pickers
  //////////////////////////////////////////////////////////////////////////////
  pickers: {
    height: 50,
    width: 200,
    alignSelf: 'center',
    // marginTop: 10,
    // marginBottom: 10,
  },
  // Date time pickers
  //////////////////////////////////////////////////////////////////////////////
  dateTimePicker: {
    backgroundColor: colors.surface,
    width: device.width - 20,
    alignSelf: 'center',
  },
  // Dialog alert box
  //////////////////////////////////////////////////////////////////////////////
  centeredView: {
    flex: 1,
    alignItems: 'center',
    marginTop: 22,
    height: device.height - 100,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginTop: 10,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  //Steps wizard
  ///////////////////////////////////////////////////////////////////
  stepsContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'transparent',
    borderBottomColor: '#dedede',
    borderBottomWidth: 1,
    width: device.width - 20,
  },
  // Register page container
  ///////////////////////////////////////////////////////////////////
  registerContainer: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
  },
  // language selector
  //////////////////////////////////////////////////////////////////
  langSelector: {
    paddingTop: 10,
    marginRight: 20,
    alignSelf: 'flex-end',
    position: 'absolute',
    top: 55,
  },
  // Login page card wrapper
  ////////////////////////////////////////////////////////////////////
  loginCardWrapper: {
    width: device.width - 32,
    marginTop: 30,
    borderRadius: 50,
    marginBottom: 46,
    paddingBottom: 20,
  },
  registerCardWrapper: {
    width: device.width - 32,

    borderRadius: 50,

    marginBottom: 46,
    paddingBottom: 20,
  },
  // Forgot password page card wrapper
  //////////////////////////////////////////////////////////////////

  forgotCardWrapper: {
    width: device.width - 32,

    borderRadius: 50,

    marginBottom: 46,
    paddingBottom: 20,
  },
  verifyCardWrapper: {
    width: device.width - 32,
    height: 300,
    borderRadius: 50,
    justifyContent: 'center',
    marginBottom: 46,
    paddingBottom: 20,
  },
};
