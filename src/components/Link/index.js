import NextLink from 'next/link';

export default function Link({ href, children, ...props }) {
  return(
    <div>
      <NextLink href={href} passHref legacyBehavior>
        <a {...props}>{children}</a>
      </NextLink>
    </div>
  )
}