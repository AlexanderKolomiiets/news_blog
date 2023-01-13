import CardList from '../../components/CardList';
import SearchBar from '../../components/SearchBar';
import './HomePage.scss';

export const HomePage: React.FC = () => (
  <div className="homepage">
    <SearchBar />
    <CardList />
  </div>
);
