import React from 'react'

import * as Icons from './shared/icons'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Icons',
  component: IconsStories,
}


function IconsStories(props: any) {
  return (
    <div>
      {props.children}
    </div>
  )
}

const Template = (args) => <IconsStories >{args} </IconsStories>

export const BackArrow = Template.bind({})
BackArrow.args = Icons.BackArrow()

export const BlueTrash = Template.bind({})
BlueTrash.args = Icons.BlueTrash()

export const ChangeAccount = Template.bind({})
ChangeAccount.args = Icons.ChangeAccount()

export const CheckboxChecked = Template.bind({})
CheckboxChecked.args = Icons.CheckboxChecked()

export const CheckboxEmpty = Template.bind({})
CheckboxEmpty.args = Icons.CheckboxEmpty()

export const DownloadIcon = Template.bind({})
DownloadIcon.args = Icons.DownloadIcon()

export const DropdownIconWhite = Template.bind({})
DropdownIconWhite.args = Icons.DropdownIconWhite()

export const DropdownSideIconWhite = Template.bind({})
DropdownSideIconWhite.args = Icons.DropdownSideIconWhite()

export const EditIcon = Template.bind({})
EditIcon.args = Icons.EditIcon()

export const ExitArrow = Template.bind({})
ExitArrow.args = Icons.ExitArrow()

export const FRSTLogo = Template.bind({})
FRSTLogo.args = Icons.FRSTLogo()

export const FRSTLogoBig = Template.bind({})
FRSTLogoBig.args = Icons.FRSTLogoBig()

export const WarningIcon = Template.bind({})
WarningIcon.args = Icons.WarningIcon()

export const WhiteFilter = Template.bind({})
WhiteFilter.args = Icons.WhiteFilter()

