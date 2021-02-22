import '../styles/main.css'

export const PrimaryButton = (props) => <button onClick={props.onClick} className="bg-blue-500 hover:bg-blue-700 text-white w-30 m-3 font-bold py-2 px-4 rounded">{props.text}</button>
export const SubmitButton = (props) => <button className="bg-blue-500 hover:bg-blue-700  text-white w-1/4 m-3 font-bold py-2 px-4 rounded">{props.text}</button>
