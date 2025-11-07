interface OwlLogoProps {
  size?: number;
  className?: string;
}

export function OwlLogo({ size = 80, className = '' }: OwlLogoProps) {
  return (
    <img
      src="https://static.wixstatic.com/media/c24a60_2b6231b666214539ae22ebd2dffe7a09~mv2.png"
      alt="My College Finance - Owl Logo"
      width={size}
      height={size}
      className={className}
      style={{ objectFit: 'contain' }}
    />
  );
}
