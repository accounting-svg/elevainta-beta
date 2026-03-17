export const demoQuestions = [
   {

id: "demo-001",
type: "medical-emergency",
subject: "Medical Management",
topic: "Angina Emergency Response",
difficulty: "moderate",

question: "A 58-year-old patient with a history of angina presents for periodontal therapy. Before the procedure begins, the patient reports mild chest discomfort but insists on proceeding. Midway through scaling, the patient becomes pale, diaphoretic, and reports increasing chest pressure. The clinician terminates treatment and administers sublingual nitroglycerin from the patient's prescription, but symptoms persist after five minutes. Vital signs reveal a dropping blood pressure. What is the most appropriate next step?",

choices: [
{ key: "A", text: "Administer a second dose of nitroglycerin and monitor for 5 more minutes" },
{ key: "B", text: "Call emergency medical services and administer oxygen" },
{ key: "C", text: "Place the patient in supine position and monitor pulse" },
{ key: "D", text: "Instruct the patient to take their prescribed aspirin" }
],

correctAnswer: "B",

rationale: "**B. Call emergency medical services and administer oxygen**\nIf chest pain is unrelieved by nitroglycerin within five minutes, myocardial infarction must be suspected. Emergency services should be activated immediately and oxygen administered.",

incorrectRationales: {
A: "**A. Second dose of nitroglycerin**\nIncorrect – Persistent chest pain after nitroglycerin indicates possible myocardial infarction and requires emergency response.",
C: "**C. Supine positioning**\nIncorrect – Positioning alone does not address suspected myocardial infarction and delays emergency care.",
D: "**D. Aspirin administration**\nIncorrect – Aspirin may be given in MI situations, but activating EMS and oxygen administration are the priority steps."
},

boardTrap: "Students often delay EMS activation and continue monitoring. Persistent chest pain after nitroglycerin signals possible myocardial infarction.",

memoryHook: "Chest pain after nitro — EMS must go."
},
{
id: "demo-002",
type: "periodontology",
subject: "Oral Disease Mastery",
topic: "Smoking Masks Inflammation",
difficulty: "moderate",

question: "A 46-year-old male presents for a periodontal evaluation. Clinical examination reveals minimal bleeding on probing with probing depths of 4–6 mm and moderate horizontal bone loss. The patient reports brushing twice daily but has smoked one pack per day for 25 years. Which of the following best explains the clinical findings?",

choices: [
{ key: "A", text: "It reduces plaque accumulation" },
{ key: "B", text: "It masks inflammatory signs" },
{ key: "C", text: "It causes deeper pockets in anterior teeth" },
{ key: "D", text: "It eliminates the need for grading" }
],

correctAnswer: "B",

rationale: "**B. Masks inflammatory signs**\nSmoking causes vasoconstriction of gingival blood vessels which reduces visible inflammatory signs such as redness and bleeding, even when periodontal destruction is present.",

incorrectRationales: {
A: "**A. Reduces plaque accumulation**\nIncorrect – Smoking does not reduce plaque levels. In many cases plaque accumulation is equal or greater.",
C: "**C. Causes deeper pockets in anterior teeth**\nIncorrect – Smoking affects the entire periodontium rather than selectively deepening anterior pockets.",
D: "**D. Eliminates the need for grading**\nIncorrect – Smoking is actually a grading modifier that increases disease progression risk."
},

boardTrap: "Students assume bleeding equals disease severity. Smoking often suppresses bleeding despite active periodontal destruction.",

memoryHook: "Smokers hide inflammation — less red, more bone loss."
},
{
id: "demo-003",
type: "periodontology",
subject: "Oral Disease Mastery",
topic: "Periodontal Stage and Grade",
difficulty: "moderate",

question: "A 52-year-old patient presents with 30% radiographic bone loss localized to mandibular molars and probing depths of 4–6 mm. The patient has a 20-year history of diabetes and smokes one pack per day. No teeth have been lost due to periodontal disease. What is the most appropriate classification?",

choices: [
{ key: "A", text: "Stage III Grade B" },
{ key: "B", text: "Stage II Grade B" },
{ key: "C", text: "Stage II Grade C" },
{ key: "D", text: "Stage I Grade A" }
],

correctAnswer: "C",

rationale: "**C. Stage II Grade C**\nStage II corresponds to moderate attachment loss with probing depths up to 6 mm and no tooth loss. Smoking and diabetes are strong systemic modifiers that increase disease progression risk, elevating the grade to C.",

incorrectRationales: {
A: "**A. Stage III Grade B**\nIncorrect – Stage III requires more severe attachment loss and/or tooth loss due to periodontal disease.",
B: "**B. Stage II Grade B**\nIncorrect – Although bone loss fits Stage II, smoking and diabetes increase progression risk and elevate grading to C.",
D: "**D. Stage I Grade A**\nIncorrect – Stage I indicates mild disease with minimal attachment loss and shallow probing depths."
},

boardTrap: "Students often determine stage correctly but forget that systemic modifiers such as smoking and diabetes change the grade.",

memoryHook: "Stage = damage. Grade = speed."
},
{
id: "demo-004",
type: "periodontology",
subject: "Clinical Execution & Materials",
topic: "Burnished Calculus",
difficulty: "moderate",

question: "During periodontal maintenance, bleeding persists interproximally near tooth #3 despite stable probing depths and minimal plaque accumulation. The explorer detects only slight irregularities along the root surface. What is the most likely cause?",

choices: [
{ key: "A", text: "Improper brushing technique" },
{ key: "B", text: "Subgingival burnished calculus in a root concavity" },
{ key: "C", text: "Irreversible pulpitis" },
{ key: "D", text: "Widened periodontal ligament space" }
],

correctAnswer: "B",

rationale: "**B. Subgingival burnished calculus in a root concavity**\nBurnished calculus may be difficult to detect with an explorer, especially in root concavities and furcation areas. These deposits can continue to produce localized inflammation and bleeding.",

incorrectRationales: {
A: "**A. Improper brushing technique**\nIncorrect – Poor brushing typically results in visible plaque accumulation rather than isolated bleeding with minimal plaque.",
C: "**C. Irreversible pulpitis**\nIncorrect – Pulpitis affects the pulp and causes tooth pain, not localized gingival bleeding.",
D: "**D. Widened periodontal ligament space**\nIncorrect – A widened PDL space is a radiographic finding and would not directly cause localized bleeding during periodontal probing."
},

boardTrap: "Students often trust the explorer too much. Burnished calculus can be smooth and difficult to detect tactically.",

memoryHook: "Concavities keep secrets."
},
{
id: "demo-005",
type: "oral-pathology",
subject: "Oral Disease Mastery",
topic: "Periapical Granuloma vs Cyst",
difficulty: "moderate",

question: "A periapical radiolucency is noted at the apex of tooth #9 on a routine radiograph. Endodontic therapy is performed and tissue is later submitted for biopsy. Microscopic examination reveals granulation tissue containing chronic inflammatory cells but no epithelial lining. What is the most likely diagnosis?",

choices: [
{ key: "A", text: "Periapical cyst" },
{ key: "B", text: "Periapical granuloma" },
{ key: "C", text: "Dentigerous cyst" },
{ key: "D", text: "Fibroma" }
],

correctAnswer: "B",

rationale: "**B. Periapical granuloma**\nPeriapical granulomas consist of granulation tissue and chronic inflammatory cells and lack an epithelial lining. They occur as a response to pulpal necrosis and persistent periapical inflammation.",

incorrectRationales: {
A: "**A. Periapical cyst**\nIncorrect – Periapical cysts contain an epithelial lining derived from epithelial rests of Malassez.",
C: "**C. Dentigerous cyst**\nIncorrect – Dentigerous cysts form around the crown of an unerupted tooth rather than the root apex.",
D: "**D. Fibroma**\nIncorrect – Fibromas are benign connective tissue growths and are not associated with periapical radiolucencies."
},

boardTrap: "Students often attempt to diagnose cyst vs granuloma from radiographs alone. The presence or absence of epithelial lining determines the diagnosis.",

memoryHook: "Cyst is lined. Granuloma is grind."
},
{
id: "demo-006",
type: "oral-pathology",
subject: "Oral Disease Mastery",
topic: "Leukoplakia Identification",
difficulty: "moderate",

question: "A patient presents with a well-defined white lesion on the lateral border of the tongue that cannot be wiped off with gauze. The lesion has persisted for more than one month and the patient reports no pain. Which of the following is the most appropriate descriptive term for this lesion?",

choices: [
{ key: "A", text: "Papule" },
{ key: "B", text: "Vesicle" },
{ key: "C", text: "Leukoplakia" },
{ key: "D", text: "Ulcer" }
],

correctAnswer: "C",

rationale: "**C. Leukoplakia**\nLeukoplakia is defined as a white lesion that cannot be rubbed off and cannot be clinically characterized as another specific disease. These lesions require evaluation because some may show dysplastic or malignant changes.",

incorrectRationales: {
A: "**A. Papule**\nIncorrect – A papule is a small raised lesion, not a white patch that cannot be wiped off.",
B: "**B. Vesicle**\nIncorrect – Vesicles are small fluid-filled lesions rather than white plaques.",
D: "**D. Ulcer**\nIncorrect – Ulcers involve loss of epithelium and appear as depressed lesions rather than white plaques."
},

boardTrap: "Students sometimes choose descriptive terms like ulcer or papule instead of recognizing the clinical definition of leukoplakia.",

memoryHook: "White that won't wipe — leukoplakia."
},
{
id: "demo-007",
type: "pharmacology",
subject: "Clinical Execution & Materials",
topic: "Lidocaine Maximum Dose",
difficulty: "moderate",

question: "A 135-pound patient is scheduled for scaling and root planing and will receive 2% lidocaine with epinephrine for anesthesia. What is the approximate maximum number of cartridges that can be safely administered based on recommended dosing limits?",

choices: [
{ key: "A", text: "10.8 cartridges" },
{ key: "B", text: "7.5 cartridges" },
{ key: "C", text: "6 cartridges" },
{ key: "D", text: "4.4 cartridges" }
],

correctAnswer: "B",

rationale: "**B. 7.5 cartridges**\nThe maximum recommended dose of lidocaine with epinephrine is 7 mg/kg. A 135-pound patient weighs approximately 61 kg. Multiplying 61 kg by 7 mg/kg equals about 427 mg. Each cartridge of 2% lidocaine contains 36 mg, so approximately 11 cartridges would equal the absolute maximum dose, but the recommended clinical limit typically used for board questions is about 7–8 cartridges for safety.",

incorrectRationales: {
A: "**A. 10.8 cartridges**\nIncorrect – This approaches the absolute maximum dose calculation rather than the recommended safe clinical limit.",
C: "**C. 6 cartridges**\nIncorrect – Six cartridges would be within the safe range but is lower than the calculated maximum for this patient weight.",
D: "**D. 4.4 cartridges**\nIncorrect – 4.4 refers to the mg/kg limit used in some local anesthetic calculations but does not represent the number of cartridges."
},

boardTrap: "Students often confuse mg/kg calculations with cartridge counts and mix up maximum dose formulas.",

memoryHook: "Convert pounds to kilos → kilos × max dose → divide by 36."
},
{
id: "demo-008",
type: "preventive-dentistry",
subject: "Oral Disease Mastery",
topic: "Fluorosis vs Enamel Hypoplasia",
difficulty: "moderate",

question: "A 9-year-old patient presents with symmetrical white and brown mottling affecting several permanent teeth. The parent reports the child grew up in an area with naturally high fluoride levels in the drinking water. Which condition most likely explains the enamel appearance?",

choices: [
{ key: "A", text: "Enamel hypoplasia" },
{ key: "B", text: "Dental fluorosis" },
{ key: "C", text: "Demineralization" },
{ key: "D", text: "Turner tooth" }
],

correctAnswer: "B",

rationale: "**B. Dental fluorosis**\nDental fluorosis occurs when excessive fluoride is ingested during enamel formation. It commonly produces symmetrical white or brown mottling affecting multiple teeth.",

incorrectRationales: {
A: "**A. Enamel hypoplasia**\nIncorrect – Hypoplasia usually affects specific teeth and results from localized developmental disturbances rather than systemic fluoride exposure.",
C: "**C. Demineralization**\nIncorrect – Demineralization appears as chalky white areas associated with plaque accumulation rather than symmetrical mottling.",
D: "**D. Turner tooth**\nIncorrect – Turner teeth result from trauma or infection affecting a single developing tooth."
},

boardTrap: "Students often confuse fluorosis with enamel hypoplasia. Symmetry across multiple teeth strongly suggests fluorosis.",

memoryHook: "If many teeth match — fluoride is the catch."
},
{
id: "demo-009",
type: "preventive-dentistry",
subject: "Oral Disease Mastery",
topic: "Fluoride Supplement Dosage",
difficulty: "moderate",

question: "A 6-year-old child lives in a community where the drinking water contains 0.2 ppm fluoride. The child uses non-fluoridated toothpaste and receives no other fluoride exposure. What fluoride supplement dosage is recommended according to current guidelines?",

choices: [
{ key: "A", text: "No supplement" },
{ key: "B", text: "0.25 mg daily" },
{ key: "C", text: "1 mg daily" },
{ key: "D", text: "0.5 mg twice daily" }
],

correctAnswer: "B",

rationale: "**B. 0.25 mg daily**\nChildren ages 3–6 who live in areas with less than 0.3 ppm fluoride in the drinking water should receive a 0.25 mg fluoride supplement daily.",

incorrectRationales: {
A: "**A. No supplement**\nIncorrect – Supplements are recommended when fluoride levels are below 0.3 ppm for children in this age group.",
C: "**C. 1 mg daily**\nIncorrect – This dose is recommended for older children depending on fluoride levels.",
D: "**D. 0.5 mg twice daily**\nIncorrect – Fluoride supplements are prescribed as a single daily dose, not divided doses."
},

boardTrap: "Students often mix up fluoride supplement tables by age and water fluoride concentration.",

memoryHook: "Under six and under 0.3 — give 0.25."
},
{
id: "demo-010",
type: "preventive-dentistry",
subject: "Clinical Execution & Materials",
topic: "Fluoride Varnish Instructions",
difficulty: "easy",

question: "After fluoride varnish is applied to a 7-year-old patient, which post-operative instruction should the clinician provide?",

choices: [
{ key: "A", text: "Rinse thoroughly after 30 minutes" },
{ key: "B", text: "Brush teeth after 2 hours" },
{ key: "C", text: "Avoid eating for 4 hours" },
{ key: "D", text: "Avoid hard or crunchy foods for the rest of the day" }
],

correctAnswer: "D",

rationale: "**D. Avoid hard or crunchy foods for the rest of the day**\nAfter fluoride varnish application, patients should avoid hard, crunchy, or abrasive foods and delay brushing until the next morning so the varnish remains on the teeth longer.",

incorrectRationales: {
A: "**A. Rinse after 30 minutes**\nIncorrect – Rinsing soon after varnish application removes fluoride before it can be absorbed.",
B: "**B. Brush after 2 hours**\nIncorrect – Brushing should be delayed until the following morning.",
C: "**C. Avoid eating for 4 hours**\nIncorrect – Patients may eat soft foods shortly after treatment."
},

boardTrap: "Students often confuse fluoride varnish instructions with fluoride gel or foam instructions.",

memoryHook: "Varnish stays — crunchy stays away."
},
{
id: "demo-011",
type: "cariology",
subject: "Oral Disease Mastery",
topic: "CAMBRA Risk Assessment",
difficulty: "moderate",

question: "A patient presents with no visible carious lesions but reports sipping sports drinks throughout the day and has several exposed root surfaces. According to CAMBRA principles, how should this patient's caries risk be classified?",

choices: [
{ key: "A", text: "Moderate risk" },
{ key: "B", text: "Low risk" },
{ key: "C", text: "High risk" },
{ key: "D", text: "No risk" }
],

correctAnswer: "C",

rationale: "**C. High risk**\nFrequent exposure to fermentable carbohydrates or acidic beverages combined with exposed root surfaces significantly increases caries risk even if lesions are not yet present.",

incorrectRationales: {
A: "**A. Moderate risk**\nIncorrect – Frequent acidic beverage intake and exposed root surfaces elevate risk beyond moderate.",
B: "**B. Low risk**\nIncorrect – Low risk patients typically have minimal dietary risk factors and good protective factors.",
D: "**D. No risk**\nIncorrect – Active risk factors such as frequent acidic drinks mean risk is present even without current lesions."
},

boardTrap: "Students often assume that the absence of current cavities means low caries risk.",

memoryHook: "No holes today doesn't mean low risk."
},
{
id: "demo-012",
type: "medical-management",
subject: "Medical Management",
topic: "AB Positive Blood Type",
difficulty: "easy",

question: "A trauma patient arrives at the emergency department with blood type AB positive. Which statement correctly describes this patient's blood compatibility?",

choices: [
{ key: "A", text: "Can receive blood only from AB positive donors" },
{ key: "B", text: "Can receive blood from any donor type" },
{ key: "C", text: "Is considered the universal donor" },
{ key: "D", text: "Can receive blood only from O negative donors" }
],

correctAnswer: "B",

rationale: "**B. Can receive blood from any donor type**\nIndividuals with AB positive blood type are universal recipients because they do not produce antibodies against A or B antigens and are Rh positive.",

incorrectRationales: {
A: "**A. Only AB positive donors**\nIncorrect – AB positive individuals can receive blood from all ABO and Rh types.",
C: "**C. Universal donor**\nIncorrect – Type O negative is the universal donor.",
D: "**D. Only O negative donors**\nIncorrect – O negative can donate to anyone but AB positive patients are not limited to that type."
},

boardTrap: "Students frequently confuse universal donor (O negative) with universal recipient (AB positive).",

memoryHook: "AB takes all."
},
{
id: "demo-013",
type: "ethics-law",
subject: "Professional Responsibility",
topic: "Dental Battery",
difficulty: "moderate",

question: "A clinician performs periodontal debridement on a minor patient before a parent or legal guardian has signed the consent form. Which legal issue is most relevant in this situation?",

choices: [
{ key: "A", text: "HIPAA violation" },
{ key: "B", text: "Informed refusal" },
{ key: "C", text: "Assault" },
{ key: "D", text: "Battery" }
],

correctAnswer: "D",

rationale: "**D. Battery**\nBattery occurs when treatment is performed without the patient's or guardian's consent. Consent must be obtained before initiating treatment.",

incorrectRationales: {
A: "**A. HIPAA violation**\nIncorrect – HIPAA involves privacy and protection of patient health information.",
B: "**B. Informed refusal**\nIncorrect – Informed refusal occurs when a patient declines recommended treatment after being informed of risks and benefits.",
C: "**C. Assault**\nIncorrect – Assault refers to threatening harm, whereas performing treatment without consent constitutes battery."
},

boardTrap: "Students often confuse assault and battery. In healthcare law, performing treatment without consent is battery.",

memoryHook: "No consent = battery."
},
{
id: "demo-014",
type: "periodontology",
subject: "Oral Disease Mastery",
topic: "Hormonal Gingival Changes",
difficulty: "moderate",

question: "A 19-year-old college student presents for a routine prophylaxis appointment. She reports that her gums have been bleeding more easily for the past several days despite no change in brushing or flossing habits. Clinical examination reveals mild gingival edema and bleeding on probing with minimal plaque accumulation. The interdental papilla appear intact, and the patient denies pain. The patient reports significant academic stress this week with reduced sleep and mentions abdominal cramping and fatigue but denies illness or medication changes. What best explains the gingival findings?",

choices: [
{ key: "A", text: "Necrotizing ulcerative gingivitis" },
{ key: "B", text: "Leukemia-related gingival bleeding" },
{ key: "C", text: "Hormonal influence on gingival tissues" },
{ key: "D", text: "Vitamin K deficiency" }
],

correctAnswer: "C",

rationale: "**C. Hormonal influence on gingival tissues**\nHormonal fluctuations during the menstrual phase increase vascular permeability and gingival inflammatory response. This can produce gingival bleeding even when plaque levels remain minimal.",

incorrectRationales: {
A: "**A. Necrotizing ulcerative gingivitis**\nIncorrect – NUG presents with severe pain, necrotic papillae, and pseudomembrane formation, which are not present.",
B: "**B. Leukemia-related gingival bleeding**\nIncorrect – Leukemia typically produces gingival enlargement, spontaneous bleeding, and systemic symptoms.",
D: "**D. Vitamin K deficiency**\nIncorrect – Vitamin K deficiency produces generalized bleeding tendencies rather than localized gingival inflammation."
},

boardTrap: "Students often assume stress and gingival bleeding indicate NUG. The absence of pain and necrotic papillae points toward hormonal gingival changes instead.",

memoryHook: "Hormones rise — gums reply."
},
{
id: "demo-015",
type: "infection-control",
subject: "Clinical Execution & Materials",
topic: "Intermediate-Level Disinfectant",
difficulty: "easy",

question: "During operatory cleanup after a procedure, visible blood contamination is noted on a countertop surface. According to infection control guidelines, what level of disinfectant should be used on the surface?",

choices: [
{ key: "A", text: "High-level disinfectant" },
{ key: "B", text: "Intermediate-level disinfectant" },
{ key: "C", text: "Low-level disinfectant" },
{ key: "D", text: "Quaternary ammonium compound only" }
],

correctAnswer: "B",

rationale: "**B. Intermediate-level disinfectant**\nIntermediate-level disinfectants are required for surfaces contaminated with blood or potentially infectious material because they are effective against mycobacteria, viruses, and most bacteria.",

incorrectRationales: {
A: "**A. High-level disinfectant**\nIncorrect – High-level disinfectants are used for semi-critical instruments that cannot be heat sterilized, not environmental surfaces.",
C: "**C. Low-level disinfectant**\nIncorrect – Low-level disinfectants are not sufficient for surfaces visibly contaminated with blood.",
D: "**D. Quaternary ammonium compound only**\nIncorrect – Quaternary ammonium compounds alone are considered low-level disinfectants and are not appropriate when blood contamination is present."
},

boardTrap: "Students often assume 'high risk means high-level disinfectant.' Environmental surfaces with blood require intermediate-level disinfectants.",

memoryHook: "Blood on the surface — intermediate on purpose."
},
]