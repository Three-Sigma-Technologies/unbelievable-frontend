import { Card, ProgressBar } from "react-bootstrap";
import styled from "styled-components";
import { HeadingXXS } from "components/Typography/Headings";
import { TextTertiary } from "components/Typography/Text";

const CardBody = styled.div`
	display: flex;
	height: 40%;
	flex-direction: column;
	position: relative;
	padding: 20px 32px;
`;

const CardHeader = styled(HeadingXXS)`
	font-size: 14px;
	font-family: MontserratRegular;
`;

const StyledProgressBar = styled(ProgressBar)`
	border-radius: 16px;
	height: 12px;
	transition: 0.4s;
	.progress-bar {
		border-radius: 16px;
		background: #171b2d;
	}
`;

const StyledTextTertiary = styled(TextTertiary)`
	font-size: 12px;
`;
const StyledCard = styled(Card)`
	border-radius: 12px;
	box-shadow: 2px 1px 15px rgba(0, 0, 0, 0.1);
	width: ${(props) => (props.small ? `215px` : `308px`)};
	border: none;
	min-height: 480px;
	&:hover {
		cursor: pointer;
	}
`;
const ImageContainer = styled.div`
	background: ${(props) =>
		props.img ? `url(${props.img}) no-repeat` : `gray`};
	background-size: cover; /* <------ */
	background-position: center center; /* optional, center the image */
	height: 80%;
	border-radius: 12px;
	border-bottom-left-radius: 0;
	border-bottom-right-radius: 0;
`;

const TextDesc = styled(TextTertiary)`
	font-size: ${(props) => (props.small ? `12px` : `14px`)};
`;
export default function EnrolledCourseCard({
	title,
	img,
	creatorName,
	rating,
	small,
	user,
	totalProgress = 0,
	...props
}) {
	return (
		<StyledCard small={small} {...props} onClick={() => alert("Card clicked")}>
			<ImageContainer small={small} img={img} />

			<CardBody>
				<CardHeader as="p" className="mt-3">
					{title}
				</CardHeader>

				<StyledTextTertiary className="mt-2">{creatorName}</StyledTextTertiary>
				<StyledProgressBar className="mt-3 shadow-sm" now={totalProgress} />
				<div className="d-flex justify-content-between mt-2">
					<StyledTextTertiary>{totalProgress}% complete</StyledTextTertiary>
				</div>
				<div className="mt-auto d-flex justify-content-between align-items-center">
					<div className="d-flex"></div>
					<div className="d-flex"></div>
				</div>
			</CardBody>
		</StyledCard>
	);
}