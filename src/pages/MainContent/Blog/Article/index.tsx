import React from 'react';

import { Link } from 'react-router-dom';
import ProgressiveImage from 'react-progressive-image';

import { Container, Content, Image, Title } from './styles';
import { IMAGE_ANIMATION, CONTAINER_ANIMATION } from './animations';

interface Post {
  id: number;
  title: string;
  image: string;
  description: string;
}

const Article: React.FC<Post> = ({ id, title, image, description }) => {
  return (
    <Container key={id} variants={CONTAINER_ANIMATION} exit="unMounted">
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
      <Title variants={CONTAINER_ANIMATION} exit="unMounted">
        {title}
      </Title>
    </Container>
  );
};

export default Article;
