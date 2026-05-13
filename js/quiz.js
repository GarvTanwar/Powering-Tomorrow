const quizGroups = {
  "ages-6-8": {
    heading: "Ages 6-8 Quiz",
    description: "Simple questions about saving energy, weather, and looking after Earth.",
    questions: [
      {
        question: "What should you do when you leave a room?",
        options: ["Turn off the light", "Turn on more lights", "Open the fridge", "Leave the TV on"],
        answer: 0
      },
      {
        question: "Which one uses clean energy from the sun?",
        options: ["Petrol car", "Solar panel", "Gas stove", "Coal fire"],
        answer: 1
      },
      {
        question: "What can help keep a room warm or cool?",
        options: ["Leaving doors open", "Closing doors and windows", "Turning every fan on", "Opening the fridge"],
        answer: 1
      },
      {
        question: "Which weather is usually hotter?",
        options: ["Snowy day", "Very sunny summer day", "Rainy night", "Cloudy morning"],
        answer: 1
      },
      {
        question: "What do plants need to grow?",
        options: ["Smoke", "Plastic bags", "Sunlight and water", "Petrol"],
        answer: 2
      },
      {
        question: "Which trip can save energy?",
        options: ["Walking a short distance", "Driving around the block", "Leaving the car running", "Taking two cars"],
        answer: 0
      },
      {
        question: "What should you do with a tap after washing hands?",
        options: ["Turn it off", "Leave it running", "Turn it hotter", "Ignore it"],
        answer: 0
      },
      {
        question: "Which item should go in the recycling bin if your council accepts it?",
        options: ["Food scraps", "Dirty tissues", "Broken glass in a bag", "Clean paper"],
        answer: 3
      },
      {
        question: "What is one way families can use less electricity?",
        options: ["Switch off unused devices", "Leave chargers plugged in", "Keep every screen on", "Use lights in daytime"],
        answer: 0
      },
      {
        question: "Why do we care for Earth?",
        options: ["It is our home", "It has unlimited electricity", "It does not need clean air", "Only adults live here"],
        answer: 0
      }
    ]
  },
  "ages-9-10": {
    heading: "Ages 9-10 Quiz",
    description: "Questions about greenhouse gases, daily habits, and smart energy choices.",
    questions: [
      {
        question: "What do greenhouse gases do?",
        options: ["Make all clouds disappear", "Trap some heat near Earth", "Stop the sun rising", "Turn oceans into ice"],
        answer: 1
      },
      {
        question: "Which gas do people often link with burning coal, oil, and gas?",
        options: ["Carbon dioxide", "Oxygen", "Helium", "Neon"],
        answer: 0
      },
      {
        question: "Which transport choice usually makes fewer emissions for a short local trip?",
        options: ["Walking or cycling", "Driving alone", "Leaving a car idling", "Using a motorbike for fun"],
        answer: 0
      },
      {
        question: "What is renewable energy?",
        options: ["Energy that can only be used once", "Energy from plastic", "Energy from sources that naturally refill", "Energy from old rubbish only"],
        answer: 2
      },
      {
        question: "Which is a renewable energy source?",
        options: ["Wind", "Coal", "Petrol", "Diesel"],
        answer: 0
      },
      {
        question: "What can happen when the planet warms?",
        options: ["More heatwaves can happen", "Weather stops changing", "Sea levels always fall", "Rain disappears everywhere"],
        answer: 0
      },
      {
        question: "What is a carbon footprint?",
        options: ["The greenhouse gases linked to what we do", "A shoe print in mud", "A type of cloud", "A clean water test"],
        answer: 0
      },
      {
        question: "Which action saves energy at home?",
        options: ["Turning off screens when finished", "Keeping every charger plugged in", "Opening windows with heating on", "Leaving lights on overnight"],
        answer: 0
      },
      {
        question: "Why are trees useful for the climate?",
        options: ["They make petrol", "They stop all storms", "They use electricity", "They take in carbon dioxide as they grow"],
        answer: 3
      },
      {
        question: "Which school-gate choice can reduce emissions?",
        options: ["Walking, cycling, or sharing a ride", "Every family using a separate car", "Cars waiting with engines on", "Extra car trips for no reason"],
        answer: 0
      }
    ]
  },
  "ages-11-13": {
    heading: "Ages 11-13 Quiz",
    description: "Questions about climate science, carbon, and practical ways to reduce emissions.",
    questions: [
      {
        question: "Which greenhouse gas is strongly linked to burning fossil fuels?",
        options: ["Carbon dioxide", "Oxygen", "Argon", "Hydrogen"],
        answer: 0
      },
      {
        question: "What is the carbon cycle?",
        options: ["A bicycle made from carbon", "Carbon moving through air, water, land, and living things", "Only smoke from cars", "A way to count clouds"],
        answer: 1
      },
      {
        question: "Which activity adds carbon dioxide to the air?",
        options: ["Burning petrol in a car", "Growing a small plant", "Turning off a lamp", "Walking to school"],
        answer: 0
      },
      {
        question: "What does mitigation mean in climate action?",
        options: ["Ignoring the problem", "Measuring only rainfall", "Reducing emissions or warming", "Making energy use higher"],
        answer: 2
      },
      {
        question: "Which home change can reduce energy use?",
        options: ["Using efficient lights and appliances", "Heating empty rooms", "Leaving windows open with cooling on", "Running devices all night"],
        answer: 0
      },
      {
        question: "What is active transport?",
        options: ["Walking, cycling, or scooting", "Sitting in an idling car", "Flying for short trips", "Driving with no passengers"],
        answer: 0
      },
      {
        question: "Why does saving electricity matter if electricity is made from fossil fuels?",
        options: ["Less use can mean fewer emissions", "It makes coal cleaner by magic", "It stops all weather", "It removes every power bill"],
        answer: 0
      },
      {
        question: "Which is a likely climate change impact?",
        options: ["No more seasons", "The sun becoming colder", "All places getting the same weather", "Rising sea levels"],
        answer: 3
      },
      {
        question: "What can a family energy bill help show?",
        options: ["How much electricity or gas was used", "The exact weather next month", "How much carbon is in every tree", "The age of the house"],
        answer: 0
      },
      {
        question: "Which choice is best for reducing transport emissions?",
        options: ["Combine trips or use public transport", "Drive separately every time", "Leave engines running while waiting", "Choose the longest route"],
        answer: 0
      }
    ]
  },
  "ages-14-15": {
    heading: "Ages 14-15 Quiz",
    description: "Questions about emissions, carbon literacy, climate evidence, and household choices.",
    questions: [
      {
        question: "Which greenhouse gas is the largest human-caused driver of long-term warming?",
        options: ["Carbon dioxide", "Oxygen", "Nitrogen", "Helium"],
        answer: 0
      },
      {
        question: "Why is water vapour different from carbon dioxide in climate discussions?",
        options: ["It is not a greenhouse gas", "It is abundant, but CO2 from human activity drives long-term warming", "It only exists over cities", "It comes only from cars"],
        answer: 1
      },
      {
        question: "Which sector is a major source of global emissions?",
        options: ["Energy supply", "Board games", "Pencil cases", "Cloud shapes"],
        answer: 0
      },
      {
        question: "What does per-person emissions mean?",
        options: ["Only emissions from one car", "The weight of a person", "Average emissions for each person", "The number of people in a city"],
        answer: 2
      },
      {
        question: "Which action targets emissions instead of only awareness?",
        options: ["Improving building efficiency", "Posting once online", "Learning a slogan only", "Watching devices on standby"],
        answer: 0
      },
      {
        question: "Why can school transport be part of a climate plan?",
        options: ["Repeated car trips create emissions", "Cars make no gases", "Walking uses petrol", "School trips only affect noise"],
        answer: 0
      },
      {
        question: "What is an urban carbon cycle focus?",
        options: ["How carbon moves through city activities and systems", "How to draw city maps only", "How roads change colour", "How buildings make oxygen"],
        answer: 0
      },
      {
        question: "Which phrase best describes climate adaptation?",
        options: ["Preparing for climate impacts", "Making emissions higher", "Stopping science lessons", "Using more fossil fuels"],
        answer: 0
      },
      {
        question: "Which evidence supports global warming?",
        options: ["One cold morning", "A single rainy weekend", "A cloudy day", "Rising average global temperatures"],
        answer: 3
      },
      {
        question: "Which habit shows leadership at home?",
        options: ["Managing devices and reducing waste without reminders", "Leaving chargers and screens on", "Heating empty spaces", "Ignoring younger siblings' questions"],
        answer: 0
      }
    ]
  }
};

