/** Monad logomark — decorative; use `className` for size and `text-*` for fill (fill="currentColor"). */
type MonadShapeProps = {
  className?: string;
};

export function MonadShape({ className = "" }: MonadShapeProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 154 154"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M76.8621 0C54.666 0 0 54.6644 0 76.8615C0 99.0586 54.666 153.724 76.8621 153.724C99.0581 153.724 153.725 99.0576 153.725 76.8615C153.725 54.6653 99.059 0 76.8621 0ZM64.8844 120.813C55.5246 118.263 30.3598 74.2436 32.9107 64.8838C35.4617 55.5235 79.4804 30.3594 88.8402 32.9103C98.2005 35.4609 123.365 79.4794 120.814 88.8397C118.263 98.2 74.2442 123.364 64.8844 120.813Z"
        fill="currentColor"
      />
    </svg>
  );
}
