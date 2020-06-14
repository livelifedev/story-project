import ChapterLayout from '../../components/layouts/ChapterLayout';

const Gatekeeper = () => {
  const title = '24. Gatekeeper';
  const image = '/pics/gatekeeper.jpg';
  const prevChapter = 'luckyday';
  const nextChapter = 'wishkingdom';

  return (
    <ChapterLayout
      title={title}
      image={image}
      prevChapter={prevChapter}
      nextChapter={nextChapter}
    >
      <p>
        Illusion - is Crow's first thought. He had been transported to a magical
        realm.
      </p>

      <p>“Welcome traveller.”</p>

      <p>A deep voice resounded and shook the air.</p>

      <p>In front of him stood a giant.</p>

      <p>
        “I am the gatekeeper of this realm - Wish Kingdom. Only those worthy can
        pass through these gates.
      </p>

      <p>“Tell me, what is your wish?”</p>

      <p>Crow ran through his thoughts...</p>

      <p>“My wish is to find whatever it is I’m seeking.”</p>

      <p>It was ambiguous wish, but Crow answered honestly.</p>

      <p>The gates open.</p>
    </ChapterLayout>
  );
};

export default Gatekeeper;
