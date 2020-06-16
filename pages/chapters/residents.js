import ChapterLayout from '../../components/layouts/ChapterLayout';

const Residents = () => {
  const title = '26. Residents';
  const image = '/pics/residents.jpg';
  const prevChapter = 'wishkingdom';
  const nextChapter = 'theking';

  return (
    <ChapterLayout
      title={title}
      image={image}
      prevChapter={prevChapter}
      nextChapter={nextChapter}
    >
      <p>The residents of this kingdom were an odd bunch.</p>

      <p>
        Inside the castle, a girl as white as snow and a costumed man greeted
        Crow.
      </p>

      <p>“Welcome, welcome!”</p>

      <p>“I am the princess of this kingdom, the ghost princess!”</p>

      <p>“I am the kingdom’s jester, the superhero of laughter!”</p>

      <p>
        “...” - Crow found them both very strange, but very entertaining. They
        show Crow a fun time around the kingdom.
      </p>

      <p>
        “Go speak with my father, the king. He will help you with your wish.”
      </p>
    </ChapterLayout>
  );
};

export default Residents;
