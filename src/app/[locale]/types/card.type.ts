type Card = {
  imgSrc: string;
  title: string;
  description: string;
  modalContent: {
    paragraph: string;
    imgUrlList?: string[];
  };
};

export { type Card };
