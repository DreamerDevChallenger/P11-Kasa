import NotFound from "../components/NotFound";
function ErrorPage() {
  const id = new URLSearchParams(window.location.search).get("id");
  console.log(id);
  return <NotFound></NotFound>;
}

export default ErrorPage;
