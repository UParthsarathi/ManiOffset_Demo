export const categories = [
  { name: "Books and Publications" },
  { name: "Academic and Educational" },
  { name: "Marketing and Promotional Materials" },
  { name: "Business and Corporate" },
  { name: "Banking and Financial" },
  { name: "Product Support Materials" },
  { name: "All Products" },
];

export const products = [
  // Books and Publications
  { id: 1, title: "Softcover Books (Paperback)", categoryLabel: "BOOKS AND PUBLICATIONS", category: "Books and Publications", description: "Premium paperback formats for novels and catalogs.", imageUrl: "https://picsum.photos/seed/bp1/400/300" },
  { id: 2, title: "Hardcover Books (Hardbound)", categoryLabel: "BOOKS AND PUBLICATIONS", category: "Books and Publications", description: "Durable and elegant hardbound covers with pristine binding.", imageUrl: "https://picsum.photos/seed/bp2/400/300" },
  { id: 3, title: "Magazines and Journals", categoryLabel: "BOOKS AND PUBLICATIONS", category: "Books and Publications", description: "Perfect bound or saddle-stitched for high-volume circulations.", imageUrl: "https://picsum.photos/seed/bp3/400/300" },
  { id: 4, title: "Comics and Graphic Novels", categoryLabel: "BOOKS AND PUBLICATIONS", category: "Books and Publications", description: "Vibrant color reproduction to showcase your inked art.", imageUrl: "https://picsum.photos/seed/bp4/400/300" },
  { id: 5, title: "Religious and Spiritual Books", categoryLabel: "BOOKS AND PUBLICATIONS", category: "Books and Publications", description: "Specialized printing for religious texts and spiritual guidance books.", imageUrl: "https://picsum.photos/seed/bp5/400/300" },
  
  // Academic and Educational
  { id: 6, title: "Textbooks, Guides, and Educational Books", categoryLabel: "ACADEMIC", category: "Academic and Educational", description: "Standard educational texts with high paper resilience.", imageUrl: "https://picsum.photos/seed/ae1/400/300" },
  { id: 7, title: "School and College Notebooks", categoryLabel: "ACADEMIC", category: "Academic and Educational", description: "Bulk ruled lines or grid layouts for academic institutions.", imageUrl: "https://picsum.photos/seed/ae2/400/300" },
  { id: 8, title: "Academic Diaries and Planners", categoryLabel: "ACADEMIC", category: "Academic and Educational", description: "Customizable academic diaries for students and staff.", imageUrl: "https://picsum.photos/seed/ae3/400/300" },
  { id: 9, title: "Record Books and Lab Manuals", categoryLabel: "ACADEMIC", category: "Academic and Educational", description: "Durable record books tailored for lab work and data collection.", imageUrl: "https://picsum.photos/seed/ae4/400/300" },
  { id: 10, title: "Application Forms, Answer Sheets, and Exam Booklets", categoryLabel: "ACADEMIC", category: "Academic and Educational", description: "Standardized booklets and forms for examination purposes.", imageUrl: "https://picsum.photos/seed/ae5/400/300" },
  { id: 11, title: "Report Cards, Certificates, and Marksheets", categoryLabel: "ACADEMIC", category: "Academic and Educational", description: "High-quality, tamper-evident printing for academic results.", imageUrl: "https://picsum.photos/seed/ae6/400/300" },
  { id: 12, title: "Educational and Kids Charts", categoryLabel: "ACADEMIC", category: "Academic and Educational", description: "Colorful, large-format charts for classroom and home learning.", imageUrl: "https://picsum.photos/seed/ae7/400/300" },
  
  // Marketing and Promotional Materials
  { id: 13, title: "Flyers, Leaflets, and Pamphlets", categoryLabel: "MARKETING", category: "Marketing and Promotional Materials", description: "High-speed rotary prints on glossy or matte stocks.", imageUrl: "https://picsum.photos/seed/mp1/400/300" },
  { id: 14, title: "Brochures and Booklets", categoryLabel: "MARKETING", category: "Marketing and Promotional Materials", description: "Standard tri-folds and multi-page corporate profiles.", imageUrl: "https://picsum.photos/seed/mp2/400/300" },
  { id: 15, title: "Product Catalogues", categoryLabel: "MARKETING", category: "Marketing and Promotional Materials", description: "Comprehensive product showcases with rich color accuracy.", imageUrl: "https://picsum.photos/seed/mp3/400/300" },
  { id: 16, title: "Monthly Wall Calendars", categoryLabel: "MARKETING", category: "Marketing and Promotional Materials", description: "Custom wall calendars for year-round brand visibility.", imageUrl: "https://picsum.photos/seed/mp4/400/300" },
  { id: 17, title: "Academic and Corporate Invitation Cards", categoryLabel: "MARKETING", category: "Marketing and Promotional Materials", description: "Elegant invitations for formal corporate and academic events.", imageUrl: "https://picsum.photos/seed/mp5/400/300" },
  { id: 18, title: "Postcards", categoryLabel: "MARKETING", category: "Marketing and Promotional Materials", description: "Sturdy promotional postcards for direct mail campaigns.", imageUrl: "https://picsum.photos/seed/mp6/400/300" },
  
  // Business and Corporate
  { id: 19, title: "Visiting Cards", categoryLabel: "BUSINESS", category: "Business and Corporate", description: "Professional density boards with embossing and foils.", imageUrl: "https://picsum.photos/seed/bc1/400/300" },
  { id: 20, title: "Letterheads and Envelopes", categoryLabel: "BUSINESS", category: "Business and Corporate", description: "Watermarked offset letterheads for official communications.", imageUrl: "https://picsum.photos/seed/bc2/400/300" },
  { id: 21, title: "Business Diaries and Planners", categoryLabel: "BUSINESS", category: "Business and Corporate", description: "Premium executive diaries and daily planners.", imageUrl: "https://picsum.photos/seed/bc3/400/300" },
  { id: 22, title: "Company Folders", categoryLabel: "BUSINESS", category: "Business and Corporate", description: "Branded presentation folders with pocket and slit options.", imageUrl: "https://picsum.photos/seed/bc4/400/300" },
  { id: 23, title: "Certificates and Award Cards", categoryLabel: "BUSINESS", category: "Business and Corporate", description: "Specialty paper printing for corporate recognition.", imageUrl: "https://picsum.photos/seed/bc5/400/300" },
  
  // Banking and Financial
  { id: 24, title: "Passbooks", categoryLabel: "BANKING", category: "Banking and Financial", description: "Thread-sewn banking books with durable outer casings.", imageUrl: "https://picsum.photos/seed/bf1/400/300" },
  { id: 25, title: "Challans and Deposit Slips", categoryLabel: "BANKING", category: "Banking and Financial", description: "Carbonless multi-part forms for quick financial processing.", imageUrl: "https://picsum.photos/seed/bf2/400/300" },
  { id: 26, title: "Banking Forms", categoryLabel: "BANKING", category: "Banking and Financial", description: "Standardized secure forms for various banking operations.", imageUrl: "https://picsum.photos/seed/bf3/400/300" },
  
  // Product Support Materials
  { id: 27, title: "Instruction Manuals and Guides", categoryLabel: "SUPPORT", category: "Product Support Materials", description: "Detailed folding guides packed out directly into your arrays.", imageUrl: "https://picsum.photos/seed/ps1/400/300" },
  { id: 28, title: "Product Inserts and Leaflets", categoryLabel: "SUPPORT", category: "Product Support Materials", description: "Compact informational inserts for packaging additions.", imageUrl: "https://picsum.photos/seed/ps2/400/300" },
  { id: 29, title: "Warranty, Registration, and Service Cards", categoryLabel: "SUPPORT", category: "Product Support Materials", description: "Important customer guarantee documentation.", imageUrl: "https://picsum.photos/seed/ps3/400/300" }
];
