export const products = [
  {
    slug: 'hex-bolt',
    name: 'Hex Bolt',
    category: 'Bolts',
    short:
      'High-strength hex bolts for powertrain, chassis, and structural fastening.',
    description:
      'Precision-rolled hex bolts engineered for repeatable clamp load, vibration resistance, and clean torque behavior across automotive and industrial assemblies.',
    material: 'Alloy Steel / Stainless Steel',
    finish: 'Zinc Nickel, Black Oxide, Phosphate',
    thread: 'Metric, Unified, Fine Pitch',
    sizeRange: 'M4 - M24',
    applications: ['Chassis', 'Powertrain', 'Suspension', 'Industrial Frames'],
    features: ['Heat-treated', 'Torque stable', 'Corrosion resistant'],
    gallery: [
      '/images/hex-bolt.png',
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80',
    ],
    specs: {
      'Tensile Strength': '800 - 1200 MPa',
      'Thread Accuracy': '6g / 6h',
      'Heat Treatment': 'Q&T / Case Hardened',
      Coating: 'ISO compliant',
      Hardness: '24 - 42 HRC',
    },
  },
  {
    slug: 'hex-nut',
    name: 'Hex Nut',
    category: 'Nuts',
    short: 'Matched nuts built for precise clamp load and clean assembly.',
    description:
      'Cold-formed hex nuts with controlled dimensional accuracy, thread cleanliness, and premium finish options for OEM lines and aftermarket kits.',
    material: 'Carbon Steel / Alloy Steel',
    finish: 'Plain, Zinc, Zinc Flake, Geomet',
    thread: 'Metric Coarse / Fine',
    sizeRange: 'M4 - M30',
    applications: ['Assembly Lines', 'Maintenance Kits', 'Subframes'],
    features: ['Low burr', 'Thread gauged', 'Batch traceable'],
    gallery: [
      '/images/hex-nut.png',
      'https://images.unsplash.com/photo-1610992015732-2449b0de0a86?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&w=1200&q=80',
    ],
    specs: {
      'Thread Class': '6H / 6G',
      'Proof Load': 'Per ISO 898',
      'Corrosion Test': 'Up to 1000 hrs',
      Standard: 'DIN / ISO / ASTM',
      Traceability: 'Heat code + lot code',
    },
  },
  {
    slug: 'flange-bolt',
    name: 'Flange Bolt',
    category: 'Bolts',
    short: 'Integrated flange bolts that simplify assembly and improve load spread.',
    description:
      'Designed for faster assembly, reduced part count, and stable seating under cyclic load in automotive and heavy equipment applications.',
    material: 'Alloy Steel',
    finish: 'Zinc Nickel, Dacromet',
    thread: 'Metric Fine',
    sizeRange: 'M5 - M20',
    applications: ['Transmission', 'Drive Train', 'Machine Frames'],
    features: ['Wide bearing face', 'One-part solution', 'High fatigue life'],
    gallery: [
      '/images/flange-bolt.png',
      'https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1518085250887-98f8f4d5ff0f?auto=format&fit=crop&w=1200&q=80',
    ],
    specs: {
      'Load Distribution': 'Integrated flange',
      'Vibration Resistance': 'High',
      'Surface Finish': 'Automotive grade',
      'Dimensional Control': 'Cpk focused',
      'Salt Spray': 'Up to 720 hrs',
    },
  },
  {
    slug: 'socket-bolt',
    name: 'Socket Bolt',
    category: 'Bolts',
    short: 'Compact socket bolts for precision, serviceability, and tight spaces.',
    description:
      'High-precision socket bolts for concealed fastening, machined assemblies, and applications demanding neat fit and elevated serviceability.',
    material: 'Alloy Steel / Stainless Steel',
    finish: 'Passivated, Black Oxide',
    thread: 'Metric Fine / UNF',
    sizeRange: 'M3 - M16',
    applications: ['Machine Tools', 'Robotics', 'Precision Fixtures'],
    features: ['Internal hex drive', 'Compact head', 'Clean aesthetics'],
    gallery: [
      '/images/socket-bolt.png',
      'https://images.unsplash.com/photo-1509749837427-ac94a2553d0e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
    ],
    specs: {
      'Drive Type': 'Hex socket',
      'Tolerance': 'Precision machined',
      'Finish Options': 'Low reflectivity',
      'Use Case': 'Aesthetic + functional',
      'Packaging': 'Kitted / bulk',
    },
  },
  {
    slug: 'brake-end-fittings',
    name: 'Brake End Fittings',
    category: 'Fittings',
    short: 'Critical fittings made for safe, repeatable brake system connections.',
    description:
      'Brake end fittings are produced with tight dimensional control, premium surface protection, and traceable quality documentation for safety-critical systems.',
    material: 'Carbon Steel / Stainless Steel',
    finish: 'Zinc Nickel / Phosphate',
    thread: 'Custom as per drawing',
    sizeRange: 'Custom',
    applications: ['Brake Lines', 'Commercial Vehicles', 'Rail Systems'],
    features: ['Safety critical', 'Drawing driven', 'Traceable'],
    gallery: [
      '/images/brake-end-fittings.png',
      'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1518611530017-9279788f3bb6?auto=format&fit=crop&w=1200&q=80',
    ],
    specs: {
      'Safety Focus': 'Critical system',
      'Leak Integrity': 'Verified',
      'Documentation': 'PPAP / CoC',
      'Dimensional Check': '100%',
      'Assembly Fit': 'Optimized',
    },
  },
  {
    slug: 'studs',
    name: 'Studs',
    category: 'Fastening Systems',
    short: 'Threaded studs for engines, turbines, and precision machine assemblies.',
    description:
      'Studs are manufactured for load sharing, repeatable torquing, and high-temperature service conditions across industrial and automotive environments.',
    material: 'Alloy Steel / Stainless Steel / Inconel',
    finish: 'Oxidized, Nickel, Passivated',
    thread: 'Double end / fully threaded',
    sizeRange: 'M5 - M36',
    applications: ['Engines', 'Turbines', 'Compressors', 'Heavy Machinery'],
    features: ['Heat resistant', 'Stable preload', 'Custom lengths'],
    gallery: [
      '/images/studs.png',
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1518322032786-9a6d5f6f0d77?auto=format&fit=crop&w=1200&q=80',
    ],
    specs: {
      'Temperature Range': 'Up to 650C',
      'Thread Control': 'Precision rolled',
      'Surface Integrity': 'Premium',
      'Length Control': 'Custom',
      'Use Case': 'High-load joints',
    },
  },
  {
    slug: 'washers',
    name: 'Washers',
    category: 'Accessories',
    short: 'Load-spreading washers with clean finish and dimensional consistency.',
    description:
      'Flat, spring, and specialty washers built to distribute load, manage vibration, and support premium assembly workflows.',
    material: 'Carbon Steel / Stainless Steel / Spring Steel',
    finish: 'Zinc, Blue Passivation, Plain',
    thread: 'N/A',
    sizeRange: 'M3 - M30',
    applications: ['General Assembly', 'Support Hardware', 'Subsystems'],
    features: ['Accurate OD/ID', 'Smooth edge', 'Ready to kit'],
    gallery: [
      '/images/hex-nut.png',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80',
    ],
    specs: {
      'Thickness Control': 'Tight',
      'Flatness': 'Verified',
      'Batch Control': 'Labelled',
      'Coating': 'As required',
      'Assembly Role': 'Load spread',
    },
  },
  {
    slug: 'custom-components',
    name: 'Custom Components',
    category: 'Custom',
    short: 'Drawing-based fasteners and precision parts made to exact requirements.',
    description:
      'From cold forged shapes to precision machined specials, we create parts from customer drawings with engineering support and production-grade repeatability.',
    material: 'As specified',
    finish: 'As specified',
    thread: 'Custom',
    sizeRange: 'Custom',
    applications: ['OEM Specials', 'Prototype Programs', 'Export Kits'],
    features: ['Drawing driven', 'Engineering review', 'Rapid sampling'],
    gallery: [
      '/images/flange-bolt.png',
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1565087157823-6a4e7a9a3e4a?auto=format&fit=crop&w=1200&q=80',
    ],
    specs: {
      'Engineering Input': 'Available',
      'Sampling': 'Fast track',
      'Documentation': 'Export ready',
      'Volume': 'Prototype to mass production',
      'Customization': 'Full',
    },
  },
]

