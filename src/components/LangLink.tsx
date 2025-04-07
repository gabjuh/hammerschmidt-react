import { Link, LinkProps } from 'react-router-dom';

import { useLanguage } from '../context/LanguageContext';

type LangLinkProps = Omit<LinkProps, 'to'> & {
  to: string;
};

const LangLink = ({ to, ...rest }: LangLinkProps) => {
  const { lang } = useLanguage();
  const fullPath = to.startsWith('/') ? `/${lang}${to}` : `/${lang}/${to}`;
  return <Link to={fullPath} {...rest} />;
};

export default LangLink;
