export const SUBJECTS = [
  'Oral Disease Mastery',
  'Radiology & Structural Analysis',
  'Clinical Execution & Materials',
  'Pharmacology & Patient Safety',
  'Prevention Science & Public Health',
  'Ethics & Professional Practice',
] as const
export type Subject = typeof SUBJECTS[number]

export type BoardPassQuestion = {
  id: string
  subject: Subject
  topic: string

  difficulty: string
  type: string
  question: string
  choices: { key: string; text: string }[]
  correctAnswer: string
  rationale: string
  incorrectRationales: Record<string, string>
  boardTrap: string
  memoryHook: string
}



export const boardPassQuestions: BoardPassQuestion[] = [
  {
  id: "perio-001",
  type: "board",

  subject: "Oral Disease Mastery",
  topic: "Periodontal Pocket Formation",
  difficulty: "medium",
  question: "What is the gingival sulcus called when it becomes pathologically deepened due to disease?",
  choices: [
    { key: "A", text: "Junctional epithelium" },
    { key: "B", text: "Periodontal pocket" },
    { key: "C", text: "Free gingiva" },
    { key: "D", text: "Col" }
  ],
  correctAnswer: "B",
  rationale: "A periodontal pocket forms when the gingival sulcus deepens due to apical migration of the junctional epithelium and destruction of periodontal ligament and alveolar bone. It reflects loss of clinical attachment and is diagnostic of periodontitis.",
  incorrectRationales: {
    A: "The junctional epithelium forms the base of the sulcus but is not the name of the pathologic space created during disease.",
    B: "Correct.",
    C: "Free gingiva refers to the unattached gingiva surrounding the tooth and is not a disease state.",
    D: "The col is the interproximal depression beneath the contact area and is not synonymous with a diseased sulcus."
  },
  boardTrap: "Students often choose an anatomical structure instead of the pathological diagnosis when disease terminology is used.",
  memoryHook: "Healthy sulcus. Diseased pocket."
},

{
  id: "perio-002",
  type: "board",

  subject: "Oral Disease Mastery",
  topic: "Gingival vs Periodontal Pocket",
  difficulty: "medium",
  question: "Which of the following best describes a gingival pocket?",
  choices: [
    { key: "A", text: "A deepened sulcus caused by coronal enlargement of the gingiva without attachment loss" },
    { key: "B", text: "A pocket with apical migration of the junctional epithelium and clinical attachment loss" },
    { key: "C", text: "A defect extending into the periodontal ligament and alveolar bone" },
    { key: "D", text: "A lesion associated primarily with necrotizing periodontal diseases" }
  ],
  correctAnswer: "A",
  rationale: "A gingival pocket, or pseudopocket, results from coronal enlargement of the gingiva without loss of attachment. The junctional epithelium remains at its original level.",
  incorrectRationales: {
    A: "Correct.",
    B: "Apical migration and attachment loss define a periodontal pocket, not a gingival pocket.",
    C: "Extension into PDL and bone indicates periodontitis with attachment loss.",
    D: "Necrotizing conditions are not synonymous with gingival pocket formation."
  },
  boardTrap: "Deepened sulcus does not automatically equal attachment loss.",
  memoryHook: "Puffy up top. Attachment intact."
},

   {
  id: "perio-003",
  type: "board",

  subject: "Oral Disease Mastery",
  topic: "Clinical Gingival Assessment",
  difficulty: "difficult",
  question: "Which statement regarding stippling is most accurate?",
  choices: [
    { key: "A", text: "Its absence always indicates attachment loss" },
    { key: "B", text: "It confirms the absence of inflammation" },
    { key: "C", text: "It is a reliable indicator of periodontal health" },
    { key: "D", text: "Its presence or absence alone is not a reliable diagnostic indicator" }
  ],
  correctAnswer: "D",
  rationale: "Stippling varies among individuals and may be present in inflamed tissues or absent in healthy tissues. It is not a dependable diagnostic indicator of gingival health by itself.",
  incorrectRationales: {
    A: "Loss of stippling does not necessarily indicate attachment loss.",
    B: "Stippling can be present even in inflamed tissue.",
    C: "Stippling alone cannot confirm periodontal health.",
    D: "Correct."
  },
  boardTrap: "Boards test assumptions that visible features equal diagnostic certainty.",
  memoryHook: "Looks nice. Not diagnostic."
},
{
  id: "perio-004",
  type: "board",

  subject: "Oral Disease Mastery",
  topic: "Osseous Defects",
  difficulty: "critical",
  question: "A patient presents with 6 mm interproximal probing depths on adjacent molars. Radiographs show a concave interproximal bone defect with facial and lingual walls remaining. Which defect is most likely present?",
  choices: [
    { key: "A", text: "Hemiseptal defect" },
    { key: "B", text: "Horizontal bone loss" },
    { key: "C", text: "Crater" },
    { key: "D", text: "One-wall defect" }
  ],
  correctAnswer: "C",
  rationale: "A crater is a two-wall defect where facial and lingual walls remain while interproximal bone is lost, creating a concavity. It is common in posterior teeth.",
  incorrectRationales: {
    A: "A hemiseptal defect is a one-wall vertical defect, not a bilateral concavity.",
    B: "Horizontal bone loss reflects uniform reduction in bone height, not a specific concave architecture.",
    C: "Correct.",
    D: "A one-wall defect retains only one bony wall and does not match this presentation."
  },
  boardTrap: "Students often default to horizontal bone loss instead of analyzing architecture.",
  memoryHook: "Crater = center lost, walls remain."
},
{
  id: "perio-005",
  type: "board",
  subject: "Oral Disease Mastery",
  topic: "Col Anatomy and Susceptibility",
  difficulty: "difficult",
  question: "Which factor best explains why the col area is particularly susceptible to periodontal breakdown?",
  choices: [
    { key: "A", text: "It is composed of junctional epithelium" },
    { key: "B", text: "It lacks keratinization and is difficult to access with a probe" },
    { key: "C", text: "It is a site of frequent salivary pooling" },
    { key: "D", text: "It has increased vascularity compared to surrounding tissue" }
  ],
  correctAnswer: "B",
  rationale: "The col consists of nonkeratinized epithelium between the facial and lingual papillae. Its lack of keratinization increases permeability and susceptibility to bacterial invasion. Its interproximal location also makes it difficult to access during probing and debridement.",
  incorrectRationales: {
    A: "The col is lined by nonkeratinized stratified squamous epithelium, not junctional epithelium.",
    B: "Correct.",
    C: "Salivary pooling is not characteristic of the col region and does not explain its breakdown risk.",
    D: "Vascularity contributes to inflammation but does not uniquely explain the col’s susceptibility."
  },
  boardTrap: "Students often confuse nonkeratinized col tissue with junctional epithelium.",
  memoryHook: "COL = no keratin armor + hard to reach."
}, 

{
  id: "perio-006",
  type: "board",
  subject: "Oral Disease Mastery",
  topic: "Necrotizing Periodontal Diseases",
  difficulty: "critical",
  question: "A 22-year-old patient presents with sudden gingival pain, spontaneous bleeding, fetid odor, metallic taste, and cratered anterior papillae covered by a gray pseudomembrane. What is the most likely diagnosis?",
  choices: [
    { key: "A", text: "Aggressive periodontitis" },
    { key: "B", text: "Necrotizing ulcerative gingivitis (NUG)" },
    { key: "C", text: "Chronic periodontitis" },
    { key: "D", text: "Acute herpetic gingivostomatitis" }
  ],
  correctAnswer: "B",
  rationale: "NUG presents acutely with punched-out papillae, spontaneous bleeding, fetid odor, metallic taste, and gray pseudomembrane formation. It is often associated with stress, poor nutrition, and immune compromise in young adults.",
  incorrectRationales: {
    A: "Aggressive periodontitis involves rapid attachment and bone loss but does not present with necrotic papillae or pseudomembranes.",
    B: "Correct.",
    C: "Chronic periodontitis progresses gradually and lacks acute necrotic symptoms.",
    D: "Herpetic gingivostomatitis presents with vesicles that rupture into ulcers and often includes fever and generalized involvement."
  },
  boardTrap: "Age may mislead students toward aggressive periodontitis, but cratered papillae and pseudomembrane are classic for NUG.",
  memoryHook: "Cratered + odor + stress = NUG."
},

{
  id: "perio-007",
  type: "board",
  subject: "Oral Disease Mastery",
  topic: "Papillary Morphology",
  difficulty: "medium",
  question: "Interdental papillae appear enlarged, bulbous, and extend beyond their normal contour while still filling the embrasure space. How are these papillae best described?",
  choices: [
    { key: "A", text: "Blunted papillae" },
    { key: "B", text: "Cratered papillae" },
    { key: "C", text: "Cleated papillae" },
    { key: "D", text: "Flat papillae" }
  ],
  correctAnswer: "C",
  rationale: "Cleated papillae are enlarged and bulbous due to inflammation or edema, often extending beyond their normal contour while still filling the embrasure space.",
  incorrectRationales: {
    A: "Blunted papillae appear shortened or notched, not enlarged.",
    B: "Cratered papillae are necrotic and depressed, typically seen in necrotizing disease.",
    C: "Correct.",
    D: "Flat papillae describe loss of normal pointed architecture, not overgrowth."
  },
  boardTrap: "Students confuse tissue enlargement (cleated) with tissue loss (blunted or cratered).",
  memoryHook: "Cleated = overinflated."
},

{
  id: "perio-008",
  type: "board",
  subject: "Oral Disease Mastery",
  topic: "Papillary Trauma and Clefting",
  difficulty: "difficult",
  question: "Interdental papillae appear narrowed with a V-shaped notch extending toward the attached gingiva on the facial of #24. The patient reports aggressive brushing and snapping floss. What best describes this papillary appearance?",
  choices: [
    { key: "A", text: "Cratered papillae" },
    { key: "B", text: "Cleated papillae" },
    { key: "C", text: "Clefted papillae" },
    { key: "D", text: "Flat papillae" }
  ],
  correctAnswer: "C",
  rationale: "Clefted papillae present as slit-like or V-shaped notches, often from floss or brushing trauma. This lesion is commonly referred to as a Stillman cleft.",
  incorrectRationales: {
    A: "Cratered papillae are punched-out and necrotic, typically seen in NUG.",
    B: "Cleated papillae are enlarged and bulbous, not slit-like.",
    C: "Correct.",
    D: "Flat papillae reflect loss of height, not a linear indentation."
  },
  boardTrap: "Clefted and cleated are commonly confused.",
  memoryHook: "Clefted = cut-like slit."
},

{
  id: "perio-009",
  type: "board",
  subject: "Oral Disease Mastery",
  topic: "Papillary Enlargement",
  difficulty: "medium",
  question: "Interdental papillae appear swollen, rounded, and over-contoured, completely filling the embrasure without bone loss. What best describes this condition?",
  choices: [
    { key: "A", text: "Flat papilla" },
    { key: "B", text: "Bulbous papilla" },
    { key: "C", text: "Clefted papilla" },
    { key: "D", text: "Cratered papilla" }
  ],
  correctAnswer: "B",
  rationale: "Bulbous papillae are enlarged, rounded, and over-contoured due to inflammation or irritation, filling the embrasure space.",
  incorrectRationales: {
    A: "Flat papillae show reduced height.",
    B: "Correct.",
    C: "Clefted papillae show slit-like indentation.",
    D: "Cratered papillae are necrotic and punched-out."
  },
  boardTrap: "Students misinterpret 'blunted tip' as tissue loss rather than swelling.",
  memoryHook: "Bulbous = ballooned."
},

{
  id: "perio-010",
  type: "board",
  subject: "Oral Disease Mastery",
  topic: "Marginal Gingival Contour",
  difficulty: "difficult",
  question: "Marginal gingiva appears rolled and lifebuoy-shaped around the cervical third of the teeth without attachment loss. What term best describes this appearance?",
  choices: [
    { key: "A", text: "Bulbous papillae" },
    { key: "B", text: "Festooned gingiva" },
    { key: "C", text: "Blunted papillae" },
    { key: "D", text: "Clefted gingiva" }
  ],
  correctAnswer: "B",
  rationale: "Festooned gingiva refers to exaggerated, rolled marginal gingiva that resembles a lifebuoy or decorative contour.",
  incorrectRationales: {
    A: "Bulbous papillae describe interdental swelling, not rolled margins.",
    B: "Correct.",
    C: "Blunted papillae describe reduced height.",
    D: "Clefted gingiva involves slit-like defects."
  },
  boardTrap: "Students confuse enlargement with shape terminology.",
  memoryHook: "Festooned = fancy fringe."
},

{
  id: "perio-011",
  type: "board",
  subject: "Oral Disease Mastery",
  topic: "Surgical Papillary Changes",
  difficulty: "critical",
  question: "Post-surgical papillae appear shortened, flat, and angular without inflammation. What best describes this condition?",
  choices: [
    { key: "A", text: "Cratered papillae" },
    { key: "B", text: "Blunted papillae" },
    { key: "C", text: "Resected papillae" },
    { key: "D", text: "Cleated papillae" }
  ],
  correctAnswer: "C",
  rationale: "Resected papillae are intentionally reduced or reshaped surgically and appear shortened but healthy.",
  incorrectRationales: {
    A: "Cratered papillae result from necrosis.",
    B: "Blunted papillae result from disease, not surgery.",
    C: "Correct.",
    D: "Cleated papillae are enlarged."
  },
  boardTrap: "Surgical clues signal resection, not disease.",
  memoryHook: "Resected = reduced by scalpel."
},

{
  id: "perio-012",
  type: "board",
  subject: "Oral Disease Mastery",
  topic: "Papillary Height Loss",
  difficulty: "difficult",
  question: "Papillae between #8 and #9 appear shortened and fail to fully occupy the embrasure. There is no surgical history but prior inflammation and smoking. What best describes this appearance?",
  choices: [
    { key: "A", text: "Blunted papillae" },
    { key: "B", text: "Resected papillae" },
    { key: "C", text: "Clefted papillae" },
    { key: "D", text: "Festooned papillae" }
  ],
  correctAnswer: "A",
  rationale: "Blunted papillae are reduced in height and fail to fill the embrasure due to prior inflammation or bone loss.",
  incorrectRationales: {
    A: "Correct.",
    B: "Resected papillae require surgical history.",
    C: "Clefted papillae show linear indentations.",
    D: "Festooned papillae describe rolled margins."
  },
  boardTrap: "Lack of surgical history eliminates resection.",
  memoryHook: "Blunted = burned out."
},
{
  id: "perio-013",
  type: "board",
  subject: "Oral Disease Mastery",
  topic: "Drug-Induced Gingival Enlargement",
  difficulty: "critical",
  question: "A patient taking nifedipine and phenytoin presents with firm, lobulated gingival overgrowth extending over posterior crowns with minimal bleeding. What best describes this condition?",
  choices: [
    { key: "A", text: "Inflammatory gingival enlargement" },
    { key: "B", text: "Pseudopocketing due to festooning" },
    { key: "C", text: "Hyperplastic gingiva" },
    { key: "D", text: "Hypertrophic gingiva" }
  ],
  correctAnswer: "C",
  rationale: "Drug-induced gingival enlargement from phenytoin or nifedipine results in hyperplastic, fibrotic overgrowth due to increased cellular proliferation.",
  incorrectRationales: {
    A: "Inflammatory enlargement appears soft and bleeds easily.",
    B: "Festooning is contour change, not drug-induced overgrowth.",
    C: "Correct.",
    D: "Hypertrophy refers to cell enlargement, not increased cell number."
  },
  boardTrap: "Boards test hyperplasia vs hypertrophy terminology.",
  memoryHook: "Phenytoin + Nifedipine = Hyperplasia hills."
},
{
  id: "perio-014",
  type: "board",
  subject: "Oral Disease Mastery",
  topic: "Gingival Crevicular Fluid",
  difficulty: "difficult",
  question: "Gingival crevicular fluid (GCF) volume is highest in patients with active periodontitis and lowest in those with healthy tissues. What does this indicate about GCF levels?",
  choices: [
    { key: "A", text: "GCF levels remain constant regardless of inflammation" },
    { key: "B", text: "GCF increases with the severity of inflammation, even without attachment loss" },
    { key: "C", text: "GCF is produced only when attachment loss is present" },
    { key: "D", text: "GCF directly measures pocket depth" }
  ],
  correctAnswer: "B",
  rationale: "GCF is a serum-like exudate that increases with inflammation. It rises in gingivitis even without attachment loss and increases further in periodontitis due to vascular permeability and immune response.",
  incorrectRationales: {
    A: "GCF is dynamic and increases with inflammation.",
    B: "Correct.",
    C: "GCF is present in gingivitis without attachment loss.",
    D: "GCF correlates with inflammation, not pocket depth directly."
  },
  boardTrap: "Students confuse GCF with attachment loss or pocket depth rather than inflammation.",
  memoryHook: "GCF grows with inflammation, not depth."
},
{
  id: "perio-015",
  type: "board",
  subject: "Oral Disease Mastery",
  topic: "Cementum vs Bone",
  difficulty: "difficult",
  question: "Which feature functionally differentiates cementum from alveolar bone?",
  choices: [
    { key: "A", text: "Cementum is highly vascular" },
    { key: "B", text: "Cementum contains marrow spaces and Haversian systems" },
    { key: "C", text: "Cementum does not undergo physiologic remodeling like bone" },
    { key: "D", text: "Cementum is formed by osteoblasts" }
  ],
  correctAnswer: "C",
  rationale: "Unlike bone, cementum is avascular and does not undergo continuous remodeling or physiologic resorption. This allows stable long-term PDL attachment.",
  incorrectRationales: {
    A: "Cementum is avascular.",
    B: "Marrow spaces and Haversian systems are features of bone.",
    C: "Correct.",
    D: "Cementum is formed by cementoblasts, not osteoblasts."
  },
  boardTrap: "Cementum is similar to bone structurally but not functionally dynamic.",
  memoryHook: "Bone builds. Cementum anchors."
},
{
  id: "perio-016",
  type: "board",
  subject: "Oral Disease Mastery",
  topic: "PDL Fiber Groups",
  difficulty: "critical",
  question: "Which PDL fiber group is typically the first affected during early alveolar bone loss?",
  choices: [
    { key: "A", text: "Oblique fibers" },
    { key: "B", text: "Alveolar crest fibers" },
    { key: "C", text: "Horizontal fibers" },
    { key: "D", text: "Interradicular fibers" }
  ],
  correctAnswer: "B",
  rationale: "Alveolar crest fibers extend from cementum just apical to the junctional epithelium to the alveolar crest and are typically the first destroyed in early bone loss.",
  incorrectRationales: {
    A: "Oblique fibers resist vertical forces and are more numerous but not first affected.",
    B: "Correct.",
    C: "Horizontal fibers are located mid-root and affected later.",
    D: "Interradicular fibers are present only in multirooted teeth."
  },
  boardTrap: "Most numerous (oblique) is not the same as first affected.",
  memoryHook: "Crest fibers fall first."
},
{
  id: "perio-017",
  type: "board",
  subject: "Oral Disease Mastery",
  topic: "PDL Fiber Function",
  difficulty: "medium",
  question: "Which PDL fiber group is most numerous and primarily resists intrusive occlusal forces?",
  choices: [
    { key: "A", text: "Horizontal fibers" },
    { key: "B", text: "Alveolar crest fibers" },
    { key: "C", text: "Oblique fibers" },
    { key: "D", text: "Apical fibers" }
  ],
  correctAnswer: "C",
  rationale: "Oblique fibers are the most abundant PDL fibers and resist vertical compressive forces during mastication.",
  incorrectRationales: {
    A: "Horizontal fibers resist lateral forces.",
    B: "Alveolar crest fibers resist lateral movement.",
    C: "Correct.",
    D: "Apical fibers resist extrusive forces."
  },
  boardTrap: "Students confuse direction of force with fiber name.",
  memoryHook: "Oblique = shock absorber."
},
{
  id: "perio-018",
  type: "board",
  subject: "Oral Disease Mastery",
  topic: "Sharpey's Fibers",
  difficulty: "medium",
  question: "Which principal fiber group accounts for the greatest number of Sharpey's fibers in a healthy periodontium?",
  choices: [
    { key: "A", text: "Horizontal fibers" },
    { key: "B", text: "Interradicular fibers" },
    { key: "C", text: "Alveolar crest fibers" },
    { key: "D", text: "Oblique fibers" }
  ],
  correctAnswer: "D",
  rationale: "Sharpey's fibers are the embedded ends of principal PDL fibers. Because oblique fibers are the most abundant, they contribute the greatest number of Sharpey's fibers.",
  incorrectRationales: {
    A: "Horizontal fibers are present but less numerous.",
    B: "Interradicular fibers are limited to multirooted teeth.",
    C: "Alveolar crest fibers are not the most abundant.",
    D: "Correct."
  },
  boardTrap: "Sharpey's quantity reflects principal fiber abundance.",
  memoryHook: "Oblique is the obvious majority."
},
{
  id: "perio-019",
  type: "board",
  subject: "Oral Disease Mastery",
  topic: "Apical Fiber Function",
  difficulty: "critical",
  question: "Which PDL fiber group primarily resists extrusive forces at the root apex?",
  choices: [
    { key: "A", text: "Apical fibers" },
    { key: "B", text: "Oblique fibers" },
    { key: "C", text: "Horizontal fibers" },
    { key: "D", text: "Alveolar crest fibers" }
  ],
  correctAnswer: "A",
  rationale: "Apical fibers radiate from the root apex into surrounding bone and resist extrusive forces that attempt to pull the tooth from its socket.",
  incorrectRationales: {
    A: "Correct.",
    B: "Oblique fibers resist intrusive compressive forces.",
    C: "Horizontal fibers resist lateral forces.",
    D: "Alveolar crest fibers resist lateral and tipping forces."
  },
  boardTrap: "Intrusive ≠ extrusive.",
  memoryHook: "Apical anchors against pull."
},
{
  id: "perio-020",
  type: "board",
  subject: "Oral Disease Mastery",
  topic: "Interradicular Fibers",
  difficulty: "medium",
  question: "Which PDL fiber group is found exclusively in multirooted teeth and stabilizes the furcation region?",
  choices: [
    { key: "A", text: "Oblique fibers" },
    { key: "B", text: "Interradicular fibers" },
    { key: "C", text: "Apical fibers" },
    { key: "D", text: "Horizontal fibers" }
  ],
  correctAnswer: "B",
  rationale: "Interradicular fibers are located within furcation areas of multirooted teeth and stabilize against tipping and torque.",
  incorrectRationales: {
    A: "Oblique fibers are found along the root, not exclusively in furcations.",
    B: "Correct.",
    C: "Apical fibers are located at the root apex.",
    D: "Horizontal fibers run mid-root."
  },
  boardTrap: "Furcation = interradicular.",
  memoryHook: "Interradicular bridges between roots."
},
{
  id: "perio-021",
  subject: "Oral Disease Mastery",
  topic: "Gingival Fiber Groups",
  difficulty: "difficult",
  type: "application",
  question: "A clinician notes a ring-like group of collagen fibers within the free gingiva that resists displacement of the marginal tissue. Which fiber group is described?",
  choices: [
    { key: "A", text: "Oblique fibers" },
    { key: "B", text: "Alveologingival fibers" },
    { key: "C", text: "Circular gingival fibers" },
    { key: "D", text: "Dentoperiosteal fibers" }
  ],
  correctAnswer: "C",
  rationale: "Circular gingival fibers encircle the tooth within the free gingiva and help maintain gingival contour and marginal adaptation.",
  incorrectRationales: {
    A: "Oblique fibers are principal PDL fibers that resist vertical occlusal forces.",
    B: "Alveologingival fibers attach gingiva to bone, not encircle the tooth.",
    C: "Correct.",
    D: "Dentoperiosteal fibers extend from cementum to periosteum over the alveolar crest."
  },
  boardTrap: "Encircling fibers belong to gingival fiber groups, not principal PDL fibers.",
  memoryHook: "Circular = collagen collar."
},

{
  id: "perio-022",
  subject: "Oral Disease Mastery",
  topic: "Orthodontic Relapse",
  difficulty: "critical",
  type: "critical-thinking",
  question: "Which gingival fiber group is most responsible for resisting orthodontic rotation and contributing to relapse after appliance removal?",
  choices: [
    { key: "A", text: "Transseptal fibers" },
    { key: "B", text: "Circular fibers" },
    { key: "C", text: "Alveologingival fibers" },
    { key: "D", text: "Dentoperiosteal fibers" }
  ],
  correctAnswer: "A",
  rationale: "Transseptal fibers connect cementum of adjacent teeth and are known to reform quickly, contributing to orthodontic relapse.",
  incorrectRationales: {
    A: "Correct.",
    B: "Circular fibers maintain gingival contour but do not connect adjacent teeth.",
    C: "Alveologingival fibers attach gingiva to bone.",
    D: "Dentoperiosteal fibers anchor gingiva but do not control rotation."
  },
  boardTrap: "Relapse = tooth-to-tooth connection, not around-the-tooth support.",
  memoryHook: "Transseptal ties teeth together."
},

{
  id: "perio-023",
  subject: "Oral Disease Mastery",
  topic: "Gingival Fiber Groups",
  difficulty: "difficult",
  type: "application",
  question: "Which gingival fiber group primarily anchors the free gingiva directly to cementum?",
  choices: [
    { key: "A", text: "Dentogingival fibers" },
    { key: "B", text: "Transseptal fibers" },
    { key: "C", text: "Circular fibers" },
    { key: "D", text: "Alveologingival fibers" }
  ],
  correctAnswer: "A",
  rationale: "Dentogingival fibers extend from cementum into the lamina propria of the free gingiva and are responsible for firm marginal attachment.",
  incorrectRationales: {
    A: "Correct.",
    B: "Transseptal fibers connect adjacent teeth.",
    C: "Circular fibers encircle but do not directly anchor to cementum.",
    D: "Alveologingival fibers attach gingiva to bone."
  },
  boardTrap: "Encircling does not equal anchoring.",
  memoryHook: "Dentogingival = cementum to gingiva."
},

{
  id: "perio-024",
  subject: "Oral Disease Mastery",
  topic: "Periodontal Pocket Classification",
  difficulty: "critical",
  type: "application",
  question: "A periodontal pocket with its base apical to the alveolar crest and associated with vertical bone loss is classified as which type?",
  choices: [
    { key: "A", text: "Pseudopocket" },
    { key: "B", text: "Suprabony pocket" },
    { key: "C", text: "Infrabony pocket" },
    { key: "D", text: "Perio-endo lesion" }
  ],
  correctAnswer: "C",
  rationale: "Infrabony pockets extend apical to the alveolar crest and are associated with vertical bone defects.",
  incorrectRationales: {
    A: "Pseudopockets involve gingival enlargement without attachment loss.",
    B: "Suprabony pockets have bases coronal to the alveolar crest.",
    C: "Correct.",
    D: "Perio-endo lesions involve pulpal pathology."
  },
  boardTrap: "Deep does not mean suprabony — position relative to crest determines classification.",
  memoryHook: "Infrabony drops below the crest."
},

{
  id: "perio-025",
  subject: "Oral Disease Mastery",
  topic: "Bleeding on Probing",
  difficulty: "critical",
  type: "critical-thinking",
  question: "What histologic change most directly causes bleeding on probing in inflamed gingiva?",
  choices: [
    { key: "A", text: "Transient vasodilation" },
    { key: "B", text: "Fibroblast proliferation" },
    { key: "C", text: "Increased keratinization" },
    { key: "D", text: "Ulceration of sulcular epithelium and capillary engorgement" }
  ],
  correctAnswer: "D",
  rationale: "Bleeding on probing occurs when sulcular epithelium becomes ulcerated and inflamed capillaries rupture during gentle probing.",
  incorrectRationales: {
    A: "Vasodilation alone does not cause bleeding without epithelial breakdown.",
    B: "Fibroblast proliferation produces fibrotic tissue.",
    C: "Keratinization would decrease bleeding tendency.",
    D: "Correct."
  },
  boardTrap: "Inflammation does not equal bleeding unless epithelial integrity is compromised.",
  memoryHook: "BOP = broken epithelial barrier."
},
{
  id: "perio-026",
  type: "critical-thinking",
  subject: "Oral Disease Mastery",
  topic: "Bleeding on Probing",
  difficulty: "critical",
  question: "A patient presents with no visible plaque or gingival enlargement, but bleeding on probing is noted across multiple sites using gentle calibrated probing force. What histologic change most directly explains this bleeding?",
  choices: [
    { key: "A", text: "Transient vasodilation in the gingival margin" },
    { key: "B", text: "Overgrowth of gingival fibroblasts" },
    { key: "C", text: "Thickening of the junctional epithelium" },
    { key: "D", text: "Ulceration of the sulcular epithelium with capillary engorgement" }
  ],
  correctAnswer: "D",
  rationale: "Bleeding on probing occurs due to ulceration of the sulcular epithelium and fragility of engorged subepithelial capillaries. Even light probing can rupture these compromised vessels.",
  incorrectRationales: {
    A: "Vasodilation alone does not cause bleeding without epithelial breakdown.",
    B: "Fibroblast overgrowth produces fibrotic tissue, which bleeds less easily.",
    C: "Thickened epithelium is more resistant to bleeding.",
    D: "Correct."
  },
  boardTrap: "Inflammation alone does not equal bleeding — epithelial breakdown must occur.",
  memoryHook: "BOP = broken epithelial barrier."
},

{
  id: "perio-027",
  type: "application",
  subject: "Oral Disease Mastery",
  topic: "Drug-Influenced Gingival Enlargement",
  difficulty: "critical",
  question: "A patient taking a calcium channel blocker presents with firm, fibrotic gingival overgrowth despite excellent oral hygiene. What is the most likely etiology?",
  choices: [
    { key: "A", text: "Drug-influenced gingival enlargement" },
    { key: "B", text: "Chronic plaque-induced gingivitis" },
    { key: "C", text: "Fungal gingivitis" },
    { key: "D", text: "Malnutrition-associated gingivitis" }
  ],
  correctAnswer: "A",
  rationale: "Certain medications including calcium channel blockers stimulate fibroblast proliferation, causing fibrotic gingival enlargement independent of plaque levels.",
  incorrectRationales: {
    A: "Correct.",
    B: "Plaque-induced gingivitis presents with erythema and bleeding.",
    C: "Fungal infections produce erythematous or ulcerative lesions.",
    D: "Malnutrition causes bleeding and inflammation, not fibrotic overgrowth."
  },
  boardTrap: "Firm pink tissue does not always mean healthy — check medication history.",
  memoryHook: "Meds make mountains."
},

{
  id: "perio-028",
  type: "board",
  subject: "Oral Disease Mastery",
  topic: "Recurrent Aphthous Stomatitis",
  difficulty: "medium",
  question: "A painful ulcer with a yellow-white center and red halo appears on nonkeratinized mucosa and heals within 10 days without scarring. What is the most likely diagnosis?",
  choices: [
    { key: "A", text: "Primary herpetic gingivostomatitis" },
    { key: "B", text: "Recurrent aphthous stomatitis" },
    { key: "C", text: "Linear gingival erythema" },
    { key: "D", text: "Traumatic ulcer" }
  ],
  correctAnswer: "B",
  rationale: "Recurrent aphthous stomatitis presents on nonkeratinized mucosa with a yellow fibrin center and erythematous halo and heals without scarring.",
  incorrectRationales: {
    A: "Herpetic lesions involve vesicles and systemic symptoms.",
    B: "Correct.",
    C: "Linear gingival erythema appears as a red band on the gingival margin.",
    D: "Traumatic ulcers usually have a clear mechanical cause."
  },
  boardTrap: "No vesicles + soft tissue = aphthous, not herpes.",
  memoryHook: "Red ring, yellow sting = RAS."
},

{
  id: "perio-029",
  type: "critical-thinking",
  subject: "Oral Disease Mastery",
  topic: "Localized Aggressive Periodontitis",
  difficulty: "critical",
  question: "A 16-year-old with minimal plaque presents with rapid attachment loss localized to first molars and incisors and elevated Aggregatibacter actinomycetemcomitans levels. What is the diagnosis?",
  choices: [
    { key: "A", text: "Localized aggressive periodontitis" },
    { key: "B", text: "Generalized chronic periodontitis" },
    { key: "C", text: "Necrotizing periodontal disease" },
    { key: "D", text: "Linear gingival erythema" }
  ],
  correctAnswer: "A",
  rationale: "Localized aggressive periodontitis affects adolescents, involves first molars and incisors, progresses rapidly, and is associated with A. actinomycetemcomitans.",
  incorrectRationales: {
    A: "Correct.",
    B: "Chronic periodontitis progresses slowly and correlates with plaque levels.",
    C: "Necrotizing disease involves ulceration and pain.",
    D: "Linear gingival erythema does not cause attachment loss."
  },
  boardTrap: "Teen + clean mouth + rapid molar/incisor loss = aggressive.",
  memoryHook: "Firsts and fronts fall fast."
},

{
  id: "perio-030",
  type: "application",
  subject: "Oral Disease Mastery",
  topic: "Mucogingival Deformity",
  difficulty: "difficult",
  question: "A site shows no attached gingiva but no recession or interproximal attachment loss. How is this condition classified?",
  choices: [
    { key: "A", text: "Mucogingival deformity due to inadequate attached gingiva" },
    { key: "B", text: "Miller Class I recession" },
    { key: "C", text: "Miller Class II recession" },
    { key: "D", text: "Necrotizing gingivitis" }
  ],
  correctAnswer: "A",
  rationale: "Absence of attached gingiva without recession or interproximal loss is classified as a mucogingival deformity.",
  incorrectRationales: {
    A: "Correct.",
    B: "Miller I requires visible recession.",
    C: "Miller II requires recession extending beyond the MGJ.",
    D: "Necrotizing gingivitis involves ulceration and pain."
  },
  boardTrap: "No recession does not mean no defect — absence of attached gingiva matters.",
  memoryHook: "Missing buffer = mucogingival."
},

{
  id: "perio-031",
  type: "application",
  subject: "Oral Disease Mastery",
  topic: "Miller Classification",
  difficulty: "difficult",
  question: "Recession extends beyond the mucogingival junction with intact interdental papillae and no bone loss. What is the classification?",
  choices: [
    { key: "A", text: "Miller Class I" },
    { key: "B", text: "Miller Class II" },
    { key: "C", text: "Miller Class III" },
    { key: "D", text: "Miller Class IV" }
  ],
  correctAnswer: "B",
  rationale: "Miller Class II recession extends beyond the mucogingival junction without interproximal bone or soft tissue loss.",
  incorrectRationales: {
    A: "Class I does not extend beyond the MGJ.",
    B: "Correct.",
    C: "Class III involves interproximal loss.",
    D: "Class IV involves severe interproximal loss."
  },
  boardTrap: "MGJ position separates I from II.",
  memoryHook: "Below the seam, papilla pristine = Class II."
},

{
  id: "perio-032",
  type: "critical-thinking",
  subject: "Oral Disease Mastery",
  topic: "Miller Classification",
  difficulty: "critical",
  question: "Recession extends beyond the mucogingival junction with mild interproximal bone loss and blunted papillae. What is the classification?",
  choices: [
    { key: "A", text: "Miller Class I" },
    { key: "B", text: "Miller Class II" },
    { key: "C", text: "Miller Class III" },
    { key: "D", text: "Miller Class IV" }
  ],
  correctAnswer: "C",
  rationale: "Miller Class III recession includes apical extension beyond the MGJ with some interproximal bone or soft tissue loss.",
  incorrectRationales: {
    A: "Class I does not extend beyond the MGJ.",
    B: "Class II has intact papillae.",
    C: "Correct.",
    D: "Class IV involves severe interproximal loss."
  },
  boardTrap: "Blunted papilla = not Class II.",
  memoryHook: "Papilla not pristine = Class III scene."
},

{
  id: "perio-033",
  type: "critical-thinking",
  subject: "Oral Disease Mastery",
  topic: "Miller Classification",
  difficulty: "critical",
  question: "Severe recession extends beyond the mucogingival junction with complete loss of the interdental papilla and advanced interproximal bone loss. What is the classification?",
  choices: [
    { key: "A", text: "Miller Class II" },
    { key: "B", text: "Miller Class III" },
    { key: "C", text: "Miller Class IV" },
    { key: "D", text: "Mucogingival deformity with favorable prognosis" }
  ],
  correctAnswer: "C",
  rationale: "Miller Class IV defects involve severe recession beyond the mucogingival junction with complete loss of interproximal bone and papilla, resulting in poor prognosis for root coverage.",
  incorrectRationales: {
    A: "Class II has intact papillae and no interproximal loss.",
    B: "Class III involves partial interproximal loss, not complete loss.",
    C: "Correct.",
    D: "Severe interproximal destruction does not have favorable prognosis."
  },
  boardTrap: "Complete papilla loss automatically rules out Class I–III.",
  memoryHook: "No papilla, no coverage — Class IV exposure."
},

{
  id: "perio-034",
  type: "board",
  subject: "Oral Disease Mastery",
  topic: "Iatrogenic Factors",
  difficulty: "medium",
  question: "An overhanging restoration contributing to plaque accumulation and localized inflammation is classified as what type of factor?",
  choices: [
    { key: "A", text: "Idiopathic" },
    { key: "B", text: "Iatrogenic" },
    { key: "C", text: "Congenital" },
    { key: "D", text: "Systemic" }
  ],
  correctAnswer: "B",
  rationale: "Iatrogenic factors are caused by dental treatment or clinician error, such as overhanging restorations.",
  incorrectRationales: {
    A: "Idiopathic means unknown cause.",
    B: "Correct.",
    C: "Congenital refers to conditions present at birth.",
    D: "Systemic refers to body-wide conditions."
  },
  boardTrap: "If a procedure created it, it is iatrogenic.",
  memoryHook: "Iatrogenic = I did it."
},

{
  id: "perio-035",
  type: "critical-thinking",
  subject: "Oral Disease Mastery",
  topic: "Clinical Attachment Level",
  difficulty: "critical",
  question: "A site has a probing depth of 5 mm and documented 3 mm of facial recession. What is the clinical attachment level?",
  choices: [
    { key: "A", text: "3 mm" },
    { key: "B", text: "5 mm" },
    { key: "C", text: "6 mm" },
    { key: "D", text: "8 mm" }
  ],
  correctAnswer: "D",
  rationale: "Clinical attachment level equals probing depth plus recession. 5 mm + 3 mm = 8 mm.",
  incorrectRationales: {
    A: "Recession alone does not equal CAL.",
    B: "Probing depth alone does not equal CAL.",
    C: "Incorrect calculation.",
    D: "Correct."
  },
  boardTrap: "Boards test whether you add recession to probing depth.",
  memoryHook: "CAL = depth + loss."
},

{
  id: "perio-036",
  type: "application",
  subject: "Oral Disease Mastery",
  topic: "Furcation Classification",
  difficulty: "difficult",
  question: "A Nabers probe enters a furcation slightly but does not pass through, and there is no radiographic evidence of involvement. What is the classification?",
  choices: [
    { key: "A", text: "Class I" },
    { key: "B", text: "Class II" },
    { key: "C", text: "Class III" },
    { key: "D", text: "Class IV" }
  ],
  correctAnswer: "A",
  rationale: "Class I furcation involvement is incipient and may not be radiographically visible. The probe enters slightly but does not pass through.",
  incorrectRationales: {
    A: "Correct.",
    B: "Class II allows deeper entry but not through.",
    C: "Class III allows probe to pass completely through.",
    D: "Class IV is visible clinically due to recession."
  },
  boardTrap: "Early furcations are often not visible on radiographs.",
  memoryHook: "Just a dip = Class I tip."
},

{
  id: "perio-037",
  type: "critical-thinking",
  subject: "Oral Disease Mastery",
  topic: "Furcation Classification",
  difficulty: "critical",
  question: "A furcation allows complete probe passage and is clinically visible due to gingival recession. What is the classification?",
  choices: [
    { key: "A", text: "Class II" },
    { key: "B", text: "Class III" },
    { key: "C", text: "Class IV" },
    { key: "D", text: "Class I" }
  ],
  correctAnswer: "C",
  rationale: "Class IV furcation is completely through-and-through and clinically visible due to gingival recession.",
  incorrectRationales: {
    A: "Class II does not allow full passage.",
    B: "Class III allows passage but is not visible.",
    C: "Correct.",
    D: "Class I is incipient."
  },
  boardTrap: "Visibility differentiates III from IV.",
  memoryHook: "See it and pass it = Class IV."
},

{
  id: "perio-038",
  type: "board",
  subject: "Oral Disease Mastery",
  topic: "Furcation Anatomy",
  difficulty: "medium",
  question: "Which teeth most commonly require furcation probing?",
  choices: [
    { key: "A", text: "Maxillary and mandibular first molars" },
    { key: "B", text: "Maxillary canines and mandibular incisors" },
    { key: "C", text: "Mandibular premolars and maxillary laterals" },
    { key: "D", text: "Maxillary centrals and mandibular second premolars" }
  ],
  correctAnswer: "A",
  rationale: "First molars in both arches are multirooted and commonly exhibit furcation involvement.",
  incorrectRationales: {
    A: "Correct.",
    B: "These teeth are single-rooted.",
    C: "Most are single-rooted.",
    D: "These teeth are single-rooted."
  },
  boardTrap: "Probe molars, not single-rooted teeth.",
  memoryHook: "Molars multiply."
},

{
  id: "perio-039",
  type: "application",
  subject: "Oral Disease Mastery",
  topic: "Occlusal Trauma",
  difficulty: "medium",
  question: "Palpable vibration of a tooth during occlusal contact is known as what?",
  choices: [
    { key: "A", text: "Mobility" },
    { key: "B", text: "Fremitus" },
    { key: "C", text: "Pathologic migration" },
    { key: "D", text: "Attrition" }
  ],
  correctAnswer: "B",
  rationale: "Fremitus is vibratory movement detected by palpation during occlusal contact and may indicate occlusal trauma.",
  incorrectRationales: {
    A: "Mobility is movement present at rest.",
    B: "Correct.",
    C: "Migration refers to displacement.",
    D: "Attrition is wear of tooth structure."
  },
  boardTrap: "Movement during bite is fremitus, not mobility.",
  memoryHook: "Finger feels fremitus."
},

{
  id: "perio-040",
  type: "critical-thinking",
  subject: "Oral Disease Mastery",
  topic: "Osseous Defects",
  difficulty: "critical",
  question: "Radiographs show a window-like facial bone defect over a root with an intact alveolar crest. What is this defect called?",
  choices: [
    { key: "A", text: "Fenestration" },
    { key: "B", text: "Dehiscence" },
    { key: "C", text: "Cleft" },
    { key: "D", text: "Concavity" }
  ],
  correctAnswer: "A",
  rationale: "Fenestration is a window-like cortical bone defect with an intact alveolar crest.",
  incorrectRationales: {
    A: "Correct.",
    B: "Dehiscence includes loss of the alveolar crest.",
    C: "Cleft refers to a V-shaped defect.",
    D: "Concavity is a general depression, not a cortical window."
  },
  boardTrap: "Crest intact = fenestration, not dehiscence.",
  memoryHook: "Window open, roof intact."
},
{
  id: "perio-041",
  type: "critical-thinking",
  subject: "Oral Disease Mastery",
  topic: "Implant Types",
  difficulty: "critical",
  question: "An implant that traverses the mandible from the inferior border to the alveolar ridge and is secured with transosseous pins is classified as what type?",
  choices: [
    { key: "A", text: "Subperiosteal implant" },
    { key: "B", text: "Endosteal implant" },
    { key: "C", text: "Zygomatic implant" },
    { key: "D", text: "Transosteal implant" }
  ],
  correctAnswer: "D",
  rationale: "Transosteal implants pass completely through the mandible and are secured with pins, primarily used in severely resorbed mandibles.",
  incorrectRationales: {
    A: "Subperiosteal implants rest on bone under the periosteum.",
    B: "Endosteal implants are placed within the alveolar bone.",
    C: "Zygomatic implants are placed in the zygomatic bone of the maxilla.",
    D: "Correct."
  },
  boardTrap: "Mandible + through-and-through pins = transosteal.",
  memoryHook: "Transosteal travels through the mandible."
},

{
  id: "perio-042",
  type: "difficult",
  subject: "Oral Disease Mastery",
  topic: "Implant Components",
  difficulty: "difficult",
  question: "Which implant component directly osseointegrates with bone and serves as the biologic anchor?",
  choices: [
    { key: "A", text: "Abutment" },
    { key: "B", text: "Fixture (implant body)" },
    { key: "C", text: "Prosthetic crown" },
    { key: "D", text: "Healing cap" }
  ],
  correctAnswer: "B",
  rationale: "The fixture, or implant body, integrates directly with bone and provides long-term stability.",
  incorrectRationales: {
    A: "The abutment connects the prosthesis to the fixture.",
    B: "Correct.",
    C: "The crown restores function and esthetics only.",
    D: "The healing cap is temporary."
  },
  boardTrap: "The fixture is the true implant anchor.",
  memoryHook: "Fixture fixes to bone."
},

{
  id: "perio-043",
  type: "critical-thinking",
  subject: "Oral Disease Mastery",
  topic: "Osseointegration",
  difficulty: "critical",
  question: "Osseointegration is best defined as what?",
  choices: [
    { key: "A", text: "Healing of gingiva over the implant" },
    { key: "B", text: "Mechanical retention of the implant in bone" },
    { key: "C", text: "Direct structural and functional connection between bone and implant surface" },
    { key: "D", text: "Surface coating of implant with growth factors" }
  ],
  correctAnswer: "C",
  rationale: "Osseointegration is the direct structural and functional connection between living bone and a load-bearing implant surface.",
  incorrectRationales: {
    A: "Gingival healing does not define osseointegration.",
    B: "Mechanical retention alone is not biologic integration.",
    C: "Correct.",
    D: "Surface treatments may assist but do not define integration."
  },
  boardTrap: "Integration is biologic, not mechanical.",
  memoryHook: "Bone bonds to implant."
},

{
  id: "perio-044",
  type: "critical-thinking",
  subject: "Oral Disease Mastery",
  topic: "Early Implant Failure",
  difficulty: "critical",
  question: "What is the earliest detectable clinical sign of potential implant failure?",
  choices: [
    { key: "A", text: "Mobility" },
    { key: "B", text: "Pain" },
    { key: "C", text: "Bleeding on probing with peri-implant inflammation" },
    { key: "D", text: "Radiographic bone loss greater than 2 mm" }
  ],
  correctAnswer: "C",
  rationale: "Peri-implant mucositis with bleeding on probing is the earliest sign of potential implant failure and precedes mobility or radiographic bone loss.",
  incorrectRationales: {
    A: "Mobility is a late sign.",
    B: "Pain is inconsistent and not early.",
    C: "Correct.",
    D: "Radiographic changes occur later."
  },
  boardTrap: "Soft tissue changes precede radiographic failure.",
  memoryHook: "Bleed first, move later."
},

{
  id: "perio-045",
  type: "difficult",
  subject: "Oral Disease Mastery",
  topic: "Laser Safety Around Implants",
  difficulty: "difficult",
  question: "Which laser has been shown under proper protocol to be safe for use on or around dental implants?",
  choices: [
    { key: "A", text: "CO₂ laser" },
    { key: "B", text: "Er:YAG laser" },
    { key: "C", text: "Nd:YAG laser" },
    { key: "D", text: "High-power diode laser" }
  ],
  correctAnswer: "B",
  rationale: "Er:YAG lasers can safely decontaminate implant surfaces without damaging titanium when used under appropriate settings.",
  incorrectRationales: {
    A: "CO₂ may cause overheating.",
    B: "Correct.",
    C: "Nd:YAG may overheat titanium surfaces.",
    D: "High-power diode may cause thermal damage."
  },
  boardTrap: "Implant safety depends on wavelength and power.",
  memoryHook: "Er:YAG = implant safe."
},

{
  id: "perio-046",
  type: "application",
  subject: "Oral Disease Mastery",
  topic: "Acute Inflammation",
  difficulty: "medium",
  question: "Which white blood cell is most prevalent and active in the initial host response to acute periodontal infection?",
  choices: [
    { key: "A", text: "Neutrophils" },
    { key: "B", text: "Eosinophils" },
    { key: "C", text: "Basophils" },
    { key: "D", text: "Lymphocytes" }
  ],
  correctAnswer: "A",
  rationale: "Neutrophils are the first responders in acute bacterial infections and dominate early periodontal inflammatory response.",
  incorrectRationales: {
    A: "Correct.",
    B: "Eosinophils are associated with allergies and parasites.",
    C: "Basophils mediate hypersensitivity reactions.",
    D: "Lymphocytes dominate chronic inflammation."
  },
  boardTrap: "Acute bacterial response = neutrophils.",
  memoryHook: "Neutrophils rush first."
},
{
  id: "perio-047",
  type: "application",
  subject: "Oral Disease Mastery",
  topic: "Cardinal Signs of Inflammation",
  difficulty: "medium",
  question: "Which list correctly identifies the five classic cardinal signs of inflammation?",
  choices: [
    { key: "A", text: "Redness, heat, swelling, pain, loss of function" },
    { key: "B", text: "Redness, pus, warmth, tenderness, ulceration" },
    { key: "C", text: "Swelling, pain, exudate, fever, necrosis" },
    { key: "D", text: "Heat, redness, pus, tissue slough, fibrosis" }
  ],
  correctAnswer: "A",
  rationale: "The five cardinal signs of inflammation are redness (rubor), heat (calor), swelling (tumor), pain (dolor), and loss of function (functio laesa).",
  incorrectRationales: {
    A: "Correct.",
    B: "Pus and ulceration are secondary effects, not cardinal signs.",
    C: "Fever and necrosis are not part of the classical five signs.",
    D: "Pus and fibrosis are outcomes, not cardinal signs."
  },
  boardTrap: "Pus is not one of the five classic signs.",
  memoryHook: "Red, hot, swollen, painful, function lost."
},

{
  id: "perio-048",
  type: "application",
  subject: "Oral Disease Mastery",
  topic: "Inflammatory Mediators",
  difficulty: "medium",
  question: "Which inflammatory mediator primarily directs leukocytes to migrate toward a site of infection?",
  choices: [
    { key: "A", text: "Histamine" },
    { key: "B", text: "Prostaglandin E2" },
    { key: "C", text: "Interleukin-10" },
    { key: "D", text: "Chemokines" }
  ],
  correctAnswer: "D",
  rationale: "Chemokines create a chemical gradient that attracts neutrophils and other immune cells to sites of infection.",
  incorrectRationales: {
    A: "Histamine promotes vasodilation but does not direct cell migration.",
    B: "PGE2 mediates pain and bone resorption.",
    C: "IL-10 is anti-inflammatory.",
    D: "Correct."
  },
  boardTrap: "Chemotaxis = chemokines.",
  memoryHook: "Chemokines call cells."
},

{
  id: "perio-049",
  type: "critical-thinking",
  subject: "Oral Disease Mastery",
  topic: "Pro-Inflammatory Cytokines",
  difficulty: "critical",
  question: "Which cytokines are most predominant in periodontal tissue destruction and are also associated with adipose tissue inflammation?",
  choices: [
    { key: "A", text: "IL-2" },
    { key: "B", text: "IL-4" },
    { key: "C", text: "IL-1 and TNF-alpha" },
    { key: "D", text: "IL-10" }
  ],
  correctAnswer: "C",
  rationale: "IL-1 and TNF-alpha are major pro-inflammatory cytokines that stimulate osteoclast activity and tissue breakdown and are also produced by adipose tissue.",
  incorrectRationales: {
    A: "IL-2 primarily supports T-cell proliferation.",
    B: "IL-4 promotes humoral immunity.",
    C: "Correct.",
    D: "IL-10 is anti-inflammatory."
  },
  boardTrap: "Adipose tissue stores inflammatory cytokines.",
  memoryHook: "IL-1 and TNF fuel gums and fat."
},

{
  id: "perio-050",
  type: "application",
  subject: "Oral Disease Mastery",
  topic: "IL-6 and IL-8",
  difficulty: "medium",
  question: "What is the role of IL-6 and IL-8 in periodontal disease?",
  choices: [
    { key: "A", text: "Promote inflammation, recruit neutrophils, and contribute to tissue destruction" },
    { key: "B", text: "Inhibit osteoclast activity and reduce inflammation" },
    { key: "C", text: "Stimulate collagen formation and regeneration" },
    { key: "D", text: "Suppress neutrophil chemotaxis" }
  ],
  correctAnswer: "A",
  rationale: "IL-6 stimulates osteoclast activity and IL-8 recruits neutrophils, both contributing to inflammation and tissue destruction.",
  incorrectRationales: {
    A: "Correct.",
    B: "They promote rather than inhibit inflammation.",
    C: "They are destructive, not regenerative.",
    D: "IL-8 enhances chemotaxis."
  },
  boardTrap: "IL-8 recruits neutrophils.",
  memoryHook: "IL-6 builds bone-breakers; IL-8 calls neutrophils."
},

{
  id: "perio-051",
  type: "application",
  subject: "Oral Disease Mastery",
  topic: "Prostaglandins",
  difficulty: "difficult",
  question: "Which prostaglandin is most associated with pain and alveolar bone resorption in periodontitis?",
  choices: [
    { key: "A", text: "PGD2" },
    { key: "B", text: "PGE2" },
    { key: "C", text: "PGF2alpha" },
    { key: "D", text: "PGI2" }
  ],
  correctAnswer: "B",
  rationale: "PGE2 increases osteoclast activity and mediates pain in periodontal inflammation.",
  incorrectRationales: {
    A: "PGD2 is more involved in allergic responses.",
    B: "Correct.",
    C: "PGF2alpha is not the primary destructive prostaglandin in periodontitis.",
    D: "PGI2 functions mainly in vasodilation."
  },
  boardTrap: "Pain + bone destruction = PGE2.",
  memoryHook: "PGE2 pries bone and pains."
},

{
  id: "perio-052",
  type: "critical-thinking",
  subject: "Oral Disease Mastery",
  topic: "Matrix Metalloproteinases",
  difficulty: "critical",
  question: "What is the primary function of matrix metalloproteinases (MMPs) in periodontal disease?",
  choices: [
    { key: "A", text: "Stimulate collagen synthesis" },
    { key: "B", text: "Inhibit inflammation" },
    { key: "C", text: "Degrade extracellular matrix proteins including collagen" },
    { key: "D", text: "Regulate lipid metabolism" }
  ],
  correctAnswer: "C",
  rationale: "MMPs degrade collagen and extracellular matrix components, contributing to connective tissue destruction.",
  incorrectRationales: {
    A: "They break down collagen, not synthesize it.",
    B: "They promote tissue destruction.",
    C: "Correct.",
    D: "They target proteins, not lipids."
  },
  boardTrap: "MMPs = matrix destroyers.",
  memoryHook: "MMPs chew collagen."
},

{
  id: "perio-053",
  type: "critical-thinking",
  subject: "Oral Disease Mastery",
  topic: "MMP-1 and MMP-8",
  difficulty: "critical",
  question: "MMP-1 and MMP-8 are best classified as what type of enzymes in periodontal disease?",
  choices: [
    { key: "A", text: "Fibroblast stimulators" },
    { key: "B", text: "Anti-inflammatory mediators" },
    { key: "C", text: "Lipid metabolizing enzymes" },
    { key: "D", text: "Collagenases that degrade extracellular matrix" }
  ],
  correctAnswer: "D",
  rationale: "MMP-1 and MMP-8 are collagenases that break down extracellular matrix proteins, contributing to attachment loss.",
  incorrectRationales: {
    A: "They degrade tissue, not stimulate fibroblasts.",
    B: "They promote tissue breakdown.",
    C: "They act on proteins, not lipids.",
    D: "Correct."
  },
  boardTrap: "MMP-1 and 8 = major collagen destroyers.",
  memoryHook: "1 and 8 eat collagen."
},

{
  id: "perio-054",
  type: "application",
  subject: "Oral Disease Mastery",
  topic: "Microbial Shift",
  difficulty: "medium",
  question: "What microbial shift occurs as periodontal disease progresses from health to periodontitis?",
  choices: [
    { key: "A", text: "Motile Gram-negative rods to Gram-positive cocci" },
    { key: "B", text: "Gram-positive aerobic cocci to motile Gram-negative anaerobic rods and spirochetes" },
    { key: "C", text: "Gram-negative rods to Gram-positive rods" },
    { key: "D", text: "Gram-positive rods to Gram-negative cocci" }
  ],
  correctAnswer: "B",
  rationale: "Healthy sites are dominated by Gram-positive cocci and rods. Disease progression favors motile Gram-negative anaerobic rods and spirochetes.",
  incorrectRationales: {
    A: "This reverses the correct progression.",
    B: "Correct.",
    C: "Gram-negative rods dominate disease, not health.",
    D: "Incorrect microbial pattern."
  },
  boardTrap: "Health = Gram-positive; Disease = Gram-negative motile anaerobes.",
  memoryHook: "Health still; disease moves."
},
{
  id: "perio-055",
  type: "critical-thinking",
  subject: "Oral Disease Mastery",
  topic: "Red Complex Bacteria",
  difficulty: "critical",
  question: "All of the following are part of the red complex bacteria associated with periodontitis EXCEPT:",
  choices: [
    { key: "A", text: "Tannerella forsythia" },
    { key: "B", text: "Porphyromonas gingivalis" },
    { key: "C", text: "Aggregatibacter actinomycetemcomitans" },
    { key: "D", text: "Treponema denticola" }
  ],
  correctAnswer: "C",
  rationale: "The red complex includes Porphyromonas gingivalis, Tannerella forsythia, and Treponema denticola. A. actinomycetemcomitans is associated with localized aggressive periodontitis.",
  incorrectRationales: {
    A: "T. forsythia is part of the red complex.",
    B: "P. gingivalis is part of the red complex.",
    C: "Correct.",
    D: "T. denticola is part of the red complex."
  },
  boardTrap: "A. actino is aggressive perio, not red complex.",
  memoryHook: "Red trio: P. gingivalis, T. forsythia, T. denticola."
},

{
  id: "perio-056",
  type: "application",
  subject: "Oral Disease Mastery",
  topic: "Fusobacterium nucleatum",
  difficulty: "medium",
  question: "What is the primary role of Fusobacterium nucleatum in periodontal disease?",
  choices: [
    { key: "A", text: "Acts as a bridging organism facilitating biofilm maturation" },
    { key: "B", text: "Primary pathogen in localized aggressive periodontitis" },
    { key: "C", text: "Gram-positive aerobic early colonizer" },
    { key: "D", text: "Anti-inflammatory regulator" }
  ],
  correctAnswer: "A",
  rationale: "F. nucleatum is a Gram-negative anaerobe that bridges early and late colonizers in biofilm development.",
  incorrectRationales: {
    A: "Correct.",
    B: "A. actinomycetemcomitans is linked to aggressive periodontitis.",
    C: "F. nucleatum is Gram-negative and anaerobic.",
    D: "It promotes inflammation."
  },
  boardTrap: "Fusobacterium bridges biofilm layers.",
  memoryHook: "Fuso builds bridges."
},

{
  id: "perio-057",
  type: "application",
  subject: "Oral Disease Mastery",
  topic: "Prevotella intermedia",
  difficulty: "medium",
  question: "Prevotella intermedia is best described as:",
  choices: [
    { key: "A", text: "Gram-positive health-associated bacterium" },
    { key: "B", text: "Gram-negative anaerobic rod associated with inflammation" },
    { key: "C", text: "Spirochete bridging organism" },
    { key: "D", text: "Anti-inflammatory species" }
  ],
  correctAnswer: "B",
  rationale: "P. intermedia is a Gram-negative anaerobic rod associated with periodontal inflammation and tissue destruction.",
  incorrectRationales: {
    A: "It is Gram-negative and pathogenic.",
    B: "Correct.",
    C: "Treponema denticola is a spirochete.",
    D: "It contributes to inflammation."
  },
  boardTrap: "Prevotella is disease-associated.",
  memoryHook: "Prevotella promotes inflammation."
},

{
  id: "perio-058",
  type: "application",
  subject: "Oral Disease Mastery",
  topic: "Pregnancy Gingivitis",
  difficulty: "medium",
  question: "Prevotella intermedia contributes to pregnancy-associated gingivitis because:",
  choices: [
    { key: "A", text: "Its growth is enhanced by elevated sex hormones" },
    { key: "B", text: "It suppresses inflammation" },
    { key: "C", text: "It decreases during pregnancy" },
    { key: "D", text: "Hormones inhibit its growth" }
  ],
  correctAnswer: "A",
  rationale: "Elevated progesterone and estrogen enhance growth of P. intermedia during pregnancy.",
  incorrectRationales: {
    A: "Correct.",
    B: "It increases inflammation.",
    C: "It increases, not decreases.",
    D: "Hormones stimulate its growth."
  },
  boardTrap: "Hormones feed P. intermedia.",
  memoryHook: "Pregnancy hormones feed Prevotella."
},

{
  id: "perio-059",
  type: "application",
  subject: "Oral Disease Mastery",
  topic: "Campylobacter rectus",
  difficulty: "medium",
  question: "Campylobacter rectus in pregnancy is best described as:",
  choices: [
    { key: "A", text: "Hormone-suppressed bacterium" },
    { key: "B", text: "Unaffected by hormonal changes" },
    { key: "C", text: "Reduced during pregnancy" },
    { key: "D", text: "Enhanced by progesterone and estrogen" }
  ],
  correctAnswer: "D",
  rationale: "C. rectus growth increases in response to pregnancy hormones, contributing to inflammation.",
  incorrectRationales: {
    A: "Growth increases, not decreases.",
    B: "It is hormone-sensitive.",
    C: "It increases during pregnancy.",
    D: "Correct."
  },
  boardTrap: "Hormones increase pathogenic bacteria.",
  memoryHook: "C. rectus rises in pregnancy."
},

{
  id: "perio-060",
  type: "application",
  subject: "Oral Disease Mastery",
  topic: "Acquired Pellicle",
  difficulty: "medium",
  question: "The first film to form on clean enamel after prophylaxis is:",
  choices: [
    { key: "A", text: "Bacterial biofilm" },
    { key: "B", text: "Salivary bacterial aggregate" },
    { key: "C", text: "Mineralized calculus" },
    { key: "D", text: "Salivary glycoprotein pellicle" }
  ],
  correctAnswer: "D",
  rationale: "The acquired pellicle is a glycoprotein layer derived from saliva that forms within minutes.",
  incorrectRationales: {
    A: "Biofilm forms later.",
    B: "The pellicle forms before bacteria colonize.",
    C: "Calculus requires mineralization over time.",
    D: "Correct."
  },
  boardTrap: "Pellicle first, bacteria second.",
  memoryHook: "Pellicle protects first."
},

{
  id: "perio-061",
  type: "application",
  subject: "Oral Disease Mastery",
  topic: "Healing After Flap Surgery",
  difficulty: "difficult",
  question: "The most common healing outcome after conventional periodontal flap surgery is:",
  choices: [
    { key: "A", text: "Long junctional epithelium" },
    { key: "B", text: "True regeneration" },
    { key: "C", text: "Scar formation" },
    { key: "D", text: "Complete bone regrowth" }
  ],
  correctAnswer: "A",
  rationale: "Healing by long junctional epithelium is the most common outcome following conventional flap surgery.",
  incorrectRationales: {
    A: "Correct.",
    B: "True regeneration requires specialized therapy.",
    C: "Scar formation is not typical.",
    D: "Complete bone regrowth is uncommon."
  },
  boardTrap: "LJE is common; regeneration is rare.",
  memoryHook: "Flap heals with LJE."
},

{
  id: "perio-062",
  type: "application",
  subject: "Oral Disease Mastery",
  topic: "Periodontal Dressings",
  difficulty: "medium",
  question: "All of the following are true regarding periodontal dressings EXCEPT:",
  choices: [
    { key: "A", text: "They provide comfort and protection" },
    { key: "B", text: "Eugenol dressings may leave white patches after removal" },
    { key: "C", text: "They must lock into interdental spaces" },
    { key: "D", text: "White patches indicate infection" }
  ],
  correctAnswer: "D",
  rationale: "White patches after eugenol dressing removal are due to necrotic epithelial cells, not infection.",
  incorrectRationales: {
    A: "True.",
    B: "True.",
    C: "True.",
    D: "Correct."
  },
  boardTrap: "White residue is normal, not infection.",
  memoryHook: "White patch ≠ infection."
},

{
  id: "perio-063",
  type: "critical-thinking",
  subject: "Oral Disease Mastery",
  topic: "Local Antimicrobials",
  difficulty: "critical",
  question: "Persistent 5–6 mm pockets after SRP are best treated with:",
  choices: [
    { key: "A", text: "Essential oil rinse" },
    { key: "B", text: "Chlorhexidine rinse alone" },
    { key: "C", text: "Subgingival local antimicrobial delivery" },
    { key: "D", text: "Systemic antibiotics only" }
  ],
  correctAnswer: "C",
  rationale: "Localized antimicrobials such as Arestin, Atridox, or PerioChip are indicated for residual pockets.",
  incorrectRationales: {
    A: "Not sufficient for deep pockets.",
    B: "Rinse does not treat subgingival sites.",
    C: "Correct.",
    D: "Systemic antibiotics are not first-line for localized pockets."
  },
  boardTrap: "Deep pockets require local delivery.",
  memoryHook: "Persistent pockets get local hits."
},

{
  id: "perio-064",
  type: "application",
  subject: "Oral Disease Mastery",
  topic: "Periodontal Agent Ingredients",
  difficulty: "medium",
  question: "All of the following pair periodontal agents correctly EXCEPT:",
  choices: [
    { key: "A", text: "Arestin – minocycline" },
    { key: "B", text: "Atridox – doxycycline" },
    { key: "C", text: "PerioChip – chlorhexidine" },
    { key: "D", text: "Peridex – minocycline" }
  ],
  correctAnswer: "D",
  rationale: "Peridex is chlorhexidine gluconate rinse, not minocycline.",
  incorrectRationales: {
    A: "Correct pairing.",
    B: "Correct pairing.",
    C: "Correct pairing.",
    D: "Correct."
  },
  boardTrap: "Peridex is chlorhexidine.",
  memoryHook: "Peridex = rinse, not antibiotic."
},

{
  id: "perio-065",
  type: "critical-thinking",
  subject: "Oral Disease Mastery",
  topic: "Tetracycline Allergy",
  difficulty: "critical",
  question: "A patient allergic to tetracyclines requires local antimicrobial therapy. Which is appropriate?",
  choices: [
    { key: "A", text: "Atridox" },
    { key: "B", text: "Arestin" },
    { key: "C", text: "PerioChip" },
    { key: "D", text: "Peridex" }
  ],
  correctAnswer: "C",
  rationale: "PerioChip contains chlorhexidine and is safe in tetracycline-allergic patients.",
  incorrectRationales: {
    A: "Contains doxycycline.",
    B: "Contains minocycline.",
    C: "Correct.",
    D: "Rinse, not subgingival local therapy."
  },
  boardTrap: "Allergy overrides protocol.",
  memoryHook: "Allergic to cyclines? PerioChip."
},

{
  id: "perio-066",
  type: "application",
  subject: "Oral Disease Mastery",
  topic: "Suturing Purpose",
  difficulty: "medium",
  question: "The primary purpose of suturing in periodontal surgery is to:",
  choices: [
    { key: "A", text: "Approximate tissue edges for primary closure" },
    { key: "B", text: "Chemically cauterize tissue" },
    { key: "C", text: "Increase tissue tension" },
    { key: "D", text: "Serve as a bacterial barrier" }
  ],
  correctAnswer: "A",
  rationale: "Sutures bring tissue edges together to promote primary healing.",
  incorrectRationales: {
    A: "Correct.",
    B: "Sutures are mechanical, not chemical.",
    C: "Excess tension impairs healing.",
    D: "Sutures do not block bacteria."
  },
  boardTrap: "Sutures approximate tissue.",
  memoryHook: "Pull edges together."
},

{
  id: "perio-067",
  type: "application",
  subject: "Oral Disease Mastery",
  topic: "Suture Types",
  difficulty: "medium",
  question: "All of the following are absorbable sutures EXCEPT:",
  choices: [
    { key: "A", text: "Silk" },
    { key: "B", text: "Chromic gut" },
    { key: "C", text: "Polyglactin" },
    { key: "D", text: "Vicryl" }
  ],
  correctAnswer: "A",
  rationale: "Silk is non-absorbable. Chromic gut and polyglactin (Vicryl) are absorbable.",
  incorrectRationales: {
    A: "Correct.",
    B: "Absorbable.",
    C: "Absorbable.",
    D: "Vicryl is polyglactin, absorbable."
  },
  boardTrap: "Silk is non-absorbable.",
  memoryHook: "Silk stays."
},
{
  id: "inst-001",
  type: "clinical-execution",
  subject: "Clinical Execution & Materials",
  topic: "Instrumentation Strokes",
  difficulty: "medium",
  question: "During periodontal maintenance therapy, burnished deposits remain after initial instrumentation. Which clinician error most likely contributed to this outcome?",
  choices: [
    { key: "A", text: "Using light exploratory strokes with incorrect angulation during removal" },
    { key: "B", text: "Using overlapping strokes in a systematic pattern" },
    { key: "C", text: "Applying moderate lateral pressure with correct blade-to-tooth adaptation" },
    { key: "D", text: "Maintaining the modified pen grasp with proper finger rest" }
  ],
  correctAnswer: "A",
  rationale: "Exploratory strokes are light and used for detection. Removal strokes require 70–80 degrees angulation and moderate to firm lateral pressure. Failure to increase pressure and open the blade results in burnished calculus rather than removal.",
  incorrectRationales: {
    A: "Correct.",
    B: "Overlapping strokes improve coverage and do not cause burnishing.",
    C: "Moderate pressure with correct angulation represents proper removal technique.",
    D: "A stable modified pen grasp enhances control and tactile sensitivity."
  },
  boardTrap: "Light pressure signals exploratory strokes, not removal.",
  memoryHook: "Feather finds, firm fights."
},

{
  id: "inst-002",
  type: "application",
  subject: "Clinical Execution & Materials",
  topic: "Insertion Angulation",
  difficulty: "medium",
  question: "During insertion of a curette beneath the gingival margin, what angulation should be used to prevent tissue trauma?",
  choices: [
    { key: "A", text: "0–10 degrees" },
    { key: "B", text: "0–40 degrees" },
    { key: "C", text: "45–70 degrees" },
    { key: "D", text: "70–90 degrees" }
  ],
  correctAnswer: "B",
  rationale: "Insertion requires a closed angulation of approximately 0–40 degrees so the blade can slip gently beneath the gingival margin without lacerating tissue. Angles above 45 degrees are used for working strokes and may traumatize tissue if used during insertion.",
  incorrectRationales: {
    A: "Too closed to allow proper adaptation once beneath the margin.",
    B: "Correct.",
    C: "This is a working stroke angle, not insertion.",
    D: "This is a removal stroke angle and risks tissue trauma."
  },
  boardTrap: "Students memorize 70–80 degrees and forget insertion begins closed.",
  memoryHook: "Start small, then stand tall."
},

{
  id: "inst-003",
  type: "application",
  subject: "Clinical Execution & Materials",
  topic: "Removal Angulation",
  difficulty: "medium",
  question: "What is the ideal blade-to-tooth angulation for effective calculus removal during working strokes?",
  choices: [
    { key: "A", text: "0–20 degrees" },
    { key: "B", text: "30–45 degrees" },
    { key: "C", text: "40–60 degrees" },
    { key: "D", text: "60–80 degrees" }
  ],
  correctAnswer: "D",
  rationale: "Effective removal strokes require an angulation of 60–80 degrees so the cutting edge can properly engage and fracture calculus. Angles below 45 degrees are too closed to remove deposits effectively, and angles approaching 90 degrees risk tissue trauma.",
  incorrectRationales: {
    A: "Represents insertion angulation, not removal.",
    B: "Too closed to effectively engage calculus.",
    C: "Borderline and may not effectively fracture tenacious deposits.",
    D: "Correct."
  },
  boardTrap: "Insertion and removal angulations are commonly confused.",
  memoryHook: "Sixty to eighty removes what’s weighty."
},

{
  id: "inst-004",
  type: "critical-thinking",
  subject: "Clinical Execution & Materials",
  topic: "Assessment Stroke",
  difficulty: "medium",
  question: "Residual burnished calculus was missed during assessment. Which technique error most likely occurred?",
  choices: [
    { key: "A", text: "Using firm lateral pressure at 70–80 degrees" },
    { key: "B", text: "Failing to maintain continuous adaptation during light exploratory strokes" },
    { key: "C", text: "Maintaining a closed 0–20 degree angle throughout" },
    { key: "D", text: "Using ideal exploratory technique" }
  ],
  correctAnswer: "B",
  rationale: "Assessment strokes require light pressure, 50–70 degree angulation, and continuous adaptation for tactile detection. Failure to maintain adaptation interrupts tactile sensitivity and can result in undetected burnished deposits.",
  incorrectRationales: {
    A: "Describes removal strokes, not assessment.",
    B: "Correct.",
    C: "Closed angle prevents proper detection beneath the margin.",
    D: "Ideal technique would not miss residual calculus."
  },
  boardTrap: "Assessment strokes detect; removal strokes dislodge.",
  memoryHook: "Feel, don’t fight."
},

{
  id: "inst-005",
  type: "application",
  subject: "Clinical Execution & Materials",
  topic: "Removal Stroke Technique",
  difficulty: "medium",
  question: "Tenacious deposits remain after initial instrumentation. What modification would most improve removal?",
  choices: [
    { key: "A", text: "Use light exploratory strokes at 50–60 degrees" },
    { key: "B", text: "Maintain a closed 0–20 degree insertion angle" },
    { key: "C", text: "Increase stroke length and reduce pressure" },
    { key: "D", text: "Open to 70–80 degrees with moderate to firm pressure and short strokes" }
  ],
  correctAnswer: "D",
  rationale: "Removal strokes require 70–80 degrees angulation, moderate to firm lateral pressure, and short controlled strokes to fracture calculus deposits. Light exploratory strokes, closed insertion angles, or long light strokes are ineffective for removing tenacious calculus.",
  incorrectRationales: {
    A: "Exploratory strokes are for detection, not removal.",
    B: "Closed insertion angle cannot engage calculus.",
    C: "Long light strokes are for finishing, not tenacious removal.",
    D: "Correct."
  },
  boardTrap: "Light pressure burnishes calculus instead of removing it.",
  memoryHook: "Firm and short makes calculus abort."
},
{
  id: "inst-006",
  type: "application",
  subject: "Clinical Execution & Materials",
  topic: "Sickle Scaler Design",
  difficulty: "medium",
  question: "An instrument has two cutting edges per working end and a pointed tip. Which is the most appropriate clinical application?",
  choices: [
    { key: "A", text: "Removing calculus from enamel surfaces coronal to the gingival margin" },
    { key: "B", text: "Smoothing and planing root surfaces following initial therapy" },
    { key: "C", text: "Detecting remaining subgingival calculus deposits" },
    { key: "D", text: "Removing biofilm and calculus deposits from within periodontal pockets" }
  ],
  correctAnswer: "A",
  rationale: "An instrument with a pointed tip and triangular cross-section is a sickle scaler, designed for supragingival calculus removal only. Its pointed design limits safe adaptation to enamel surfaces above the gingival margin.",
  incorrectRationales: {
    A: "Correct.",
    B: "Root planing requires curettes with rounded toes.",
    C: "Explorers are used for detection of residual calculus.",
    D: "Subgingival debridement requires curettes or ultrasonic tips."
  },
  boardTrap: "Two cutting edges and a pointed tip always indicates a scaler.",
  memoryHook: "Point it up — stay above."
},
{
  id: "inst-007",
  type: "critical-thinking",
  subject: "Clinical Execution & Materials",
  topic: "Sickle vs Jacquette",
  difficulty: "medium",
  question: "To improve adaptation in tight anterior contacts, which scaler design modification is most appropriate?",
  choices: [
    { key: "A", text: "Rounded toe with semicircular cross-section" },
    { key: "B", text: "Universal curette with complex shank" },
    { key: "C", text: "Jacquette scaler with straight shank" },
    { key: "D", text: "Sickle scaler with curved shank and paired working ends" }
  ],
  correctAnswer: "D",
  rationale: "Sickle scalers are available with curved shanks, allowing improved adaptation to anterior line angles and curved surfaces.",
  incorrectRationales: {
    A: "Describes a curette, not a scaler.",
    B: "Universal curettes are bulkier and subgingival instruments.",
    C: "Jacquette scalers have straight shanks and adapt poorly to curved contacts.",
    D: "Correct."
  },
  boardTrap: "Jacquette and sickle both have pointed tips — only sickle has curved shank for anterior adaptation.",
  memoryHook: "Straight for flat, curve for contact."
},
{
  id: "inst-008",
  type: "application",
  subject: "Clinical Execution & Materials",
  topic: "Curette Design",
  difficulty: "medium",
  question: "An instrument has a rounded toe, rounded back, and semicircular cross-section. What is its primary use?",
  choices: [
    { key: "A", text: "Heavy supragingival calculus removal" },
    { key: "B", text: "Detection of residual deposits" },
    { key: "C", text: "Subgingival calculus removal and root debridement" },
    { key: "D", text: "Removing stain above the gingival margin" }
  ],
  correctAnswer: "C",
  rationale: "Curettes feature a rounded toe and semicircular cross-section, allowing safe subgingival adaptation and root debridement.",
  incorrectRationales: {
    A: "Heavy supragingival deposits require scalers.",
    B: "Explorers are used for detection.",
    C: "Correct.",
    D: "Polishing devices remove stain."
  },
  boardTrap: "Rounded toe always signals curette.",
  memoryHook: "Rounded toe goes low."
},
{
  id: "inst-009",
  type: "critical-thinking",
  subject: "Clinical Execution & Materials",
  topic: "After Five Gracey",
  difficulty: "medium",
  question: "Which instrument modification improves access in deep periodontal pockets (≥5 mm)?",
  choices: [
    { key: "A", text: "Extended terminal shank by 3 mm with thinner blade" },
    { key: "B", text: "Universal curette with rigid shank" },
    { key: "C", text: "Standard Gracey with increased pressure" },
    { key: "D", text: "Mini-bladed curette with 50% shorter blade" }
  ],
  correctAnswer: "A",
  rationale: "The After Five Gracey features a terminal shank extended by 3 mm and a thinner blade for improved access in deep pockets.",
  incorrectRationales: {
    A: "Correct.",
    B: "Universal curettes are bulkier and less adaptable.",
    C: "Pressure does not improve deep access.",
    D: "Mini Five improves narrow access, not depth."
  },
  boardTrap: "3 mm longer shank always means After Five.",
  memoryHook: "After Five goes deeper."
},
{
  id: "inst-010",
  type: "critical-thinking",
  subject: "Clinical Execution & Materials",
  topic: "Mini Five Gracey",
  difficulty: "medium",
  question: "Which instrument modification improves adaptation in narrow or tight posterior pockets?",
  choices: [
    { key: "A", text: "Extended shank with thinner blade" },
    { key: "B", text: "Universal curette with rigid shank" },
    { key: "C", text: "Extended shank with 50% shorter blade" },
    { key: "D", text: "Posterior sickle scaler" }
  ],
  correctAnswer: "C",
  rationale: "The Mini Five Gracey has a 3 mm extended shank and a blade shortened by 50%, allowing improved access in narrow or tight areas.",
  incorrectRationales: {
    A: "Describes After Five, not Mini Five.",
    B: "Universal curettes are too bulky.",
    C: "Correct.",
    D: "Scalers are contraindicated subgingivally."
  },
  boardTrap: "After Five = deeper. Mini Five = narrower.",
  memoryHook: "Mini means slim to squeeze in."
},
{
  id: "inst-011",
  type: "critical-thinking",
  subject: "Clinical Execution & Materials",
  topic: "Micro Mini Five",
  difficulty: "medium",
  question: "Which instrument modification provides the thinnest blade for delicate deep narrow pockets?",
  choices: [
    { key: "A", text: "After Five curette" },
    { key: "B", text: "Blade 20% thinner than Mini Five" },
    { key: "C", text: "Universal curette" },
    { key: "D", text: "Posterior sickle scaler" }
  ],
  correctAnswer: "B",
  rationale: "The Micro Mini Five has a blade 20% thinner than the Mini Five, allowing enhanced tactile sensitivity and adaptation in delicate deep areas.",
  incorrectRationales: {
    A: "After Five improves depth but not thinness.",
    B: "Correct.",
    C: "Universal curettes are thicker and less specific.",
    D: "Scalers are supragingival instruments."
  },
  boardTrap: "Micro Mini = thinnest blade.",
  memoryHook: "Micro = thinner, lighter, tighter."
},
{
  id: "inst-012",
  type: "application",
  subject: "Clinical Execution & Materials",
  topic: "Working File",
  difficulty: "medium",
  question: "Which instrument is used to crush or roughen tenacious burnished calculus before scaling?",
  choices: [
    { key: "A", text: "Periodontal file" },
    { key: "B", text: "Hoe scaler" },
    { key: "C", text: "Universal curette" },
    { key: "D", text: "Sickle scaler" }
  ],
  correctAnswer: "A",
  rationale: "Periodontal files are designed to crush or roughen tenacious calculus prior to curette instrumentation.",
  incorrectRationales: {
    A: "Correct.",
    B: "Hoes lack adaptability.",
    C: "Curettes are finishing instruments.",
    D: "Scalers are supragingival instruments."
  },
  boardTrap: "If it says crush or fracture — think file.",
  memoryHook: "File first, finish later."
},
{
  id: "inst-013",
  type: "application",
  subject: "Clinical Execution & Materials",
  topic: "File Design",
  difficulty: "medium",
  question: "An instrument with a rectangular working end and multiple cutting edges at 90° to the shank is used to crush heavy calculus. What is it?",
  choices: [
    { key: "A", text: "Universal curette" },
    { key: "B", text: "Finishing file" },
    { key: "C", text: "Explorer" },
    { key: "D", text: "Periodontal file" }
  ],
  correctAnswer: "D",
  rationale: "Periodontal files have multiple cutting edges at 90° to the shank and are used to crush or roughen heavy deposits.",
  incorrectRationales: {
    A: "Universal curettes are not designed to crush deposits.",
    B: "Finishing files smooth, not crush.",
    C: "Explorers detect deposits.",
    D: "Correct."
  },
  boardTrap: "Rectangular working end at 90° always indicates file.",
  memoryHook: "File fights, curette cleans."
},
{
  id: "inst-014",
  type: "application",
  subject: "Clinical Execution & Materials",
  topic: "Finishing File",
  difficulty: "medium",
  question: "Which instrument is used after curette instrumentation to smooth root surfaces?",
  choices: [
    { key: "A", text: "Working file" },
    { key: "B", text: "Finishing file" },
    { key: "C", text: "Universal curette" },
    { key: "D", text: "Sickle scaler" }
  ],
  correctAnswer: "B",
  rationale: "Finishing files are used after curette debridement to smooth root surfaces and improve tissue adaptation.",
  incorrectRationales: {
    A: "Working files crush deposits.",
    B: "Correct.",
    C: "Curettes remove deposits, not smooth.",
    D: "Scalers are supragingival."
  },
  boardTrap: "No cutting blade + smoothing = finishing file.",
  memoryHook: "Finish smooth, hope it sticks."
},
{
  id: "inst-015",
  type: "recall",
  subject: "Clinical Execution & Materials",
  topic: "Gracey 1/2",
  difficulty: "medium",
  question: "The Gracey 1/2 curette is designed for which area?",
  choices: [
    { key: "A", text: "Anterior teeth for all surfaces" },
    { key: "B", text: "Posterior mesial surfaces" },
    { key: "C", text: "Posterior distal surfaces" },
    { key: "D", text: "Posterior buccal and lingual surfaces only" }
  ],
  correctAnswer: "A",
  rationale: "Gracey 1/2 is an area-specific curette designed for all surfaces of anterior teeth.",
  incorrectRationales: {
    A: "Correct.",
    B: "Gracey 11/12 treats posterior mesials.",
    C: "Gracey 13/14 treats posterior distals.",
    D: "No Gracey is designated only for buccal/lingual surfaces."
  },
  boardTrap: "1/2 anterior, 11/12 mesial, 13/14 distal.",
  memoryHook: "1 and 2 see the front through and through."
},
{
  id: "inst-016",
  type: "recall",
  subject: "Clinical Execution & Materials",
  topic: "Gracey 3/4",
  difficulty: "medium",
  question: "The Gracey 3/4 curette is specifically designed for which area of the dentition?",
  choices: [
    { key: "A", text: "Posterior distal surfaces only" },
    { key: "B", text: "Posterior mesial surfaces only" },
    { key: "C", text: "Posterior buccal and lingual surfaces only" },
    { key: "D", text: "Anterior teeth for all surfaces" }
  ],
  correctAnswer: "D",
  rationale: "The Gracey 3/4 is an area-specific curette designed for anterior teeth on all surfaces. It has a slightly longer shank than the 1/2, improving anterior adaptation.",
  incorrectRationales: {
    A: "Refers to Gracey 13/14.",
    B: "Refers to Gracey 11/12.",
    C: "No Gracey is limited to only buccal or lingual surfaces.",
    D: "Correct."
  },
  boardTrap: "Both 1/2 and 3/4 are anterior instruments.",
  memoryHook: "Three and four explore more — anterior surfaces."
},
{
  id: "inst-017",
  type: "recall",
  subject: "Clinical Execution & Materials",
  topic: "Gracey 5/6",
  difficulty: "medium",
  question: "The Gracey 5/6 curette is designed for which area?",
  choices: [
    { key: "A", text: "Posterior distal surfaces only" },
    { key: "B", text: "Posterior mesial surfaces only" },
    { key: "C", text: "Anterior teeth and premolars for all surfaces" },
    { key: "D", text: "Deep posterior molar pockets only" }
  ],
  correctAnswer: "C",
  rationale: "The Gracey 5/6 is designed for anterior teeth and premolars on all surfaces. It serves as a transitional instrument between anterior and posterior designs.",
  incorrectRationales: {
    A: "Refers to Gracey 13/14.",
    B: "Refers to Gracey 11/12.",
    C: "Correct.",
    D: "After Five instruments are used for deep pockets."
  },
  boardTrap: "5/6 is often mistaken as anterior-only or posterior-only.",
  memoryHook: "Five and six — front and mix."
},
{
  id: "inst-018",
  type: "recall",
  subject: "Clinical Execution & Materials",
  topic: "Gracey 7/8",
  difficulty: "medium",
  question: "The Gracey 7/8 curette is designed for which area?",
  choices: [
    { key: "A", text: "Posterior mesial surfaces only" },
    { key: "B", text: "Posterior distal surfaces only" },
    { key: "C", text: "Posterior buccal surfaces" },
    { key: "D", text: "Anterior teeth all surfaces" }
  ],
  correctAnswer: "C",
  rationale: "The Gracey 7/8 is designed for posterior buccal surfaces. Its complex shank allows adaptation around posterior line angles.",
  incorrectRationales: {
    A: "Refers to Gracey 11/12.",
    B: "Refers to Gracey 13/14.",
    C: "Correct.",
    D: "Refers to Gracey 1/2 or 3/4."
  },
  boardTrap: "7/8 = buccal. 9/10 = lingual.",
  memoryHook: "Seven and eight clean the plate — buccal side."
},
{
  id: "inst-019",
  type: "recall",
  subject: "Clinical Execution & Materials",
  topic: "Gracey 9/10",
  difficulty: "medium",
  question: "The Gracey 9/10 curette is designed for which area?",
  choices: [
    { key: "A", text: "Posterior distal surfaces only" },
    { key: "B", text: "Posterior lingual surfaces" },
    { key: "C", text: "Anterior facial and lingual surfaces" },
    { key: "D", text: "Posterior mesial surfaces only" }
  ],
  correctAnswer: "B",
  rationale: "The Gracey 9/10 is designed for lingual surfaces of posterior teeth and provides improved access to lingual concavities.",
  incorrectRationales: {
    A: "Refers to Gracey 13/14.",
    B: "Correct.",
    C: "Refers to Gracey 1/2 or 3/4.",
    D: "Refers to Gracey 11/12."
  },
  boardTrap: "7/8 buccal, 9/10 lingual.",
  memoryHook: "Nine and ten — lingual again."
},
{
  id: "inst-020",
  type: "recall",
  subject: "Clinical Execution & Materials",
  topic: "Gracey 11/12",
  difficulty: "medium",
  question: "The Gracey 11/12 curette is designed for which area?",
  choices: [
    { key: "A", text: "Posterior mesial surfaces" },
    { key: "B", text: "Posterior distal surfaces" },
    { key: "C", text: "Posterior buccal surfaces only" },
    { key: "D", text: "Anterior teeth all surfaces" }
  ],
  correctAnswer: "A",
  rationale: "The Gracey 11/12 is designed for posterior mesial surfaces and allows proper adaptation around mesial line angles.",
  incorrectRationales: {
    A: "Correct.",
    B: "Refers to Gracey 13/14.",
    C: "Refers to Gracey 7/8 or 9/10.",
    D: "Refers to Gracey 1/2 or 3/4."
  },
  boardTrap: "11/12 = Move In (mesial).",
  memoryHook: "Eleven and twelve move in."
},
{
  id: "inst-021",
  type: "recall",
  subject: "Clinical Execution & Materials",
  topic: "Gracey 13/14",
  difficulty: "medium",
  question: "The Gracey 13/14 curette is designed for which area?",
  choices: [
    { key: "A", text: "Posterior buccal surfaces" },
    { key: "B", text: "Posterior mesial surfaces" },
    { key: "C", text: "Anterior teeth all surfaces" },
    { key: "D", text: "Posterior distal surfaces" }
  ],
  correctAnswer: "D",
  rationale: "The Gracey 13/14 is designed for posterior distal surfaces and allows adaptation around distal line angles.",
  incorrectRationales: {
    A: "Refers to Gracey 7/8 or 9/10.",
    B: "Refers to Gracey 11/12.",
    C: "Refers to Gracey 1/2 or 3/4.",
    D: "Correct."
  },
  boardTrap: "13/14 = Draw back (distal).",
  memoryHook: "Thirteen and fourteen draw back."
},
{
  id: "inst-022",
  type: "recall",
  subject: "Clinical Execution & Materials",
  topic: "Gracey 15/16",
  difficulty: "medium",
  question: "The Gracey 15/16 curette is designed for which area?",
  choices: [
    { key: "A", text: "Posterior mesial surfaces" },
    { key: "B", text: "Posterior distal surfaces" },
    { key: "C", text: "Posterior buccal surfaces only" },
    { key: "D", text: "Anterior teeth all surfaces" }
  ],
  correctAnswer: "A",
  rationale: "The Gracey 15/16 is a modified version of the 11/12 designed for posterior mesial surfaces with improved shank angulation.",
  incorrectRationales: {
    A: "Correct.",
    B: "Refers to Gracey 17/18.",
    C: "Refers to Gracey 7/8 or 9/10.",
    D: "Refers to Gracey 1/2 or 3/4."
  },
  boardTrap: "15/16 is modified mesial instrument.",
  memoryHook: "Fifteen and sixteen lean in clean."
},
{
  id: "inst-023",
  type: "recall",
  subject: "Clinical Execution & Materials",
  topic: "Gracey 17/18",
  difficulty: "medium",
  question: "The Gracey 17/18 curette is designed for which area?",
  choices: [
    { key: "A", text: "Posterior distal surfaces" },
    { key: "B", text: "Posterior mesial surfaces" },
    { key: "C", text: "Posterior buccal surfaces only" },
    { key: "D", text: "Anterior teeth all surfaces" }
  ],
  correctAnswer: "A",
  rationale: "The Gracey 17/18 is a modified distal instrument designed for posterior distal surfaces with extended shank access.",
  incorrectRationales: {
    A: "Correct.",
    B: "Refers to Gracey 15/16.",
    C: "Refers to Gracey 7/8 or 9/10.",
    D: "Refers to Gracey 1/2 or 3/4."
  },
  boardTrap: "17/18 is modified distal instrument.",
  memoryHook: "Seventeen and eighteen reach the back scene."
},
{
  id: "mat-001",
  type: "mastery",
  subject: "Clinical Execution & Materials",
  topic: "Coefficient of Thermal Expansion",
  difficulty: "hard",
  question: "When comparing restorative materials, which property most accurately explains why microleakage may occur at the margins of a composite restoration when exposed to temperature changes?",
  choices: [
    { key: "A", text: "The coefficient of thermal expansion of the composite resin is greater than that of tooth structure" },
    { key: "B", text: "The compressive strength of composite resin is less than that of enamel" },
    { key: "C", text: "The viscosity of the resin matrix limits polymerization shrinkage" },
    { key: "D", text: "The thermal conductivity of the composite is greater than that of dentin" }
  ],
  correctAnswer: "A",
  rationale: "Composite resins have a higher coefficient of thermal expansion than natural tooth structure. When exposed to temperature fluctuations, composite expands and contracts more than enamel and dentin, leading to marginal gap formation and microleakage.",
  incorrectRationales: {
    A: "Correct.",
    B: "Compressive strength relates to resistance to crushing forces, not temperature-related dimensional change.",
    C: "Viscosity affects handling and flow, not thermal dimensional change.",
    D: "Thermal conductivity involves heat transfer, not expansion and contraction."
  },
  boardTrap: "Do not confuse thermal conductivity with coefficient of thermal expansion. Expansion changes dimension. Conductivity transfers heat.",
  memoryHook: "Hot and cold—composite bold."
},
{
  id: "mat-002",
  type: "mastery",
  subject: "Clinical Execution & Materials",
  topic: "Knoop Hardness",
  difficulty: "hard",
  question: "Which statement best explains why enamel demonstrates a higher Knoop hardness number compared with dentin when measured under identical testing conditions?",
  choices: [
    { key: "A", text: "Enamel contains a greater volume of organic material than dentin" },
    { key: "B", text: "Dentin has a higher modulus of elasticity, allowing less deformation under load" },
    { key: "C", text: "Enamel’s crystalline structure contains a higher mineral content and lower water composition" },
    { key: "D", text: "Dentin’s tubular microstructure creates greater surface density during indentation testing" }
  ],
  correctAnswer: "C",
  rationale: "Knoop hardness testing measures a material’s resistance to indentation using an elongated diamond-shaped indenter. Enamel exhibits approximately 96% inorganic hydroxyapatite with minimal organic matrix and water content. This dense crystalline structure results in significantly greater resistance to indentation compared with dentin, which contains roughly 70% inorganic material and a higher proportion of organic matrix and water. The increased mineral density and reduced hydration directly account for enamel’s higher Knoop hardness value.",
  incorrectRationales: {
    A: "Enamel contains less organic material than dentin. Its low organic and water content contributes to increased hardness.",
    B: "Modulus of elasticity measures stiffness under stress, not surface indentation resistance. Dentin is more flexible but less hard.",
    C: "Correct.",
    D: "Dentin’s tubular structure decreases surface density and increases susceptibility to indentation."
  },
  boardTrap: "Hardness is resistance to indentation, not strength or flexibility. When you see Knoop, Vickers, or indentation, think mineral density.",
  memoryHook: "Knoop equals crystal hardness. Enamel is crystal-dense. Dentin is cushioned."
},

{
  id: "mat-003",
  type: "application",
  subject: "Clinical Execution & Materials",
  topic: "Knoop Hardness Ranking",
  difficulty: "medium",
  question: "When comparing dental materials using Knoop hardness values, which sequence correctly lists materials from highest to lowest hardness?",
  choices: [
    { key: "A", text: "Dentin → Enamel → Porcelain → Gold" },
    { key: "B", text: "Enamel → Porcelain → Dentin → Gold" },
    { key: "C", text: "Porcelain → Enamel → Gold → Dentin" },
    { key: "D", text: "Enamel → Dentin → Gold → Porcelain" }
  ],
  correctAnswer: "B",
  rationale: "Knoop hardness measures resistance to surface indentation. Enamel has the highest hardness due to its high mineral content. Porcelain follows closely as a ceramic material. Dentin is softer because of its tubular and organic composition. Gold is the softest listed due to its ductility and malleability.",
  incorrectRationales: {
    A: "Dentin is softer than enamel and porcelain.",
    B: "Correct.",
    C: "Porcelain does not exceed enamel in hardness.",
    D: "Gold is softer than dentin and porcelain."
  },
  boardTrap: "Hardness does not equal strength. Metals like gold are strong but soft.",
  memoryHook: "Every Pretty Dentist Glows."
},
{
  id: "mat-004",
  type: "critical-thinking",
  subject: "Clinical Execution & Materials",
  topic: "Knoop Hardness Values",
  difficulty: "hard",
  question: "Which of the following materials has the lowest Knoop hardness value?",
  choices: [
    { key: "A", text: "Enamel" },
    { key: "B", text: "Porcelain (ceramic)" },
    { key: "C", text: "Dentin" },
    { key: "D", text: "Unfilled acrylic resin" }
  ],
  correctAnswer: "D",
  rationale: "Unfilled acrylic resin lacks inorganic fillers that increase surface hardness. Enamel and porcelain have high mineral content, and dentin, while softer than enamel, is still harder than unfilled acrylic. Therefore, unfilled acrylic resin has the lowest resistance to indentation.",
  incorrectRationales: {
    A: "Enamel is the hardest natural tissue in the body.",
    B: "Porcelain is a hard ceramic material.",
    C: "Dentin is softer than enamel but harder than unfilled acrylic resin.",
    D: "Correct."
  },
  boardTrap: "Synthetic does not mean harder. Acrylic without fillers is soft.",
  memoryHook: "Acrylic equals soft."
},
{
  id: "mat-005",
  type: "critical-thinking",
  subject: "Clinical Execution & Materials",
  topic: "Gelation",
  difficulty: "hard",
  question: "During an impression procedure, the material thickened rapidly before complete seating. Which factor most likely caused this problem?",
  choices: [
    { key: "A", text: "Increased temperature accelerated the sol-to-gel reaction" },
    { key: "B", text: "Incorrect powder-to-water ratio reduced working time" },
    { key: "C", text: "Inadequate spatulation decreased uniformity of mix" },
    { key: "D", text: "Prolonged mixing weakened the gel structure" }
  ],
  correctAnswer: "A",
  rationale: "In irreversible hydrocolloid materials, increased temperature accelerates the chemical reaction that converts sol to gel. Warmer conditions shorten working time and cause premature thickening before full seating of the impression tray.",
  incorrectRationales: {
    A: "Correct.",
    B: "Powder-to-water ratio primarily affects viscosity, not reaction speed.",
    C: "Inadequate spatulation can cause voids but does not accelerate setting time.",
    D: "Overmixing does not significantly speed gelation."
  },
  boardTrap: "Rapid setting usually signals temperature changes, not mixing errors.",
  memoryHook: "Heat makes alginate hurry."
},
{
  id: "mat-006",
  type: "recall",
  subject: "Clinical Execution & Materials",
  topic: "Yield Strength",
  difficulty: "medium",
  question: "Which property represents the point at which a material begins permanent deformation beyond its elastic limit?",
  choices: [
    { key: "A", text: "Elastic modulus" },
    { key: "B", text: "Ultimate tensile strength" },
    { key: "C", text: "Yield strength" },
    { key: "D", text: "Resilience" }
  ],
  correctAnswer: "C",
  rationale: "Yield strength is the stress level at which a material transitions from elastic behavior to plastic deformation. Beyond this point, the material does not return to its original shape.",
  incorrectRationales: {
    A: "Elastic modulus measures stiffness within the elastic range only.",
    B: "Ultimate tensile strength refers to the maximum stress before fracture.",
    C: "Correct.",
    D: "Resilience measures energy absorption within the elastic range."
  },
  boardTrap: "Yield strength is where permanent change begins, not where fracture occurs.",
  memoryHook: "Yield means give in."
},
{
  id: "mat-007",
  type: "critical-thinking",
  subject: "Clinical Execution & Materials",
  topic: "Zinc Phosphate Cement",
  difficulty: "hard",
  question: "During crown cementation, a clinician mixes a luting agent on a chilled glass slab using small powder increments to control heat production. Which characteristic justifies this technique?",
  choices: [
    { key: "A", text: "The material contains zinc oxide that undergoes hydration during mixing" },
    { key: "B", text: "The material’s setting reaction is accelerated by a high powder-to-liquid ratio" },
    { key: "C", text: "The cement’s film thickness is reduced as temperature increases" },
    { key: "D", text: "The reaction between zinc oxide and phosphoric acid is exothermic and temperature-sensitive" }
  ],
  correctAnswer: "D",
  rationale: "Zinc phosphate cement sets through an exothermic acid–base reaction between zinc oxide and phosphoric acid. Increased temperature accelerates the reaction, shortening working time and causing premature thickening. Mixing on a chilled glass slab disperses heat and slows the reaction, extending working time.",
  incorrectRationales: {
    A: "Hydration reactions are characteristic of gypsum products, not zinc phosphate cement.",
    B: "Powder-to-liquid ratio affects consistency but does not control temperature-dependent reaction speed.",
    C: "Film thickness depends primarily on mix consistency, not temperature alone.",
    D: "Correct."
  },
  boardTrap: "Chilled slab equals temperature control of an exothermic reaction, not powder ratio adjustment.",
  memoryHook: "Cool to control the heat."
},
{
  id: "mat-008",
  type: "application",
  subject: "Clinical Execution & Materials",
  topic: "Zinc Oxide Eugenol",
  difficulty: "medium",
  question: "Which material provides a sedative effect on the pulp during temporary restoration placement?",
  choices: [
    { key: "A", text: "Zinc phosphate cement" },
    { key: "B", text: "Zinc oxide eugenol" },
    { key: "C", text: "Glass ionomer cement" },
    { key: "D", text: "Polycarboxylate cement" }
  ],
  correctAnswer: "B",
  rationale: "Zinc oxide eugenol contains eugenol, which has a mild obtundent effect on pulpal nerves. It is commonly used in temporary restorations and bases when soothing pulpal irritation is desired.",
  incorrectRationales: {
    A: "Zinc phosphate is acidic upon mixing and may irritate the pulp.",
    B: "Correct.",
    C: "Glass ionomer releases fluoride but does not provide pulpal sedation.",
    D: "Polycarboxylate is biocompatible but lacks an obtundent agent."
  },
  boardTrap: "Biocompatible does not equal sedative. Only ZOE contains eugenol.",
  memoryHook: "Eugenol eases."
},
{
  id: "mat-009",
  type: "mastery",
  subject: "Clinical Execution & Materials",
  topic: "Calcium Hydroxide",
  difficulty: "hard",
  question: "A medicated liner is placed after a pinpoint pulpal exposure to stimulate reparative dentin formation. Which material was most likely used?",
  choices: [
    { key: "A", text: "Glass ionomer liner" },
    { key: "B", text: "Zinc oxide eugenol" },
    { key: "C", text: "Calcium hydroxide" },
    { key: "D", text: "Polycarboxylate cement" }
  ],
  correctAnswer: "C",
  rationale: "Calcium hydroxide has a high pH and stimulates formation of reparative (secondary) dentin when placed near or directly over pulp tissue. It is the material of choice for direct and indirect pulp capping procedures.",
  incorrectRationales: {
    A: "Glass ionomer bonds to dentin and releases fluoride but does not stimulate dentin bridge formation.",
    B: "ZOE soothes the pulp but does not promote dentin formation.",
    C: "Correct.",
    D: "Polycarboxylate is adhesive and biocompatible but lacks biologic stimulatory effects."
  },
  boardTrap: "ZOE comforts. Calcium hydroxide builds.",
  memoryHook: "Calcium creates."
},
{
  id: "mat-010",
  type: "application",
  subject: "Clinical Execution & Materials",
  topic: "Bonding Agents",
  difficulty: "medium",
  question: "Which agent is used to create microporosities in enamel for micromechanical retention during composite bonding?",
  choices: [
    { key: "A", text: "Sodium fluoride" },
    { key: "B", text: "Phosphoric acid" },
    { key: "C", text: "Polyacrylic acid" },
    { key: "D", text: "Citric acid" }
  ],
  correctAnswer: "B",
  rationale: "Phosphoric acid (35–38%) is used as an etchant to dissolve enamel mineral and create microporosities. These allow resin to penetrate and form resin tags, providing strong micromechanical retention.",
  incorrectRationales: {
    A: "Sodium fluoride promotes remineralization but does not create bonding porosities.",
    B: "Correct.",
    C: "Polyacrylic acid is used before glass ionomer placement to clean the smear layer.",
    D: "Citric acid is not routinely used as an enamel etchant for composite bonding."
  },
  boardTrap: "Polyacrylic acid equals glass ionomer. Phosphoric acid equals resin bonding.",
  memoryHook: "Phosphoric preps the pores."
},
{
  id: "mat-011",
  type: "application",
  subject: "Clinical Execution & Materials",
  topic: "Pit and Fissure Sealants",
  difficulty: "medium",
  question: "Which preventive procedure is most appropriate for caries-free molars with deep pits and fissures?",
  choices: [
    { key: "A", text: "Fluoride varnish application" },
    { key: "B", text: "Glass ionomer liner placement" },
    { key: "C", text: "Enamel microabrasion" },
    { key: "D", text: "Pit and fissure sealant placement" }
  ],
  correctAnswer: "D",
  rationale: "Pit and fissure sealants are indicated for sound teeth with deep occlusal grooves that are susceptible to caries. Acid etching creates microporosities that allow the sealant to bond micromechanically, forming a physical barrier against plaque accumulation.",
  incorrectRationales: {
    A: "Fluoride varnish strengthens enamel but does not physically seal pits and fissures.",
    B: "Glass ionomer liner is placed beneath restorations, not on intact occlusal surfaces.",
    C: "Microabrasion removes superficial enamel defects but does not provide preventive sealing.",
    D: "Correct."
  },
  boardTrap: "Fluoride prevents chemically. Sealants prevent physically.",
  memoryHook: "Seal it before you feel it."
},
{
  id: "mat-012",
  type: "mastery",
  subject: "Clinical Execution & Materials",
  topic: "Coalesced Enamel",
  difficulty: "hard",
  question: "Smooth, shallow occlusal grooves without distinct pits and fissures are best described as which condition, and what is the implication for sealant placement?",
  choices: [
    { key: "A", text: "Hypocalcified enamel requiring fluoride before sealing" },
    { key: "B", text: "Deep fissures requiring preventive sealing" },
    { key: "C", text: "Coalesced enamel indicating sealant placement is unnecessary" },
    { key: "D", text: "Demineralized enamel requiring remineralization prior to sealing" }
  ],
  correctAnswer: "C",
  rationale: "Coalesced enamel refers to well-fused developmental lobes resulting in shallow, self-cleansing grooves. Because there are no deep pits or fissures for retention, sealant placement is unnecessary and provides minimal benefit.",
  incorrectRationales: {
    A: "Hypocalcification refers to mineralization defects, not smooth fused enamel.",
    B: "Deep fissures are an indication, not a contraindication, for sealants.",
    C: "Correct.",
    D: "Demineralization involves early caries, not fused enamel anatomy."
  },
  boardTrap: "Coalesced means closed grooves. No grooves, no sealant.",
  memoryHook: "Coalesced equals closed."
},
{
  id: "mat-013",
  type: "critical-thinking",
  subject: "Clinical Execution & Materials",
  topic: "Sealant Classification",
  difficulty: "hard",
  question: "Which sealant classification provides superior wear resistance due to incorporation of inorganic filler particles?",
  choices: [
    { key: "A", text: "Unfilled resin sealant" },
    { key: "B", text: "Filled resin sealant" },
    { key: "C", text: "Glass ionomer sealant" },
    { key: "D", text: "Fluoride-releasing resin sealant" }
  ],
  correctAnswer: "B",
  rationale: "Filled resin sealants contain inorganic filler particles such as quartz or silica, increasing wear resistance and durability. These sealants are stronger but may require occlusal adjustment after curing.",
  incorrectRationales: {
    A: "Unfilled sealants flow easily but have lower wear resistance.",
    B: "Correct.",
    C: "Glass ionomer releases fluoride but has lower wear resistance than filled resin.",
    D: "Fluoride release does not determine mechanical strength."
  },
  boardTrap: "Strength equals filled. Fluoride equals prevention, not durability.",
  memoryHook: "Filled for fight."
},
{
  id: "mat-014",
  type: "mastery",
  subject: "Clinical Execution & Materials",
  topic: "Amalgam Composition - Tin",
  difficulty: "hard",
  question: "What is the primary function of tin in dental amalgam composition?",
  choices: [
    { key: "A", text: "It reduces expansion and controls the reaction with mercury" },
    { key: "B", text: "It strengthens the gamma phase to increase corrosion resistance" },
    { key: "C", text: "It enhances luster and polishability" },
    { key: "D", text: "It minimizes creep by increasing compressive strength" }
  ],
  correctAnswer: "A",
  rationale: "Tin reduces expansion and moderates the reaction between silver and mercury during setting. It forms the gamma-2 phase, which helps control dimensional change, though this phase is more prone to corrosion in low-copper amalgams.",
  incorrectRationales: {
    A: "Correct.",
    B: "Tin forms the weakest and most corrosion-prone phase.",
    C: "Surface luster is influenced by finishing technique and mercury content.",
    D: "Copper, not tin, reduces creep and improves strength."
  },
  boardTrap: "Tin tames. Copper conquers corrosion.",
  memoryHook: "Tin tames the temper."
},
{
  id: "mat-015",
  type: "application",
  subject: "Clinical Execution & Materials",
  topic: "Stainless Steel Crown",
  difficulty: "medium",
  question: "Which restoration is most appropriate for a primary molar following pulpotomy with significant loss of coronal structure?",
  choices: [
    { key: "A", text: "Stainless steel crown" },
    { key: "B", text: "Amalgam restoration" },
    { key: "C", text: "Composite resin restoration" },
    { key: "D", text: "Glass ionomer restoration" }
  ],
  correctAnswer: "A",
  rationale: "Stainless steel crowns provide full coronal coverage and durability for primary teeth following pulpotomy or extensive caries. They protect remaining tooth structure until natural exfoliation.",
  incorrectRationales: {
    A: "Correct.",
    B: "Amalgam does not provide full coronal coverage.",
    C: "Composite may lack durability in high-stress pediatric posterior teeth.",
    D: "Glass ionomer lacks sufficient strength for full coverage in this scenario."
  },
  boardTrap: "Large caries plus pulpotomy equals full coverage.",
  memoryHook: "Steel seals the deal."
},
{
  id: "mat-016",
  type: "application",
  subject: "Clinical Execution & Materials",
  topic: "Gold Alloy Inlay",
  difficulty: "medium",
  question: "Which type of restoration is fabricated outside the mouth, fits within cusp boundaries, and is cemented after try-in?",
  choices: [
    { key: "A", text: "Direct composite restoration" },
    { key: "B", text: "Ceramic onlay" },
    { key: "C", text: "Amalgam restoration" },
    { key: "D", text: "Gold alloy inlay" }
  ],
  correctAnswer: "D",
  rationale: "A gold alloy inlay is an indirect restoration fabricated in a laboratory and cemented into place after try-in. It fits within the cusp boundaries and is known for excellent marginal integrity, corrosion resistance, and longevity.",
  incorrectRationales: {
    A: "Direct composite restorations are placed intraorally in a single appointment.",
    B: "An onlay extends over one or more cusps rather than remaining within them.",
    C: "Amalgam is a direct restorative material condensed intraorally.",
    D: "Correct."
  },
  boardTrap: "Inlay stays inside the cusps. Onlay overlaps them.",
  memoryHook: "Inlay stays in."
},
{
  id: "mat-017",
  type: "mastery",
  subject: "Clinical Execution & Materials",
  topic: "Polishing Gold Restorations",
  difficulty: "hard",
  question: "Which polishing agents are most appropriate for cast gold restorations extraorally and intraorally?",
  choices: [
    { key: "A", text: "Pumice intraorally and aluminum oxide extraorally" },
    { key: "B", text: "Emery intraorally and rouge extraorally" },
    { key: "C", text: "Tin oxide intraorally and rouge extraorally" },
    { key: "D", text: "Zirconium silicate intraorally and tripoli extraorally" }
  ],
  correctAnswer: "C",
  rationale: "Rouge (iron oxide) is used extraorally to achieve a high polish on gold restorations before cementation. Tin oxide is used intraorally to maintain luster without damaging the restoration or surrounding tissues.",
  incorrectRationales: {
    A: "Pumice is too abrasive for final polishing of gold.",
    B: "Emery is a coarse abrasive that can scratch gold.",
    C: "Correct.",
    D: "These abrasives are not appropriate for fine polishing of gold alloys."
  },
  boardTrap: "Rouge is used outside the mouth. Tin oxide is used inside.",
  memoryHook: "Rouge out, Tin in."
},
{
  id: "mat-018",
  type: "critical-thinking",
  subject: "Clinical Execution & Materials",
  topic: "Implant Success",
  difficulty: "hard",
  question: "Which factor is the most critical determinant of long-term dental implant success?",
  choices: [
    { key: "A", text: "Absence of plaque biofilm accumulation" },
    { key: "B", text: "Adequate keratinized tissue width" },
    { key: "C", text: "Even occlusal load distribution" },
    { key: "D", text: "Maintenance of crestal bone level" }
  ],
  correctAnswer: "D",
  rationale: "Long-term implant success is primarily determined by maintenance of crestal bone levels. Stable bone height reflects successful osseointegration and absence of progressive peri-implant bone loss.",
  incorrectRationales: {
    A: "Plaque control supports peri-implant health but does not alone define implant success.",
    B: "Keratinized tissue improves maintenance but is not the defining success criterion.",
    C: "Occlusal load affects mechanical stability but bone preservation remains the primary indicator.",
    D: "Correct."
  },
  boardTrap: "When boards say success, think bone level stability.",
  memoryHook: "Bone is the badge of success."
},
{
  id: "mat-019",
  type: "application",
  subject: "Clinical Execution & Materials",
  topic: "Impression Materials",
  difficulty: "medium",
  question: "Why is strict adherence to manufacturer’s directions essential when working with impression materials?",
  choices: [
    { key: "A", text: "It improves esthetics of the final restoration" },
    { key: "B", text: "It ensures optimal chemical reaction and dimensional accuracy" },
    { key: "C", text: "It reduces polymerization shrinkage of gypsum models" },
    { key: "D", text: "It prevents air entrapment during pouring" }
  ],
  correctAnswer: "B",
  rationale: "Manufacturer instructions specify proper ratios, mixing times, and temperature conditions to ensure correct chemical reaction, setting characteristics, and dimensional stability of impression materials.",
  incorrectRationales: {
    A: "Esthetics relate to restorative materials, not impressions.",
    B: "Correct.",
    C: "Polymerization shrinkage applies to resin materials, not gypsum or impression accuracy.",
    D: "Air entrapment typically results from pouring technique."
  },
  boardTrap: "Directions protect dimensional accuracy.",
  memoryHook: "Directions determine dimensions."
},
{
  id: "mat-020",
  type: "critical-thinking",
  subject: "Clinical Execution & Materials",
  topic: "Reversible Hydrocolloid",
  difficulty: "hard",
  question: "Which statement accurately describes gelation of reversible hydrocolloid (agar)?",
  choices: [
    { key: "A", text: "It is a chemical reaction involving calcium sulfate" },
    { key: "B", text: "It is an irreversible chemical set like alginate" },
    { key: "C", text: "It is a physical change reversible by temperature" },
    { key: "D", text: "It results from polymerization of long-chain molecules" }
  ],
  correctAnswer: "C",
  rationale: "Reversible hydrocolloid (agar) undergoes gelation through a temperature-dependent physical change. Heating converts gel to sol, and cooling converts sol back to gel without altering chemical composition.",
  incorrectRationales: {
    A: "Calcium sulfate is part of alginate’s chemical setting reaction.",
    B: "Alginate is irreversible; agar is reversible.",
    C: "Correct.",
    D: "Polymerization occurs in resin-based materials."
  },
  boardTrap: "Temperature change equals physical, not chemical.",
  memoryHook: "Heat to flow, cool to go."
},
{
  id: "mat-021",
  type: "critical-thinking",
  subject: "Clinical Execution & Materials",
  topic: "Hysteresis",
  difficulty: "hard",
  question: "The difference between liquefaction and gelation temperatures in reversible hydrocolloid represents which property?",
  choices: [
    { key: "A", text: "Elastic recovery" },
    { key: "B", text: "Dimensional stability" },
    { key: "C", text: "Syneresis" },
    { key: "D", text: "Hysteresis" }
  ],
  correctAnswer: "D",
  rationale: "Hysteresis describes the temperature gap between the liquefaction (sol) temperature and the gelation (gel) temperature in reversible hydrocolloids like agar. This difference allows adequate working time before solidification.",
  incorrectRationales: {
    A: "Elastic recovery relates to deformation and return to shape, not temperature change.",
    B: "Dimensional stability refers to maintenance of size over time.",
    C: "Syneresis is water loss from a gel over time.",
    D: "Correct."
  },
  boardTrap: "Temperature difference equals hysteresis. Water loss equals syneresis.",
  memoryHook: "Heat high, cool low — hysteresis flow."
},
{
  id: "mat-022",
  type: "mastery",
  subject: "Clinical Execution & Materials",
  topic: "Alginate - Syneresis",
  difficulty: "hard",
  question: "An alginate impression left exposed to air shrinks and produces a smaller cast. Which phenomenon caused this distortion?",
  choices: [
    { key: "A", text: "Syneresis" },
    { key: "B", text: "Imbibition" },
    { key: "C", text: "Thermal contraction" },
    { key: "D", text: "Polymerization shrinkage" }
  ],
  correctAnswer: "A",
  rationale: "Syneresis is the loss of water from alginate when exposed to air, leading to shrinkage and distortion. Impressions should be poured promptly or stored in 100% humidity.",
  incorrectRationales: {
    A: "Correct.",
    B: "Imbibition causes expansion from water absorption.",
    C: "Thermal contraction does not explain moisture-related shrinkage.",
    D: "Alginate sets by chemical reaction, not polymerization."
  },
  boardTrap: "Air exposure equals syneresis. Water exposure equals imbibition.",
  memoryHook: "Left to dry, alginate will lie."
},
{
  id: "mat-023",
  type: "application",
  subject: "Clinical Execution & Materials",
  topic: "Alginate Working Time",
  difficulty: "medium",
  question: "Which factors primarily control working and setting time of alginate?",
  choices: [
    { key: "A", text: "Water temperature and powder-to-water ratio" },
    { key: "B", text: "Mixing time and final hardness" },
    { key: "C", text: "Particle size and tray selection" },
    { key: "D", text: "Humidity and storage temperature" }
  ],
  correctAnswer: "A",
  rationale: "Water temperature directly affects reaction speed—cool slows, warm accelerates. Powder-to-water ratio influences reaction balance and total setting characteristics.",
  incorrectRationales: {
    A: "Correct.",
    B: "Mixing time has less influence than temperature.",
    C: "Particle size does not control working time.",
    D: "Humidity affects storage stability, not initial working time."
  },
  boardTrap: "Temperature equals time control.",
  memoryHook: "Hot hurry, cold calm."
},
{
  id: "mat-024",
  type: "critical-thinking",
  subject: "Clinical Execution & Materials",
  topic: "Alginate Temperature Effect",
  difficulty: "hard",
  question: "How does water temperature affect alginate setting characteristics?",
  choices: [
    { key: "A", text: "Cold water accelerates gelation" },
    { key: "B", text: "Cold water increases working time; hot water speeds the reaction" },
    { key: "C", text: "Cold water improves elasticity" },
    { key: "D", text: "Hot water improves surface reproduction" }
  ],
  correctAnswer: "B",
  rationale: "Cold water slows the chemical reaction, increasing working and setting time. Hot water accelerates the reaction and shortens working time.",
  incorrectRationales: {
    A: "Cold water slows the reaction.",
    B: "Correct.",
    C: "Elasticity is not primarily temperature-controlled.",
    D: "Surface detail relates to mixing and material quality."
  },
  boardTrap: "Hot equals fast. Cold equals slow.",
  memoryHook: "Cool to cruise, heat to hurry."
},
{
  id: "mat-025",
  type: "critical-thinking",
  subject: "Clinical Execution & Materials",
  topic: "Nonaqueous Elastomers",
  difficulty: "hard",
  question: "Which classification describes impression materials that set by polymerization and contain no water component?",
  choices: [
    { key: "A", text: "Reversible hydrocolloid" },
    { key: "B", text: "Irreversible hydrocolloid" },
    { key: "C", text: "Thermoplastic compound" },
    { key: "D", text: "Nonaqueous elastomeric material" }
  ],
  correctAnswer: "D",
  rationale: "Nonaqueous elastomers (polysulfide, polyether, silicones) set by polymerization reactions and do not rely on water-based gelation, providing superior dimensional stability.",
  incorrectRationales: {
    A: "Agar relies on temperature-dependent gelation.",
    B: "Alginate is water-based and dimensionally unstable.",
    C: "Thermoplastic compound softens with heat and is not polymer-based.",
    D: "Correct."
  },
  boardTrap: "Hydrocolloids gel. Elastomers polymerize.",
  memoryHook: "No water, no wobble."
},
{
  id: "mat-026",
  type: "mastery",
  subject: "Clinical Execution & Materials",
  topic: "Polysulfide",
  difficulty: "hard",
  question: "Which elastomeric impression material is brown, has a sulfur odor, and high tear strength?",
  choices: [
    { key: "A", text: "Polyether" },
    { key: "B", text: "Condensation silicone" },
    { key: "C", text: "Polysulfide rubber" },
    { key: "D", text: "Addition silicone (VPS)" }
  ],
  correctAnswer: "C",
  rationale: "Polysulfide rubber is recognized by its brown color, unpleasant odor, long working time, and excellent tear strength.",
  incorrectRationales: {
    A: "Polyether is stiff and odorless.",
    B: "Condensation silicone releases alcohol byproduct.",
    C: "Correct.",
    D: "VPS is odorless and highly stable."
  },
  boardTrap: "Bad smell equals polysulfide.",
  memoryHook: "Polysulfide stinks, but it’s strong."
},
{
  id: "mat-027",
  type: "mastery",
  subject: "Clinical Execution & Materials",
  topic: "Vinyl Polysiloxane",
  difficulty: "hard",
  question: "Which impression material sets by addition polymerization with no byproduct release?",
  choices: [
    { key: "A", text: "Vinyl polysiloxane (VPS)" },
    { key: "B", text: "Condensation silicone" },
    { key: "C", text: "Polyether" },
    { key: "D", text: "Polysulfide rubber" }
  ],
  correctAnswer: "A",
  rationale: "VPS (addition silicone) sets via addition polymerization with no byproduct, providing excellent dimensional stability and allowing multiple pours.",
  incorrectRationales: {
    A: "Correct.",
    B: "Condensation silicone releases alcohol.",
    C: "Polyether is rigid and not poured multiple times reliably.",
    D: "Polysulfide releases water byproduct."
  },
  boardTrap: "Addition equals no byproduct.",
  memoryHook: "VPS = Very Precise Silicone."
},
{
  id: "mat-028",
  type: "critical-thinking",
  subject: "Clinical Execution & Materials",
  topic: "Alginate Technique",
  difficulty: "hard",
  question: "Which technique combination minimizes distortion when taking alginate impressions?",
  choices: [
    { key: "A", text: "Load anterior first and pour within 60 minutes" },
    { key: "B", text: "Seat anterior to posterior and pour within 10 minutes" },
    { key: "C", text: "Seat tray straight down and pour immediately" },
    { key: "D", text: "Load posterior first, seat posterior to anterior, pour within 30 minutes" }
  ],
  correctAnswer: "D",
  rationale: "Posterior-first loading and posterior-to-anterior seating reduce air entrapment. Pouring within 30 minutes prevents distortion from syneresis or imbibition.",
  incorrectRationales: {
    A: "Anterior-first seating traps air.",
    B: "Seating direction is incorrect.",
    C: "Straight-down seating risks voids.",
    D: "Correct."
  },
  boardTrap: "Back first. Back to front. Pour within 30.",
  memoryHook: "Back first, back to front, half-hour hunt."
},
{
  id: "mat-029",
  type: "application",
  subject: "Clinical Execution & Materials",
  topic: "Gypsum Chemistry",
  difficulty: "hard",
  question: "Which compound forms the basis of all dental gypsum products before mixing with water?",
  choices: [
    { key: "A", text: "Calcium sulfate hemihydrate" },
    { key: "B", text: "Calcium sulfate dihydrate" },
    { key: "C", text: "Calcium phosphate tribasic" },
    { key: "D", text: "Calcium hydroxide" }
  ],
  correctAnswer: "A",
  rationale: "Gypsum products are supplied as calcium sulfate hemihydrate, which reacts with water to form calcium sulfate dihydrate during setting.",
  incorrectRationales: {
    A: "Correct.",
    B: "Dihydrate is the set form.",
    C: "Not used in dental gypsum.",
    D: "Used as pulp liner."
  },
  boardTrap: "Powder equals hemihydrate. Set equals dihydrate.",
  memoryHook: "Half makes whole."
},
{
  id: "mat-030",
  type: "mastery",
  subject: "Clinical Execution & Materials",
  topic: "Gypsum Types",
  difficulty: "hard",
  question: "Which sequence correctly lists gypsum products in order of increasing strength and density?",
  choices: [
    { key: "A", text: "Die stone → dental stone → plaster" },
    { key: "B", text: "Dental stone → plaster → die stone" },
    { key: "C", text: "Plaster (β) → dental stone (α) → die stone (modified α)" },
    { key: "D", text: "Plaster (α) → dental stone (β) → die stone (modified β)" }
  ],
  correctAnswer: "C",
  rationale: "Plaster (β-hemihydrate) is weakest and most porous, dental stone (α-hemihydrate) is stronger and denser, and die stone (modified α) is strongest and most accurate.",
  incorrectRationales: {
    A: "Incorrect order.",
    B: "Incorrect sequence and form classification.",
    C: "Correct.",
    D: "Alpha and beta forms reversed."
  },
  boardTrap: "β weakest, α stronger, modified α strongest.",
  memoryHook: "Beta breaks, Alpha ascends. Beta (plaster) breaks easily, Alpha (stone) builds strength, Modified Alpha (die stone) stands supreme."

},
{
  id: "mat-031",
  type: "application",
  subject: "Clinical Execution & Materials",
  topic: "Coronal Polishing Technique",
  difficulty: "medium",
  question: "What is the appropriate pressure technique during coronal polishing to minimize heat and abrasion?",
  choices: [
    { key: "A", text: "Use low to intermittent light pressure with a moist polishing agent" },
    { key: "B", text: "Maintain firm, constant pressure for stain removal" },
    { key: "C", text: "Apply heavy pressure in continuous motion" },
    { key: "D", text: "Alternate heavy and light pressure throughout polishing" }
  ],
  correctAnswer: "A",
  rationale: "Coronal polishing should use light, intermittent pressure with a moist abrasive to minimize frictional heat, enamel abrasion, and tissue trauma while effectively removing plaque and stain.",
  incorrectRationales: {
    A: "Correct.",
    B: "Firm constant pressure increases heat and abrasion.",
    C: "Heavy pressure can damage enamel and restorations.",
    D: "Alternating heavy pressure still increases localized trauma."
  },
  boardTrap: "More pressure does not mean cleaner teeth.",
  memoryHook: "Light and right — pressure polite."
},
{
  id: "mat-032",
  type: "mastery",
  subject: "Clinical Execution & Materials",
  topic: "Kerr's Rules of Thumb",
  difficulty: "hard",
  question: "Which statement aligns with Kerr’s Rules of Thumb for dental material manipulation?",
  choices: [
    { key: "A", text: "Adding more water increases strength" },
    { key: "B", text: "Smaller particle size reduces finishability" },
    { key: "C", text: "Thicker mixes set faster due to increased reactant concentration" },
    { key: "D", text: "Saliva contamination improves flow and film thickness" }
  ],
  correctAnswer: "C",
  rationale: "A higher powder-to-liquid ratio produces a thicker mix that sets faster because more reactant particles are present. Less water increases strength, cold slows reaction, and contamination disrupts setting.",
  incorrectRationales: {
    A: "More water weakens material by increasing porosity.",
    B: "Smaller particles improve smoothness and finish.",
    C: "Correct.",
    D: "Saliva contamination compromises material integrity."
  },
  boardTrap: "Thick is quick. Cold slows. Saliva ruins.",
  memoryHook: "Cold slows, heat goes — thick is quick."
},
{
  id: "mat-033",
  type: "recall",
  subject: "Clinical Execution & Materials",
  topic: "Hyperalgesia",
  difficulty: "medium",
  question: "What term describes an exaggerated pain response to stimulation?",
  choices: [
    { key: "A", text: "Paresthesia" },
    { key: "B", text: "Analgesia" },
    { key: "C", text: "Hypoesthesia" },
    { key: "D", text: "Hyperalgesia" }
  ],
  correctAnswer: "D",
  rationale: "Hyperalgesia refers to heightened sensitivity to painful stimuli due to increased neural responsiveness.",
  incorrectRationales: {
    A: "Paresthesia is abnormal sensation like tingling.",
    B: "Analgesia is absence of pain.",
    C: "Hypoesthesia is decreased sensation.",
    D: "Correct."
  },
  boardTrap: "Hyper means high pain response.",
  memoryHook: "Hyper = high pain."
},
{
  id: "mat-034",
  type: "mastery",
  subject: "Clinical Execution & Materials",
  topic: "Potassium Nitrate",
  difficulty: "hard",
  question: "Which desensitizing agent reduces nerve excitability and is commonly used at 5% concentration?",
  choices: [
    { key: "A", text: "Sodium fluoride" },
    { key: "B", text: "Potassium nitrate" },
    { key: "C", text: "Stannous fluoride" },
    { key: "D", text: "Arginine-calcium carbonate complex" }
  ],
  correctAnswer: "B",
  rationale: "Potassium nitrate (5%) reduces nerve excitability by depolarizing intradental nerve endings, decreasing pain transmission.",
  incorrectRationales: {
    A: "Sodium fluoride primarily remineralizes.",
    B: "Correct.",
    C: "Stannous fluoride works by tubule occlusion.",
    D: "Arginine occludes dentinal tubules."
  },
  boardTrap: "Nerve calming equals potassium nitrate.",
  memoryHook: "Potassium calms the pain train."
},
{
  id: "mat-035",
  type: "mastery",
  subject: "Clinical Execution & Materials",
  topic: "Fluoride Varnish",
  difficulty: "hard",
  question: "Which fluoride concentration is typical for professional varnish used in desensitization?",
  choices: [
    { key: "A", text: "1.1%" },
    { key: "B", text: "2%" },
    { key: "C", text: "5%" },
    { key: "D", text: "8%" }
  ],
  correctAnswer: "C",
  rationale: "Professional fluoride varnish contains 5% sodium fluoride (22,600 ppm), forming calcium fluoride-like precipitates that occlude tubules.",
  incorrectRationales: {
    A: "1.1% is prescription dentifrice concentration.",
    B: "2% NaF is used in tray applications.",
    C: "Correct.",
    D: "8% is not an approved clinical varnish concentration."
  },
  boardTrap: "Professional varnish equals 5%.",
  memoryHook: "Five seals sensitivity."
},
{
  id: "mat-036",
  type: "application",
  subject: "Clinical Execution & Materials",
  topic: "Oxalate Agents",
  difficulty: "medium",
  question: "Which desensitizing agent forms calcium oxalate crystals to block dentinal tubules?",
  choices: [
    { key: "A", text: "Potassium nitrate" },
    { key: "B", text: "Sodium fluoride" },
    { key: "C", text: "Arginine complex" },
    { key: "D", text: "Oxalate compounds" }
  ],
  correctAnswer: "D",
  rationale: "Oxalate compounds react with calcium ions to form insoluble calcium oxalate crystals that physically occlude dentinal tubules.",
  incorrectRationales: {
    A: "Potassium nitrate acts on nerves.",
    B: "Sodium fluoride forms calcium fluoride-like precipitates.",
    C: "Arginine forms mineral plugs, not oxalate crystals.",
    D: "Correct."
  },
  boardTrap: "Crystal formation equals oxalate.",
  memoryHook: "Oxalate = crystal gate."
},
{
  id: "mat-037",
  type: "mastery",
  subject: "Clinical Execution & Materials",
  topic: "CPP-ACP",
  difficulty: "hard",
  question: "Which compound stabilizes calcium and phosphate ions to enhance remineralization?",
  choices: [
    { key: "A", text: "CPP–ACP" },
    { key: "B", text: "Calcium sodium phosphosilicate" },
    { key: "C", text: "Amorphous calcium phosphate alone" },
    { key: "D", text: "Sodium fluoride" }
  ],
  correctAnswer: "A",
  rationale: "CPP–ACP stabilizes calcium and phosphate ions in bioavailable form, promoting enamel remineralization.",
  incorrectRationales: {
    A: "Correct.",
    B: "Primarily promotes tubule occlusion.",
    C: "ACP requires stabilization.",
    D: "Fluoride enhances remineralization but does not supply calcium."
  },
  boardTrap: "Casein equals calcium control.",
  memoryHook: "Casein keeps calcium close."
},
{
  id: "mat-038",
  type: "critical-thinking",
  subject: "Clinical Execution & Materials",
  topic: "CPP-ACP Contraindication",
  difficulty: "hard",
  question: "Which condition contraindicates use of CPP–ACP products?",
  choices: [
    { key: "A", text: "Multiple composite restorations" },
    { key: "B", text: "Mild fluorosis" },
    { key: "C", text: "Milk protein allergy" },
    { key: "D", text: "Xerostomia" }
  ],
  correctAnswer: "C",
  rationale: "CPP–ACP is derived from casein, a milk protein, and is contraindicated in patients with true milk protein allergy.",
  incorrectRationales: {
    A: "Composite restorations are unaffected.",
    B: "Fluorosis is not a contraindication.",
    C: "Correct.",
    D: "Xerostomic patients may benefit from remineralizing agents."
  },
  boardTrap: "Milk allergy, not lactose intolerance.",
  memoryHook: "Casein comes from cows."
},
{
  id: "mat-039",
  type: "application",
  subject: "Clinical Execution & Materials",
  topic: "Fluoride Concentration",
  difficulty: "medium",
  question: "What fluoride concentration is found in professional desensitizing varnish?",
  choices: [
    { key: "A", text: "1.1%" },
    { key: "B", text: "2%" },
    { key: "C", text: "5%" },
    { key: "D", text: "8%" }
  ],
  correctAnswer: "C",
  rationale: "Professional fluoride varnish contains 5% sodium fluoride (22,600 ppm), providing tubule occlusion and remineralization.",
  incorrectRationales: {
    A: "Prescription dentifrice concentration.",
    B: "Tray application concentration.",
    C: "Correct.",
    D: "Not clinically approved."
  },
  boardTrap: "Office equals 5%.",
  memoryHook: "Five fixes sensitivity."
},
{
  id: "mat-040",
  type: "mastery",
  subject: "Clinical Execution & Materials",
  topic: "Glutaraldehyde",
  difficulty: "hard",
  question: "A reusable metal instrument is immersed for 10 hours in a chemical solution effective against spores, viruses, and fungi. The solution produces irritating fumes and is not recommended for surface disinfection. Which agent is described?",
  choices: [
    { key: "A", text: "Glutaraldehyde" },
    { key: "B", text: "Iodophor" },
    { key: "C", text: "Phenolic compound" },
    { key: "D", text: "Sodium hypochlorite" }
  ],
  correctAnswer: "A",
  rationale: "Glutaraldehyde is a high-level disinfectant and chemical sterilant requiring 10-hour immersion to achieve sterility. It produces toxic fumes and is not recommended for routine surface disinfection.",
  incorrectRationales: {
    A: "Correct.",
    B: "Iodophors are intermediate-level disinfectants, not sterilants.",
    C: "Phenolics are surface disinfectants and are not sporicidal.",
    D: "Sodium hypochlorite is a disinfectant but not used as a cold sterilant for 10-hour immersion."
  },
  boardTrap: "Ten-hour soak signals chemical sterilant.",
  memoryHook: "Glutaraldehyde sterilizes but smells like trouble."
},
{
  id: "mat-041",
  type: "application",
  subject: "Clinical Execution & Materials",
  topic: "Pyrophosphate",
  difficulty: "medium",
  question: "Which ingredient in tartar-control toothpaste binds calcium and magnesium ions to prevent supragingival calculus formation?",
  choices: [
    { key: "A", text: "Sodium fluoride" },
    { key: "B", text: "Sodium bicarbonate" },
    { key: "C", text: "Zinc citrate" },
    { key: "D", text: "Pyrophosphate" }
  ],
  correctAnswer: "D",
  rationale: "Pyrophosphates bind calcium and magnesium ions in saliva, preventing crystal growth and reducing supragingival calculus formation.",
  incorrectRationales: {
    A: "Fluoride aids remineralization, not calculus prevention.",
    B: "Sodium bicarbonate acts as a mild abrasive and buffer.",
    C: "Zinc citrate provides antimicrobial effects but does not primarily bind calcium ions.",
    D: "Correct."
  },
  boardTrap: "Crystal growth inhibition equals pyrophosphate.",
  memoryHook: "Pyro prevents plaque piles."
},
{
  id: "mat-042",
  type: "application",
  subject: "Clinical Execution & Materials",
  topic: "Potassium Nitrate",
  difficulty: "medium",
  question: "Which ingredient in desensitizing toothpaste reduces dentinal hypersensitivity by interfering with nerve transmission?",
  choices: [
    { key: "A", text: "Potassium nitrate" },
    { key: "B", text: "Sodium citrate" },
    { key: "C", text: "Strontium chloride" },
    { key: "D", text: "Stannous fluoride" }
  ],
  correctAnswer: "A",
  rationale: "Potassium nitrate reduces hypersensitivity by depolarizing nerve endings within dentinal tubules, blocking pain transmission.",
  incorrectRationales: {
    A: "Correct.",
    B: "Sodium citrate is not a neural desensitizer.",
    C: "Strontium chloride works by tubule occlusion, not nerve depolarization.",
    D: "Stannous fluoride forms surface precipitates but does not directly block nerve transmission."
  },
  boardTrap: "Nerve transmission equals potassium nitrate.",
  memoryHook: "Potassium calms the nerves."
},
{
  id: "mat-043",
  type: "application",
  subject: "Clinical Execution & Materials",
  topic: "Stannous Fluoride",
  difficulty: "medium",
  question: "Which fluoride compound provides caries protection, antimicrobial effects, and dentinal desensitization through surface precipitate formation?",
  choices: [
    { key: "A", text: "Sodium fluoride" },
    { key: "B", text: "Acidulated phosphate fluoride" },
    { key: "C", text: "Sodium monofluorophosphate" },
    { key: "D", text: "Stannous fluoride" }
  ],
  correctAnswer: "D",
  rationale: "Stannous fluoride provides anticaries benefits, antimicrobial activity, and tubule occlusion through tin ion deposition.",
  incorrectRationales: {
    A: "Sodium fluoride primarily provides remineralization only.",
    B: "APF is a professional topical agent and can etch restorations.",
    C: "Monofluorophosphate offers caries protection but lacks antimicrobial and desensitizing properties.",
    D: "Correct."
  },
  boardTrap: "Triple action fluoride equals stannous.",
  memoryHook: "Stannous seals and soothes."
},
{
  id: "mat-044",
  type: "mastery",
  subject: "Clinical Execution & Materials",
  topic: "Triclosan",
  difficulty: "hard",
  question: "Which dentifrice ingredient provides antibacterial and anti-inflammatory effects by inhibiting microbial enzyme activity?",
  choices: [
    { key: "A", text: "Sodium fluoride" },
    { key: "B", text: "Triclosan" },
    { key: "C", text: "Chlorhexidine gluconate" },
    { key: "D", text: "Cetylpyridinium chloride" }
  ],
  correctAnswer: "B",
  rationale: "Triclosan inhibits bacterial enzyme activity and reduces inflammatory mediators, providing anti-gingivitis benefits.",
  incorrectRationales: {
    A: "Fluoride prevents caries but does not provide antibacterial anti-inflammatory action.",
    B: "Correct.",
    C: "Chlorhexidine is a prescription antimicrobial rinse, not a dentifrice additive.",
    D: "CPC provides antimicrobial effects but lacks anti-inflammatory properties."
  },
  boardTrap: "Anti-inflammatory toothpaste ingredient equals triclosan.",
  memoryHook: "Triclosan tames tissue."
},
{
  id: "mat-045",
  type: "application",
  subject: "Clinical Execution & Materials",
  topic: "Cetylpyridinium Chloride",
  difficulty: "medium",
  question: "Which over-the-counter mouthrinse ingredient may cause extrinsic brown staining with prolonged use?",
  choices: [
    { key: "A", text: "Cetylpyridinium chloride" },
    { key: "B", text: "Triclosan" },
    { key: "C", text: "Chlorhexidine gluconate" },
    { key: "D", text: "Sodium fluoride" }
  ],
  correctAnswer: "A",
  rationale: "Cetylpyridinium chloride (CPC) is a quaternary ammonium compound that may cause extrinsic staining with prolonged OTC use.",
  incorrectRationales: {
    A: "Correct.",
    B: "Triclosan does not cause staining.",
    C: "Chlorhexidine causes staining but is prescription, not OTC.",
    D: "Fluoride does not discolor enamel."
  },
  boardTrap: "OTC staining rinse equals CPC.",
  memoryHook: "CPC colors the coating."
},
{
  id: "mat-046",
  type: "mastery",
  subject: "Clinical Execution & Materials",
  topic: "Essential Oils",
  difficulty: "hard",
  question: "A mouthrinse containing thymol, menthol, eucalyptol, and methyl salicylate provides which primary therapeutic benefit?",
  choices: [
    { key: "A", text: "Fluoride-based remineralization" },
    { key: "B", text: "Crystal growth inhibition" },
    { key: "C", text: "pH buffering action" },
    { key: "D", text: "Antibacterial and anti-gingivitis effects" }
  ],
  correctAnswer: "D",
  rationale: "Essential oils disrupt bacterial cell walls and enzyme activity, reducing plaque and gingival inflammation.",
  incorrectRationales: {
    A: "Fluoride rinses provide remineralization, not antibacterial essential oil action.",
    B: "Crystal growth inhibition relates to pyrophosphates.",
    C: "Buffering agents do not directly reduce plaque bacteria.",
    D: "Correct."
  },
  boardTrap: "Four oil names signal essential oil rinse.",
  memoryHook: "Four oils fight for the gums."
},
{
  id: "mat-047",
  type: "application",
  subject: "Clinical Execution & Materials",
  topic: "Chlorine Dioxide",
  difficulty: "medium",
  question: "Which mouthrinse ingredient neutralizes volatile sulfur compounds through oxidation rather than masking odor?",
  choices: [
    { key: "A", text: "Cetylpyridinium chloride" },
    { key: "B", text: "Chlorine dioxide" },
    { key: "C", text: "Sodium fluoride" },
    { key: "D", text: "Triclosan" }
  ],
  correctAnswer: "B",
  rationale: "Chlorine dioxide oxidizes volatile sulfur compounds responsible for halitosis and provides mild antibacterial activity.",
  incorrectRationales: {
    A: "CPC disrupts bacterial membranes but does not oxidize sulfur compounds.",
    B: "Correct.",
    C: "Fluoride prevents caries but does not neutralize odor-causing compounds.",
    D: "Triclosan provides antibacterial action but does not oxidize sulfur compounds."
  },
  boardTrap: "Oxidation of sulfur compounds equals chlorine dioxide.",
  memoryHook: "Chlorine clears the air."
},
{
  id: "mat-048",
  type: "application",
  subject: "Clinical Execution & Materials",
  topic: "Xylitol",
  difficulty: "medium",
  question: "Which sugar substitute inhibits Streptococcus mutans metabolism and reduces acid production?",
  choices: [
    { key: "A", text: "Xylitol" },
    { key: "B", text: "Sorbitol" },
    { key: "C", text: "Mannitol" },
    { key: "D", text: "Aspartame" }
  ],
  correctAnswer: "A",
  rationale: "Xylitol inhibits Streptococcus mutans growth and metabolism, reducing acid production and lowering caries risk.",
  incorrectRationales: {
    A: "Correct.",
    B: "Sorbitol can be slowly fermented by bacteria.",
    C: "Mannitol has minimal cariostatic effect.",
    D: "Aspartame does not inhibit bacterial metabolism."
  },
  boardTrap: "Bacterial inhibition signals xylitol.",
  memoryHook: "Xylitol stops the mutans."
},
{
  id: "mat-049",
  type: "application",
  subject: "Clinical Execution & Materials",
  topic: "GV Black Classification",
  difficulty: "medium",
  question: "A lesion on the interproximal surface of an anterior tooth that extends to the incisal edge is classified as which G.V. Black class?",
  choices: [
    { key: "A", text: "Class II" },
    { key: "B", text: "Class III" },
    { key: "C", text: "Class IV" },
    { key: "D", text: "Class V" }
  ],
  correctAnswer: "C",
  rationale: "Class IV lesions involve anterior interproximal surfaces that extend to include the incisal edge.",
  incorrectRationales: {
    A: "Class II involves posterior interproximal surfaces.",
    B: "Class III involves anterior interproximal surfaces without incisal edge involvement.",
    C: "Correct.",
    D: "Class V involves the gingival third of facial or lingual surfaces."
  },
  boardTrap: "Incisal edge involvement equals Class IV.",
  memoryHook: "IV = incisal involved."
},
{
  id: "mat-050",
  type: "application",
  subject: "Clinical Execution & Materials",
  topic: "Sodium Fluoride",
  difficulty: "medium",
  question: "Which toothpaste ingredient enhances remineralization by forming fluorapatite within enamel?",
  choices: [
    { key: "A", text: "Sodium fluoride" },
    { key: "B", text: "Stannous fluoride" },
    { key: "C", text: "Triclosan" },
    { key: "D", text: "Potassium nitrate" }
  ],
  correctAnswer: "A",
  rationale: "Sodium fluoride promotes remineralization by forming fluorapatite, which is more resistant to acid dissolution.",
  incorrectRationales: {
    A: "Correct.",
    B: "Stannous fluoride also prevents caries but is known for antimicrobial and desensitizing effects.",
    C: "Triclosan provides antibacterial activity, not remineralization.",
    D: "Potassium nitrate reduces nerve sensitivity, not enamel demineralization."
  },
  boardTrap: "Fluorapatite formation equals sodium fluoride.",
  memoryHook: "NaF = No acid fear."
},
{
  id: "mat-051",
  type: "mastery",
  subject: "Clinical Execution & Materials",
  topic: "CPP-ACP Remineralization",
  difficulty: "hard",
  question: "Which compound enhances enamel remineralization by binding and stabilizing calcium and phosphate ions at the tooth surface?",
  choices: [
    { key: "A", text: "Stannous fluoride" },
    { key: "B", text: "Potassium nitrate" },
    { key: "C", text: "Triclosan" },
    { key: "D", text: "Casein phosphopeptide–amorphous calcium phosphate (CPP–ACP)" }
  ],
  correctAnswer: "D",
  rationale: "CPP–ACP binds calcium and phosphate ions, maintaining their bioavailability for enamel remineralization.",
  incorrectRationales: {
    A: "Stannous fluoride aids in desensitization and antimicrobial action.",
    B: "Potassium nitrate reduces nerve excitability.",
    C: "Triclosan provides antibacterial effects.",
    D: "Correct."
  },
  boardTrap: "Calcium bioavailability equals CPP–ACP.",
  memoryHook: "Casein keeps calcium close."
},
{
  id: "path-001",
  type: "application",
  subject: "Oral Disease Mastery",
  topic: "Supernumerary Teeth",
  difficulty: "medium",
  question: "A 9-year-old child presents for a routine radiographic exam. An unerupted, peg-shaped tooth-like structure is seen between the maxillary central incisors. Based on this presentation, which of the following is the most likely diagnosis?",
  choices: [
    { key: "A", text: "Dens in dente" },
    { key: "B", text: "Gemination" },
    { key: "C", text: "Talon cusp" },
    { key: "D", text: "Mesiodens" }
  ],
  correctAnswer: "D",
  rationale: "Mesiodens is the most common supernumerary tooth, typically located in the maxillary midline between central incisors. It often appears conical or peg-shaped and may remain unerupted.",
  incorrectRationales: {
    A: "Dens in dente is an enamel invagination within a tooth, not an extra tooth.",
    B: "Gemination is one tooth bud attempting to divide; tooth count remains normal.",
    C: "Talon cusp is an accessory cusp on an anterior tooth, not a separate tooth."
  },
  boardTrap: "If the tooth count is increased and it is in the midline, it is a mesiodens.",
  memoryHook: "Midline + extra tooth = Mesiodens."
},
{
  id: "path-002",
  type: "application",
  subject: "Oral Disease Mastery",
  topic: "Supernumerary Teeth",
  difficulty: "medium",
  question: "A panoramic radiograph reveals an unerupted rudimentary tooth distal to the maxillary third molar. Which of the following best describes this finding?",
  choices: [
    { key: "A", text: "Paramolar" },
    { key: "B", text: "Distomolar" },
    { key: "C", text: "Enamel pearl" },
    { key: "D", text: "Hypercementosis" }
  ],
  correctAnswer: "B",
  rationale: "A distomolar is a supernumerary tooth located distal to the third molar, commonly rudimentary and discovered radiographically.",
  incorrectRationales: {
    A: "A paramolar is located buccal or lingual to molars, not distal.",
    C: "An enamel pearl is a small ectopic enamel deposit, not a full tooth.",
    D: "Hypercementosis is excessive cementum deposition on a root apex."
  },
  boardTrap: "Location determines diagnosis — distal to third molar equals distomolar.",
  memoryHook: "Distal to the third = Distomolar."
},
{
  id: "path-003",
  type: "mastery",
  subject: "Oral Disease Mastery",
  topic: "Dens Invaginatus",
  difficulty: "hard",
  question: "A maxillary lateral incisor presents radiographically with a 'tooth within a tooth' appearance and pulpal necrosis without trauma. Which anomaly is most likely?",
  choices: [
    { key: "A", text: "Dilated dens invaginatus" },
    { key: "B", text: "Gemination" },
    { key: "C", text: "Taurodontism" },
    { key: "D", text: "Concrescence" }
  ],
  correctAnswer: "A",
  rationale: "Dilated dens invaginatus is a severe invagination of enamel and dentin, often in maxillary lateral incisors, leading to pulpal necrosis.",
  incorrectRationales: {
    A: "Correct.",
    B: "Gemination involves crown bifurcation without internal invagination.",
    C: "Taurodontism affects pulp chamber shape in molars.",
    D: "Concrescence is cementum fusion of adjacent teeth."
  },
  boardTrap: "Tooth within a tooth + maxillary lateral incisor = dens invaginatus.",
  memoryHook: "Deep invagination = dilated dens."
},
{
  id: "path-004",
  type: "application",
  subject: "Oral Disease Mastery",
  topic: "Root Anomalies",
  difficulty: "medium",
  question: "An unerupted maxillary canine displays a sharp root curvature greater than 45 degrees. Which anomaly is most likely?",
  choices: [
    { key: "A", text: "Ankylosis" },
    { key: "B", text: "Concrescence" },
    { key: "C", text: "Dilaceration" },
    { key: "D", text: "Fusion" }
  ],
  correctAnswer: "C",
  rationale: "Dilaceration is characterized by a sharp abnormal curvature of the root or crown.",
  incorrectRationales: {
    A: "Ankylosis involves fusion of cementum to bone, not curvature.",
    B: "Concrescence is cementum fusion between teeth.",
    D: "Fusion affects crown morphology and tooth count."
  },
  boardTrap: "A sharp bend on radiograph is dilaceration even without trauma history.",
  memoryHook: "Drastic curve = Dilaceration."
},
{
  id: "path-005",
  type: "application",
  subject: "Oral Disease Mastery",
  topic: "Gemination vs Fusion",
  difficulty: "medium",
  question: "A maxillary incisor appears bifid with one root and normal tooth count. Which anomaly is present?",
  choices: [
    { key: "A", text: "Gemination" },
    { key: "B", text: "Fusion" },
    { key: "C", text: "Concrescence" },
    { key: "D", text: "Dilaceration" }
  ],
  correctAnswer: "A",
  rationale: "Gemination occurs when one tooth bud attempts to divide, resulting in a bifid crown with normal tooth count.",
  incorrectRationales: {
    A: "Correct.",
    B: "Fusion reduces total tooth count.",
    C: "Concrescence involves cementum fusion of roots.",
    D: "Dilaceration causes root curvature."
  },
  boardTrap: "Normal tooth count = gemination.",
  memoryHook: "Gemini twins from one."
},
{
  id: "path-006",
  type: "application",
  subject: "Oral Disease Mastery",
  topic: "Gemination vs Fusion",
  difficulty: "medium",
  question: "A child presents with a wide mandibular incisor and reduced tooth count. Radiograph shows partially joined pulp chambers. Which anomaly is most likely?",
  choices: [
    { key: "A", text: "Gemination" },
    { key: "B", text: "Fusion" },
    { key: "C", text: "Macrodontia" },
    { key: "D", text: "Concrescence" }
  ],
  correctAnswer: "B",
  rationale: "Fusion results from two tooth buds joining and leads to reduced tooth count.",
  incorrectRationales: {
    A: "Gemination has normal tooth count.",
    C: "Macrodontia is simple enlargement without pulp duplication.",
    D: "Concrescence is cementum fusion without crown alteration."
  },
  boardTrap: "Reduced tooth count = fusion.",
  memoryHook: "Fusion loses one."
},
{
  id: "path-007",
  type: "application",
  subject: "Oral Disease Mastery",
  topic: "Tooth Surface Loss",
  difficulty: "medium",
  question: "Smooth saucer-shaped lesions on lingual maxillary anteriors in a patient with acid reflux are most likely caused by:",
  choices: [
    { key: "A", text: "Attrition" },
    { key: "B", text: "Abfraction" },
    { key: "C", text: "Abrasion" },
    { key: "D", text: "Erosion" }
  ],
  correctAnswer: "D",
  rationale: "Erosion is chemical loss of tooth structure from intrinsic or extrinsic acid exposure.",
  incorrectRationales: {
    A: "Attrition is tooth-to-tooth wear.",
    B: "Abfraction creates cervical wedge defects.",
    C: "Abrasion is mechanical wear."
  },
  boardTrap: "Lingual anteriors + acid = erosion.",
  memoryHook: "Acid attack = erosion."
},
{
  id: "path-008",
  type: "application",
  subject: "Oral Disease Mastery",
  topic: "Vascular Lesions",
  difficulty: "medium",
  question: "Bluish-purple blanching lesions on the ventral tongue of a 66-year-old are most likely:",
  choices: [
    { key: "A", text: "Hemangioma" },
    { key: "B", text: "Kaposi sarcoma" },
    { key: "C", text: "Lingual varicosities" },
    { key: "D", text: "Oral melanoma" }
  ],
  correctAnswer: "C",
  rationale: "Lingual varicosities are dilated veins common in older adults and blanch on pressure.",
  incorrectRationales: {
    A: "Hemangiomas are vascular tumors seen in children.",
    B: "Kaposi sarcoma is malignant and non-blanching.",
    D: "Melanoma is pigmented and non-blanching."
  },
  boardTrap: "Age + ventral tongue + blanching = varicosity.",
  memoryHook: "Varicose veins show on the tongue."
},
{
  id: "path-009",
  type: "application",
  subject: "Oral Disease Mastery",
  topic: "Palatal Lesions",
  difficulty: "medium",
  question: "Diffuse white hard palate with red pinpoint dots in a pipe smoker indicates:",
  choices: [
    { key: "A", text: "Erythroplakia" },
    { key: "B", text: "Nicotinic stomatitis" },
    { key: "C", text: "Candidiasis" },
    { key: "D", text: "Leukoplakia" }
  ],
  correctAnswer: "B",
  rationale: "Nicotinic stomatitis is a heat-induced lesion with white keratosis and inflamed minor salivary gland duct openings.",
  incorrectRationales: {
    A: "Erythroplakia appears as a red velvety patch.",
    C: "Candidiasis wipes off and is often symptomatic.",
    D: "Leukoplakia lacks red pinpoint duct openings."
  },
  boardTrap: "Red dots on white palate = nicotinic stomatitis.",
  memoryHook: "Pipe heat makes dotted pavement."
},
{
  id: "path-010",
  type: "application",
  subject: "Oral Disease Mastery",
  topic: "Candidiasis",
  difficulty: "medium",
  question: "Diffuse erythema under a maxillary denture worn overnight is most consistent with:",
  choices: [
    { key: "A", text: "Denture stomatitis" },
    { key: "B", text: "Nicotinic stomatitis" },
    { key: "C", text: "Erythroplakia" },
    { key: "D", text: "Leukoplakia" }
  ],
  correctAnswer: "A",
  rationale: "Denture stomatitis is chronic atrophic candidiasis caused by continuous denture wear.",
  incorrectRationales: {
    A: "Correct.",
    B: "Nicotinic stomatitis presents as white palate with red duct openings.",
    C: "Erythroplakia is a discrete red premalignant lesion.",
    D: "Leukoplakia is a white plaque."
  },
  boardTrap: "Under denture + red = denture stomatitis.",
  memoryHook: "Red under the bed (denture) = stomatitis."
},
{
  id: "path-011",
  type: "application",
  subject: "Oral Disease Mastery",
  topic: "Leukoplakia",
  difficulty: "medium",
  question: "A well-demarcated white plaque on the lateral border of the tongue does not wipe off and has been present for several months without trauma. What is the most likely diagnosis?",
  choices: [
    { key: "A", text: "Candidiasis" },
    { key: "B", text: "Lichen planus" },
    { key: "C", text: "Frictional keratosis" },
    { key: "D", text: "Leukoplakia" }
  ],
  correctAnswer: "D",
  rationale: "Leukoplakia is a white plaque that cannot be wiped off and cannot be classified as another condition. Lateral tongue is a high-risk site.",
  incorrectRationales: {
    A: "Candidiasis typically wipes off and reveals erythematous mucosa.",
    B: "Lichen planus presents with bilateral lacy striae.",
    C: "Frictional keratosis has an identifiable traumatic cause."
  },
  boardTrap: "White lesion that does not wipe off on a high-risk site should raise concern for leukoplakia.",
  memoryHook: "White and won’t wipe? Watch it."
},
{
  id: "path-012",
  type: "application",
  subject: "Oral Disease Mastery",
  topic: "Leukoedema",
  difficulty: "medium",
  question: "Diffuse bilateral milky-white buccal mucosa that fades when stretched is most consistent with:",
  choices: [
    { key: "A", text: "Leukoplakia" },
    { key: "B", text: "Leukoedema" },
    { key: "C", text: "Candidiasis" },
    { key: "D", text: "Lichen planus" }
  ],
  correctAnswer: "B",
  rationale: "Leukoedema is a benign variation presenting as diffuse milky opalescence that disappears when stretched.",
  incorrectRationales: {
    A: "Leukoplakia does not disappear when stretched.",
    C: "Candidiasis wipes off.",
    D: "Lichen planus presents with lacy white striae."
  },
  boardTrap: "Stretch test differentiates leukoedema from leukoplakia.",
  memoryHook: "If it stretches, it’s stress-less."
},
{
  id: "path-013",
  type: "application",
  subject: "Oral Disease Mastery",
  topic: "Linea Alba",
  difficulty: "medium",
  question: "A bilateral horizontal white line along the buccal mucosa at the occlusal plane is most likely:",
  choices: [
    { key: "A", text: "Linea alba" },
    { key: "B", text: "Leukoplakia" },
    { key: "C", text: "Lichen planus" },
    { key: "D", text: "Frictional keratosis" }
  ],
  correctAnswer: "A",
  rationale: "Linea alba is a benign frictional white line located at the occlusal plane, often associated with clenching or grinding.",
  incorrectRationales: {
    A: "Correct.",
    B: "Leukoplakia is not typically linear and symmetric.",
    C: "Lichen planus presents as lacy striae.",
    D: "Frictional keratosis lacks classic linear symmetry."
  },
  boardTrap: "Location at occlusal plane is key.",
  memoryHook: "White line on the bite line? Linea alba."
},
{
  id: "path-014",
  type: "application",
  subject: "Oral Disease Mastery",
  topic: "Candidiasis",
  difficulty: "medium",
  question: "White plaques that partially rub off revealing erythematous mucosa following antibiotic use are most consistent with:",
  choices: [
    { key: "A", text: "Leukoplakia" },
    { key: "B", text: "Candidiasis" },
    { key: "C", text: "Lichen planus" },
    { key: "D", text: "Erythroplakia" }
  ],
  correctAnswer: "B",
  rationale: "Pseudomembranous candidiasis presents as wipeable white plaques with a red base, often after antibiotic therapy.",
  incorrectRationales: {
    A: "Leukoplakia does not wipe off.",
    C: "Lichen planus shows white striae, not wipeable plaques.",
    D: "Erythroplakia appears as a red lesion."
  },
  boardTrap: "If it wipes off, think yeast.",
  memoryHook: "Wipes white? It’s yeast."
},
{
  id: "path-015",
  type: "application",
  subject: "Oral Disease Mastery",
  topic: "Denture Stomatitis",
  difficulty: "medium",
  question: "Diffuse erythema beneath a denture worn overnight is best managed initially by:",
  choices: [
    { key: "A", text: "Discontinue nighttime denture wear and apply antifungal therapy" },
    { key: "B", text: "Refer for biopsy" },
    { key: "C", text: "Recommend adhesive and monitor" },
    { key: "D", text: "Prescribe corticosteroids" }
  ],
  correctAnswer: "A",
  rationale: "Denture stomatitis is commonly associated with Candida overgrowth from continuous denture wear. Removing denture overnight and antifungal therapy are first-line.",
  incorrectRationales: {
    A: "Correct.",
    B: "Diffuse symmetrical erythema under a denture does not require biopsy.",
    C: "Adhesive may worsen fungal growth.",
    D: "Corticosteroids worsen fungal infections."
  },
  boardTrap: "Red under denture base suggests Candida.",
  memoryHook: "Don’t sleep in plastic."
},
{
  id: "path-016",
  type: "mastery",
  subject: "Oral Disease Mastery",
  topic: "Addison Disease",
  difficulty: "hard",
  question: "Diffuse brown oral pigmentation with bronzed skin and hypotension is most consistent with:",
  choices: [
    { key: "A", text: "Peutz-Jeghers syndrome" },
    { key: "B", text: "Lichen planus" },
    { key: "C", text: "Cushing syndrome" },
    { key: "D", text: "Addison disease" }
  ],
  correctAnswer: "D",
  rationale: "Addison disease causes increased ACTH production, stimulating melanocytes and resulting in diffuse mucosal pigmentation.",
  incorrectRationales: {
    A: "Peutz-Jeghers presents with perioral freckling and GI polyps.",
    B: "Lichen planus causes white striae, not brown pigmentation.",
    C: "Cushing syndrome involves cortisol excess, not hyperpigmentation."
  },
  boardTrap: "Bronze skin plus brown oral mucosa indicates Addison disease.",
  memoryHook: "Addison adds melanin."
},
{
  id: "path-017",
  type: "application",
  subject: "Oral Disease Mastery",
  topic: "Amalgam Tattoo",
  difficulty: "medium",
  question: "A bluish-gray macule near a restored molar with radiopaque particles visible on radiograph is most likely:",
  choices: [
    { key: "A", text: "Oral melanoma" },
    { key: "B", text: "Blue nevus" },
    { key: "C", text: "Amalgam tattoo" },
    { key: "D", text: "Kaposi sarcoma" }
  ],
  correctAnswer: "C",
  rationale: "Amalgam tattoo results from embedded amalgam particles and may show radiopaque flecks on radiograph.",
  incorrectRationales: {
    A: "Melanoma is irregular and progressive.",
    B: "Blue nevus does not show radiopacity.",
    D: "Kaposi sarcoma appears vascular and nodular."
  },
  boardTrap: "Radiopaque particles confirm amalgam tattoo.",
  memoryHook: "Blue spot near filling? Check the x-ray."
},
{
  id: "path-018",
  type: "application",
  subject: "Oral Disease Mastery",
  topic: "Urticaria",
  difficulty: "medium",
  question: "Transient itchy raised wheals that resolve within hours are most consistent with:",
  choices: [
    { key: "A", text: "Angioedema" },
    { key: "B", text: "Erythema multiforme" },
    { key: "C", text: "Urticaria" },
    { key: "D", text: "Contact stomatitis" }
  ],
  correctAnswer: "C",
  rationale: "Urticaria presents as transient pruritic wheals triggered by allergic reactions.",
  incorrectRationales: {
    A: "Angioedema involves deeper swelling and possible airway compromise.",
    B: "Erythema multiforme presents with target lesions and oral ulcers.",
    D: "Contact stomatitis affects oral mucosa."
  },
  boardTrap: "Itchy wheals that disappear quickly indicate urticaria.",
  memoryHook: "Hives come and go."
},
{
  id: "path-019",
  type: "application",
  subject: "Oral Disease Mastery",
  topic: "Geographic Tongue",
  difficulty: "medium",
  question: "Migrating erythematous patches with white borders on the dorsal tongue are most consistent with:",
  choices: [
    { key: "A", text: "Erythroplakia" },
    { key: "B", text: "Median rhomboid glossitis" },
    { key: "C", text: "Oral candidiasis" },
    { key: "D", text: "Benign migratory glossitis" }
  ],
  correctAnswer: "D",
  rationale: "Benign migratory glossitis presents as erythematous depapillated areas with white serpiginous borders that change location.",
  incorrectRationales: {
    A: "Erythroplakia is persistent and premalignant.",
    B: "Median rhomboid glossitis is central and non-migratory.",
    C: "Candidiasis often wipes off and may be symptomatic."
  },
  boardTrap: "Migration pattern differentiates geographic tongue from premalignant lesions.",
  memoryHook: "If it wanders like a map, it’s geographic."
},
{
  id: "path-020",
  type: "application",
  subject: "Oral Disease Mastery",
  topic: "Hairy Tongue",
  difficulty: "medium",
  question: "A brownish-black discoloration with elongated filiform papillae on the posterior dorsal tongue following bismuth use is most consistent with:",
  choices: [
    { key: "A", text: "Oral hairy leukoplakia" },
    { key: "B", text: "Oral candidiasis" },
    { key: "C", text: "Hairy tongue" },
    { key: "D", text: "Melanotic macule" }
  ],
  correctAnswer: "C",
  rationale: "Hairy tongue results from keratin accumulation on filiform papillae, often stained by bismuth, tobacco, or chromogenic bacteria.",
  incorrectRationales: {
    A: "Oral hairy leukoplakia appears white and occurs on the lateral tongue in immunocompromised patients.",
    B: "Candidiasis presents as wipeable white plaques with erythematous base.",
    D: "Melanotic macule is a flat pigmented lesion without papillary elongation."
  },
  boardTrap: "Posterior dorsal tongue plus bismuth use indicates hairy tongue, not leukoplakia.",
  memoryHook: "Black tongue? Check the Pepto."
},
{
  id: "path-021",
  type: "application",
  subject: "Oral Disease Mastery",
  topic: "Scarlet Fever",
  difficulty: "medium",
  question: "A child with fever, sore throat, sandpaper-like rash, and a \"strawberry tongue\" is most likely experiencing:",
  choices: [
    { key: "A", text: "Kawasaki disease" },
    { key: "B", text: "Erythematous candidiasis" },
    { key: "C", text: "Geographic tongue" },
    { key: "D", text: "Scarlet fever" }
  ],
  correctAnswer: "D",
  rationale: "Scarlet fever is caused by group A Streptococcus and presents with strawberry tongue, fever, and diffuse rash.",
  incorrectRationales: {
    A: "Kawasaki disease affects younger children and includes conjunctivitis and extremity swelling.",
    B: "Candidiasis does not cause systemic rash or strawberry tongue.",
    C: "Geographic tongue is migratory and not associated with fever."
  },
  boardTrap: "Strawberry tongue plus rash and strep history indicates scarlet fever.",
  memoryHook: "Red tongue + red rash = Scarlet fever."
},
{
  id: "path-022",
  type: "application",
  subject: "Oral Disease Mastery",
  topic: "Squamous Papilloma",
  difficulty: "medium",
  question: "A pedunculated, cauliflower-like lesion on the soft palate that is asymptomatic and stable is most consistent with:",
  choices: [
    { key: "A", text: "Verrucous carcinoma" },
    { key: "B", text: "Condyloma acuminatum" },
    { key: "C", text: "Oral fibroma" },
    { key: "D", text: "Squamous papilloma" }
  ],
  correctAnswer: "D",
  rationale: "Squamous papilloma is a benign HPV-related lesion presenting as a pedunculated, cauliflower-like mass.",
  incorrectRationales: {
    A: "Verrucous carcinoma is broad-based and invasive.",
    B: "Condyloma acuminatum is typically larger and multiple.",
    C: "Fibroma is firm and smooth, not cauliflower-like."
  },
  boardTrap: "Pedunculated plus cauliflower surface strongly suggests papilloma.",
  memoryHook: "If it dangles like broccoli, it’s papilloma."
},
{
  id: "path-023",
  type: "application",
  subject: "Oral Disease Mastery",
  topic: "Hemangioma",
  difficulty: "medium",
  question: "A soft, compressible blue lesion that blanches on pressure in a child is most consistent with:",
  choices: [
    { key: "A", text: "Mucocele" },
    { key: "B", text: "Hemangioma" },
    { key: "C", text: "Kaposi sarcoma" },
    { key: "D", text: "Amalgam tattoo" }
  ],
  correctAnswer: "B",
  rationale: "Hemangiomas are benign vascular lesions that blanch with pressure and are often present from childhood.",
  incorrectRationales: {
    A: "Mucocele does not blanch and is usually on the lower lip.",
    C: "Kaposi sarcoma is non-blanching and associated with immunocompromise.",
    D: "Amalgam tattoo is flat and radiographically evident."
  },
  boardTrap: "Blanching indicates vascular origin.",
  memoryHook: "Blue + blanches = blood."
},
{
  id: "path-024",
  type: "application",
  subject: "Oral Disease Mastery",
  topic: "Drug-Induced Gingival Hyperplasia",
  difficulty: "medium",
  question: "Firm, generalized gingival enlargement in a patient taking cyclosporine and nifedipine is most consistent with:",
  choices: [
    { key: "A", text: "Gingival hyperplasia" },
    { key: "B", text: "Chronic periodontitis" },
    { key: "C", text: "Leukemic infiltration" },
    { key: "D", text: "Peripheral giant cell granuloma" }
  ],
  correctAnswer: "A",
  rationale: "Cyclosporine and calcium channel blockers such as nifedipine are classic causes of drug-induced gingival hyperplasia.",
  incorrectRationales: {
    B: "Periodontitis involves attachment loss and inflammation.",
    C: "Leukemia causes boggy, hemorrhagic gingiva.",
    D: "Peripheral giant cell granuloma is localized, not generalized."
  },
  boardTrap: "Medication history is the key clue.",
  memoryHook: "Cyclosporine grows gums silently."
},
{
  id: "path-025",
  type: "application",
  subject: "Oral Disease Mastery",
  topic: "Epulis Fissuratum",
  difficulty: "medium",
  question: "Redundant vestibular tissue folds associated with a long-term ill-fitting denture are most consistent with:",
  choices: [
    { key: "A", text: "Peripheral ossifying fibroma" },
    { key: "B", text: "Squamous cell carcinoma" },
    { key: "C", text: "Pyogenic granuloma" },
    { key: "D", text: "Epulis fissuratum" }
  ],
  correctAnswer: "D",
  rationale: "Epulis fissuratum is reactive hyperplasia caused by chronic denture irritation.",
  incorrectRationales: {
    A: "Peripheral ossifying fibroma is interdental and firm.",
    B: "SCC is ulcerated and indurated.",
    C: "Pyogenic granuloma is red and bleeds easily."
  },
  boardTrap: "Denture plus tissue folds indicates epulis fissuratum.",
  memoryHook: "Folded flanges = fissuratum."
},
{
  id: "path-026",
  type: "application",
  subject: "Oral Disease Mastery",
  topic: "Mucocele",
  difficulty: "medium",
  question: "A recurrent, fluctuant bluish lesion on the lower lip in a teenager is most consistent with:",
  choices: [
    { key: "A", text: "Mucocele" },
    { key: "B", text: "Hemangioma" },
    { key: "C", text: "Fibroma" },
    { key: "D", text: "Minor salivary gland tumor" }
  ],
  correctAnswer: "A",
  rationale: "Mucocele results from trauma to minor salivary glands and commonly occurs on the lower lip.",
  incorrectRationales: {
    B: "Hemangioma blanches with pressure.",
    C: "Fibroma is firm and does not fluctuate.",
    D: "Minor salivary gland tumors are firm and more common in adults."
  },
  boardTrap: "Lower lip plus recurrence equals mucocele.",
  memoryHook: "Lip bubble that comes and goes = mucocele."
},
{
  id: "path-027",
  type: "mastery",
  subject: "Oral Disease Mastery",
  topic: "Herpes Zoster",
  difficulty: "hard",
  question: "Unilateral clustered ulcers on the palate and lip following a burning prodrome are most consistent with:",
  choices: [
    { key: "A", text: "Primary herpetic gingivostomatitis" },
    { key: "B", text: "Herpes zoster" },
    { key: "C", text: "Recurrent aphthous ulcers" },
    { key: "D", text: "Erythema multiforme" }
  ],
  correctAnswer: "B",
  rationale: "Herpes zoster presents with unilateral lesions confined to a dermatome following prodromal burning pain.",
  incorrectRationales: {
    A: "Primary HSV is diffuse and bilateral in children.",
    C: "Aphthous ulcers affect non-keratinized mucosa and are not dermatomal.",
    D: "Erythema multiforme presents with target lesions and widespread ulcers."
  },
  boardTrap: "Unilateral distribution is the key differentiator.",
  memoryHook: "One side burning? Zoster returning."
},
{
  id: "path-028",
  type: "mastery",
  subject: "Oral Disease Mastery",
  topic: "Kaposi Sarcoma",
  difficulty: "hard",
  question: "Purple, non-blanching nodules on the hard palate in an HIV-positive patient are most consistent with:",
  choices: [
    { key: "A", text: "Hemangioma" },
    { key: "B", text: "Erythema multiforme" },
    { key: "C", text: "Kaposi’s sarcoma" },
    { key: "D", text: "Oral lichen planus" }
  ],
  correctAnswer: "C",
  rationale: "Kaposi’s sarcoma is an HHV-8–associated vascular malignancy seen in immunocompromised patients.",
  incorrectRationales: {
    A: "Hemangiomas blanch and are common in children.",
    B: "Erythema multiforme presents with ulceration and target lesions.",
    D: "Lichen planus presents as white striae."
  },
  boardTrap: "Purple plus HIV equals Kaposi’s.",
  memoryHook: "Purple palate in HIV? Think Kaposi."
},
{
  id: "path-029",
  type: "mastery",
  subject: "Oral Disease Mastery",
  topic: "Systemic Lupus Erythematosus",
  difficulty: "hard",
  question: "Butterfly rash, photosensitivity, fatigue, and recurrent oral ulcers are most consistent with:",
  choices: [
    { key: "A", text: "Systemic lupus erythematosus" },
    { key: "B", text: "Erythema multiforme" },
    { key: "C", text: "Herpes simplex virus" },
    { key: "D", text: "Contact dermatitis" }
  ],
  correctAnswer: "A",
  rationale: "SLE presents with malar rash, photosensitivity, joint pain, and recurrent oral ulcers.",
  incorrectRationales: {
    B: "Erythema multiforme is acute and ulcerative.",
    C: "HSV causes vesicular lesions on keratinized mucosa.",
    D: "Contact dermatitis lacks systemic autoimmune features."
  },
  boardTrap: "Butterfly rash is the signature clue.",
  memoryHook: "Butterfly face plus ulcers = Lupus."
},
{
  id: "path-030",
  type: "application",
  subject: "Oral Disease Mastery",
  topic: "Lichen Planus",
  difficulty: "medium",
  question: "Bilateral lace-like white striae on the buccal mucosa that do not wipe off are most consistent with:",
  choices: [
    { key: "A", text: "Lichen planus" },
    { key: "B", text: "Candidiasis" },
    { key: "C", text: "Lupus erythematosus" },
    { key: "D", text: "Leukoplakia" }
  ],
  correctAnswer: "A",
  rationale: "Lichen planus presents as bilateral Wickham’s striae on buccal mucosa.",
  incorrectRationales: {
    B: "Candidiasis wipes off.",
    C: "Lupus lesions are associated with systemic signs.",
    D: "Leukoplakia is typically unilateral and not lacy."
  },
  boardTrap: "Lacy pattern equals lichen.",
  memoryHook: "Wickham’s weave means lichen leaves."
},
{
  id: "path-031",
  type: "mastery",
  subject: "Oral Disease Mastery",
  topic: "Sjögren’s Syndrome",
  difficulty: "hard",
  question: "Severe xerostomia, dry eyes, cervical caries, and use of cevimeline are most consistent with:",
  choices: [
    { key: "A", text: "Antihistamine-induced xerostomia" },
    { key: "B", text: "Diabetes mellitus" },
    { key: "C", text: "Radiation-induced salivary hypofunction" },
    { key: "D", text: "Sjögren’s syndrome" }
  ],
  correctAnswer: "D",
  rationale: "Sjögren’s syndrome is an autoimmune destruction of exocrine glands causing dry mouth and dry eyes.",
  incorrectRationales: {
    A: "Antihistamines cause dry mouth but not dry eyes with gland tenderness.",
    B: "Diabetes does not cause autoimmune gland destruction.",
    C: "Radiation requires head and neck cancer history."
  },
  boardTrap: "Dry eyes plus dry mouth is classic Sjögren’s.",
  memoryHook: "Dry from mouth to eye? Sjögren’s."
},
{
  id: "path-032",
  type: "mastery",
  subject: "Oral Disease Mastery",
  topic: "Sjögren’s Physiology",
  difficulty: "hard",
  question: "Dry mouth and dry eyes in Sjögren’s syndrome are due to:",
  choices: [
    { key: "A", text: "Increased sympathetic tone" },
    { key: "B", text: "Increased cholinergic stimulation" },
    { key: "C", text: "Decreased parasympathetic activity" },
    { key: "D", text: "Alpha-adrenergic receptor agonism" }
  ],
  correctAnswer: "C",
  rationale: "Sjögren’s causes reduced parasympathetic gland stimulation, decreasing salivation and lacrimation.",
  incorrectRationales: {
    A: "Sympathetic tone does not explain autoimmune destruction.",
    B: "Increased cholinergic activity would increase secretions.",
    D: "Alpha-agonism does not cause exocrine gland failure."
  },
  boardTrap: "Loss of SLUD equals parasympathetic decrease.",
  memoryHook: "SLUD dries up in Sjögren’s."
},
{
  id: "path-033",
  type: "mastery",
  subject: "Oral Disease Mastery",
  topic: "Periapical Cemental Dysplasia",
  difficulty: "hard",
  question: "Radiolucent to radiopaque periapical lesions in vital mandibular anterior teeth of a middle-aged African American woman are most consistent with:",
  choices: [
    { key: "A", text: "Chronic periapical abscess" },
    { key: "B", text: "Florid osseous dysplasia" },
    { key: "C", text: "Condensing osteitis" },
    { key: "D", text: "Periapical cemental dysplasia" }
  ],
  correctAnswer: "D",
  rationale: "Periapical cemental dysplasia affects vital mandibular anterior teeth and progresses from radiolucent to radiopaque.",
  incorrectRationales: {
    A: "Abscess requires non-vital tooth.",
    B: "Florid osseous dysplasia involves multiple quadrants.",
    C: "Condensing osteitis is radiopaque and associated with non-vital tooth."
  },
  boardTrap: "Vital tooth plus anterior mandible equals PCD.",
  memoryHook: "Don’t drill the chill."
},

{
  id: "path-034",
  type: "mastery",
  subject: "Oral Disease Mastery",
  topic: "Paget’s Disease",
  difficulty: "hard",
  question: "Cotton-wool radiopacities, ill-fitting dentures, increased hat size, and elevated alkaline phosphatase are most consistent with:",
  choices: [
    { key: "A", text: "Fibrous dysplasia" },
    { key: "B", text: "Paget’s disease" },
    { key: "C", text: "Florid osseous dysplasia" },
    { key: "D", text: "Osteosarcoma" }
  ],
  correctAnswer: "B",
  rationale: "Paget’s disease causes abnormal bone remodeling, producing cotton-wool radiopacities, jaw enlargement, elevated alkaline phosphatase, and systemic skeletal changes.",
  incorrectRationales: {
    A: "Fibrous dysplasia shows a ground-glass appearance and typically affects younger patients.",
    C: "Florid osseous dysplasia does not elevate alkaline phosphatase or enlarge the skull.",
    D: "Osteosarcoma presents with sunburst appearance and painful swelling."
  },
  boardTrap: "Cotton wool plus systemic bone enlargement equals Paget’s.",
  memoryHook: "Cotton wool + big skull = Paget’s pull."
},
{
  id: "path-035",
  type: "mastery",
  subject: "Oral Disease Mastery",
  topic: "Treacher Collins Syndrome",
  difficulty: "hard",
  question: "Bilateral zygomatic hypoplasia, downward slanting eyes, malformed ears, and conductive hearing loss indicate:",
  choices: [
    { key: "A", text: "Treacher Collins syndrome" },
    { key: "B", text: "Pierre Robin sequence" },
    { key: "C", text: "Hemifacial microsomia" },
    { key: "D", text: "Goldenhar syndrome" }
  ],
  correctAnswer: "A",
  rationale: "Treacher Collins syndrome is a bilateral craniofacial disorder involving mandibular and zygomatic hypoplasia with ear anomalies and hearing loss.",
  incorrectRationales: {
    B: "Pierre Robin includes micrognathia and glossoptosis but lacks bilateral zygomatic hypoplasia.",
    C: "Hemifacial microsomia is unilateral.",
    D: "Goldenhar syndrome typically presents with unilateral facial involvement and epibulbar dermoids."
  },
  boardTrap: "Bilateral facial bone hypoplasia plus hearing loss equals Treacher Collins.",
  memoryHook: "Tiny jaw, tilted eyes, trouble hearing — Treacher’s appearing."
},
{
  id: "path-036",
  type: "recall",
  subject: "Oral Disease Mastery",
  topic: "Pathology Terminology",
  difficulty: "medium",
  question: "The suffix '-oma' most commonly indicates:",
  choices: [
    { key: "A", text: "Inflammation" },
    { key: "B", text: "Infection" },
    { key: "C", text: "Neoplasm" },
    { key: "D", text: "Hyperplasia" }
  ],
  correctAnswer: "C",
  rationale: "The suffix '-oma' most commonly indicates a tumor or neoplasm, which may be benign or malignant depending on context.",
  incorrectRationales: {
    A: "Inflammation typically ends in '-itis'.",
    B: "Infection is not defined by the suffix '-oma'.",
    D: "Hyperplasia refers to increased cell number, not necessarily a neoplasm."
  },
  boardTrap: "Do not assume '-oma' always means benign.",
  memoryHook: "'Oma' means growth — but check if it’s friend or foe."
},
{
  id: "path-037",
  type: "recall",
  subject: "Oral Disease Mastery",
  topic: "Carcinoma",
  difficulty: "medium",
  question: "The term 'carcinoma' refers to a:",
  choices: [
    { key: "A", text: "Benign epithelial lesion" },
    { key: "B", text: "Inflammatory response" },
    { key: "C", text: "Malignant epithelial tumor" },
    { key: "D", text: "Connective tissue neoplasm" }
  ],
  correctAnswer: "C",
  rationale: "Carcinoma refers to a malignant tumor arising from epithelial tissue.",
  incorrectRationales: {
    A: "Carcinoma is always malignant.",
    B: "Inflammatory conditions end in '-itis'.",
    D: "Connective tissue malignancies are called sarcomas."
  },
  boardTrap: "Carcinoma equals malignant epithelium.",
  memoryHook: "Carcinoma creeps from lining tissue."
},
{
  id: "path-038",
  type: "recall",
  subject: "Oral Disease Mastery",
  topic: "Odontogenic Cyst Definition",
  difficulty: "medium",
  question: "An odontogenic cyst is best defined as a cyst arising from:",
  choices: [
    { key: "A", text: "Salivary gland tissue" },
    { key: "B", text: "Skin appendage remnants" },
    { key: "C", text: "Tooth-forming tissues" },
    { key: "D", text: "Odontoblast-derived tumor cells" }
  ],
  correctAnswer: "C",
  rationale: "Odontogenic cysts arise from epithelial remnants involved in tooth development.",
  incorrectRationales: {
    A: "Salivary gland cysts are non-odontogenic.",
    B: "Skin appendage cysts are dermoid cysts.",
    D: "Tumors are not cysts."
  },
  boardTrap: "Odonto means tooth.",
  memoryHook: "Odonto = tooth. Cyst = sac."
},
{
  id: "path-039",
  type: "application",
  subject: "Oral Disease Mastery",
  topic: "Radicular Cyst",
  difficulty: "medium",
  question: "A non-vital tooth with a unilocular radiolucency at the apex most likely indicates:",
  choices: [
    { key: "A", text: "Radicular cyst" },
    { key: "B", text: "Dentigerous cyst" },
    { key: "C", text: "Lateral periodontal cyst" },
    { key: "D", text: "Periapical cemento-osseous dysplasia" }
  ],
  correctAnswer: "A",
  rationale: "Radicular cysts are associated with non-vital teeth and appear as unilocular apical radiolucencies.",
  incorrectRationales: {
    B: "Dentigerous cyst surrounds the crown of an unerupted tooth.",
    C: "Lateral periodontal cyst occurs beside vital teeth.",
    D: "PCOD occurs around vital teeth."
  },
  boardTrap: "Non-vital equals radicular.",
  memoryHook: "Dead pulp, dark spot — radicular."
},
{
  id: "path-040",
  type: "mastery",
  subject: "Oral Disease Mastery",
  topic: "Odontogenic Keratocyst",
  difficulty: "hard",
  question: "A posterior mandibular radiolucency with parakeratinized lining and high recurrence rate is most consistent with:",
  choices: [
    { key: "A", text: "Dentigerous cyst" },
    { key: "B", text: "Radicular cyst" },
    { key: "C", text: "Lateral periodontal cyst" },
    { key: "D", text: "Odontogenic keratocyst" }
  ],
  correctAnswer: "D",
  rationale: "Odontogenic keratocysts are aggressive cysts with parakeratinized epithelial lining and high recurrence rates.",
  incorrectRationales: {
    A: "Dentigerous cyst is less aggressive and surrounds crown.",
    B: "Radicular cyst is at apex of non-vital tooth.",
    C: "Lateral periodontal cyst is small and non-aggressive."
  },
  boardTrap: "Parakeratin plus posterior mandible equals OKC.",
  memoryHook: "OKC often keeps coming back."
},
{
  id: "path-041",
  type: "application",
  subject: "Oral Disease Mastery",
  topic: "Primordial Cyst",
  difficulty: "medium",
  question: "A radiolucency in an area where a tooth never developed is most consistent with:",
  choices: [
    { key: "A", text: "Dentigerous cyst" },
    { key: "B", text: "Radicular cyst" },
    { key: "C", text: "Lateral periodontal cyst" },
    { key: "D", text: "Primordial cyst" }
  ],
  correctAnswer: "D",
  rationale: "Primordial cyst forms in place of a tooth that never developed.",
  incorrectRationales: {
    A: "Dentigerous cyst surrounds an unerupted crown.",
    B: "Radicular cyst requires non-vital tooth.",
    C: "Lateral periodontal cyst requires a tooth."
  },
  boardTrap: "No tooth ever present equals primordial.",
  memoryHook: "Primitive place-holder = primordial."
},
{
  id: "path-042",
  type: "application",
  subject: "Oral Disease Mastery",
  topic: "Residual Cyst",
  difficulty: "medium",
  question: "A radiolucency in an edentulous site years after extraction most likely represents:",
  choices: [
    { key: "A", text: "Radicular cyst" },
    { key: "B", text: "Residual cyst" },
    { key: "C", text: "Periapical cemento-osseous dysplasia" },
    { key: "D", text: "Dentigerous cyst" }
  ],
  correctAnswer: "B",
  rationale: "Residual cyst is a radicular cyst left behind after extraction of the involved tooth.",
  incorrectRationales: {
    A: "Radicular cyst requires a non-vital tooth present.",
    C: "PCOD involves vital teeth.",
    D: "Dentigerous cyst surrounds an unerupted crown."
  },
  boardTrap: "Tooth gone but cyst remains equals residual.",
  memoryHook: "Residual = remains."
},
{
  id: "path-043",
  type: "recall",
  subject: "Oral Disease Mastery",
  topic: "Neurologic Terminology",
  difficulty: "medium",
  question: "Difficulty forming or understanding language after a stroke is termed:",
  choices: [
    { key: "A", text: "Dysphasia" },
    { key: "B", text: "Dysphagia" },
    { key: "C", text: "Aphasia" },
    { key: "D", text: "Dysarthria" }
  ],
  correctAnswer: "A",
  rationale: "Dysphasia refers to impaired language comprehension or production following brain injury.",
  incorrectRationales: {
    B: "Dysphagia means difficulty swallowing.",
    C: "Aphasia is complete language loss.",
    D: "Dysarthria involves speech muscle weakness."
  },
  boardTrap: "Language versus swallowing confusion.",
  memoryHook: "Dysphasia = dysfunctional phrasing."
},
{
  id: "path-044",
  type: "recall",
  subject: "Oral Disease Mastery",
  topic: "Voice Disorders",
  difficulty: "medium",
  question: "Hoarseness and vocal strain without language or swallowing difficulty is termed:",
  choices: [
    { key: "A", text: "Dysarthria" },
    { key: "B", text: "Dysphagia" },
    { key: "C", text: "Dysphonia" },
    { key: "D", text: "Dysphasia" }
  ],
  correctAnswer: "C",
  rationale: "Dysphonia refers to impaired voice production or phonation.",
  incorrectRationales: {
    A: "Dysarthria affects speech articulation.",
    B: "Dysphagia affects swallowing.",
    D: "Dysphasia affects language."
  },
  boardTrap: "Phono means sound.",
  memoryHook: "Dysphonia distorts sound."
},
{
  id: "path-045",
  type: "recall",
  subject: "Oral Disease Mastery",
  topic: "Respiratory Terminology",
  difficulty: "medium",
  question: "The term 'dyspnea' refers to:",
  choices: [
    { key: "A", text: "Difficulty swallowing" },
    { key: "B", text: "Shortness of speech" },
    { key: "C", text: "Difficulty enunciating" },
    { key: "D", text: "Difficulty breathing" }
  ],
  correctAnswer: "D",
  rationale: "Dyspnea is the clinical term for shortness of breath.",
  incorrectRationales: {
    A: "Difficulty swallowing is dysphagia.",
    B: "Speech length is not dyspnea.",
    C: "Enunciation difficulty is dysarthria."
  },
  boardTrap: "Dyspnea relates to diaphragm.",
  memoryHook: "Dyspnea = diaphragm distress."
},
{
  id: "path-046",
  type: "recall",
  subject: "Oral Disease Mastery",
  topic: "Clinical Terminology",
  difficulty: "medium",
  question: "Objective findings observed by a clinician are called:",
  choices: [
    { key: "A", text: "Sign" },
    { key: "B", text: "Symptom" },
    { key: "C", text: "Syndrome" },
    { key: "D", text: "Diagnosis" }
  ],
  correctAnswer: "A",
  rationale: "A sign is an objective observation made by the clinician.",
  incorrectRationales: {
    B: "A symptom is reported by the patient.",
    C: "A syndrome is a cluster of signs and symptoms.",
    D: "A diagnosis is the conclusion drawn from findings."
  },
  boardTrap: "If you see it, it’s a sign.",
  memoryHook: "Sign = seen."
},
{
  id: "path-047",
  type: "recall",
  subject: "Oral Disease Mastery",
  topic: "True Cyst Definition",
  difficulty: "medium",
  question: "A true cyst is best defined as a:",
  choices: [
    { key: "A", text: "Inflammatory granuloma" },
    { key: "B", text: "Pathologic cavity lined by epithelium" },
    { key: "C", text: "Suppurative abscess" },
    { key: "D", text: "Benign neoplastic tumor" }
  ],
  correctAnswer: "B",
  rationale: "A true cyst is a pathologic cavity lined by epithelium and containing fluid or semi-fluid material.",
  incorrectRationales: {
    A: "Granulomas lack epithelial lining.",
    C: "Abscesses contain pus and are not epithelial-lined.",
    D: "Tumors are solid proliferative lesions."
  },
  boardTrap: "Epithelial lining is the key.",
  memoryHook: "Cyst = cell-lined sack."
},
{
  id: "path-048",
  type: "mastery",
  subject: "Oral Disease Mastery",
  topic: "Langerhans Cell Histiocytosis",
  difficulty: "hard",
  question: "Pediatric jaw lesion with floating teeth appearance and Birbeck granules is most consistent with:",
  choices: [
    { key: "A", text: "Peripheral giant cell granuloma" },
    { key: "B", text: "Odontogenic keratocyst" },
    { key: "C", text: "Langerhans cell histiocytosis" },
    { key: "D", text: "Ewing sarcoma" }
  ],
  correctAnswer: "C",
  rationale: "Langerhans cell histiocytosis causes rapid bone destruction in children, creating floating teeth appearance and shows Birbeck granules histologically.",
  incorrectRationales: {
    A: "Peripheral giant cell granuloma occurs on gingiva.",
    B: "OKC does not produce floating teeth or Langerhans cells.",
    D: "Ewing sarcoma lacks Birbeck granules."
  },
  boardTrap: "Floating teeth in kids equals LCH.",
  memoryHook: "Little lytic lesions = Langerhans."
},
{
  id: "path-049",
  type: "mastery",
  subject: "Oral Disease Mastery",
  topic: "Pemphigus Vulgaris",
  difficulty: "hard",
  question: "Painful desquamative gingivitis with a positive Nikolsky sign is most consistent with:",
  choices: [
    { key: "A", text: "Pemphigus vulgaris" },
    { key: "B", text: "Erythema multiforme" },
    { key: "C", text: "Lichen planus" },
    { key: "D", text: "Aphthous ulcers" }
  ],
  correctAnswer: "A",
  rationale: "Pemphigus vulgaris is an autoimmune disorder targeting desmosomes, causing intraepithelial blistering, desquamative gingivitis, and a positive Nikolsky sign. Diagnosis is confirmed with immunofluorescence.",
  incorrectRationales: {
    B: "Erythema multiforme causes target lesions and ulcerations but does not produce a positive Nikolsky sign.",
    C: "Lichen planus may present with desquamative gingivitis but typically does not demonstrate a positive Nikolsky sign.",
    D: "Aphthous ulcers are localized ulcerations and do not cause epithelial sloughing."
  },
  boardTrap: "Desquamative gingivitis has multiple causes — positive Nikolsky points to pemphigus.",
  memoryHook: "Peeling with pressure? Think Pemphigus."
},
{
  id: "path-050",
  type: "mastery",
  subject: "Oral Disease Mastery",
  topic: "Multiple Myeloma",
  difficulty: "hard",
  question: "Multiple punched-out radiolucencies of the jaw with Bence Jones proteins are most consistent with:",
  choices: [
    { key: "A", text: "Osteosarcoma" },
    { key: "B", text: "Multiple myeloma" },
    { key: "C", text: "Paget disease" },
    { key: "D", text: "Ewing sarcoma" }
  ],
  correctAnswer: "B",
  rationale: "Multiple myeloma is a malignant plasma cell neoplasm characterized by punched-out radiolucent bone lesions and Bence Jones proteins in the urine.",
  incorrectRationales: {
    A: "Osteosarcoma shows sunburst or mixed radiographic patterns.",
    C: "Paget disease presents with cotton-wool radiopacities.",
    D: "Ewing sarcoma typically affects younger patients and has different radiographic features."
  },
  boardTrap: "Punched-out lesions plus monoclonal protein equals multiple myeloma.",
  memoryHook: "Multiple holes, monoclonal protein — Multiple Myeloma."
},
{
  id: "path-051",
  type: "mastery",
  subject: "Oral Disease Mastery",
  topic: "Geographic Tongue vs Erythroplakia",
  difficulty: "hard",
  question: "A 42-year-old male presents with a single red patch on the dorsal surface of his tongue. The lesion is oval, has a smooth, shiny surface, and appears to have lost filiform papillae. It has been present for three weeks without change in size or shape. The patient denies pain, irritation, or changes in taste. There is no white border, and no other lesions are noted. Which of the following is the most appropriate next step?",
  choices: [
    { key: "A", text: "Diagnose geographic tongue and reassure" },
    { key: "B", text: "Prescribe topical antifungal treatment" },
    { key: "C", text: "Order a biopsy to rule out erythroplakia" },
    { key: "D", text: "Monitor closely and reassess if the lesion migrates or changes" }
  ],
  correctAnswer: "D",
  rationale: "This lesion resembles geographic tongue due to depapillation on the dorsal surface; however, it lacks the defining features of benign migratory glossitis, including migration, multiple lesions, and a peripheral white or yellow border. Because it is solitary and stable, the most appropriate step is careful monitoring to evaluate for change before diagnosing or initiating invasive intervention.",
  incorrectRationales: {
    A: "Geographic tongue requires migratory behavior and typically has serpiginous white borders. A single stable lesion does not meet criteria.",
    B: "There are no clinical signs of candidiasis such as wipeable plaques, burning sensation, or antibiotic history.",
    C: "Biopsy is not immediately indicated without high-risk features such as induration, rapid change, ulceration, or high-risk location."
  },
  boardTrap: "A single red patch tempts you to label it geographic tongue. Without migration or white border, that diagnosis is premature.",
  memoryHook: "If it doesn’t travel, don’t call it geographic."
},
{
  id: "nut-001",
  type: "mastery",
  subject: "Prevention Science & Public Health",
  topic: "Carbohydrates",
  difficulty: "medium",
  question: "A dental hygiene patient reports feeling unusually tired during morning classes and says she is thinking about cutting carbohydrates from her diet. Which statement best describes the body’s use of carbohydrates and the recommended daily intake for adults?",
  choices: [
    { key: "A", text: "Carbohydrates are the body’s main energy source, providing 4 kilocalories per gram, with a recommended intake of about 130 grams per day." },
    { key: "B", text: "Carbohydrates primarily function in hormone synthesis and should be limited to less than 50 grams per day." },
    { key: "C", text: "Carbohydrates are needed mainly for mineral absorption and provide 9 kilocalories per gram." },
    { key: "D", text: "Carbohydrates serve mainly as backup energy, providing 7 kilocalories per gram, with no minimum daily requirement." }
  ],
  correctAnswer: "A",
  rationale: "Carbohydrates are the body’s preferred energy source, especially for the brain and central nervous system. They provide 4 kilocalories per gram, and adults require approximately 130 grams per day to maintain normal neurological function and stable blood glucose levels.",
  incorrectRationales: {
    B: "Carbohydrates do not primarily function in hormone synthesis. Fats and proteins are involved in hormone production. Intake below 50 grams per day may induce ketosis.",
    C: "Carbohydrates provide 4 kilocalories per gram. Fats provide 9 kilocalories per gram.",
    D: "Carbohydrates are not backup energy; fats serve that role. Alcohol provides 7 kilocalories per gram. There is a minimum daily requirement of approximately 130 grams."
  },
  boardTrap: "Boards commonly mix up macronutrient calorie values: 4 for carbs and protein, 9 for fat, 7 for alcohol.",
  memoryHook: "Carbs have 4 letters → 4 kcal. Brain needs 130 to think."
},
{
  id: "nut-002",
  type: "mastery",
  subject: "Prevention Science & Public Health",
  topic: "Sugar Alcohols",
  difficulty: "medium",
  question: "A patient mentions switching to several 'sugar-free' products to reduce caries risk. Which statement best describes the characteristics of sugar alcohols used in these products?",
  choices: [
    { key: "A", text: "Sugar alcohols provide 9 kilocalories per gram and are rapidly absorbed in the small intestine." },
    { key: "B", text: "Sugar alcohols function primarily as essential fatty acids and increase cariogenic potential." },
    { key: "C", text: "Sugar alcohols supply 7 kilocalories per gram and produce strong glycemic spikes similar to sucrose." },
    { key: "D", text: "Sugar alcohols provide about 2 kilocalories per gram and have a reduced cariogenic potential." }
  ],
  correctAnswer: "D",
  rationale: "Sugar alcohols such as xylitol and sorbitol provide approximately 2 kilocalories per gram and have reduced cariogenic potential because oral bacteria cannot efficiently ferment them.",
  incorrectRationales: {
    A: "Nine kilocalories per gram applies to fat, not sugar alcohols.",
    B: "Sugar alcohols are not essential fatty acids and do not increase caries risk.",
    C: "Seven kilocalories per gram applies to alcohol, not sugar alcohols."
  },
  boardTrap: "Calorie value swaps are common board traps: 2 for sugar alcohols, 4 for carbs, 7 for alcohol, 9 for fat.",
  memoryHook: "Sugar alcohols: 2 little calories, 2 little cavities."
},
{
  id: "nut-003",
  type: "mastery",
  subject: "Prevention Science & Public Health",
  topic: "Sugar Conversions",
  difficulty: "easy",
  question: "How many grams of sugar are contained in one teaspoon of table sugar?",
  choices: [
    { key: "A", text: "1 gram" },
    { key: "B", text: "Approximately 4 grams" },
    { key: "C", text: "About 7 grams" },
    { key: "D", text: "More than 10 grams" }
  ],
  correctAnswer: "B",
  rationale: "One teaspoon of sucrose contains approximately 4 grams of sugar, a standard nutritional conversion used in dietary counseling.",
  incorrectRationales: {
    A: "One gram significantly underestimates the sugar content.",
    C: "Seven grams is closer to two teaspoons.",
    D: "More than 10 grams exceeds the amount in one teaspoon."
  },
  boardTrap: "Students often confuse teaspoons with grams and assume 1 teaspoon equals 1 gram.",
  memoryHook: "1 teaspoon = 4 grams."
},
{
  id: "nut-004",
  type: "mastery",
  subject: "Prevention Science & Public Health",
  topic: "Diet Definition",
  difficulty: "easy",
  question: "Which definition best reflects the correct meaning of the term 'diet' in health recommendations?",
  choices: [
    { key: "A", text: "A short-term meal pattern used for rapid weight loss." },
    { key: "B", text: "A structured food plan followed only for medical treatment." },
    { key: "C", text: "A fixed list of restricted foods designed to lower calorie intake." },
    { key: "D", text: "The customary pattern of food and beverage intake of an individual or group." }
  ],
  correctAnswer: "D",
  rationale: "Diet refers to the usual pattern of food and beverage intake consumed by an individual or population, not a temporary or restrictive plan.",
  incorrectRationales: {
    A: "Short-term weight loss plans are fad diets.",
    B: "Medical food plans are therapeutic diets.",
    C: "Restricted calorie lists do not define the general term diet."
  },
  boardTrap: "Boards test the true definition of diet versus popular culture interpretations.",
  memoryHook: "Diet = Daily Intake Every Time."
},
{
  id: "nut-005",
  type: "mastery",
  subject: "Prevention Science & Public Health",
  topic: "Nutrients",
  difficulty: "easy",
  question: "Which definition best describes nutrients?",
  choices: [
    { key: "A", text: "Substances that provide flavor and texture but no physiological function." },
    { key: "B", text: "Chemical substances in food required for energy, growth, maintenance, and regulation of body processes." },
    { key: "C", text: "Foods that must be avoided to maintain oral and systemic wellness." },
    { key: "D", text: "Components added solely to enhance shelf stability." }
  ],
  correctAnswer: "B",
  rationale: "Nutrients are chemical substances required for energy production, tissue growth, maintenance, and regulation of metabolic processes.",
  incorrectRationales: {
    A: "Flavoring agents are non-nutritive additives.",
    C: "Restrictions do not define nutrients.",
    D: "Preservatives are not nutrients."
  },
  boardTrap: "Nutrients must support physiological function.",
  memoryHook: "Nutrients = Needed."
},
{
  id: "nut-006",
  type: "mastery",
  subject: "Prevention Science & Public Health",
  topic: "Enriched Foods",
  difficulty: "medium",
  question: "Which term describes refined foods that have had specific nutrients added back after processing to replace what was lost?",
  choices: [
    { key: "A", text: "Enriched" },
    { key: "B", text: "Fortified" },
    { key: "C", text: "Supplemented" },
    { key: "D", text: "Enhanced" }
  ],
  correctAnswer: "A",
  rationale: "Enriched foods have nutrients replaced after refinement removes them, commonly B vitamins and iron in grain products.",
  incorrectRationales: {
    B: "Fortification adds nutrients not originally present.",
    C: "Supplementation adds extra amounts beyond original levels.",
    D: "Enhanced is a marketing term without formal definition."
  },
  boardTrap: "Enriched = replaced. Fortified = added.",
  memoryHook: "Enriched = re-placed."
},
{
  id: "nut-007",
  type: "mastery",
  subject: "Prevention Science & Public Health",
  topic: "Fortified Foods",
  difficulty: "medium",
  question: "Which term describes adding nutrients that were not originally present in a food?",
  choices: [
    { key: "A", text: "Enriched" },
    { key: "B", text: "Supplemented" },
    { key: "C", text: "Enhanced" },
    { key: "D", text: "Fortified" }
  ],
  correctAnswer: "D",
  rationale: "Fortified foods have nutrients added that were not originally present in meaningful amounts.",
  incorrectRationales: {
    A: "Enriched refers to replacing nutrients lost during processing.",
    B: "Supplementation adds extra amounts of existing nutrients.",
    C: "Enhanced is not a standardized nutritional term."
  },
  boardTrap: "Fortified = nutrients added that were never there.",
  memoryHook: "Fortified = fort added on top."
},
{
  id: "nut-008",
  type: "mastery",
  subject: "Prevention Science & Public Health",
  topic: "Bioavailability",
  difficulty: "medium",
  question: "Which term describes the extent to which a nutrient is absorbed and utilized by the body?",
  choices: [
    { key: "A", text: "Nutrient density" },
    { key: "B", text: "Fortification" },
    { key: "C", text: "Bioavailability" },
    { key: "D", text: "Metabolic turnover" }
  ],
  correctAnswer: "C",
  rationale: "Bioavailability refers to the degree and rate at which a nutrient is absorbed and becomes available for use in the body.",
  incorrectRationales: {
    A: "Nutrient density refers to nutrient amount per calorie.",
    B: "Fortification refers to adding nutrients during processing.",
    D: "Metabolic turnover refers to tissue replacement, not absorption."
  },
  boardTrap: "Absorption ≠ density. Absorption = bioavailability.",
  memoryHook: "Bioavailability = body available."
},
{
  id: "nut-009",
  type: "mastery",
  subject: "Prevention Science & Public Health",
  topic: "Organic Nutrients",
  difficulty: "medium",
  question: "In nutrition science, what does it mean when a nutrient is described as organic?",
  choices: [
    { key: "A", text: "It contains carbon-based structures." },
    { key: "B", text: "It is produced without synthetic pesticides." },
    { key: "C", text: "It provides energy when metabolized." },
    { key: "D", text: "It is derived exclusively from plants." }
  ],
  correctAnswer: "A",
  rationale: "Organic nutrients contain carbon. This classification refers to chemical structure, not agricultural practices.",
  incorrectRationales: {
    B: "That refers to farming practices.",
    C: "Not all organic nutrients provide energy.",
    D: "Organic nutrients are not limited to plant sources."
  },
  boardTrap: "Organic nutrient ≠ organic farming.",
  memoryHook: "Organic = carbon."
},
{
  id: "nut-010",
  type: "mastery",
  subject: "Prevention Science & Public Health",
  topic: "Inorganic Nutrients",
  difficulty: "medium",
  question: "In nutrition science, what does it mean when a nutrient is classified as inorganic?",
  choices: [
    { key: "A", text: "It does not contain carbon and is derived from minerals in soil or water." },
    { key: "B", text: "It is formed only through plant-based metabolism." },
    { key: "C", text: "It contains carbon but provides no energy." },
    { key: "D", text: "It is synthetically created during food processing." }
  ],
  correctAnswer: "A",
  rationale: "Inorganic nutrients lack carbon structures and include minerals such as calcium, magnesium, and iron.",
  incorrectRationales: {
    B: "Plant metabolites contain carbon and are organic.",
    C: "Carbon-containing compounds are organic.",
    D: "Synthetic production does not determine organic classification."
  },
  boardTrap: "Organic = carbon. Inorganic = no carbon.",
  memoryHook: "Inorganic = in-earth minerals."
},
{
  id: "nut-011",
  type: "mastery",
  subject: "Prevention Science & Public Health",
  topic: "Legumes",
  difficulty: "medium",
  question: "All of the following are considered legumes EXCEPT:",
  choices: [
    { key: "A", text: "Lentils" },
    { key: "B", text: "Chickpeas" },
    { key: "C", text: "Black beans" },
    { key: "D", text: "Quinoa" }
  ],
  correctAnswer: "D",
  rationale: "Quinoa is a seed (pseudocereal), not a legume. Lentils, chickpeas, and black beans are true legumes belonging to the pulse family.",
  incorrectRationales: {
    A: "Lentils are legumes.",
    B: "Chickpeas are legumes.",
    C: "Black beans are legumes."
  },
  boardTrap: "Quinoa behaves nutritionally like a plant protein but botanically is a seed.",
  memoryHook: "Legumes grow in pods. Quinoa does not."
},
{
  id: "nut-012",
  type: "mastery",
  subject: "Prevention Science & Public Health",
  topic: "Oral pH",
  difficulty: "medium",
  question: "Which value best represents the normal resting pH of the oral cavity?",
  choices: [
    { key: "A", text: "5.5" },
    { key: "B", text: "7.0" },
    { key: "C", text: "6.5" },
    { key: "D", text: "4.0" }
  ],
  correctAnswer: "B",
  rationale: "The normal resting pH of the oral cavity is approximately 7.0, which supports saliva’s buffering capacity and enamel stability.",
  incorrectRationales: {
    A: "5.5 is the critical pH for enamel demineralization.",
    C: "6.5 is the critical pH for root surface demineralization.",
    D: "4.0 is excessively acidic and not physiologic."
  },
  boardTrap: "7.0 = normal. 5.5 = enamel critical. 6.5 = root critical.",
  memoryHook: "7 is safe. 5.5 breaks enamel. 6.5 breaks roots."
},
{
  id: "nut-013",
  type: "mastery",
  subject: "Prevention Science & Public Health",
  topic: "Caries Process",
  difficulty: "medium",
  question: "Which combination represents the essential requirements for dental caries formation?",
  choices: [
    { key: "A", text: "Cariogenic bacteria, a susceptible host, fermentable carbohydrates, and a decrease in oral pH" },
    { key: "B", text: "Frequent brushing, intact enamel, and high-protein intake" },
    { key: "C", text: "Neutral saliva and low-acid diet" },
    { key: "D", text: "High fluoride exposure and strong buffering" }
  ],
  correctAnswer: "A",
  rationale: "Dental caries require cariogenic bacteria, a susceptible host, fermentable carbohydrates, and a drop in oral pH.",
  incorrectRationales: {
    B: "These are protective factors.",
    C: "Without acidogenic bacteria and pH drop, caries cannot occur.",
    D: "These lower caries risk."
  },
  boardTrap: "Caries is multifactorial — all components must be present.",
  memoryHook: "Bacteria + Sugar + Tooth + pH Drop = Cavity."
},
{
  id: "nut-014",
  type: "mastery",
  subject: "Prevention Science & Public Health",
  topic: "Thermic Effect of Food",
  difficulty: "hard",
  question: "Which concept describes the energy required for digestion, absorption, and metabolism of nutrients after eating?",
  choices: [
    { key: "A", text: "Basal metabolic rate" },
    { key: "B", text: "Resting energy expenditure" },
    { key: "C", text: "Adaptive thermogenesis" },
    { key: "D", text: "Specific dynamic action (thermic effect of food)" }
  ],
  correctAnswer: "D",
  rationale: "Specific Dynamic Action, also known as the thermic effect of food, represents the energy used to digest, absorb, and metabolize nutrients.",
  incorrectRationales: {
    A: "BMR reflects minimal energy required at rest.",
    B: "Resting expenditure does not specifically refer to digestion energy.",
    C: "Adaptive thermogenesis relates to stress responses like cold exposure."
  },
  boardTrap: "Warmth after meals indicates thermic effect of food.",
  memoryHook: "Heat after you eat."
},
{
  id: "nut-015",
  type: "mastery",
  subject: "Prevention Science & Public Health",
  topic: "BMI",
  difficulty: "medium",
  question: "Which statement best describes Body Mass Index (BMI)?",
  choices: [
    { key: "A", text: "It measures body fat using skinfold thickness." },
    { key: "B", text: "It evaluates waist-to-hip ratio." },
    { key: "C", text: "It is calculated by dividing weight in kilograms by height in meters squared, with 25–29.9 classified as overweight." },
    { key: "D", text: "It assesses lean body mass percentage." }
  ],
  correctAnswer: "C",
  rationale: "BMI = kg ÷ m². 25–29.9 is overweight, 30–39.9 obese, ≥40 extreme obesity.",
  incorrectRationales: {
    A: "Skinfold testing measures body fat percentage.",
    B: "Waist-to-hip ratio measures fat distribution.",
    D: "Lean body mass analysis is different from BMI."
  },
  boardTrap: "Boards disguise BMI by describing weight/height comparison.",
  memoryHook: "BMI = Kg over M²."
},
{
  id: "nut-016",
  type: "mastery",
  subject: "Prevention Science & Public Health",
  topic: "Hypothalamus",
  difficulty: "medium",
  question: "Which brain structure regulates hunger, thirst, temperature, and homeostasis?",
  choices: [
    { key: "A", text: "Cerebellum" },
    { key: "B", text: "Medulla oblongata" },
    { key: "C", text: "Hypothalamus" },
    { key: "D", text: "Parietal lobe" }
  ],
  correctAnswer: "C",
  rationale: "The hypothalamus regulates hunger, thirst, body temperature, endocrine function, and homeostasis.",
  incorrectRationales: {
    A: "Cerebellum coordinates movement.",
    B: "Medulla regulates respiration and heart rate.",
    D: "Parietal lobe handles sensory processing."
  },
  boardTrap: "Fluctuating hunger and temperature point to hypothalamus.",
  memoryHook: "Hypothalamus = Homeostasis headquarters."
},
{
  id: "nut-017",
  type: "mastery",
  subject: "Prevention Science & Public Health",
  topic: "Monosaccharides",
  difficulty: "hard",
  question: "Which statement correctly describes major monosaccharides?",
  choices: [
    { key: "A", text: "Glucose is stored as glycogen in the liver, galactose is derived from milk, and fructose is the sweetest monosaccharide." },
    { key: "B", text: "Glucose is only found in fruit." },
    { key: "C", text: "Fructose fuels the brain primarily." },
    { key: "D", text: "Galactose forms from starch breakdown." }
  ],
  correctAnswer: "A",
  rationale: "Glucose is stored as glycogen, galactose is from milk, and fructose is the sweetest natural sugar.",
  incorrectRationales: {
    B: "Glucose is widely distributed in foods.",
    C: "The brain primarily uses glucose.",
    D: "Starch breaks down into glucose."
  },
  boardTrap: "Fructose = sweetest. Brain uses glucose.",
  memoryHook: "G-Liver, G-Milk, F-Fruit."
},
{
  id: "nut-018",
  type: "mastery",
  subject: "Prevention Science & Public Health",
  topic: "Disaccharides",
  difficulty: "hard",
  question: "Which pairing correctly identifies major disaccharides?",
  choices: [
    { key: "A", text: "Sucrose = glucose + fructose; lactose = glucose + galactose; maltose = glucose + glucose" },
    { key: "B", text: "Sucrose = glucose + glucose" },
    { key: "C", text: "Lactose = fructose + galactose" },
    { key: "D", text: "Maltose = fructose + glucose" }
  ],
  correctAnswer: "A",
  rationale: "Sucrose is glucose + fructose and strongly linked to caries. Lactose is glucose + galactose. Maltose is glucose + glucose.",
  incorrectRationales: {
    B: "Sucrose is not two glucose molecules.",
    C: "Lactose is not fructose-based.",
    D: "Maltose is glucose + glucose."
  },
  boardTrap: "Sucrose uniquely allows dextran production by S. mutans.",
  memoryHook: "Su-G-F, Lac-G-Ga, Mal-G-G."
},
{
  id: "nut-019",
  type: "mastery",
  subject: "Prevention Science & Public Health",
  topic: "Saccharin",
  difficulty: "medium",
  question: "Which artificial sweetener is most associated with a bitter or metallic aftertaste?",
  choices: [
    { key: "A", text: "Saccharin" },
    { key: "B", text: "Aspartame" },
    { key: "C", text: "Sucralose" },
    { key: "D", text: "Acesulfame-K" }
  ],
  correctAnswer: "A",
  rationale: "Saccharin is known for its metallic or bitter aftertaste, especially in hot beverages.",
  incorrectRationales: {
    B: "Aspartame tastes closer to sugar.",
    C: "Sucralose does not typically produce metallic aftertaste.",
    D: "Acesulfame-K is often blended to improve taste."
  },
  boardTrap: "Metallic aftertaste = Saccharin.",
  memoryHook: "Saccharin = Sacri-bitter."
},
{
  id: "nut-020",
  type: "mastery",
  subject: "Prevention Science & Public Health",
  topic: "Aspartame",
  difficulty: "hard",
  question: "Which artificial sweetener requires a PKU warning due to phenylalanine content?",
  choices: [
    { key: "A", text: "Saccharin" },
    { key: "B", text: "Aspartame" },
    { key: "C", text: "Sucralose" },
    { key: "D", text: "Acesulfame-K" }
  ],
  correctAnswer: "B",
  rationale: "Aspartame is composed of phenylalanine and aspartic acid and requires a PKU warning.",
  incorrectRationales: {
    A: "Saccharin does not contain phenylalanine.",
    C: "Sucralose does not require a PKU warning.",
    D: "Acesulfame-K does not contain phenylalanine."
  },
  boardTrap: "PKU warning = Aspartame.",
  memoryHook: "A for Aspartame = Amino acids."
},
{
  id: "nut-021",
  type: "mastery",
  subject: "Prevention Science & Public Health",
  topic: "Acesulfame-K",
  difficulty: "medium",
  question: "Which artificial sweetener is heat-stable and suitable for cooking and baking?",
  choices: [
    { key: "A", text: "Saccharin" },
    { key: "B", text: "Aspartame" },
    { key: "C", text: "Stevia" },
    { key: "D", text: "Acesulfame-K" }
  ],
  correctAnswer: "D",
  rationale: "Acesulfame-K maintains sweetness at high temperatures and is suitable for baking.",
  incorrectRationales: {
    A: "Saccharin may produce unpleasant aftertaste when heated.",
    B: "Aspartame breaks down with heat.",
    C: "Stevia may alter flavor at high temperatures."
  },
  boardTrap: "Heat-stable = Acesulfame-K.",
  memoryHook: "Acesulfame-K = A-OK in heat."
},
{
  id: "nut-022",
  type: "mastery",
  subject: "Prevention Science & Public Health",
  topic: "Neotame",
  difficulty: "hard",
  question: "Which statement correctly describes Neotame?",
  choices: [
    { key: "A", text: "It contains phenylalanine and must carry a PKU warning on all labels." },
    { key: "B", text: "It does not require a PKU warning because phenylalanine is not released during digestion." },
    { key: "C", text: "It is approved only for tabletop sweeteners." },
    { key: "D", text: "It is not heat-stable and cannot be used in baking." }
  ],
  correctAnswer: "B",
  rationale: "Neotame is structurally related to aspartame but chemically modified so phenylalanine is not released during digestion. Therefore, it does not require a PKU warning and is heat-stable.",
  incorrectRationales: {
    A: "This describes aspartame.",
    C: "Neotame is approved for a wide range of foods.",
    D: "Neotame is heat-stable."
  },
  boardTrap: "Aspartame requires a PKU warning. Neotame does not.",
  memoryHook: "Neo = New aspartame, no PKU problem."
},
{
  id: "nut-023",
  type: "mastery",
  subject: "Prevention Science & Public Health",
  topic: "Post-Eruptive Carbohydrate Effect",
  difficulty: "medium",
  question: "Which statement best describes a key post-eruptive effect of carbohydrate intake on dental tissues?",
  choices: [
    { key: "A", text: "Carbohydrates strengthen enamel by increasing mineral uptake." },
    { key: "B", text: "Carbohydrates neutralize salivary acids." },
    { key: "C", text: "Carbohydrates increase fluoride incorporation." },
    { key: "D", text: "Carbohydrates serve as substrate for bacterial metabolism, producing acid." }
  ],
  correctAnswer: "D",
  rationale: "After eruption, carbohydrates provide fermentable substrate for oral bacteria, leading to acid production and enamel demineralization.",
  incorrectRationales: {
    A: "Carbohydrates do not strengthen enamel.",
    B: "They promote acid production, not neutralization.",
    C: "They do not enhance fluoride incorporation."
  },
  boardTrap: "Post-eruptive effect = bacterial acid production.",
  memoryHook: "Carbs feed bacteria. Bacteria feed acid."
},
{
  id: "nut-024",
  type: "mastery",
  subject: "Prevention Science & Public Health",
  topic: "HbA1c Interpretation",
  difficulty: "hard",
  question: "Which statement correctly describes HbA1c interpretation?",
  choices: [
    { key: "A", text: "5.7–6.4% is normal." },
    { key: "B", text: "6.0% confirms diabetes." },
    { key: "C", text: "Normal is <5.7%, pre-diabetes is 5.7–6.4%, diabetes ≥6.5%." },
    { key: "D", text: "Values above 6.8% indicate good control." }
  ],
  correctAnswer: "C",
  rationale: "Normal HbA1c is <5.7%. Pre-diabetes is 5.7–6.4%. Diabetes is ≥6.5%. Good control aims for values below 6.5%.",
  incorrectRationales: {
    A: "5.7–6.4% is pre-diabetes.",
    B: "Diabetes begins at 6.5%.",
    D: "Values above 6.5% reflect poorer control."
  },
  boardTrap: "6.5 divides the line.",
  memoryHook: "5.7 starts the slide. 6.5 divides."
},
{
  id: "nut-025",
  type: "mastery",
  subject: "Prevention Science & Public Health",
  topic: "Obesity & Periodontal Disease",
  difficulty: "hard",
  question: "Which mechanism best explains how obesity may worsen periodontal breakdown?",
  choices: [
    { key: "A", text: "Reduced salivary buffering capacity" },
    { key: "B", text: "Direct carbohydrate-driven bacterial overgrowth" },
    { key: "C", text: "Decreased vitamin D absorption" },
    { key: "D", text: "Elevated TNF-α and IL-6 amplify systemic inflammation" }
  ],
  correctAnswer: "D",
  rationale: "Excess adipose tissue produces pro-inflammatory cytokines such as TNF-α and IL-6, amplifying systemic and periodontal inflammation.",
  incorrectRationales: {
    A: "Not the primary mechanism.",
    B: "Diet alone does not explain cytokine-mediated inflammation.",
    C: "Not the dominant inflammatory pathway."
  },
  boardTrap: "Obesity = inflammatory state.",
  memoryHook: "Fat fires cytokines."
},
{
  id: "nut-026",
  type: "mastery",
  subject: "Prevention Science & Public Health",
  topic: "Thiamine Deficiency",
  difficulty: "hard",
  question: "Which deficiency is associated with neurologic changes, nystagmus, and cardiac abnormalities in chronic alcohol use?",
  choices: [
    { key: "A", text: "Vitamin B2 deficiency" },
    { key: "B", text: "Vitamin B1 deficiency" },
    { key: "C", text: "Vitamin B6 deficiency" },
    { key: "D", text: "Vitamin B12 deficiency" }
  ],
  correctAnswer: "B",
  rationale: "Thiamine deficiency causes beriberi, associated with neurologic impairment, nystagmus, and cardiac involvement, especially in chronic alcohol use.",
  incorrectRationales: {
    A: "Riboflavin deficiency causes cheilosis and glossitis.",
    C: "B6 deficiency does not cause cardiac instability.",
    D: "B12 deficiency causes macrocytic anemia and neuropathy."
  },
  boardTrap: "Alcohol + heart + neuro = B1.",
  memoryHook: "B1 = Brain + Beats."
},
{
  id: "nut-027",
  type: "mastery",
  subject: "Prevention Science & Public Health",
  topic: "Vitamin B12 Deficiency",
  difficulty: "hard",
  question: "Which deficiency causes macrocytic anemia with neurologic symptoms in patients avoiding animal products?",
  choices: [
    { key: "A", text: "Vitamin B12 deficiency" },
    { key: "B", text: "Folate deficiency" },
    { key: "C", text: "Iron deficiency" },
    { key: "D", text: "Vitamin B6 deficiency" }
  ],
  correctAnswer: "A",
  rationale: "Vitamin B12 deficiency causes macrocytic anemia and neurologic symptoms, particularly in individuals avoiding animal products.",
  incorrectRationales: {
    B: "Folate deficiency causes macrocytic anemia but no neurologic symptoms.",
    C: "Iron deficiency causes microcytic anemia.",
    D: "B6 deficiency does not cause macrocytosis."
  },
  boardTrap: "Neurologic signs = B12, not folate.",
  memoryHook: "B12 = Brain + Blood."
},
{
  id: "nut-028",
  type: "mastery",
  subject: "Prevention Science & Public Health",
  topic: "Vitamin C Deficiency",
  difficulty: "hard",
  question: "Which deficiency leads to gingival bleeding, petechiae, and impaired wound healing?",
  choices: [
    { key: "A", text: "Iron deficiency" },
    { key: "B", text: "Vitamin C deficiency" },
    { key: "C", text: "Zinc deficiency" },
    { key: "D", text: "Vitamin K deficiency" }
  ],
  correctAnswer: "B",
  rationale: "Vitamin C deficiency impairs collagen synthesis and capillary integrity, leading to gingival bleeding and poor wound healing.",
  incorrectRationales: {
    A: "Iron deficiency causes pallor and fatigue.",
    C: "Zinc affects immunity but not collagen synthesis.",
    D: "Vitamin K affects clotting factors, not connective tissue integrity."
  },
  boardTrap: "Bleeding + spongy gingiva + poor diet = Vitamin C.",
  memoryHook: "C = Collagen + Capillaries."
},
{
  id: "nut-029",
  type: "mastery",
  subject: "Prevention Science & Public Health",
  topic: "Vitamin A Deficiency",
  difficulty: "hard",
  question: "Which nutritional deficiency best explains night blindness, xerophthalmia, hyperkeratinized oral mucosa, and delayed epithelial healing?",
  choices: [
    { key: "A", text: "Vitamin A" },
    { key: "B", text: "Vitamin C" },
    { key: "C", text: "Iron" },
    { key: "D", text: "Riboflavin (B2)" }
  ],
  correctAnswer: "A",
  rationale: "Vitamin A is essential for epithelial cell differentiation and rhodopsin production for night vision. Deficiency leads to xerophthalmia, hyperkeratinized mucosa, delayed healing, and night blindness.",
  incorrectRationales: {
    B: "Vitamin C deficiency causes gingival bleeding and impaired collagen synthesis, not night blindness.",
    C: "Iron deficiency causes fatigue and pallor, not epithelial keratinization or visual disturbances.",
    D: "Riboflavin deficiency causes angular cheilitis and glossitis, not hyperkeratinization."
  },
  boardTrap: "Night blindness + rough mucosa = epithelial differentiation problem → Vitamin A.",
  memoryHook: "A for After-dark vision and Appearance of mucosa."
},
{
  id: "nut-030",
  type: "mastery",
  subject: "Prevention Science & Public Health",
  topic: "Vitamin D & Bone Density",
  difficulty: "hard",
  question: "Which nutritional deficiency most likely contributes to generalized bone pain, increased periodontal bone loss, and delayed healing in patients with low sun exposure?",
  choices: [
    { key: "A", text: "Vitamin A" },
    { key: "B", text: "Vitamin D" },
    { key: "C", text: "Vitamin K" },
    { key: "D", text: "Magnesium" }
  ],
  correctAnswer: "B",
  rationale: "Vitamin D is required for calcium absorption and proper bone mineralization. Deficiency leads to osteomalacia, bone pain, reduced alveolar bone density, and impaired periodontal healing.",
  incorrectRationales: {
    A: "Vitamin A deficiency affects epithelial tissues and vision, not mineralized bone density.",
    C: "Vitamin K affects clotting and osteocalcin activation but does not cause osteomalacia.",
    D: "Magnesium plays a supportive role but does not explain widespread bone demineralization."
  },
  boardTrap: "Low sun exposure + bone loss disproportionate to plaque = Vitamin D.",
  memoryHook: "D = Density."
},
{
  id: "nut-031",
  type: "mastery",
  subject: "Prevention Science & Public Health",
  topic: "Vitamin K & Bone Remodeling",
  difficulty: "hard",
  question: "Which deficiency is associated with delayed postoperative bone maturation and mild persistent bleeding following periodontal surgery, especially in patients with long-term antibiotic use?",
  choices: [
    { key: "A", text: "Vitamin B6" },
    { key: "B", text: "Vitamin E" },
    { key: "C", text: "Vitamin A" },
    { key: "D", text: "Vitamin K" }
  ],
  correctAnswer: "D",
  rationale: "Vitamin K activates osteocalcin for bone mineralization and clotting factors for coagulation. Antibiotic use disrupts gut flora, reducing vitamin K synthesis and impairing bone remodeling and hemostasis.",
  incorrectRationales: {
    A: "B6 deficiency causes neuropathy, not bone remodeling delay.",
    B: "Vitamin E excess may affect clotting but does not impair osteocalcin activation.",
    C: "Vitamin A affects epithelial tissues, not bone graft mineralization."
  },
  boardTrap: "Antibiotics + bone healing delay = think gut-derived Vitamin K.",
  memoryHook: "K = Klotting + Kalcium."
},
{
  id: "nut-032",
  type: "mastery",
  subject: "Prevention Science & Public Health",
  topic: "Iodine Deficiency",
  difficulty: "hard",
  question: "Which nutritional deficiency causes delayed tooth eruption, enlarged tongue, fatigue, and growth delay in children using non-iodized salt?",
  choices: [
    { key: "A", text: "Iron" },
    { key: "B", text: "Iodine" },
    { key: "C", text: "Folate" },
    { key: "D", text: "Vitamin D" }
  ],
  correctAnswer: "B",
  rationale: "Iodine is required for thyroid hormone production. Deficiency leads to hypothyroidism, delayed growth, macroglossia, cognitive slowing, and delayed tooth eruption.",
  incorrectRationales: {
    A: "Iron deficiency causes anemia and fatigue but not delayed eruption.",
    C: "Folate deficiency causes macrocytic anemia, not thyroid dysfunction.",
    D: "Vitamin D deficiency affects mineralization but not thyroid-mediated growth delay."
  },
  boardTrap: "Non-iodized salt + slow growth + enlarged tongue = thyroid issue.",
  memoryHook: "Iodine drives the thyroid."
},
{
  id: "nut-033",
  type: "mastery",
  subject: "Prevention Science & Public Health",
  topic: "Selenium & Antioxidant Defense",
  difficulty: "hard",
  question: "Which deficiency impairs glutathione peroxidase activity, increasing oxidative stress and prolonging periodontal inflammation?",
  choices: [
    { key: "A", text: "Zinc" },
    { key: "B", text: "Selenium" },
    { key: "C", text: "Copper" },
    { key: "D", text: "Vitamin E" }
  ],
  correctAnswer: "B",
  rationale: "Selenium is required for glutathione peroxidase, a key antioxidant enzyme that reduces oxidative stress and supports immune regulation during periodontal healing.",
  incorrectRationales: {
    A: "Zinc supports immunity but is not the primary cofactor for glutathione peroxidase.",
    C: "Copper is involved in connective tissue enzymes but not this antioxidant pathway.",
    D: "Vitamin E is an antioxidant but does not serve as the cofactor in this enzyme system."
  },
  boardTrap: "Antioxidant enzyme = think selenium, not just vitamin E.",
  memoryHook: "Selenium = Shield."
},
{
  id: "nut-034",
  type: "mastery",
  subject: "Prevention Science & Public Health",
  topic: "Folate Deficiency",
  difficulty: "hard",
  question: "Which nutritional deficiency is associated with smooth, erythematous tongue, fatigue, and long-term oral contraceptive use without neurologic symptoms?",
  choices: [
    { key: "A", text: "Vitamin B12" },
    { key: "B", text: "Iron" },
    { key: "C", text: "Folate (B9)" },
    { key: "D", text: "Niacin" }
  ],
  correctAnswer: "C",
  rationale: "Oral contraceptives reduce folate levels. Folate deficiency causes glossitis, fatigue, mucosal pallor, and impaired DNA synthesis without neurologic involvement.",
  incorrectRationales: {
    A: "B12 deficiency would include neurologic symptoms.",
    B: "Iron deficiency causes pallor but not the characteristic smooth tongue of folate deficiency.",
    D: "Niacin deficiency presents with dermatitis, diarrhea, and dementia."
  },
  boardTrap: "Pill use + smooth tongue + no neuro signs = folate, not B12.",
  memoryHook: "B9 drops with the pill."
},
{
  id: "nut-035",
  type: "mastery",
  subject: "Prevention Science & Public Health",
  topic: "Chromium & Glucose Control",
  difficulty: "hard",
  question: "Which nutrient deficiency is most likely contributing to impaired insulin sensitivity, elevated fasting glucose, and exaggerated inflammatory response in a patient consuming a diet high in refined carbohydrates?",
  choices: [
    { key: "A", text: "Zinc" },
    { key: "B", text: "Magnesium" },
    { key: "C", text: "Chromium" },
    { key: "D", text: "Vitamin B6" }
  ],
  correctAnswer: "C",
  rationale: "Chromium enhances insulin receptor activity and improves glucose tolerance. Diets high in refined carbohydrates increase chromium loss and impair insulin sensitivity, contributing to elevated glucose and increased inflammation.",
  incorrectRationales: {
    A: "Zinc supports immune function and healing but does not directly regulate insulin sensitivity.",
    B: "Magnesium affects neuromuscular function and glucose metabolism but is not the primary mineral linked to insulin receptor activity in this context.",
    D: "Vitamin B6 deficiency is associated with neuropathy and cheilosis, not impaired glucose regulation."
  },
  boardTrap: "Borderline glucose + refined carbs + inflammation = think chromium.",
  memoryHook: "Chromium = Controls glucose."
},
{
  id: "nut-036",
  type: "mastery",
  subject: "Prevention Science & Public Health",
  topic: "Protein & Wound Healing",
  difficulty: "hard",
  question: "Which macronutrient deficiency most directly impairs collagen synthesis, fibroblast proliferation, and postoperative wound healing?",
  choices: [
    { key: "A", text: "Protein" },
    { key: "B", text: "Carbohydrate" },
    { key: "C", text: "Fat" },
    { key: "D", text: "Omega-6 fatty acids" }
  ],
  correctAnswer: "A",
  rationale: "Protein is essential for collagen formation, angiogenesis, immune function, and tissue repair. Inadequate intake leads to delayed healing and fragile granulation tissue.",
  incorrectRationales: {
    B: "Carbohydrates provide energy but do not directly impair collagen synthesis.",
    C: "Fat deficiency affects hormone production but is not the primary cause of delayed wound healing.",
    D: "Omega-6 fatty acids influence inflammation but are not the central macronutrient for tissue repair."
  },
  boardTrap: "Surgical site that will not close = protein deficiency.",
  memoryHook: "Protein patches the wound."
},
{
  id: "nut-037",
  type: "mastery",
  subject: "Prevention Science & Public Health",
  topic: "Potassium & Electrolyte Balance",
  difficulty: "hard",
  question: "Which electrolyte imbalance is most commonly associated with diuretic use, muscle weakness, fatigue, and cardiac arrhythmias?",
  choices: [
    { key: "A", text: "Sodium" },
    { key: "B", text: "Calcium" },
    { key: "C", text: "Potassium" },
    { key: "D", text: "Magnesium" }
  ],
  correctAnswer: "C",
  rationale: "Diuretics commonly cause potassium depletion. Hypokalemia leads to arrhythmias, muscle weakness, fatigue, and impaired cellular function.",
  incorrectRationales: {
    A: "Sodium imbalance affects fluid status but is less associated with arrhythmias in this pattern.",
    B: "Calcium imbalance causes tetany or neuromuscular irritability rather than classic diuretic-induced weakness.",
    D: "Magnesium deficiency may cause arrhythmias but is not the most common electrolyte lost with diuretics."
  },
  boardTrap: "New diuretic + irregular pulse = potassium loss.",
  memoryHook: "K keeps the heart steady."
},
{
  id: "nut-038",
  type: "mastery",
  subject: "Prevention Science & Public Health",
  topic: "Omega-3 & Inflammation",
  difficulty: "hard",
  question: "Which deficiency contributes to exaggerated periodontal inflammation despite excellent plaque control and absence of local irritants?",
  choices: [
    { key: "A", text: "Vitamin E" },
    { key: "B", text: "Omega-3 fatty acids" },
    { key: "C", text: "Saturated fats" },
    { key: "D", text: "Zinc" }
  ],
  correctAnswer: "B",
  rationale: "Omega-3 fatty acids (EPA/DHA) reduce inflammatory cytokines and modulate immune response. Deficiency results in increased systemic and periodontal inflammation.",
  incorrectRationales: {
    A: "Vitamin E is an antioxidant but does not directly regulate inflammatory cytokine pathways like omega-3s.",
    C: "Saturated fat excess increases inflammation, but this question asks about deficiency.",
    D: "Zinc deficiency affects immunity but does not specifically drive exaggerated inflammatory cytokine response."
  },
  boardTrap: "Inflammation out of proportion to plaque = systemic inflammatory imbalance.",
  memoryHook: "Omega-3 eases inflammation."
},
{
  id: "nut-039",
  type: "mastery",
  subject: "Prevention Science & Public Health",
  topic: "Glycemic Index & Inflammation",
  difficulty: "hard",
  question: "Which dietary pattern most directly increases oxidative stress and inflammatory cytokine production, worsening periodontal inflammation?",
  choices: [
    { key: "A", text: "Low-sodium intake" },
    { key: "B", text: "High-protein intake" },
    { key: "C", text: "Omega-3 rich intake" },
    { key: "D", text: "Frequent high–glycemic index foods" }
  ],
  correctAnswer: "D",
  rationale: "High–glycemic index foods cause rapid glucose spikes, oxidative stress, and increased inflammatory mediator release, exacerbating periodontal inflammation.",
  incorrectRationales: {
    A: "Low sodium does not influence inflammatory cytokine production.",
    B: "High protein intake supports healing rather than increasing inflammation.",
    C: "Omega-3 fatty acids reduce inflammatory responses."
  },
  boardTrap: "Fast sugar = fast spike = fast inflammation.",
  memoryHook: "High GI = High inflammation."
},
{
  id: "nut-040",
  type: "mastery",
  subject: "Prevention Science & Public Health",
  topic: "Dietary Fiber & Glycemic Control",
  difficulty: "hard",
  question: "Which nutritional deficiency contributes to glycemic instability, constipation, increased cravings, and exaggerated inflammatory response?",
  choices: [
    { key: "A", text: "Low protein intake" },
    { key: "B", text: "Low calcium intake" },
    { key: "C", text: "Low dietary fiber intake" },
    { key: "D", text: "Low omega-6 fatty acid intake" }
  ],
  correctAnswer: "C",
  rationale: "Dietary fiber slows glucose absorption, improves glycemic stability, supports gut microbiota, and reduces systemic inflammation.",
  incorrectRationales: {
    A: "Low protein affects wound healing, not glycemic fluctuation.",
    B: "Low calcium affects bone density, not glucose regulation.",
    D: "Omega-6 deficiency is uncommon and not associated with this pattern."
  },
  boardTrap: "Constipation + glucose swings + refined carbs = fiber deficiency.",
  memoryHook: "Fiber filters glucose spikes."
},
{
  id: "nut-041",
  type: "mastery",
  subject: "Prevention Science & Public Health",
  topic: "Protein-Energy Malnutrition",
  difficulty: "hard",
  question: "Which nutritional concern most likely explains frailty, muscle weakness, unintentional weight loss, and delayed periodontal healing in older adults?",
  choices: [
    { key: "A", text: "Iron deficiency" },
    { key: "B", text: "Protein-energy malnutrition" },
    { key: "C", text: "Low calcium intake" },
    { key: "D", text: "Vitamin B6 deficiency" }
  ],
  correctAnswer: "B",
  rationale: "Protein-energy malnutrition leads to sarcopenia, immune suppression, delayed wound healing, and increased inflammatory burden.",
  incorrectRationales: {
    A: "Iron deficiency causes fatigue but not muscle wasting.",
    C: "Low calcium affects bone density, not systemic frailty.",
    D: "Vitamin B6 deficiency causes neuropathy, not sarcopenia."
  },
  boardTrap: "Weak muscles + poor healing = think protein.",
  memoryHook: "Protein = Power + Repair."
},
{
  id: "nut-042",
  type: "mastery",
  subject: "Prevention Science & Public Health",
  topic: "Hydration & Salivary Flow",
  difficulty: "hard",
  question: "Which nutrition-related issue most directly reduces salivary flow, buffering capacity, and increases cervical caries risk?",
  choices: [
    { key: "A", text: "Low calcium intake" },
    { key: "B", text: "Low carbohydrate intake" },
    { key: "C", text: "Low dietary fiber intake" },
    { key: "D", text: "Inadequate hydration" }
  ],
  correctAnswer: "D",
  rationale: "Dehydration reduces salivary flow and buffering capacity, increasing caries risk and impairing periodontal healing.",
  incorrectRationales: {
    A: "Calcium intake affects mineralization, not acute salivary flow.",
    B: "Carbohydrate intake does not regulate saliva production.",
    C: "Fiber affects glycemic stability, not salivary output."
  },
  boardTrap: "Sticky mucosa + caffeine + limited water = dehydration.",
  memoryHook: "Dry mouth? Think dry body."
},
{
  id: "rad-001",
  type: "recall",
  subject: "Radiology & Structural Analysis",
  topic: "X-ray Properties",
  difficulty: "medium",
  question: "Which of the following describes the characteristics of X-rays that produce the greatest image quality and diagnostic strength?",
  choices: [
    { key: "A", text: "Long wavelength with low frequency and weak penetrating power" },
    { key: "B", text: "Short wavelength with low frequency and high contrast" },
    { key: "C", text: "Long wavelength with high frequency and moderate energy" },
    { key: "D", text: "Short wavelength with high frequency and strong penetrating power" }
  ],
  correctAnswer: "D",
  rationale: "X-rays with short wavelengths have high frequency and high energy, allowing them to penetrate tissues effectively and produce sharp, detailed radiographic images.",
  incorrectRationales: {
    A: "Long wavelengths have lower energy and reduced penetrating ability.",
    B: "Short wavelength corresponds to high frequency, not low frequency.",
    C: "Wavelength and frequency are inversely related; long wavelength cannot have high frequency.",
    D: "Correct."
  },
  boardTrap: "Students often associate long wavelength with strength. In physics, shorter wavelength equals higher energy and stronger penetration.",
  memoryHook: "Shorter = Stronger."
},
{
  id: "rad-002",
  type: "recall",
  subject: "Radiology & Structural Analysis",
  topic: "Electromagnetic Radiation",
  difficulty: "medium",
  question: "Which of the following best represents the speed of X-rays as they travel through space?",
  choices: [
    { key: "A", text: "300,000 miles per hour" },
    { key: "B", text: "186,000 miles per second" },
    { key: "C", text: "93 million miles per minute" },
    { key: "D", text: "1 million kilometers per second" }
  ],
  correctAnswer: "B",
  rationale: "X-rays travel at the speed of light, which is 186,000 miles per second (3 × 10⁸ meters per second) in a vacuum.",
  incorrectRationales: {
    A: "This value is far too slow for electromagnetic radiation.",
    C: "This represents distance, not speed of X-rays.",
    D: "This exceeds the known constant speed of light.",
    B: "Correct."
  },
  boardTrap: "All electromagnetic waves travel at the same speed in a vacuum regardless of frequency or wavelength.",
  memoryHook: "Light or X-ray, same speed."
},
{
  id: "rad-003",
  type: "recall",
  subject: "Radiology & Structural Analysis",
  topic: "X-ray Tube Components",
  difficulty: "medium",
  question: "Which component of the X-ray tube supplies the electrons that are accelerated toward the target to produce X-radiation?",
  choices: [
    { key: "A", text: "Cathode" },
    { key: "B", text: "Anode" },
    { key: "C", text: "Focusing cup" },
    { key: "D", text: "Tungsten target" }
  ],
  correctAnswer: "A",
  rationale: "The cathode is the negative electrode containing the tungsten filament. When heated, it emits electrons through thermionic emission.",
  incorrectRationales: {
    A: "Correct.",
    B: "The anode receives electrons and converts their energy into X-rays.",
    C: "The focusing cup directs electrons but does not produce them.",
    D: "The tungsten target converts electron energy into X-rays but does not emit electrons."
  },
  boardTrap: "The filament is part of the cathode assembly, but the cathode itself is the electron source.",
  memoryHook: "Cathode sends, anode receives."
},
{
  id: "rad-004",
  type: "recall",
  subject: "Radiology & Structural Analysis",
  topic: "X-ray Tube Components",
  difficulty: "medium",
  question: "All of the following are components of the anode in the dental X-ray tube EXCEPT:",
  choices: [
    { key: "A", text: "Tungsten target" },
    { key: "B", text: "Copper stem" },
    { key: "C", text: "Rotating or stationary disk" },
    { key: "D", text: "Focusing cup" }
  ],
  correctAnswer: "D",
  rationale: "The focusing cup is part of the cathode assembly and directs electrons toward the anode. It is not part of the anode.",
  incorrectRationales: {
    A: "The tungsten target is part of the anode and produces X-rays when struck by electrons.",
    B: "The copper stem helps dissipate heat from the anode.",
    C: "The disk forms the anode structure and assists with heat distribution.",
    D: "Correct."
  },
  boardTrap: "If it focuses electrons, it belongs to the cathode, not the anode.",
  memoryHook: "Focus = Cathode."
},
{
  id: "rad-005",
  type: "recall",
  subject: "Radiology & Structural Analysis",
  topic: "Filtration",
  difficulty: "hard",
  question: "Which statement correctly describes the required total aluminum filtration for a dental X-ray unit operating at 70 kVp or higher?",
  choices: [
    { key: "A", text: "1.0 mm aluminum equivalent" },
    { key: "B", text: "1.5 mm aluminum equivalent" },
    { key: "C", text: "2.0 mm aluminum equivalent" },
    { key: "D", text: "2.5 mm aluminum equivalent" }
  ],
  correctAnswer: "D",
  rationale: "Federal standards require 2.5 mm aluminum equivalent filtration for X-ray machines operating at 70 kVp or higher to remove low-energy photons and reduce patient exposure.",
  incorrectRationales: {
    A: "This does not meet minimum federal filtration requirements.",
    B: "1.5 mm filtration is required only for units operating below 70 kVp.",
    C: "2.0 mm does not meet the mandated standard.",
    D: "Correct."
  },
  boardTrap: "70 kVp is the dividing line: below 70 → 1.5 mm, at or above 70 → 2.5 mm.",
  memoryHook: "70 and up = 2.5 mm."
},
{
  id: "rad-006",
  type: "recall",
  subject: "Radiology & Structural Analysis",
  topic: "Filtration",
  difficulty: "medium",
  question: "Each aluminum disc used for added filtration in a dental X-ray tubehead is approximately how thick?",
  choices: [
    { key: "A", text: "0.25 mm" },
    { key: "B", text: "0.5 mm" },
    { key: "C", text: "1.0 mm" },
    { key: "D", text: "2.5 mm" }
  ],
  correctAnswer: "B",
  rationale: "Each aluminum disc is approximately 0.5 mm thick. Multiple discs are combined to achieve total filtration requirements.",
  incorrectRationales: {
    A: "Too thin to represent standard aluminum filtration discs.",
    B: "Correct.",
    C: "Individual discs are not 1.0 mm thick.",
    D: "2.5 mm represents total filtration at ≥70 kVp, not individual disc thickness."
  },
  boardTrap: "Students confuse disc thickness with total filtration requirement.",
  memoryHook: "Half-millimeter discs build full protection."
},
{
  id: "rad-007",
  type: "application",
  subject: "Radiology & Structural Analysis",
  topic: "Filtration Calculations",
  difficulty: "hard",
  question: "How many 0.5 mm aluminum discs are required to meet filtration standards for a dental X-ray machine operating below 70 kVp?",
  choices: [
    { key: "A", text: "Three discs" },
    { key: "B", text: "Four discs" },
    { key: "C", text: "Five discs" },
    { key: "D", text: "Six discs" }
  ],
  correctAnswer: "A",
  rationale: "Machines operating below 70 kVp require 1.5 mm total aluminum filtration. Since each disc is 0.5 mm thick, three discs are required.",
  incorrectRationales: {
    A: "Correct.",
    B: "Four discs would equal 2.0 mm, exceeding required filtration.",
    C: "Five discs equal 2.5 mm, required only at ≥70 kVp.",
    D: "Six discs exceed required filtration for any standard dental unit."
  },
  boardTrap: "Below 70 kVp = 1.5 mm total. 0.5 mm per disc → 3 discs.",
  memoryHook: "Below 70 → Three discs."
},
{
  id: "rad-008",
  type: "recall",
  subject: "Radiology & Structural Analysis",
  topic: "Filtration vs Collimation",
  difficulty: "medium",
  question: "What is the primary function of the aluminum discs positioned within the dental X-ray tubehead?",
  choices: [
    { key: "A", text: "Prevent radiation leakage from the tube housing" },
    { key: "B", text: "Direct electrons toward the tungsten target" },
    { key: "C", text: "Remove long-wavelength, low-energy photons from the primary beam" },
    { key: "D", text: "Restrict the diameter of the X-ray beam" }
  ],
  correctAnswer: "C",
  rationale: "Aluminum discs act as filters, removing long-wavelength, low-energy photons that would increase patient dose without improving image quality.",
  incorrectRationales: {
    A: "Radiation leakage is prevented by lead shielding in the tube housing.",
    B: "Electron direction is controlled by the focusing cup and kilovoltage, not aluminum filters.",
    C: "Correct.",
    D: "Beam diameter is restricted by the collimator, not the filter."
  },
  boardTrap: "Filtration removes weak photons. Collimation shapes the beam.",
  memoryHook: "Filter cleans. Collimator shapes."
},
{
  id: "rad-009",
  type: "recall",
  subject: "Radiology & Structural Analysis",
  topic: "Electrical Impulses",
  difficulty: "medium",
  question: "How many X-ray impulses are produced per second in a standard dental X-ray unit operating on 60-cycle alternating current?",
  choices: [
    { key: "A", text: "30 impulses" },
    { key: "B", text: "45 impulses" },
    { key: "C", text: "60 impulses" },
    { key: "D", text: "120 impulses" }
  ],
  correctAnswer: "C",
  rationale: "Dental X-ray machines operate on 60-cycle AC. Only the positive half of each cycle produces X-rays, resulting in 60 impulses per second.",
  incorrectRationales: {
    A: "30 impulses would represent half of 60 but is incorrect for one full second.",
    B: "45 impulses has no physical basis in standard AC operation.",
    C: "Correct.",
    D: "120 would require both positive and negative halves to produce X-rays, which does not occur."
  },
  boardTrap: "60 cycles = 120 halves, but only positive halves produce X-rays → 60 impulses.",
  memoryHook: "Sixty cycles, sixty sparks."
},
{
  id: "rad-010",
  type: "application",
  subject: "Radiology & Structural Analysis",
  topic: "Exposure Time and Density",
  difficulty: "medium",
  question: "A radiograph exposed at 1/2 second appears slightly darker than ideal. If exposure time is reduced to 1/4 second and all other factors remain constant, what will occur?",
  choices: [
    { key: "A", text: "The image density will remain unchanged" },
    { key: "B", text: "The image will have approximately half the density" },
    { key: "C", text: "The image will appear overexposed" },
    { key: "D", text: "The image contrast will significantly increase" }
  ],
  correctAnswer: "B",
  rationale: "Halving exposure time reduces the quantity of X-rays produced by half, resulting in a lighter image with approximately half the density.",
  incorrectRationales: {
    A: "Changing exposure time directly affects density.",
    C: "Overexposure occurs when exposure time is increased, not decreased.",
    D: "Contrast is primarily influenced by kVp, not exposure time."
  },
  boardTrap: "Time controls quantity (density). kVp controls quality (contrast).",
  memoryHook: "Half the time, half the shine."
},
{
  id: "rad-011",
  type: "application",
  subject: "Radiology & Structural Analysis",
  topic: "Exposure Time and Density",
  difficulty: "medium",
  question: "A dental radiograph is exposed at 1/2 second, producing an image of ideal density. If exposure time is reduced to 1/4 second, how many impulses are produced, and how does this affect image density?",
  choices: [
    { key: "A", text: "15 impulses; the image will appear lighter due to fewer X-ray photons produced" },
    { key: "B", text: "30 impulses; the image will remain unchanged in density" },
    { key: "C", text: "45 impulses; the image will appear darker due to increased exposure" },
    { key: "D", text: "60 impulses; the image will have equal density because exposure time is balanced by mA" }
  ],
  correctAnswer: "A",
  rationale: "A dental X-ray machine produces 60 impulses per second. At 1/2 second, 30 impulses are generated. Reducing the exposure time to 1/4 second produces 15 impulses, cutting the total number of X-ray photons in half. This decreases overall density, resulting in a lighter radiograph.",
  incorrectRationales: {
    A: "Correct.",
    B: "30 impulses correspond to 1/2 second exposure, not 1/4 second.",
    C: "Increasing exposure time creates a darker image, not reducing it.",
    D: "Milliampere (mA) controls current, not time. Lowering exposure time without adjusting mA reduces total photon production."
  },
  boardTrap: "Students often confuse exposure time with mA or kVp. Time controls quantity of X-rays, not penetrating power.",
  memoryHook: "Halve the time, halve the light."
},
{
  id: "rad-012",
  type: "application",
  subject: "Radiology & Structural Analysis",
  topic: "kVp and Image Quality",
  difficulty: "medium",
  question: "A patient presents with very dense bone structure and thick soft tissues in the posterior mandible. The initial radiograph appears light and lacks contrast. To improve image quality while maintaining exposure time and mA constant, which adjustment is most appropriate?",
  choices: [
    { key: "A", text: "Decrease kVp to enhance contrast and reduce scatter" },
    { key: "B", text: "Decrease kVp to reduce beam energy and exposure" },
    { key: "C", text: "Increase kVp to darken the image while maintaining high contrast" },
    { key: "D", text: "Increase kVp to produce a darker image with lower contrast and greater tissue penetration" }
  ],
  correctAnswer: "D",
  rationale: "Increasing kVp raises beam energy and penetrating power. This allows more photons to reach the receptor, producing a darker image with lower contrast (longer gray scale). This is ideal for imaging dense bone and thick tissues without increasing exposure time.",
  incorrectRationales: {
    A: "Lowering kVp would further reduce penetration and lighten the image.",
    B: "Decreasing kVp decreases beam energy and worsens underexposure.",
    C: "Increasing kVp reduces contrast rather than maintaining high contrast.",
    D: "Correct."
  },
  boardTrap: "Higher kVp increases density but decreases contrast. Students often reverse this relationship.",
  memoryHook: "High kVp = Hard beam, more grays."
},
{
  id: "rad-013",
  type: "recall",
  subject: "Radiology & Structural Analysis",
  topic: "Radiographic Density",
  difficulty: "medium",
  question: "All of the following factors influence the density of a dental radiograph EXCEPT:",
  choices: [
    { key: "A", text: "Milliamperage (mA)" },
    { key: "B", text: "Focal spot size" },
    { key: "C", text: "Exposure time" },
    { key: "D", text: "Kilovoltage peak (kVp)" }
  ],
  correctAnswer: "B",
  rationale: "Focal spot size affects image sharpness and resolution, not radiographic density. Density depends on exposure time, mA, and kVp because these determine quantity and energy of photons reaching the receptor.",
  incorrectRationales: {
    A: "Increasing mA increases the number of X-rays produced and therefore increases density.",
    B: "Correct.",
    C: "Longer exposure time increases density by increasing photon quantity.",
    D: "Increasing kVp increases photon energy and contributes to higher density."
  },
  boardTrap: "Density relates to radiation quantity and energy, not geometric sharpness.",
  memoryHook: "Sharp spot, not dark spot."
},
{
  id: "rad-014",
  type: "application",
  subject: "Radiology & Structural Analysis",
  topic: "Contrast Scale",
  difficulty: "medium",
  question: "A bitewing radiograph displays fewer shades of gray and strong visual separation between enamel and dentin. Which image quality is demonstrated?",
  choices: [
    { key: "A", text: "Short-scale contrast; enhances detection of caries due to increased density differences" },
    { key: "B", text: "Long-scale contrast; provides improved bone visualization" },
    { key: "C", text: "Short-scale contrast; reduces diagnostic clarity" },
    { key: "D", text: "Long-scale contrast; increases overall density" }
  ],
  correctAnswer: "A",
  rationale: "Short-scale contrast produces high contrast with fewer shades of gray. This enhances visualization of carious lesions by increasing visible separation between enamel and dentin.",
  incorrectRationales: {
    A: "Correct.",
    B: "Long-scale contrast produces many grays and is better for bone evaluation.",
    C: "Short-scale contrast improves caries detection rather than reducing clarity.",
    D: "Long-scale contrast affects gray scale, not overall density."
  },
  boardTrap: "Few grays = short scale. Many grays = long scale. Boards reverse this often.",
  memoryHook: "Short scale, sharp caries."
},
{
  id: "rad-015",
  type: "application",
  subject: "Radiology & Structural Analysis",
  topic: "Periodontal Radiographic Interpretation",
  difficulty: "medium",
  question: "A full-mouth radiographic series shows numerous subtle gray tones with minimal difference between enamel and bone densities. Which contrast scale is demonstrated?",
  choices: [
    { key: "A", text: "Short-scale contrast; best for detecting caries" },
    { key: "B", text: "Short-scale contrast; minimizes gray tones" },
    { key: "C", text: "Long-scale contrast; provides many shades of gray for subtle bone evaluation" },
    { key: "D", text: "Long-scale contrast; reduces diagnostic value" }
  ],
  correctAnswer: "C",
  rationale: "Long-scale contrast produces many shades of gray. This allows subtle visualization of alveolar bone height and density changes necessary for periodontal assessment.",
  incorrectRationales: {
    A: "Short-scale contrast is better for caries detection, not periodontal bone analysis.",
    B: "Short-scale contrast reduces gray tones rather than increases them.",
    C: "Correct.",
    D: "Long-scale contrast enhances bone evaluation rather than reducing value."
  },
  boardTrap: "Periodontal cases require many grays, not stark black and white contrast.",
  memoryHook: "Long scale sees little loss."
},
{
  id: "rad-016",
  type: "recall",
  subject: "Radiology & Structural Analysis",
  topic: "Beam Quality and Contrast",
  difficulty: "medium",
  question: "The quality of an X-ray beam, as demonstrated by image contrast, is primarily controlled by which exposure factor?",
  choices: [
    { key: "A", text: "Milliamperage (mA)" },
    { key: "B", text: "Kilovoltage peak (kVp)" },
    { key: "C", text: "Exposure time" },
    { key: "D", text: "Source-to-object distance" }
  ],
  correctAnswer: "B",
  rationale: "Kilovoltage peak (kVp) controls beam energy and penetrating power, which directly determines image contrast. Higher kVp produces lower contrast (long-scale), while lower kVp produces higher contrast (short-scale).",
  incorrectRationales: {
    A: "mA controls quantity of X-rays, not contrast.",
    B: "Correct.",
    C: "Exposure time affects density, not contrast.",
    D: "Distance affects intensity but not contrast scale."
  },
  boardTrap: "Contrast is the visible outcome; kVp is the controlling factor.",
  memoryHook: "kVp controls contrast."
},
{
  id: "rad-017",
  type: "application",
  subject: "Radiology & Structural Analysis",
  topic: "Vertical Angulation Errors",
  difficulty: "medium",
  question: "A periapical radiograph shows teeth that appear significantly longer than their actual dimensions. The apices are visible, but the crowns appear stretched. Assuming proper receptor placement, which error most likely occurred?",
  choices: [
    { key: "A", text: "Excessive vertical angulation" },
    { key: "B", text: "Insufficient vertical angulation" },
    { key: "C", text: "Incorrect horizontal angulation" },
    { key: "D", text: "Increased exposure time" }
  ],
  correctAnswer: "B",
  rationale: "Elongation occurs when vertical angulation is insufficient (beam too shallow). This projects the tooth as longer than its actual size. Increasing vertical angulation corrects the distortion.",
  incorrectRationales: {
    A: "Excessive vertical angulation causes foreshortening, not elongation.",
    B: "Correct.",
    C: "Horizontal angulation errors cause overlapping, not elongation.",
    D: "Exposure time affects density, not image length distortion."
  },
  boardTrap: "Elongation = beam too low. Foreshortening = beam too steep.",
  memoryHook: "Low beam = long tooth."
},
{
  id: "rad-018",
  type: "application",
  subject: "Radiology & Structural Analysis",
  topic: "Horizontal Angulation Errors",
  difficulty: "medium",
  question: "During a bitewing exposure, the interproximal contacts appear overlapped on the radiograph. Which technical error most likely occurred?",
  choices: [
    { key: "A", text: "Insufficient vertical angulation" },
    { key: "B", text: "Incorrect horizontal angulation" },
    { key: "C", text: "Excessive exposure time" },
    { key: "D", text: "Improper mA selection" }
  ],
  correctAnswer: "B",
  rationale: "Overlapping occurs when the horizontal angulation is incorrect and the beam is not directed perpendicular to the contact areas. Correcting horizontal angulation opens contacts.",
  incorrectRationales: {
    A: "Vertical angulation affects elongation or foreshortening, not overlapping.",
    B: "Correct.",
    C: "Exposure time changes density, not contact overlap.",
    D: "mA affects radiation quantity, not beam direction."
  },
  boardTrap: "Contacts overlapped = horizontal error. Length distorted = vertical error.",
  memoryHook: "Horizontal hits contacts."
},
{
  id: "rad-019",
  type: "recall",
  subject: "Radiology & Structural Analysis",
  topic: "Radiographic Techniques",
  difficulty: "medium",
  question: "Which radiographic technique provides the most accurate representation of tooth length and surrounding bone dimensions?",
  choices: [
    { key: "A", text: "Bisecting technique" },
    { key: "B", text: "Paralleling technique" },
    { key: "C", text: "Occlusal technique" },
    { key: "D", text: "Transcranial technique" }
  ],
  correctAnswer: "B",
  rationale: "The paralleling technique positions the receptor parallel to the long axis of the tooth and directs the beam perpendicular to both, minimizing distortion and magnification.",
  incorrectRationales: {
    A: "Bisecting increases dimensional distortion.",
    B: "Correct.",
    C: "Occlusal technique is used for large areas, not dimensional accuracy.",
    D: "Transcranial imaging is used for TMJ evaluation."
  },
  boardTrap: "Accurate length = paralleling. Bisecting increases distortion.",
  memoryHook: "Parallel + Perpendicular = Perfect."
},
{
  id: "rad-020",
  type: "application",
  subject: "Radiology & Structural Analysis",
  topic: "Inverse Square Law",
  difficulty: "medium",
  question: "If the distance between the X-ray source and receptor is doubled while all other settings remain constant, what happens to beam intensity?",
  choices: [
    { key: "A", text: "It remains unchanged" },
    { key: "B", text: "It decreases to one-half" },
    { key: "C", text: "It decreases to one-third" },
    { key: "D", text: "It decreases to one-fourth" }
  ],
  correctAnswer: "D",
  rationale: "According to the inverse square law, intensity is inversely proportional to the square of the distance. Doubling the distance reduces intensity to one-fourth.",
  incorrectRationales: {
    A: "Beam divergence always reduces intensity with increased distance.",
    B: "Intensity does not follow a linear relationship.",
    C: "One-third does not follow the squared relationship.",
    D: "Correct."
  },
  boardTrap: "Students apply linear logic. Distance follows squared relationship.",
  memoryHook: "Double distance, quarter dose."
},
{
  id: "rad-021",
  type: "recall",
  subject: "Radiology & Structural Analysis",
  topic: "Automatic Processing",
  difficulty: "medium",
  question: "All of the following statements regarding automatic film processing are correct EXCEPT:",
  choices: [
    { key: "A", text: "The developer contains hardening agents" },
    { key: "B", text: "The fixer hardens and stabilizes the emulsion" },
    { key: "C", text: "Automatic processors use higher temperature chemicals" },
    { key: "D", text: "Rollers transport film between solutions" }
  ],
  correctAnswer: "A",
  rationale: "The developer reduces exposed silver halide crystals but does not contain hardening agents. Hardening occurs in the fixer solution.",
  incorrectRationales: {
    A: "Correct.",
    B: "The fixer removes unexposed crystals and hardens the emulsion.",
    C: "Automatic processing requires higher temperature chemistry.",
    D: "Roller transport replaces manual rinsing."
  },
  boardTrap: "Developer develops. Fixer fixes and hardens.",
  memoryHook: "Developer makes it, fixer keeps it."
},
{
  id: "rad-022",
  type: "recall",
  subject: "Radiology & Structural Analysis",
  topic: "Radiation Production",
  difficulty: "medium",
  question: "How many X-ray impulses are produced per second in a standard 60-cycle dental X-ray unit?",
  choices: [
    { key: "A", text: "30" },
    { key: "B", text: "45" },
    { key: "C", text: "60" },
    { key: "D", text: "120" }
  ],
  correctAnswer: "C",
  rationale: "Standard dental X-ray units operate on 60-cycle alternating current. Only the positive half-cycle produces X-rays, resulting in 60 impulses per second.",
  incorrectRationales: {
    A: "30 impulses corresponds to 1/2 second exposure.",
    B: "45 is not related to standard AC frequency.",
    C: "Correct.",
    D: "120 would include both positive and negative cycles, which are not used."
  },
  boardTrap: "60 cycles = 60 impulses (not 120).",
  memoryHook: "Sixty cycles, sixty sparks."
},
{
  id: "rad-023",
  type: "application",
  subject: "Radiology & Structural Analysis",
  topic: "Film Speed and Crystal Size",
  difficulty: "medium",
  question: "One film produces sharper detail but requires more radiation exposure. Another requires less exposure but appears grainier. What explains this difference?",
  choices: [
    { key: "A", text: "Larger crystals improve detail and reduce exposure time" },
    { key: "B", text: "Smaller crystals reduce sharpness but increase film speed" },
    { key: "C", text: "Smaller crystals increase sharpness but require longer exposure; larger crystals reduce exposure but decrease detail" },
    { key: "D", text: "Crystal size does not influence exposure or image quality" }
  ],
  correctAnswer: "C",
  rationale: "Smaller silver halide crystals produce sharper images but require longer exposure. Larger crystals increase film speed, requiring less exposure, but reduce image detail.",
  incorrectRationales: {
    A: "Larger crystals reduce sharpness.",
    B: "Smaller crystals increase sharpness, not reduce it.",
    C: "Correct.",
    D: "Crystal size directly affects film speed and image sharpness."
  },
  boardTrap: "Faster film means less radiation but lower sharpness.",
  memoryHook: "Small = slow but sharp."
},
{
  id: "rad-024",
  type: "application",
  subject: "Radiology & Structural Analysis",
  topic: "Panoramic Air Spaces",
  difficulty: "medium",
  question: "Radiolucent bands appear above maxillary apices and below the mandible on a panoramic radiograph. What is the most likely cause?",
  choices: [
    { key: "A", text: "Chin tipped too far downward" },
    { key: "B", text: "Patient positioned too far forward" },
    { key: "C", text: "Tongue not placed against palate" },
    { key: "D", text: "Normal air spaces between oral and pharyngeal structures" }
  ],
  correctAnswer: "D",
  rationale: "Air spaces such as palatoglossal and nasopharyngeal spaces appear radiolucent because air does not absorb X-rays. These are normal anatomical findings.",
  incorrectRationales: {
    A: "Chin too low produces exaggerated smile line distortion.",
    B: "Too far forward causes narrowed and blurred anterior teeth.",
    C: "Improper tongue positioning causes a dark band over maxillary apices only.",
    D: "Correct."
  },
  boardTrap: "Air spaces are normal anatomy, not positioning errors.",
  memoryHook: "If it’s air, it’s there."
},
{
  id: "rad-025",
  type: "application",
  subject: "Radiology & Structural Analysis",
  topic: "Interproximal Caries Classification",
  difficulty: "medium",
  question: "A radiolucent lesion extends less than halfway through enamel toward the DEJ. How is this classified?",
  choices: [
    { key: "A", text: "Class II incipient" },
    { key: "B", text: "Class I moderate" },
    { key: "C", text: "Class I incipient" },
    { key: "D", text: "Class II advanced" }
  ],
  correctAnswer: "C",
  rationale: "An incipient lesion is confined to enamel and extends less than halfway toward the DEJ.",
  incorrectRationales: {
    A: "Class II refers to posterior restorative classification.",
    B: "Moderate lesions extend more than halfway through enamel.",
    C: "Correct.",
    D: "Advanced lesions reach or pass the DEJ."
  },
  boardTrap: "Do not confuse restorative class with caries progression stage.",
  memoryHook: "Incipient stays in enamel."
},

{
  id: "rad-026",
  type: "application",
  subject: "Radiology & Structural Analysis",
  topic: "Interproximal Caries Classification",
  difficulty: "medium",
  question: "A radiolucent lesion extends more than halfway through enamel but does not reach the dentinoenamel junction (DEJ). How is this lesion classified?",
  choices: [
    { key: "A", text: "Class I incipient" },
    { key: "B", text: "Class I advanced" },
    { key: "C", text: "Class II moderate" },
    { key: "D", text: "Class II severe" }
  ],
  correctAnswer: "C",
  rationale: "A moderate interproximal lesion extends more than halfway through enamel but does not reach the DEJ. It remains confined to enamel.",
  incorrectRationales: {
    A: "Incipient lesions extend less than halfway through enamel.",
    B: "Advanced lesions reach or pass the DEJ.",
    C: "Correct.",
    D: "Severe lesions extend deeply into dentin toward the pulp."
  },
  boardTrap: "Moderate means more than halfway through enamel but not into dentin.",
  memoryHook: "Moderate makes it halfway."
},
{
  id: "rad-027",
  type: "application",
  subject: "Radiology & Structural Analysis",
  topic: "Anterior Interproximal Caries",
  difficulty: "medium",
  question: "A radiolucent lesion on the mesial surface of an anterior tooth extends to the DEJ with minimal dentin involvement. How is this classified?",
  choices: [
    { key: "A", text: "Class III advanced" },
    { key: "B", text: "Class III incipient" },
    { key: "C", text: "Class IV severe" },
    { key: "D", text: "Class II moderate" }
  ],
  correctAnswer: "A",
  rationale: "A Class III advanced lesion occurs on anterior proximal surfaces and extends to or slightly into dentin at the DEJ.",
  incorrectRationales: {
    A: "Correct.",
    B: "Incipient lesions are confined to enamel.",
    C: "Severe lesions extend deep into dentin toward the pulp.",
    D: "Class II refers to posterior proximal surfaces."
  },
  boardTrap: "Class II = posterior. Class III = anterior.",
  memoryHook: "Three for front."
},
{
  id: "rad-028",
  type: "application",
  subject: "Radiology & Structural Analysis",
  topic: "Anterior Severe Caries",
  difficulty: "medium",
  question: "A radiolucent lesion on the distal surface of an anterior tooth extends deep into dentin approaching the pulp. How is this classified?",
  choices: [
    { key: "A", text: "Class II advanced" },
    { key: "B", text: "Class III moderate" },
    { key: "C", text: "Class III advanced" },
    { key: "D", text: "Class IV severe" }
  ],
  correctAnswer: "D",
  rationale: "A Class IV severe lesion involves an anterior proximal surface and extends deeply into dentin, approaching the pulp.",
  incorrectRationales: {
    A: "Class II refers to posterior teeth.",
    B: "Moderate lesions remain within enamel.",
    C: "Advanced lesions reach the DEJ but do not extend deeply into dentin.",
    D: "Correct."
  },
  boardTrap: "Severe means deep dentin near pulp.",
  memoryHook: "Four to the floor."
},
{
  id: "rad-029",
  type: "application",
  subject: "Radiology & Structural Analysis",
  topic: "Occlusal Caries Detection",
  difficulty: "medium",
  question: "An occlusal lesion is clinically visible as enamel opacity but is not radiographically detectable. How is it classified?",
  choices: [
    { key: "A", text: "Occlusal moderate" },
    { key: "B", text: "Occlusal incipient" },
    { key: "C", text: "Occlusal advanced" },
    { key: "D", text: "Occlusal severe" }
  ],
  correctAnswer: "B",
  rationale: "An occlusal incipient lesion is confined to enamel and is typically not visible on radiographs.",
  incorrectRationales: {
    A: "Moderate lesions extend into dentin and may be radiographically visible.",
    B: "Correct.",
    C: "Advanced lesions extend into dentin.",
    D: "Severe lesions extend deeply into dentin toward the pulp."
  },
  boardTrap: "Early occlusal caries are not seen radiographically.",
  memoryHook: "If you can't see it on X-ray, it's incipient."
},
{
  id: "rad-030",
  type: "application",
  subject: "Radiology & Structural Analysis",
  topic: "Occlusal Dentin Caries",
  difficulty: "medium",
  question: "A radiolucent shadow appears beneath intact occlusal enamel and extends into outer dentin. How is this classified?",
  choices: [
    { key: "A", text: "Occlusal moderate" },
    { key: "B", text: "Occlusal incipient" },
    { key: "C", text: "Occlusal advanced" },
    { key: "D", text: "Occlusal severe" }
  ],
  correctAnswer: "A",
  rationale: "An occlusal moderate lesion extends into outer dentin while enamel remains intact.",
  incorrectRationales: {
    A: "Correct.",
    B: "Incipient lesions are limited to enamel.",
    C: "Advanced lesions extend deeper into dentin.",
    D: "Severe lesions approach or involve the pulp."
  },
  boardTrap: "Shadow under enamel = dentin involvement.",
  memoryHook: "Shadow under the shell = moderate."
},
{
  id: "rad-031",
  type: "application",
  subject: "Radiology & Structural Analysis",
  topic: "Caries Classification – Occlusal",
  difficulty: "medium",
  question: "A bitewing radiograph of tooth #3 shows a large, irregular radiolucent area beneath the occlusal enamel that extends deep into dentin and approaches the pulp chamber. The enamel surface appears cavitated upon clinical inspection. How should this lesion be classified?",
  choices: [
    { key: "A", text: "Occlusal incipient" },
    { key: "B", text: "Occlusal moderate" },
    { key: "C", text: "Occlusal severe" },
    { key: "D", text: "Occlusal advanced" }
  ],
  correctAnswer: "C",
  rationale: "An occlusal severe carious lesion demonstrates extensive demineralization through enamel and deep into dentin, often approaching or involving the pulp chamber. Radiographically, it presents as a large, irregular radiolucent area beneath the occlusal surface with visible enamel cavitation clinically.",
  incorrectRationales: {
    A: "Incipient lesions are limited to enamel and are not radiographically visible.",
    B: "Moderate lesions involve outer dentin but do not approach the pulp and retain an intact enamel surface.",
    D: "Advanced lesions penetrate the DEJ and enter dentin, but 'severe' refers specifically to extensive spread toward or near the pulp."
  },
  boardTrap: "The NBDHE frequently uses vague terms like 'radiolucent shadow' or 'dentin involvement' to test understanding of depth and progression. Only when the lesion extends deep into dentin and cavitates clinically is it considered severe.",
  memoryHook: "Severe sinks to the center."
},
{
  id: "rad-032",
  type: "application",
  subject: "Radiology & Structural Analysis",
  topic: "Caries Identification – Buccal/Lingual",
  difficulty: "medium",
  question: "A periapical radiograph reveals a well-defined, circular radiolucency near the cervical third of the root on tooth #6. The surrounding lamina dura and alveolar crest appear normal. Clinical examination shows no interproximal caries. Which of the following best describes this radiographic finding?",
  choices: [
    { key: "A", text: "Interproximal incipient lesion" },
    { key: "B", text: "Root surface caries" },
    { key: "C", text: "Recurrent caries beneath a restoration" },
    { key: "D", text: "Buccal or lingual carious lesion" }
  ],
  correctAnswer: "D",
  rationale: "Buccal or lingual caries appear as well-circumscribed, round radiolucencies on the radiograph because the beam passes through a localized area of demineralization. Since the lesion lies on the facial or lingual surface, it appears circular and confined, without the triangular spread pattern typical of interproximal lesions. Clinical inspection is necessary to confirm which surface is affected.",
  incorrectRationales: {
    A: "Interproximal caries form a triangular shape with the base at the enamel surface, not a circular radiolucency.",
    B: "Root surface caries occur below the CEJ and present as broad, ill-defined saucer-shaped radiolucencies on exposed root surfaces.",
    C: "Recurrent caries are beneath restorations, usually following the margin contour, not isolated on the root surface."
  },
  boardTrap: "The NBDHE often includes buccal/lingual caries as distractors in interproximal or root caries questions. The giveaway is the perfectly round radiolucency with otherwise intact bone and lamina dura.",
  memoryHook: "Round and sound—buccal or lingual found."
},
{
  id: "rad-033",
  type: "application",
  subject: "Radiology & Structural Analysis",
  topic: "Caries Identification – Root Surface",
  difficulty: "medium",
  question: "A radiograph of tooth #30 shows a broad, irregular radiolucent area located apical to the cementoenamel junction (CEJ) on the mesial root surface. The lesion has an ill-defined, saucer-like appearance. The patient reports a history of gingival recession and xerostomia. Which of the following best describes this lesion?",
  choices: [
    { key: "A", text: "Recurrent caries beneath an existing restoration" },
    { key: "B", text: "Root surface caries" },
    { key: "C", text: "Cervical burnout artifact" },
    { key: "D", text: "Buccal or lingual caries" }
  ],
  correctAnswer: "B",
  rationale: "Root surface caries develop below the CEJ on exposed root surfaces, especially in patients with gingival recession, reduced salivary flow, or poor plaque control. Radiographically, they appear as broad, irregular, ill-defined radiolucent areas with a saucer-shaped profile. The surrounding enamel and crown structure often remain intact.",
  incorrectRationales: {
    A: "Recurrent caries occur beneath restorations, following restoration margins, not on exposed roots.",
    C: "Cervical burnout is an optical artifact that produces a radiolucent band near the CEJ but has sharp borders and symmetry, unlike true caries.",
    D: "Buccal or lingual lesions appear round and localized, not broad and irregular."
  },
  boardTrap: "The NBDHE commonly presents cervical burnout as a distractor. Root caries are broad, irregular, and below the CEJ.",
  memoryHook: "Recession + radiolucent bowl = root caries goal."
},
{
  id: "rad-034",
  type: "application",
  subject: "Radiology & Structural Analysis",
  topic: "Cervical Burnout",
  difficulty: "medium",
  question: "A periapical radiograph of the mandibular premolar region reveals a well-defined, radiolucent band along the cervical area of several teeth near the cementoenamel junction (CEJ). The lamina dura and alveolar crest appear intact, and no clinical evidence of decay is present. Which of the following best explains this radiographic appearance?",
  choices: [
    { key: "A", text: "Cervical burnout" },
    { key: "B", text: "Root surface caries" },
    { key: "C", text: "Abrasion from improper toothbrushing" },
    { key: "D", text: "Recurrent caries beneath existing restorations" }
  ],
  correctAnswer: "A",
  rationale: "Cervical burnout is a radiolucent optical artifact that occurs at the CEJ where enamel meets dentin or cementum. The difference in X-ray absorption creates the appearance of a radiolucent band. Bone and lamina dura remain intact and no clinical decay is present.",
  incorrectRationales: {
    B: "Root surface caries are broad, irregular, saucer-shaped radiolucencies below the CEJ.",
    C: "Abrasion presents as a V-shaped notch, not a uniform radiolucent band.",
    D: "Recurrent caries occur beneath restorations, not as symmetrical cervical bands."
  },
  boardTrap: "Cervical burnout vs root caries is a common board confusion. Burnout is symmetrical with intact bone.",
  memoryHook: "If it’s clean but seen, it’s burnout—not decay."
},
{
  id: "rad-035",
  type: "application",
  subject: "Radiology & Structural Analysis",
  topic: "Cervical Abrasion",
  difficulty: "medium",
  question: "A radiograph of the mandibular canine region reveals a small, well-defined radiolucent notch along the cervical area of tooth #27. The patient reports a history of aggressive horizontal toothbrushing and uses a hard-bristled brush. The lamina dura and alveolar crest appear normal. Which of the following best explains this radiographic appearance?",
  choices: [
    { key: "A", text: "Root surface caries" },
    { key: "B", text: "Cervical burnout" },
    { key: "C", text: "Abrasion" },
    { key: "D", text: "Erosion" }
  ],
  correctAnswer: "C",
  rationale: "Abrasion appears radiographically as a well-defined V-shaped or wedge-like radiolucent defect along the cervical surface of a tooth. It results from mechanical wear such as aggressive toothbrushing.",
  incorrectRationales: {
    A: "Root caries are broader and irregular below the CEJ.",
    B: "Cervical burnout is diffuse and symmetrical, not sharply defined.",
    D: "Erosion produces smooth, rounded defects rather than sharp notches."
  },
  boardTrap: "Abrasion is sharply defined. Burnout is diffuse. The border definition is the clue.",
  memoryHook: "Abrasion cuts clean."
},
{
  id: "rad-035",
  type: "application",
  subject: "Radiology & Structural Analysis",
  topic: "Cervical Abrasion",
  difficulty: "medium",
  question: "A radiograph of the mandibular canine region reveals a small, well-defined radiolucent notch along the cervical area of tooth #27. The patient reports a history of aggressive horizontal toothbrushing and uses a hard-bristled brush. The lamina dura and alveolar crest appear normal. Which of the following best explains this radiographic appearance?",
  choices: [
    { key: "A", text: "Root surface caries" },
    { key: "B", text: "Cervical burnout" },
    { key: "C", text: "Abrasion" },
    { key: "D", text: "Erosion" }
  ],
  correctAnswer: "C",
  rationale: "Abrasion appears radiographically as a well-defined V-shaped or wedge-like radiolucent defect along the cervical surface of a tooth. It results from mechanical wear such as aggressive toothbrushing.",
  incorrectRationales: {
    A: "Root caries are broader and irregular below the CEJ.",
    B: "Cervical burnout is diffuse and symmetrical, not sharply defined.",
    D: "Erosion produces smooth, rounded defects rather than sharp notches."
  },
  boardTrap: "Abrasion is sharply defined. Burnout is diffuse. The border definition is the clue.",
  memoryHook: "Abrasion cuts clean."
},
{
  id: "rad-036",
  type: "application",
  subject: "Radiology & Structural Analysis",
  topic: "Traumatic Injuries – Luxation",
  difficulty: "medium",
  question: "A periapical radiograph of tooth #9 reveals widening of the periodontal ligament (PDL) space and displacement of the tooth from its alveolus following trauma. The lamina dura appears discontinuous, and no crown fracture is evident. Which of the following best describes this radiographic finding?",
  choices: [
    { key: "A", text: "Luxation injury" },
    { key: "B", text: "Avulsion" },
    { key: "C", text: "Intrusion" },
    { key: "D", text: "Root fracture" }
  ],
  correctAnswer: "A",
  rationale: "A luxation injury refers to displacement of a tooth within its socket without complete avulsion. Radiographically, it presents with widening or irregularity of the PDL space, disruption of the lamina dura, and altered tooth position.",
  incorrectRationales: {
    B: "Avulsion indicates complete displacement of the tooth from the socket, leaving an empty alveolus.",
    C: "Intrusion forces the tooth into the alveolar bone, often shortening its appearance and obliterating the PDL space.",
    D: "Root fracture appears as a radiolucent line across the root with possible fragment separation."
  },
  boardTrap: "Luxation remains in the socket. Avulsion does not. Intrusion is pushed inward.",
  memoryHook: "Luxation = loose, not lost."
},
{
  id: "rad-038",
  type: "application",
  subject: "Radiology & Structural Analysis",
  topic: "SLOB Rule",
  difficulty: "medium",
  question: "A periapical radiograph is taken of a mandibular premolar. A second radiograph is exposed with the tube head shifted mesially. On the second image, a small radiopaque object appears to have shifted mesially in relation to the tooth structure. Based on the SLOB rule, where is the object located?",
  choices: [
    { key: "A", text: "Buccal surface" },
    { key: "B", text: "Buccal surface toward the mesial" },
    { key: "C", text: "Buccal surface toward the distal" },
    { key: "D", text: "Lingual surface" }
  ],
  correctAnswer: "D",
  rationale: "SLOB stands for Same-Lingual, Opposite-Buccal. When the tube head shifts mesially and the object also shifts mesially, the movement is in the same direction. Therefore, the object is located on the lingual surface.",
  incorrectRationales: {
    A: "Buccal objects move opposite the direction of tube shift.",
    B: "If it were buccal, it would shift distally when the tube shifts mesially.",
    C: "Buccal objects move opposite, not in the same direction."
  },
  boardTrap: "Compare tube shift direction to object movement only. Same = Lingual. Opposite = Buccal.",
  memoryHook: "Same direction = Same side = Lingual."
},
{
  id: "rad-039",
  type: "application",
  subject: "Radiology & Structural Analysis",
  topic: "SLOB Rule – Opposite Movement",
  difficulty: "medium",
  question: "A periapical radiograph of a maxillary first molar is taken. A second radiograph is exposed with the tube head shifted distally. On the second image, a separated endodontic file fragment appears to have shifted mesially relative to the crown of the tooth. According to the SLOB (Same-Lingual, Opposite-Buccal) rule, where is the fragment located?",
  choices: [
    { key: "A", text: "Lingual surface" },
    { key: "B", text: "Lingual surface toward the mesial" },
    { key: "C", text: "Lingual surface toward the distal" },
    { key: "D", text: "Buccal surface" }
  ],
  correctAnswer: "D",
  rationale: "The tube head shifts distally while the object shifts mesially, meaning movement is opposite. According to the SLOB rule, opposite movement indicates a buccal location.",
  incorrectRationales: {
    A: "Lingual objects move in the same direction as the tube shift.",
    B: "If lingual, it would shift distally when the tube shifts distally.",
    C: "Lingual objects follow tube direction, not opposite."
  },
  boardTrap: "Ignore tooth anatomy. Only compare tube shift to object shift direction.",
  memoryHook: "Opposite = Buccal."
  },




{
  id: "rad-041",
  type: "application",
  subject: "Radiology & Structural Analysis",
  topic: "SLOB Rule – Vertical Angulation",
  difficulty: "medium",
  question: "A periapical radiograph of a maxillary canine is taken. A second radiograph is made with the tube head positioned more superiorly (angled downward toward the tooth). On the second image, a small radiopaque object appears to have moved toward the incisal edge of the tooth compared with the first image. According to the SLOB rule, where is the object located?",
  choices: [
    { key: "A", text: "Buccal surface near the cervical area" },
    { key: "B", text: "Buccal surface near the incisal area" },
    { key: "C", text: "Lingual surface near the cervical area" },
    { key: "D", text: "Lingual surface near the incisal area" }
  ],
  correctAnswer: "D",
rationale: "**D. Lingual surface near the incisal area** When the tube head moves superiorly in vertical angulation, a lingual object will move in the same direction on the radiograph. Superior tube shift → object moves incisally (same direction) → lingual. Because the incisal direction matches the tube shift, the object is on the lingual surface toward the incisal area.",

incorrectRationales: {
  A: "**A. Buccal surface near the cervical area** Buccal objects move opposite the tube shift. Because the object moved incisally (same direction as the tube shift), it cannot be buccal.",
  B: "**B. Buccal surface near the incisal area** If the object were buccal, it would have moved cervically (opposite direction of the tube shift), not incisally.",
  C: "**C. Lingual surface near the cervical area** Lingual objects move in the same direction as the tube shift; however, movement was toward the incisal edge, not cervically."
},

boardTrap: "Students often mix up vertical SLOB because they expect mesial/distal movement. SLOB works identically with vertical angulation: Tube up → lingual object moves up; Tube down → lingual object moves down.",
memoryHook: "Lingual follows the leader — even vertically."

},

{
  id: "rad-042",
  type: "application",
  subject: "Radiology & Structural Analysis",
  topic: "Geometric Distortion and Magnification",
  difficulty: "medium",
  question: "A periapical radiograph of the mandibular left molars is taken during an evaluation for possible apical pathology. The resulting image shows both molars, but the crowns and roots appear magnified and slightly blurred, with widened periodontal ligament spaces that do not correlate clinically. The apices are captured, and no cone cutting or angulation issues are evident. The patient reports they remained still, and the clinician confirms proper vertical and horizontal angulations. Which error most likely occurred?",
  choices: [
    { key: "A", text: "Excessive vertical angulation creating geometric distortion" },
    { key: "B", text: "Receptor bent during placement, altering root proportions" },
    { key: "C", text: "Receptor positioned too far from the tooth, increasing object–film distance" },
    { key: "D", text: "Central ray positioned too low relative to the occlusal plane" }
  ],
  correctAnswer: "C",
  rationale: "**C. Receptor positioned too far from the tooth, increasing object–film distance**\nWhen the receptor sits too far from the tooth, the object–film distance increases. According to radiographic geometry principles, increasing object–film distance produces magnification and decreased sharpness. This results in uniform enlargement of crowns and roots and may create the appearance of widened periodontal ligament spaces even when angulation is correct. Because apices are captured and angulation was confirmed appropriate, increased object–film distance is the most logical explanation.",
  incorrectRationales: {
    A: "**A. Excessive vertical angulation creating geometric distortion**\nExcessive vertical angulation produces elongation or foreshortening depending on direction, not uniform magnification. Distortion from angulation changes root length proportionally rather than enlarging the entire image.",
    B: "**B. Receptor bent during placement, altering root proportions**\nReceptor bending causes localized distortion or warped areas of the image, not global enlargement and blurring across the entire radiograph.",
    D: "**D. Central ray positioned too low relative to the occlusal plane**\nImproper inferior ray placement affects image coverage or may cut off anatomical structures but does not cause uniform magnification with widened PDL appearance."
  },
  boardTrap: "The NBDHE disguises this by confirming proper angulation and patient stability. When angulation and movement are ruled out, uniform magnification indicates increased object–film distance due to poor receptor positioning.",
  memoryHook: "Far film = fat image."
},
{
  id: "rad-043",
  type: "application",
  subject: "Radiology & Structural Analysis",
  topic: "Object–Film Distance Error",
  difficulty: "medium",
  question: "A periapical radiograph of the mandibular anterior region is taken during an evaluation for vague pressure sensitivity. The resulting image shows the incisors appearing magnified, elongated, and slightly blurred, with the roots projected away from the surrounding bone. The apices are present, but fine bony detail is significantly reduced. The clinician confirms that vertical and horizontal angulations were correct, the patient remained still, and the PID was fully aligned with the aiming ring. Which error most likely occurred?",
  choices: [
    { key: "A", text: "Receptor resting on the tongue, increasing object–film distance" },
    { key: "B", text: "Excessive vertical angulation producing geometric distortion" },
    { key: "C", text: "Central ray directed too far inferiorly toward the floor of the mouth" },
    { key: "D", text: "Receptor bent during placement, causing uneven image projection" }
  ],
  correctAnswer: "A",
  rationale: "**A. Receptor resting on the tongue, increasing object–film distance**\n\nWhen the receptor rests on the tongue instead of being positioned directly behind the teeth, the object–film distance increases. Increased object–film distance produces uniform magnification, elongation, and reduced sharpness. Teeth may appear to “float” away from the surrounding bone even when angulations and PID alignment are correct.",
  incorrectRationales: {
    B: "**B. Excessive vertical angulation producing geometric distortion**\n\nExcessive vertical angulation produces foreshortening or elongation, but it does not create uniform magnification with overall blurring and apparent separation from bone.",
    C: "**C. Central ray directed too far inferiorly toward the floor of the mouth**\n\nDirecting the central ray too inferiorly may cause apical cutoff or improper coverage, but it does not produce generalized magnification and floating root appearance.",
    D: "**D. Receptor bent during placement, causing uneven image projection**\n\nReceptor bending creates localized distortion or uneven projection of specific areas, not uniform enlargement and overall loss of sharp bony detail."
  },
  boardTrap: "NBDHE disguises this error by confirming correct angulation and patient stability. When angulation, PID alignment, and motion are ruled out, uniform magnification and blurring indicate increased object–film distance.",
  memoryHook: "Tongue under the film = teeth look like they’re flying."
},
{
  id: "rad-044",
  type: "application",
  subject: "Radiology & Structural Analysis",
  topic: "PID Length and Beam Divergence",
  difficulty: "medium",
  question: "Two radiographs of the same patient are taken using identical exposure factors. One uses an 8-inch PID and the other uses a 16-inch PID. The image made with the 16-inch PID shows slightly sharper detail and less magnification. Which of the following best explains this difference?",
  choices: [
    { key: "A", text: "The shorter PID increases the intensity of the beam and reduces exposure time" },
    { key: "B", text: "The shorter PID decreases beam divergence and improves image clarity" },
    { key: "C", text: "The longer PID increases scatter and magnification due to longer distance" },
    { key: "D", text: "The longer PID reduces beam divergence and image magnification, producing greater sharpness" }
  ],
  correctAnswer: "D",
  rationale: "**D. The longer PID reduces beam divergence and image magnification, producing greater sharpness**\n\nA longer PID (16-inch) reduces beam divergence, allowing X-rays to strike the image receptor in a more parallel fashion. Reduced divergence minimizes magnification and improves image sharpness. Although beam intensity decreases with increased distance, exposure can be compensated using the inverse square law to maintain proper density.",
  incorrectRationales: {
    A: "**A. The shorter PID increases the intensity of the beam and reduces exposure time**\n\nA shorter PID increases beam divergence, which increases magnification and reduces image sharpness. While intensity may be higher at shorter distances, this does not improve geometric clarity.",
    B: "**B. The shorter PID decreases beam divergence and improves image clarity**\n\nA shorter PID actually increases beam divergence, leading to greater magnification and reduced detail, not improved clarity.",
    C: "**C. The longer PID increases scatter and magnification due to longer distance**\n\nA longer PID reduces divergence and magnification. It improves geometric accuracy and sharpness rather than increasing distortion."
  },
  boardTrap: "The NBDHE frequently reverses the relationship between PID length and image clarity. Students often assume shorter equals better, but longer PIDs reduce beam divergence and geometric distortion.",
  memoryHook: "Long and strong. Long PID = parallel rays = sharper, less magnified image."
},
{
  id: "rad-045",
  type: "application",
  subject: "Radiology & Structural Analysis",
  topic: "Collimation and PID Length",
  difficulty: "medium",
  question: "A dental hygienist compares two radiographs of the same patient. One was taken with a short, round PID, and the other with a long, rectangular PID. Both were exposed at the same kVp and mA settings. The image made with the long, rectangular PID shows improved sharpness and reduced patient dose. Which of the following best explains this outcome?",
  choices: [
    { key: "A", text: "The long, round PID reduces beam energy and increases scatter radiation" },
    { key: "B", text: "The long, rectangular PID restricts beam size and reduces divergence, improving detail while lowering exposure" },
    { key: "C", text: "The short, round PID concentrates the beam, resulting in lower patient dose and sharper image" },
    { key: "D", text: "The short, rectangular PID increases contrast and limits penumbra formation" }
  ],
  correctAnswer: "B",
  rationale: "**B. The long, rectangular PID restricts beam size and reduces divergence, improving detail while lowering exposure**\n\nA long, rectangular PID combines the advantages of rectangular collimation and increased distance. Rectangular collimation restricts beam size, reducing patient radiation exposure by limiting the area irradiated. The longer PID reduces beam divergence, improving geometric sharpness and minimizing magnification. Together, these factors produce clearer detail with lower patient dose.",
  incorrectRationales: {
    A: "**A. The long, round PID reduces beam energy and increases scatter radiation**\n\nA longer PID reduces beam divergence, not beam energy. It does not increase scatter radiation. Round PIDs expose a larger tissue area compared to rectangular collimation, which increases patient dose.",
    C: "**C. The short, round PID concentrates the beam, resulting in lower patient dose and sharper image**\n\nA short, round PID increases beam divergence and exposes a wider area, resulting in greater magnification and higher patient dose. It does not improve sharpness.",
    D: "**D. The short, rectangular PID increases contrast and limits penumbra formation**\n\nShort PIDs increase divergence and magnification, reducing sharpness. Contrast is controlled primarily by kVp, not PID shape. While rectangular collimation reduces dose, shortening the PID increases geometric distortion."
  },
  boardTrap: "The NBDHE frequently blends collimation (beam restriction) with PID length (distance) to test dose versus detail. Smaller beam size lowers dose; longer PID improves sharpness.",
  memoryHook: "Square and long = sharp and strong. Rectangular, long PID = better detail, lower radiation."
},
{
  id: "rad-046",
  type: "application",
  subject: "Radiology & Structural Analysis",
  topic: "Panoramic Errors and Intensifying Screens",
  difficulty: "medium",
  question: "A panoramic image taken in a dental office appears excessively light even though the exposure settings were correct and the film was processed properly. The hygienist inspects the cassette and finds no visible damage or fogging. Which of the following is the most likely cause of the radiographic error?",
  choices: [
    { key: "A", text: "Defective or deteriorated intensifying screens within the cassette" },
    { key: "B", text: "Film placed backward in the cassette during exposure" },
    { key: "C", text: "Excessive developer temperature during automatic processing" },
    { key: "D", text: "Failure to use lead apron with thyroid collar during exposure" }
  ],
  correctAnswer: "A",
  rationale: "**A. Defective or deteriorated intensifying screens within the cassette**\n\nIntensifying screens are coated with phosphors that convert X-ray photons into visible light, which then exposes the film. If the screens become defective, dirty, or lose phosphor sensitivity, they emit less light, producing a light, underexposed image even when exposure factors are correct. Proper maintenance includes regular cleaning and replacement to ensure optimal image density.",
  incorrectRationales: {
    B: "**B. Film placed backward in the cassette during exposure**\n\nFilm placed backward produces a lighter image with a tire-tread pattern, but this occurs with intraoral film, not panoramic film in a cassette.",
    C: "**C. Excessive developer temperature during automatic processing**\n\nExcessive developer temperature results in an overdeveloped (dark) image, not a light one.",
    D: "**D. Failure to use lead apron with thyroid collar during exposure**\n\nAbsence of a lead apron has no effect on image density; it only affects patient protection, not radiographic exposure."
  },
  boardTrap: "The NBDHE often tests intensifying screens using light versus dark film clues. A light image with normal processing suggests screen malfunction or improper contact between film and screen—not exposure error.",
  memoryHook: "If it’s light, check the light maker. A light panoramic film = faulty intensifying screen."
},
{
  id: "rad-047",
  type: "application",
  subject: "Radiology & Structural Analysis",
  topic: "Digital Resolution and Spatial Detail",
  difficulty: "medium",
  question: "A dental hygienist compares two digital radiographs of the same patient. One image was taken with a high-resolution sensor set at 20 line pairs per millimeter, while the other was produced with a lower-resolution sensor at 10 line pairs per millimeter. Both images show correct exposure and contrast, but one allows clearer visualization of incipient interproximal caries. Based on this information, which of the following characteristics best explains the difference in diagnostic detail between the two images?",
  choices: [
    { key: "A", text: "Smaller pixel size allows greater spatial resolution and image sharpness" },
    { key: "B", text: "Larger pixel size increases sensor sensitivity and improves contrast perception" },
    { key: "C", text: "Higher kVp settings increase pixel density, reducing scatter interference" },
    { key: "D", text: "Increased dynamic range compensates for resolution loss by enhancing contrast" }
  ],
  correctAnswer: "A",
  rationale: "**A. Smaller pixel size allows greater spatial resolution and image sharpness**\n\nIn digital radiography, spatial resolution—the ability to distinguish small, separate structures—is determined primarily by pixel size and density. Smaller pixels capture finer image detail because more pixels per millimeter record the same anatomical region. A sensor capable of 20 line pairs/mm produces nearly double the detail of a 10 line pair/mm system. This results in sharper, more diagnostic images, especially for subtle findings such as incipient caries or early bone loss.",
  incorrectRationales: {
    B: "**B. Larger pixel size increases sensor sensitivity and improves contrast perception**\n\nLarger pixels reduce the number of data points per image, lowering spatial resolution, not improving it.",
    C: "**C. Higher kVp settings increase pixel density, reducing scatter interference**\n\nkVp affects image contrast, not spatial resolution or pixel size.",
    D: "**D. Increased dynamic range compensates for resolution loss by enhancing contrast**\n\nDynamic range influences gray-scale display, not sharpness; it cannot substitute for poor resolution."
  },
  boardTrap: "The NBDHE frequently tests pixel size versus image quality by disguising the concept under resolution, detail, or sharpness. Key distinction: Smaller pixels → more detail, higher resolution; Larger pixels → less detail, more blur.",
  memoryHook: "Small pixels, big detail. Tiny pixels = sharp picture; big pixels = blurry image."
},
{
  id: "rad-048",
  type: "application",
  subject: "Radiology & Structural Analysis",
  topic: "Digital Spatial vs Contrast Resolution",
  difficulty: "medium",
  question: "A dental hygienist is evaluating two digital imaging systems for use in a periodontal charting study. System X produces images with exceptional fine detail, while System Y allows for subtle differentiation between soft and hard tissues. Both are properly calibrated and use identical exposure settings. Which of the following best describes the primary difference between these two systems?",
  choices: [
    { key: "A", text: "System X provides higher spatial resolution, while System Y offers greater contrast resolution" },
    { key: "B", text: "System X uses larger pixels that improve grayscale depth and detail recognition" },
    { key: "C", text: "System Y achieves higher resolution because it employs smaller pixel size and reduced line pairs per millimeter" },
    { key: "D", text: "Both systems display equal spatial and contrast resolution if operated at the same kilovoltage" }
  ],
  correctAnswer: "A",
  rationale: "**A. System X provides higher spatial resolution, while System Y offers greater contrast resolution**\n\nSpatial resolution refers to a system’s ability to record fine detail and sharpness — determined by pixel size and sensor matrix density. Contrast resolution, on the other hand, measures a system’s ability to differentiate between subtle shades of gray, determined by bit depth (gray-scale levels). Thus, System X (high detail) = higher spatial resolution, while System Y (better tissue differentiation) = higher contrast resolution.",
  incorrectRationales: {
    B: "**B. System X uses larger pixels that improve grayscale depth and detail recognition**\n\nLarger pixels reduce, not improve, spatial resolution and fine detail.",
    C: "**C. System Y achieves higher resolution because it employs smaller pixel size and reduced line pairs per millimeter**\n\nA higher line pair/mm value increases resolution; fewer line pairs reduce detail.",
    D: "**D. Both systems display equal spatial and contrast resolution if operated at the same kilovoltage**\n\nkVp affects radiographic contrast but not a digital system’s inherent resolution characteristics."
  },
  boardTrap: "The NBDHE often disguises these terms by using detail, sharpness, or clarity for spatial resolution and gray differentiation for contrast resolution. Many students confuse these as identical properties — they are distinct.",
  memoryHook: "Small pixels = sharp image; more bits = more shades. Resolution = clarity. Contrast = gray range."
},
{
  id: "rad-049",
  type: "application",
  subject: "Radiology & Structural Analysis",
  topic: "Digital Exposure Latitude",
  difficulty: "medium",
  question: "Two dental hygienists use different imaging systems to capture full-mouth series on patients with varying bone density. Hygienist A uses a conventional film-based system, while Hygienist B uses a digital system. Despite minor overexposure on one of the images, the digital radiograph remains diagnostically acceptable after brightness and contrast adjustment. Which of the following properties of digital imaging explains this outcome?",
  choices: [
    { key: "A", text: "Increased pixel density allows higher spatial resolution" },
    { key: "B", text: "Greater detector efficiency compensates for underexposure" },
    { key: "C", text: "Higher kVp setting improves the sensor’s sensitivity to radiation" },
    { key: "D", text: "Wide exposure latitude allows post-processing correction without image retake" }
  ],
  correctAnswer: "D",
  rationale: "**D. Wide exposure latitude allows post-processing correction without image retake**\n\nDigital radiography offers a wide exposure latitude, meaning it can accurately capture diagnostic information across a broad range of radiation intensities. This flexibility allows clinicians to adjust brightness and contrast post-exposure, compensating for slight over- or underexposure without compromising diagnostic value — a key advantage over film, which has a narrow latitude and requires precise exposure settings.",
  incorrectRationales: {
    A: "**A. Increased pixel density allows higher spatial resolution**\n\nPixel density affects spatial resolution, not the range of acceptable exposure.",
    B: "**B. Greater detector efficiency compensates for underexposure**\n\nDetector efficiency influences image quality and dose efficiency, but not latitude for correction.",
    C: "**C. Higher kVp setting improves the sensor’s sensitivity to radiation**\n\nIncreasing kVp changes beam energy and contrast, not the sensor’s ability to tolerate exposure variation."
  },
  boardTrap: "The NBDHE often disguises this concept with terms like margin for exposure error, range of diagnostic acceptability, or ability to compensate for improper exposure. Only digital systems have wide latitude, while film requires precise technique.",
  memoryHook: "Digital forgives; film forgets. Digital = wide latitude → flexible; Film = narrow latitude → retake."
},
{
  id: "rad-050",
  type: "application",
  subject: "Radiology & Structural Analysis",
  topic: "Digital Receptor Systems",
  difficulty: "medium",
  question: "A dental hygiene clinic is transitioning from traditional film radiography to digital imaging. During training, the instructor explains that one type of receptor uses a reusable plate that must be processed through a scanning device before viewing, while another type provides an instant image directly on the computer screen. Which of the following statements accurately distinguishes these two systems?",
  choices: [
    { key: "A", text: "The reusable plate provides higher spatial resolution than direct digital sensors" },
    { key: "B", text: "The reusable plate (PSP) requires laser scanning for image transfer, while direct sensors transmit images instantly to the computer" },
    { key: "C", text: "The direct digital sensor requires chemical processing after each exposure" },
    { key: "D", text: "The direct digital sensor must be erased with bright light before reuse" }
  ],
  correctAnswer: "B",
  rationale: "**B. The reusable plate (PSP) requires laser scanning for image transfer, while direct sensors transmit images instantly to the computer**\n\nPhotostimulable phosphor (PSP) plates capture a latent image that must be read by a laser scanner to convert stored energy into a visible image. In contrast, direct digital sensors (such as CCD or CMOS) convert X-ray energy into electronic signals that are transmitted instantly to the computer. PSP systems resemble traditional film in workflow, while direct sensors offer immediate feedback.",
  incorrectRationales: {
    A: "**A. The reusable plate provides higher spatial resolution than direct digital sensors**\n\nPSP systems generally have lower spatial resolution than direct digital sensors because of light scattering during laser scanning.",
    C: "**C. The direct digital sensor requires chemical processing after each exposure**\n\nNeither PSP nor direct sensors require chemical processing; they are digital systems.",
    D: "**D. The direct digital sensor must be erased with bright light before reuse**\n\nOnly PSP plates require erasing with bright light before reuse — not direct sensors."
  },
  boardTrap: "The NBDHE often confuses PSP plates with direct sensors by using phrases like immediate image or reusable receptor. Remember: PSP = process to view; Sensor = instant view.",
  memoryHook: "PSP waits, sensor creates. PSP = scan to see; Sensor = see instantly."
},
{
  id: "eth-001",
  type: "application",
  subject: "Ethics & Professional Practice",
  topic: "Regulatory Agencies – OSHA vs CDC",
  difficulty: "medium",
  question: "During a routine inspection, a dental hygiene student notices that several sharps containers in the sterilization area are filled beyond capacity. The supervising dentist insists that the containers can remain in use until the end of the week because “it’s not affecting patient care.” The student recalls that compliance with which regulatory body specifically protects employees rather than patients in this situation?",
  choices: [
    { key: "A", text: "Centers for Disease Control and Prevention (CDC)" },
    { key: "B", text: "Environmental Protection Agency (EPA)" },
    { key: "C", text: "American Dental Association (ADA)" },
    { key: "D", text: "Occupational Safety and Health Administration (OSHA)" }
  ],
  correctAnswer: "D",

  rationale: "**D. Occupational Safety and Health Administration (OSHA)**\nOSHA (Occupational Safety and Health Administration) establishes and enforces standards that ensure safe and healthful working conditions for employees. It focuses on protecting dental personnel from workplace hazards such as sharps injuries, chemical exposure, and bloodborne pathogens.",

  incorrectRationales: {
    A: "**A. Centers for Disease Control and Prevention (CDC)**\nIncorrect — The CDC issues infection control guidelines, not enforceable regulations. Its focus is on protecting patients through evidence-based recommendations, while OSHA creates mandatory laws that protect employees.",
    B: "**B. Environmental Protection Agency (EPA)**\nIncorrect — The EPA regulates the disposal of hazardous waste and materials such as amalgam and chemicals, not employee safety. It governs environmental protection rather than workplace health standards.",
    C: "**C. American Dental Association (ADA)**\nIncorrect — The ADA is a professional organization, not a regulatory agency. It develops ethical codes and clinical recommendations but has no enforcement authority for workplace or safety compliance."
  },

  boardTrap: "Students often confuse OSHA with the CDC. The CDC provides guidelines for infection control directed primarily toward patient safety, while OSHA enforces laws to protect employees.",

  memoryHook: "Think OSHA for Occupational — “O” for Office worker safety, not Chairside care."
},
{
  id: "eth-002",
  type: "application",
  subject: "Ethics & Professional Practice",
  topic: "OSHA Training Requirements",
  difficulty: "medium",
  question: "All of the following are required components of OSHA training for dental healthcare personnel except:",
  choices: [
    { key: "A", text: "Training on patient informed consent procedures" },
    { key: "B", text: "Bloodborne pathogen exposure control plan" },
    { key: "C", text: "Proper use and disposal of personal protective equipment (PPE)" },
    { key: "D", text: "Protocols for handling sharps and contaminated waste" }
  ],
  correctAnswer: "A",

  rationale: "**A. Training on patient informed consent procedures**\nOSHA requires employee training on workplace safety issues, including bloodborne pathogen standards, exposure control plans, PPE use, and safe handling of sharps or hazardous waste. Patient informed consent relates to legal and ethical responsibilities for patient care, not to OSHA’s employee-safety mandate.",

  incorrectRationales: {
    B: "**B. Bloodborne pathogen exposure control plan**\nIncorrect — OSHA mandates that all dental healthcare personnel receive training on bloodborne pathogens and the exposure control plan, which outlines procedures for preventing occupational exposure to infectious materials.",
    C: "**C. Proper use and disposal of personal protective equipment (PPE)**\nIncorrect — OSHA requires training on how to properly select, use, and dispose of PPE such as gloves, masks, and eyewear to protect employees from exposure to blood and bodily fluids.",
    D: "**D. Protocols for handling sharps and contaminated waste**\nIncorrect — OSHA enforces specific safety standards for the handling and disposal of sharps and contaminated waste to prevent needlestick injuries and reduce infection risk among employees."
  },

  boardTrap: "Many students mistakenly believe OSHA includes patient-centered topics such as informed consent or HIPAA. OSHA’s focus is strictly employee protection.",

  memoryHook: "Think O-S-H-A → Only Staff Health & Awareness, not patient consent or privacy."
},
{
  id: "eth-003",
  type: "application",
  subject: "Ethics & Professional Practice",
  topic: "OSHA Training Requirements",
  difficulty: "medium",
  question: "A dental hygiene practice hires a new clinical assistant who previously worked in another healthcare setting. The office manager states that since the assistant has “years of experience,” OSHA training can be skipped to save time. Which of the following statements best reflects OSHA’s requirement regarding training in this situation?",
  choices: [
    { key: "A", text: "Training is optional if previous experience can be documented." },
    { key: "B", text: "Training must be completed at the time of initial employment and repeated annually." },
    { key: "C", text: "Training is only required if an exposure incident occurs." },
    { key: "D", text: "Training must be completed within six months of hire." }
  ],
  correctAnswer: "B",

  rationale: "**B. Training must be completed at the time of initial employment and repeated annually.**\nOSHA mandates that all employees with potential occupational exposure to bloodborne pathogens receive training at the time of initial assignment and at least annually thereafter. Prior experience or employment elsewhere does not replace this requirement.",

  incorrectRationales: {
    A: "**A. Training is optional if previous experience can be documented.**\nIncorrect — OSHA requires that all new employees receive safety training specific to their new workplace, regardless of prior experience or certification. Each facility’s policies, hazards, and exposure control plans are unique and must be reviewed upon hire.",
    C: "**C. Training is only required if an exposure incident occurs.**\nIncorrect — Waiting until after an exposure violates OSHA regulations. Training must occur proactively to prevent incidents, not reactively after they happen.",
    D: "**D. Training must be completed within six months of hire.**\nIncorrect — OSHA mandates that training be provided at the time of initial employment, before the employee is exposed to potential hazards. Delaying training places both the employee and the employer in violation of federal law."
  },

  boardTrap: "Students often confuse “annually” with “once upon hiring” or think prior training transfers between offices. OSHA requires site-specific and recurring training.",

  memoryHook: "Think “B” for Begin and repeat — training must begin when you’re hired and repeat every year."
},
{
  id: "eth-004",
  type: "application",
  subject: "Ethics & Professional Practice",
  topic: "CDC Headquarters and Federal Agencies",
  difficulty: "medium",
  question: "A dental hygiene educator refers to national infection control guidelines developed by the Centers for Disease Control and Prevention. These guidelines originate from the CDC headquarters located in which U.S. city?",
  choices: [
    { key: "A", text: "Washington, D.C." },
    { key: "B", text: "Atlanta, Georgia" },
    { key: "C", text: "Chicago, Illinois" },
    { key: "D", text: "Bethesda, Maryland" }
  ],
  correctAnswer: "B",

  rationale: "**B. Atlanta, Georgia**\nThe Centers for Disease Control and Prevention (CDC) is headquartered in Atlanta, Georgia. It functions under the U.S. Department of Health and Human Services (HHS) and provides science-based recommendations and guidelines for preventing and controlling disease, including dental infection control standards.",

  incorrectRationales: {
    A: "**A. Washington, D.C.**\nIncorrect — While Washington, D.C. is home to many federal agencies, the CDC (Centers for Disease Control and Prevention) is not headquartered there. It operates under the Department of Health and Human Services, which is based in D.C., but its own headquarters are in Atlanta, Georgia.",
    C: "**C. Chicago, Illinois**\nIncorrect — Chicago is associated with the American Dental Association (ADA) headquarters, not the CDC. The ADA develops professional codes and recommendations, whereas the CDC issues national public health and infection control guidelines.",
    D: "**D. Bethesda, Maryland**\nIncorrect — Bethesda is home to the National Institutes of Health (NIH), a research-based agency. The CDC focuses on disease prevention and outbreak control and is located in Atlanta, Georgia."
  },

  boardTrap: "Many students mistakenly assume that all federal agencies are based in Washington, D.C. The CDC is an exception — it operates primarily from Atlanta.",

  memoryHook: "Think “A” for Atlanta → “A” in CDC stands for Advice on infection control from Atlanta."
},
{
  id: "eth-005",
  type: "application",
  subject: "Ethics & Professional Practice",
  topic: "Standard of Care",
  difficulty: "medium",
  question: "A dental hygienist fails to update a patient’s medical history before providing local anesthesia, and the patient experiences an adverse reaction. This situation is evaluated against the profession’s established standard of care. Which of the following best describes the nature of the standard of care?",
  choices: [
    { key: "A", text: "It is solely an ethical guideline with no legal consequences." },
    { key: "B", text: "It represents both a legal and ethical obligation." },
    { key: "C", text: "It is determined exclusively by the state dental board." },
    { key: "D", text: "It applies only to clinical procedures involving direct supervision." }
  ],
  correctAnswer: "B",

  rationale: "**B. It represents both a legal and ethical obligation.**\nThe standard of care represents the level of judgment, skill, and care that a reasonably prudent dental professional would exercise under similar circumstances. It carries both ethical and legal implications. Failure to meet the standard of care can result in malpractice liability (legal) and professional misconduct (ethical).",

  incorrectRationales: {
    A: "**A. It is solely an ethical guideline with no legal consequences.**\nIncorrect — The standard of care carries both ethical and legal implications. Failure to meet this standard may result in allegations of negligence or malpractice, not just ethical criticism.",
    C: "**C. It is determined exclusively by the state dental board.**\nIncorrect — While the state dental board helps define scope of practice, the standard of care is established collectively by professional consensus, case law, and accepted clinical practices, not a single governing body.",
    D: "**D. It applies only to clinical procedures involving direct supervision.**\nIncorrect — The standard of care applies to all professional actions, including independent decisions, patient communication, documentation, and infection control—regardless of supervision level."
  },

  boardTrap: "Many confuse “standard of care” as only ethical because it reflects professionalism and moral duty. However, it is also legally enforceable — courts and licensing boards use it to determine negligence.",

  memoryHook: "Think “CARE covers both COURT and CONSCIENCE” — legal in court, ethical in conscience."
},
{
  id: "eth-006",
  type: "recall",
  subject: "Ethics & Professional Practice",
  topic: "ADPIED Process of Care",
  difficulty: "medium",
  question: "All of the following describe components of the ADPIED process in dental hygiene practice except:",
  choices: [
    { key: "A", text: "A — Assessment involves collecting both subjective and objective data." },
    { key: "B", text: "D — Diagnosis identifies the patient’s unmet human needs related to oral health." },
    { key: "C", text: "P — Planning includes setting priorities and establishing realistic goals." },
    { key: "D", text: "E — Evaluation determines financial reimbursement eligibility for services." }
  ],
  correctAnswer: "D",

  rationale: "**D. E — Evaluation determines financial reimbursement eligibility for services.**\nADPIED is the dental hygiene process of care, which stands for Assessment, Diagnosis, Planning, Implementation, Evaluation, and Documentation. Evaluation measures the effectiveness of care and the patient’s progress toward goals—not financial or administrative outcomes.",

  incorrectRationales: {
    A: "**A. A — Assessment involves collecting both subjective and objective data.**\nIncorrect — This is a correct component of the ADPIED process. The Assessment phase includes gathering health histories, clinical findings, and patient-reported information to form a comprehensive data set for diagnosis.",
    B: "**B. D — Diagnosis identifies the patient’s unmet human needs related to oral health.**\nIncorrect — This is also accurate. The Diagnosis phase interprets assessment data to identify the patient’s oral health problems and unmet needs that the hygienist is qualified to address.",
    C: "**C. P — Planning includes setting priorities and establishing realistic goals.**\nIncorrect — This statement correctly describes the Planning phase, which involves developing evidence-based strategies, setting measurable outcomes, and collaborating with the patient to determine priorities for care."
  },

  boardTrap: "Students sometimes misinterpret “evaluation” as billing or coding review. The NBDHE focuses strictly on clinical and patient-centered outcomes, not insurance or reimbursement.",

  memoryHook: "Think ADPIED = Always Deliver Patient-Individualized Ethical Decisions — not dollars."
},
{
  id: "eth-007",
  type: "application",
  subject: "Ethics & Professional Practice",
  topic: "Ethical Principles – Nonmaleficence",
  difficulty: "medium",
  question: "A dental hygienist recognizes that a patient’s radiographs appear overexposed and may not provide accurate diagnostic information. The supervising dentist insists that the hygienist proceed with treatment to “save time,” even though repeating the images would expose the patient to additional radiation. Which ethical principle is most directly violated if the hygienist follows the dentist’s instruction?",
  choices: [
    { key: "A", text: "Justice" },
    { key: "B", text: "Veracity" },
    { key: "C", text: "Nonmaleficence" },
    { key: "D", text: "Autonomy" }
  ],
  correctAnswer: "C",

  rationale: "**C. Nonmaleficence**\nThe principle of nonmaleficence requires the clinician to avoid causing harm. Proceeding with potentially inaccurate radiographs risks improper diagnosis or treatment—causing preventable harm. The hygienist’s ethical duty is to protect the patient’s well-being, even under pressure from authority.",

  incorrectRationales: {
    A: "**A. Justice**\nIncorrect — Justice relates to fairness and equality in care delivery, ensuring all patients receive the same quality of treatment regardless of background or circumstance. This scenario involves potential harm, not inequity or discrimination.",
    B: "**B. Veracity**\nIncorrect — Veracity means truth-telling and honesty in all professional interactions. While honesty is vital, the ethical conflict here centers on patient safety and harm prevention, not truthfulness.",
    D: "**D. Autonomy**\nIncorrect — Autonomy involves respecting the patient’s right to make informed decisions about their care. In this case, the patient’s rights were not directly violated; the issue is the clinician’s obligation to avoid harm by preventing unnecessary radiation exposure."
  },

  boardTrap: "This scenario tempts students to choose veracity (truth-telling) or autonomy (patient’s right to choose). However, the primary issue is doing no harm, since the act of proceeding with compromised diagnostic data jeopardizes patient safety.",

  memoryHook: "Think “Nonmaleficence = No Malicious Effects.” When in doubt, protect the patient from harm first—ethics begins with safety."
},
{
  id: "eth-008",
  type: "application",
  subject: "Ethics & Professional Practice",
  topic: "Ethical Principles – Beneficence",
  difficulty: "medium",
  question: "A dental hygienist volunteers at a community health fair providing oral cancer screenings and patient education at no charge. This professional behavior best exemplifies which ethical principle?",
  choices: [
    { key: "A", text: "Justice" },
    { key: "B", text: "Beneficence" },
    { key: "C", text: "Autonomy" },
    { key: "D", text: "Fidelity" }
  ],
  correctAnswer: "B",

  rationale: "**B. Beneficence**\nBeneficence is the ethical principle that emphasizes promoting the well-being of others and acting in the patient’s or community’s best interest. Providing free screenings or community education reflects the hygienist’s commitment to improving oral health and preventing disease.",

  incorrectRationales: {
    A: "**A. Justice**\nIncorrect — Justice emphasizes fairness and equality in the distribution of care and resources. While the hygienist is helping the public, this action focuses on doing good for others, not on ensuring equal treatment among groups.",
    C: "**C. Autonomy**\nIncorrect — Autonomy relates to respecting a patient’s right to make informed decisions about their care. The scenario describes voluntary service benefiting others, not decision-making or self-determination.",
    D: "**D. Fidelity**\nIncorrect — Fidelity involves keeping promises and maintaining trust within professional relationships. Providing community service is an act of kindness and public good, not fulfilling a prior obligation or promise."
  },

  boardTrap: "Beneficence is often confused with justice, which involves fairness and equal distribution of care. The difference is subtle: beneficence focuses on helping, while justice focuses on fairness.",

  memoryHook: "Think “Be Beneficent = Be Benevolent.” Beneficence means doing good—going beyond duty to improve someone’s health."
},
{
  id: "eth-009",
  type: "application",
  subject: "Ethics & Professional Practice",
  topic: "Ethical Principles – Autonomy",
  difficulty: "medium",
  question: "A patient diagnosed with moderate periodontitis refuses scaling and root planing, stating she only wants a “regular cleaning.” The dental hygienist explains the risks and benefits, documents the refusal, and provides alternative preventive recommendations. Upholding which ethical principle is the hygienist demonstrating?",
  choices: [
    { key: "A", text: "Autonomy" },
    { key: "B", text: "Veracity" },
    { key: "C", text: "Nonmaleficence" },
    { key: "D", text: "Justice" }
  ],
  correctAnswer: "A",

  rationale: "**A. Autonomy**\nAutonomy refers to respecting the patient’s right to make informed decisions about their own care, even when those choices differ from professional recommendations. By educating the patient, obtaining informed refusal, and honoring their decision, the hygienist maintains ethical integrity and legal compliance.",

  incorrectRationales: {
    B: "**B. Veracity**\nIncorrect — Veracity refers to truth-telling and honesty in all professional communications. While the hygienist communicates truthfully, the focus of this scenario is the patient’s right to make an informed decision, not the hygienist’s honesty.",
    C: "**C. Nonmaleficence**\nIncorrect — Nonmaleficence means “do no harm.” Although avoiding unnecessary treatment aligns with this principle, the key ethical action here is respecting the patient’s decision after being fully informed.",
    D: "**D. Justice**\nIncorrect — Justice relates to fair and equitable treatment among patients. The issue in this scenario is not equality or fairness, but honoring the patient’s autonomy and right to accept or refuse care."
  },

  boardTrap: "Students often overthink and select nonmaleficence (“do no harm”), but the defining feature here is the patient’s decision-making right, not the clinician’s intent to protect.",

  memoryHook: "Think “Auto = Self” — autonomy means self-rule. The patient drives the decision; the clinician provides the map."
},
{
  id: "eth-010",
  type: "application",
  subject: "Ethics & Professional Practice",
  topic: "Ethical Principles – Justice",
  difficulty: "medium",
  question: "A dental hygienist working in a community clinic schedules appointments so that patients from all socioeconomic backgrounds have equal access to preventive services. Which ethical principle is primarily demonstrated by this action?",
  choices: [
    { key: "A", text: "Beneficence" },
    { key: "B", text: "Justice" },
    { key: "C", text: "Autonomy" },
    { key: "D", text: "Fidelity" }
  ],
  correctAnswer: "B",

  rationale: "**B. Justice**\nThe principle of justice emphasizes fairness and equality in providing care. It requires that patients receive treatment without discrimination based on socioeconomic status, race, gender, or other personal factors. In this scenario, the hygienist ensures equal opportunity for access to oral healthcare.",

  incorrectRationales: {
    A: "**A. Beneficence**\nIncorrect — Beneficence means acting for the good of others through kindness, charity, or public service. While offering preventive services benefits patients, the focus here is on fairness and equal access, which defines the principle of justice.",
    C: "**C. Autonomy**\nIncorrect — Autonomy concerns the patient’s right to make informed decisions about their own treatment. In this scenario, the ethical emphasis is on the clinician’s fair scheduling practices, not patient decision-making.",
    D: "**D. Fidelity**\nIncorrect — Fidelity involves loyalty and keeping promises to individuals or the profession. Ensuring equitable care across socioeconomic groups reflects justice, not a matter of fulfilling personal commitments."
  },

  boardTrap: "Students often confuse justice with beneficence. While beneficence is about doing good, justice focuses on doing what’s fair.",

  memoryHook: "Think “Justice = Just and Fair.” Equal care, equal respect, every patient."
},
{
  id: "eth-011",
  type: "application",
  subject: "Ethics & Professional Practice",
  topic: "Ethical Principles – Veracity",
  difficulty: "medium",
  question: "A dental hygienist discovers after dismissing a patient that a piece of calculus was left behind on the distal surface of a molar. The hygienist decides not to inform the patient, reasoning that “it will probably be fine until the next appointment.” Which ethical principle is violated by this willful omission?",
  choices: [
    { key: "A", text: "Autonomy" },
    { key: "B", text: "Nonmaleficence" },
    { key: "C", text: "Justice" },
    { key: "D", text: "Veracity" }
  ],
  correctAnswer: "D",

  rationale: "**D. Veracity**\nVeracity refers to truthfulness and honesty in all professional interactions. Choosing not to disclose an error, even one perceived as minor, constitutes a willful omission—a deliberate failure to communicate relevant information. This violates the patient’s right to accurate, honest information regarding their care.",

  incorrectRationales: {
    A: "**A. Autonomy**\nIncorrect — Autonomy involves respecting the patient’s right to make informed decisions about their care. While withholding information indirectly limits autonomy, the primary violation here is dishonesty through omission, which falls under veracity.",
    B: "**B. Nonmaleficence**\nIncorrect — Nonmaleficence means avoiding harm. Leaving calculus behind may have clinical implications, but the ethical breach in this case is failing to disclose the truth, not the act of causing physical harm.",
    C: "**C. Justice**\nIncorrect — Justice focuses on fairness and equal treatment of patients. The issue here does not involve fairness or resource distribution; it concerns truthfulness and transparency with the patient."
  },

  boardTrap: "This question tempts students to select nonmaleficence (do no harm), but the harm here is not physical—it’s deception through omission. Veracity is the correct principle because it addresses truth-telling and integrity.",

  memoryHook: "Think “Veracity = Verbal honesty.” Silence that hides the truth still breaks trust."
},
{
  id: "eth-012",
  type: "application",
  subject: "Ethics & Professional Practice",
  topic: "Ethical Principles – Social Trust",
  difficulty: "medium",
  question: "A long-term patient reports discomfort following a recent scaling and root planing procedure. Upon review, the dental hygienist realizes that a curette with a dull blade was used throughout the appointment due to the sterilizer being out of order that day. The hygienist documents the case but decides not to inform the patient or supervising dentist, believing the issue will resolve on its own. This behavior violates which core ethical concept?",
  choices: [
    { key: "A", text: "Social Trust" },
    { key: "B", text: "Beneficence" },
    { key: "C", text: "Justice" },
    { key: "D", text: "Fidelity" }
  ],
  correctAnswer: "A",

  rationale: "**A. Social Trust**\nSocial trust is a foundational principle of professional ethics that underlies the public’s confidence in the dental profession. Acting transparently and maintaining high professional standards builds that trust. Failing to disclose substandard care erodes both social trust and the standard of care, jeopardizing the profession’s integrity and the patient’s confidence.",

  incorrectRationales: {
    B: "**B. Beneficence**\nIncorrect — Beneficence focuses on doing good and acting in the best interest of the patient. While the hygienist’s inaction fails to serve the patient’s well-being, the deeper violation here lies in breaking professional trust through concealment, not a failure to act kindly.",
    C: "**C. Justice**\nIncorrect — Justice emphasizes fairness and equality in care delivery. This case involves honesty and professional integrity, not issues of fairness or access to care.",
    D: "**D. Fidelity**\nIncorrect — Fidelity refers to keeping promises and maintaining loyalty to patients and colleagues. Although the hygienist has breached loyalty, the broader harm is to public confidence in the profession, which defines a violation of social trust."
  },

  boardTrap: "Many students confuse social trust with fidelity (keeping commitments). However, fidelity applies to individual relationships, while social trust relates to the profession’s collective reputation. The NBDHE often tests this distinction through case-based scenarios involving concealment of mistakes.",

  memoryHook: "Think “Social trust = Society’s trust.” One hidden shortcut can break public confidence in every clinician who follows."
},
{
  id: "eth-013",
  type: "application",
  subject: "Ethics & Professional Practice",
  topic: "Legal Foundations of Dental Hygiene Practice",
  difficulty: "hard",
  question: "All of the following statements accurately describe areas of law that apply to dental hygiene practice except:",
  choices: [
    { key: "A", text: "Criminal law addresses offenses against society, such as practicing without a license." },
    { key: "B", text: "Civil law covers disputes between individuals, including cases of negligence or malpractice." },
    { key: "C", text: "Contractual law governs state dental board disciplinary actions and license suspension hearings." },
    { key: "D", text: "Civil law may involve breach of implied agreements, such as failure to provide reasonable care once treatment has begun." }
  ],
  correctAnswer: "C",

  rationale: "**C. Contractual law governs state dental board disciplinary actions and license suspension hearings.**\nContractual law regulates legally binding agreements—explicit or implied—between two parties, such as a patient and provider. State dental board disciplinary hearings fall under administrative law, not contractual law. This distinction makes the question difficult, as it tests knowledge of how different legal frameworks overlap in dental practice.",

  incorrectRationales: {
    A: "**A. Criminal law addresses offenses against society, such as practicing without a license.**\nIncorrect — This statement is accurate. Criminal law deals with offenses considered harmful to society as a whole and can result in fines, probation, or imprisonment. Practicing without a valid license is a criminal offense, not a civil matter.",
    B: "**B. Civil law covers disputes between individuals, including cases of negligence or malpractice.**\nIncorrect — This statement correctly describes civil law, which governs noncriminal disputes between private parties. Civil cases in dental hygiene typically involve negligence, malpractice, or breach of contract claims.",
    D: "**D. Civil law may involve breach of implied agreements, such as failure to provide reasonable care once treatment has begun.**\nIncorrect — This statement is also accurate. Civil law includes tort and contractual disputes, such as a breach of implied contract, which occurs when a provider fails to meet the standard of care after initiating treatment."
  },

  boardTrap: "Many test-takers confuse contractual law with administrative or civil law because all can involve disputes or penalties. Only administrative law governs licensure actions and professional discipline.",

  memoryHook: "Think “Contract = Commitment between people; Administrative = Action by the Board.”"
},
{
  id: "eth-014",
  type: "application",
  subject: "Ethics & Professional Practice",
  topic: "Consent and Legal Communication",
  difficulty: "medium",
  question: "A dental hygienist presents a written agreement outlining the proposed periodontal therapy, associated risks, possible benefits, alternative treatments, and the option of doing nothing. The patient reads the document, asks questions, and signs it before treatment begins. This situation best represents which concept?",
  choices: [
    { key: "A", text: "Expressed consent" },
    { key: "B", text: "Implied consent" },
    { key: "C", text: "Informed consent" },
    { key: "D", text: "Contractual agreement" }
  ],
  correctAnswer: "C",

  rationale: "**C. Informed consent**\nInformed consent is both an ethical and legal requirement ensuring the patient understands all relevant information—including alternatives and the right to decline treatment—before agreeing. While consent may be verbal or written, true informed consent requires comprehension and voluntary choice, not just a signature.",

  incorrectRationales: {
    A: "**A. Expressed consent**\nIncorrect — Expressed consent simply means verbal or written agreement to treatment, without necessarily ensuring the patient fully understands the nature, risks, and alternatives. Informed consent requires comprehension and voluntary acceptance after thorough explanation.",
    B: "**B. Implied consent**\nIncorrect — Implied consent is assumed through patient behavior, such as opening the mouth for an exam. It applies to routine, low-risk procedures, not complex or invasive treatments like periodontal therapy.",
    D: "**D. Contractual agreement**\nIncorrect — A contractual agreement refers to a legal or financial arrangement, not ethical patient communication. Consent forms are part of ethical and legal standards of care, not employment or service contracts."
  },

  boardTrap: "Many students mislabel this scenario as expressed consent because a written form is used. However, “expressed” refers to the format, while “informed” refers to the content and understanding. The NBDHE often tests this subtle distinction.",

  memoryHook: "Think “Informed = Informed mind.” A signed paper means nothing if the patient doesn’t truly understand."
},
{
  id: "eth-015",
  type: "application",
  subject: "Ethics & Professional Practice",
  topic: "Types of Consent",
  difficulty: "medium",
  question: "During a routine oral prophylaxis, the patient reclines in the dental chair, opens their mouth, and allows the hygienist to begin treatment without signing a written form. Which essential element of implied consent is demonstrated in this situation?",
  choices: [
    { key: "A", text: "Legal documentation signed before the procedure" },
    { key: "B", text: "Patient’s voluntary behavior indicating permission for routine care" },
    { key: "C", text: "Verbal acknowledgment witnessed by office staff" },
    { key: "D", text: "Provider’s professional judgment that the procedure is necessary" }
  ],
  correctAnswer: "B",

  rationale: "**B. Patient’s voluntary behavior indicating permission for routine care**\nImplied consent is granted through a patient’s actions or behavior rather than explicit words or signatures. When a patient sits down, opens their mouth, and cooperates during a routine, low-risk procedure, their behavior demonstrates voluntary permission.",

  incorrectRationales: {
    A: "**A. Legal documentation signed before the procedure**\nIncorrect — Implied consent does not require a written form or signature. Written documentation is part of expressed or informed consent, which applies to more invasive or high-risk procedures.",
    C: "**C. Verbal acknowledgment witnessed by office staff**\nIncorrect — Verbal acknowledgment is an example of expressed consent, not implied consent. Implied consent is demonstrated through nonverbal, cooperative behavior, such as sitting in the chair and opening the mouth for treatment.",
    D: "**D. Provider’s professional judgment that the procedure is necessary**\nIncorrect — The provider’s judgment alone does not constitute consent. The key element in implied consent is the patient’s voluntary participation, not the clinician’s decision-making."
  },

  boardTrap: "The NBDHE often contrasts implied with informed consent. Implied applies to routine procedures, while informed is required for invasive or high-risk care. Many students mistakenly choose verbal or written consent options—both are expressed, not implied.",

  memoryHook: "Think “Implied = In action.” No paper, no words—just behavior showing agreement."
},
{
  id: "eth-016",
  type: "application",
  subject: "Ethics & Professional Practice",
  topic: "Assault and Battery",
  difficulty: "medium",
  question: "A patient becomes visibly anxious when the dental hygienist raises a syringe to administer local anesthesia. The patient clearly states, “I don’t want the injection.” The hygienist proceeds to give the injection anyway. Which statement correctly differentiates assault from battery in this scenario?",
  choices: [
    { key: "A", text: "Assault occurs only when physical contact causes harm, while battery is limited to verbal threats." },
    { key: "B", text: "Assault is the threat of unwanted contact, and battery is the actual physical act of contact without consent." },
    { key: "C", text: "Both assault and battery require physical injury for legal action." },
    { key: "D", text: "Assault and battery are ethical violations but not legal offenses in dental hygiene practice." }
  ],
  correctAnswer: "B",

  rationale: "**B. Assault is the threat of unwanted contact, and battery is the actual physical act of contact without consent.**\nAssault is the intentional threat or attempt to cause harmful or offensive contact, creating reasonable fear or apprehension in another person. Battery is the actual unauthorized physical contact that follows. In this case, raising the syringe after refusal constitutes assault; administering the injection is battery.",

  incorrectRationales: {
    A: "**A. Assault occurs only when physical contact causes harm, while battery is limited to verbal threats.**\nIncorrect — This reverses the definitions. Assault does not require physical contact; it involves the threat or attempt to cause harm that creates fear. Battery requires actual physical contact without consent.",
    C: "**C. Both assault and battery require physical injury for legal action.**\nIncorrect — Neither requires physical injury to be actionable. The key element is intentional, nonconsensual contact or threat of harm, not whether physical damage occurred.",
    D: "**D. Assault and battery are ethical violations but not legal offenses in dental hygiene practice.**\nIncorrect — Both assault and battery are legal offenses that may carry civil and criminal penalties. They also represent ethical violations of autonomy and nonmaleficence, but they are clearly recognized under law."
  },

  boardTrap: "Students often reverse these definitions. The NBDHE expects precise understanding—assault can occur without touching, while battery requires touching without consent.",

  memoryHook: "Think “A = Anticipation, B = Body contact.” Assault happens before the touch, battery when the touch occurs."
},
{
  id: "eth-017",
  type: "application",
  subject: "Ethics & Professional Practice",
  topic: "Ownership of Dental Records",
  difficulty: "medium",
  question: "A patient requests their original dental chart and radiographs to take to another office. The dentist refuses to release the originals but offers to provide copies at a reasonable cost. Which statement best reflects the legal ownership of dental records?",
  choices: [
    { key: "A", text: "Dental records are jointly owned by the patient and the dental hygienist." },
    { key: "B", text: "Dental records are public health property once submitted to insurance." },
    { key: "C", text: "Dental records are the property of the dentist, while the information within belongs to the patient." },
    { key: "D", text: "Dental records become the property of the patient once treatment has been completed and paid in full." }
  ],
  correctAnswer: "C",

  rationale: "**C. Dental records are the property of the dentist, while the information within belongs to the patient.**\nLegally, the dentist (or practice owner) retains ownership of the physical records—including charts, radiographs, and digital files. However, the patient owns the information contained within and has the right to access or request copies. Refusing to provide copies would violate ethical and legal principles related to patient autonomy and confidentiality.",

  incorrectRationales: {
    A: "**A. Dental records are jointly owned by the patient and the dental hygienist.**\nIncorrect — Dental records are not jointly owned. The dentist or practice owner holds ownership of the physical or electronic record. The hygienist contributes to the documentation but does not share legal ownership.",
    B: "**B. Dental records are public health property once submitted to insurance.**\nIncorrect — Submitting insurance claims does not transfer ownership of records to public health or insurers. Insurance companies may access necessary information for billing, but the records remain property of the provider.",
    D: "**D. Dental records become the property of the patient once treatment has been completed and paid in full.**\nIncorrect — Payment does not alter record ownership. The patient owns the information contained within the record, not the physical or digital file itself. The provider must supply copies upon request but retains the originals."
  },

  boardTrap: "Students often believe that paying for treatment transfers record ownership to the patient. Payment does not alter ownership; it only affects access rights.",

  memoryHook: "Think “Dentist owns the paper; patient owns the story.”"
},
{
  id: "eth-018",
  type: "application",
  subject: "Ethics & Professional Practice",
  topic: "Cultural Competence & Informed Consent",
  difficulty: "medium",
  question: "A dental hygienist is treating a patient who speaks limited English and requests that her teenage daughter translate during the appointment. The daughter frequently answers questions for the patient without translation. The hygienist feels pressured to continue the procedure but worries that the patient may not fully understand the treatment or risks. Which action best demonstrates culturally competent and ethical care?",
  choices: [
    { key: "A", text: "Proceed with treatment since the patient’s family member is present and consenting." },
    { key: "B", text: "Provide written post-op instructions and document that consent was obtained through the daughter." },
    { key: "C", text: "Pause treatment and obtain a qualified interpreter to ensure true understanding before proceeding." },
    { key: "D", text: "Continue the procedure and review details with the dentist afterward for confirmation." }
  ],
  correctAnswer: "C",

  rationale: "**C. Pause treatment and obtain a qualified interpreter to ensure true understanding before proceeding.**\nCultural competence requires that care be delivered in a manner that respects and supports each patient’s language, values, and communication needs. Using a qualified interpreter ensures true informed consent and prevents misunderstanding due to family bias or incomplete translation. Proceeding without accurate communication violates both autonomy and justice.",

  incorrectRationales: {
    A: "**A. Proceed with treatment since the patient’s family member is present and consenting.**\nIncorrect — A family member acting as an interpreter may unintentionally alter or omit information. True informed consent requires clear, unbiased communication through a qualified interpreter, not a relative or child.",
    B: "**B. Provide written post-op instructions and document that consent was obtained through the daughter.**\nIncorrect — Written materials do not replace verbal comprehension. If the patient cannot fully understand treatment risks and benefits in their language, the consent is invalid—even if documented.",
    D: "**D. Continue the procedure and review details with the dentist afterward for confirmation.**\nIncorrect — Consulting the dentist after treatment does not correct the initial ethical violation. The clinician’s responsibility is to ensure understanding before care begins, not after."
  },

  boardTrap: "Students often assume that any family translation satisfies consent requirements. The NBDHE expects recognition that professional interpreters are required when language barriers prevent informed decision-making.",

  memoryHook: "Think “Culture Counts — Clarify before Care.” Understanding comes before action."
},
{
  id: "eth-019",
  type: "application",
  subject: "Ethics & Professional Practice",
  topic: "Conflict of Interest",
  difficulty: "medium",
  question: "A dental hygienist serves on a committee responsible for selecting oral care products to be recommended by the state dental association. One company offers the hygienist free continuing education courses and travel reimbursement if their product is chosen. Which ethical issue does this situation best represent?",
  choices: [
    { key: "A", text: "Breach of confidentiality" },
    { key: "B", text: "Conflict of interest" },
    { key: "C", text: "Fidelity" },
    { key: "D", text: "Beneficence" }
  ],
  correctAnswer: "B",

  rationale: "**B. Conflict of interest**\nA conflict of interest occurs when a professional’s personal, financial, or relational interests could improperly influence their professional judgment. Accepting incentives from a company being evaluated compromises objectivity and erodes public trust in the profession.",

  incorrectRationales: {
    A: "**A. Breach of confidentiality**\nIncorrect — Confidentiality refers to protecting patient information. This case involves professional decision-making influenced by outside benefit, not patient privacy.",
    C: "**C. Fidelity**\nIncorrect — Fidelity means faithfulness to obligations and promises. While this situation undermines professional integrity, the ethical focus is divided loyalty caused by potential gain, not failure to honor a direct commitment.",
    D: "**D. Beneficence**\nIncorrect — Beneficence involves doing good for others. Accepting a personal benefit doesn’t demonstrate disregard for patient welfare directly; it represents compromised impartiality, making conflict of interest the stronger match."
  },

  boardTrap: "Students often confuse conflict of interest with general professionalism or loyalty. The key distinction is influence—any external benefit that might bias professional judgment triggers a conflict of interest.",

  memoryHook: "Think “Conflict of Interest = Competing Interests.” When loyalty and benefit clash, ethics must win."
},
{
  id: "eth-020",
  type: "application",
  subject: "Ethics & Professional Practice",
  topic: "Whistleblowing & Environmental Compliance",
  difficulty: "medium",
  question: "A dental hygienist discovers that the supervising dentist regularly instructs staff to dispose of amalgam waste in the general trash rather than using the required mercury separator. When the hygienist expresses concern, the dentist dismisses it as “too expensive to bother with.” What is the hygienist’s most ethical and professional course of action?",
  choices: [
    { key: "A", text: "Report the violation to the appropriate regulatory agency after discussing the issue internally." },
    { key: "B", text: "Ignore the issue to protect the dentist’s reputation and job security for the staff." },
    { key: "C", text: "Post about the violation anonymously on a dental hygiene social media forum." },
    { key: "D", text: "Continue to follow the dentist’s instructions since it is his legal responsibility." }
  ],
  correctAnswer: "A",

  rationale: "**A. Report the violation to the appropriate regulatory agency after discussing the issue internally.**\nWhistleblowing refers to reporting unethical, illegal, or unsafe practices that threaten public or environmental health. The hygienist has both an ethical and legal duty to protect patients and the community by addressing the issue internally first, then reporting to the proper authority (e.g., EPA or state dental board) if corrective action isn’t taken.",

  incorrectRationales: {
    B: "**B. Ignore the issue to protect the dentist’s reputation and job security for the staff.**\nIncorrect — Ignoring a violation places loyalty above safety and conflicts with the ethical principles of nonmaleficence and social trust. Protecting public health always outweighs protecting an employer’s reputation.",
    C: "**C. Post about the violation anonymously on a dental hygiene social media forum.**\nIncorrect — Public disclosure without following proper reporting channels violates confidentiality and may lead to defamation or unprofessional conduct charges. Reporting should follow established regulatory procedures.",
    D: "**D. Continue to follow the dentist’s instructions since it is his legal responsibility.**\nIncorrect — Following an unethical order does not remove accountability. Each licensed professional is independently responsible for complying with laws and professional ethics."
  },

  boardTrap: "Students often hesitate to choose reporting options out of fear of disloyalty. The NBDHE expects recognition that ethical loyalty is to the public first, not the employer.",

  memoryHook: "Think “See something, say something—safely and professionally.” Silence never protects patients."
},
{
  id: "eth-021",
  type: "application",
  subject: "Ethics & Professional Practice",
  topic: "Legal Documentation & Record Integrity",
  difficulty: "medium",
  question: "A dental hygienist accidentally records periodontal charting for the wrong patient in the electronic record. After noticing the error later that day, she deletes the entry entirely and re-enters the correct information without notation. During an audit, the discrepancy is discovered. Which action should have been taken to maintain proper legal and ethical documentation?",
  choices: [
    { key: "A", text: "Delete the incorrect entry immediately to prevent confusion during review." },
    { key: "B", text: "Make a dated correction that clearly identifies the change without erasing the original entry." },
    { key: "C", text: "Wait until the end of the week to correct the error once all charts are finalized." },
    { key: "D", text: "Rewrite the full record from memory and replace the original note." }
  ],
  correctAnswer: "B",

  rationale: "**B. Make a dated correction that clearly identifies the change without erasing the original entry.**\nLegally and ethically, record corrections must preserve the integrity of the original entry. The proper method is to make a dated and initialed correction that identifies the change while leaving the original note visible. This ensures transparency and prevents accusations of falsification or tampering.",

  incorrectRationales: {
    A: "**A. Delete the incorrect entry immediately to prevent confusion during review.**\nIncorrect — Deleting or erasing entries violates legal recordkeeping standards. It obscures the audit trail and suggests intentional alteration.",
    C: "**C. Wait until the end of the week to correct the error once all charts are finalized.**\nIncorrect — Corrections should be made as soon as the error is recognized to maintain an accurate and timely record. Delays undermine the record’s credibility.",
    D: "**D. Rewrite the full record from memory and replace the original note.**\nIncorrect — Rewriting records introduces potential inaccuracies and violates legal documentation protocols. Original entries must remain intact for verification."
  },

  boardTrap: "The NBDHE often tests this scenario to see if candidates recognize that documentation integrity is as important as accuracy. Deleting or rewriting is never appropriate.",

  memoryHook: "Think “Correct, Don’t Cover.” Cross out, date, and clarify—never delete or disguise."
},
{
  id: "eth-022",
  type: "application",
  subject: "Ethics & Professional Practice",
  topic: "Occupational Exposure & OSHA Compliance",
  difficulty: "medium",
  question: "During instrument processing, a dental hygienist accidentally sustains a puncture wound from a contaminated scaler. The supervising dentist is away at a continuing education course, and the office manager suggests simply washing the wound and continuing work to “avoid creating paperwork.” What is the hygienist’s most appropriate immediate action?",
  choices: [
    { key: "A", text: "Document the injury privately and wait to see if symptoms develop." },
    { key: "B", text: "Report the incident only after consulting the dentist upon return." },
    { key: "C", text: "Complete the required incident report and follow post-exposure protocols immediately." },
    { key: "D", text: "Disinfect the area thoroughly and continue working since the wound appears minor." }
  ],
  correctAnswer: "C",

  rationale: "**C. Complete the required incident report and follow post-exposure protocols immediately.**\nIncident documentation is both a legal and OSHA requirement following occupational exposure to bloodborne pathogens. The hygienist must immediately report and document the injury, complete an exposure incident report, and follow post-exposure procedures, including medical evaluation. Delaying or avoiding documentation constitutes a violation of federal safety standards and professional ethics.",

  incorrectRationales: {
    A: "**A. Document the injury privately and wait to see if symptoms develop.**\nIncorrect — Failing to report immediately violates OSHA’s Bloodborne Pathogens Standard. Private documentation does not meet regulatory requirements or ensure proper medical management.",
    B: "**B. Report the incident only after consulting the dentist upon return.**\nIncorrect — Reporting must occur at the time of exposure, not when the supervisor is available. OSHA compliance is the responsibility of every employee, not just the employer.",
    D: "**D. Disinfect the area thoroughly and continue working since the wound appears minor.**\nIncorrect — Continuing to work without medical follow-up risks infection transmission and violates both nonmaleficence (do no harm) and legal safety protocols."
  },

  boardTrap: "The NBDHE often tests this scenario by implying that a supervisor’s absence excuses delay. It does not—reporting and documentation are mandatory and immediate.",

  memoryHook: "Think “Injury → Ink it, Inform, Intervene.” Report, record, respond—right away."
},
{
  id: "eth-023",
  type: "application",
  subject: "Ethics & Professional Practice",
  topic: "Licensure & Continuing Education Compliance",
  difficulty: "medium",
  question: "A dental hygienist’s state license is due for renewal at the end of the month. Because of scheduling conflicts, the hygienist has not yet completed the required continuing education hours but plans to submit the renewal fee and complete the courses later in the year. Which statement best reflects the legal and ethical obligation in this situation?",
  choices: [
    { key: "A", text: "The hygienist may renew now as long as the courses are completed within the next six months." },
    { key: "B", text: "The hygienist must complete all required continuing education hours before submitting license renewal." },
    { key: "C", text: "Continuing education is encouraged but not mandatory in most states." },
    { key: "D", text: "The hygienist can renew without CE hours if working under direct supervision of a dentist." }
  ],
  correctAnswer: "B",

  rationale: "**B. The hygienist must complete all required continuing education hours before submitting license renewal.**\nState practice acts require that all continuing education (CE) requirements be met before license renewal to ensure ongoing competency and protect the public. Submitting renewal without completing CE hours constitutes unprofessional conduct and may result in penalties, fines, or suspension.",

  incorrectRationales: {
    A: "**A. The hygienist may renew now as long as the courses are completed within the next six months.**\nIncorrect — CE hours must be fulfilled prior to renewal. Post-renewal completion violates state law and misrepresents compliance.",
    C: "**C. Continuing education is encouraged but not mandatory in most states.**\nIncorrect — All states mandate CE for license maintenance. Requirements vary by state but are never optional.",
    D: "**D. The hygienist can renew without CE hours if working under direct supervision of a dentist.**\nIncorrect — Licensure and CE requirements apply to each professional individually, regardless of supervision. A dentist’s oversight does not replace state compliance obligations."
  },

  boardTrap: "The NBDHE often tests whether candidates know that licensure renewal is a personal legal responsibility, not one shared with the employer or supervising dentist.",

  memoryHook: "Think “CE = Current and Eligible.” No credits, no credential."
},
{
  id: "eth-024",
  type: "application",
  subject: "Ethics & Professional Practice",
  topic: "Patient Abandonment & Termination of Care",
  difficulty: "medium",
  question: "A patient receiving quadrant scaling and root planing repeatedly misses scheduled appointments. After multiple attempts to contact the patient, the dental hygienist decides to close the case and remove the patient from the active schedule. No written notice is sent, and no referral to another provider is made. The patient later experiences an abscess and files a complaint alleging abandonment. Which step would have best prevented this claim?",
  choices: [
    { key: "A", text: "Documenting the patient’s missed appointments in the clinical notes only." },
    { key: "B", text: "Terminating care verbally at the patient’s next visit." },
    { key: "C", text: "Waiting for the patient to call before taking further action." },
    { key: "D", text: "Providing written notice of termination with an opportunity for emergency care and referral options." }
  ],
  correctAnswer: "D",

  rationale: "**D. Providing written notice of termination with an opportunity for emergency care and referral options.**\nPatient abandonment occurs when a provider terminates the provider–patient relationship without proper notice or opportunity for follow-up care. To prevent this, the provider must send written notice of termination, allow time for the patient to find alternative care, and provide referrals and access to emergency treatment during the transition period.",

  incorrectRationales: {
    A: "**A. Documenting the patient’s missed appointments in the clinical notes only.**\nIncorrect — Documentation alone does not constitute formal termination. The provider must communicate clearly, in writing, to establish that the relationship has ended ethically and legally.",
    B: "**B. Terminating care verbally at the patient’s next visit.**\nIncorrect — Verbal termination lacks proof of notice. Written communication provides legal protection and meets professional documentation standards.",
    C: "**C. Waiting for the patient to call before taking further action.**\nIncorrect — Passive inaction still qualifies as abandonment once care has been initiated. The provider holds responsibility to initiate closure appropriately."
  },

  boardTrap: "The NBDHE often tests whether candidates know that written notification and reasonable opportunity for care transfer are essential to avoid abandonment—even when the patient is noncompliant.",

  memoryHook: "Think “Don’t Drop — Discharge.” Send written notice, offer help, and document the transition."
},
{
  id: "eth-025",
  type: "application",
  subject: "Ethics & Professional Practice",
  topic: "Confidentiality & Social Media",
  difficulty: "medium",
  question: "After treating a difficult patient who frequently complained about fees, a dental hygienist posts a vague social media message that reads: “Some patients think yelling gets them free treatment — not in my chair!” Several colleagues comment, and one correctly identifies the patient based on context. Which statement best describes the ethical and legal issue?",
  choices: [
    { key: "A", text: "The hygienist has exercised her right to free speech under the First Amendment." },
    { key: "B", text: "The post is acceptable since no patient name was mentioned." },
    { key: "C", text: "The hygienist may be liable for defamation and breach of confidentiality through online disclosure." },
    { key: "D", text: "The comment is unprofessional but not considered an ethical violation." }
  ],
  correctAnswer: "C",

  rationale: "**C. The hygienist may be liable for defamation and breach of confidentiality through online disclosure.**\nEven without naming the patient, social media posts that allow identification through context or details can violate HIPAA confidentiality and constitute defamation if they damage reputation. Professional codes require maintaining discretion and professionalism both in and outside the clinical setting.",

  incorrectRationales: {
    A: "**A. The hygienist has exercised her right to free speech under the First Amendment.**\nIncorrect — Healthcare professionals’ speech is restricted by ethical and legal confidentiality obligations. First Amendment rights do not excuse breaches of patient privacy or defamation.",
    B: "**B. The post is acceptable since no patient name was mentioned.**\nIncorrect — HIPAA defines protected information broadly; identifiable context (details, timing, or behavior) may still reveal identity.",
    D: "**D. The comment is unprofessional but not considered an ethical violation.**\nIncorrect — Social media violations are both unprofessional and unethical, breaching patient trust and confidentiality."
  },

  boardTrap: "The NBDHE frequently tests scenarios where professionals believe that anonymity protects them online. It doesn’t—context can identify a patient as clearly as a name.",

  memoryHook: "Think “Post = Permanent.” If it can identify, it can incriminate."
},
{
  id: "eth-026",
  type: "application",
  subject: "Ethics & Professional Practice",
  topic: "Mandated Reporting & HIPAA Exceptions",
  difficulty: "medium",
  question: "A dental hygienist notices multiple bruises on the arms and neck of an elderly patient whose caregiver refuses to leave the operatory. When questioned, the patient looks away and becomes tearful. The hygienist suspects abuse and reports it to the proper state agency without obtaining the patient’s consent. Which statement best describes this action?",
  choices: [
    { key: "A", text: "It is legally and ethically appropriate under HIPAA exceptions for public safety reporting." },
    { key: "B", text: "It violates HIPAA because patient authorization was not obtained before disclosure." },
    { key: "C", text: "It represents a breach of confidentiality unless the dentist provides written approval." },
    { key: "D", text: "It violates autonomy because the patient did not agree to have the information shared." }
  ],
  correctAnswer: "A",

  rationale: "**A. It is legally and ethically appropriate under HIPAA exceptions for public safety reporting.**\nHIPAA allows disclosure of protected health information (PHI) without patient consent when required by law, such as cases of suspected abuse, neglect, or threats to public safety. Dental professionals are mandated reporters in most states, and ethical principles of nonmaleficence and beneficence require action to prevent harm.",

  incorrectRationales: {
    B: "**B. It violates HIPAA because patient authorization was not obtained before disclosure.**\nIncorrect — HIPAA specifically permits reporting under mandated reporter laws. Protecting patient safety takes precedence over privacy in these circumstances.",
    C: "**C. It represents a breach of confidentiality unless the dentist provides written approval.**\nIncorrect — Reporting duties apply individually to each licensed provider; hygienists are not required to obtain employer or dentist authorization to report abuse.",
    D: "**D. It violates autonomy because the patient did not agree to have the information shared.**\nIncorrect — While autonomy emphasizes patient choice, the obligation to protect vulnerable individuals overrides consent when abuse or danger is suspected."
  },

  boardTrap: "Many students incorrectly assume HIPAA prevents any disclosure without consent. The NBDHE tests awareness that HIPAA supports disclosure when required to protect safety or comply with law.",

  memoryHook: "Think “HIPAA Helps Protect Against Abuse.” Reporting harm protects, not violates, patient trust."
},
{
  id: "eth-027",
  type: "application",
  subject: "Ethics & Professional Practice",
  topic: "Minor Consent & Legal Authorization",
  difficulty: "medium",
  question: "A 16-year-old patient arrives alone for a scheduled dental cleaning and fluoride treatment. The patient states that her mother gave verbal permission over the phone but has not signed any forms. The hygienist proceeds with treatment and documents “verbal consent obtained.” Which statement best reflects the legal and ethical issue in this situation?",
  choices: [
    { key: "A", text: "The procedure should have been postponed until written or in-person consent from the parent or legal guardian was obtained." },
    { key: "B", text: "The patient’s verbal agreement is sufficient since she is capable of understanding the procedure." },
    { key: "C", text: "The hygienist acted within professional judgment because the treatment was preventive and low risk." },
    { key: "D", text: "Verbal consent is legally valid for minors as long as it is properly documented." }
  ],
  correctAnswer: "A",

  rationale: "**A. The procedure should have been postponed until written or in-person consent from the parent or legal guardian was obtained.**\nMinors (individuals under the age of legal majority) generally cannot provide legal consent for dental treatment unless emancipated or legally authorized. Written or in-person guardian consent is required prior to care, even for routine preventive procedures. Proceeding without proper authorization can constitute battery or unlicensed treatment.",

  incorrectRationales: {
    B: "**B. The patient’s verbal agreement is sufficient since she is capable of understanding the procedure.**\nIncorrect — A minor’s comprehension does not substitute for legal authority. Only a parent or legal guardian can consent, except under specific state exceptions (e.g., emergency or emancipated minor).",
    C: "**C. The hygienist acted within professional judgment because the treatment was preventive and low risk.**\nIncorrect — Risk level does not change the legal requirement for consent. Even preventive procedures require guardian approval.",
    D: "**D. Verbal consent is legally valid for minors as long as it is properly documented.**\nIncorrect — Verbal consent may be acceptable for adults, but written or verifiable guardian consent is required for minors."
  },

  boardTrap: "The NBDHE often includes scenarios where the treatment seems minor, tempting candidates to overlook legal requirements. However, the formality of consent matters, not the perceived risk.",

  memoryHook: "Think “Minor = Must have Mother (or Guardian).” No signature, no scaler."
},
{
  id: "eth-028",
  type: "application",
  subject: "Ethics & Professional Practice",
  topic: "Impairment & Mandatory Reporting",
  difficulty: "medium",
  question: "During a late afternoon clinic session, a dental hygienist notices the supervising dentist slurring words and smelling strongly of alcohol. When questioned, the dentist insists he is “just tired” and instructs the hygienist to continue treating patients. Which action best reflects the hygienist’s ethical and legal responsibility?",
  choices: [
    { key: "A", text: "Respect the dentist’s authority and complete the scheduled patients to avoid confrontation." },
    { key: "B", text: "Quietly dismiss the patients without explanation and resume work the following day." },
    { key: "C", text: "Document the incident privately for personal records without notifying anyone." },
    { key: "D", text: "Report the suspected impairment to the appropriate authority or state dental board immediately." }
  ],
  correctAnswer: "D",

  rationale: "**D. Report the suspected impairment to the appropriate authority or state dental board immediately.**\nDental professionals have a legal and ethical duty to report suspected impairment in colleagues when it endangers patient safety. Reporting to a supervising authority or state dental board ensures appropriate intervention under mandatory reporting laws and upholds the ethical principles of nonmaleficence (do no harm) and social trust.",

  incorrectRationales: {
    A: "**A. Respect the dentist’s authority and complete the scheduled patients to avoid confrontation.**\nIncorrect — Ethical responsibility to protect patients outweighs loyalty to superiors. Compliance with unsafe directives violates professional standards.",
    B: "**B. Quietly dismiss the patients without explanation and resume work the following day.**\nIncorrect — While preventing harm is appropriate, failing to report the incident allows continued risk and violates mandated reporting obligations.",
    C: "**C. Document the incident privately for personal records without notifying anyone.**\nIncorrect — Private documentation without reporting provides no protection for patients or the practitioner and fails to meet legal requirements."
  },

  boardTrap: "The NBDHE often tests whether candidates recognize that reporting impairment is a duty, not a choice. Loyalty to the profession means ensuring patient safety, even when it involves a superior.",

  memoryHook: "Think “Duty over Doctor.” Protect the patient first—report responsibly."
},
{
  id: "eth-029",
  type: "application",
  subject: "Ethics & Professional Practice",
  topic: "Ethical Decision-Making Model",
  difficulty: "medium",
  question: "A dental hygienist discovers that a colleague has been routinely falsifying periodontal charting data to make patient outcomes appear more favorable. The hygienist feels conflicted between loyalty to a coworker and duty to honesty. She decides to consult the ADA Code of Ethics, identify the ethical dilemma, and evaluate possible courses of action before reporting the issue. According to the ethical decision-making model, which step is the hygienist currently demonstrating?",
  choices: [
    { key: "A", text: "Implementing the chosen course of action" },
    { key: "B", text: "Evaluating the outcome of the decision" },
    { key: "C", text: "Identifying and clarifying the ethical dilemma" },
    { key: "D", text: "Collecting data after the action has been taken" }
  ],
  correctAnswer: "C",

  rationale: "**C. Identifying and clarifying the ethical dilemma**\nIn the ethical decision-making process, the step of identifying and clarifying the ethical dilemma occurs after recognizing that a conflict exists. This involves defining the issue, consulting professional codes (such as the ADA or ADHA Code of Ethics), and analyzing potential principles in conflict—such as fidelity vs. veracity.",

  incorrectRationales: {
    A: "**A. Implementing the chosen course of action**\nIncorrect — Implementation occurs only after the decision has been made and justified through analysis of all possible options.",
    B: "**B. Evaluating the outcome of the decision**\nIncorrect — This step takes place after the action to assess its ethical and practical results. The hygienist has not yet acted.",
    D: "**D. Collecting data after the action has been taken**\nIncorrect — Data collection occurs before implementing or evaluating an action and is part of identifying the problem—not after acting."
  },

  boardTrap: "The NBDHE often tests whether candidates can distinguish identifying the dilemma (what’s wrong) from acting on it (what to do). Recognition and reflection always come first.",

  memoryHook: "Think “Stop, Spot, Solve.” First spot the dilemma—then decide the direction."
},
{
  id: "eth-030",
  type: "application",
  subject: "Ethics & Professional Practice",
  topic: "Confidentiality and Public Health Exceptions",
  difficulty: "hard",
  question: "A patient privately discloses to the dental hygienist that he has tested positive for an airborne infectious disease and plans to attend a large public event without informing others. He asks the hygienist not to share this information with anyone. The hygienist is concerned about public health implications. Which of the following best reflects the ethical and legal responsibility in this situation?",
  choices: [
    { key: "A", text: "Respect patient autonomy and confidentiality under HIPAA" },
    { key: "B", text: "Wait until symptoms worsen before informing any authorities" },
    { key: "C", text: "Report the threat to the dentist but take no further action" },
    { key: "D", text: "Disclose the information to appropriate authorities to protect public safety" }
  ],
  correctAnswer: "D",

  rationale: "**D. Disclose the information to appropriate authorities to protect public safety**\nWhile confidentiality is a cornerstone of professional ethics, healthcare professionals have a legal and ethical duty to disclose protected health information (PHI) if a serious threat to public health is evident. HIPAA allows exceptions in cases involving reportable diseases or threats to others. Protecting the greater public takes precedence when harm is likely.",

  incorrectRationales: {
    A: "**A. Respect patient autonomy and confidentiality under HIPAA**\nIncorrect — HIPAA allows exceptions for public health threats. Protecting others from foreseeable harm justifies disclosure. Autonomy does not override legal obligations to report.",
    B: "**B. Wait until symptoms worsen before informing any authorities**\nIncorrect — Delay in reporting can result in harm to others. The obligation to report arises based on intent to expose others to disease, not disease progression.",
    C: "**C. Report the threat to the dentist but take no further action**\nIncorrect — Informing the dentist alone does not fulfill legal reporting requirements. Both legal and ethical duty demand direct action to protect the public."
  },

  boardTrap: "Many students think HIPAA prohibits all disclosures. However, HIPAA contains clear exceptions for imminent harm or public health threats, and professionals must know when reporting is not just allowed, but required.",

  memoryHook: "Think “Protect the Many Over the One.” Confidentiality ends where public danger begins."
},
{
  id: "pharm-001",
  type: "application",
  subject: "Pharmacology & Patient Safety",
  topic: "Potency vs Efficacy",
  difficulty: "medium",
  question: "Two drugs produce the same therapeutic effect. Drug A requires 50 mg to achieve the desired outcome, while Drug B requires only 10 mg. What does this indicate about Drug B compared to Drug A?",
  choices: [
    { key: "A", text: "Drug B has greater efficacy" },
    { key: "B", text: "Drug B has a longer duration of action" },
    { key: "C", text: "Drug B is more potent" },
    { key: "D", text: "Drug B has fewer side effects" }
  ],
  correctAnswer: "C",

  rationale: "**C. Drug B is more potent**\nPotency refers to the amount of a drug required to produce a specific effect. If Drug B achieves the same effect at a lower dose than Drug A, it is more potent. Potency does not measure how effective or strong the drug’s maximum effect is—only how much is needed to reach it.",

  incorrectRationales: {
    A: "**A. Drug B has greater efficacy**\nEfficacy is the maximum effect a drug can produce, regardless of dose. Two drugs can have the same efficacy but different potencies.",
    B: "**B. Drug B has a longer duration of action**\nDuration refers to how long the drug’s effect lasts, not how much is needed to cause it.",
    D: "**D. Drug B has fewer side effects**\nPotency does not predict the number or severity of side effects."
  },

  boardTrap: "Students often confuse potency with efficacy because both relate to how “strong” a drug seems. The board may describe two drugs producing the same effect — this phrase is the clue that the question is about potency, not efficacy. When the effect is the same but the dose is different, think potency.",

  memoryHook: "Small dose, big punch = more potent. If a tiny dose does the same job, the drug wins the potency contest."
},
{
  id: "pharm-002",
  type: "application",
  subject: "Pharmacology & Patient Safety",
  topic: "Potency",
  difficulty: "medium",
  question: "Two drugs produce the same therapeutic effect. Drug A requires 50 mg to achieve the desired outcome, while Drug B requires only 10 mg. What does this indicate about Drug B compared to Drug A?",
  choices: [
    { key: "A", text: "Drug B has greater efficacy" },
    { key: "B", text: "Drug B has a longer duration of action" },
    { key: "C", text: "Drug B is more potent" },
    { key: "D", text: "Drug B has fewer side effects" }
  ],
  correctAnswer: "C",

  rationale: "**C. Drug B is more potent**\nPotency measures the amount of drug needed to produce an effect. A smaller dose achieving the same effect means the drug is more potent.",

  incorrectRationales: {
    A: "**A. Drug B has greater efficacy**\nEfficacy is the maximum effect achievable, not the dose needed.",
    B: "**B. Drug B has a longer duration of action**\nDuration measures how long the effect lasts, not potency.",
    D: "**D. Drug B has fewer side effects**\nPotency doesn’t determine side effect profile."
  },

  boardTrap: "Students confuse potency with efficacy. When the effect is the same but the dose differs, the question targets potency.",

  memoryHook: "Small dose, big punch = more potent."
},
{
  id: "pharm-003",
  type: "application",
  subject: "Pharmacology & Patient Safety",
  topic: "Efficacy",
  difficulty: "medium",
  question: "A patient with moderate postoperative pain is prescribed two different analgesic medications at separate times. After taking the maximum recommended dose of Drug A, the patient reports only mild relief. Later, after taking the maximum recommended dose of Drug B, the patient reports complete pain relief. What does this suggest about Drug B compared to Drug A?",
  choices: [
    { key: "A", text: "Drug B is more potent" },
    { key: "B", text: "Drug B has greater efficacy" },
    { key: "C", text: "Drug B has a longer half-life" },
    { key: "D", text: "Drug B is less bioavailable" }
  ],
  correctAnswer: "B",

  rationale: "**B. Drug B has greater efficacy**\nEfficacy refers to a drug’s maximum ability to produce a therapeutic effect, regardless of the dose. Even at its highest recommended dose, Drug A cannot fully relieve pain — meaning its ceiling effect is lower. Drug B achieves complete relief, so it has greater efficacy, even if the doses differ.",

  incorrectRationales: {
    A: "**A. Drug B is more potent**\nPotency is about how much drug is needed to reach a given effect, not how powerful the maximum effect is. Both drugs could reach their own ceiling doses, but only efficacy determines the maximum possible response.",
    C: "**C. Drug B has a longer half-life**\nHalf-life indicates how long a drug remains active in the body; it doesn’t reflect how strong the maximum therapeutic effect is.",
    D: "**D. Drug B is less bioavailable**\nBioavailability refers to how much of the administered dose reaches circulation. Even a fully absorbed drug can have low efficacy if it can’t produce a strong enough effect."
  },

  boardTrap: "This is one of the NBDHE’s favorite switch-up traps. Students often assume that if a drug works better, it must be more potent. The question focuses on maximum effect achieved, not dose required. When the scenario says both drugs were taken at maximum dose and one produces a greater effect, the correct concept is efficacy, not potency.",

  memoryHook: "Potency starts the race — efficacy wins it. Potency decides who gets there faster. Efficacy decides who actually finishes the job."
},
{
  id: "pharm-004",
  type: "application",
  subject: "Pharmacology & Patient Safety",
  topic: "Efficacy Determination",
  difficulty: "medium",
  question: "During a clinical trial, several new pain medications are being compared. Each drug is given at various doses until no further increase in pain relief is observed. Which method best determines the efficacy of a drug?",
  choices: [
    { key: "A", text: "Measuring the maximum therapeutic effect the drug can produce" },
    { key: "B", text: "Measuring the amount of drug needed to reach 50% of its effect" },
    { key: "C", text: "Measuring the concentration of the drug in plasma over time" },
    { key: "D", text: "Measuring the rate at which the drug is eliminated from the body" }
  ],
  correctAnswer: "A",

  rationale: "**A. Measuring the maximum therapeutic effect the drug can produce**\nEfficacy represents the maximum response achievable from a drug, regardless of dose. In clinical trials, efficacy is determined by observing the point at which increasing the dose produces no further increase in therapeutic effect — this defines the drug’s ceiling effect.",

  incorrectRationales: {
    B: "**B. Measuring the amount of drug needed to reach 50% of its effect**\nThis describes potency, not efficacy. It’s a measure of dose, not strength of the maximal effect.",
    C: "**C. Measuring the concentration of the drug in plasma over time**\nThis reflects pharmacokinetics and absorption, not therapeutic effect.",
    D: "**D. Measuring the rate at which the drug is eliminated from the body**\nThis refers to drug clearance or half-life, not how effective the drug is at treating a condition."
  },

  boardTrap: "Students often mistake efficacy for potency because both can appear on a dose-response graph. If the question mentions “maximum effect,” it’s about efficacy. If it mentions “dose required,” it’s about potency. Remember — efficacy answers “How much can it do?” while potency answers “How much does it take?”",

  memoryHook: "Efficacy = Effect ceiling. It’s not about the dose; it’s about how high the drug’s effect can go before it levels off."
},
{
  id: "pharm-005",
  type: "application",
  subject: "Pharmacology & Patient Safety",
  topic: "First-Order Kinetics and Half-Life",
  difficulty: "medium",
  question: "A patient is prescribed aspirin for chronic joint pain. The drug follows first-order kinetics, meaning a constant percentage of the drug is eliminated per unit time. If the half-life of aspirin in this patient is 3 hours, how much of the drug remains in the body six hours after a single dose?",
  choices: [
    { key: "A", text: "100%" },
    { key: "B", text: "75%" },
    { key: "C", text: "50%" },
    { key: "D", text: "25%" }
  ],
  correctAnswer: "D",

  rationale: "**D. 25%**\nIn first-order kinetics, a constant fraction of the drug is eliminated during each half-life.\nAfter 1 half-life (3 hours): 50% remains.\nAfter 2 half-lives (6 hours): 50% of 50% = 25% remains.\nTherefore, after six hours, 25% of the original aspirin dose remains in the body.",

  incorrectRationales: {
    A: "**A. 100%**\nNo elimination has occurred only if no time passes; this ignores the kinetics entirely.",
    B: "**B. 75%**\nThis implies 25% eliminated, which would be incorrect for two half-lives.",
    C: "**C. 50%**\nRepresents one half-life, not two. The question explicitly gives six hours, equal to two half-lives."
  },

  boardTrap: "Students often confuse first-order with zero-order kinetics. In first-order, a constant percentage (fraction) is eliminated per time period. In zero-order, a constant amount (mg/hour) is eliminated, regardless of concentration — classic example: alcohol. The board may sneak in “aspirin or alcohol” in the question — both appear similar clinically, but alcohol actually follows zero-order kinetics, while aspirin typically follows first-order at therapeutic doses. First-order = fraction gone. Zero-order = same chunk gone.",

  memoryHook: "Half-life cuts it in half — every time. After 1 → 50%, after 2 → 25%, after 3 → 12.5%. It’s the math of medicine — steady, predictable, and proportional."
},
{
  id: "pharm-006",
  type: "application",
  subject: "Pharmacology & Patient Safety",
  topic: "First-Pass Metabolism and Bioavailability",
  difficulty: "medium",
  question: "A patient is prescribed an oral medication that is extensively metabolized by the liver before reaching systemic circulation. The drug’s effectiveness decreases significantly due to rapid enzymatic activity involving the cytochrome P450 system. What process is primarily responsible for this reduced bioavailability?",
  choices: [
    { key: "A", text: "Renal excretion" },
    { key: "B", text: "First-pass hepatic metabolism" },
    { key: "C", text: "Enterohepatic recirculation" },
    { key: "D", text: "Plasma protein binding" }
  ],
  correctAnswer: "B",

  rationale: "**B. First-pass hepatic metabolism**\nThe first-pass effect occurs when an orally administered drug is metabolized by the liver before it ever enters systemic circulation, reducing the amount that reaches its target tissues.\nCytochrome P450 enzymes, located in hepatocytes, are major contributors to this process. Drugs with high first-pass metabolism often require higher oral doses or alternate routes (e.g., sublingual, IV) to achieve therapeutic levels.",

  incorrectRationales: {
    A: "**A. Renal excretion**\nThis eliminates drugs from the body after systemic absorption, not before they reach circulation.",
    C: "**C. Enterohepatic recirculation**\nThis process prolongs a drug’s presence by recycling it between the intestine and liver, not reducing its bioavailability.",
    D: "**D. Plasma protein binding**\nThis affects distribution and free-drug concentration, not pre-systemic metabolism."
  },

  boardTrap: "Students often confuse first-pass metabolism with renal excretion or think any liver involvement equals detoxification. If the question mentions an oral route and reduced bioavailability before systemic circulation, it’s about the first-pass effect. Remember: Oral → portal → liver → lost. The P450 system is the liver’s gatekeeper, not the kidney’s cleaner.",

  memoryHook: "P450: the liver’s gatekeeper — it burns the first batch. The first dose gets filtered; only the survivors reach the bloodstream."
},
{
  id: "pharm-007",
  type: "application",
  subject: "Pharmacology & Patient Safety",
  topic: "First-Pass Metabolism and Bioavailability",
  difficulty: "medium",
  question: "A patient is prescribed an oral medication that is extensively metabolized by the liver before reaching systemic circulation. The drug’s effectiveness decreases significantly due to rapid enzymatic activity involving the cytochrome P450 system. What process is primarily responsible for this reduced bioavailability?",
  choices: [
    { key: "A", text: "Renal excretion" },
    { key: "B", text: "First-pass hepatic metabolism" },
    { key: "C", text: "Enterohepatic recirculation" },
    { key: "D", text: "Plasma protein binding" }
  ],
  correctAnswer: "B",

  rationale: "**B. First-pass hepatic metabolism**\nThe first-pass effect occurs when orally administered drugs are metabolized by the liver before reaching systemic circulation. Cytochrome P450 enzymes play a key role in this hepatic metabolism, reducing bioavailability.",

  incorrectRationales: {
    A: "**A. Renal excretion**\nRenal excretion happens after systemic absorption, not before.",
    C: "**C. Enterohepatic recirculation**\nEnterohepatic recirculation prolongs a drug’s action, not decreases it.",
    D: "**D. Plasma protein binding**\nPlasma protein binding affects distribution, not pre-systemic metabolism."
  },

  boardTrap: "When the question mentions an oral drug and decreased bioavailability before systemic circulation, it’s testing the first-pass effect, not excretion. Remember — oral → portal → liver → lost.",

  memoryHook: "P450: the liver’s gatekeeper — it burns the first batch."
},
{
  id: "pharm-008",
  type: "application",
  subject: "Pharmacology & Patient Safety",
  topic: "Pharmacokinetics – Absorption",
  difficulty: "medium",
  question: "A 47-year-old patient is prescribed an oral antifungal medication. The clinician instructs the patient to take the drug with a small meal to improve absorption. During a follow-up, the patient reports that she has been crushing the tablets and taking them on an empty stomach with black coffee. Her symptoms have not improved despite adherence to dosing times. Which phase of pharmacokinetics most directly explains the drug’s reduced effectiveness in this situation?",
  choices: [
    { key: "A", text: "Absorption in the small intestine" },
    { key: "B", text: "Distribution into systemic circulation" },
    { key: "C", text: "Metabolism by hepatic enzymes" },
    { key: "D", text: "Excretion through renal filtration" }
  ],
  correctAnswer: "A",

  rationale: "**A. Absorption in the small intestine**\nAbsorption is the first step of pharmacokinetics and refers to how a drug moves from its site of administration into the bloodstream. Most orally administered drugs are absorbed in the small intestine, where the large surface area and rich blood supply facilitate uptake. In this case, crushing the tablet and taking it with coffee on an empty stomach altered pH and gastric emptying, preventing proper dissolution and passage to the small intestine — reducing absorption and, therefore, clinical effect.",

  incorrectRationales: {
    B: "**B. Distribution into systemic circulation**\nDistribution occurs after absorption and describes how the drug moves throughout body tissues. If the drug never enters circulation, distribution cannot occur.",
    C: "**C. Metabolism by hepatic enzymes**\nMetabolism happens primarily in the liver after absorption; it doesn’t explain why the drug never reached systemic levels.",
    D: "**D. Excretion through renal filtration**\nExcretion relates to drug removal (kidney, bile, lungs). Reduced effectiveness here stems from the drug not being absorbed, not prematurely eliminated."
  },

  boardTrap: "Students often jump straight to metabolism when they see “ineffective drug” or “liver” keywords. The key here is that the drug was taken orally and never absorbed properly. If the issue occurs before the drug reaches the bloodstream, think absorption. ADME starts with A — if A fails, nothing else works.",

  memoryHook: "If it never gets in, it can’t get around. Absorption is the gatekeeper — no entry through the small intestine means no action anywhere else."
},
{
  id: "pharm-010",
  type: "application",
  subject: "Pharmacology & Patient Safety",
  topic: "Pharmacokinetics – Biotransformation",
  difficulty: "medium",
  question: "A 62-year-old patient taking multiple medications develops signs of drug toxicity after starting a new prescription. The clinician explains that the patient’s liver enzymes are responsible for chemically altering drugs to prepare them for elimination. What is the term for this process in which drugs are converted into more water-soluble compounds in the liver?",
  choices: [
    { key: "A", text: "Absorption" },
    { key: "B", text: "Distribution" },
    { key: "C", text: "Biotransformation" },
    { key: "D", text: "Excretion" }
  ],
  correctAnswer: "C",

  rationale: "**C. Biotransformation**\nBiotransformation is the process by which the liver chemically modifies drugs — usually through enzyme systems like cytochrome P450 — into more water-soluble forms that can be more easily excreted. This is a key part of metabolism and may convert drugs into inactive metabolites or, in some cases, active forms (prodrugs).",

  incorrectRationales: {
    A: "**A. Absorption**\nRefers to how a drug enters the bloodstream, typically from the GI tract. It occurs before metabolism.",
    B: "**B. Distribution**\nRefers to the movement of drugs throughout body fluids and tissues after absorption.",
    D: "**D. Excretion**\nRefers to the removal of drugs from the body, typically via the kidneys or bile, which occurs after metabolism."
  },

  boardTrap: "The NBDHE often tests ADME sequence knowledge. When liver enzymes and chemical modification are mentioned, the concept is metabolism (biotransformation), not excretion. Biotransformation prepares the drug for elimination but is not elimination itself.",

  memoryHook: "Biotransformation = liver’s chemical makeover."
},
{
  id: "pharm-011",
  type: "application",
  subject: "Pharmacology & Patient Safety",
  topic: "Pharmacokinetics – Excretion",
  difficulty: "medium",
  question: "A patient is prescribed a medication for hypertension. The drug is filtered at the glomerulus, partially reabsorbed in the renal tubules, and ultimately eliminated in the urine. The clinician reminds the patient to maintain adequate hydration to support proper drug removal. Which stage of pharmacokinetics is most directly responsible for eliminating this medication from the body?",
  choices: [
    { key: "A", text: "Absorption in the gastrointestinal tract" },
    { key: "B", text: "Distribution to peripheral tissues" },
    { key: "C", text: "Excretion through renal pathways" },
    { key: "D", text: "Metabolism by hepatic enzymes" }
  ],
  correctAnswer: "C",

  rationale: "**C. Excretion through renal pathways**\nExcretion is the stage of pharmacokinetics responsible for removing drugs and their metabolites from the body. The kidneys eliminate medications through glomerular filtration, tubular secretion, and partial reabsorption. Adequate hydration supports proper renal clearance and drug removal.",

  incorrectRationales: {
    A: "**A. Absorption in the gastrointestinal tract**\nAbsorption refers to how a drug enters the bloodstream after administration, not how it is eliminated.",
    B: "**B. Distribution to peripheral tissues**\nDistribution describes how a drug moves throughout body tissues after absorption, not its removal from the body.",
    D: "**D. Metabolism by hepatic enzymes**\nMetabolism (biotransformation) chemically alters drugs, primarily in the liver, to prepare them for elimination. It does not directly remove the drug from the body."
  },

  boardTrap: "The NBDHE frequently tests confusion between metabolism and excretion. Metabolism modifies; excretion eliminates. If the question focuses on removal in urine, the correct stage is excretion.",

  memoryHook: "Liver modifies. Kidneys remove."
},
{
  id: "pharm-012",
  type: "recall",
  subject: "Pharmacology & Patient Safety",
  topic: "Fluoride Pharmacokinetics – Excretion",
  difficulty: "medium",
  question: "A 9-year-old dental patient reports using a fluoride rinse at home in addition to fluoridated community water. During a hygiene visit, the clinician explains that the body does not retain all the fluoride that is ingested. Which organ system is primarily responsible for the elimination of fluoride from the body?",
  choices: [
    { key: "A", text: "Hepatic (liver) system" },
    { key: "B", text: "Renal (kidney) system" },
    { key: "C", text: "Respiratory system" },
    { key: "D", text: "Gastrointestinal tract" }
  ],
  correctAnswer: "B",

  rationale: "**B. Renal (kidney) system**\nFluoride is primarily eliminated through the kidneys via urine. After absorption in the stomach and small intestine, fluoride circulates in plasma and is either incorporated into calcified tissues (bone and teeth) or excreted through renal filtration.",

  incorrectRationales: {
    A: "**A. Hepatic (liver) system**\nThe liver metabolizes many drugs, but fluoride is not significantly metabolized hepatically. Elimination occurs primarily through renal filtration.",
    C: "**C. Respiratory system**\nFluoride is not eliminated through the lungs. Respiratory excretion applies to volatile substances, not fluoride ions.",
    D: "**D. Gastrointestinal tract**\nThe GI tract is responsible for absorption of fluoride, not elimination. Fluoride is excreted in urine under normal physiological conditions."
  },

  boardTrap: "Students often confuse absorption sites (stomach/small intestine) or storage sites (bone/teeth) with elimination pathways. Fluoride is not metabolized like typical drugs — it is filtered and excreted directly by the kidneys.",

  memoryHook: "Fluoride flows out through the kidneys."
},
{
  id: "pharm-013",
  type: "recall",
  subject: "Pharmacology & Patient Safety",
  topic: "Pregnancy Drug Safety – Teratogenic Risk",
  difficulty: "medium",
  question: "All of the following drugs are considered unsafe for use during pregnancy due to their known or potential teratogenic effects except:",
  choices: [
    { key: "A", text: "Tetracycline" },
    { key: "B", text: "Acetaminophen" },
    { key: "C", text: "Warfarin" },
    { key: "D", text: "Isotretinoin" }
  ],
  correctAnswer: "B",

  rationale: "**B. Acetaminophen**\nAcetaminophen is widely accepted as the analgesic of choice during pregnancy when used at therapeutic doses. It is not considered teratogenic and has a strong safety profile when appropriately administered.",

  incorrectRationales: {
    A: "**A. Tetracycline**\nTetracycline is contraindicated in pregnancy because it crosses the placenta and can cause permanent discoloration of developing teeth and interfere with fetal bone growth.",
    C: "**C. Warfarin**\nWarfarin is highly teratogenic, particularly during the first trimester, and is associated with fetal warfarin syndrome, including skeletal abnormalities and central nervous system defects.",
    D: "**D. Isotretinoin**\nIsotretinoin is one of the most teratogenic drugs known. It is absolutely contraindicated during pregnancy due to severe and life-threatening birth defects."
  },

  boardTrap: "This is a classic 'EXCEPT' question. Students often misread it as asking which drugs are unsafe. When you see 'except,' reverse your thinking and look for the safe option among dangerous ones.",

  memoryHook: "A is for Acetaminophen — and A-OK for pregnancy."
},
{
  id: "pharm-014",
  type: "application",
  subject: "Pharmacology & Patient Safety",
  topic: "Hypersensitivity Reactions – Drug Allergy",
  difficulty: "medium",
  question: "During a prophylaxis appointment, a 56-year-old patient reports developing widespread urticaria, facial swelling, and difficulty breathing approximately one hour after taking an antibiotic previously prescribed after scaling and root planing. The hygienist notes this reaction occurred despite the patient having tolerated the same medication a year ago without issue. What is the most likely explanation for this adverse reaction?",
  choices: [
    { key: "A", text: "The dose exceeded the patient’s tolerance threshold" },
    { key: "B", text: "The patient developed a tolerance and now experiences side effects" },
    { key: "C", text: "The drug was metabolized into a more toxic compound in the liver" },
    { key: "D", text: "The patient experienced a hypersensitivity reaction due to prior exposure" }
  ],
  correctAnswer: "D",

  rationale: "**D. The patient experienced a hypersensitivity reaction due to prior exposure**\nA drug allergy is a non–dose-dependent immunologic response that requires previous exposure to the allergen. The first exposure sensitizes the immune system; subsequent exposures may provoke a hypersensitivity reaction, often IgE-mediated in rapid-onset cases. This presentation is consistent with anaphylaxis and is unrelated to dosage, metabolism, or tolerance.",

  incorrectRationales: {
    A: "**A. The dose exceeded the patient’s tolerance threshold**\nAllergic reactions are not dose-dependent. Even minimal exposure can trigger a severe immunologic response once sensitization has occurred.",
    B: "**B. The patient developed a tolerance and now experiences side effects**\nTolerance results in reduced therapeutic effect over time, not exaggerated immune responses such as urticaria, swelling, or respiratory distress.",
    C: "**C. The drug was metabolized into a more toxic compound in the liver**\nToxic metabolites may cause organ damage or dose-related toxicity, but they do not produce classic allergic manifestations such as hives, angioedema, or bronchospasm."
  },

  boardTrap: "The board often includes phrases like 'previously tolerated' and 'same dose' to distract from the immune mechanism. When a reaction occurs after prior exposure, think hypersensitivity — not toxicity, side effects, or tolerance.",

  memoryHook: "Allergies don’t care about the dose — they care that it’s back. The immune system remembers and reacts."
},
{
  id: "pharm-015",
  type: "recall",
  subject: "Pharmacology & Patient Safety",
  topic: "Therapeutic Index",
  difficulty: "medium",
  question: "A dental hygiene student reviews a chart noting that Drug X has a therapeutic index of 2, while Drug Y has a therapeutic index of 20. Both drugs are used to manage inflammation. What does the higher therapeutic index of Drug Y suggest compared to Drug X?",
  choices: [
    { key: "A", text: "Drug Y has a faster onset of action" },
    { key: "B", text: "Drug Y is safer and has a wider margin between effective and toxic doses" },
    { key: "C", text: "Drug Y requires a lower dose to be effective" },
    { key: "D", text: "Drug Y is more effective at reducing inflammation" }
  ],
  correctAnswer: "B",

  rationale: "**B. Drug Y is safer and has a wider margin between effective and toxic doses**\nThe therapeutic index (TI) compares the toxic dose (TD₅₀) to the effective dose (ED₅₀). A higher TI indicates a larger safety margin between the dose that produces therapeutic benefit and the dose that causes toxicity. A TI of 20 represents a significantly safer drug than a TI of 2.",

  incorrectRationales: {
    A: "**A. Drug Y has a faster onset of action**\nTherapeutic index does not measure how quickly a drug begins working. Onset relates to pharmacokinetics, not safety margin.",
    C: "**C. Drug Y requires a lower dose to be effective**\nThe amount of drug required to achieve an effect refers to potency, not therapeutic index. TI measures safety, not dose size.",
    D: "**D. Drug Y is more effective at reducing inflammation**\nEffectiveness refers to efficacy, which measures the maximum therapeutic effect. Therapeutic index measures safety range, not degree of effect."
  },

  boardTrap: "The word 'therapeutic' often misleads students into thinking the question is about effectiveness. Therapeutic index measures safety, not how well a drug works.",

  memoryHook: "T.I. = ‘Try It’ Index — the bigger it is, the safer it is. A high TI means a wider safety cushion."
},
{
  id: "pharm-016",
  type: "recall",
  subject: "Pharmacology & Patient Safety",
  topic: "Routes of Administration",
  difficulty: "medium",
  question: "A dental patient presents documentation of a recent tuberculosis screening using the Mantoux method. The hygienist notes that the procedure involved injecting a small volume of purified protein derivative (PPD) just beneath the skin’s surface, creating a visible wheal. Which route of drug administration was used to deliver the TB test?",
  choices: [
    { key: "A", text: "Subcutaneous" },
    { key: "B", text: "Intramuscular" },
    { key: "C", text: "Intradermal" },
    { key: "D", text: "Intravenous" }
  ],
  correctAnswer: "C",

  rationale: "**C. Intradermal**\nThe intradermal route delivers a small amount of substance into the dermis, just beneath the epidermis. The Mantoux tuberculosis (TB) test is administered intradermally to provoke a localized immune response, producing a visible wheal for diagnostic interpretation rather than systemic absorption.",

  incorrectRationales: {
    A: "**A. Subcutaneous**\nSubcutaneous injections are administered deeper than intradermal injections, into the fatty tissue beneath the dermis. This route is commonly used for insulin or certain medications, but it does not produce the characteristic wheal seen with the TB test.",
    B: "**B. Intramuscular**\nIntramuscular injections deliver medication deep into muscle tissue and are used for vaccines such as influenza or tetanus. This route does not create a superficial wheal and is not used for diagnostic skin testing.",
    D: "**D. Intravenous**\nIntravenous administration delivers substances directly into the bloodstream for systemic distribution. The Mantoux test is intended to trigger a localized immune reaction within the dermis, not immediate systemic circulation."
  },

  boardTrap: "Students often confuse intradermal with subcutaneous because both involve shallow injections. The key distinguishing feature is the formation of a visible wheal — which indicates intradermal placement.",

  memoryHook: "Wheal = Within the dermis. If it bubbles up, it’s intradermal."
},
{
  id: "pharm-017",
  type: "recall",
  subject: "Pharmacology & Patient Safety",
  topic: "Drug References",
  difficulty: "medium",
  question: "A dental hygiene student is reviewing drug reference tools to look up the brand name, generic name, indications, and side effects of a patient’s prescription medication. Which resource is specifically designed to provide this type of detailed drug information, including package insert data?",
  choices: [
    { key: "A", text: "CDC Pink Book" },
    { key: "B", text: "Physicians’ Desk Reference (PDR)" },
    { key: "C", text: "United States Pharmacopeia (USP)" },
    { key: "D", text: "Merck Index" }
  ],
  correctAnswer: "B",

  rationale: "**B. Physicians’ Desk Reference (PDR)**\nThe Physicians’ Desk Reference (PDR) provides FDA-approved drug information that mirrors official pharmaceutical package inserts. It includes brand and generic names, indications, contraindications, dosage guidelines, adverse effects, and warnings. This makes it an essential clinical reference for dental professionals reviewing patient medications.",

  incorrectRationales: {
    A: "**A. CDC Pink Book**\nThe CDC Pink Book focuses on vaccine-preventable diseases and immunization schedules. It does not provide detailed prescription drug information such as dosing, contraindications, or package insert data.",
    C: "**C. United States Pharmacopeia (USP)**\nThe USP establishes drug quality and purity standards but is not intended as a daily clinical reference for medication indications, side effects, or patient-specific prescribing information.",
    D: "**D. Merck Index**\nThe Merck Index provides chemical and pharmacologic data about compounds and drugs. It is more commonly used in pharmaceutical research and manufacturing than in routine clinical medication review."
  },

  boardTrap: "Students often assume all drug-related books serve the same purpose. The PDR is specifically designed for clinical drug information, whereas USP sets standards and the Merck Index focuses on chemical data.",

  memoryHook: "PDR = Prescriber’s Daily Reference. If you need what the patient is taking and why, reach for the PDR."
},
{
  id: "pharm-018",
  type: "application",
  subject: "Pharmacology & Patient Safety",
  topic: "Controlled Substances",
  difficulty: "medium",
  question: "During a dental hygiene appointment, a patient casually mentions using a recreational drug to “stay relaxed” before appointments. Upon further questioning, the patient admits to using a substance with no recognized medical use in the United States that must be obtained illegally. The hygienist consults the dentist, who documents the conversation in the patient record. Which DEA drug schedule does this substance most likely fall under?",
  choices: [
    { key: "A", text: "Schedule II" },
    { key: "B", text: "Schedule III" },
    { key: "C", text: "Schedule IV" },
    { key: "D", text: "Schedule I" }
  ],
  correctAnswer: "D",

  rationale: "**D. Schedule I**\nSchedule I substances are classified by the Drug Enforcement Administration (DEA) as having no currently accepted medical use in the United States and a high potential for abuse. These drugs cannot be legally prescribed, dispensed, or used in clinical practice. Examples include heroin, LSD, and MDMA. A substance described as illegal with no accepted medical use fits the Schedule I classification.",

  incorrectRationales: {
    A: "**A. Schedule II**\nSchedule II substances have a high potential for abuse but do have accepted medical uses under strict regulation. Examples include oxycodone and morphine. The presence of legitimate medical use excludes this category in the scenario.",
    B: "**B. Schedule III**\nSchedule III drugs have moderate to low physical dependence potential and accepted medical uses, such as certain codeine combinations or anabolic steroids. They are legally prescribable, unlike Schedule I drugs.",
    C: "**C. Schedule IV**\nSchedule IV drugs have lower abuse potential relative to Schedule III and accepted medical uses, such as diazepam or lorazepam. These medications are legally prescribed and do not match the description of having no recognized medical use."
  },

  boardTrap: "Students often assume that any drug with high abuse potential is Schedule II. The key distinction is medical use. If there is no accepted medical use in the United States, it is Schedule I.",

  memoryHook: "Schedule I = Illegal and Impossible to prescribe. No accepted medical use means no legal prescription."
},
{
  id: "pharm-019",
  type: "application",
  subject: "Pharmacology & Patient Safety",
  topic: "Controlled Substances",
  difficulty: "medium",
  question: "During a dental hygiene visit, a patient recovering from recent oral surgery reports that her pain medication “ran out too fast” and she called the office asking for a refill. The hygienist recalls that the medication was a narcotic classified as a Schedule II controlled substance. Which action is legally required for the dentist to prescribe more of this medication?",
  choices: [
    { key: "A", text: "Call in the prescription to the patient’s pharmacy" },
    { key: "B", text: "Send a refill request through an electronic prescribing system" },
    { key: "C", text: "Ask the pharmacy to extend the original order" },
    { key: "D", text: "Write and manually sign a new prescription with no refills" }
  ],
  correctAnswer: "D",

  rationale: "**D. Write and manually sign a new prescription with no refills**\nSchedule II drugs (such as oxycodone, hydrocodone alone, and morphine) have a high potential for abuse but accepted medical use. DEA regulations require a new written prescription for each dispensing. These medications cannot be refilled. A manually signed written prescription or a secure, compliant electronic prescription is required for each issuance. Verbal or routine phone prescriptions are not permitted except in true emergency situations.",

  incorrectRationales: {
    A: "**A. Call in the prescription to the patient’s pharmacy**\nRoutine phone-in prescriptions are not permitted for Schedule II medications due to their high abuse potential. Verbal orders are allowed only in limited emergency circumstances and must be followed by a written prescription.",
    B: "**B. Send a refill request through an electronic prescribing system**\nSchedule II medications cannot be refilled. Even if electronic prescribing is used, it must be a new prescription — not a refill request.",
    C: "**C. Ask the pharmacy to extend the original order**\nPharmacies cannot extend or authorize additional quantities of Schedule II drugs independently. A new prescription from the prescriber is required each time."
  },

  boardTrap: "Students often assume that controlled substances can be handled like other prescriptions. Schedule II medications have the strictest refill regulations — no refills, no routine call-ins, and a new prescription is required every time.",

  memoryHook: "Schedule II = Write new. Sign new. No refills."
},
{
  id: "pharm-020",
  type: "application",
  subject: "Pharmacology & Patient Safety",
  topic: "Controlled Substances",
  difficulty: "medium",
  question: "A patient recovering from periodontal surgery contacts the dental office requesting a refill of Tylenol #3, which was prescribed for post-operative discomfort. The medication contains a combination of acetaminophen and codeine. The dental team confirms that the original prescription was written two weeks ago and is still valid. Which of the following statements about this medication is correct under federal controlled substance regulations?",
  choices: [
    { key: "A", text: "It may be phoned in and refilled up to five times within six months" },
    { key: "B", text: "It cannot be refilled or phoned in under any circumstances" },
    { key: "C", text: "It is a Schedule IV medication due to the acetaminophen component" },
    { key: "D", text: "It must be prescribed in writing with no refills allowed" }
  ],
  correctAnswer: "A",

  rationale: "**A. It may be phoned in and refilled up to five times within six months**\nTylenol #3 (acetaminophen + codeine) is classified as a Schedule III controlled substance. Schedule III medications have moderate abuse potential and accepted medical use. Under federal regulations, they may be phoned in to a pharmacy and refilled up to five times within six months from the original date of issuance.",

  incorrectRationales: {
    B: "**B. It cannot be refilled or phoned in under any circumstances**\nThis restriction applies to Schedule II medications. Schedule III drugs may be phoned in and are eligible for refills within federal limits.",
    C: "**C. It is a Schedule IV medication due to the acetaminophen component**\nThe controlled classification is determined by the opioid component (codeine), not acetaminophen. Tylenol #3 is Schedule III, not Schedule IV.",
    D: "**D. It must be prescribed in writing with no refills allowed**\nThis describes Schedule II requirements. Schedule III medications allow refills (up to five within six months) and may be phoned in."
  },

  boardTrap: "Students often assume that any opioid-containing medication follows Schedule II rules. Combination products like Tylenol #3 (codeine + acetaminophen) are Schedule III and have different refill regulations.",

  memoryHook: "Three for Three: Schedule III = combo drug, call-in allowed, five refills in six months."
},
{
  id: "pharm-021",
  type: "recall",
  subject: "Pharmacology & Patient Safety",
  topic: "Drug Nomenclature",
  difficulty: "medium",
  question: "A patient reports taking “Advil” for chronic jaw pain related to TMD. When reviewing the medical history, the clinician documents the medication under its standardized name. Which of the following statements about drug naming is correct?",
  choices: [
    { key: "A", text: "Generic drug names vary based on manufacturer" },
    { key: "B", text: "Trade names are the only names recognized by the FDA" },
    { key: "C", text: "A drug has only one generic name, regardless of how many trade names exist" },
    { key: "D", text: "Brand names are preferred for documentation due to better recognition" }
  ],
  correctAnswer: "C",

  rationale: "**C. A drug has only one generic name, regardless of how many trade names exist**\nGeneric names are standardized, nonproprietary names assigned by the United States Adopted Name (USAN) Council. Each drug has only one official generic name that is universally recognized, regardless of branding. For example, ibuprofen is the generic name for trade names such as Advil and Motrin. The generic name remains constant no matter the manufacturer.",

  incorrectRationales: {
    A: "**A. Generic drug names vary based on manufacturer**\nThis applies to trade (brand) names, not generic names. Brand names may vary between manufacturers, but the generic name remains the same.",
    B: "**B. Trade names are the only names recognized by the FDA**\nThe FDA recognizes and approves both generic and brand names. Generic names are the standardized, official drug names used in clinical documentation.",
    D: "**D. Brand names are preferred for documentation due to better recognition**\nGeneric names are preferred in clinical documentation because they provide clarity and consistency across manufacturers and healthcare systems."
  },

  boardTrap: "Students often confuse generic and brand naming because brand names are more commonly advertised. The board expects recognition that documentation should always use the standardized generic name.",

  memoryHook: "Generic = Government-approved. One drug, one official name — no matter the label."
},
{
  id: "pharm-022",
  type: "recall",
  subject: "Pharmacology & Patient Safety",
  topic: "Aspirin Therapeutic Effects",
  difficulty: "medium",
  question: "Aspirin is frequently used in dental settings due to its multiple therapeutic effects. All of the following are considered actions of aspirin except:",
  choices: [
    { key: "A", text: "Analgesic" },
    { key: "B", text: "Antipyretic" },
    { key: "C", text: "Anti-inflammatory" },
    { key: "D", text: "Anxiolytic" }
  ],
  correctAnswer: "D",

  rationale: "**D. Anxiolytic**\nAspirin is known for its four primary therapeutic effects, often remembered as the \"4 A’s\": Analgesic (pain relief), Antipyretic (fever reduction), Anti-inflammatory (reduces swelling/inflammation), and Antiplatelet (inhibits blood clot formation). Anxiolytic (anxiety-reducing) effects are not part of aspirin’s pharmacologic profile. Anxiolytics are typically benzodiazepines or other central nervous system depressants — not NSAIDs.",

  incorrectRationales: {
    A: "**A. Analgesic**\nCorrect therapeutic action of aspirin. It blocks prostaglandin synthesis to reduce pain.",
    B: "**B. Antipyretic**\nCorrect therapeutic action of aspirin. It acts on the hypothalamus to lower fever.",
    C: "**C. Anti-inflammatory**\nCorrect therapeutic action of aspirin. It inhibits prostaglandin production, reducing inflammation and swelling."
  },

  boardTrap: "This classic 'all except' format tempts students to associate general symptom relief with anxiety reduction. Aspirin affects prostaglandins — not CNS neurotransmitters like GABA — so it does not reduce anxiety.",

  memoryHook: "Aspirin’s 4 A’s: Ache, Ash (fever), Angry tissue, and Aggregation — but not Anxiety."
},
{
  id: "pharm-023",
  type: "application",
  subject: "Pharmacology & Patient Safety",
  topic: "Aspirin Pediatric Risk",
  difficulty: "medium",
  question: "A pediatric dental patient with a history of asthma presents for sealant placement. The parent mentions giving the child aspirin during a recent viral illness. The hygienist alerts the dentist due to concern over possible adverse reactions. Which of the following is a known risk of aspirin use in children, particularly those with viral infections or asthma?",
  choices: [
    { key: "A", text: "Bronchial relaxation and reduced fever" },
    { key: "B", text: "Acute hepatic failure from salicylate overdose" },
    { key: "C", text: "Reye’s syndrome, which affects the brain and liver" },
    { key: "D", text: "Autoimmune hemolytic anemia" }
  ],
  correctAnswer: "C",

  rationale: "**C. Reye’s syndrome, which affects the brain and liver**\nReye’s syndrome is a rare but life-threatening condition characterized by acute encephalopathy and hepatic dysfunction. It most commonly occurs in children who take aspirin during viral illnesses such as influenza or varicella. Additionally, children with asthma are at increased risk for aspirin hypersensitivity reactions, including bronchospasm. For these reasons, aspirin is contraindicated in pediatric patients unless specifically directed by a physician.",

  incorrectRationales: {
    A: "**A. Bronchial relaxation and reduced fever**\nIncorrect. Aspirin can actually provoke bronchoconstriction in susceptible individuals, particularly those with asthma. While it reduces fever, it does not relax bronchial smooth muscle and may worsen respiratory symptoms.",
    B: "**B. Acute hepatic failure from salicylate overdose**\nIncorrect. Although overdose can cause toxicity, Reye’s syndrome occurs at therapeutic doses when aspirin is given during viral illness. The key risk in this scenario is not overdose but viral association.",
    D: "**D. Autoimmune hemolytic anemia**\nIncorrect. Aspirin is not associated with autoimmune hemolytic anemia. This condition is more commonly linked to other medications or autoimmune disorders."
  },

  boardTrap: "The NBDHE frequently combines pediatric pharmacology with asthma history. Many students focus only on GI bleeding risk and forget the pediatric contraindication. Remember: children + viral illness = think Reye’s syndrome immediately.",

  memoryHook: "Aspirin + kids + virus = Reye’s risk. When in doubt, don’t give it out."
},
{
  id: "pharm-024",
  type: "application",
  subject: "Pharmacology & Patient Safety",
  topic: "Salicylate Toxicity",
  difficulty: "moderate",
  question: "A patient undergoing non-surgical periodontal therapy reports taking “a lot of aspirin” for jaw pain over the last several days. She now complains of dizziness, ringing in her ears, rapid breathing, and nausea. Her blood pH is noted to be slightly acidic. Which of the following best describes the likely pharmacologic complication?",
  choices: [
    { key: "A", text: "Salicylate toxicity with respiratory alkalosis followed by metabolic acidosis" },
    { key: "B", text: "Acute allergic reaction involving bronchospasm and angioedema" },
    { key: "C", text: "Reye’s syndrome triggered by viral co-infection and aspirin use" },
    { key: "D", text: "Hepatotoxicity due to aspirin metabolism in the liver" }
  ],
  correctAnswer: "A",

  rationale: "**A. Salicylate toxicity with respiratory alkalosis followed by metabolic acidosis**\nSalicylate toxicity (salicylism) occurs when plasma salicylate levels rise due to overdose or cumulative dosing. Early toxicity stimulates the respiratory center in the medulla, causing hyperventilation and respiratory alkalosis. As toxicity progresses, impaired cellular metabolism and accumulation of organic acids produce metabolic acidosis. Classic symptoms include tinnitus, dizziness, nausea, vomiting, and rapid breathing. The combined acid-base disturbance is a hallmark of aspirin overdose.",

  incorrectRationales: {
    B: "**B. Acute allergic reaction involving bronchospasm and angioedema**\nIncorrect. An allergic reaction would present with urticaria, wheezing, bronchospasm, or facial swelling. The described symptoms—tinnitus, hyperventilation, and acid-base imbalance—are characteristic of toxicity, not hypersensitivity.",
    C: "**C. Reye’s syndrome triggered by viral co-infection and aspirin use**\nIncorrect. Reye’s syndrome primarily affects children and is associated with viral illness and aspirin use. This adult patient’s symptoms align with salicylate toxicity, not pediatric encephalopathy and hepatic dysfunction.",
    D: "**D. Hepatotoxicity due to aspirin metabolism in the liver**\nIncorrect. Severe hepatotoxicity is more commonly associated with acetaminophen overdose. Aspirin toxicity primarily disrupts respiratory and metabolic balance rather than causing direct hepatic necrosis."
  },

  boardTrap: "The NBDHE commonly tests differentiation between salicylate toxicity, allergy, and Reye’s syndrome. Tinnitus and hyperventilation are classic red flags for salicylate toxicity. Acid-base disturbance is the key distinguishing clue.",

  memoryHook: "Tinnitus + tachypnea = think toxicity. Too much aspirin makes you ring, breathe fast, then crash acidic."
},
{
  id: "pharm-025",
  type: "application",
  subject: "Pharmacology & Patient Safety",
  topic: "Acetaminophen Therapeutic Effects",
  difficulty: "moderate",
  question: "A patient with a history of stomach ulcers is advised to avoid NSAIDs for postoperative discomfort following scaling and root planing. Instead, the clinician recommends acetaminophen. Which of the following best describes the primary therapeutic actions of acetaminophen?",
  choices: [
    { key: "A", text: "Anti-inflammatory and antiplatelet" },
    { key: "B", text: "Anxiolytic and anti-inflammatory" },
    { key: "C", text: "Antipyretic and analgesic" },
    { key: "D", text: "Antiseptic and anticoagulant" }
  ],
  correctAnswer: "C",

  rationale: "**C. Antipyretic and analgesic**\nAcetaminophen provides two primary therapeutic effects: analgesic (pain relief) and antipyretic (fever reduction). Unlike NSAIDs, it does not possess significant anti-inflammatory or antiplatelet properties. This makes it the preferred analgesic for patients with gastrointestinal ulcer history, bleeding risk, or NSAID sensitivity.",

  incorrectRationales: {
    A: "**A. Anti-inflammatory and antiplatelet**\nIncorrect. These effects describe aspirin and other NSAIDs. Acetaminophen does not significantly inhibit peripheral prostaglandin synthesis and therefore lacks meaningful anti-inflammatory and antiplatelet action.",
    B: "**B. Anxiolytic and anti-inflammatory**\nIncorrect. Acetaminophen has no anxiolytic (anti-anxiety) properties and minimal anti-inflammatory effect.",
    D: "**D. Antiseptic and anticoagulant**\nIncorrect. Antiseptics prevent infection, and anticoagulants reduce blood clot formation. Acetaminophen has neither of these properties."
  },

  boardTrap: "Students frequently group acetaminophen with NSAIDs because both relieve pain. The key distinction is that acetaminophen does NOT reduce inflammation or inhibit platelets.",

  memoryHook: "Acetaminophen = Ache & Afebrile. Pain and fever only — no anti-inflammatory punch."
},
{
  id: "pharm-026",
  type: "application",
  subject: "Pharmacology & Patient Safety",
  topic: "Acetaminophen Contraindications",
  difficulty: "moderate",
  question: "A patient scheduled for periodontal debridement reports taking over-the-counter acetaminophen for frequent headaches. Upon reviewing the health history, the hygienist notes the patient has a long-standing history of alcohol use and signs of liver dysfunction. Which type of patient is most at risk for complications with acetaminophen use?",
  choices: [
    { key: "A", text: "Individuals with liver disease or chronic alcohol consumption" },
    { key: "B", text: "Patients taking antihistamines for seasonal allergies" },
    { key: "C", text: "Individuals with asthma and known NSAID sensitivity" },
    { key: "D", text: "Patients currently taking calcium-channel blockers for hypertension" }
  ],
  correctAnswer: "A",

  rationale: "**A. Individuals with liver disease or chronic alcohol consumption**\nAcetaminophen is metabolized in the liver. A toxic metabolite (NAPQI) is normally detoxified by glutathione. In patients with chronic alcohol use or pre-existing liver disease, glutathione stores are depleted and hepatic function is impaired. This significantly increases the risk of hepatotoxicity and acute liver failure, even at therapeutic doses.",

  incorrectRationales: {
    B: "**B. Patients taking antihistamines for seasonal allergies**\nIncorrect. There is no significant contraindication between antihistamines and acetaminophen. These drugs act through different mechanisms and metabolic pathways.",
    C: "**C. Individuals with asthma and known NSAID sensitivity**\nIncorrect. Acetaminophen is often recommended as a safer alternative in patients with NSAID-sensitive asthma because it does not significantly inhibit prostaglandin synthesis like NSAIDs.",
    D: "**D. Patients currently taking calcium-channel blockers for hypertension**\nIncorrect. Calcium-channel blockers do not significantly interact with acetaminophen, and they are metabolized through different hepatic pathways."
  },

  boardTrap: "Students often assume acetaminophen is always the safest analgesic. The NBDHE tests recognition that liver function determines safety. Alcohol use + acetaminophen = high hepatotoxic risk.",

  memoryHook: "Tylenol taxes the liver — if the liver’s tired, avoid it. Alcohol + acetaminophen is a dangerous duo."
},
{
  id: "pharm-027",
  type: "application",
  subject: "Pharmacology & Patient Safety",
  topic: "Opioid Antagonists and Overdose Management",
  difficulty: "moderate",
  question: "During a community oral health outreach event, a patient collapses in the dental screening tent. The patient is unresponsive, with shallow breathing and pinpoint pupils. A volunteer mentions the patient has a history of opioid use. EMS is called, and emergency personnel administer a drug that rapidly reverses the respiratory depression. All of the following are opioid antagonists used in this type of emergency except:",
  choices: [
    { key: "A", text: "Naloxone" },
    { key: "B", text: "Narcan" },
    { key: "C", text: "EVZIO" },
    { key: "D", text: "Oxycodone" }
  ],
  correctAnswer: "D",

  rationale: "**D. Oxycodone**\nOxycodone is a full opioid agonist that activates opioid receptors, producing analgesia, sedation, and respiratory depression. It would worsen an opioid overdose rather than reverse it. It is not an antagonist.",

  incorrectRationales: {
    A: "**A. Naloxone**\nIncorrect. Naloxone is a pure opioid antagonist that competitively binds to opioid receptors and rapidly reverses respiratory depression in overdose situations.",
    B: "**B. Narcan**\nIncorrect. Narcan is a brand name for naloxone and is commonly administered intranasally to reverse opioid overdose.",
    C: "**C. EVZIO**\nIncorrect. EVZIO is an auto-injector formulation of naloxone designed for emergency treatment of opioid overdose."
  },

  boardTrap: "Students are often tested on brand versus generic names. Naloxone, Narcan, and EVZIO are all antagonists. Oxycodone is an agonist and would deepen respiratory depression, not reverse it.",

  memoryHook: "Narcan knocks opioids off — oxycodone locks them in. Antagonists reverse. Agonists depress."
},
{
  id: "pharm-029",
  type: "application",
  subject: "Pharmacology & Patient Safety",
  topic: "Hypertension Classification",
  difficulty: "moderate",
  question: "A 63-year-old patient with a history of controlled type 2 diabetes arrives for a routine periodontal maintenance visit. She reports taking all medications as prescribed and denies any current symptoms. Her extraoral findings are unremarkable. Two blood pressure readings taken five minutes apart using a properly sized cuff yield averages of 152/94 mm Hg. Based on current American Heart Association classifications, how should this blood pressure be categorized?",
  choices: [
    { key: "A", text: "Elevated" },
    { key: "B", text: "Stage 2 hypertension" },
    { key: "C", text: "Normal" },
    { key: "D", text: "Hypertensive crisis" }
  ],
  correctAnswer: "B",

  rationale: "**B. Stage 2 hypertension**\nAccording to the American Heart Association, Stage 2 hypertension is defined as systolic ≥140 mm Hg OR diastolic ≥90 mm Hg. This patient’s average reading of 152/94 mm Hg meets both thresholds, placing her squarely in the Stage 2 category.",

  incorrectRationales: {
    A: "**A. Elevated**\nIncorrect. Elevated blood pressure is defined as systolic 120–129 mm Hg and diastolic <80 mm Hg. This patient’s systolic and diastolic readings far exceed those limits.",
    C: "**C. Normal**\nIncorrect. Normal blood pressure is defined as <120/<80 mm Hg. This patient’s readings are significantly above normal values.",
    D: "**D. Hypertensive crisis**\nIncorrect. Hypertensive crisis is defined as systolic ≥180 mm Hg and/or diastolic ≥120 mm Hg. This patient does not meet crisis thresholds."
  },

  boardTrap: "Students often misclassify hypertension by focusing on only one number. According to AHA guidelines, the higher category always determines classification. Even one value in Stage 2 equals Stage 2.",

  memoryHook: "140 starts the danger party. If systolic hits 140+ or diastolic hits 90+, it’s Stage 2."
},
{
  id: "pharm-030",
  type: "application",
  subject: "Pharmacology & Patient Safety",
  topic: "ASA Physical Status Classification",
  difficulty: "moderate",
  question: "A 58-year-old patient presents for a limited exam after reporting localized discomfort around tooth #30. He denies chest pain, dizziness, shortness of breath, or medication changes. He drove himself to the appointment and reports feeling “totally fine.” His medical history includes controlled hyperlipidemia. Two properly taken blood pressure readings five minutes apart average 168/102 mm Hg. Based solely on the American Society of Anesthesiologists (ASA) physical status classification, how should this patient be categorized?",
  choices: [
    { key: "A", text: "ASA III" },
    { key: "B", text: "ASA II" },
    { key: "C", text: "ASA I" },
    { key: "D", text: "ASA IV" }
  ],
  correctAnswer: "A",

  rationale: "**A. ASA III**\nASA III includes patients with severe systemic disease that may limit activity but is not incapacitating. Blood pressure in the range of ≥160 systolic or ≥100 diastolic aligns with a severe but not life-threatening systemic condition, consistent with ASA III classification. The patient is asymptomatic and stable, so he does not meet criteria for ASA IV.",

  incorrectRationales: {
    B: "**B. ASA II**\nIncorrect. ASA II includes mild systemic disease such as blood pressure in the range of 140–159 systolic or 90–99 diastolic. This patient’s readings exceed that threshold and therefore do not qualify as ASA II.",
    C: "**C. ASA I**\nIncorrect. ASA I classification applies to a completely healthy patient with no systemic disease. This patient has significant hypertension and therefore does not meet ASA I criteria.",
    D: "**D. ASA IV**\nIncorrect. ASA IV includes patients with severe systemic disease that is a constant threat to life, often symptomatic or unstable, such as blood pressure ≥180 systolic or ≥120 diastolic. This patient does not meet crisis-level thresholds."
  },

  boardTrap: "ASA classification is not determined by how the patient feels. Even asymptomatic patients with blood pressure ≥160/≥100 are classified as ASA III.",

  memoryHook: "160/100 = three digits, ASA III. Once both numbers enter the big zone, it’s ASA III — even if they feel fine."
},
{
  id: "pharm-031",
  type: "application",
  subject: "Pharmacology & Patient Safety",
  topic: "ASA Physical Status Classification – Diabetes",
  difficulty: "advanced",
  question: "A 67-year-old patient presents for a periodontal re-evaluation appointment. His medical history includes type 2 diabetes diagnosed 15 years ago. He reports taking insulin glargine nightly and metformin twice daily. His most recent A1C from a medical visit two weeks ago was 9.1%. He states he “usually feels okay” but admits that his blood sugar “runs high if I forget meals.” He reports controlled hypertension managed with lisinopril and denies any history of cardiac events. Today's blood pressure, taken twice with a correctly sized cuff, averages 146/88 mm Hg. His gait is slow but steady with no assistive devices. He denies chest pain, shortness of breath, dizziness, or recent hospitalization. Based on the American Society of Anesthesiologists (ASA) physical status classification, what is the MOST appropriate ASA status for this patient?",
  choices: [
    { key: "A", text: "ASA II" },
    { key: "B", text: "ASA I" },
    { key: "C", text: "ASA III" },
    { key: "D", text: "ASA IV" }
  ],
  correctAnswer: "D",

  rationale: "**D. ASA IV**\nASA IV includes patients with severe systemic disease that is a constant threat to life. An A1C of 9.1% indicates poorly controlled diabetes, which significantly increases risk for infection, impaired healing, vascular compromise, and medical emergencies. Long-standing insulin-dependent diabetes with persistent hyperglycemia places this patient in a high-risk category, even if asymptomatic. Poor glycemic control elevates the classification to ASA IV.",

  incorrectRationales: {
    A: "**A. ASA II**\nIncorrect. ASA II includes mild, well-controlled systemic disease. This patient’s diabetes is poorly controlled and insulin-dependent, exceeding ASA II criteria.",
    B: "**B. ASA I**\nIncorrect. ASA I applies only to completely healthy individuals without systemic disease. This patient has significant systemic pathology.",
    C: "**C. ASA III**\nIncorrect. ASA III includes severe systemic disease that is not a constant threat to life. Poorly controlled insulin-dependent diabetes with A1C ≥9% is considered a constant systemic risk, elevating classification to ASA IV."
  },

  boardTrap: "Patients who ‘feel fine’ can still be ASA IV. ASA classification is based on disease control and systemic risk — not symptoms. A1C ≥9% signals poorly controlled diabetes and higher medical risk.",

  memoryHook: "Nine and over? Danger hovers. A1C ≥9% = think ASA IV."
},
{
  id: "pharm-032",
  type: "application",
  subject: "Pharmacology & Patient Safety",
  topic: "ASA Physical Status Classification – Controlled Diabetes",
  difficulty: "advanced",
  question: "A 72-year-old patient presents for a comprehensive periodontal evaluation. His medical history includes type 2 diabetes diagnosed 10 years ago. He reports taking metformin 1000 mg twice daily and “trying to watch carbs when I can.” His most recent A1C from a medical visit three months ago was 7.8%. He denies insulin use. He also reports a history of stage I chronic kidney disease, seasonal asthma controlled with as-needed albuterol, and mild hypertension managed with amlodipine. His blood pressure today, taken twice five minutes apart with an appropriate cuff, averages 138/84 mm Hg. He denies chest pain, shortness of breath at rest, recent hospitalizations, or any limitations in daily activities. Based solely on current ASA physical status guidelines, which classification is MOST appropriate for this patient?",
  choices: [
    { key: "A", text: "ASA I" },
    { key: "B", text: "ASA II" },
    { key: "C", text: "ASA III" },
    { key: "D", text: "ASA IV" }
  ],
  correctAnswer: "B",

  rationale: "**B. ASA II**\nASA II includes patients with mild systemic disease or well-controlled chronic conditions that do not limit activity. This patient’s type 2 diabetes managed with metformin and an A1C of 7.8% reflects acceptable control. His hypertension (138/84 mm Hg), stage I CKD, and controlled asthma are stable and do not limit daily function. Collectively, these conditions fall within ASA II classification.",

  incorrectRationales: {
    A: "**A. ASA I**\nIncorrect. ASA I applies only to completely healthy individuals with no systemic disease. This patient has multiple chronic conditions, even though they are controlled.",
    C: "**C. ASA III**\nIncorrect. ASA III requires severe systemic disease or conditions that significantly limit activity. This patient’s diseases are stable and controlled without functional limitation.",
    D: "**D. ASA IV**\nIncorrect. ASA IV includes unstable or life-threatening systemic disease (e.g., A1C ≥9%, symptomatic cardiac disease, hypertensive crisis). This patient does not meet those criteria."
  },

  boardTrap: "Multiple conditions do not automatically equal ASA III or IV. Control and stability determine classification. Controlled diabetes on oral medication with A1C under 8% typically remains ASA II.",

  memoryHook: "Metformin = manageable. Controlled chronic disease without limitation → think ASA II."
},
{
  id: "pharm-033",
  type: "application",
  subject: "Pharmacology & Patient Safety",
  topic: "ASA Physical Status Classification – Multi-System Disease",
  difficulty: "advanced",
  question: "A 76-year-old patient presents for evaluation of generalized gingival tenderness. His medical history includes long-standing type 2 diabetes, chronic obstructive pulmonary disease (COPD), and hypertension. He reports that he “tries to take all his medications,” which include metformin, amlodipine, and an inhaled corticosteroid. He denies insulin use. He reports occasional shortness of breath when walking uphill but none at rest. He states he “gets winded” if he rushes but otherwise performs daily activities independently. His last A1C from four months ago was 8.6%. He recalls being told his kidney numbers were “borderline” last year. He denies hospitalizations in the past year. Today’s vital signs taken twice with an appropriate cuff show an average blood pressure of 162/96 mm Hg. His respiratory rate is 20 breaths/min, and oxygen saturation on room air is 92%. He is alert, oriented, and denies chest pain, dizziness, or current respiratory distress. Based on the ASA physical status classification system, which rating is MOST appropriate?",
  choices: [
    { key: "A", text: "ASA II" },
    { key: "B", text: "ASA I" },
    { key: "C", text: "ASA III" },
    { key: "D", text: "ASA IV" }
  ],
  correctAnswer: "D",

  rationale: "**D. ASA IV**\nASA IV includes patients with severe systemic disease that is a constant threat to life. This patient presents with multiple poorly controlled or high-risk systemic conditions: Stage 2 hypertension (162/96 mm Hg), COPD with reduced baseline oxygen saturation (92%), and diabetes with elevated A1C (8.6%) approaching poor control. The combination of multi-system compromise and reduced oxygen saturation elevates overall risk beyond ASA III and into ASA IV classification, even in the absence of acute distress.",

  incorrectRationales: {
    A: "**A. ASA II**\nIncorrect. ASA II includes mild, well-controlled systemic disease without significant physiologic compromise. This patient demonstrates unstable blood pressure, reduced oxygen saturation, and multiple systemic burdens.",
    B: "**B. ASA I**\nIncorrect. ASA I is reserved for completely healthy individuals with no systemic disease.",
    C: "**C. ASA III**\nIncorrect. ASA III includes severe systemic disease that limits activity but is not a constant threat to life. Reduced oxygen saturation combined with Stage 2 hypertension and multi-system disease exceeds this category."
  },

  boardTrap: "Multiple moderate diseases stack risk. Oxygen saturation below 94% and Stage 2 hypertension significantly elevate ASA classification even if the patient appears stable. Symptoms do not determine ASA level — physiologic risk does.",

  memoryHook: "O₂ under 94? Think ASA IV. When oxygen drops and diseases stack, risk climbs fast."
},
{
  id: "pharm-034",
  type: "emergency",
  subject: "Pharmacology & Patient Safety",
  topic: "Medical Emergencies – Pulse Assessment",
  difficulty: "moderate",
  question: "A 29-year-old patient collapses in the reception area shortly before his scheduled prophylaxis appointment. He is unresponsive to verbal stimuli. A second provider brings an automated external defibrillator (AED) while you assess for breathing. You instruct a nearby assistant to call emergency services. You then prepare to check for a pulse. In this situation, which site is MOST appropriate for determining whether this patient has a detectable pulse?",
  choices: [
    { key: "A", text: "Brachial artery" },
    { key: "B", text: "Carotid artery" },
    { key: "C", text: "Femoral artery" },
    { key: "D", text: "Radial artery" }
  ],
  correctAnswer: "B",

  rationale: "**B. Carotid artery**\nFor unresponsive adults, the carotid artery is the recommended site for rapid pulse assessment because it reflects central circulation and remains palpable even during compromised perfusion. During cardiac arrest or severe hypotension, peripheral pulses may disappear while the carotid pulse is still detectable.",

  incorrectRationales: {
    A: "**A. Brachial artery**\nIncorrect. The brachial artery is primarily used for pulse assessment in infants, not unresponsive adults.",
    C: "**C. Femoral artery**\nIncorrect. Although central, the femoral artery is not the primary recommended site for rapid pulse checks in emergency dental settings.",
    D: "**D. Radial artery**\nIncorrect. The radial artery is a peripheral pulse and may be absent during cardiovascular collapse, making it unreliable in emergencies."
  },

  boardTrap: "Pulse assessment sites differ by age. Adult + unresponsive = carotid. Infant + unresponsive = brachial. Peripheral pulses (radial) disappear first during shock or arrest.",

  memoryHook: "C for Collapse, C for Carotid. If an adult drops, go straight to the neck."
},
{
  id: "pharm-036",
  type: "assessment",
  subject: "Pharmacology & Patient Safety",
  topic: "Vital Signs ▸ Pulse Rate Interpretation",
  difficulty: "moderate",
  question: "A 22-year-old collegiate swimmer presents for a routine dental exam. He reports no medical conditions and takes no medications. His training schedule includes two swim practices per day, strength conditioning, and endurance intervals. He denies dizziness, fatigue, chest discomfort, or changes in exercise tolerance. During the extraoral assessment, his radial pulse is counted for 60 seconds and averages 48 beats per minute. His breathing is calm and unlabored, and he converses comfortably throughout the appointment. Based on this information, how should this pulse rate be interpreted?",
  choices: [
    { key: "A", text: "Normal finding for a well-conditioned athlete" },
    { key: "B", text: "Indicative of bradycardia requiring immediate referral" },
    { key: "C", text: "Suggestive of early cardiovascular compromise" },
    { key: "D", text: "Consistent with an arrhythmic baseline pattern" }
  ],
  correctAnswer: "A",

  rationale: "**A. Normal finding for a well-conditioned athlete**\nHighly trained athletes often have resting pulse rates between 40–60 bpm due to increased stroke volume and cardiac efficiency. A pulse of 48 bpm in a patient with no symptoms and heavy endurance training is considered physiologically normal.",

  incorrectRationales: {
    B: "**B. Indicative of bradycardia requiring immediate referral**\nIncorrect. True bradycardia requiring referral is typically symptomatic, presenting with dizziness, syncope, fatigue, or exercise intolerance, none of which are reported.",
    C: "**C. Suggestive of early cardiovascular compromise**\nIncorrect. There are no clinical signs of compromise. The patient is asymptomatic and demonstrates high athletic conditioning.",
    D: "**D. Consistent with an arrhythmic baseline pattern**\nIncorrect. Arrhythmias affect rhythm regularity rather than rate alone. The stem describes a steady pulse without irregularity."
  },

  boardTrap: "Students often assume <60 bpm is abnormal. In endurance athletes, a low resting pulse can be a sign of cardiovascular efficiency, not pathology.",

  memoryHook: "Athlete heart beats smart. Lower rate equals higher efficiency."
},
{
  id: "pharm-037",
  type: "medical-risk",
  subject: "Pharmacology & Patient Safety",
  topic: "Medical Emergencies ▸ Chest Pain Risk Assessment",
  difficulty: "moderate",
  question: "A 59-year-old patient presents for a scheduled periodontal maintenance appointment. His medical history includes controlled hyperlipidemia managed with rosuvastatin. He reports no history of myocardial infarction, angina, hypertension, or cardiac procedures. During the health history update, he casually mentions experiencing “tightness across the chest” twice in the past month while carrying laundry upstairs. He states the sensation lasted “maybe a minute,” resolved on its own, and he did not seek medical care. He denies shortness of breath at rest, dizziness, nausea, radiation of pain, or current symptoms. His vital signs today are within normal limits, and he expresses that he “feels fine now.” Based on this information, what is the MOST appropriate next step?",
  choices: [
    { key: "A", text: "Proceed with treatment as long as vital signs remain stable" },
    { key: "B", text: "Begin treatment but monitor the patient closely throughout the appointment" },
    { key: "C", text: "Postpone treatment and refer the patient for immediate medical evaluation" },
    { key: "D", text: "Provide oxygen and activate EMS due to suspected active cardiac event" }
  ],
  correctAnswer: "C",

  rationale: "**C. Postpone treatment and refer the patient for immediate medical evaluation**\nUndiagnosed chest pain with exertion is treated as potential unstable angina until medically cleared. Even in the absence of current symptoms, any history of exertional chest tightness within the last month requires medical evaluation before elective care. Proceeding with routine dental treatment without clearance poses unnecessary risk.",

  incorrectRationales: {
    A: "**A. Proceed with treatment as long as vital signs remain stable**\nIncorrect. Proceeding with elective treatment is not appropriate when cardiac-related symptoms have not been medically evaluated.",
    B: "**B. Begin treatment but monitor the patient closely throughout the appointment**\nIncorrect. Monitoring does not eliminate the medical risk of untreated or undiagnosed exertional chest discomfort.",
    D: "**D. Provide oxygen and activate EMS due to suspected active cardiac event**\nIncorrect. EMS activation is indicated for active chest pain or suspected myocardial infarction. This patient is asymptomatic during the appointment."
  },

  boardTrap: "Differentiate active chest pain during the appointment from recent unexplained exertional chest pain. Past exertional chest symptoms require referral and deferral of elective treatment.",

  memoryHook: "Chest pain on stairs? Stop right there. Exertional chest tightness means postpone treatment."
},
{
  id: "pharm-038",
  type: "medical-risk",
  subject: "Pharmacology & Patient Safety",
  topic: "Antibiotic Prophylaxis ▸ Cardiac Conditions",
  difficulty: "moderate",
  question: "A 66-year-old patient presents for extensive periodontal debridement. His medical history includes hypertension controlled with losartan, hyperlipidemia managed with atorvastatin, and a history of rheumatic fever as a child. He reports undergoing a cardiac procedure “a few years ago” but is unsure of the exact name. He states, “I think they fixed a valve because it wasn’t working right.” He recalls being told he would “need antibiotics for some appointments,” but he has not consistently followed this advice and has not taken any premedication for today’s visit. He denies prosthetic joints, immunosuppressive conditions, or recent infections. His last medical check-up was 18 months ago. He is currently asymptomatic and denies chest pain, shortness of breath, or palpitations. Based on the available information, what is the BEST course of action regarding antibiotic prophylaxis?",
  choices: [
    { key: "A", text: "Proceed without premedication because rheumatic fever alone does not require antibiotic prophylaxis" },
    { key: "B", text: "Delay treatment until medical records confirm whether the patient has a prosthetic heart valve" },
    { key: "C", text: "Premedicate routinely because all cardiac patients with a valve disorder require antibiotics" },
    { key: "D", text: "Provide prophylaxis only if hypertension is uncontrolled" }
  ],
  correctAnswer: "B",

  rationale: "**B. Delay treatment until medical records confirm whether the patient has a prosthetic heart valve**\nThe presence of a prosthetic heart valve is a primary indication for mandatory antibiotic prophylaxis. The patient reports a prior valve procedure but cannot confirm whether a prosthetic valve or annuloplasty ring was placed. Without verification from medical records or cardiology, proceeding without prophylaxis could place the patient at risk for infective endocarditis. Elective periodontal procedures must be postponed until the cardiac history is clarified.",

  incorrectRationales: {
    A: "**A. Proceed without premedication because rheumatic fever alone does not require antibiotic prophylaxis**\nIncorrect. While rheumatic fever alone may not require prophylaxis, the patient reports a possible valve replacement. This cannot be assumed safe without confirmation.",
    C: "**C. Premedicate routinely because all cardiac patients with a valve disorder require antibiotics**\nIncorrect. Only specific high-risk cardiac conditions require antibiotic prophylaxis. Antibiotics should not be prescribed without confirmed indication.",
    D: "**D. Provide prophylaxis only if hypertension is uncontrolled**\nIncorrect. Hypertension is not an indication for antibiotic prophylaxis."
  },

  boardTrap: "If the history suggests a possible prosthetic valve but is unclear, do not treat until confirmed. Assumptions increase risk. Verification determines prophylaxis need.",

  memoryHook: "If the valve story is fuzzy, treatment stops. Unclear valve history means delay and verify."
},
{
  id: "pharm-039",
  type: "pharmacology",
  subject: "Pharmacology & Patient Safety",
  topic: "Drug-Induced Conditions ▸ Gingival Hyperplasia",
  difficulty: "moderate",
  question: "A 64-year-old patient presents for evaluation of generalized anterior gingival enlargement that has gradually progressed over the past year. He reports difficulty flossing and occasional bleeding when brushing. His medical history includes hypertension, stable angina, and seasonal allergies. His medication list includes: Amlodipine, Atorvastatin, Loratadine as needed, and Low-dose aspirin. He denies recent medication changes, recreational drug use, or systemic symptoms. Clinical findings confirm firm, fibrotic gingival overgrowth involving both maxillary and mandibular anterior teeth without signs of acute infection. Based on this presentation, all of the following medications are associated with drug-induced gingival hyperplasia EXCEPT:",
  choices: [
    { key: "A", text: "Atorvastatin" },
    { key: "B", text: "Amlodipine" },
    { key: "C", text: "Cyclosporine" },
    { key: "D", text: "Phenytoin" }
  ],
  correctAnswer: "A",

  rationale: "**A. Atorvastatin**\nAtorvastatin is not associated with gingival hyperplasia. It is a lipid-lowering medication (statin) and does not alter fibroblast metabolism or collagen turnover.",

  incorrectRationales: {
    B: "**B. Amlodipine**\nIncorrect. Amlodipine is a calcium channel blocker associated with dose-dependent gingival hyperplasia, similar to nifedipine.",
    C: "**C. Cyclosporine**\nIncorrect. Cyclosporine is an immunosuppressant strongly linked to gingival enlargement due to altered fibroblast activity.",
    D: "**D. Phenytoin**\nIncorrect. Phenytoin is an anticonvulsant with one of the highest rates of drug-induced gingival hyperplasia."
  },

  boardTrap: "All except structure. Calcium channel blockers, cyclosporine, and phenytoin cause gingival enlargement. Statins do not.",

  memoryHook: "Statins slim tissue. They do not make it swell."
},
{
  id: "pharm-040",
  type: "pharmacology",
  subject: "Pharmacology & Patient Safety",
  topic: "Drug-Induced Conditions ▸ Gingival Hyperplasia",
  difficulty: "moderate",
  question: "A 71-year-old patient presents for a periodontal evaluation after noticing gradual tissue enlargement around the anterior teeth. He reports difficulty maintaining home care due to tissue bulk. His medical history includes hypertension and supraventricular tachycardia. His current medications include: Cardizem, Amlodipine, Lorazepam at bedtime, Omeprazole, and Vitamin D supplement. He denies changes in medication dosage and reports consistent use for several years. Clinical examination reveals firm, fibrotic gingival overgrowth on both arches, most pronounced on the facial surfaces of the anterior teeth. No signs of acute infection are present. Based on this information, which medication in his list is MOST strongly associated with the gingival findings?",
  choices: [
    { key: "A", text: "Lorazepam" },
    { key: "B", text: "Amlodipine" },
    { key: "C", text: "Omeprazole" },
    { key: "D", text: "Vitamin D supplement" }
  ],
  correctAnswer: "B",

  rationale: "**B. Amlodipine**\nAmlodipine is a calcium channel blocker and a well-established cause of drug-induced gingival hyperplasia. Calcium channel blockers with documented risk include amlodipine, nifedipine, verapamil, and diltiazem (Cardizem). Although the patient is taking two calcium channel blockers, amlodipine is most commonly implicated in gingival enlargement.",

  incorrectRationales: {
    A: "**A. Lorazepam**\nIncorrect. Benzodiazepines are not associated with gingival enlargement.",
    C: "**C. Omeprazole**\nIncorrect. Proton pump inhibitors are not associated with drug-induced gingival hyperplasia.",
    D: "**D. Vitamin D supplement**\nIncorrect. Vitamin supplements do not induce fibrotic gingival changes."
  },

  boardTrap: "Calcium channel blockers as a drug class are linked to gingival hyperplasia. When multiple CCBs appear, select the most commonly implicated agent listed.",

  memoryHook: "If it ends in pine, the gums may climb. Nifedipine and amlodipine are classic offenders."
},
{
  id: "pharm-041",
  type: "emergency",
  subject: "Pharmacology & Patient Safety",
  topic: "Medical Emergencies ▸ Orthostatic Hypotension",
  difficulty: "moderate",
  question: "A 54-year-old patient completes a periodontal maintenance appointment without complications. When the chair is returned to an upright position, he reports sudden lightheadedness and a sensation that “the room shifted.” He remains responsive, denies chest pain, and shows no signs of respiratory distress. Which chair position is MOST appropriate to manage this episode?",
  choices: [
    { key: "A", text: "Fully upright with head supported" },
    { key: "B", text: "Supine with knees extended downward" },
    { key: "C", text: "Supine with legs elevated" },
    { key: "D", text: "Trendelenburg with head lower than feet" }
  ],
  correctAnswer: "C",

  rationale: "**C. Supine with legs elevated**\nPostural (orthostatic) hypotension results from a temporary drop in blood pressure when standing or sitting upright. Returning the patient to a supine position with legs elevated improves venous return and stabilizes blood pressure.",

  incorrectRationales: {
    A: "**A. Fully upright with head supported**\nIncorrect. Keeping the patient upright may worsen symptoms and does not assist venous return.",
    B: "**B. Supine with knees extended downward**\nIncorrect. While supine positioning helps, the legs should be elevated to improve circulation and venous return.",
    D: "**D. Trendelenburg with head lower than feet**\nIncorrect. Trendelenburg position is no longer recommended for management of hypotension due to potential complications with breathing and intracranial pressure."
  },

  boardTrap: "Do not confuse Trendelenburg with proper management of orthostatic hypotension. The correct response is supine with legs elevated, not head-down tilt.",

  memoryHook: "Feet up fixes the drop."
},
{
  id: "pharm-042",
  type: "clinical-foundations",
  subject: "Pharmacology & Patient Safety",
  topic: "Patient Positioning ▸ Supine",
  difficulty: "moderate",
  question: "A 47-year-old patient is scheduled for a full-mouth periodontal charting appointment. To maintain airway patency and proper operator positioning, the patient is placed in the standard supine position before beginning instrumentation. At approximately what angle is the chair positioned when the patient is in true supine?",
  choices: [
    { key: "A", text: "15 degrees" },
    { key: "B", text: "30 degrees" },
    { key: "C", text: "45 degrees" },
    { key: "D", text: "0 degrees" }
  ],
  correctAnswer: "D",

  rationale: "**D. 0 degrees**\nSupine equals 0 degrees. The patient’s head, torso, and legs are in a horizontal, fully flat position. This position optimizes operator ergonomics and maintains patient comfort for most dental procedures.",

  incorrectRationales: {
    A: "**A. 15 degrees**\nIncorrect. This represents slight recline, not full supine positioning.",
    B: "**B. 30 degrees**\nIncorrect. This approaches semi-supine or semi-Fowler’s positioning.",
    C: "**C. 45 degrees**\nIncorrect. This position is often used for medically compromised patients or those with respiratory concerns, not true supine."
  },

  boardTrap: "Supine is often confused with semi-supine. Only 0 degrees represents full supine positioning.",

  memoryHook: "Supine equals super flat. Flat line equals zero degrees."
},
{
  id: "pharm-043",
  type: "emergency",
  subject: "Pharmacology & Patient Safety",
  topic: "Medical Emergencies ▸ Postural Hypotension Management",
  difficulty: "moderate",
  question: "A 56-year-old patient becomes lightheaded after being brought upright at the end of a periodontal maintenance appointment. He remains conscious, denies chest pain, and shows no signs of respiratory distress. You recognize this as postural hypotension and prepare to reposition the dental chair to stabilize his circulation. To best manage this episode, at approximately what angle should the chair be placed?",
  choices: [
    { key: "A", text: "45 degrees" },
    { key: "B", text: "30 degrees" },
    { key: "C", text: "90 degrees" },
    { key: "D", text: "0 degrees with legs slightly elevated" }
  ],
  correctAnswer: "D",

  rationale: "**D. 0 degrees with legs slightly elevated**\nManagement of postural hypotension requires returning the patient to a flat (0 degrees) supine position. Slight elevation of the legs improves venous return and helps resolve the temporary drop in blood pressure.",

  incorrectRationales: {
    A: "**A. 45 degrees**\nIncorrect. This position is too upright and may worsen symptoms of hypotension.",
    B: "**B. 30 degrees**\nIncorrect. A partial recline is not sufficient to restore perfusion effectively.",
    C: "**C. 90 degrees**\nIncorrect. Sitting upright can worsen orthostatic hypotension."
  },

  boardTrap: "Do not confuse Trendelenburg with proper hypotension management. True management is flat supine with legs elevated, not head-down tilt.",

  memoryHook: "Flat and feet up. Pressure picks up."
},
{
  id: "pharm-044",
  type: "medical-risk",
  subject: "Pharmacology & Patient Safety",
  topic: "Cardiovascular Conditions ▸ Congestive Heart Failure",
  difficulty: "moderate",
  question: "A 73-year-old patient presents for a limited exam due to increased fatigue over the past several weeks. He reports difficulty lying flat at night and says he sleeps in a recliner “because it feels easier to breathe.” He denies acute chest pain but notes he becomes short of breath when walking from the parking lot into the clinic. His ankles appear swollen, and he reports that his shoes have felt “tight” by evening for the past month. Medical history includes hypertension, type 2 diabetes, and a 20-year history of smoking (quit 10 years ago). Current medications include lisinopril, furosemide, and metoprolol. His vital signs today are stable, and he denies dizziness or lightheadedness during the appointment. Based on this presentation, which condition is MOST consistent with the patient’s symptoms?",
  choices: [
    { key: "A", text: "Isolated left-sided heart failure" },
    { key: "B", text: "Isolated right-sided heart failure" },
    { key: "C", text: "Acute pulmonary embolism" },
    { key: "D", text: "Congestive heart failure involving both right and left sides" }
  ],
  correctAnswer: "D",

  rationale: "**D. Congestive heart failure involving both right and left sides**\nThe patient demonstrates signs of both left- and right-sided heart failure. Left-sided findings include orthopnea and dyspnea on exertion. Right-sided findings include bilateral ankle edema and peripheral fluid accumulation. When pulmonary and systemic congestion occur together, this indicates combined congestive heart failure rather than isolated involvement.",

  incorrectRationales: {
    A: "**A. Isolated left-sided heart failure**\nIncorrect. While left-sided failure explains dyspnea and orthopnea, it does not account for peripheral edema, which is a right-sided sign.",
    B: "**B. Isolated right-sided heart failure**\nIncorrect. Right-sided failure explains peripheral edema but does not account for orthopnea or exertional dyspnea, which are left-sided signs.",
    C: "**C. Acute pulmonary embolism**\nIncorrect. A pulmonary embolism typically presents with sudden onset shortness of breath, chest pain, tachycardia, and acute distress. This patient’s symptoms are chronic and progressive."
  },

  boardTrap: "Orthopnea indicates left-sided failure. Peripheral edema indicates right-sided failure. When both appear together, think combined congestive heart failure.",

  memoryHook: "If it is lungs and legs, it is both sides."
},
{
  id: "pharm-045",
  type: "pharmacology",
  subject: "Pharmacology & Patient Safety",
  topic: "Antibiotic Prophylaxis ▸ AHA Guidelines",
  difficulty: "moderate",
  question: "A 69-year-old patient presents for scaling and root planing of the mandibular posterior teeth. His medical history includes controlled hypertension, hyperlipidemia, and a past history of endocarditis. He reports having undergone “heart surgery” four years ago but cannot recall the specific procedure. He denies joint replacements and reports no immunosuppressive conditions. Based on current American Heart Association (AHA) recommendations, all of the following conditions require antibiotic prophylaxis EXCEPT:",
  choices: [
    { key: "A", text: "History of rheumatic fever without residual cardiac damage" },
    { key: "B", text: "Previous infective endocarditis" },
    { key: "C", text: "Prosthetic cardiac valves" },
    { key: "D", text: "Certain unrepaired or partially repaired congenital heart defects" }
  ],
  correctAnswer: "A",

  rationale: "**A. History of rheumatic fever without residual cardiac damage**\nRheumatic fever without residual valvular dysfunction does not require antibiotic prophylaxis. Current AHA guidelines no longer recommend routine coverage for isolated past rheumatic fever in the absence of valvular involvement.",

  incorrectRationales: {
    B: "**B. Previous infective endocarditis**\nIncorrect. A history of infective endocarditis is one of the highest-risk categories and always requires antibiotic prophylaxis.",
    C: "**C. Prosthetic cardiac valves**\nIncorrect. Mechanical, bioprosthetic, transcatheter valves, and annuloplasty rings require prophylaxis due to high risk of infective endocarditis.",
    D: "**D. Certain unrepaired or partially repaired congenital heart defects**\nIncorrect. Unrepaired cyanotic congenital defects, repaired defects with residual shunts or regurgitation, and palliative shunts require prophylaxis."
  },

  boardTrap: "Rheumatic fever alone does not automatically require prophylaxis. Only active residual valvular disease qualifies.",

  memoryHook: "Rheumatic past with normal valves. No pills."
},
{
  id: "pharm-046",
  type: "pharmacology",
  subject: "Pharmacology & Patient Safety",
  topic: "Antibiotic Prophylaxis ▸ Correct Dosing",
  difficulty: "moderate",
  question: "A 62-year-old patient presents for periodontal debridement. His medical history includes a prosthetic aortic valve placed 5 years ago, hypertension, and mild chronic kidney disease (Stage II). The patient reports no medication allergies and states that his physician “mentioned needing antibiotics for certain procedures,” but he cannot remember the medication or dose. He arrives with a prescription bottle of amoxicillin 250 mg, labeled “take one capsule if needed before dental appointments,” with no additional instructions. He reports taking this single 250 mg capsule prior to today’s visit. Vital signs are stable, and the patient denies pain or acute symptoms. You confirm he has not taken any other antibiotics in the past month and does not take anticoagulants. Based on current AHA guidelines, what is the MOST appropriate action regarding today’s appointment?",
  choices: [
    { key: "A", text: "Proceed with treatment because the patient already took amoxicillin" },
    { key: "B", text: "Administer an additional 250 mg amoxicillin to reach a total dose of 500 mg" },
    { key: "C", text: "Postpone treatment and ensure the patient receives the correct 2 g amoxicillin dose prior to the next appointment" },
    { key: "D", text: "Administer clindamycin 600 mg orally because the initial amoxicillin dose was insufficient" }
  ],
  correctAnswer: "C",

  rationale: "**C. Postpone treatment and ensure the patient receives the correct 2 g amoxicillin dose prior to the next appointment**\nThe correct adult prophylactic dose is 2 g of amoxicillin taken 30 to 60 minutes before the procedure. A 250 mg dose is insufficient and does not provide adequate protection. AHA guidelines do not allow stacking or correcting an incorrect dose after it has been taken. If the correct drug, dose, or timing is not met, elective treatment must be deferred.",

  incorrectRationales: {
    A: "**A. Proceed with treatment because the patient already took amoxicillin**\nIncorrect. A 250 mg dose does not provide adequate prophylaxis and treatment cannot proceed once improper dosing has occurred.",
    B: "**B. Administer an additional 250 mg amoxicillin to reach a total dose of 500 mg**\nIncorrect. The AHA prohibits stacking or adding doses after an incorrect premedication dose has been taken. The full 2 g must be taken correctly as a single pre-procedure dose.",
    D: "**D. Administer clindamycin 600 mg orally because the initial amoxicillin dose was insufficient**\nIncorrect. Clindamycin is not recommended unless there is a severe penicillin allergy. Switching antibiotics after an incorrect dose is not permitted."
  },

  boardTrap: "Correct drug, correct dose, correct timing. If any component is incorrect, defer treatment. Do not stack or switch antibiotics after an improper dose.",

  memoryHook: "If the dose was not right, do not fight. Reschedule."
},
{
  id: "pharm-047",
  type: "clinical-foundations",
  subject: "Pharmacology & Patient Safety",
  topic: "Autonomic Control ▸ Cardiac Innervation",
  difficulty: "moderate",
  question: "A 61-year-old patient presents for a routine dental exam. His medical history includes controlled hypertension and mild anxiety. During the medical history update, he mentions occasional episodes of a “slow, calming heartbeat” during deep breathing exercises recommended by his physician. He denies chest pain, dizziness, or shortness of breath. Which cranial nerve provides parasympathetic innervation to the sinoatrial (SA) node and influences this physiological response?",
  choices: [
    { key: "A", text: "Glossopharyngeal nerve" },
    { key: "B", text: "Vagus nerve" },
    { key: "C", text: "Trigeminal nerve" },
    { key: "D", text: "Accessory nerve" }
  ],
  correctAnswer: "B",

  rationale: "**B. Vagus nerve**\nThe vagus nerve (cranial nerve X) provides parasympathetic innervation to the sinoatrial node, atrioventricular node, and atrial myocardium. Increased vagal tone reduces heart rate and produces the calming, slowed cardiac response described.",

  incorrectRationales: {
    A: "**A. Glossopharyngeal nerve**\nIncorrect. Cranial nerve IX provides sensory input from the carotid sinus and baroreceptors but does not directly innervate the SA node.",
    C: "**C. Trigeminal nerve**\nIncorrect. Cranial nerve V is responsible for facial sensation and mastication and does not regulate cardiac autonomic function.",
    D: "**D. Accessory nerve**\nIncorrect. Cranial nerve XI supplies motor function to the sternocleidomastoid and trapezius muscles."
  },

  boardTrap: "Baroreceptor input is CN IX. Parasympathetic cardiac output is CN X. Do not confuse sensory input with autonomic output.",

  memoryHook: "Vagus equals Vegas. What happens in Vegas slows down."
},
{
  id: "pharm-048",
  type: "clinical-foundations",
  subject: "Pharmacology & Patient Safety",
  topic: "Cardiac Conduction ▸ SA and AV Node Physiology",
  difficulty: "moderate",
  question: "A 68-year-old patient presents for a recall exam. His medical history includes controlled hypertension and a remote history of atrial fibrillation that resolved with medication years ago. He reports experiencing occasional episodes of “slow, heavy heartbeats” in the morning and “racing” sensations during mild exertion, though he has not mentioned these symptoms to his physician. He denies chest pain, dizziness, syncope, or shortness of breath. During the extraoral exam, his radial pulse is regular but alternates between a noticeably slow pattern and brief periods of rapid rate. You review his medical form and note no pacemaker or implanted devices. Which statement BEST explains the cardiac conduction physiology associated with this patient’s alternating slow and rapid heart rhythms?",
  choices: [
    { key: "A", text: "The sinoatrial node becomes the pacemaker only when the AV node fails" },
    { key: "B", text: "The AV node generates impulses at 60–100 bpm during normal function" },
    { key: "C", text: "Tachycardia episodes indicate failure of the SA node to initiate impulses" },
    { key: "D", text: "The AV node can assume pacing at a slower rate when SA node activity is suppressed, leading to bradycardia, while intact SA node firing may produce episodes of tachycardia" }
  ],
  correctAnswer: "D",

  rationale: "**D. The AV node can assume pacing at a slower rate when SA node activity is suppressed, leading to bradycardia, while intact SA node firing may produce episodes of tachycardia**\nThe SA node is the primary pacemaker and normally fires at 60 to 100 beats per minute. If SA node activity slows or pauses, the AV node can assume pacing at 40 to 60 beats per minute, producing bradycardia. When SA node firing resumes at an increased rate, tachycardic episodes may occur. Alternating slow and rapid rhythms reflect variability in SA node automaticity with compensatory AV node pacing.",

  incorrectRationales: {
    A: "**A. The sinoatrial node becomes the pacemaker only when the AV node fails**\nIncorrect. The SA node is the primary pacemaker under normal conditions. It does not depend on AV node failure to function.",
    B: "**B. The AV node generates impulses at 60–100 bpm during normal function**\nIncorrect. The AV node has an intrinsic pacing rate of approximately 40 to 60 beats per minute.",
    C: "**C. Tachycardia episodes indicate failure of the SA node to initiate impulses**\nIncorrect. Tachycardia reflects increased SA node firing, not failure."
  },

  boardTrap: "SA node equals 60 to 100 beats per minute. AV node equals 40 to 60 beats per minute. Ventricular escape equals 20 to 40 beats per minute. Mixed tachycardia and bradycardia often indicate shifting pacemaker control.",

  memoryHook: "SA starts the race. AV slows the pace."
},
{
  id: "pharm-049",
  type: "emergency",
  subject: "Pharmacology & Patient Safety",
  topic: "Medical Emergencies ▸ Pulseless Ventricular Tachycardia",
  difficulty: "moderate",
  question: "A 58-year-old patient is checking out at the front desk after completing nonsurgical periodontal therapy. While speaking with staff, he suddenly stops mid-sentence, becomes pale, and collapses to the floor. He does not respond to verbal stimulation. You assess breathing and note shallow, irregular respirations. A second provider retrieves the emergency kit and AED while you check for a carotid pulse. After 10 seconds, you are unable to feel a definite pulse. The AED pads are placed, and the device begins rhythm analysis. The screen indicates a rapid, wide-complex rhythm consistent with ventricular tachycardia. According to current emergency guidelines, what is the MOST appropriate immediate action?",
  choices: [
    { key: "A", text: "Provide rescue breaths only until the AED reanalyzes" },
    { key: "B", text: "Deliver the shock as advised by the AED and immediately resume high-quality chest compressions" },
    { key: "C", text: "Begin chest compressions but delay shocking until a physician arrives" },
    { key: "D", text: "Place the patient in recovery position and monitor until advanced care arrives" }
  ],
  correctAnswer: "B",

  rationale: "**B. Deliver the shock as advised by the AED and immediately resume high-quality chest compressions**\nPulseless ventricular tachycardia is a shockable dysrhythmia. When the AED identifies ventricular tachycardia or ventricular fibrillation, a shock should be delivered immediately. After the shock, high-quality chest compressions must resume for 2 minutes before rhythm reanalysis. Early defibrillation significantly improves survival outcomes.",

  incorrectRationales: {
    A: "**A. Provide rescue breaths only until the AED reanalyzes**\nIncorrect. The patient is pulseless. Rescue breaths alone are ineffective. CPR with compressions and defibrillation is required.",
    C: "**C. Begin chest compressions but delay shocking until a physician arrives**\nIncorrect. Delaying defibrillation decreases the chance of converting pulseless ventricular tachycardia. CPR alone does not correct a shockable rhythm.",
    D: "**D. Place the patient in recovery position and monitor until advanced care arrives**\nIncorrect. The recovery position is appropriate only for breathing, responsive patients. This patient is unconscious and pulseless."
  },

  boardTrap: "Pulseless ventricular tachycardia is treated exactly like ventricular fibrillation. Agonal or shallow breathing does not mean a pulse is present. Shock first, then resume compressions.",

  memoryHook: "Wide, fast, no pulse. Shock first."
},
{
  id: "pharm-050",
  type: "emergency",
  subject: "Pharmacology & Patient Safety",
  topic: "Medical Emergencies ▸ Myocardial Infarction Recognition",
  difficulty: "moderate",
  question: "A 71-year-old male presents for a limited exam due to persistent fatigue and mild chest pressure over the past two days. He reports that the discomfort began after mowing his yard and felt like a “heavy squeezing” across the middle of his chest. He assumed it was indigestion and rested, but the pressure has continued intermittently. He denies radiation of pain to the jaw or arm but notes slight shortness of breath when lying flat. He states he is “not feeling right today” and has been unusually tired. His medical history includes hypertension, type 2 diabetes, and hyperlipidemia. Medications include lisinopril, metformin, and atorvastatin. Vital signs: BP 158/92 mm Hg, pulse 104 bpm and irregular, respirations 20 per minute. Extraoral exam reveals slight pallor and cool skin. The patient is alert but appears fatigued. Based on this presentation, what condition is MOST strongly suspected?",
  choices: [
    { key: "A", text: "Myocardial infarction with myocardial muscle necrosis" },
    { key: "B", text: "Stable angina triggered by exertion" },
    { key: "C", text: "Gastroesophageal reflux disease (GERD)" },
    { key: "D", text: "Panic attack with sympathetic overactivity" }
  ],
  correctAnswer: "A",

  rationale: "**A. Myocardial infarction with myocardial muscle necrosis**\nThis patient demonstrates multiple red-flag indicators of an evolving myocardial infarction, including prolonged chest pressure lasting more than 24 hours, fatigue, pallor, cool skin, tachycardia with irregular pulse, and significant cardiovascular risk factors. Myocardial infarction involves ischemia leading to necrosis of myocardial tissue.",

  incorrectRationales: {
    B: "**B. Stable angina triggered by exertion**\nIncorrect. Stable angina typically resolves with rest and lasts less than 20 minutes. Persistent symptoms over days suggest myocardial infarction rather than stable angina.",
    C: "**C. Gastroesophageal reflux disease (GERD)**\nIncorrect. GERD does not produce pallor, irregular pulse, tachycardia, or systemic perfusion changes.",
    D: "**D. Panic attack with sympathetic overactivity**\nIncorrect. Panic attacks are acute and episodic. They do not cause prolonged chest pressure with ongoing cardiovascular instability."
  },

  boardTrap: "Prolonged chest pressure in a high-risk patient should be treated as myocardial infarction until proven otherwise. Do not dismiss ongoing symptoms as reflux or anxiety.",

  memoryHook: "Pressure that stays. Heart muscle decays."
},
{
  id: "pharm-051",
  type: "emergency",
  subject: "Pharmacology & Patient Safety",
  topic: "Medical Emergencies ▸ Myocardial Ischemia Recognition",
  difficulty: "moderate",
  question: "A 66-year-old male presents for periodontal maintenance therapy. During the appointment, he becomes unusually quiet and slightly pale, with rapid breathing. He wipes sweat from his forehead and reports sudden chest pressure, shortness of breath, and feeling 'not right.' His medical history includes hypertension, hyperlipidemia, and a 40-year smoking history. Medications include lisinopril and atorvastatin. Vital signs: BP 154/88 mm Hg, pulse 112 bpm, respirations 24 per minute, skin cool and moist. Based on this presentation, what condition is MOST strongly suspected?",
  choices: [
    { key: "A", text: "Acute asthma exacerbation" },
    { key: "B", text: "Panic attack with sympathetic overactivity" },
    { key: "C", text: "Myocardial ischemia (reduced coronary blood flow)" },
    { key: "D", text: "Hypoglycemia related to missed meals" }
  ],
  correctAnswer: "C",

  rationale: "**C. Myocardial ischemia (reduced coronary blood flow)**\nMyocardial ischemia occurs when coronary blood flow is insufficient to meet oxygen demand. Symptoms commonly include dyspnea, diaphoresis, pale or cool skin, tachycardia, and chest pressure rather than sharp pain. This patient’s cardiovascular risk factors strongly support ischemia.",

  incorrectRationales: {
    A: "**A. Acute asthma exacerbation**\nIncorrect. Asthma typically presents with wheezing and difficulty on exhalation rather than chest pressure with diaphoresis.",
    B: "**B. Panic attack with sympathetic overactivity**\nIncorrect. Panic attacks may involve sweating and rapid breathing but typically lack chest pressure in a high-risk cardiac patient.",
    D: "**D. Hypoglycemia related to missed meals**\nIncorrect. Hypoglycemia often presents with shakiness, confusion, and hunger rather than chest pressure with dyspnea and diaphoresis."
  },

  boardTrap: "Myocardial ischemia may present with vague symptoms such as sweating, shortness of breath, and pressure rather than classic crushing chest pain. High-risk history strengthens suspicion.",

  memoryHook: "Sweaty plus short of breath plus pressure equals heart asking for oxygen."
},
{
  id: "pharm-052",
  type: "emergency",
  subject: "Pharmacology & Patient Safety",
  topic: "Medical Emergencies ▸ Stable Angina Management",
  difficulty: "moderate",
  question: "A 72-year-old male presents for a periodontal maintenance appointment. While reviewing his medical history, he reports occasional episodes of chest tightness during exertion that resolve with rest. Midway through treatment, he becomes visibly tense and reports mid-sternal chest pressure. He denies sharp pain or radiation of discomfort. Medical history includes hypertension, hyperlipidemia, and stable angina. He confirms possession of his emergency medications. Vital signs: BP 150/84 mm Hg, pulse 98 bpm. What is the most appropriate immediate management?",
  choices: [
    { key: "A", text: "Administer 324 mg chewable aspirin and activate EMS" },
    { key: "B", text: "Stop treatment and administer the patient’s nitroglycerin sublingually" },
    { key: "C", text: "Place patient in Trendelenburg position and provide high-flow oxygen" },
    { key: "D", text: "Administer epinephrine 0.3 mg intramuscularly" }
  ],
  correctAnswer: "B",

  rationale: "**B. Stop treatment and administer the patient’s nitroglycerin sublingually**\nNitroglycerin is the first-line treatment for stable angina. It dilates coronary arteries, reduces myocardial oxygen demand, and relieves ischemic chest discomfort. Stable angina typically resolves with rest and nitroglycerin.",

  incorrectRationales: {
    A: "**A. Administer 324 mg chewable aspirin and activate EMS**\nIncorrect. This is appropriate for suspected myocardial infarction. The presentation is consistent with stable angina, which should first be managed with nitroglycerin.",
    C: "**C. Place patient in Trendelenburg position and provide high-flow oxygen**\nIncorrect. Trendelenburg is not indicated for chest pain. Oxygen is not routinely required unless hypoxia is present.",
    D: "**D. Administer epinephrine 0.3 mg intramuscularly**\nIncorrect. Epinephrine increases myocardial oxygen demand and can worsen angina."
  },

  boardTrap: "Stable angina improves with rest and nitroglycerin. Myocardial infarction does not. Do not escalate to EMS unless symptoms persist after nitroglycerin.",

  memoryHook: "Tight chest. Nitro works best."
},
{
  id: "pharm-053",
  type: "medical-risk",
  subject: "Pharmacology & Patient Safety",
  topic: "Cardiovascular Surgery ▸ CABG Dental Considerations",
  difficulty: "moderate",
  question: "A 68-year-old male presents for a periodontal maintenance appointment four months after undergoing triple coronary artery bypass graft (CABG) surgery. His medical history includes hypertension, hyperlipidemia, and stable type 2 diabetes. Medications include metoprolol, atorvastatin, metformin, and low-dose aspirin. He reports feeling much better since surgery, with no current chest discomfort, dyspnea, or fatigue. He has resumed light activity but has not yet returned for his scheduled six-month cardiology follow-up. Vital signs: BP 142/82 mm Hg, pulse 78 bpm, respirations 16 per minute. He requests scaling and root planing for teeth #2–4 due to persistent bleeding and inflammation. What is the MOST appropriate course of action regarding elective periodontal treatment?",
  choices: [
    { key: "A", text: "Proceed with SRP today; provide antibiotic premedication because CABG requires lifelong coverage" },
    { key: "B", text: "Delay treatment for 3–5 years; CABG patients require full cardiac clearance and mandatory premedication" },
    { key: "C", text: "Postpone elective treatment until at least 6 months post-CABG and consult with the patient’s physician; no antibiotic premedication is indicated" },
    { key: "D", text: "Proceed with SRP today without medical consultation because CABG restores normal cardiac function" }
  ],
  correctAnswer: "C",

  rationale: "**C. Postpone elective treatment until at least 6 months post-CABG and consult with the patient’s physician; no antibiotic premedication is indicated**\nElective dental procedures are typically postponed for six months following CABG to allow cardiac stabilization and adequate healing. Coronary artery bypass graft surgery is not an indication for antibiotic prophylaxis. Physician consultation is recommended prior to elective care during this recovery period.",

  incorrectRationales: {
    A: "**A. Proceed with SRP today; provide antibiotic premedication because CABG requires lifelong coverage**\nIncorrect. CABG does not require antibiotic prophylaxis, and elective treatment should generally be postponed until six months post-surgery.",
    B: "**B. Delay treatment for 3–5 years; CABG patients require full cardiac clearance and mandatory premedication**\nIncorrect. Long-term delay and mandatory prophylaxis are not supported by guidelines.",
    D: "**D. Proceed with SRP today without medical consultation because CABG restores normal cardiac function**\nIncorrect. Elective treatment within six months of CABG should involve physician consultation."
  },

  boardTrap: "Heart surgery does not automatically mean antibiotic prophylaxis. CABG requires a six-month wait for elective care, not lifelong premedication.",

  memoryHook: "Bypass means no premed. Wait six instead."
},
{
  id: "pharm-054",
  type: "pharmacology",
  subject: "Pharmacology & Patient Safety",
  topic: "Antibiotic Prophylaxis ▸ Prosthetic Heart Valves",
  difficulty: "moderate",
  question: "A 73-year-old female presents for periodontal maintenance. Her history includes hypertension, atrial fibrillation, and a bioprosthetic aortic valve replacement completed 14 months ago. She reports consistent cardiology follow-ups and states her cardiologist told her everything has healed. She denies chest pain, dyspnea, or recent hospitalization. Medications include metoprolol, low-dose aspirin, and atorvastatin. Vital signs: BP 138/82 mm Hg, pulse 72 bpm, respirations 14 per minute. She is scheduled for full-mouth periodontal maintenance with subgingival instrumentation. What is the MOST appropriate protocol regarding antibiotic premedication?",
  choices: [
    { key: "A", text: "Premedication is required for life for all patients with prosthetic heart valves, regardless of the time since surgery" },
    { key: "B", text: "Premedication is only required during the first six months following valve replacement" },
    { key: "C", text: "Premedication is unnecessary after one year if healing is complete" },
    { key: "D", text: "Premedication depends solely on whether arrhythmias or chest symptoms are present" }
  ],
  correctAnswer: "A",

  rationale: "**A. Premedication is required for life for all patients with prosthetic heart valves, regardless of the time since surgery**\nPatients with prosthetic heart valves, whether mechanical or bioprosthetic, remain at lifelong risk for infective endocarditis. Current AHA guidelines require antibiotic prophylaxis indefinitely, regardless of time since surgery or healing status.",

  incorrectRationales: {
    B: "**B. Premedication is only required during the first six months following valve replacement**\nIncorrect. This limited window applies to certain repaired congenital heart defects, not prosthetic valve replacements.",
    C: "**C. Premedication is unnecessary after one year if healing is complete**\nIncorrect. Healing status does not eliminate infective endocarditis risk associated with prosthetic valves.",
    D: "**D. Premedication depends solely on whether arrhythmias or chest symptoms are present**\nIncorrect. Premedication is determined by structural cardiac risk factors, not symptom presence."
  },

  boardTrap: "Statements such as 'my cardiologist said it healed' do not eliminate prophylaxis requirements for prosthetic valves. Prosthetic valve equals lifelong premedication.",

  memoryHook: "Valve replaced. Premed stays."
},
{
  id: "pharm-055",
  type: "clinical-foundations",
  subject: "Pharmacology & Patient Safety",
  topic: "Neurologic Emergencies ▸ Cerebrovascular Accident",
  difficulty: "moderate",
  question: "A 69-year-old male presents for periodontal maintenance. His medical history includes hypertension and controlled type 2 diabetes. He expresses concern about his brother’s recent stroke and asks whether periodontal disease can directly cause a stroke. He denies neurological symptoms such as facial drooping, vision changes, or sudden weakness. Vital signs: BP 156/92 mm Hg, pulse 84 bpm, respirations 16 per minute. Periodontal examination reveals generalized 5–6 mm pockets with bleeding on probing and moderate plaque accumulation. Which of the following is the direct cause of a cerebrovascular accident (CVA)?",
  choices: [
    { key: "A", text: "Chronic periodontal inflammation leading to increased systemic cytokine levels" },
    { key: "B", text: "Elevated cholesterol contributing to gradual narrowing of cerebral arteries" },
    { key: "C", text: "Long-term diabetes causing microvascular endothelial injury" },
    { key: "D", text: "Interruption of blood supply to the brain due to ischemia or hemorrhage" }
  ],
  correctAnswer: "D",

  rationale: "**D. Interruption of blood supply to the brain due to ischemia or hemorrhage**\nA cerebrovascular accident occurs when there is a sudden interruption of cerebral blood flow, either from an ischemic blockage or a hemorrhagic vessel rupture. This acute disruption leads directly to neuronal injury and neurologic deficit.",

  incorrectRationales: {
    A: "**A. Chronic periodontal inflammation leading to increased systemic cytokine levels**\nIncorrect. Periodontal disease increases systemic inflammation and stroke risk but is not the direct mechanism causing a cerebrovascular accident.",
    B: "**B. Elevated cholesterol contributing to gradual narrowing of cerebral arteries**\nIncorrect. Hyperlipidemia contributes to atherosclerosis but does not directly cause the acute event.",
    C: "**C. Long-term diabetes causing microvascular endothelial injury**\nIncorrect. Diabetes increases vascular risk but does not directly cause the sudden interruption of cerebral blood flow."
  },

  boardTrap: "Differentiate risk factors from direct causes. Periodontal disease, diabetes, and hyperlipidemia increase stroke risk but do not directly cause the acute event.",

  memoryHook: "Stroke equals sudden stop in brain blood flow."
},
{
  id: "pharm-056",
  type: "medical-risk",
  subject: "Pharmacology & Patient Safety",
  topic: "Neurologic Conditions ▸ Seizure Trigger Management",
  difficulty: "moderate",
  question: "A 43-year-old patient with a history of epilepsy presents for periodontal therapy. He reports experiencing a generalized tonic–clonic seizure two months ago after missing several doses of his anticonvulsant medication. His current medications include levetiracetam and sertraline. He reports feeling “stable lately” but admits to occasionally forgetting morning doses when rushing to work. During the appointment, he becomes increasingly anxious when the ultrasonic scaler is turned on, stating the “buzzing throws me off.” His vital signs are within normal limits, and no prodromal signs are present. Which action is MOST appropriate to minimize seizure risk during today’s appointment?",
  choices: [
    { key: "A", text: "Administer 100% oxygen to reduce neurologic excitability" },
    { key: "B", text: "Proceed as planned but reduce the speed of the ultrasonic scaler" },
    { key: "C", text: "Avoid known sensory triggers, limit ultrasonic use, and maintain a quiet, low-stimulus environment" },
    { key: "D", text: "Provide nitrous oxide sedation to prevent seizure occurrence" }
  ],
  correctAnswer: "C",

  rationale: "**C. Avoid known sensory triggers, limit ultrasonic use, and maintain a quiet, low-stimulus environment**\nPatients with epilepsy may have identifiable sensory triggers such as flashing lights, buzzing sounds, or stress that precipitate seizures. Ultrasonic scalers create auditory and vibrational stimulation that may provoke seizure activity. Management includes minimizing sensory triggers, using hand instrumentation when appropriate, maintaining a calm environment, and avoiding sudden stimuli.",

  incorrectRationales: {
    A: "**A. Administer 100% oxygen to reduce neurologic excitability**\nIncorrect. Oxygen may help with mild anxiety but does not prevent seizures triggered by sensory stimulation.",
    B: "**B. Proceed as planned but reduce the speed of the ultrasonic scaler**\nIncorrect. Lowering the speed does not eliminate the sensory trigger. The buzzing stimulus remains present.",
    D: "**D. Provide nitrous oxide sedation to prevent seizure occurrence**\nIncorrect. Nitrous oxide is not a preventive treatment for seizures and may unpredictably affect seizure threshold. Caution is advised in seizure disorders."
  },

  boardTrap: "Epilepsy questions often focus on environmental and sensory triggers rather than drug interactions alone. Words such as buzzing, flashing, or startled signal a trigger-based management approach.",

  memoryHook: "No buzz equals no burst."
},
{
  id: "pharm-057",
  type: "pharmacology",
  subject: "Pharmacology & Patient Safety",
  topic: "Psychiatric Medications ▸ Lithium Considerations",
  difficulty: "moderate",
  question: "A 57-year-old patient presents for nonsurgical periodontal therapy. His medical history includes bipolar disorder managed with lithium, hypothyroidism, and hypertension controlled with hydrochlorothiazide. He reports stable mood and denies recent medication changes. During the assessment, the hygienist plans to administer local anesthesia containing epinephrine. The patient shows no signs of acute distress, and vital signs are stable. Which consideration is MOST important for safe management of this patient?",
  choices: [
    { key: "A", text: "Epinephrine is contraindicated because lithium causes severe tachycardia when combined with vasoconstrictors" },
    { key: "B", text: "Lithium toxicity risk increases with dehydration; vasoconstrictors are NOT contraindicated, but prolonged appointments requiring heavy fluid loss should be avoided" },
    { key: "C", text: "Local anesthetics without epinephrine are required because lithium alters sodium channel metabolism" },
    { key: "D", text: "Vasoconstrictors potentiate lithium’s mood-stabilizing effects and may trigger manic symptoms" }
  ],
  correctAnswer: "B",

  rationale: "**B. Lithium toxicity risk increases with dehydration; vasoconstrictors are NOT contraindicated, but prolonged appointments requiring heavy fluid loss should be avoided**\nLithium has a narrow therapeutic index and is excreted through the kidneys. Dehydration can reduce renal clearance and increase lithium levels, leading to toxicity. Patients taking diuretics such as hydrochlorothiazide are at increased risk. Epinephrine is not contraindicated, but prolonged appointments that promote fluid loss or stress should be minimized.",

  incorrectRationales: {
    A: "**A. Epinephrine is contraindicated because lithium causes severe tachycardia when combined with vasoconstrictors**\nIncorrect. Lithium does not produce severe tachycardia when combined with epinephrine. This is a common misconception.",
    C: "**C. Local anesthetics without epinephrine are required because lithium alters sodium channel metabolism**\nIncorrect. Lithium does not interfere with sodium channels in a manner that impacts local anesthetic function.",
    D: "**D. Vasoconstrictors potentiate lithium’s mood-stabilizing effects and may trigger manic symptoms**\nIncorrect. There is no evidence that vasoconstrictors worsen mood stability or precipitate mania in patients taking lithium."
  },

  boardTrap: "Do not assume epinephrine is contraindicated with psychiatric medications. The true concern with lithium is renal clearance and dehydration, not vasoconstrictor interaction.",

  memoryHook: "Lithium leaks slow. Watch the flow. Fluid loss means trouble."
},
{
  id: "pharm-058",
  type: "medical-risk",
  subject: "Pharmacology & Patient Safety",
  topic: "Infectious Disease ▸ HIV Immunosuppression Management",
  difficulty: "moderate",
  question: "A 38-year-old patient with a known history of HIV presents for evaluation of painful red patches on the palate and tongue. He reports missing doses of his antiretroviral therapy during the past three weeks due to insurance issues. He complains of fatigue, weight loss, and occasional night sweats. His most recent CD4 count and viral load are unknown. Intraoral examination reveals erythematous, depapillated areas with surrounding white pseudomembrane that can be wiped away. Which management approach is MOST appropriate?",
  choices: [
    { key: "A", text: "Proceed with full-mouth periodontal therapy and document possible erythema migrans" },
    { key: "B", text: "Perform all treatment today using standard precautions because HIV patients cannot transmit infection when asymptomatic" },
    { key: "C", text: "Delay all treatment until an antibiotic regimen is started for suspected thrush" },
    { key: "D", text: "Defer elective treatment and refer for updated CD4 count and viral load due to possible uncontrolled infection" }
  ],
  correctAnswer: "D",

  rationale: "**D. Defer elective treatment and refer for updated CD4 count and viral load due to possible uncontrolled infection**\nThis patient shows multiple indicators of possible immunosuppression, including missed antiretroviral doses, systemic symptoms such as fatigue and weight loss, and suspected oral candidiasis. Without current CD4 count and viral load data, it is not appropriate to proceed with elective invasive dental treatment. Referral for medical evaluation and laboratory assessment is indicated prior to care.",

  incorrectRationales: {
    A: "**A. Proceed with full-mouth periodontal therapy and document possible erythema migrans**\nIncorrect. The clinical presentation is consistent with candidiasis rather than erythema migrans. Proceeding without evaluating immune status may place the patient at risk.",
    B: "**B. Perform all treatment today using standard precautions because HIV patients cannot transmit infection when asymptomatic**\nIncorrect. Standard precautions are always required, but they do not replace the need to assess immune status when signs of uncontrolled infection are present.",
    C: "**C. Delay all treatment until an antibiotic regimen is started for suspected thrush**\nIncorrect. Antifungal therapy may be indicated, but immune status must first be evaluated. Empiric treatment without laboratory assessment is not appropriate."
  },

  boardTrap: "HIV patients can receive routine care when medically stable and labs are current. Unknown CD4 count, missed medications, and opportunistic lesions require medical referral before elective treatment.",

  memoryHook: "No labs. No probe."
},
{
  id: "pharm-059",
  type: "emergency",
  subject: "Pharmacology & Patient Safety",
  topic: "Medical Emergencies ▸ Hyperventilation Management",
  difficulty: "moderate",
  question: "A 46-year-old patient with a history of severe panic disorder arrives for periodontal debridement. She reports that dental appointments often cause shaking, dizziness, and fear of “passing out.” Her medical history includes mild asthma, panic disorder treated with alprazolam as needed, and no cardiovascular disease. During the health history review, she begins breathing rapidly, reporting tingling in her fingers and a feeling of “lightness.” Her vital signs show mild tachycardia but are otherwise stable. Which action is MOST appropriate?",
  choices: [
    { key: "A", text: "Coach slow, guided breathing and reassure the patient; avoid paper-bag rebreathing due to risk of hypoxia" },
    { key: "B", text: "Administer epinephrine-containing anesthetic immediately to stabilize circulation" },
    { key: "C", text: "Position the patient supine with legs elevated to counteract impending syncope" },
    { key: "D", text: "Use nitrous oxide immediately because hyperventilation is treated with inhaled N₂O" }
  ],
  correctAnswer: "A",

  rationale: "**A. Coach slow, guided breathing and reassure the patient; avoid paper-bag rebreathing due to risk of hypoxia**\nThe patient is experiencing hyperventilation associated with panic. Classic signs include rapid breathing, tingling of the extremities, lightheadedness, and mild tachycardia. First-line management involves calm reassurance and guided slow breathing. Paper-bag rebreathing is not recommended, particularly in patients with asthma, due to the risk of hypoxia.",

  incorrectRationales: {
    B: "**B. Administer epinephrine-containing anesthetic immediately to stabilize circulation**\nIncorrect. There is no cardiovascular indication for epinephrine, and it may worsen tachycardia and anxiety.",
    C: "**C. Position the patient supine with legs elevated to counteract impending syncope**\nIncorrect. This is appropriate for vasovagal syncope, not hyperventilation. The patient is conscious and breathing rapidly, not fainting.",
    D: "**D. Use nitrous oxide immediately because hyperventilation is treated with inhaled N₂O**\nIncorrect. Nitrous oxide may reduce anxiety but is not appropriate during an active hyperventilation episode, especially in a patient with asthma."
  },

  boardTrap: "Differentiate hyperventilation from syncope and asthma. Do not use paper-bag breathing in asthmatic patients. Calm coaching is first-line management.",

  memoryHook: "Breathe in calm, not the bag."
},
{
  id: "micro-001",
  type: "microbiology",
  subject: "Oral Disease Mastery",
  topic: "Spirochetes ▸ Diagnostic Microscopy",
  difficulty: "moderate",
  question: "A 32-year-old patient presents with painless ulcers on the oral mucosa that appeared two weeks ago and have not resolved. The lesions are firm, round, and non-tender. The patient denies recent trauma or chemical exposure. Standard Gram staining and light microscopy fail to reveal any organisms. The clinician decides to use a special microscopic technique that allows visualization of thin, helical bacteria exhibiting corkscrew-like motion. Which diagnostic method is most appropriate for identifying the causative organism?",
  choices: [
    { key: "A", text: "Phase-contrast microscopy" },
    { key: "B", text: "Dark-field microscopy" },
    { key: "C", text: "Scanning electron microscopy" },
    { key: "D", text: "Fluorescence microscopy" }
  ],
  correctAnswer: "B",

  rationale: "**B. Dark-field microscopy**\nSpirochetes such as Treponema pallidum are too thin to be visualized with standard light microscopy or Gram staining. Dark-field microscopy provides contrast against a dark background, allowing the delicate spiral shape and motility to be observed directly.",

  incorrectRationales: {
    A: "**A. Phase-contrast microscopy**\nIncorrect. While it enhances contrast in transparent specimens, it is not ideal for visualizing extremely thin spirochetes.",
    C: "**C. Scanning electron microscopy**\nIncorrect. Requires fixed, non-living specimens and is not used for direct clinical diagnosis.",
    D: "**D. Fluorescence microscopy**\nIncorrect. Fluorescent antibody testing confirms exposure immunologically but is not direct visualization."
  },

  boardTrap: "Dark-field equals direct visualization. Fluorescent testing equals immunologic confirmation. Do not confuse detection with serology.",

  memoryHook: "Scared of snakes in the dark. Spirochetes slither under dark-field."
},
{
  id: "micro-002",
  type: "microbiology",
  subject: "Oral Disease Mastery",
  topic: "Anaerobes ▸ Necrotizing Periodontal Infections",
  difficulty: "moderate",
  question: "A 26-year-old patient reports spontaneous gingival bleeding and severe oral malodor. The gingiva appears ulcerated and cratered at the interdental papillae, with a gray pseudomembrane present. The patient recently experienced significant stress and irregular sleep patterns. Microscopic examination reveals numerous gram-negative obligate anaerobic rods. Which microorganism is most likely predominant in this infection?",
  choices: [
    { key: "A", text: "Porphyromonas gingivalis" },
    { key: "B", text: "Fusobacterium nucleatum" },
    { key: "C", text: "Aggregatibacter actinomycetemcomitans" },
    { key: "D", text: "Prevotella intermedia" }
  ],
  correctAnswer: "D",

  rationale: "**D. Prevotella intermedia**\nPrevotella intermedia is a gram-negative obligate anaerobic rod associated with necrotizing ulcerative gingivitis and stress-related gingival conditions.",

  incorrectRationales: {
    A: "**A. Porphyromonas gingivalis**\nIncorrect. More strongly associated with chronic periodontitis rather than acute necrotizing lesions.",
    B: "**B. Fusobacterium nucleatum**\nIncorrect. Acts as a biofilm bridge organism but is not the primary pathogen in NUG.",
    C: "**C. Aggregatibacter actinomycetemcomitans**\nIncorrect. Associated with aggressive periodontitis in younger patients."
  },

  boardTrap: "Prevotella equals stress and necrotizing lesions. Porphyromonas equals chronic destruction.",

  memoryHook: "Pre-med stress. Pre-votella."
},
{
  id: "micro-003",
  type: "microbiology",
  subject: "Oral Disease Mastery",
  topic: "Anaerobes ▸ Collagen Destruction",
  difficulty: "moderate",
  question: "A 41-year-old patient presents with chronic periodontitis and 6–8 mm probing depths. Subgingival plaque reveals gram-negative black-pigmented anaerobes producing collagenase that degrades connective tissue. Which microorganism is primarily responsible?",
  choices: [
    { key: "A", text: "Porphyromonas gingivalis" },
    { key: "B", text: "Prevotella intermedia" },
    { key: "C", text: "Tannerella forsythia" },
    { key: "D", text: "Treponema denticola" }
  ],
  correctAnswer: "A",

  rationale: "**A. Porphyromonas gingivalis**\nP. gingivalis is a keystone pathogen in chronic periodontitis. It produces collagenase and gingipains that degrade connective tissue and disrupt host immune defenses.",

  incorrectRationales: {
    B: "**B. Prevotella intermedia**\nIncorrect. Associated with acute necrotizing or hormonal gingivitis, not primary collagen destruction.",
    C: "**C. Tannerella forsythia**\nIncorrect. Contributes to adhesion and immune evasion but not primary collagen breakdown.",
    D: "**D. Treponema denticola**\nIncorrect. Assists in invasion but is not the main collagenase producer."
  },

  boardTrap: "Black pigment plus collagen destruction equals Porphyromonas gingivalis.",

  memoryHook: "P for Periodontitis and Protein breakdown."
},
{
  id: "micro-004",
  type: "microbiology",
  subject: "Oral Disease Mastery",
  topic: "Dental Caries ▸ Initiator Organisms",
  difficulty: "moderate",
  question: "A 19-year-old presents with enamel demineralization and new cavitation. Frequent sugary beverage intake is reported. Which bacterial species initiates this carious process?",
  choices: [
    { key: "A", text: "Lactobacillus acidophilus" },
    { key: "B", text: "Actinomyces viscosus" },
    { key: "C", text: "Streptococcus mutans" },
    { key: "D", text: "Streptococcus sanguinis" }
  ],
  correctAnswer: "C",

  rationale: "**C. Streptococcus mutans**\nS. mutans initiates enamel caries through acid production and glucan-mediated adhesion to tooth surfaces.",

  incorrectRationales: {
    A: "**A. Lactobacillus acidophilus**\nIncorrect. Involved in progression of deeper lesions, not initiation.",
    B: "**B. Actinomyces viscosus**\nIncorrect. Associated primarily with root caries.",
    D: "**D. Streptococcus sanguinis**\nIncorrect. Competes with S. mutans and is protective."
  },

  boardTrap: "Initiator equals mutans. Progressor equals Lactobacillus.",

  memoryHook: "Mutans make the mess."
},
{
  id: "micro-005",
  type: "microbiology",
  subject: "Oral Disease Mastery",
  topic: "Gram-Positive Rods ▸ Neurotoxic Exotoxins",
  difficulty: "moderate",
  question: "A 45-year-old construction worker develops jaw stiffness and muscle spasms after a deep puncture wound. Which bacterial genus is most likely responsible?",
  choices: [
    { key: "A", text: "Listeria" },
    { key: "B", text: "Bacillus" },
    { key: "C", text: "Corynebacterium" },
    { key: "D", text: "Clostridium" }
  ],
  correctAnswer: "D",

  rationale: "**D. Clostridium**\nClostridium tetani is a gram-positive, spore-forming, obligate anaerobe producing tetanospasmin, which causes muscle rigidity and lockjaw.",

  incorrectRationales: {
    A: "**A. Listeria**\nIncorrect. Causes meningitis and sepsis, not tetanic muscle rigidity.",
    B: "**B. Bacillus**\nIncorrect. Aerobic spore-forming rod not associated with neurotoxic paralysis.",
    C: "**C. Corynebacterium**\nIncorrect. Causes diphtheria with pseudomembrane formation, not muscle spasms."
  },

  boardTrap: "Spore-forming soil bacteria does not always mean Bacillus. Neurotoxin plus anaerobe equals Clostridium.",

  memoryHook: "Closed spaces. Clostridium contracts."
},
{
  id: "micro-006",
  type: "microbiology",
  subject: "Oral Disease Mastery",
  topic: "Gram-Negative Cocci ▸ Urogenital Infection",
  difficulty: "moderate",
  question: "A 23-year-old patient presents with painful urination and purulent urethral discharge. Microscopy reveals polymorphonuclear leukocytes containing gram-negative diplococci. Which microorganism is most likely responsible?",
  choices: [
    { key: "A", text: "Neisseria gonorrhoeae" },
    { key: "B", text: "Neisseria meningitidis" },
    { key: "C", text: "Haemophilus influenzae" },
    { key: "D", text: "Moraxella catarrhalis" }
  ],
  correctAnswer: "A",

  rationale: "**A. Neisseria gonorrhoeae**\nNeisseria gonorrhoeae is a gram-negative diplococcus that infects mucous membranes of the urogenital tract. It induces a neutrophil-rich inflammatory response, producing purulent discharge and dysuria.",

  incorrectRationales: {
    B: "**B. Neisseria meningitidis**\nIncorrect. Causes meningitis and is transmitted via respiratory droplets, not localized genital infection.",
    C: "**C. Haemophilus influenzae**\nIncorrect. A gram-negative rod associated with respiratory infections.",
    D: "**D. Moraxella catarrhalis**\nIncorrect. Associated with respiratory tract infections, not sexually transmitted disease."
  },

  boardTrap: "Both Neisseria species are gram-negative diplococci. Link gonorrhoeae to genital infection and meningitidis to meningitis.",

  memoryHook: "No capsule, no mercy. Gonorrhoeae grips mucosa tightly."
},
{
  id: "micro-007",
  type: "microbiology",
  subject: "Oral Disease Mastery",
  topic: "Spirochetes ▸ Vector-Borne Disease",
  difficulty: "moderate",
  question: "A patient develops an expanding circular rash with central clearing after a tick bite. Which microorganism is most likely responsible?",
  choices: [
    { key: "A", text: "Leptospira interrogans" },
    { key: "B", text: "Treponema pallidum" },
    { key: "C", text: "Borrelia burgdorferi" },
    { key: "D", text: "Rickettsia rickettsii" }
  ],
  correctAnswer: "C",

  rationale: "**C. Borrelia burgdorferi**\nBorrelia burgdorferi is a gram-negative spirochete transmitted by Ixodes ticks and causes Lyme disease, characterized by erythema migrans and potential systemic involvement.",

  incorrectRationales: {
    A: "**A. Leptospira interrogans**\nIncorrect. Causes Weil’s disease from animal urine exposure.",
    B: "**B. Treponema pallidum**\nIncorrect. Causes syphilis with painless chancre lesions.",
    D: "**D. Rickettsia rickettsii**\nIncorrect. Causes Rocky Mountain spotted fever with petechial rash on wrists and ankles."
  },

  boardTrap: "Tick-borne does not always mean Rocky Mountain spotted fever. Target rash equals Borrelia.",

  memoryHook: "Bull’s-eye equals Borrelia."
},
{
  id: "micro-008",
  type: "microbiology",
  subject: "Oral Disease Mastery",
  topic: "Spirochetes ▸ Necrotizing Ulcerative Gingivitis",
  difficulty: "moderate",
  question: "A patient presents with cratered papillae, halitosis, and a gray pseudomembrane. Microscopy reveals motile helical bacteria among fusiform rods. Which microorganism is most strongly associated?",
  choices: [
    { key: "A", text: "Campylobacter rectus" },
    { key: "B", text: "Helicobacter pylori" },
    { key: "C", text: "Fusobacterium nucleatum" },
    { key: "D", text: "Treponema denticola" }
  ],
  correctAnswer: "D",

  rationale: "**D. Treponema denticola**\nTreponema denticola is a motile anaerobic spirochete strongly associated with necrotizing ulcerative gingivitis and periodontal tissue invasion.",

  incorrectRationales: {
    A: "**A. Campylobacter rectus**\nIncorrect. A curved rod but not a primary invasive spirochete.",
    B: "**B. Helicobacter pylori**\nIncorrect. Associated with gastric ulcers.",
    C: "**C. Fusobacterium nucleatum**\nIncorrect. A co-pathogen and bridging organism but not the primary spirochete."
  },

  boardTrap: "Oral spiral equals Treponema denticola. Gastric spiral equals Helicobacter pylori.",

  memoryHook: "T for teeth. T. denticola attacks gingiva."
},
{
  id: "micro-009",
  type: "microbiology",
  subject: "Oral Disease Mastery",
  topic: "Gram-Positive Cocci ▸ Odontogenic Infection",
  difficulty: "moderate",
  question: "Culture from an odontogenic facial infection reveals gram-positive cocci in chains that are catalase-negative and alpha-hemolytic. Which group is most likely responsible?",
  choices: [
    { key: "A", text: "Viridans streptococci" },
    { key: "B", text: "Streptococcus pyogenes" },
    { key: "C", text: "Enterococcus faecalis" },
    { key: "D", text: "Staphylococcus aureus" }
  ],
  correctAnswer: "A",

  rationale: "**A. Viridans streptococci**\nViridans streptococci are alpha-hemolytic, catalase-negative gram-positive cocci common in oral flora and are frequent causes of odontogenic infections.",

  incorrectRationales: {
    B: "**B. Streptococcus pyogenes**\nIncorrect. Beta-hemolytic and more commonly associated with skin infections.",
    C: "**C. Enterococcus faecalis**\nIncorrect. Common in GI tract and endodontic failures.",
    D: "**D. Staphylococcus aureus**\nIncorrect. Catalase-positive cocci in clusters."
  },

  boardTrap: "Alpha hemolytic plus oral source equals viridans group.",

  memoryHook: "Viridans equals very in the mouth."
},
{
  id: "micro-010",
  type: "microbiology",
  subject: "Oral Disease Mastery",
  topic: "Dental Caries ▸ Adhesion Mechanism",
  difficulty: "moderate",
  question: "Certain cariogenic bacteria convert dietary carbohydrates into sticky extracellular polysaccharides that allow adhesion to enamel. Which carbohydrate and product combination describes this process?",
  choices: [
    { key: "A", text: "Glucose – lactic acid" },
    { key: "B", text: "Fructose – endotoxin" },
    { key: "C", text: "Sucrose – dextran" },
    { key: "D", text: "Lactose – hydrogen peroxide" }
  ],
  correctAnswer: "C",

  rationale: "**C. Sucrose – dextran**\nStreptococcus mutans uses sucrose and the enzyme glucosyltransferase to produce dextran, a sticky polysaccharide that enables firm adhesion to enamel surfaces.",

  incorrectRationales: {
    A: "**A. Glucose – lactic acid**\nIncorrect. Acid production follows adhesion, not initial attachment.",
    B: "**B. Fructose – endotoxin**\nIncorrect. Endotoxins are components of gram-negative bacteria.",
    D: "**D. Lactose – hydrogen peroxide**\nIncorrect. Hydrogen peroxide production is associated with commensal streptococci."
  },

  boardTrap: "Sucrose equals glue. Acid comes later.",

  memoryHook: "Sucrose sticks."
},
{
  id: "micro-011",
  type: "microbiology",
  subject: "Oral Disease Mastery",
  topic: "Gram-Positive Cocci ▸ Post-Streptococcal Disease",
  difficulty: "moderate",
  question: "A 14-year-old presents with fever, sore throat, sandpaper-like rash, strawberry tongue, and beta-hemolytic gram-positive cocci in chains that are bacitracin sensitive. Which organism is most likely responsible?",
  choices: [
    { key: "A", text: "Streptococcus pyogenes" },
    { key: "B", text: "Streptococcus pneumoniae" },
    { key: "C", text: "Staphylococcus aureus" },
    { key: "D", text: "Streptococcus agalactiae" }
  ],
  correctAnswer: "A",

  rationale: "**A. Streptococcus pyogenes**\nS. pyogenes is a beta-hemolytic Group A streptococcus responsible for pharyngitis and scarlet fever. Erythrogenic toxins cause the sandpaper rash and strawberry tongue. Untreated infection may lead to rheumatic heart disease.",

  incorrectRationales: {
    B: "**B. Streptococcus pneumoniae**\nIncorrect. Alpha-hemolytic and encapsulated; associated with pneumonia, not scarlet fever.",
    C: "**C. Staphylococcus aureus**\nIncorrect. Catalase-positive cocci in clusters; associated with abscesses and toxic shock.",
    D: "**D. Streptococcus agalactiae**\nIncorrect. Group B streptococcus associated with neonatal infections."
  },

  boardTrap: "Beta-hemolysis plus bacitracin sensitivity equals Group A strep.",

  memoryHook: "Pyro means fire. Strep pyogenes sets the throat on fire."
},
{
  id: "micro-012",
  type: "microbiology",
  subject: "Oral Disease Mastery",
  topic: "Post-Streptococcal Sequelae ▸ Rheumatic Heart Disease",
  difficulty: "moderate",
  question: "Which condition requires antibiotic prophylaxis prior to invasive dental procedures?",
  choices: [
    { key: "A", text: "Hypertension" },
    { key: "B", text: "Rheumatic heart disease secondary to rheumatic fever" },
    { key: "C", text: "Mitral valve prolapse without regurgitation" },
    { key: "D", text: "History of scarlet fever without cardiac involvement" }
  ],
  correctAnswer: "B",

  rationale: "**B. Rheumatic heart disease secondary to rheumatic fever**\nPermanent valvular damage from rheumatic heart disease predisposes to infective endocarditis. Prophylaxis is indicated for invasive dental procedures.",

  incorrectRationales: {
    A: "**A. Hypertension**\nIncorrect. Does not require antibiotic prophylaxis.",
    C: "**C. Mitral valve prolapse without regurgitation**\nIncorrect. Current guidelines do not require prophylaxis.",
    D: "**D. History of scarlet fever without cardiac involvement**\nIncorrect. No valvular damage means no prophylaxis."
  },

  boardTrap: "Rheumatic fever alone does not require coverage. Valvular damage does.",

  memoryHook: "If the heart was hurt, protect it first."
},
{
  id: "micro-013",
  type: "microbiology",
  subject: "Oral Disease Mastery",
  topic: "Viridans Streptococci ▸ Subacute Endocarditis",
  difficulty: "moderate",
  question: "A patient develops subacute infective endocarditis after dental treatment. Blood cultures show alpha-hemolytic gram-positive cocci in chains. Which organism is most likely responsible?",
  choices: [
    { key: "A", text: "Staphylococcus aureus" },
    { key: "B", text: "Streptococcus pyogenes" },
    { key: "C", text: "Enterococcus faecalis" },
    { key: "D", text: "Streptococcus mitis" }
  ],
  correctAnswer: "D",

  rationale: "**D. Streptococcus mitis**\nS. mitis is an alpha-hemolytic viridans streptococcus from oral flora that commonly causes subacute infective endocarditis on damaged valves.",

  incorrectRationales: {
    A: "**A. Staphylococcus aureus**\nIncorrect. Causes acute endocarditis with rapid destruction.",
    B: "**B. Streptococcus pyogenes**\nIncorrect. Beta-hemolytic Group A strep, not subacute IE.",
    C: "**C. Enterococcus faecalis**\nIncorrect. Associated with GI/GU procedures rather than dental origin."
  },

  boardTrap: "Oral origin plus slow onset equals viridans streptococci.",

  memoryHook: "Mitis meets the mitral."
},
{
  id: "micro-014",
  type: "microbiology",
  subject: "Oral Disease Mastery",
  topic: "Viridans Streptococci ▸ Early Colonization and Endocarditis",
  difficulty: "moderate",
  question: "Alpha-hemolytic gram-positive cocci from oral plaque are associated with early colonization and endocarditis risk. Which organism fits this description?",
  choices: [
    { key: "A", text: "Streptococcus sanguinis" },
    { key: "B", text: "Streptococcus mutans" },
    { key: "C", text: "Streptococcus pyogenes" },
    { key: "D", text: "Enterococcus faecalis" }
  ],
  correctAnswer: "A",

  rationale: "**A. Streptococcus sanguinis**\nS. sanguinis is an early plaque colonizer and a viridans streptococcus associated with infective endocarditis following bacteremia.",

  incorrectRationales: {
    B: "**B. Streptococcus mutans**\nIncorrect. Primarily associated with caries initiation.",
    C: "**C. Streptococcus pyogenes**\nIncorrect. Beta-hemolytic throat pathogen.",
    D: "**D. Enterococcus faecalis**\nIncorrect. GI-associated organism."
  },

  boardTrap: "Sanguinis starts plaque. Mutans starts cavities.",

  memoryHook: "Sanguinis starts it."
},
{
  id: "micro-015",
  type: "microbiology",
  subject: "Oral Disease Mastery",
  topic: "Oral Microbiome ▸ Early Infant Colonization",
  difficulty: "moderate",
  question: "Which bacterial species is among the first to colonize the oral cavity before tooth eruption?",
  choices: [
    { key: "A", text: "Streptococcus salivarius" },
    { key: "B", text: "Streptococcus mutans" },
    { key: "C", text: "Streptococcus mitis" },
    { key: "D", text: "Streptococcus sanguinis" }
  ],
  correctAnswer: "A",

  rationale: "**A. Streptococcus salivarius**\nS. salivarius colonizes the tongue and mucosa shortly after birth, before tooth eruption, and helps establish the early oral microbiome.",

  incorrectRationales: {
    B: "**B. Streptococcus mutans**\nIncorrect. Requires hard tooth surfaces for colonization.",
    C: "**C. Streptococcus mitis**\nIncorrect. Appears later with plaque formation.",
    D: "**D. Streptococcus sanguinis**\nIncorrect. Colonizes after tooth eruption."
  },

  boardTrap: "Before teeth, think salivarius.",

  memoryHook: "Saliva comes first. So does S. salivarius."
},
{
  id: "micro-016",
  type: "microbiology",
  subject: "Oral Disease Mastery",
  topic: "Encapsulated Bacteria ▸ Lobar Pneumonia",
  difficulty: "moderate",
  question: "An elderly patient develops lobar pneumonia after influenza. Gram stain shows lancet-shaped gram-positive diplococci with a capsule. Which organism is most likely responsible?",
  choices: [
    { key: "A", text: "Streptococcus pyogenes" },
    { key: "B", text: "Staphylococcus aureus" },
    { key: "C", text: "Streptococcus pneumoniae" },
    { key: "D", text: "Haemophilus influenzae" }
  ],
  correctAnswer: "C",

  rationale: "**C. Streptococcus pneumoniae**\nS. pneumoniae is an encapsulated, alpha-hemolytic gram-positive diplococcus and the most common cause of community-acquired lobar pneumonia.",

  incorrectRationales: {
    A: "**A. Streptococcus pyogenes**\nIncorrect. Beta-hemolytic throat pathogen.",
    B: "**B. Staphylococcus aureus**\nIncorrect. Forms clusters and causes patchy bronchopneumonia.",
    D: "**D. Haemophilus influenzae**\nIncorrect. Gram-negative coccobacillus."
  },

  boardTrap: "Encapsulated lancet diplococci equals pneumococcus.",

  memoryHook: "Capsule equals cover. Pneumococcus hides under sugar."
},
{
  id: "micro-017",
  type: "microbiology",
  subject: "Oral Disease Mastery",
  topic: "Gram-Positive Cocci ▸ Abscess Formation",
  difficulty: "moderate",
  question: "A painful fluctuant lesion produces purulent drainage. Culture reveals gram-positive cocci in irregular clusters that form golden-yellow colonies. Which organism is most likely responsible?",
  choices: [
    { key: "A", text: "Staphylococcus aureus" },
    { key: "B", text: "Streptococcus pyogenes" },
    { key: "C", text: "Streptococcus mutans" },
    { key: "D", text: "Enterococcus faecalis" }
  ],
  correctAnswer: "A",

  rationale: "**A. Staphylococcus aureus**\nS. aureus is a gram-positive cocci in clusters that produces golden pigment and forms localized abscesses through coagulase and leukocidin production.",

  incorrectRationales: {
    B: "**B. Streptococcus pyogenes**\nIncorrect. Typically spreads diffusely as cellulitis rather than forming localized abscesses.",
    C: "**C. Streptococcus mutans**\nIncorrect. Associated with dental caries, not soft tissue abscesses.",
    D: "**D. Enterococcus faecalis**\nIncorrect. Linked to endodontic failures, not acute pus formation."
  },

  boardTrap: "Clusters plus pus equals Staphylococcus aureus.",

  memoryHook: "Staph stacks and seals in pus."
},
{
  id: "micro-018",
  type: "microbiology",
  subject: "Oral Disease Mastery",
  topic: "Dental Caries ▸ Lesion Progression",
  difficulty: "moderate",
  question: "Advanced dentinal caries reveal gram-positive aciduric rods thriving in low pH and dominating deep lesions. Which organism is most associated with progression of caries?",
  choices: [
    { key: "A", text: "Actinomyces viscosus" },
    { key: "B", text: "Streptococcus mutans" },
    { key: "C", text: "Propionibacterium acnes" },
    { key: "D", text: "Lactobacillus species" }
  ],
  correctAnswer: "D",

  rationale: "**D. Lactobacillus species**\nLactobacilli are acidogenic and aciduric gram-positive rods that dominate in advanced carious lesions and promote continued dentin destruction.",

  incorrectRationales: {
    A: "**A. Actinomyces viscosus**\nIncorrect. Associated with root caries.",
    B: "**B. Streptococcus mutans**\nIncorrect. Initiates enamel caries but does not dominate deep lesions.",
    C: "**C. Propionibacterium acnes**\nIncorrect. Associated with skin infections."
  },

  boardTrap: "Mutans start it. Lactobacillus lasts.",

  memoryHook: "Mutans make it. Lactobacillus lasts."
},
{
  id: "micro-019",
  type: "microbiology",
  subject: "Oral Disease Mastery",
  topic: "Filamentous Bacteria ▸ Actinomycosis",
  difficulty: "moderate",
  question: "Chronic mandibular swelling with draining sinus tracts reveals gram-positive branching filamentous rods and sulfur granules. Which organism is most likely responsible?",
  choices: [
    { key: "A", text: "Nocardia asteroides" },
    { key: "B", text: "Mycobacterium tuberculosis" },
    { key: "C", text: "Actinomyces israelii" },
    { key: "D", text: "Fusobacterium nucleatum" }
  ],
  correctAnswer: "C",

  rationale: "**C. Actinomyces israelii**\nActinomyces israelii is an anaerobic filamentous gram-positive bacterium that causes cervicofacial actinomycosis, characterized by firm swelling and sulfur granules.",

  incorrectRationales: {
    A: "**A. Nocardia asteroides**\nIncorrect. Aerobic and weakly acid-fast, associated with pulmonary infections.",
    B: "**B. Mycobacterium tuberculosis**\nIncorrect. Acid-fast bacillus causing granulomatous lung disease.",
    D: "**D. Fusobacterium nucleatum**\nIncorrect. Gram-negative rod involved in necrotizing infections."
  },

  boardTrap: "Anaerobic filament equals Actinomyces. Aerobic filament equals Nocardia.",

  memoryHook: "Actinomyces after injury equals lumpy jaw."
},
{
  id: "micro-020",
  type: "microbiology",
  subject: "Oral Disease Mastery",
  topic: "Hormone-Associated Gingivitis ▸ Pregnancy",
  difficulty: "moderate",
  question: "Pregnancy-associated gingivitis with gram-negative anaerobic rods and no attachment loss is most associated with which organism?",
  choices: [
    { key: "A", text: "Fusobacterium nucleatum" },
    { key: "B", text: "Porphyromonas gingivalis" },
    { key: "C", text: "Aggregatibacter actinomycetemcomitans" },
    { key: "D", text: "Prevotella intermedia" }
  ],
  correctAnswer: "D",

  rationale: "**D. Prevotella intermedia**\nPrevotella intermedia proliferates in response to elevated estrogen and progesterone levels and is strongly associated with pregnancy gingivitis.",

  incorrectRationales: {
    A: "**A. Fusobacterium nucleatum**\nIncorrect. Acts as a bridging organism in biofilm.",
    B: "**B. Porphyromonas gingivalis**\nIncorrect. Associated with chronic periodontitis and attachment loss.",
    C: "**C. Aggregatibacter actinomycetemcomitans**\nIncorrect. Linked to aggressive periodontitis."
  },

  boardTrap: "Pregnancy equals Prevotella.",

  memoryHook: "Hormones rise. Prevotella rises."
},
{
  id: "micro-021",
  type: "microbiology",
  subject: "Oral Disease Mastery",
  topic: "Hormone-Responsive Bacteria ▸ Motile Curved Rods",
  difficulty: "moderate",
  question: "A pregnant patient presents with gingival inflammation and motile curved gram-negative rods responsive to steroid hormones. Which organism is most likely involved?",
  choices: [
    { key: "A", text: "Campylobacter rectus" },
    { key: "B", text: "Prevotella intermedia" },
    { key: "C", text: "Porphyromonas gingivalis" },
    { key: "D", text: "Fusobacterium nucleatum" }
  ],
  correctAnswer: "A",

  rationale: "**A. Campylobacter rectus**\nCampylobacter rectus is a motile, curved gram-negative rod that responds to hormonal changes and contributes to pregnancy-associated gingival inflammation.",

  incorrectRationales: {
    B: "**B. Prevotella intermedia**\nIncorrect. Hormone-associated but non-motile rod.",
    C: "**C. Porphyromonas gingivalis**\nIncorrect. Associated with chronic tissue destruction.",
    D: "**D. Fusobacterium nucleatum**\nIncorrect. Biofilm bridge organism."
  },

  boardTrap: "Motile curved rod equals Campylobacter.",

  memoryHook: "C for curved and carrying a baby."
},
{
  id: "micro-022",
  type: "microbiology",
  subject: "Oral Disease Mastery",
  topic: "Bacterial Growth Phases ▸ Antibiotic Susceptibility",
  difficulty: "moderate",
  question: "During which bacterial growth phase are antibiotics most effective due to maximal cell division and metabolic activity?",
  choices: [
    { key: "A", text: "Lag phase" },
    { key: "B", text: "Stationary phase" },
    { key: "C", text: "Death phase" },
    { key: "D", text: "Logarithmic phase" }
  ],
  correctAnswer: "D",

  rationale: "**D. Logarithmic phase**\nDuring the exponential phase, bacteria are actively dividing and synthesizing proteins and cell wall components, making them most susceptible to antibiotics.",

  incorrectRationales: {
    A: "**A. Lag phase**\nIncorrect. Bacteria are adjusting but not dividing rapidly.",
    B: "**B. Stationary phase**\nIncorrect. Growth equals death; metabolism slows.",
    C: "**C. Death phase**\nIncorrect. Most cells are inactive or dying."
  },

  boardTrap: "Lag learns. Log multiplies. Stationary survives. Death declines.",

  memoryHook: "Log equals lethal."
},
{
  id: "micro-023",
  type: "microbiology",
  subject: "Oral Disease Mastery",
  topic: "Oral Fungal Infections ▸ Candidiasis",
  difficulty: "moderate",
  question: "White plaques that wipe away leaving erythematous mucosa following antibiotic therapy are most likely caused by which organism?",
  choices: [
    { key: "A", text: "Actinomyces israelii" },
    { key: "B", text: "Streptococcus mutans" },
    { key: "C", text: "Candida albicans" },
    { key: "D", text: "Treponema denticola" }
  ],
  correctAnswer: "C",

  rationale: "**C. Candida albicans**\nCandida albicans is a yeast that causes pseudomembranous candidiasis, presenting as wipeable white plaques with erythematous base. Treated with nystatin or azole antifungals.",

  incorrectRationales: {
    A: "**A. Actinomyces israelii**\nIncorrect. Causes actinomycosis with sulfur granules.",
    B: "**B. Streptococcus mutans**\nIncorrect. Cariogenic bacterium.",
    D: "**D. Treponema denticola**\nIncorrect. Spirochete associated with NUG."
  },

  boardTrap: "Wipeable white equals Candida.",

  memoryHook: "Creamy comes clean."
},
{
  id: "micro-024",
  type: "microbiology",
  subject: "Oral Disease Mastery",
  topic: "Viral Structure ▸ Size and Microscopy",
  difficulty: "moderate",
  question: "Which of the following best approximates the size of a single virion?",
  choices: [
    { key: "A", text: "1–5 micrometers" },
    { key: "B", text: "500–800 nanometers" },
    { key: "C", text: "20–300 nanometers (0.02–0.3 micrometers)" },
    { key: "D", text: "0.001 nanometers" }
  ],
  correctAnswer: "C",

  rationale: "**C. 20–300 nanometers (0.02–0.3 micrometers)**\nMost virions range from 20–300 nm in size, requiring electron microscopy for visualization. This is significantly smaller than bacteria (1–5 micrometers).",

  incorrectRationales: {
    A: "**A. 1–5 micrometers**\nIncorrect. This is the size range of bacteria.",
    B: "**B. 500–800 nanometers**\nIncorrect. Larger than typical virion size.",
    D: "**D. 0.001 nanometers**\nIncorrect. Smaller than atomic scale and biologically impossible."
  },

  boardTrap: "1 micrometer equals 1,000 nanometers. Viruses are nano, not micro.",

  memoryHook: "Viruses are nano, not micro."
},
{
  id: "micro-025",
  type: "microbiology",
  subject: "Oral Disease Mastery",
  topic: "RNA Viruses ▸ All Except",
  difficulty: "moderate",
  question: "All of the following are RNA viruses EXCEPT:",
  choices: [
    { key: "A", text: "Hepatitis A virus" },
    { key: "B", text: "Influenza virus" },
    { key: "C", text: "Measles and mumps viruses" },
    { key: "D", text: "Hepatitis B virus" },
    { key: "E", text: "Rabies virus" },
    { key: "F", text: "Human immunodeficiency virus (HIV)" },
    { key: "G", text: "SARS-CoV-2" },
    { key: "H", text: "Hepatitis C and E viruses" }
  ],
  correctAnswer: "D",

  rationale: "**D. Hepatitis B virus**\nHepatitis B virus is a partially double-stranded DNA virus. Although it uses reverse transcription, its genome is DNA, making it the exception.",

  incorrectRationales: {
    A: "**A. Hepatitis A virus**\nIncorrect. RNA virus.",
    B: "**B. Influenza virus**\nIncorrect. RNA virus.",
    C: "**C. Measles and mumps viruses**\nIncorrect. RNA paramyxoviruses.",
    E: "**E. Rabies virus**\nIncorrect. RNA rhabdovirus.",
    F: "**F. HIV**\nIncorrect. RNA retrovirus.",
    G: "**G. SARS-CoV-2**\nIncorrect. RNA coronavirus.",
    H: "**H. Hepatitis C and E viruses**\nIncorrect. Both are RNA viruses."
  },

  boardTrap: "All hepatitis viruses are RNA except B.",

  memoryHook: "Hep B breaks the rule."
},
{
  id: "micro-026",
  type: "microbiology",
  subject: "Oral Disease Mastery",
  topic: "Paramyxoviruses ▸ Measles",
  difficulty: "moderate",
  question: "A patient presents with Koplik’s spots followed by a spreading maculopapular rash. Which virus is most consistent?",
  choices: [
    { key: "A", text: "Measles (Rubeola) virus" },
    { key: "B", text: "Rubella virus" },
    { key: "C", text: "Varicella-zoster virus" },
    { key: "D", text: "Coxsackie virus" }
  ],
  correctAnswer: "A",

  rationale: "**A. Measles (Rubeola) virus**\nMeasles causes Koplik’s spots on the buccal mucosa prior to the onset of a descending maculopapular rash.",

  incorrectRationales: {
    B: "**B. Rubella virus**\nIncorrect. Does not produce Koplik’s spots.",
    C: "**C. Varicella-zoster virus**\nIncorrect. Produces vesicular lesions.",
    D: "**D. Coxsackie virus**\nIncorrect. Causes hand-foot-mouth disease."
  },

  boardTrap: "Koplik’s spots are unique to measles.",

  memoryHook: "Koplik’s equals measles."
},
{
  id: "micro-027",
  type: "microbiology",
  subject: "Oral Disease Mastery",
  topic: "DNA Viruses ▸ Human Papillomavirus",
  difficulty: "moderate",
  question: "Painless cauliflower-like oral lesions with koilocytosis are most likely caused by which virus?",
  choices: [
    { key: "A", text: "Herpes simplex virus type 1" },
    { key: "B", text: "Epstein-Barr virus" },
    { key: "C", text: "Human papillomavirus" },
    { key: "D", text: "Cytomegalovirus" }
  ],
  correctAnswer: "C",

  rationale: "**C. Human papillomavirus**\nHPV is a non-enveloped double-stranded DNA virus causing painless papillary lesions and epithelial proliferation.",

  incorrectRationales: {
    A: "**A. Herpes simplex virus type 1**\nIncorrect. Causes painful vesicular lesions.",
    B: "**B. Epstein-Barr virus**\nIncorrect. Associated with mononucleosis and hairy leukoplakia.",
    D: "**D. Cytomegalovirus**\nIncorrect. Causes ulcerative lesions in immunocompromised patients."
  },

  boardTrap: "Papillary painless growth equals HPV, not HSV.",

  memoryHook: "HPV equals Happy Painless Verrucae."
},
{
  id: "micro-028",
  type: "microbiology",
  subject: "Oral Disease Mastery",
  topic: "Herpesviridae ▸ HSV-1",
  difficulty: "moderate",
  question: "Recurrent vesicular lesions on the lip preceded by tingling are most consistent with which virus?",
  choices: [
    { key: "A", text: "HSV-2" },
    { key: "B", text: "HSV-1" },
    { key: "C", text: "Varicella-zoster virus" },
    { key: "D", text: "Epstein-Barr virus" }
  ],
  correctAnswer: "B",

  rationale: "**B. HSV-1**\nHSV-1 causes recurrent herpes labialis and remains latent in the trigeminal ganglion.",

  incorrectRationales: {
    A: "**A. HSV-2**\nIncorrect. Primarily genital lesions.",
    C: "**C. Varicella-zoster virus**\nIncorrect. Dermatomal shingles.",
    D: "**D. Epstein-Barr virus**\nIncorrect. Causes infectious mononucleosis."
  },

  boardTrap: "HSV-1 above the waist. HSV-2 below.",

  memoryHook: "1 equals lips."
},
{
  id: "micro-029",
  type: "microbiology",
  subject: "Oral Disease Mastery",
  topic: "Herpesviridae ▸ Cytomegalovirus",
  difficulty: "moderate",
  question: "Chronic oral ulcers in an HIV patient with owl’s eye inclusions are most consistent with which infection?",
  choices: [
    { key: "A", text: "Epstein-Barr virus" },
    { key: "B", text: "Varicella-zoster virus" },
    { key: "C", text: "Cytomegalovirus" },
    { key: "D", text: "HHV-8" }
  ],
  correctAnswer: "C",

  rationale: "**C. Cytomegalovirus**\nCMV causes opportunistic infection in immunocompromised patients and produces characteristic owl’s eye intranuclear inclusions.",

  incorrectRationales: {
    A: "**A. Epstein-Barr virus**\nIncorrect. Causes oral hairy leukoplakia.",
    B: "**B. Varicella-zoster virus**\nIncorrect. Produces dermatomal vesicles.",
    D: "**D. HHV-8**\nIncorrect. Associated with Kaposi’s sarcoma."
  },

  boardTrap: "Owl’s eye equals CMV.",

  memoryHook: "CMV equals Cells with Magnified Vacant nuclei."
},
{
  id: "micro-030",
  type: "microbiology",
  subject: "Oral Disease Mastery",
  topic: "Herpesviridae ▸ Epstein-Barr Virus",
  difficulty: "moderate",
  question: "A non-removable white corrugated lesion on the lateral tongue in an HIV patient is most consistent with which infection?",
  choices: [
    { key: "A", text: "Epstein-Barr virus" },
    { key: "B", text: "Human papillomavirus" },
    { key: "C", text: "Cytomegalovirus" },
    { key: "D", text: "Candida albicans" }
  ],
  correctAnswer: "A",

  rationale: "**A. Epstein-Barr virus**\nEBV causes oral hairy leukoplakia, presenting as non-removable corrugated white plaques on the lateral tongue in immunocompromised patients.",

  incorrectRationales: {
    B: "**B. Human papillomavirus**\nIncorrect. Produces papillary wart-like lesions.",
    C: "**C. Cytomegalovirus**\nIncorrect. Causes ulcerations with inclusion bodies.",
    D: "**D. Candida albicans**\nIncorrect. White plaques are removable."
  },

  boardTrap: "Removable equals Candida. Non-removable equals EBV.",

  memoryHook: "EBV lives on the edges."
},
{
  id: "micro-031",
  type: "microbiology",
  subject: "Oral Disease Mastery",
  topic: "Herpesviridae ▸ HHV-8 (Kaposi’s Sarcoma)",
  difficulty: "moderate",
  question: "Multiple painless reddish-purple oral macules and nodules in an HIV patient are most consistent with which virus?",
  choices: [
    { key: "A", text: "Epstein–Barr virus (EBV)" },
    { key: "B", text: "Cytomegalovirus (CMV)" },
    { key: "C", text: "Human papillomavirus (HPV)" },
    { key: "D", text: "Human herpesvirus type 8 (HHV-8)" }
  ],
  correctAnswer: "D",

  rationale: "**D. Human herpesvirus type 8 (HHV-8)**\nHHV-8, also called Kaposi’s sarcoma–associated herpesvirus, causes vascular endothelial malignancy in immunocompromised patients. Lesions appear red-purple and may be flat or nodular.",

  incorrectRationales: {
    A: "**A. Epstein–Barr virus**\nIncorrect. Causes hairy leukoplakia and certain lymphomas, not vascular tumors.",
    B: "**B. Cytomegalovirus**\nIncorrect. Causes ulcerative lesions, not vascular proliferation.",
    C: "**C. Human papillomavirus**\nIncorrect. Causes papillary verrucous lesions."
  },

  boardTrap: "Red-purple vascular lesions in HIV patients point to HHV-8, not EBV.",

  memoryHook: "8 = Endothelial."
},
{
  id: "micro-032",
  type: "microbiology",
  subject: "Oral Disease Mastery",
  topic: "Picornaviridae ▸ Coxsackievirus",
  difficulty: "moderate",
  question: "Vesicles on the soft palate with lesions on hands and feet in a child are most consistent with which virus?",
  choices: [
    { key: "A", text: "Varicella-zoster virus" },
    { key: "B", text: "Epstein–Barr virus" },
    { key: "C", text: "Coxsackievirus" },
    { key: "D", text: "Human papillomavirus" }
  ],
  correctAnswer: "C",

  rationale: "**C. Coxsackievirus**\nCoxsackievirus causes herpangina and hand-foot-and-mouth disease, characterized by oral vesicles and extremity lesions.",

  incorrectRationales: {
    A: "**A. Varicella-zoster virus**\nIncorrect. Causes generalized vesicular rash.",
    B: "**B. Epstein–Barr virus**\nIncorrect. Causes mononucleosis, not vesicles.",
    D: "**D. Human papillomavirus**\nIncorrect. Produces papillary lesions."
  },

  boardTrap: "Hands + feet + palate equals Coxsackie, not chickenpox.",

  memoryHook: "Coxsackie = Kids with Spots."
},
{
  id: "micro-033",
  type: "microbiology",
  subject: "Oral Disease Mastery",
  topic: "Hepatitis ▸ Occupational Risk",
  difficulty: "moderate",
  question: "Which hepatitis strain poses the least occupational risk to dental professionals?",
  choices: [
    { key: "A", text: "Hepatitis A virus" },
    { key: "B", text: "Hepatitis B virus" },
    { key: "C", text: "Hepatitis C virus" },
    { key: "D", text: "Hepatitis D virus" }
  ],
  correctAnswer: "A",

  rationale: "**A. Hepatitis A virus**\nHAV is transmitted via the fecal–oral route and is not bloodborne, making occupational transmission unlikely in dental settings.",

  incorrectRationales: {
    B: "**B. Hepatitis B virus**\nIncorrect. Bloodborne and high occupational risk.",
    C: "**C. Hepatitis C virus**\nIncorrect. Bloodborne transmission.",
    D: "**D. Hepatitis D virus**\nIncorrect. Requires HBV coinfection."
  },

  boardTrap: "HAV spreads by mouth, not needle.",

  memoryHook: "A = Away from blood."
},
{
  id: "micro-034",
  type: "microbiology",
  subject: "Oral Disease Mastery",
  topic: "Hepatitis B ▸ Antigens",
  difficulty: "hard",
  question: "Which antigen is found on the surface of the complete infectious Hepatitis B virion?",
  choices: [
    { key: "A", text: "HBeAg; capsid" },
    { key: "B", text: "HBsAg; Dane particle" },
    { key: "C", text: "HBcAg; nucleocapsid" },
    { key: "D", text: "HAV antigen; virion" }
  ],
  correctAnswer: "B",

  rationale: "**B. HBsAg; Dane particle**\nHBsAg is the surface antigen on the complete infectious HBV virion known as the Dane particle.",

  incorrectRationales: {
    A: "**A. HBeAg; capsid**\nIncorrect. HBeAg indicates replication, not surface structure.",
    C: "**C. HBcAg; nucleocapsid**\nIncorrect. Core antigen not detectable in serum.",
    D: "**D. HAV antigen; virion**\nIncorrect. HAV lacks these antigenic structures."
  },

  boardTrap: "Surface equals S in HBsAg.",

  memoryHook: "S = Surface."
},
{
  id: "micro-035",
  type: "microbiology",
  subject: "Oral Disease Mastery",
  topic: "Hepatitis B ▸ Post-Exposure",
  difficulty: "moderate",
  question: "What is the immediate post-exposure management for an unvaccinated clinician exposed to Hepatitis B?",
  choices: [
    { key: "A", text: "Hepatitis A vaccine" },
    { key: "B", text: "Antibiotic prophylaxis" },
    { key: "C", text: "Tetanus booster" },
    { key: "D", text: "HBIG and initiation of Hepatitis B vaccine series" }
  ],
  correctAnswer: "D",

  rationale: "**D. HBIG and initiation of Hepatitis B vaccine series**\nHBIG provides immediate passive immunity, while the vaccine provides long-term active immunity.",

  incorrectRationales: {
    A: "**A. Hepatitis A vaccine**\nIncorrect. Unrelated virus.",
    B: "**B. Antibiotic prophylaxis**\nIncorrect. Antibiotics do not treat viruses.",
    C: "**C. Tetanus booster**\nIncorrect. Protects against Clostridium tetani."
  },

  boardTrap: "HBIG is passive. Vaccine is active.",

  memoryHook: "Globulin = Grab immediate protection."
},
{
  id: "micro-036",
  type: "microbiology",
  subject: "Oral Disease Mastery",
  topic: "Inflammation ▸ Cardinal Signs",
  difficulty: "moderate",
  question: "Which list represents the five cardinal signs of inflammation?",
  choices: [
    { key: "A", text: "Hyperemia, fibrosis, necrosis, vasoconstriction, repair" },
    { key: "B", text: "Vasoconstriction, pallor, atrophy, repair, loss of sensation" },
    { key: "C", text: "Rubor, calor, tumor, dolor, functio laesa" },
    { key: "D", text: "Infection, fever, proliferation, regeneration, remodeling" }
  ],
  correctAnswer: "C",

  rationale: "**C. Rubor, calor, tumor, dolor, functio laesa**\nThese represent redness, heat, swelling, pain, and loss of function.",

  incorrectRationales: {
    A: "Incorrect. Mixes healing and chronic responses.",
    B: "Incorrect. Opposite of inflammation.",
    D: "Incorrect. Describes systemic infection or repair."
  },

  boardTrap: "Clinical signs, not cellular events.",

  memoryHook: "Really Cool Things Don’t Function."
},
{
  id: "micro-037",
  type: "microbiology",
  subject: "Oral Disease Mastery",
  topic: "Acute Inflammation ▸ PMNs",
  difficulty: "moderate",
  question: "Which cell type is the primary first responder in acute periodontal inflammation?",
  choices: [
    { key: "A", text: "Polymorphonuclear neutrophils (PMNs)" },
    { key: "B", text: "Macrophages" },
    { key: "C", text: "Lymphocytes" },
    { key: "D", text: "Plasma cells" }
  ],
  correctAnswer: "A",

  rationale: "**A. PMNs**\nPMNs are the first cells to migrate to infection sites and perform phagocytosis during acute inflammation.",

  incorrectRationales: {
    B: "Incorrect. Macrophages dominate chronic inflammation.",
    C: "Incorrect. Lymphocytes mediate adaptive immunity.",
    D: "Incorrect. Plasma cells produce antibodies."
  },

  boardTrap: "PMNs = acute. Macrophages = chronic.",

  memoryHook: "Primary Mouth Ninjas."
},
{
  id: "micro-038",
  type: "microbiology",
  subject: "Oral Disease Mastery",
  topic: "Acute Inflammation ▸ Neutrophils",
  difficulty: "moderate",
  question: "Which leukocyte has a multilobed nucleus and is the first responder in tissue injury?",
  choices: [
    { key: "A", text: "Monocyte" },
    { key: "B", text: "Neutrophil" },
    { key: "C", text: "Lymphocyte" },
    { key: "D", text: "Eosinophil" }
  ],
  correctAnswer: "B",

  rationale: "**B. Neutrophil**\nNeutrophils (PMNs) are multilobed, short-lived phagocytes that initiate acute inflammatory response.",

  incorrectRationales: {
    A: "Incorrect. Monocytes differentiate into macrophages later.",
    C: "Incorrect. Lymphocytes are adaptive immune cells.",
    D: "Incorrect. Eosinophils target parasites and allergies."
  },

  boardTrap: "Multilobed equals neutrophil.",

  memoryHook: "Numerous and Now."
},
{
  id: "micro-039",
  type: "microbiology",
  subject: "Oral Disease Mastery",
  topic: "Adaptive Immunity ▸ T-Lymphocyte Subsets",
  difficulty: "hard",
  question: "A decreased CD4+ count with weakened antibody response despite normal B-cell numbers indicates dysfunction of which T-cell subsets and their primary coordinating role?",
  choices: [
    { key: "A", text: "Helper, cytotoxic, suppressor (regulatory), and memory T-cells — coordinating cellular and humoral immunity" },
    { key: "B", text: "Plasma, mast, basophil, and memory cells — releasing histamine and promoting inflammation" },
    { key: "C", text: "Macrophage, dendritic, plasma, and eosinophil cells — serving as phagocytes and antigen-presenting cells" },
    { key: "D", text: "Natural killer, eosinophil, basophil, and B-cells — mediating nonspecific immunity and antibody release" }
  ],
  correctAnswer: "A",

  rationale: "**A. Helper, cytotoxic, suppressor (regulatory), and memory T-cells**\nCD4+ helper T-cells coordinate both humoral and cellular immunity. Loss of helper function impairs B-cell activation and antibody production despite normal B-cell counts.",

  incorrectRationales: {
    B: "Incorrect. These are effector or inflammatory cells, not T-cell subsets.",
    C: "Incorrect. These are antigen-presenting or phagocytic cells.",
    D: "Incorrect. Includes innate immune cells and B-cells, not T-cell categories."
  },

  boardTrap: "CD4 deficiency affects B-cell activation indirectly.",

  memoryHook: "Help, Kill, Calm, Remember — the T-team."
},
{
  id: "micro-040",
  type: "microbiology",
  subject: "Oral Disease Mastery",
  topic: "Adaptive Immunity ▸ T-Cell Development",
  difficulty: "moderate",
  question: "Where are T-lymphocytes produced and where do they mature?",
  choices: [
    { key: "A", text: "Produced and matured in the spleen" },
    { key: "B", text: "Produced and matured in the lymph nodes" },
    { key: "C", text: "Produced in the bone marrow and matured in the thymus" },
    { key: "D", text: "Produced in the thymus and matured in the lymphatic ducts" }
  ],
  correctAnswer: "C",

  rationale: "**C. Produced in the bone marrow and matured in the thymus**\nAll lymphocytes originate in bone marrow. T-cells migrate to the thymus for maturation and selection.",

  incorrectRationales: {
    A: "Incorrect. Spleen is a secondary lymphoid organ.",
    B: "Incorrect. Lymph nodes are activation sites.",
    D: "Incorrect. Lymphatic ducts transport lymph; they do not produce cells."
  },

  boardTrap: "Production ≠ maturation.",

  memoryHook: "T-cells Take a Trip to the Thymus."
},
{
  id: "micro-041",
  type: "microbiology",
  subject: "Oral Disease Mastery",
  topic: "Adaptive Immunity ▸ B-Cell Maturation",
  difficulty: "moderate",
  question: "Where do B-lymphocytes mature before entering circulation?",
  choices: [
    { key: "A", text: "Thymus" },
    { key: "B", text: "Spleen" },
    { key: "C", text: "Lymph nodes" },
    { key: "D", text: "Bone marrow" }
  ],
  correctAnswer: "D",

  rationale: "**D. Bone marrow**\nB-cells are both produced and matured in bone marrow before migrating to secondary lymphoid organs.",

  incorrectRationales: {
    A: "Incorrect. Thymus is for T-cells.",
    B: "Incorrect. Spleen is activation site.",
    C: "Incorrect. Lymph nodes are antigen encounter sites."
  },

  boardTrap: "B for Bone. T for Thymus.",

  memoryHook: "B-cells Build antibodies in the Bone."
},
{
  id: "micro-042",
  type: "microbiology",
  subject: "Oral Disease Mastery",
  topic: "Immunoglobulins ▸ IgG",
  difficulty: "hard",
  question: "Which immunoglobulin crosses the placenta and activates complement during cytotoxic reactions?",
  choices: [
    { key: "A", text: "IgG" },
    { key: "B", text: "IgA" },
    { key: "C", text: "IgM" },
    { key: "D", text: "IgE" }
  ],
  correctAnswer: "A",

  rationale: "**A. IgG**\nIgG crosses the placenta and activates complement, playing a key role in Type II hypersensitivity and long-term immunity.",

  incorrectRationales: {
    B: "Incorrect. IgA is mucosal and secretory.",
    C: "Incorrect. IgM activates complement but does not cross placenta.",
    D: "Incorrect. IgE mediates allergic reactions."
  },

  boardTrap: "IgM first. IgG lasts.",

  memoryHook: "IgG = Guardian of fetus and complement."
},
{
  id: "micro-043",
  type: "microbiology",
  subject: "Oral Disease Mastery",
  topic: "Hypersensitivity ▸ Type I",
  difficulty: "hard",
  question: "Immediate urticaria, hypotension, and bronchospasm following anesthetic administration is which hypersensitivity type?",
  choices: [
    { key: "A", text: "Type I – IgE-mediated mast cell degranulation" },
    { key: "B", text: "Type II – Cytotoxic antibody-mediated reaction" },
    { key: "C", text: "Type III – Immune complex deposition" },
    { key: "D", text: "Type IV – T-cell–mediated delayed reaction" }
  ],
  correctAnswer: "A",

  rationale: "**A. Type I hypersensitivity**\nIgE cross-linking triggers mast cell degranulation and histamine release, producing immediate allergic reactions.",

  incorrectRationales: {
    B: "Incorrect. Type II targets cell-surface antigens.",
    C: "Incorrect. Type III involves immune complexes.",
    D: "Incorrect. Type IV is delayed and T-cell mediated."
  },

  boardTrap: "Immediate + histamine = IgE.",

  memoryHook: "Type I = Instant IgE."
},
{
  id: "micro-044",
  type: "microbiology",
  subject: "Oral Disease Mastery",
  topic: "Hypersensitivity ▸ Type II",
  difficulty: "hard",
  question: "Which antibodies are responsible for complement-mediated destruction in transfusion reactions?",
  choices: [
    { key: "A", text: "IgA and IgE" },
    { key: "B", text: "IgD and IgA" },
    { key: "C", text: "IgG and IgM" },
    { key: "D", text: "IgE and IgG" }
  ],
  correctAnswer: "C",

  rationale: "**C. IgG and IgM**\nThese antibodies mediate Type II cytotoxic hypersensitivity by binding cell-surface antigens and activating complement.",

  incorrectRationales: {
    A: "Incorrect. IgA is mucosal; IgE is allergic.",
    B: "Incorrect. IgD functions as B-cell receptor.",
    D: "Incorrect. IgE does not mediate cytotoxic reactions."
  },

  boardTrap: "Type II = G and M against cells.",

  memoryHook: "G + M = Goodbye, My cells."
},
{
  id: "micro-045",
  type: "microbiology",
  subject: "Oral Disease Mastery",
  topic: "Hypersensitivity ▸ Type IV",
  difficulty: "moderate",
  question: "Localized vesicular contact dermatitis appearing 48 hours after latex exposure represents which immune mechanism?",
  choices: [
    { key: "A", text: "IgE-mediated immediate hypersensitivity" },
    { key: "B", text: "T-cell–mediated delayed hypersensitivity" },
    { key: "C", text: "Immune complex–mediated reaction" },
    { key: "D", text: "IgG- and IgM-mediated cytotoxic reaction" }
  ],
  correctAnswer: "B",

  rationale: "**B. T-cell–mediated delayed hypersensitivity**\nType IV reactions are antibody-independent and occur 24–72 hours after exposure due to sensitized T-cells.",

  incorrectRationales: {
    A: "Incorrect. Type I is immediate.",
    C: "Incorrect. Type III involves immune complexes.",
    D: "Incorrect. Type II involves cytotoxic antibodies."
  },

  boardTrap: "Only Type IV has no antibodies.",

  memoryHook: "Type IV = T-cell Time Delay."
},
{
  id: "micro-046",
  type: "microbiology",
  subject: "Oral Disease Mastery",
  topic: "Autoimmune Disorders ▸ Connective Tissue Disease",
  difficulty: "hard",
  question: "Generalized widening of the periodontal ligament space with microstomia and progressive skin tightening is most consistent with which systemic condition?",
  choices: [
    { key: "A", text: "Systemic lupus erythematosus" },
    { key: "B", text: "Rheumatoid arthritis" },
    { key: "C", text: "Sjögren’s syndrome" },
    { key: "D", text: "Scleroderma" }
  ],
  correctAnswer: "D",

  rationale: "**D. Scleroderma**\nScleroderma (systemic sclerosis) causes excessive collagen deposition leading to fibrosis of connective tissues. Oral findings include microstomia, tight facial skin, limited mandibular opening, and generalized widening of the periodontal ligament space on radiographs due to increased collagen and fibrotic changes within the PDL.",

  incorrectRationales: {
    A: "Incorrect. SLE may present with oral ulcers or lichenoid lesions but does not cause generalized PDL widening.",
    B: "Incorrect. Rheumatoid arthritis affects joints including the TMJ but does not produce radiographic PDL widening.",
    C: "Incorrect. Sjögren’s syndrome causes xerostomia from salivary gland destruction, not PDL changes."
  },

  boardTrap: "Generalized PDL widening is systemic, not occlusal trauma.",

  memoryHook: "Scleroderma stiffens skin and stretches the PDL."
},
{
  id: "H&N-001",
  type: "head-and-neck",
  subject: "Clinical Execution & Materials",
  topic: "Cranial Nerves & Tongue Function",
  difficulty: "hard",
  question: "A 56 year old patient presents for a comprehensive oral examination. During the extraoral and intraoral evaluation, the clinician asks the patient to perform a series of functional movements. When instructed to protrude the tongue straight outward, the patient is unable to do so and the tongue deviates noticeably to one side. No deficits are noted in facial expression, mastication, or sensation of the oral mucosa. Which nerve and muscle are primarily responsible for the action required to protrude the tongue?",
  choices: [
    { key: "A", text: "Lingual nerve and styloglossus muscle" },
    { key: "B", text: "Hypoglossal nerve and genioglossus muscle" },
    { key: "C", text: "Glossopharyngeal nerve and palatoglossus muscle" },
    { key: "D", text: "Facial nerve and hyoglossus muscle" }
  ],
  correctAnswer: "B",

  rationale: "**B. Hypoglossal nerve and genioglossus muscle**\nTongue protrusion is produced primarily by the genioglossus muscle. This muscle originates from the genial tubercles of the mandible and functions to draw the tongue forward and downward. The genioglossus muscle is innervated by the hypoglossal nerve, cranial nerve XII, which supplies all intrinsic and most extrinsic tongue muscles. Damage to this nerve results in impaired protrusion and deviation of the tongue toward the affected side.",

  incorrectRationales: {
    A: "**A. Lingual nerve and styloglossus muscle**\nIncorrect — The lingual nerve provides general sensory innervation to the anterior two thirds of the tongue but does not control motor function. The styloglossus muscle retracts and elevates the tongue rather than protruding it.",
    C: "**C. Glossopharyngeal nerve and palatoglossus muscle**\nIncorrect — The glossopharyngeal nerve primarily provides sensory innervation to the posterior one third of the tongue and contributes to swallowing. The palatoglossus muscle elevates the posterior tongue and depresses the soft palate, not tongue protrusion.",
    D: "**D. Facial nerve and hyoglossus muscle**\nIncorrect — The facial nerve controls muscles of facial expression and does not innervate tongue musculature. The hyoglossus muscle depresses the tongue but does not produce protrusion."
  },

  boardTrap: "Separate sensory nerves from motor control. Protrusion is motor and points to CN XII with genioglossus.",
  memoryHook: "Genioglossus gets the tongue going forward. Hypoglossal handles tongue movement."
},
{
  id: "H&N-002",
  type: "head-and-neck",
  subject: "Clinical Execution & Materials",
  topic: "Neck Anatomy & Spatial Relationships",
  difficulty: "medium",
  question: "A patient is scheduled for a routine dental appointment and reports a recent history of shortness of breath when lying supine. During the medical history review, the clinician considers the anatomic structures of the neck that could be affected by positioning and airway patency. The trachea is anatomically located nearest to which structure?",
  choices: [
    { key: "A", text: "Esophagus" },
    { key: "B", text: "Thyroid cartilage" },
    { key: "C", text: "Sternocleidomastoid muscle" },
    { key: "D", text: "Hyoid bone" }
  ],
  correctAnswer: "A",

  rationale: "**A. Esophagus**\nThe trachea lies anterior to the esophagus in the neck. This close relationship is clinically significant in airway management and swallowing. Darby’s Comprehensive Review of Dental Hygiene emphasizes this anterior posterior arrangement as a key anatomic concept.",

  incorrectRationales: {
    B: "**B. Thyroid cartilage**\nIncorrect — The thyroid cartilage is superior to the trachea and forms part of the larynx, not the structure nearest to it posteriorly.",
    C: "**C. Sternocleidomastoid muscle**\nIncorrect — This muscle lies laterally in the neck and is not directly adjacent to the trachea.",
    D: "**D. Hyoid bone**\nIncorrect — The hyoid bone is positioned superior to the trachea and supports the tongue and larynx."
  },

  boardTrap: "Do not choose functional airway structures. The board tests spatial relationships. The trachea lies anterior to the esophagus.",
  memoryHook: "Trachea in front, esophagus behind."
},
{
  id: "H&N-003",
  type: "head-and-neck",
  subject: "Clinical Execution & Materials",
  topic: "Autonomic Control & Cranial Nerves",
  difficulty: "hard",
  question: "A patient with a complex medical history reports episodes of lightheadedness and brief syncope. Medical records note exaggerated parasympathetic influence on cardiac rhythm without structural heart abnormalities. The clinician considers the neural control of intrinsic cardiac pacemaker activity. Which nerve primarily influences the sinoatrial node of the heart?",
  choices: [
    { key: "A", text: "Phrenic nerve" },
    { key: "B", text: "Sympathetic cardiac nerves" },
    { key: "C", text: "Vagus nerve" },
    { key: "D", text: "Glossopharyngeal nerve" }
  ],
  correctAnswer: "C",

  rationale: "**C. Vagus nerve**\nThe vagus nerve provides parasympathetic innervation to the heart and directly influences the sinoatrial node. Increased vagal stimulation decreases heart rate by slowing pacemaker activity at the SA node.",

  incorrectRationales: {
    A: "**A. Phrenic nerve**\nIncorrect — The phrenic nerve innervates the diaphragm and has no role in cardiac pacemaker control.",
    B: "**B. Sympathetic cardiac nerves**\nIncorrect — Sympathetic fibers increase heart rate but do not provide primary parasympathetic control of the SA node.",
    D: "**D. Glossopharyngeal nerve**\nIncorrect — This nerve is involved in sensory innervation of the pharynx and carotid body reflexes, not direct SA node regulation."
  },

  boardTrap: "Do not choose sympathetic nerves just because they affect heart rate. The question asks for parasympathetic control of the SA node, which is the vagus nerve.",
  memoryHook: "Vagus slows the heartbeat."
},
{
  id: "H&N-004",
  type: "head-and-neck",
  subject: "Clinical Execution & Materials",
  topic: "Autonomic Control & Cardiac Conduction",
  difficulty: "hard",
  question: "A patient experiences episodic bradycardia following carotid sinus stimulation. Cardiology consultation notes increased parasympathetic influence affecting atrioventricular conduction rather than initial pacemaker firing. No structural cardiac abnormalities are present. Which nerve most directly influences conduction through the atrioventricular node?",
  choices: [
    { key: "A", text: "Right vagus nerve" },
    { key: "B", text: "Right sympathetic cardiac nerves" },
    { key: "C", text: "Left sympathetic cardiac nerves" },
    { key: "D", text: "Left vagus nerve" }
  ],
  correctAnswer: "D",

  rationale: "**D. Left vagus nerve**\nParasympathetic control of the atrioventricular node is primarily mediated by the left vagus nerve. Increased stimulation slows AV nodal conduction and can result in delayed ventricular depolarization.",

  incorrectRationales: {
    A: "**A. Right vagus nerve**\nIncorrect — The right vagus nerve predominantly influences the sinoatrial node and heart rate initiation, not AV nodal conduction.",
    B: "**B. Right sympathetic cardiac nerves**\nIncorrect — Sympathetic fibers increase conduction velocity and heart rate rather than slowing AV node transmission.",
    C: "**C. Left sympathetic cardiac nerves**\nIncorrect — Sympathetic innervation accelerates AV node conduction and does not produce parasympathetic slowing effects."
  },

  boardTrap: "The board differentiates right vagus for SA node control and left vagus for AV node conduction.",
  memoryHook: "Right vagus starts the beat. Left vagus delays the beat."
},
{
  id: "H&N-005",
  type: "head-and-neck",
  subject: "Clinical Execution & Materials",
  topic: "Pulmonary Circulation Anatomy",
  difficulty: "medium",
  question: "A patient with altered pulmonary circulation undergoes imaging that identifies abnormal venous return to the left atrium. Accurate identification of normal pulmonary venous anatomy is required to interpret the findings. Which of the following structures is not classified as a pulmonary vein?",
  choices: [
    { key: "A", text: "Pulmonary trunk" },
    { key: "B", text: "Right inferior pulmonary vein" },
    { key: "C", text: "Left superior pulmonary vein" },
    { key: "D", text: "Left inferior pulmonary vein" }
  ],
  correctAnswer: "A",

  rationale: "**A. Pulmonary trunk**\nPulmonary veins carry oxygenated blood from the lungs to the left atrium. The pulmonary trunk is an arterial structure that carries deoxygenated blood from the right ventricle toward the lungs and is not a vein.",

  incorrectRationales: {
    B: "**B. Right inferior pulmonary vein**\nIncorrect — Returns oxygenated blood from the lower lobe of the right lung to the left atrium.",
    C: "**C. Left superior pulmonary vein**\nIncorrect — Transports oxygenated blood from the upper lobe of the left lung to the left atrium.",
    D: "**D. Left inferior pulmonary vein**\nIncorrect — Returns oxygenated blood from the lower lobe of the left lung to the left atrium."
  },

  boardTrap: "Do not rely on naming alone. The pulmonary trunk is part of pulmonary circulation but is an artery, not a vein.",
  memoryHook: "Pulmonary veins enter the heart. The pulmonary trunk exits the heart."
},
{
  id: "H&N-006",
  type: "head-and-neck",
  subject: "Clinical Execution & Materials",
  topic: "Cardiac Valve Anatomy",
  difficulty: "medium",
  question: "A patient reports a history of valvular heart disease and requires antibiotic premedication for invasive dental hygiene procedures. During the medical consultation, cardiac auscultation findings are reviewed to determine which valve abnormalities are most closely associated with altered blood flow between specific cardiac chambers. Which statement correctly describes the bicuspid and tricuspid valves in relation to cardiac chamber separation?",
  choices: [
    { key: "A", text: "The bicuspid valve separates the right atrium from the right ventricle, and the tricuspid valve separates the left atrium from the left ventricle" },
    { key: "B", text: "The bicuspid valve separates the ventricles, and the tricuspid valve separates the atria" },
    { key: "C", text: "The bicuspid valve regulates blood flow into the pulmonary trunk, and the tricuspid valve regulates blood flow into the aorta" },
    { key: "D", text: "The bicuspid valve separates the left atrium from the left ventricle, and the tricuspid valve separates the right atrium from the right ventricle" }
  ],
  correctAnswer: "D",

  rationale: "**D. The bicuspid valve separates the left atrium from the left ventricle, and the tricuspid valve separates the right atrium from the right ventricle**\nThe bicuspid valve, also called the mitral valve, controls blood flow between the left atrium and left ventricle. The tricuspid valve controls blood flow between the right atrium and right ventricle. These atrioventricular valves prevent backflow during ventricular contraction, a key concept when assessing patients at risk for infective endocarditis during dental hygiene care.",

  incorrectRationales: {
    A: "**A. The bicuspid valve separates the right atrium from the right ventricle, and the tricuspid valve separates the left atrium from the left ventricle**\nIncorrect — Reverses the anatomic locations of the atrioventricular valves.",
    B: "**B. The bicuspid valve separates the ventricles, and the tricuspid valve separates the atria**\nIncorrect — Atrioventricular valves do not separate atria from atria or ventricles from ventricles.",
    C: "**C. The bicuspid valve regulates blood flow into the pulmonary trunk, and the tricuspid valve regulates blood flow into the aorta**\nIncorrect — Semilunar valves, not atrioventricular valves, regulate blood flow into the pulmonary trunk and aorta."
  },

  boardTrap: "Students often associate tricuspid with the left side because it has more cusps. Valve identification is based on chamber location, not cusp number.",
  memoryHook: "Bicuspid is left. Tricuspid is right."
},
{
  id: "H&N-007",
  type: "head-and-neck",
  subject: "Clinical Execution & Materials",
  topic: "Maxillary Nerve Blocks",
  difficulty: "medium",
  question: "A patient requires profound anesthesia for a maxillary anterior restorative procedure involving palatal soft tissue. Buccal anesthesia has been achieved, but palatal tissues remain sensitive despite adequate anesthesia of the anterior superior alveolar distribution. If palatal anesthesia is required in addition to anterior superior alveolar nerve anesthesia, which nerve must also be blocked?",
  choices: [
    { key: "A", text: "Nasopalatine nerve" },
    { key: "B", text: "Greater palatine nerve" },
    { key: "C", text: "Posterior superior alveolar nerve" },
    { key: "D", text: "Infraorbital nerve" }
  ],
  correctAnswer: "A",

  rationale: "**A. Nasopalatine nerve**\nThe nasopalatine nerve provides sensory innervation to the palatal soft tissue of the maxillary anterior region. Blocking this nerve is required to achieve palatal anesthesia when working in the incisor and canine area.",

  incorrectRationales: {
    B: "**B. Greater palatine nerve**\nIncorrect — Innervates the posterior hard palate, not the anterior palatal tissues.",
    C: "**C. Posterior superior alveolar nerve**\nIncorrect — Supplies posterior maxillary teeth and does not innervate palatal soft tissue.",
    D: "**D. Infraorbital nerve**\nIncorrect — Provides pulpal anesthesia to maxillary anterior teeth but does not anesthetize palatal tissue."
  },

  boardTrap: "Do not choose greater palatine simply because it is associated with the palate. The exam differentiates anterior versus posterior palatal innervation.",
  memoryHook: "Anterior palate needs nasopalatine."
},
{
  id: "H&N-008",
  type: "head-and-neck",
  subject: "Clinical Execution & Materials",
  topic: "Embryology & Pharyngeal Arches",
  difficulty: "medium",
  question: "A patient presents with congenital craniofacial abnormalities affecting mandibular development and muscles of mastication. Review of embryologic origin is necessary to understand the structures involved and their innervation. The mandibular arch develops from which embryologic structure?",
  choices: [
    { key: "A", text: "Second pharyngeal arch" },
    { key: "B", text: "Third pharyngeal arch" },
    { key: "C", text: "Fourth pharyngeal arch" },
    { key: "D", text: "First pharyngeal arch" }
  ],
  correctAnswer: "D",

  rationale: "**D. First pharyngeal arch**\nThe mandibular arch is derived from the first pharyngeal arch. This arch gives rise to the mandible, muscles of mastication, portions of the maxilla, and associated neural and vascular structures.",

  incorrectRationales: {
    A: "**A. Second pharyngeal arch**\nIncorrect — The second pharyngeal arch contributes to muscles of facial expression.",
    B: "**B. Third pharyngeal arch**\nIncorrect — The third pharyngeal arch is associated with stylopharyngeus and pharyngeal structures.",
    C: "**C. Fourth pharyngeal arch**\nIncorrect — The fourth pharyngeal arch contributes to laryngeal musculature."
  },

  boardTrap: "Do not confuse mandibular development with facial expression muscles. Mandibular structures originate from the first pharyngeal arch.",
  memoryHook: "Mandible means first arch."
},
{
  id: "H&N-009",
  type: "head-and-neck",
  subject: "Clinical Execution & Materials",
  topic: "Mandibular Nerve Branches",
  difficulty: "medium",
  question: "A patient requires profound pulpal anesthesia for a mandibular anterior procedure. Soft tissue anesthesia of the lower lip is present, but the clinician must ensure pulpal anesthesia of the incisors and canine without relying on posterior mandibular nerve blocks. Which nerve is anesthetized to achieve pulpal anesthesia of the mandibular anterior teeth?",
  choices: [
    { key: "A", text: "Inferior alveolar nerve" },
    { key: "B", text: "Mental nerve" },
    { key: "C", text: "Incisive nerve" },
    { key: "D", text: "Lingual nerve" }
  ],
  correctAnswer: "C",

  rationale: "**C. Incisive nerve**\nThe incisive nerve is the terminal branch of the inferior alveolar nerve that supplies pulpal innervation to the mandibular anterior teeth. Anesthesia of this nerve provides pulpal anesthesia without affecting posterior mandibular teeth.",

  incorrectRationales: {
    A: "**A. Inferior alveolar nerve**\nIncorrect — The inferior alveolar nerve anesthetizes all mandibular teeth but is not specific to the anterior region.",
    B: "**B. Mental nerve**\nIncorrect — The mental nerve provides soft tissue anesthesia to the lower lip and chin, not pulpal anesthesia.",
    D: "**D. Lingual nerve**\nIncorrect — The lingual nerve supplies sensation to the tongue and lingual soft tissues."
  },

  boardTrap: "Lip anesthesia does not equal pulpal anesthesia. Mandibular anterior pulpal innervation is through the incisive nerve.",
  memoryHook: "Incisive means incisors."
},
{
  id: "H&N-010",
  type: "head-and-neck",
  subject: "Clinical Execution & Materials",
  topic: "Muscles of Facial Expression",
  difficulty: "medium",
  question: "A patient presents with difficulty retaining water in the oral cavity during rinsing and is unable to maintain lip seal during oral hygiene instruction. Facial sensation is intact, but functional assessment reveals impaired lip competence without involvement of mastication muscles. Which muscle is primarily responsible for closing the lips?",
  choices: [
    { key: "A", text: "Buccinator" },
    { key: "B", text: "Zygomaticus major" },
    { key: "C", text: "Orbicularis oris" },
    { key: "D", text: "Levator labii superioris" }
  ],
  correctAnswer: "C",

  rationale: "**C. Orbicularis oris**\nThe orbicularis oris encircles the mouth and functions to close, purse, and seal the lips. It is essential for maintaining oral competence during swallowing, speech, and dental hygiene procedures.",

  incorrectRationales: {
    A: "**A. Buccinator**\nIncorrect — Compresses the cheek against the teeth and assists in mastication but does not close the lips.",
    B: "**B. Zygomaticus major**\nIncorrect — Elevates the corners of the mouth during smiling rather than sealing the lips.",
    D: "**D. Levator labii superioris**\nIncorrect — Elevates the upper lip and does not produce lip closure."
  },

  boardTrap: "Do not confuse cheek compression with lip closure. Buccinator controls food positioning, but orbicularis oris is the sphincter of the mouth.",
  memoryHook: "Orbicularis oris seals the lips."
},
{
  id: "H&N-011",
  type: "head-and-neck",
  subject: "Clinical Execution & Materials",
  topic: "Lymphatic Drainage",
  difficulty: "medium",
  question: "A patient presents with localized swelling and tenderness beneath the chin following an untreated infection associated with the mandibular anterior teeth. No enlargement is noted along the lateral borders of the mandible or cervical chain. Which lymph nodes primarily drain the middle mandibular anterior teeth?",
  choices: [
    { key: "A", text: "Submental lymph nodes" },
    { key: "B", text: "Submandibular lymph nodes" },
    { key: "C", text: "Deep cervical lymph nodes" },
    { key: "D", text: "Preauricular lymph nodes" }
  ],
  correctAnswer: "A",

  rationale: "**A. Submental lymph nodes**\nThe submental lymph nodes drain the central mandibular anterior region, including the mandibular incisors. Infections from these teeth commonly present with swelling beneath the chin.",

  incorrectRationales: {
    B: "**B. Submandibular lymph nodes**\nIncorrect — Submandibular lymph nodes drain posterior mandibular teeth and maxillary teeth.",
    C: "**C. Deep cervical lymph nodes**\nIncorrect — Deep cervical lymph nodes receive lymph after it passes through more superficial nodes.",
    D: "**D. Preauricular lymph nodes**\nIncorrect — Preauricular lymph nodes are associated with the parotid region and lateral facial structures."
  },

  boardTrap: "Do not assume all mandibular teeth drain to submandibular nodes. The midline mandibular incisors drain to the submental nodes.",
  memoryHook: "Midline mandibular incisors go submental."
},
{
  id: "H&N-012",
  type: "head-and-neck",
  subject: "Clinical Execution & Materials",
  topic: "Cardiovascular Circulation",
  difficulty: "medium",
  question: "A patient with a history of cardiovascular disease reports shortness of breath during routine oral hygiene care. Understanding normal blood flow patterns is necessary when evaluating oxygen delivery and systemic circulation during treatment planning. Which pairing correctly identifies a structure that carries oxygenated blood and a structure that carries deoxygenated blood?",
  choices: [
    { key: "A", text: "Pulmonary vein and pulmonary artery" },
    { key: "B", text: "Superior vena cava and pulmonary vein" },
    { key: "C", text: "Aorta and pulmonary vein" },
    { key: "D", text: "Inferior vena cava and aorta" }
  ],
  correctAnswer: "A",

  rationale: "**A. Pulmonary vein and pulmonary artery**\nPulmonary veins carry oxygenated blood from the lungs to the left atrium. The pulmonary artery carries deoxygenated blood from the right ventricle to the lungs.",

  incorrectRationales: {
    B: "**B. Superior vena cava and pulmonary vein**\nIncorrect — Both structures listed do not represent one oxygenated and one deoxygenated vessel.",
    C: "**C. Aorta and pulmonary vein**\nIncorrect — Both vessels carry oxygenated blood.",
    D: "**D. Inferior vena cava and aorta**\nIncorrect — Both vessels do not correctly represent opposite oxygenation states."
  },

  boardTrap: "Pulmonary circulation reverses the usual oxygen rule. Pulmonary veins carry oxygenated blood, and the pulmonary artery carries deoxygenated blood.",
  memoryHook: "Pulmonary veins are oxygen rich. Pulmonary artery is oxygen poor."
},
{
  id: "H&N-013",
  type: "head-and-neck",
  subject: "Clinical Execution & Materials",
  topic: "Cranial Nerve XII",
  difficulty: "medium",
  question: "A patient presents with deviation of the tongue toward the right when asked to protrude it. Speech articulation is impaired, but sensation of the anterior and posterior tongue remains intact. No deficits are noted in facial expression or swallowing. Which structure provides the primary motor function to the tongue?",
  choices: [
    { key: "A", text: "Lingual nerve" },
    { key: "B", text: "Glossopharyngeal nerve" },
    { key: "C", text: "Facial nerve" },
    { key: "D", text: "Hypoglossal nerve" }
  ],
  correctAnswer: "D",

  rationale: "**D. Hypoglossal nerve**\nThe hypoglossal nerve supplies motor innervation to all intrinsic and extrinsic muscles of the tongue, with the exception of the palatoglossus. Damage results in weakness, deviation on protrusion, and impaired speech.",

  incorrectRationales: {
    A: "**A. Lingual nerve**\nIncorrect — The lingual nerve provides sensory innervation to the anterior tongue.",
    B: "**B. Glossopharyngeal nerve**\nIncorrect — The glossopharyngeal nerve provides sensory input to the posterior tongue and pharynx.",
    C: "**C. Facial nerve**\nIncorrect — The facial nerve controls muscles of facial expression, not tongue movement."
  },

  boardTrap: "Do not confuse sensory nerves of the tongue with motor control. Motor function of the tongue points to cranial nerve XII.",
  memoryHook: "Tongue motor equals hypoglossal."
},
{
  id: "H&N-014",
  type: "head-and-neck",
  subject: "Clinical Execution & Materials",
  topic: "Lingual Nerve Sensory Function",
  difficulty: "medium",
  question: "A patient reports loss of general sensation to the anterior portion of the tongue following a mandibular surgical procedure. Taste perception is diminished but not completely absent. Motor movement of the tongue is normal, and no deviation is observed. Which nerve provides general sensory innervation to the anterior portion of the tongue?",
  choices: [
    { key: "A", text: "Lingual nerve" },
    { key: "B", text: "Chorda tympani" },
    { key: "C", text: "Glossopharyngeal nerve" },
    { key: "D", text: "Hypoglossal nerve" }
  ],
  correctAnswer: "A",

  rationale: "**A. Lingual nerve**\nThe lingual nerve provides general sensory innervation to the anterior two thirds of the tongue. This includes touch, pain, and temperature sensation. It does not supply motor function.",

  incorrectRationales: {
    B: "**B. Chorda tympani**\nIncorrect — The chorda tympani carries taste fibers to the anterior tongue but does not provide general sensation.",
    C: "**C. Glossopharyngeal nerve**\nIncorrect — The glossopharyngeal nerve supplies sensory innervation to the posterior one third of the tongue.",
    D: "**D. Hypoglossal nerve**\nIncorrect — The hypoglossal nerve provides motor function to the tongue, not sensation."
  },

  boardTrap: "Do not confuse taste with general sensation. Loss of touch and pain points to the lingual nerve.",
  memoryHook: "Lingual feels. Chorda tastes."
},
{
  id: "H&N-015",
  type: "head-and-neck",
  subject: "Clinical Execution & Materials",
  topic: "Chorda Tympani & Taste",
  difficulty: "hard",
  question: "A patient reports loss of taste on the anterior portion of the tongue following middle ear pathology. General sensation to the tongue remains intact, and tongue movement is normal. No swallowing deficits are present. Which nerve is responsible for taste sensation to the anterior two thirds of the tongue?",
  choices: [
    { key: "A", text: "Lingual nerve" },
    { key: "B", text: "Chorda tympani" },
    { key: "C", text: "Glossopharyngeal nerve" },
    { key: "D", text: "Hypoglossal nerve" }
  ],
  correctAnswer: "B",

  rationale: "**B. Chorda tympani**\nTaste sensation to the anterior two thirds of the tongue is carried by the chorda tympani, a branch of the facial nerve. These taste fibers travel with the lingual nerve but do not provide general sensory function.",

  incorrectRationales: {
    A: "**A. Lingual nerve**\nIncorrect — The lingual nerve provides general sensation such as touch and pain, not taste.",
    C: "**C. Glossopharyngeal nerve**\nIncorrect — The glossopharyngeal nerve supplies taste to the posterior one third of the tongue.",
    D: "**D. Hypoglossal nerve**\nIncorrect — The hypoglossal nerve provides motor innervation to the tongue."
  },

  boardTrap: "Do not assume the lingual nerve controls taste because taste fibers travel alongside it. Taste to the anterior tongue belongs to the chorda tympani.",
  memoryHook: "Anterior taste rides chorda tympani."
},
{
  id: "H&N-016",
  type: "head-and-neck",
  subject: "Clinical Execution & Materials",
  topic: "Posterior Tongue Innervation",
  difficulty: "hard",
  question: "A patient presents with diminished taste and loss of general sensation affecting the posterior portion of the tongue. Tongue movement is intact, and anterior tongue sensation and taste are unaffected. Gag reflex is reduced on the affected side. Which nerve provides both sensory and taste innervation to the posterior one third of the tongue?",
  choices: [
    { key: "A", text: "Lingual nerve" },
    { key: "B", text: "Glossopharyngeal nerve" },
    { key: "C", text: "Chorda tympani" },
    { key: "D", text: "Hypoglossal nerve" }
  ],
  correctAnswer: "B",

  rationale: "**B. Glossopharyngeal nerve**\nThe glossopharyngeal nerve supplies both general sensation and taste to the posterior one third of the tongue. It also contributes to the gag reflex, making posterior tongue deficits clinically significant.",

  incorrectRationales: {
    A: "**A. Lingual nerve**\nIncorrect — Provides general sensation to the anterior two thirds of the tongue only.",
    C: "**C. Chorda tympani**\nIncorrect — Supplies taste to the anterior two thirds of the tongue.",
    D: "**D. Hypoglossal nerve**\nIncorrect — Provides motor function to tongue muscles, not sensation or taste."
  },

  boardTrap: "The posterior tongue is the only region where one nerve provides both general sensation and taste.",
  memoryHook: "Posterior tongue does it all with glossopharyngeal."
},
{
  id: "H&N-017",
  type: "head-and-neck",
  subject: "Clinical Execution & Materials",
  topic: "Intrinsic vs Extrinsic Tongue Muscles",
  difficulty: "hard",
  question: "A patient demonstrates difficulty with precise tongue shaping during speech, inability to elevate the posterior tongue against the palate, and weakness when attempting to protrude the tongue straight forward. Sensory function of the tongue is intact. Which combination correctly matches tongue muscle function with the appropriate muscle group?",
  choices: [
    { key: "A", text: "Extrinsic muscles shape the tongue, palatoglossus protrudes the tongue, genioglossus elevates the palate" },
    { key: "B", text: "Intrinsic muscles protrude the tongue, hyoglossus elevates the palate, styloglossus shapes the tongue" },
    { key: "C", text: "Palatoglossus shapes the tongue, intrinsic muscles elevate the palate, genioglossus retracts the tongue" },
    { key: "D", text: "Intrinsic muscles shape the tongue, palatoglossus elevates the posterior tongue toward the palate, genioglossus protrudes the tongue" }
  ],
  correctAnswer: "D",

  rationale: "**D. Intrinsic muscles shape the tongue, palatoglossus elevates the posterior tongue toward the palate, genioglossus protrudes the tongue**\nIntrinsic tongue muscles are responsible for altering tongue shape. The palatoglossus elevates the posterior tongue toward the palate, assisting with swallowing. The genioglossus protrudes the tongue outward from the oral cavity.",

  incorrectRationales: {
    A: "**A. Extrinsic muscles shape the tongue, palatoglossus protrudes the tongue, genioglossus elevates the palate**\nIncorrect — Extrinsic muscles move the tongue rather than shaping it, and palatoglossus does not protrude the tongue.",
    B: "**B. Intrinsic muscles protrude the tongue, hyoglossus elevates the palate, styloglossus shapes the tongue**\nIncorrect — Intrinsic muscles do not protrude the tongue, and hyoglossus depresses the tongue.",
    C: "**C. Palatoglossus shapes the tongue, intrinsic muscles elevate the palate, genioglossus retracts the tongue**\nIncorrect — Palatoglossus does not shape the tongue, and genioglossus does not retract the tongue."
  },

  boardTrap: "Intrinsic muscles change shape only. Genioglossus moves the tongue forward. Palatoglossus elevates the posterior tongue toward the palate.",
  memoryHook: "Intrinsic shapes. Palato up. Genio out."
},
{
  id: "H&N-018",
  type: "head-and-neck",
  subject: "Clinical Execution & Materials",
  topic: "Extrinsic Tongue Muscles",
  difficulty: "hard",
  question: "A patient demonstrates difficulty lowering the tongue to allow instrumentation of the mandibular posterior region and shows impaired posterior repositioning of the tongue during swallowing. Tongue sensation and protrusion remain normal. Which combination correctly identifies the muscle that depresses the tongue and the muscle that retracts the tongue?",
  choices: [
    { key: "A", text: "Hyoglossus depresses the tongue and styloglossus retracts the tongue" },
    { key: "B", text: "Genioglossus depresses the tongue and palatoglossus retracts the tongue" },
    { key: "C", text: "Intrinsic muscles depress the tongue and hyoglossus retracts the tongue" },
    { key: "D", text: "Styloglossus depresses the tongue and genioglossus retracts the tongue" }
  ],
  correctAnswer: "A",

  rationale: "**A. Hyoglossus depresses the tongue and styloglossus retracts the tongue**\nThe hyoglossus muscle depresses the tongue, while the styloglossus muscle retracts and elevates the tongue. These actions are essential for coordinated swallowing and posterior tongue control.",

  incorrectRationales: {
    B: "**B. Genioglossus depresses the tongue and palatoglossus retracts the tongue**\nIncorrect — Genioglossus protrudes the tongue and palatoglossus elevates the posterior tongue.",
    C: "**C. Intrinsic muscles depress the tongue and hyoglossus retracts the tongue**\nIncorrect — Intrinsic muscles alter tongue shape, not vertical or posterior movement.",
    D: "**D. Styloglossus depresses the tongue and genioglossus retracts the tongue**\nIncorrect — Styloglossus retracts rather than depresses, and genioglossus protrudes rather than retracts."
  },

  boardTrap: "Do not assign all tongue movements to genioglossus. Depression equals hyoglossus. Retraction equals styloglossus.",
  memoryHook: "Hyo down. Styli back."
},
{
  id: "H&N-019",
  type: "head-and-neck",
  subject: "Clinical Execution & Materials",
  topic: "Muscles of Mastication",
  difficulty: "medium",
  question: "A patient presents with unilateral weakness during mastication. Jaw closure is impaired on one side, but facial expression, tongue movement, and sensation of the oral mucosa remain intact. There is no loss of taste or salivary flow. Which nerve provides motor innervation to the masseter muscle?",
  choices: [
    { key: "A", text: "Facial nerve" },
    { key: "B", text: "Maxillary division of the trigeminal nerve" },
    { key: "C", text: "Mandibular division of the trigeminal nerve" },
    { key: "D", text: "Hypoglossal nerve" }
  ],
  correctAnswer: "C",

  rationale: "**C. Mandibular division of the trigeminal nerve**\nThe masseter muscle is a muscle of mastication and receives motor innervation from the mandibular division of the trigeminal nerve. This division supplies all muscles responsible for jaw closure.",

  incorrectRationales: {
    A: "**A. Facial nerve**\nIncorrect — Innervates muscles of facial expression, not mastication.",
    B: "**B. Maxillary division of the trigeminal nerve**\nIncorrect — Provides sensory innervation only, no motor function to muscles of mastication.",
    D: "**D. Hypoglossal nerve**\nIncorrect — Supplies motor innervation to the tongue, not the muscles of mastication."
  },

  boardTrap: "Do not confuse facial expression muscles with mastication muscles. Motor mastication equals trigeminal V3.",
  memoryHook: "Masseter means mandibular."
},
{
  id: "H&N-020",
  type: "head-and-neck",
  subject: "Clinical Execution & Materials",
  topic: "Trigeminal Foramina",
  difficulty: "hard",
  question: "A patient presents with isolated loss of sensation to the maxillary teeth, palate, and midfacial skin. Mandibular and ophthalmic sensory function are intact. Imaging confirms a lesion affecting a single division of the trigeminal nerve as it exits the cranial cavity. Through which opening does the maxillary division of the trigeminal nerve exit the skull?",
  choices: [
    { key: "A", text: "Foramen ovale" },
    { key: "B", text: "Superior orbital fissure" },
    { key: "C", text: "Foramen rotundum" },
    { key: "D", text: "Foramen spinosum" }
  ],
  correctAnswer: "C",

  rationale: "**C. Foramen rotundum**\nThe maxillary division of the trigeminal nerve exits the skull through the foramen rotundum. This division provides sensory innervation to the maxillary teeth, palate, nasal cavity, and midface.",

  incorrectRationales: {
    A: "**A. Foramen ovale**\nIncorrect — Foramen ovale transmits the mandibular division of the trigeminal nerve.",
    B: "**B. Superior orbital fissure**\nIncorrect — Superior orbital fissure transmits the ophthalmic division.",
    D: "**D. Foramen spinosum**\nIncorrect — Foramen spinosum transmits the middle meningeal artery."
  },

  boardTrap: "Each trigeminal division exits through a distinct opening. V1 superior orbital fissure, V2 foramen rotundum, V3 foramen ovale.",
  memoryHook: "V2 is round. Rotundum."
},
{
  id: "H&N-021",
  type: "head-and-neck",
  subject: "Clinical Execution & Materials",
  topic: "Mandibular Landmarks",
  difficulty: "medium",
  question: "A patient demonstrates limited mandibular opening with pain during elevation of the mandible. Imaging focuses on the bony landmarks associated with muscle attachment involved in jaw closure. Where is the coronoid process located?",
  choices: [
    { key: "A", text: "Anterior portion of the mandibular ramus" },
    { key: "B", text: "Posterior inferior border of the mandible" },
    { key: "C", text: "Superior aspect of the mandibular body near the symphysis" },
    { key: "D", text: "Medial surface of the mandibular angle" }
  ],
  correctAnswer: "A",

  rationale: "**A. Anterior portion of the mandibular ramus**\nThe coronoid process is the anterior projection of the mandibular ramus and serves as the attachment site for the temporalis muscle, which elevates the mandible.",

  incorrectRationales: {
    B: "**B. Posterior inferior border of the mandible**\nIncorrect — Describes the angle or inferior border, not the coronoid process.",
    C: "**C. Superior aspect of the mandibular body near the symphysis**\nIncorrect — Refers to the mandibular body, not the ramus.",
    D: "**D. Medial surface of the mandibular angle**\nIncorrect — The coronoid process is not located on the medial angle."
  },

  boardTrap: "Do not confuse the coronoid process with the condylar process. Condyle is posterior. Coronoid is anterior.",
  memoryHook: "Coronoid is the front hook of the ramus."
},
{
  id: "H&N-022",
  type: "head-and-neck",
  subject: "Clinical Execution & Materials",
  topic: "Cranial Sutures",
  difficulty: "medium",
  question: "A patient presents with a history of cranial trauma affecting the lateral aspect of the skull. Imaging reveals disruption along a major cranial suture located superior to the external acoustic meatus. Understanding normal cranial bone boundaries is necessary to interpret the findings. What structures are separated by the squamous suture?",
  choices: [
    { key: "A", text: "Frontal bone and parietal bone" },
    { key: "B", text: "Occipital bone and parietal bone" },
    { key: "C", text: "Temporal bone and parietal bone" },
    { key: "D", text: "Sphenoid bone and temporal bone" }
  ],
  correctAnswer: "C",

  rationale: "**C. Temporal bone and parietal bone**\nThe squamous suture is a cranial suture that joins the temporal bone with the parietal bone along the lateral aspect of the skull.",

  incorrectRationales: {
    A: "**A. Frontal bone and parietal bone**\nIncorrect — This describes the coronal suture.",
    B: "**B. Occipital bone and parietal bone**\nIncorrect — This describes the lambdoid suture.",
    D: "**D. Sphenoid bone and temporal bone**\nIncorrect — These bones articulate at the sphenoid region, not at the squamous suture."
  },

  boardTrap: "Do not confuse nearby sphenoid articulations with the squamous suture. Squamous separates temporal and parietal bones.",
  memoryHook: "Squamous sits between side and top. Temporal and parietal."
},
{
  id: "H&N-023",
  type: "head-and-neck",
  subject: "Clinical Execution & Materials",
  topic: "Cranial Sutures Advanced",
  difficulty: "hard",
  question: "Radiographic imaging of the lateral cranial base reveals pathology affecting a suture associated with the temporal region and the cranial floor. Accurate identification of the bones forming this suture is required to localize the defect. The squamous suture separates which two bones?",
  choices: [
    { key: "A", text: "Parietal bone and temporal bone" },
    { key: "B", text: "Temporal bone and sphenoid bone" },
    { key: "C", text: "Frontal bone and parietal bone" },
    { key: "D", text: "Occipital bone and temporal bone" }
  ],
  correctAnswer: "B",

  rationale: "**B. Temporal bone and sphenoid bone**\nThe squamous suture is the articulation between the temporal bone and the sphenoid bone along the lateral cranial base. This region is clinically relevant due to its proximity to major neurovascular structures.",

  incorrectRationales: {
    A: "**A. Parietal bone and temporal bone**\nIncorrect — Describes the squamosal region of the parietal temporal articulation, not the squamous suture tested on boards.",
    C: "**C. Frontal bone and parietal bone**\nIncorrect — Describes the coronal suture.",
    D: "**D. Occipital bone and temporal bone**\nIncorrect — Describes the occipitomastoid region, not the squamous suture."
  },

  boardTrap: "Do not default to parietal temporal automatically. Advanced questions test the temporal sphenoid articulation at the cranial base.",
  memoryHook: "Squamous sits low and forward. Temporal meets sphenoid."
},
{
  id: "H&N-024",
  type: "head-and-neck",
  subject: "Clinical Execution & Materials",
  topic: "Muscles of Mastication & Parafunction",
  difficulty: "medium",
  question: "A patient presents with generalized occlusal wear, flattened cusp tips, and shiny wear facets on posterior teeth. The patient reports nocturnal clenching but denies jaw joint pain. On palpation, one muscle demonstrates increased bulk and tenderness bilaterally compared to other muscles of mastication. Which muscle is most commonly overused in patients with occlusal attrition related to parafunctional activity?",
  choices: [
    { key: "A", text: "Masseter" },
    { key: "B", text: "Temporalis" },
    { key: "C", text: "Medial pterygoid" },
    { key: "D", text: "Lateral pterygoid" }
  ],
  correctAnswer: "A",

  rationale: "**A. Masseter**\nThe masseter is the primary muscle responsible for forceful elevation of the mandible. Chronic clenching and grinding lead to hypertrophy and overuse of this muscle, contributing to attrition of the dentition.",

  incorrectRationales: {
    B: "**B. Temporalis**\nIncorrect — The temporalis assists in elevation and retraction but is not the primary force generator.",
    C: "**C. Medial pterygoid**\nIncorrect — The medial pterygoid supports elevation but contributes less to sustained clenching forces.",
    D: "**D. Lateral pterygoid**\nIncorrect — The lateral pterygoid functions in protrusion and lateral movement, not heavy occlusal loading."
  },

  boardTrap: "Do not choose temporalis based on size or fan shape. Sustained vertical force and hypertrophy in clenching is dominated by the masseter.",
  memoryHook: "Attrition equals masseter muscle."
},
{
  id: "H&N-025",
  type: "head-and-neck",
  subject: "Clinical Execution & Materials",
  topic: "Hypoglossal Nerve Function",
  difficulty: "medium",
  question: "A patient presents with impaired tongue mobility affecting speech articulation and bolus manipulation during swallowing. Tongue sensation and taste are intact, and palatal elevation is normal. No deficits are noted in facial expression. What does the hypoglossal nerve innervate?",
  choices: [
    { key: "A", text: "Sensory fibers to the anterior two thirds of the tongue" },
    { key: "B", text: "Motor fibers to intrinsic and extrinsic tongue muscles" },
    { key: "C", text: "Taste fibers to the posterior one third of the tongue" },
    { key: "D", text: "Motor fibers to the soft palate" }
  ],
  correctAnswer: "B",

  rationale: "**B. Motor fibers to intrinsic and extrinsic tongue muscles**\nThe hypoglossal nerve provides motor innervation to all intrinsic and extrinsic muscles of the tongue, with the exception of the palatoglossus.",

  incorrectRationales: {
    A: "**A. Sensory fibers to the anterior two thirds of the tongue**\nIncorrect — General sensory innervation to the anterior tongue is provided by the lingual nerve.",
    C: "**C. Taste fibers to the posterior one third of the tongue**\nIncorrect — Taste and sensory innervation to the posterior tongue is supplied by the glossopharyngeal nerve.",
    D: "**D. Motor fibers to the soft palate**\nIncorrect — Soft palate motor function is supplied primarily by the vagus nerve."
  },

  boardTrap: "Separate motor from sensory function. Hypoglossal equals movement only.",
  memoryHook: "Hypoglossal moves the tongue."
},
{
  id: "H&N-026",
  type: "head-and-neck",
  subject: "Clinical Execution & Materials",
  topic: "Hypoglossal Nerve Lesion",
  difficulty: "hard",
  question: "A patient presents with slurred speech and difficulty manipulating food during mastication. When asked to protrude the tongue, it deviates noticeably toward the affected side. Tongue sensation and taste are intact, and no facial muscle weakness is observed. Damage to which structure most directly explains deviation of the tongue to one side on protrusion?",
  choices: [
    { key: "A", text: "Lingual nerve" },
    { key: "B", text: "Glossopharyngeal nerve" },
    { key: "C", text: "Facial nerve" },
    { key: "D", text: "Hypoglossal nerve" }
  ],
  correctAnswer: "D",

  rationale: "**D. Hypoglossal nerve**\nThe hypoglossal nerve provides motor innervation to the intrinsic and extrinsic muscles of the tongue. Injury causes weakness on the affected side, resulting in deviation of the tongue toward the side of the lesion during protrusion.",

  incorrectRationales: {
    A: "**A. Lingual nerve**\nIncorrect — Provides general sensory innervation to the anterior tongue, not motor control.",
    B: "**B. Glossopharyngeal nerve**\nIncorrect — Supplies sensory and taste function to the posterior tongue, not tongue movement.",
    C: "**C. Facial nerve**\nIncorrect — Innervates muscles of facial expression, not the tongue."
  },

  boardTrap: "Tongue deviation is toward the injured side due to unopposed muscle action.",
  memoryHook: "Hypoglossal injury means tongue points to trouble."
},
{
  id: "H&N-027",
  type: "head-and-neck",
  subject: "Clinical Execution & Materials",
  topic: "Buccinator Function",
  difficulty: "medium",
  question: "A patient reports frequent food accumulation in the buccal vestibule during mastication. The patient must repeatedly reposition food with the tongue to continue chewing. Facial sensation is intact, and jaw opening and closing strength are normal. Which muscle is primarily responsible for keeping food positioned on the chewing surfaces of the teeth during mastication?",
  choices: [
    { key: "A", text: "Masseter" },
    { key: "B", text: "Buccinator" },
    { key: "C", text: "Orbicularis oris" },
    { key: "D", text: "Medial pterygoid" }
  ],
  correctAnswer: "B",

  rationale: "**B. Buccinator**\nThe buccinator compresses the cheek against the teeth, preventing food from collecting in the vestibule and keeping it positioned on the occlusal surfaces during chewing.",

  incorrectRationales: {
    A: "**A. Masseter**\nIncorrect — Elevates the mandible and generates biting force.",
    C: "**C. Orbicularis oris**\nIncorrect — Closes and seals the lips.",
    D: "**D. Medial pterygoid**\nIncorrect — Assists in mandibular elevation, not food control."
  },

  boardTrap: "Do not equate strength with control. Food positioning is a cheek function, not a jaw closing function.",
  memoryHook: "Buccinator keeps food between the teeth."
},
{
  id: "H&N-028",
  type: "head-and-neck",
  subject: "Clinical Execution & Materials",
  topic: "Embryology of Nasal Structures",
  difficulty: "hard",
  question: "A patient presents with a congenital deviation of the nasal septum identified on imaging. There is no history of trauma or surgical intervention. Other midfacial structures appear normally developed. Which embryologic structure gives rise to the nasal septum?",
  choices: [
    { key: "A", text: "Frontonasal process" },
    { key: "B", text: "Medial nasal process" },
    { key: "C", text: "First pharyngeal arch" },
    { key: "D", text: "Maxillary process" }
  ],
  correctAnswer: "A",

  rationale: "**A. Frontonasal process**\nThe nasal septum develops from the frontonasal process, which contributes to midline nasal structures during embryologic development.",

  incorrectRationales: {
    B: "**B. Medial nasal process**\nIncorrect — The medial nasal process contributes to formation of the philtrum and primary palate, not the nasal septum.",
    C: "**C. First pharyngeal arch**\nIncorrect — The first pharyngeal arch forms the mandible and muscles of mastication.",
    D: "**D. Maxillary process**\nIncorrect — The maxillary process forms the lateral upper jaw and facial structures."
  },

  boardTrap: "Do not confuse medial nasal process with septal development. Septum formation is derived from the frontonasal process.",
  memoryHook: "Septum starts at the front. Frontonasal."
},
{
  id: "H&N-029",
  type: "head-and-neck",
  subject: "Clinical Execution & Materials",
  topic: "TMJ Innervation",
  difficulty: "hard",
  question: "A patient presents with unilateral temporomandibular joint pain exacerbated by opening and lateral movement. There is no pain on palpation of the muscles of mastication. Sensation to the cheek, lips, and tongue is intact. Imaging shows no bony degeneration, suggesting a neural origin of the joint discomfort. Which nerve provides sensory innervation to the temporomandibular joint, and from which nerve is it a branch?",
  choices: [
    { key: "A", text: "Masseteric nerve, branch of the maxillary division of the trigeminal nerve" },
    { key: "B", text: "Buccal nerve, branch of the mandibular division of the trigeminal nerve" },
    { key: "C", text: "Auriculotemporal nerve, branch of the mandibular division of the trigeminal nerve" },
    { key: "D", text: "Greater auricular nerve, branch of the cervical plexus" }
  ],
  correctAnswer: "C",

  rationale: "**C. Auriculotemporal nerve, branch of the mandibular division of the trigeminal nerve**\nThe temporomandibular joint receives sensory innervation primarily from the auriculotemporal nerve. This nerve is a branch of the mandibular division of the trigeminal nerve and supplies the TMJ capsule and surrounding structures.",

  incorrectRationales: {
    A: "**A. Masseteric nerve, branch of the maxillary division of the trigeminal nerve**\nIncorrect — The masseteric nerve provides motor innervation to the masseter muscle, not TMJ sensation.",
    B: "**B. Buccal nerve, branch of the mandibular division of the trigeminal nerve**\nIncorrect — The buccal nerve supplies sensory innervation to the cheek mucosa, not the TMJ.",
    D: "**D. Greater auricular nerve, branch of the cervical plexus**\nIncorrect — The greater auricular nerve supplies skin over the parotid region and ear, not the TMJ."
  },

  boardTrap: "Do not assume TMJ pain originates from muscles. TMJ sensation is via the auriculotemporal nerve, a V3 branch.",
  memoryHook: "TMJ talks through auriculotemporal. Auriculotemporal is V3."
},
{
  id: "H&N-030",
  type: "head-and-neck",
  subject: "Clinical Execution & Materials",
  topic: "Lymphatic Drainage of Floor of Mouth",
  difficulty: "hard",
  question: "A patient presents with a firm, tender swelling in the floor of the mouth near the midline. Over several days, the swelling progresses inferiorly with palpable enlargement beneath the mandible and later along the cervical chain. No involvement of the parotid region is noted. Which lymphatic drainage sequence most accurately explains the progression of swelling from the floor of the mouth?",
  choices: [
    { key: "A", text: "Submandibular → Submental → Deep cervical" },
    { key: "B", text: "Submental → Submandibular → Deep cervical" },
    { key: "C", text: "Submental → Parotid → Deep cervical" },
    { key: "D", text: "Submandibular → Parotid → Deep cervical" }
  ],
  correctAnswer: "B",

  rationale: "**B. Submental → Submandibular → Deep cervical**\nLymph from the midline floor of the mouth first drains to the submental lymph nodes, then passes to the submandibular nodes, and finally to the deep cervical lymph nodes.",

  incorrectRationales: {
    A: "**A. Submandibular → Submental → Deep cervical**\nIncorrect — Reverses the initial drainage pathway.",
    C: "**C. Submental → Parotid → Deep cervical**\nIncorrect — The parotid nodes are not involved in floor of mouth drainage.",
    D: "**D. Submandibular → Parotid → Deep cervical**\nIncorrect — Parotid nodes do not receive lymph from the floor of the mouth."
  },

  boardTrap: "Do not default to submandibular for all oral infections. Midline floor drains to submental first.",
  memoryHook: "Midline floor starts submental, then flows back and down."
},
{
  id: "H&N-031",
  type: "head-and-neck",
  subject: "Clinical Execution & Materials",
  topic: "Lymphatic Drainage of Lower Lip",
  difficulty: "medium",
  question: "A patient presents with localized swelling and tenderness of the lower lip following trauma. No swelling is noted in the posterior oral cavity or parotid region. Palpation reveals enlargement of lymph nodes beneath the chin. Which lymph nodes primarily drain the lower lip?",
  choices: [
    { key: "A", text: "Submental lymph nodes" },
    { key: "B", text: "Submandibular lymph nodes" },
    { key: "C", text: "Deep cervical lymph nodes" },
    { key: "D", text: "Preauricular lymph nodes" }
  ],
  correctAnswer: "A",

  rationale: "**A. Submental lymph nodes**\nThe lower lip primarily drains to the submental lymph nodes, particularly when involvement is near the midline.",

  incorrectRationales: {
    B: "**B. Submandibular lymph nodes**\nIncorrect — Submandibular nodes drain lateral facial structures and posterior oral tissues.",
    C: "**C. Deep cervical lymph nodes**\nIncorrect — Deep cervical nodes receive lymph after it passes through superficial nodes.",
    D: "**D. Preauricular lymph nodes**\nIncorrect — Preauricular nodes drain the lateral face and parotid region."
  },

  boardTrap: "Do not default to submandibular for all lip drainage. Lower lip, especially midline, drains first to submental nodes.",
  memoryHook: "Lower lip goes submental."
},
{
  id: "H&N-032",
  type: "head-and-neck",
  subject: "Clinical Execution & Materials",
  topic: "Trigeminal Foramina V3",
  difficulty: "hard",
  question: "A patient presents with loss of mandibular tooth sensation, weakness of mastication, and intact maxillary and ophthalmic sensory function. Imaging localizes a lesion affecting the mandibular division of the trigeminal nerve as it exits the cranial cavity. Through which opening does the mandibular division of the trigeminal nerve exit the skull?",
  choices: [
    { key: "A", text: "Foramen ovale" },
    { key: "B", text: "Foramen rotundum" },
    { key: "C", text: "Superior orbital fissure" },
    { key: "D", text: "Foramen spinosum" }
  ],
  correctAnswer: "A",

  rationale: "**A. Foramen ovale**\nThe mandibular division of the trigeminal nerve exits the skull through the foramen ovale. This division carries both sensory fibers to the mandibular region and motor fibers to the muscles of mastication.",

  incorrectRationales: {
    B: "**B. Foramen rotundum**\nIncorrect — Transmits the maxillary division of the trigeminal nerve.",
    C: "**C. Superior orbital fissure**\nIncorrect — Transmits the ophthalmic division of the trigeminal nerve.",
    D: "**D. Foramen spinosum**\nIncorrect — Transmits the middle meningeal artery, not a trigeminal division."
  },

  boardTrap: "Each trigeminal division exits through a specific opening. V3 is the only division that exits through the foramen ovale.",
  memoryHook: "V3 goes oval. Foramen ovale."
},
{
  id: "H&N-033",
  type: "head-and-neck",
  subject: "Clinical Execution & Materials",
  topic: "Cranial Sutures Coronal",
  difficulty: "medium",
  question: "A patient presents with a history of cranial trauma affecting the anterior portion of the skull. Imaging shows separation along a major cranial suture that forms the boundary between the frontal bone and the bones forming the cranial vault. Which cranial suture separates the frontal bone from the parietal bones?",
  choices: [
    { key: "A", text: "Sagittal suture" },
    { key: "B", text: "Lambdoid suture" },
    { key: "C", text: "Coronal suture" },
    { key: "D", text: "Squamous suture" }
  ],
  correctAnswer: "C",

  rationale: "**C. Coronal suture**\nThe coronal suture separates the frontal bone from the parietal bones. It runs transversely across the skull and is a commonly tested cranial landmark on the NBDHE.",

  incorrectRationales: {
    A: "**A. Sagittal suture**\nIncorrect — Separates the two parietal bones.",
    B: "**B. Lambdoid suture**\nIncorrect — Separates the occipital bone from the parietal bones.",
    D: "**D. Squamous suture**\nIncorrect — Separates the temporal bone from adjacent cranial bones."
  },

  boardTrap: "Sagittal and coronal both involve parietal bones, but only the coronal suture involves the frontal bone.",
  memoryHook: "Coronal crowns the front."
},
{
  id: "H&N-034",
  type: "head-and-neck",
  subject: "Clinical Execution & Materials",
  topic: "Embryology Teratogens",
  difficulty: "medium",
  question: "A pregnant patient reports unintentional exposure to a medication during the first trimester. Subsequent imaging reveals abnormal development of craniofacial structures. The timing of exposure corresponds with early embryologic organ formation. Which term best describes an agent that can cause developmental abnormalities in an embryo or fetus?",
  choices: [
    { key: "A", text: "Mutagen" },
    { key: "B", text: "Pathogen" },
    { key: "C", text: "Carcinogen" },
    { key: "D", text: "Teratogen" }
  ],
  correctAnswer: "D",

  rationale: "**D. Teratogen**\nA teratogen is any agent that interferes with normal embryonic or fetal development, resulting in structural or functional abnormalities. Effects are most severe during periods of rapid organ formation.",

  incorrectRationales: {
    A: "**A. Mutagen**\nIncorrect — A mutagen causes genetic mutations but does not necessarily produce congenital defects.",
    B: "**B. Pathogen**\nIncorrect — A pathogen causes infection, not developmental malformation.",
    C: "**C. Carcinogen**\nIncorrect — A carcinogen increases cancer risk, not embryologic defects."
  },

  boardTrap: "Do not confuse mutagen or carcinogen with teratogen. Teratogens specifically disrupt embryologic development.",
  memoryHook: "Teratogen targets development."
},
{
  id: "H&N-035",
  type: "head-and-neck",
  subject: "Clinical Execution & Materials",
  topic: "Genial Tubercles",
  difficulty: "hard",
  question: "A patient presents with altered tongue control and difficulty stabilizing the floor of the mouth during swallowing. Imaging reveals a paired midline bony prominence on the lingual surface of the mandible that serves as a key muscular attachment site. The genial tubercles are associated with attachment of which muscles?",
  choices: [
    { key: "A", text: "Mylohyoid and hyoglossus" },
    { key: "B", text: "Genioglossus and geniohyoid" },
    { key: "C", text: "Styloglossus and palatoglossus" },
    { key: "D", text: "Digastric and stylohyoid" }
  ],
  correctAnswer: "B",

  rationale: "**B. Genioglossus and geniohyoid**\nThe genial tubercles are paired bony projections on the lingual surface of the mandible that serve as the origin for the genioglossus and geniohyoid muscles.",

  incorrectRationales: {
    A: "**A. Mylohyoid and hyoglossus**\nIncorrect — These muscles do not originate from the genial tubercles.",
    C: "**C. Styloglossus and palatoglossus**\nIncorrect — These muscles originate from the styloid process or soft palate.",
    D: "**D. Digastric and stylohyoid**\nIncorrect — These muscles attach to the hyoid or styloid region, not the genial tubercles."
  },

  boardTrap: "Only muscles with the prefix genio attach to the genial tubercles.",
  memoryHook: "Genial tubercles anchor the genio muscles."
},
{
  id: "H&N-036",
  type: "head-and-neck",
  subject: "Clinical Execution & Materials",
  topic: "Mental Foramen Contents",
  difficulty: "medium",
  question: "A patient reports persistent numbness of the lower lip and chin following a mandibular surgical procedure. Pulpal sensation of the mandibular anterior teeth remains intact. Imaging confirms no damage to posterior mandibular structures. Which structure passes through the mental foramen?",
  choices: [
    { key: "A", text: "Mental nerve and vessels" },
    { key: "B", text: "Inferior alveolar nerve" },
    { key: "C", text: "Lingual nerve" },
    { key: "D", text: "Incisive nerve" }
  ],
  correctAnswer: "A",

  rationale: "**A. Mental nerve and vessels**\nThe mental foramen transmits the mental nerve and accompanying blood vessels. This nerve provides sensory innervation to the lower lip, chin, and labial soft tissues anterior to the foramen.",

  incorrectRationales: {
    B: "**B. Inferior alveolar nerve**\nIncorrect — The inferior alveolar nerve travels within the mandibular canal before dividing.",
    C: "**C. Lingual nerve**\nIncorrect — The lingual nerve does not pass through the mental foramen.",
    D: "**D. Incisive nerve**\nIncorrect — The incisive nerve continues anteriorly within the mandibular canal and does not exit the mental foramen."
  },

  boardTrap: "Only the mental nerve exits the mental foramen. The incisive nerve remains within the bone.",
  memoryHook: "Mental foramen equals mental nerve out."
},
{
  id: "H&N-037",
  type: "head-and-neck",
  subject: "Clinical Execution & Materials",
  topic: "Mental Foramen Location",
  difficulty: "medium",
  question: "A patient requires local anesthesia for a mandibular premolar procedure. Accurate landmark identification is necessary to avoid postoperative paresthesia of the lower lip and chin. Where is the mental foramen most commonly located?",
  choices: [
    { key: "A", text: "Near the apex of the mandibular second premolar" },
    { key: "B", text: "Near the apex of the mandibular first molar" },
    { key: "C", text: "At the mandibular symphysis" },
    { key: "D", text: "Posterior to the mandibular third molar" }
  ],
  correctAnswer: "A",

  rationale: "**A. Near the apex of the mandibular second premolar**\nThe mental foramen is most commonly located near the apex of the mandibular second premolar. This landmark is critical for local anesthesia and surgical procedures involving the anterior mandible.",

  incorrectRationales: {
    B: "**B. Near the apex of the mandibular first molar**\nIncorrect — The mental foramen is anterior to the molar region.",
    C: "**C. At the mandibular symphysis**\nIncorrect — The symphysis is midline and does not contain the mental foramen.",
    D: "**D. Posterior to the mandibular third molar**\nIncorrect — The mental foramen is not located in the third molar region."
  },

  boardTrap: "Tooth numbering may shift in answer choices, but the consistent landmark is the second premolar region.",
  memoryHook: "Mental foramen sits by second premolar."
},
{
  id: "H&N-038",
  type: "head-and-neck",
  subject: "Clinical Execution & Materials",
  topic: "External Carotid Artery",
  difficulty: "medium",
  question: "A patient presents with compromised blood flow to the facial tissues following trauma to a major cervical vessel. Neurologic examination is normal, and cerebral perfusion is unaffected. The deficit is isolated to structures of the face, scalp, and oral cavity. Which vessel is primarily responsible for supplying blood to the face and oral cavity?",
  choices: [
    { key: "A", text: "Internal carotid artery" },
    { key: "B", text: "Vertebral artery" },
    { key: "C", text: "External carotid artery" },
    { key: "D", text: "Common carotid artery" }
  ],
  correctAnswer: "C",

  rationale: "**C. External carotid artery**\nThe external carotid artery supplies blood to the face, scalp, oral cavity, nasal cavity, and associated soft tissues. It gives rise to multiple branches responsible for extracranial circulation.",

  incorrectRationales: {
    A: "**A. Internal carotid artery**\nIncorrect — Supplies the brain and intracranial structures, not the face.",
    B: "**B. Vertebral artery**\nIncorrect — Supplies posterior brain circulation.",
    D: "**D. Common carotid artery**\nIncorrect — Divides into internal and external branches and does not directly supply target tissues."
  },

  boardTrap: "Separate cerebral circulation from facial circulation. Face equals external carotid.",
  memoryHook: "External feeds the face."
},
{
  id: "H&N-039",
  type: "head-and-neck",
  subject: "Clinical Execution & Materials",
  topic: "Lingual Artery",
  difficulty: "medium",
  question: "A patient presents with ischemic changes affecting the tongue and floor of the mouth following ligation of a specific branch of the external carotid artery. Facial skin perfusion remains intact, and there are no neurologic deficits. Which artery is primarily responsible for supplying blood to the tongue?",
  choices: [
    { key: "A", text: "Facial artery" },
    { key: "B", text: "Maxillary artery" },
    { key: "C", text: "Lingual artery" },
    { key: "D", text: "Superior thyroid artery" }
  ],
  correctAnswer: "C",

  rationale: "**C. Lingual artery**\nThe lingual artery is the primary blood supply to the tongue and floor of the mouth. Compromise of this vessel directly affects tongue perfusion.",

  incorrectRationales: {
    A: "**A. Facial artery**\nIncorrect — Supplies facial soft tissues and lips, not the tongue.",
    B: "**B. Maxillary artery**\nIncorrect — Supplies deep facial structures and maxillary region.",
    D: "**D. Superior thyroid artery**\nIncorrect — Supplies thyroid gland and nearby laryngeal structures."
  },

  boardTrap: "Do not default to facial artery for all oral structures. Tongue perfusion is via the lingual artery.",
  memoryHook: "Lingual artery feeds the tongue."
},
{
  id: "H&N-040",
  type: "head-and-neck",
  subject: "Clinical Execution & Materials",
  topic: "Maxillary Artery",
  difficulty: "hard",
  question: "A patient experiences significant bleeding following a maxillary posterior surgical procedure. The bleeding source is traced to a deep branch of the external carotid artery supplying structures within the maxilla and nasal cavity. Which branch of the external carotid artery supplies deep facial structures including the maxilla, nasal cavity, and palate?",
  choices: [
    { key: "A", text: "Facial artery" },
    { key: "B", text: "Maxillary artery" },
    { key: "C", text: "Superior thyroid artery" },
    { key: "D", text: "Lingual artery" }
  ],
  correctAnswer: "B",

  rationale: "**B. Maxillary artery**\nThe maxillary artery is a terminal branch of the external carotid artery that supplies deep structures of the face, including the maxilla, nasal cavity, palate, and muscles of mastication.",

  incorrectRationales: {
    A: "**A. Facial artery**\nIncorrect — Primarily supplies superficial facial structures.",
    C: "**C. Superior thyroid artery**\nIncorrect — Supplies the thyroid gland and laryngeal region.",
    D: "**D. Lingual artery**\nIncorrect — Supplies the tongue and floor of the mouth."
  },

  boardTrap: "Deep maxillary and nasal structures are supplied by the maxillary artery, not the facial artery.",
  memoryHook: "Maxillary goes deep."
},
{
  id: "H&N-042",
  type: "head-and-neck",
  subject: "Clinical Execution & Materials",
  topic: "Facial Artery Landmark",
  difficulty: "hard",
  question: "A patient presents with profuse bleeding following a laceration at the inferior border of the mandible anterior to the masseter muscle. Compression at a specific anatomic landmark successfully reduces the bleeding. Which vessel is most likely involved at this location?",
  choices: [
    { key: "A", text: "Lingual artery" },
    { key: "B", text: "Maxillary artery" },
    { key: "C", text: "Inferior alveolar artery" },
    { key: "D", text: "Facial artery" }
  ],
  correctAnswer: "D",

  rationale: "**D. Facial artery**\nThe facial artery crosses the inferior border of the mandible just anterior to the masseter muscle. This superficial location makes it susceptible to injury and allows it to be palpated or compressed at this landmark.",

  incorrectRationales: {
    A: "**A. Lingual artery**\nIncorrect — Supplies the tongue and floor of the mouth.",
    B: "**B. Maxillary artery**\nIncorrect — Supplies deep facial and maxillary structures.",
    C: "**C. Inferior alveolar artery**\nIncorrect — Travels within the mandibular canal supplying mandibular teeth."
  },

  boardTrap: "Surface anatomy matters. The only artery crossing the mandible anterior to the masseter is the facial artery.",
  memoryHook: "Facial artery crosses the mandible in front of the masseter."
},
{
  id: "H&N-043",
  type: "head-and-neck",
  subject: "Clinical Execution & Materials",
  topic: "Posterior Brain Circulation",
  difficulty: "medium",
  question: "A patient presents with reduced blood supply to the brainstem and posterior cerebral structures. Facial circulation and oral tissues remain unaffected. Imaging localizes the compromise to a vessel system distinct from the carotid arteries. Which artery primarily contributes to the posterior circulation of the brain?",
  choices: [
    { key: "A", text: "Vertebral artery" },
    { key: "B", text: "External carotid artery" },
    { key: "C", text: "Internal carotid artery" },
    { key: "D", text: "Facial artery" }
  ],
  correctAnswer: "A",

  rationale: "**A. Vertebral artery**\nThe vertebral arteries ascend through the cervical vertebrae and join to form the basilar artery, supplying the brainstem, cerebellum, and posterior portions of the brain.",

  incorrectRationales: {
    B: "**B. External carotid artery**\nIncorrect — Supplies the face, scalp, and oral cavity.",
    C: "**C. Internal carotid artery**\nIncorrect — Supplies the anterior circulation of the brain.",
    D: "**D. Facial artery**\nIncorrect — Supplies superficial facial structures."
  },

  boardTrap: "Not all cerebral circulation is carotid. Posterior brain equals vertebral system.",
  memoryHook: "Vertebral feeds the back of the brain."
},
{
  id: "H&N-044",
  type: "head-and-neck",
  subject: "Clinical Execution & Materials",
  topic: "Greater Palatine Artery",
  difficulty: "hard",
  question: "A patient develops prolonged bleeding from the hard palate following a periodontal procedure in the posterior maxilla. The source is traced to a vessel supplying the palatal mucosa and bone. Which artery is most directly responsible for supplying the hard palate?",
  choices: [
    { key: "A", text: "Facial artery" },
    { key: "B", text: "Greater palatine artery" },
    { key: "C", text: "Lingual artery" },
    { key: "D", text: "Superior thyroid artery" }
  ],
  correctAnswer: "B",

  rationale: "**B. Greater palatine artery**\nThe greater palatine artery supplies the hard palate and palatal gingiva. It is a branch of the maxillary artery and is a common source of palatal bleeding during dental procedures.",

  incorrectRationales: {
    A: "**A. Facial artery**\nIncorrect — Primarily supplies facial soft tissues and lips.",
    C: "**C. Lingual artery**\nIncorrect — Supplies the tongue and floor of the mouth.",
    D: "**D. Superior thyroid artery**\nIncorrect — Supplies the thyroid gland and laryngeal region."
  },

  boardTrap: "Palatal tissues are supplied by branches of the maxillary artery, not the facial artery.",
  memoryHook: "Palate equals greater palatine."
},
{
  id: "H&N-045",
  type: "head-and-neck",
  subject: "Clinical Execution & Materials",
  topic: "Occipital Artery",
  difficulty: "hard",
  question: "A patient presents with normal perfusion of the oral cavity despite ligation of one branch of the external carotid artery during neck surgery. No ischemic changes are noted in the lips, tongue, palate, or gingiva. Which branch of the external carotid artery does not supply the oral cavity?",
  choices: [
    { key: "A", text: "Lingual artery" },
    { key: "B", text: "Facial artery" },
    { key: "C", text: "Maxillary artery" },
    { key: "D", text: "Occipital artery" }
  ],
  correctAnswer: "D",

  rationale: "**D. Occipital artery**\nThe occipital artery supplies the posterior scalp and occipital region. It does not contribute to blood supply of the oral cavity.",

  incorrectRationales: {
    A: "**A. Lingual artery**\nIncorrect — Supplies the tongue and floor of the mouth.",
    B: "**B. Facial artery**\nIncorrect — Supplies lips and facial soft tissues.",
    C: "**C. Maxillary artery**\nIncorrect — Supplies maxilla, palate, and deep oral structures."
  },

  boardTrap: "Not all external carotid branches are oral. Occipital artery is posterior scalp only.",
  memoryHook: "Occipital goes back, not oral."
},
{
  id: "H&N-046",
  type: "head-and-neck",
  subject: "Clinical Execution & Materials",
  topic: "Internal Carotid Artery Supply",
  difficulty: "medium",
  question: "A patient sustains vascular compromise affecting vision and higher cortical function. Blood supply to the face, oral cavity, and scalp remains intact. The affected vessel ascends into the cranial cavity without contributing to extracranial tissues. Which structure is primarily supplied by the internal carotid artery?",
  choices: [
    { key: "A", text: "Facial muscles and lips" },
    { key: "B", text: "Brain" },
    { key: "C", text: "Oral mucosa and gingiva" },
    { key: "D", text: "Scalp and posterior neck" }
  ],
  correctAnswer: "B",

  rationale: "**B. Brain**\nThe internal carotid artery supplies the brain and intracranial structures. It does not provide branches to the face, scalp, or oral cavity.",

  incorrectRationales: {
    A: "**A. Facial muscles and lips**\nIncorrect — Supplied by branches of the external carotid artery.",
    C: "**C. Oral mucosa and gingiva**\nIncorrect — Supplied by external carotid branches.",
    D: "**D. Scalp and posterior neck**\nIncorrect — Supplied by external carotid branches."
  },

  boardTrap: "Separate intracranial from extracranial circulation. Internal carotid equals brain.",
  memoryHook: "Internal carotid goes inside to the brain."
},
{
  id: "H&N-047",
  type: "head-and-neck",
  subject: "Clinical Execution & Materials",
  topic: "External Carotid Terminal Branches",
  difficulty: "hard",
  question: "A patient undergoes surgical management involving ligation of the external carotid artery. Postoperative assessment confirms loss of blood supply to multiple facial and maxillary structures supplied by its terminal branches. Which vessels are the two terminal branches of the external carotid artery?",
  choices: [
    { key: "A", text: "Maxillary artery and superficial temporal artery" },
    { key: "B", text: "Facial artery and lingual artery" },
    { key: "C", text: "Internal carotid artery and vertebral artery" },
    { key: "D", text: "Occipital artery and posterior auricular artery" }
  ],
  correctAnswer: "A",

  rationale: "**A. Maxillary artery and superficial temporal artery**\nThe external carotid artery terminates by dividing into the maxillary artery and the superficial temporal artery. These terminal branches supply deep facial structures and the scalp.",

  incorrectRationales: {
    B: "**B. Facial artery and lingual artery**\nIncorrect — These are branches of the external carotid artery, not terminal branches.",
    C: "**C. Internal carotid artery and vertebral artery**\nIncorrect — These arteries are not branches of the external carotid artery.",
    D: "**D. Occipital artery and posterior auricular artery**\nIncorrect — These are posterior branches, not terminal branches."
  },

  boardTrap: "Many facial branches distract from the concept of termination. Only maxillary and superficial temporal are terminal.",
  memoryHook: "External carotid ends as maxillary and superficial temporal."
},
{
  id: "H&N-048",
  type: "head-and-neck",
  subject: "Clinical Execution & Materials",
  topic: "Inferior Labial Artery",
  difficulty: "hard",
  question: "A patient presents with localized ischemia of the lower lip following trauma. Sensation of the chin is intact, and mandibular teeth respond normally to vitality testing. Which artery most directly supplies the lower lip?",
  choices: [
    { key: "A", text: "Mental artery" },
    { key: "B", text: "Inferior alveolar artery" },
    { key: "C", text: "Inferior labial artery" },
    { key: "D", text: "Submental artery" }
  ],
  correctAnswer: "C",

  rationale: "**C. Inferior labial artery**\nThe inferior labial artery, a branch of the facial artery, supplies the lower lip.",

  incorrectRationales: {
    A: "**A. Mental artery**\nIncorrect — Supplies chin and lower lip sensation region, not primary arterial supply.",
    B: "**B. Inferior alveolar artery**\nIncorrect — Supplies mandibular teeth.",
    D: "**D. Submental artery**\nIncorrect — Supplies floor of the mouth and submental region."
  },

  boardTrap: "Do not confuse sensory region with arterial supply. Lower lip blood flow comes from inferior labial.",
  memoryHook: "Lower lip is labial."
},
{
  id: "H&N-049",
  type: "head-and-neck",
  subject: "Clinical Execution & Materials",
  topic: "Posterior Superior Alveolar Artery",
  difficulty: "hard",
  question: "A patient experiences prolonged bleeding following extraction of a maxillary molar. The bleeding source tracks posteriorly within the maxilla rather than the facial soft tissues. Which artery most directly supplies the maxillary posterior teeth?",
  choices: [
    { key: "A", text: "Greater palatine artery" },
    { key: "B", text: "Infraorbital artery" },
    { key: "C", text: "Posterior superior alveolar artery" },
    { key: "D", text: "Facial artery" }
  ],
  correctAnswer: "C",

  rationale: "**C. Posterior superior alveolar artery**\nThe posterior superior alveolar artery supplies the maxillary posterior teeth and alveolar bone.",

  incorrectRationales: {
    A: "**A. Greater palatine artery**\nIncorrect — Supplies the hard palate.",
    B: "**B. Infraorbital artery**\nIncorrect — Supplies anterior maxillary structures.",
    D: "**D. Facial artery**\nIncorrect — Supplies facial soft tissues."
  },

  boardTrap: "The question asks for direct supply to posterior maxillary teeth, not the parent vessel.",
  memoryHook: "PSA feeds posterior maxillary teeth."
},
{
  id: "H&N-050",
  type: "head-and-neck",
  subject: "Clinical Execution & Materials",
  topic: "Inferior Alveolar Artery",
  difficulty: "hard",
  question: "A patient develops hematoma formation following a mandibular block injection. Imaging shows vascular injury within the mandibular canal accompanying a major sensory nerve. Which artery travels with the inferior alveolar nerve?",
  choices: [
    { key: "A", text: "Mental artery" },
    { key: "B", text: "Inferior alveolar artery" },
    { key: "C", text: "Lingual artery" },
    { key: "D", text: "Facial artery" }
  ],
  correctAnswer: "B",

  rationale: "**B. Inferior alveolar artery**\nThe inferior alveolar artery accompanies the inferior alveolar nerve through the mandibular canal and supplies mandibular teeth.",

  incorrectRationales: {
    A: "**A. Mental artery**\nIncorrect — Exits the mental foramen.",
    C: "**C. Lingual artery**\nIncorrect — Supplies the tongue.",
    D: "**D. Facial artery**\nIncorrect — Supplies facial soft tissues."
  },

  boardTrap: "The artery traveling within the canal matches the nerve name. Inferior alveolar travels with inferior alveolar.",
  memoryHook: "Nerve and artery share the canal. Inferior alveolar."
},
{
  id: "H&N-051",
  type: "head-and-neck",
  subject: "Clinical Execution & Materials",
  topic: "Parotid Parasympathetic Innervation",
  difficulty: "hard",
  question: "A patient presents with marked xerostomia isolated to the parotid region following a neurologic injury. Salivary flow from the submandibular and sublingual glands is unaffected. Facial sensation and taste to the anterior tongue remain intact. Parasympathetic secretomotor innervation to the parotid gland is carried by which nerve?",
  choices: [
    { key: "A", text: "Chorda tympani" },
    { key: "B", text: "Greater petrosal nerve" },
    { key: "C", text: "Auriculotemporal nerve" },
    { key: "D", text: "Glossopharyngeal nerve" }
  ],
  correctAnswer: "C",

  rationale: "**C. Auriculotemporal nerve**\nParasympathetic fibers destined for the parotid gland ultimately reach the gland via the auriculotemporal nerve.",

  incorrectRationales: {
    A: "**A. Chorda tympani**\nIncorrect — Carries parasympathetic fibers to submandibular and sublingual glands.",
    B: "**B. Greater petrosal nerve**\nIncorrect — Supplies lacrimal and nasal glands.",
    D: "**D. Glossopharyngeal nerve**\nIncorrect — Provides preganglionic fibers but does not directly innervate the gland."
  },

  boardTrap: "The board tests final carrier, not origin. Parotid secretomotor fibers arrive via auriculotemporal.",
  memoryHook: "Parotid saliva rides auriculotemporal."
},
{
  id: "H&N-054",
  type: "head-and-neck",
  subject: "Clinical Execution & Materials",
  topic: "Parotid Parasympathetic Origin",
  difficulty: "hard",
  question: "A patient presents with loss of salivary flow from the parotid gland following a lesion affecting preganglionic parasympathetic fibers. Sensory innervation to the face and auricular region is intact, but secretory function to the parotid gland is absent. Preganglionic parasympathetic fibers destined for the parotid gland originate from which nerve?",
  choices: [
    { key: "A", text: "Facial nerve" },
    { key: "B", text: "Trigeminal nerve" },
    { key: "C", text: "Auriculotemporal nerve" },
    { key: "D", text: "Glossopharyngeal nerve" }
  ],
  correctAnswer: "D",

  rationale: "**D. Glossopharyngeal nerve**\nPreganglionic parasympathetic fibers to the parotid gland originate from the glossopharyngeal nerve. These fibers synapse in the otic ganglion before reaching the gland via the auriculotemporal nerve.",

  incorrectRationales: {
    A: "**A. Facial nerve**\nIncorrect — Supplies parasympathetic fibers to submandibular, sublingual, lacrimal, and nasal glands.",
    B: "**B. Trigeminal nerve**\nIncorrect — Provides sensory innervation and serves as a carrier pathway, not the origin.",
    C: "**C. Auriculotemporal nerve**\nIncorrect — Carries postganglionic fibers but is not the nerve of origin."
  },

  boardTrap: "Differentiate origin from final carrier. Parotid parasympathetic fibers originate from glossopharyngeal.",
  memoryHook: "Parotid starts with glossopharyngeal."
},
{
  id: "H&N-055",
  type: "head-and-neck",
  subject: "Clinical Execution & Materials",
  topic: "Submandibular Ganglion",
  difficulty: "hard",
  question: "A patient presents with absent salivary secretion from the submandibular and sublingual glands following injury to a parasympathetic ganglion. Tongue sensation to touch is intact, but taste to the anterior tongue is reduced. In which ganglion do parasympathetic fibers synapse before supplying the submandibular and sublingual glands?",
  choices: [
    { key: "A", text: "Otic ganglion" },
    { key: "B", text: "Pterygopalatine ganglion" },
    { key: "C", text: "Submandibular ganglion" },
    { key: "D", text: "Geniculate ganglion" }
  ],
  correctAnswer: "C",

  rationale: "**C. Submandibular ganglion**\nParasympathetic fibers carried by the chorda tympani synapse in the submandibular ganglion before supplying the submandibular and sublingual glands.",

  incorrectRationales: {
    A: "**A. Otic ganglion**\nIncorrect — Associated with parotid gland innervation.",
    B: "**B. Pterygopalatine ganglion**\nIncorrect — Associated with lacrimal and nasal glands.",
    D: "**D. Geniculate ganglion**\nIncorrect — Associated with facial nerve sensory cell bodies, not salivary synapse."
  },

  boardTrap: "Each salivary pathway has its own ganglion. Submandibular and sublingual glands synapse in the submandibular ganglion.",
  memoryHook: "Submandibular glands synapse at submandibular ganglion."
},
{
  id: "H&N-056",
  type: "head-and-neck",
  subject: "Clinical Execution & Materials",
  topic: "Lingual Nerve Postganglionic Fibers",
  difficulty: "hard",
  question: "A patient presents with absent salivary flow from the submandibular gland following injury to a nerve that physically carries parasympathetic fibers after synapse. Taste to the anterior tongue is also reduced. Which nerve carries postganglionic parasympathetic fibers to the submandibular gland?",
  choices: [
    { key: "A", text: "Chorda tympani" },
    { key: "B", text: "Glossopharyngeal nerve" },
    { key: "C", text: "Lingual nerve" },
    { key: "D", text: "Facial nerve" }
  ],
  correctAnswer: "C",

  rationale: "**C. Lingual nerve**\nPostganglionic parasympathetic fibers from the submandibular ganglion travel to the submandibular and sublingual glands via the lingual nerve.",

  incorrectRationales: {
    A: "**A. Chorda tympani**\nIncorrect — Carries preganglionic parasympathetic fibers.",
    B: "**B. Glossopharyngeal nerve**\nIncorrect — Supplies preganglionic fibers to the parotid gland.",
    D: "**D. Facial nerve**\nIncorrect — Is the parent nerve but not the final carrier."
  },

  boardTrap: "Separate origin, synapse, and carrier. Chorda brings fibers in. Lingual delivers them out.",
  memoryHook: "Lingual delivers saliva."
},
{
  id: "H&N-057",
  type: "head-and-neck",
  subject: "Clinical Execution & Materials",
  topic: "Otic Ganglion",
  difficulty: "hard",
  question: "A patient develops complete loss of salivary secretion from the parotid gland following damage to a parasympathetic ganglion located near the mandibular nerve. Which ganglion is associated with parasympathetic innervation of the parotid gland?",
  choices: [
    { key: "A", text: "Submandibular ganglion" },
    { key: "B", text: "Geniculate ganglion" },
    { key: "C", text: "Pterygopalatine ganglion" },
    { key: "D", text: "Otic ganglion" }
  ],
  correctAnswer: "D",

  rationale: "**D. Otic ganglion**\nParasympathetic fibers to the parotid gland synapse in the otic ganglion before reaching the gland.",

  incorrectRationales: {
    A: "**A. Submandibular ganglion**\nIncorrect — Associated with submandibular and sublingual glands.",
    B: "**B. Geniculate ganglion**\nIncorrect — Associated with facial nerve sensory cell bodies.",
    C: "**C. Pterygopalatine ganglion**\nIncorrect — Associated with lacrimal and nasal glands."
  },

  boardTrap: "Each major salivary gland has its own ganglion. Parotid uses otic.",
  memoryHook: "Parotid synapses at otic."
},
{
  id: "H&N-058",
  type: "head-and-neck",
  subject: "Clinical Execution & Materials",
  topic: "Chorda Tympani Sparing",
  difficulty: "hard",
  question: "A patient sustains injury to the chorda tympani nerve. Salivary output is reduced in specific glands, while others remain unaffected. Which salivary gland would not be affected by injury to the chorda tympani?",
  choices: [
    { key: "A", text: "Sublingual gland" },
    { key: "B", text: "Submandibular gland" },
    { key: "C", text: "Parotid gland" },
    { key: "D", text: "Minor glands of the floor of the mouth" }
  ],
  correctAnswer: "C",

  rationale: "**C. Parotid gland**\nThe parotid gland receives parasympathetic innervation from the glossopharyngeal nerve, not the chorda tympani.",

  incorrectRationales: {
    A: "**A. Sublingual gland**\nIncorrect — Receives parasympathetic input via chorda tympani.",
    B: "**B. Submandibular gland**\nIncorrect — Receives parasympathetic input via chorda tympani.",
    D: "**D. Minor glands of the floor of the mouth**\nIncorrect — Receive parasympathetic input through the submandibular pathway."
  },

  boardTrap: "The board often tests what is spared. Chorda tympani affects submandibular and sublingual glands, not parotid.",
  memoryHook: "Chorda skips parotid."
},
{
  id: "H&N-059",
  type: "head-and-neck",
  subject: "Clinical Execution & Materials",
  topic: "Lateral Pterygoid Function",
  difficulty: "medium",
  question: "A patient presents with difficulty initiating mandibular opening during speech and eating. Passive opening is possible, but active depression of the mandible against resistance is impaired. There is no pain in the temporomandibular joint, and muscles of facial expression function normally. Which muscle is primarily responsible for initiating depression of the mandible?",
  choices: [
    { key: "A", text: "Lateral pterygoid" },
    { key: "B", text: "Masseter" },
    { key: "C", text: "Medial pterygoid" },
    { key: "D", text: "Temporalis" }
  ],
  correctAnswer: "A",

  rationale: "**A. Lateral pterygoid**\nThe lateral pterygoid is the primary muscle responsible for initiating mandibular depression and protrusion. It pulls the mandibular condyle forward, allowing the mandible to open against resistance.",

  incorrectRationales: {
    B: "**B. Masseter**\nIncorrect — Elevates the mandible during biting and clenching.",
    C: "**C. Medial pterygoid**\nIncorrect — Elevates and assists in side to side movement.",
    D: "**D. Temporalis**\nIncorrect — Elevates and retracts the mandible."
  },

  boardTrap: "Gravity assists opening, but active opening against resistance requires lateral pterygoid.",
  memoryHook: "Lateral pterygoid opens first."
},
{
  id: "H&N-060",
  type: "head-and-neck",
  subject: "Clinical Execution & Materials",
  topic: "Masseter Function",
  difficulty: "medium",
  question: "A patient presents with normal mandibular opening but reports fatigue and soreness during prolonged chewing of firm foods. Palpation reveals significant bulk and tenderness in one muscle along the lateral aspect of the mandibular ramus. Which muscle is the primary elevator of the mandible during forceful mastication?",
  choices: [
    { key: "A", text: "Lateral pterygoid" },
    { key: "B", text: "Masseter" },
    { key: "C", text: "Digastric" },
    { key: "D", text: "Mylohyoid" }
  ],
  correctAnswer: "B",

  rationale: "**B. Masseter**\nThe masseter is the strongest muscle of mastication and the primary muscle responsible for elevating the mandible during biting and chewing.",

  incorrectRationales: {
    A: "**A. Lateral pterygoid**\nIncorrect — Initiates mandibular depression and protrusion.",
    C: "**C. Digastric**\nIncorrect — Assists in mandibular depression, not elevation.",
    D: "**D. Mylohyoid**\nIncorrect — Forms the floor of the mouth and does not elevate the mandible."
  },

  boardTrap: "Forceful elevation always points to masseter.",
  memoryHook: "Masseter makes the bite."
},
{
  id: "H&N-061",
  type: "head-and-neck",
  subject: "Clinical Execution & Materials",
  topic: "Temporalis Retraction",
  difficulty: "medium",
  question: "A patient demonstrates normal mandibular opening and closing but shows difficulty returning the mandible to its resting position after protrusion. Chewing strength is intact, and there is no joint pain. Which muscle is primarily responsible for retraction of the mandible?",
  choices: [
    { key: "A", text: "Medial pterygoid" },
    { key: "B", text: "Masseter" },
    { key: "C", text: "Lateral pterygoid" },
    { key: "D", text: "Temporalis" }
  ],
  correctAnswer: "D",

  rationale: "**D. Temporalis**\nThe temporalis muscle retracts the mandible, particularly its posterior fibers, returning the jaw from a protruded position to rest.",

  incorrectRationales: {
    A: "**A. Medial pterygoid**\nIncorrect — Assists in elevation and side to side movement.",
    B: "**B. Masseter**\nIncorrect — Primarily elevates the mandible.",
    C: "**C. Lateral pterygoid**\nIncorrect — Protrudes and initiates depression of the mandible."
  },

  boardTrap: "Retraction is a posterior pull. Posterior fibers of temporalis perform this action.",
  memoryHook: "Temporalis pulls back."
},
{
  id: "H&N-062",
  type: "head-and-neck",
  subject: "Clinical Execution & Materials",
  topic: "Contralateral Excursion",
  difficulty: "hard",
  question: "A patient exhibits difficulty moving the mandible to the right during mastication. Elevation and depression are normal, and there is no tenderness of the temporomandibular joint. Chewing efficiency is reduced only during lateral movements. Contraction of which muscle produces contralateral excursion of the mandible?",
  choices: [
    { key: "A", text: "Right masseter" },
    { key: "B", text: "Right temporalis" },
    { key: "C", text: "Left medial pterygoid" },
    { key: "D", text: "Left lateral pterygoid" }
  ],
  correctAnswer: "D",

  rationale: "**D. Left lateral pterygoid**\nUnilateral contraction of the lateral pterygoid causes the mandible to move toward the opposite side. Contraction of the left lateral pterygoid results in right lateral movement of the mandible.",

  incorrectRationales: {
    A: "**A. Right masseter**\nIncorrect — Elevates the mandible without producing lateral excursion.",
    B: "**B. Right temporalis**\nIncorrect — Retracts the mandible.",
    C: "**C. Left medial pterygoid**\nIncorrect — Assists in elevation and ipsilateral movement, not contralateral excursion."
  },

  boardTrap: "Movement is opposite the contracting lateral pterygoid.",
  memoryHook: "Lateral pterygoid moves the jaw opposite."
},
{
  id: "H&N-063",
  type: "head-and-neck",
  subject: "Clinical Execution & Materials",
  topic: "Muscles of Mastication Classification",
  difficulty: "medium",
  question: "A patient demonstrates normal mandibular elevation and retraction but has difficulty maintaining food on the occlusal surfaces during chewing. Jaw strength is normal, and lateral movements are intact. Which muscle is not considered a muscle of mastication?",
  choices: [
    { key: "A", text: "Masseter" },
    { key: "B", text: "Medial pterygoid" },
    { key: "C", text: "Buccinator" },
    { key: "D", text: "Temporalis" }
  ],
  correctAnswer: "C",

  rationale: "**C. Buccinator**\nThe buccinator is a muscle of facial expression that compresses the cheek against the teeth to keep food on the occlusal surfaces. It is not a muscle of mastication.",

  incorrectRationales: {
    A: "**A. Masseter**\nIncorrect — Elevates the mandible during mastication.",
    B: "**B. Medial pterygoid**\nIncorrect — Assists in elevation and side to side movement.",
    D: "**D. Temporalis**\nIncorrect — Elevates and retracts the mandible."
  },

  boardTrap: "Functional involvement in chewing does not equal classification as mastication muscle.",
  memoryHook: "Buccinator helps chewing but is not mastication."
},
{
  id: "H&N-064",
  type: "head-and-neck",
  subject: "Clinical Execution & Materials",
  topic: "Mylohyoid Function",
  difficulty: "hard",
  question: "A patient demonstrates normal mandibular elevation but has difficulty fully opening the mouth when resistance is applied. There is no pain in the temporomandibular joint. Suprahyoid muscle function is impaired. Which muscle assists mandibular depression by elevating the hyoid bone?",
  choices: [
    { key: "A", text: "Mylohyoid" },
    { key: "B", text: "Masseter" },
    { key: "C", text: "Temporalis" },
    { key: "D", text: "Medial pterygoid" }
  ],
  correctAnswer: "A",

  rationale: "**A. Mylohyoid**\nThe mylohyoid elevates the hyoid bone and floor of the mouth. When the hyoid is stabilized, contraction of the mylohyoid assists in depression of the mandible.",

  incorrectRationales: {
    B: "**B. Masseter**\nIncorrect — Elevates the mandible.",
    C: "**C. Temporalis**\nIncorrect — Elevates and retracts the mandible.",
    D: "**D. Medial pterygoid**\nIncorrect — Elevates and assists in lateral movement."
  },

  boardTrap: "Mandibular depression is not gravity alone. Suprahyoid muscles assist when hyoid is fixed.",
  memoryHook: "Mylohyoid helps open when hyoid is fixed."
},
{
  id: "H&N-065",
  type: "head-and-neck",
  subject: "Clinical Execution & Materials",
  topic: "Facial Venous Communication",
  difficulty: "hard",
  question: "A patient presents with a facial infection involving the upper lip and lateral nose. Imaging shows venous spread toward deeper cranial structures rather than superficial cervical drainage. No lymph node enlargement is noted at this stage. Which venous structure allows facial venous blood to communicate directly with intracranial venous sinuses?",
  choices: [
    { key: "A", text: "Retromandibular vein" },
    { key: "B", text: "Internal jugular vein" },
    { key: "C", text: "Angular vein" },
    { key: "D", text: "External jugular vein" }
  ],
  correctAnswer: "C",

  rationale: "**C. Angular vein**\nThe angular vein connects the facial vein with the superior ophthalmic vein, providing a pathway for venous blood to enter the cavernous sinus. This communication explains the clinical significance of infections in the midface.",

  incorrectRationales: {
    A: "**A. Retromandibular vein**\nIncorrect — Drains the temporal region and contributes to jugular formation.",
    B: "**B. Internal jugular vein**\nIncorrect — Serves as the final drainage vessel, not a communication pathway.",
    D: "**D. External jugular vein**\nIncorrect — Drains superficial structures of the neck."
  },

  boardTrap: "The danger triangle communicates with the cavernous sinus via the angular vein.",
  memoryHook: "Angular vein angles into the cavernous sinus."
},
{
  id: "H&N-066",
  type: "head-and-neck",
  subject: "Clinical Execution & Materials",
  topic: "Pterygoid Venous Plexus",
  difficulty: "hard",
  question: "A patient develops postoperative bleeding deep in the maxillary region following posterior superior alveolar anesthesia. The bleeding is not visible externally and resolves slowly with pressure. Imaging identifies involvement of a deep venous network associated with muscles of mastication. Which venous structure primarily drains the deep facial region and muscles of mastication?",
  choices: [
    { key: "A", text: "Facial vein" },
    { key: "B", text: "Pterygoid venous plexus" },
    { key: "C", text: "Retromandibular vein" },
    { key: "D", text: "External jugular vein" }
  ],
  correctAnswer: "B",

  rationale: "**B. Pterygoid venous plexus**\nThe pterygoid venous plexus drains deep facial structures and the muscles of mastication. It is closely associated with the maxillary vein and is clinically relevant during posterior maxillary injections.",

  incorrectRationales: {
    A: "**A. Facial vein**\nIncorrect — Drains superficial facial structures.",
    C: "**C. Retromandibular vein**\nIncorrect — Drains the temporal region and contributes to jugular formation.",
    D: "**D. External jugular vein**\nIncorrect — Drains superficial structures of the neck."
  },

  boardTrap: "Deep bleeding after maxillary injection points to the pterygoid plexus, not facial veins.",
  memoryHook: "Pterygoid plexus drains deep."
},
{
  id: "H&N-067",
  type: "head-and-neck",
  subject: "Clinical Execution & Materials",
  topic: "Retromandibular Vein Formation",
  difficulty: "medium",
  question: "A patient presents with swelling near the parotid region following facial trauma. Imaging reveals disruption of a vein formed within the parotid gland that later contributes to jugular venous drainage. Which vein is formed by the union of the superficial temporal vein and the maxillary vein?",
  choices: [
    { key: "A", text: "Retromandibular vein" },
    { key: "B", text: "Facial vein" },
    { key: "C", text: "External jugular vein" },
    { key: "D", text: "Internal jugular vein" }
  ],
  correctAnswer: "A",

  rationale: "**A. Retromandibular vein**\nThe retromandibular vein is formed by the union of the superficial temporal vein and the maxillary vein within the parotid gland.",

  incorrectRationales: {
    B: "**B. Facial vein**\nIncorrect — Drains superficial facial structures and joins jugular pathways later.",
    C: "**C. External jugular vein**\nIncorrect — Formed by the posterior division of the retromandibular vein and posterior auricular vein.",
    D: "**D. Internal jugular vein**\nIncorrect — Receives blood after convergence of facial and deep venous drainage."
  },

  boardTrap: "Superficial temporal plus maxillary equals retromandibular.",
  memoryHook: "Superficial temporal plus maxillary makes retromandibular."
},
{
  id: "H&N-068",
  type: "head-and-neck",
  subject: "Clinical Execution & Materials",
  topic: "Lingual Vein Drainage",
  difficulty: "medium",
  question: "A patient presents with localized edema and tenderness of the tongue following a traumatic injury. Facial swelling is absent, and venous congestion appears confined to the lingual region. Which vein primarily drains the tongue?",
  choices: [
    { key: "A", text: "Facial vein" },
    { key: "B", text: "Pterygoid venous plexus" },
    { key: "C", text: "Lingual vein" },
    { key: "D", text: "Retromandibular vein" }
  ],
  correctAnswer: "C",

  rationale: "**C. Lingual vein**\nThe lingual vein is the primary venous drainage of the tongue and typically drains directly into the internal jugular vein.",

  incorrectRationales: {
    A: "**A. Facial vein**\nIncorrect — Drains superficial facial structures.",
    B: "**B. Pterygoid venous plexus**\nIncorrect — Drains deep facial structures and muscles of mastication.",
    D: "**D. Retromandibular vein**\nIncorrect — Drains temporal and parotid regions."
  },

  boardTrap: "Tongue drainage is specific — not facial.",
  memoryHook: "Lingual vein drains the tongue."
},
{
  id: "H&N-069",
  type: "head-and-neck",
  subject: "Clinical Execution & Materials",
  topic: "Facial Vein Final Drainage",
  difficulty: "medium",
  question: "A patient presents with facial swelling that progresses inferiorly along the neck. Imaging demonstrates venous drainage from the face entering a large cervical vein before returning to the heart. The facial vein ultimately drains into which structure?",
  choices: [
    { key: "A", text: "External jugular vein" },
    { key: "B", text: "Subclavian vein" },
    { key: "C", text: "Internal jugular vein" },
    { key: "D", text: "Retromandibular vein" }
  ],
  correctAnswer: "C",

  rationale: "**C. Internal jugular vein**\nThe facial vein drains into the internal jugular vein, either directly or via a common facial vein. This represents the primary venous outflow from the face.",

  incorrectRationales: {
    A: "**A. External jugular vein**\nIncorrect — Drains superficial neck structures.",
    B: "**B. Subclavian vein**\nIncorrect — Receives blood after jugular convergence.",
    D: "**D. Retromandibular vein**\nIncorrect — Contributes to jugular formation but is not the final drainage."
  },

  boardTrap: "Final drainage matters — face ends in internal jugular.",
  memoryHook: "Face flows to internal jugular."
},
{
  id: "H&N-070",
  type: "head-and-neck",
  subject: "Clinical Execution & Materials",
  topic: "Embryology – Cleft Lip and Primary Palate",
  difficulty: "hard",
  question: "A newborn presents with a midline defect of the upper lip extending into the primary palate. The maxillary incisors are involved, and the defect is confined to structures anterior to the incisive foramen. No abnormalities are noted in the posterior palate. Failure of fusion of which embryologic structures most directly results in this presentation?",
  choices: [
    { key: "A", text: "Lateral palatine processes" },
    { key: "B", text: "Maxillary process and mandibular process" },
    { key: "C", text: "Medial nasal processes" },
    { key: "D", text: "First pharyngeal arch" }
  ],
  correctAnswer: "C",

  rationale: "**C. Medial nasal processes**\nFusion of the medial nasal processes forms the philtrum of the upper lip and the primary palate. Failure of this fusion results in cleft lip with or without involvement of the primary palate anterior to the incisive foramen.",

  incorrectRationales: {
    A: "**A. Lateral palatine processes**\nIncorrect — Lateral palatine processes form the secondary palate.",
    B: "**B. Maxillary process and mandibular process**\nIncorrect — These processes do not fuse to form the upper lip.",
    D: "**D. First pharyngeal arch**\nIncorrect — The first pharyngeal arch contributes to mandibular development, not midline lip fusion."
  },

  boardTrap: "Anterior to the incisive foramen equals primary palate and medial nasal fusion.",
  memoryHook: "Lip and primary palate come from medial nasal."
},
{
  id: "H&N-071",
  type: "head-and-neck",
  subject: "Clinical Execution & Materials",
  topic: "Embryology – Secondary Palate",
  difficulty: "hard",
  question: "A newborn presents with an isolated cleft involving the hard palate posterior to the incisive foramen. The upper lip and primary palate are intact. No defects are noted in the anterior maxilla. Failure of fusion of which embryologic structures most directly results in this defect?",
  choices: [
    { key: "A", text: "Medial nasal processes" },
    { key: "B", text: "Maxillary process and mandibular process" },
    { key: "C", text: "Lateral palatine processes" },
    { key: "D", text: "Frontonasal process" }
  ],
  correctAnswer: "C",

  rationale: "**C. Lateral palatine processes**\nThe lateral palatine processes fuse to form the secondary palate. Failure of this fusion results in cleft palate posterior to the incisive foramen, with no involvement of the upper lip or primary palate.",

  incorrectRationales: {
    A: "**A. Medial nasal processes**\nIncorrect — Forms the primary palate and upper lip.",
    B: "**B. Maxillary process and mandibular process**\nIncorrect — Does not contribute to palate formation.",
    D: "**D. Frontonasal process**\nIncorrect — Contributes to nasal structures, not the secondary palate."
  },

  boardTrap: "Posterior to incisive foramen equals lateral palatine shelf fusion failure.",
  memoryHook: "Posterior palate equals palatine shelves."
},
{
  id: "H&N-072",
  type: "head-and-neck",
  subject: "Clinical Execution & Materials",
  topic: "Embryology – Lateral Cleft Lip",
  difficulty: "hard",
  question: "A newborn presents with a facial defect involving the upper lip lateral to the philtrum. The defect does not extend into the primary palate, and the midline structures appear intact. Failure of fusion between which embryologic structures most directly results in this presentation?",
  choices: [
    { key: "A", text: "Medial nasal process and lateral palatine process" },
    { key: "B", text: "Maxillary process and medial nasal process" },
    { key: "C", text: "Maxillary process and mandibular process" },
    { key: "D", text: "Frontonasal process and lateral palatine process" }
  ],
  correctAnswer: "B",

  rationale: "**B. Maxillary process and medial nasal process**\nFusion between the maxillary process and the medial nasal process forms the lateral portion of the upper lip. Failure of this fusion results in a cleft lip lateral to the philtrum without involvement of the primary palate.",

  incorrectRationales: {
    A: "**A. Medial nasal process and lateral palatine process**\nIncorrect — Lateral palatine processes contribute to the secondary palate.",
    C: "**C. Maxillary process and mandibular process**\nIncorrect — These processes do not fuse to form the upper lip.",
    D: "**D. Frontonasal process and lateral palatine process**\nIncorrect — These structures are not responsible for lateral lip formation."
  },

  boardTrap: "Midline equals medial nasal only. Lateral lip equals maxillary meets medial nasal.",
  memoryHook: "Lateral lip equals maxillary meets medial nasal."
},
{
  id: "H&N-073",
  type: "head-and-neck",
  subject: "Clinical Execution & Materials",
  topic: "Embryology – Complete Primary Palate Cleft",
  difficulty: "hard",
  question: "A newborn presents with a complete cleft extending through the lip, alveolar ridge, and primary palate on one side. The defect stops at the incisive foramen. The secondary palate is intact. This pattern of defect most directly results from failure of fusion involving which embryologic structure?",
  choices: [
    { key: "A", text: "Lateral palatine processes" },
    { key: "B", text: "Frontonasal process" },
    { key: "C", text: "Medial nasal process" },
    { key: "D", text: "Maxillary process" }
  ],
  correctAnswer: "C",

  rationale: "**C. Medial nasal process**\nThe medial nasal process contributes to formation of the philtrum, primary palate, and premaxilla. Failure of fusion involving this structure results in cleft lip and primary palate defects that extend to, but not beyond, the incisive foramen.",

  incorrectRationales: {
    A: "**A. Lateral palatine processes**\nIncorrect — Involved in secondary palate formation posterior to the incisive foramen.",
    B: "**B. Frontonasal process**\nIncorrect — Contributes broadly to nasal structures but is not the direct fusion point tested.",
    D: "**D. Maxillary process**\nIncorrect — Involved in lateral facial development but does not form the primary palate."
  },

  boardTrap: "Stops at incisive foramen equals primary palate and medial nasal failure.",
  memoryHook: "Primary palate problems trace back to medial nasal."
},
{
  id: "H&N-074",
  type: "head-and-neck",
  subject: "Clinical Execution & Materials",
  topic: "Embryology – Nasal Development",
  difficulty: "hard",
  question: "A newborn presents with a midline defect involving the nasal septum and deformity of the nasal bridge. The upper lip and palate are intact. No clefting of the oral cavity is present. Failure of development of which embryologic structure most directly explains this finding?",
  choices: [
    { key: "A", text: "Maxillary process" },
    { key: "B", text: "Lateral palatine processes" },
    { key: "C", text: "Medial nasal processes" },
    { key: "D", text: "Frontonasal process" }
  ],
  correctAnswer: "D",

  rationale: "**D. Frontonasal process**\nThe frontonasal process gives rise to midline nasal structures, including the nasal septum and bridge of the nose. Defects isolated to the nasal region without lip or palate involvement point to abnormal development of the frontonasal process.",

  incorrectRationales: {
    A: "**A. Maxillary process**\nIncorrect — Forms lateral facial structures and upper jaw.",
    B: "**B. Lateral palatine processes**\nIncorrect — Forms the secondary palate.",
    C: "**C. Medial nasal processes**\nIncorrect — Contributes to the primary palate and philtrum, not isolated nasal septum defects."
  },

  boardTrap: "Isolated nasal septum defects point to frontonasal origin, not lip or palatal fusion errors.",
  memoryHook: "Nose starts front and center. Frontonasal."
},
{
  id: "H&N-075",
  type: "head-and-neck",
  subject: "Clinical Execution & Materials",
  topic: "TMJ – Ligament Support",
  difficulty: "moderate",
  question: "A patient presents with a history of mandibular trauma resulting in instability of the jaw during closing movements. Imaging shows intact muscles of mastication and a normal articular disc, but excessive posterior movement of the mandibular condyle is noted. Which structure primarily prevents posterior displacement of the mandible?",
  choices: [
    { key: "A", text: "Articular disc" },
    { key: "B", text: "Lateral ligament" },
    { key: "C", text: "Stylomandibular ligament" },
    { key: "D", text: "Sphenomandibular ligament" }
  ],
  correctAnswer: "B",

  rationale: "**B. Lateral ligament**\nThe lateral ligament reinforces the temporomandibular joint capsule and is the primary structure that prevents posterior displacement of the mandibular condyle.",

  incorrectRationales: {
    A: "**A. Articular disc**\nIncorrect — The articular disc functions to cushion and stabilize joint movement, not prevent posterior displacement.",
    C: "**C. Stylomandibular ligament**\nIncorrect — Limits excessive protrusion, not posterior movement.",
    D: "**D. Sphenomandibular ligament**\nIncorrect — Acts as a passive support ligament and does not prevent posterior displacement."
  },

  boardTrap: "Disc cushions. Lateral ligament prevents posterior displacement.",
  memoryHook: "Lateral ligament locks the mandible forward."
},
{
  id: "H&N-076",
  type: "head-and-neck",
  subject: "Clinical Execution & Materials",
  topic: "TMJ – Articular Disc Function",
  difficulty: "moderate",
  question: "A patient reports clicking and discomfort during mandibular opening and closing. Imaging shows normal bony anatomy, but altered movement between the mandibular condyle and the temporal bone during translation. What is the primary function of the articular disc of the temporomandibular joint?",
  choices: [
    { key: "A", text: "Prevent posterior displacement of the mandible" },
    { key: "B", text: "Increase the strength of mandibular elevation" },
    { key: "C", text: "Cushion and stabilize joint movement between articulating surfaces" },
    { key: "D", text: "Limit excessive protrusion of the mandible" }
  ],
  correctAnswer: "C",

  rationale: "**C. Cushion and stabilize joint movement between articulating surfaces**\nThe articular disc acts as a cushion between the mandibular condyle and the temporal bone, allowing smooth rotation and translation during mandibular movement while stabilizing the joint.",

  incorrectRationales: {
    A: "**A. Prevent posterior displacement of the mandible**\nIncorrect — Posterior displacement is prevented by the lateral ligament.",
    B: "**B. Increase the strength of mandibular elevation**\nIncorrect — Elevation is produced by muscles of mastication.",
    D: "**D. Limit excessive protrusion of the mandible**\nIncorrect — Excessive protrusion is limited by accessory ligaments."
  },

  boardTrap: "Disc cushions and stabilizes. Ligaments restrict movement.",
  memoryHook: "Disc cushions and glides."
},
{
  id: "H&N-077",
  type: "head-and-neck",
  subject: "Clinical Execution & Materials",
  topic: "TMJ – Accessory Ligaments",
  difficulty: "moderate",
  question: "A patient experiences discomfort when opening the mouth widely, but mandibular elevation and lateral movements remain normal. Imaging shows intact joint surfaces with tension noted in accessory supporting structures rather than the joint capsule itself. Which ligament primarily limits excessive opening of the mandible?",
  choices: [
    { key: "A", text: "Lateral ligament" },
    { key: "B", text: "Sphenomandibular ligament" },
    { key: "C", text: "Articular disc" },
    { key: "D", text: "Stylomandibular ligament" }
  ],
  correctAnswer: "D",

  rationale: "**D. Stylomandibular ligament**\nThe stylomandibular ligament limits excessive opening and protrusion of the mandible. It becomes taut during wide mandibular movements and helps restrict overextension.",

  incorrectRationales: {
    A: "**A. Lateral ligament**\nIncorrect — Prevents posterior displacement of the mandible.",
    B: "**B. Sphenomandibular ligament**\nIncorrect — Acts as a passive support ligament and does not primarily limit opening.",
    C: "**C. Articular disc**\nIncorrect — Cushions and stabilizes joint movement."
  },

  boardTrap: "Excessive opening is limited by stylomandibular, not lateral ligament.",
  memoryHook: "Stylo stops stretch."
},
{
  id: "H&N-078",
  type: "head-and-neck",
  subject: "Clinical Execution & Materials",
  topic: "TMJ – Disc Attachment",
  difficulty: "moderate",
  question: "A patient presents with anterior displacement of the temporomandibular joint disc during opening. Imaging shows normal ligament integrity, but abnormal muscular traction on the disc is suspected. Mandibular opening initiates normally but becomes irregular during translation. Which muscle attaches to the articular disc of the temporomandibular joint?",
  choices: [
    { key: "A", text: "Masseter" },
    { key: "B", text: "Temporalis" },
    { key: "C", text: "Medial pterygoid" },
    { key: "D", text: "Lateral pterygoid" }
  ],
  correctAnswer: "D",

  rationale: "**D. Lateral pterygoid**\nThe superior head of the lateral pterygoid muscle attaches to the articular disc and joint capsule. Its contraction helps coordinate disc movement during mandibular opening and protrusion.",

  incorrectRationales: {
    A: "**A. Masseter**\nIncorrect — Elevates the mandible but does not attach to the disc.",
    B: "**B. Temporalis**\nIncorrect — Elevates and retracts the mandible without disc attachment.",
    C: "**C. Medial pterygoid**\nIncorrect — Assists in elevation and lateral movement but does not attach to the disc."
  },

  boardTrap: "Only lateral pterygoid attaches to the disc.",
  memoryHook: "Lateral pterygoid pulls the disc."
},
{
  id: "H&N-079",
  type: "head-and-neck",
  subject: "Clinical Execution & Materials",
  topic: "Palatal Innervation – Anterior",
  difficulty: "moderate",
  question: "A patient reports altered sensation to the anterior hard palate following a maxillary surgical procedure. The palatal gingiva posterior to the canines remains fully sensitive. Maxillary teeth respond normally to vitality testing. Which structure transmits the nerve responsible for sensation to the anterior hard palate?",
  choices: [
    { key: "A", text: "Greater palatine foramen" },
    { key: "B", text: "Incisive foramen" },
    { key: "C", text: "Infraorbital foramen" },
    { key: "D", text: "Posterior superior alveolar canal" }
  ],
  correctAnswer: "B",

  rationale: "**B. Incisive foramen**\nThe incisive foramen transmits the nasopalatine nerve, which provides sensory innervation to the anterior hard palate.",

  incorrectRationales: {
    A: "**A. Greater palatine foramen**\nIncorrect — Transmits the greater palatine nerve to the posterior hard palate.",
    C: "**C. Infraorbital foramen**\nIncorrect — Transmits the infraorbital nerve to the midface.",
    D: "**D. Posterior superior alveolar canal**\nIncorrect — Transmits posterior superior alveolar nerves to maxillary posterior teeth."
  },

  boardTrap: "Anterior palate equals incisive foramen.",
  memoryHook: "Anterior palate passes through incisive."
},
{
  id: "H&N-080",
  type: "head-and-neck",
  subject: "Clinical Execution & Materials",
  topic: "Palatal Innervation – Posterior",
  difficulty: "moderate",
  question: "A patient experiences numbness of the posterior hard palate and palatal gingiva following a maxillary block injection. Sensation to the anterior palate remains intact, and maxillary teeth respond normally. Which structure transmits the nerve responsible for sensory innervation to the posterior hard palate?",
  choices: [
    { key: "A", text: "Incisive foramen" },
    { key: "B", text: "Infraorbital foramen" },
    { key: "C", text: "Greater palatine foramen" },
    { key: "D", text: "Posterior superior alveolar canal" }
  ],
  correctAnswer: "C",

  rationale: "**C. Greater palatine foramen**\nThe greater palatine foramen transmits the greater palatine nerve, which supplies sensory innervation to the posterior hard palate and palatal gingiva.",

  incorrectRationales: {
    A: "**A. Incisive foramen**\nIncorrect — Transmits the nasopalatine nerve to the anterior hard palate.",
    B: "**B. Infraorbital foramen**\nIncorrect — Transmits the infraorbital nerve to the midface.",
    D: "**D. Posterior superior alveolar canal**\nIncorrect — Transmits posterior superior alveolar nerves to maxillary posterior teeth."
  },

  boardTrap: "Posterior palate equals greater palatine foramen.",
  memoryHook: "Posterior palate exits greater palatine."
},
{
  id: "H&N-081",
  type: "head-and-neck",
  subject: "Clinical Execution & Materials",
  topic: "Midface Sensory Innervation",
  difficulty: "moderate",
  question: "A patient reports numbness of the upper lip, lateral nose, and lower eyelid following facial trauma. Sensation to the palate and maxillary teeth remains intact. Which structure transmits the nerve responsible for sensory innervation to this region?",
  choices: [
    { key: "A", text: "Zygomaticofacial foramen" },
    { key: "B", text: "Infraorbital foramen" },
    { key: "C", text: "Greater palatine foramen" },
    { key: "D", text: "Incisive foramen" }
  ],
  correctAnswer: "B",

  rationale: "**B. Infraorbital foramen**\nThe infraorbital foramen transmits the infraorbital nerve, which provides sensory innervation to the upper lip, lateral nose, and lower eyelid.",

  incorrectRationales: {
    A: "**A. Zygomaticofacial foramen**\nIncorrect — Supplies sensation to the zygomatic region only.",
    C: "**C. Greater palatine foramen**\nIncorrect — Supplies posterior hard palate.",
    D: "**D. Incisive foramen**\nIncorrect — Supplies anterior hard palate."
  },

  boardTrap: "Upper lip plus lower eyelid localizes to infraorbital, not palatal foramina.",
  memoryHook: "Infraorbital equals upper lip and lower lid."
},
{
  id: "H&N-082",
  type: "head-and-neck",
  subject: "Clinical Execution & Materials",
  topic: "Maxillary Posterior Innervation",
  difficulty: "moderate",
  question: "A patient develops numbness of the maxillary molar teeth and buccal gingiva following a posterior maxillary injection. Sensation to the upper lip, palate, and anterior teeth remains intact. Which structure transmits the nerves most directly responsible for sensory innervation of the maxillary posterior teeth?",
  choices: [
    { key: "A", text: "Infraorbital foramen" },
    { key: "B", text: "Greater palatine foramen" },
    { key: "C", text: "Posterior superior alveolar canal" },
    { key: "D", text: "Incisive foramen" }
  ],
  correctAnswer: "C",

  rationale: "**C. Posterior superior alveolar canal**\nThe posterior superior alveolar canal transmits the posterior superior alveolar nerves, which provide sensory innervation to the maxillary molar and premolar teeth and associated buccal tissues.",

  incorrectRationales: {
    A: "**A. Infraorbital foramen**\nIncorrect — Transmits the infraorbital nerve to the midface and anterior maxillary region.",
    B: "**B. Greater palatine foramen**\nIncorrect — Transmits the greater palatine nerve to the posterior hard palate.",
    D: "**D. Incisive foramen**\nIncorrect — Transmits the nasopalatine nerve to the anterior hard palate."
  },

  boardTrap: "Posterior maxillary teeth are PSA canal, not palatal or infraorbital.",
  memoryHook: "Posterior maxillary teeth use PSA canal."
},
{
  id: "COMM-001",
  type: "community",
  subject: "Prevention Science & Public Health",
  topic: "Community vs Private Practice",
  difficulty: "moderate",

  question: "A regional health department has completed a 12-month oral health initiative targeting a community with persistent disparities. Clinical measures gathered from a small pilot group show improvement, but the overall community caries burden remains unchanged. The consultant must determine the most appropriate next step for evaluating the program's effectiveness at the population level. Which action best aligns with the responsibilities of a community-based dental hygienist rather than a private-practice clinician?",

  choices: [
    { key: "A", text: "Reassess individual plaque scores for the pilot group and recommend individualized home-care modifications" },
    { key: "B", text: "Conduct a community-wide analysis using epidemiologic indices to determine whether measurable population trends have shifted" },
    { key: "C", text: "Schedule extended follow-up visits for the original participants to strengthen one-on-one preventive counseling" },
    { key: "D", text: "Modify clinical treatment protocols for the pilot group to include additional chairside preventive therapy" }
  ],

  correctAnswer: "B",

  rationale: "**B. Conduct a community-wide analysis using epidemiologic indices**\nCommunity dental hygiene focuses on population-level data rather than individual charts. Evaluating a program’s effectiveness requires analyzing epidemiologic measures across the entire target population to determine whether measurable community trends have shifted.",

  incorrectRationales: {
    A: "**A. Reassess individual plaque scores**\nIncorrect – This reflects a private practice, patient-specific approach.",
    C: "**C. Schedule extended follow-up visits**\nIncorrect – This resembles individualized continuity of care typical of private practice.",
    D: "**D. Modify clinical treatment protocols**\nIncorrect – This is clinical and individual in focus, not community-based."
  },

  boardTrap: "Program evaluation (community) is not the same as patient evaluation (private practice).",

  memoryHook: "Community = Crowd. Measure the crowd, not the chair."
},
{
  id: "COMM-002",
  type: "community",
  subject: "Prevention Science & Public Health",
  topic: "Program-Level Responsibilities",
  difficulty: "moderate",

  question: "A dental hygienist is assisting with the next phase of a community program. The coordinator asks the hygienist to select the action most appropriate for responsibilities in this role. Which action best reflects these responsibilities?",

  choices: [
    { key: "A", text: "Address needs on a person-by-person basis" },
    { key: "B", text: "Develop actions intended to guide decisions for the entire program" },
    { key: "C", text: "Provide services directed toward concerns identified for single participants" },
    { key: "D", text: "Focus on tasks completed directly with individuals" }
  ],

  correctAnswer: "B",

  rationale: "**B. Develop actions intended to guide decisions for the entire program**\nCommunity program responsibilities involve decisions and actions that guide or support the program as a whole rather than focusing on individual participants.",

  incorrectRationales: {
    A: "**A. Address needs on a person-by-person basis**\nIncorrect – Person-specific tasks do not represent program-level responsibilities.",
    C: "**C. Provide services directed toward single participants**\nIncorrect – Responding to individual concerns does not reflect broader program functions.",
    D: "**D. Focus on tasks completed directly with individuals**\nIncorrect – Hands-on individual tasks differ from responsibilities that guide program decisions."
  },

  boardTrap: "Community program responsibilities focus on guiding the entire program, not interacting with individuals.",

  memoryHook: "Program = Plan. Individuals = Hands-on."
},
{
  id: "COMM-003",
  type: "community",
  subject: "Prevention Science & Public Health",
  topic: "Program Planning Phase",
  difficulty: "extremely-difficult",

  question: "A dental hygienist is working with a community program that is preparing for an upcoming project cycle. The coordinator asks the hygienist to select the action that reflects responsibilities appropriate for this phase of involvement. Which action best aligns with this role?",

  choices: [
    { key: "A", text: "Carry out tasks assigned for day-to-day activities with individual participants" },
    { key: "B", text: "Modify existing activities based on immediate concerns raised by individuals" },
    { key: "C", text: "Provide direct assistance to support interactions with participants during scheduled activities" },
    { key: "D", text: "Contribute to determining what information the program needs to collect before moving forward" }
  ],

  correctAnswer: "D",

  rationale: "**D. Contribute to determining what information the program needs to collect**\nPlanning-stage responsibilities focus on identifying what information must be gathered before decisions are made. This reflects program planning rather than operational or participant-level activity.",

  incorrectRationales: {
    A: "**A. Carry out day-to-day activities**\nIncorrect – These tasks occur during implementation, not planning.",
    B: "**B. Modify existing activities**\nIncorrect – Responding to individual concerns reflects operational adjustment.",
    C: "**C. Provide direct assistance to participants**\nIncorrect – This reflects implementation, not preliminary planning."
  },

  boardTrap: "Planning-phase duties focus on determining needed information before decisions, not performing participant-level tasks.",

  memoryHook: "Before doing → Decide what to know."
},
{
  id: "COMM-004",
  type: "community",
  subject: "Prevention Science & Public Health",
  topic: "Program Decision-Making Phase",
  difficulty: "moderate",

  question: "A community program is preparing to choose among several options for its upcoming cycle. The coordinator asks the dental hygienist to help with responsibilities appropriate during this decision-making phase. Which action best reflects this role?",

  choices: [
    { key: "A", text: "Carry out activities assigned for routine participant interactions" },
    { key: "B", text: "Provide assistance during scheduled tasks with individuals" },
    { key: "C", text: "Modify day-to-day activities based on immediate participant needs" },
    { key: "D", text: "Compare the available options to determine which choice is most appropriate for the program" }
  ],

  correctAnswer: "D",

  rationale: "**D. Compare the available options**\nDuring a decision-making phase, responsibilities include reviewing and comparing available options to determine which choice best fits program needs.",

  incorrectRationales: {
    A: "**A. Routine participant interactions**\nIncorrect – These occur during implementation.",
    B: "**B. Assist with scheduled tasks**\nIncorrect – This reflects operational activity.",
    C: "**C. Modify day-to-day activities**\nIncorrect – This reflects adjustment, not program-level decision-making."
  },

  boardTrap: "Decision-making involves comparing options, not performing implementation tasks.",

  memoryHook: "When choosing → Compare options."
},
{
  id: "COMM-005",
  type: "community",
  subject: "Prevention Science & Public Health",
  topic: "Program Review Phase",
  difficulty: "extremely-difficult",

  question: "A community program is completing a review phase after its recent cycle. The coordinator asks the dental hygienist to assist with responsibilities appropriate during this stage. Which action best reflects responsibilities for this phase?",

  choices: [
    { key: "A", text: "Examine information collected for the program as a whole to determine what it shows" },
    { key: "B", text: "Respond to matters raised by individual participants during recent activities" },
    { key: "C", text: "Carry out direct tasks with individuals based on concerns noted during the cycle" },
    { key: "D", text: "Adjust routine activities to address issues arising from one-on-one interactions" }
  ],

  correctAnswer: "A",

  rationale: "**A. Examine information collected for the program as a whole**\nReview-phase responsibilities involve analyzing collected program-level information to determine what the data reflects.",

  incorrectRationales: {
    B: "**B. Respond to participant concerns**\nIncorrect – This reflects follow-up interactions.",
    C: "**C. Carry out direct tasks**\nIncorrect – These occur during implementation.",
    D: "**D. Adjust routine activities**\nIncorrect – This reflects operational modification, not review."
  },

  boardTrap: "Review phase = analyze program-level data, not individual follow-up tasks.",

  memoryHook: "Review = Reflect."
},
{
  id: "COMM-006",
  type: "community",
  subject: "Prevention Science & Public Health",
  topic: "ADPIE – Community Planning Phase",
  difficulty: "extremely-difficult",

  question: "A dental hygienist is hired by a state-funded community health program to address increasing caries prevalence in migrant farmworker children. She conducts windshield surveys, reviews county-wide DMFT statistics, interviews school nurses, and evaluates transportation barriers. With assessment data complete, she must determine the next appropriate step to move the program forward using the ADPIE process within a community health framework rather than a private practice model. Which action represents the planning phase of ADPIE in a community health setting, distinguishing it from the planning phase used in private practice?",

  choices: [
    { key: "A", text: "Establish individualized preventive schedules based on each child’s caries risk" },
    { key: "B", text: "Develop population-focused objectives and select evidence-based interventions guided by aggregated community data" },
    { key: "C", text: "Collect baseline DMFT scores for each participating school" },
    { key: "D", text: "Conduct follow-up screenings to measure program effectiveness" }
  ],

  correctAnswer: "B",

  rationale: "**B. Develop population-focused objectives and select evidence-based interventions**\nIn community health, planning involves setting broad, measurable goals for the entire population and identifying interventions based on aggregated epidemiologic and environmental data. This differs from private practice planning, which is individualized to one patient.",

  incorrectRationales: {
    A: "**A. Establish individualized preventive schedules**\nIncorrect – This reflects private-practice treatment planning for individual patients.",
    C: "**C. Collect baseline DMFT scores**\nIncorrect – This represents assessment, which occurs before planning.",
    D: "**D. Conduct follow-up screenings**\nIncorrect – This reflects evaluation, a later stage of ADPIE."
  },

  boardTrap: "Community planning focuses on population-level goals. Individualized actions reflect private practice, not community ADPIE planning.",

  memoryHook: "Private practice plans for one. Community health plans for many."
},
{
  id: "COMM-007",
  type: "community",
  subject: "Prevention Science & Public Health",
  topic: "Community vs Private Practice Distinction",
  difficulty: "extremely-difficult",

  question: "A dental hygienist works in both a private practice and a county-funded community oral-health initiative. During a cross-agency audit, she is asked to classify various clinical and programmatic actions according to whether they belong to private practice processes or community health program operations. The audit requires precise differentiation because misclassification affects funding, reporting requirements, and regulatory compliance. All of the following actions represent functions associated with a community health program, EXCEPT:",

  choices: [
    { key: "A", text: "Establish individualized service schedules based on one patient’s documented risk profile" },
    { key: "B", text: "Setting population-level objectives informed by epidemiologic analysis" },
    { key: "C", text: "Designing an intervention model that addresses needs identified across the target population" },
    { key: "D", text: "Allocating resources based on community-wide feasibility and projected reach" }
  ],

  correctAnswer: "A",

  rationale: "**A. Establish individualized service schedules based on one patient’s documented risk profile**\nThis reflects private-practice planning centered on an individual patient. Community health programs focus on population-level strategy rather than individualized scheduling.",

  incorrectRationales: {
    B: "**B. Setting population-level objectives**\nIncorrect – Population-level objectives are central to community program planning.",
    C: "**C. Designing an intervention model for a target population**\nIncorrect – Community health programs develop interventions based on aggregated population needs.",
    D: "**D. Allocating resources based on community-wide feasibility**\nIncorrect – Resource allocation at the community scale is a core community health function."
  },

  boardTrap: "If the action applies to one person, it is private practice—even if preventive or data-driven.",

  memoryHook: "Zoom in = private practice. Zoom out = community health."
},
{
  id: "COMM-008",
  type: "community",
  subject: "Prevention Science & Public Health",
  topic: "Community Program Evaluation",
  difficulty: "difficult",

  question: "A dental hygienist works part-time in private practice and part-time for a county community oral health program. At the end of a six-month sealant initiative, she must evaluate outcomes for the community program while also completing routine patient evaluations in the private office. She notices that the evaluation requirements differ significantly between the two settings, and she must correctly identify which tasks belong to which evaluation model for reporting accuracy. Which action best reflects an evaluation method used in a community-based program rather than an evaluation method used in private practice?",

  choices: [
    { key: "A", text: "Reassessing one patient’s response to individualized preventive recommendations" },
    { key: "B", text: "Updating a single patient’s chart with changes in periodontal measurements" },
    { key: "C", text: "Comparing pre- and post-program caries rates across the target population" },
    { key: "D", text: "Reviewing one patient’s adherence to home-care instructions" }
  ],

  correctAnswer: "C",

  rationale: "**C. Comparing pre- and post-program caries rates across the target population**\nCommunity program evaluation measures outcomes at the population level. Assessing changes in caries rates across the targeted group represents a true community evaluation metric, distinct from individual clinical follow-up.",

  incorrectRationales: {
    A: "**A. Reassessing one patient’s response**\nIncorrect – This reflects individualized private-practice evaluation.",
    B: "**B. Updating a single patient’s chart**\nIncorrect – Chart updates are part of private clinical evaluation.",
    D: "**D. Reviewing one patient’s adherence**\nIncorrect – This represents individual follow-up rather than population-level evaluation."
  },

  boardTrap: "If evaluation focuses on one patient, it is private practice. Community evaluation measures group outcomes.",

  memoryHook: "Private evaluates one; community evaluates many."
},
{
  id: "COMM-009",
  type: "community",
  subject: "Prevention Science & Public Health",
  topic: "Foundational Aim of Community Oral Health",
  difficulty: "extremely-difficult",

  question: "A dental hygienist is appointed to an interagency regional coalition tasked with integrating oral health into broader public health planning. Multiple sectors contribute data for a multi-year strategic plan. During deliberations, the coalition differentiates clinical goals used in private practice from system-level aims used in community health. Which proposed objective aligns most directly with the fundamental aim of community oral health programs?",

  choices: [
    { key: "A", text: "Advancing conditions that support optimal oral health across the entire population" },
    { key: "B", text: "Establishing individualized therapeutic outcomes for patients receiving routine care" },
    { key: "C", text: "Determining case-specific treatment endpoints for patients with active disease" },
    { key: "D", text: "Modifying procedural sequences to optimize efficiency in single-patient visits" }
  ],

  correctAnswer: "A",

  rationale: "**A. Advancing conditions that support optimal oral health across the entire population**\nCommunity oral health programs aim to improve health outcomes for defined populations. Their objectives target broad determinants, system structures, and population-level outcomes rather than individualized clinical goals.",

  incorrectRationales: {
    B: "**B. Establishing individualized therapeutic outcomes**\nIncorrect – This reflects private-practice clinical care.",
    C: "**C. Determining case-specific treatment endpoints**\nIncorrect – This represents patient-centered clinical decision-making.",
    D: "**D. Modifying procedural sequences for single visits**\nIncorrect – This reflects private-practice workflow considerations."
  },

  boardTrap: "If the focus is on a single patient’s clinical progress or workflow, it is not a community objective.",

  memoryHook: "Community aims outward—health for all, not for one."
},
{
  id: "COMM-010",
  type: "community",
  subject: "Prevention Science & Public Health",
  topic: "Community Water Fluoridation Mechanism",
  difficulty: "extremely-difficult",

  question: "A dental hygienist is assigned to a multidisciplinary municipal review panel evaluating the long-term performance of a community’s water system after recent changes in treatment protocols. The panel must determine whether oral health indicators observed over several surveillance cycles can be attributed to the chemical behavior of fluoride species present in the distribution system. Which conclusion most accurately reflects the mechanism by which fluoride from a municipal water system contributes to caries reduction?",

  choices: [
    { key: "A", text: "It alters systemic enamel formation to permanently increase crystal density throughout tooth development" },
    { key: "B", text: "It produces uniform structural incorporation into all erupted enamel surfaces independent of oral conditions" },
    { key: "C", text: "It generates systemic redistribution of fluoride ions to achieve continuous whole-body mineral equilibrium" },
    { key: "D", text: "It maintains a low concentration of fluoride in the oral environment that interacts with tooth surfaces during daily exposure" }
  ],

  correctAnswer: "D",

  rationale: "**D. It maintains a low concentration of fluoride in the oral environment**\nCommunity water fluoridation reduces caries primarily through topical mechanisms. Continuous low-level fluoride in saliva and plaque fluid enhances remineralization, inhibits demineralization, and affects bacterial metabolism. The dominant effect is surface contact, not systemic incorporation.",

  incorrectRationales: {
    A: "**A. Systemic alteration of developing enamel**\nIncorrect – Systemic incorporation plays a minimal role and is not the primary mechanism of community water fluoridation.",
    B: "**B. Uniform structural incorporation into erupted enamel**\nIncorrect – Fluoride’s benefit depends on ongoing topical exposure, not permanent uniform incorporation.",
    C: "**C. Systemic whole-body mineral equilibrium**\nIncorrect – This does not represent fluoride’s oral mechanism and is unsupported by evidence."
  },

  boardTrap: "Water fluoridation works mainly through topical, continual contact—not systemic incorporation during tooth development.",

  memoryHook: "Fluoride works where it touches."
},
{
  id: "COMM-011",
  type: "community",
  subject: "Prevention Science & Public Health",
  topic: "School-Based Fluoride Programs",
  difficulty: "extremely-difficult",

  question: "A dental hygienist is contracted by a large urban district to oversee an intensive caries-reduction initiative across multiple elementary schools classified as high-risk based on surveillance data. The district prohibits chairside clinical procedures on campus but authorizes standardized population-based protocols that can be administered uniformly by trained personnel under standing orders. Which fluoride protocol is most appropriate for use in a school-based program operating under these conditions?",

  choices: [
    { key: "A", text: "Applying individualized fluoride varnish to selected students based on separate clinical assessments" },
    { key: "B", text: "Administering a supervised 2 percent neutral sodium fluoride rinse for sixty seconds once per week" },
    { key: "C", text: "Delivering a single annual fluoride gel application under trays during scheduled on-site visits" },
    { key: "D", text: "Providing daily fluoride tablets for students to ingest during morning homeroom" }
  ],

  correctAnswer: "B",

  rationale: "**B. Administering a supervised 2 percent neutral sodium fluoride rinse once per week**\nA weekly supervised 2 percent NaF rinse is an established school-based population protocol. It allows standardized group delivery without individualized clinical procedures and demonstrates measurable preventive benefit in high-risk populations when implemented consistently.",

  incorrectRationales: {
    A: "**A. Individualized fluoride varnish**\nIncorrect – Varnish placement requires clinical assessment and chairside procedures, which fall outside many school-based population program limitations.",
    C: "**C. Tray-based gel application**\nIncorrect – Gel trays are clinical procedures and are not structured for large-scale uniform delivery in restricted school environments.",
    D: "**D. Daily fluoride tablets**\nIncorrect – Systemic tablets require individual dosing oversight and introduce regulatory and safety concerns for broad implementation."
  },

  boardTrap: "Do not choose a clinically effective method that cannot be delivered uniformly in a population-based school setting.",

  memoryHook: "School program = simple, supervised, scalable."
},
{
  id: "COMM-012",
  type: "community",
  subject: "Prevention Science & Public Health",
  topic: "ADPIED – Community Framework",
  difficulty: "difficult",

  question: "A dental hygienist is reviewing program documentation for a community oral health initiative that has completed its first year of operation. The review requires mapping each recorded activity to the correct stage of the ADPIED process as used in community programs. All of the following actions are components of the ADPIED process for community programs, except:",

  choices: [
    { key: "A", text: "Collecting epidemiologic data to determine the level of need within the target population" },
    { key: "B", text: "Establishing measurable objectives and selecting appropriate population-level interventions" },
    { key: "C", text: "Delivering program activities in accordance with the established action plan" },
    { key: "D", text: "Conducting individualized clinical reassessments for each participant at routine intervals" }
  ],

  correctAnswer: "D",

  rationale: "**D. Conducting individualized clinical reassessments**\nIndividualized clinical reassessment reflects private-practice follow-up. Community ADPIED focuses on population-level assessment, planning, implementation, evaluation, and documentation rather than one-patient clinical monitoring.",

  incorrectRationales: {
    A: "**A. Collecting epidemiologic data**\nIncorrect – This represents Assessment, the first stage of ADPIED.",
    B: "**B. Establishing measurable objectives**\nIncorrect – This is part of Planning in ADPIED.",
    C: "**C. Delivering program activities**\nIncorrect – This represents Implementation in ADPIED."
  },

  boardTrap: "Community evaluation measures group outcomes, not individual clinical follow-up.",

  memoryHook: "Private follows one. Community follows many."
},
{
  id: "COMM-014",
  type: "community",
  subject: "Prevention Science & Public Health",
  topic: "Epidemiology – Prospective vs Retrospective",
  difficulty: "moderate",

  question: "A dental hygienist is appointed to a regional analytics committee reviewing two research proposals intended to guide future policy decisions on preventive programs. One proposal examines years of archived clinical and administrative data from multiple community clinics, while the other proposes recruiting a new cohort and tracking exposures and outcomes over time. Which description best identifies a prospective study?",

  choices: [
    { key: "A", text: "A design that analyzes existing records to evaluate outcomes that have already occurred" },
    { key: "B", text: "A design that relies on historical exposure data to compare previously documented groups" },
    { key: "C", text: "A design that examines associations using information collected entirely from past events" },
    { key: "D", text: "A design that follows participants forward in time to observe the development of outcomes after the study begins" }
  ],

  correctAnswer: "D",

  rationale: "**D. A design that follows participants forward in time**\nA prospective study recruits participants before outcomes occur and follows them into the future to observe how exposures influence later results. The defining feature is forward movement in time.",

  incorrectRationales: {
    A: "**A. Analyzes existing records**\nIncorrect – This describes a retrospective approach.",
    B: "**B. Relies on historical exposure data**\nIncorrect – This reflects retrospective methodology.",
    C: "**C. Uses information from past events only**\nIncorrect – This also characterizes retrospective research."
  },

  boardTrap: "The key distinction is direction of time: prospective moves forward; retrospective looks backward.",

  memoryHook: "Prospective moves ahead; retrospective looks back."
},
{
  id: "COMM-015",
  type: "community",
  subject: "Prevention Science & Public Health",
  topic: "Research – Hypothesis Testing",
  difficulty: "moderate",

  question: "A dental hygienist is collaborating with a university research team evaluating a new community-based sealant protocol. The project examines whether the new protocol produces a measurable difference in caries incidence compared with the district’s standard protocol. Which statement represents the null hypothesis?",

  choices: [
    { key: "A", text: "The new protocol results in lower caries incidence compared with the standard protocol" },
    { key: "B", text: "The new protocol results in higher caries incidence compared with the standard protocol" },
    { key: "C", text: "There is no difference in caries incidence between the new protocol and the standard protocol" },
    { key: "D", text: "Any observed difference in caries incidence is caused by implementation factors rather than the protocol itself" }
  ],

  correctAnswer: "C",

  rationale: "**C. There is no difference in caries incidence**\nThe null hypothesis states that no difference or effect exists between the groups being compared. It assumes equality unless evidence suggests otherwise.",

  incorrectRationales: {
    A: "**A. Lower caries incidence**\nIncorrect – This is a directional research hypothesis.",
    B: "**B. Higher caries incidence**\nIncorrect – This is also a directional research hypothesis.",
    D: "**D. Caused by implementation factors**\nIncorrect – This does not reflect the formal statistical structure of a null hypothesis."
  },

  boardTrap: "The null hypothesis never predicts a difference. It asserts no difference.",

  memoryHook: "Null = no change, no difference."
},
{
  id: "COMM-016",
  type: "community",
  subject: "Prevention Science & Public Health",
  topic: "Governmental Levels – Public Health Roles",
  difficulty: "moderate",

  question: "A community dental hygienist is evaluating how governmental levels contribute to population-based oral-health initiatives. Which governmental level is primarily responsible for implementing public health programs at the community level, including direct delivery of services?",

  choices: [
    { key: "A", text: "Federal government" },
    { key: "B", text: "State government" },
    { key: "C", text: "Tribal government" },
    { key: "D", text: "Local government" }
  ],

  correctAnswer: "D",

  rationale: "**D. Local government**\nLocal health departments implement community-level public health programs, including screenings, surveillance, fluoride initiatives, and education. They operationalize policies and funding provided at higher governmental levels.",

  incorrectRationales: {
    A: "**A. Federal government**\nIncorrect – Provides national policy, research, and funding but does not directly deliver community services.",
    B: "**B. State government**\nIncorrect – Establishes statewide goals and regulations but delegates implementation to local agencies.",
    C: "**C. Tribal government**\nIncorrect – Oversees sovereign health services for tribal populations but does not manage broader community public health systems."
  },

  boardTrap: "Regulation (state) is not the same as implementation (local).",

  memoryHook: "Local = where life happens."
},
{
  id: "COMM-017",
  type: "community",
  subject: "Prevention Science & Public Health",
  topic: "Federal Health Agencies – CDC",
  difficulty: "easy",

  question: "A public health dental hygienist is preparing a briefing on major national agencies involved in disease surveillance and oral-health data reporting. Where is the Centers for Disease Control and Prevention headquartered?",

  choices: [
    { key: "A", text: "Atlanta, Georgia" },
    { key: "B", text: "Bethesda, Maryland" },
    { key: "C", text: "Rockville, Maryland" },
    { key: "D", text: "Silver Spring, Maryland" }
  ],

  correctAnswer: "A",

  rationale: "**A. Atlanta, Georgia**\nThe CDC’s central headquarters and primary operational campus are located in Atlanta, Georgia, where core epidemiologic, laboratory, emergency response, and administrative functions are based.",

  incorrectRationales: {
    B: "**B. Bethesda, Maryland**\nIncorrect – Bethesda is home to the National Institutes of Health (NIH).",
    C: "**C. Rockville, Maryland**\nIncorrect – Several federal health offices are located here, but not CDC headquarters.",
    D: "**D. Silver Spring, Maryland**\nIncorrect – This is the location of major FDA operations."
  },

  boardTrap: "Many federal health agencies are in Maryland, but CDC headquarters is in Atlanta, Georgia.",

  memoryHook: "CDC = Centers Down in Georgia."
},
{
  id: "COMM-018",
  type: "community",
  subject: "Prevention Science & Public Health",
  topic: "Epidemiology – Disease Distribution Patterns",
  difficulty: "moderate",

  question: "A multinational oral-health task force is reviewing surveillance reports from several regions to determine the classification of a rapid increase in orofacial viral lesions affecting dental personnel and community members. Several countries have reported widespread transmission across multiple continents within a similar period. Which term best describes this pattern?",

  choices: [
    { key: "A", text: "Epidemic" },
    { key: "B", text: "Endemic" },
    { key: "C", text: "Pandemic" },
    { key: "D", text: "Sporadic" }
  ],

  correctAnswer: "C",

  rationale: "**C. Pandemic**\nA pandemic describes disease occurrence that spreads across several countries or continents and affects a large population. This classification reflects widespread transmission requiring coordinated international response strategies.",

  incorrectRationales: {
    A: "**A. Epidemic**\nIncorrect – An epidemic refers to a sudden increase in cases within a defined region or population, not across multiple continents.",
    B: "**B. Endemic**\nIncorrect – Endemic conditions occur at predictable levels within a specific geographic area.",
    D: "**D. Sporadic**\nIncorrect – Sporadic cases occur irregularly and infrequently without predictable distribution."
  },

  boardTrap: "Epidemic is regional. Pandemic crosses nations and continents.",

  memoryHook: "Pandemic = pan (all). When it reaches many nations, choose pandemic."
},
{
  id: "COMM-019",
  type: "community",
  subject: "Prevention Science & Public Health",
  topic: "Levels of Prevention",
  difficulty: "moderate",

  question: "A community dental program reviews a case in which a patient with advanced untreated carious lesions experienced significant loss of tooth structure impairing function and was referred for restorative management to restore functional integrity. Which level of prevention does this service represent?",

  choices: [
    { key: "A", text: "Primary" },
    { key: "B", text: "Secondary" },
    { key: "C", text: "Tertiary" },
    { key: "D", text: "Foundational" }
  ],

  correctAnswer: "C",

  rationale: "**C. Tertiary**\nTertiary prevention involves rehabilitation or restoration of function after disease has progressed beyond early detection. When significant tooth structure is lost and function is compromised, restorative services represent tertiary prevention.",

  incorrectRationales: {
    A: "**A. Primary**\nIncorrect – Primary prevention occurs before disease onset.",
    B: "**B. Secondary**\nIncorrect – Secondary prevention focuses on early detection and halting progression.",
    D: "**D. Foundational**\nIncorrect – This is not a recognized level of prevention in public health."
  },

  boardTrap: "If function must be restored after significant damage, it is tertiary—not secondary.",

  memoryHook: "Tertiary = treat to restore."
},
{
  id: "COMM-020",
  type: "community",
  subject: "Prevention Science & Public Health",
  topic: "Population Measures – Natality, Morbidity, Mortality",
  difficulty: "moderate",

  question: "A national oral-health research institute reviews population data from several provinces. One province reports an upward trend in the number of live births recorded during the previous surveillance cycle. Which population measure is being used?",

  choices: [
    { key: "A", text: "Natality" },
    { key: "B", text: "Morbidity" },
    { key: "C", text: "Mortality" },
    { key: "D", text: "Incidence" }
  ],

  correctAnswer: "A",

  rationale: "**A. Natality**\nNatality refers to the number of live births within a given population during a specified time period. It measures population growth and reproductive patterns.",

  incorrectRationales: {
    B: "**B. Morbidity**\nIncorrect – Morbidity measures disease or health impairment, not births.",
    C: "**C. Mortality**\nIncorrect – Mortality measures deaths within a population.",
    D: "**D. Incidence**\nIncorrect – Incidence measures new cases of a disease or condition."
  },

  boardTrap: "Natality concerns births. Morbidity concerns disease. Mortality concerns deaths.",

  memoryHook: "Natality = newborn numbers."
},
{
  id: "COMM-021",
  type: "community",
  subject: "Prevention Science & Public Health",
  topic: "Epidemiology – Risk Classification",
  difficulty: "extremely-difficult",

  question: "A regional oral-epidemiology unit evaluates longitudinal data from a high-risk adult cohort enrolled in a periodontal surveillance program. One variable consistently appeared after disease had already developed and was strongly associated with later progression, yet it did not precede disease onset and could not be modified to reduce susceptibility. Which classification best describes this type of variable?",

  choices: [
    { key: "A", text: "Attack factor" },
    { key: "B", text: "Risk factor" },
    { key: "C", text: "Risk marker" },
    { key: "D", text: "Risk indicator" }
  ],

  correctAnswer: "C",

  rationale: "**C. Risk marker**\nA risk marker is associated with disease presence or progression but does not precede disease development, is not necessarily causal, and is typically not modifiable. It predicts outcomes rather than explains etiology.",

  incorrectRationales: {
    A: "**A. Attack factor**\nIncorrect – Refers to direct mechanistic influences contributing to disease expression, not post-onset predictive variables.",
    B: "**B. Risk factor**\nIncorrect – A true risk factor must precede disease onset and be modifiable to reduce disease likelihood.",
    D: "**D. Risk indicator**\nIncorrect – Risk indicators are associated with disease but generally appear before or concurrent with disease and are often identified through cross-sectional data."
  },

  boardTrap: "Risk factors precede and are modifiable. Risk markers appear after disease and are not modifiable.",

  memoryHook: "Risk marker marks disease after it appears."
},
{
  id: "COMM-022",
  type: "community",
  subject: "Prevention Science & Public Health",
  topic: "Levels of Prevention – Primary",
  difficulty: "easy",

  question: "A county wellness program introduces a community fluoride-rinse initiative for all elementary schools after reviewing local oral-health surveillance data. Which type of prevention does this initiative represent?",

  choices: [
    { key: "A", text: "Secondary" },
    { key: "B", text: "Tertiary" },
    { key: "C", text: "Primary" },
    { key: "D", text: "Supportive" }
  ],

  correctAnswer: "C",

  rationale: "**C. Primary**\nPrimary prevention includes measures applied before disease occurs and aims to reduce risk at the population level. A fluoride-rinse program is preventive rather than diagnostic or restorative.",

  incorrectRationales: {
    A: "**A. Secondary**\nIncorrect – Secondary prevention involves early detection and intervention after disease onset.",
    B: "**B. Tertiary**\nIncorrect – Tertiary prevention focuses on restoring function after significant disease progression.",
    D: "**D. Supportive**\nIncorrect – This is not a recognized level of prevention."
  },

  boardTrap: "Fluoride programs are protective measures, not screening or restorative services.",

  memoryHook: "Primary = prevent before it starts."
},
{
  id: "COMM-023",
  type: "community",
  subject: "Prevention Science & Public Health",
  topic: "Levels of Prevention – Health Promotion",
  difficulty: "easy",

  question: "A rural health coalition launches a dietary counseling campaign targeting families to reduce added sugar consumption after identifying high community intake patterns. Which level of prevention does this campaign represent?",

  choices: [
    { key: "A", text: "Primary" },
    { key: "B", text: "Tertiary" },
    { key: "C", text: "Secondary" },
    { key: "D", text: "Supplemental" }
  ],

  correctAnswer: "A",

  rationale: "**A. Primary**\nPrimary prevention includes health promotion activities that reduce risk before disease develops. Communitywide dietary counseling lowers risk factors at the population level.",

  incorrectRationales: {
    B: "**B. Tertiary**\nIncorrect – Tertiary prevention addresses established disease with functional impairment.",
    C: "**C. Secondary**\nIncorrect – Secondary prevention focuses on early detection and management.",
    D: "**D. Supplemental**\nIncorrect – This is not a recognized level of prevention."
  },

  boardTrap: "Health promotion activities are primary prevention even if no disease is mentioned.",

  memoryHook: "Primary = promote and prevent."
},
{
  id: "COMM-024",
  type: "community",
  subject: "Prevention Science & Public Health",
  topic: "Levels of Prevention – Early Education",
  difficulty: "easy",

  question: "A community health department partners with local childcare centers to implement a toothbrushing curriculum for all preschool attendees. Which level of prevention is reflected by establishing a brushing curriculum for children who have not yet developed caries?",

  choices: [
    { key: "A", text: "Tertiary" },
    { key: "B", text: "Primary" },
    { key: "C", text: "Secondary" },
    { key: "D", text: "Baseline" }
  ],

  correctAnswer: "B",

  rationale: "**B. Primary**\nPrimary prevention includes educational and behavioral strategies that prevent disease before onset. Teaching routine toothbrushing to children without caries is a preventive health-promotion activity.",

  incorrectRationales: {
    A: "**A. Tertiary**\nIncorrect – Tertiary prevention restores function after significant disease progression.",
    C: "**C. Secondary**\nIncorrect – Secondary prevention involves early detection and management.",
    D: "**D. Baseline**\nIncorrect – This is not a recognized prevention category."
  },

  boardTrap: "Primary prevention does not require evidence of disease—education alone qualifies.",

  memoryHook: "Primary = prepare early."
},
{
  id: "COMM-025",
  type: "community",
  subject: "Prevention Science & Public Health",
  topic: "Levels of Prevention – Secondary",
  difficulty: "easy",

  question: "A community mobile clinic conducts annual oral screenings in agricultural regions where residents have limited access to dental services. Which level of prevention is represented by using mobile units to detect early oral disease?",

  choices: [
    { key: "A", text: "Secondary" },
    { key: "B", text: "Primary" },
    { key: "C", text: "Tertiary" },
    { key: "D", text: "Structural" }
  ],

  correctAnswer: "A",

  rationale: "**A. Secondary**\nSecondary prevention involves early detection of disease to halt or slow progression. Screening programs identify conditions at an early stage before significant damage occurs.",

  incorrectRationales: {
    B: "**B. Primary**\nIncorrect – Primary prevention occurs before disease onset.",
    C: "**C. Tertiary**\nIncorrect – Tertiary prevention addresses rehabilitation after significant disease progression.",
    D: "**D. Structural**\nIncorrect – This is not a recognized prevention category."
  },

  boardTrap: "Screening is secondary. Education is primary. Rehabilitation is tertiary.",

  memoryHook: "Secondary = seek and stop early."
},
{
  id: "COMM-026",
  type: "community",
  subject: "Prevention Science & Public Health",
  topic: "Levels of Prevention – Secondary Detection",
  difficulty: "easy",

  question: "A regional health board implements radiographic surveys in communities with rising early enamel lesions documented in surveillance reports. Which prevention level is demonstrated by communitywide radiographic surveys designed to identify early lesions?",

  choices: [
    { key: "A", text: "Secondary" },
    { key: "B", text: "Tertiary" },
    { key: "C", text: "Primary" },
    { key: "D", text: "Mechanical" }
  ],

  correctAnswer: "A",

  rationale: "**A. Secondary**\nSecondary prevention involves early detection of disease that has already begun. Radiographic surveys identify early lesions before significant progression occurs.",

  incorrectRationales: {
    B: "**B. Tertiary**\nIncorrect – Tertiary prevention addresses advanced disease and functional loss.",
    C: "**C. Primary**\nIncorrect – Primary prevention prevents disease before onset.",
    D: "**D. Mechanical**\nIncorrect – This is not a recognized prevention category."
  },

  boardTrap: "Early detection—even without symptoms—is secondary prevention.",

  memoryHook: "Secondary = spot it small."
},
{
  id: "COMM-027",
  type: "community",
  subject: "Prevention Science & Public Health",
  topic: "Levels of Prevention – Early Intervention",
  difficulty: "easy",

  question: "A city health system launches a follow-up program notifying residents when community caries-risk screenings reveal reversible lesions requiring early intervention. Which level of prevention is represented by this action?",

  choices: [
    { key: "A", text: "Tertiary" },
    { key: "B", text: "Secondary" },
    { key: "C", text: "Primary" },
    { key: "D", text: "Remedial" }
  ],

  correctAnswer: "B",

  rationale: "**B. Secondary**\nSecondary prevention focuses on identifying and managing early disease to halt progression. Addressing reversible lesions prevents worsening before significant damage occurs.",

  incorrectRationales: {
    A: "**A. Tertiary**\nIncorrect – Tertiary prevention addresses advanced disease requiring rehabilitation.",
    C: "**C. Primary**\nIncorrect – Primary prevention occurs before disease onset.",
    D: "**D. Remedial**\nIncorrect – This is not a recognized level of prevention."
  },

  boardTrap: "Reversible lesion signals secondary prevention.",

  memoryHook: "Secondary = intervene before it worsens."
},
{
  id: "COMM-028",
  type: "community",
  subject: "Prevention Science & Public Health",
  topic: "Levels of Prevention – Rehabilitation",
  difficulty: "easy",

  question: "A population-based oral-health initiative expands access to prosthodontic rehabilitation for adults with tooth loss resulting from untreated caries. Which level of prevention is demonstrated by expanding access to prosthodontic rehabilitation?",

  choices: [
    { key: "A", text: "Secondary" },
    { key: "B", text: "Primary" },
    { key: "C", text: "Tertiary" },
    { key: "D", text: "Procedural" }
  ],

  correctAnswer: "C",

  rationale: "**C. Tertiary**\nTertiary prevention involves rehabilitation and restoration of function after significant disease progression. Prosthodontic rehabilitation following tooth loss represents tertiary care.",

  incorrectRationales: {
    A: "**A. Secondary**\nIncorrect – Secondary prevention targets early disease detection and management.",
    B: "**B. Primary**\nIncorrect – Primary prevention occurs before disease onset.",
    D: "**D. Procedural**\nIncorrect – This is not a recognized prevention category."
  },

  boardTrap: "Restoring lost function indicates tertiary prevention.",

  memoryHook: "Tertiary = treatment to regain."
},
{
  id: "COMM-029",
  type: "community",
  subject: "Prevention Science & Public Health",
  topic: "Levels of Prevention – Advanced Disease Management",
  difficulty: "easy",

  question: "A statewide oral-health program provides multidisciplinary management for residents experiencing functional impairment due to severe chronic periodontitis. Which prevention level is represented by providing multidisciplinary care for functional impairment caused by advanced disease?",

  choices: [
    { key: "A", text: "Tertiary" },
    { key: "B", text: "Primary" },
    { key: "C", text: "Secondary" },
    { key: "D", text: "Adjunctive" }
  ],

  correctAnswer: "A",

  rationale: "**A. Tertiary**\nTertiary prevention involves complex management and rehabilitation after significant disease progression. Functional impairment resulting from advanced disease is characteristic of tertiary-level intervention.",

  incorrectRationales: {
    B: "**B. Primary**\nIncorrect – Primary prevention occurs before disease onset.",
    C: "**C. Secondary**\nIncorrect – Secondary prevention focuses on early detection and early-stage management.",
    D: "**D. Adjunctive**\nIncorrect – This is not a recognized prevention category."
  },

  boardTrap: "Functional impairment signals tertiary prevention.",

  memoryHook: "Tertiary = treat the consequence."
},
{
  id: "COMM-030",
  type: "community",
  subject: "Prevention Science & Public Health",
  topic: "Levels of Prevention – Surgical Rehabilitation",
  difficulty: "easy",

  question: "A metropolitan oral-health coalition sponsors surgical correction services for residents with significant oral structural changes resulting from long-standing infection. Which prevention level is demonstrated by offering surgical correction for structural changes related to chronic infection?",

  choices: [
    { key: "A", text: "Tertiary" },
    { key: "B", text: "Secondary" },
    { key: "C", text: "Primary" },
    { key: "D", text: "Functional" }
  ],

  correctAnswer: "A",

  rationale: "**A. Tertiary**\nTertiary prevention includes surgical or rehabilitative care provided after significant disease progression. Restoring structure or function following chronic infection is characteristic of tertiary-level intervention.",

  incorrectRationales: {
    B: "**B. Secondary**\nIncorrect – Secondary prevention focuses on early detection and early intervention.",
    C: "**C. Primary**\nIncorrect – Primary prevention occurs before disease onset.",
    D: "**D. Functional**\nIncorrect – This is not a recognized prevention category."
  },

  boardTrap: "When treatment restores structure after breakdown, it is tertiary prevention.",

  memoryHook: "Tertiary = rebuild after breakdown."
},
{
  id: "COMM-031",
  type: "community",
  subject: "Prevention Science & Public Health",
  topic: "Epidemiology – Sampling Methods",
  difficulty: "difficult",

  question: "A national oral-epidemiology research center selects participants based on professional assessment of which individuals best represent typical regional conditions rather than using probability-based methods. Which sampling method is represented?",

  choices: [
    { key: "A", text: "Stratified sampling" },
    { key: "B", text: "Systematic sampling" },
    { key: "C", text: "Random sampling" },
    { key: "D", text: "Judgment sampling" }
  ],

  correctAnswer: "D",

  rationale: "**D. Judgment sampling**\nJudgment (purposive) sampling involves selecting subjects based on the investigator’s professional assessment of who best represents key characteristics of the population. It is a non-probability sampling method.",

  incorrectRationales: {
    A: "**A. Stratified sampling**\nIncorrect – Stratified sampling divides the population into subgroups and selects proportionally, not subjectively.",
    B: "**B. Systematic sampling**\nIncorrect – Systematic sampling selects subjects at fixed intervals.",
    C: "**C. Random sampling**\nIncorrect – Random sampling ensures equal probability of selection."
  },

  boardTrap: "If selection is based on researcher discretion rather than equal probability, it is judgment sampling.",

  memoryHook: "Judgment sampling = chosen by judgment, not by chance."
},
{
  id: "COMM-032",
  type: "community",
  subject: "Prevention Science & Public Health",
  topic: "Epidemiology – Sampling Methods",
  difficulty: "difficult",

  question: "A regional oral-health equity team begins enrolling participants from high-traffic community locations and limits enrollment to individuals immediately accessible at the time investigators are present. No referral chains or subgroup quotas are used. Which sampling method is being used?",

  choices: [
    { key: "A", text: "Convenience sampling" },
    { key: "B", text: "Snowball sampling" },
    { key: "C", text: "Quota sampling" },
    { key: "D", text: "Sequential sampling" }
  ],

  correctAnswer: "A",

  rationale: "**A. Convenience sampling**\nConvenience sampling selects participants who are easiest to access and enrolls individuals available at the moment of contact without structured recruitment criteria.",

  incorrectRationales: {
    B: "**B. Snowball sampling**\nIncorrect – Snowball sampling relies on participant referrals to recruit additional subjects.",
    C: "**C. Quota sampling**\nIncorrect – Quota sampling requires predetermined subgroup proportions.",
    D: "**D. Sequential sampling**\nIncorrect – Sequential sampling involves stepwise inclusion until analytic criteria are met."
  },

  boardTrap: "Convenience = immediate availability. Snowball = referral network.",

  memoryHook: "Convenience = conveniently closest."
},
{
  id: "COMM-033",
  type: "community",
  subject: "Prevention Science & Public Health",
  topic: "Epidemiology – Study Design",
  difficulty: "extremely-difficult",

  question: "A state public health surveillance team identifies individuals aged 17–21 with documented neurodevelopmental deficits and matches them to unaffected peers. Investigators then review archived pediatric records and historical housing data to determine early-life exposure status. Which study design best characterizes this investigation?",

  choices: [
    { key: "A", text: "Prospective cohort study" },
    { key: "B", text: "Retrospective case-control study" },
    { key: "C", text: "Ecological study" },
    { key: "D", text: "Cross-sectional survey" }
  ],

  correctAnswer: "B",

  rationale: "**B. Retrospective case-control study**\nThe investigation begins with outcome groups (cases and controls) and looks backward to determine exposure status. Selection based on outcome followed by retrospective exposure assessment defines a case-control design.",

  incorrectRationales: {
    A: "**A. Prospective cohort study**\nIncorrect – Prospective cohort studies begin with exposure groups and follow participants forward.",
    C: "**C. Ecological study**\nIncorrect – Ecological studies analyze population-level data rather than individual historical records.",
    D: "**D. Cross-sectional survey**\nIncorrect – Cross-sectional studies measure exposure and outcome at the same time."
  },

  boardTrap: "If participants are selected based on outcome status, it is case-control—even when historical records are used.",

  memoryHook: "Case-control begins with the case, then searches back for the cause."
},
{
  id: "COMM-034",
  type: "community",
  subject: "Prevention Science & Public Health",
  topic: "Epidemiology – Study Design",
  difficulty: "extremely-difficult",

  question: "A regional oral-health research team enrolls middle-school students and categorizes them according to baseline acidic beverage consumption. Participants undergo annual enamel assessments for eight years to monitor incident erosion. Which study design is being used?",

  choices: [
    { key: "A", text: "Prospective cohort study" },
    { key: "B", text: "Retrospective case-control study" },
    { key: "C", text: "Cross-sectional survey" },
    { key: "D", text: "Ecological study" }
  ],

  correctAnswer: "A",

  rationale: "**A. Prospective cohort study**\nParticipants are grouped by exposure status at baseline and followed forward in time to observe development of a defined outcome. Tracking incident enamel erosion prospectively defines a prospective cohort design.",

  incorrectRationales: {
    B: "**B. Retrospective case-control study**\nIncorrect – Case-control studies begin with outcome groups and look backward for exposure history.",
    C: "**C. Cross-sectional survey**\nIncorrect – Cross-sectional studies measure exposure and outcome at one point in time.",
    D: "**D. Ecological study**\nIncorrect – Ecological studies analyze population-level data rather than individual longitudinal follow-up."
  },

  boardTrap: "Exposure first and outcome later signals prospective cohort—even if exposure groups already exist.",

  memoryHook: "Prospective cohorts prospect forward—exposure first, outcome later."
},
{
  id: "COMM-035",
  type: "community",
  subject: "Prevention Science & Public Health",
  topic: "Research Design – Experimental Studies",
  difficulty: "extremely-difficult",

  question: "A clinical research center enrolls adults with comparable baseline thermal hypersensitivity and randomly assigns them to receive either an investigational desensitizing varnish or an alternative protocol under identical conditions. Follow-up assessments are performed at predetermined intervals by examiners blinded to group allocation. Which study design does this investigation represent?",

  choices: [
    { key: "A", text: "Prospective cohort study" },
    { key: "B", text: "Observational cross-sectional study" },
    { key: "C", text: "Experimental study with a control group" },
    { key: "D", text: "Retrospective case-control study" }
  ],

  correctAnswer: "C",

  rationale: "**C. Experimental study with a control group**\nParticipants are randomly assigned to intervention groups, and investigators actively manipulate the treatment delivered. Random assignment and controlled comparison define an experimental design.",

  incorrectRationales: {
    A: "**A. Prospective cohort study**\nIncorrect – Cohort studies observe naturally occurring exposures without assigning interventions.",
    B: "**B. Observational cross-sectional study**\nIncorrect – Cross-sectional studies measure exposure and outcome at one time point without intervention.",
    D: "**D. Retrospective case-control study**\nIncorrect – Case-control studies begin with outcome groups and look backward for exposure history."
  },

  boardTrap: "If investigators assign the intervention, the study is experimental—not observational.",

  memoryHook: "When researchers control the treatment, it is experimental."
},
{
  id: "COMM-036",
  type: "community",
  subject: "Prevention Science & Public Health",
  topic: "Research Design – Blinding and Masking",
  difficulty: "difficult",

  question: "A research group assigns participants to receive either an investigational gingival topical agent or an alternative formulation packaged identically. Neither participants nor outcome assessors are informed of group assignment. Which type of masking is used in this investigation?",

  choices: [
    { key: "A", text: "Single-blind" },
    { key: "B", text: "Non-blind" },
    { key: "C", text: "Observer-blind" },
    { key: "D", text: "Double-blind" }
  ],

  correctAnswer: "D",

  rationale: "**D. Double-blind**\nBoth participants and outcome assessors are unaware of group assignment. Concealment from two parties defines a double-blind design and reduces expectancy and measurement bias.",

  incorrectRationales: {
    A: "**A. Single-blind**\nIncorrect – Single-blind studies conceal assignment from only one party, typically the participant.",
    B: "**B. Non-blind**\nIncorrect – In non-blind studies, all parties know the intervention received.",
    C: "**C. Observer-blind**\nIncorrect – Observer-blind designs conceal assignment only from the outcome assessor."
  },

  boardTrap: "Double-blind means both participant and evaluator are unaware—even if the clinician administering treatment knows.",

  memoryHook: "Double-blind = two in the dark."
},
{
  id: "COMM-037",
  type: "community",
  subject: "Prevention Science & Public Health",
  topic: "Research Design – Bias",
  difficulty: "extremely-difficult",

  question: "A university dental research unit enrolls participants during routine preventive visits. The principal investigator conducts baseline examinations, provides product instructions, and later performs all follow-up plaque measurements. Participants who appeared more motivated at baseline consistently show lower plaque scores at follow-up regardless of assigned product. Which form of bias is most likely affecting the study results?",

  choices: [
    { key: "A", text: "Selection bias" },
    { key: "B", text: "Observer bias" },
    { key: "C", text: "Recall bias" },
    { key: "D", text: "Nonresponse bias" }
  ],

  correctAnswer: "B",

  rationale: "**B. Observer bias**\nThe same investigator conducted baseline interactions and follow-up assessments. Preexisting expectations about participant motivation may have influenced outcome scoring, creating systematic measurement distortion characteristic of observer bias.",

  incorrectRationales: {
    A: "**A. Selection bias**\nIncorrect – Selection bias occurs during participant recruitment, not during measurement.",
    C: "**C. Recall bias**\nIncorrect – Recall bias involves inaccurate self-reported historical information.",
    D: "**D. Nonresponse bias**\nIncorrect – Nonresponse bias occurs when nonparticipants differ meaningfully from participants."
  },

  boardTrap: "If distortion occurs during measurement rather than enrollment, suspect observer bias.",

  memoryHook: "Observer bias = expectations influence evaluation."
},
{
  id: "COMM-038",
  type: "community",
  subject: "Prevention Science & Public Health",
  topic: "Research Design – Variables",
  difficulty: "difficult",

  question: "A research consortium evaluates whether a newly developed ultrasonic insert design influences post-instrumentation root surface roughness. After treatment, standardized replicas are analyzed using profilometry, and variability in surface roughness is compared across insert designs. Which element represents the dependent variable in this investigation?",

  choices: [
    { key: "A", text: "Insert design" },
    { key: "B", text: "Operator technique" },
    { key: "C", text: "Tooth type" },
    { key: "D", text: "Root surface roughness" }
  ],

  correctAnswer: "D",

  rationale: "**D. Root surface roughness**\nThe dependent variable is the measured outcome that changes in response to the manipulated factor. In this study, root surface roughness is measured after the intervention and compared across insert designs.",

  incorrectRationales: {
    A: "**A. Insert design**\nIncorrect – Insert design is the independent variable being manipulated.",
    B: "**B. Operator technique**\nIncorrect – Operator technique is a controlled variable to limit variability.",
    C: "**C. Tooth type**\nIncorrect – Tooth type is a controlled characteristic, not the measured outcome."
  },

  boardTrap: "The dependent variable is the outcome measured after the intervention—not the factor being manipulated.",

  memoryHook: "Dependent = depends on the intervention."
},
{
  id: "COMM-039",
  type: "community",
  subject: "Prevention Science & Public Health",
  topic: "Research Design – Independent vs Dependent Variables",
  difficulty: "difficult",

  question: "A multicenter investigation evaluates microleakage development after restorative procedures. Clinicians randomly assign different adhesive protocols while standardizing tooth preparation and operator technique. Microleakage is later quantified under controlled laboratory conditions. Which element represents the independent variable in this investigation?",

  choices: [
    { key: "A", text: "Tooth characteristics" },
    { key: "B", text: "Operator assignment" },
    { key: "C", text: "Adhesive protocol" },
    { key: "D", text: "Degree of microleakage" }
  ],

  correctAnswer: "C",

  rationale: "**C. Adhesive protocol**\nThe independent variable is the factor intentionally manipulated by investigators to observe its effect on an outcome. In this study, adhesive protocols are assigned to determine their influence on microleakage.",

  incorrectRationales: {
    A: "**A. Tooth characteristics**\nIncorrect – Tooth characteristics are controlled to reduce confounding.",
    B: "**B. Operator assignment**\nIncorrect – Operator variability is standardized and not the experimental factor of interest.",
    D: "**D. Degree of microleakage**\nIncorrect – Microleakage is the measured outcome and therefore the dependent variable."
  },

  boardTrap: "The independent variable is what investigators change—not what they measure.",

  memoryHook: "Independent = investigator initiates."
},
{
  id: "COMM-040",
  type: "community",
  subject: "Prevention Science & Public Health",
  topic: "Research Design – Quasi-Experimental",
  difficulty: "difficult",

  question: "A community dental program evaluates a new oral-health curriculum delivered in selected middle schools. Two schools adopt the curriculum, while two comparison schools continue standard instruction due to scheduling constraints. Students complete plaque assessments at baseline and three months later. Assignment is determined by administrative factors rather than randomization. Which study design does this investigation represent?",

  choices: [
    { key: "A", text: "Quasi-experimental study" },
    { key: "B", text: "Cross-sectional study" },
    { key: "C", text: "Retrospective cohort study" },
    { key: "D", text: "Randomized controlled trial" }
  ],

  correctAnswer: "A",

  rationale: "**A. Quasi-experimental study**\nA quasi-experimental design evaluates an intervention without true random assignment. In this study, the curriculum is implemented in some schools based on administrative factors rather than researcher-controlled allocation.",

  incorrectRationales: {
    B: "**B. Cross-sectional study**\nIncorrect – Cross-sectional studies measure exposure and outcome at one time point and do not involve longitudinal follow-up or intervention.",
    C: "**C. Retrospective cohort study**\nIncorrect – Retrospective cohorts use historical data rather than implementing a current intervention.",
    D: "**D. Randomized controlled trial**\nIncorrect – Randomization is absent in this investigation."
  },

  boardTrap: "Intervention without randomization signals quasi-experimental—not randomized controlled trial.",

  memoryHook: "Quasi = intervention without random assignment."
},
{
  id: "COMM-041",
  type: "community",
  subject: "Prevention Science & Public Health",
  topic: "Research Ethics – Institutional Review Board",
  difficulty: "moderate",

  question: "A dental research team plans a pilot investigation involving human participants and submits study materials to an oversight committee responsible for reviewing risks and participant protections. Which action is required before investigators may begin data collection?",

  choices: [
    { key: "A", text: "Completion of equipment calibration" },
    { key: "B", text: "Participant training sessions" },
    { key: "C", text: "Preliminary data modeling" },
    { key: "D", text: "Approval from the review board" }
  ],

  correctAnswer: "D",

  rationale: "**D. Approval from the review board**\nAny study involving human participants must receive formal approval from the designated Institutional Review Board (IRB) or ethics committee before data collection begins to ensure participant protection and ethical compliance.",

  incorrectRationales: {
    A: "**A. Completion of equipment calibration**\nIncorrect – Calibration improves data quality but does not authorize initiation of human research.",
    B: "**B. Participant training sessions**\nIncorrect – Training occurs after study approval and enrollment.",
    C: "**C. Preliminary data modeling**\nIncorrect – Modeling is optional and not a prerequisite for ethical approval."
  },

  boardTrap: "Methodological preparation does not replace ethical authorization.",

  memoryHook: "IRB first, procedures second."
},
{
  id: "COMM-042",
  type: "community",
  subject: "Prevention Science & Public Health",
  topic: "Research Analysis – Descriptive vs Inferential",
  difficulty: "moderate",

  question: "A regional oral-health surveillance group summarizes participant characteristics, frequency tables, and measures of central tendency without performing comparisons or hypothesis testing. Which type of analytical approach is being used at this stage of reporting?",

  choices: [
    { key: "A", text: "Descriptive" },
    { key: "B", text: "Inferential" },
    { key: "C", text: "Predictive" },
    { key: "D", text: "Experimental" }
  ],

  correctAnswer: "A",

  rationale: "**A. Descriptive**\nDescriptive analysis summarizes and organizes collected data without drawing conclusions about relationships or causation. Reporting frequencies, means, and baseline characteristics reflects pure description.",

  incorrectRationales: {
    B: "**B. Inferential**\nIncorrect – Inferential analysis involves hypothesis testing and generalization beyond the dataset.",
    C: "**C. Predictive**\nIncorrect – Predictive analysis uses models to forecast outcomes.",
    D: "**D. Experimental**\nIncorrect – Experimental approaches involve manipulation of variables."
  },

  boardTrap: "If no hypothesis testing or comparison occurs, the analysis is descriptive—not inferential.",

  memoryHook: "Descriptive describes; inferential decides."
},
{
  id: "COMM-043",
  type: "community",
  subject: "Prevention Science & Public Health",
  topic: "Research Analysis – Measures of Central Tendency",
  difficulty: "moderate",

  question: "A research team compiles post-placement sealant retention scores and calculates representative values to express the overall location of the data distribution before evaluating variability or subgroup differences. Which type of statistical measure is being applied?",

  choices: [
    { key: "A", text: "Measures of dispersion" },
    { key: "B", text: "Measures of frequency" },
    { key: "C", text: "Measures of central tendency" },
    { key: "D", text: "Measures of association" }
  ],

  correctAnswer: "C",

  rationale: "**C. Measures of central tendency**\nMeasures of central tendency (mean, median, mode) identify the typical or central value within a dataset. The analysts are determining a representative value around which retention scores cluster.",

  incorrectRationales: {
    A: "**A. Measures of dispersion**\nIncorrect – Dispersion measures describe variability or spread (range, variance, standard deviation).",
    B: "**B. Measures of frequency**\nIncorrect – Frequency measures summarize how often values occur but do not identify a single representative value.",
    D: "**D. Measures of association**\nIncorrect – Measures of association evaluate relationships between variables."
  },

  boardTrap: "If the goal is to find one value representing the dataset, it is central tendency—not dispersion or frequency.",

  memoryHook: "Central tendency finds the center of the story."
},
{
  id: "COMM-044",
  type: "community",
  subject: "Prevention Science & Public Health",
  topic: "Research Analysis – Frequency Distributions",
  difficulty: "moderate",

  question: "A dental public-health team lists each plaque index score exactly as recorded and counts how many participants received each specific score without placing values into intervals. Which type of frequency distribution is being used?",

  choices: [
    { key: "A", text: "Ungrouped" },
    { key: "B", text: "Grouped" },
    { key: "C", text: "Cumulative" },
    { key: "D", text: "Relative cumulative" }
  ],

  correctAnswer: "A",

  rationale: "**A. Ungrouped**\nAn ungrouped frequency distribution lists each individual data value exactly as collected and reports how often each value occurs. No class intervals are used.",

  incorrectRationales: {
    B: "**B. Grouped**\nIncorrect – Grouped distributions organize data into class intervals or ranges.",
    C: "**C. Cumulative**\nIncorrect – Cumulative distributions present running totals across ordered values.",
    D: "**D. Relative cumulative**\nIncorrect – Relative cumulative distributions display cumulative percentages."
  },

  boardTrap: "If no class intervals are used and each value stands alone, it is ungrouped.",

  memoryHook: "Ungrouped = every value stands alone."
},
{
  id: "COMM-045",
  type: "community",
  subject: "Prevention Science & Public Health",
  topic: "Research Analysis – Central Tendency and Outliers",
  difficulty: "difficult",

  question: "A research team compiles postoperative hypersensitivity scores on a 0–10 scale and discovers several extreme values from one clinic due to calibration issues. The investigators need a summary statistic that best represents the central location while minimizing distortion from these outliers. Which measure of central tendency is most appropriate?",

  choices: [
    { key: "A", text: "Mean" },
    { key: "B", text: "Median" },
    { key: "C", text: "Mode" },
    { key: "D", text: "Weighted mean" }
  ],

  correctAnswer: "B",

  rationale: "**B. Median**\nThe median is resistant to distortion from extreme values and provides a stable representation of central location when outliers are present.",

  incorrectRationales: {
    A: "**A. Mean**\nIncorrect – The mean is sensitive to extreme values and would be skewed upward by outliers.",
    C: "**C. Mode**\nIncorrect – The mode reflects the most frequent value but may not represent central location in continuous datasets.",
    D: "**D. Weighted mean**\nIncorrect – Weighting does not resolve distortion from outliers without justified differential weighting."
  },

  boardTrap: "Numeric data do not automatically mean use the mean—outliers favor the median.",

  memoryHook: "When outliers mislead, the median stays steadfast."
},
{
  id: "COMM-046",
  type: "community",
  subject: "Prevention Science & Public Health",
  topic: "Research Analysis – Measures of Dispersion",
  difficulty: "moderate",

  question: "A multidisciplinary team observes that attachment-level gains have similar means across clinics, but variability differs widely. Which statistical element best characterizes how widely the measurements spread around the central value?",

  choices: [
    { key: "A", text: "Mean" },
    { key: "B", text: "Median" },
    { key: "C", text: "Mode" },
    { key: "D", text: "Measure of dispersion" }
  ],

  correctAnswer: "D",

  rationale: "**D. Measure of dispersion**\nDispersion measures, such as range, variance, and standard deviation, quantify how widely values spread around a central value. They evaluate consistency and variability within the dataset.",

  incorrectRationales: {
    A: "**A. Mean**\nIncorrect – The mean reflects central location but does not describe variability.",
    B: "**B. Median**\nIncorrect – The median identifies the midpoint but does not assess spread.",
    C: "**C. Mode**\nIncorrect – The mode identifies the most frequent value and does not quantify variability."
  },

  boardTrap: "Similar means do not imply similar variability—dispersion reveals consistency.",

  memoryHook: "Central tendency tells the center; dispersion tells the distance."
},
{
  id: "COMM-047",
  type: "community",
  subject: "Prevention Science & Public Health",
  topic: "Research Analysis – Standard Deviation",
  difficulty: "moderate",

  question: "A multicenter evaluation reports identical mean pain scores across centers, but one center shows tightly clustered values while another shows wide variation. Which statistical measure best evaluates how far individual scores deviate from the overall mean?",

  choices: [
    { key: "A", text: "Standard deviation" },
    { key: "B", text: "Median" },
    { key: "C", text: "Mode" },
    { key: "D", text: "Interquartile count" }
  ],

  correctAnswer: "A",

  rationale: "**A. Standard deviation**\nStandard deviation quantifies the average distance of each data point from the mean, allowing comparison of variability when central values are similar.",

  incorrectRationales: {
    B: "**B. Median**\nIncorrect – The median identifies the midpoint but does not measure deviation from the mean.",
    C: "**C. Mode**\nIncorrect – The mode reflects the most frequent value and does not quantify variability.",
    D: "**D. Interquartile count**\nIncorrect – This is not a recognized statistical measure; the interquartile range measures spread but does not directly quantify average deviation from the mean."
  },

  boardTrap: "If the question asks about deviation from the mean, choose standard deviation.",

  memoryHook: "Standard deviation shows how far scores stray from the standard center."
},
{
  id: "COMM-048",
  type: "community",
  subject: "Prevention Science & Public Health",
  topic: "Research Analysis – Distribution Curves",
  difficulty: "moderate",

  question: "A dataset of periodontal pocket-depth measurements displays a perfectly symmetrical distribution with a single central peak. The mean, median, and mode coincide, and the curve tapers uniformly on both sides. Which type of distribution is represented?",

  choices: [
    { key: "A", text: "Normal curve" },
    { key: "B", text: "Positively skewed curve" },
    { key: "C", text: "Negatively skewed curve" },
    { key: "D", text: "Bimodal curve" }
  ],

  correctAnswer: "A",

  rationale: "**A. Normal curve**\nA normal distribution is symmetrical with a single peak and identical values for the mean, median, and mode. Uniform tapering on both sides confirms a normal curve.",

  incorrectRationales: {
    B: "**B. Positively skewed curve**\nIncorrect – A positively skewed curve has a longer right tail and unequal central tendency measures.",
    C: "**C. Negatively skewed curve**\nIncorrect – A negatively skewed curve has a longer left tail and unequal central tendency measures.",
    D: "**D. Bimodal curve**\nIncorrect – A bimodal curve has two distinct peaks."
  },

  boardTrap: "Symmetry plus identical mean, median, and mode signals a normal curve.",

  memoryHook: "In a normal curve, all three measures meet in the middle."
},
{
  id: "COMM-049",
  type: "community",
  subject: "Prevention Science & Public Health",
  topic: "Research Analysis – Skewed Distributions",
  difficulty: "moderate",

  question: "In Dataset 2, most patients report high pain scores, while a smaller subset reports markedly low scores, creating a long tail toward the lower end of the distribution. Which description best characterizes this distribution pattern?",

  choices: [
    { key: "A", text: "Symmetric distribution" },
    { key: "B", text: "Positively skewed distribution" },
    { key: "C", text: "Negatively skewed distribution" },
    { key: "D", text: "Uniform distribution" }
  ],

  correctAnswer: "C",

  rationale: "**C. Negatively skewed distribution**\nA negatively skewed distribution has a long tail extending toward lower values, with most observations clustered at the higher end. The tail direction determines skew, not the average value.",

  incorrectRationales: {
    A: "**A. Symmetric distribution**\nIncorrect – A symmetric distribution has balanced tails on both sides.",
    B: "**B. Positively skewed distribution**\nIncorrect – A positive skew has a long tail extending toward higher values.",
    D: "**D. Uniform distribution**\nIncorrect – A uniform distribution shows equal frequencies across values."
  },

  boardTrap: "Skew direction follows the tail—not the cluster of high or low values.",

  memoryHook: "Negative skew leans left."
},
{
  id: "COMM-050",
  type: "community",
  subject: "Prevention Science & Public Health",
  topic: "Research Methods – Validity vs Reliability",
  difficulty: "moderate",

  question: "A newly developed chairside assessment tool for early gingival inflammation is compared with histologic examination, the benchmark standard. Which characteristic is being evaluated through this comparison?",

  choices: [
    { key: "A", text: "Validity" },
    { key: "B", text: "Reliability" },
    { key: "C", text: "Reproducibility" },
    { key: "D", text: "Sensitivity" }
  ],

  correctAnswer: "A",

  rationale: "**A. Validity**\nValidity refers to how accurately an instrument measures what it is intended to measure. Comparing the tool’s scores to a benchmark standard evaluates whether it truly reflects gingival inflammation.",

  incorrectRationales: {
    B: "**B. Reliability**\nIncorrect – Reliability concerns consistency of repeated measurements, not accuracy relative to a gold standard.",
    C: "**C. Reproducibility**\nIncorrect – Reproducibility refers to agreement across operators or settings, not construct accuracy.",
    D: "**D. Sensitivity**\nIncorrect – Sensitivity relates to correctly identifying true positives, but this comparison evaluates overall measurement accuracy."
  },

  boardTrap: "Accuracy is validity; consistency is reliability.",

  memoryHook: "Validity asks: Does it measure what it claims?"
},
{
  id: "COMM-051",
  type: "community",
  subject: "Prevention Science & Public Health",
  topic: "Research Methods – Reliability",
  difficulty: "moderate",

  question: "During a multisite plaque screening program, investigators evaluate whether a single examiner produces consistent scores when assessing the same students across different sessions. Which measurement property is being assessed?",

  choices: [
    { key: "A", text: "Intra-examiner reliability" },
    { key: "B", text: "Inter-examiner reliability" },
    { key: "C", text: "Calibration" },
    { key: "D", text: "Measurement validity" }
  ],

  correctAnswer: "A",

  rationale: "**A. Intra-examiner reliability**\nIntra-examiner reliability measures the consistency of repeated assessments performed by the same examiner under similar conditions.",

  incorrectRationales: {
    B: "**B. Inter-examiner reliability**\nIncorrect – Inter-examiner reliability evaluates agreement between different examiners.",
    C: "**C. Calibration**\nIncorrect – Calibration refers to training and standardization procedures prior to data collection.",
    D: "**D. Measurement validity**\nIncorrect – Validity assesses accuracy of measurement, not consistency over time."
  },

  boardTrap: "Calibration prepares examiners; intra-reliability measures one examiner’s consistency.",

  memoryHook: "Intra = individual examiner, same scores, separate sessions."
},
{
  id: "COMM-052",
  type: "community",
  subject: "Prevention Science & Public Health",
  topic: "Research Analysis – Correlation",
  difficulty: "difficult",

  question: "A longitudinal evaluation derives a numerical value between –1.0 and 0.0 to describe the strength and direction of the relationship between adherence scores and inflammation levels. Which statistical concept is represented by this calculated value?",

  choices: [
    { key: "A", text: "Positive correlation" },
    { key: "B", text: "Correlation coefficient" },
    { key: "C", text: "Negative association" },
    { key: "D", text: "Predictive ratio" }
  ],

  correctAnswer: "B",

  rationale: "**B. Correlation coefficient**\nA correlation coefficient is a numerical value ranging from –1.0 to +1.0 that quantifies both the strength and direction of a relationship between two continuous variables.",

  incorrectRationales: {
    A: "**A. Positive correlation**\nIncorrect – A positive correlation indicates variables move in the same direction, which is not the case here.",
    C: "**C. Negative association**\nIncorrect – This describes direction only and does not represent the calculated statistic.",
    D: "**D. Predictive ratio**\nIncorrect – A predictive ratio is not used to quantify linear relationships between continuous variables."
  },

  boardTrap: "Direction alone is not the statistic. The number between –1 and +1 is the correlation coefficient.",

  memoryHook: "Correlation coefficient = one number for strength and direction."
},
{
  id: "COMM-053",
  type: "community",
  subject: "Prevention Science & Public Health",
  topic: "Research Analysis – Hypothesis Testing",
  difficulty: "moderate",

  question: "A clinical trial comparing two desensitizing agents produces a statistical value representing the probability of observing the measured difference under the assumption that no true difference exists. Which statistical element represents this probability?",

  choices: [
    { key: "A", text: "p-value" },
    { key: "B", text: "Confidence interval" },
    { key: "C", text: "Effect size" },
    { key: "D", text: "Power estimate" }
  ],

  correctAnswer: "A",

  rationale: "**A. p-value**\nThe p-value represents the probability of obtaining the observed result, or one more extreme, if the null hypothesis is true. It quantifies the likelihood that the difference occurred by chance.",

  incorrectRationales: {
    B: "**B. Confidence interval**\nIncorrect – A confidence interval provides a range of plausible values for the true effect, not the probability that the result occurred by chance.",
    C: "**C. Effect size**\nIncorrect – Effect size describes the magnitude of difference, not the probability of random occurrence.",
    D: "**D. Power estimate**\nIncorrect – Power reflects the probability of detecting a true effect, not the probability that a finding occurred by chance."
  },

  boardTrap: "Only the p-value answers the chance question in hypothesis testing.",

  memoryHook: "p-value = probability the result happened by chance."
},
{
  id: "COMM-054",
  type: "community",
  subject: "Prevention Science & Public Health",
  topic: "Dental Indices – Scientific Properties",
  difficulty: "moderate",

  question: "Which characteristic is essential for a dental index to be considered scientifically acceptable?",

  choices: [
    { key: "A", text: "It must be used only in clinical trials" },
    { key: "B", text: "It must produce consistent results when applied repeatedly" },
    { key: "C", text: "It must require no examiner training" },
    { key: "D", text: "It must measure multiple conditions at once" }
  ],

  correctAnswer: "B",

  rationale: "**B. It must produce consistent results when applied repeatedly**\nA scientifically acceptable dental index must demonstrate reliability, meaning it yields consistent results under similar conditions. Consistency ensures dependable and comparable findings.",

  incorrectRationales: {
    A: "**A. It must be used only in clinical trials**\nIncorrect – Dental indices are used in research, community health, and clinical settings.",
    C: "**C. It must require no examiner training**\nIncorrect – Most indices require training to ensure standardization and accuracy.",
    D: "**D. It must measure multiple conditions at once**\nIncorrect – An index may measure one or multiple conditions; scope does not determine acceptability."
  },

  boardTrap: "Breadth and convenience do not define scientific quality—reliability does.",

  memoryHook: "A good index is reliable—it says the same thing each time."
},
{
  id: "COMM-055",
  type: "community",
  subject: "Prevention Science & Public Health",
  topic: "Dental Indices – Scientific Properties",
  difficulty: "easy",

  question: "Which characteristic is required for a dental index to allow investigators to measure a condition in numerical form?",

  choices: [
    { key: "A", text: "Clear" },
    { key: "B", text: "Accepted" },
    { key: "C", text: "Quantifiable" },
    { key: "D", text: "Sensitive" }
  ],

  correctAnswer: "C",

  rationale: "**C. Quantifiable**\nA quantifiable index produces numerical data that can be measured, recorded, and analyzed statistically, allowing objective comparison.",

  incorrectRationales: {
    A: "**A. Clear**\nIncorrect – Clarity improves understanding but does not ensure numerical measurement.",
    B: "**B. Accepted**\nIncorrect – Professional acceptance does not determine whether the index produces numerical values.",
    D: "**D. Sensitive**\nIncorrect – Sensitivity refers to detecting small changes, not producing numerical data."
  },

  boardTrap: "Sensitivity detects change; quantifiable produces numbers.",

  memoryHook: "Quantifiable means countable."
},
{
  id: "COMM-056",
  type: "community",
  subject: "Prevention Science & Public Health",
  topic: "Dental Indices – Ramfjord Teeth",
  difficulty: "moderate",

  question: "In a longitudinal periodontal study using standardized partial-mouth scoring, investigators repeatedly examine a specific subset of teeth representing anterior and posterior regions. Which designated tooth set is routinely used for this purpose?",

  choices: [
    { key: "A", text: "Ramfjord teeth" },
    { key: "B", text: "Universal posterior quadrant sample" },
    { key: "C", text: "Modified arch-sectional set" },
    { key: "D", text: "Sequential contralateral pair set" }
  ],

  correctAnswer: "A",

  rationale: "**A. Ramfjord teeth**\nThe Ramfjord teeth are a standardized group of six teeth used in partial-mouth periodontal scoring. They provide representative coverage for plaque, calculus, and gingival assessment in index-based evaluations.",

  incorrectRationales: {
    B: "**B. Universal posterior quadrant sample**\nIncorrect – This is not a recognized standardized index-based tooth set.",
    C: "**C. Modified arch-sectional set**\nIncorrect – This is not an established or validated periodontal index selection.",
    D: "**D. Sequential contralateral pair set**\nIncorrect – Contralateral pairing is not associated with standardized periodontal index scoring."
  },

  boardTrap: "Reduced-tooth sampling is not arbitrary—Ramfjord teeth are the validated six.",

  memoryHook: "Ramfjord = reliable six for standardized scoring."
},
{
  id: "COMM-057",
  type: "community",
  subject: "Prevention Science & Public Health",
  topic: "Dental Indices – Ramfjord Teeth Identification",
  difficulty: "moderate",

  question: "A periodontal outcomes study uses a standardized partial-mouth scoring system and examines the same recognized representative tooth set at each interval. Which tooth set corresponds to the established periodontal index group?",

  choices: [
    { key: "A", text: "2, 8, 14, 20, 26, 32" },
    { key: "B", text: "4, 7, 13, 18, 24, 30" },
    { key: "C", text: "1, 10, 15, 21, 27, 31" },
    { key: "D", text: "3, 9, 12, 19, 25, 28" }
  ],

  correctAnswer: "D",

  rationale: "**D. 3, 9, 12, 19, 25, 28**\nThese are the Ramfjord teeth, the standardized six-tooth set used in several periodontal indices. They provide representative sampling across both arches and anterior and posterior regions.",

  incorrectRationales: {
    A: "**A. 2, 8, 14, 20, 26, 32**\nIncorrect – This grouping does not correspond to any recognized periodontal index set.",
    B: "**B. 4, 7, 13, 18, 24, 30**\nIncorrect – Although distributed across arches, this is not a validated index sampling group.",
    C: "**C. 1, 10, 15, 21, 27, 31**\nIncorrect – These teeth do not form a recognized standardized periodontal index set."
  },

  boardTrap: "Even spacing does not equal standardization. Only 3-9-12-19-25-28 defines Ramfjord.",

  memoryHook: "Ramfjord rhythm: 3-9-12-19-25-28."
},
{
  id: "COMM-058",
  type: "community",
  subject: "Prevention Science & Public Health",
  topic: "Dental Indices – OHI-S Plaque Component",
  difficulty: "moderate",

  question: "In a school-based prevention program, examiners use a standardized plaque index that scores specified teeth and surfaces rather than the entire dentition. Which tooth-and-surface combination corresponds to the standard selection used for this plaque index?",

  choices: [
    { key: "A", text: "All posterior teeth, lingual surfaces only" },
    { key: "B", text: "Mandibular molars and maxillary incisors on designated buccal and lingual surfaces" },
    { key: "C", text: "Maxillary first molars and mandibular canines on facial surfaces only" },
    { key: "D", text: "Maxillary premolars and mandibular incisors on mesial surfaces only" }
  ],

  correctAnswer: "B",

  rationale: "**B. Mandibular molars and maxillary incisors on designated buccal and lingual surfaces**\nThe Oral Hygiene Index–Simplified (OHI-S) plaque component uses specific maxillary incisors and mandibular molars, scoring designated buccal and lingual surfaces to provide representative assessment of oral hygiene.",

  incorrectRationales: {
    A: "**A. All posterior teeth, lingual surfaces only**\nIncorrect – This does not match a standardized index and omits anterior representation.",
    C: "**C. Maxillary first molars and mandibular canines on facial surfaces only**\nIncorrect – This is not a validated OHI-S tooth/surface combination and excludes required lingual scoring.",
    D: "**D. Maxillary premolars and mandibular incisors on mesial surfaces only**\nIncorrect – Mesial-only scoring does not correspond to OHI-S methodology."
  },

  boardTrap: "Selective sampling is not arbitrary—OHI-S specifies exact teeth and surfaces.",

  memoryHook: "OHI-S: front top, back bottom—facial and lingual."
},
{
  id: "COMM-059",
  type: "community",
  subject: "Prevention Science & Public Health",
  topic: "Dental Indices – Gingival Index",
  difficulty: "moderate",

  question: "During periodontal maintenance visits, examiners score gingival units for color changes, contour alterations, and bleeding on gentle probing. Scores are recorded from multiple areas per tooth, and no attachment loss or pocket depth measurements are required. Which index is being applied?",

  choices: [
    { key: "A", text: "Sulcus Bleeding Index" },
    { key: "B", text: "Modified Plaque Index" },
    { key: "C", text: "Gingival Index" },
    { key: "D", text: "Periodontal Index" }
  ],

  correctAnswer: "C",

  rationale: "**C. Gingival Index**\nThe Gingival Index evaluates qualitative signs of gingival inflammation, including color, contour, and bleeding on gentle probing. It provides an overall assessment of tissue condition without requiring measurements of attachment loss or pocket depth.",

  incorrectRationales: {
    A: "**A. Sulcus Bleeding Index**\nIncorrect – This index primarily measures bleeding response and does not incorporate broader tissue characteristics such as color and contour.",
    B: "**B. Modified Plaque Index**\nIncorrect – This index measures plaque accumulation, not gingival inflammatory characteristics.",
    D: "**D. Periodontal Index**\nIncorrect – The Periodontal Index includes assessment of attachment changes and periodontal destruction, which are not described in this scenario."
  },

  boardTrap: "If color and contour are included, it is not bleeding-only—think Gingival Index.",

  memoryHook: "Gingival Index tells the gingiva’s story—color, contour, bleeding."
},
{
  id: "COMM-060",
  type: "community",
  subject: "Prevention Science & Public Health",
  topic: "Dental Indices – Plaque Index (Silness & Löe)",
  difficulty: "moderate",

  question: "Examiners dry teeth, gently pass a probe along the cervical one-third of four surfaces per tooth, and score plaque thickness at the gingival margin without disclosing agents. Which index is being used?",

  choices: [
    { key: "A", text: "Plaque Index (PLI / Silness and Löe)" },
    { key: "B", text: "Oral Hygiene Index" },
    { key: "C", text: "Simplified Debris Index" },
    { key: "D", text: "Patient Hygiene Performance Index" }
  ],

  correctAnswer: "A",

  rationale: "**A. Plaque Index (PLI / Silness and Löe)**\nThe Plaque Index evaluates plaque thickness at the gingival margin on four surfaces per tooth without the use of disclosing agents. It differentiates plaque detectable only by probe from plaque visible or forming a continuous cervical band.",

  incorrectRationales: {
    B: "**B. Oral Hygiene Index**\nIncorrect – The OHI assesses debris and calculus on selected teeth rather than plaque thickness at the gingival margin on four surfaces.",
    C: "**C. Simplified Debris Index**\nIncorrect – This index measures debris on specific teeth but does not grade plaque thickness at the gingival margin using probe detection.",
    D: "**D. Patient Hygiene Performance Index**\nIncorrect – This index relies on disclosed plaque patterns rather than undyed plaque detected by probing."
  },

  boardTrap: "Undisclosed plaque + four surfaces + gingival margin = Silness & Löe PLI.",

  memoryHook: "PLI = plaque at the line—four surfaces, no dye."
},
{
  id: "COMM-061",
  type: "community",
  subject: "Prevention Science & Public Health",
  topic: "Dental Indices – DMFT",
  difficulty: "moderate",

  question: "In a regional children’s oral-health program, examiners record the number of permanent teeth that are decayed, missing due to caries, or filled. Primary teeth and surfaces are not included. Which caries index is being applied?",

  choices: [
    { key: "A", text: "defs" },
    { key: "B", text: "DMFS" },
    { key: "C", text: "dft" },
    { key: "D", text: "DMFT" }
  ],

  correctAnswer: "D",

  rationale: "**D. DMFT**\nDMFT measures caries experience in the permanent dentition by counting decayed, missing due to caries, and filled teeth. The scenario specifies permanent teeth and tooth-level scoring, which matches DMFT.",

  incorrectRationales: {
    A: "**A. defs**\nIncorrect – defs applies to primary teeth and measures surfaces, not permanent tooth counts.",
    B: "**B. DMFS**\nIncorrect – DMFS measures decayed, missing, and filled surfaces rather than teeth.",
    C: "**C. dft**\nIncorrect – dft applies to primary teeth and does not include missing teeth due to caries."
  },

  boardTrap: "If surfaces are not counted and dentition is permanent, think DMFT—not DMFS.",

  memoryHook: "DMFT = Decayed, Missing, Filled Teeth."
},
{
  id: "COMM-062",
  type: "community",
  subject: "Prevention Science & Public Health",
  topic: "Periodontal Screening – PSR Codes",
  difficulty: "difficult",

  question: "During a PSR screening using a WHO probe, a sextant presents with calculus and defective margins. The colored band remains partially visible during probing, and no furcation, mobility, or mucogingival problems are detected. Which PSR code should be assigned?",

  choices: [
    { key: "A", text: "Code 1" },
    { key: "B", text: "Code 2" },
    { key: "C", text: "Code 3" },
    { key: "D", text: "Code 4" }
  ],

  correctAnswer: "C",

  rationale: "**C. Code 3**\nCode 3 is assigned when the colored band on the WHO probe is partially visible, indicating probing depths between 3.5 and 5.5 mm. PSR coding prioritizes probing depth over the presence of calculus or defective margins.",

  incorrectRationales: {
    A: "**A. Code 1**\nIncorrect – Code 1 indicates bleeding with the colored band fully visible and no calculus or defective margins.",
    B: "**B. Code 2**\nIncorrect – Code 2 includes calculus or defective margins but requires the colored band to remain fully visible.",
    D: "**D. Code 4**\nIncorrect – Code 4 is assigned when the colored band is completely hidden, indicating probing depths greater than 5.5 mm."
  },

  boardTrap: "PSR coding follows probe depth first—calculus does not override band visibility.",

  memoryHook: "Partially visible band = Code 3."
},
{
  id: "COMM-063",
  type: "community",
  subject: "Prevention Science & Public Health",
  topic: "Dental Indices – Dean’s Fluorosis Index",
  difficulty: "difficult",

  question: "An adolescent presents with smooth enamel showing opaque white areas, brown staining, and discrete pitting on multiple teeth. More than half of the enamel surface is involved, but there is no confluent loss of outer enamel structure. According to Dean’s Index, which classification best represents this presentation?",

  choices: [
    { key: "A", text: "Moderate" },
    { key: "B", text: "Very mild" },
    { key: "C", text: "Mild" },
    { key: "D", text: "Severe" }
  ],

  correctAnswer: "A",

  rationale: "**A. Moderate**\nModerate fluorosis includes marked enamel changes with brown staining and discrete pitting involving at least half of the tooth surface, without the confluent structural breakdown seen in severe cases.",

  incorrectRationales: {
    B: "**B. Very mild**\nIncorrect – Very mild fluorosis presents as small white flecks affecting less than 25% of the surface and does not include staining or pitting.",
    C: "**C. Mild**\nIncorrect – Mild fluorosis involves opaque white areas affecting less than 50% of the surface and typically lacks significant pitting and staining.",
    D: "**D. Severe**\nIncorrect – Severe fluorosis includes widespread enamel hypoplasia and confluent pitting with possible corroded appearance."
  },

  boardTrap: "Pitting alone does not equal severe—extent and structural breakdown determine the level.",

  memoryHook: "Moderate = more than mild, not yet severe—widespread pitting without collapse."
},
{
  id: "COMM-064",
  type: "community",
  subject: "Prevention Science & Public Health",
  topic: "Nutrition Assessment – Healthy Eating Index",
  difficulty: "moderate",

  question: "Investigators convert 24-hour dietary recall data into standardized servings across multiple food groups, score each component against national nutrition benchmarks, and combine them into a single overall diet-quality score. Which evaluation tool is being used?",

  choices: [
    { key: "A", text: "Glycemic Load Index" },
    { key: "B", text: "Nutrient Deficiency Ratio" },
    { key: "C", text: "Healthy Eating Index" },
    { key: "D", text: "Caloric Distribution Scale" }
  ],

  correctAnswer: "C",

  rationale: "**C. Healthy Eating Index**\nThe Healthy Eating Index evaluates overall diet quality by scoring multiple dietary components against national nutritional standards and combining them into a composite score.",

  incorrectRationales: {
    A: "**A. Glycemic Load Index**\nIncorrect – This evaluates carbohydrate-related glycemic impact rather than overall diet quality.",
    B: "**B. Nutrient Deficiency Ratio**\nIncorrect – This is not a standardized composite diet-quality scoring tool.",
    D: "**D. Caloric Distribution Scale**\nIncorrect – This would assess macronutrient proportions rather than adherence to comprehensive dietary guidelines."
  },

  boardTrap: "Single-nutrient tools are not full-diet scoring systems—HEI evaluates the whole pattern.",

  memoryHook: "HEI = Healthy Eating Inventory."
},
{
  id: "COMM-065",
  type: "community",
  subject: "Prevention Science & Public Health",
  topic: "Nutrition Standards – Dietary Reference Intakes",
  difficulty: "moderate",

  question: "Investigators compare adults’ daily vitamin and mineral intake with nationally established standards that include RDA, AI, EAR, and UL values. Which classification system provides these nutrient benchmarks?",

  choices: [
    { key: "A", text: "Dietary Reference Intakes" },
    { key: "B", text: "Estimated Caloric Range" },
    { key: "C", text: "National Meal Pattern Guide" },
    { key: "D", text: "Dietary Exchange System" }
  ],

  correctAnswer: "A",

  rationale: "**A. Dietary Reference Intakes**\nDietary Reference Intakes (DRIs) include RDA, AI, EAR, and UL values and are used to evaluate and plan nutrient intake for healthy populations based on national scientific standards.",

  incorrectRationales: {
    B: "**B. Estimated Caloric Range**\nIncorrect – Caloric ranges address energy needs, not micronutrient reference values.",
    C: "**C. National Meal Pattern Guide**\nIncorrect – Meal pattern guides focus on food-group planning rather than nutrient intake thresholds.",
    D: "**D. Dietary Exchange System**\nIncorrect – The exchange system categorizes foods by macronutrient content and is not a micronutrient reference framework."
  },

  boardTrap: "Food planning tools are not nutrient standards—DRIs provide intake benchmarks.",

  memoryHook: "DRIs = Dietary Rules for Intake."
},
{
  id: "COMM-066",
  type: "community",
  subject: "Prevention Science & Public Health",
  topic: "Community Assessment – Basic Screening Survey",
  difficulty: "moderate",

  question: "A rural oral-health surveillance initiative must evaluate large numbers of school-aged children quickly, using minimal equipment and limited funding. Which assessment method is most appropriate for this population-based program?",

  choices: [
    { key: "A", text: "Complete clinical examination with radiographs" },
    { key: "B", text: "Basic screening survey using visual assessments" },
    { key: "C", text: "Limited clinical examination with full periodontal charting" },
    { key: "D", text: "Comprehensive examination requiring diagnostic instruments and laboratory tests" }
  ],

  correctAnswer: "B",

  rationale: "**B. Basic screening survey using visual assessments**\nA Basic Screening Survey (BSS) allows rapid visual assessment of large populations using minimal equipment and limited resources. It is specifically designed for community-level surveillance and planning.",

  incorrectRationales: {
    A: "**A. Complete clinical examination with radiographs**\nIncorrect – This approach is time-intensive and impractical for large-scale population screening.",
    C: "**C. Limited clinical examination with full periodontal charting**\nIncorrect – Full periodontal charting requires extensive instrumentation and time.",
    D: "**D. Comprehensive examination requiring diagnostic instruments and laboratory tests**\nIncorrect – Community surveillance prioritizes feasibility over comprehensive diagnostics."
  },

  boardTrap: "Community surveillance favors feasibility and scale, not full diagnostic detail.",

  memoryHook: "Big population, brief exam—choose Basic Screening Survey."
},
{
  id: "COMM-067",
  type: "community",
  subject: "Prevention Science & Public Health",
  topic: "Access to Care – Socioeconomic Barriers",
  difficulty: "moderate",

  question: "A mobile dental prevention program experiences low participation in one district. Families report transportation difficulty, inability to take time off work, and concern about potential costs despite services being free. Which factor most accurately represents the primary barrier to access?",

  choices: [
    { key: "A", text: "Geographic isolation" },
    { key: "B", text: "Socioeconomic status" },
    { key: "C", text: "Cultural preference" },
    { key: "D", text: "Provider availability" }
  ],

  correctAnswer: "B",

  rationale: "**B. Socioeconomic status**\nTransportation limitations, work constraints, and perceived financial burden are classic socioeconomic barriers that restrict access to care even when services are physically available.",

  incorrectRationales: {
    A: "**A. Geographic isolation**\nIncorrect – The mobile program operates within the district, so physical location is not the primary limitation.",
    C: "**C. Cultural preference**\nIncorrect – No cultural beliefs or distrust are described as influencing participation.",
    D: "**D. Provider availability**\nIncorrect – Providers are present through the mobile program; clinician supply is not the limiting factor."
  },

  boardTrap: "Transportation barriers tied to work and cost are socioeconomic—not geographic.",

  memoryHook: "SES barriers = time, transport, and perceived cost."
},
{
  id: "COMM-068",
  type: "community",
  subject: "Prevention Science & Public Health",
  topic: "Community Assessment – ADA Examination Types",
  difficulty: "difficult",

  question: "A school-based sealant program evaluation uses mouth mirrors and adequate lighting to assess caries and sealant retention. No radiographs or diagnostic tests are used. Which type of evaluation method is being conducted?",

  choices: [
    { key: "A", text: "Type 1" },
    { key: "B", text: "Type 2" },
    { key: "C", text: "Type 3" },
    { key: "D", text: "Type 4" }
  ],

  correctAnswer: "C",

  rationale: "**C. Type 3**\nType 3 examinations use mouth mirrors and illumination without radiographs. This method allows efficient community-level assessment within time and resource constraints.",

  incorrectRationales: {
    A: "**A. Type 1**\nIncorrect – Type 1 includes complete examination with radiographs and full diagnostic procedures.",
    B: "**B. Type 2**\nIncorrect – Type 2 includes limited radiographs, which are not available in this scenario.",
    D: "**D. Type 4**\nIncorrect – Type 4 is a screening without instrumentation or minimal inspection, not a structured mirror-and-light exam."
  },

  boardTrap: "Mirror + light without radiographs = Type 3, not Type 4.",

  memoryHook: "Type 3 = mirror and light, no films."
},
{
  id: "COMM-069",
  type: "community",
  subject: "Prevention Science & Public Health",
  topic: "Community Assessment – Type 4 / Basic Screening Survey",
  difficulty: "difficult",

  question: "A statewide monitoring initiative conducts rapid visual inspections of more than 5,000 students using only disposable mouth mirrors and ambient lighting in classroom settings. No probing, explorers, radiographs, or diagnostic instruments are used. Which evaluation method is being applied?",

  choices: [
    { key: "A", text: "Type 3 examination" },
    { key: "B", text: "Type 4 examination / Basic Screening Survey (BSS)" },
    { key: "C", text: "Type 2 examination" },
    { key: "D", text: "Type 1 examination" }
  ],

  correctAnswer: "B",

  rationale: "**B. Type 4 examination / Basic Screening Survey (BSS)**\nType 4 examinations, now commonly referred to as Basic Screening Surveys (BSS), involve rapid visual inspection using minimal equipment in nonclinical settings. They are designed for large-scale population assessments under strict time and resource constraints.",

  incorrectRationales: {
    A: "**A. Type 3 examination**\nIncorrect – Type 3 uses mirror and illumination but involves more structured clinical examination than rapid screening.",
    C: "**C. Type 2 examination**\nIncorrect – Type 2 includes radiographs and more detailed clinical procedures.",
    D: "**D. Type 1 examination**\nIncorrect – Type 1 is a comprehensive examination including full diagnostics and radiographs."
  },

  boardTrap: "Mirror alone does not mean Type 3—nonclinical rapid screening defines Type 4/BSS.",

  memoryHook: "BSS = Basic, Brief, Screening."
},
{
  id: "COMM-070",
  type: "community",
  subject: "Prevention Science & Public Health",
  topic: "Public Programs – Medicaid vs Medicare",
  difficulty: "moderate",

  question: "A 27-year-old adult with limited income receives state-supported medical assistance that varies in coverage by state. The patient has no disability qualification and no federal retirement eligibility. Which program most appropriately matches this coverage profile?",

  choices: [
    { key: "A", text: "Medicare Part A" },
    { key: "B", text: "Medicare Part B" },
    { key: "C", text: "Medicare Part D" },
    { key: "D", text: "Medicaid" }
  ],

  correctAnswer: "D",

  rationale: "**D. Medicaid**\nMedicaid is a joint federal–state program that provides health coverage based on income eligibility. Benefits vary by state and do not require age or employment-based qualifications.",

  incorrectRationales: {
    A: "**A. Medicare Part A**\nIncorrect – Medicare eligibility is generally based on age (65+) or qualifying disability/work history.",
    B: "**B. Medicare Part B**\nIncorrect – Part B is part of Medicare and requires Medicare eligibility.",
    C: "**C. Medicare Part D**\nIncorrect – Part D provides prescription coverage under Medicare, which the patient does not qualify for."
  },

  boardTrap: "Income-based = Medicaid; age/disability-based = Medicare.",

  memoryHook: "MediCAID = CAID for income; MediCARE = CARE for seniors."
},
{
  id: "COMM-071",
  type: "community",
  subject: "Prevention Science & Public Health",
  topic: "Program Planning – Goals vs Objectives",
  difficulty: "moderate",

  question: "In a treatment plan for plaque-induced gingivitis, the hygienist must document specific statements that identify the exact action to be taken, how it will be carried out, and the timeframe for completion. Which component of the plan requires this level of specificity?",

  choices: [
    { key: "A", text: "Prognosis" },
    { key: "B", text: "Problem list" },
    { key: "C", text: "Long-term goal" },
    { key: "D", text: "Objective" }
  ],

  correctAnswer: "D",

  rationale: "**D. Objective**\nObjectives are specific, measurable statements that define what action will be taken, how it will be implemented, and within what timeframe. They operationalize broader goals into concrete steps.",

  incorrectRationales: {
    A: "**A. Prognosis**\nIncorrect – Prognosis predicts anticipated outcomes and does not define specific actions or timelines.",
    B: "**B. Problem list**\nIncorrect – The problem list identifies issues but does not specify measurable actions or deadlines.",
    C: "**C. Long-term goal**\nIncorrect – Long-term goals describe desired outcomes but lack the detailed 'what, how, and when' components of objectives."
  },

  boardTrap: "Goals describe outcomes; objectives describe action steps with timelines.",

  memoryHook: "Objective = what, how, and when."
},
{
  id: "COMM-072",
  type: "community",
  subject: "Prevention Science & Public Health",
  topic: "Behavioral Change – Learning Ladder",
  difficulty: "moderate",

  question: "A patient reviews intraoral images, asks detailed questions about interdental cleaning tools, compares options, and requests a demonstration before choosing an approach. The patient expresses intent to try methods but has not yet begun consistent daily use. Which stage of the learning ladder does this represent?",

  choices: [
    { key: "A", text: "Awareness" },
    { key: "B", text: "Self-interest" },
    { key: "C", text: "Involvement" },
    { key: "D", text: "Habit" }
  ],

  correctAnswer: "C",

  rationale: "**C. Involvement**\nIn the involvement stage, the patient actively engages with information, compares alternatives, asks detailed questions, and begins exploring how to integrate a behavior. The patient is beyond awareness or self-interest but has not yet established consistent action.",

  incorrectRationales: {
    A: "**A. Awareness**\nIncorrect – Awareness involves recognizing a need but not actively exploring solutions.",
    B: "**B. Self-interest**\nIncorrect – Self-interest reflects personal relevance without active participation in problem-solving.",
    D: "**D. Habit**\nIncorrect – Habit requires sustained, consistent behavioral integration, which has not yet occurred."
  },

  boardTrap: "Asking and comparing = involvement. Doing consistently = habit.",

  memoryHook: "Involvement = invested inquiry before routine."
},
{
  id: "COMM-073",
  type: "community",
  subject: "Prevention Science & Public Health",
  topic: "Behavioral Change – Motivation",
  difficulty: "moderate",

  question: "A patient previously relied on reminder alerts for oral hygiene. After reviewing intraoral images, the patient states a personal desire to improve and declines further reminder systems, saying the change must come from within. Which motivational factor is most strongly influencing the patient?",

  choices: [
    { key: "A", text: "External regulation" },
    { key: "B", text: "Incentive-driven motivation" },
    { key: "C", text: "Social reinforcement" },
    { key: "D", text: "Internal motivation" }
  ],

  correctAnswer: "D",

  rationale: "**D. Internal motivation**\nThe patient expresses self-directed commitment to change based on personal dissatisfaction and desire for improvement, independent of external prompts or rewards. This reflects intrinsic motivation.",

  incorrectRationales: {
    A: "**A. External regulation**\nIncorrect – External regulation involves behavior driven by reminders or imposed expectations, which the patient rejects.",
    B: "**B. Incentive-driven motivation**\nIncorrect – No rewards or tangible incentives are influencing the patient’s decision.",
    C: "**C. Social reinforcement**\nIncorrect – The motivation arises from personal evaluation, not social approval or pressure."
  },

  boardTrap: "The trigger may be external, but the drive is internal.",

  memoryHook: "Internal motivation = change powered from within."
},
{
  id: "COMM-074",
  type: "community",
  subject: "Prevention Science & Public Health",
  topic: "Behavioral Science – Maslow’s Hierarchy",
  difficulty: "moderate",

  question: "A patient experiencing housing instability, inconsistent access to meals, and exhaustion reports that daily oral hygiene is not a current priority. According to Maslow’s Hierarchy of Needs, which level must be addressed first before meaningful behavioral change can occur?",

  choices: [
    { key: "A", text: "Physiological needs" },
    { key: "B", text: "Belongingness and love" },
    { key: "C", text: "Self-esteem" },
    { key: "D", text: "Safety needs" }
  ],

  correctAnswer: "A",

  rationale: "**A. Physiological needs**\nMaslow’s hierarchy begins with foundational physiological needs such as food, water, sleep, and shelter. When these are unmet, individuals are unlikely to prioritize higher-level goals such as health behavior change.",

  incorrectRationales: {
    B: "**B. Belongingness and love**\nIncorrect – Interpersonal connection occurs higher in the hierarchy after basic needs are met.",
    C: "**C. Self-esteem**\nIncorrect – Self-esteem represents a higher-order need that depends on foundational stability.",
    D: "**D. Safety needs**\nIncorrect – Safety is the second tier, but physiological needs must be secured first."
  },

  boardTrap: "Maslow builds upward—basic survival needs always come first.",

  memoryHook: "Food and shelter before self-care."
},
{
  id: "COMM-075",
  type: "community",
  subject: "Prevention Science & Public Health",
  topic: "Behavioral Science – Transtheoretical Model",
  difficulty: "moderate",

  question: "A patient acknowledges the need to begin interdental cleaning, requests information about available aids, and expresses interest in incorporating the behavior into a routine but has not yet started performing it. According to the Transtheoretical Model, which stage of change best describes this patient?",

  choices: [
    { key: "A", text: "Precontemplation" },
    { key: "B", text: "Action" },
    { key: "C", text: "Contemplation" },
    { key: "D", text: "Maintenance" }
  ],

  correctAnswer: "C",

  rationale: "**C. Contemplation**\nIn the contemplation stage, the individual recognizes the need for change and begins considering how to implement it but has not yet initiated consistent behavior. The patient is gathering information and expressing intent without taking action.",

  incorrectRationales: {
    A: "**A. Precontemplation**\nIncorrect – Precontemplation involves lack of awareness or denial of the need for change.",
    B: "**B. Action**\nIncorrect – Action requires active implementation of the new behavior.",
    D: "**D. Maintenance**\nIncorrect – Maintenance occurs after sustained behavioral change has already been achieved."
  },

  boardTrap: "Interest in change does not equal action—behavior must begin to enter the action stage.",

  memoryHook: "Contemplation = considering, not yet committing."
},
{
  id: "COMM-076",
  type: "community",
  subject: "Prevention Science & Public Health",
  topic: "Behavioral Science – Social-Ecological Model",
  difficulty: "moderate",

  question: "A school-based sealant program experiences low participation due to parental work constraints, peer teasing, and lack of school administrative processes for consent distribution. Which framework best explains how multiple interacting levels influence participation in this program?",

  choices: [
    { key: "A", text: "Health Belief Model" },
    { key: "B", text: "Social-Ecological Model" },
    { key: "C", text: "Transtheoretical Model" },
    { key: "D", text: "Theory of Planned Behavior" }
  ],

  correctAnswer: "B",

  rationale: "**B. Social-Ecological Model**\nThe Social-Ecological Model recognizes that health behaviors are influenced by multiple interacting levels, including individual, interpersonal, organizational, community, and policy factors. Parental constraints, peer influence, and school-level barriers illustrate these layered effects.",

  incorrectRationales: {
    A: "**A. Health Belief Model**\nIncorrect – This model focuses on individual perceptions of risk, benefit, and susceptibility rather than broader system-level influences.",
    C: "**C. Transtheoretical Model**\nIncorrect – This model describes stages of individual readiness for change, not environmental or institutional influences.",
    D: "**D. Theory of Planned Behavior**\nIncorrect – This model addresses attitudes, subjective norms, and perceived control but does not fully account for structural and organizational barriers."
  },

  boardTrap: "When barriers exist at family, peer, and institutional levels, think beyond the individual.",

  memoryHook: "Social-Ecological = many layers shape one behavior."
},
{
  id: "COMM-077",
  type: "community",
  subject: "Prevention Science & Public Health",
  topic: "Evidence-Based Practice",
  difficulty: "moderate",

  question: "A county health department must choose between expanding a sealant program supported by multiple systematic reviews or adopting a fluoride rinse protocol based on anecdotal success from a single clinic. Which proposal best reflects evidence-based decision-making for a community oral-health program?",

  choices: [
    { key: "A", text: "Selecting the sealant program supported by systematic reviews" },
    { key: "B", text: "Selecting the fluoride rinse protocol based on one clinic’s experience" },
    { key: "C", text: "Selecting the option that requires the least staff training" },
    { key: "D", text: "Selecting the option that is most familiar to existing providers" }
  ],

  correctAnswer: "A",

  rationale: "**A. Selecting the sealant program supported by systematic reviews**\nEvidence-based practice prioritizes high-quality, critically appraised research such as systematic reviews. These synthesize multiple studies and provide stronger, more reliable guidance for population-level decision-making than anecdotal reports.",

  incorrectRationales: {
    B: "**B. Selecting the fluoride rinse protocol based on one clinic’s experience**\nIncorrect – Anecdotal evidence lacks rigorous evaluation and broad applicability.",
    C: "**C. Selecting the option that requires the least staff training**\nIncorrect – Feasibility is important but does not override the hierarchy of evidence.",
    D: "**D. Selecting the option that is most familiar to existing providers**\nIncorrect – Familiarity does not equate to effectiveness or scientific validity."
  },

  boardTrap: "Convenience and familiarity are not substitutes for high-level evidence.",

  memoryHook: "Evidence-based practice starts with the strongest evidence available."
}

]

