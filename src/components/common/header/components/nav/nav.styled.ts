import styled, { css } from 'styled-components';
import { Link as RouterLink } from '../../../../common/common';

const Navigation = styled.nav``;

const Links = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;

  max-width: 600px;
  margin: 0;
  padding: 0;
  padding-top: 17px;
  padding-bottom: 17px;
  margin-bottom: -10px;
  list-style: none;
`;

const LinkItem = styled.li`
  &:not(:last-child) {
    margin-right: 49px;
    margin-bottom: 10px;
  }
`;

const Link = styled(RouterLink)<{ $isActiveLink?: boolean }>`
  display: block;
  max-width: 100px;
  font-size: ${({ theme }) => theme.font.semibase};
  line-height: 16px;
  letter-spacing: 0.03em;
  font-weight: 600;
  text-transform: uppercase;

  color: ${({ theme }) => theme.color.whiteSmoke};

  ${({ $isActiveLink }) =>
    $isActiveLink &&
    css`
      color: ${({ theme }) => theme.color.tangerine};
    `}

  &:focus,
  &:hover {
    color: ${({ theme }) => theme.color.tangerine};
  }
`;

export { Navigation, Links, LinkItem, Link };
