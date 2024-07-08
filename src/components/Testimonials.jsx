import { feedback } from "../data";
import FeedbackCard from "./FeedbackCard";
import styles from "../style.js";
const Testimonials = () => {
  return (
    <section id="tesimonials" className="flex flex-col gap-10">
      <div className="text-white flex justify-between items-center mt-10">
        <h1 className="text-5xl font-semibold">
          What people are <br /> saying about us
        </h1>
        <p className={`${styles.paragraph}`}>
          Everything you need to accept card payments <br /> and grow your
          business anywhere on the planet.
        </p>
      </div>
      <div className="flex gap-5 justify-center mt-10">
        {feedback.map((feed) => (
          <FeedbackCard
            key={feed.id}
            img={feed.img}
            content={feed.content}
            name={feed.name}
            title={feed.title}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
