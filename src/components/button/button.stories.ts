import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button.component';

const meta: Meta<ButtonComponent> = {
  title: 'Components/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  render: (args) => ({
    props: {
      ...args,
    },
  template: `<app-button
  [label]="label"
  [disabled]="disabled"
  [color]="color"
  [colorHover]="colorHover"
  [bgColor]="bgColor"
  [size]="size"
></app-button>`,
  }),
  argTypes: {
    label: {
      description: 'Text inside button',
      control: {
        type: 'text',
      },
    },
    size: {
      control: {
        type: 'select',
      },
      options: ['large', 'small', 'normal'],
      description: 'Sizes modify padding of the buton.',
      defaultValue: { summary: 'normal' }

    },
    disabled: {
      description: 'If the button is disabled',
      control: {
        type: 'boolean',
      },
      defaultValue: { summary: false}

    },
    color: {
      description: 'Font color',
      control: {
        type: 'color',
      },
    },
    bgColor: {
      description: 'Background color of button',
      control: {
        type: 'color',
      },
    },
    colorHover: {
      description: 'Color hover of the button',
      control: {
        type: 'color',
      },

      clicked: {
        action: 'clicked',
      },
    },
  },
};

export default meta;
type Story = StoryObj<ButtonComponent>;

export const ButtonDefault: Story = {
  args: {
    label: 'Button',
    disabled: false,
    size: 'normal',
    color: 'white',
    bgColor: '#249bd5',
    colorHover: 'red', 
  },
};
export const ButtonLarge: Story = {
  args: {
    label: 'Button',
    disabled: false,
    size: 'large',
    color: 'white',
    bgColor: '#249bd5',
    colorHover: 'red', 
  },
};
export const ButtonSmall: Story = {
  args: {
    label: 'Button',
    disabled: false,
    size: 'small',
    color: 'white',
    bgColor: '#249bd5',
    colorHover: 'red', 
  },
};
export const ButtonDisable: Story = {
  args: {
    label: 'Button',
    disabled: true,
    size: 'normal',
    color: 'white',
    bgColor: '#249bd5',
    colorHover: 'red', 
  },
};
