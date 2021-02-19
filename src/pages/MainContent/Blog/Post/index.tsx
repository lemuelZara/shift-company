import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import { FiCalendar } from 'react-icons/fi';
import { useWindowWidth } from '@react-hook/window-size';
import { motion, useViewportScroll, useTransform } from 'framer-motion';

import Header from '../../../../components/Header';
import {
  AnimatedContainer,
  Content,
  ContentPost,
  Title,
  Letter,
  Info,
  AnimatedImage,
  Description,
} from './styles';
import {
  IMAGE_ANIMATION,
  TITLE_ANIMATION,
  LETTER_ANIMATION,
  INFO_ANIMATION,
} from './animations';
import { postData } from '../../../../data/postData';

interface Post {
  id: number;
  title: string;
  image: string;
  description: string;
  publicationDate: string;
}

const Post: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [postItem, setPostItem] = useState<Post>();
  const onlyWidth = useWindowWidth();
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  useEffect(() => {
    window.scrollTo(0, 0);

    const data = postData.find((post) => post.id === Number(id));

    setPostItem(data);
  }, [setPostItem, id]);

  return (
    <AnimatedContainer initial="unMounted" animate="mounted" exit="exit">
      <Header />
      <Content>
        <ContentPost>
          {postItem && (
            <Title variants={TITLE_ANIMATION}>
              {postItem &&
                postItem?.title.split('').map((char, index) => (
                  <Letter
                    key={`${char}-${index + 1}`}
                    variants={LETTER_ANIMATION}
                  >
                    {char === ' ' ? String.fromCharCode(160) : char}
                  </Letter>
                ))}
            </Title>
          )}
          <Info variants={INFO_ANIMATION}>
            <span>
              <FiCalendar size={18} />
              {postItem?.publicationDate}
            </span>
          </Info>
        </ContentPost>
        <AnimatedImage
          custom={onlyWidth}
          variants={IMAGE_ANIMATION}
          initial="unMounted"
          animate="mounted"
        >
          <motion.img src={postItem?.image} alt="" style={{ scale }} />
        </AnimatedImage>
        <Description>
          <p>{postItem?.description}</p>
          <p>{postItem?.description}</p>
          <p>{postItem?.description}</p>
          <p>{postItem?.description}</p>
        </Description>
      </Content>
    </AnimatedContainer>
  );
};

export default Post;
