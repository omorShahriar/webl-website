import CardItem from "./CardItem";
import styled from "styled-components";

import dayjs from "dayjs";

const BlogGrid = styled.div`
  display: grid;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
const Column = styled.div``;
const BlogList = ({ data = [] }) => {
  return data.map((page, i) => {
    return (
      <BlogGrid key={i}>
        {page.map((blog) => (
          <Column key={blog.slug}>
            <CardItem
              author={blog.author}
              title={blog.title}
              subtitle={blog.subtitle}
              date={dayjs(blog.date).format("DD MMMM, YYYY")}
              image={blog.coverImage}
              link={{
                href: "/blog/[slug]",
                as: `/blog/${blog.slug}`,
              }}
            />
          </Column>
        ))}
      </BlogGrid>
    );
  });
};

export default BlogList;
