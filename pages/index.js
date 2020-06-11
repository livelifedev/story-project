import Link from 'next/link';
import Layout from '../components/layouts/Layout';

const Index = () => {
  return (
    <Layout>
      <h1>About</h1>

      <div className="about-text">
        <p>
          I recently dug this up, a picture book I did for my final design
          project in high school - 10 years ago. It's weird reading back through
          it after all this time, the writing's definitely cringey and the
          illustrations aren’t the best - nevertheless, I still like the
          project. Since my eagerness to draw has been reignited after so long,
          I figured it would make a cool side project to paint over every single
          illustration from this book.
        </p>

        <p>Have a look through if you please...</p>

        <Link href="/chapters/cover">
          <a className="click-text">Look Here.</a>
        </Link>

        <p>
          P.S. I've pixelated the images that aren’t done yet, which at this
          point is most of them!! Also, I quickly hacked this website together,
          so not the prettiest thing.
        </p>
      </div>

      <style jsx>{`
        h1 {
          text-align: center;
        }

        .click-text {
          font-size: 1.2rem;
        }

        .about-text {
          width: 80%;
          margin: auto;
          text-align: justify;
          max-width: 800px;
        }
      `}</style>
    </Layout>
  );
};

export default Index;
