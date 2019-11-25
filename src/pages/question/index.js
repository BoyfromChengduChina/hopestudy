import React,{ Component } from "react"
import { Link } from 'react-router-dom';
import { QuestionWrapper } from "./style"

class Question extends Component{

    render(){
        return (
          <QuestionWrapper>
              线上提问
          </QuestionWrapper>
		);
    }
}

export default Question;