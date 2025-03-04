import Part from "../../../models/Part";

export const InfoBox = ({part}: {part: Part}) => {

  return (
    <div className="box__container">
      <h2>Infos</h2>
      <div className="box__container__content">
        <div className="field">
          <p className="field__title">Categories</p>
          <p className="field__content">{part.category.main}</p>
        </div>
        <div className="field">
          <p className="field__title">Type</p>
          <p className="field__content">{part.category.sub}</p>
        </div>
        <div className="field">
          <p className="field__title">Mass</p>
          <p className="field__content">
            <span>{Number(part.info.mass).toLocaleString()} Kg</span>
          </p>
        </div>
        <div className="field">
          <p className="field__title">Price</p>
          <p className="field__content">
            <span>Buy {Number(part.info.price).toLocaleString()}g</span>
          </p>
        </div>
        <div className="field">
          <p className="field__title">Betterment</p>
            <p className="field__content">
              {part.info.betterment ? (
              <>
                Add {part.info.betterment.size}{part.info.betterment.unit}.
              </>
              ): (
                <>The "{part.name}" has not betterment.</>
              )}
            </p>
        </div>
      </div>
    </div>

  )
}
