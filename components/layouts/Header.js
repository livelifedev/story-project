import Link from 'next/link';

const Header = () => {
  const chapter = 'fly';
  return (
    <div className="header-container">
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/chapters/cover">
        <a>Read</a>
      </Link>
      <Link href="/chapters">
        <a>Board</a>
      </Link>
      <Link href="/updates">
        <a>Updates</a>
      </Link>

      <style jsx>
        {`
          .header-container {
            font-size: 0.8rem;
            text-align: right;
          }

          a {
            padding-right: 8px;
          }
        `}
      </style>
    </div>
  );
};

export default Header;
