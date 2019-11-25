import React,{ Component } from "react"
import { Link } from 'react-router-dom';
import { PersonWrapper } from "./style"

class Person extends Component{

    render(){
        return (
         <PersonWrapper>
             个人中心
         </PersonWrapper>
		);
    }
}

export default Person;