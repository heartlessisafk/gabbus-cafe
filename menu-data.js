/**
 * ============================================================================
 * GABBU’S — Kitchen | Bar | Bakery
 * ILLUSTRATED VISUAL MENU LEDGER (125 INDIVIDUAL ITEM PHOTOGRAPHS)
 * ============================================================================
 * Every single drink and food item has its own dedicated, unique studio
 * photograph in `assets/menu-items/<item.id>.jpg` (125 unique files, zero
 * reused images, consistent dark walnut & golden-hour studio aesthetic).
 */

const GABBUS_VERIFIED_MENU = {
  customizationPolicy: {
    appliesTo: ["hot-coffee", "cold-coffee", "hot-chocolate", "matcha", "taro-drinks"],
    rawText: "Customize any milk beverage with Oat / Almond / Soy milk @ ₹80",
    addonsTitle: "Add-ons",
    addons: [
      { id: "addon-hazelnut", name: "Hazelnut", price: 50, displayPrice: "+₹50" },
      { id: "addon-caramel", name: "Caramel", price: 50, displayPrice: "+₹50" },
      { id: "addon-vanilla", name: "Vanilla", price: 50, displayPrice: "+₹50" },
      { id: "addon-marshmallow", name: "Marshmallow", price: 50, displayPrice: "+₹50" }
    ]
  },

  brewingCategories: [
    {
      id: "hot-coffee",
      sectionGroup: "beverages",
      index: "01",
      title: "Hot Coffee",
      pillar: "THE ESPRESSO & ROASTERY BAR",
      hasMilkAddons: true,
      spatialQuote: "Pulled fresh on our custom matte-navy espresso bar from high-grown Arabica beans.",
      items: [
        { id: "hc-01", name: "Espresso", price: 130, displayPrice: "₹130", highlight: true, badge: "PURE EXTRACTION", desc: "Single-shot concentrated espresso with rich golden-brown hazelnut crema.", image: "assets/menu-items/hc-01.jpg" },
        { id: "hc-02", name: "Doppio", price: 180, displayPrice: "₹180", highlight: false, badge: "DOUBLE SHOT", desc: "Double extraction of freshly ground mountain roast served in warm porcelain.", image: "assets/menu-items/hc-02.jpg" },
        { id: "hc-03", name: "Americano", price: 170, displayPrice: "₹170", highlight: false, desc: "Double espresso lengthened with hot spring water for a clean, aromatic cup.", image: "assets/menu-items/hc-03.jpg" },
        { id: "hc-04", name: "Cortado", price: 190, displayPrice: "₹190", highlight: true, badge: "BARISTA FAVORITE", desc: "Equal parts rich espresso and silky steamed milk served in fluted glass.", image: "assets/menu-items/hc-04.jpg" },
        { id: "hc-05", name: "Macchiato", price: 180, displayPrice: "₹180", highlight: false, desc: "Bold espresso marked with a delicate dollop of velvety steamed microfoam.", image: "assets/menu-items/hc-05.jpg" },
        { id: "hc-06", name: "Cappuccino", price: 200, displayPrice: "₹200", highlight: true, badge: "HOUSE CLASSIC", desc: "Balanced espresso, textured warm milk, and deep velvety rosette foam.", image: "assets/menu-items/hc-06.jpg" },
        { id: "hc-07", name: "Cafe latte", price: 220, displayPrice: "₹220", highlight: false, desc: "Smooth espresso folded into generous steamed milk with a light cream crown.", image: "assets/menu-items/hc-07.jpg" },
        { id: "hc-08", name: "Flat white", price: 220, displayPrice: "₹220", highlight: false, desc: "Double ristretto topped with glossy, micro-textured milk poured into ceramic.", image: "assets/menu-items/hc-08.jpg" },
        { id: "hc-09", name: "Cafe mocha", price: 250, displayPrice: "₹250", highlight: false, desc: "Espresso blended with dark artisanal cocoa, steamed milk, and chocolate dusting.", image: "assets/menu-items/hc-09.jpg" },
        { id: "hc-10", name: "Hazelnut latte", price: 250, displayPrice: "₹250", highlight: false, desc: "Aromatic roasted hazelnut infusion folded into velvety espresso and milk.", image: "assets/menu-items/hc-10.jpg" },
        { id: "hc-11", name: "Caramel latte", price: 250, displayPrice: "₹250", highlight: false, desc: "Silky latte finished with slow-cooked golden butterscotch caramel.", image: "assets/menu-items/hc-11.jpg" },
        { id: "hc-12", name: "Hemp coffee", price: 270, displayPrice: "₹270", highlight: true, badge: "MANALI SIGNATURE", desc: "Our signature Himalayan toasted hemp-seed and espresso infusion in dark stoneware.", image: "assets/menu-items/hc-12.jpg" },
        { id: "hc-13", name: "Vietnamese coffee", price: 260, displayPrice: "₹260", highlight: true, badge: "CONDENSED POUR", desc: "Intense slow-drip dark roast layered over sweet condensed milk.", image: "assets/menu-items/hc-13.jpg" },
        { id: "hc-14", name: "Biscoff latte", price: 280, displayPrice: "₹280", highlight: true, badge: "SPICED CARAMEL", desc: "Creamy espresso latte swirled with caramelized Lotus Biscoff spread and crumb.", image: "assets/menu-items/hc-14.jpg" }
      ]
    },
    {
      id: "cold-coffee",
      sectionGroup: "beverages",
      index: "02",
      title: "Cold Coffee",
      pillar: "ICED ESPRESSO & FRAPPE BAR",
      hasMilkAddons: true,
      spatialQuote: "Chilled over crystal mountain ice and blended to a rich, velvety froth.",
      items: [
        { id: "cc-01", name: "Iced Americano", price: 200, displayPrice: "₹200", highlight: false, desc: "Double espresso poured over crystal ice for a crisp, refreshing finish.", image: "assets/menu-items/cc-01.jpg" },
        { id: "cc-02", name: "Cold coffee", price: 240, displayPrice: "₹240", highlight: true, badge: "CAFE FAVORITE", desc: "Classic café-style thick blended cold coffee with a frothy cream collar.", image: "assets/menu-items/cc-02.jpg" },
        { id: "cc-03", name: "Hazelnut cold coffee", price: 270, displayPrice: "₹270", highlight: false, desc: "Chilled espresso blended with roasted hazelnut notes and creamy milk.", image: "assets/menu-items/cc-03.jpg" },
        { id: "cc-04", name: "Caramel cold coffee", price: 270, displayPrice: "₹270", highlight: false, desc: "Frosty cold coffee ribboned with rich salted golden caramel.", image: "assets/menu-items/cc-04.jpg" },
        { id: "cc-05", name: "Iced mocha", price: 270, displayPrice: "₹270", highlight: false, desc: "Chilled espresso and dark Belgian chocolate over ice with cocoa swirl.", image: "assets/menu-items/cc-05.jpg" },
        { id: "cc-06", name: "Vietnamese cold coffee", price: 280, displayPrice: "₹280", highlight: true, badge: "ICED SIGNATURE", desc: "Bold dark roast over cracked ice with a sweet condensed milk cloud.", image: "assets/menu-items/cc-06.jpg" },
        { id: "cc-07", name: "Biscoff cold coffee", price: 300, displayPrice: "₹300", highlight: true, badge: "INDULGENT", desc: "Thick iced coffee blended with caramelized Biscoff butter and cookie crumble.", image: "assets/menu-items/cc-07.jpg" }
      ]
    },
    {
      id: "affogato",
      sectionGroup: "beverages",
      index: "03",
      title: "Affogato",
      pillar: "ESPRESSO OVER ARTISANAL GELATO",
      hasMilkAddons: false,
      spatialQuote: "Hot double-shot espresso poured tableside over cold artisanal gelato.",
      items: [
        { id: "af-01", name: "Classic vanilla affogato", price: 240, displayPrice: "₹240", highlight: true, badge: "ITALIAN CLASSIC", desc: "Madagascar vanilla bean gelato drowned in a steaming shot of house espresso.", image: "assets/menu-items/af-01.jpg" },
        { id: "af-02", name: "Hazelnut affogato", price: 260, displayPrice: "₹260", highlight: false, desc: "Creamy praline gelato topped with hot espresso and toasted hazelnut nibs.", image: "assets/menu-items/af-02.jpg" },
        { id: "af-03", name: "Chocolate affogato", price: 260, displayPrice: "₹260", highlight: false, desc: "Dark chocolate gelato melted under fresh hot espresso and cocoa curls.", image: "assets/menu-items/af-03.jpg" }
      ]
    },
    {
      id: "hot-chocolate",
      sectionGroup: "beverages",
      index: "04",
      title: "Hot Chocolate",
      pillar: "ARTISANAL CACAO & HEARTH",
      hasMilkAddons: true,
      spatialQuote: "Slow-whisked couverture cacao crafted for misty Manali evenings.",
      items: [
        { id: "hch-01", name: "Classic hot chocolate", price: 250, displayPrice: "₹250", highlight: true, badge: "WINTER WARMER", desc: "Velvety single-origin dark hot chocolate steamed to a rich molten finish.", image: "assets/menu-items/hch-01.jpg" },
        { id: "hch-02", name: "Marshmallow hot chocolate", price: 280, displayPrice: "₹280", highlight: true, badge: "GABBU'S PICK", desc: "Thick artisanal hot cacao crowned with flame-toasted pillowy marshmallows.", image: "assets/menu-items/hch-02.jpg" },
        { id: "hch-03", name: "Hazelnut hot chocolate", price: 280, displayPrice: "₹280", highlight: false, desc: "Rich dark cacao infused with roasted Piedmont-style hazelnut cream.", image: "assets/menu-items/hch-03.jpg" }
      ]
    },
    {
      id: "matcha",
      sectionGroup: "beverages",
      index: "05",
      title: "Matcha",
      pillar: "CEREMONIAL UJI GREEN TEA BAR",
      hasMilkAddons: true,
      spatialQuote: "Bamboo-whisked ceremonial grade Japanese green tea, served warm or layered over ice.",
      items: [
        { id: "mt-01", name: "Hot Matcha Latte", price: 280, displayPrice: "₹280", highlight: true, badge: "CEREMONIAL GRADE", desc: "Hand-whisked emerald Uji matcha folded into silky micro-steamed milk.", image: "assets/menu-items/mt-01.jpg" },
        { id: "mt-02", name: "Iced Matcha Latte", price: 300, displayPrice: "₹300", highlight: true, badge: "LAYERED POUR", desc: "Vibrant ceremonial matcha floated over chilled milk and crystal ice.", image: "assets/menu-items/mt-02.jpg" },
        { id: "mt-03", name: "Vanilla Matcha", price: 320, displayPrice: "₹320", highlight: false, desc: "Smooth ceremonial matcha sweetened with aromatic Madagascar vanilla bean.", image: "assets/menu-items/mt-03.jpg" },
        { id: "mt-04", name: "Hazelnut Matcha", price: 320, displayPrice: "₹320", highlight: false, desc: "Earthy green matcha paired with warm roasted hazelnut praline notes.", image: "assets/menu-items/mt-04.jpg" },
        { id: "mt-05", name: "Strawberry Matcha", price: 340, displayPrice: "₹340", highlight: true, badge: "BERRY LAYERED", desc: "Three-layer visual pour of house strawberry compote, cold milk, and emerald matcha.", image: "assets/menu-items/mt-05.jpg" },
        { id: "mt-06", name: "Blueberry Matcha", price: 350, displayPrice: "₹350", highlight: false, desc: "Wild mountain blueberry reduction topped with chilled milk and whisked matcha.", image: "assets/menu-items/mt-06.jpg" },
        { id: "mt-07", name: "Mango Matcha", price: 340, displayPrice: "₹340", highlight: false, desc: "Sweet golden Alphonso mango puree layered beneath crisp ceremonial matcha.", image: "assets/menu-items/mt-07.jpg" }
      ]
    },
    {
      id: "taro-drinks",
      sectionGroup: "beverages",
      index: "06",
      title: "Taro Drinks",
      pillar: "VELVET PURPLE TARO ROOT CRAFT",
      hasMilkAddons: true,
      spatialQuote: "Naturally sweet, nutty lavender-purple taro root whisked into creamy signatures.",
      items: [
        { id: "tr-01", name: "Hot Taro Latte", price: 280, displayPrice: "₹280", highlight: false, desc: "Steaming velvety purple taro root latte with a delicate nutty sweetness.", image: "assets/menu-items/tr-01.jpg" },
        { id: "tr-02", name: "Iced Taro Latte", price: 300, displayPrice: "₹300", highlight: true, badge: "LAVENDER POUR", desc: "Chilled pastel-purple taro cream layered over crystal mountain ice.", image: "assets/menu-items/tr-02.jpg" },
        { id: "tr-03", name: "Vanilla Taro", price: 320, displayPrice: "₹320", highlight: false, desc: "Creamy purple taro infused with fragrant vanilla bean cream.", image: "assets/menu-items/tr-03.jpg" },
        { id: "tr-04", name: "Hazelnut Taro", price: 320, displayPrice: "₹320", highlight: false, desc: "Velvety taro blended with roasted hazelnut notes and textured milk.", image: "assets/menu-items/tr-04.jpg" },
        { id: "tr-05", name: "Strawberry Taro", price: 340, displayPrice: "₹340", highlight: true, badge: "TWO-TONE CRAFT", desc: "Ruby strawberry fruit puree layered beneath silky lavender taro cream.", image: "assets/menu-items/tr-05.jpg" },
        { id: "tr-06", name: "Boba Taro", price: 360, displayPrice: "₹360", highlight: true, badge: "CHEWY PEARLS", desc: "Iced purple taro milk tea served over brown-sugar tapioca boba pearls.", image: "assets/menu-items/tr-06.jpg" }
      ]
    },
    {
      id: "shakes",
      sectionGroup: "beverages",
      index: "07",
      title: "Shakes",
      pillar: "CLASSIC PARLOR MILKSHAKES",
      hasMilkAddons: false,
      spatialQuote: "Spun thick with rich dairy gelato and orchard fruit reductions.",
      items: [
        { id: "sh-01", name: "Vanilla shake", price: 220, displayPrice: "₹220", highlight: false, desc: "Classic thick milkshake spun with Madagascar vanilla bean ice cream.", image: "assets/menu-items/sh-01.jpg" },
        { id: "sh-02", name: "Strawberry shake", price: 230, displayPrice: "₹230", highlight: false, desc: "Blended with ripe red strawberries, cream, and fresh berry compote.", image: "assets/menu-items/sh-02.jpg" },
        { id: "sh-03", name: "Chocolate shake", price: 240, displayPrice: "₹240", highlight: true, badge: "RICH CACAO", desc: "Double-chocolate gelato shake finished with dark fudge drizzle.", image: "assets/menu-items/sh-03.jpg" },
        { id: "sh-04", name: "Butterscotch shake", price: 240, displayPrice: "₹240", highlight: false, desc: "Creamy caramel-butterscotch shake topped with golden praline crunch.", image: "assets/menu-items/sh-04.jpg" },
        { id: "sh-05", name: "Blackcurrant shake", price: 250, displayPrice: "₹250", highlight: false, desc: "Tangy-sweet purple blackcurrant berry shake spun to a velvety finish.", image: "assets/menu-items/sh-05.jpg" },
        { id: "sh-06", name: "Mango shake", price: 240, displayPrice: "₹240", highlight: true, badge: "SEASONAL CROWN", desc: "Thick Alphonso mango pulp blended with chilled cream and vanilla gelato.", image: "assets/menu-items/sh-06.jpg" },
        { id: "sh-07", name: "Blueberry shake", price: 260, displayPrice: "₹260", highlight: false, desc: "Wild blueberry compote blended into a rich, violet-hued cream shake.", image: "assets/menu-items/sh-07.jpg" }
      ]
    },
    {
      id: "premium-shakes",
      sectionGroup: "beverages",
      index: "08",
      title: "Premium Shakes",
      pillar: "CONFECTIONERY & PATISSERIE SHAKES",
      hasMilkAddons: false,
      spatialQuote: "Decadent dessert shakes blended with hazelnut pralines, cookies, and fudge brownies.",
      items: [
        { id: "ps-01", name: "KitKat shake", price: 270, displayPrice: "₹270", highlight: false, desc: "Crunchy chocolate wafer bars spun with chocolate gelato and whipped cream.", image: "assets/menu-items/ps-01.jpg" },
        { id: "ps-02", name: "Oreo shake", price: 270, displayPrice: "₹270", highlight: true, badge: "CROWD FAVORITE", desc: "Crushed dark cocoa cookies blended into sweet vanilla-cream gelato.", image: "assets/menu-items/ps-02.jpg" },
        { id: "ps-03", name: "Nutella shake", price: 310, displayPrice: "₹310", highlight: true, badge: "HAZELNUT FUDGE", desc: "Generous spoonfuls of roasted hazelnut Nutella spun into a thick glass.", image: "assets/menu-items/ps-03.jpg" },
        { id: "ps-04", name: "Brownie shake", price: 300, displayPrice: "₹300", highlight: false, desc: "Warm bakery walnut chocolate brownie chunks blended with dark chocolate gelato.", image: "assets/menu-items/ps-04.jpg" },
        { id: "ps-05", name: "Ferrero Rocher shake", price: 350, displayPrice: "₹350", highlight: true, badge: "LUXURY POUR", desc: "Golden hazelnut-praline Ferrero Rocher confections spun into rich chocolate cream.", image: "assets/menu-items/ps-05.jpg" }
      ]
    },
    {
      id: "cold-mocktails",
      sectionGroup: "beverages",
      index: "09",
      title: "Cold Mocktails",
      pillar: "THE BAR • BOTANICAL & CITRUS ELIXIRS",
      hasMilkAddons: false,
      spatialQuote: "Sparkling zero-proof botanical infusions crafted at the evening bar.",
      items: [
        { id: "cm-01", name: "Blue Lagoon", price: 220, displayPrice: "₹220", highlight: true, badge: "ELECTRIC CITRUS", desc: "Sparkling Curaçao blue citrus elixir with fresh lime juice and mint.", image: "assets/menu-items/cm-01.jpg" },
        { id: "cm-02", name: "Masala Cola", price: 180, displayPrice: "₹180", highlight: false, desc: "Chilled cola spiked with roasted cumin, black salt, ginger, and fresh lime.", image: "assets/menu-items/cm-02.jpg" },
        { id: "cm-03", name: "Watermelon cooler", price: 220, displayPrice: "₹220", highlight: false, desc: "Fresh-pressed ruby watermelon muddled with garden mint and Himalayan salt.", image: "assets/menu-items/cm-03.jpg" },
        { id: "cm-04", name: "Peach Passion", price: 230, displayPrice: "₹230", highlight: true, badge: "TROPICAL POUR", desc: "Sun-ripened orchard peach and tangy passionfruit fizz over cracked ice.", image: "assets/menu-items/cm-04.jpg" },
        { id: "cm-05", name: "Sunset Cooler", price: 250, displayPrice: "₹250", highlight: true, badge: "DUSK SIGNATURE", desc: "Layered citrus orange, pineapple, and ruby grenadine inspired by Manali dusk.", image: "assets/menu-items/cm-05.jpg" },
        { id: "cm-06", name: "Green Apple Soda", price: 220, displayPrice: "₹220", highlight: false, desc: "Crisp Himachal green apple reduction topped with sparkling soda and lime.", image: "assets/menu-items/cm-06.jpg" },
        { id: "cm-07", name: "Kiwi Cooler", price: 230, displayPrice: "₹230", highlight: false, desc: "Crushed emerald kiwi fruit shaken with lime juice, mint, and sparkling water.", image: "assets/menu-items/cm-07.jpg" }
      ]
    },
    {
      id: "mojito",
      sectionGroup: "beverages",
      index: "10",
      title: "Mojito",
      pillar: "MUDDLED MINT & LIME REFRESHERS",
      hasMilkAddons: false,
      spatialQuote: "Hand-muddled garden mint, lime wedges, and crushed ice.",
      items: [
        { id: "mj-01", name: "Virgin Mojito", price: 200, displayPrice: "₹200", highlight: true, badge: "HOUSE REFRESH", desc: "Classic muddled lime wedges, fresh mint leaves, cane sugar, and sparkling fizz.", image: "assets/menu-items/mj-01.jpg" },
        { id: "mj-02", name: "Watermelon Mojito", price: 230, displayPrice: "₹230", highlight: false, desc: "Sweet pressed watermelon muddled with fresh mint leaves and lime.", image: "assets/menu-items/mj-02.jpg" },
        { id: "mj-03", name: "Green Apple Mojito", price: 230, displayPrice: "₹230", highlight: false, desc: "Tart green apple syrup muddled with lime wedges and garden mint.", image: "assets/menu-items/mj-03.jpg" },
        { id: "mj-04", name: "Passion Fruit Mojito", price: 250, displayPrice: "₹250", highlight: true, badge: "EXOTIC MINT", desc: "Aromatic tropical passionfruit seeds and pulp muddled with mint and lime.", image: "assets/menu-items/mj-04.jpg" },
        { id: "mj-05", name: "Strawberry Mojito", price: 240, displayPrice: "₹240", highlight: false, desc: "Crushed red strawberries muddled with lime juice, mint sprigs, and soda.", image: "assets/menu-items/mj-05.jpg" },
        { id: "mj-06", name: "Blueberry Mojito", price: 260, displayPrice: "₹260", highlight: false, desc: "Plump blueberries smashed with fresh mint, lime, and sparkling mountain water.", image: "assets/menu-items/mj-06.jpg" }
      ]
    },
    {
      id: "juices",
      sectionGroup: "beverages",
      index: "11",
      title: "Juices",
      pillar: "COLD-PRESSED ORCHARD JUICES",
      hasMilkAddons: false,
      spatialQuote: "100% fresh-pressed seasonal fruits with zero added syrups.",
      items: [
        { id: "ju-01", name: "Orange juice", price: 220, displayPrice: "₹220", highlight: false, desc: "Freshly squeezed sweet Valencia & Kinnow oranges served chilled.", image: "assets/menu-items/ju-01.jpg" },
        { id: "ju-02", name: "Watermelon juice", price: 180, displayPrice: "₹180", highlight: true, badge: "PURE PRESSED", desc: "Cold-pressed ruby watermelon juice with a whisper of black salt.", image: "assets/menu-items/ju-02.jpg" },
        { id: "ju-03", name: "Pineapple juice", price: 210, displayPrice: "₹210", highlight: false, desc: "Golden tropical pineapple pressed fresh to order.", image: "assets/menu-items/ju-03.jpg" },
        { id: "ju-04", name: "Pomegranate juice", price: 260, displayPrice: "₹260", highlight: true, badge: "ANTIOXIDANT", desc: "Deep ruby cold-pressed pomegranate arils rich in natural vitality.", image: "assets/menu-items/ju-04.jpg" },
        { id: "ju-05", name: "Mixed fruit juice", price: 230, displayPrice: "₹230", highlight: false, desc: "Orchard blend of apple, orange, pineapple, and pomegranate.", image: "assets/menu-items/ju-05.jpg" },
        { id: "ju-06", name: "Fresh Lime Water", price: 110, displayPrice: "₹110", highlight: false, desc: "Freshly squeezed hill lemons in chilled water—sweet, salted, or mixed.", image: "assets/menu-items/ju-06.jpg" },
        { id: "ju-07", name: "Fresh Lime Soda", price: 140, displayPrice: "₹140", highlight: false, desc: "Sparkling club soda with freshly pressed lime juice and mint.", image: "assets/menu-items/ju-07.jpg" }
      ]
    },
    {
      id: "smoothie",
      sectionGroup: "beverages",
      index: "12",
      title: "Smoothie",
      pillar: "WHOLESOME YOGURT & NUT SMOOTHIES",
      hasMilkAddons: false,
      spatialQuote: "Wholesome mountain berries, roasted nuts, and dry fruits blended thick.",
      items: [
        { id: "sm-01", name: "Blueberry smoothie", price: 280, displayPrice: "₹280", highlight: false, desc: "Wild blueberries blended thick with Greek yogurt and mountain honey.", image: "assets/menu-items/sm-01.jpg" },
        { id: "sm-02", name: "Strawberry smoothie", price: 280, displayPrice: "₹280", highlight: false, desc: "Sun-ripened strawberries spun with cultured yogurt and chia seeds.", image: "assets/menu-items/sm-02.jpg" },
        { id: "sm-03", name: "Dry fruit smoothie", price: 360, displayPrice: "₹360", highlight: true, badge: "HIMALAYAN NUT", desc: "Rich blend of almonds, cashews, pistachios, figs, and saffron milk.", image: "assets/menu-items/sm-03.jpg" },
        { id: "sm-04", name: "Banana dry fruit smoothie", price: 350, displayPrice: "₹350", highlight: false, desc: "Creamy ripe banana blended with roasted almonds, walnuts, and honey.", image: "assets/menu-items/sm-04.jpg" },
        { id: "sm-05", name: "Peanut butter smoothie", price: 350, displayPrice: "₹350", highlight: true, badge: "PROTEIN BLEND", desc: "Roasted creamy peanut butter, banana, and rolled oats power smoothie.", image: "assets/menu-items/sm-05.jpg" },
        { id: "sm-06", name: "Mixed berry smoothie", price: 330, displayPrice: "₹330", highlight: false, desc: "Blueberries, strawberries, and blackcurrants whipped with creamy yogurt.", image: "assets/menu-items/sm-06.jpg" }
      ]
    },
    {
      id: "tea",
      sectionGroup: "beverages",
      index: "13",
      title: "Tea",
      pillar: "THE TEA ROOM • STEEPED & ICED INFUSIONS",
      hasMilkAddons: false,
      spatialQuote: "Steaming mountain chai, ginger-lemon-honey infusions, and crisp botanical iced teas.",
      items: [
        { id: "te-01", name: "Chai Tea", price: 60, displayPrice: "₹60", highlight: true, badge: "MOUNTAIN CLASSIC", desc: "Traditional slow-simmered Assam tea brewed with crushed ginger and green cardamom.", image: "assets/menu-items/te-01.jpg" },
        { id: "te-02", name: "Ginger Lemon Honey Tea", price: 150, displayPrice: "₹150", highlight: true, badge: "HILL REMEDY", desc: "Soothing mountain infusion of fresh ginger root, wildflower honey, and lemon.", image: "assets/menu-items/te-02.jpg" },
        { id: "te-03", name: "Black Tea", price: 50, displayPrice: "₹50", highlight: false, desc: "Pure whole-leaf Himalayan black tea steeped brisk and aromatic.", image: "assets/menu-items/te-03.jpg" },
        { id: "te-04", name: "Lemon Honey Mint Tea", price: 160, displayPrice: "₹160", highlight: false, desc: "Fragrant garden mint leaves steeped with lemon zest and pure honey.", image: "assets/menu-items/te-04.jpg" },
        { id: "te-05", name: "Classic Iced Tea", price: 180, displayPrice: "₹180", highlight: false, desc: "Cold-brewed black tea shaken with cane sugar, lemon wheel, and mint.", image: "assets/menu-items/te-05.jpg" },
        { id: "te-06", name: "Peach Iced Tea", price: 230, displayPrice: "₹230", highlight: true, badge: "ORCHARD COOLER", desc: "Amber iced tea infused with sweet orchard peach nectar over crystal ice.", image: "assets/menu-items/te-06.jpg" },
        { id: "te-07", name: "Lemon Iced tea", price: 200, displayPrice: "₹200", highlight: false, desc: "Zesty hill-lemon iced tea served tall over cracked ice and fresh mint.", image: "assets/menu-items/te-07.jpg" }
      ]
    },
    {
      id: "add-ons",
      sectionGroup: "beverages",
      index: "14",
      title: "Add-Ons",
      pillar: "CRAFT SYRUPS & TOPPINGS",
      hasMilkAddons: true,
      spatialQuote: "Finish any hot coffee, cacao, or latte with house syrups and toasted marshmallows.",
      items: [
        { id: "ad-01", name: "Hazelnut", price: 50, displayPrice: "₹50", highlight: false, badge: "SYRUP ADD-ON", desc: "Rich roasted hazelnut praline syrup shot for any coffee or chocolate.", image: "assets/menu-items/ad-01.jpg" },
        { id: "ad-02", name: "Caramel", price: 50, displayPrice: "₹50", highlight: false, badge: "SYRUP ADD-ON", desc: "Warm golden butterscotch caramel swirl added to your cup.", image: "assets/menu-items/ad-02.jpg" },
        { id: "ad-03", name: "Vanilla", price: 50, displayPrice: "₹50", highlight: false, badge: "SYRUP ADD-ON", desc: "Aromatic Madagascar vanilla bean infusion for hot or iced drinks.", image: "assets/menu-items/ad-03.jpg" },
        { id: "ad-04", name: "Marshmallow", price: 50, displayPrice: "₹50", highlight: true, badge: "TOASTED TOPPING", desc: "Crown of flame-toasted pillowy marshmallows melted over hot cocoa or mocha.", image: "assets/menu-items/ad-04.jpg" }
      ]
    }
  ],

  /**
   * COMPLETE KITCHEN, BAKERY & PET FOOD CHAPTERS (ALL 18 CULINARY SECTIONS)
   * Every single dish has its own unique AI studio photograph (`assets/menu-items/fd-01.jpg` .. `fd-36.jpg`).
   */
  kitchenCategoriesRegistry: [
    {
        "id": "salads",
        "sectionGroup": "food",
        "index": "01",
        "parentHeader": "APPETIZER",
        "title": "Salads",
        "pillar": "APPETIZER • FRESH ORCHARD & MEDITERRANEAN SALADS",
        "spatialQuote": "Crisp greens, orchard apples, crumbled feta, and signature house dressings.",
        "items": [
            {
                "id": "rs-001",
                "name": "GREEK SALAD",
                "price": 290,
                "displayPrice": "₹290",
                "diet": "VEG",
                "variants": "",
                "desc": "",
                "image": "assets/menu-items/rs-001.jpg",
                "badge": "VEG",
                "highlight": false
            },
            {
                "id": "rs-002",
                "name": "RUSSIAN SALAD",
                "price": 390,
                "displayPrice": "₹390",
                "diet": "VEG",
                "variants": "",
                "desc": "",
                "image": "assets/menu-items/rs-002.jpg",
                "badge": "VEG",
                "highlight": false
            },
            {
                "id": "rs-003",
                "name": "APPLE FETA SALAD",
                "price": 420,
                "displayPrice": "₹420",
                "diet": "VEG",
                "variants": "",
                "desc": "",
                "image": "assets/menu-items/rs-003.jpg",
                "badge": "VEG",
                "highlight": false
            },
            {
                "id": "rs-004",
                "name": "CAESAR SALAD (VEG/NON-VEG)",
                "price": 350,
                "displayPrice": "₹350 / ₹390",
                "diet": "VEG / NON-VEG",
                "variants": "Veg ₹350 • Non-Veg ₹390",
                "desc": "",
                "image": "assets/menu-items/rs-004.jpg",
                "badge": "VEG / NON-VEG",
                "highlight": true
            }
        ],
        "hasMilkAddons": false
    },
    {
        "id": "quick-bites",
        "sectionGroup": "food",
        "index": "02",
        "parentHeader": "APPETIZER",
        "title": "Quick Bites",
        "pillar": "APPETIZER • GOLDEN FRITES, WEDGES & CRISPY BITES",
        "spatialQuote": "Crisp table favorites crafted for sharing over coffee and mountain evenings.",
        "items": [
            {
                "id": "rs-005",
                "name": "FRENCH FRIES",
                "price": 220,
                "displayPrice": "₹220",
                "diet": "VEG",
                "variants": "",
                "desc": "",
                "image": "assets/menu-items/rs-005.jpg",
                "badge": "VEG",
                "highlight": false
            },
            {
                "id": "rs-006",
                "name": "PERI PERI FRIES",
                "price": 260,
                "displayPrice": "₹260",
                "diet": "VEG",
                "variants": "",
                "desc": "",
                "image": "assets/menu-items/rs-006.jpg",
                "badge": "VEG",
                "highlight": false
            },
            {
                "id": "rs-007",
                "name": "POTATO WEDGES",
                "price": 280,
                "displayPrice": "₹280",
                "diet": "VEG",
                "variants": "",
                "desc": "",
                "image": "assets/menu-items/rs-007.jpg",
                "badge": "VEG",
                "highlight": false
            },
            {
                "id": "rs-008",
                "name": "CHICKEN NUGGETS",
                "price": 380,
                "displayPrice": "₹380",
                "diet": "NON-VEG",
                "variants": "",
                "desc": "",
                "image": "assets/menu-items/rs-008.jpg",
                "badge": "NON-VEG",
                "highlight": false
            },
            {
                "id": "rs-009",
                "name": "CHESSE BALLS",
                "price": 320,
                "displayPrice": "₹320",
                "diet": "VEG",
                "variants": "",
                "desc": "",
                "image": "assets/menu-items/rs-009.jpg",
                "badge": "VEG",
                "highlight": false
            },
            {
                "id": "rs-010",
                "name": "FISH & CHIPS",
                "price": 550,
                "displayPrice": "₹550",
                "diet": "NON-VEG",
                "variants": "",
                "desc": "",
                "image": "assets/menu-items/rs-010.jpg",
                "badge": "NON-VEG",
                "highlight": false
            },
            {
                "id": "rs-011",
                "name": "GARLIC HERB FRIES",
                "price": 280,
                "displayPrice": "₹280",
                "diet": "VEG",
                "variants": "",
                "desc": "",
                "image": "assets/menu-items/rs-011.jpg",
                "badge": "VEG",
                "highlight": false
            },
            {
                "id": "rs-012",
                "name": "HONEY CHILLI POTATO",
                "price": 280,
                "displayPrice": "₹280",
                "diet": "VEG",
                "variants": "",
                "desc": "",
                "image": "assets/menu-items/rs-012.jpg",
                "badge": "VEG",
                "highlight": false
            }
        ],
        "hasMilkAddons": false
    },
    {
        "id": "soups",
        "sectionGroup": "food",
        "index": "03",
        "parentHeader": "APPETIZER",
        "title": "Soups",
        "pillar": "APPETIZER • STEAMING MOUNTAIN BROTHS & POTAGES",
        "spatialQuote": "Simmered fresh for crisp Himalayan afternoons and starry Manali nights.",
        "items": [
            {
                "id": "rs-013",
                "name": "TOMATO SOUP",
                "price": 260,
                "displayPrice": "₹260",
                "diet": "VEG",
                "variants": "",
                "desc": "",
                "image": "assets/menu-items/rs-013.jpg",
                "badge": "VEG",
                "highlight": false
            },
            {
                "id": "rs-014",
                "name": "CREAM & MUSHROOM",
                "price": 290,
                "displayPrice": "₹290",
                "diet": "VEG",
                "variants": "",
                "desc": "",
                "image": "assets/menu-items/rs-014.jpg",
                "badge": "VEG",
                "highlight": false
            },
            {
                "id": "rs-015",
                "name": "CLEAR SOUP (VEG/NON-VEG)",
                "price": 240,
                "displayPrice": "₹240 / ₹290",
                "diet": "VEG / NON-VEG",
                "variants": "Veg ₹240 • Non-Veg ₹290",
                "desc": "",
                "image": "assets/menu-items/rs-015.jpg",
                "badge": "VEG / NON-VEG",
                "highlight": true
            },
            {
                "id": "rs-016",
                "name": "MANCHOW SOUP (VEG/NON-VEG)",
                "price": 280,
                "displayPrice": "₹280 / ₹320",
                "diet": "VEG / NON-VEG",
                "variants": "Veg ₹280 • Non-Veg ₹320",
                "desc": "",
                "image": "assets/menu-items/rs-016.jpg",
                "badge": "VEG / NON-VEG",
                "highlight": true
            },
            {
                "id": "rs-017",
                "name": "LEMON CORIANDER (VEG/NON-VEG)",
                "price": 280,
                "displayPrice": "₹280 / ₹320",
                "diet": "VEG / NON-VEG",
                "variants": "Veg ₹280 • Non-Veg ₹320",
                "desc": "",
                "image": "assets/menu-items/rs-017.jpg",
                "badge": "VEG / NON-VEG",
                "highlight": true
            },
            {
                "id": "rs-018",
                "name": "HOT AND SOUR (VEG/NON-VEG)",
                "price": 280,
                "displayPrice": "₹280 / ₹320",
                "diet": "VEG / NON-VEG",
                "variants": "Veg ₹280 • Non-Veg ₹320",
                "desc": "",
                "image": "assets/menu-items/rs-018.jpg",
                "badge": "VEG / NON-VEG",
                "highlight": true
            }
        ],
        "hasMilkAddons": false
    },
    {
        "id": "small-plate",
        "sectionGroup": "food",
        "index": "04",
        "parentHeader": "APPETIZER",
        "title": "Small Plate",
        "pillar": "APPETIZER • STEAMED DUMPLINGS, KEBABS & ROLLS",
        "spatialQuote": "From bamboo-steamed Himalayan momos to crisp golden rolls.",
        "items": [
            {
                "id": "rs-019",
                "name": "MOMO (VEG/PANEER/CHICKEN/MUTTON)",
                "price": 350,
                "displayPrice": "₹350 / ₹450 / ₹450 / ₹480",
                "diet": "VEG / NON-VEG",
                "variants": "Veg ₹350 • Paneer ₹450 • Chicken ₹450 • Mutton ₹480",
                "desc": "",
                "image": "assets/menu-items/rs-019.jpg",
                "badge": "VEG / NON-VEG",
                "highlight": true
            },
            {
                "id": "rs-020",
                "name": "HARA BHARA KEBAB",
                "price": 380,
                "displayPrice": "₹380",
                "diet": "VEG",
                "variants": "",
                "desc": "",
                "image": "assets/menu-items/rs-020.jpg",
                "badge": "VEG",
                "highlight": false
            },
            {
                "id": "rs-021",
                "name": "LEMON CHICKEN",
                "price": 450,
                "displayPrice": "₹450",
                "diet": "NON-VEG",
                "variants": "",
                "desc": "",
                "image": "assets/menu-items/rs-021.jpg",
                "badge": "NON-VEG",
                "highlight": false
            },
            {
                "id": "rs-022",
                "name": "VEG SPRING ROLLS",
                "price": 350,
                "displayPrice": "₹350",
                "diet": "VEG",
                "variants": "",
                "desc": "",
                "image": "assets/menu-items/rs-022.jpg",
                "badge": "VEG",
                "highlight": false
            }
        ],
        "hasMilkAddons": false
    },
    {
        "id": "breakfast",
        "sectionGroup": "food",
        "index": "05",
        "parentHeader": "MORNING TABLE",
        "title": "Breakfast",
        "pillar": "ALL-DAY MORNING BOWLS, PANCAKES, OMELETTES & PARANTHAS",
        "spatialQuote": "Sunlit mountain mornings—Greek yogurt bowls, warm pancakes, farm eggs, and paranthas.",
        "items": [
            {
                "id": "rs-023",
                "name": "SUPERFOOD BREAKFAST BOWL",
                "price": 420,
                "displayPrice": "₹420",
                "diet": "VEG",
                "variants": "",
                "desc": "Greek yogurt, mixed berries, granola, flaxseeds, and a drizzle of raw honey.",
                "image": "assets/menu-items/rs-023.jpg",
                "badge": "VEG",
                "highlight": true
            },
            {
                "id": "rs-024",
                "name": "BANANA OAT PANCAKES",
                "price": 330,
                "displayPrice": "₹330",
                "diet": "VEG",
                "variants": "",
                "desc": "Whole wheat oat pancakes, topped with banana slices, walnuts, and maple syrup.",
                "image": "assets/menu-items/rs-024.jpg",
                "badge": "VEG",
                "highlight": true
            },
            {
                "id": "rs-025",
                "name": "CHOCOLATE PANCAKES",
                "price": 350,
                "displayPrice": "₹350",
                "diet": "VEG",
                "variants": "",
                "desc": "Fluffy pancakes drizzled with Nutella",
                "image": "assets/menu-items/rs-025.jpg",
                "badge": "VEG",
                "highlight": true
            },
            {
                "id": "rs-026",
                "name": "FRESH FRUIT & NUT PLATE",
                "price": 400,
                "displayPrice": "₹400",
                "diet": "VEG",
                "variants": "",
                "desc": "Seasonal fresh fruits served with Greek yogurt and a mix of almonds & walnuts.",
                "image": "assets/menu-items/rs-026.jpg",
                "badge": "VEG",
                "highlight": true
            },
            {
                "id": "rs-027",
                "name": "SUNNY SIDE UP",
                "price": 230,
                "displayPrice": "₹230",
                "diet": "EGG",
                "variants": "",
                "desc": "",
                "image": "assets/menu-items/rs-027.jpg",
                "badge": "EGG",
                "highlight": false
            },
            {
                "id": "rs-028",
                "name": "FRENCH OMELETTE",
                "price": 280,
                "displayPrice": "₹280",
                "diet": "EGG",
                "variants": "",
                "desc": "",
                "image": "assets/menu-items/rs-028.jpg",
                "badge": "EGG",
                "highlight": false
            },
            {
                "id": "rs-029",
                "name": "ALL VEG OMELETTE",
                "price": 280,
                "displayPrice": "₹280",
                "diet": "EGG",
                "variants": "",
                "desc": "",
                "image": "assets/menu-items/rs-029.jpg",
                "badge": "EGG",
                "highlight": false
            },
            {
                "id": "rs-030",
                "name": "EGGCELENT BOILED BOUNTY",
                "price": 220,
                "displayPrice": "₹220",
                "diet": "EGG",
                "variants": "",
                "desc": "",
                "image": "assets/menu-items/rs-030.jpg",
                "badge": "EGG",
                "highlight": false
            },
            {
                "id": "rs-031",
                "name": "CHICKEN & CHEESE OMELETTE",
                "price": 320,
                "displayPrice": "₹320",
                "diet": "NON-VEG",
                "variants": "",
                "desc": "",
                "image": "assets/menu-items/rs-031.jpg",
                "badge": "NON-VEG",
                "highlight": false
            },
            {
                "id": "rs-032",
                "name": "MUSHROOM & CHEESE OMELETTE",
                "price": 320,
                "displayPrice": "₹320",
                "diet": "EGG",
                "variants": "",
                "desc": "",
                "image": "assets/menu-items/rs-032.jpg",
                "badge": "EGG",
                "highlight": false
            },
            {
                "id": "rs-033",
                "name": "SPINACH MUSHROOM OMELETTE",
                "price": 320,
                "displayPrice": "₹320",
                "diet": "EGG",
                "variants": "",
                "desc": "",
                "image": "assets/menu-items/rs-033.jpg",
                "badge": "EGG",
                "highlight": false
            },
            {
                "id": "rs-034",
                "name": "STUFFED PARANTHA",
                "price": 220,
                "displayPrice": "₹220",
                "diet": "VEG",
                "variants": "",
                "desc": "",
                "image": "assets/menu-items/rs-034.jpg",
                "badge": "VEG",
                "highlight": false
            },
            {
                "id": "rs-035",
                "name": "POHA",
                "price": 260,
                "displayPrice": "₹260",
                "diet": "VEG",
                "variants": "",
                "desc": "",
                "image": "assets/menu-items/rs-035.jpg",
                "badge": "VEG",
                "highlight": false
            },
            {
                "id": "rs-036",
                "name": "POORI BHAJI",
                "price": 270,
                "displayPrice": "₹270",
                "diet": "VEG",
                "variants": "",
                "desc": "",
                "image": "assets/menu-items/rs-036.jpg",
                "badge": "VEG",
                "highlight": false
            },
            {
                "id": "rs-037",
                "name": "VEG MAGGI/EGG MAGGI",
                "price": 250,
                "displayPrice": "₹250 / ₹300",
                "diet": "VEG / EGG",
                "variants": "Veg Maggi ₹250 • Egg Maggi ₹300",
                "desc": "",
                "image": "assets/menu-items/rs-037.jpg",
                "badge": "VEG / EGG",
                "highlight": true
            },
            {
                "id": "rs-038",
                "name": "ALL VEGGIE WRAP",
                "price": 350,
                "displayPrice": "₹350",
                "diet": "VEG",
                "variants": "",
                "desc": "",
                "image": "assets/menu-items/rs-038.jpg",
                "badge": "VEG",
                "highlight": false
            }
        ],
        "hasMilkAddons": false
    },
    {
        "id": "noodles",
        "sectionGroup": "food",
        "index": "06",
        "parentHeader": "WOK & NOODLES",
        "title": "Noodles",
        "pillar": "HIGH-FLAME WOK NOODLES",
        "spatialQuote": "Tossed to order in our wok kitchen—available in both Veg and Non-Veg.",
        "items": [
            {
                "id": "rs-039",
                "name": "PAD THAI NOODLES (VEG/NON-VEG)",
                "price": 400,
                "displayPrice": "₹400 / ₹430",
                "diet": "VEG / NON-VEG",
                "variants": "Veg ₹400 • Non-Veg ₹430",
                "desc": "",
                "image": "assets/menu-items/rs-039.jpg",
                "badge": "VEG / NON-VEG",
                "highlight": true
            },
            {
                "id": "rs-040",
                "name": "CHILLI GARLIC NOODLES (VEG/NON-VEG)",
                "price": 400,
                "displayPrice": "₹400 / ₹430",
                "diet": "VEG / NON-VEG",
                "variants": "Veg ₹400 • Non-Veg ₹430",
                "desc": "",
                "image": "assets/menu-items/rs-040.jpg",
                "badge": "VEG / NON-VEG",
                "highlight": true
            },
            {
                "id": "rs-041",
                "name": "SINGAPURI NOODLES (VEG/NON-VEG)",
                "price": 420,
                "displayPrice": "₹420 / ₹450",
                "diet": "VEG / NON-VEG",
                "variants": "Veg ₹420 • Non-Veg ₹450",
                "desc": "",
                "image": "assets/menu-items/rs-041.jpg",
                "badge": "VEG / NON-VEG",
                "highlight": true
            }
        ],
        "hasMilkAddons": false
    },
    {
        "id": "pasta",
        "sectionGroup": "food",
        "index": "07",
        "parentHeader": "ITALIAN PASS",
        "title": "Pasta",
        "pillar": "ARTISANAL ITALIAN PASTAS",
        "spatialQuote": "Al-dente pasta folded into slow-simmered sauces—available in Veg and Non-Veg.",
        "items": [
            {
                "id": "rs-042",
                "name": "AGLIO OLIO PASTA (VEG/NON-VEG)",
                "price": 420,
                "displayPrice": "₹420 / ₹450",
                "diet": "VEG / NON-VEG",
                "variants": "Veg ₹420 • Non-Veg ₹450",
                "desc": "",
                "image": "assets/menu-items/rs-042.jpg",
                "badge": "VEG / NON-VEG",
                "highlight": true
            },
            {
                "id": "rs-043",
                "name": "TOMATO BASIL (VEG/NON-VEG)",
                "price": 450,
                "displayPrice": "₹450 / ₹480",
                "diet": "VEG / NON-VEG",
                "variants": "Veg ₹450 • Non-Veg ₹480",
                "desc": "",
                "image": "assets/menu-items/rs-043.jpg",
                "badge": "VEG / NON-VEG",
                "highlight": true
            },
            {
                "id": "rs-044",
                "name": "WHITE SAUCE (VEG/NON-VEG)",
                "price": 450,
                "displayPrice": "₹450 / ₹480",
                "diet": "VEG / NON-VEG",
                "variants": "Veg ₹450 • Non-Veg ₹480",
                "desc": "",
                "image": "assets/menu-items/rs-044.jpg",
                "badge": "VEG / NON-VEG",
                "highlight": true
            },
            {
                "id": "rs-045",
                "name": "PINK SAUCE (VEG/NON-VEG)",
                "price": 450,
                "displayPrice": "₹450 / ₹480",
                "diet": "VEG / NON-VEG",
                "variants": "Veg ₹450 • Non-Veg ₹480",
                "desc": "",
                "image": "assets/menu-items/rs-045.jpg",
                "badge": "VEG / NON-VEG",
                "highlight": true
            },
            {
                "id": "rs-046",
                "name": "RED SAUCE (VEG/NON-VEG)",
                "price": 450,
                "displayPrice": "₹450 / ₹480",
                "diet": "VEG / NON-VEG",
                "variants": "Veg ₹450 • Non-Veg ₹480",
                "desc": "",
                "image": "assets/menu-items/rs-046.jpg",
                "badge": "VEG / NON-VEG",
                "highlight": true
            },
            {
                "id": "rs-047",
                "name": "PESTO (VEG/NON-VEG)",
                "price": 460,
                "displayPrice": "₹460 / ₹490",
                "diet": "VEG / NON-VEG",
                "variants": "Veg ₹460 • Non-Veg ₹490",
                "desc": "",
                "image": "assets/menu-items/rs-047.jpg",
                "badge": "VEG / NON-VEG",
                "highlight": true
            }
        ],
        "hasMilkAddons": false
    },
    {
        "id": "middle-eastern",
        "sectionGroup": "food",
        "index": "08",
        "parentHeader": "LEVANT KITCHEN",
        "title": "Middle-Eastern",
        "pillar": "HUMMUS PLATTERS, FALAFEL PITA & SHAKSHUKA",
        "spatialQuote": "Warm pita, velvety chickpea & beetroot hummus, and spiced shakshuka.",
        "items": [
            {
                "id": "rs-048",
                "name": "BEETROOT HUMMUS FALAFEL PITA BREAD",
                "price": 490,
                "displayPrice": "₹490",
                "diet": "VEG",
                "variants": "",
                "desc": "",
                "image": "assets/menu-items/rs-048.jpg",
                "badge": "VEG",
                "highlight": false
            },
            {
                "id": "rs-049",
                "name": "HUMMUS FALAFEL PITA BREAD",
                "price": 470,
                "displayPrice": "₹470",
                "diet": "VEG",
                "variants": "",
                "desc": "",
                "image": "assets/menu-items/rs-049.jpg",
                "badge": "VEG",
                "highlight": false
            },
            {
                "id": "rs-050",
                "name": "SHAKSHUKA (VEG)",
                "price": 430,
                "displayPrice": "₹430",
                "diet": "VEG",
                "variants": "",
                "desc": "",
                "image": "assets/menu-items/rs-050.jpg",
                "badge": "VEG",
                "highlight": false
            },
            {
                "id": "rs-051",
                "name": "SHAKSHUKA (EGG)",
                "price": 450,
                "displayPrice": "₹450",
                "diet": "NON-VEG",
                "variants": "",
                "desc": "",
                "image": "assets/menu-items/rs-051.jpg",
                "badge": "NON-VEG",
                "highlight": false
            }
        ],
        "hasMilkAddons": false
    },
    {
        "id": "rolls",
        "sectionGroup": "food",
        "index": "09",
        "parentHeader": "LEVANT KITCHEN",
        "title": "Rolls",
        "pillar": "HAND-ROLLED SHAWARMA & FALAFEL WRAPS",
        "spatialQuote": "Griddled wraps rolled fresh with pickled vegetables and house sauces.",
        "items": [
            {
                "id": "rs-052",
                "name": "VEG SHAWARMA ROLL",
                "price": 360,
                "displayPrice": "₹360",
                "diet": "VEG",
                "variants": "",
                "desc": "",
                "image": "assets/menu-items/rs-052.jpg",
                "badge": "VEG",
                "highlight": false
            },
            {
                "id": "rs-053",
                "name": "PANEER SHAWARMA ROLL",
                "price": 390,
                "displayPrice": "₹390",
                "diet": "VEG",
                "variants": "",
                "desc": "",
                "image": "assets/menu-items/rs-053.jpg",
                "badge": "VEG",
                "highlight": false
            },
            {
                "id": "rs-054",
                "name": "FALAFEL ROLL",
                "price": 400,
                "displayPrice": "₹400",
                "diet": "VEG",
                "variants": "",
                "desc": "",
                "image": "assets/menu-items/rs-054.jpg",
                "badge": "VEG",
                "highlight": false
            },
            {
                "id": "rs-055",
                "name": "CHICKEN SHAWARMA ROLL",
                "price": 420,
                "displayPrice": "₹420",
                "diet": "NON-VEG",
                "variants": "",
                "desc": "",
                "image": "assets/menu-items/rs-055.jpg",
                "badge": "NON-VEG",
                "highlight": false
            },
            {
                "id": "rs-056",
                "name": "CHEESE PANEER ROLL",
                "price": 420,
                "displayPrice": "₹420",
                "diet": "VEG",
                "variants": "",
                "desc": "",
                "image": "assets/menu-items/rs-056.jpg",
                "badge": "VEG",
                "highlight": false
            }
        ],
        "hasMilkAddons": false
    },
    {
        "id": "sandwich",
        "sectionGroup": "food",
        "index": "10",
        "parentHeader": "BAKERY GRILL",
        "title": "Sandwich",
        "pillar": "ARTISANAL BAKERY LOAF SANDWICHES",
        "spatialQuote": "Layered with house pesto, cheddar, homemade paneer, and fresh garden produce.",
        "items": [
            {
                "id": "rs-057",
                "name": "CHEESE SANDWICH",
                "price": 380,
                "displayPrice": "₹380",
                "diet": "VEG",
                "variants": "",
                "desc": "(Cheddar Cheese, Hummus)",
                "image": "assets/menu-items/rs-057.jpg",
                "badge": "VEG",
                "highlight": true
            },
            {
                "id": "rs-058",
                "name": "FRESH SANDWICH",
                "price": 450,
                "displayPrice": "₹450",
                "diet": "VEG",
                "variants": "",
                "desc": "(Fresh Tomatoes, Cucumber, Onion, Herbs, Cheddar Cheese, Baby Lettuce, Mustard Sauce)",
                "image": "assets/menu-items/rs-058.jpg",
                "badge": "VEG",
                "highlight": true
            },
            {
                "id": "rs-059",
                "name": "VEG PESTO SANDWICH",
                "price": 450,
                "displayPrice": "₹450",
                "diet": "VEG",
                "variants": "",
                "desc": "(Roasted tomato, fresh tomatoes, Cheese )",
                "image": "assets/menu-items/rs-059.jpg",
                "badge": "VEG",
                "highlight": true
            },
            {
                "id": "rs-060",
                "name": "SPINACH MUSHROOM SANDWICH",
                "price": 450,
                "displayPrice": "₹450",
                "diet": "VEG",
                "variants": "",
                "desc": "(Baby Spinach, Roasted Mushrooms, Cheddar Cheese, Pesto)",
                "image": "assets/menu-items/rs-060.jpg",
                "badge": "VEG",
                "highlight": true
            },
            {
                "id": "rs-061",
                "name": "SPINACH CORN SANDWICH",
                "price": 450,
                "displayPrice": "₹450",
                "diet": "VEG",
                "variants": "",
                "desc": "(Baby Spinach, Sweet Corn, Cheddar cheese, Pesto)",
                "image": "assets/menu-items/rs-061.jpg",
                "badge": "VEG",
                "highlight": true
            },
            {
                "id": "rs-062",
                "name": "PANEER VEGGIE SANDWICH",
                "price": 450,
                "displayPrice": "₹450",
                "diet": "VEG",
                "variants": "",
                "desc": "(Homemade Paneer, Fresh Tomatoes, Onion, Coriander, Honey Mustard)",
                "image": "assets/menu-items/rs-062.jpg",
                "badge": "VEG",
                "highlight": true
            },
            {
                "id": "rs-063",
                "name": "CHICKEN PESTO SANDWICH",
                "price": 480,
                "displayPrice": "₹480",
                "diet": "NON-VEG",
                "variants": "add on Cheddar Cheese Rs. 40",
                "desc": "(Grilled Chicken, Tomatoes, Pesto) (add on Cheddar Cheese Rs. 40)",
                "image": "assets/menu-items/rs-063.jpg",
                "badge": "NON-VEG",
                "highlight": true
            },
            {
                "id": "rs-064",
                "name": "EGG SANDWICH",
                "price": 450,
                "displayPrice": "₹450",
                "diet": "EGG",
                "variants": "",
                "desc": "(Sunny Side Up, Onion, Cheddar Cheese)",
                "image": "assets/menu-items/rs-064.jpg",
                "badge": "EGG",
                "highlight": true
            },
            {
                "id": "rs-065",
                "name": "GABBU’S SPECIAL JUNGLEE SANDWICH",
                "price": 420,
                "displayPrice": "₹420 / ₹450",
                "diet": "VEG / NON-VEG",
                "variants": "Veg ₹420 • Non-veg ₹450",
                "desc": "(Veg / Non-veg) (Homemade Mayonnaise, Cucumber, Capsicum, Onion, Coriander, Cheese)",
                "image": "assets/menu-items/rs-065.jpg",
                "badge": "VEG / NON-VEG",
                "highlight": true
            }
        ],
        "hasMilkAddons": false
    },
    {
        "id": "pizza",
        "sectionGroup": "food",
        "index": "11",
        "parentHeader": "WOOD-FIRED OVEN",
        "title": "Pizza",
        "pillar": "HAND-STRETCHED VEG & NON-VEG PIZZAS",
        "spatialQuote": "Baked to a golden blistered crust with melted mozzarella and house sauces.",
        "items": [
            {
                "id": "rs-066",
                "name": "FARM HOUSE PIZZA",
                "price": 520,
                "displayPrice": "₹520",
                "diet": "VEG",
                "variants": "",
                "desc": "Bell peppers, onions, olives, mushrooms, sweet corn, and mozzarella.",
                "image": "assets/menu-items/rs-066.jpg",
                "badge": "VEG",
                "highlight": true
            },
            {
                "id": "rs-067",
                "name": "PANEER TIKKA PIZZA (FLAVOURFUL)",
                "price": 530,
                "displayPrice": "₹530",
                "diet": "VEG",
                "variants": "",
                "desc": "Spiced paneer cubes, onions, capsicum, and mozzarella on a flavorful tomato base.",
                "image": "assets/menu-items/rs-067.jpg",
                "badge": "VEG",
                "highlight": true
            },
            {
                "id": "rs-068",
                "name": "MARGHERITA PIZZA",
                "price": 500,
                "displayPrice": "₹500",
                "diet": "VEG",
                "variants": "",
                "desc": "Traditional tomato sauce, mozzarella, and fresh basil.",
                "image": "assets/menu-items/rs-068.jpg",
                "badge": "VEG",
                "highlight": true
            },
            {
                "id": "rs-069",
                "name": "MUSHROOM DELIGHT",
                "price": 530,
                "displayPrice": "₹530",
                "diet": "VEG",
                "variants": "",
                "desc": "Mozzarella, tomato sauce, and sautéed mushrooms.",
                "image": "assets/menu-items/rs-069.jpg",
                "badge": "VEG",
                "highlight": true
            },
            {
                "id": "rs-070",
                "name": "ROASTED VEGGIE PIZZA",
                "price": 530,
                "displayPrice": "₹530",
                "diet": "VEG",
                "variants": "",
                "desc": "Eggplant, zucchini, bell peppers, olives, and mozzarella.",
                "image": "assets/menu-items/rs-070.jpg",
                "badge": "VEG",
                "highlight": true
            },
            {
                "id": "rs-071",
                "name": "CORN PIZZA",
                "price": 530,
                "displayPrice": "₹530",
                "diet": "VEG",
                "variants": "",
                "desc": "Loaded with sweet corn, mozzarella cheese, and a hint of oregano.",
                "image": "assets/menu-items/rs-071.jpg",
                "badge": "VEG",
                "highlight": true
            },
            {
                "id": "rs-072",
                "name": "CHICKEN PESTO PIZZA",
                "price": 550,
                "displayPrice": "₹550",
                "diet": "NON-VEG",
                "variants": "",
                "desc": "Grilled chicken, cherry tomatoes, mozzarella, and basil pesto sauce.",
                "image": "assets/menu-items/rs-072.jpg",
                "badge": "NON-VEG",
                "highlight": true
            },
            {
                "id": "rs-073",
                "name": "TANDOORI CHICKEN PIZZA",
                "price": 580,
                "displayPrice": "₹580",
                "diet": "NON-VEG",
                "variants": "",
                "desc": "Spicy tandoori chicken, onions, and a hint of mint.",
                "image": "assets/menu-items/rs-073.jpg",
                "badge": "NON-VEG",
                "highlight": true
            },
            {
                "id": "rs-074",
                "name": "CHICKEN TIKKA PIZZA",
                "price": 580,
                "displayPrice": "₹580",
                "diet": "NON-VEG",
                "variants": "",
                "desc": "Juicy chicken tikka pieces, onions, capsicum, and spicy tomato sauce.",
                "image": "assets/menu-items/rs-074.jpg",
                "badge": "NON-VEG",
                "highlight": true
            },
            {
                "id": "rs-075",
                "name": "SPICY MEXICAN PIZZA",
                "price": 590,
                "displayPrice": "₹590",
                "diet": "NON-VEG",
                "variants": "",
                "desc": "Jalapeños, spiced chicken, black beans, onions, and cheddar.",
                "image": "assets/menu-items/rs-075.jpg",
                "badge": "NON-VEG",
                "highlight": true
            }
        ],
        "hasMilkAddons": false
    },
    {
        "id": "burgers",
        "sectionGroup": "food",
        "index": "12",
        "parentHeader": "CRAFT BURGER BAR",
        "title": "Burgers",
        "pillar": "TOASTED BUN VEG & CHICKEN BURGERS",
        "spatialQuote": "Stacked high with crispy or grilled patties, melted cheese, and signature sauces.",
        "items": [
            {
                "id": "rs-076",
                "name": "CLASSIC VEGGIE BURGER",
                "price": 420,
                "displayPrice": "₹420",
                "diet": "VEG",
                "variants": "",
                "desc": "Crispy vegetable patty, lettuce, tomato, onion, and house sauce in a toasted bun.",
                "image": "assets/menu-items/rs-076.jpg",
                "badge": "VEG",
                "highlight": true
            },
            {
                "id": "rs-077",
                "name": "CHEESY PANEER BURGER",
                "price": 450,
                "displayPrice": "₹450",
                "diet": "VEG",
                "variants": "",
                "desc": "Grilled paneer, melted cheese, lettuce, and a tangy mayo dressing.",
                "image": "assets/menu-items/rs-077.jpg",
                "badge": "VEG",
                "highlight": true
            },
            {
                "id": "rs-078",
                "name": "CORN & SPINACH BURGER",
                "price": 450,
                "displayPrice": "₹450",
                "diet": "VEG",
                "variants": "",
                "desc": "A flavorful mix of corn and spinach patty with creamy mustard sauce.",
                "image": "assets/menu-items/rs-078.jpg",
                "badge": "VEG",
                "highlight": true
            },
            {
                "id": "rs-079",
                "name": "SPICY MEXICAN VEG BURGER",
                "price": 480,
                "displayPrice": "₹480",
                "diet": "VEG",
                "variants": "",
                "desc": "Spicy bean patty, jalapeños, lettuce, and chipotle mayo.",
                "image": "assets/menu-items/rs-079.jpg",
                "badge": "VEG",
                "highlight": true
            },
            {
                "id": "rs-080",
                "name": "MUSHROOM SWISS BURGER",
                "price": 420,
                "displayPrice": "₹420",
                "diet": "VEG",
                "variants": "",
                "desc": "Sautéed mushrooms, Swiss cheese, lettuce, and garlic aioli.",
                "image": "assets/menu-items/rs-080.jpg",
                "badge": "VEG",
                "highlight": true
            },
            {
                "id": "rs-081",
                "name": "CLASSIC CHICKEN",
                "price": 480,
                "displayPrice": "₹480",
                "diet": "NON-VEG",
                "variants": "",
                "desc": "Juicy grilled chicken patty, lettuce, tomato, and mayo.",
                "image": "assets/menu-items/rs-081.jpg",
                "badge": "NON-VEG",
                "highlight": true
            },
            {
                "id": "rs-082",
                "name": "CHICKEN CHEESE MELT",
                "price": 550,
                "displayPrice": "₹550",
                "diet": "NON-VEG",
                "variants": "",
                "desc": "Grilled chicken, double cheese, onions, and tangy sauce.",
                "image": "assets/menu-items/rs-082.jpg",
                "badge": "NON-VEG",
                "highlight": true
            },
            {
                "id": "rs-083",
                "name": "THE SMOKEHOUSE CHICKEN",
                "price": 580,
                "displayPrice": "₹580",
                "diet": "NON-VEG",
                "variants": "",
                "desc": "Juicy grilled chicken, smoked cheddar, caramelized onions, and BBQ sauce.",
                "image": "assets/menu-items/rs-083.jpg",
                "badge": "NON-VEG",
                "highlight": true
            }
        ],
        "hasMilkAddons": false
    },
    {
        "id": "tandoor",
        "sectionGroup": "food",
        "index": "13",
        "parentHeader": "CLAY OVEN",
        "title": "Tandoor",
        "pillar": "CHARCOAL TANDOORI SKEWERS, PLATTERS & HIMALAYAN TROUT",
        "spatialQuote": "Roasted over glowing embers in our traditional clay tandoor.",
        "items": [
            {
                "id": "rs-084",
                "name": "PANEER TIKKA",
                "price": 430,
                "displayPrice": "₹430",
                "diet": "VEG",
                "variants": "",
                "desc": "",
                "image": "assets/menu-items/rs-084.jpg",
                "badge": "VEG",
                "highlight": false
            },
            {
                "id": "rs-085",
                "name": "AFGHANI PANEER",
                "price": 450,
                "displayPrice": "₹450",
                "diet": "VEG",
                "variants": "",
                "desc": "",
                "image": "assets/menu-items/rs-085.jpg",
                "badge": "VEG",
                "highlight": false
            },
            {
                "id": "rs-086",
                "name": "VEG SEEKH KEBAB",
                "price": 450,
                "displayPrice": "₹450",
                "diet": "VEG",
                "variants": "",
                "desc": "",
                "image": "assets/menu-items/rs-086.jpg",
                "badge": "VEG",
                "highlight": false
            },
            {
                "id": "rs-087",
                "name": "DAHI KEBAB",
                "price": 450,
                "displayPrice": "₹450",
                "diet": "VEG",
                "variants": "",
                "desc": "",
                "image": "assets/menu-items/rs-087.jpg",
                "badge": "VEG",
                "highlight": false
            },
            {
                "id": "rs-088",
                "name": "TANDOORI MUSHROOM",
                "price": 480,
                "displayPrice": "₹480",
                "diet": "VEG",
                "variants": "",
                "desc": "",
                "image": "assets/menu-items/rs-088.jpg",
                "badge": "VEG",
                "highlight": false
            },
            {
                "id": "rs-089",
                "name": "TANDOORI PLATTER (VEG)",
                "price": 850,
                "displayPrice": "₹850",
                "diet": "VEG",
                "variants": "Veg Tandoori Platter",
                "desc": "",
                "image": "assets/menu-items/rs-089.jpg",
                "badge": "VEG",
                "highlight": true
            },
            {
                "id": "rs-090",
                "name": "ACHAARI PANEER TIKKA",
                "price": 450,
                "displayPrice": "₹450",
                "diet": "VEG",
                "variants": "",
                "desc": "",
                "image": "assets/menu-items/rs-090.jpg",
                "badge": "VEG",
                "highlight": false
            },
            {
                "id": "rs-091",
                "name": "MALAI PANEER TIKKA",
                "price": 460,
                "displayPrice": "₹460",
                "diet": "VEG",
                "variants": "",
                "desc": "",
                "image": "assets/menu-items/rs-091.jpg",
                "badge": "VEG",
                "highlight": false
            },
            {
                "id": "rs-092",
                "name": "CHICKEN TIKKA",
                "price": 520,
                "displayPrice": "₹520",
                "diet": "NON-VEG",
                "variants": "",
                "desc": "",
                "image": "assets/menu-items/rs-092.jpg",
                "badge": "NON-VEG",
                "highlight": false
            },
            {
                "id": "rs-093",
                "name": "AFGHANI CHICKEN",
                "price": 550,
                "displayPrice": "₹550",
                "diet": "NON-VEG",
                "variants": "",
                "desc": "",
                "image": "assets/menu-items/rs-093.jpg",
                "badge": "NON-VEG",
                "highlight": false
            },
            {
                "id": "rs-094",
                "name": "TANDOORI CHICKEN",
                "price": 540,
                "displayPrice": "₹540",
                "diet": "NON-VEG",
                "variants": "",
                "desc": "",
                "image": "assets/menu-items/rs-094.jpg",
                "badge": "NON-VEG",
                "highlight": false
            },
            {
                "id": "rs-095",
                "name": "TANDOORI PLATTER (NON-VEG)",
                "price": 980,
                "displayPrice": "₹980",
                "diet": "NON-VEG",
                "variants": "Non-Veg Tandoori Platter",
                "desc": "",
                "image": "assets/menu-items/rs-095.jpg",
                "badge": "NON-VEG",
                "highlight": true
            },
            {
                "id": "rs-096",
                "name": "CHICKEN MALAI TIKKA",
                "price": 550,
                "displayPrice": "₹550",
                "diet": "NON-VEG",
                "variants": "",
                "desc": "",
                "image": "assets/menu-items/rs-096.jpg",
                "badge": "NON-VEG",
                "highlight": false
            },
            {
                "id": "rs-097",
                "name": "CHICKEN SEEKH KEBAB",
                "price": 520,
                "displayPrice": "₹520",
                "diet": "NON-VEG",
                "variants": "",
                "desc": "",
                "image": "assets/menu-items/rs-097.jpg",
                "badge": "NON-VEG",
                "highlight": false
            },
            {
                "id": "rs-098",
                "name": "CHEF SPECIAL TROUT",
                "price": 950,
                "displayPrice": "₹950",
                "diet": "NON-VEG",
                "variants": "Manali River Trout Specialty",
                "desc": "",
                "image": "assets/menu-items/rs-098.jpg",
                "badge": "NON-VEG",
                "highlight": true
            },
            {
                "id": "rs-099",
                "name": "ACHAARI CHICKEN TIKKA",
                "price": 550,
                "displayPrice": "₹550",
                "diet": "NON-VEG",
                "variants": "",
                "desc": "",
                "image": "assets/menu-items/rs-099.jpg",
                "badge": "NON-VEG",
                "highlight": false
            }
        ],
        "hasMilkAddons": false
    },
    {
        "id": "indian-mains",
        "sectionGroup": "food",
        "index": "14",
        "parentHeader": "COPPER HANDI",
        "title": "Indian Mains",
        "pillar": "TRADITIONAL VEG & NON-VEG INDIAN CURRIES",
        "spatialQuote": "From slow-simmered Dal Makhani and Paneer Lababdar to Pahadi Chicken and Mutton Rogan Josh.",
        "items": [
            {
                "id": "rs-100",
                "name": "DAL TADKA",
                "price": 380,
                "displayPrice": "₹380",
                "diet": "VEG",
                "variants": "",
                "desc": "",
                "image": "assets/menu-items/rs-100.jpg",
                "badge": "VEG",
                "highlight": false
            },
            {
                "id": "rs-101",
                "name": "DAL MAKHANI",
                "price": 450,
                "displayPrice": "₹450",
                "diet": "VEG",
                "variants": "",
                "desc": "",
                "image": "assets/menu-items/rs-101.jpg",
                "badge": "VEG",
                "highlight": false
            },
            {
                "id": "rs-102",
                "name": "ALOO JEERA",
                "price": 380,
                "displayPrice": "₹380",
                "diet": "VEG",
                "variants": "",
                "desc": "",
                "image": "assets/menu-items/rs-102.jpg",
                "badge": "VEG",
                "highlight": false
            },
            {
                "id": "rs-103",
                "name": "MUSHROOM MASALA",
                "price": 420,
                "displayPrice": "₹420",
                "diet": "VEG",
                "variants": "",
                "desc": "",
                "image": "assets/menu-items/rs-103.jpg",
                "badge": "VEG",
                "highlight": false
            },
            {
                "id": "rs-104",
                "name": "KADAI PANEER",
                "price": 480,
                "displayPrice": "₹480",
                "diet": "VEG",
                "variants": "",
                "desc": "",
                "image": "assets/menu-items/rs-104.jpg",
                "badge": "VEG",
                "highlight": false
            },
            {
                "id": "rs-105",
                "name": "PANEER BHURJI",
                "price": 450,
                "displayPrice": "₹450",
                "diet": "VEG",
                "variants": "",
                "desc": "",
                "image": "assets/menu-items/rs-105.jpg",
                "badge": "VEG",
                "highlight": false
            },
            {
                "id": "rs-106",
                "name": "PANEER MAKHANI",
                "price": 480,
                "displayPrice": "₹480",
                "diet": "VEG",
                "variants": "",
                "desc": "",
                "image": "assets/menu-items/rs-106.jpg",
                "badge": "VEG",
                "highlight": false
            },
            {
                "id": "rs-107",
                "name": "PANEER LABABDAR",
                "price": 490,
                "displayPrice": "₹490",
                "diet": "VEG",
                "variants": "",
                "desc": "",
                "image": "assets/menu-items/rs-107.jpg",
                "badge": "VEG",
                "highlight": false
            },
            {
                "id": "rs-108",
                "name": "MIX-VEG",
                "price": 380,
                "displayPrice": "₹380",
                "diet": "VEG",
                "variants": "",
                "desc": "",
                "image": "assets/menu-items/rs-108.jpg",
                "badge": "VEG",
                "highlight": false
            },
            {
                "id": "rs-109",
                "name": "CHICKEN CURRY",
                "price": 580,
                "displayPrice": "₹580",
                "diet": "NON-VEG",
                "variants": "",
                "desc": "",
                "image": "assets/menu-items/rs-109.jpg",
                "badge": "NON-VEG",
                "highlight": false
            },
            {
                "id": "rs-110",
                "name": "EGG CURRY",
                "price": 480,
                "displayPrice": "₹480",
                "diet": "NON-VEG",
                "variants": "",
                "desc": "",
                "image": "assets/menu-items/rs-110.jpg",
                "badge": "NON-VEG",
                "highlight": false
            },
            {
                "id": "rs-111",
                "name": "KADHAI CHICKEN",
                "price": 590,
                "displayPrice": "₹590",
                "diet": "NON-VEG",
                "variants": "",
                "desc": "",
                "image": "assets/menu-items/rs-111.jpg",
                "badge": "NON-VEG",
                "highlight": false
            },
            {
                "id": "rs-112",
                "name": "BUTTER CHICKEN",
                "price": 650,
                "displayPrice": "₹650",
                "diet": "NON-VEG",
                "variants": "",
                "desc": "",
                "image": "assets/menu-items/rs-112.jpg",
                "badge": "NON-VEG",
                "highlight": false
            },
            {
                "id": "rs-113",
                "name": "PAHADI CHICKEN",
                "price": 650,
                "displayPrice": "₹650",
                "diet": "NON-VEG",
                "variants": "",
                "desc": "",
                "image": "assets/menu-items/rs-113.jpg",
                "badge": "NON-VEG",
                "highlight": false
            },
            {
                "id": "rs-114",
                "name": "RARA CHICKEN",
                "price": 680,
                "displayPrice": "₹680",
                "diet": "NON-VEG",
                "variants": "",
                "desc": "",
                "image": "assets/menu-items/rs-114.jpg",
                "badge": "NON-VEG",
                "highlight": false
            },
            {
                "id": "rs-115",
                "name": "MUTTON ROGAN JOSH",
                "price": 1050,
                "displayPrice": "₹1050",
                "diet": "NON-VEG",
                "variants": "",
                "desc": "",
                "image": "assets/menu-items/rs-115.jpg",
                "badge": "NON-VEG",
                "highlight": false
            },
            {
                "id": "rs-116",
                "name": "CHICKEN KEEMA",
                "price": 650,
                "displayPrice": "₹650",
                "diet": "NON-VEG",
                "variants": "",
                "desc": "",
                "image": "assets/menu-items/rs-116.jpg",
                "badge": "NON-VEG",
                "highlight": false
            },
            {
                "id": "rs-117",
                "name": "RAJASTHANI BHUNA KUKAD",
                "price": 680,
                "displayPrice": "₹680",
                "diet": "NON-VEG",
                "variants": "",
                "desc": "",
                "image": "assets/menu-items/rs-117.jpg",
                "badge": "NON-VEG",
                "highlight": false
            }
        ],
        "hasMilkAddons": false
    },
    {
        "id": "breads",
        "sectionGroup": "food",
        "index": "15",
        "parentHeader": "TANDOORI BREADS",
        "title": "Breads",
        "pillar": "FRESH CLAY-OVEN ROTI, NAAN & LACCHA PARATHA",
        "spatialQuote": "Baked fresh to order on the glowing walls of our tandoor.",
        "items": [
            {
                "id": "rs-118",
                "name": "ROTI",
                "price": 50,
                "displayPrice": "₹50 / ₹55 / ₹70",
                "diet": "VEG",
                "variants": "Plain ₹50 • Butter ₹55 • Missi ₹70",
                "desc": "(Plain ₹50  Butter ₹55  Missi ₹70)",
                "image": "assets/menu-items/rs-118.jpg",
                "badge": "VEG",
                "highlight": true
            },
            {
                "id": "rs-119",
                "name": "NAAN",
                "price": 90,
                "displayPrice": "₹90 – ₹190",
                "diet": "VEG",
                "variants": "Plain ₹90 • Butter ₹95 • Garlic ₹110 • Cheese garlic ₹160 • Stuffed Naan ₹190",
                "desc": "(Plain ₹90  Butter ₹95  Garlic ₹110  Cheese garlic ₹160  Stuffed Naan 190)",
                "image": "assets/menu-items/rs-119.jpg",
                "badge": "VEG",
                "highlight": true
            },
            {
                "id": "rs-120",
                "name": "LACCHA PARATHA",
                "price": 100,
                "displayPrice": "₹100",
                "diet": "VEG",
                "variants": "",
                "desc": "",
                "image": "assets/menu-items/rs-120.jpg",
                "badge": "VEG",
                "highlight": false
            }
        ],
        "hasMilkAddons": false
    },
    {
        "id": "rice-biryani",
        "sectionGroup": "food",
        "index": "16",
        "parentHeader": "FRAGRANT GRAINS",
        "title": "Rice & Biryani",
        "pillar": "AGED BASMATI RICE, PULAO & DUM BIRYANI",
        "spatialQuote": "Aromatic long-grain basmati steamed with whole spices and saffron.",
        "items": [
            {
                "id": "rs-121",
                "name": "PLAIN RICE",
                "price": 230,
                "displayPrice": "₹230",
                "diet": "VEG",
                "variants": "",
                "desc": "",
                "image": "assets/menu-items/rs-121.jpg",
                "badge": "VEG",
                "highlight": false
            },
            {
                "id": "rs-122",
                "name": "JEERA RICE",
                "price": 250,
                "displayPrice": "₹250",
                "diet": "VEG",
                "variants": "",
                "desc": "",
                "image": "assets/menu-items/rs-122.jpg",
                "badge": "VEG",
                "highlight": false
            },
            {
                "id": "rs-123",
                "name": "VEG PILAF",
                "price": 320,
                "displayPrice": "₹320",
                "diet": "VEG",
                "variants": "",
                "desc": "",
                "image": "assets/menu-items/rs-123.jpg",
                "badge": "VEG",
                "highlight": false
            },
            {
                "id": "rs-124",
                "name": "PANEER BIRYANI",
                "price": 580,
                "displayPrice": "₹580",
                "diet": "VEG",
                "variants": "",
                "desc": "",
                "image": "assets/menu-items/rs-124.jpg",
                "badge": "VEG",
                "highlight": false
            },
            {
                "id": "rs-125",
                "name": "PEAS PULAO",
                "price": 320,
                "displayPrice": "₹320",
                "diet": "VEG",
                "variants": "",
                "desc": "",
                "image": "assets/menu-items/rs-125.jpg",
                "badge": "VEG",
                "highlight": false
            },
            {
                "id": "rs-126",
                "name": "HYDERABADI VEG BIRYANI",
                "price": 580,
                "displayPrice": "₹580",
                "diet": "VEG",
                "variants": "",
                "desc": "",
                "image": "assets/menu-items/rs-126.jpg",
                "badge": "VEG",
                "highlight": false
            },
            {
                "id": "rs-127",
                "name": "CHICKEN BIRYANI",
                "price": 680,
                "displayPrice": "₹680",
                "diet": "NON-VEG",
                "variants": "",
                "desc": "",
                "image": "assets/menu-items/rs-127.jpg",
                "badge": "NON-VEG",
                "highlight": false
            }
        ],
        "hasMilkAddons": false
    },
    {
        "id": "dessert",
        "sectionGroup": "food",
        "index": "17",
        "parentHeader": "PATISSERIE & SWEETS",
        "title": "Dessert",
        "pillar": "WARM INDIAN SWEETS, ICE CREAM & CHEESECAKE",
        "spatialQuote": "Sweet finales crafted for lingering conversations in the hills.",
        "items": [
            {
                "id": "rs-128",
                "name": "ICE CREAM",
                "price": 150,
                "displayPrice": "₹150",
                "diet": "VEG",
                "variants": "",
                "desc": "",
                "image": "assets/menu-items/rs-128.jpg",
                "badge": "VEG",
                "highlight": false
            },
            {
                "id": "rs-129",
                "name": "SHAHI TUKDA",
                "price": 300,
                "displayPrice": "₹300",
                "diet": "VEG",
                "variants": "",
                "desc": "",
                "image": "assets/menu-items/rs-129.jpg",
                "badge": "VEG",
                "highlight": false
            },
            {
                "id": "rs-130",
                "name": "SEVIYAN KHEER",
                "price": 280,
                "displayPrice": "₹280",
                "diet": "VEG",
                "variants": "",
                "desc": "",
                "image": "assets/menu-items/rs-130.jpg",
                "badge": "VEG",
                "highlight": false
            },
            {
                "id": "rs-131",
                "name": "HOT GULAB JAMUN",
                "price": 220,
                "displayPrice": "₹220",
                "diet": "VEG",
                "variants": "",
                "desc": "",
                "image": "assets/menu-items/rs-131.jpg",
                "badge": "VEG",
                "highlight": false
            },
            {
                "id": "rs-132",
                "name": "CHEESE CAKE",
                "price": 380,
                "displayPrice": "₹380",
                "diet": "VEG",
                "variants": "",
                "desc": "",
                "image": "assets/menu-items/rs-132.jpg",
                "badge": "VEG",
                "highlight": false
            }
        ],
        "hasMilkAddons": false
    },
    {
        "id": "pet-food",
        "sectionGroup": "food",
        "index": "18",
        "parentHeader": "GABBU'S SPECIAL TABLE",
        "title": "Pet Food",
        "pillar": "WHOLESOME BOWLS & TREATS FOR FOUR-LEGGED GUESTS",
        "spatialQuote": "Prepared with love for every dog who visits Gabbu’s Sanctuary.",
        "items": [
            {
                "id": "rs-133",
                "name": "CURD RICE",
                "price": 180,
                "displayPrice": "₹180",
                "diet": "PET BOWL",
                "variants": "",
                "desc": "",
                "image": "assets/menu-items/rs-133.jpg",
                "badge": "PET BOWL",
                "highlight": false
            },
            {
                "id": "rs-134",
                "name": "BOILED CHICKEN",
                "price": 250,
                "displayPrice": "₹250",
                "diet": "PET BOWL",
                "variants": "",
                "desc": "",
                "image": "assets/menu-items/rs-134.jpg",
                "badge": "PET BOWL",
                "highlight": false
            },
            {
                "id": "rs-135",
                "name": "GRILLED PANEER",
                "price": 220,
                "displayPrice": "₹220",
                "diet": "PET BOWL",
                "variants": "",
                "desc": "",
                "image": "assets/menu-items/rs-135.jpg",
                "badge": "PET BOWL",
                "highlight": false
            },
            {
                "id": "rs-136",
                "name": "BANANA HALWA BITES",
                "price": 280,
                "displayPrice": "₹280",
                "diet": "PET BOWL",
                "variants": "",
                "desc": "",
                "image": "assets/menu-items/rs-136.jpg",
                "badge": "PET BOWL",
                "highlight": false
            },
            {
                "id": "rs-137",
                "name": "BUTTER MILK REFRESHER",
                "price": 150,
                "displayPrice": "₹150",
                "diet": "PET BOWL",
                "variants": "",
                "desc": "",
                "image": "assets/menu-items/rs-137.jpg",
                "badge": "PET BOWL",
                "highlight": false
            },
            {
                "id": "rs-138",
                "name": "PANEER RICE BOWL",
                "price": 250,
                "displayPrice": "₹250",
                "diet": "PET BOWL",
                "variants": "",
                "desc": "",
                "image": "assets/menu-items/rs-138.jpg",
                "badge": "PET BOWL",
                "highlight": false
            },
            {
                "id": "rs-139",
                "name": "CHICKEN RICE BOWL",
                "price": 280,
                "displayPrice": "₹280",
                "diet": "PET BOWL",
                "variants": "",
                "desc": "",
                "image": "assets/menu-items/rs-139.jpg",
                "badge": "PET BOWL",
                "highlight": false
            },
            {
                "id": "rs-140",
                "name": "BANANA YOGURT BOWL",
                "price": 200,
                "displayPrice": "₹200",
                "diet": "PET BOWL",
                "variants": "",
                "desc": "",
                "image": "assets/menu-items/rs-140.jpg",
                "badge": "PET BOWL",
                "highlight": false
            },
            {
                "id": "rs-141",
                "name": "EGG RICE BOWL",
                "price": 200,
                "displayPrice": "₹200",
                "diet": "PET BOWL",
                "variants": "",
                "desc": "",
                "image": "assets/menu-items/rs-141.jpg",
                "badge": "PET BOWL",
                "highlight": false
            },
            {
                "id": "rs-142",
                "name": "BOILED EGG CUBES",
                "price": 180,
                "displayPrice": "₹180",
                "diet": "PET BOWL",
                "variants": "",
                "desc": "",
                "image": "assets/menu-items/rs-142.jpg",
                "badge": "PET BOWL",
                "highlight": false
            }
        ],
        "hasMilkAddons": false
    }
]
};

