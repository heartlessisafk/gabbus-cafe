/**
 * ============================================================================
 * GABBU’S PASSPORT — CENTRALIZED EDITABLE DATA & SCROLL INTERACTION ENGINE
 * ============================================================================
 * Everything below in `PASSPORT_CONFIG` is structured for effortless editing
 * by the client or developer without modifying multiple HTML components.
 *
 * Confirmed Business Rules:
 * - 10 Milestone Stamps total (01 to 10)
 * - 5th Stamp  -> ANY BEVERAGE — FREE
 * - 7th Stamp  -> ANY DESSERT — FREE
 * - 10th Stamp -> ANY STARTER — FREE
 * - Zero unconfirmed tiers, points, QR codes, or fees invented.
 */

const PASSPORT_CONFIG = {
  brandName: "GABBU’S",
  brandPillars: "Kitchen | Bar | Bakery",
  workingTagline: "A Dog Behind the Good Times.",

  hero: {
    title: "GABBU’S PASSPORT",
    subtitle: "“A little reward for every good time.”",
    description:
      "You come to Gabbu’s. You have a good time. You collect a stamp. You come back, collect another, and along the way—Gabbu gives a little something back.",
    openCtaText: "OPEN PASSPORT →",
    flowFormula: ["GOOD TIMES", "MEMORIES", "STAMPS", "REWARDS"]
  },

  howItWorksSteps: [
    {
      num: "01",
      title: "GET YOUR PASSPORT",
      desc: "Pick up your physical Gabbu’s Passport on your table visit at Gabbu’s."
    },
    {
      num: "02",
      title: "VISIT GABBU’S",
      desc: "Share a meal, a coffee, a bakery treat, or an evening by the bar."
    },
    {
      num: "03",
      title: "COLLECT STAMPS",
      desc: "Each visit adds an ink stamp to your personal 10-stamp journey."
    },
    {
      num: "04",
      title: "UNLOCK REWARDS",
      desc: "At your 5th, 7th, and 10th stamps, Gabbu treats you at the table."
    }
  ],

  approvalLines: {
    lineOne: "“Good times, approved by Gabbu.”",
    lineTwo: "“Stamped with a little Gabbu luck.”"
  },

  // The Exact 10 Confirmed Stamps & 3 Confirmed Rewards
  stamps: [
    { number: "01", label: "First Visit", note: "The journey begins", isMilestone: false },
    { number: "02", label: "Second Table", note: "Familiar faces", isMilestone: false },
    { number: "03", label: "Third Visit", note: "Good conversation", isMilestone: false },
    { number: "04", label: "Fourth Visit", note: "Almost at your first treat", isMilestone: false },
    {
      number: "05",
      label: "5TH STAMP MILESTONE",
      note: "Reward Unlocked!",
      isMilestone: true,
      reward: {
        stampTitle: "5TH STAMP",
        rewardHeadline: "ANY BEVERAGE — FREE",
        description:
          "Your fifth good time at Gabbu’s unlocks any beverage on the house—from a steaming morning pour-over to an evening bar elixir.",
        approvalLine: "“Good times, approved by Gabbu.”",
        imageSlotLabel: "BEVERAGE IMAGE — IMAGE TO BE PROVIDED",
        imageAssetPath: null // Set path here once FOOD_IMAGES / beverage photo is uploaded
      }
    },
    { number: "06", label: "Sixth Visit", note: "Back in the hills", isMilestone: false },
    {
      number: "07",
      label: "7TH STAMP MILESTONE",
      note: "Reward Unlocked!",
      isMilestone: true,
      reward: {
        stampTitle: "7TH STAMP",
        rewardHeadline: "ANY DESSERT — FREE",
        description:
          "Seven visits into the story. Celebrate with any dessert from the Gabbu’s Bakery & Patisserie counter—completely on the house.",
        approvalLine: "“Stamped with a little Gabbu luck.”",
        imageSlotLabel: "DESSERT IMAGE — IMAGE TO BE PROVIDED",
        imageAssetPath: null // Set path here once FOOD_IMAGES / dessert photo is uploaded
      }
    },
    { number: "08", label: "Eighth Visit", note: "Part of the family", isMilestone: false },
    { number: "09", label: "Ninth Visit", note: "One stamp from the 10th milestone", isMilestone: false },
    {
      number: "10",
      label: "10TH STAMP MILESTONE",
      note: "Full Passport Completed!",
      isMilestone: true,
      reward: {
        stampTitle: "10TH STAMP",
        rewardHeadline: "ANY STARTER — FREE",
        description:
          "Ten chapters of good times completed. Your tenth stamp unlocks any starter from the Gabbu’s Kitchen—a thank-you from Gabbu for being part of our story.",
        approvalLine: "“Thank you for being part of the good times. — Gabbu”",
        imageSlotLabel: "STARTER IMAGE — IMAGE TO BE PROVIDED",
        imageAssetPath: null // Set path here once FOOD_IMAGES / starter photo is uploaded
      }
    }
  ],

  // Verbatim Editable Working Story Behind the Cafe
  storyBehindTheCafe: {
    heading: "STORY BEHIND THE CAFE",
    subheading: "Gabbar — Affectionately Called Gabbu",
    paragraphs: [
      "While we were building our future in the quiet, beautiful hills of Manali, life had a surprise waiting for us... and it came in the form of a dog who changed everything.",
      "The day he showed up, something just felt different.",
      "And strangely enough, that very same day, we closed one of our biggest deals.",
      "From that moment on, he became more than just a coincidence.",
      "He became our luck, our constant.",
      "Since then, he's been there through it all.",
      "Every step. Every little win. Every big moment... It somehow all felt connected to him.",
      "He isn't just a part of our life. In so many ways, he IS life.",
      "The kind of love and loyalty he gives is something you can't explain unless you feel it. For him, his world begins and ends with his family.",
      "Gabbar isn't just a dog to us. He's the soul of this entire journey.",
      "And that's exactly why Gabbu's Café exists. It's not just a café... It's a little piece of his love, his luck, and everything he brought into our lives.",
      "Thank you, Gabbu... for being our quiet miracle, our constant source of love, and the kind of luck that feels like home."
    ]
  },

  locations: {
    manali: {
      name: "Gabbu’s Manali",
      statusBadge: "CURRENT CONFIRMED LOCATION",
      isOpen: true,
      mapUrl: "https://share.google/vINamWOS2OMTypzUA",
      photo: "assets/cafe/manali-exterior-facade.jpg",
      description:
        "Our flagship mountain sanctuary in the hills of Manali—where Gabbu first walked into our lives and where the Passport journey begins today."
    },
    zirakpur: {
      name: "Gabbu’s Zirakpur",
      statusBadge: "UPCOMING • IN PROGRESS",
      isOpen: false,
      mapUrl: null,
      photo: null,
      description:
        "Currently under construction and in progress. Soon bringing the warmth of Gabbu’s Kitchen | Bar | Bakery to Zirakpur."
    }
  },

  finalSection: {
    eyebrow: "GABBU’S PASSPORT",
    headlineLines: ["10 STAMPS.", "GOOD TIMES.", "A LITTLE SOMETHING BACK."],
    primaryCtaText: "GET YOUR PASSPORT →",
    secondaryCtaText: "VISIT GABBU’S →"
  }
};

