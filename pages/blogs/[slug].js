import { useEffect, useState } from "react";
import { NextSeo } from "next-seo";

import MoonLoader from "react-spinners/ClipLoader";
import { sanityImageProps } from "lib/sanity";
import ErrorPage from "next/error";
import {
  getBlogBySlug,
  getAllBlogs,
  getPaginatedBlogs,
  onBlogUpdate,
} from "lib/sanity";
import { Row, Col, Container } from "styled-bootstrap-grid";
import { GenericWrapper } from "components/Utils/GenericWrapper";
import { urlFor } from "lib/sanity";

import moment from "moment";
import { useRouter } from "next/router";

import BlogHeader from "components/BlogsPage/BlogHeader";
import BlogContent from "components/BlogsPage/BlogContent";
import PreviewAlert from "components/BlogsPage/PreviewAlert";

const BlogDetail = ({ blog: initialBlog, preview, error }) => {
  const router = useRouter();
  const [blog, setBlog] = useState(initialBlog);
  const imageProps = sanityImageProps(blog.coverImage);

  useEffect(() => {
    let sub;
    if (preview) {
      sub = onBlogUpdate(blog.slug).subscribe((update) => {
        setBlog(update.result);
      });
    }

    return () => sub && sub.unsubscribe();
  }, []);

  // if (!router.isFallback && !blog?.slug) {
  //   return <ErrorPage statusCode="404"/>
  // }

  if (router.isFallback) {
    return (
      <GenericWrapper>
        <MoonLoader size={60} />
      </GenericWrapper>
    );
  }

  return (
    <>
      <NextSeo title={blog.title} />
      <GenericWrapper>
        <Container>
          <Row>
            <Col md={10} mdOffset={1}>
              {preview && <PreviewAlert />}
              <BlogHeader
                title={blog.title}
                subtitle={blog.subtitle}
                imageProps={imageProps}
                author={blog.author}
                date={moment(blog.date).format("LL")}
              />

              {blog.content && <BlogContent content={blog.content} />}
            </Col>
          </Row>
        </Container>
      </GenericWrapper>
    </>
  );
};

export async function getStaticProps({ params, preview = false, previewData }) {
  const blog = await getBlogBySlug(params.slug, preview);

  if (!blog) {
    return {
      notFound: true,
    };
  }

  return {
    props: { blog, preview },
    revalidate: 60 * 60,
  };
}

// TODO: Introduce fallback
export async function getStaticPaths() {
  const blogs = await getPaginatedBlogs();
  const paths = blogs?.map((b) => ({ params: { slug: b.slug } }));
  return {
    paths,
    fallback: true,
  };
}

export default BlogDetail;
