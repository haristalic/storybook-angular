import { Meta, StoryObj } from '@storybook/angular';
import { LinkComponent } from './link.component';

const meta: Meta<LinkComponent> = {
  title: 'Components/Link',
  component: LinkComponent,
  tags: ['autodocs'],
  render: (args: LinkComponent) => ({
    template: `
      <app-link
        [color]="color"
        [href]="href"
        [target]="target"
        [label]="label>Link </app-link>
    `,
    props: {
      ...args,
    },
  }),
  argTypes: {
    label:{
      control: {
        type: 'text'
      }
    },
    color: {
      control: {
        type: 'radio',
      },
      options: ['primary', 'secondary'],

      description:
        'Classes for color of link',
    },

    href: {

    }
  },
};


export default meta;
type Story = StoryObj<LinkComponent>;

export const Default: Story = {
  args: {
    label: 'Link din',
    color: 'primary',
  },
};
