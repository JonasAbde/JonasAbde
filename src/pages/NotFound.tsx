import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <p className="font-display text-8xl text-gradient">404</p>
        <h1 className="text-2xl font-display mt-4">Siden blev ikke fundet</h1>
        <p className="text-pearl-dark mt-2">Den side du leder efter findes ikke.</p>
        <Link to="/" className="mt-6 inline-block">
          <Button variant="primary">Tilbage til forsiden</Button>
        </Link>
      </div>
    </div>
  );
}
