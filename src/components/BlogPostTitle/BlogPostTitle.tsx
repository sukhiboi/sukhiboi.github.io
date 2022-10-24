export interface IBlogPostTitle {
  title: string;
}

export default ({ title }: IBlogPostTitle) => {
  return <h3>{title}</h3>;
};
