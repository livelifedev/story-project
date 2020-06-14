import ChapterLayout from '../../components/layouts/ChapterLayout';

const Griffin = () => {
  const title = '30. Griffin';
  const image = '/pics/griffin.jpg';
  const prevChapter = 'hermit';
  const nextChapter = 'tree';

  return (
    <ChapterLayout
      title={title}
      image={image}
      prevChapter={prevChapter}
      nextChapter={nextChapter}
    >
      <p>
        “Take a rest and clear your thoughts and frustration. When you are
        ready, call out and the forest will send you aid.”
      </p>

      <p>
        Crow set up camp and rested. He put up a fire, cooked up a warm meal and
        took his time to enjoy. He had been moving around so much, he had not
        noticed how fatigued he actually was.
      </p>

      <p>
        Looking into the fire, he cleared his thoughts and calmed his
        frustration. He decided to give it a go.
      </p>

      <p>
        “Forest, I am ready to meet the Master of Time. Please help me get
        there.”
      </p>

      <p>A screech could be heard in the sky.</p>

      <p>Crow looked up to see a griffin flying down.</p>
    </ChapterLayout>
  );
};

export default Griffin;
