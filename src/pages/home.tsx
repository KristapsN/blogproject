import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PostPrev } from '../components/blog/postPreview';
import { Posts, fetchPosts } from '../apiData/articles';


const Home = () => {
  const postData = useSelector((state: Posts[]) => state);
  const dispatch = useDispatch();

  // console.log('fe', fetchPosts());
  // fetchPosts();

  return (

    <div className="container">
      <div className="row ">
        <div className="col-xs-12 center-xs">
          <h1>Blog</h1>
        </div>
      </div>
      <div className="row">
        {postData.map((item) =>
          <div key={item.id} className="col-md-4 col-sm-6 col-12 ">
            <PostPrev
              prevTilte={item.title}
              prevParagraph={item.body}
              prevLink='Read more'
              id={item.id}
            />
          </div>
        )}
      </div>
    </div>

  );

};

export default Home; 