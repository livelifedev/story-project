import ChapterLayout from '../../components/layouts/ChapterLayout';

const OldForest = () => {
  const title = 'Old Forest';
  const image = '/pics/oldforest.jpg';

  return (
    <ChapterLayout title={title} image={image}>
      <p>
        Crow sets off on another journey to meet the Master of Time, in order to
        find the answer to his question.
      </p>

      <p>He make his way to the Old Forest.</p>

      <p>
        The Myth surrounding this forest say that first civilisation of mankind
        stood here, it flourished and perished with time.
      </p>

      <p>
        The ruins still exist here, but now a vast forest has taken the
        civilisation's place.
      </p>
    </ChapterLayout>
  );
};

export default OldForest;
