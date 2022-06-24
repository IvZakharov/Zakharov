import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import React, { ReactNode } from 'react';
import Head from 'next/head';
import { Container } from '@mui/material';

type LayoutProps = {
  children?: ReactNode;
  description?: string;
  title?: string;
};

export const Layout = ({
  children,
  description = 'Main description',
  title = 'Ivan Zakharov Web Developer',
}: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>

      <Header />
      <div className="ph-md-60 ph-xl-100">
        <Container maxWidth="xl">{children}</Container>
      </div>
      <Footer />
    </>
  );
};
