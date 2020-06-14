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

      <p>“I am the princess of this kingdom and also a ghost!”</p>

      <p>“I am the kingdom’s jester and also a superhero!”</p>

      <p>“...</p>

      <p>
        “Nice to meet you.” Crow politely replied back. Although, he found them
        both very weird.
      </p>

      <p>
        They show him around the kingdom, which ends up being a very fun time.
      </p>

      <p>
        “Go speak with my father, the king. He will help you with your wish.”
        The ghost princess said cheerfully.
      </p>
    </ChapterLayout>
  );
};

export default Residents;
