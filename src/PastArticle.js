import { Helmet } from "react-helmet";
function PastArticle() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Past Article</title>
        <link rel="canonical" href="http://catchphish.org/PastArticle" />
        <meta name="description" content="Past Article" />
      </Helmet>
      <h1>This is the Past Scams Article Page.</h1>
    </div>
  );
}
export default PastArticle;
