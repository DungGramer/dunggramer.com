const Backend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Backend Developer</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i className="bx bx-badge-check" />

            <div>
              <h3 className="skills__name">PHP</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bx-badge-check" />

            <div>
              <h3 className="skills__name">NodeJS</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bx-badge-check" />

            <div>
              <h3 className="skills__name">Python</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data">
            <i className="bx bx-badge-check" />

            <div>
              <h3 className="skills__name">MySQL</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bx-badge-check" />

            <div>
              <h3 className="skills__name">Firebase</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bx-badge-check" />

            {/* <div>
              <h3 className="skills__name">Python</h3>
              <span className="skills__level">Basic</span>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backend;
