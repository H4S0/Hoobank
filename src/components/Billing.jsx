import { bill, apple, google } from "../assets";
import styles from "../style";
const Billing = () => {
  return (
    <section
      id="billing"
      className="flex flex-col-reverse items-center justify-between gap-10 md:flex-row mt-7"
    >
      <div>
        <img
          src={bill}
          alt="billing-picture"
          className="h-[50vh] md:w-[100vh]"
        />
      </div>
      <div>
        <h1 className="text-white text-4xl sm:text-5xl">
          Easily control your billing & invoicing.
        </h1>
        <p className={`${styles.paragraph} mt-5`}>
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>
        <div className="flex flex-row gap-5 mt-5 md:justify-start items-center justify-center">
          <img src={apple} alt="apple" />
          <img src={google} alt="google" />
        </div>
      </div>
    </section>
  );
};

export default Billing;
