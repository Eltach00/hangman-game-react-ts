import './keyboard.css'

const KEYS = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
]

export default function Keyboard() {
  return (
    <div className="keyboard">
      {KEYS.map((item, ind) => {
        return (
          <button className="btn" key={ind}>
            {item}
          </button>
        )
      })}
    </div>
  )
}
