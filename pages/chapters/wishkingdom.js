import ChapterLayout from '../../components/layouts/ChapterLayout';

const WishKingdom = () => {
  const title = '25. Wish Kingdom';
  const image = '/pics/wishkingdom.jpg';
  const prevChapter = 'gatekeeper';
  const nextChapter = 'residents';

  return (
    <ChapterLayout
      title={title}
      image={image}
      prevChapter={prevChapter}
      nextChapter={nextChapter}
    >
      <p>
        Revealing itself through the gates, the surreal scene of Wish Kingdom.
      </p>

      <p>
        An open night sky with multiple moons and countless twinkling stars.
        Floating steps weaving through dusky clouds and candles of all shapes
        and sizes pleasantly lighting the path to the castle.
      </p>
    </ChapterLayout>
  );
};

export default WishKingdom;
