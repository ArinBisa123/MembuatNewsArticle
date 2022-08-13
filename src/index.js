import React from 'react';
import { createRoot } from 'react-dom/client';

function MainContainer() {
  //data news
  const someNews = [
    {
      title: 'CNN Acuire BEME',
      date: 'March 20,2022',
      content: "CNN purchased Casey Neistat's Beme app for $25 million ",
      image: 'https://source.unsplash.com/user/erondu/600x400',
      category: 'News',
      link: '#'
    },
    {
      title: 'React and the WP-API',
      date: 'March 19,2022',
      content: 'The first ever decoupled starter theme for React & the WP-API',
      image: 'https://source.unsplash.com/user/ilyapavlov/600x400',
      category: 'News',
      link: '#'
    },
    {
      title: 'Nomad Lifestyle',
      date: 'March 19,2022',
      content: 'Learn our tips and tricks on living a nomadic lifestyle',
      image: 'https://source.unsplash.com/user/erondu/600x400',
      category: 'Travel',
      link: '#'
    }
  ];
  return (
    <div>
      <Header title="Latest News" subtitle="Covering March & April 2022" />
      {/* <Card {...someNews[0]} />
      <Card
        title={someNews[1].title}
        date={someNews[1].date}
        content={someNews[1].content}
        image={someNews[1].image}
        category={someNews[1].category}
        link={someNews[1].link}
      />
      <Card
        title={someNews[2].title}
        date={someNews[2].date}
        content={someNews[2].content}
        image={someNews[2].image}
        category={someNews[2].category}
        link={someNews[2].link}
      /> */}
      {someNews.map((news) => (
        <Card {...news} key={news.title} />
      ))}
    </div>
  );
}
function Header({ title, subtitle }) {
  return (
    <header>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </header>
  );
}
function Card({ image, category, date, title, content, link }) {
  return (
    <article>
      <HeaderContent image={image} category={category} />
      <BodyContent date={date} title={title} content={content} link={link} />
    </article>
  );
}
function HeaderContent({ image, category }) {
  return (
    <header>
      <h4>{category}</h4>
      <img src={image} alt="" />
    </header>
  );
}
function BodyContent({ date, title, content, link }) {
  return (
    <div>
      <p>{date}</p>
      <h2>{title}</h2>
      <p>{content}</p>
      <Button link={link} />
    </div>
  );
}
function Button({ link }) {
  return <a href={link}>Find out More</a>;
}
const root = createRoot(document.getElementById('root'));
root.render(<MainContainer />);
