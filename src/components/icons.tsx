import type { SVGProps } from 'react';

export function KubeMonLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      width="1em"
      height="1em"
      {...props}
    >
      <path fill="none" d="M0 0h256v256H0z" />
      <path
        fill="currentColor"
        d="m218.3 88.5-40-69.2a16.1 16.1 0 0 0-13.8-8H91.5a16.1 16.1 0 0 0-13.8 8l-40 69.2a15.9 15.9 0 0 0 0 16l40 69.2a16.1 16.1 0 0 0 13.8 8h62.5a16.1 16.1 0 0 0 13.8-8l40-69.2a15.9 15.9 0 0 0 0-16Z"
        opacity={0.2}
      />
      <path
        fill="currentColor"
        d="M91.5 24a16.1 16.1 0 0 0-13.8 8L37.7 96.5a15.9 15.9 0 0 0 0 16l40 69.2a16.1 16.1 0 0 0 13.8 8h62.5a16.1 16.1 0 0 0 13.8-8l40-69.2a15.9 15.9 0 0 0 0-16l-40-69.2a16.1 16.1 0 0 0-13.8-8Zm-5.9 16h54.8l27.4 47.4-27.4 47.5H85.6L58.2 87.4Z"
      />
    </svg>
  );
}
