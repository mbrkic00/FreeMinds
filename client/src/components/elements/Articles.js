// ===== Style modules =====
import {
  StyledArticles,
  StyledArticle,
  StyledDescription,
  StyledTitle
} from "../../styles/Articles.styled";

// ===== Main export =====
export const Articles = () => {
  const articleData = [
    {
      id: "0000",
      title: "Python 101",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      author: "Josip Broz Tito",
      publishingDate: "12.12.2020"
    },
    {
      id: "0001",
      title: "Java 101",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      author: "Ante Pavelić",
      publishingDate: "1.10.2021"
    },
    {
      id: "0002",
      title: "Algoritmi 1",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      author: "Ivo Sanader",
      publishingDate: "20.4.2021"
    },
    {
      id: "0003",
      title: "Osnove WEB Developmenta",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      author: "Mate Mišo Kovač",
      publishingDate: "11.1.2021"
    }
  ]

  return (
    <StyledArticles>
    {
      articleData.map(({title, description, author, publishingDate}) => (
        <StyledArticle>
          <StyledTitle>{title}</StyledTitle>
          <StyledDescription>{description}</StyledDescription>
          <section>
            <span>{author}</span>
            <time>{publishingDate}</time>
          </section>
        </StyledArticle>
      ))
    }
    </StyledArticles>
  );
}
