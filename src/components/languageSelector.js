const LanguageSelector = () => {
  return (
    <div style={{ position: "absolute", top: "10px", right: "10px" }}>
      <div class="btn-group btn-group-toggle" data-toggle="buttons">
        <label class="btn btn-secondary active">
          <input
            type="radio"
            name="options"
            id="option1"
            autocomplete="off"
            checked
          />
          English
        </label>
        <label class="btn btn-secondary">
          <input type="radio" name="options" id="option2" autocomplete="off" />
          French
        </label>
        <label class="btn btn-secondary">
          <input type="radio" name="options" id="option2" autocomplete="off" />
          Kiswahili
        </label>
      </div>
    </div>
  );
};

export default LanguageSelector;
