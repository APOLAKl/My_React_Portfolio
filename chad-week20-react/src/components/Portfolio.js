import React from 'react';
import Project from './Project';

function Portfolio(props) {

  const projects = [
    {
      title: "Project 1",
      link: "https://google.com",
      image: "https://placehold.co/600x400/orange/white"
    },
    {
      title: "Project 2",
      link: "https://google.com",
      image: "https://placehold.co/600x400/orange/blue"
    },
    {
      title: "Project 3",
      link: "https://google.com",
      image: "https://placehold.co/600x400/orange/black"
    },
    {
      title: "Project 4",
      link: "https://google.com",
      image: "https://placehold.co/600x400/orange/red"
    }
  ]

  return (
    <div>
          <h1>Portfolio</h1>
          <div>
              {
                projects.map(p => {
                  return <Project
                  title={p.title}
                  link={p.link}
                  image={p.image}
                />
                })
              }
          </div>
        </div>
  );
}

export default Portfolio;