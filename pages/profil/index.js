import { useContext } from "react";
import Link from "next/link";
import AuthContext from "context/AuthContext";
import Layout from "components/Layout";
import withAuth from "utils/withAuth";
import { HeadingXL, HeadingMD } from "components/Typography/Headings";
import { TextTertiary, TextPrimary } from "components/Typography/Text";
import { Image } from "react-bootstrap";
import { MdEdit, MdFeedback, MdSettings } from "react-icons/md";
import styled from "styled-components";
import { mediaBreakpoint } from "utils/breakpoints";

const OptionButton = styled.div`
	background: #f6f6f6;
	padding: 16px 24px;
	border-radius: 8px;
	margin-left: 8px;
	margin-top: 16px;
	width: 100%;
	border: none;
	margin-right: 8px;

	svg {
		font-size: 28px;
		margin-top: 4px;
	}

	@media ${mediaBreakpoint.down.lg} {
		margin-right: 0;
	}
`;

const ButtonsContainer = styled.div`
	margin-left: -8px;
	margin-top: 32px;

	a {
		width: 50%;
	}

	a {
		color: inherit;
	}
	a:hover {
		text-decoration: none;
	}

	@media ${mediaBreakpoint.down.lg} {
		a {
			width: 100%;
		}
	}
`;

const Profil = () => {
	const { logout, user } = useContext(AuthContext);
	console.log(user);
	return (
		<Layout
			title="Profil | Unbelieveable"
			background="#171b2d"
			withMargin
			mainApp
		>
			<div className="d-flex flex-column w-100">
				<div className="d-flex flex-md-row flex-column w-100 align-items-center ">
					<HeadingXL as="p" className="text-primary1 text-md-left text-center">
						Halo,
						<br />
						{user.first_name}
					</HeadingXL>
					<Image
						src="/images/green.png"
						alt="Character"
						className="mx-md-5 mx-0"
						width={167}
						height={147}
					/>
					<div className="d-flex flex-column align-items-center mr-md-5 mr-0 mt-md-0 mt-4">
						<HeadingMD as="p" className="text-primary1">
							2
						</HeadingMD>
						<TextTertiary className="text-primary1 text-center">
							kelas berjalan
						</TextTertiary>
					</div>
					<div className="d-flex flex-column align-items-center mt-md-0 mt-4">
						<HeadingMD as="p" className="text-primary1">
							60 j
						</HeadingMD>
						<TextTertiary className="text-primary1 text-center">
							total <br />
							waktu belajar
						</TextTertiary>
					</div>
				</div>
				<ButtonsContainer className="d-flex flex-wrap">
					<Link href="/profil/edit">
						<a className="d-flex ">
							<OptionButton
								as="button"
								className="d-flex flex-md-row flex-column align-items-center shadow-sm"
							>
								<MdEdit className="mr-0 mr-md-4" />
								<TextPrimary className="text-primary1">edit profil</TextPrimary>
							</OptionButton>
						</a>
					</Link>
					<Link href="/profil/feedback">
						<a className="d-flex ">
							<OptionButton
								as="button"
								className="d-flex flex-md-row flex-column align-items-center shadow-sm"
							>
								<MdFeedback className="mr-0 mr-md-4" />
								<TextPrimary className="text-primary1">
									tulis masukkan
								</TextPrimary>
							</OptionButton>
						</a>
					</Link>

					<Link href="/profil/pengaturan">
						<a className="d-flex">
							<OptionButton
								as="button"
								className="d-flex flex-md-row flex-column align-items-center shadow-sm"
							>
								<MdSettings className="mr-0 mr-md-4" />
								<TextPrimary className="text-primary1">
									pengaturan umum
								</TextPrimary>
							</OptionButton>
						</a>
					</Link>
				</ButtonsContainer>
			</div>
		</Layout>
	);
};

export default withAuth(Profil);
