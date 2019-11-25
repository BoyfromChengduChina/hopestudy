import styled from 'styled-components';
import logoPic from '../../statics/logo192.png';

export const HeaderWrapper = styled.div`
	z-index: 1;
	position: relative;
	height: 56px;
	border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	display: block;
	width: 100px;
	height: 56px;
	background: url(${logoPic}) no-repeat;
	background-size: contain;
`;

export const Nav = styled.div`
	width: 960px;
	height: 100%;
	padding-right: 70px;
	box-sizing: border-box;
	margin: 0 auto;
`;

export const NavItem = styled.div`
	line-height: 56px;
	padding: 0 15px;
    font-size: 17px;
    a{
        text-decoration: none;
        color: #333;
    }
    a:hover{
        color: #8fd154;
    }
	&.left {
		float: left;
	}
	&.right {
		float: right;
		color: #969696;
	}
`;

export const Addition = styled.div`
	position: absolute;
	right: 0;
	top: 0;
	height: 56px;
`;



export const btnStyle = {
	marginTop:'9px',
	marginTtop: '9px',
	marginRight: '20px',
	padding: '0 20px',
	borderRadius: '19px',
	border: '1px solid #8fd154',
	fontSize: '14px',
	color: '#333',
	background: 'transparent',
}


export const LoginWrapper = styled.div`
	margin-left: 100px;
`;

export const LoginItemWrapper = styled.div`
	padding:10px 0;
`;

export const LoginLabel = styled.label`
	width: 80px;
	font-size: 14px;
	margin-right: 20px;
	text-algin: right;
`;

export const LoginInput = styled.input`
	width:180px;
	font-size: 14px;
	
`;