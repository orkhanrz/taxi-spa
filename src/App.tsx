import "./index.css";
import Header from "./components/header/header";
import Hero from "./sections/hero/hero";
import Services from "./sections/services/services";
import Transfers from "./sections/transfers/transfers";
import TaxiCab from "./sections/taxi-cab/taxi-cab";
import Call from "./sections/call/call";
import BookTrip from "./sections/book-trip/book-trip";

function App() {
	return (
		<>
			<Header />
			<Hero />
			<Services />
			<Transfers />
			<TaxiCab />
			<Call />
			<BookTrip />
		</>
	);
}

export default App;
