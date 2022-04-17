import React from 'react'

import Button from './index'
import * as Icons from '../../shared/icons'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Buttons/Normal',
    component: Button,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button {...args} />

export const primary = Template.bind({})
primary.args = {
    variant: 'primary',
    label: 'Button text',
    disabled: false,
    handleClick: () => { alert('Click') },
}

export const secondary = Template.bind({})
secondary.args = {
    variant: 'secondary',
    label: 'Button text',
    disabled: false,
    handleClick: () => { alert('Click') }
}

export const link = Template.bind({})
link.args = {
    variant: 'link',
    label: 'Button text',
    disabled: false
}