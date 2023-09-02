function Link(props: any) {
    console.log(props.tag);
  
    if (props.tag == "senac") {
      return (
        <li>
          <a href={props.link}>
            {props.nome}
            <span className="tag senac">{props.tag}</span>
          </a>
        </li>
      );
    } else if (props.tag == "estudos") {
      return (
        <li>
          <a href={props.link}>
            {props.nome}
            <span className="tag estudos">{props.tag}</span>
          </a>
        </li>
      );
    } else {
      return (
        <li>
          <a href={props.link}>{props.nome}</a>
        </li>
      );
    }
  }
  
  export default Link;