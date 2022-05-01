import { ComponentMeta, ComponentStory } from "@storybook/react";
import ModalBook from "./ModalBook";

export default {
  title: "ModalBook Component",
  components: ModalBook,
} as ComponentMeta<typeof ModalBook>;

const Template: ComponentStory<typeof ModalBook> = (args) => (
  <ModalBook {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  title: "A Culpa é das Estrelas",
  description:
    "Hazel foi diagnosticada com câncer aos treze anos e agora, aos dezesseis, sobrevive graças a uma droga revolucionária que detém a metástase em seus pulmões. Ela sabe que sua doença é terminal e passa os dias vendo tevê e lendo Uma aflição imperial, livro cujo autor deixou muitas perguntas sem resposta. ",
  authors: ["Jonh Green"],
  pageCount: 288,
  imageUrl: "https://d2drtqy2ezsot0.cloudfront.net/appnoz/Book-0.jpg",
  isbn10: "0062856626",
  isbn13: "978-0062856623",
  language: "Inglês",
  publisher: "Intrínseca",
  published: 2002,
};
