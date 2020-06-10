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
            font-size: 0.9rem;
            text-align: right;
            padding-bottom: 10px;
          }

          a {
            padding-right: 15px;
          }
        `}
      </style>
    </div>
  );
};

export default Header;
