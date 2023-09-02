// import "./LinkCard.css";
import Link from "./Link";

function LinkCard(props: any) {
  return (
    <div className="link-card">
      <h3>{props.titulo}</h3>
      <span className="curly"> &#123;</span>
      <ul>
        {props.links.map((i: any) => (
          <Link key={Math.floor(Math.random()* 10)} nome={i.nome} link={i.link} tag={i.tag} />
        ))}
      </ul>
      <span className="curly"> &#125;</span>
    </div>
  );
}

export default LinkCard;