GABBUS_VERIFIED_MENU.allVisualCategories = [
  ...GABBUS_VERIFIED_MENU.brewingCategories,
  ...GABBUS_VERIFIED_MENU.kitchenCategoriesRegistry
];

window.GABBUS_VERIFIED_MENU = GABBUS_VERIFIED_MENU;

/**
 * ============================================================================
 * GABBU’S ZIRAKPUR — HIGHWAY SANCTUARY FOOD MENU DATA LAYER
 * Completely independent from Manali's kitchen registry for easy updates.
 * STRICTLY RESTAURANT FOOD (zero coffee or beverage items).
 * ============================================================================
 */
const GABBUS_ZIRAKPUR_MENU_DATA = {
  locationId: "zirakpur",
  locationName: "ZIRAKPUR HIGHWAY SANCTUARY",
  statusBadge: "OPENING SOON • LAUNCH PREVIEW",
  kitchenCategoriesRegistry: [
    {
      id: "zh-pizza",
      sectionGroup: "food",
      index: "01",
      parentHeader: "WOOD-FIRED HEARTH",
      title: "Wood-Fired Pizzas",
      pillar: "WOOD-FIRED SOURDOUGH PIZZAS",
      spatialQuote: "Slow-fermented 48-hour sourdough crusts baked in our 450°C stone hearth.",
      items: [
        { id: "zp-01", name: "TRUFFLE WILD MUSHROOM", price: 540, displayPrice: "₹540", diet: "VEG", badge: "HEARTH SIGNATURE", highlight: true, desc: "Porcini and button mushrooms, fior di latte, white truffle oil, shaved parmesan.", image: "assets/menu-items/rs-080.jpg" },
        { id: "zp-02", name: "SMOKED CHICKEN & JALAPEÑO", price: 560, displayPrice: "₹560", diet: "NON-VEG", badge: "HIGHWAY FAVORITE", highlight: true, desc: "Hickory-smoked chicken breast, pickled jalapeño, charred red onion, mozzarella.", image: "assets/menu-items/rs-084.jpg" },
        { id: "zp-03", name: "QUATTRO FORMAGGI", price: 580, displayPrice: "₹580", diet: "VEG", badge: "FOUR CHEESE", highlight: false, desc: "Gorgonzola, smoked scamorza, fresh mozzarella, and aged grana padano with wild honey.", image: "assets/menu-items/rs-082.jpg" },
        { id: "zp-04", name: "RUSTIC MARGHERITA", price: 460, displayPrice: "₹460", diet: "VEG", badge: "CLASSIC", highlight: false, desc: "San Marzano tomato sugo, fresh buffalo mozzarella, hand-torn basil, extra virgin olive oil.", image: "assets/menu-items/rs-079.jpg" }
      ]
    },
    {
      id: "zh-tandoor",
      sectionGroup: "food",
      index: "02",
      parentHeader: "CLAY TANDOOR & GRILLS",
      title: "Tandoori Platters",
      pillar: "CHARCOAL SMOKED TANDOORI HARVEST",
      spatialQuote: "Marinated overnight in mountain spices and roasted in our clay tandoor.",
      items: [
        { id: "zt-01", name: "BHATTI KA MURGH", price: 520, displayPrice: "₹520", diet: "NON-VEG", badge: "CHEF SPECIAL", highlight: true, desc: "Charcoal-roasted chicken steeped in degi mirch, smoked mustard oil, and coriander seeds.", image: "assets/menu-items/rs-022.jpg" },
        { id: "zt-02", name: "KASUNDI PANEER TIKKA", price: 460, displayPrice: "₹460", diet: "VEG", badge: "SIGNATURE", highlight: true, desc: "Malai paneer cubes marinated in Bengali mustard, hung curd, and carom seeds.", image: "assets/menu-items/rs-014.jpg" },
        { id: "zt-03", name: "SMOKY MALAI BROCCOLI", price: 440, displayPrice: "₹440", diet: "VEG", badge: "CREAMY CHAR", highlight: false, desc: "Tender broccoli florets glazed with cream cheese, cardamom, and green chilies.", image: "assets/menu-items/rs-016.jpg" },
        { id: "zt-04", name: "HIGHWAY MUTTON SEEKH", price: 580, displayPrice: "₹580", diet: "NON-VEG", badge: "KITCHEN PRIDE", highlight: true, desc: "Hand-minced spiced lamb skewers grilled over glowing coals, served with mint chutney.", image: "assets/menu-items/rs-025.jpg" }
      ]
    },
    {
      id: "zh-burgers",
      sectionGroup: "food",
      index: "03",
      parentHeader: "GOURMET BURGERS",
      title: "Gourmet Burgers",
      pillar: "HAND-SMASHED ARTISAN BURGERS",
      spatialQuote: "Served on our bakery-fresh brioche buns with rosemary potato wedges.",
      items: [
        { id: "zb-01", name: "THE GRAND GABBU BURGER", price: 490, displayPrice: "₹490", diet: "NON-VEG", badge: "HOUSE ICON", highlight: true, desc: "Double smash patty, aged cheddar, bacon jam, caramelized onions, house truffle sauce.", image: "assets/menu-items/rs-062.jpg" },
        { id: "zb-02", name: "CRISPY BUTTERMILK CHICKEN BURGER", price: 440, displayPrice: "₹440", diet: "NON-VEG", badge: "CRUNCH", highlight: false, desc: "24-hr brined fried chicken breast, chipotle remoulade, crunchy mountain slaw, dill pickles.", image: "assets/menu-items/rs-063.jpg" },
        { id: "zb-03", name: "SMASHED COTTAGE CHEESE BRIOCHE", price: 420, displayPrice: "₹420", diet: "VEG", badge: "VEG PRIDE", highlight: false, desc: "Crusted spiced paneer patty, avocado smash, gouda slice, charred bell pepper relish.", image: "assets/menu-items/rs-060.jpg" }
      ]
    },
    {
      id: "zh-curries",
      sectionGroup: "food",
      index: "04",
      parentHeader: "HIGHWAY CURRIES & DAL",
      title: "Highway Curries",
      pillar: "SLOW-SIMMERED HEARTH CURRIES & DAL",
      spatialQuote: "Rich, aromatic curries cooked in copper handis paired with butter-crisp naan.",
      items: [
        { id: "zc-01", name: "DAL GABBAR MAKHANI", price: 390, displayPrice: "₹390", diet: "VEG", badge: "18-HR SIMMER", highlight: true, desc: "Black lentils slow-cooked overnight with white butter, vine tomatoes, and sweet cream.", image: "assets/menu-items/rs-111.jpg" },
        { id: "zc-02", name: "SMOKED BUTTER CHICKEN", price: 540, displayPrice: "₹540", diet: "NON-VEG", badge: "PUNJAB CLASSIC", highlight: true, desc: "Tandoori chicken steeped in silky makhani gravy infused with dried kasuri methi.", image: "assets/menu-items/rs-118.jpg" },
        { id: "zc-03", name: "PANEER TIKKA LABABDAR", price: 480, displayPrice: "₹480", diet: "VEG", badge: "RICH & CREAMY", highlight: false, desc: "Charred cottage cheese cubes in chunky tomato, cashew, and onion gravy.", image: "assets/menu-items/rs-113.jpg" },
        { id: "zc-04", name: "GARLIC CHUR-CHUR NAAN", price: 140, displayPrice: "₹140", diet: "VEG", badge: "TANDOOR BREAD", highlight: false, desc: "Flaky layered tandoori bread crushed with butter, roasted garlic, and fresh coriander.", image: "assets/menu-items/rs-128.jpg" }
      ]
    },
    {
      id: "zh-bowls",
      sectionGroup: "food",
      index: "05",
      parentHeader: "PASTAS & MEZZE",
      title: "Pastas & Bowls",
      pillar: "HANDMADE PASTAS & COMFORT BOWLS",
      spatialQuote: "Comforting pasta bowls and wholesome highway grain bowls.",
      items: [
        { id: "zw-01", name: "TRUFFLE WILD MUSHROOM PENNE", price: 480, displayPrice: "₹480", diet: "VEG", badge: "ITALIAN CRAFT", highlight: true, desc: "Bronze-cut penne tossed in rich parmesan cream, forest mushrooms, and fresh thyme.", image: "assets/menu-items/rs-074.jpg" },
        { id: "zw-02", name: "SMOKED CHICKEN RIGATONI", price: 510, displayPrice: "₹510", diet: "NON-VEG", badge: "CREAMY TOSS", highlight: false, desc: "Rigatoni with slow-simmered chicken ragout, sundried tomatoes, and fresh basil.", image: "assets/menu-items/rs-076.jpg" },
        { id: "zw-03", name: "MEDITERRANEAN MEZZE PLATTER", price: 460, displayPrice: "₹460", diet: "VEG", badge: "SHARING", highlight: false, desc: "Creamy hummus, labneh, crispy falafel, kalamata olives, and warm toasted pita.", image: "assets/menu-items/rs-034.jpg" }
      ]
    },
    {
      id: "zh-bakery",
      sectionGroup: "food",
      index: "06",
      parentHeader: "HEARTH BAKERY DESSERTS",
      title: "Hearth Desserts",
      pillar: "BAKERY CREATIONS & SWEET TREATS",
      spatialQuote: "Freshly baked every morning in our wood-fired pastry ovens.",
      items: [
        { id: "zd-01", name: "WARM BELGIAN CHOCOLATE TORTE", price: 320, displayPrice: "₹320", diet: "VEG", badge: "DECICIOUS", highlight: true, desc: "Flourless 70% dark chocolate torte with toasted walnuts and salted caramel drizzle.", image: "assets/menu-items/rs-136.jpg" },
        { id: "zd-02", name: "HIMALAYAN APPLE & CINNAMON TART", price: 290, displayPrice: "₹290", diet: "VEG", badge: "FRUIT BAKE", highlight: true, desc: "Local spiced apple slices baked inside flaky butter pastry with vanilla bean cream.", image: "assets/menu-items/rs-135.jpg" },
        { id: "zd-03", name: "PISTACHIO TRES LECHES", price: 340, displayPrice: "₹340", diet: "VEG", badge: "HOUSE FAVORITE", highlight: false, desc: "Light sponge soaked in three milks, scented with saffron, and topped with roasted pistachios.", image: "assets/menu-items/rs-138.jpg" }
      ]
    },
    {
      id: "zh-pet",
      sectionGroup: "food",
      index: "07",
      parentHeader: "GABBU’S HIGHWAY PET MEALS",
      title: "Pet Bowls",
      pillar: "WHOLESOME DOG MEALS (PUP-APPROVED)",
      spatialQuote: "Clean, salt-free, veterinarian-approved meals crafted for travelling dogs.",
      items: [
        { id: "zp-p01", name: "SLOW-COOKED CHICKEN & CARROT BOWL", price: 220, displayPrice: "₹220", diet: "PET BOWL", badge: "PET FRIENDLY", highlight: true, desc: "Boiled boneless chicken breast, pumpkin puree, carrots, and brown rice with zero seasoning.", image: "assets/menu-items/rs-140.jpg" },
        { id: "zp-p02", name: "EGG & BROCCOLI BOWL", price: 190, displayPrice: "₹190", diet: "PET BOWL", badge: "PET FRIENDLY", highlight: false, desc: "Hard-boiled country eggs, steamed broccoli florets, and light bone broth.", image: "assets/menu-items/rs-141.jpg" },
        { id: "zp-p03", name: "PEANUT BUTTER OAT BISCUITS", price: 140, displayPrice: "₹140", diet: "PET BOWL", badge: "BAKERY TREAT", highlight: false, desc: "House-baked whole-wheat biscuits made with pure peanut butter and rolled oats.", image: "assets/menu-items/rs-142.jpg" }
      ]
    }
  ]
};

window.GABBUS_ZIRAKPUR_MENU_DATA = GABBUS_ZIRAKPUR_MENU_DATA;