export const productCategories = [
  'All',
  'Bolts',
  'Nuts',
  'Fittings',
  'Fastening Systems',
  'Accessories',
  'Custom',
]

export const boltSizeGuide = [
  { size: 'M4', use: 'Instrumentation, trims, compact brackets' },
  { size: 'M6', use: 'Panels, assemblies, light machinery' },
  { size: 'M8', use: 'Automotive brackets, general fixtures' },
  { size: 'M10', use: 'Chassis, structural mounts' },
  { size: 'M12', use: 'Heavy load joints, driveline parts' },
  { size: 'M16+', use: 'Industrial structures, machinery' },
]

export const threadGuide = [
  {
    heading: 'Metric Coarse',
    note: 'Best for general assembly and fast installation.',
  },
  {
    heading: 'Metric Fine',
    note: 'Higher clamp accuracy and better vibration resistance.',
  },
  {
    heading: 'UNF / UNC',
    note: 'Common for legacy equipment and export programs.',
  },
  {
    heading: 'Custom Threads',
    note: 'Matched to engineering drawings and customer standards.',
  },
]

export const materialOptions = [
  'Alloy Steel',
  'Carbon Steel',
  'Stainless Steel',
  'Spring Steel',
  'Inconel',
]

export const finishOptions = [
  'Zinc Nickel',
  'Black Oxide',
  'Dacromet',
  'Geomet',
  'Passivated',
  'Phosphate',
]

export const catalogHighlights = [
  'Cold forged and precision machined production',
  'Export-grade traceability and documentation',
  'Automotive and industrial engineering support',
  'Premium custom packaging and kitting',
]

export const productBySlug = products.reduce((map, product) => {
  map[product.slug] = product
  return map
}, {})
