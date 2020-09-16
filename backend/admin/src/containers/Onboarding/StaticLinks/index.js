/**
 *
 * StaticLinks
 *
 */

import React from 'react';
import { useIntl } from 'react-intl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import StyledLink from './StyledLink';

function StaticLinks() {
  const { formatMessage } = useIntl();
  const staticLinks = [
    {
      icon: 'book',
      label: formatMessage({ id: 'app.components.LeftMenuFooter.documentation' }),
      destination: 'https://strapi.io/documentation',
    },
    {
      icon: 'file',
      label: formatMessage({ id: 'app.static.links.cheatsheet' }),
      destination: 'https://strapi-showcase.s3-us-west-2.amazonaws.com/CheatSheet.pdf',
    },
    {
      icon: 'file',
      label: "A notion page",
      destination: 'https://www.notion.so/strapi/48-69N-d9b1860ece494f4e8fd703142630ada2',
    }
  ];

  return (
    <ul className="list">
      {staticLinks.map(link => {
        const { icon, label, destination } = link;

        return (
          <li key={label}>
            <StyledLink href={destination} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={icon} />
              <span>{label}</span>
            </StyledLink>
          </li>
        );
      })}
    </ul>
  );
}

export default StaticLinks;
