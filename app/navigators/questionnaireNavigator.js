import React from 'react';
import { createStackNavigator } from "react-navigation";
import Questionnaire from '../components/questionnaire/questionnaire.component.js';
import Header from '../components/header/header.component.js';

const QuestionnaireNavigator = createStackNavigator(
  {
    Spørgeskema: {
    	screen:	Questionnaire,
    	navigationOptions:
    	{
    		header: props => <Header {...props} />
    	}
    }
  },
  {
    navigationOptions: {
      header: props => <Header {...props} />
    }
  }
)

export default QuestionnaireNavigator;