import React from "react";
import { styled } from 'frontity';

const NextIcon = () => (
	<IconWrapper>
		<svg
			className="svg-icon"
			width="22"
			height="22"
			aria-hidden="true"
			role="img"
			focusable="false"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
		>
			<path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
			<path d="M0 0h24v24H0z" fill="none"/>
		</svg>
	</IconWrapper>
);

const IconWrapper = styled.span`
    display: inline-block;
    margin-top: 2px;
    vertical-align: middle;
`;

export default NextIcon;
