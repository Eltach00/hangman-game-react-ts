import './drawing.css'

const HEAD = <div className="HangManHead" />
const BODY = <div className="HangManBody" />
const RHAND = <div className="rHand" />
const LHAND = <div className="lHand" />
const RLEG = <div className="rLeg" />
const LLEG = <div className="lLeg" />

const BODY_PARTS = [HEAD, BODY, RHAND, LHAND, RLEG, LLEG]

type DrawingProps = {
  numberOfGuesses: number
}
export default function HangManDrawing({ numberOfGuesses }: DrawingProps) {
  return (
    <div className="container">
      {BODY_PARTS.slice(0, numberOfGuesses)}
      <div className="shortBarDown" />
      <div className="topBar" />
      <div className="middleBar" />
      <div className="lowBar" />
    </div>
  )
}
