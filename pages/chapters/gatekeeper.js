import ChapterLayout from '../../components/layouts/ChapterLayout';

const Gatekeeper = () => {
  const title = 'Gatekeeper';
  const image = '/pics/gatekeeper.jpg';

  return (
    <ChapterLayout title={title} image={image}>
      <p>
        Transported to a magical realm. The surroundings look and feel like an
        illusion.
      </p>

      <p>“Welcome traveller.”</p>

      <p>A deep voice resounded and shook the air.</p>

      <p>In front of Crow stood a giant.</p>

      <p>
        “I am the gatekeeper of this realm - Wish Kingdom. Only those worthy can
        pass through these gates.” - Proclaimed the giant.
      </p>

      <p>“Tell me, what is your wish?”</p>

      <p>Crow dug through his thoughts.</p>

      <p>
        “My wish is to find whatever it is I’m seeking.” - It was ambiguous
        wish, but Crow answered honestly.
      </p>

      <p>The gates open.</p>
    </ChapterLayout>
  );
};

export default Gatekeeper;
