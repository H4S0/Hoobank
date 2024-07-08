import styles from "../style";
import Button from "./Button";
import card from "../assets/card.png";
const CardDeal = () => {
  return (
    <section
      id="card-deal"
      className="flex flex-col justify-between items-center sm:flex-row "
    >
      <div className="text-white w-full sm:w-[50%]">
        <h1 className="text-6xl">Find a better card deal in few easy steps.</h1>
        <p className={`${styles.paragraph} mt-5`}>
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>
        <Button />
      </div>
      <div>
        <img src={card} alt="card-image" className="w-[50vh] h-[45vh]" />
      </div>
    </section>
  );
};

export default CardDeal;
