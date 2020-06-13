import ChapterLayout from '../../components/layouts/ChapterLayout';

const Residents = () => {
  const title = 'Residents';
  const image = '/pics/residents.jpg';

  return (
    <ChapterLayout title={title} image={image}>
      <p>The residents of this kingdom were an odd bunch.</p>

      <p>
        Inside the castle, a girl as white as snow and a costumed man greeted
        Crow.
      </p>

      <p>“Welcome, welcome!”</p>

      <p>“I am the princess of this kingdom and also a ghost!”</p>

      <p>“I am the kingdom’s jester and also a superhero!”</p>

      <p>...These people are very weird, Crow thought.</p>

      <p>
        But he also found them very entertaining and had fun seeing the kingdom
        with them.
      </p>

      <p>
        “Go speak with my father, the king. He will help you with your wish.” -
        Said the ghost princess, Cheerfully."
      </p>
    </ChapterLayout>
  );
};

export default Residents;
