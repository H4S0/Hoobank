import styles from "../style";
const FeedbackCard = ({ content, name, title, img }) => {
  return (
    <div className="flex flex-col text-white hover:bg-slate-800 rounded-xl p-10 items-center justify-between gap-10">
      <div>
        <p className={`w-[30vh] ${styles.paragraph}`}>{content}</p>
      </div>
      <div className="flex flex-row items-center gap-5">
        <img src={img} alt="image" width={80} height={80} />
        <div className="flex flex-col">
          <h1>{name}</h1>
          <p className={`${styles.paragraph}`}>{title}</p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
