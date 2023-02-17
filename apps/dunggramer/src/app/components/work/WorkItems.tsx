const WorkItems = ({ item }) => {
  return (
    <div className="work__card">
      <img src={item.image} alt={item?.alt} className="work__img" />
      <h3 className="work__title">{item.title}</h3>
      <a href="#" className="work__button">
        Explore <i className="bx bx-right-arrow-alt work__button-icon" />
      </a>
    </div>
  );
};

export default WorkItems;
