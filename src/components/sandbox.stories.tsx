import React from 'react'

import PageSandbox from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Page/Sandbox',
    component: PageSandbox,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <PageSandbox {...args} />

export const sandboxPage = Template.bind({})
sandboxPage.args = {
    pageHeight: '340px',
    pageWidth: '500px'
}