window.GABBUS_PASSPORT_CONFIG = PASSPORT_CONFIG;

document.addEventListener("DOMContentLoaded", () => {
  /* ========================================================================
     1. STICKY HEADER & MOBILE MENU
     ======================================================================== */
  const siteHeader = document.getElementById("siteHeader");
  const menuToggle = document.getElementById("menuToggle");
  const mobileNavOverlay = document.getElementById("mobileNavOverlay");

  if (siteHeader) {
    window.addEventListener(
      "scroll",
      () => {
        siteHeader.classList.toggle("scrolled", window.scrollY > 40);
      },
      { passive: true }
    );
  }

  if (menuToggle && mobileNavOverlay && !menuToggle.dataset.navBound) {
    menuToggle.dataset.navBound = "1";
    menuToggle.addEventListener("click", () => {
      const isOpen = document.body.classList.toggle("menu-open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      mobileNavOverlay.setAttribute("aria-hidden", String(!isOpen));
    });
    mobileNavOverlay.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        document.body.classList.remove("menu-open");
        menuToggle.setAttribute("aria-expanded", "false");
        mobileNavOverlay.setAttribute("aria-hidden", "true");
      });
    });
  }

  /* ========================================================================
     2. POPULATE EDITABLE STORY PARAGRAPHS FROM CENTRAL DATA OBJECT
     ======================================================================== */
  const storyContainer = document.getElementById("editableGabbuStoryContainer");
  if (storyContainer) {
    storyContainer.innerHTML = PASSPORT_CONFIG.storyBehindTheCafe.paragraphs
      .map((p, idx) => {
        const isHighlight = idx === 0 || idx === 11;
        return `<p class="${isHighlight ? "story-highlight-para" : ""}" style="${
          isHighlight
            ? "font-family: var(--font-display); font-size: 1.35rem; font-style: italic; color: var(--warm-beige);"
            : ""
        }">${p}</p>`;
      })
      .join("");
  }

  /* ========================================================================
     3. PHYSICAL PASSPORT COVER -> "OPEN PASSPORT ->" INTERACTION
     ======================================================================== */
  const openPassportBtns = document.querySelectorAll("[data-action='open-passport']");
  const physicalPassportCover = document.getElementById("physicalPassportCover");
  const openedSpreadModal = document.getElementById("openedPassportSpread");
  const stampJourneyStart = document.getElementById("stamp-journey");

  const triggerOpenPassport = (scrollToJourney = false) => {
    if (typeof window.openPassportBook === "function") {
      window.openPassportBook();
      return;
    }
    if (openedSpreadModal) {
      openedSpreadModal.classList.add("is-open");
    }
    if (physicalPassportCover) {
      physicalPassportCover.style.transform = "translateY(-4px) rotateY(-12deg)";
    }
    if (scrollToJourney && openedSpreadModal) {
      setTimeout(() => {
        openedSpreadModal.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 120);
    }
  };

  openPassportBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      triggerOpenPassport(true);
    });
  });

  if (physicalPassportCover) {
    physicalPassportCover.addEventListener("click", () => triggerOpenPassport(true));
  }

  /* ========================================================================
     4. BI-DIRECTIONAL SCROLL-TRIGGERED STAMP JOURNEY (STAMPS 01 -> 10)
     Scrolling DOWN reveals and stamps 01..10 & unlocks 5th, 7th, 10th rewards.
     Scrolling UP naturally reverses the state.
     ======================================================================== */
  const stampSlots = document.querySelectorAll(".passport-stamp-slot");
  const rewardBanners = document.querySelectorAll(".reward-unlock-banner");
  const hudDots = document.querySelectorAll(".hud-stamp-dot");
  const miniCells = document.querySelectorAll(".mini-stamp-cell");
  const hudReadout = document.getElementById("hudStatusReadout");

  const syncStampStateUpTo = (highestStampNum) => {
    // Update HUD dots (01 - 10)
    hudDots.forEach((dot) => {
      const num = parseInt(dot.getAttribute("data-stamp-num"), 10);
      dot.classList.toggle("stamped-active", num <= highestStampNum);
    });

    // Update Mini 10-Stamp Ledger inside Open Passport Spread
    miniCells.forEach((cell) => {
      const num = parseInt(cell.getAttribute("data-mini-stamp"), 10);
      cell.classList.toggle("stamped", num <= highestStampNum);
    });

    // Update Status Readout
    if (hudReadout) {
      if (highestStampNum === 0) {
        hudReadout.textContent = "Scroll Down to Begin Stamp Journey (00 / 10)";
      } else if (highestStampNum === 5) {
        hudReadout.textContent = "★ 5TH STAMP UNLOCKED: ANY BEVERAGE — FREE (05 / 10)";
      } else if (highestStampNum === 7) {
        hudReadout.textContent = "★ 7TH STAMP UNLOCKED: ANY DESSERT — FREE (07 / 10)";
      } else if (highestStampNum >= 10) {
        hudReadout.textContent = "★ 10TH STAMP COMPLETED: ANY STARTER — FREE (10 / 10)";
      } else {
        hudReadout.textContent = `Stamped ${String(highestStampNum).padStart(2, "0")} / 10 — Good Times in Progress`;
      }
    }
  };

  const evaluateScrollStampPositions = () => {
    const triggerLine = window.innerHeight * 0.72;
    let highestStamped = 0;

    stampSlots.forEach((slot) => {
      const rect = slot.getBoundingClientRect();
      const stampNum = parseInt(slot.getAttribute("data-stamp-slot"), 10);

      // Reveal slot slightly before it gets stamped
      if (rect.top < window.innerHeight * 0.88) {
        slot.classList.add("slot-visible");
      } else {
        slot.classList.remove("slot-visible");
      }

      // Ink-stamp when crossing the viewport trigger line; reverse when scrolling back up
      if (rect.top < triggerLine) {
        slot.classList.add("is-stamped");
        if (stampNum > highestStamped) {
          highestStamped = stampNum;
        }
      } else {
        slot.classList.remove("is-stamped");
      }
    });

    // Unlock or reverse the 3 confirmed reward banners (5th, 7th, 10th)
    rewardBanners.forEach((banner) => {
      const requiredStamp = parseInt(banner.getAttribute("data-reward-milestone"), 10);
      const rect = banner.getBoundingClientRect();
      if (highestStamped >= requiredStamp || rect.top < window.innerHeight * 0.7) {
        banner.classList.add("reward-unlocked");
      } else {
        banner.classList.remove("reward-unlocked");
      }
    });

    syncStampStateUpTo(highestStamped);
  };

  let passportScrollTicking = false;
  window.addEventListener("scroll", () => {
    if (!passportScrollTicking) {
      passportScrollTicking = true;
      window.requestAnimationFrame(() => {
        passportScrollTicking = false;
        evaluateScrollStampPositions();
      });
    }
  }, { passive: true });
  evaluateScrollStampPositions();

  // Allow clicking any HUD dot or Stamp Slot to scroll smoothly to that milestone
  hudDots.forEach((dot) => {
    dot.addEventListener("click", () => {
      const num = parseInt(dot.getAttribute("data-stamp-num"), 10);
      const targetSlot = document.querySelector(`.passport-stamp-slot[data-stamp-slot="${num}"]`);
      const targetReward = document.querySelector(`.reward-unlock-banner[data-reward-milestone="${num}"]`);
      const targetEl = targetSlot || targetReward;
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      syncStampStateUpTo(num);
    });
  });

  stampSlots.forEach((slot) => {
    slot.addEventListener("click", () => {
      slot.classList.toggle("is-stamped");
      const num = parseInt(slot.getAttribute("data-stamp-slot"), 10);
      syncStampStateUpTo(num);
    });
  });
});
