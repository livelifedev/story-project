import ChapterLayout from '../../components/layouts/ChapterLayout';

const BeautyBeasts = () => {
  const title = '11. Beauty & Beasts';
  const image = '/pics/beautybeasts.jpg';
  const prevChapter = 'shepherd';
  const nextChapter = 'sunnyvillage';

  return (
    <ChapterLayout
      title={title}
      image={image}
      prevChapter={prevChapter}
      nextChapter={nextChapter}
    >
      <p>
        Before parting ways the smiling shepherd left some parting words for
        Crow.
      </p>

      <p>
        “The world can be beautiful and can be ugly, you’ll discover that for
        yourself in your journey.”
      </p>
    </ChapterLayout>
  );
};

export default BeautyBeasts;
