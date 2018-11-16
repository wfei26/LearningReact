import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail 
          author="Sam" 
          timeAgo="Today at 4:40PM." 
          content="Nice blog post1!" 
          avatar={faker.image.avatar()} 
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail 
          author="Alex" 
          timeAgo="Today at 2:00AM." 
          content="Nice blog post2!" 
          avatar={faker.image.avatar()} 
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail 
          author="Jane" 
          timeAgo="Yeterday at 5:00PM." 
          content="Nice blog post3!" 
          avatar={faker.image.avatar()} 
        />
      </ApprovalCard>he
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
