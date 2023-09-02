// import "./LinkCard.css";
import Link from "./Link";

function LinkCard(props) {
  return (
    <div className="link-card">
      <h3>{props.titulo}</h3>
      <span className="curly"> &#123;</span>
      <ul>
        {props.links.map((i) => (
          <Link nome={i.nome} link={i.link} tag={i.tag} />
        ))}
      </ul>
      <span className="curly"> &#125;</span>
    </div>
  );
}

export default LinkCard;
