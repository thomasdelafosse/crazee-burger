import { Link } from "react-router-dom";

export default function Error() {
    return (
        <div>
          <h1>Bonjour</h1>
            <Link to="/">
              <button>Retourner vers la page d'acceuil</button>
            </Link>
        </div>
      )
}
