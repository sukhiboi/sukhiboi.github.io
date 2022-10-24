import { BlogPost } from "../../types";
import BlogCard from "../BlogCard/BlogCard";
import TagText from "../TagText/TagText";

export interface IBlogList {
  blogs: BlogPost[];
}

const BlogList = ({ blogs }: IBlogList) => (
  <div data-testid={"blog-list"}>
    {blogs?.length ? (
      blogs.map(({ id, title, content }) => (
        <BlogCard title={title} content={content} key={id} id={id} />
      ))
    ) : (
      <TagText tag={"h3"} content={"No blogs written yet"} />
    )}
  </div>
);

export default BlogList;
