// import "./LinkContainer.css";
import LinkCard from "./LinkCard";
// LINKS
const dev = [
  {
    nome: "Outlook",
    link: "https://outlook.office.com/mail/",
    tag: "senac",
  },
  {
    nome: "Bb Collab",
    link: "https://ca.bbcollab.com/collab/ui/session/guest/6a0fe0668b4f4f4ba5925efba6f32347",
    tag: "senac",
  },
  {
    nome: "Sharepoint",
    link: "https://senacrs365.sharepoint.com/sites/FS-GETE-MATERIAIS/Documentos%20Compartilhados/Forms/AllItems.aspx",
    tag: "senac",
  },
  {
    nome: "Intranet",
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
];
const whatever = [
  {
    nome: "reddit",
    link: "https://reddit.com",
  },
  {
    nome: "tabnews",
    link: "https://tabnews.com.br/",
  },
  {
    nome: "tw0tter",
    link: "https://twitter.com",
  },
  {
    nome: "YouTube",
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
    nome: "linkedin",
    link: "https://linkedin.com",
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