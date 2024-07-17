import { useState } from "react"
import { QuestionAnswer } from "../QuestionAnswer"
import S from "./styles.module.css"

const QUESTIONS = [
  {
    id: 1,
    question: "Qual é o meu nome?",
    answers: ["Matheus", "Charles", "Carlos", "Tiago"],
    correctAnswer: "Charles",
  },
  {
    id: 2,
    question: "Qual é a minha idade?",
    answers: ["12", "30", "27", "19"],
    correctAnswer: "27",
  },
  {
    id: 3,
    question: "Qual é a minha profissão?",
    answers: ["Desenvolvedor", "Padeiro", "Designer", "Arquiteto"],
    correctAnswer: "Desenvolvedor",
  },
  {
    id: 4,
    question: "Quem é Tony Stark?",
    answers: [
      "Homem-aranha",
      "Homem de Ferro",
      "Capitão América",
      "Soldado Invernal",
    ],
    correctAnswer: "Homem de Ferro",
  },
]

export function Quiz() {
  const currentQuestion = QUESTIONS[0]
  const [count, setCount] = useState(0)
  const [isCurrentQuestionAswered, setCurrentQuestionAnswered] = useState(false)

  function handleAnswerQuestion(event, question, answer) {
    if (isCurrentQuestionAswered) {
      return
    }

    const isCorrectAnswer = question.correctAnswer === answer
    const resultClassName = isCorrectAnswer ? S.correct : S.incorrect
    event.currentTarget.classList.toggle(resultClassName)

    if (isCorrectAnswer) {
      setCount(count + 1)
    }

    setCurrentQuestionAnswered(true)
  }

  return (
    <div className={S.container}>
      <div className={S.card}>
        <div className={S.quiz}>
          <header className={S.quizHeader}>
            <span className={S.questionCount}>PERGUNTA 1/3</span>
            <p className={S.question}>{currentQuestion.question}</p>
          </header>
          <ul className={S.answers}>
            {currentQuestion.answers.map((answer) => (
              <li key={answer.id}>
                <QuestionAnswer
                  answer={answer}
                  question={currentQuestion}
                  handleAnswerQuestion={handleAnswerQuestion}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
