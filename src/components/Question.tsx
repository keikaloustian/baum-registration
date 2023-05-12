export default function Question({ question, step, qResults, setQResults }) {
  // const obj = {
  //   prompt: "QUESTION 1",
  //   alternatives: { a: "this", b: "is", c: "test" },
  //   answer: "c",
  // };

  return (
    <div className="bg-lgray col-span-6 col-start-3 my-[15%]">
      <h1>Pregunta{step - 1}/5</h1>
      <h2>{question.prompt}</h2>
      {/* Iterate over the alternatives object and render for each alt` */}
      <ol>
        {Object.entries(question.alternatives).map(([key, value]) => (
          <li key={key}>
            <label htmlFor={key}>
              <input
                type="radio"
                id={key}
                name="alternatives"
                onChange={() => {
                  // Update qResults state with bool answer is correct or not
                  const newResults = [...qResults];
                  newResults[step - 2] = key === question.answer;
                  setQResults(newResults);
                }}
              ></input>
              {key + ". " + value}
            </label>
          </li>
        ))}
      </ol>
    </div>
  );
}
