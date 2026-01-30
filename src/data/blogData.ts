export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
  content: string; // HTML content with Tailwind classes
  relatedArticles: string[]; // IDs of related articles
}

// Helper to generate consistent HTML structure for common sections
// Note: In a real app, this data might come from a CMS. Here we hardcode for the requirement.

export const blogPosts: BlogPost[] = [
  // BLOG 1: NORCET Strategy
  {
    id: "1",
    slug: "how-to-crack-aiims-norcet-exam-strategy",
    title: "How to Crack AIIMS NORCET 2025: The Ultimate Preparation Guide",
    excerpt: "A comprehensive, step-by-step guide to clearing the AIIMS Nursing Officer Recruitment Common Eligibility Test. Includes detailed study plans, book lists, and previous year analysis.",
    date: "October 24, 2024",
    author: "NNLONE Expert Faculty",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    relatedArticles: ["2", "3", "7", "8", "9", "6"],
    content: `
      <div class="blog-content space-y-8 text-gray-800 leading-relaxed">
        <div class="bg-blue-50 border-l-4 border-brand-blue p-6 rounded-r-lg shadow-sm">
          <h3 class="text-xl font-bold text-brand-blue mb-2">Quick Summary</h3>
          <p class="text-gray-700">The AIIMS NORCET is India's most competitive nursing exam. To crack it in 2025, you need a focused 6-month strategy covering 200 MCQs. This guide covers the complete syllabus, a 6-month study plan, best books, and common pitfalls.</p>
        </div>
        
        <div class="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h3 class="text-lg font-bold text-gray-900 mb-4">Table of Contents</h3>
          <ul class="grid md:grid-cols-2 gap-2 text-sm text-brand-blue font-medium">
            <li><a href="#intro" class="hover:underline">1. Introduction</a></li>
            <li><a href="#eligibility" class="hover:underline">2. Eligibility Criteria</a></li>
            <li><a href="#pattern" class="hover:underline">3. Exam Pattern</a></li>
            <li><a href="#syllabus" class="hover:underline">4. Syllabus Breakdown</a></li>
            <li><a href="#plan" class="hover:underline">5. 6-Month Study Plan</a></li>
            <li><a href="#books" class="hover:underline">6. Best Books</a></li>
            <li><a href="#pyq" class="hover:underline">7. Importance of PYQs</a></li>
            <li><a href="#attempt" class="hover:underline">8. Attempt Strategy</a></li>
            <li><a href="#negative" class="hover:underline">9. Negative Marking</a></li>
            <li><a href="#coaching" class="hover:underline">10. Coaching vs Self Study</a></li>
            <li><a href="#mistakes" class="hover:underline">11. Common Mistakes</a></li>
            <li><a href="#scenario" class="hover:underline">12. Real Life Scenario</a></li>
            <li><a href="#revision" class="hover:underline">13. Revision Strategy</a></li>
            <li><a href="#mental" class="hover:underline">14. Mental Health</a></li>
            <li><a href="#final" class="hover:underline">15. Final Week Tips</a></li>
            <li><a href="#day" class="hover:underline">16. Exam Day Checklist</a></li>
            <li><a href="#glossary" class="hover:underline">17. Glossary</a></li>
            <li><a href="#faq" class="hover:underline">18. FAQs</a></li>
          </ul>
        </div>

        <h2 id="intro" class="text-2xl font-bold text-gray-900">1. Introduction to AIIMS NORCET</h2>
        <p>The Nursing Officer Recruitment Common Eligibility Test (NORCET) is the gateway to AIIMS. It is conducted twice a year by AIIMS New Delhi.</p>
        <p>It tests clinical skills and theoretical knowledge. Thousands apply for a few seats, making it highly competitive.</p>

        <h2 id="eligibility" class="text-2xl font-bold text-gray-900">2. Eligibility Criteria</h2>
        <p>Ensure you meet the criteria before applying. B.Sc Nursing freshers are eligible, but GNM candidates need experience.</p>
        <p>See the comparison below:</p>
        <table class="w-full border border-gray-300 mb-4">
          <thead class="bg-brand-blue text-white"><tr><th class="p-2">Criteria</th><th class="p-2">B.Sc Nursing</th><th class="p-2">GNM</th></tr></thead>
          <tbody>
            <tr><td class="p-2 border">Experience</td><td class="p-2 border">Nil</td><td class="p-2 border">2 Years (50 Bedded)</td></tr>
            <tr><td class="p-2 border">Age</td><td class="p-2 border">18-30</td><td class="p-2 border">18-30</td></tr>
          </tbody>
        </table>

        <h2 id="pattern" class="text-2xl font-bold text-gray-900">3. Exam Pattern</h2>
        <p>The exam consists of 200 MCQs. 180 are from Nursing subjects and 20 from General Knowledge/Aptitude.</p>
        <p>The duration is 3 hours (180 minutes). It is a Computer Based Test (CBT).</p>

        <h2 id="syllabus" class="text-2xl font-bold text-gray-900">4. Syllabus Breakdown</h2>
        <p>The syllabus covers all 4 years of B.Sc Nursing. Key subjects include MSN, OBG, and Pediatrics.</p>
        <p>Don't ignore minor subjects like Research and Management as they are rank deciders.</p>

        <h2 id="plan" class="text-2xl font-bold text-gray-900">5. 6-Month Study Plan</h2>
        <p>Divide your time effectively. Spend the first 2 months on basics.</p>
        <p>Spend the next 2 months on core subjects and the last 2 on revision and mock tests.</p>

        <h2 id="books" class="text-2xl font-bold text-gray-900">6. Best Books</h2>
        <p>Target High is great for MCQs. Saunders is best for theory and concepts.</p>
        <p>PR Yadav is good for volume practice. NNLONE notes are concise for revision.</p>

        <h2 id="pyq" class="text-2xl font-bold text-gray-900">7. Importance of PYQs</h2>
        <p>Previous Year Questions repeat often. Analyze the last 5 years of papers.</p>
        <p>Understand the pattern of options, not just the questions.</p>

        <h2 id="attempt" class="text-2xl font-bold text-gray-900">8. Attempt Strategy</h2>
        <p>Use the 3-round strategy. First round for sure-shot answers.</p>
        <p>Second round for 50-50 guesses. Third round for review.</p>

        <h2 id="negative" class="text-2xl font-bold text-gray-900">9. Negative Marking</h2>
        <p>1/3rd negative marking is strict. Avoid wild guessing.</p>
        <p>Only guess if you can eliminate 2 options.</p>

        <h2 id="coaching" class="text-2xl font-bold text-gray-900">10. Coaching vs Self Study</h2>
        <p>Coaching gives structure. Self-study gives flexibility.</p>
        <p>Choose what works for your discipline level.</p>

        <div class="bg-red-50 border-l-4 border-brand-red p-6 my-6">
          <h3 class="text-xl font-bold text-brand-red">11. Common Mistakes</h3>
          <ul class="list-disc pl-5">
            <li>Ignoring Aptitude section.</li>
            <li>Over-attempting negative questions.</li>
            <li>Not sleeping before exam.</li>
          </ul>
        </div>

        <h2 id="scenario" class="text-2xl font-bold text-gray-900">12. Real Life Scenario</h2>
        <p>Consider a working nurse. She studies 4 hours a day.</p>
        <p>She uses weekends for mock tests. Consistency beats intensity.</p>

        <h2 id="revision" class="text-2xl font-bold text-gray-900">13. Revision Strategy</h2>
        <p>Revise notes weekly. Do not read new books in the last month.</p>
        <p>Use short notes for quick glances.</p>

        <h2 id="mental" class="text-2xl font-bold text-gray-900">14. Mental Health</h2>
        <p>Stay calm. Anxiety reduces performance.</p>
        <p>Take breaks and talk to family.</p>

        <h2 id="final" class="text-2xl font-bold text-gray-900">15. Final Week Tips</h2>
        <p>Focus on data and values. Lab values, drug doses, etc.</p>
        <p>Stop taking heavy mocks 2 days before.</p>

        <h2 id="day" class="text-2xl font-bold text-gray-900">16. Exam Day Checklist</h2>
        <ul class="list-decimal pl-5">
            <li>Admit Card</li>
            <li>ID Proof</li>
            <li>Water Bottle</li>
        </ul>
        <p>Reach the center early.</p>

        <h2 id="glossary" class="text-2xl font-bold text-gray-900">17. Glossary</h2>
        <div class="grid grid-cols-2 gap-4">
            <div class="bg-gray-100 p-2"><strong>CBT:</strong> Computer Based Test</div>
            <div class="bg-gray-100 p-2"><strong>IBQ:</strong> Image Based Question</div>
        </div>

        <h2 id="faq" class="text-2xl font-bold text-gray-900">18. FAQs</h2>
        <details class="mb-2"><summary class="font-bold">Is GNM eligible?</summary>Yes, with 2 years exp.</details>
        <details class="mb-2"><summary class="font-bold">Age limit?</summary>30 years for General.</details>
      </div>
    `
  },

  // BLOG 2: RRB Strategy
  {
    id: "2",
    slug: "rrb-nursing-officer-syllabus-strategy-2025",
    title: "RRB Nursing Officer 2025: Complete Syllabus & Strategy",
    excerpt: "Railway Recruitment Board (RRB) is expected to announce vacancies. Learn how to crack the exam with a specific focus on General Science and Arithmetic.",
    date: "October 26, 2024",
    author: "NNLONE Team",
    image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    relatedArticles: ["1", "3", "4", "5", "7", "8"],
    content: `
      <div class="blog-content space-y-8 text-gray-800 leading-relaxed">
        <div class="bg-blue-50 border-l-4 border-brand-blue p-6 rounded-r-lg shadow-sm">
          <h3 class="text-xl font-bold text-brand-blue mb-2">Quick Summary</h3>
          <p class="text-gray-700">RRB Nursing Officer exam is unique because it has a heavy weightage on non-nursing subjects like Math, Reasoning, and Science (30%). This guide breaks down the 100-question pattern and provides a strategy to balance technical and non-technical sections.</p>
        </div>

        <div class="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h3 class="text-lg font-bold text-gray-900 mb-4">Table of Contents</h3>
          <ul class="grid md:grid-cols-2 gap-2 text-sm text-brand-blue font-medium">
            <li><a href="#intro" class="hover:underline">1. Introduction to RRB</a></li>
            <li><a href="#vacancy" class="hover:underline">2. Upcoming Vacancies</a></li>
            <li><a href="#pattern" class="hover:underline">3. Exam Pattern</a></li>
            <li><a href="#syllabus-nursing" class="hover:underline">4. Nursing Syllabus</a></li>
            <li><a href="#syllabus-general" class="hover:underline">5. General Syllabus</a></li>
            <li><a href="#books" class="hover:underline">6. Recommended Books</a></li>
            <li><a href="#math-strategy" class="hover:underline">7. Math & Reasoning Strategy</a></li>
            <li><a href="#science-strategy" class="hover:underline">8. General Science Strategy</a></li>
            <li><a href="#study-plan" class="hover:underline">9. 3-Month Study Plan</a></li>
            <li><a href="#pyq" class="hover:underline">10. PYQ Analysis</a></li>
            <li><a href="#mistakes" class="hover:underline">11. Common Mistakes</a></li>
            <li><a href="#scenario" class="hover:underline">12. Example Scenario</a></li>
            <li><a href="#revision" class="hover:underline">13. Revision Tips</a></li>
            <li><a href="#cut-off" class="hover:underline">14. Expected Cut-off</a></li>
            <li><a href="#job-profile" class="hover:underline">15. Job Profile & Salary</a></li>
            <li><a href="#final-tips" class="hover:underline">16. Final Tips</a></li>
            <li><a href="#glossary" class="hover:underline">17. Glossary</a></li>
            <li><a href="#faq" class="hover:underline">18. FAQs</a></li>
          </ul>
        </div>

        <h2 id="intro" class="text-2xl font-bold text-gray-900">1. Introduction to RRB Nursing Officer</h2>
        <p>The Railway Recruitment Board (RRB) conducts exams for paramedical staff. The Nursing Superintendent post is highly coveted due to job security and perks.</p>
        <p>Unlike AIIMS, RRB exams are not annual. They come in cycles, so seizing the opportunity is crucial.</p>

        <h2 id="vacancy" class="text-2xl font-bold text-gray-900">2. Upcoming Vacancies 2025</h2>
        <p>Rumors suggest a massive recruitment drive in 2025. Keep your documents ready.</p>
        <p>Vacancies are usually zone-wise (e.g., Northern Railway, Western Railway).</p>

        <h2 id="pattern" class="text-2xl font-bold text-gray-900">3. Exam Pattern</h2>
        <p>The exam is a CBT with 100 questions. 70 Professional (Nursing) + 30 General.</p>
        <table class="w-full border border-gray-300 mb-4">
          <thead class="bg-brand-blue text-white"><tr><th class="p-2">Section</th><th class="p-2">Questions</th><th class="p-2">Marks</th></tr></thead>
          <tbody>
            <tr><td class="p-2 border">Nursing</td><td class="p-2 border">70</td><td class="p-2 border">70</td></tr>
            <tr><td class="p-2 border">General Awareness/Math/Science</td><td class="p-2 border">30</td><td class="p-2 border">30</td></tr>
          </tbody>
        </table>

        <h2 id="syllabus-nursing" class="text-2xl font-bold text-gray-900">4. Nursing Syllabus</h2>
        <p>Focus on Anatomy, Physiology, MSN, and Community Health. RRB asks direct questions.</p>
        <p>Less clinical scenarios compared to NORCET, more factual data.</p>

        <h2 id="syllabus-general" class="text-2xl font-bold text-gray-900">5. General Syllabus</h2>
        <p>This is the game changer. Includes Arithmetic (Profit/Loss, % etc.), Reasoning, and General Science (Physics, Chem, Bio up to 10th).</p>
        <p>Many nurses ignore this and fail to clear the merit.</p>

        <h2 id="books" class="text-2xl font-bold text-gray-900">6. Recommended Books</h2>
        <p>For Nursing: Target High. For General: Lucent GK and RS Aggarwal for Math.</p>
        <p>Use NNLONE's RRB special module for targeted practice.</p>

        <h2 id="math-strategy" class="text-2xl font-bold text-gray-900">7. Math & Reasoning Strategy</h2>
        <p>Practice 1 hour daily. Focus on easy topics like Series, Coding-Decoding.</p>
        <p>Don't fear math; the level is basic (10th standard).</p>

        <h2 id="science-strategy" class="text-2xl font-bold text-gray-900">8. General Science Strategy</h2>
        <p>Read NCERT 9th and 10th Science. Biology is most important.</p>
        <p>Physics formulas and Chemical names are often asked.</p>

        <h2 id="study-plan" class="text-2xl font-bold text-gray-900">9. 3-Month Study Plan</h2>
        <p>Month 1: Cover Nursing Theory. Month 2: Focus on Math/Science. Month 3: Mock Tests.</p>
        <p>Take at least 20 full-length mocks.</p>

        <h2 id="pyq" class="text-2xl font-bold text-gray-900">10. PYQ Analysis</h2>
        <p>RRB repeats questions from previous years (2015, 2019). Solve all shifts.</p>
        <p>Download PYQs from the NNLONE PYQ section.</p>

        <div class="bg-red-50 border-l-4 border-brand-red p-6 my-6">
          <h3 class="text-xl font-bold text-brand-red">11. Common Mistakes</h3>
          <ul class="list-disc pl-5">
            <li>Skipping Math completely.</li>
            <li>Focusing only on high-level clinical questions (RRB asks basics).</li>
            <li>Not managing time for 100 questions in 90 minutes.</li>
          </ul>
        </div>

        <h2 id="scenario" class="text-2xl font-bold text-gray-900">12. Example Scenario</h2>
        <p>Candidate A is a NORCET topper but failed RRB. Why? She ignored General Science.</p>
        <p>Candidate B was average in nursing but scored full in Math/Science. She got selected.</p>

        <h2 id="revision" class="text-2xl font-bold text-gray-900">13. Revision Tips</h2>
        <p>Make a formula sheet for Math. Make a fact sheet for Nursing.</p>
        <p>Revise these sheets every morning.</p>

        <h2 id="cut-off" class="text-2xl font-bold text-gray-900">14. Expected Cut-off</h2>
        <p>Usually high. For General category, target 75+ marks.</p>
        <p>Normalization plays a big role.</p>

        <h2 id="job-profile" class="text-2xl font-bold text-gray-900">15. Job Profile & Salary</h2>
        <p>Nursing Superintendent. Level 7 Pay Matrix. Excellent Railway passes.</p>
        <p>Work-life balance is generally better than AIIMS.</p>

        <h2 id="final-tips" class="text-2xl font-bold text-gray-900">16. Final Tips</h2>
        <p>Speed is key. 100 questions in 90 mins means less than a minute per Q.</p>
        <p>Don't get stuck on a hard math problem.</p>

        <h2 id="glossary" class="text-2xl font-bold text-gray-900">17. Glossary</h2>
        <div class="grid grid-cols-2 gap-4">
            <div class="bg-gray-100 p-2"><strong>RRB:</strong> Railway Recruitment Board</div>
            <div class="bg-gray-100 p-2"><strong>CBT:</strong> Computer Based Test</div>
        </div>

        <h2 id="faq" class="text-2xl font-bold text-gray-900">18. FAQs</h2>
        <details class="mb-2"><summary class="font-bold">Is there negative marking?</summary>Yes, 1/3rd.</details>
        <details class="mb-2"><summary class="font-bold">Is interview there?</summary>No, only CBT and Document Verification.</details>
      </div>
    `
  },

  // BLOG 3: Top Books
  {
    id: "3",
    slug: "top-5-books-for-nursing-officer-exam",
    title: "Top 5 Books Every Nursing Aspirant Must Have",
    excerpt: "From Target High to Saunders, we review the best books available in the market for AIIMS NORCET and state exams. Don't waste money on the wrong material.",
    date: "October 15, 2024",
    author: "NNLONE Team",
    image: "https://images.unsplash.com/photo-1516574187841-69301976e499?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    relatedArticles: ["1", "2", "6", "9", "5", "4"],
    content: `
      <div class="blog-content space-y-8 text-gray-800 leading-relaxed">
        <div class="bg-blue-50 border-l-4 border-brand-blue p-6 rounded-r-lg shadow-sm">
          <h3 class="text-xl font-bold text-brand-blue mb-2">Quick Summary</h3>
          <p class="text-gray-700">Choosing the right resource is 50% of the battle. This blog ranks the top 5 books: Target High (Practice), Saunders (Theory), PR Yadav (Basics), Mosby (Clinical), and NNLONE Notes (Revision). We compare their pros and cons.</p>
        </div>

        <div class="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h3 class="text-lg font-bold text-gray-900 mb-4">Table of Contents</h3>
          <ul class="grid md:grid-cols-2 gap-2 text-sm text-brand-blue font-medium">
            <li><a href="#intro" class="hover:underline">1. Introduction</a></li>
            <li><a href="#criteria" class="hover:underline">2. Selection Criteria</a></li>
            <li><a href="#target-high" class="hover:underline">3. Target High Review</a></li>
            <li><a href="#saunders" class="hover:underline">4. Saunders Review</a></li>
            <li><a href="#pr-yadav" class="hover:underline">5. PR Yadav Review</a></li>
            <li><a href="#mosby" class="hover:underline">6. Mosby Review</a></li>
            <li><a href="#notes" class="hover:underline">7. Coaching Notes</a></li>
            <li><a href="#comparison" class="hover:underline">8. Comparison Table</a></li>
            <li><a href="#budget" class="hover:underline">9. Budget Buying</a></li>
            <li><a href="#digital" class="hover:underline">10. Digital vs Physical</a></li>
            <li><a href="#mistakes" class="hover:underline">11. Common Mistakes</a></li>
            <li><a href="#scenario" class="hover:underline">12. Usage Scenario</a></li>
            <li><a href="#reading-strategy" class="hover:underline">13. How to Read</a></li>
            <li><a href="#notes-making" class="hover:underline">14. Making Notes</a></li>
            <li><a href="#latest-editions" class="hover:underline">15. Latest Editions</a></li>
            <li><a href="#where-to-buy" class="hover:underline">16. Where to Buy</a></li>
            <li><a href="#glossary" class="hover:underline">17. Glossary</a></li>
            <li><a href="#faq" class="hover:underline">18. FAQs</a></li>
          </ul>
        </div>

        <h2 id="intro" class="text-2xl font-bold text-gray-900">1. Introduction</h2>
        <p>The market is flooded with nursing books. Students often get confused and buy too many.</p>
        <p>You only need one good book for theory and one for MCQs. Minimalism is key.</p>

        <h2 id="criteria" class="text-2xl font-bold text-gray-900">2. Selection Criteria</h2>
        <p>We ranked these books based on: Content Accuracy, Number of MCQs, Explanation Quality, and Recent Updates.</p>
        <p>Books that cover the new NORCET pattern (IBQs) are ranked higher.</p>

        <h2 id="target-high" class="text-2xl font-bold text-gray-900">3. Target High (The Practice King)</h2>
        <p>Best for: Volume practice and Previous Year Papers.</p>
        <p>Pros: Huge question bank, colored images. Cons: Some answer key errors.</p>

        <h2 id="saunders" class="text-2xl font-bold text-gray-900">4. Saunders NCLEX (The Theory Queen)</h2>
        <p>Best for: Concept building and Critical Thinking.</p>
        <p>Pros: Excellent explanations, easy language. Cons: Less number of direct MCQs.</p>

        <h2 id="pr-yadav" class="text-2xl font-bold text-gray-900">5. PR Yadav (The Basic Builder)</h2>
        <p>Best for: Beginners and State Exams.</p>
        <p>Pros: Simple questions, good for confidence. Cons: Not enough for NORCET level.</p>

        <h2 id="mosby" class="text-2xl font-bold text-gray-900">6. Mosby (The Clinical Expert)</h2>
        <p>Best for: Practical procedures and rationales.</p>
        <p>Essential for skill tests and interview preparation.</p>

        <h2 id="notes" class="text-2xl font-bold text-gray-900">7. NNLONE Coaching Notes</h2>
        <p>Best for: Last minute revision.</p>
        <p>Condensed information, high-yield points only.</p>

        <h2 id="comparison" class="text-2xl font-bold text-gray-900">8. Comparison Table</h2>
        <table class="w-full border border-gray-300 mb-4">
          <thead class="bg-brand-blue text-white"><tr><th class="p-2">Book</th><th class="p-2">Best For</th><th class="p-2">Difficulty</th></tr></thead>
          <tbody>
            <tr><td class="p-2 border">Target High</td><td class="p-2 border">MCQs</td><td class="p-2 border">High</td></tr>
            <tr><td class="p-2 border">Saunders</td><td class="p-2 border">Concepts</td><td class="p-2 border">Medium</td></tr>
            <tr><td class="p-2 border">PR Yadav</td><td class="p-2 border">Basics</td><td class="p-2 border">Low</td></tr>
          </tbody>
        </table>

        <h2 id="budget" class="text-2xl font-bold text-gray-900">9. Budget Buying</h2>
        <p>Books are expensive. Buy second hand if budget is tight.</p>
        <p>Or use library copies. Content doesn't change drastically every year.</p>

        <h2 id="digital" class="text-2xl font-bold text-gray-900">10. Digital vs Physical</h2>
        <p>Physical books are better for retention. Digital is good for quick reference.</p>
        <p>Don't rely solely on PDFs.</p>

        <div class="bg-red-50 border-l-4 border-brand-red p-6 my-6">
          <h3 class="text-xl font-bold text-brand-red">11. Common Mistakes</h3>
          <ul class="list-disc pl-5">
            <li>Buying all books and reading none.</li>
            <li>Reading theory from MCQ books.</li>
            <li>Ignoring the rationale given below answers.</li>
          </ul>
        </div>

        <h2 id="scenario" class="text-2xl font-bold text-gray-900">12. Usage Scenario</h2>
        <p>Start your day with Saunders theory (2 hours). Then do 100 MCQs from Target High.</p>
        <p>Use PR Yadav when you feel demotivated to boost confidence.</p>

        <h2 id="reading-strategy" class="text-2xl font-bold text-gray-900">13. How to Read</h2>
        <p>Don't read like a novel. Read actively. Highlight key points.</p>
        <p>Use sticky notes for extra info.</p>

        <h2 id="notes-making" class="text-2xl font-bold text-gray-900">14. Making Notes</h2>
        <p>Don't copy the book. Write only what you forget.</p>
        <p>Make flowcharts and diagrams.</p>

        <h2 id="latest-editions" class="text-2xl font-bold text-gray-900">15. Latest Editions</h2>
        <p>Always try to get the latest edition for updated stats.</p>
        <p>Check for the newest edition of Target High (6th/7th).</p>

        <h2 id="where-to-buy" class="text-2xl font-bold text-gray-900">16. Where to Buy</h2>
        <p>Amazon, Flipkart, or local medical bookstores.</p>
        <p>NNLONE students get discounts on select bundles.</p>

        <h2 id="glossary" class="text-2xl font-bold text-gray-900">17. Glossary</h2>
        <div class="grid grid-cols-2 gap-4">
            <div class="bg-gray-100 p-2"><strong>Rationale:</strong> The reason behind an answer.</div>
            <div class="bg-gray-100 p-2"><strong>High-Yield:</strong> Topics frequently asked.</div>
        </div>

        <h2 id="faq" class="text-2xl font-bold text-gray-900">18. FAQs</h2>
        <details class="mb-2"><summary class="font-bold">Is Saunders enough?</summary>For theory yes, for MCQs no.</details>
        <details class="mb-2"><summary class="font-bold">Which edition?</summary>Always the latest.</details>
      </div>
    `
  },

  // BLOG 4: ESIC
  {
    id: "4",
    slug: "esic-nursing-officer-exam-pattern-preparation",
    title: "ESIC Nursing Officer: Exam Pattern & Preparation Guide",
    excerpt: "Employees' State Insurance Corporation (ESIC) offers one of the best nursing jobs. Understand the specific pattern and how it differs from AIIMS.",
    date: "October 28, 2024",
    author: "NNLONE Team",
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    relatedArticles: ["1", "2", "3", "5", "8", "7"],
    content: `
      <div class="blog-content space-y-8 text-gray-800 leading-relaxed">
        <div class="bg-blue-50 border-l-4 border-brand-blue p-6 rounded-r-lg shadow-sm">
          <h3 class="text-xl font-bold text-brand-blue mb-2">Quick Summary</h3>
          <p class="text-gray-700">ESIC exams are known for being balanced. They ask 125 questions (100 Nursing + 25 General). The difficulty level is moderate. This guide helps you prepare for the specific requirements of ESIC hospitals.</p>
        </div>

        <div class="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h3 class="text-lg font-bold text-gray-900 mb-4">Table of Contents</h3>
          <ul class="grid md:grid-cols-2 gap-2 text-sm text-brand-blue font-medium">
            <li><a href="#intro" class="hover:underline">1. Introduction</a></li>
            <li><a href="#pattern" class="hover:underline">2. Exam Pattern</a></li>
            <li><a href="#syllabus" class="hover:underline">3. Syllabus</a></li>
            <li><a href="#eligibility" class="hover:underline">4. Eligibility</a></li>
            <li><a href="#salary" class="hover:underline">5. Salary & Perks</a></li>
            <li><a href="#strategy" class="hover:underline">6. Preparation Strategy</a></li>
            <li><a href="#books" class="hover:underline">7. Books</a></li>
            <li><a href="#pyq" class="hover:underline">8. PYQ Analysis</a></li>
            <li><a href="#aptitude" class="hover:underline">9. Aptitude Section</a></li>
            <li><a href="#mistakes" class="hover:underline">10. Common Mistakes</a></li>
            <li><a href="#cut-off" class="hover:underline">11. Cut-off Trends</a></li>
            <li><a href="#mock" class="hover:underline">12. Mock Tests</a></li>
            <li><a href="#revision" class="hover:underline">13. Revision</a></li>
            <li><a href="#exam-day" class="hover:underline">14. Exam Day</a></li>
            <li><a href="#posting" class="hover:underline">15. Job Posting</a></li>
            <li><a href="#growth" class="hover:underline">16. Career Growth</a></li>
            <li><a href="#glossary" class="hover:underline">17. Glossary</a></li>
            <li><a href="#faq" class="hover:underline">18. FAQs</a></li>
          </ul>
        </div>

        <h2 id="intro" class="text-2xl font-bold text-gray-900">1. Introduction</h2>
        <p>ESIC is a central government body. The job is transferable but offers great stability.</p>
        <p>Exams are conducted by UPSC or ESIC directly.</p>

        <h2 id="pattern" class="text-2xl font-bold text-gray-900">2. Exam Pattern</h2>
        <p>Typically 125 Questions. 100 Nursing, 25 General Aptitude.</p>
        <p>Duration: 2 Hours. Negative Marking: 0.25.</p>

        <h2 id="syllabus" class="text-2xl font-bold text-gray-900">3. Syllabus</h2>
        <p>Standard Nursing Syllabus. Focus on Community Health and OBG.</p>
        <p>General section includes simple math and reasoning.</p>

        <h2 id="eligibility" class="text-2xl font-bold text-gray-900">4. Eligibility</h2>
        <p>GNM + 1 Year Experience OR B.Sc Nursing (Fresher).</p>
        <p>Age limit usually up to 37 years (Relaxable).</p>

        <h2 id="salary" class="text-2xl font-bold text-gray-900">5. Salary & Perks</h2>
        <p>Level 7 Pay Matrix. Starting salary approx 70k-80k.</p>
        <p>Medical benefits are the best in the country.</p>

        <h2 id="strategy" class="text-2xl font-bold text-gray-900">6. Preparation Strategy</h2>
        <p>Focus on accuracy. The paper is easier than NORCET, so cut-offs are higher.</p>
        <p>Don't make silly mistakes.</p>

        <h2 id="books" class="text-2xl font-bold text-gray-900">7. Books</h2>
        <p>Same as NORCET but add a book for General Aptitude.</p>
        <p>RS Aggarwal is recommended.</p>

        <h2 id="pyq" class="text-2xl font-bold text-gray-900">8. PYQ Analysis</h2>
        <p>ESIC repeats questions. Solve 2019, 2016 papers.</p>
        <p>Direct questions are common.</p>

        <h2 id="aptitude" class="text-2xl font-bold text-gray-900">9. Aptitude Section</h2>
        <p>25 Marks. Decide your selection.</p>
        <p>Practice basic arithmetic and logical reasoning.</p>

        <div class="bg-red-50 border-l-4 border-brand-red p-6 my-6">
          <h3 class="text-xl font-bold text-brand-red">10. Common Mistakes</h3>
          <ul class="list-disc pl-5">
            <li>Ignoring the 25 marks of aptitude.</li>
            <li>Overthinking simple questions.</li>
            <li>Not checking eligibility criteria properly.</li>
          </ul>
        </div>

        <h2 id="cut-off" class="text-2xl font-bold text-gray-900">11. Cut-off Trends</h2>
        <p>General category needs 70%+ marks.</p>
        <p>Competition is high due to higher age limit.</p>

        <h2 id="mock" class="text-2xl font-bold text-gray-900">12. Mock Tests</h2>
        <p>Take mocks specifically designed for ESIC pattern.</p>
        <p>NNLONE offers ESIC specific test series.</p>

        <h2 id="revision" class="text-2xl font-bold text-gray-900">13. Revision</h2>
        <p>Last 15 days for revision. Focus on factual data.</p>
        <p>Vaccination schedules, health programs etc.</p>

        <h2 id="exam-day" class="text-2xl font-bold text-gray-900">14. Exam Day</h2>
        <p>Carry blue/black ball pen if offline.</p>
        <p>Reach early.</p>

        <h2 id="posting" class="text-2xl font-bold text-gray-900">15. Job Posting</h2>
        <p>Pan-India. You can get posted in ESIC hospitals or dispensaries.</p>
        <p>Transfers are possible.</p>

        <h2 id="growth" class="text-2xl font-bold text-gray-900">16. Career Growth</h2>
        <p>Nursing Officer -> Sr. Nursing Officer -> ANS -> DNS -> NS.</p>
        <p>Good promotion hierarchy.</p>

        <h2 id="glossary" class="text-2xl font-bold text-gray-900">17. Glossary</h2>
        <div class="grid grid-cols-2 gap-4">
            <div class="bg-gray-100 p-2"><strong>ESIC:</strong> Employees' State Insurance Corporation</div>
            <div class="bg-gray-100 p-2"><strong>UPSC:</strong> Union Public Service Commission</div>
        </div>

        <h2 id="faq" class="text-2xl font-bold text-gray-900">18. FAQs</h2>
        <details class="mb-2"><summary class="font-bold">Is interview there?</summary>Usually no.</details>
        <details class="mb-2"><summary class="font-bold">Can GNM apply?</summary>Yes, with experience.</details>
      </div>
    `
  },

  // BLOG 5: DSSSB
  {
    id: "5",
    slug: "dsssb-nursing-officer-complete-guide",
    title: "DSSSB Nursing Officer: Complete Guide for Delhi Jobs",
    excerpt: "Want a government nursing job in Delhi? DSSSB is your answer. Learn about the 200-mark paper with heavy non-nursing weightage.",
    date: "October 30, 2024",
    author: "NNLONE Team",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    relatedArticles: ["1", "2", "4", "7", "8", "9"],
    content: `
      <div class="blog-content space-y-8 text-gray-800 leading-relaxed">
        <div class="bg-blue-50 border-l-4 border-brand-blue p-6 rounded-r-lg shadow-sm">
          <h3 class="text-xl font-bold text-brand-blue mb-2">Quick Summary</h3>
          <p class="text-gray-700">DSSSB exams are tough because of the "Sectional Lock" system and 50% weightage to non-nursing subjects (Hindi, English, Math, Reasoning, GK). This guide explains how to tackle this unique pattern.</p>
        </div>

        <div class="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h3 class="text-lg font-bold text-gray-900 mb-4">Table of Contents</h3>
          <ul class="grid md:grid-cols-2 gap-2 text-sm text-brand-blue font-medium">
            <li><a href="#intro" class="hover:underline">1. Introduction</a></li>
            <li><a href="#pattern" class="hover:underline">2. Unique Exam Pattern</a></li>
            <li><a href="#sectional" class="hover:underline">3. Sectional Lock</a></li>
            <li><a href="#syllabus" class="hover:underline">4. Syllabus (Part A & B)</a></li>
            <li><a href="#eligibility" class="hover:underline">5. Eligibility</a></li>
            <li><a href="#part-a" class="hover:underline">6. Part A Strategy</a></li>
            <li><a href="#part-b" class="hover:underline">7. Part B Strategy</a></li>
            <li><a href="#books" class="hover:underline">8. Books</a></li>
            <li><a href="#time" class="hover:underline">9. Time Management</a></li>
            <li><a href="#mistakes" class="hover:underline">10. Common Mistakes</a></li>
            <li><a href="#cut-off" class="hover:underline">11. Cut-off Analysis</a></li>
            <li><a href="#mock" class="hover:underline">12. Mock Tests</a></li>
            <li><a href="#language" class="hover:underline">13. Language Papers</a></li>
            <li><a href="#job" class="hover:underline">14. Job Location</a></li>
            <li><a href="#salary" class="hover:underline">15. Salary</a></li>
            <li><a href="#final" class="hover:underline">16. Final Tips</a></li>
            <li><a href="#glossary" class="hover:underline">17. Glossary</a></li>
            <li><a href="#faq" class="hover:underline">18. FAQs</a></li>
          </ul>
        </div>

        <h2 id="intro" class="text-2xl font-bold text-gray-900">1. Introduction</h2>
        <p>Delhi Subordinate Services Selection Board (DSSSB) recruits for Delhi Govt hospitals like LNJP, GTB, etc.</p>
        <p>It is a state govt job but with central level perks.</p>

        <h2 id="pattern" class="text-2xl font-bold text-gray-900">2. Unique Exam Pattern</h2>
        <p>Total 200 Questions. Part A: 100 (Non-Nursing). Part B: 100 (Nursing).</p>
        <p>Time: 2 Hours. This is very less time for 200 Qs.</p>

        <h2 id="sectional" class="text-2xl font-bold text-gray-900">3. Sectional Lock System</h2>
        <p>This is the most critical part. You cannot go back to a section once submitted.</p>
        <p>You have to attempt section by section. This requires immense practice.</p>

        <h2 id="syllabus" class="text-2xl font-bold text-gray-900">4. Syllabus</h2>
        <p>Part A: Hindi, English, Math, Reasoning, GK (20 marks each).</p>
        <p>Part B: Nursing subjects.</p>

        <h2 id="eligibility" class="text-2xl font-bold text-gray-900">5. Eligibility</h2>
        <p>GNM + Experience OR B.Sc Nursing.</p>
        <p>Registration with any Nursing Council is accepted initially, but Delhi Council needed later.</p>

        <h2 id="part-a" class="text-2xl font-bold text-gray-900">6. Part A Strategy</h2>
        <p>Do not ignore Hindi. It is scoring.</p>
        <p>Practice Math shortcuts. You don't have time for long calculations.</p>

        <h2 id="part-b" class="text-2xl font-bold text-gray-900">7. Part B Strategy</h2>
        <p>Nursing questions are usually direct one-liners.</p>
        <p>Focus on speed.</p>

        <h2 id="books" class="text-2xl font-bold text-gray-900">8. Books</h2>
        <p>For Part A: Arihant DSSSB Guide.</p>
        <p>For Part B: Target High.</p>

        <h2 id="time" class="text-2xl font-bold text-gray-900">9. Time Management</h2>
        <p>You have 0.6 seconds per question. Speed is everything.</p>
        <p>Skip lengthy math questions.</p>

        <div class="bg-red-50 border-l-4 border-brand-red p-6 my-6">
          <h3 class="text-xl font-bold text-brand-red">10. Common Mistakes</h3>
          <ul class="list-disc pl-5">
            <li>Getting stuck in a section and losing time.</li>
            <li>Submitting a section without checking (cannot go back).</li>
            <li>Ignoring Hindi/English grammar.</li>
          </ul>
        </div>

        <h2 id="cut-off" class="text-2xl font-bold text-gray-900">11. Cut-off Analysis</h2>
        <p>Cut-offs are generally lower than AIIMS because of the tough pattern.</p>
        <p>Around 110-120/200 is a safe score.</p>

        <h2 id="mock" class="text-2xl font-bold text-gray-900">12. Mock Tests</h2>
        <p>Practice only on software that mimics the "Sectional Lock".</p>
        <p>NNLONE provides this interface.</p>

        <h2 id="language" class="text-2xl font-bold text-gray-900">13. Language Papers</h2>
        <p>Hindi and English are 10th standard level.</p>
        <p>Easy 30-35 marks can be scored here.</p>

        <h2 id="job" class="text-2xl font-bold text-gray-900">14. Job Location</h2>
        <p>Always in Delhi. No transfers outside Delhi.</p>
        <p>Great for those who want to settle in the capital.</p>

        <h2 id="salary" class="text-2xl font-bold text-gray-900">15. Salary</h2>
        <p>Par with AIIMS. Approx 75k-85k in hand.</p>

        <h2 id="final" class="text-2xl font-bold text-gray-900">16. Final Tips</h2>
        <p>Practice locking sections.</p>
        <p>Don't panic if you can't go back.</p>

        <h2 id="glossary" class="text-2xl font-bold text-gray-900">17. Glossary</h2>
        <div class="grid grid-cols-2 gap-4">
            <div class="bg-gray-100 p-2"><strong>DSSSB:</strong> Delhi Subordinate Services Selection Board</div>
            <div class="bg-gray-100 p-2"><strong>Sectional Lock:</strong> Cannot revisit previous section.</div>
        </div>

        <h2 id="faq" class="text-2xl font-bold text-gray-900">18. FAQs</h2>
        <details class="mb-2"><summary class="font-bold">Is Hindi compulsory?</summary>Yes, as a subject.</details>
        <details class="mb-2"><summary class="font-bold">Is outside Delhi candidate eligible?</summary>Yes, as General.</details>
      </div>
    `
  },

  // BLOG 6: Working Professionals
  {
    id: "6",
    slug: "how-to-prepare-for-nursing-officer-exam-with-job",
    title: "How to Prepare for Nursing Officer Exam with a Full-Time Job",
    excerpt: "Working in a hospital and preparing for NORCET? It's tough but possible. Here is a practical time management guide for working nurses.",
    date: "November 1, 2024",
    author: "NNLONE Expert Faculty",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    relatedArticles: ["1", "3", "8", "9", "2", "5"],
    content: `
      <div class="blog-content space-y-8 text-gray-800 leading-relaxed">
        <div class="bg-blue-50 border-l-4 border-brand-blue p-6 rounded-r-lg shadow-sm">
          <h3 class="text-xl font-bold text-brand-blue mb-2">Quick Summary</h3>
          <p class="text-gray-700">Many top rankers are working nurses. The key is utilizing "dead time" (commute, breaks) and focusing on quality over quantity. This guide gives a shift-wise study plan.</p>
        </div>

        <div class="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h3 class="text-lg font-bold text-gray-900 mb-4">Table of Contents</h3>
          <ul class="grid md:grid-cols-2 gap-2 text-sm text-brand-blue font-medium">
            <li><a href="#intro" class="hover:underline">1. Introduction</a></li>
            <li><a href="#mindset" class="hover:underline">2. The Right Mindset</a></li>
            <li><a href="#schedule" class="hover:underline">3. Shift-Wise Schedule</a></li>
            <li><a href="#morning" class="hover:underline">4. Morning Shift Strategy</a></li>
            <li><a href="#evening" class="hover:underline">5. Evening Shift Strategy</a></li>
            <li><a href="#night" class="hover:underline">6. Night Shift Strategy</a></li>
            <li><a href="#dead-time" class="hover:underline">7. Utilizing Dead Time</a></li>
            <li><a href="#resources" class="hover:underline">8. Digital Resources</a></li>
            <li><a href="#weekend" class="hover:underline">9. Weekend Warrior</a></li>
            <li><a href="#mistakes" class="hover:underline">10. Common Mistakes</a></li>
            <li><a href="#leaves" class="hover:underline">11. Taking Leaves</a></li>
            <li><a href="#burnout" class="hover:underline">12. Handling Burnout</a></li>
            <li><a href="#colleagues" class="hover:underline">13. Dealing with Colleagues</a></li>
            <li><a href="#clinical" class="hover:underline">14. Clinical Advantage</a></li>
            <li><a href="#checklist" class="hover:underline">15. Daily Checklist</a></li>
            <li><a href="#motivation" class="hover:underline">16. Motivation</a></li>
            <li><a href="#glossary" class="hover:underline">17. Glossary</a></li>
            <li><a href="#faq" class="hover:underline">18. FAQs</a></li>
          </ul>
        </div>

        <h2 id="intro" class="text-2xl font-bold text-gray-900">1. Introduction</h2>
        <p>Working nurses have a practical advantage but a time disadvantage.</p>
        <p>You don't need 10 hours. You need 4 focused hours.</p>

        <h2 id="mindset" class="text-2xl font-bold text-gray-900">2. The Right Mindset</h2>
        <p>Stop complaining about lack of time. Accept the challenge.</p>
        <p>Your clinical experience is your biggest asset for IBQs.</p>

        <h2 id="schedule" class="text-2xl font-bold text-gray-900">3. Shift-Wise Schedule</h2>
        <p>Plan your study based on your roster.</p>
        <p>Consistency is key.</p>

        <h2 id="morning" class="text-2xl font-bold text-gray-900">4. Morning Shift Strategy</h2>
        <p>Wake up early (5 AM). Study 2 hours before duty.</p>
        <p>After duty, rest, then study 2 hours light topics.</p>

        <h2 id="evening" class="text-2xl font-bold text-gray-900">5. Evening Shift Strategy</h2>
        <p>Morning is your golden time. Study 4 hours straight.</p>
        <p>After duty, just sleep.</p>

        <h2 id="night" class="text-2xl font-bold text-gray-900">6. Night Shift Strategy</h2>
        <p>Study during breaks if allowed. Or study in the evening before leaving.</p>
        <p>Sleep well in the morning.</p>

        <h2 id="dead-time" class="text-2xl font-bold text-gray-900">7. Utilizing Dead Time</h2>
        <p>Listen to video lectures while commuting.</p>
        <p>Solve MCQs on phone app while waiting for handover.</p>

        <h2 id="resources" class="text-2xl font-bold text-gray-900">8. Digital Resources</h2>
        <p>Use apps like NNLONE for on-the-go study.</p>
        <p>PDF notes are better than heavy books for you.</p>

        <h2 id="weekend" class="text-2xl font-bold text-gray-900">9. Weekend Warrior</h2>
        <p>On off days, study 8-10 hours.</p>
        <p>Take full length mock tests on these days.</p>

        <div class="bg-red-50 border-l-4 border-brand-red p-6 my-6">
          <h3 class="text-xl font-bold text-brand-red">10. Common Mistakes</h3>
          <ul class="list-disc pl-5">
            <li>Discussing plans with negative colleagues.</li>
            <li>Studying when exhausted (zero retention).</li>
            <li>Not taking leaves before exam.</li>
          </ul>
        </div>

        <h2 id="leaves" class="text-2xl font-bold text-gray-900">11. Taking Leaves</h2>
        <p>Save your PL/CL. Take 15-20 days off before the exam.</p>
        <p>This is the game changer.</p>

        <h2 id="burnout" class="text-2xl font-bold text-gray-900">12. Handling Burnout</h2>
        <p>Hospital work + Study = Exhaustion.</p>
        <p>Eat healthy, drink water, sleep 7 hours.</p>

        <h2 id="colleagues" class="text-2xl font-bold text-gray-900">13. Dealing with Colleagues</h2>
        <p>Keep your preparation private.</p>
        <p>Avoid ward politics.</p>

        <h2 id="clinical" class="text-2xl font-bold text-gray-900">14. Clinical Advantage</h2>
        <p>Relate what you study to what you see in the ward.</p>
        <p>Check drug doses, procedures practically.</p>

        <h2 id="checklist" class="text-2xl font-bold text-gray-900">15. Daily Checklist</h2>
        <ul class="list-disc pl-5">
            <li>50 MCQs solved?</li>
            <li>1 Topic revised?</li>
            <li>Video lecture watched?</li>
        </ul>

        <h2 id="motivation" class="text-2xl font-bold text-gray-900">16. Motivation</h2>
        <p>Remember why you started. Better pay, better life.</p>

        <h2 id="glossary" class="text-2xl font-bold text-gray-900">17. Glossary</h2>
        <div class="grid grid-cols-2 gap-4">
            <div class="bg-gray-100 p-2"><strong>Roster:</strong> Duty schedule.</div>
            <div class="bg-gray-100 p-2"><strong>Handover:</strong> Shift change report.</div>
        </div>

        <h2 id="faq" class="text-2xl font-bold text-gray-900">18. FAQs</h2>
        <details class="mb-2"><summary class="font-bold">Can I crack in 3 months?</summary>Yes, if basics are clear.</details>
        <details class="mb-2"><summary class="font-bold">Should I quit my job?</summary>Only if financially stable.</details>
      </div>
    `
  },

  // BLOG 7: Subject Weightage
  {
    id: "7",
    slug: "subject-wise-weightage-aiims-norcet-2025",
    title: "Subject-Wise Weightage for AIIMS NORCET 2025",
    excerpt: "Don't study blindly. Know which subjects carry the most marks. Detailed analysis of MSN, OBG, FON, and others based on past 5 years.",
    date: "November 5, 2024",
    author: "NNLONE Analytics Team",
    image: "https://images.unsplash.com/photo-1576091160550-217358c7b818?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    relatedArticles: ["1", "3", "8", "9", "2", "4"],
    content: `
      <div class="blog-content space-y-8 text-gray-800 leading-relaxed">
        <div class="bg-blue-50 border-l-4 border-brand-blue p-6 rounded-r-lg shadow-sm">
          <h3 class="text-xl font-bold text-brand-blue mb-2">Quick Summary</h3>
          <p class="text-gray-700">Pareto Principle applies here: 20% of subjects give 80% of marks. MSN, OBG, and Fundamentals are the "Big 3". This blog breaks down the exact question count expected from each subject.</p>
        </div>

        <div class="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h3 class="text-lg font-bold text-gray-900 mb-4">Table of Contents</h3>
          <ul class="grid md:grid-cols-2 gap-2 text-sm text-brand-blue font-medium">
            <li><a href="#intro" class="hover:underline">1. Introduction</a></li>
            <li><a href="#big3" class="hover:underline">2. The Big Three</a></li>
            <li><a href="#msn" class="hover:underline">3. MSN Breakdown</a></li>
            <li><a href="#obg" class="hover:underline">4. OBG Breakdown</a></li>
            <li><a href="#fon" class="hover:underline">5. FON Breakdown</a></li>
            <li><a href="#allied" class="hover:underline">6. Allied Subjects</a></li>
            <li><a href="#minor" class="hover:underline">7. Minor Subjects</a></li>
            <li><a href="#general" class="hover:underline">8. General Section</a></li>
            <li><a href="#table" class="hover:underline">9. Weightage Table</a></li>
            <li><a href="#ibq" class="hover:underline">10. IBQ Distribution</a></li>
            <li><a href="#mistakes" class="hover:underline">11. Common Mistakes</a></li>
            <li><a href="#strategy" class="hover:underline">12. Study Strategy</a></li>
            <li><a href="#trends" class="hover:underline">13. Changing Trends</a></li>
            <li><a href="#resources" class="hover:underline">14. Resources per Subject</a></li>
            <li><a href="#checklist" class="hover:underline">15. Coverage Checklist</a></li>
            <li><a href="#final" class="hover:underline">16. Final Words</a></li>
            <li><a href="#glossary" class="hover:underline">17. Glossary</a></li>
            <li><a href="#faq" class="hover:underline">18. FAQs</a></li>
          </ul>
        </div>

        <h2 id="intro" class="text-2xl font-bold text-gray-900">1. Introduction</h2>
        <p>Smart work beats hard work. Knowing weightage allows you to prioritize.</p>
        <p>Based on NORCET 4, 5, and 6 analysis.</p>

        <h2 id="big3" class="text-2xl font-bold text-gray-900">2. The Big Three</h2>
        <p>MSN, OBG, and Fundamentals constitute 60% of the paper.</p>
        <p>Master these to clear the cutoff.</p>

        <h2 id="msn" class="text-2xl font-bold text-gray-900">3. MSN Breakdown</h2>
        <p>Approx 40-50 questions.</p>
        <p>Focus: Cardiology, Neurology, Renal, Burns.</p>

        <h2 id="obg" class="text-2xl font-bold text-gray-900">4. OBG Breakdown</h2>
        <p>Approx 25-30 questions.</p>
        <p>Focus: Labor stages, Drugs in pregnancy, Contraception.</p>

        <h2 id="fon" class="text-2xl font-bold text-gray-900">5. FON Breakdown</h2>
        <p>Approx 30-35 questions.</p>
        <p>Focus: Procedures, CPR, NG Tube, Catheterization.</p>

        <h2 id="allied" class="text-2xl font-bold text-gray-900">6. Allied Subjects</h2>
        <p>Pediatrics (15 Qs), Psychiatry (15 Qs), CHN (15 Qs).</p>
        <p>These are rank boosters.</p>

        <h2 id="minor" class="text-2xl font-bold text-gray-900">7. Minor Subjects</h2>
        <p>Microbiology, Nutrition, Research, Management.</p>
        <p>5-8 questions each. Don't spend months on these.</p>

        <h2 id="general" class="text-2xl font-bold text-gray-900">8. General Section</h2>
        <p>20 Questions. Aptitude and GK.</p>
        <p>Crucial for getting a top rank.</p>

        <h2 id="table" class="text-2xl font-bold text-gray-900">9. Weightage Table</h2>
        <table class="w-full border border-gray-300 mb-4">
          <thead class="bg-brand-blue text-white"><tr><th class="p-2">Subject</th><th class="p-2">Avg Questions</th><th class="p-2">Priority</th></tr></thead>
          <tbody>
            <tr><td class="p-2 border">MSN</td><td class="p-2 border">45</td><td class="p-2 border">High</td></tr>
            <tr><td class="p-2 border">FON</td><td class="p-2 border">35</td><td class="p-2 border">High</td></tr>
            <tr><td class="p-2 border">OBG</td><td class="p-2 border">30</td><td class="p-2 border">High</td></tr>
             <tr><td class="p-2 border">Peds</td><td class="p-2 border">15</td><td class="p-2 border">Med</td></tr>
          </tbody>
        </table>

        <h2 id="ibq" class="text-2xl font-bold text-gray-900">10. IBQ Distribution</h2>
        <p>Most IBQs come from FON (Instruments) and MSN (X-rays, ECG).</p>
        <p>OBG instruments are also common.</p>

        <div class="bg-red-50 border-l-4 border-brand-red p-6 my-6">
          <h3 class="text-xl font-bold text-brand-red">11. Common Mistakes</h3>
          <ul class="list-disc pl-5">
            <li>Spending too much time on Anatomy (Basic) instead of MSN (Applied).</li>
            <li>Ignoring Research/Management completely.</li>
          </ul>
        </div>

        <h2 id="strategy" class="text-2xl font-bold text-gray-900">12. Study Strategy</h2>
        <p>Start with Big 3. Then Allied. Then Minor.</p>
        <p>Do General section on weekends.</p>

        <h2 id="trends" class="text-2xl font-bold text-gray-900">13. Changing Trends</h2>
        <p>More clinical scenarios. Less direct theory.</p>
        <p>Psychiatry weightage is increasing.</p>

        <h2 id="resources" class="text-2xl font-bold text-gray-900">14. Resources per Subject</h2>
        <p>MSN: Saunders. OBG: DC Dutta. Peds: Ghai (Reference).</p>

        <h2 id="checklist" class="text-2xl font-bold text-gray-900">15. Coverage Checklist</h2>
        <ul class="list-disc pl-5">
            <li>MSN Completed?</li>
            <li>OBG Completed?</li>
            <li>FON Procedures practiced?</li>
        </ul>

        <h2 id="final" class="text-2xl font-bold text-gray-900">16. Final Words</h2>
        <p>Balance is key. Don't be a master of one subject.</p>

        <h2 id="glossary" class="text-2xl font-bold text-gray-900">17. Glossary</h2>
        <div class="grid grid-cols-2 gap-4">
            <div class="bg-gray-100 p-2"><strong>MSN:</strong> Medical Surgical Nursing</div>
            <div class="bg-gray-100 p-2"><strong>FON:</strong> Fundamentals of Nursing</div>
        </div>

        <h2 id="faq" class="text-2xl font-bold text-gray-900">18. FAQs</h2>
        <details class="mb-2"><summary class="font-bold">Is Anatomy important?</summary>Yes, as a base for MSN.</details>
        <details class="mb-2"><summary class="font-bold">How many Qs from Pharma?</summary>Approx 10-12 (mostly in MSN).</details>
      </div>
    `
  },

  // BLOG 8: CBT Time Management
  {
    id: "8",
    slug: "time-management-tips-online-nursing-exams-cbt",
    title: "Time Management Hacks for Online Nursing Exams (CBT)",
    excerpt: "Running out of time in the exam hall? Learn how to manage 200 questions in 180 minutes with the 3-Round Strategy.",
    date: "November 8, 2024",
    author: "NNLONE Expert Faculty",
    image: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    relatedArticles: ["1", "5", "7", "9", "2", "3"],
    content: `
      <div class="blog-content space-y-8 text-gray-800 leading-relaxed">
        <div class="bg-blue-50 border-l-4 border-brand-blue p-6 rounded-r-lg shadow-sm">
          <h3 class="text-xl font-bold text-brand-blue mb-2">Quick Summary</h3>
          <p class="text-gray-700">Time management is a skill. In NORCET, you have 54 seconds per question. This blog teaches you the '3-Round Technique', how to use the 'Mark for Review' button effectively, and how to avoid getting stuck.</p>
        </div>

        <div class="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h3 class="text-lg font-bold text-gray-900 mb-4">Table of Contents</h3>
          <ul class="grid md:grid-cols-2 gap-2 text-sm text-brand-blue font-medium">
            <li><a href="#intro" class="hover:underline">1. Introduction</a></li>
            <li><a href="#math" class="hover:underline">2. The Math of Time</a></li>
            <li><a href="#round1" class="hover:underline">3. Round 1 Strategy</a></li>
            <li><a href="#round2" class="hover:underline">4. Round 2 Strategy</a></li>
            <li><a href="#round3" class="hover:underline">5. Round 3 Strategy</a></li>
            <li><a href="#review" class="hover:underline">6. Mark for Review</a></li>
            <li><a href="#stuck" class="hover:underline">7. Getting Stuck</a></li>
            <li><a href="#reading" class="hover:underline">8. Reading Speed</a></li>
            <li><a href="#keywords" class="hover:underline">9. Spotting Keywords</a></li>
            <li><a href="#mistakes" class="hover:underline">10. Common Mistakes</a></li>
            <li><a href="#practice" class="hover:underline">11. Practice at Home</a></li>
            <li><a href="#anxiety" class="hover:underline">12. Anxiety & Time</a></li>
            <li><a href="#clock" class="hover:underline">13. Watching the Clock</a></li>
            <li><a href="#aptitude" class="hover:underline">14. Aptitude Time</a></li>
            <li><a href="#checklist" class="hover:underline">15. Exam Hall Checklist</a></li>
            <li><a href="#final" class="hover:underline">16. Final Tips</a></li>
            <li><a href="#glossary" class="hover:underline">17. Glossary</a></li>
            <li><a href="#faq" class="hover:underline">18. FAQs</a></li>
          </ul>
        </div>

        <h2 id="intro" class="text-2xl font-bold text-gray-900">1. Introduction</h2>
        <p>Knowledge is useless if you can't attempt the paper. Many students leave 10-15 questions unread.</p>
        <p>CBT requires a different approach than OMR.</p>

        <h2 id="math" class="text-2xl font-bold text-gray-900">2. The Math of Time</h2>
        <p>180 Minutes / 200 Questions = 0.9 Minutes per Q.</p>
        <p>But removing reading time, you have approx 45-50 seconds to decide.</p>

        <h2 id="round1" class="text-2xl font-bold text-gray-900">3. Round 1 (The Sprint)</h2>
        <p>Go through 1 to 200. Attempt only 100% sure answers.</p>
        <p>Skip anything that takes thinking. Target: 60 mins.</p>

        <h2 id="round2" class="text-2xl font-bold text-gray-900">4. Round 2 (The Thinker)</h2>
        <p>Attempt 50-50 confusion questions. Solve simple math.</p>
        <p>Target: 90 mins.</p>

        <h2 id="round3" class="text-2xl font-bold text-gray-900">5. Round 3 (The Risk)</h2>
        <p>Review marked questions. Take calculated risks.</p>
        <p>Target: Remaining 30 mins.</p>

        <h2 id="review" class="text-2xl font-bold text-gray-900">6. Mark for Review</h2>
        <p>Use this button wisely. Don't mark 100 questions for review.</p>
        <p>Only mark those where you have eliminated 2 options.</p>

        <h2 id="stuck" class="text-2xl font-bold text-gray-900">7. Getting Stuck</h2>
        <p>If a question takes >1 min, SKIP IT. Even if you know it.</p>
        <p>Ego is your enemy.</p>

        <h2 id="reading" class="text-2xl font-bold text-gray-900">8. Reading Speed</h2>
        <p>Read the last line of the question first. "What is the priority nursing action?"</p>
        <p>Then read the scenario.</p>

        <h2 id="keywords" class="text-2xl font-bold text-gray-900">9. Spotting Keywords</h2>
        <p>Look for: EXCEPT, NOT, PRIORITY, FIRST, IMMEDIATE.</p>
        <p>These change the answer completely.</p>

        <div class="bg-red-50 border-l-4 border-brand-red p-6 my-6">
          <h3 class="text-xl font-bold text-brand-red">10. Common Mistakes</h3>
          <ul class="list-disc pl-5">
            <li>Spending 5 mins on one aptitude question.</li>
            <li>Reading the question too fast and missing "NOT".</li>
            <li>Panicking when seeing tough questions in a row.</li>
          </ul>
        </div>

        <h2 id="practice" class="text-2xl font-bold text-gray-900">11. Practice at Home</h2>
        <p>Always practice with a timer. Never practice open-ended.</p>
        <p>Use NNLONE Test Series for real CBT feel.</p>

        <h2 id="anxiety" class="text-2xl font-bold text-gray-900">12. Anxiety & Time</h2>
        <p>Anxiety makes you read slower. Take deep breaths.</p>

        <h2 id="clock" class="text-2xl font-bold text-gray-900">13. Watching the Clock</h2>
        <p>Check clock every 30 mins. Don't check every question.</p>

        <h2 id="aptitude" class="text-2xl font-bold text-gray-900">14. Aptitude Time</h2>
        <p>Keep Aptitude for the end or middle. Never start with it unless you are a pro.</p>

        <h2 id="checklist" class="text-2xl font-bold text-gray-900">15. Exam Hall Checklist</h2>
        <ul class="list-disc pl-5">
            <li>Mouse working?</li>
            <li>Screen clear?</li>
            <li>Rough sheet ready?</li>
        </ul>

        <h2 id="final" class="text-2xl font-bold text-gray-900">16. Final Tips</h2>
        <p>Leave the last 5 mins to check if any answer is un-submitted.</p>

        <h2 id="glossary" class="text-2xl font-bold text-gray-900">17. Glossary</h2>
        <div class="grid grid-cols-2 gap-4">
            <div class="bg-gray-100 p-2"><strong>Sprint:</strong> Fast reading round.</div>
            <div class="bg-gray-100 p-2"><strong>Elimination:</strong> Removing wrong options.</div>
        </div>

        <h2 id="faq" class="text-2xl font-bold text-gray-900">18. FAQs</h2>
        <details class="mb-2"><summary class="font-bold">Can I change answer?</summary>Yes, anytime before submit.</details>
        <details class="mb-2"><summary class="font-bold">Does 'Marked for Review' count?</summary>Only if you selected an option.</details>
      </div>
    `
  },

  // BLOG 9: Clinical IBQs
  {
    id: "9",
    slug: "important-clinical-topics-aiims-norcet-ibq",
    title: "Mastering Clinical Topics & IBQs for AIIMS NORCET",
    excerpt: "NORCET is 40% Image Based Questions (IBQs). Here is a list of must-read clinical topics, instruments, and procedures.",
    date: "November 12, 2024",
    author: "NNLONE Expert Faculty",
    image: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    relatedArticles: ["1", "7", "3", "8", "2", "6"],
    content: `
      <div class="blog-content space-y-8 text-gray-800 leading-relaxed">
        <div class="bg-blue-50 border-l-4 border-brand-blue p-6 rounded-r-lg shadow-sm">
          <h3 class="text-xl font-bold text-brand-blue mb-2">Quick Summary</h3>
          <p class="text-gray-700">Textbook knowledge isn't enough. You need to identify instruments, X-rays, and ECGs. This blog lists the top 50 IBQ topics you must visually memorize before the exam.</p>
        </div>

        <div class="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h3 class="text-lg font-bold text-gray-900 mb-4">Table of Contents</h3>
          <ul class="grid md:grid-cols-2 gap-2 text-sm text-brand-blue font-medium">
            <li><a href="#intro" class="hover:underline">1. Introduction</a></li>
            <li><a href="#importance" class="hover:underline">2. Importance of IBQs</a></li>
            <li><a href="#instruments" class="hover:underline">3. Surgical Instruments</a></li>
            <li><a href="#procedures" class="hover:underline">4. Nursing Procedures</a></li>
            <li><a href="#ecg" class="hover:underline">5. ECG Interpretation</a></li>
            <li><a href="#xray" class="hover:underline">6. X-Rays & CT</a></li>
            <li><a href="#obg-inst" class="hover:underline">7. OBG Instruments</a></li>
            <li><a href="#positions" class="hover:underline">8. Patient Positions</a></li>
            <li><a href="#tubes" class="hover:underline">9. Tubes & Catheters</a></li>
            <li><a href="#mistakes" class="hover:underline">10. Common Mistakes</a></li>
            <li><a href="#resources" class="hover:underline">11. Resources for IBQs</a></li>
            <li><a href="#strategy" class="hover:underline">12. Study Strategy</a></li>
            <li><a href="#video" class="hover:underline">13. Video Based Qs</a></li>
            <li><a href="#checklist" class="hover:underline">14. Topic Checklist</a></li>
            <li><a href="#practice" class="hover:underline">15. How to Practice</a></li>
            <li><a href="#final" class="hover:underline">16. Final Tips</a></li>
            <li><a href="#glossary" class="hover:underline">17. Glossary</a></li>
            <li><a href="#faq" class="hover:underline">18. FAQs</a></li>
          </ul>
        </div>

        <h2 id="intro" class="text-2xl font-bold text-gray-900">1. Introduction</h2>
        <p>AIIMS wants practical nurses. IBQs test your familiarity with the hospital environment.</p>
        <p>These are scoring questions if you know them.</p>

        <h2 id="importance" class="text-2xl font-bold text-gray-900">2. Importance of IBQs</h2>
        <p>30-40 questions are image-based. Getting them wrong is a sin.</p>
        <p>They take less time to answer than theory questions.</p>

        <h2 id="instruments" class="text-2xl font-bold text-gray-900">3. Surgical Instruments</h2>
        <p>Retractors, Forceps, Scissors, Scalpel blades.</p>
        <p>Know the difference between Alice and Babcock.</p>

        <h2 id="procedures" class="text-2xl font-bold text-gray-900">4. Nursing Procedures</h2>
        <p>Images of CPR, IM injection sites, Cannulation.</p>
        <p>Identify the error in the image.</p>

        <h2 id="ecg" class="text-2xl font-bold text-gray-900">5. ECG Interpretation</h2>
        <p>MI, VT, VF, AFib, Hyperkalemia.</p>
        <p>Memorize the wave patterns.</p>

        <h2 id="xray" class="text-2xl font-bold text-gray-900">6. X-Rays & CT</h2>
        <p>Pneumothorax, Fractures, NG tube placement.</p>
        <p>Basic identification is needed.</p>

        <h2 id="obg-inst" class="text-2xl font-bold text-gray-900">7. OBG Instruments</h2>
        <p>Sims speculum, Cusco's, Forceps, Vacuum cup.</p>
        <p>Very high yield.</p>

        <h2 id="positions" class="text-2xl font-bold text-gray-900">8. Patient Positions</h2>
        <p>Fowler's, Trendelenburg, Lithotomy.</p>
        <p>Which position for which procedure?</p>

        <h2 id="tubes" class="text-2xl font-bold text-gray-900">9. Tubes & Catheters</h2>
        <p>Ryle's tube, Foley's, ET tube, LMA, Chest tube.</p>
        <p>Color coding of cannulas is 100% asked.</p>

        <div class="bg-red-50 border-l-4 border-brand-red p-6 my-6">
          <h3 class="text-xl font-bold text-brand-red">10. Common Mistakes</h3>
          <ul class="list-disc pl-5">
            <li>Confusing similar looking instruments (e.g., Sponge holder vs Ovum forcep).</li>
            <li>Not reading the question (Image might be correct, question asks "Contraindication").</li>
          </ul>
        </div>

        <h2 id="resources" class="text-2xl font-bold text-gray-900">11. Resources for IBQs</h2>
        <p>Google Images, Target High Color Atlas, NNLONE IBQ PDF.</p>

        <h2 id="strategy" class="text-2xl font-bold text-gray-900">12. Study Strategy</h2>
        <p>Dedicate 1 hour daily to images. Make a folder in your phone.</p>

        <h2 id="video" class="text-2xl font-bold text-gray-900">13. Video Based Qs</h2>
        <p>Short clips of procedures. Watch YouTube videos of OSCE.</p>

        <h2 id="checklist" class="text-2xl font-bold text-gray-900">14. Topic Checklist</h2>
        <ul class="list-disc pl-5">
            <li>Cannula Colors?</li>
            <li>Biomedical Waste Bins?</li>
            <li>O2 Masks?</li>
        </ul>

        <h2 id="practice" class="text-2xl font-bold text-gray-900">15. How to Practice</h2>
        <p>Cover the name and try to identify. Quiz your friends.</p>

        <h2 id="final" class="text-2xl font-bold text-gray-900">16. Final Tips</h2>
        <p>Visual memory is strong. Look at images repeatedly.</p>

        <h2 id="glossary" class="text-2xl font-bold text-gray-900">17. Glossary</h2>
        <div class="grid grid-cols-2 gap-4">
            <div class="bg-gray-100 p-2"><strong>ET Tube:</strong> Endotracheal Tube</div>
            <div class="bg-gray-100 p-2"><strong>NG Tube:</strong> Nasogastric Tube</div>
        </div>

        <h2 id="faq" class="text-2xl font-bold text-gray-900">18. FAQs</h2>
        <details class="mb-2"><summary class="font-bold">Are colored images asked?</summary>Yes, mostly.</details>
        <details class="mb-2"><summary class="font-bold">Is CT Scan asked?</summary>Basic head CT (Bleed) is asked.</details>
      </div>
    `
  }
];
