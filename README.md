# Platform 45 React Test - Dominica Wannenburg

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Project is also hosted on Netlify here: [https://platform45-react-dominica.netlify.app/](https://platform45-react-dominica.netlify.app/)

## Tech choices

### Why NextJS?

While it might seem like overkill for a simple test project, if this was a real project, Next.js is an excellent choice for building web applications, especially those that involve user authentication and account creation. I also have production experience with NextJS, so it is a comfortable solution for me.

### Why React Hook Form?

I have familiarity with it, and it is the simplest way to set up a new form for me.

### Why SASS?

Vanilla CSS has come a long way, and now has nested styles, scoped styles using `@layer`, and most recently, nested styles. Nested styles is the main reason I use SASS, however it's still very new in vanilla CSS and doesn't have the widest support yet. This is why I stuck to SASS for this project. I also considered TailwindCSS, but for the sake of the test went for SASS.
