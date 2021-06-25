import Layout from "components/Layout";
import Hero from "components/LandingPage/Hero";
import TentangKami from "components/LandingPage/TentangKami";
import CaraKerja from "components/LandingPage/CaraKerja";
import TentangKami2 from "components/LandingPage/TentangKami2";
import MulaiSekarang from "components/LandingPage/MulaiSekarang";
export default function Home() {
	return (
		<Layout>
			<Hero />
			<TentangKami />
			<CaraKerja />
			<TentangKami2 />
			<MulaiSekarang />
		</Layout>
	);
}
