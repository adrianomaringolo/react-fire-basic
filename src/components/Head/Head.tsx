import { Helmet } from 'react-helmet-async';

type HeadProps = {
  title?: string;
  description?: string;
};

export const Head = ({ title = '', description = '' }: HeadProps = {}) => {
  return (
    <Helmet title={title} defaultTitle="Meta">
      <meta name="description" content={description} />
    </Helmet>
  );
};
