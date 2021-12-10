import { NextSeo } from "next-seo";
import { useGetBlogsPages } from "../../actions/pagination";
import { getPaginatedBlogs } from "../../lib/sanity";

import moment from "moment";
import { Row, Col, Container } from "styled-bootstrap-grid";
import { GenericWrapper } from "../../components/Utils/GenericWrapper";

import {
  LoadMore,
  LoadMoreContainer,
  Spinner,
} from "../../components/BlogsPage/LoadMore";
import { PrimaryHeading, SecondaryHeading } from "../../components/Typography";

import CardItem from "../../components/BlogsPage/CardItem";

export const BlogList = ({ data = [] }) => {
  return data.map((page) =>
    page.map((blog) => (
      <Col key={blog.slug} md={6}>
        <CardItem
          author={blog.author}
          title={blog.title}
          subtitle={blog.subtitle}
          date={moment(blog.date).format("LL")}
          image={blog.coverImage}
          link={{
            href: "/blog/[slug]",
            as: `/blog/${blog.slug}`,
          }}
        />
      </Col>
    ))
  );
};

export default function BlogPage({ blogs, preview }) {
  const { data, size, setSize, hitEnd, isFetchingNextPage } =
    useGetBlogsPages();

  return (
    <>
      <NextSeo title="Blog" />
      <GenericWrapper>
        <Container>
          {preview && <PreviewAlert />}
          <PrimaryHeading textAlign="left">Blog.</PrimaryHeading>

          <Row>
            {blogs.length != 0 ? (
              <>
                <BlogList data={data || [blogs]} />

                <Col>
                  <LoadMoreContainer>
                    {hitEnd ? (
                      <SecondaryHeading>No more posts yet!</SecondaryHeading>
                    ) : isFetchingNextPage ? (
                      <Spinner color="#3CBB95" size={48} />
                    ) : (
                      <LoadMore
                        onClick={() => setSize(size + 1)}
                        disabled={isFetchingNextPage}
                      >
                        Load More
                      </LoadMore>
                    )}
                  </LoadMoreContainer>
                </Col>
              </>
            ) : (
              <SecondaryHeading>No Blog Post Yet</SecondaryHeading>
            )}
          </Row>
        </Container>
      </GenericWrapper>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const blogs = await getPaginatedBlogs({ offset: 0, date: "desc" });
  return {
    props: {
      blogs,
      preview,
    },
    revalidate: 60 * 60,
  };
}
