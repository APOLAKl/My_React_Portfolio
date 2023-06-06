import React from "react";

function Project({ title, link, image }) {
  return (
    <a href={link}>
      <div class="card">
        <img
          src={image}
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <p class="card-text">{title}</p>
        </div>
      </div>
    </a>
  );
}

export default Project;
