const features = [
  "15+ algo patterns discussed",
  "Detailed solutions and explanations",
  "Awesome resources, articles, blogs",
  "Visualizers and animations included",
  "100 pages of quality content",
  "Concepts explained for beginners",
  "All in one revision guide",
];

const What = () => {
  return (
    <div className="grid grid-cols-1 gap-8">
      <h4 className="text-center text-2xl font-bold">What's Included</h4>

      <div className="flex flex-col sm:flex-row items-center gap-8">
        <img
          src="/public/dsa-2.png"
          className="sm:w-1/2 md:scale-75"
          alt="index of book"
        />
        <div className="md:w-1/2">
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li
                key={index}
                className="flex gap-3 font-semibold text-neutral-500"
              >
                <img src="/public/check.svg" className="w-5" alt="check icon" />
                {feature}
              </li>
            ))}
          </ul>

          <button className="mt-8 mx-auto bg-orange-500 px-8 py-4 rounded-full text-white  font-semibold">
            Download for free
          </button>
        </div>
      </div>
    </div>
  );
};

export default What;
