import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import { FiCalendar } from 'react-icons/fi';

import Header from '../../../../components/Header';
import {
  Container,
  Content,
  TitlePost,
  ImagePost,
  DescriptionPost,
} from './styles';
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

  useEffect(() => {
    const data = postData.find((post) => post.id === Number(id));

    setPostItem(data);
  }, [setPostItem, id]);

  return (
    <Container exit={{ opacity: 0 }}>
      <Header />
      <Content>
        <TitlePost>
          <h1>{postItem?.title}</h1>
          <div className="publication">
            <span>
              <FiCalendar size={18} />
              {postItem?.publicationDate}
            </span>
          </div>
        </TitlePost>
        <ImagePost>
          <img src={postItem?.image} alt="" />
        </ImagePost>
        <DescriptionPost>
          <p>{postItem?.description}</p>
          <p>{postItem?.description}</p>
          <p>{postItem?.description}</p>
          <p>{postItem?.description}</p>
        </DescriptionPost>
      </Content>
    </Container>
  );
};

export default Post;
