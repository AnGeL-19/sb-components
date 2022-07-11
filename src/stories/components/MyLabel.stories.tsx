import { MyLabel } from "../../components/MyLabel";
import { ComponentMeta, ComponentStory } from '@storybook/react';


// title: "directorio/subcarpeta/componente",
// title: "directorio/componente"

export default {
    title: "UI/Label",
    component: MyLabel,
    argTypes: {
        size: { control: 'select' },
        color: { control: 'select' },
        colorCustom: { control: 'color' },
    }
} as ComponentMeta<typeof MyLabel>;

const Template:ComponentStory<typeof MyLabel> = (args) => <MyLabel {...args}/>

export const Basic = Template.bind({});
Basic.args = {
    size:'normal',
    allCaps: false //true, capitalizar toda la palabra
}

export const AllCaps = Template.bind({});
AllCaps.args = {
    size:'normal',
    allCaps: true //true, capitalizar toda la palabra
}

export const Secondary = Template.bind({});
Secondary.args = {
    size:'normal',
    color: 'secondary' // primary | secondary | tertiary
}

export const Tertiary = Template.bind({});
Tertiary.args = {
    size:'normal',
    color: 'tertiary'
}

export const CustomColor = Template.bind({});
CustomColor.args = {
    size:'h1',
    colorCustom: '#5517ac'
}

