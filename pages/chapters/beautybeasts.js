import ChapterLayout from '../../components/layouts/ChapterLayout';

const BeautyBeasts = () => {
  const title = 'Beauty & Beasts';
  const image = '/pics/beautybeasts.jpg';

  return (
    <ChapterLayout title={title} image={image}>
      <p>
        Before parting ways the smiling shepherd left some parting words for
        Crow.
      </p>

      <p>
        “There is still a half hour before your bedtime” - The grandfather said
        to his grandson.
      </p>

      <p>
        “The world can be beautiful and can be ugly, you’ll discover that for
        yourself in your journey.”
      </p>
    </ChapterLayout>
  );
};

export default BeautyBeasts;
