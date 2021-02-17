import React from 'react';

import { Link } from 'react-router-dom';
import ProgressiveImage from 'react-progressive-image';

import { Container, Content, Image, Title } from './styles';
import { IMAGE_ANIMATION } from './animations';

interface Post {
  id: number;
  title: string;
  image: string;
}

const Article: React.FC<Post> = ({ id, title, image }) => {
  return (
    <Container
      exit={{
        opacity: 0,
      }}
      transition={{
        duration: 0.6,
        ease: [0.43, 0.13, 0.23, 0.96],
      }}
    >
      <Content>
        <Link to={`/blog/post/${id}`}>
          <ProgressiveImage src={image} placeholder={image}>
            {(src: string) => (
              <Image
                src={src}
                alt="Imagem do Post"
                variants={IMAGE_ANIMATION}
                whileHover="hover"
              />
            )}
          </ProgressiveImage>
        </Link>
      </Content>
      <Title>{title}</Title>
    </Container>
  );
};

export default Article;
