import BlogPost from "./components/BlogPost/BlogPost";

export default () => (
  <div>
    <h1>Blog</h1>
    <main>
      {Array.from({ length: 10 }).map(() => (
        <BlogPost />
      ))}
    </main>
  </div>
);
