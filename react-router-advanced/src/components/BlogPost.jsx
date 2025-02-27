import { useParams } from 'react-router-dom';

function BlogPost() {
  const { postId } = useParams();

  return (
    <div>
      <h1>Blog Post {postId}</h1>
      <p>This is the content of blog post {postId}.</p>
    </div>
  );
}

export default BlogPost;
