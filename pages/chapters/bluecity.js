import ChapterLayout from '../../components/layouts/ChapterLayout';

const BlueCity = () => {
  const title = 'Blue City';
  const image = '/pics/bluecity.jpg';
  const prevChapter = 'sanctuary';
  const nextChapter = 'abundance';

  return (
    <ChapterLayout
      title={title}
      image={image}
      prevChapter={prevChapter}
      nextChapter={nextChapter}
    >
      <p>Feet back on the surface, Crow arrives at his next destination.</p>

      <p>Blue City - also known as the city that never sleeps.</p>

      <p>
        From the outside, there was something just captivating about this city.
        A powerful, blue glow that drew people in, bridges like metal vines
        constricting the colossal skyscrapers that touched the clouds, and
        vehicles flying around those things like tiny birds.
      </p>

      <p>
        Indeed, it was very captivating and Crow couldn’t wait to step foot
        inside.
      </p>
    </ChapterLayout>
  );
};

export default BlueCity;
