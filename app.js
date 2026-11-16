/**
 * ============================================================================
 * GABBU’S — Kitchen | Bar | Bakery
 * OFFICIAL INTERNAL ASSET REGISTRY & INTERACTIVE EXPERIENCE ENGINE
 * ============================================================================
 * Strict Category Separation Rules:
 * - GABBU_IMAGES: Used ONLY for Gabbu story, character moments & Our Story timeline.
 * - CAFE_INTERIOR_IMAGES: Used ONLY for Manali interior, dining room & ambience.
 * - CAFE_EXTERIOR_IMAGES: Used ONLY for Manali facade, outdoor patio & Visit Us location.
 * - FOOD_IMAGES / MENU_IMAGES: Currently awaiting official culinary photography;
 *   never substituted with dog or interior photographs.
 * - LOGO_ASSETS / PASSPORT_ASSETS: Official vertical emblem & horizontal hoarding.
 */

const BRAND_CONFIG = {
  name: "GABBU’S",
  descriptor: "Kitchen | Bar | Bakery",
  tagline: "A Dog Behind the Good Times.", // Editable working tagline
  manaliBranchUrl: "https://share.google/vINamWOS2OMTypzUA"
};

const ASSET_MAP = {
  GABBU_IMAGES: [
    {
      id: "gabbu-portrait-garden",
      path: "assets/gabbu/gabbu-portrait-garden.jpg",
      usage: "Intro / Brand Story (#philosophy) Primary Portrait & Our Story Chapter IV"
    },
    {
      id: "gabbu-twilight-lights",
      path: "assets/gabbu/gabbu-twilight-lights.jpg",
      usage: "Intro / Brand Story (#philosophy) Secondary Frame & Our Story Chapter III"
    },
    {
      id: "gabbu-mountain-balcony",
      path: "assets/gabbu/gabbu-mountain-balcony.jpg",
      usage: "Our Story (#our-story) Chapter I — Mountain Balcony Lookout"
    },
    {
      id: "gabbu-winter-snow",
      path: "assets/gabbu/gabbu-winter-snow.jpg",
      usage: "Our Story (#our-story) Chapter II — Winter Snowfall in Manali"
    }
  ],

  CAFE_INTERIOR_IMAGES: [
    {
      id: "manali-interior-dining",
      path: "assets/cafe/manali-interior-dining.jpg",
      branch: "Gabbu's Manali Branch",
      usage: "Hero Section (#home) & Visual Gallery (#gallery) Interior / Dining Room"
    },
    {
      id: "manali-interior-details",
      path: "assets/cafe/manali-interior-details.jpg",
      branch: "Gabbu's Manali Branch",
      usage: "Visual Gallery (#gallery) Botanical & Pendant Details & Reservation CTA Background"
    }
  ],

  CAFE_EXTERIOR_IMAGES: [
    {
      id: "manali-exterior-facade",
      path: "assets/cafe/manali-exterior-facade.jpg",
      branch: "Gabbu's Manali Branch",
      locationUrl: "https://share.google/vINamWOS2OMTypzUA",
      usage: "Visit Us (#visit-us) Manali Location Showcase & Visual Gallery (#gallery) Exterior"
    }
  ],

  // Zero menu photos loaded on homepage; 4 AI-generated space images for Bar, Listening Room, Kitchen Room, and Coffee Room
  FOOD_IMAGES: [],
  MENU_IMAGES: [],
  SPACE_IMAGES: [
    {
      id: "gabbus-bar-space",
      path: "assets/spaces/bar-space.jpg",
      usage: "Brewing Experience (#brewing) — The Bar Space"
    },
    {
      id: "gabbus-listening-room",
      path: "assets/spaces/listening-room.jpg",
      usage: "Brewing Experience (#brewing) — The Listening Room"
    },
    {
      id: "gabbus-kitchen-room",
      path: "assets/spaces/kitchen-room.jpg",
      usage: "Brewing Experience (#brewing) — The Kitchen Room"
    },
    {
      id: "gabbus-coffee-room",
      path: "assets/spaces/coffee-room.jpg",
      usage: "Brewing Experience (#brewing) — The Coffee Room"
    }
  ],

  LOGO_ASSETS: [
    {
      id: "gabbus-logo-vertical",
      path: "assets/logo/gabbus-logo-vertical.png",
      usage: "Official Vertical Emblem Logo (Footer & Brand Stamp)"
    },
    {
      id: "gabbus-official-logo-nav",
      path: "assets/logo/gabbus-official-logo-nav.svg",
      usage: "Official Vector Brand Logo (Navbar, Hero Opening & Footer)"
    },
    {
      id: "gabbus-logo-signage",
      path: "assets/logo/gabbus-official-logo.svg",
      usage: "Official Brand Signage (#hoarding-showcase)"
    }
  ],

  PASSPORT_ASSETS: [
    {
      id: "passport-emblem-reference",
      path: "assets/logo/gabbus-logo-vertical.png",
      usage: "Reserved for future Gabbu's Passport implementation"
    }
  ]
};

// Expose asset registry and tagline setter for easy inspection/editing
window.GABBUS_ASSET_MAP = ASSET_MAP;
window.setGabbusTagline = function (newTagline) {
  BRAND_CONFIG.tagline = newTagline;
  document.querySelectorAll("[data-editable-tagline]").forEach((el) => {
    el.textContent = `“${newTagline}”`;
  });
};

/**
 * Shared Menu Adapter: Maps verified items from window.GABBUS_VERIFIED_MENU (menu-data.js)
 * so both Brewing (#brewing) and Restaurant Menu Preview (#menu) consume the exact same
 * source of truth with zero invented dishes or fabricated prices.
 */
function mapVerifiedCategoryToLegacyPreview(catIds) {
  const store = window.GABBUS_VERIFIED_MENU;
  if (!store || !Array.isArray(store.brewingCategories)) return [];
  const list = [];
  store.brewingCategories
    .filter((cat) => catIds.includes(cat.id))
    .forEach((cat) => {
      cat.items.forEach((item) => {
        list.push({
          name: item.name,
          badge: item.badge || cat.title.toUpperCase(),
          price: item.displayPrice,
          desc: cat.hasMilkAddons
            ? `${cat.title} • ${store.customizationPolicy.rawText}`
            : `${cat.title} • Verified from Gabbu’s Official Menu`,
          tag: cat.pillar,
          pairing: `Chapter ${cat.index}: ${cat.title}`,
          image: cat.sourcePage
        });
      });
    });
  return list;
}

const MENU_DATA = {
  coffee: mapVerifiedCategoryToLegacyPreview(["hot-coffee", "cold-coffee", "affogato", "add-ons"]),
  breakfast: mapVerifiedCategoryToLegacyPreview(["hot-chocolate", "matcha", "taro-drinks", "tea"]),
  mains: mapVerifiedCategoryToLegacyPreview(["shakes", "premium-shakes", "smoothie"]),
  desserts: mapVerifiedCategoryToLegacyPreview(["affogato", "premium-shakes"]),
  beverages: mapVerifiedCategoryToLegacyPreview(["cold-mocktails", "mojito", "juices"])
};

