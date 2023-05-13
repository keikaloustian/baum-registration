export default function Question({
  question,
  step,
  qResults,
  setQResults,
  qAnswers,
  setQAnswers,
}) {
  // const obj = {
  //   prompt: "QUESTION 1",
  //   alternatives: { a: "this", b: "is", c: "test" },
  //   answer: "c",
  // };

  const randomizer = Math.random();
  const randColour =
    randomizer <= 0.33
      ? "bg-elime"
      : randomizer >= 0.66
      ? "bg-dpink"
      : "bg-vpurple";

  return (
    <>
      <div className={`${randColour} h-screen w-[38%] absolute right-0`}></div>
      <div className=" col-span-8 col-start-2 relative">
        <h1 className="text-5xl tracking-wider font-light flex justify-between my-[15%]">
          Pregunta
          <div className="bg-dgray ml-4 mr-8 h-[1px] w-full self-end"></div>
          <span className="tracking-[1em] font-semibold">{step - 1}/5</span>
        </h1>
        <h2 className="text-2xl my-16 ml-8">{question.prompt}</h2>
        {/* Iterate over the alternatives object and render for each alt` */}
        <ol className="flex flex-col gap-6 ml-8">
          {Object.entries(question.alternatives).map(([key, value]) => (
            <li key={key}>
              <label htmlFor={key} className="text-xl inline-block">
                <input
                  type="radio"
                  id={key}
                  name="alternatives"
                  checked={qAnswers[step - 2] === key}
                  onChange={() => {
                    // Update qAnswers
                    const newAnswers = [...qAnswers];
                    newAnswers[step - 2] = key;
                    setQAnswers(newAnswers);
                    // // Update qResults state with bool answer is correct or not
                    // const newResults = [...qResults];
                    // newResults[step - 2] = key === question.answer;
                    // setQResults(newResults);
                  }}
                  className="m-3 accent-vpurple"
                ></input>
                {key + ". " + value}
              </label>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}
