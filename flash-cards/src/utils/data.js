let users = {
  bulma: {
		id: "bulma",
		name: "Bulma",
		avatarURL:
			"https://media.comicbook.com/2018/02/bulma-db-1085539-1280x0.jpeg",
		answers: {
			"8xf0y6ziyjabvozdd253nd": "optionOne",
			"6ni6ok3ym7mf1p33lnez": "optionTwo",
			am8ehyc8byjqgar0jgpub9: "optionTwo",
			loxhs1bqm25b708cmbf3g: "optionTwo",
		},
		questions: ["8xf0y6ziyjabvozdd253nd", "am8ehyc8byjqgar0jgpub9"],
	},
	gon_freecss: {
		id: "gon_freecss",
		name: "Gon Freecss",
		avatarURL:
			"https://manga-kun.com/wp-content/uploads/2020/09/gon-freecss.jpg",
		answers: {
			vthrdm985a262al8qx3do: "optionOne",
			xj352vofupe1dqz9emx13r: "optionTwo",
		},
		questions: ["loxhs1bqm25b708cmbf3g", "vthrdm985a262al8qx3do"],
	},
	yamato: {
		id: "yamato",
		name: "Yamato",
		avatarURL:
			"https://i.pinimg.com/originals/90/0c/5a/900c5a65069dfe8f19e45a8ce4a7d206.jpg",
		answers: {
			xj352vofupe1dqz9emx13r: "optionOne",
			vthrdm985a262al8qx3do: "optionTwo",
			"6ni6ok3ym7mf1p33lnez": "optionTwo",
		},
		questions: ["6ni6ok3ym7mf1p33lnez", "xj352vofupe1dqz9emx13r"],
	},
};

let questions = {
	"8xf0y6ziyjabvozdd253nd": {
		id: "8xf0y6ziyjabvozdd253nd",
		author: "bulma",
		timestamp: 1467166872634,
		optionOne: {
			votes: ["bulma"],
			text: "have horrible short term memory",
		},
		optionTwo: {
			votes: [],
			text: "have horrible long term memory",
		},
	},
	"6ni6ok3ym7mf1p33lnez": {
		id: "6ni6ok3ym7mf1p33lnez",
		author: "gon_freecss",
		timestamp: 1468479767190,
		optionOne: {
			votes: [],
			text: "become a superhero",
		},
		optionTwo: {
			votes: ["gon_freecss", "bulma"],
			text: "become a supervillain",
		},
	},
	am8ehyc8byjqgar0jgpub9: {
		id: "am8ehyc8byjqgar0jgpub9",
		author: "bulma",
		timestamp: 1488579767190,
		optionOne: {
			votes: [],
			text: "be telekinetic",
		},
		optionTwo: {
			votes: ["bulma"],
			text: "be telepathic",
		},
	},
	loxhs1bqm25b708cmbf3g: {
		id: "loxhs1bqm25b708cmbf3g",
		author: "yamato",
		timestamp: 1482579767190,
		optionOne: {
			votes: [],
			text: "be a front-end developer",
		},
		optionTwo: {
			votes: ["bulma"],
			text: "be a back-end developer",
		},
	},
	vthrdm985a262al8qx3do: {
		id: "vthrdm985a262al8qx3do",
		author: "yamato",
		timestamp: 1489579767190,
		optionOne: {
			votes: ["yamato"],
			text: "find $50 yourself",
		},
		optionTwo: {
			votes: ["gon_freecss"],
			text: "have your best friend find $500",
		},
	},
	xj352vofupe1dqz9emx13r: {
		id: "xj352vofupe1dqz9emx13r",
		author: "gon_freecss",
		timestamp: 1493579767190,
		optionOne: {
			votes: ["gon_freecss"],
			text: "write JavaScript",
		},
		optionTwo: {
			votes: ["yamato"],
			text: "write Swift",
		},
	},
};

function generateUID() {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
}

export function getUsersData() {
  return new Promise((res) => {
    setTimeout(() => res({ ...users }), 1000);
  });
}

export function getQuestionsData() {
  return new Promise((res) => {
    setTimeout(() => res({ ...questions }), 1000);
  });
}

function formatQuestion({ optionOneText, optionTwoText, author }) {
  return {
    id: generateUID(),
    timestamp: Date.now(),
    author,
    optionOne: {
      votes: [],
      text: optionOneText,
    },
    optionTwo: {
      votes: [],
      text: optionTwoText,
    },
  };
}

export function saveQuestionData(question) {
  return new Promise((res) => {
    const authUser = question.author;
    const formattedQuestion = formatQuestion(question);

    setTimeout(() => {
      questions = {
        ...questions,
        [formattedQuestion.id]: formattedQuestion,
      };

      users = {
        ...users,
        [authUser]: {
          ...users[authUser],
          questions: users[authUser].questions.concat([formattedQuestion.id]),
        },
      };

      res(formattedQuestion);
    }, 1000);
  });
}

export function saveQuestionAnswerData({ authUser, qid, answer }) {
  return new Promise((res) => {
    setTimeout(() => {
      users = {
        ...users,
        [authUser]: {
          ...users[authUser],
          answers: {
            ...users[authUser].answers,
            [qid]: answer,
          },
        },
      };

      questions = {
        ...questions,
        [qid]: {
          ...questions[qid],
          [answer]: {
            ...questions[qid][answer],
            votes: questions[qid][answer].votes.concat([authUser]),
          },
        },
      };

      res();
    }, 500);
  });
}
