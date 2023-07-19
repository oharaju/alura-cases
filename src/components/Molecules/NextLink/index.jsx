import NextLink from 'next/link';
import Link from './styles';

export default function LinkNext({ href, children, ...props }) {
  return (
    <NextLink href={href} passHref legacyBehavior>
      <Link {...props}>{children}</Link>
    </NextLink>
  );
}
