# Powering Tomorrow PSA Website

Powering Tomorrow is a public service announcement website that helps families build simple energy-saving habits at home. It is designed for parents, carers, home owners, and children, with resources about climate awareness, sustainable living, energy bills, future technology, quizzes, DIY activities, a podcast, a PSA visual, and campaign artefacts.

## How to View Locally

No build step is required. This is a static HTML, CSS, and JavaScript website.

1. Open the project folder.
2. Double-click `index.html`.
3. The website will open in a browser.

If testing through a local server, open the project root and serve the folder. The homepage is `index.html`.

## GitHub Pages

This project can be published with GitHub Pages.

1. Push the project to GitHub.
2. Open the repository on GitHub.
3. Go to **Settings**.
4. Open **Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select the main branch and the root folder.
7. Save.

The live site will use GitHub's default format:

```text
https://YOUR-GITHUB-USERNAME.github.io/REPOSITORY-NAME/
```

If the repository is renamed to `powering-tomorrow`, the URL will be:

```text
https://YOUR-GITHUB-USERNAME.github.io/powering-tomorrow/
```

## Project Structure

```text
PSA_Website/
|-- index.html
|-- 404.html
|-- README.md
|-- assets/
|   |-- audio/
|   |-- images/
|   |-- infographics/
|   `-- transcript/
|-- css/
|   |-- global.css
|   |-- style.css
|   `-- pages/
|-- js/
|   |-- layout.js
|   |-- script.js
|   |-- quiz.js
|   `-- page-specific scripts
`-- pages/
    |-- about.html
    |-- accessibility.html
    |-- artefact.html
    |-- certificate.html
    |-- climate-change.html
    |-- contact.html
    |-- copyright-usage.html
    |-- diy-energy-lab.html
    |-- diy-solar-oven.html
    |-- faq.html
    |-- future-technology.html
    |-- image.html
    |-- infographic.html
    |-- kids-6-7.html
    |-- kids-9-10.html
    |-- kids-12-13.html
    |-- kids-15-16.html
    |-- macgyver-windmill.html
    |-- our-mascot.html
    |-- podcast.html
    |-- podcast-summary.html
    |-- podcast-transcript.html
    |-- quiz.html
    |-- references.html
    |-- reusable-lunch-bag.html
    |-- sustainable-living.html
    |-- take-action.html
    |-- terms-of-use.html
    `-- understanding-energy-bill.html
```

## Main Pages

### `index.html`

The homepage introduces the campaign, links to the podcast and PSA visual, shows age-group pathways, introduces Kidz Zone, and summarises the campaign idea.

### `pages/podcast.html`

The podcast page includes the episode **Everyday Energy: Smart Choices. Stronger Future.**, an audio player, sharing options, transcript link, summary link, and download link.

### `pages/image.html`

The PSA visual page presents the main campaign image and explains three key messages: parents lead the learning, small actions create real benefits, and children carry habits into the future.

### `pages/infographic.html`

This page links to age-based infographic resources for children.

### `pages/artefact.html`

The artefact page presents campaign take-home materials, including parent reminders such as a keychain and fridge magnet, plus Captain Wattson stickers for children.

### `pages/our-mascot.html`

This page introduces Captain Wattson, the campaign mascot, and explains his energy-saving messages for children and families.

### `pages/quiz.html`

Captain Wattson's Energy Quiz lets users choose an age group, answer 10 climate and energy questions, review explanations, and generate a certificate.

### `pages/diy-energy-lab.html`

The DIY Energy Lab links to hands-on activities: DIY Solar Oven, MacGyver Windmill, and Reusable Lunch Bag.

## Learn Pages

### `pages/climate-change.html`

Explains how household energy use connects to climate change and how parents can teach children calmly through everyday routines.

### `pages/sustainable-living.html`

Explains sustainable living through simple family habits such as switching off, reusing, repairing, sharing, and reducing waste.

### `pages/understanding-energy-bill.html`

Explains billing periods, total usage, supply charges, usage charges, kilowatt-hours, and how families can use bills as a learning activity.

### `pages/future-technology.html`

Explains smart meters, efficient appliances, timers, sensors, home energy apps, solar panels, home batteries, and responsible technology habits.

## Age Group Pages

- `pages/kids-6-7.html` shows the 6-8 years infographic.
- `pages/kids-9-10.html` shows the 9-10 years infographic.
- `pages/kids-12-13.html` shows the 11-13 years infographic.
- `pages/kids-15-16.html` shows the 14-15 years infographic.

## Support and Policy Pages

- `pages/about.html` explains the campaign mission, story, values, approach, and team.
- `pages/faq.html` includes 25 frequently asked questions based on the completed website content.
- `pages/contact.html` provides the contact form and contact page experience.
- `pages/references.html` lists project references and sources, including sources for the Learn pages.
- `pages/terms-of-use.html`, `pages/privacy-policy.html`, `pages/accessibility.html`, and `pages/copyright-usage.html` provide supporting policy information.

## Image Attribution Notes

Some campaign visuals and activity images include plain attribution lines on the relevant pages. The attribution states that images were generated with the help of ChatGPT.

## Development Notes

- Shared header and footer markup is generated by `js/layout.js`.
- Shared styling is in `css/global.css`.
- Page-specific styles are in `css/pages/`.
- General interactions are handled by `js/script.js`.
- Quiz data and quiz logic are in `js/quiz.js`.

## Editing Guide

To edit page text, open the matching `.html` file in `pages/`.

To edit shared navigation or footer links, update `js/layout.js`.

To edit site-wide colours, typography, spacing, and shared components, update `css/global.css`.

To edit a specific page layout, update the matching CSS file in `css/pages/`.
