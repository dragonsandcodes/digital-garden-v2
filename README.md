# Modern Developer Blog Template (Digital Garden Starter)

![Image2](/screenshots/garden2.png)
[More screenshots here](/screenshots/)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/thedevdavid/digital-garden)

An open source blogging (digital gardening) template for developers using [Next.js](https://nextjs.org/) app router, MDX, [Contentlayer](https://contentlayer.dev/), [Tailwind CSS](https://tailwindcss.com/), [@shadcn/ui](https://ui.shadcn.com/) , [Lucide Icons](https://lucide.dev/icons), and more.

If you love this template and/or use it, please give it a star on GitHub. This will help more people discover it, thus help improving the template.

![GitHub Repo stars](https://img.shields.io/github/stars/thedevdavid/digital-garden?style=social)

**Note: This project is always evolving and it's far from being perfect or even done.** I'm always open to suggestions and contributions. Feel free to open an issue or a PR if you have any ideas or suggestions. You can also see the [roadmap](#features--roadmap) for planned features if you want to contribute.

## Table of Contents

- [Motivation](#motivation)
- [Getting Started](#getting-started)
  - [Writing content](#writing-content)
  - [Deployment](#deployment)
- [Customization](#customization)
  - [Fonts](#fonts)
  - [Colors](#colors)
  - [Metadata](#metadata)
  - [Analytics](#analytics)
    - [Vercel](#vercel)
    - [Umami](#umami)
    - [Other analytics providers](#other-analytics-providers)
  - [Newsletter subscription](#newsletter-subscription)
    - [MailerLite](#mailerlite)
    - [Other newsletter providers](#other-newsletter-providers)
  - [Hero section](#hero-section)
  - [Other tips & tricks](#other-tips--tricks)
    - [Image optimization](#image-optimization)
- [Examples](#examples)
- [Features & Roadmap](#features--roadmap)
- [Contributing](#contributing)
  - [Contributors](#contributors)
  - [How?](#how)
- [Inspiration & Mentions](#inspiration--mentions)
- [Support](#support)

## Motivation

As a developer who creates content, I want to have a blog & digital garden where I can share my thoughts and ideas with the world. Now, there's not really a "perfect solution" for this currently. With included analytics, SEO, email subscriptions, modern tooling, simple design, etc. We either have to build one from scratch, use a design template and code the features, or use a CMS/no-code tool.

So I decided to build a solution that I would use myself. This is the result.

## Getting Started

If you want to see how I set up this template for my own digital garden, you can check out [this commit](https://github.com/thedevdavid/website-2023/commit/fb10942d424a1389f9c4c1605849e45ff718656d) with all the changes.

1. Use the repo as a template
2. Install dependencies with `pnpm install`
3. Edit `utils/metadata.ts` with your information and general settings
4. Edit `utils/uses-data.ts` with software & hardware you use
5. Edit `utils/projects-data.ts` with your projects
6. Edit `utils/navigation-links.ts` with the links you want in the navigation
7. Edit `content/pages/now` with your availability
8. Edit `content/pages/about` with your bio
9. Run the development server with `pnpm dev`

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Writing content

You can write content in Markdown or MDX. The content is located in `content/` and is organized in folders. The `pages` folder contains the pages. The `posts` folder contains the blogposts. The `projects` folder contains the projects.

Editing list pages is done in the `lib` folder.

- `/uses` - `lib/uses-data.ts`
- `/projects` - `lib/projects-data.ts`
- `/social` - `lib/social-data.ts`

### Deployment

You can deploy the project with [Vercel](https://vercel.com/) or any other hosting provider. If you want to use Vercel, you can use the button at the top of this README.

1. Update `package.json` author information
2. Publish your repo to GitHub
3. Create a new project on Vercel and import your repo
4. Set up the `NEXT_PUBLIC_BASE_URL` environment variable on Vercel to point to your website's root URL
5. If you plan to use [analytics](#analytics) and/or [newsletter](#newsletter-subscription) providers, set up the respective environment variables on Vercel
6. Build and deploy 🎉

## Customization

### Fonts

This project uses [Inter](https://rsms.me/inter/) as the default font. You can change it on `app/layout.tsx` using the `next/fonts` package.

### Colors

The project uses Tailwind colors and @shadcn/ui config. Customize the colors on `globals.css`.

### Signature

There's a signature component to use in the footer. You can edit the signature on `components/signature.tsx`. I used Figma to write the signature with `Caveat` font and exported it as SVG. You can do the same and update the SVG in the component.

### Images

Images and other media files are located in `public/` directory. You can use them in your content by using the `/<filename>.<ext>` path.

### Metadata

You can change the metadata and author details in `utils/metadata.ts`. This will be used around the site for titles, social links, social handles, SEO, etc.

You can edit navigation links in `lib/navigation-links.ts`.

### Analytics

#### Vercel

To configure, you need to enable it on [Vercel project dashboard](https://vercel.com/dashboard) by selecting your Project and then click the Analytics tab and click Enable from the dialog.

#### Umami

Umami is a simple, easy to use, web analytics solution with self-hosting option! You can read more about it on [Umami website](https://umami.is/). _(Hint: On [Railway](https://railway.app), you can self-host it low cost or even free)_.

Configure:
Set `NEXT_PUBLIC_UMAMI_SCRIPT_URL` & `NEXT_PUBLIC_UMAMI_WEBSITE_ID` environment variables on your `.env.local` file and on Vercel dashboard.

#### Other analytics providers

Supporting other analytics providers are in progress. Feel free to open an issue if you have any suggestions or a PR if you want to implement it yourself.

### Newsletter subscription

#### MailerLite

MailerLite is a simple email marketing tool for all types of businesses. You can read more about it on [MailerLite website](https://www.mailerlite.com/).

Configure:
Set `EMAIL_API_BASE`, `EMAIL_API_KEY`, and `EMAIL_GROUP_ID` environment variables on your `.env.local` file and on Vercel dashboard.

#### Other newsletter providers

Supporting other newsletter providers are in progress. Feel free to open an issue if you have any suggestions or a PR if you want to implement it yourself.

### Hero section

You can choose between 3 different hero variants to use in `app/(site)/page.tsx` by changing the imported hero component.

1. `HeroSimple` - A simple centered hero section with image, title, and subtitle.
2. `HeroVideo` - 2 column hero section with Videoask embed on one side and title and subtitle on the other.
3. `HeroImage` - 2 column hero section with image on one side and title, and subtitle on the other.
4. `HeroMinimal` - small hero section name & job title

### Other tips & tricks

#### Image optimization

Optimize images in seconds for free with ImageOptim. Install on your Mac, then open the `public` folder in Finder. Select all images, right-click, and choose "Open with > ImageOptim". This will optimize all images in the folder.

Note: DO NOT overdo it. You can easily make images look bad with lossy compression algorithms.

## Examples

- [https://davidlevai.com/](https://davidlevai.com/)

**Create a PR and add your blog to this list if you're using the template!**

## Features & Roadmap

- [x] Basic functionality of reading pages and posts
- [x] Basic design dark/light mode
- [x] MDX code highlighting
- [x] Readme.md
- [x] `robots.txt` & `sitemap.xml`
- [x] RSS Feed
- [x] Reading time estimate
- [x] LICENSE
- [x] contributing.md
- [x] MDX components (TOC & footnotes)
- [x] general config & metadata (author, URL, socials, etc.)
- [x] uses page
- [x] Link in bio page
- [x] OG image generation
- [x] projects page
- [x] about section on homepage
- [x] search & command bar
- [x] Analytics: Vercel, Umami
- [x] Post series
- [x] Not found page
- [x] contributing docs
- [x] Docs refresh
- [x] Back to top button
- [x] Social icons component
- [x] Social sharing buttons
- [x] Tags
- [x] newsletter integration (form, api route, keys, thank you/welcome page, MailerLite provider)
- [ ] Other newsletter providers (Convertkit, Substack, Buttondown, Mailchimp, etc)
- [ ] Other analytics providers (fathom, simplelytics, plausible, etc)
- [ ] CLI and/or recipes
- [ ] Post series page
- [ ] prev/next post links
- [ ] related posts
- [ ] Newsletter previous issues page
- [ ] Layouts/templates system
- [ ] Notion data source
- [ ] Sanity data source
- [ ] hero title and subtitle text HTML support(?)
- [ ] Design improvements (whitespace, layout, etc.)
- [ ] error, and loading pages
- [ ] Code preview component
- [ ] Code highlight improvements (copy code, theme)
- [ ] `manifest.json`
- [ ] Rich project cards
- [ ] CV template
- [ ] Authenticated pages and/or hidden content (behind email address)
- [ ] 100 lighthouse score
- [ ] Command bar fuzzy search in content
- [ ] Pagination
- [ ] SEO improvements
- [ ] Accessibility audit
- [ ] TypeScript fixes
- [ ] Redesign uses page
- [ ] Redesign projects page
- [ ] general refactor
- [ ] general cleanup
- [ ] implement content security policies
- [ ] implement a videoask-like solution for the hero section
- [ ] RSS feed improvements (image, description, etc.)
- [ ] multi-author support (?)
- [ ] Post like counter (?)
- [ ] Visitor counter (?)
- [ ] code playground instead of code highlighting (?)
- [ ] Commenting system (?)
- [ ] keyboard-based navigation with hotkeys (?)
- [ ] multilang support (?)

## Contributing

### Contributors

- [@thedevdavid](https://twitter.com/thedevdavid)
- [@br4adam](https://github.com/br4adam)

This project is from developers for developers. All contributions are welcome! Please feel free to:

- Report a bug
- Discuss the current state and ideas for improvements
- Submit a fix
- Propose new features

### How?

1. Fork the repo and create your branch from `develop`.
2. Add your code.
3. Update the documentation.
4. Make sure your code lints and the app builds.
5. Open pull request to `develop` branch.

Any contributions you make will be under the MIT Software License. In short, when you submit code changes, your submissions are understood to be under the same [MIT License](http://choosealicense.com/licenses/mit/) that covers the project. Code of Conduct can be found [here](https://gist.github.com/thedevdavid/08e306cee9dc1b6b7f3c209827277a82).

## Inspiration & Mentions

- [Delba Oliveira Personal Blog](https://github.com/delbaoliveira/website) - Using and structuring table of contents with Contentlayer
- [timlrx/tailwind-nextjs-starter-blog](https://github.com/timlrx/tailwind-nextjs-starter-blog) - Idea

## Support

If you love this template and/or use it, please give it a star on GitHub.
