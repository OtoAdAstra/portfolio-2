const App = () => {
  return (
    <div>
      <button onClick={() => document.body.classList.toggle("dark-theme")}>
        dark theme
      </button>
      <button onClick={() => document.body.classList.toggle("light-theme")}>
        light theme
      </button>
    </div>
  );
};

export default App;
