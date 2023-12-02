import styled from "styled-components";
import {useContext} from "react";
import {ThemeContext} from "../App";

export const ImgIcon = styled.div`
  width: 100%;
  height: 100%;
`;

ImgIcon.InnerImg = styled.img`
  width: 100%;
  height: 100%;
  &.weatherIcon svg path{
    stroke: ${props => {
      const theme = useContext(ThemeContext)
      return theme.hexColor
    }};
	 fill: ${props => {
      const theme = useContext(ThemeContext)
      return theme.hexColor
    }};
  }
`;