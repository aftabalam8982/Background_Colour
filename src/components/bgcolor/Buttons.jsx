const ButtonNames = [
  "Red",
  "Green",
  "Blue",
  "Olive",
  "Gray",
  "Yellow",
  "Pink",
  "Purple",
  "Lavender",
  "White",
  "Black",
];

const Buttons = ({ handleClick }) => {
  return (
    <div className='flex justify-center flex-wrap justify-self-center gap-2 bg-white text-black rounded-xl p-3 z-30 fixed bottom-10'>
      {ButtonNames.map((ele) => {
        return (
          <button
            type='button'
            className={`rounded-3xl px-3 py-2 text-sm font-semibold text-gray-300 shadow-sm `}
            style={{ backgroundColor: ele }}
            onClick={() => handleClick(ele)}
          >
            {ele}
          </button>
        );
      })}
    </div>
  );
};

export default Buttons;
