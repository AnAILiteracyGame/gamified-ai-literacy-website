/* ============================================================
   SHOOTING THE STATEMENT — QUESTION BANK
   ------------------------------------------------------------
   TEACHER: This is the ONLY file you need to edit to change
   the quiz. Do not touch index.html.

   HOW TO ADD A QUESTION
   ---------------------
   {
     statement: "The question or statement shown on screen.",
     choices:   ["Choice A", "Choice B"],       // 2, 3, or 4 choices
     answer:    0,                               // 0 = first choice, 1 = second, etc.
     why:       "Short explanation shown after answering."
   }

   Separate each question with a comma. Keep the square brackets.
   ============================================================ */

const QUIZ = {

  title: "Shooting the Statement",
  subtitle: "An AI Literacy Game",

  rounds: [

    /* ========================================================
       ROUND 1 — KNOWLEDGE
       ======================================================== */
    {
      id: "knowledge",
      name: "Knowledge",
      icon: "📘",
      blurb: "Match the definition to the correct AI term.",
      instructions: "Read the definition, then shoot the term that matches it.",
      seconds: 20,
      questions: [
        {
          statement: "A set of instructions that a computer follows to solve a problem or complete a task.",
          choices: ["Algorithm", "Training Data"],
          answer: 0,
          why: "An algorithm is the step-by-step procedure a computer follows. Training data is the information an AI learns from — not the instructions themselves."
        },
        {
          statement: "A type of Artificial Intelligence that creates new content, such as text, images, audio, or code.",
          choices: ["Reactive Artificial Intelligence", "Generative Artificial Intelligence"],
          answer: 1,
          why: "Generative AI produces new content. Reactive AI only responds to what is in front of it and does not create anything new."
        },
        {
          statement: "A field of computer science focused on creating systems that perform tasks requiring human intelligence.",
          choices: ["Artificial Intelligence", "Databases"],
          answer: 0,
          why: "Artificial Intelligence is the whole field. A database only stores and organizes information — it does not reason or decide."
        },
        {
          /* FIXED: the original said AI "reduces" false information.
             The correct definition is that it PRODUCES false information. */
          statement: "A mistake where an Artificial Intelligence produces false, inaccurate, or made-up information.",
          choices: ["Artificial Intelligence Hallucination", "Data Collection"],
          answer: 0,
          why: "An AI hallucination is confident but wrong output. Always verify AI answers against a trusted source."
        },
        {
          statement: "The final response or result produced by an Artificial Intelligence system after processing information.",
          choices: ["Output", "Feedback"],
          answer: 0,
          why: "The output is what the AI gives back. Feedback is what YOU give the AI afterwards to improve the result."
        }
      ]
    },

    /* ========================================================
       ROUND 2 — EVALUATION
       ======================================================== */
    {
      id: "evaluation",
      name: "Evaluation",
      icon: "🔍",
      blurb: "Judge whether an AI's answer can be trusted.",
      instructions: "Look closely at the AI's response, then shoot your verdict.",
      seconds: 30,
      questions: [
        {
          statement: "Who is better at using technology, older adults or teenagers?",
          aiResponse: "Teenagers are always better at using technology because older adults cannot learn new digital skills.",
          prompt: "Does the AI response contain bias?",
          choices: ["Yes", "No"],
          answer: 0,
          why: "Yes. The words \"always\" and \"cannot\" turn a general trend into a sweeping claim about an entire age group. That is age bias."
        },
        {
          statement: "Artificial Intelligence systems can think and make decisions exactly like humans.",
          prompt: "True or False?",
          choices: ["True", "False"],
          answer: 1,
          why: "False. AI processes patterns in data very quickly, but it has no understanding, intent, or lived experience the way a human does."
        },
        {
          statement: "Two students asked an AI about the same topic.",
          promptA: "Explain AI.",
          promptB: "Explain how artificial intelligence works by describing machine learning, training data, algorithms, and real-world applications.",
          prompt: "Which prompt will get a clearer, more informative answer?",
          choices: ["Prompt A", "Prompt B"],
          answer: 1,
          why: "Prompt B wins. It names the topic, lists the concepts to cover, and asks for real examples. Specific prompts get specific answers."
        },
        {
          statement: "One of these images was generated by AI. The other is a real photograph.",
          prompt: "Shoot the AI-generated image.",
          media: "image",
          mediaFiles: ["media/image-a.jpg", "media/image-b.jpg"],
          choices: ["Image A", "Image B"],
          answer: 0,
          why: "Look for tell-tale signs: extra or fused fingers, garbled text on signs, mismatched shadows, and skin or surfaces that look too smooth."
        },
        {
          statement: "One of these clips is an AI-generated voice. The other is a real human recording.",
          prompt: "Shoot the AI-generated audio.",
          media: "audio",
          mediaFiles: ["media/audio-a.mp3", "media/audio-b.mp3"],
          choices: ["Audio A", "Audio B"],
          answer: 0,
          why: "AI voices often have unnaturally even pacing, no breathing sounds, flat emotion, and odd stress on certain words."
        }
      ]
    },

    /* ========================================================
       ROUND 3 — ETHICS
       ======================================================== */
    {
      id: "ethics",
      name: "Ethics",
      icon: "⚖️",
      blurb: "Decide the responsible way to use AI.",
      instructions: "Read the situation carefully, then shoot the best choice.",
      seconds: 35,
      questions: [
        {
          statement: "You used Artificial Intelligence to write your entire essay. Before submitting it, what is the most responsible thing to do?",
          choices: [
            "Review and rewrite the essay using your own ideas.",
            "Submit it immediately because the AI wrote it well.",
            "Ask the AI to make it sound more human.",
            "Let your classmate submit it instead."
          ],
          answer: 0,
          why: "AI can help you start, but the thinking must be yours. Asking AI to \"sound more human\" only hides the problem — it does not solve it."
        },
        {
          statement: "While using an Artificial Intelligence tool, it asks for access to your contacts, photos, and location. What should guide your decision?",
          choices: ["Privacy", "Honesty", "Transparency", "Fairness"],
          answer: 0,
          why: "Privacy. Ask yourself: does this app actually need that data to work? If not, do not grant it."
        },
        {
          statement: "An Artificial Intelligence recommends one student for a scholarship based only on their gender. Which action is NOT ethical?",
          choices: [
            "Reviewing other qualifications.",
            "Considering everyone's skills fairly.",
            "Accepting the AI's recommendation without questioning it.",
            "Asking for more evidence before deciding."
          ],
          answer: 2,
          why: "Accepting it blindly. AI can inherit bias from its training data, so a human must always review decisions that affect people."
        },
        {
          /* FIXED: the original switched from "Franzine" to "Sophia" mid-question. */
          statement: "Franzine notices that an Artificial Intelligence recommends only one type of student for a leadership role. She decides to consider everyone's skills before making a decision. Which AI ethics principle does Franzine demonstrate?",
          choices: ["Proper Citation", "Fairness and Bias", "Data Privacy", "Academic Honesty"],
          answer: 1,
          why: "Fairness and Bias. Franzine spotted a pattern that excluded people and corrected for it instead of following the AI."
        },
        {
          statement: "A student uses an Artificial Intelligence tool for a research activity. Before asking questions, the student gives clear instructions, includes important details, and avoids asking the AI to create false information. Which AI ethics principle does this show?",
          choices: ["Fairness and Bias", "Responsible Prompting", "Data Privacy", "Academic Honesty"],
          answer: 1,
          why: "Responsible Prompting. Being clear and honest in how you ask leads to accurate, trustworthy answers."
        }
      ]
    }

  ]
};
