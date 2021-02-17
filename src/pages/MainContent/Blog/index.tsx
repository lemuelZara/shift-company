import React from 'react';

import { Container, Content, HeaderContent, PostsList } from './styles';

import { postData } from '../../../data/postData';
import Article from './Article';

const Blog: React.FC = () => {
  return (
    <Container>
      <Content>
        <HeaderContent>
          <h2>Últimas do Blog</h2>
          <p>Confira as últimas atualizações</p>
        </HeaderContent>
        <PostsList>
          {postData.map((post) => (
            <Article key={post.id} {...post} />
          ))}
        </PostsList>
      </Content>
    </Container>
  );
};

export default Blog;
