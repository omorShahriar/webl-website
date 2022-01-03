import { NextSeo } from "next-seo";
import { useGetBlogsPages } from "../../actions/pagination";
import { getPaginatedBlogs } from "../../lib/sanity";

import { Container } from "styled-bootstrap-grid";

import {
  LoadMore,
  LoadMoreContainer,
} from "../../components/BlogsPage/LoadMore";
import Spinner from "components/Spinner";

import { Title, SecondaryHeading } from "../../components/Typography";

import BlogList from "components/BlogsPage/BlogList";
import Header from "components/StyleAssets/Header";

export default function BlogPage({ blogs, preview }) {
  const { data, size, setSize, hitEnd, isFetchingNextPage } =
    useGetBlogsPages();

  return (
    <>
      <NextSeo title="Blog" />

      <Container>
        <Header dotColor="#FFE082" bgColor="#FFE082">
          <Title>Blog.</Title>
        </Header>

        {blogs.length != 0 ? (
          <>
            <BlogList data={data || [blogs]} />

            <LoadMoreContainer>
              {hitEnd ? (
                <SecondaryHeading>No more posts yet!</SecondaryHeading>
              ) : isFetchingNextPage ? (
                <Spinner />
              ) : (
                <LoadMore
                  onClick={() => setSize(size + 1)}
                  disabled={isFetchingNextPage}
                >
                  Load More Posts
                </LoadMore>
              )}
            </LoadMoreContainer>
          </>
        ) : (
          <SecondaryHeading>No Blog Post Yet</SecondaryHeading>
        )}
      </Container>
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
