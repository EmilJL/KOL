import { StyleSheet } from "react-native"
export default StyleSheet.create({
	footer: {
		flexDirection: 'row',
		padding: 13,
		height: 76,
		width: '100%',
		position: "absolute",
	    bottom: 0,
	    left: 0,
	    right: 0,
	    backgroundColor: "#FFFFFF",
	},
  intro: {
    paddingTop: 30,
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 27,
  },
  intro_welcome: {
    color: '#414D55',
    fontSize: 18,
    lineHeight: 22
  },
  intro_welcome_span: {
    color: '#414D55',
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 28
  },
  intro_date: {
    fontSize: 12,
    color: '#AEACBE',
    lineHeight: 14
  },
  section: {
    alignSelf: 'center',
    width: '90%',
    marginTop: 0,
    marginBottom: 0
  },
  section_title: {
    fontWeight: 'bold',
    fontSize: 12,
    color: '#AEACBE',
    marginBottom: 15,
    opacity: 1
  },
  box: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 7,
    padding: 20,
    marginBottom: 25,
    opacity: 1
  },
  box_smallPadding: {
   
    paddingTop: 20,
    paddingLeft: 8,
    paddingRight: 8,
    paddingBottom: 17
  },
  box_lastChild: {
    marginRight: 0
  },
  box_active: {
    borderColor: '#565BF6',
    borderWidth: 2,
    opacity: 1
  },
  box_current: {
    borderColor: '#000',
    borderWidth: 2,
    opacity: 1
  },
  textSizeFour: {
    fontSize: 16,
    color: '#414D55',
    fontWeight: 'bold',
    alignSelf: 'flex-start'
  },
  textBubble: {
    marginTop: 17,
    backgroundColor: '#F8F9FF',
    paddingTop: 25,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    color: '#414D55',
    fontSize: 14,
    lineHeight: 24,
    borderRadius: 10,
    position: 'relative',
    minHeight: 180
  },
  textBubble_before: {
    /*content: '',*/
    position: 'absolute',
    backgroundColor: '#F8F9FF',
    width: 8,
    height: 8,
    top: -4,
    left: 12,
    transform:[{ rotateZ: '45deg'} ]
  },
  circle: {
    borderRadius: 22,
    borderWidth: 2,
    borderColor: '#DBDCE3',
    color: '#DBDCE3',
    width: 44,
    height: 44,
    lineHeight: 44,
    textAlign: 'center',
    marginRight: '1%'
/*    marginRight: auto*/
  },
  circle_active: {
    color: '#565BF6',
    borderColor: '#565BF6'
  },
  circle_lastChild: {
    marginRight: 0
  },
  smiley: {
      color: '#414D55',
      fontSize: 14,
      textAlign: 'center',
      opacity: .35
    /*  svg: {
          width: '100%',
          marginBottom: 5
      }*/
  },
  smiley_active: {
      opacity: 1,
      color: '#565BF6'
    /*  svg path {
          fill: '#565BF6';
      }*/
  },
  scala: {
      /*display: 'flex',*/
      width: '100%',
      marginTop: 15,
      flexDirection: 'row',
  },
  scala_text_left: {
    fontSize: 11,
     left: 0,
     marginBottom: 0,
     position: 'absolute'
  },
  scala_text_right: {
    fontSize: 11,
    alignSelf: 'center',
    right: 0,
    marginBottom: 0,
    position: 'absolute'
  },
  selectOption: {
      /*display: 'flex' */
  },
  gender_box: {
    marginBottom: 25,
    height: 150,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  gender_box_choice: {
  	height: '100%',
  	width: '47%',
  	justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderColor: '#F7F8FA',
    borderWidth: 2,
    borderRadius: 12
  },
  gender_box_choice_current: {
  	borderColor: 'grey'
  },
  gender_box_choice_active: {
  	borderColor: '#565BF6'
  },
  gender_box_choice_text: {
    color: '#989BB0',
    fontSize: 12,
    position: 'absolute',
    bottom: 30,
    /*fontWeight: 600*/
  },
  gender_box_choice_text_active: {
    color: '#414D55',
    fontWeight: 'bold'
    /*fontWeight: 600*/
  },
  gender_box_svg: {
  	position: 'absolute',
    top: 34
  },
  gender_box_active_span: {
    color: '#414D55'
  },
  select_box: {
      height: 63,
      fontSize: 22,
      lineHeight: 1
  },
  outro: {
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: 20,
        paddingRight: 20,
        textAlign: 'center',
        margin: 0,
        fontSize: 14,
        lineHeight: 22
  },
   btn: {
        /*display: 'block',*/
        alignSelf: 'center',
        backgroundColor: '#565BF6',
        borderRadius: 25,
        marginTop: 20,
        marginBottom: 30,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
  },
  btn_text: {
     textAlign: 'center',
     color: '#fff',
     fontWeight: '700',
  },
  biFooter: {
       /* position: 'fixed',*/
        bottom: 0,
        left: 0,
        width: '100%',
        height: 76,
        backgroundColor: '#fff',
       /* borderRadius: 8 8 0 0,*/
        /*-webkit-box-shadow: 0px -8px 9px 0px rgba(0,0,0,0.06);
        -moz-box-shadow: 0px -8px 9px 0px rgba(0,0,0,0.06);
        box-shadow: 0px -8px 9px 0px rgba(0,0,0,0.06);*/
        padding: 20
  },
  biFooter_numbers: {
          /*display: flex;*/
        position: 'relative'
  },
  biFooter_numbers_after: {
        /*      content: "";*/
        position: 'absolute',
        width: '70%',
        height: 1,
        backgroundColor: '#DDDEFD',
        left: 20,
        bottom: 5
  },
  biFooter_numbers_span: {
        fontSize: 14,
        textAlign: 'center',
       /* flexBasis: 11.11%;*/
        position: 'relative',
        height: 36,
        fontWeight: '400',
        color: '#E7E6EB'
  },
  biFooter_numbers_span_active: {
        opacity: 1,
        fontWeight: '600',
        color: '#000'
  },
  biFooter_numbers_span_active_after: {
        backgroundColor: '#565BF6',
        borderColor: '#565BF6'
  },
  biFooter_numbers_span_after: {
/*        content: "";*/
        position: 'absolute',
        width: 8,
        height: 8,
        backgroundColor: 'white',
        left: '50%',
        transform:([{translateX:'-50%'}]),
        bottom: 0,
        borderRadius: 4,
        borderWidth: 2,
        borderColor: '#DDDEFD',
        zIndex: 2
  }
});