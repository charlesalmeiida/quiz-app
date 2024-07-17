import S from "./styles.module.css"

export function QuestionAnswer(props) {
  return (
    <button
      onClick={(event) =>
        props.handleAnswerQuestion(event, props.question, props.answer)
      }
      className={S.container}
    >
      {props.answer}
    </button>
  )
}
