import styled from 'styled-components'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'

export const SpanLink = styled.span`
  color: #0645AD !important;
  font-size: 16px !important;
  font-weight: bolder !important;
  cursor: pointer !important;
  &:disabled {
    color: #7C7C7C !important;
  }
`

export const ContentTabs = styled.div`
  .Mui-selected {
    color: #FF4D0D !important; 
  }
  .MuiTab-root {
    font-family: Work Sans !important;
    text-transform: none !important;
    font-weight: bolder !important;
  }
  .MuiTabs-indicator {
    background-color: #FF4D0D !important;
  }
`

export const OrangeLabel = styled.label`
  font-size: 20px;
  color: #ff4d0d;
  font-weight: bolder;
`

export const OrangeLabelSlim = styled.label`
  font-size: 20px;
  color: #ff4d0d;
`

export const OrangeLabelSmall = styled.label`
  font-size: 16px;
  color: #ff4d0d;
`

export const FRSTButton = styled(Button)`
  color: #fff !important;
  font-weight: bold !important;
  background-color: #FF4D0D !important;
  border-color: #FF4D0D !important;
  height: 48px !important;
  font-size: 16px !important;
  padding-left: 16px !important;
  padding-right: 16px !important;
  padding-top: 18px !important;
  padding-bottom: 18px !important;
  text-transform: none !important;
  border-radius: 5px 5px 5px 5px !important;
  box-shadow: 0 2px 0 rgb(0 0 0 / 2%) !important;
  &:focus,
  &:hover {
    color: #fff !important;
    background-color: #E94E1B !important;
    border-color: #fff !important;
  };
  &:disabled {
    background-color: #7C7C7C !important;
  }
`

export const OrangeDropdown = styled(Menu)`
  & .MuiPaper-root{
    border-radius: 0px;
    box-shadow: none !important;
  }
  ul {
    padding-top: 0px;
    padding-bottom: 0px;
  }
`

export const OrangeDropdownItem = styled(MenuItem)`
  color: white !important;
  background-color: #FF4D0D !important;
  &:hover {
    background-color: #F5792A !important;
  }
`