document.addEventListener("DOMContentLoaded", () => {
  /* ========================================================================
     GLOBAL HIGH-PERFORMANCE PASSIVE SCROLL BUS
     Consolidates all scroll callbacks into a single requestAnimationFrame tick
     to guarantee 60fps silky smooth scrolling with 0 main-thread layout thrashing.
     ======================================================================== */
  const scrollSubscribers = new Set();
  let globalScrollRafPending = false;

  const registerScrollTask = (fn) => {
    if (typeof fn === "function") {
      scrollSubscribers.add(fn);
    }
    return () => scrollSubscribers.delete(fn);
  };

  const onGlobalScroll = () => {
    if (!globalScrollRafPending) {
      globalScrollRafPending = true;
      window.requestAnimationFrame(() => {
        globalScrollRafPending = false;
        scrollSubscribers.forEach((fn) => {
          try {
            fn();
          } catch (e) {
            console.error("Scroll subscriber error:", e);
          }
        });
      });
    }
  };

  window.addEventListener("scroll", onGlobalScroll, { passive: true });

  /* ========================================================================
     0. GABBU’S — HERO EXPERIENCE (IMPLEMENTATION 01)
     Cinematic Opening Sequence: THE HILLS -> THE CAFÉ -> GABBU
     Followed by Settled Minimal Interface & Subtle GPU Depth Parallax
     ======================================================================== */
  const planeHills = document.getElementById("heroPlaneHills");
  const planeCafe = document.getElementById("heroPlaneCafe");
  const planeWorld = document.getElementById("heroPlaneWorld");
  const prologueStepLabel = document.getElementById("prologueStepLabel");
  const heroParallaxBg = document.getElementById("heroParallaxBg");
  const heroParallaxPortrait = document.getElementById("heroParallaxPortrait");
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  let prologueTimers = [];
  let heroIsSettled = false;

  const settleHeroImmediately = () => {
    if (heroIsSettled) return;
    heroIsSettled = true;
    prologueTimers.forEach((id) => clearTimeout(id));
    if (planeHills) planeHills.classList.remove("plane-active");
    if (planeCafe) planeCafe.classList.remove("plane-active");
    if (planeWorld) planeWorld.classList.add("plane-active");
    document.body.classList.remove("hero-prologue-aperture");
    document.body.classList.remove("hero-prologue-running");
  };

  if (planeHills && planeCafe && planeWorld && !prefersReducedMotion && window.scrollY < 40) {
    document.body.classList.add("hero-prologue-running", "hero-prologue-aperture");

    // Act I: THE HILLS (0ms -> 1150ms)
    planeHills.classList.add("plane-active");
    if (prologueStepLabel) prologueStepLabel.textContent = "I — THE HILLS";

    // Act II: THE CAFÉ (1150ms -> 2300ms)
    prologueTimers.push(
      setTimeout(() => {
        planeHills.classList.remove("plane-active");
        planeCafe.classList.add("plane-active");
        if (prologueStepLabel) prologueStepLabel.textContent = "II — THE CAFÉ";
      }, 1150)
    );

    // Act III: GABBU + Full Viewport Aperture Expansion (2300ms -> 3250ms)
    prologueTimers.push(
      setTimeout(() => {
        planeCafe.classList.remove("plane-active");
        planeWorld.classList.add("plane-active");
        document.body.classList.remove("hero-prologue-aperture");
        if (prologueStepLabel) prologueStepLabel.textContent = "III — GABBU";
      }, 2300)
    );

    // Settle into Minimal Hero Interface + Reveal Unobtrusive Navigation
    prologueTimers.push(
      setTimeout(() => {
        settleHeroImmediately();
      }, 3250)
    );

    // If visitor scrolls or clicks early, settle immediately so usability is never delayed
    window.addEventListener("scroll", () => {
      if (window.scrollY > 15) settleHeroImmediately();
    }, { passive: true, once: true });
  } else {
    settleHeroImmediately();
  }

  // Subtle GPU-Friendly Camera Parallax on Desktop (transform: translate3d only)
  if (!prefersReducedMotion && heroParallaxBg && heroParallaxPortrait) {
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let rafPending = false;

    const updateHeroParallax = () => {
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;

      heroParallaxBg.style.transform = `translate3d(${(currentX * -14).toFixed(2)}px, ${(currentY * -10).toFixed(2)}px, 0)`;
      heroParallaxPortrait.style.transform = `translate3d(${(currentX * 10).toFixed(2)}px, ${(currentY * 8).toFixed(2)}px, 0)`;

      if (Math.abs(targetX - currentX) > 0.002 || Math.abs(targetY - currentY) > 0.002) {
        requestAnimationFrame(updateHeroParallax);
      } else {
        rafPending = false;
      }
    };

    window.addEventListener(
      "mousemove",
      (e) => {
        if (window.innerWidth <= 1024 || window.scrollY > window.innerHeight) return;
        targetX = (e.clientX / window.innerWidth - 0.5) * 2;
        targetY = (e.clientY / window.innerHeight - 0.5) * 2;
        if (!rafPending) {
          rafPending = true;
          requestAnimationFrame(updateHeroParallax);
        }
      },
      { passive: true }
    );
  }

  /* ========================================================================
     1. STICKY HEADER & MOBILE OVERLAY NAVIGATION
     ======================================================================== */
  const siteHeader = document.getElementById("siteHeader");
  const menuToggle = document.getElementById("menuToggle");
  const mobileNavOverlay = document.getElementById("mobileNavOverlay");
  const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");

  const handleHeaderScroll = () => {
    if (!siteHeader) return;
    if (window.scrollY > 48) {
      siteHeader.classList.add("scrolled");
    } else {
      siteHeader.classList.remove("scrolled");
    }
  };
  registerScrollTask(handleHeaderScroll);
  handleHeaderScroll();

  const toggleMobileMenu = (forceClose = false) => {
    const isOpen = document.body.classList.contains("menu-open");
    if (forceClose || isOpen) {
      document.body.classList.remove("menu-open");
      if (menuToggle) menuToggle.setAttribute("aria-expanded", "false");
      if (mobileNavOverlay) mobileNavOverlay.setAttribute("aria-hidden", "true");
    } else {
      document.body.classList.add("menu-open");
      if (menuToggle) menuToggle.setAttribute("aria-expanded", "true");
      if (mobileNavOverlay) mobileNavOverlay.setAttribute("aria-hidden", "false");
    }
  };

  if (menuToggle && !menuToggle.dataset.navBound) {
    menuToggle.dataset.navBound = "1";
    menuToggle.addEventListener("click", () => toggleMobileMenu());
    mobileNavLinks.forEach((link) => {
      link.addEventListener("click", () => toggleMobileMenu(true));
    });
  }

  /* ========================================================================
     2. OFFICIAL BRAND SIGNAGE & SCROLL "WOOF" BARK INTERACTION (CANVAS 60FPS)
     Draws the genuine pristine official brand artwork on the interactive canvas.
     The dog itself remains 100% unchanged as part of the original logo.
     During scroll to this section, 3 subtle curved visual lines appear near
     the dog's mouth as a simple comic-style "woof" indicator.
     ======================================================================== */
  const hoardingSection = document.getElementById("hoarding-showcase");
  const hoardingStage = document.getElementById("hoardingInteractiveStage");
  const signboardCanvas = document.getElementById("gabbusSignboardCanvas");

  if (signboardCanvas) {
    const ctx = signboardCanvas.getContext("2d", { alpha: false });
    const baseImg = new Image();
    baseImg.src = "assets/logo/gabbus-dog-horizontal-logo.png";

    let isBaseLoaded = false;
    // 3 curved "woof" lines near dog's snout (facing left at x=388, y=124)
    const lineRadii = [8, 15, 22];
    const lineAngles = [
      { start: (125 * Math.PI) / 180, end: (235 * Math.PI) / 180 },
      { start: (130 * Math.PI) / 180, end: (230 * Math.PI) / 180 },
      { start: (135 * Math.PI) / 180, end: (225 * Math.PI) / 180 },
    ];

    let currentOpacities = [0, 0, 0];
    let targetOpacities = [0, 0, 0];
    let woofRafId = null;

    const renderSignboard = () => {
      if (!isBaseLoaded) return;

      // 1. Draw 100% genuine pristine artwork (dog and letterforms untouched)
      ctx.drawImage(baseImg, 0, 0, 1024, 302);

      // 2. Draw 3 subtle curved "woof" bark lines near the mouth if visible
      for (let i = 0; i < 3; i++) {
        const opacity = currentOpacities[i];
        if (opacity <= 0.01) continue;

        ctx.save();
        ctx.beginPath();
        ctx.lineWidth = 2.2;
        ctx.lineCap = "round";
        ctx.strokeStyle = `rgba(70, 49, 36, ${(opacity * 0.92).toFixed(3)})`;
        ctx.arc(388, 124, lineRadii[i], lineAngles[i].start, lineAngles[i].end);
        ctx.stroke();
        ctx.restore();
      }
    };

    baseImg.onload = () => {
      isBaseLoaded = true;
      renderSignboard();
    };

    // If cached, render immediately
    if (baseImg.complete && baseImg.naturalWidth > 0) {
      isBaseLoaded = true;
      renderSignboard();
    }

    const renderWoofLoop = () => {
      let isAnimating = false;
      for (let i = 0; i < 3; i++) {
        const delta = targetOpacities[i] - currentOpacities[i];
        if (Math.abs(delta) > 0.01) {
          currentOpacities[i] += delta * 0.18;
          isAnimating = true;
        } else {
          currentOpacities[i] = targetOpacities[i];
        }
      }

      renderSignboard();

      if (isAnimating) {
        woofRafId = requestAnimationFrame(renderWoofLoop);
      } else {
        woofRafId = null;
      }
    };

    const updateWoofFromScroll = () => {
      if (!hoardingSection) return;
      const rect = hoardingSection.getBoundingClientRect();
      const vh = window.innerHeight || 1;

      if (rect.bottom > 0 && rect.top < vh) {
        const rawProgress = (vh - rect.top) / (vh + rect.height);
        const progress = Math.max(0, Math.min(1, rawProgress));

        // Smooth appearance around ~20-50%, peak at ~50%, and reverse exit past that (~54-72%)
        if (progress > 0.18 && progress < 0.74) {
          // Entrance & Exit ranges for each line (Line 0: inner, Line 1: mid, Line 2: outer)
          const inRanges = [
            [0.20, 0.32],
            [0.26, 0.38],
            [0.32, 0.46],
          ];
          const outRanges = [
            [0.62, 0.72],
            [0.58, 0.68],
            [0.54, 0.64],
          ];

          for (let i = 0; i < 3; i++) {
            const inAlpha = Math.max(
              0,
              Math.min(1, (progress - inRanges[i][0]) / (inRanges[i][1] - inRanges[i][0]))
            );
            const outAlpha = Math.max(
              0,
              Math.min(1, (outRanges[i][1] - progress) / (outRanges[i][1] - outRanges[i][0]))
            );
            targetOpacities[i] = inAlpha * outAlpha;
          }
        } else {
          targetOpacities = [0, 0, 0];
        }
      } else {
        targetOpacities = [0, 0, 0];
      }

      if (!woofRafId) {
        woofRafId = requestAnimationFrame(renderWoofLoop);
      }
    };

    if (hoardingSection) {
      registerScrollTask(updateWoofFromScroll);
      window.addEventListener("resize", updateWoofFromScroll, { passive: true });
      updateWoofFromScroll();

      // Gentle pulse on click/tap
      if (hoardingStage) {
        let isPulsing = false;
        hoardingStage.addEventListener(
          "click",
          () => {
            if (isPulsing) return;
            isPulsing = true;
            targetOpacities = [1, 1, 1];
            if (!woofRafId) woofRafId = requestAnimationFrame(renderWoofLoop);
            setTimeout(() => {
              isPulsing = false;
              updateWoofFromScroll();
            }, 600);
          },
          { passive: true }
        );
      }
    }
  }

  /* ========================================================================
     3. MENU PREVIEW ENGINE (GUARDED FOR DEDICATED MENU ARCHITECTURE)
     ======================================================================== */
  const menuItemsContainer = document.getElementById("menuItemsContainer");
  const menuTabButtons = document.querySelectorAll("[data-menu-tab]");
  const spotlightAssetBox = document.getElementById("spotlightAssetBox");
  const spotlightTag = document.getElementById("spotlightTag");
  const spotlightTitle = document.getElementById("spotlightTitle");
  const spotlightNotes = document.getElementById("spotlightNotes");
  const spotlightPairing = document.getElementById("spotlightPairing");
  const spotlightPrice = document.getElementById("spotlightPrice");

  const updateSpotlight = (item) => {
    if (!item) return;
    if (spotlightTag) spotlightTag.textContent = item.tag;
    if (spotlightTitle) spotlightTitle.textContent = item.name;
    if (spotlightNotes) spotlightNotes.textContent = item.desc;
    if (spotlightPairing) spotlightPairing.textContent = item.pairing;
    if (spotlightPrice) spotlightPrice.textContent = item.price;

    if (spotlightAssetBox) {
      if (item.image) {
        spotlightAssetBox.innerHTML = `<img src="${item.image}" alt="${item.name}" />`;
      } else {
        spotlightAssetBox.innerHTML = `
          <div class="editorial-asset-placeholder" style="min-height: 320px;">
            <span class="placeholder-category-code">MENU_IMAGES &bull; ${item.badge}</span>
            <h4 class="placeholder-title">${item.name}</h4>
            <p class="placeholder-sub">Official dish photography slot reserved. No dog or interior photos substituted.</p>
          </div>
        `;
      }
    }
  };

  const renderMenuCategory = (categoryKey) => {
    if (!menuItemsContainer) return;
    const items = MENU_DATA[categoryKey] || MENU_DATA.coffee;
    menuItemsContainer.innerHTML = "";

    items.forEach((item, index) => {
      const row = document.createElement("article");
      row.className = `menu-dish-row ${index === 0 ? "active-dish" : ""}`;
      row.innerHTML = `
        <div class="dish-header-line">
          <h4 class="dish-name">${item.name}</h4>
          <span class="dish-badge">${item.badge}</span>
          <span class="dish-leader" aria-hidden="true"></span>
          <span class="dish-price">${item.price}</span>
        </div>
        <p class="dish-description">${item.desc}</p>
      `;

      const activateRow = () => {
        document.querySelectorAll(".menu-dish-row").forEach((r) => r.classList.remove("active-dish"));
        row.classList.add("active-dish");
        updateSpotlight(item);
      };

      row.addEventListener("mouseenter", activateRow);
      row.addEventListener("click", activateRow);

      menuItemsContainer.appendChild(row);
    });

    updateSpotlight(items[0]);
  };

  menuTabButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const tabKey = btn.getAttribute("data-menu-tab");
      menuTabButtons.forEach((b) => {
        b.classList.remove("active");
        b.setAttribute("aria-selected", "false");
      });
      btn.classList.add("active");
      btn.setAttribute("aria-selected", "true");
      renderMenuCategory(tabKey);
    });
  });

  if (menuItemsContainer) {
    renderMenuCategory("coffee");
  }

  document.querySelectorAll("[data-select-tab]").forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const targetTab = trigger.getAttribute("data-select-tab");
      const targetBtn = document.querySelector(`[data-menu-tab="${targetTab}"]`);
      if (targetBtn) targetBtn.click();
    });
  });

  // Populate Full Menu Archive Modal
  const fullMenuArchiveContent = document.getElementById("fullMenuArchiveContent");
  if (fullMenuArchiveContent) {
    const categoryTitles = {
      coffee: "I. Specialty Coffee & Cacao Bar",
      breakfast: "II. Morning Table & Bakery",
      mains: "III. The All-Day Kitchen",
      desserts: "IV. Artisanal Bakery & Desserts",
      beverages: "V. The Bar & Mountain Elixirs"
    };

    Object.keys(MENU_DATA).forEach((catKey) => {
      const col = document.createElement("div");
      col.innerHTML = `
        <h3 class="serif-display" style="font-size: 1.55rem; color: var(--warm-beige); border-bottom: 1px solid var(--brown-taupe-border); padding-bottom: 0.6rem; margin-bottom: 1.25rem;">
          ${categoryTitles[catKey]}
        </h3>
        <div style="display: flex; flex-direction: column; gap: 1.15rem;">
          ${MENU_DATA[catKey]
            .map(
              (item) => `
            <div>
              <div style="display: flex; justify-content: space-between; gap: 0.75rem; font-family: var(--font-display); font-size: 1.18rem; color: var(--ivory-light);">
                <span>${item.name}</span>
                <span style="color: var(--warm-beige);">${item.price}</span>
              </div>
              <p style="font-size: 0.79rem; color: var(--ivory-muted); line-height: 1.5; margin-top: 0.2rem;">${item.desc}</p>
            </div>
          `
            )
            .join("")}
        </div>
      `;
      fullMenuArchiveContent.appendChild(col);
    });
  }

  /* ========================================================================
     4. VISUAL GALLERY FILTER & LIGHTBOX VIEWER
     ======================================================================== */
  const galleryFilterBtns = document.querySelectorAll("[data-gallery-filter]");
  const galleryItems = document.querySelectorAll(".gallery-item");
  const lightboxImg = document.getElementById("lightboxImg");
  const lightboxTitle = document.getElementById("lightboxTitle");
  const lightboxSub = document.getElementById("lightboxSub");

  galleryFilterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const filter = btn.getAttribute("data-gallery-filter");
      galleryFilterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      galleryItems.forEach((item) => {
        const itemCat = item.getAttribute("data-category");
        if (filter === "all" || itemCat === filter) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  });

  galleryItems.forEach((item) => {
    item.addEventListener("click", () => {
      const src = item.getAttribute("data-src");
      const title = item.getAttribute("data-title");
      const sub = item.getAttribute("data-sub");
      if (lightboxImg && src) {
        lightboxImg.src = src;
        lightboxImg.alt = title || "";
        lightboxTitle.textContent = title || "";
        lightboxSub.textContent = sub || "";
        openModal("lightboxModal");
      }
    });
  });

  /* ========================================================================
     5. TESTIMONIALS EDITORIAL SLIDER & MANALI / ZIRAKPUR LOCATION SWITCHER
     ======================================================================== */
  const LOCATIONS_SWITCH_DATA = {
    manali: {
      title: "GABBU’S — Manali (Confirmed Location)",
      subtitle: "Kitchen  |  Bar  |  Bakery  •  Open Now in Manali",
      address:
        "<strong>Current Confirmed Location:</strong><br/>Gabbu’s Cafe &bull; Manali, Himachal Pradesh<br/><a href='https://share.google/vINamWOS2OMTypzUA' target='_blank' rel='noopener noreferrer' style='color: var(--warm-beige); border-bottom: 1px solid var(--warm-beige);'>View Official Pin on Google Maps &nearr;</a>",
      hours:
        "<strong>Morning Bakery &amp; Coffee:</strong> From 08:30 AM<br/><strong>All-Day Kitchen &amp; Bar:</strong> 12:00 PM – 11:30 PM<br/><strong>Live Music &amp; Patio:</strong> Daily Evenings",
      coords: "GABBU’S MANALI LOCATION — CURRENT CONFIRMED BRANCH",
      mapsText: "Open Gabbu’s Manali on Google Maps ↗",
      mapsHref: "https://share.google/vINamWOS2OMTypzUA"
    },
    zirakpur: {
      title: "GABBU’S — Zirakpur (In Progress)",
      subtitle: "Kitchen  |  Bar  |  Bakery  •  Upcoming Sanctuary",
      address:
        "<strong>Upcoming Location (In Progress):</strong><br/>Gabbu’s Zirakpur<br/><span style='color: var(--warm-beige);'>Status: Currently Under Development &amp; Curation</span>",
      hours:
        "<strong>Opening Status:</strong> In Progress<br/><span>Not yet open to the public. Official opening date and location pin will be announced soon.</span>",
      coords: "GABBU’S ZIRAKPUR — UPCOMING / IN PROGRESS",
      mapsText: "Visit Current Open Branch (Manali) ↗",
      mapsHref: "https://share.google/vINamWOS2OMTypzUA"
    }
  };

  document.querySelectorAll("[data-location], [data-branch]").forEach((pill) => {
    pill.addEventListener("click", () => {
      const locKey = pill.getAttribute("data-location") || pill.getAttribute("data-branch");
      const info = LOCATIONS_SWITCH_DATA[locKey];
      if (!info) return;

      document.querySelectorAll("[data-location], [data-branch]").forEach((p) => p.classList.remove("active"));
      pill.classList.add("active");

      const locTitle = document.getElementById("locTitle") || document.getElementById("branchTitle");
      const locSubtitle = document.getElementById("locSubtitle") || document.getElementById("branchTagline");
      const locAddress = document.getElementById("locAddress") || document.getElementById("branchAddress");
      const locHours = document.getElementById("locHours") || document.getElementById("branchHours");
      const locCoords = document.getElementById("locCoords");
      const locMapsLink = document.getElementById("locMapsLink") || document.getElementById("branchMapBtn");

      if (locTitle) locTitle.textContent = info.title;
      if (locSubtitle) locSubtitle.textContent = info.subtitle;
      if (locAddress) locAddress.innerHTML = info.address;
      if (locHours) locHours.innerHTML = info.hours;
      if (locCoords) locCoords.textContent = info.coords;
      if (locMapsLink) {
        locMapsLink.textContent = info.mapsText;
        locMapsLink.href = info.mapsHref;
      }
    });
  });

  const slides = document.querySelectorAll(".testimonial-slide");
  const prevBtn = document.getElementById("prevTestimonial");
  const nextBtn = document.getElementById("nextTestimonial");
  const counterEl = document.getElementById("testimonialCounter");
  let currentSlide = 0;

  const showSlide = (idx) => {
    slides.forEach((s) => s.classList.remove("active"));
    currentSlide = (idx + slides.length) % slides.length;
    slides[currentSlide].classList.add("active");
    if (counterEl) {
      counterEl.textContent = `0${currentSlide + 1} / 0${slides.length}`;
    }
  };

  if (prevBtn && nextBtn && slides.length > 0) {
    prevBtn.addEventListener("click", () => showSlide(currentSlide - 1));
    nextBtn.addEventListener("click", () => showSlide(currentSlide + 1));
    setInterval(() => showSlide(currentSlide + 1), 8500);
  }

  /* ========================================================================
     6. MODAL ORCHESTRATION & TABLE RESERVATION CONCIERGE
     ======================================================================== */
  const openModal = (modalId) => {
    const modal = document.getElementById(modalId);
    if (!modal) return;
    toggleMobileMenu(true);
    modal.classList.add("open");
    document.body.classList.add("modal-open");
  };

  const closeAllModals = () => {
    document.querySelectorAll(".modal-backdrop.open").forEach((m) => m.classList.remove("open"));
    document.body.classList.remove("modal-open");
  };

  document.querySelectorAll("[data-open-modal]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("data-open-modal");
      openModal(targetId);
    });
  });

  document.querySelectorAll("[data-close-modal]").forEach((btn) => {
    btn.addEventListener("click", closeAllModals);
  });

  document.querySelectorAll(".modal-backdrop").forEach((backdrop) => {
    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop) closeAllModals();
    });
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeAllModals();
  });

  const tomorrow = new Date(Date.now() + 86400000).toISOString().split("T")[0];
  const inlineDate = document.getElementById("inlineDate");
  const resDate = document.getElementById("resDate");
  if (inlineDate) inlineDate.value = tomorrow;
  if (resDate) resDate.value = tomorrow;

  const inlineReserveForm = document.getElementById("inlineReserveForm");
  const modalReservationForm = document.getElementById("modalReservationForm");
  const bookingSuccessCard = document.getElementById("bookingSuccessCard");
  const confirmSummaryDetails = document.getElementById("confirmSummaryDetails");
  const confirmCode = document.getElementById("confirmCode");

  if (inlineReserveForm) {
    inlineReserveForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const dateVal = document.getElementById("inlineDate").value;
      const timeVal = document.getElementById("inlineTime").value;
      const guestsVal = document.getElementById("inlineGuests").value;
      const spaceVal = document.getElementById("inlineSpace").value;

      if (resDate) resDate.value = dateVal;
      openModal("reservationModal");
      if (confirmSummaryDetails && bookingSuccessCard) {
        confirmSummaryDetails.textContent = `${guestsVal} • ${dateVal} at ${timeVal} (${spaceVal}).`;
      }
    });
  }

  if (modalReservationForm) {
    modalReservationForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("resName").value || "Honored Guest";
      const date = document.getElementById("resDate").value;
      const time = document.getElementById("resTime").value;
      const guests = document.getElementById("resGuests").value;
      const zone = document.getElementById("resZone").value;

      const randomRef = "GB-" + Math.floor(1000 + Math.random() * 9000);
      confirmCode.textContent = randomRef;
      confirmSummaryDetails.innerHTML = `Table reserved at <strong>Gabbu’s Manali</strong> for <strong>${name}</strong> (${guests}) on <strong>${date}</strong> at <strong>${time}</strong> in <em>${zone}</em>.`;
      modalReservationForm.style.display = "none";
      bookingSuccessCard.classList.add("visible");
    });
  }

  const newsletterForm = document.getElementById("newsletterForm");
  const newsletterFeedback = document.getElementById("newsletterFeedback");
  if (newsletterForm && newsletterFeedback) {
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault();
      newsletterForm.reset();
      newsletterFeedback.style.display = "block";
    });
  }

  /* ========================================================================
     6B. GABBU’S — BREWING EXPERIENCE (IMPLEMENTATION 02)
     1. Scroll-Driven 2.5D/3D Spatial Camera Journey (`#brewingSpatialTrack`)
     2. Rebuilt Semantic & Searchable Menu Hall (`#brewingMenuHall`)
     3. 2.5D Specimen & Original Menu Sheet Inspector (`#brewingSpecimenInspector`)
     ======================================================================== */
  (function initBrewingExperience() {
    // Subtle 200ms Page Curtain Transition for Dedicated Page Navigation (menu.html -> cafe.html / restaurant.html)
    const curtain = document.getElementById("pageTransitionCurtain");
    document.querySelectorAll("[data-page-transition-link]").forEach((link) => {
      link.addEventListener("click", (e) => {
        const href = link.getAttribute("href") || link.getAttribute("data-page-transition-link");
        if (!href || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
        e.preventDefault();
        if (curtain) {
          curtain.classList.add("is-leaving");
          setTimeout(() => {
            window.location.href = href;
          }, 190);
        } else {
          window.location.href = href;
        }
      });
    });

    const store = window.GABBUS_VERIFIED_MENU || {};

    // --- A. SPATIAL CAMERA SCROLL CONTROLLER ---
    const spatialTrack = document.getElementById("brewingSpatialTrack");
    const hudStep = document.getElementById("brewingHudStep");
    const hudTitle = document.getElementById("brewingHudTitle");
    const hudProgressBar = document.getElementById("brewingHudProgressBar");

    const sceneOutside = document.getElementById("brewingSceneOutside");
    const outsideFacadeLayer = document.getElementById("outsideFacadeLayer");
    const outsideTitleBlock = document.getElementById("outsideTitleBlock");

    const sceneInterior = document.getElementById("brewingSceneInterior");
    const interiorDeepRoom = document.getElementById("interiorDeepRoom");
    const interiorForegroundPendants = document.getElementById("interiorForegroundPendants");
    const spatialGabbuGuide = document.getElementById("spatialGabbuGuide");
    const interiorTitleBlock = document.getElementById("interiorTitleBlock");

    const sceneBrewWorld = document.getElementById("brewingSceneBrewWorld");
    const brewWordLeft = document.getElementById("brewWordLeft");
    const brewWordRight = document.getElementById("brewWordRight");
    const pillarPlanes = document.querySelectorAll(".spatial-pillar-plane");

    const sceneShutter = document.getElementById("brewingSceneShutter");
    const shutterParchmentGate = document.getElementById("shutterParchmentGate");

    const clamp = (val, min, max) => Math.max(min, Math.min(max, val));
    const norm = (val, start, end) => clamp((val - start) / (end - start), 0, 1);

    let spatialTicking = false;

    function updateSpatialCamera() {
      spatialTicking = false;
      if (!spatialTrack) return;

      // Skip sticky camera math on mobile/tablet (<960px) or reduced motion
      if (window.innerWidth <= 960 || prefersReducedMotion) return;

      const rect = spatialTrack.getBoundingClientRect();
      const scrollable = Math.max(1, rect.height - window.innerHeight);
      const progress = clamp(-rect.top / scrollable, 0, 1);

      if (hudProgressBar) {
        hudProgressBar.style.width = `${Math.max(6, Math.round(progress * 100))}%`;
      }

      // HUD Stage Orientation Labels
      if (hudStep && hudTitle) {
        if (progress < 0.25) {
          hudStep.textContent = "STAGE 01 / 05";
          hudTitle.textContent = "OUTSIDE → CROSSING THE MANALI THRESHOLD";
        } else if (progress < 0.52) {
          hudStep.textContent = "STAGE 02 / 05";
          hudTitle.textContent = "INSIDE THE SANCTUARY → WARM DINING ROOM & GABBU";
        } else if (progress < 0.82) {
          hudStep.textContent = "STAGE 03 / 05";
          hudTitle.textContent = "THE BREW BAR → THIS IS WHAT WE ARE BREWING";
        } else if (progress < 0.94) {
          hudStep.textContent = "STAGE 04 / 05";
          hudTitle.textContent = "THE HOUSE LEDGER → OPENING REBUILT MENU";
        } else {
          hudStep.textContent = "STAGE 05 / 05";
          hudTitle.textContent = "EXPLORE THE 65 VERIFIED POURS BELOW";
        }
      }

      // --- PLANE 01: OUTSIDE -> CROSSING THE THRESHOLD (0.00 -> 0.32) ---
      if (sceneOutside) {
        const p1 = norm(progress, 0.0, 0.30);
        const fadeOut1 = 1 - norm(progress, 0.20, 0.32);
        const scaleFacade = 1 + p1 * 0.52;
        sceneOutside.style.opacity = fadeOut1.toFixed(3);
        if (outsideFacadeLayer) {
          outsideFacadeLayer.style.transform = `scale3d(${scaleFacade.toFixed(3)}, ${scaleFacade.toFixed(3)}, 1)`;
        }
        if (outsideTitleBlock) {
          const titleZ = p1 * 210;
          outsideTitleBlock.style.transform = `translate3d(0, ${(-p1 * 36).toFixed(1)}px, ${titleZ.toFixed(1)}px)`;
          outsideTitleBlock.style.opacity = (1 - norm(progress, 0.14, 0.26)).toFixed(3);
        }
      }

      // --- PLANE 02: INSIDE THE SANCTUARY (0.18 -> 0.56) ---
      if (sceneInterior) {
        const enter2 = norm(progress, 0.18, 0.30);
        const exit2 = 1 - norm(progress, 0.45, 0.56);
        const alpha2 = Math.min(enter2, exit2);
        const move2 = norm(progress, 0.18, 0.56);

        sceneInterior.style.opacity = alpha2.toFixed(3);
        if (interiorDeepRoom) {
          const scaleRoom = 0.9 + move2 * 0.24;
          interiorDeepRoom.style.transform = `scale3d(${scaleRoom.toFixed(3)}, ${scaleRoom.toFixed(3)}, 1)`;
        }
        if (interiorForegroundPendants) {
          interiorForegroundPendants.style.transform = `translate3d(${(move2 * 40).toFixed(1)}px, ${(-move2 * 65).toFixed(1)}px, 0) scale3d(${(1.05 + move2 * 0.15).toFixed(3)}, ${(1.05 + move2 * 0.15).toFixed(3)}, 1)`;
        }
        if (spatialGabbuGuide) {
          spatialGabbuGuide.style.transform = `translate3d(0, ${((1 - enter2) * 28).toFixed(1)}px, 0)`;
        }
        if (interiorTitleBlock) {
          interiorTitleBlock.style.transform = `translate3d(0, ${((0.5 - move2) * 42).toFixed(1)}px, ${(move2 * 95).toFixed(1)}px)`;
        }
      }

      // --- PLANE 03: THE BREW BAR & 5 CRAFT PILLARS (0.46 -> 0.88) ---
      if (sceneBrewWorld) {
        const enter3 = norm(progress, 0.46, 0.58);
        const exit3 = 1 - norm(progress, 0.80, 0.89);
        const alpha3 = Math.min(enter3, exit3);
        const move3 = norm(progress, 0.46, 0.86);

        sceneBrewWorld.style.opacity = alpha3.toFixed(3);
        sceneBrewWorld.classList.toggle("is-interactive", alpha3 > 0.45);

        if (brewWordLeft && brewWordRight) {
          const spread = (1 - norm(progress, 0.48, 0.64)) * 70;
          brewWordLeft.style.transform = `translate3d(${(-spread).toFixed(1)}px, 0, 0)`;
          brewWordRight.style.transform = `translate3d(${spread.toFixed(1)}px, 0, 0)`;
        }

        pillarPlanes.forEach((plane, idx) => {
          const staggerStart = 0.50 + idx * 0.032;
          const cardP = norm(progress, staggerStart, staggerStart + 0.16);
          const yOffset = (1 - cardP) * 56;
          const zOffset = (1 - cardP) * -140 + move3 * 24;
          plane.style.opacity = cardP.toFixed(3);
          plane.style.transform = `translate3d(0, ${yOffset.toFixed(1)}px, ${zOffset.toFixed(1)}px)`;
        });
      }

      // --- PLANE 04: ARCHITECTURAL SHUTTER REVEAL (0.80 -> 1.00) ---
      if (sceneShutter) {
        const enter4 = norm(progress, 0.80, 0.92);
        const move4 = norm(progress, 0.78, 1.0);
        sceneShutter.style.opacity = enter4.toFixed(3);
        sceneShutter.style.pointerEvents = enter4 > 0.08 ? "auto" : "none";
        if (shutterParchmentGate) {
          const scaleGate = 0.88 + enter4 * 0.12;
          shutterParchmentGate.style.transform = `scale3d(${scaleGate.toFixed(3)}, ${scaleGate.toFixed(3)}, 1)`;
          shutterParchmentGate.style.pointerEvents = enter4 > 0.08 ? "auto" : "none";
        }
        const shutterMtnImg = document.getElementById("shutterMountainImg");
        if (shutterMtnImg) {
          const mtnY = 20 - move4 * 34;
          const mtnScale = 1.06 - move4 * 0.04;
          shutterMtnImg.style.setProperty("--shutter-mtn-y", `${mtnY.toFixed(1)}px`);
          shutterMtnImg.style.setProperty("--shutter-mtn-scale", mtnScale.toFixed(3));
        }
      }
    }

    if (spatialTrack) {
      registerScrollTask(updateSpatialCamera);
      window.addEventListener("resize", updateSpatialCamera);
      updateSpatialCamera();
    }

    // --- B. STANDALONE CAFE.HTML (COFFEE BEAN SPLIT + 4-COL GRID) & STANDALONE RESTAURANT.HTML (SLOW-MOTION PAN TOSS + 4-COL GRID) ---
    const cafeCategories = store.brewingCategories || [];
    const restaurantCategories = store.kitchenCategoriesRegistry || [];

    // Smooth Hermite easing helper for cinematic slow-motion camera & physics
    const smoothstep = (val, start, end) => {
      const t = clamp((val - start) / (end - start), 0, 1);
      return t * t * (3 - 2 * t);
    };

    // 1. GABBU'S CAFE — CINEMATIC 3D COFFEE BEAN SPLIT CONTROLLER (#gabbus-brew on cafe.html)
    const brewTrack = document.getElementById("gabbus-brew");
    const beanAssembly =
      document.getElementById("bean3dAssembly") ||
      document.getElementById("bean3DAssembly");
    const beanLeft = document.getElementById("beanLeftHalf");
    const beanRight = document.getElementById("beanRightHalf");
    const beanFissure = document.getElementById("beanFissureLight");
    const beanPortalWorld = document.getElementById("beanInnerPortalWorld");
    const beanPortalMedia = document.getElementById("beanPortalBgMedia");
    const beanRevealedCopy = document.getElementById("beanRevealedCopy");
    const beanIntroCopy =
      document.getElementById("beanOpeningWhisper") ||
      document.getElementById("beanIntroCopy");
    const beanProgressBar = document.getElementById("beanProgressBar");



    function updateCinemaOpenings() {
      // --- A. GABBU'S CAFE: 3D Coffee Bean Approach & Seam Split ---
      if (brewTrack && beanAssembly) {
        const rect = brewTrack.getBoundingClientRect();
        const scrollable = Math.max(1, rect.height - window.innerHeight);
        const p = clamp(-rect.top / scrollable, 0, 1);

        if (beanProgressBar) {
          beanProgressBar.style.width = `${Math.max(4, Math.round(p * 100))}%`;
        }

        const approachP = smoothstep(p, 0, 0.28);
        const splitP = smoothstep(p, 0.22, 0.80);
        const portalP = smoothstep(p, 0.38, 0.90);

        const baseScale = 0.88 + approachP * 0.32 + splitP * 1.12;
        const tiltZ = (1 - approachP) * -4;
        const tiltX = (1 - approachP) * 7 - splitP * 4;

        beanAssembly.style.transform = `perspective(1200px) scale(${baseScale.toFixed(3)}) rotateX(${tiltX.toFixed(2)}deg) rotateZ(${tiltZ.toFixed(2)}deg)`;

        if (beanLeft && beanRight) {
          const splitOffsetVW = splitP * 38;
          const splitRotY = splitP * 28;
          const splitRotZ = splitP * 8;
          const hemiOpacity = clamp(1 - smoothstep(p, 0.70, 0.94), 0, 1);

          beanLeft.style.transform = `translate3d(-${splitOffsetVW.toFixed(2)}vw, 0, ${(splitP * 70).toFixed(1)}px) rotateY(-${splitRotY.toFixed(1)}deg) rotateZ(-${splitRotZ.toFixed(1)}deg)`;
          beanRight.style.transform = `translate3d(${splitOffsetVW.toFixed(2)}vw, 0, ${(splitP * 70).toFixed(1)}px) rotateY(${splitRotY.toFixed(1)}deg) rotateZ(${splitRotZ.toFixed(1)}deg)`;
          beanLeft.style.opacity = hemiOpacity.toFixed(3);
          beanRight.style.opacity = hemiOpacity.toFixed(3);
        }

        if (beanFissure) {
          const fissureIntensity = clamp(smoothstep(p, 0.08, 0.36) - smoothstep(p, 0.62, 0.88), 0, 1);
          const fissureScaleY = 0.55 + smoothstep(p, 0.08, 0.55) * 1.55;
          const fissureScaleX = 0.4 + splitP * 5.5;
          beanFissure.style.opacity = fissureIntensity.toFixed(3);
          beanFissure.style.transform = `translate(-50%, -50%) scale(${fissureScaleX.toFixed(2)}, ${fissureScaleY.toFixed(2)})`;
        }

        if (beanIntroCopy) {
          const introAlpha = clamp(1 - smoothstep(p, 0.10, 0.28), 0, 1);
          beanIntroCopy.style.opacity = introAlpha.toFixed(3);
          beanIntroCopy.style.transform = `translate3d(-50%, -${((1 - introAlpha) * 24).toFixed(1)}px, 0)`;
        }

        if (beanPortalWorld) {
          const rx = Math.round(splitP * 118);
          const ry = Math.round(splitP * 118);
          beanPortalWorld.style.clipPath = `ellipse(${rx}% ${ry}% at 50% 50%)`;
          beanPortalWorld.style.opacity = clamp(smoothstep(p, 0.20, 0.46), 0, 1).toFixed(3);
        }

        if (beanPortalMedia) {
          const mediaScale = 1.22 - portalP * 0.22;
          beanPortalMedia.style.transform = `scale(${mediaScale.toFixed(3)})`;
        }

        if (beanRevealedCopy) {
          const copyAlpha = smoothstep(p, 0.40, 0.72);
          const copyY = (1 - copyAlpha) * 34;
          beanRevealedCopy.style.opacity = copyAlpha.toFixed(3);
          beanRevealedCopy.style.transform = `translate3d(0, ${copyY.toFixed(1)}px, 0) scale(${(0.94 + copyAlpha * 0.06).toFixed(3)})`;
        }
      }


    }

    // 3. 4-PRODUCTS-PER-ROW COMPACT CATALOGUE BUILDER (USED BY BOTH GABBU'S CAFE & GABBU'S RESTAURANT)
    function createFourColumnCatalogueController(config) {
      const {
        domainKey,
        categories,
        ribbonEl,
        deckEl,
        searchInputEl,
        searchClearEl,
        resultCountEl,
        dietFilterBtns
      } = config;

      if (!deckEl) return;

      let activeCategoryId = "all";
      let activeDiet = "all";
      let searchQuery = "";

      function matchesDiet(item) {
        const d = (activeDiet || "all").toLowerCase();
        if (d === "all") return true;
        const dietStr = `${item.diet || ""} ${item.badge || ""} ${item.variants || ""}`.toLowerCase();
        if (d === "veg") {
          return dietStr.includes("veg") && !dietStr.includes("non-veg");
        }
        if (d === "non-veg") {
          return (
            dietStr.includes("non-veg") ||
            dietStr.includes("chicken") ||
            dietStr.includes("mutton") ||
            dietStr.includes("egg") ||
            dietStr.includes("prawn") ||
            dietStr.includes("fish")
          );
        }
        if (d.includes("pet")) {
          return dietStr.includes("pet");
        }
        return true;
      }

      function renderRibbon() {
        if (!ribbonEl) return;
        const totalItems = categories.reduce((acc, c) => acc + (c.items ? c.items.length : 0), 0);

        const allBtn = `
          <button type="button" class="toolbar-cat-pill ${activeCategoryId === "all" ? "active" : ""}" role="tab" aria-selected="${activeCategoryId === "all"}" data-cat-id="all">
            <span>ALL</span>
            <span class="pill-count">${totalItems}</span>
          </button>
        `;

        const pills = categories
          .map(
            (cat) => `
            <button type="button" class="toolbar-cat-pill ${activeCategoryId === cat.id ? "active" : ""}" role="tab" aria-selected="${activeCategoryId === cat.id}" data-cat-id="${cat.id}">
              <span class="pill-idx">${cat.index}</span>
              <span>${cat.title}</span>
              <span class="pill-count">${cat.items.length}</span>
            </button>
          `
          )
          .join("");

        ribbonEl.innerHTML = allBtn + pills;

        ribbonEl.querySelectorAll("[data-cat-id]").forEach((btn) => {
          btn.addEventListener("click", () => {
            const targetCat = btn.getAttribute("data-cat-id") || "all";
            activeCategoryId = targetCat;
            renderRibbon();
            renderDeck();
          });
        });
      }

      function renderDeck() {
        const q = searchQuery.trim().toLowerCase();
        let shownItems = 0;
        let shownChapters = 0;

        const filteredCats = categories
          .filter((c) => activeCategoryId === "all" || c.id === activeCategoryId)
          .map((cat) => {
            const matchingItems = (cat.items || []).filter((item) => {
              if (!matchesDiet(item)) return false;
              if (!q) return true;
              return (
                item.name.toLowerCase().includes(q) ||
                (item.desc && item.desc.toLowerCase().includes(q)) ||
                (item.badge && item.badge.toLowerCase().includes(q)) ||
                (item.variants && item.variants.toLowerCase().includes(q)) ||
                item.displayPrice.toLowerCase().includes(q) ||
                cat.title.toLowerCase().includes(q)
              );
            });
            if (matchingItems.length > 0) {
              shownChapters++;
              shownItems += matchingItems.length;
            }
            return { ...cat, matchingItems };
          })
          .filter((cat) => cat.matchingItems.length > 0);

        if (resultCountEl) {
          resultCountEl.innerHTML = `<strong>${shownItems}</strong> ${domainKey === "cafe" ? "Beverages" : "Dishes"} &bull; <strong>${shownChapters}</strong> ${shownChapters === 1 ? "Category" : "Categories"}`;
        }

        if (filteredCats.length === 0) {
          deckEl.innerHTML = `
            <div class="catalogue-empty-box">
              <h4>No matching items found for &ldquo;${searchQuery || activeDiet}&rdquo;</h4>
              <p>Clear your search or select &ldquo;ALL&rdquo; categories above to browse all products.</p>
            </div>
          `;
          return;
        }

        deckEl.innerHTML = filteredCats
          .map((cat) => {
            const cardsHtml = cat.matchingItems
              .map((item, idx) => {
                const colIndex = idx % 4; // 0, 1, 2, 3 for staggered row animation
                const dietClass =
                  item.diet === "Non-Veg"
                    ? "diet-nonveg"
                    : item.diet === "Pet Friendly"
                    ? "diet-pet"
                    : item.diet === "Veg / Non-Veg"
                    ? "diet-both"
                    : "diet-veg";

                return `
                  <article
                    class="product-grid-card ${item.highlight ? "is-featured-product" : ""}"
                    style="--col-index: ${colIndex};"
                    data-grid-card
                    data-item-id="${item.id}"
                  >
                    <div class="product-card-img-wrap">
                      <img
                        src="${item.image}"
                        alt="${item.name} — ${cat.title} at Gabbu's"
                        class="product-card-img"
                        loading="lazy"
                        decoding="async"
                      />
                      ${
                        item.badge
                          ? `<span class="product-card-badge ${dietClass}">${item.badge}</span>`
                          : ""
                      }
                    </div>

                    <div class="product-card-info">
                      <div class="product-card-title-row">
                        <h4 class="product-card-name">${item.name}</h4>
                      </div>

                      <p class="product-card-desc">${
                        item.desc || `Freshly crafted ${cat.title.toLowerCase()} specialty at Gabbu’s.`
                      }</p>

                      <div class="product-card-bottom">
                        <span class="product-card-price">${item.displayPrice}</span>
                        <span class="product-card-meta-tag">${
                          item.variants ? item.variants : cat.title
                        }</span>
                      </div>
                    </div>
                  </article>
                `;
              })
              .join("");

            return `
              <section class="catalogue-chapter-block" id="${domainKey}-cat-${cat.id}">
                <header class="catalogue-chapter-bar">
                  <div class="chapter-bar-left">
                    <span class="chapter-bar-num">${cat.index}</span>
                    <div>
                      <h3 class="chapter-bar-title">${cat.title}</h3>
                      <p class="chapter-bar-sub">${cat.spatialQuote || cat.pillar}</p>
                    </div>
                  </div>
                  <span class="chapter-bar-count">${cat.matchingItems.length} ${
                    cat.matchingItems.length === 1 ? "Item" : "Items"
                  }</span>
                </header>

                <!-- 4 PRODUCTS PER ROW ON DESKTOP -->
                <div class="products-grid-4col" role="list">
                  ${cardsHtml}
                </div>
              </section>
            `;
          })
          .join("");

        requestAnimationFrame(observeGridRows);
      }

      if (searchInputEl) {
        searchInputEl.addEventListener("input", () => {
          searchQuery = searchInputEl.value;
          if (searchClearEl) searchClearEl.hidden = !searchQuery;
          renderDeck();
        });
      }

      if (searchClearEl) {
        searchClearEl.addEventListener("click", () => {
          searchQuery = "";
          if (searchInputEl) searchInputEl.value = "";
          searchClearEl.hidden = true;
          renderDeck();
        });
      }

      if (dietFilterBtns && dietFilterBtns.length) {
        dietFilterBtns.forEach((btn) => {
          btn.addEventListener("click", () => {
            dietFilterBtns.forEach((b) => b.classList.remove("active"));
            btn.classList.add("active");
            activeDiet = btn.getAttribute("data-restro-diet") || "all";
            renderDeck();
          });
        });
      }

      renderRibbon();
      renderDeck();
    }

    // 4. STAGGERED ROW REVEAL OBSERVER FOR THE 4-COLUMN PRODUCT GRIDS
    let gridObserver = null;
    if ("IntersectionObserver" in window) {
      gridObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("card-in-view");
              gridObserver.unobserve(entry.target);
            }
          });
        },
        { rootMargin: "0px 0px -40px 0px", threshold: 0.08 }
      );
    }

    function observeGridRows() {
      const cards = document.querySelectorAll("[data-grid-card]:not(.card-in-view)");
      cards.forEach((card) => {
        if (gridObserver) {
          gridObserver.observe(card);
        } else {
          card.classList.add("card-in-view");
        }
      });
    }

    // Instantiate GABBU'S CAFE (89 drinks across 14 categories, 4 per row)
    createFourColumnCatalogueController({
      domainKey: "cafe",
      categories: cafeCategories,
      ribbonEl: document.getElementById("cafeCategoryRibbon"),
      deckEl: document.getElementById("cafeChaptersDeck"),
      searchInputEl: document.getElementById("cafeSearchInput"),
      searchClearEl: document.getElementById("cafeSearchClear"),
      resultCountEl: document.getElementById("cafeResultCount")
    });

    // Instantiate GABBU'S RESTAURANT (142 dishes across 18 categories, 4 per row)
    createFourColumnCatalogueController({
      domainKey: "restaurant",
      categories: restaurantCategories,
      ribbonEl: document.getElementById("restaurantCategoryRibbon"),
      deckEl: document.getElementById("restaurantChaptersDeck"),
      searchInputEl: document.getElementById("restaurantSearchInput"),
      searchClearEl: document.getElementById("restaurantSearchClear"),
      resultCountEl: document.getElementById("restaurantResultCount"),
      dietFilterBtns: document.querySelectorAll("[data-restro-diet]")
    });

    // Instantiate GABBU'S ZIRAKPUR (Independent highway sanctuary food catalogue)
    const zirakpurStore = window.GABBUS_ZIRAKPUR_MENU_DATA || {};
    const zirakpurCategories = zirakpurStore.kitchenCategoriesRegistry || [];
    createFourColumnCatalogueController({
      domainKey: "zirakpur",
      categories: zirakpurCategories,
      ribbonEl: document.getElementById("zirakpurCategoryRibbon"),
      deckEl: document.getElementById("zirakpurChaptersDeck"),
      searchInputEl: document.getElementById("zirakpurSearchInput"),
      searchClearEl: document.getElementById("zirakpurSearchClear"),
      resultCountEl: document.getElementById("zirakpurResultCount"),
      dietFilterBtns: document.querySelectorAll("[data-zirakpur-diet]")
    });

    registerScrollTask(updateCinemaOpenings);
    window.addEventListener("resize", updateCinemaOpenings);
    updateCinemaOpenings();
    observeGridRows();
  })();

  /* ========================================================================
     7. PREMIUM SCROLL-REVEAL & PARALLAX ENGINE
     ======================================================================== */
  const revealQuery = ".reveal-up, .editorial-reveal, .mask-reveal, [data-mask-reveal], .draw-line, .editorial-line-draw, [data-draw-line]";
  const revealEls = document.querySelectorAll(revealQuery);
  if ("IntersectionObserver" in window && !prefersReducedMotion) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            if (el.matches(".reveal-up, .editorial-reveal")) {
              el.classList.add("revealed");
              el.classList.add("is-inview");
            }
            if (el.matches(".mask-reveal, [data-mask-reveal]")) {
              el.classList.add("is-revealed");
            }
            if (el.matches(".draw-line, .editorial-line-draw, [data-draw-line]")) {
              el.classList.add("is-drawn");
            }
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.01, rootMargin: "0px 0px 80px 0px" }
    );
    revealEls.forEach((el) => observer.observe(el));
  } else {
    revealEls.forEach((el) => {
      el.classList.add("revealed", "is-inview", "is-revealed", "is-drawn");
    });
  }

  // Smooth Scroll-Driven Parallax for Hero & Architectural Space Photography
  const spaceImages = document.querySelectorAll(".exp-image-wrap img");
  if (!prefersReducedMotion) {
    const updateScrollParallax = () => {
      const scrollY = window.scrollY;
      const vh = window.innerHeight || 1;

      if (heroParallaxBg && scrollY < vh * 1.2) {
        const yOffset = scrollY * 0.16;
        heroParallaxBg.style.transform = `translate3d(0, ${yOffset.toFixed(1)}px, 0)`;
      }
      if (heroParallaxPortrait && scrollY < vh * 1.2) {
        const yPortrait = scrollY * -0.08;
        heroParallaxPortrait.style.transform = `translate3d(0, ${yPortrait.toFixed(1)}px, 0)`;
      }

      spaceImages.forEach((img) => {
        const rect = img.getBoundingClientRect();
        if (rect.top < vh && rect.bottom > 0) {
          const ratio = (vh * 0.5 - (rect.top + rect.height * 0.5)) / vh;
          const shiftY = ratio * 22;
          img.style.transform = `scale(1.06) translate3d(0, ${shiftY.toFixed(1)}px, 0)`;
        }
      });
    };

    registerScrollTask(updateScrollParallax);
    updateScrollParallax();
  }

  /* ========================================================================
     8. INSTAGRAM REEL EMBED REMOVED
     Ensures all reel nodes and backdrop artifacts are completely purged.
     ======================================================================== */
  (function cleanupInstagramReel() {
    try {
      if (window.sessionStorage) {
        sessionStorage.removeItem("gabbus_ig_reel_dismissed_v1");
      }
    } catch (_) {}
    const elementsToRemove = [
      "gabbusIgReelSection",
      "gabbusIgReelWidget",
      "gabbusIgReelBackdrop",
      "gabbusIgReelStage",
      "gabbusOfficialIgIframe"
    ];
    elementsToRemove.forEach((id) => {
      const el = document.getElementById(id);
      if (el) el.remove();
    });
    document.querySelectorAll(".gabbus-ig-reel-section, .gabbus-ig-reel-widget, .gabbus-ig-reel-backdrop").forEach((el) => {
      el.remove();
    });
  })();

  /* ==========================================================================
     SLEEPING GABBU FOOTER BACKGROUND CONTROLLER (ADDITIVE ONLY)
     Ensures every .site-footer has the photorealistic Sleeping Gabbu background
     layer behind existing footer content and triggers a gentle fade-in + slow
     parallax discovery as the user reaches the end of the journey.
     ========================================================================== */
  (function initFooterSleepingGabbu() {
    const footers = document.querySelectorAll(".site-footer");
    if (!footers.length) return;

    footers.forEach((footer) => {
      if (!footer.querySelector(".footer-sleeping-gabbu-bg")) {
        const bgWrap = document.createElement("div");
        bgWrap.className = "footer-sleeping-gabbu-bg";
        bgWrap.setAttribute("aria-hidden", "true");
        bgWrap.innerHTML = `
          <img
            src="assets/gabbu/gabbu-sleeping-footer.jpg"
            alt="Gabbu the German Shepherd sleeping peacefully in the warm evening glow"
            class="footer-sleeping-gabbu-img"
            loading="lazy"
            decoding="async"
          />
          <div class="footer-sleeping-gabbu-scrim"></div>
        `;
        footer.insertBefore(bgWrap, footer.firstChild);
      }
    });

    if ("IntersectionObserver" in window) {
      const footerObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-footer-discovered");
            }
          });
        },
        {
          root: null,
          rootMargin: "0px 0px 120px 0px",
          threshold: 0.08
        }
      );

      footers.forEach((footer) => footerObserver.observe(footer));
    } else {
      footers.forEach((footer) => footer.classList.add("is-footer-discovered"));
    }

    // Subtle slow parallax shift when footer is visible in the viewport
    function updateFooterParallax() {
      const vh = window.innerHeight || 1;
      footers.forEach((footer) => {
        if (!footer.classList.contains("is-footer-discovered")) return;
        const rect = footer.getBoundingClientRect();
        if (rect.top < vh && rect.bottom > 0) {
          const progress = Math.max(0, Math.min(1, (vh - rect.top) / (vh + rect.height)));
          const shiftPx = ((0.5 - progress) * 14).toFixed(2);
          footer.style.setProperty("--gabbu-footer-parallax", `${shiftPx}px`);
        }
      });
    }

    registerScrollTask(updateFooterParallax);
    updateFooterParallax();
  })();

  /* ==========================================================================
     STORY PAGE PART 1: CHAPTER II FULL SNOW PHOTOGRAPH SCROLL REVEAL & PARALLAX
     ========================================================================== */
  (function initChapterTwoSnowPhotoReveal() {
    const snowFrame = document.getElementById("chapterTwoSnowFrame");
    if (!snowFrame) return;

    if ("IntersectionObserver" in window) {
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              snowFrame.classList.add("is-snow-revealed");
            }
          });
        },
        { rootMargin: "0px 0px -8% 0px", threshold: 0.15 }
      );
      obs.observe(snowFrame);
    } else {
      snowFrame.classList.add("is-snow-revealed");
    }

    function updateSnowParallax() {
      const rect = snowFrame.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      if (rect.top < vh && rect.bottom > 0) {
        const progress = (vh - rect.top) / (vh + rect.height);
        const shift = ((0.5 - progress) * 10).toFixed(2);
        snowFrame.style.setProperty("--chapter2-snow-parallax", `${shift}px`);
      }
    }

    registerScrollTask(updateSnowParallax);
    updateSnowParallax();
  })();

  /* ==========================================================================
     STORY PAGE PART 2: CINEMATIC INTERACTIVE FINALE — "MEET GABBU IN THE HILLS"
     - Controls scroll-based dog entrance (0% -> 20% -> 40% -> 60% -> 75% -> 85% -> 100%)
     - Separates scroll timeline strictly from user-triggered High Five & Petting
     - Renders subtle atmospheric mist & warm petting hearth particles on canvas
     ========================================================================== */
  (function initStoryFinaleMeetGabbu() {
    const finaleSection = document.getElementById("meet-gabbu-finale");
    const scrollTrack = document.getElementById("storyFinaleScrollTrack");
    const stickyStage = document.getElementById("storyFinaleStickyStage");
    if (!finaleSection || !scrollTrack || !stickyStage) return;

    const poseWalk = document.getElementById("finalePoseWalk");
    const poseIdle = document.getElementById("finalePoseIdle");
    const posePetted = document.getElementById("finalePosePetted");
    const poseHighfive = document.getElementById("finalePoseHighfive");
    const pawContactRing = document.getElementById("finalePawContactRing");
    const woofDialogue = document.getElementById("finaleWoofDialogue");
    const woofText = document.getElementById("finaleWoofText");
    const hudStatus = document.getElementById("finaleHudStatus");
    const hudHint = document.getElementById("finaleHudHint");

    const btnPet = document.getElementById("finaleBtnPet");
    const btnHighFive = document.getElementById("finaleBtnHighFive");
    const btnWoof = document.getElementById("finaleBtnWoof");
    const directPetHotspot = document.getElementById("finaleDirectPetHotspot");
    const directNoseHotspot = document.getElementById("finaleDirectNoseHotspot");
    const directPawHotspot = document.getElementById("finaleDirectPawHotspot");
    const canvas = document.getElementById("finaleAtmosphereCanvas");

    let isSectionInView = false;
    let scrollTicking = false;
    let currentProgress = 0;
    let activeInteraction = null; // null | "highfive" | "pet" | "woof"
    let interactionTimer = null;
    let woofHideTimer = null;
    let petCount = 0;
    let hasGreetedWoof = false;

    // Keep the isolated real Gabbu photo visible and active throughout
    function setActiveGabbuPose(poseKey) {
      if (poseIdle) poseIdle.classList.add("is-active-pose");
      if (poseWalk && posePetted && poseHighfive) {
        poseWalk.classList.toggle("is-active-pose", poseKey === "walk");
        posePetted.classList.toggle("is-active-pose", poseKey === "petted");
        poseHighfive.classList.toggle("is-active-pose", poseKey === "highfive");
      }
    }

    // Subtle Canvas Particle System (Ambient valley dust + warm petting motes)
    const ctx = canvas ? canvas.getContext("2d") : null;
    const ambientFlakes = [];
    const interactiveMotes = [];
    let canvasRafId = null;

    function resizeFinaleCanvas() {
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = stickyStage.clientWidth || window.innerWidth;
      const h = stickyStage.clientHeight || window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      if (ctx) ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      if (ambientFlakes.length === 0) {
        for (let i = 0; i < 22; i++) {
          ambientFlakes.push({
            x: Math.random() * w,
            y: Math.random() * h,
            r: 0.9 + Math.random() * 1.6,
            vx: -0.15 + Math.random() * 0.3,
            vy: -0.18 - Math.random() * 0.25,
            alpha: 0.12 + Math.random() * 0.26,
            warm: Math.random() > 0.45
          });
        }
      }
    }

    function spawnWarmInteractionMotes(originXRatio, originYRatio, count) {
      if (!canvas) return;
      const w = stickyStage.clientWidth || window.innerWidth;
      const h = stickyStage.clientHeight || window.innerHeight;
      const cx = w * originXRatio;
      const cy = h * originYRatio;

      for (let i = 0; i < count; i++) {
        const angle = -Math.PI * (0.18 + Math.random() * 0.64);
        const speed = 0.45 + Math.random() * 0.85;
        interactiveMotes.push({
          x: cx + (Math.random() - 0.5) * 64,
          y: cy + (Math.random() - 0.5) * 36,
          vx: Math.cos(angle) * speed * 0.65,
          vy: Math.sin(angle) * speed - 0.35,
          r: 1.6 + Math.random() * 2.2,
          life: 1.0,
          decay: 0.014 + Math.random() * 0.01
        });
      }
    }

    function renderFinaleCanvas() {
      if (!isSectionInView || !ctx || !canvas) {
        canvasRafId = null;
        return;
      }
      const w = stickyStage.clientWidth || window.innerWidth;
      const h = stickyStage.clientHeight || window.innerHeight;
      ctx.clearRect(0, 0, w, h);

      // Draw gentle ambient Himalayan evening motes
      for (let i = 0; i < ambientFlakes.length; i++) {
        const f = ambientFlakes[i];
        f.x += f.vx;
        f.y += f.vy;
        if (f.y < -10) f.y = h + 10;
        if (f.x < -10) f.x = w + 10;
        if (f.x > w + 10) f.x = -10;

        ctx.beginPath();
        ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
        ctx.fillStyle = f.warm
          ? `rgba(235, 192, 134, ${f.alpha})`
          : `rgba(204, 220, 240, ${f.alpha * 0.8})`;
        ctx.fill();
      }

      // Draw warm hearth motes spawned by Petting or High-Five
      for (let i = interactiveMotes.length - 1; i >= 0; i--) {
        const m = interactiveMotes[i];
        m.x += m.vx;
        m.y += m.vy;
        m.life -= m.decay;
        if (m.life <= 0) {
          interactiveMotes.splice(i, 1);
          continue;
        }
        ctx.beginPath();
        ctx.arc(m.x, m.y, m.r * (0.7 + m.life * 0.3), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(248, 214, 158, ${(m.life * 0.72).toFixed(3)})`;
        ctx.shadowColor = "rgba(238, 184, 108, 0.55)";
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      if (!isSectionInView) {
        canvasRafId = null;
        return;
      }

      canvasRafId = window.requestAnimationFrame(renderFinaleCanvas);
    }

    // Scroll-Driven Dog Entrance Timeline (0% -> 100%)
    function updateScrollEntranceTimeline() {
      scrollTicking = false;
      const rect = scrollTrack.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const scrollableDistance = Math.max(1, rect.height - vh);
      const rawProgress = -rect.top / scrollableDistance;
      const p = Math.max(0, Math.min(1, rawProgress));
      currentProgress = p;

      // Multi-layer depth parallax speeds
      const skyShift = (p * 22).toFixed(2);
      const mtnShift = (p * 42).toFixed(2);
      const cafeShift = (p * 26).toFixed(2);
      const cafeScale = (1.06 - p * 0.06).toFixed(4);
      const cafeWarmth = (0.32 + p * 0.42).toFixed(3);

      let dogOpacity = 0;
      let dogScale = 0.54;
      let dogY = -68;
      let dogX = 28;
      let dogBlur = 5.5;
      let shadowScale = 0.32;
      let shadowOpacity = 0;
      let statusLabel = "01 / Himalayan Dusk — The Sanctuary in the Hills";

      if (p < 0.18) {
        // 0% -> 18%: Environment & Cafe visible, no dog yet
        dogOpacity = 0;
        shadowOpacity = 0;
        statusLabel = "01 / The Mountains & Gabbu’s Cafe at Dusk";
      } else if (p < 0.38) {
        // 20% -> 38%: Subtle movement & ground shadow appear, Gabbu emerges from the cafe
        const t = (p - 0.18) / 0.20;
        shadowOpacity = t * 0.48;
        shadowScale = 0.35 + t * 0.20;
        dogOpacity = Math.max(0, (t - 0.15) / 0.85) * 0.78;
        dogScale = 0.54 + t * 0.14;
        dogY = -68 + t * 22;
        dogX = 28 * (1 - t);
        dogBlur = 5.0 * (1 - t * 0.65);
        statusLabel = "02 / A Familiar Silhouette Emerges from the Cafe Glow";
      } else if (p < 0.74) {
        // 40% -> 74%: Gabbu walks steadily down the courtyard stone path toward the visitor
        const t = (p - 0.38) / 0.36;
        const strideBob = Math.sin(t * Math.PI * 5) * 3.2;
        dogOpacity = 0.78 + t * 0.22;
        dogScale = 0.68 + t * 0.27;
        dogY = -46 + t * 42 + strideBob;
        dogX = 0;
        dogBlur = Math.max(0, 1.75 * (1 - t * 1.25));
        shadowOpacity = 0.48 + t * 0.42;
        shadowScale = 0.55 + t * 0.38;
        statusLabel = "03 / Gabbu Walks Down the Courtyard Path Toward You";
      } else if (p < 0.86) {
        // 75% -> 85%: Gabbu stops and raises his gaze toward the visitor
        const t = (p - 0.74) / 0.12;
        dogOpacity = 1;
        dogScale = 0.95 + t * 0.04;
        dogY = -4 * (1 - t);
        dogX = 0;
        dogBlur = 0;
        shadowOpacity = 0.90 + t * 0.06;
        shadowScale = 0.93 + t * 0.05;
        statusLabel = "04 / Gabbu Stops & Looks Warmly Toward You";
      } else {
        // 86% -> 100%: Gabbu settles into his final position & becomes interactive
        const t = (p - 0.86) / 0.14;
        dogOpacity = 1;
        dogScale = 0.99 + t * 0.01;
        dogY = 0;
        dogX = 0;
        dogBlur = 0;
        shadowOpacity = 0.96;
        shadowScale = 1.0;
        statusLabel = "05 / Meet Gabbu — Ready for a High Five or a Gentle Pet";
      }

      stickyStage.style.setProperty("--finale-progress", p.toFixed(4));
      stickyStage.style.setProperty("--sky-shift", `-${skyShift}px`);
      stickyStage.style.setProperty("--mtn-shift", `-${mtnShift}px`);
      stickyStage.style.setProperty("--cafe-shift", `-${cafeShift}px`);
      stickyStage.style.setProperty("--cafe-scale", cafeScale);
      stickyStage.style.setProperty("--cafe-warmth", cafeWarmth);
      stickyStage.style.setProperty("--dog-opacity", dogOpacity.toFixed(3));
      stickyStage.style.setProperty("--dog-scale", dogScale.toFixed(4));
      stickyStage.style.setProperty("--dog-y", `${dogY.toFixed(2)}px`);
      stickyStage.style.setProperty("--dog-x", `${dogX.toFixed(2)}px`);
      stickyStage.style.setProperty("--dog-blur", `${dogBlur.toFixed(2)}px`);
      stickyStage.style.setProperty("--shadow-scale", shadowScale.toFixed(3));
      stickyStage.style.setProperty("--shadow-opacity", shadowOpacity.toFixed(3));

      // Only update pose from scroll if user is not currently running a High-Five or Pet interaction
      if (!activeInteraction) {
        if (p >= 0.72) {
          setActiveGabbuPose("idle");
        } else if (p >= 0.20) {
          setActiveGabbuPose("walk");
        }
      }

      const isReady = p >= 0.74;
      stickyStage.classList.toggle("is-interactive-ready", isReady);

      if (isReady && !hasGreetedWoof) {
        hasGreetedWoof = true;
        showGabbuDialogue("Woof!", 2600);
      } else if (p < 0.45) {
        hasGreetedWoof = false;
      }

      if (hudStatus && !activeInteraction) {
        hudStatus.textContent = statusLabel;
      }
      if (hudHint) {
        hudHint.textContent = isReady
          ? "Pet Gabbu  •  High Five  •  Tap his nose for a happy “Woof!”"
          : "Keep scrolling gently as Gabbu walks up to meet you";
      }
    }

    // Show the refined cream/navy brand dialogue bubble ("Woof!")
    function showGabbuDialogue(message, durationMs = 2300) {
      if (!woofDialogue || !woofText) return;
      if (woofHideTimer) clearTimeout(woofHideTimer);
      woofText.textContent = message;
      woofDialogue.classList.add("is-woof-visible");
      woofHideTimer = setTimeout(() => {
        woofDialogue.classList.remove("is-woof-visible");
      }, durationMs);
    }

    // INTERACTION 1: HIGH FIVE + "Woof!" DIALOGUE
    function triggerHighFive(evt) {
      if (evt) evt.stopPropagation();

      if (interactionTimer) clearTimeout(interactionTimer);
      activeInteraction = "highfive";

      stickyStage.classList.remove("is-petting", "is-woofing");
      stickyStage.classList.add("is-highfiving", "is-interactive-ready");

      if (hudStatus) {
        hudStatus.textContent = "Gabbu happily gives you a High Five!";
      }

      setTimeout(() => {
        if (pawContactRing) {
          pawContactRing.classList.remove("is-ring-active");
          void pawContactRing.offsetWidth;
          pawContactRing.classList.add("is-ring-active");
        }
        spawnWarmInteractionMotes(0.56, 0.52, 9);
        showGabbuDialogue("Woof!", 2400);
      }, 240);

      interactionTimer = setTimeout(() => {
        stickyStage.classList.remove("is-highfiving");
        activeInteraction = null;
        if (hudStatus) {
          hudStatus.textContent = "05 / Gabbu sits happily beside you in the Manali courtyard";
        }
      }, 1520);
    }

    // INTERACTION 2: PET GABBU
    function triggerPetGabbu(evt) {
      if (evt) evt.stopPropagation();

      if (interactionTimer) clearTimeout(interactionTimer);
      activeInteraction = "pet";
      petCount += 1;

      stickyStage.classList.remove("is-highfiving", "is-woofing");
      stickyStage.classList.add("is-petting", "is-interactive-ready");

      spawnWarmInteractionMotes(0.50, 0.42, 8);
      showGabbuDialogue("Woof!", 2200);

      if (hudStatus) {
        hudStatus.textContent = "Gabbu leans into your hand with his big happy grin.";
      }

      interactionTimer = setTimeout(() => {
        stickyStage.classList.remove("is-petting");
        activeInteraction = null;
        if (hudStatus) {
          hudStatus.textContent = "05 / Gabbu sits happily beside you in the Manali courtyard";
        }
      }, 1550);
    }

    // INTERACTION 3: CLICK GABBU'S NOSE OR "WOOF" BUTTON -> "Woof!"
    function triggerWoofGabbu(evt) {
      if (evt) evt.stopPropagation();

      if (interactionTimer) clearTimeout(interactionTimer);
      activeInteraction = "woof";

      stickyStage.classList.remove("is-highfiving", "is-petting");
      stickyStage.classList.add("is-woofing", "is-interactive-ready");

      spawnWarmInteractionMotes(0.50, 0.36, 7);
      showGabbuDialogue("Woof!", 2400);

      if (hudStatus) {
        hudStatus.textContent = "Woof! — Gabbu greets you with pure joy.";
      }

      interactionTimer = setTimeout(() => {
        stickyStage.classList.remove("is-woofing");
        activeInteraction = null;
      }, 620);
    }

    // Attach event listeners to both minimal editorial prompts and direct head/nose/paw hotspots
    if (btnHighFive) btnHighFive.addEventListener("click", triggerHighFive);
    if (directPawHotspot) directPawHotspot.addEventListener("click", triggerHighFive);
    if (btnPet) btnPet.addEventListener("click", triggerPetGabbu);
    if (directPetHotspot) directPetHotspot.addEventListener("click", triggerPetGabbu);
    if (btnWoof) btnWoof.addEventListener("click", triggerWoofGabbu);
    if (directNoseHotspot) directNoseHotspot.addEventListener("click", triggerWoofGabbu);

    // Viewport observer for performance gating
    if ("IntersectionObserver" in window) {
      const finaleObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            isSectionInView = entry.isIntersecting;
            if (isSectionInView) {
              resizeFinaleCanvas();
              updateScrollEntranceTimeline();
              if (!canvasRafId) {
                canvasRafId = window.requestAnimationFrame(renderFinaleCanvas);
              }
            }
          });
        },
        { rootMargin: "200px 0px 200px 0px", threshold: 0.01 }
      );
      finaleObserver.observe(finaleSection);
    } else {
      isSectionInView = true;
      resizeFinaleCanvas();
      updateScrollEntranceTimeline();
      canvasRafId = window.requestAnimationFrame(renderFinaleCanvas);
    }

    registerScrollTask(() => {
      if (isSectionInView) {
        updateScrollEntranceTimeline();
      }
    });

    window.addEventListener("resize", () => {
      if (isSectionInView) {
        resizeFinaleCanvas();
        updateScrollEntranceTimeline();
      }
    });
  })();

  /* ==========================================================================
     GABBU'S — GOOGLE REVIEWS ULTRA-CINEMATIC PINNED SCROLL ENGINE
     - Official Place ID: ChIJJb47dDqHBDkRX1vRrMeMFCQ (Gabbu's Cafe, Old Manali)
     - Drives heavy pinned scroll choreography across real verified Google reviews
     - Connects to Google Places API (New) v1 when GOOGLE_PLACES_API_KEY is provided
     ========================================================================== */
  (function initGabbusGoogleReviewsScrollExperience() {
    const section = document.getElementById("gabbus-google-reviews");
    const scrollTrack = document.getElementById("greviewsScrollTrack");
    const pinnedStage = document.getElementById("greviewsPinnedStage");
    const shotsViewport = document.getElementById("greviewsShotsStage");
    if (!section || !scrollTrack || !pinnedStage || !shotsViewport) return;

    const PLACE_ID = "ChIJJb47dDqHBDkRX1vRrMeMFCQ";
    const FALLBACK_PLACE_MAP_URL =
      "https://www.google.com/maps/place/Gabbu's+Cafe,+Clubhouse+Rd,+Old+Manali,+Manali,+Himachal+Pradesh+175131,+India/@32.2522276,77.1825287,17z/data=!4m2!3m1!1s0x3904873a743bbe25:0x24148cc7acd15b5f";

    const progressCurrentEl = document.getElementById("greviewsProgressCurrent");
    const progressTotalEl = document.getElementById("greviewsProgressTotal");
    const progressFillEl = document.getElementById("greviewsProgressFill");
    const scrollCueEl = document.getElementById("greviewsScrollCue");

    const aggregateScoreEl = document.getElementById("greviewsAggregateScore");
    const aggregateCountEl = document.getElementById("greviewsAggregateCount");
    const masterMapLinkEl = document.getElementById("greviewsMasterMapLink");

    const apiConfigBtn = document.getElementById("greviewsApiConfigBtn");
    const apiDrawer = document.getElementById("greviewsApiDrawer");
    const apiForm = document.getElementById("greviewsApiForm");
    const apiKeyInput = document.getElementById("greviewsApiKeyInput");
    const apiFeedback = document.getElementById("greviewsApiFeedback");
    const apiStatusDot = document.getElementById("greviewsApiStatusDot");
    const apiStatusLabel = document.getElementById("greviewsApiStatusLabel");

    const prefersReducedMotion =
      window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let shots = Array.from(shotsViewport.querySelectorAll(".greview-shot"));
    let isInView = false;
    let scrollRafPending = false;

    function padTwo(n) {
      return n < 10 ? `0${n}` : `${n}`;
    }

    function escapeHtml(str) {
      return String(str || "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
    }

    function updateTrackHeightForShots() {
      shots = Array.from(shotsViewport.querySelectorAll(".greview-shot"));
      const count = Math.max(1, shots.length);
      if (progressTotalEl) {
        progressTotalEl.textContent = padTwo(count);
      }
      // 130vh per review shot + 45vh settle/release buffer
      const trackVh = count * 130 + 45;
      scrollTrack.style.setProperty("--greviews-track-height", `${trackVh}vh`);
    }

    updateTrackHeightForShots();

    // Scroll Choreography Calculation
    function updateGoogleReviewsScroll() {
      scrollRafPending = false;
      if (prefersReducedMotion) return;

      const rect = scrollTrack.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const maxScroll = Math.max(1, rect.height - vh);
      const rawProgress = -rect.top / maxScroll;
      const globalProgress = Math.max(0, Math.min(1, rawProgress));

      const count = Math.max(1, shots.length);
      // Reserve final 6% of track for smooth release hold
      const effectiveProgress = Math.min(0.9999, globalProgress / 0.94);
      const exactIndex = effectiveProgress * count;
      const activeIndex = Math.min(count - 1, Math.floor(exactIndex));

      // Update Editorial Progress Indicator
      if (progressCurrentEl) {
        progressCurrentEl.textContent = padTwo(activeIndex + 1);
      }
      if (progressFillEl) {
        const pct = Math.max(8, Math.min(100, ((activeIndex + 1) / count) * 100));
        pinnedStage.style.setProperty("--greviews-progress-pct", `${pct.toFixed(1)}%`);
      }

      // Subtle Background Parallax & Bokeh Drift
      const bgShift = (globalProgress * -44).toFixed(2);
      const bgScale = (1.05 + globalProgress * 0.04).toFixed(4);
      const photo1Op = (0.17 * (1 - globalProgress * 0.65)).toFixed(3);
      const photo2Op = (0.04 + globalProgress * 0.14).toFixed(3);
      const orb1X = (Math.sin(globalProgress * Math.PI * 2) * 48).toFixed(1);
      const orb1Y = (globalProgress * -65).toFixed(1);
      const orb2X = (Math.cos(globalProgress * Math.PI * 2) * -42).toFixed(1);
      const orb2Y = (globalProgress * 55).toFixed(1);

      pinnedStage.style.setProperty("--greviews-bg-shift", `${bgShift}px`);
      pinnedStage.style.setProperty("--greviews-bg-scale", bgScale);
      pinnedStage.style.setProperty("--greviews-photo1-op", photo1Op);
      pinnedStage.style.setProperty("--greviews-photo2-op", photo2Op);
      pinnedStage.style.setProperty("--orb1-x", `${orb1X}px`);
      pinnedStage.style.setProperty("--orb1-y", `${orb1Y}px`);
      pinnedStage.style.setProperty("--orb2-x", `${orb2X}px`);
      pinnedStage.style.setProperty("--orb2-y", `${orb2Y}px`);

      // Per-Review Shot Timeline (0.0 -> 1.0 local window)
      shots.forEach((shot, idx) => {
        const local = exactIndex - idx; // 0..1 when idx is current
        const isCurrent = idx === activeIndex;
        shot.classList.toggle("is-active-shot", isCurrent);

        let opacity = 0;
        let shotY = 48;
        let shotX = 0;
        let scale = 0.94;
        let blur = 4.5;
        let rot = 0;
        let clipTop = 0;
        let clipBottom = 0;
        let quoteY = 0;
        let metaOpacity = 0;
        let metaY = 14;

        const layoutType = shot.getAttribute("data-layout") || "centered-monumental";
        const horizSign = idx % 2 === 0 ? 1 : -1;

        if (local < -0.25 || local > 1.25) {
          // Far outside active window
          opacity = 0;
          shotY = local < 0 ? 54 : -54;
          scale = local < 0 ? 1.06 : 0.90;
          blur = 6;
        } else if (local < 0) {
          // Pre-entry anticipation (-0.25 -> 0)
          const t = (local + 0.25) / 0.25;
          opacity = t * 0.22;
          shotY = 52 * (1 - t * 0.25);
          shotX = layoutType === "editorial-offset" ? 28 * (1 - t) : 0;
          scale = 1.06 - t * 0.02;
          blur = 5.5 - t * 1.5;
          clipTop = 32 * (1 - t);
          clipBottom = 32 * (1 - t);
        } else if (local <= 0.22) {
          // 0% -> 22%: New review enters & quote unmasks
          const t = local / 0.22;
          const ease = 1 - Math.pow(1 - t, 3);
          opacity = 0.22 + ease * 0.78;
          shotY = 38 * (1 - ease);
          shotX = layoutType === "asymmetric-split" ? horizSign * 18 * (1 - ease) : 0;
          scale = 1.04 - ease * 0.04;
          blur = Math.max(0, 4.0 * (1 - ease));
          clipTop = Math.max(0, 22 * (1 - ease));
          clipBottom = Math.max(0, 22 * (1 - ease));
          quoteY = 18 * (1 - ease);
          metaOpacity = Math.max(0, (t - 0.35) / 0.65);
          metaY = 14 * (1 - metaOpacity);
        } else if (local <= 0.82) {
          // 22% -> 82%: Dominant hold & interactive settle window
          const t = (local - 0.22) / 0.60;
          opacity = 1;
          shotY = (0.5 - t) * 8; // Subtle floating parallax drift while reading
          shotX = 0;
          scale = 1.0;
          blur = 0;
          clipTop = 0;
          clipBottom = 0;
          quoteY = 0;
          metaOpacity = 1;
          metaY = 0;
        } else {
          // 82% -> 100%: Current review exits into depth (unless it is the final review holding for release)
          const isFinalShot = idx === count - 1;
          const t = Math.min(1, (local - 0.82) / 0.18);
          if (isFinalShot) {
            opacity = 1 - t * 0.15;
            shotY = -t * 12;
            scale = 1 - t * 0.015;
            blur = t * 0.8;
            metaOpacity = 1;
            metaY = 0;
          } else {
            opacity = Math.max(0, 1 - t * 1.15);
            shotY = -t * 46;
            shotX = horizSign * -12 * t;
            scale = 1 - t * 0.075;
            blur = t * 4.5;
            rot = horizSign * -0.45 * t;
            metaOpacity = Math.max(0, 1 - t * 1.4);
            metaY = -t * 10;
          }
        }

        shot.style.setProperty("--shot-opacity", opacity.toFixed(3));
        shot.style.setProperty("--shot-y", `${shotY.toFixed(2)}px`);
        shot.style.setProperty("--shot-x", `${shotX.toFixed(2)}px`);
        shot.style.setProperty("--shot-scale", scale.toFixed(4));
        shot.style.setProperty("--shot-blur", `${blur.toFixed(2)}px`);
        shot.style.setProperty("--shot-rot", `${rot.toFixed(2)}deg`);
        shot.style.setProperty("--shot-clip-top", `${clipTop.toFixed(1)}%`);
        shot.style.setProperty("--shot-clip-bottom", `${clipBottom.toFixed(1)}%`);
        shot.style.setProperty("--quote-y", `${quoteY.toFixed(2)}px`);
        shot.style.setProperty("--meta-opacity", metaOpacity.toFixed(3));
        shot.style.setProperty("--meta-y", `${metaY.toFixed(2)}px`);
      });

      if (scrollCueEl) {
        if (globalProgress > 0.90) {
          scrollCueEl.textContent =
            "Final Google review settled — continue scrolling to visit Gabbu’s in Manali ↓";
        } else {
          scrollCueEl.textContent =
            "Scroll to move through verified Google guest memories • Click any review to verify on Google Maps ↗";
        }
      }
    }

    // Render live reviews returned from Google Places API (New) v1
    function renderLivePlacesApiReviews(placeData) {
      if (!placeData || !Array.isArray(placeData.reviews) || !placeData.reviews.length) {
        return false;
      }

      if (placeData.rating && aggregateScoreEl) {
        aggregateScoreEl.textContent = Number(placeData.rating).toFixed(1);
      }
      if (placeData.userRatingCount && aggregateCountEl) {
        aggregateCountEl.textContent = `(${placeData.userRatingCount} Reviews • Old Manali)`;
      }
      if (placeData.googleMapsUri && masterMapLinkEl) {
        masterMapLinkEl.href = placeData.googleMapsUri;
      }

      const layouts = [
        "centered-monumental",
        "asymmetric-split",
        "editorial-offset",
        "centered-monumental",
        "asymmetric-split"
      ];

      const htmlParts = placeData.reviews.map((rev, index) => {
        const layout = layouts[index % layouts.length];
        const rating = Math.max(1, Math.min(5, Math.round(rev.rating || 5)));
        const starsStr = "&#9733;".repeat(rating);
        const rawText =
          (rev.text && rev.text.text) ||
          (rev.originalText && rev.originalText.text) ||
          "";
        const isLong = rawText.length > 210;
        const authorName =
          (rev.authorAttribution && rev.authorAttribution.displayName) ||
          "Google Maps Reviewer";
        const authorPhoto =
          (rev.authorAttribution && rev.authorAttribution.photoUri) || "";
        const relativeTime = rev.relativePublishTimeDescription || "Verified Google Review";
        const reviewUrl =
          rev.googleMapsUri ||
          (rev.authorAttribution && rev.authorAttribution.uri) ||
          placeData.googleMapsUri ||
          FALLBACK_PLACE_MAP_URL;

        const avatarMarkup = authorPhoto
          ? `<img src="${escapeHtml(authorPhoto)}" alt="${escapeHtml(authorName)}" class="greview-author-avatar" loading="lazy" decoding="async" referrerpolicy="no-referrer" />`
          : `<div class="greview-author-avatar" style="display:flex;align-items:center;justify-content:center;font-weight:600;color:#cdaa80;">${escapeHtml(authorName.charAt(0).toUpperCase())}</div>`;

        if (layout === "asymmetric-split") {
          return `
            <article class="greview-shot ${index === 0 ? "is-active-shot" : ""}" data-shot-index="${index}" data-layout="asymmetric-split">
              <a href="${escapeHtml(reviewUrl)}" target="_blank" rel="noopener noreferrer" class="greview-shot-card" aria-label="Read ${escapeHtml(authorName)}'s Google Review on Google Maps (opens in new tab)">
                <div class="greview-oversized-quote-mark" aria-hidden="true">&ldquo;</div>
                <div class="greview-asymmetric-grid">
                  <div class="greview-asym-quote-col">
                    <div class="greview-shot-meta-top">
                      <span class="greview-shot-index-tag">REVIEW ${padTwo(index + 1)} &bull; ${escapeHtml(relativeTime)}</span>
                    </div>
                    <div class="greview-quote-mask">
                      <blockquote class="greview-quote-text ${isLong ? "is-long-quote" : ""}">
                        &ldquo;${escapeHtml(rawText)}&rdquo;
                      </blockquote>
                    </div>
                  </div>
                  <div class="greview-asym-ledger-col">
                    <div class="greview-google-stars-pill">
                      <span class="g-pill-word">Google</span>
                      <span class="g-pill-stars" aria-label="${rating} out of 5 stars">${starsStr}</span>
                    </div>
                    <div class="greview-author-identity">
                      ${avatarMarkup}
                      <div class="greview-author-text">
                        <span class="greview-author-name">${escapeHtml(authorName)}</span>
                        <span class="greview-author-sub">${escapeHtml(relativeTime)} &bull; Google Reviews</span>
                      </div>
                    </div>
                    <span class="greview-cta-link">
                      <span>READ ON GOOGLE MAPS</span>
                      <span class="greview-cta-arrow" aria-hidden="true">&nearr;</span>
                    </span>
                  </div>
                </div>
              </a>
            </article>
          `;
        }

        return `
          <article class="greview-shot ${index === 0 ? "is-active-shot" : ""}" data-shot-index="${index}" data-layout="${layout}">
            <a href="${escapeHtml(reviewUrl)}" target="_blank" rel="noopener noreferrer" class="greview-shot-card" aria-label="Read ${escapeHtml(authorName)}'s Google Review on Google Maps (opens in new tab)">
              <div class="greview-oversized-quote-mark" aria-hidden="true">&ldquo;</div>
              <div class="greview-shot-meta-top">
                <span class="greview-shot-index-tag">REVIEW ${padTwo(index + 1)} &bull; ${escapeHtml(relativeTime)}</span>
                <div class="greview-google-stars-pill">
                  <span class="g-pill-word">Google</span>
                  <span class="g-pill-stars" aria-label="${rating} out of 5 stars">${starsStr}</span>
                </div>
              </div>
              <div class="greview-quote-mask">
                <blockquote class="greview-quote-text ${isLong ? "is-long-quote" : ""}">
                  &ldquo;${escapeHtml(rawText)}&rdquo;
                </blockquote>
              </div>
              <div class="greview-author-footer">
                <div class="greview-author-identity">
                  ${avatarMarkup}
                  <div class="greview-author-text">
                    <span class="greview-author-name">${escapeHtml(authorName)}</span>
                    <span class="greview-author-sub">${escapeHtml(relativeTime)} &bull; Google Reviews</span>
                  </div>
                </div>
                <span class="greview-cta-link">
                  <span>READ ON GOOGLE MAPS</span>
                  <span class="greview-cta-arrow" aria-hidden="true">&nearr;</span>
                </span>
              </div>
            </a>
          </article>
        `;
      });

      shotsViewport.innerHTML = htmlParts.join("");
      updateTrackHeightForShots();
      updateGoogleReviewsScroll();

      if (apiStatusDot) apiStatusDot.classList.add("is-live-api");
      if (apiStatusLabel) {
        apiStatusLabel.textContent = `Live Places API (${placeData.reviews.length} Reviews Synced)`;
      }
      return true;
    }

    // Attempt to fetch live Google Places API (New) reviews via backend proxy or direct key
    async function tryConnectGooglePlacesApi(customKey) {
      const urlParams = new URLSearchParams(window.location.search);
      const keyToUse =
        (customKey || "").trim() ||
        (urlParams.get("gplaces_key") || "").trim() ||
        (window.localStorage && localStorage.getItem("gabbus_google_places_api_key")) ||
        "";

      // 1. Try local server proxy /api/google-reviews first
      try {
        const proxyUrl = keyToUse
          ? `/api/google-reviews?key=${encodeURIComponent(keyToUse)}`
          : `/api/google-reviews`;
        const resp = await fetch(proxyUrl, { headers: { Accept: "application/json" } });
        if (resp.ok) {
          const data = await resp.json();
          if (data && Array.isArray(data.reviews) && data.reviews.length > 0) {
            if (keyToUse && window.localStorage) {
              localStorage.setItem("gabbus_google_places_api_key", keyToUse);
            }
            renderLivePlacesApiReviews(data);
            if (apiFeedback) {
              apiFeedback.textContent = `Connected! Loaded ${data.reviews.length} live Google Reviews for ${data.displayName ? data.displayName.text : "Gabbu's Cafe"}.`;
            }
            return;
          }
        }
      } catch (_) {
        // Fallback to direct client-side fetch if proxy endpoint is not running
      }

      // 2. If key is provided, try direct Google Places API (New) v1 request
      if (keyToUse) {
        try {
          const directResp = await fetch(
            `https://places.googleapis.com/v1/places/${PLACE_ID}?languageCode=en`,
            {
              headers: {
                "X-Goog-Api-Key": keyToUse,
                "X-Goog-FieldMask":
                  "id,displayName,formattedAddress,rating,userRatingCount,googleMapsUri,reviews"
              }
            }
          );
          const directData = await directResp.json();
          if (directData && Array.isArray(directData.reviews) && directData.reviews.length > 0) {
            if (window.localStorage) {
              localStorage.setItem("gabbus_google_places_api_key", keyToUse);
            }
            renderLivePlacesApiReviews(directData);
            if (apiFeedback) {
              apiFeedback.textContent = `Connected! Synced ${directData.reviews.length} live reviews directly from Google Places API (New).`;
            }
            return;
          } else if (apiFeedback && directData && directData.error) {
            apiFeedback.textContent = `Google Places API Error: ${directData.error.message || "Verify that Places API (New) is enabled on this key."}`;
          }
        } catch (err) {
          if (apiFeedback) {
            apiFeedback.textContent = `Connection error: ${err.message || "Could not reach places.googleapis.com"}`;
          }
        }
      }
    }

    if (apiConfigBtn && apiDrawer) {
      apiConfigBtn.addEventListener("click", () => {
        const isHidden = apiDrawer.hasAttribute("hidden");
        if (isHidden) {
          apiDrawer.removeAttribute("hidden");
          if (apiKeyInput) apiKeyInput.focus();
        } else {
          apiDrawer.setAttribute("hidden", "");
        }
      });
    }

    if (apiForm) {
      apiForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const val = apiKeyInput ? apiKeyInput.value.trim() : "";
        if (!val) {
          if (apiFeedback) {
            apiFeedback.textContent = "Please enter a valid Google Places API (New) key starting with AIza...";
          }
          return;
        }
        if (apiFeedback) {
          apiFeedback.textContent = "Connecting to places.googleapis.com/v1/places/ChIJJb47dDqHBDkRX1vRrMeMFCQ...";
        }
        tryConnectGooglePlacesApi(val);
      });
    }

    // Viewport Observer so scroll math only runs when section is near/in viewport
    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            isInView = entry.isIntersecting;
            if (isInView) {
              updateGoogleReviewsScroll();
            }
          });
        },
        { rootMargin: "250px 0px 250px 0px", threshold: 0.01 }
      );
      observer.observe(section);
    } else {
      isInView = true;
    }

    registerScrollTask(() => {
      if (isInView && !prefersReducedMotion) {
        updateGoogleReviewsScroll();
      }
    });

    window.addEventListener("resize", () => {
      if (isInView) updateGoogleReviewsScroll();
    });

    // Initial render & automatic API probe
    updateGoogleReviewsScroll();
    tryConnectGooglePlacesApi();
  })();

  /* ==========================================================================
     DEDICATED STORES / LOCATIONS PAGE CONTROLLER (locations.html)
     - Handles "WHERE TO, MAN?" destination choices (ALL STORES / MANALI / ZIRAKPUR)
     - Syncs programmable window.GABBUS_LOCATIONS_DATA fields
     ========================================================================== */
  (function initLocationsPageExperience() {
    const locationsPage = document.querySelector(".page-locations");
    if (!locationsPage) return;

    const data = window.GABBUS_LOCATIONS_DATA;
    if (data && typeof data === "object") {
      if (data.manali) {
        const addrEl = document.querySelector('[data-field="manali-address"]');
        const hrsEl = document.querySelector('[data-field="manali-hours"]');
        if (addrEl && data.manali.address) addrEl.textContent = data.manali.address;
        if (hrsEl && data.manali.hours) hrsEl.textContent = data.manali.hours;
      }
      if (data.zirakpur) {
        const addrEl = document.querySelector('[data-field="zirakpur-address"]');
        const hrsEl = document.querySelector('[data-field="zirakpur-hours"]');
        if (addrEl && data.zirakpur.address) addrEl.textContent = data.zirakpur.address;
        if (hrsEl && data.zirakpur.hours) hrsEl.textContent = data.zirakpur.hours;
      }
    }

    const choiceBtns = Array.from(document.querySelectorAll("[data-select-store]"));
    const storeCards = Array.from(document.querySelectorAll("[data-store-card]"));

    choiceBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const targetStore = (btn.getAttribute("data-select-store") || "ALL").toLowerCase();
        choiceBtns.forEach((b) => {
          const active = b === btn;
          b.classList.toggle("is-selected", active);
          b.setAttribute("aria-selected", active ? "true" : "false");
        });

        storeCards.forEach((card) => {
          const cardKey = (card.getAttribute("data-store-card") || "").toLowerCase();
          if (targetStore === "all") {
            card.classList.remove("is-dimmed", "is-highlighted");
          } else {
            const isMatch = cardKey === targetStore;
            card.classList.toggle("is-highlighted", isMatch);
            card.classList.toggle("is-dimmed", !isMatch);
            if (isMatch) {
              card.scrollIntoView({ behavior: "smooth", block: "nearest" });
            }
          }
        });
      });
    });
  })();

  /* ==========================================================================
     DEDICATED GABBU’S LIVE PAGE CONTROLLER (live.html)
     - Drives the 0% -> 100% Scroll Bonfire Opening Cinema (#liveBonfireCinemaTrack)
       across 4 friends, the central mountain bonfire, and Gabbu the German Shepherd
     - Runs a 60fps HTML5 Canvas procedural fire, stretching flame tongues & rising
       ember particle simulation (#bonfireFlameCanvas) + dynamic face/fur light flicker
     - Controls post-hero parallax triptych, clip-path reveals & 5 Weekend Event Categories
     ========================================================================== */
  (function initGabbusLivePageExperience() {
    const livePage = document.querySelector(".page-live");
    if (!livePage) return;

    const cinemaTrack = document.getElementById("liveBonfireCinemaTrack");
    const stickyViewport = document.getElementById("bonfireStickyViewport");
    const cameraRig = document.getElementById("bonfireCameraRig");
    const plane1 = document.getElementById("bonfirePlane1");
    const plane2 = document.getElementById("bonfirePlane2");
    const plane3 = document.getElementById("bonfirePlane3");
    const stageLabelEl = document.getElementById("bonfireStageLabel");
    const whisperBox = document.getElementById("bonfireNarrativeWhisper");
    const whisperKicker = document.getElementById("bonfireWhisperKicker");
    const whisperLine = document.getElementById("bonfireWhisperLine");
    const identityReveal = document.getElementById("bonfireIdentityReveal");
    const flameCanvas = document.getElementById("bonfireFlameCanvas");

    let scrollProgress = 0;
    let isBonfireInView = true;
    let scrollTicking = false;

    // ------------------------------------------------------------------------
    // 1. PIXEL-ART NIGHTTIME BONFIRE PARTY ENGINE (240x135 INTEGER PIXEL GRID)
    //    7 distinct pixel-art human friends + Gabbu (our German Shepherd)
    //    sitting naturally by the fire. Scroll drives 0% Calm -> 100% Party.
    // ------------------------------------------------------------------------
    const ctx = flameCanvas ? flameCanvas.getContext("2d") : null;
    let logicalW = 240;
    let logicalH = 135;
    let animFrameId = null;
    let lastTickTime = 0;
    let retroTick = 0;

    const pixelEmbers = [];
    const pixelNotes = [];

    const PIXEL_CAST = [
      { role: "jacket", dx: -64, dy: 2,  dir: 1,  mobile: true,  skin: "#EEBE9E", hair: "#6C3C24", top: "#E86235", bottom: "#1B9898" },
      { role: "guitar", dx: -44, dy: -6, dir: 1,  mobile: true,  skin: "#E8B694", hair: "#58321E", top: "#7CA846", bottom: "#2B3342" },
      { role: "drink",  dx: -25, dy: -12,dir: 1,  mobile: true,  skin: "#F2C4A4", hair: "#3E2820", top: "#D92B6B", bottom: "#EAE4D8", hat: "#D99B38" },
      { role: "folded", dx: 24,  dy: -13,dir: -1, mobile: false, skin: "#E2B08E", hair: "#262024", top: "#344A70", bottom: "#4B729F" },
      { role: "dress",  dx: 42,  dy: -7, dir: -1, mobile: true,  skin: "#F0C0A0", hair: "#5C3828", top: "#D9382E", bottom: "#D9382E", longHair: true },
      { role: "yellow", dx: 58,  dy: 1,  dir: -1, mobile: true,  skin: "#EBBA98", hair: "#523422", top: "#F2D44E", bottom: "#C9483B" },
      { role: "purple", dx: 75,  dy: -4, dir: -1, mobile: false, skin: "#EEBE9E", hair: "#A64B2A", top: "#7A428A", bottom: "#473B35" }
    ];

    const STARS = [
      [18, 12], [42, 20], [68, 9], [96, 17], [128, 11], [156, 19],
      [188, 12], [218, 16], [30, 32], [82, 29], [168, 28], [208, 31], [114, 25]
    ];

    function initFlameParticles() {
      if (!flameCanvas || !ctx) return;
      const vw = stickyViewport ? stickyViewport.clientWidth : window.innerWidth;
      const vh = stickyViewport ? stickyViewport.clientHeight : window.innerHeight;
      const isMobilePortrait = vw < 700 && vh > vw;
      logicalW = isMobilePortrait ? 176 : 240;
      logicalH = isMobilePortrait ? 196 : 135;

      if (flameCanvas.width !== logicalW || flameCanvas.height !== logicalH) {
        flameCanvas.width = logicalW;
        flameCanvas.height = logicalH;
      }
      ctx.imageSmoothingEnabled = false;

      if (pixelEmbers.length === 0) {
        for (let i = 0; i < 24; i++) {
          pixelEmbers.push({
            ox: (Math.random() - 0.5) * 18,
            y: Math.random() * 55,
            speed: 0.25 + Math.random() * 0.45,
            drift: (Math.random() - 0.5) * 0.3,
            size: Math.random() > 0.72 ? 2 : 1,
            col: i % 3 === 0 ? "#FFEC8E" : i % 2 === 0 ? "#F79E34" : "#EB5C24"
          });
        }
      }
      if (pixelNotes.length === 0) {
        for (let i = 0; i < 4; i++) {
          pixelNotes.push({
            age: i * 14,
            ox: (i % 2 === 0 ? -3 : 4)
          });
        }
      }
    }

    function pxRect(x, y, w, h, col) {
      if (!ctx || w <= 0 || h <= 0) return;
      ctx.fillStyle = col;
      ctx.fillRect(Math.round(x), Math.round(y), Math.round(w), Math.round(h));
    }

    function pxBox(x0, y0, x1, y1, col) {
      const left = Math.min(x0, x1);
      const top = Math.min(y0, y1);
      const w = Math.abs(x1 - x0) + 1;
      const h = Math.abs(y1 - y0) + 1;
      pxRect(left, top, w, h, col);
    }

    function pxLine(x0, y0, x1, y1, col) {
      let ix0 = Math.round(x0);
      let iy0 = Math.round(y0);
      const ix1 = Math.round(x1);
      const iy1 = Math.round(y1);
      const dx = Math.abs(ix1 - ix0);
      const dy = Math.abs(iy1 - iy0);
      const sx = ix0 < ix1 ? 1 : -1;
      const sy = iy0 < iy1 ? 1 : -1;
      let err = dx - dy;
      ctx.fillStyle = col;
      while (true) {
        ctx.fillRect(ix0, iy0, 1, 1);
        if (ix0 === ix1 && iy0 === iy1) break;
        const e2 = 2 * err;
        if (e2 > -dy) { err -= dy; ix0 += sx; }
        if (e2 < dx) { err += dx; iy0 += sy; }
      }
    }

    function drawPixelPine(px, baseY, height, colDark, colLit, fireSide) {
      pxBox(px - 1, baseY - 4, px + 1, baseY, "#261812");
      for (let t = 0; t < 4; t++) {
        const tyTop = Math.floor(baseY - height + t * (height / 5));
        const tyBot = Math.floor(tyTop + height / 3 + 2);
        const halfW = 2 + t * 2;
        for (let y = tyTop; y <= tyBot; y++) {
          const prog = (y - tyTop) / Math.max(1, tyBot - tyTop);
          const w = Math.floor(1 + prog * halfW);
          pxBox(px - w, y, px + w, y, colDark);
          if (fireSide !== 0) {
            const rimX = fireSide > 0 ? px + w : px - w;
            pxRect(rimX, y, 1, 1, colLit);
          }
        }
      }
    }

    function drawPixelPerson(x, y, cfg, p, tick) {
      const role = cfg.role;
      const skin = cfg.skin;
      const hair = cfg.hair;
      const top = cfg.top;
      const bottom = cfg.bottom;
      const shoe = "#201C22";
      const faceDir = cfg.dir || 1;

      // Scroll-controlled states:
      // 0% - 19%: Calm sitting (or folded arms standing)
      // 20% - 37%: Foot tap, head nod, guitarist starts strumming
      // 38% - 55%: Characters stand up, raise drink, start clapping
      // 56% - 100%: Full pixel-art party dance!
      const standing = role === "folded" || p >= 0.38;
      const party = p >= 0.56;
      const beat = Math.floor(tick / 2) % 2;
      const bounce = party && beat === 1 ? -1 : 0;
      const sway = party ? (beat === 0 ? 1 : -1) : 0;
      const nod = p >= 0.18 && beat === 1 ? 1 : 0;

      const bx = Math.round(x + sway);
      const by = Math.round(y + bounce);

      if (!standing) {
        // CALM SITTING POSE
        pxBox(bx - 2, by - 12, bx + 2, by - 7, top);
        if (role === "yellow") {
          // Cross-legged pose on the clearing floor
          pxBox(bx - 3, by - 6, bx + 3, by - 4, bottom);
          pxRect(bx - 3, by - 4, 2, 1, shoe);
          pxRect(bx + 2, by - 4, 2, 1, shoe);
        } else {
          // Seated on cedar log bench
          pxBox(bx - 2, by - 6, bx + 2 * faceDir + 1, by - 4, bottom);
          const footX = bx + 3 * faceDir;
          const footTap = p >= 0.18 && (role === "jacket" || role === "purple") && beat === 1 ? -1 : 0;
          pxBox(footX - 1, by - 4, footX + 1, by - 1, bottom);
          pxBox(footX - 1, by - 1 + footTap, footX + 2 * faceDir, by + footTap, shoe);
        }

        const hy = by - 18 + nod;
        pxBox(bx - 2, hy, bx + 2, hy + 4, skin);
        pxBox(bx - 2, hy - 1, bx + 2, hy, hair);
        if (cfg.longHair) {
          pxBox(bx - 3 * faceDir, hy, bx - 2 * faceDir, hy + 5, hair);
        }
        if (cfg.hat) {
          pxBox(bx - 3, hy - 2, bx + 2, hy, cfg.hat);
        }
        pxRect(bx + faceDir, hy + 2, 1, 1, "#1C1618");

        if (role === "guitar") {
          pxBox(bx - 1, by - 10, bx + 5, by - 7, "#CC823A");
          pxRect(bx + 2, by - 8, 1, 1, "#301C12");
          pxLine(bx + 5, by - 9, bx + 9, by - 12, "#8C5626");
          pxLine(bx - 2, by - 11, bx + 1, by - 8 + nod, skin);
        } else if (role === "drink") {
          pxLine(bx, by - 11, bx + 3 * faceDir, by - 10, top);
          const mx = bx + 4 * faceDir;
          pxBox(mx, by - 12, mx + 1, by - 10, "#F5AC38");
          pxRect(mx, by - 13, 2, 1, "#FFF9EB");
        } else {
          pxLine(bx - 1, by - 11, bx + 2 * faceDir, by - 8, top);
        }
      } else {
        // STANDING / PIXEL PARTY DANCING POSE (inspired by reference image!)
        if (party && (role === "jacket" || role === "yellow" || role === "purple")) {
          const step = beat === 0 ? 1 : -1;
          pxLine(bx - 1, by - 9, bx - 2, by - 4, bottom);
          pxLine(bx - 2, by - 4, bx - 3, by - (step > 0 ? 1 : 0), bottom);
          pxBox(bx - 4, by - (step > 0 ? 1 : 0), bx - 2, by, shoe);

          pxLine(bx + 1, by - 9, bx + 2, by - 4, bottom);
          pxLine(bx + 2, by - 4, bx + 3, by - (step < 0 ? 1 : 0), bottom);
          pxBox(bx + 2, by - (step < 0 ? 1 : 0), bx + 4, by, shoe);
        } else if (role === "dress") {
          const hipShift = party && beat === 0 ? 1 : 0;
          pxBox(bx - 2 + hipShift, by - 10, bx + 2 + hipShift, by - 6, bottom);
          pxLine(bx - 1, by - 5, bx - 2, by - 1, skin);
          pxLine(bx + 1, by - 5, bx + 2, by - 1, skin);
          pxRect(bx - 2, by, 1, 1, top);
          pxRect(bx + 2, by, 1, 1, top);
        } else {
          pxBox(bx - 2, by - 9, bx - 1, by - 1, bottom);
          pxBox(bx + 1, by - 9, bx + 2, by - 1, bottom);
          pxBox(bx - 3, by - 1, bx - 1, by, shoe);
          pxBox(bx + 1, by - 1, bx + 3, by, shoe);
        }

        pxBox(bx - 2, by - 16, bx + 2, by - 10, top);
        const hy = by - 22 + (party ? 0 : nod);
        pxBox(bx - 2, hy, bx + 2, hy + 4, skin);
        pxBox(bx - 2, hy - 1, bx + 2, hy, hair);
        if (cfg.longHair) {
          pxBox(bx - 3, hy, bx - 2, hy + 5, hair);
          pxBox(bx + 2, hy, bx + 3, hy + 5, hair);
        }
        if (cfg.hat) {
          pxBox(bx - 3, hy - 2, bx + 2, hy, cfg.hat);
        }
        pxRect(bx - 1, hy + 2, 1, 1, "#1C1618");
        pxRect(bx + 1, hy + 2, 1, 1, "#1C1618");
        if (party || p >= 0.42) {
          pxRect(bx, hy + 4, 1, 1, "#A83434"); // Happy pixel laugh/sing mouth
        }

        if (role === "folded" && p < 0.38) {
          pxBox(bx - 3, by - 14, bx + 3, by - 13, top);
          pxLine(bx - 2, by - 13, bx + 2, by - 13, skin);
        } else if (role === "guitar") {
          pxBox(bx - 1, by - 13, bx + 5, by - 10, "#CC823A");
          pxRect(bx + 2, by - 11, 1, 1, "#301C12");
          pxLine(bx + 5, by - 12, bx + 9, by - 15 - beat, "#8C5626");
          pxLine(bx - 3, by - 15, bx + 1, by - 11 + beat, skin);
        } else if (role === "drink") {
          const lift = party && beat === 1 ? 2 : 0;
          pxLine(bx - 2, by - 15, bx - 5, by - 12 - beat, top);
          pxLine(bx + 2, by - 15, bx + 5, by - 19 - lift, top);
          pxBox(bx + 5, by - 22 - lift, bx + 6, by - 19 - lift, "#F5AC38");
          pxRect(bx + 5, by - 23 - lift, 2, 1, "#FFF9EB");
        } else if (role === "yellow") {
          const wArm = beat === 0 ? 1 : 0;
          pxLine(bx - 2, by - 15, bx - 5 - wArm, by - 21, skin);
          pxLine(bx + 2, by - 15, bx + 5 + wArm, by - 21, skin);
        } else if (role === "dress") {
          const sArm = beat === 0 ? 1 : -1;
          pxLine(bx - 2, by - 15, bx - 4 + sArm, by - 19, skin);
          pxLine(bx - 4 + sArm, by - 19, bx - 2 + sArm, by - 22, skin);
          pxLine(bx + 2, by - 15, bx + 4 + sArm, by - 19, skin);
          pxLine(bx + 4 + sArm, by - 19, bx + 2 + sArm, by - 22, skin);
        } else if (role === "purple") {
          const lift = beat === 1 ? -1 : 1;
          pxLine(bx - 2, by - 14, bx - 5, by - 14, top);
          pxLine(bx - 5, by - 14, bx - 5, by - 18 + lift, skin);
          pxLine(bx + 2, by - 14, bx + 5, by - 14, top);
          pxLine(bx + 5, by - 14, bx + 5, by - 18 - lift, skin);
        } else if (role === "folded") {
          if (beat === 0) {
            pxLine(bx - 2, by - 15, bx - 1, by - 19, skin);
            pxLine(bx + 2, by - 15, bx + 1, by - 19, skin);
            pxRect(bx, by - 21, 1, 1, "#FFF5C8");
          } else {
            pxLine(bx - 2, by - 15, bx - 4, by - 18, skin);
            pxLine(bx + 2, by - 15, bx + 4, by - 18, skin);
          }
        } else {
          if (beat === 0) {
            pxLine(bx - 2, by - 15, bx - 4, by - 21, top);
            pxRect(bx - 4, by - 22, 1, 1, skin);
            pxLine(bx + 2, by - 15, bx + 5, by - 12, top);
            pxRect(bx + 5, by - 11, 1, 1, skin);
          } else {
            pxLine(bx - 2, by - 15, bx - 5, by - 12, top);
            pxRect(bx - 5, by - 11, 1, 1, skin);
            pxLine(bx + 2, by - 15, bx + 4, by - 21, top);
            pxRect(bx + 4, by - 22, 1, 1, skin);
          }
        }
      }
    }

    function drawPixelGabbu(x, y, p, tick) {
      // GABBU — Recognizable Pixel-Art German Shepherd sitting naturally by the fire.
      // Never dances like a human; reacts with ears, head tilt, happy tongue & tail wag!
      const saddle = "#1E232E";
      const tan = "#D69E62";
      const tanLight = "#EBBE88";
      const muzzle = "#181C24";

      const wag =
        p >= 0.35
          ? (tick % 2 === 0 ? 1 : -1) * (p >= 0.60 ? 2 : 1)
          : 0;
      pxLine(x - 6, y - 2, x - 10, y - 5 + wag, saddle);
      pxLine(x - 6, y - 1, x - 9, y - 4 + wag, tan);

      // Seated Haunches & Saddle Back
      pxBox(x - 5, y - 8, x + 1, y - 1, saddle);
      pxBox(x - 5, y - 4, x - 2, y, tan);

      // Upright Chest & Front Paws
      pxBox(x - 1, y - 11, x + 4, y - 4, tan);
      pxBox(x + 1, y - 10, x + 4, y - 5, tanLight);
      pxBox(x, y - 4, x + 1, y, tan);
      pxBox(x + 3, y - 4, x + 4, y, tan);

      // Head, Pointed Shepherd Ears & Snout
      const tilt = p >= 0.60 && Math.floor(tick / 2) % 2 === 0 ? -1 : 0;
      const lookLeft = p >= 0.35 && p < 0.60 && Math.floor(tick / 3) % 2 === 1;
      const hx = x + 1;
      const hy = y - 16 + tilt;

      pxBox(hx - 2, hy, hx + 3, hy + 4, tan);
      pxBox(hx - 2, hy, hx + 1, hy + 2, saddle);

      if (lookLeft) {
        pxBox(hx - 5, hy + 1, hx - 2, hy + 3, muzzle);
        pxRect(hx - 5, hy + 1, 1, 1, "#0C0E12");
        pxRect(hx - 1, hy + 1, 1, 1, "#FFF6DA");
      } else {
        pxBox(hx + 3, hy + 1, hx + 6, hy + 3, muzzle);
        pxRect(hx + 6, hy + 1, 1, 1, "#0C0E12");
        if (p >= 0.45) {
          pxRect(hx + 5, hy + 4, 1, 1, "#EE7686"); // Happy pink pixel tongue
        }
        pxRect(hx + 2, hy + 1, 1, 1, "#FFF6DA");
      }

      const earLift = p >= 0.20 ? 1 : 0;
      pxLine(hx - 2, hy, hx - 2, hy - 3 - earLift, saddle);
      pxRect(hx - 1, hy - 1, 1, 1, "#C68470");
      pxLine(hx + 1, hy, hx + 2, hy - 3 - earLift, saddle);
      pxRect(hx + 1, hy - 1, 1, 1, "#C68470");
    }

    function drawPixelBonfire(cx, cy, p, tick) {
      // Charred firewood logs & river stone ring
      pxBox(cx - 7, cy - 2, cx + 7, cy + 1, "#603820");
      const stones = [-8, -5, -2, 1, 4, 7];
      for (let i = 0; i < stones.length; i++) {
        pxBox(cx + stones[i] - 1, cy, cx + stones[i] + 1, cy + 2, "#4A5262");
      }

      // Stepped pixel flame columns
      const boost = Math.floor(p * 8);
      const cols = [
        [-5, 5 + Math.floor(boost * 0.45)],
        [-3, 9 + boost],
        [-1, 13 + boost],
        [1, 12 + boost],
        [3, 8 + boost],
        [5, 4 + Math.floor(boost * 0.45)]
      ];
      for (let i = 0; i < cols.length; i++) {
        const ox = cols[i][0];
        const baseH = cols[i][1];
        const jit = ((ox + tick + i) % 3) - 1;
        const h = Math.max(3, baseH + jit);
        pxBox(cx + ox, cy - h, cx + ox + 1, cy - 1, "#EB5C24");
        pxBox(cx + ox, cy - Math.floor(h * 0.68), cx + ox + 1, cy - 1, "#F79E34");
        pxBox(cx + ox, cy - Math.floor(h * 0.36), cx + ox + 1, cy - 1, "#FFEC8E");
      }
    }

    function renderBonfireCanvas(now) {
      if (!isBonfireInView || !ctx || !flameCanvas) {
        animFrameId = null;
        return;
      }

      // 8-fps retro pixel animation clock (~125ms per pixel frame)
      if (!lastTickTime || now - lastTickTime > 125) {
        retroTick = (retroTick + 1) % 1200;
        lastTickTime = now;
      }

      const W = logicalW;
      const H = logicalH;
      const isCompact = W < 200;
      const cx = Math.floor(W / 2);
      const horizonY = isCompact ? 96 : 82;
      const groundCy = isCompact ? 114 : 98;

      // 1. Stepped Night Sky Bands
      pxBox(0, 0, W, Math.floor(horizonY * 0.34), "#091122");
      pxBox(0, Math.floor(horizonY * 0.34), W, Math.floor(horizonY * 0.68), "#0C172E");
      pxBox(0, Math.floor(horizonY * 0.68), W, horizonY, "#0F1E3F");

      // 2. Twinkling Pixel Stars & Crescent Moon
      for (let i = 0; i < STARS.length; i++) {
        const sx = Math.floor((STARS[i][0] / 240) * W);
        const sy = STARS[i][1];
        const twinkle = (i + retroTick) % 5 === 0;
        pxRect(sx, sy, 1, 1, twinkle ? "#FFF6DA" : "#9FB0CE");
        if (twinkle && i % 2 === 0) {
          pxRect(sx - 1, sy, 3, 1, "#CDAA80");
          pxRect(sx, sy - 1, 1, 3, "#CDAA80");
        }
      }
      const moonX = isCompact ? 24 : 32;
      const moonY = 18;
      for (let mx = moonX - 4; mx <= moonX + 4; mx++) {
        for (let my = moonY - 4; my <= moonY + 4; my++) {
          const dMain = (mx - moonX) * (mx - moonX) + (my - moonY) * (my - moonY);
          const dCut = (mx - (moonX + 2)) * (mx - (moonX + 2)) + (my - (moonY - 1)) * (my - (moonY - 1));
          if (dMain <= 14 && dCut > 9) {
            pxRect(mx, my, 1, 1, "#F7E9C4");
          }
        }
      }

      // 3. Layered Pine Forest Silhouettes with Subtle Parallax & Fire Rim Light
      const parX = Math.round((scrollProgress - 0.5) * 4);
      for (let bx = 10; bx < W; bx += 16) {
        if (bx > cx - 34 && bx < cx + 34) continue;
        drawPixelPine(bx - parX, horizonY, 28 + ((bx * 7) % 14), "#0B162A", "#222C42", 0);
      }
      const leftPines = isCompact
        ? [[12, horizonY + 10, 42], [28, horizonY + 5, 36], [44, horizonY + 2, 30]]
        : [[14, horizonY + 12, 46], [30, horizonY + 8, 40], [46, horizonY + 4, 34], [64, horizonY + 1, 28]];
      const rightPines = isCompact
        ? [[W - 44, horizonY + 2, 30], [W - 28, horizonY + 5, 36], [W - 12, horizonY + 10, 42]]
        : [[W - 64, horizonY + 1, 28], [W - 46, horizonY + 4, 34], [W - 30, horizonY + 8, 40], [W - 14, horizonY + 12, 46]];

      for (let i = 0; i < leftPines.length; i++) {
        drawPixelPine(leftPines[i][0], leftPines[i][1], leftPines[i][2], "#0D1B2E", "#6E442A", 1);
      }
      for (let i = 0; i < rightPines.length; i++) {
        drawPixelPine(rightPines[i][0], rightPines[i][1], rightPines[i][2], "#0D1B2E", "#6E442A", -1);
      }

      // Warm Overhead String Lights Between Clearing Pines
      const stringY0 = horizonY - 24;
      for (let lx = 34; lx <= W - 34; lx += 8) {
        const norm = (lx - cx) / (W * 0.38);
        const sag = Math.round((1 - norm * norm) * 7);
        const ly = stringY0 + sag;
        pxRect(lx, ly, 1, 1, "#3A302C");
        if (lx % 16 === 2) {
          const bulbCol = (lx + retroTick) % 3 === 0 ? "#FFF4C2" : "#F5A842";
          pxRect(lx, ly + 1, 1, 2, bulbCol);
        }
      }

      // 4. Forest Clearing Ground & Expanding Pixel Firelight Rings
      pxBox(0, horizonY, W, H, "#0B1524");
      const glowExpand = Math.floor(scrollProgress * 16) + (retroTick % 2);
      const rxOuter = (isCompact ? 68 : 84) + glowExpand;
      const rxMid = (isCompact ? 48 : 58) + Math.floor(glowExpand * 0.6);
      const rxInner = (isCompact ? 28 : 34) + Math.floor(glowExpand * 0.3);

      for (let gy = groundCy - 18; gy <= groundCy + 20; gy++) {
        const dy = (gy - groundCy) / 18;
        const dy2 = dy * dy;
        if (dy2 <= 1) {
          const spanO = Math.floor(rxOuter * Math.sqrt(1 - dy2));
          pxBox(cx - spanO, gy, cx + spanO, gy, "#141C2E");
        }
        if (dy2 <= 0.68) {
          const spanM = Math.floor(rxMid * Math.sqrt(1 - dy2 / 0.68));
          pxBox(cx - spanM, gy, cx + spanM, gy, "#261E2B");
        }
        if (dy2 <= 0.36) {
          const spanI = Math.floor(rxInner * Math.sqrt(1 - dy2 / 0.36));
          pxBox(cx - spanI, gy, cx + spanI, gy, "#462A24");
        }
      }

      // Split Cedar Log Benches & Gabbu's Woven Mountain Rug
      const logSpan = isCompact ? 28 : 38;
      pxBox(cx - 32 - logSpan, groundCy - 3, cx - 32, groundCy + 1, "#5C3822");
      pxLine(cx - 32 - logSpan, groundCy - 3, cx - 32, groundCy - 3, "#8E5A36");
      pxBox(cx + 32, groundCy - 3, cx + 32 + logSpan, groundCy + 1, "#5C3822");
      pxLine(cx + 32, groundCy - 3, cx + 32 + logSpan, groundCy - 3, "#8E5A36");

      // Gabbu's crimson & warm-beige rug right beside the bonfire
      pxBox(cx - 21, groundCy - 1, cx - 5, groundCy + 2, "#8A362E");
      pxLine(cx - 19, groundCy, cx - 7, groundCy, "#CDAA80");

      // 5. Draw Pixel-Art Cast (Sorted back-to-front by Y depth)
      const activeCast = isCompact
        ? PIXEL_CAST.filter((c) => c.mobile)
        : PIXEL_CAST;

      for (let i = 0; i < activeCast.length; i++) {
        const c = activeCast[i];
        const scaleX = isCompact ? 0.76 : 1;
        const px = cx + Math.round(c.dx * scaleX);
        const py = groundCy + c.dy;
        drawPixelPerson(px, py, c, scrollProgress, retroTick + i);
      }

      // 6. Draw GABBU (Central German Shepherd sitting by the fire) & Central Bonfire
      drawPixelGabbu(cx - 13, groundCy - 1, scrollProgress, retroTick);
      drawPixelBonfire(cx + 5, groundCy - 1, scrollProgress, retroTick);

      // 7. Floating Pixel Musical Notes from the Guitarist (20% -> 100%)
      if (scrollProgress >= 0.18) {
        const gx = cx + Math.round(-44 * (isCompact ? 0.76 : 1)) + 4;
        const gy = groundCy - 24;
        for (let i = 0; i < pixelNotes.length; i++) {
          const n = pixelNotes[i];
          const progressY = ((retroTick * 2 + n.age) % 28);
          const nx = gx + n.ox + Math.round(Math.sin((retroTick + i) * 0.5) * 2);
          const ny = gy - progressY;
          pxRect(nx, ny, 2, 2, "#FFE885");
          pxLine(nx + 1, ny, nx + 1, ny - 3, "#FFE885");
          pxRect(nx + 2, ny - 3, 1, 1, "#F79E34");
        }
      }

      // 8. Rising Pixel-Art Embers
      const emberCount = Math.floor(8 + scrollProgress * 16);
      for (let i = 0; i < emberCount; i++) {
        const e = pixelEmbers[i];
        e.y = (e.y + e.speed * (0.6 + scrollProgress * 0.9)) % 56;
        const ex = cx + 5 + e.ox + Math.round(Math.sin(retroTick * 0.25 + i) * 2);
        const ey = groundCy - 8 - Math.floor(e.y);
        pxRect(ex, ey, e.size, e.size, e.col);
      }

      if (!isBonfireInView) {
        animFrameId = null;
        return;
      }

      animFrameId = window.requestAnimationFrame(renderBonfireCanvas);
    }

    // ------------------------------------------------------------------------
    // 2. CONTINUOUS SCROLL-PINNED BONFIRE TIMELINE (2–3 NORMAL SCROLLS)
    //    #bonfireStickyViewport is position:fixed in the viewport background
    //    so the pixel-art party, bonfire, particles & Gabbu remain 100% visible
    //    and actively animating while scrolling through the 220vh track.
    // ------------------------------------------------------------------------
    function updateBonfireScrollTimeline() {
      if (!cinemaTrack) return;

      const rect = cinemaTrack.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const totalScrollable = Math.max(1, rect.height - vh);
      const rawP = -rect.top / totalScrollable;
      const clampedRaw = Math.max(0, Math.min(1, rawP));

      // Keep canvas actively animating whenever the fixed stage is visible
      const shouldBeActive = rect.bottom > -100;
      if (shouldBeActive && !isBonfireInView) {
        isBonfireInView = true;
        if (!animFrameId) {
          animFrameId = window.requestAnimationFrame(renderBonfireCanvas);
        }
      } else if (!shouldBeActive && isBonfireInView) {
        isBonfireInView = false;
      }

      // Start immediately with active baseline energy (0.15) and build to 1.0
      const p = Math.min(1, 0.15 + clampedRaw * 0.85);
      scrollProgress = p;

      // Subtle camera push-in (1.0 -> 1.05) without blurring pixel edges
      const camScale = clampedRaw < 0.78 ? 1 + clampedRaw * 0.05 : 1.04 - (clampedRaw - 0.78) * 0.14;
      const camY = clampedRaw < 0.78 ? -clampedRaw * 6 : -5 * (1 - (clampedRaw - 0.78) / 0.22);
      if (cameraRig) {
        cameraRig.style.setProperty("--cam-scale", camScale.toFixed(4));
        cameraRig.style.setProperty("--cam-x", "0px");
        cameraRig.style.setProperty("--cam-y", `${camY.toFixed(2)}px`);
      }

      // 2–3 Scroll Timeline Labels
      const pctNum = Math.round(clampedRaw * 100);
      let stageBadge = `${pctNum}% • BONFIRE & FIRST CHORDS`;
      let kicker = "01 • FRIENDS & GABBU BY THE FIRE";
      let line =
        "The crackling bonfire warms the clearing — guitar chords strum with Gabbu right in the center.";

      if (clampedRaw >= 0.18 && clampedRaw < 0.42) {
        stageBadge = `${pctNum}% • THE PARTY STARTS`;
        kicker = "02 • DRINKS RAISED & HANDS CLAPPING";
        line =
          "Friends stand up around the fire — raising drinks and clapping as Gabbu perks his ears.";
      } else if (clampedRaw >= 0.42 && clampedRaw < 0.72) {
        stageBadge = `${pctNum}% • FULL PIXEL PARTY`;
        kicker = "03 • DANCING AROUND THE FIRE WITH GABBU";
        line =
          "Everyone dances around the fire while Gabbu sits happily in the center, wagging his tail.";
      } else if (clampedRaw >= 0.72) {
        stageBadge = "100% • GABBU’S LIVE";
      }

      if (stageLabelEl) stageLabelEl.textContent = stageBadge;
      if (whisperKicker) whisperKicker.textContent = kicker;
      if (whisperLine) whisperLine.textContent = line;

      const showIdentity = clampedRaw >= 0.72;
      if (whisperBox) whisperBox.classList.toggle("is-hidden", showIdentity);
      if (identityReveal) identityReveal.classList.toggle("is-revealed", showIdentity);
    }

    // ------------------------------------------------------------------------
    // 3. POST-HERO CLIP-PATH REVEALS & PARALLAX TRIPTYCH
    // ------------------------------------------------------------------------
    const clipMediaEls = document.querySelectorAll("[data-clip-reveal]");
    if ("IntersectionObserver" in window) {
      const clipObs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-clip-revealed");
            }
          });
        },
        { threshold: 0.14 }
      );
      clipMediaEls.forEach((el) => clipObs.observe(el));
    } else {
      clipMediaEls.forEach((el) => el.classList.add("is-clip-revealed"));
    }

    const parallaxCards = document.querySelectorAll("[data-parallax-card]");
    const scaleImgs = document.querySelectorAll("[data-scale-scroll]");

    function updatePostHeroParallax() {
      const vh = window.innerHeight || 1;
      parallaxCards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        if (rect.top < vh && rect.bottom > 0) {
          const factor = parseFloat(card.getAttribute("data-parallax-card") || "0.04");
          const centerOffset = (vh * 0.5 - (rect.top + rect.height * 0.5)) * factor;
          card.style.setProperty("--trip-y", `${centerOffset.toFixed(2)}px`);
        }
      });

      scaleImgs.forEach((img) => {
        const rect = img.getBoundingClientRect();
        if (rect.top < vh && rect.bottom > 0) {
          const prog = Math.max(0, Math.min(1, (vh - rect.top) / (vh + rect.height)));
          const sc = (1.09 - prog * 0.06).toFixed(4);
          img.style.setProperty("--loc-img-scale", sc);
        }
      });
    }

    // Ensure any legacy Weekend Dispatch / Live Schedule Architecture block is removed
    document
      .querySelectorAll(".live-ledger-wrap, #liveEventLedgerSection, #liveEventsDynamicList, .live-host-section, #liveHostInquiry")
      .forEach((el) => el.remove());

    initFlameParticles();
    updateBonfireScrollTimeline();
    updatePostHeroParallax();

    if (!animFrameId) {
      animFrameId = window.requestAnimationFrame(renderBonfireCanvas);
    }

    registerScrollTask(() => {
      updateBonfireScrollTimeline();
      updatePostHeroParallax();
    });

    window.addEventListener("resize", () => {
      initFlameParticles();
      updateBonfireScrollTimeline();
    });
  })();

  /* ==========================================================================
     GLOBAL BACK BUTTON CONTROLLER (.global-back-btn)
     - Returns to the previous navigation level / previous page naturally
     - Remains visible throughout the opening hero or pinned bonfire track
     ========================================================================== */
  (function initGlobalBackButton() {
    const backBtn = document.getElementById("globalBackBtn");
    if (!backBtn) return;

    const fallbackHref = backBtn.getAttribute("data-back-fallback") || backBtn.getAttribute("href") || "index.html";

    try {
      if (document.referrer) {
        const refUrl = new URL(document.referrer, window.location.href);
        if (
          refUrl.origin === window.location.origin &&
          refUrl.pathname !== window.location.pathname
        ) {
          const refFile = refUrl.pathname.split("/").pop() || "index.html";
          if (refFile.endsWith(".html")) {
            backBtn.setAttribute("href", refFile + (refUrl.hash || ""));
          }
        }
      }
    } catch (_) {}

    backBtn.addEventListener("click", (e) => {
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) {
        return;
      }
      e.preventDefault();

      let canUseHistoryBack = false;
      try {
        if (document.referrer && window.history.length > 1) {
          const refUrl = new URL(document.referrer, window.location.href);
          if (
            refUrl.origin === window.location.origin &&
            refUrl.pathname !== window.location.pathname
          ) {
            canUseHistoryBack = true;
          }
        }
      } catch (_) {}

      if (canUseHistoryBack) {
        window.history.back();
      } else {
        window.location.href = fallbackHref;
      }
    });

    const bonfireTrack = document.getElementById("liveBonfireCinemaTrack");
    function updateBackButtonVisibility() {
      const y = window.scrollY || document.documentElement.scrollTop || 0;
      const threshold = bonfireTrack
        ? Math.max(180, bonfireTrack.offsetHeight - window.innerHeight * 0.85)
        : 145;
      backBtn.classList.toggle("is-scrolled-away", y > threshold);
    }

    registerScrollTask(updateBackButtonVisibility);
    updateBackButtonVisibility();
  })();

  /* ==========================================================================
     CUSTOM CURSOR — GABBU'S PAW (DESKTOP ONLY, ZERO-LAG 1:1 HARDWARE TRACKING)
     - Appended directly to document.documentElement to completely bypass any
       body overflow-x clipping, stacking context traps, or scroll bounds.
     - 1:1 Direct GPU positioning with zero delay, zero lerp lag, zero jitter.
     - Fully visible across 100% of the website from top to footer.
     ========================================================================== */
  (function initGabbuPawCursor() {
    // 1. Remove any legacy or duplicate cursor elements
    document.querySelectorAll("#customCursor, #customCursorDot, .gabbu-paw-cursor").forEach((el) => el.remove());

    const isFinePointer = window.matchMedia && window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!isFinePointer) return;

    const root = document.documentElement;
    let cursorEl = document.getElementById("gabbuPawCursor");

    if (!cursorEl) {
      cursorEl = document.createElement("div");
      cursorEl.id = "gabbuPawCursor";
      cursorEl.className = "gabbu-paw-cursor";
      cursorEl.setAttribute("aria-hidden", "true");
      cursorEl.innerHTML = `
        <div class="gabbu-paw-cursor__badge">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10.75" fill="#0F1E3F" stroke="#CDAA80" stroke-width="1.2" />
            <g fill="#CDAA80">
              <ellipse cx="10.05" cy="7.65" rx="1.42" ry="2.02" transform="rotate(-9 10.05 7.65)" />
              <ellipse cx="13.95" cy="7.65" rx="1.42" ry="2.02" transform="rotate(9 13.95 7.65)" />
              <ellipse cx="7.0" cy="10.2" rx="1.35" ry="1.88" transform="rotate(-26 7.0 10.2)" />
              <ellipse cx="17.0" cy="10.2" rx="1.35" ry="1.88" transform="rotate(26 17.0 10.2)" />
              <path d="M12 10.95C13.85 10.95 16.35 12.85 16.2 14.95C16.08 16.5 14.5 17.25 13.1 16.82C12.45 16.62 12.25 16.48 12 16.48C11.75 16.48 11.55 16.62 10.9 16.82C9.5 17.25 7.92 16.5 7.8 14.95C7.65 12.85 10.15 10.95 12 10.95Z" />
            </g>
          </svg>
        </div>
      `;
      // CRITICAL: Append directly to document.documentElement (NOT document.body)
      // so it is NEVER clipped by body's overflow-x: clip/hidden or trapped by body transforms
      root.appendChild(cursorEl);
    }

    let isVisible = false;
    let isTouch = false;

    const INTERACTIVE_SELECTOR = "a, button, [role='button'], input, select, textarea, label[for], summary, .journey-dest-choice, .finale-hotspot, .nav-hamburger, .menu-domain-pill, .menu-filter-pill, .passport-tab, [tabindex]:not([tabindex='-1']), [onclick], [data-action], [data-menu-tab], .btn, .social-link, .link-editorial, .journal-filter-btn, [data-filter]";

    function showCursor(x, y) {
      if (isTouch) return;
      cursorEl.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      if (!isVisible) {
        isVisible = true;
        cursorEl.classList.add("is-visible");
        root.classList.add("has-gabbu-cursor");
      }
    }

    function hideCursor() {
      isVisible = false;
      cursorEl.classList.remove("is-visible", "is-hover", "is-pressed");
      root.classList.remove("has-gabbu-cursor");
    }

    // High-performance direct mouse tracker (synchronous hardware positioning)
    function onMouseMove(e) {
      if (e.pointerType === "touch" || e.pointerType === "pen") {
        isTouch = true;
        hideCursor();
        return;
      }
      isTouch = false;
      showCursor(e.clientX, e.clientY);
    }

    window.addEventListener("mousemove", onMouseMove, { passive: true, capture: true });
    window.addEventListener("pointermove", onMouseMove, { passive: true, capture: true });

    // Ensure cursor stays updated during window scroll
    window.addEventListener(
      "scroll",
      () => {
        if (!isVisible && !isTouch) {
          cursorEl.classList.add("is-visible");
          root.classList.add("has-gabbu-cursor");
        }
      },
      { passive: true }
    );

    // Event-delegated hover detection (only triggers on element boundary crossing)
    document.addEventListener(
      "mouseover",
      (e) => {
        if (isTouch) return;
        const target = e.target;
        if (target && target.nodeType === 1) {
          if (target.tagName === "IFRAME") {
            hideCursor();
            return;
          }
          if (target.closest(INTERACTIVE_SELECTOR)) {
            cursorEl.classList.add("is-hover");
          }
        }
      },
      { passive: true, capture: true }
    );

    document.addEventListener(
      "mouseout",
      (e) => {
        if (isTouch) return;
        const target = e.target;
        const related = e.relatedTarget;
        if (target && target.nodeType === 1) {
          if (!related || (related && !related.closest(INTERACTIVE_SELECTOR))) {
            cursorEl.classList.remove("is-hover");
          }
        }
      },
      { passive: true, capture: true }
    );

    // Mouse button press states
    window.addEventListener("mousedown", (e) => {
      if (e.button === 0 && !isTouch) cursorEl.classList.add("is-pressed");
    }, { passive: true, capture: true });

    window.addEventListener("mouseup", () => {
      cursorEl.classList.remove("is-pressed");
    }, { passive: true, capture: true });

    // Window boundary safety (only hide when truly exiting window)
    document.addEventListener("mouseleave", (e) => {
      if (!e.relatedTarget && !e.toElement) {
        hideCursor();
      }
    }, { passive: true });

    document.addEventListener("mouseenter", (e) => {
      if (e.clientX && e.clientY) showCursor(e.clientX, e.clientY);
    }, { passive: true });

    window.addEventListener("blur", () => {
      cursorEl.classList.remove("is-pressed");
    }, { passive: true });
  })();

  /* ==========================================================================
     STORY PAGE LIVING 8-BIT GABBU GUARDIAN (#storyPixelGabbuPerch)
     - Seated directly on the top edge of the main German Shepherd photo frame
     - Subtle breathing cycle, occasional blink & independent ear twitches
     - Subtle head & eye tracking following the user's cursor across the page
     - Page-wide click reaction: cute micro-bark + "Woof!" pixel speech bubble
     ========================================================================== */
  (function initStoryPixelGabbuGuardian() {
    const perchEl = document.getElementById("storyPixelGabbuPerch");
    const canvas = document.getElementById("storyPixelGabbuCanvas");
    const woofBubble = document.getElementById("storyPixelWoofBubble");
    if (!perchEl || !canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.imageSmoothingEnabled = false;

    let targetLookX = 0;
    let targetLookY = 0;
    let smoothLookX = 0;
    let smoothLookY = 0;

    let isBlinking = false;
    let nextBlinkAt = performance.now() + 2600 + Math.random() * 2400;
    let blinkEndAt = 0;

    let earTwitchSide = 0; // -1 left ear, +1 right ear
    let nextEarTwitchAt = performance.now() + 3400 + Math.random() * 3200;
    let earTwitchEndAt = 0;

    let barkUntil = 0;
    let bubbleTimer = null;

    function px(x, y, w, h, color) {
      ctx.fillStyle = color;
      ctx.fillRect(Math.round(x), Math.round(y), Math.round(w), Math.round(h));
    }

    function triggerMicroBark() {
      const now = performance.now();
      barkUntil = now + 380;
      if (woofBubble) {
        woofBubble.classList.add("is-visible");
        if (bubbleTimer) clearTimeout(bubbleTimer);
        bubbleTimer = setTimeout(() => {
          woofBubble.classList.remove("is-visible");
        }, 1050);
      }
    }

    const isTouchDevice =
      window.matchMedia &&
      window.matchMedia("(hover: none), (pointer: coarse)").matches;
    let isPerchVisible = true;

    // Track cursor across the page for subtle head & eye gaze (desktop/fine-pointer only)
    if (!isTouchDevice) {
      window.addEventListener(
        "mousemove",
        (e) => {
          if (!isPerchVisible) return;
          const rect = canvas.getBoundingClientRect();
          const cx = rect.left + rect.width * 0.52;
          const cy = rect.top + rect.height * 0.36;
          const dx = (e.clientX - cx) / Math.max(240, window.innerWidth * 0.36);
          const dy = (e.clientY - cy) / Math.max(200, window.innerHeight * 0.36);
          targetLookX = Math.max(-1, Math.min(1, dx));
          targetLookY = Math.max(-1, Math.min(1, dy));
        },
        { passive: true }
      );
    }

    // Tap / click anywhere on the Story page -> cute micro-bark + "Woof!" bubble
    document.addEventListener(
      "click",
      () => {
        if (isPerchVisible) triggerMicroBark();
      },
      { passive: true }
    );

    let livingRafId = null;

    if ("IntersectionObserver" in window) {
      const perchObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            isPerchVisible = entry.isIntersecting;
            if (isPerchVisible && !livingRafId) {
              livingRafId = window.requestAnimationFrame(renderLiving8BitGabbu);
            }
          });
        },
        { rootMargin: "160px 0px" }
      );
      perchObserver.observe(perchEl);
    } else {
      isPerchVisible = true;
      livingRafId = window.requestAnimationFrame(renderLiving8BitGabbu);
    }

    function renderLiving8BitGabbu(now) {
      if (!isPerchVisible) {
        livingRafId = null;
        return;
      }
      // Smoothly interpolate gaze so head/eyes never snap abruptly
      smoothLookX += (targetLookX - smoothLookX) * 0.14;
      smoothLookY += (targetLookY - smoothLookY) * 0.14;

      // Handle natural blink schedule
      if (!isBlinking && now >= nextBlinkAt) {
        isBlinking = true;
        blinkEndAt = now + 135;
      } else if (isBlinking && now >= blinkEndAt) {
        isBlinking = false;
        nextBlinkAt = now + 3200 + Math.random() * 3400;
      }

      // Handle occasional subtle ear movement
      if (earTwitchSide === 0 && now >= nextEarTwitchAt) {
        earTwitchSide = Math.random() > 0.5 ? 1 : -1;
        earTwitchEndAt = now + 320;
      } else if (earTwitchSide !== 0 && now >= earTwitchEndAt) {
        earTwitchSide = 0;
        nextEarTwitchAt = now + 4200 + Math.random() * 4000;
      }

      const isBarking = now < barkUntil;

      // Subtle breathing cycle (~3.2s period): gentle 1px chest & head rise
      const breathPhase = Math.sin((now / 3200) * Math.PI * 2);
      const breathRise = breathPhase > 0.28 ? -1 : 0;
      const chestExpand = breathPhase > 0.35 ? 1 : 0;

      // Limited, natural head & eye tracking offsets (-1, 0, or +1 px)
      const headDx = Math.round(smoothLookX * 1.15);
      const headDy = Math.round(smoothLookY * 0.75);
      const eyeDx = Math.round(smoothLookX * 1.1);

      ctx.clearRect(0, 0, 48, 44);

      // Palette: Authentic German Shepherd Black, Rich Tan, Warm Gold & Cream
      const blackDeep = "#151820";
      const saddleDark = "#1E222D";
      const saddleMid = "#2B303E";
      const tanShadow = "#A8743E";
      const tanBase = "#D49B5E";
      const tanWarm = "#E4B376";
      const tanCream = "#F1CC98";
      const earInner = "#C28272";
      const tonguePink = "#EC7888";
      const collarBlack = "#12151C";
      const tagGreen = "#68BC48";

      // 1. Subtle contact shadow along the photo frame edge (y = 42..43)
      px(11, 42, 25, 2, "rgba(6, 11, 24, 0.45)");

      // 2. Fluffy German Shepherd tail resting to the left on the frame
      const tailSway = Math.sin((now / 2600) * Math.PI * 2) > 0.55 ? -1 : 0;
      px(7, 39 + tailSway, 6, 3, saddleDark);
      px(6, 40 + tailSway, 3, 2, blackDeep);
      px(8, 41, 5, 1, tanShadow);

      // 3. Seated haunches & dark German Shepherd saddle (stationary on frame)
      px(12, 30, 10, 12, saddleDark);
      px(13, 31, 7, 6, saddleMid);
      px(11, 35, 4, 7, tanShadow);
      px(12, 37, 5, 5, tanBase);

      // 4. Upright chest & shoulders (gently rises 1px with breathing)
      const bodyY = 23 + breathRise;
      px(17, bodyY, 13 + chestExpand, 16 - breathRise, tanBase);
      px(18, bodyY + 2, 11 + chestExpand, 11, tanWarm);
      px(20, bodyY + 3, 7 + chestExpand, 8, tanCream);
      // Dark shoulder mantle on left & right sides of chest
      px(16, bodyY + 1, 2, 9, saddleDark);
      px(29 + chestExpand, bodyY + 2, 2, 8, saddleDark);

      // 5. Black collar & Gabbu's signature green bone tag
      px(18, bodyY + 1, 11, 2, collarBlack);
      px(23, bodyY + 3, 3, 2, tagGreen);
      px(24, bodyY + 2, 1, 1, "#D8C088"); // tiny brass ring

      // 6. Front legs & planted paws resting on the photo frame (y = 35..42)
      px(19, 35, 3, 7, tanBase);
      px(20, 36, 2, 5, tanWarm);
      px(19, 41, 4, 2, tanWarm);
      px(20, 42, 2, 1, blackDeep); // paw nails

      px(26, 35, 3, 7, tanBase);
      px(27, 36, 2, 5, tanWarm);
      px(26, 41, 4, 2, tanWarm);
      px(27, 42, 2, 1, blackDeep); // paw nails

      // 7. German Shepherd Head, Erect Ears, Eyes & Muzzle (tracks cursor subtly)
      const barkLift = isBarking ? -1 : 0;
      const hx = 23 + headDx;
      const hy = 15 + breathRise + headDy + barkLift;

      // Erect Left Ear (viewer's left)
      const earLPerk = (isBarking ? -1 : 0) + (earTwitchSide === -1 ? -1 : 0);
      px(hx - 6, hy - 6 + earLPerk, 4, 7, saddleDark);
      px(hx - 5, hy - 7 + earLPerk, 2, 2, blackDeep); // pointed tip
      px(hx - 5, hy - 5 + earLPerk, 2, 5, earInner);

      // Erect Right Ear (viewer's right)
      const earRPerk = (isBarking ? -1 : 0) + (earTwitchSide === 1 ? -1 : 0);
      px(hx + 3, hy - 6 + earRPerk, 4, 7, saddleDark);
      px(hx + 4, hy - 7 + earRPerk, 2, 2, blackDeep); // pointed tip
      px(hx + 4, hy - 5 + earRPerk, 2, 5, earInner);

      // Head skull & furry tan cheeks
      px(hx - 5, hy - 1, 11, 9, tanBase);
      px(hx - 6, hy + 2, 13, 5, tanWarm);
      // Classic German Shepherd dark forehead crown & widow's peak mask
      px(hx - 3, hy - 1, 7, 2, saddleDark);
      px(hx - 1, hy + 1, 3, 2, saddleDark);

      // Expressive Eyes (blink or track cursor with warm catchlight)
      if (isBlinking) {
        px(hx - 4, hy + 2, 2, 1, saddleDark);
        px(hx + 3, hy + 2, 2, 1, saddleDark);
      } else {
        // Left eye
        px(hx - 4, hy + 1, 2, 2, "#161210");
        px(hx - 4 + Math.max(0, eyeDx), hy + 1, 1, 1, "#FFF7E0");
        // Right eye
        px(hx + 3, hy + 1, 2, 2, "#161210");
        px(hx + 3 + Math.max(0, eyeDx), hy + 1, 1, 1, "#FFF7E0");
      }

      // Dark German Shepherd Muzzle & Wet Black Nose
      const mx = hx + Math.round(smoothLookX * 0.5);
      px(mx - 3, hy + 3, 7, 4, saddleDark);
      px(mx - 2, hy + 3, 5, 3, blackDeep);
      // Nose tip & shine
      px(mx - 1, hy + 3, 3, 2, "#090B0F");
      px(mx, hy + 3, 1, 1, "#464E62");

      // Subtle Happy Smile + Pink Tongue (or cute Bark opening on click)
      if (isBarking) {
        // Open mouth bark reaction
        px(mx - 2, hy + 7, 5, 2, blackDeep);
        px(mx - 1, hy + 7, 3, 2, tonguePink);
      } else {
        // Upturned smile corners + tiny happy pink tongue tip
        px(mx - 3, hy + 6, 1, 1, blackDeep);
        px(mx + 3, hy + 6, 1, 1, blackDeep);
        px(mx - 1, hy + 7, 3, 1, blackDeep);
        px(mx, hy + 7, 2, 2, tonguePink);
      }

      livingRafId = window.requestAnimationFrame(renderLiving8BitGabbu);
    }
  })();

  /* ==========================================================================
     MENU LANDING PAGE LIVING 8-BIT GABBU (#menuPixelGabbuCanvas)
     - Sits atop the menu selection screen
     - Asks “At what location do you need the menu?”
     - Natural breathing cycle, blink, ear twitches, and cursor gaze tracking
     - Tap/click cute micro-bark reaction
     ========================================================================== */
  (function initMenuPixelGabbuGuardian() {
    const canvas = document.getElementById("menuPixelGabbuCanvas");
    const bubble = document.getElementById("menuPixelAskBubble");
    const perch = document.getElementById("menuPixelGabbuPerch");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.imageSmoothingEnabled = false;

    let targetLookX = 0;
    let targetLookY = 0;
    let smoothLookX = 0;
    let smoothLookY = 0;

    let isBlinking = false;
    let nextBlinkAt = performance.now() + 2400 + Math.random() * 2200;
    let blinkEndAt = 0;

    let earTwitchSide = 0;
    let nextEarTwitchAt = performance.now() + 3000 + Math.random() * 3000;
    let earTwitchEndAt = 0;

    let barkUntil = 0;

    function px(x, y, w, h, color) {
      ctx.fillStyle = color;
      ctx.fillRect(Math.round(x), Math.round(y), Math.round(w), Math.round(h));
    }

    function triggerMicroBark() {
      barkUntil = performance.now() + 380;
      if (bubble) {
        bubble.style.transform = "scale(1.08) translateY(-4px)";
        setTimeout(() => {
          bubble.style.transform = "";
        }, 320);
      }
    }

    if (perch) {
      perch.addEventListener("click", triggerMicroBark, { passive: true });
    }

    const isTouch = window.matchMedia && window.matchMedia("(hover: none), (pointer: coarse)").matches;
    if (!isTouch) {
      window.addEventListener("mousemove", (e) => {
        const rect = canvas.getBoundingClientRect();
        const cx = rect.left + rect.width * 0.5;
        const cy = rect.top + rect.height * 0.4;
        const dx = (e.clientX - cx) / Math.max(260, window.innerWidth * 0.35);
        const dy = (e.clientY - cy) / Math.max(200, window.innerHeight * 0.35);
        targetLookX = Math.max(-1, Math.min(1, dx));
        targetLookY = Math.max(-1, Math.min(1, dy));
      }, { passive: true });
    }

    let isMenuPixelVisible = false;
    let menuPixelRafId = null;

    if ("IntersectionObserver" in window) {
      const menuPixelObs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            isMenuPixelVisible = entry.isIntersecting;
            if (isMenuPixelVisible && !menuPixelRafId) {
              menuPixelRafId = window.requestAnimationFrame(renderMenu8BitGabbu);
            }
          });
        },
        { rootMargin: "160px 0px" }
      );
      menuPixelObs.observe(canvas);
    } else {
      isMenuPixelVisible = true;
      menuPixelRafId = window.requestAnimationFrame(renderMenu8BitGabbu);
    }

    function renderMenu8BitGabbu(now) {
      if (!isMenuPixelVisible) {
        menuPixelRafId = null;
        return;
      }
      smoothLookX += (targetLookX - smoothLookX) * 0.14;
      smoothLookY += (targetLookY - smoothLookY) * 0.14;

      if (!isBlinking && now >= nextBlinkAt) {
        isBlinking = true;
        blinkEndAt = now + 135;
      } else if (isBlinking && now >= blinkEndAt) {
        isBlinking = false;
        nextBlinkAt = now + 3200 + Math.random() * 3200;
      }

      if (earTwitchSide === 0 && now >= nextEarTwitchAt) {
        earTwitchSide = Math.random() > 0.5 ? 1 : -1;
        earTwitchEndAt = now + 320;
      } else if (earTwitchSide !== 0 && now >= earTwitchEndAt) {
        earTwitchSide = 0;
        nextEarTwitchAt = now + 4200 + Math.random() * 3800;
      }

      const isBarking = now < barkUntil;
      const breathPhase = Math.sin((now / 3200) * Math.PI * 2);
      const breathRise = breathPhase > 0.28 ? -1 : 0;
      const chestExpand = breathPhase > 0.35 ? 1 : 0;

      const headDx = Math.round(smoothLookX * 1.15);
      const headDy = Math.round(smoothLookY * 0.75);
      const eyeDx = Math.round(smoothLookX * 1.1);

      ctx.clearRect(0, 0, 48, 44);

      const blackDeep = "#151820";
      const saddleDark = "#1E222D";
      const saddleMid = "#2B303E";
      const tanShadow = "#A8743E";
      const tanBase = "#D49B5E";
      const tanWarm = "#E4B376";
      const tanCream = "#F1CC98";
      const earInner = "#C28272";
      const tonguePink = "#EC7888";
      const collarBlack = "#12151C";
      const tagGreen = "#68BC48";

      // Contact shadow
      px(11, 42, 25, 2, "rgba(6, 11, 24, 0.45)");

      // Fluffy tail
      const tailSway = Math.sin((now / 2600) * Math.PI * 2) > 0.55 ? -1 : 0;
      px(7, 39 + tailSway, 6, 3, saddleDark);
      px(6, 40 + tailSway, 3, 2, blackDeep);
      px(8, 41, 5, 1, tanShadow);

      // Seated haunches
      px(12, 30, 10, 12, saddleDark);
      px(13, 31, 7, 6, saddleMid);
      px(11, 35, 4, 7, tanShadow);
      px(12, 37, 5, 5, tanBase);

      px(25, 30, 10, 12, saddleDark);
      px(27, 31, 7, 6, saddleMid);
      px(32, 35, 4, 7, tanShadow);
      px(30, 37, 5, 5, tanBase);

      // Back paws
      px(12, 40, 6, 3, tanWarm);
      px(13, 40, 4, 1, tanCream);
      px(29, 40, 6, 3, tanWarm);
      px(30, 40, 4, 1, tanCream);

      // Chest & Torso
      px(17, 24 + breathRise, 13 + chestExpand, 15, blackDeep);
      px(19, 25 + breathRise, 9, 12, saddleDark);
      px(18, 27 + breathRise, 11, 7, tanShadow);
      px(20, 28 + breathRise, 7, 6, tanBase);
      px(21, 29 + breathRise, 5, 4, tanWarm);

      // Forelegs
      px(19, 31, 3, 10, tanBase);
      px(19, 33, 2, 7, tanWarm);
      px(25, 31, 3, 10, tanBase);
      px(26, 33, 2, 7, tanWarm);

      // Front paws
      px(18, 40, 4, 3, tanWarm);
      px(19, 40, 2, 1, tanCream);
      px(25, 40, 4, 3, tanWarm);
      px(26, 40, 2, 1, tanCream);

      // Head & Neck
      const hx = 23 + headDx;
      const hy = 16 + breathRise + headDy;

      // Collar
      px(hx - 4, hy + 7, 10, 2, collarBlack);
      px(hx, hy + 8, 2, 2, tagGreen);

      // Left Ear
      const earLPerk = (isBarking ? -1 : 0) + (earTwitchSide === -1 ? -1 : 0);
      px(hx - 6, hy - 6 + earLPerk, 4, 7, saddleDark);
      px(hx - 5, hy - 7 + earLPerk, 2, 2, blackDeep);
      px(hx - 5, hy - 5 + earLPerk, 2, 5, earInner);

      // Right Ear
      const earRPerk = (isBarking ? -1 : 0) + (earTwitchSide === 1 ? -1 : 0);
      px(hx + 3, hy - 6 + earRPerk, 4, 7, saddleDark);
      px(hx + 4, hy - 7 + earRPerk, 2, 2, blackDeep);
      px(hx + 4, hy - 5 + earRPerk, 2, 5, earInner);

      // Head
      px(hx - 5, hy - 1, 11, 9, tanBase);
      px(hx - 6, hy + 2, 13, 5, tanWarm);
      px(hx - 3, hy - 1, 7, 2, saddleDark);
      px(hx - 1, hy + 1, 3, 2, saddleDark);

      // Eyes
      if (isBlinking) {
        px(hx - 4, hy + 2, 2, 1, saddleDark);
        px(hx + 3, hy + 2, 2, 1, saddleDark);
      } else {
        px(hx - 4, hy + 1, 2, 2, "#161210");
        px(hx - 4 + Math.max(0, eyeDx), hy + 1, 1, 1, "#FFF7E0");
        px(hx + 3, hy + 1, 2, 2, "#161210");
        px(hx + 3 + Math.max(0, eyeDx), hy + 1, 1, 1, "#FFF7E0");
      }

      // Muzzle
      const mx = hx + Math.round(smoothLookX * 0.5);
      px(mx - 3, hy + 3, 7, 4, saddleDark);
      px(mx - 2, hy + 3, 5, 3, blackDeep);
      px(mx - 1, hy + 3, 3, 2, "#090B0F");
      px(mx, hy + 3, 1, 1, "#464E62");

      // Smile / Bark
      if (isBarking) {
        px(mx - 2, hy + 7, 5, 2, blackDeep);
        px(mx - 1, hy + 7, 3, 2, tonguePink);
      } else {
        px(mx - 3, hy + 6, 1, 1, blackDeep);
        px(mx + 3, hy + 6, 1, 1, blackDeep);
        px(mx - 1, hy + 7, 3, 1, blackDeep);
        px(mx, hy + 7, 2, 2, tonguePink);
      }

      menuPixelRafId = window.requestAnimationFrame(renderMenu8BitGabbu);
    }
  })();

  // --- WHAT'S BREWING: STORYTELLING CONTROLLER & METHOD SWITCHER ---
  (function initWhatsBrewingStory() {
    // 1. Interactive Brewing Method Selector
    const methodBtns = document.querySelectorAll(".method-tab-btn");
    const methodCards = document.querySelectorAll(".method-detail-card");

    if (methodBtns.length && methodCards.length) {
      methodBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
          const target = btn.getAttribute("data-method-target");
          if (!target) return;

          methodBtns.forEach((b) => {
            b.classList.remove("active");
            b.setAttribute("aria-selected", "false");
          });
          methodCards.forEach((c) => c.classList.remove("active"));

          btn.classList.add("active");
          btn.setAttribute("aria-selected", "true");

          const activeCard = document.getElementById(`method-${target}`);
          if (activeCard) {
            activeCard.classList.add("active");
          }
        });
      });
    }

    // 2. Journey Nav Scrollspy & Active Chapter Highlight
    const journeyLinks = document.querySelectorAll(".brew-journey-nav-link");
    const chapters = document.querySelectorAll(".brew-story-chapter");

    if (journeyLinks.length && chapters.length && "IntersectionObserver" in window) {
      const chapterObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const id = entry.target.getAttribute("id");
              if (!id) return;
              journeyLinks.forEach((link) => {
                if (link.getAttribute("href") === `#${id}`) {
                  link.classList.add("active");
                } else {
                  link.classList.remove("active");
                }
              });
            }
          });
        },
        { rootMargin: "-25% 0px -55% 0px", threshold: 0 }
      );

      chapters.forEach((ch) => chapterObserver.observe(ch));
    }
  })();
});







