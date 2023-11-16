// import "./LinkContainer.css";
import LinkCard from "./LinkCard";
// LINKS
const dev = [
  {
    nome: "outlook",
    link: "https://outlook.office.com/mail/",
    tag: "senac",
  },
  {
    nome: "sharepoint",
    link: "https://senacrs365.sharepoint.com/sites/FS-GETE-MATERIAIS/Documentos%20Compartilhados/Forms/AllItems.aspx",
    tag: "senac",
  },
  {
    nome: "intranet",
    link: "https://novaintranet.senacrs.com.br/senac/",
    tag: "senac",
  },
  {
    nome: "linkedIn",
    link: "https://www.linkedin.com/feed/",
  },
  {
    nome: "github",
    link: "https://github.com/",
  },
  {
    nome: "leetcode",
    link: "https://leetcode.com"
  }
];
const whatever = [
  {
    nome: "reddit",
    link: "https://reddit.com",
  },
  {
    nome: "r/brdev",
    link: "https://reddit.com/r/brdev",
  },
  {
    nome: "xitter",
    link: "https://twitter.com",
  },
  {
    nome: "tabnews",
    link: "https://tabnews.com.br/",
  },
  {
    nome: "youtube",
    link: "https://www.youtube.com/",
  },
  {
    nome: "dev.to",
    link: "https://dev.to"
  },
];
const person = [
  {
    nome: "e-mail",
    link: "https://autistici.org",
  },
  {
    nome: "pinterest",
    link: "https://pinterest.com",
  },
  {
    nome: "moodle",
    link: "https://moodle.ufrgs.br/login/login.php",
    tag: "estudos",
  },
  {
    nome: "udemy",
    link: "https://udemy.com/",
    tag: "estudos",
  },
];

function LinkContainer() {
  return (
    <div className="link-container">
      <LinkCard titulo="dev" links={dev} />
      <LinkCard titulo="the web" links={whatever} />
      <LinkCard titulo="personal, etc" links={person} />
    </div>
  );
}

export default LinkContainer;
