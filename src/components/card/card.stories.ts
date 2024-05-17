import { Meta, StoryObj, argsToTemplate, moduleMetadata } from "@storybook/angular";
import { ButtonComponent } from "../button/button.component";
import { CardComponent } from "./card.component";

const meta: Meta<CardComponent> = {
    title: 'Components/Cards',
    component: CardComponent,
    tags: ['autodocs'],
    decorators: [
        moduleMetadata({
          imports: [ButtonComponent],
        }),
      ],
      render: (args) => ({
        props: {
          ...args,
        },
        template: ` 
        <app-card
        [titleCard]="titleCard"
        [bgColor]="bgColor"
        [colorBorder]="colorBorder"
        [color]="color"
      ></app-card>
        `,
      }),
    argTypes: {
        titleCard: {
            description: "Title card",
            control: {
                type: 'text',
              },
        },
        bgColor: {
            description: "Background color of the card",
            control: {
                type: 'color',
              },
        },
        colorBorder: {
            description: "Border color of the card",
            control: {
                type: 'color',
              },
        },
        color: {
            description: "Font color of the card",
            control: {
                type: 'color',
              },
        }
    }
}

export default meta;
type Story = StoryObj<CardComponent>;
export const Default: Story = {
    args: {
        titleCard: "Default Card",

    },
  };
export const CardWithButton: Story = {
    args: {
        titleCard: "Card With Button",
    },
    render: (args) => ({
        props: args,
        template: `
            <app-card ${argsToTemplate(args)}>
                <div style="display: flex; width: 100%;">
                    <div>
                    <app-button [primary]="true" [label]="'Button'"></app-button>
                    </div>
                </div>
            </app-card>
        `
    })
}