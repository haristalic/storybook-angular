import { Meta, StoryObj } from '@storybook/angular';
import { Colors } from '../../models/colors';
import { ProgressBarComponent } from './progress-bar.component';

const meta: Meta<ProgressBarComponent> = {
  title: 'Components/Progress Bar',
  component: ProgressBarComponent,
  tags: ['autodocs'],
  render: (args: ProgressBarComponent) => ({
    props: {
      ...args,
    },
    template: ` 
 <app-progress-bar
  [height]="height"
  [width]="width"
  [value]="value"
  [colorBar]="colorBar"
  [colorFillBar]="colorFillBar"
></app-progress-bar>
    `,
  }),

  argTypes: {
    width: {
      control: {
        type: 'text',
      },
      description: 'Width of the bar',
    },
    height: {
      description: 'Height of the bar',
      control: {
        type: 'text',
      },
    },
    value: {
      description: 'Value to fill in the bar',
      control: {
        type: 'number',
      },
      defaultValue: { summary: 20},
    },
    colorBar: {
      description: 'Color of the bar',
      options: Object.keys(Colors),
      mapping: Colors,
      control: {
        type: 'select',
      },
    },
    colorFillBar: {
      description: 'Color of the filled part',
      options: Object.keys(Colors),
      mapping: Colors,
      control: {
        type: 'select',
      },
    },
  },
};

export default meta;
type Story = StoryObj<ProgressBarComponent>;

export const Default: Story = {
  args: {
    width: '50%',
    height: '20px',
    value: 20,
    colorBar: Colors.DARK,
    colorFillBar: Colors.SUMMER
  },
};
