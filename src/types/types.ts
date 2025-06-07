export type Emoji = {
  name: string;
  category: string;
  group: string;
  htmlCode: string[];
  unicode: string[];
};

export type CategoryNode = {
  name: string;
  children?: CategoryNode[];
};
