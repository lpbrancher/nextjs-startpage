// import "./LinkContainer.css";
import LinkCard from "./LinkCard";
// LINKS
const dev = [
  {
    key: '01',
    nome: "outlook",
    link: "https://outlook.office.com/mail/",
    tag: "senac",
  },
  {
    key: '02',
    nome: "sharepoint",
    link: "https://senacrs365.sharepoint.com/sites/FS-GETE-MATERIAIS/Documentos%20Compartilhados/Forms/AllItems.aspx",
    tag: "senac",
  },
  {
    key: '03',
    nome: "intranet",
    link: "https://novaintranet.senacrs.com.br/senac/",
    tag: "senac",
  },
  {
    key: '04',
    nome: "linkedIn",
    link: "https://www.linkedin.com/feed/",
  },
  {
    key: '05',
    nome: "github",
    link: "https://github.com/",
  },
  {
    key: '06',
    nome: "leetcode",
    link: "https://leetcode.com"
  }
];
const whatever = [
  {
    key: '07',
    nome: "reddit",
    link: "https://reddit.com",
  },
  {
    key: '08',
    nome: "r/brdev",
    link: "https://reddit.com/r/brdev",
  },
  {
    key: '09',
    nome: "xitter",
    link: "https://twitter.com",
  },
  {
    key: '10',
    nome: "tabnews",
    link: "https://tabnews.com.br/",
  },
  {
    key: '11',
    nome: "youtube",
    link: "https://www.youtube.com/",
  },
  {
    key: '12',
    nome: "dev.to",
    link: "https://dev.to"
  },
];
const person = [
  {
    key: '13',
    nome: "e-mail",
    link: "https://autistici.org",
  },
  {
    key: '14',
    nome: "pinterest",
    link: "https://pinterest.com",
  },
  {
    key: '15',
    nome: "moodle",
    link: "https://moodle.ufrgs.br/login/login.php",
    tag: "estudos",
  },
  {
    key: '16',
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
