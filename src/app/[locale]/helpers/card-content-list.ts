'use server';

import { getTranslations } from 'next-intl/server';

import { images } from '@/common/constants/images';
import { Card } from '../types/types';

const getCardContentList = async (): Promise<Card[]> => {
  const t = await getTranslations('HomePage.about.sections');

  const cardContent = [
    {
      imgSrc: images.home.about.pasto,
      title: t('born-city.title'),
      description: t('born-city.description'),
      modalContent: {
        paragraph: t('born-city.paragraph'),
      },
    },
    {
      imgSrc: images.home.about.javeriana_facultad_ingenieria,
      title: t('university.title'),
      description: t('university.description'),
      modalContent: {
        paragraph: t('university.paragraph'),
        imgUrlList: [
          images.icons.raspberry,
          images.icons.linux,
          images.icons.arduino,
        ],
      },
    },
    {
      imgSrc: images.home.about.programming,
      title: t('programming.title'),
      description: t('programming.description'),
      modalContent: {
        paragraph: t('programming.paragraph'),
        imgUrlList: [
          images.icons.python,
          images.icons.vscode,
          images.icons.mysql,
          images.icons.postgresql,
        ],
      },
    },
    {
      imgSrc: images.home.about.wom,
      title: t('wom.title'),
      description: t('wom.description'),
      modalContent: {
        paragraph: t('wom.paragraph'),
        imgUrlList: [
          images.icons.python,
          images.icons.appdynamics,
          images.icons.grafana,
          images.icons.zabbix,
        ],
      },
    },
    {
      imgSrc: images.home.about.oracle,
      title: t('oracle.title'),
      description: t('oracle.description'),
      modalContent: {
        paragraph: t('oracle.paragraph'),
        imgUrlList: [
          images.icons.typescript,
          images.icons.javascript,
          images.icons.react,
          images.icons.nextjs,
        ],
      },
    },
    {
      imgSrc: images.home.about.google,
      title: t('google.title'),
      description: t('google.description'),
      modalContent: {
        paragraph: t('google.paragraph'),
        imgUrlList: [
          images.icons.python,
          images.icons.linux,
          images.icons.postgresql,
          images.icons.mysql,
        ],
      },
    },
  ];

  return cardContent;
};

export { getCardContentList };
