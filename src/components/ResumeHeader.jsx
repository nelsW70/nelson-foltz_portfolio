import React from 'react';
import Links from './shared/Links';
import DownloadButton from './shared/DownloadButton';
import { useGlobalContext } from '../context';

const ResumeHeader = () => {
  const { links, routerLinks } = useGlobalContext();
  const routerLinkText = routerLinks[1];

  return (
    <header>
      <h1 className="text-red">Nelson Foltz</h1>
      <Links data={links} routerLinkText={routerLinkText} />
      <DownloadButton />
    </header>
  );
};

export default ResumeHeader;