const quizGroupButtons = document.querySelectorAll(".quiz-group-option");
const groupDescription = document.querySelector("#group-description");
const quizHeading = document.querySelector("#quiz-heading");
const quizCount = document.querySelector("#quiz-count");
const quizForm = document.querySelector("#quiz-form");
const resetButton = document.querySelector("#reset-button");
const resultMessage = document.querySelector("#result-message");

const groupAliases = {
  "ages-6-7": "ages-6-8",
  "ages-10-13": "ages-11-13",
  "ages-11-13": "ages-11-13",
  "ages-12-13": "ages-11-13",
  "ages-15-16": "ages-14-15"
};
const params = new URLSearchParams(window.location.search);
const requestedGroup = params.get("group");
const normalizedGroup = groupAliases[requestedGroup] || requestedGroup;
let activeGroup = quizGroups[normalizedGroup] ? normalizedGroup : quizGroupButtons[0]?.dataset.group || "ages-6-8";

function updateGroupButtons() {
  quizGroupButtons.forEach((button) => {
    const isActive = button.dataset.group === activeGroup;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

const sourceLinks = {
  nasaGreenhouse: {
    title: "NASA Climate Kids: Greenhouse Effect and Carbon Cycle",
    url: "https://climatekids.nasa.gov/greenhouse-effect-and-carbon-cycle/"
  },
  nasaEffect: {
    title: "NASA Science: What Is the Greenhouse Effect?",
    url: "https://science.nasa.gov/kids/earth/what-is-the-greenhouse-effect"
  },
  epaGases: {
    title: "US EPA: Greenhouse Gases",
    url: "https://www.epa.gov/report-environment/greenhouse-gases"
  },
  epaBasics: {
    title: "US EPA: Basics of Climate Change",
    url: "https://www.epa.gov/climatechange-science/basics-climate-change"
  },
  energySaver: {
    title: "Department of Energy: Energy Saver",
    url: "https://www.energy.gov/energysaver/energy-efficient-computers-home-office-equipment-and-electronics"
  },
  energyLights: {
    title: "Department of Energy: When to Turn Off Your Lights",
    url: "https://www.energy.gov/energysaver/when-turn-your-lights"
  },
  epaRecycling: {
    title: "US EPA: How Do I Recycle Common Recyclables",
    url: "https://www.epa.gov/recycle/how-do-i-recycle-common-recyclables"
  },
  scienceLearn: {
    title: "Science Learning Hub: Drive it Down!",
    url: "https://www.sciencelearn.org.nz/resources/3381-drive-it-down-climate-change-and-carbon-cycle-quiz"
  }
};

const questionExplanations = {
  "What should you do when you leave a room?": "Turning off a light when a room is empty stops electricity being used for no purpose. The saving from one light can seem small, but repeated habits across many rooms and many days reduce wasted energy.",
  "Which one uses clean energy from the sun?": "A solar panel uses sunlight to make electricity. Unlike coal, petrol, or gas, it does not need fuel to be burned while it is producing power, so it avoids those direct greenhouse gas emissions.",
  "What can help keep a room warm or cool?": "Heating and cooling work best when the indoor air stays inside. Closing doors and windows reduces heat moving in or out, so the heater or air conditioner does not need to work as hard.",
  "Which weather is usually hotter?": "A very sunny summer day usually has stronger sunlight and warmer seasonal conditions than a rainy night, snowy day, or cloudy morning. Weather changes day by day, but summer sun is the clearest heat clue in this set.",
  "What do plants need to grow?": "Plants use sunlight, water, and carbon dioxide to make food through photosynthesis. This is why sunlight and water are basic needs for healthy plant growth.",
  "Which trip can save energy?": "Walking a short distance uses human energy instead of fuel or electricity from a vehicle. For short trips, this can avoid emissions while also reducing traffic around homes and schools.",
  "What should you do with a tap after washing hands?": "Turning off the tap saves water. It also saves the energy used to pump, clean, and sometimes heat that water before it reaches the sink.",
  "Which item should go in the recycling bin if your council accepts it?": "Clean paper is commonly accepted in recycling programs, but local rules still matter. Food scraps, dirty tissues, or unsafe broken glass can contaminate recycling or need a different disposal method.",
  "What is one way families can use less electricity?": "Switching off unused devices reduces electricity demand. Some electronics can also keep drawing small standby power, so turning them off properly or using a switched power strip can help.",
  "Why do we care for Earth?": "Earth is the only home we all share. Caring for air, water, land, plants, and animals helps people live safely now and protects resources for the future.",
  "What do greenhouse gases do?": "Greenhouse gases let sunlight reach Earth but absorb some heat leaving the surface. This natural effect keeps Earth warm enough for life, but adding too much greenhouse gas strengthens the warming effect.",
  "Which gas do people often link with burning coal, oil, and gas?": "Carbon dioxide is released when fossil fuels such as coal, oil, petrol, and natural gas are burned. Because people burn large amounts of these fuels, carbon dioxide is a major focus in climate change.",
  "Which transport choice usually makes fewer emissions for a short local trip?": "Walking or cycling does not burn petrol or diesel for the trip. For short local journeys, replacing a car trip with active transport can reduce emissions and air pollution.",
  "What is renewable energy?": "Renewable energy comes from sources that naturally refill, such as sunlight and wind. These sources are different from fossil fuels, which take millions of years to form and release carbon dioxide when burned.",
  "Which is a renewable energy source?": "Wind is renewable because moving air keeps being created by natural processes. Coal, petrol, and diesel are fossil fuels and are used up when burned.",
  "What can happen when the planet warms?": "A warmer climate can increase the chance, intensity, or duration of very hot conditions in many places. Heatwaves are one important risk because they affect health, energy use, plants, and animals.",
  "What is a carbon footprint?": "A carbon footprint is a way to describe the greenhouse gas emissions connected to an activity, person, product, or household. It helps compare which choices create more or fewer emissions.",
  "Which action saves energy at home?": "Turning screens off when finished avoids using electricity for devices nobody is using. This habit matters more when it is repeated across televisions, computers, game consoles, and chargers.",
  "Why are trees useful for the climate?": "Trees take in carbon dioxide as they grow and store some of that carbon in their wood, leaves, and roots. Trees are not a complete solution by themselves, but healthy forests are important carbon sinks.",
  "Which school-gate choice can reduce emissions?": "Walking, cycling, or sharing a ride can reduce the number of separate car trips to school. Fewer vehicle trips usually means less fuel burned and fewer transport emissions.",
  "Which greenhouse gas is strongly linked to burning fossil fuels?": "Carbon dioxide is produced when fossil fuels burn. It can remain in the atmosphere for a long time, which is why cutting fossil-fuel emissions is central to climate action.",
  "What is the carbon cycle?": "The carbon cycle is the movement of carbon between the atmosphere, oceans, soil, rocks, plants, animals, and human activities. Climate change is connected to this cycle because burning fossil fuels moves extra stored carbon into the air quickly.",
  "Which activity adds carbon dioxide to the air?": "A petrol car releases carbon dioxide because fuel is burned in the engine. Growing a plant, turning off a lamp, or walking to school do not release carbon dioxide in the same direct way.",
  "What does mitigation mean in climate action?": "Mitigation means reducing the causes of climate change, especially greenhouse gas emissions. Examples include using less fossil fuel, improving energy efficiency, and switching to cleaner energy.",
  "Which home change can reduce energy use?": "Efficient lights and appliances are designed to do the same job while using less electricity. That lowers energy demand and can reduce emissions when electricity comes from fossil fuels.",
  "What is active transport?": "Active transport means walking, cycling, scooting, or using your body to move instead of relying on a car. It can reduce emissions for short trips and also supports health.",
  "Why does saving electricity matter if electricity is made from fossil fuels?": "When electricity is produced by burning coal or gas, using less electricity can mean less fuel needs to be burned. Efficiency and careful use both reduce demand on the energy system.",
  "Which is a likely climate change impact?": "Sea level can rise as ocean water warms and expands and as land ice melts. Rising seas can affect coastal communities, beaches, wetlands, and infrastructure.",
  "What can a family energy bill help show?": "An energy bill shows how much electricity or gas a household used during a billing period. Comparing bills over time can help families see whether energy-saving habits are making a difference.",
  "Which choice is best for reducing transport emissions?": "Combining errands into one trip or using public transport can reduce the number of vehicle kilometres travelled per person. That usually lowers fuel use and emissions.",
  "Which greenhouse gas is the largest human-caused driver of long-term warming?": "Carbon dioxide is the largest contributor to human-caused long-term warming because it is released in huge amounts and remains important in the climate system for a long time.",
  "Why is water vapour different from carbon dioxide in climate discussions?": "Water vapour is a greenhouse gas, but its amount in the air changes mainly as temperature changes. Human-added carbon dioxide is different because burning fossil fuels directly increases it and drives long-term warming.",
  "Which sector is a major source of global emissions?": "Energy supply is a major emissions source because electricity, heat, transport fuels, and industry have often depended on coal, oil, and gas. Cleaning up energy systems is therefore a major climate strategy.",
  "What does per-person emissions mean?": "Per-person emissions are total emissions divided by the number of people in a group or country. This helps compare responsibility and energy use between places with different population sizes.",
  "Which action targets emissions instead of only awareness?": "Improving building efficiency changes the actual energy needed for heating, cooling, and lighting. Awareness is useful, but efficiency upgrades directly reduce energy waste and emissions.",
  "Why can school transport be part of a climate plan?": "School travel happens every weekday, so repeated car trips can add up across a term or year. Walking, cycling, public transport, and carpooling can all reduce the total transport footprint.",
  "What is an urban carbon cycle focus?": "An urban carbon cycle focus looks at how carbon moves through cities, including buildings, transport, energy use, waste, trees, and soils. Cities matter because many people and emissions sources are concentrated there.",
  "Which phrase best describes climate adaptation?": "Adaptation means preparing for climate impacts that are already happening or expected, such as heat, flooding, bushfire risk, or coastal change. It works alongside mitigation, which reduces emissions.",
  "Which evidence supports global warming?": "A single hot or cold day is weather, not proof by itself. Long-term increases in average global temperature, along with ocean warming and other measured changes, support the evidence for global warming.",
  "Which habit shows leadership at home?": "Managing devices and reducing waste without reminders shows that the habit has become personal responsibility. Older students can also influence younger family members by modelling the behaviour."
};

function renderQuiz() {
  const group = quizGroups[activeGroup];

  updateGroupButtons();
  quizHeading.textContent = group.heading;
  groupDescription.textContent = group.description;
  quizCount.textContent = `${group.questions.length} questions`;
  resultMessage.textContent = "";
  resultMessage.classList.remove("is-complete");
  quizForm.innerHTML = "";

  group.questions.forEach((item, questionIndex) => {
    const fieldset = document.createElement("fieldset");
    fieldset.className = "question-row";

    const legend = document.createElement("legend");
    legend.textContent = `${questionIndex + 1}. ${item.question}`;
    fieldset.append(legend);

    const optionList = document.createElement("div");
    optionList.className = "option-list";

    item.options.forEach((option, optionIndex) => {
      const label = document.createElement("label");
      label.className = "option-card";
      const input = document.createElement("input");
      input.type = "radio";
      input.name = `question-${questionIndex}`;
      input.value = String(optionIndex);

      const optionText = document.createElement("span");
      optionText.className = "option-text";
      optionText.textContent = option;

      label.append(input, optionText);
      optionList.append(label);
    });

    const feedback = document.createElement("p");
    feedback.className = "question-feedback";
    feedback.setAttribute("aria-live", "polite");

    fieldset.append(optionList, feedback);
    quizForm.append(fieldset);
  });
}

function getSourceForQuestion(question) {
  const questionText = question.toLowerCase();

  if (questionText.includes("recycling")) return sourceLinks.epaRecycling;
  if (questionText.includes("light")) return sourceLinks.energyLights;
  if (questionText.includes("screens") || questionText.includes("devices") || questionText.includes("chargers") || questionText.includes("electricity") || questionText.includes("energy bill") || questionText.includes("home change") || questionText.includes("saves energy")) {
    return sourceLinks.energySaver;
  }
  if (questionText.includes("greenhouse") || questionText.includes("carbon cycle") || questionText.includes("plants") || questionText.includes("trees") || questionText.includes("water vapour")) {
    return sourceLinks.nasaGreenhouse;
  }
  if (questionText.includes("fossil fuels") || questionText.includes("carbon dioxide") || questionText.includes("emissions") || questionText.includes("per-person") || questionText.includes("sector") || questionText.includes("burning coal")) {
    return sourceLinks.epaGases;
  }
  if (questionText.includes("warms") || questionText.includes("sea level") || questionText.includes("impact") || questionText.includes("adaptation") || questionText.includes("global warming")) {
    return sourceLinks.epaBasics;
  }
  return sourceLinks.scienceLearn;
}

function getExplanation(item) {
  const correctAnswer = item.options[item.answer];
  return {
    text: questionExplanations[item.question] || `The best answer is "${correctAnswer}" because it matches the climate or energy idea in this question.`,
    source: getSourceForQuestion(item.question)
  };
}

function renderFeedback(feedback, status, explanation) {
  feedback.textContent = "";

  const statusText = document.createElement("strong");
  statusText.textContent = `${status}. `;

  const explanationText = document.createElement("span");
  explanationText.textContent = `Explanation: ${explanation.text}`;

  feedback.append(statusText, explanationText);
}

function renderResultMessage(score, total) {
  const isStrongScore = score >= 8;

  resultMessage.classList.add("is-complete");
  resultMessage.textContent = "";

  const mascotIcon = document.createElement("img");
  mascotIcon.src = "../assets/images/Mascot3.png";
  mascotIcon.alt = "";
  mascotIcon.setAttribute("aria-hidden", "true");

  const resultText = document.createElement("span");

  const resultTitle = document.createElement("span");
  resultTitle.className = "result-title";
  resultTitle.textContent = `Mission complete: ${score}/${total}`;

  const resultCopy = document.createElement("span");
  resultCopy.className = "result-copy";
  resultCopy.textContent = isStrongScore
    ? "Great energy hero work. You are ready to help your family save power."
    : "Review the marked answers, learn the tips, and try the mission again.";

  const certificateLink = document.createElement("a");
  certificateLink.className = "quiz-button primary result-certificate-link";
  certificateLink.href = "certificate.html";
  certificateLink.textContent = "Generate your certificate";

  resultText.append(resultTitle, resultCopy);
  resultMessage.append(mascotIcon, resultText, certificateLink);
}

function storeQuizResult(score, total) {
  const group = quizGroups[activeGroup];
  const result = {
    score,
    total,
    group: activeGroup,
    groupHeading: group.heading,
    completedAt: new Date().toISOString()
  };

  try {
    window.localStorage.setItem("captainWattsonQuizResult", JSON.stringify(result));
  } catch (error) {
    const url = new URL("certificate.html", window.location.href);
    url.searchParams.set("score", String(score));
    url.searchParams.set("total", String(total));
    url.searchParams.set("group", activeGroup);
    resultMessage.querySelector(".result-certificate-link")?.setAttribute("href", url.href);
  }
}

function checkAnswers(event) {
  event.preventDefault();

  const group = quizGroups[activeGroup];
  let score = 0;

  group.questions.forEach((item, questionIndex) => {
    const fieldset = quizForm.querySelectorAll(".question-row")[questionIndex];
    const selected = quizForm.querySelector(`input[name="question-${questionIndex}"]:checked`);
    const feedback = fieldset.querySelector(".question-feedback");
    const optionCards = fieldset.querySelectorAll(".option-card");

    fieldset.classList.remove("is-correct", "is-wrong");
    optionCards.forEach((card) => card.classList.remove("is-correct", "is-wrong"));

    if (!selected) {
      feedback.textContent = "Choose an answer.";
      fieldset.classList.add("is-wrong");
      return;
    }

    const explanation = getExplanation(item);

    if (Number(selected.value) === item.answer) {
      score += 1;
      optionCards[item.answer].classList.add("is-correct");
      renderFeedback(feedback, "Correct", explanation);
      fieldset.classList.add("is-correct");
    } else {
      optionCards[item.answer].classList.add("is-correct");
      optionCards[Number(selected.value)].classList.add("is-wrong");
      renderFeedback(feedback, "Not quite", explanation);
      fieldset.classList.add("is-wrong");
    }
  });

  renderResultMessage(score, group.questions.length);
  storeQuizResult(score, group.questions.length);
  resultMessage.scrollIntoView({ behavior: "smooth", block: "center" });
}

quizGroupButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeGroup = button.dataset.group;
    const url = new URL(window.location.href);
    url.searchParams.set("group", activeGroup);
    window.history.replaceState({}, "", url);
    renderQuiz();
  });
});

quizForm?.addEventListener("submit", checkAnswers);
resetButton?.addEventListener("click", renderQuiz);

renderQuiz();
