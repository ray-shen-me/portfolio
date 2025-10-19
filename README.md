# Ray Shen's Portfolio

This is the source code for my personal portfolio website, built with Astro.js.

## Tech Stack

*   [Astro.js](https://astro.build/)
*   [TypeScript](https://www.typescriptlang.org/)
*   [React](https://reactjs.org/)
*   [Tailwind CSS](https://tailwindcss.com/)

## Getting Started

To run the project locally, follow these steps:

1.  Clone the repository:

    ```bash
    git clone https://github.com/ray-shen-me/ray-portfolio.git
    ```

2.  Install the dependencies:

    ```bash
    npm install
    ```

3.  Start the development server:

    ```bash
    npm run dev
    ```

    The website will be available at [http://localhost:4321](http://localhost:4321).

## Deployment

This project can be deployed with Docker.

1.  Build the Docker image:

    ```bash
    docker build -t ray-portfolio .
    ```

2.  Run the Docker container:

    ```bash
    docker run -p 8000:80 ray-portfolio
    ```

    The website will be available at [http://localhost:8000](http://localhost:8000).
