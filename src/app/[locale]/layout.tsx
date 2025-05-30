import { Suspense } from 'react';
import type { Metadata } from 'next';
import { Press_Start_2P, Indie_Flower } from 'next/font/google';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';

import { routing } from '@/i18n/routing';
import { MainWrapper } from '@/common/components/components';
import { images } from '@/common/constants/images';

import '@fontsource/winky-rough/300.css';

const indieFlower = Indie_Flower({
  variable: '--font-indie-flower',
  weight: '400',
  subsets: ['latin'],
});

const pressStart2P = Press_Start_2P({
  variable: '--font-press-start-2p',
  weight: '400',
  subsets: ['latin'],
});

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('Metadata');

  return {
    title: t('title'),
    description: t('description'),
    metadataBase: new URL('https://blog.mylemonlife.dev'),
    alternates: {
      canonical: '/',
      languages: {
        'en-US': '/en',
        es: '/es',
      },
    },
    openGraph: {
      images: images.logo,
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <link rel="icon" href={images.logo} type="image/png" />
      <MainWrapper>
        <body className={`${pressStart2P.variable} ${indieFlower.variable}`}>
          <Suspense fallback={null}>
            <NextIntlClientProvider>{children}</NextIntlClientProvider>
          </Suspense>
        </body>
      </MainWrapper>
    </html>
  );
}
