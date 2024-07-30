import { MouseEvent } from "react"
import S from "./styles.module.css"
import { Question } from "../Quiz"

interface QuestionAnswerProps {
  handleAnswerQuestion: (
    event: MouseEvent<HTMLButtonElement>,
    question: Question,
    answerQuestion: string
  ) => void
  answerQuestion: string
  question: Question
}

export function QuestionAnswer(props: QuestionAnswerProps) {
  return (
    <button
      onClick={(event) =>
        props.handleAnswerQuestion(event, props.question, props.answerQuestion)
      }
      className={S.container}
    >
      {props.answerQuestion}
    </button>
  )
}
