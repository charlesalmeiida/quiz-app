import { useState } from "react"
import { QuestionAnswer } from "../QuestionAnswer"
import S from "./styles.module.css"
import { Button } from "../Button"
import { Result } from "../Result"
import { ProgressBar } from "../ProgressBar"

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
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [count, setCount] = useState(0)
  const [isCurrentQuestionAswered, setCurrentQuestionAnswered] = useState(false)
  const [isTakingQuiz, setIsTakingQuiz] = useState(true)
  const quizSize = QUESTIONS.length

  const currentQuestionNumber = currentQuestionIndex + 1

  function handleAnswerQuestion(event, question, answer) {
    if (isCurrentQuestionAswered) {
      return
    }

    const isCorrectAnswer = question.correctAnswer === answer
    const resultClassName = isCorrectAnswer ? S.correct : S.incorrect
    event.currentTarget.classList.add(resultClassName)

    if (isCorrectAnswer) {
      setCount(count + 1)
    }

    setCurrentQuestionAnswered(true)
  }

  const handleNextQuestion = () => {
    if (currentQuestionNumber < quizSize) {
      setCurrentQuestionIndex((index) => index + 1)
    } else {
      setIsTakingQuiz(false)
    }

    setCurrentQuestionAnswered(false)
  }

  const handleTryAgain = () => {
    setIsTakingQuiz(true)
    setCount(0)
    setCurrentQuestionIndex(0)
  }

  const currentQuestion = QUESTIONS[currentQuestionIndex]
  const navigationButtonText =
    currentQuestionNumber === quizSize ? "Ver Resultado" : "Próxima Pergunta"

  return (
    <div className={S.container}>
      <div className={S.card}>
        {isTakingQuiz ? (
          <div className={S.quiz}>
            <ProgressBar size={quizSize} currentStep={currentQuestionNumber} />
            <header className={S.quizHeader}>
              <span className={S.questionCount}>
                PERGUNTA {currentQuestionNumber}/{quizSize}
              </span>
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
            {isCurrentQuestionAswered && (
              <Button onClick={handleNextQuestion}>
                {navigationButtonText}
              </Button>
            )}
          </div>
        ) : (
          <Result
            count={count}
            quizSize={quizSize}
            handleTryAgain={handleTryAgain}
          />
        )}
      </div>
    </div>
  )
}
