import ScheduleDateComponent from './ScheduleDate'

export default {
  title: 'Components',
  component: ScheduleDateComponent
}

const Template = args => <ScheduleDateComponent {...args} />

export const ScheduleDate = Template.bind({})
ScheduleDate.args = {}
