import { useEffect, useRef } from "react"
import S from "./styles.module.css"

export function QuestionAnswer(props) {
  const buttonRef = useRef(null)

  useEffect(() => {
    // Limpa a classe sempre que a pergunta mudar
    if (buttonRef.current) {
      buttonRef.current.className = S.container // Reset para apenas a classe container
    }
  }, [props.question]) // Dependência para a pergunta atual

  return (
    <button
      ref={buttonRef}
      onClick={(event) =>
        props.handleAnswerQuestion(event, props.question, props.answer)
      }
      className={S.container}
    >
      {props.answer}
    </button>
  )
}
