import { QuestionAnswer } from "../QuestionAnswer"
import S from "./styles.module.css"

export function Quiz() {
  return (
    <div className={S.container}>
      <div className={S.card}>
        <div className={S.quiz}>
          <header className={S.quizHeader}>
            <span className={S.questionCount}>PERGUNTA 1/3</span>
            <p className={S.question}>Qual é o meu nome?</p>
          </header>
          <ul className={S.answers}>
            <li>
              <QuestionAnswer />
            </li>
            <li>
              <QuestionAnswer />
            </li>
            <li>
              <QuestionAnswer />
            </li>
            <li>
              <QuestionAnswer />
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
