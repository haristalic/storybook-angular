import { Meta, StoryObj } from '@storybook/angular';
import { CarouselComponent, Slide } from './carousel.component';

const meta: Meta<CarouselComponent> = {
  title: 'Components/Carousels',
  component: CarouselComponent,
  tags: ['autodocs'],
  render: (args) => ({
    template: ` 
    <app-carousel
    [sliders]="sliders"
    [bgColorBtn]="bgColorBtn"
    [bgColorHoverBtn]="bgColorHoverBtn"
    [color]="color"
    (prevClicked)="prevClicked($event)"
    (nextClicked)="nextClicked($event)"
    ></app-carousel>`,
    props: {
      ...args,
    },
  }),
  argTypes: {
    sliders: {
      control: {
        type: 'object',
      },
      description: 'Sliders with id and description',
    },
    bgColorBtn: {
      description: 'Background color button',
      control: {
        type: 'color',
      },
    },
    bgColorHoverBtn: {
      description: 'Hover button color',
      control: {
        type: 'color',
      },
    },
    color: {
      description: 'Font color',
      control: {
        type: 'color',
      },
    },
    prevClicked: {
      action: 'prevClicked',
    },
    nextClicked: {
      action: 'nextClicked',
    },
  },
};

export default meta;
type Story = StoryObj<CarouselComponent>;
export const Default: Story = {
  args: {
    sliders: [
      { id: '1', content: 'angular' },
      { id: '2', content: 'react' },
      { id: '3', content: 'vue' },
      { id: '4', content: 'node' },
    ],
    bgColorBtn: 'rgba(0, 0, 0, 0.5)',
    bgColorHoverBtn: 'rgba(0, 0, 0, 0.7)',
    color: 'black',
  },
};
