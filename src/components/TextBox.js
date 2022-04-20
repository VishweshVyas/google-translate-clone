import SelectDropDown from "./SelectDropDown";




const TextBox = ({ style, selectedLanguage, setShowModal, setTextToTranslate, textToTranslate, setTranslatedText, translatedText }) => {
  
    const handleClick = () => {
        setTextToTranslate("");
        setTranslatedText("");
      }
  
  
    return (
        <div className={style}>
            <SelectDropDown
                selectedLanguage={selectedLanguage}
                style={style}
                setShowModal={setShowModal}
            />
            <textarea
                className={style}
                disabled={style === "output"}
                placeholder={style == "input" ? "Enter text" : "Translation"}
                onChange={(e) => setTextToTranslate(e.target.value)}
                value={style === "input" ? textToTranslate : translatedText}
            />
            {style === "input" && (
                <div className="delete" onClick={handleClick}>
                    ˟
                </div>
            )}

        </div>
    )
}

export default TextBox;