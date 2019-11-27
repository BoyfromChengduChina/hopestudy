import React,{ Component } from "react"
import { Link } from 'react-router-dom';
import { HomeWrapper, BannerWrapper, FloorOneWrapper, FloorTwoWrapper, FloorThreeWrapper, FloorFourWrapper } from "./style"

class Home extends Component{

    render(){
        return (
          <HomeWrapper>
              <BannerWrapper>
                  banner
              </BannerWrapper>
              <FloorOneWrapper>
                  第一楼
              </FloorOneWrapper>
              <FloorTwoWrapper>
                  第二楼
              </FloorTwoWrapper>
              <FloorThreeWrapper>
                  第三楼
              </FloorThreeWrapper>
              <FloorFourWrapper>
                  第四楼
              </FloorFourWrapper>
          </HomeWrapper>
		);
    }
}

export default Home;