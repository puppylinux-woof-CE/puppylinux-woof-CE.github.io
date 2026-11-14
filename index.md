---
layout: default
title: Puppy Linux Home
---

<style>
  .home-page {
    color: #333;
    font-size: 1rem;
    line-height: 1.6;
  }

  .home-page h1,
  .home-page h2,
  .home-page h3 {
    color: #2d86b5;
    line-height: 1.2;
  }

  .home-page h1 {
    font-size: clamp(2.2rem, 5vw, 3.8rem);
    margin: 0 0 1rem;
  }

  .home-page h2 {
    font-size: 2rem;
    margin: 0 0 1rem;
  }

  .home-page a {
    color: #168ac0;
  }

  .home-hero {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(320px, 0.9fr);
    gap: clamp(2rem, 6vw, 5rem);
    align-items: center;
    padding: 1rem 0 1.5rem;
  }

  .home-hero p {
    max-width: 39rem;
    font-size: 1.08rem;
  }

  .home-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.65rem;
    margin: 1.4rem 0 0.5rem;
  }

  .home-button {
    display: inline-block;
    border: 2px solid #168ac0;
    border-radius: 5px;
    padding: 0.7rem 1.1rem;
    font-weight: bold;
    text-decoration: none !important;
    transition: background-color 0.15s ease, border-color 0.15s ease, color 0.15s ease, transform 0.15s ease;
  }

  .home-button-primary {
    background: #168ac0;
    color: #fff !important;
  }

  .home-button:hover,
  .home-button:focus-visible {
    background: #126d98;
    border-color: #126d98;
    color: #fff !important;
    transform: translateY(-1px);
  }

  .home-button:focus-visible {
    outline: 3px solid rgba(22, 138, 192, 0.35);
    outline-offset: 2px;
  }

  .home-button:active {
    transform: translateY(0);
  }

  .home-button-secondary {
    background: transparent;
  }

  .home-microcopy {
    color: #666;
    font-size: 0.85rem;
    margin: 0;
  }

  .home-trust {
    display: flex;
    flex-wrap: wrap;
    gap: 0.6rem 1.4rem;
    margin: 1.35rem 0 0;
    color: #555;
    font-size: 0.9rem;
  }

  .home-visual {
    margin: 0;
    padding: 0.7rem;
    background: #eef7fb;
    border: 1px solid #c9e2ed;
    border-radius: 6px;
    box-shadow: 0 6px 16px rgba(37, 91, 116, 0.1);
  }

  .home-visual img {
    display: block;
    width: 100%;
    height: auto;
    border: 1px solid #b7c8cf;
  }

  .home-visual figcaption {
    padding: 0.55rem 0.25rem 0;
    color: #5d6870;
    font-size: 0.85rem;
    text-align: center;
  }

  .home-section {
    margin: 0.5rem 0 3rem;
    padding-top: 1rem;
  }

  .home-section-intro {
    max-width: 47rem;
    margin-bottom: 1.5rem;
  }

  .home-feature-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 1rem;
  }

  .home-card {
    height: 100%;
    box-sizing: border-box;
    padding: 1.35rem;
    border: 1px solid #d5e5eb;
    border-top: 4px solid #39a5d5;
    border-radius: 4px;
    background: #f8fcfd;
  }

  .home-card h3 {
    margin: 0 0 0.55rem;
    font-size: 1.25rem;
  }

  .home-card p {
    margin: 0;
    font-size: 0.95rem;
  }

  .home-story {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    align-items: start;
  }

  .home-story-panel {
    padding: 1.5rem;
    border-left: 4px solid #39a5d5;
    background: #f5fafc;
  }

  .home-story-panel h3 {
    margin-top: 0;
  }

  .home-screenshot-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.25rem;
  }

  .home-screenshot-grid a {
    display: block;
    overflow: hidden;
    padding: 0.35rem;
    border: 1px solid #d5e5eb;
    border-radius: 4px;
    background: #fff;
    transition: border-color 0.15s ease, box-shadow 0.15s ease, transform 0.15s ease;
  }

  .home-screenshot-grid a:hover,
  .home-screenshot-grid a:focus-visible {
    border-color: #168ac0;
    box-shadow: 0 4px 12px rgba(37, 91, 116, 0.14);
    transform: translateY(-2px);
  }

  .home-screenshot-grid a:focus-visible {
    outline: 3px solid rgba(22, 138, 192, 0.3);
    outline-offset: 2px;
  }

  .home-screenshot-grid img {
    display: block;
    width: 100%;
    aspect-ratio: 16 / 9;
    height: auto;
    object-fit: contain;
    background: #eef4f6;
  }

  .home-community {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 1.5rem;
    align-items: center;
    padding: 1.6rem;
    border: 1px solid #c9e2ed;
    background: #eef7fb;
  }

  .home-community p {
    margin: 0;
  }

  @media (prefers-reduced-motion: reduce) {
    .home-button,
    .home-screenshot-grid a {
      transition: none;
    }
  }

  @media (max-width: 850px) {
    .home-hero,
    .home-story {
      grid-template-columns: 1fr;
    }

    .home-feature-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (max-width: 520px) {
    .home-hero {
      padding-top: 2rem;
    }

    .home-feature-grid,
    .home-screenshot-grid {
      grid-template-columns: 1fr;
    }

    .home-actions .home-button,
    .home-community .home-button {
      width: 100%;
      box-sizing: border-box;
      text-align: center;
    }
  }
</style>

<main class="home-page">
  <section class="home-hero" aria-labelledby="home-title">
    <div>
      <p class="home-eyebrow">A friendly Linux family for everyday computers</p>
      <h1 id="home-title">A fast, flexible OS for Single-user PCs.</h1>
      <p>Suitable for both modern and older PCs.</p>
      <p>
        Small, ready to use, and easy to try from a USB drive.
      </p>
      <div class="home-actions">
        <a class="home-button home-button-primary" href="https://forum.puppylinux.com/puppy-linux-collection">Download Puppy Linux</a>
        <a class="home-button home-button-secondary" href="#features">Explore features</a>
      </div>
      <p class="home-microcopy">Free and open source &middot; Most variants are 1.5 GB or less</p>
      <div class="home-trust" aria-label="Puppy Linux highlights">
        <span>&#10003; Maintained since 2003</span>
        <span>&#10003; Boots from USB</span>
        <span>&#10003; Runs well on modest hardware</span>
      </div>
    </div>
    <figure class="home-visual">
      <img src="screenshots/trixiepup64.webp" alt="Puppy Linux TrixiePup64 desktop showing its clean workspace and application dock" fetchpriority="high">
      <figcaption>See the Puppy Linux desktop before you install it.</figcaption>
    </figure>
  </section>

  <section class="home-section" id="features" aria-labelledby="features-title">
    <h2 id="features-title">Small download. Big possibilities.</h2>
    <p class="home-section-intro">
      Pick a Puppy that fits your hardware, then make it your own.
    </p>
    <div class="home-feature-grid">
      <article class="home-card">
        <h3>Ready in minutes</h3>
        <p>Try it from a USB drive without changing your existing system.</p>
      </article>
      <article class="home-card">
        <h3>Light on resources</h3>
        <p>Get a responsive desktop on modest hardware.</p>
      </article>
      <article class="home-card">
        <h3>Make it yours</h3>
        <p>Choose a variant, desktop, and apps that suit you.</p>
      </article>
      <article class="home-card">
        <h3>Helpful community</h3>
        <p>Find practical help from Puppy users around the world.</p>
      </article>
    </div>
  </section>

  <section class="home-section" aria-labelledby="why-title">
    <div class="home-story">
      <div>
        <h2 id="why-title">A project with room to explore</h2>
        <p>
          Since 2003, Puppy Linux has grown into a family of community-built distributions
          for different needs.
        </p>
        <p>
          Read the <a href="history.html">history</a>, browse the
          <a href="screenshots.html">screenshots</a>, or visit the
          <a href="https://forum.puppylinux.com">forum</a>.
        </p>
      </div>
      <div class="home-story-panel">
        <h3>What to expect</h3>
        <p>A quick desktop, useful software, and the freedom to run Puppy your way.</p>
        <a class="home-button home-button-secondary" href="install.html">Learn how to install</a>
      </div>
    </div>
  </section>

  <section class="home-section" aria-labelledby="gallery-title">
    <h2 id="gallery-title">Find a Puppy that feels right</h2>
    <p class="home-section-intro">Preview a few desktops from the Puppy Linux family.</p>
    <div class="home-screenshot-grid">
      <a href="screenshots/trixiepup64-1.webp"><img src="screenshots/trixiepup64-1.webp" alt="TrixiePup64 desktop screenshot" loading="lazy" decoding="async"></a>
      <a href="screenshots/bionicpup64.webp"><img src="screenshots/bionicpup64.webp" alt="BionicPup64 desktop screenshot" loading="lazy" decoding="async"></a>
      <a href="screenshots/slacko64.webp"><img src="screenshots/slacko64.webp" alt="Slacko64 desktop screenshot" loading="lazy" decoding="async"></a>
    </div>
    <p><a href="screenshots.html">View the complete screenshot gallery</a></p>
  </section>

  <section class="home-section" aria-labelledby="download-title">
    <h2 id="download-title">Download Sites</h2>
    <p>Download from the <a href="https://forum.puppylinux.com/puppy-linux-collection">Puppy Linux Distro Collection</a>.</p>
    <p>Puppy Linux variants since version 2 are hosted at <a href="http://distro.ibiblio.org/puppylinux">Ibiblio</a>.</p>
    <p>
      Ibiblio also hosts some Puppy Linux specific packages (.pet) as
      well as squashfs files (.sfs) with kernels, kernel sources, large applications
      and application frameworks.
    </p>
    <p>The Ibiblio Puppy Linux directory is mirrored by several sites world-wide.</p>
    <p>
      The <a href="https://ftp.nluug.nl/os/Linux/distr/puppylinux/">NLUUG</a> and
      <a href="http://ftp.cc.uoc.gr/mirrors/linux/puppylinux/">UoC</a> mirrors in Europe and
      the <a href="http://mirror.aarnet.edu.au/pub/puppylinux/">AARNET</a> and
      <a href="http://mirror.internode.on.net/pub/puppylinux/">Internode</a> mirrors in
      Australia are known to update regularly and are usually faster than Ibiblio.
      <a href="https://mirror.lug.umbc.edu/puppylinux/">UMBC/LUG</a> is a new mirror in the USA.
    </p>
    <p><em>Mirrors may take up to a day to incorporate changes in Ibiblio</em>.</p>
  </section>

  <section class="home-section home-community" aria-labelledby="community-title">
    <div>
      <h2 id="community-title">Ready to try Puppy Linux?</h2>
      <p>Choose a Puppy and join the community.</p>
    </div>
    <a class="home-button home-button-primary" href="https://forum.puppylinux.com/puppy-linux-collection">Choose your Puppy</a>
  </section>
</main>
