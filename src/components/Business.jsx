import styles from "../style";
import Button from "./Button";
import { features } from "../data";

const Business = () => {
  return (
    <section
      id="business"
      className={`${styles.flexStart} flex-col sm:flex-col md:flex-row lg:flex-row md:items-center`}
    >
      <div className="flex-1 text-white">
        <h1 className="text-3xl font-bold">
          You do the business, <br /> we’ll handle the money.
        </h1>
        <p className={`${styles.paragraph} mt-7`}>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <Button />
      </div>
      <div className="mt-10 w-full sm:w-[75%] md:w-[50%]">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="flex items-center justify-start gap-5 w-full mt-5 p-4 hover:bg-gray-700 transition-colors duration-300 rounded-lg"
          >
            <img
              src={feature.icon}
              alt="feature-icons"
              className="w-[50px] h-[50px]"
            />
            <div>
              <h1 className="text-white font-semibold">{feature.title}</h1>
              <p className={`${styles.paragraph}`}>{feature.content}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Business;
