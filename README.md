# Rakesh Photography Portfolio

A clean static photography portfolio designed for GitHub Pages.

## Website structure

```text
/
├── index.html
├── about.html
├── model.html
├── pre-wedding.html
├── children.html
├── style.css
├── script.js
└── images/
    ├── model/
    ├── pre-wedding/
    ├── children/
    └── about/
```

## Adding your photographs

Replace the placeholder files with your own photos.

For example:

```text
images/
├── model/
│   ├── model-01.jpg
│   ├── model-02.jpg
│   └── model-03.jpg
├── pre-wedding/
│   ├── pre-wedding-01.jpg
│   └── pre-wedding-02.jpg
├── children/
│   ├── children-01.jpg
│   └── children-02.jpg
└── about/
    └── profile.jpg
```

Then update the corresponding image filenames in the HTML.

### To add more photos

Copy another `<figure class="gallery-item">...</figure>` block in the relevant category page and change its image path and caption.

## Important

Replace these placeholders before publishing:

- `you@example.com`
- Instagram link / handle
- About-page text
- Placeholder images

## GitHub Pages

Put the contents of this folder in the root of your GitHub repository.

Then:

1. GitHub → repository → **Settings**
2. **Pages**
3. Under **Build and deployment**, choose **Deploy from a branch**
4. Select your main branch and `/ (root)`
5. Save

The site will then be served from GitHub Pages.
