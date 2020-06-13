import Link from 'next/link';

const Header = () => {
  return (
    <div className="header-container">
      <Link href="/">
        <a>About</a>
      </Link>
      <Link href="/chapters/cover">
        <a>Read</a>
      </Link>
      <Link href="/board">
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
            height: 30px;
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
