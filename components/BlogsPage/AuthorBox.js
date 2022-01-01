import styled from "styled-components";
import { media } from "styled-bootstrap-grid";
import Image from "next/image";
import { urlFor } from "../../lib/sanity";

const AuthorWrapper = styled.div`
  margin-top: 1.25rem;

  display: flex;
  align-items: center;
  justify-content: ${({ centered }) => (centered ? "center" : "flex-start")};
  width: 100%;
  ${media.md`
    margin-top:1.5rem ;
  `}
  ${media.md`
    margin-top:1.75rem ;
  `}
`;

const AuthorImage = styled.div`
  border-radius: 50%;
  overflow: hidden;
  height: 30px;
  width: 30px;
  margin-right: 1rem;
`;

const AuthorName = styled.h3`
  font-style: italic;
  font-size: 0.8125rem;
  line-height: 1rem;
  color: #424242;
  display: flex;
  flex-direction: column;
`;
const PublishDate = styled.span`
  color: #7a7a7a;
  font-style: normal;
  font-size: 0.8125rem;
  line-height: 1rem;
`;

const AuthorBox = ({ children, author, date, centered }) => {
  return (
    <AuthorWrapper centered={centered}>
      <AuthorImage>
        <Image src={urlFor(author.avatar).url()} width={50} height={50} />
      </AuthorImage>
      <AuthorName>
        {author.name}
        <PublishDate>{date}</PublishDate>
      </AuthorName>
      {children}
    </AuthorWrapper>
  );
};
export default AuthorBox;
