/* ============================================================
   GAMIFIED ARTIFICIAL INTELLIGENCE LITERACY WEBSITE — question bank
   ============================================================ */

const QUIZ = {
  title: "Gamified Artificial Intelligence Literacy Website",
  subtitle: "An AI Literacy Game",
  rounds: [
    {
      name: "Knowledge",
      icon: "📘",
      blurb: "Match the definition to the correct AI term.",
      instructions: "Match each fundamental AI concept with its correct definition.",
      seconds: 30,
      questions: [
        {
          statement: "A type of artificial intelligence that creates new content — such as text, images, music, or code — based on patterns learned from training data.",
          choices: ["Generative AI", "Discriminative AI", "Symbolic AI", "Rule-based AI"],
          answer: 0,
          why: "Generative AI models create new, realistic outputs rather than simply classifying or scoring existing data."
        },
        {
          statement: "A set of detailed, step-by-step instructions given to an AI model to guide its output.",
          choices: ["Algorithm", "Prompt", "Hyperlink", "Source code"],
          answer: 1,
          why: "A prompt is the user’s text input that directs a Large Language Model or image generator on what to produce."
        },
        {
          statement: "When an AI system confidently generates false, misleading, or fabricated information as if it were accurate.",
          choices: ["Overfitting", "Bias", "Hallucination", "Latency"],
          answer: 2,
          why: "AI hallucination happens because language models predict probable words rather than looking up verified facts."
        },
        {
          statement: "An artificial intelligence system trained on vast amounts of text to understand, summarize, and generate human language.",
          choices: ["Large Language Model (LLM)", "Computer Vision Model", "Reinforcement Engine", "Neural Filter"],
          answer: 0,
          why: "LLMs like ChatGPT, Claude, and Gemini process billions of words to analyze and write natural language."
        },
        {
          statement: "Unfair or skewed outputs produced by an AI because its training data contained human prejudices or unequal representations.",
          choices: ["Algorithmic Bias", "System Lag", "Model Corruption", "Data Saturation"],
          answer: 0,
          why: "AI models reflect patterns in their training data. If the data carries historical bias, the AI will replicate it."
        }
      ]
    },
    {
      name: "Evaluation",
      icon: "🔍",
      blurb: "Judge whether an AI answer can be trusted.",
      instructions: "Critical thinking practice: analyze the provided output or media carefully.",
      seconds: 35,
      questions: [
        {
          statement: "A student asked an AI model for references for an essay. The AI listed three research papers complete with titles, authors, and publication years.",
          aiResponse: "Smith, J. (2022). 'The Impact of Deep Learning on High School Education.' Journal of Educational Technology, 14(2), 45-58.",
          prompt: "What should the student do next before placing this reference in their bibliography?",
          choices: [
            "Use it immediately; AI citation engines never fabricate paper titles.",
            "Verify the paper exists using a library database or Google Scholar.",
            "Assume the citation is correct if the author's name sounds real.",
            "Only change the publication year before adding it."
          ],
          answer: 1,
          why: "LLMs frequently fabricate realistic-sounding academic citations (hallucinations). Always verify references independently."
        },
        {
          statement: "You ask an AI for historical facts about a minor local historical event. The response includes specific dates, official quote marks, and detailed statistics.",
          prompt: "Which statement best describes how reliable this response is?",
          choices: [
            "Highly reliable because detailed numbers mean the AI checked official archives.",
            "Potentially unreliable because confidence in tone does not equal factual accuracy.",
            "Completely false because AI cannot answer questions about history.",
            "Guaranteed accurate because quotation marks prove primary sources were read."
          ],
          answer: 1,
          why: "AI text generators choose plausible-sounding words regardless of factual truth. A detailed tone is not a guarantee of accuracy."
        },
        {
          statement: "Compare these two prompts given to a text generator for a science report:",
          promptA: "Write an essay about global warming.",
          promptB: "Explain three main causes of ocean warming for a 10th-grade audience in 200 words, citing key environmental factors.",
          prompt: "Which prompt will yield a more structured, useful, and accurate response?",
          choices: [
            "Prompt A, because shorter prompts give the AI full creative freedom.",
            "Prompt B, because specifying topic, audience, length, and scope yields targeted results.",
            "Both will give identical outputs because AI ignores extra words.",
            "Prompt A, because broad prompts reduce AI hallucination risks."
          ],
          answer: 1,
          why: "Specific constraints (role, task, format, length) lead to clearer and far higher quality AI responses."
        },
        {
          statement: "One of these images was generated by AI. The other is a real photograph.",
          prompt: "Select the AI-generated image.",
          media: "image",
          mediaFiles: ["media/image-a.jpg", "media/image-b.jpg"],
          choices: ["Image A", "Image B"],
          answer: 0,
          why: "Image A exhibits classic AI artifacts: hyper-saturated lighting, unnatural background geometry, and blended textures."
        },
        {
          statement: "One of these clips is an AI-generated voice. The other is a real human recording.",
          prompt: "Select the AI-generated audio.",
          media: "audio",
          mediaFiles: ["media/audio-a.mp3", "media/audio-b.mp3"],
          choices: ["Audio A", "Audio B"],
          answer: 0,
          why: "Audio A displays subtle synthetic robotic pacing, unnaturally uniform cadence, and slight digital vocal artifacts."
        }
      ]
    },
    {
      name: "Ethics",
      icon: "⚖️",
      blurb: "Decide the responsible way to use AI.",
      instructions: "Evaluate ethical dilemmas and determine responsible AI usage.",
      seconds: 30,
      questions: [
        {
          statement: "A classmate enters a full assignment prompt into an AI, copies the generated essay directly, and submits it under their own name.",
          prompt: "Which ethical issue is most directly demonstrated here?",
          choices: [
            "Academic dishonest and plagiarism",
            "Data privacy violation",
            "Copyright infringement",
            "Algorithmic bias"
          ],
          answer: 0,
          why: "Submitting AI-generated work as your own original writing violates academic integrity policies."
        },
        {
          statement: "An artist discovers that thousands of their personal copyrighted drawings were used without permission or pay to train a commercial AI image model.",
          prompt: "What primary ethical concern does this scenario highlight?",
          choices: [
            "Copyright and fair compensation for original creators",
            "Hardware energy consumption",
            "Over-reliance on automation",
            "Hallucination of art history facts"
          ],
          answer: 0,
          why: "Using copyrighted artwork without consent or credit raises serious ethical concerns regarding intellectual property."
        },
        {
          statement: "A student wants to use an online AI tool to outline a research paper. Before uploading their notes, they notice the document contains personal names, addresses, and phone numbers.",
          prompt: "What is the most responsible action to take?",
          choices: [
            "Upload the notes as-is because public AI tools keep data private.",
            "Remove all personal and private information before inputting text into AI.",
            "Use the AI only at night when fewer servers are processing data.",
            "Change the font style so the AI cannot read private details."
          ],
          answer: 1,
          why: "Public AI platforms may store user inputs for training. Never enter sensitive personal data."
        },
        {
          statement: "A high school counselor uses an AI tool to automatically write letters of recommendation. The AI repeatedly assigns terms like 'assertive leader' to male applicants and 'helpful assistant' to female applicants with identical grades.",
          prompt: "What ethical concept is occurring in this system?",
          choices: [
            "Gender bias in AI training patterns",
            "High network latency",
            "Normal statistical variation",
            "Unsupervised user error"
          ],
          answer: 0,
          why: "AI models trained on biased historical text will reproduce stereotypical gender associations unless corrected."
        },
        {
          statement: "A student uses an AI to help brainstorm project topics, outline their main points, and check grammar, but writes all the final content themselves.",
          prompt: "How should this use of AI be categorized?",
          choices: [
            "Severe plagiarism that should be penalized",
            "Responsible collaboration as a learning tool",
            "Unethical manipulation of educational standards",
            "Violating software licensing terms"
          ],
          answer: 1,
          why: "Using AI as a brainstorming partner or tutor while authoring your own work represents responsible academic collaboration."
        }
      ]
    }
  ]
};
